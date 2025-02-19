import { ReactElement } from 'react'
import Link from 'next/link'

import { Logo } from 'components/Logo'

import * as Styles from './styles'

export function Header(): ReactElement {
  return (
    <Styles.HeaderContainer>
      <Logo href="/" />

      <nav>
        <Link href="/">Home</Link>
        {/* <Link href="/blog">Blog</Link> */}
        <Link href="/#experience">Experience</Link>
        <Link href="/#about">About</Link>
      </nav>
    </Styles.HeaderContainer>
  )
}
