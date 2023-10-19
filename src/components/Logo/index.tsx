import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import { LogoProps } from './types'

import { secondary } from 'styles/fonts'
import * as Styles from './styles'

export function Logo(props: LogoProps): ReactElement {
  const router = useRouter()

  function handleClick() {
    if (props.href) {
      router.push(props.href)
    }
  }

  return (
    <Styles.LogoContainer
      onClick={handleClick}
      animate={props.animate}
      disabled={!props.href}
      width={props.width}
      height={props.width}
      fontSizeRem={props.fontSizeRem}
    >
      <span className={secondary.className}>G</span>

      <div className="box one" />
      {props.animate && <div className="box two" />}
    </Styles.LogoContainer>
  )
}
