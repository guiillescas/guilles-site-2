import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 200px;

  width: 100%;
  max-width: 1200px;
  overflow-y: hidden;

  margin: 0 auto;

  div:nth-child(1) {
    > a {
      text-decoration: none;

      h1 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.neutral[900]} !important;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    > p {
      margin-top: 0.5rem;
    }

    .logos-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      gap: 0.5rem;

      margin-top: 0.5rem;

      a {
        color: ${({ theme }) => theme.colors.neutral[900]};
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }
    }
  }
`
