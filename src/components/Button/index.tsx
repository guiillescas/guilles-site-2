import { ReactElement } from 'react'

import { Loading } from 'components/Loading'

import { ButtonSizesEnum, ButtonVariantsEnum, IButtonProps } from './types'

import * as Styles from './styles'

export function Button(props: IButtonProps): ReactElement {
  const {
    variant = ButtonVariantsEnum.Primary,
    size = ButtonSizesEnum.Medium
  } = props

  return (
    <Styles.Container
      type="button"
      rounded={props.rounded}
      size={size}
      variant={variant}
      {...props}
    >
      {props.leftIcon && (
        <div className="left-icon-wrapper">{props.leftIcon}</div>
      )}

      {props.isLoading ? <Loading width={24} height={24} /> : props.children}

      {props.rightIcon && (
        <div className="right-icon-wrapper">{props.rightIcon}</div>
      )}
    </Styles.Container>
  )
}
