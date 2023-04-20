import { gql } from '@apollo/client'

export const GET_POSTS_SLUGS = gql`
  query {
    posts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`

export const GET_POSTS = gql`
  query {
    posts {
      data {
        attributes {
          title
          description
          urlSlug
          createdAt
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_POST = gql`
  query ($slugUrl: String!) {
    posts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          description
          content
          createdAt
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_BY_NAME_LIKE = gql`
  query {
    posts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`
