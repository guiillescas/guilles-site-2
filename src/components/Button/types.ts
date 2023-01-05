import { ButtonHTMLAttributes, ReactNode } from 'react'

export enum ButtonSizesEnum {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg'
}

export enum ButtonVariantsEnum {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantsEnum
  leftIcon?: JSX.Element
  rightIcon?: ReactNode
  full?: boolean
  rounded?: boolean
  size?: ButtonSizesEnum
  children: ReactNode
  isLoading?: boolean
}

export interface IContainerProps {
  rounded?: boolean
  full?: boolean
  size: ButtonSizesEnum
  variant: ButtonVariantsEnum
}
