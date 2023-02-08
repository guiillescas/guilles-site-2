import styled from 'styled-components'

import { LogoProps } from './types'

export const LogoContainer = styled.button<LogoProps>`
  position: relative;

  width: ${({ width }) => (width ? width : 36)}px;
  height: ${({ height }) => (height ? height : 36)}px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;

  border: none;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.neutral[100]};

  transition: all 0.2s;

  &:hover:not(:disabled) {
    cursor: pointer;
    opacity: 0.8;
  }

  span {
    font-size: ${({ fontSizeRem }) => (fontSizeRem ? fontSizeRem : 2.25)}rem;
    line-height: 100%;
    font-weight: bold;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }

  @keyframes box-animation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes box-animation-reverse {
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(-315deg);
    }
  }

  .box {
    position: absolute;

    width: ${({ width }) => (width ? width : 36)}px;
    height: ${({ height }) => (height ? height : 36)}px;

    border: 1px solid;
    border-radius: 4px;

    background: transparent;

    &.one {
      border-color: ${({ theme }) => theme.colors.neutral[200]};

      animation: ${({ animate }) =>
        animate ? 'box-animation 2s infinite ease' : ''};
    }
    &.two {
      transform: rotate(45deg);

      border-color: ${({ theme }) => theme.colors.sky[500]};

      animation: box-animation-reverse 2s infinite ease;
    }
  }
`
