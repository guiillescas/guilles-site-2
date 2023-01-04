import { ReactElement } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import * as Styles from './styles'

export function Header(): ReactElement {
  return (
    <Styles.HeaderContainer>
      <Image
        src="/logo-p.png"
        alt="Website logo. It's a letter G in a square"
        width={500}
        height={500}
      />

      <nav>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
      </nav>
    </Styles.HeaderContainer>
  )
}
