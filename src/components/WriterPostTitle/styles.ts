import styled from 'styled-components'

export const WriterPostTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  > div {
    display: flex;
    align-items: center;

    .author-image {
      border-radius: 50%;
      object-fit: cover;
    }

    .post-info-wrapper {
      margin-left: 0.5rem;

      h5 {
        font-size: 1rem;
        font-weight: 500;

        margin-bottom: -0.25rem;
      }

      span {
        font-size: 0.75rem;
      }
    }
  }

  .logos-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${({ theme }) => theme.colors.neutral[100]};
      padding: 0.25rem;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }
`
