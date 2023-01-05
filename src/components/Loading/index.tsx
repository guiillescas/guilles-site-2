import { ILoadingProps } from './types'

import * as Styles from './styles'

export function Loading(props: ILoadingProps) {
  return (
    <Styles.Container
      width={props.width}
      height={props.height}
      color={props.color}
    >
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
    </Styles.Container>
  )
}
