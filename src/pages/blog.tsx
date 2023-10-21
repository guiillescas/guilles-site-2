import { useState } from 'react'
import { useEffect } from 'react'
import { GetStaticProps } from 'next'

import { useForm } from 'react-hook-form'
import { GET_POSTS } from 'graphql/post'
import { ApolloClient, InMemoryCache } from '@apollo/client'

import { AppLayout } from 'layouts/AppLayout'

import SEO from 'components/SEO'
import { PostCard } from 'components/PostCard'
import { Footer } from 'components/Footer'
import { ButtonSizesEnum, ButtonVariantsEnum } from 'components/Button/types'
import { Button } from 'components/Button'

import { BlogProps, IFormProps } from 'interfaces/pages/blog'

import * as Styles from 'styles/pages/blog'
import { secondary, primary } from 'styles/fonts'

function Blog(props: BlogProps) {
  const [isSearchActive, setIsSearchActive] = useState(false)

  const {
    register,
    watch,
    resetField,
    formState: { errors }
  } = useForm<IFormProps>()

  useEffect(() => {
    if (watch('search')?.length > 0) {
      setIsSearchActive(true)
    } else {
      setIsSearchActive(false)
    }
  }, [watch('search')])

  const featuredPost = props.posts[0]

  const postsTitles = props.posts.map(post => {
    return post.attributes.title
  })

  const suggestedPosts =
    watch('search')?.length > 0
      ? postsTitles.filter(
          title =>
            title.toLowerCase().indexOf(watch('search').toLocaleLowerCase()) >
            -1
        )
      : []

  return (
    <AppLayout>
      <Styles.BlogContainer
        formError={!!errors.search?.message}
        activeSearch={suggestedPosts.length > 0}
      >
        <SEO title="Blog" />

        <div className="background one" />
        <div className="background two" />
        <div className="background three" />
        <div className="background four" />

        <section id="presentation">
          <div>
            <h2 className={secondary.className}>Learn things quickly</h2>
            <p>Find short posts with compressed and good content.</p>
          </div>

          <div className="form-wrapper">
            <div className="form">
              <input
                autoComplete="off"
                type="text"
                placeholder="Search for something..."
                list="suggestions"
                {...register('search')}
              />
              <datalist id="suggestions" role="listbox">
                {suggestedPosts.map(suggestedPost => (
                  <option key={suggestedPost} value={suggestedPost}>
                    {suggestedPost}
                  </option>
                ))}
              </datalist>

              {watch('search')?.length > 0 && (
                <Button
                  variant={ButtonVariantsEnum.Secondary}
                  size={ButtonSizesEnum.Small}
                  type="button"
                  onClick={() => resetField('search')}
                >
                  Clear
                </Button>
              )}
            </div>

            <span>{errors.search && errors.search.message}</span>
          </div>
        </section>

        {isSearchActive ? (
          <section id="search">
            <h2 className={secondary.className}>
              Posts for:{' '}
              <span className={primary.className}>{watch('search')}</span>
            </h2>

            <div className="posts-wrapper">
              {props.posts
                .filter(post =>
                  post.attributes.title.toLowerCase().includes(watch('search'))
                )
                .map(post => {
                  return (
                    <PostCard
                      key={post.attributes.urlSlug}
                      imageSrc={post.attributes.imagePath}
                      description={post.attributes.description}
                      title={post.attributes.title}
                      postedAt={new Date(post.attributes.createdAt)}
                      urlSlug={post.attributes.urlSlug}
                    />
                  )
                })}
            </div>
          </section>
        ) : (
          <section id="posts">
            <h2 className={secondary.className}>Featured 🔥</h2>

            <div className="featured-post">
              <PostCard
                imageSrc={featuredPost.attributes.imagePath}
                description={featuredPost.attributes.description}
                title={featuredPost.attributes.title}
                postedAt={new Date(featuredPost.attributes.createdAt)}
                urlSlug={featuredPost.attributes.urlSlug}
                featured
              />
            </div>

            <h2 className={secondary.className}>Recent posts &#8987;</h2>

            <div className="posts-wrapper">
              {props.posts.map((post, index) => {
                if (index > 0) {
                  return (
                    <PostCard
                      key={post.attributes.urlSlug}
                      imageSrc={post.attributes.imagePath}
                      description={post.attributes.description}
                      title={post.attributes.title}
                      postedAt={new Date(post.attributes.createdAt)}
                      urlSlug={post.attributes.urlSlug}
                      featured={index === 0}
                    />
                  )
                }
              })}
            </div>
          </section>
        )}

        <Footer />
      </Styles.BlogContainer>
    </AppLayout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPI_URL,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: GET_POSTS
  })

  return {
    props: {
      posts: data.posts.data
    }
  }
}
