import { ReactElement } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import { FiExternalLink } from 'react-icons/fi'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { ProjectPageProps } from 'interfaces/pages/project'
import { GET_PROJECT, GET_PROJECTS_SLUGS } from 'graphql/projects'

import { AppLayout } from 'layouts/AppLayout'

import { WriterPostTitle } from 'components/WriterPostTitle'
import { Footer } from 'components/Footer'
import { ButtonSizesEnum } from 'components/Button/types'
import { Button } from 'components/Button'

import { apolloClient } from 'services/apolloClient'

import * as Styles from 'styles/Pages/project'
import { secondary } from 'styles/fonts'

function Project({ project }: ProjectPageProps): ReactElement {
  function handleOpenProject() {
    window.open(project.name, '_blank')
  }

  return (
    <AppLayout>
      <Styles.ProjectContainer>
        <Head>
          <link href="themes/prism-vsc-dark-plus.css" rel="stylesheet" />
        </Head>

        <section>
          <WriterPostTitle
            author="Guilherme Illescas"
            imageSrc="/assets/me.jpeg"
            publishedAt={new Date(project.createdAt)}
          />

          <div className="cover">
            <Image
              src={`http://localhost:1337${project.cover}`}
              alt={`Imagem do projeto ${project.name}`}
              fill
            />
          </div>

          <div className="post-header">
            <h1 className={`${secondary.className} project-title`}>
              {project.name}
            </h1>

            <Button
              size={ButtonSizesEnum.Small}
              rightIcon={<FiExternalLink fontWeight={500} />}
              onClick={handleOpenProject}
            >
              Open project
            </Button>
          </div>

          <MDXRemote {...project.content} />
        </section>

        <Footer />

        <Script src="prism.js" />
      </Styles.ProjectContainer>
    </AppLayout>
  )
}

export default Project

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({ query: GET_PROJECTS_SLUGS })

  const paths = data.projects.data.map((post: any) => {
    return { params: { slug: post.attributes.urlSlug } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: GET_PROJECT,
    variables: {
      slugUrl: params ? params.slug : ''
    }
  })

  const attrs = data.projects.data[0].attributes

  const html = await serialize(attrs.content, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism]
    }
  })

  return {
    props: {
      project: {
        name: attrs.name,
        createdAt: attrs.createdAt,
        content: html,
        cover: attrs.cover.data.attributes.url
      }
    }
  }
}
