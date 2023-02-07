import { ReactElement } from 'react'

import { Baloo_2 } from '@next/font/google'

import { LogoProps } from './types'

import * as Styles from './styles'

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500']
})

export function Logo(props: LogoProps): ReactElement {
  return (
    <Styles.LogoContainer href="/" animate={props.animate}>
      <span className={baloo2.className}>G</span>
    </Styles.LogoContainer>
  )
}
