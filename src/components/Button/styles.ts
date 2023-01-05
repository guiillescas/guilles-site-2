import { darken } from 'polished'

import styled, { css } from 'styled-components'

import { ButtonSizesEnum, ButtonVariantsEnum, IContainerProps } from './types'

export const Container = styled.button<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ full }) => (full ? '100%' : 'fit-content')};

  border: 1px solid;
  border-radius: ${({ rounded }) => (rounded ? '40px' : '4px')};

  transition: background-color 0.2s, border-color 0.2s;

  &:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
  }

  ${({ size }) =>
    size === ButtonSizesEnum.Small &&
    css`
      font-size: 0.85rem;

      height: 33px;
      padding: 0 1rem;
    `}
  ${({ size }) =>
    size === ButtonSizesEnum.Medium &&
    css`
      font-size: 1rem;

      height: 44px;
      padding: 0 1rem;
    `}
  ${({ size }) =>
    size === ButtonSizesEnum.Large &&
    css`
      font-size: 1.25rem;

      height: 55px;
      padding: 0 1rem;
    `}

  ${({ variant }) =>
    variant === ButtonVariantsEnum.Primary &&
    css`
      background: ${({ theme }) => theme.colors.sky[500]};
      border-color: ${({ theme }) => theme.colors.sky[500]};
      color: ${({ theme }) => theme.colors.neutral[200]};

      &:not(:disabled):hover {
        background: ${({ theme }) => darken(0.1, theme.colors.sky[500])};
        border-color: ${({ theme }) => darken(0.1, theme.colors.sky[500])};
      }
    `}
  ${({ variant }) =>
    variant === ButtonVariantsEnum.Secondary &&
    css`
      background: transparent;
      border-color: ${({ theme }) => theme.colors.gray[400]};

      &:not(:disabled):hover {
        background: ${({ theme }) => theme.colors.gray[300]};
        border-color: ${({ theme }) => theme.colors.gray[300]};
      }
    `}
  ${({ variant }) =>
    variant === ButtonVariantsEnum.Success &&
    css`
      background: ${({ theme }) => theme.colors.green[500]};
      border-color: ${({ theme }) => theme.colors.green[500]};
      color: ${({ theme }) => theme.colors.neutral[200]};

      &:not(:disabled):hover {
        background: ${({ theme }) => darken(0.1, theme.colors.green[500])};
        border-color: ${({ theme }) => darken(0.1, theme.colors.green[500])};
      }
    `}
  ${({ variant }) =>
    variant === ButtonVariantsEnum.Danger &&
    css`
      background: ${({ theme }) => theme.colors.red[600]};
      border-color: ${({ theme }) => theme.colors.red[600]};
      color: ${({ theme }) => theme.colors.neutral[200]};

      &:not(:disabled):hover {
        background: ${({ theme }) => darken(0.1, theme.colors.red[600])};
        border-color: ${({ theme }) => darken(0.1, theme.colors.red[600])};
      }
    `}

  .left-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 0.5rem;
  }
  .right-icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 0.5rem;
  }
`
