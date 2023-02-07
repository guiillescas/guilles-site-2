import Link from 'next/link'

import styled from 'styled-components'

import { LogoProps } from './types'

export const LogoContainer = styled(Link)<LogoProps>`
  padding: 0 0.35rem;

  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 4px;

  padding-top: 2px;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral[100]};

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  a {
  }

  span {
    font-size: 2.25rem;
    line-height: 100%;
    font-weight: bold;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
`
