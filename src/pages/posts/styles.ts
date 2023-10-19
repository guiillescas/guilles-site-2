import styled from 'styled-components'

export const PostContainer = styled.main`
  section {
    position: relative;
    width: 100%;
    max-width: 672px;

    margin: 2.5rem auto 3rem;
    padding: 0 1rem;

    .cover {
      position: relative;
      width: 100%;
      max-width: 1200px;
      height: 300px;
      max-height: 300px;

      margin: 3rem 0 1.5rem;

      img {
        height: 300px;
        max-height: 300px;

        object-fit: cover;

        border-radius: 8px;
      }
    }

    .post-title {
      font-size: 2.5rem;
      line-height: 100%;

      margin: 3rem 0 1rem;
    }

    p {
      margin: 0.75rem 0;
      line-height: 140%;

      code {
        color: ${({ theme }) => theme.colors.neutral[800]};
      }
    }

    h1 {
      margin-top: 1.75rem;
    }

    hr {
      margin: 1.25rem 0;
    }

    code {
      background: ${({ theme }) => theme.colors.neutral[100]};
      padding: 2px 4px;
      font-weight: bold;
      border-radius: 4px;
    }

    pre {
      code {
        background: transparent;
        padding: 0;
        font-weight: normal;
      }
    }
  }
`
