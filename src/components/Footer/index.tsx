import { ReactElement } from 'react'

import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from 'react-icons/ri'
import Link from 'next/link'

import * as Styles from './styles'

export function Footer(): ReactElement {
  return (
    <Styles.FooterContainer>
      <div>
        <Link href="/">
          <h1>blog.guilhermeillescas.dev</h1>
        </Link>

        <p>
          Created and designed by <strong>Guilherme Illescas</strong>
        </p>

        <div className="logos-wrapper">
          <a
            href="https://www.linkedin.com/in/guilherme-illescas/"
            target="_blank"
            title="Linkedin"
          >
            <RiLinkedinBoxFill size={26} />
          </a>
          <a
            href="https://twitter.com/guiillescas"
            target="_blank"
            title="Twitter"
          >
            <RiTwitterFill size={26} />
          </a>
          <a
            href="https://github.com/Guillescas"
            target="_blank"
            title="GitHub"
          >
            <RiGithubFill size={26} />
          </a>
        </div>
      </div>
    </Styles.FooterContainer>
  )
}
