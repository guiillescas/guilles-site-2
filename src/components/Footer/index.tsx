import { ReactElement } from 'react'
import Link from 'next/link'

import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill
} from 'react-icons/ri'

import * as Styles from './styles'

export function Footer(): ReactElement {
  return (
    <Styles.FooterContainer>
      <div>
        <p>
          Created and designed by <strong>Guilherme Illescas</strong>
        </p>

        <div className="logos-wrapper">
          <Link
            href="https://www.linkedin.com/in/guilherme-illescas/"
            target="_blank"
            title="Linkedin"
          >
            <RiLinkedinBoxFill size={26} />
          </Link>
          <Link
            href="https://twitter.com/guiillescas"
            target="_blank"
            title="Twitter"
          >
            <RiTwitterFill size={26} />
          </Link>
          <Link
            href="https://github.com/guiillescas"
            target="_blank"
            title="GitHub"
          >
            <RiGithubFill size={26} />
          </Link>
          <Link
            href="https://www.instagram.com/gui.illescas/"
            target="_blank"
            title="GitHub"
          >
            <RiInstagramFill size={26} />
          </Link>
        </div>
      </div>
    </Styles.FooterContainer>
  )
}
