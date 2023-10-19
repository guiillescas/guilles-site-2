import { ReactElement } from 'react'
import Image from 'next/image'

import { RiLinkedinBoxFill, RiTwitterFill, RiGithubFill } from 'react-icons/ri'
import { format } from 'date-fns'

import { WriterPostTitleProps } from './types'

import * as Styles from './styles'

export function WriterPostTitle(props: WriterPostTitleProps): ReactElement {
  return (
    <Styles.WriterPostTitleContainer>
      <div>
        <Image
          src={props.imageSrc}
          alt={`Foto de ${props.author}`}
          width={48}
          height={48}
          className="author-image"
        />

        <div className="post-info-wrapper">
          <h5>{props.author}</h5>
          <span>
            <time
              title={format(props.publishedAt, 'LLLL do, yyyy')}
              dateTime={`${props.publishedAt}`}
            >
              {format(props.publishedAt, 'MMM d, yyyy')}
            </time>
          </span>
        </div>
      </div>

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
        <a href="https://github.com/Guillescas" target="_blank" title="GitHub">
          <RiGithubFill size={26} />
        </a>
      </div>
    </Styles.WriterPostTitleContainer>
  )
}
