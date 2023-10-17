import { ReactElement } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { PostPageProps } from 'interfaces/pages/post'
import { GET_POSTS_SLUGS, GET_POST } from 'graphql/post'

import { AppLayout } from 'layouts/AppLayout'

import { WriterPostTitle } from 'components/WriterPostTitle'
import { GoToTop } from 'components/GoToTop'
import { Footer } from 'components/Footer'

import { apolloClient } from 'services/apolloClient'

import * as Styles from 'styles/pages/post'
import { secondary } from 'styles/fonts'

function Post({ post }: PostPageProps): ReactElement {
  return (
    <AppLayout>
      <Styles.PostContainer>
        <Head>
          <link href="themes/prism-vsc-dark-plus.css" rel="stylesheet" />
        </Head>

        <section>
          <WriterPostTitle
            author="Guilherme Illescas"
            imageSrc="/assets/me.jpeg"
            publishedAt={new Date(post.createdAt)}
          />

          <div className="cover">
            <Image src={`http://localhost:1337${post.cover}`} alt="" fill />
          </div>

          <h1 className={`${secondary.className} post-title`}>{post.title}</h1>

          <MDXRemote {...post.content} />
        </section>

        <Footer />

        <Script src="prism.js" />

        <GoToTop />
      </Styles.PostContainer>
    </AppLayout>
  )
}

export default Post

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({ query: GET_POSTS_SLUGS })

  const paths = data.posts.data.map((post: any) => {
    return { params: { slug: post.attributes.urlSlug } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: GET_POST,
    variables: {
      slugUrl: params ? params.slug : ''
    }
  })

  const attrs = data.posts.data[0].attributes

  const html = await serialize(attrs.content, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism]
    }
  })

  return {
    props: {
      post: {
        title: attrs.title,
        createdAt: attrs.createdAt,
        content: html,
        cover: attrs.cover.data.attributes.url
      }
    }
  }
}
