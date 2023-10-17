import { gql } from '@apollo/client'

export const GET_PROJECTS_SLUGS = gql`
  query {
    projects {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`

export const GET_PROJECTS = gql`
  query {
    projects {
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

export const GET_PROJECT = gql`
  query ($slugUrl: String!) {
    projects(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          name
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
    projects {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`
