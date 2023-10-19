import styled from 'styled-components'

import { GoToTopContainerProps } from './types'

export const GoToTopContainer = styled.button<GoToTopContainerProps>`
  position: fixed;

  opacity: ${({ isButtonVisible }) => (isButtonVisible ? 1 : 0)};

  bottom: 2rem;
  right: 2rem;

  background: ${({ theme }) => theme.colors.gray[700]};

  border-radius: 10px;
  border: none;

  padding: 1rem;

  cursor: pointer;

  transition: opacity 0.3s, background-color 0.3s;

  z-index: 90;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[600]};
  }
`
