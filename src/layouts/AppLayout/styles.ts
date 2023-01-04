import styled from 'styled-components'

export const AppLayoutContainer = styled.div`
  background: ${({ theme }) => theme.colors.neutral[800]};

  .content {
    width: 100%;
    max-width: 1200px;

    padding: 0 1rem;
    margin: 0 auto;

    z-index: 2;
  }
`
