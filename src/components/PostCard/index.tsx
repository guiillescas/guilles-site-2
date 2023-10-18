import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { format } from 'date-fns'

import { PostCardProps } from './types'

import * as Styles from './styles'

export function PostCard(props: PostCardProps): ReactElement {
  const router = useRouter()

  function redirectToPostPage() {
    router.push(`/posts/${props.urlSlug}`)
  }

  const createdAt = props.postedAt

  return (
    <Styles.PostCardContainer
      role="button"
      onClick={redirectToPostPage}
      featured={!!props.featured}
    >
      <Image
        src={props.imageSrc}
        alt={`Imagem do post sobre ${props.title}`}
        fill
      />

      <div>
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>

        <div className="post-date">
          <span>
            Posted at{' '}
            <time
              title={format(new Date(createdAt), 'LLLL do, yyyy')}
              dateTime={`${new Date(createdAt)}`}
            >
              {format(new Date(createdAt), 'MMM d, yyyy')}
            </time>{' '}
            by <strong style={{ fontWeight: 500 }}>Guilherme Illescas</strong>
          </span>
        </div>
      </div>
    </Styles.PostCardContainer>
  )
}
