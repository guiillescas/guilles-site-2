import { gql } from '@apollo/client'

export const GET_EXPERIENCES = gql`
  query {
    experiences {
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
