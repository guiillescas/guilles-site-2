import styled, { css } from 'styled-components'

import { PostCardContainerProps } from './types'

export const PostCardContainer = styled.div<PostCardContainerProps>`
  width: 100%;

  border-radius: 8px;

  display: flex;
  flex-direction: column;

  ${({ featured }) => {
    if (featured) {
      return css`
        flex-direction: row;
        gap: 1rem;

        > img {
          width: 50% !important;
          max-height: 300px !important;
        }

        > div {
          display: flex;
          justify-content: space-between;

          h3 {
            margin-top: 0;
          }
        }
      `
    }
  }}

  &:hover {
    cursor: pointer;

    img {
      transform: translateY(-4px);
    }

    h3 {
      text-decoration: underline;
    }
  }

  > img {
    position: relative !important;

    height: 100%;
    max-height: 250px;

    object-fit: cover;

    border-radius: 16px;

    transition: transform 0.1s;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    flex: 1;

    div {
      display: flex;
      flex-direction: column;

      h3 {
        font-size: 1.5rem;
        font-weight: 500;

        margin: 0.75rem 0;
      }

      p {
        flex: 1;
        height: 100%;
      }
    }

    .post-date {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;

      margin-top: 0.75rem;

      span {
        font-size: 0.75rem;
      }
    }
  }
`
