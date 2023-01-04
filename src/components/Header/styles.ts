import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1200px;

  padding: 1rem 0;

  z-index: 10;

  img {
    width: 40px;
    height: 40px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    a {
      color: ${({ theme }) => theme.colors.neutral[200]};
      text-decoration: none;

      padding: 0.75rem;

      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.neutral[400]};
      }
    }
  }
`
