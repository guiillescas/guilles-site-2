import { ReactElement } from 'react'
import Image from 'next/image'

import { ProjectCardProps } from './types'

import * as Styles from './styles'

export function ProjectCard(props: ProjectCardProps): ReactElement {
  return (
    <Styles.ProjectCardContainer
      href={props.project.link}
      inverted={props.inverted}
      target="_blank"
    >
      <div className="image-wrapper">
        <Image
          src={props.project.imageSrc}
          alt={`Imagem do projeto ${props.project.title}`}
          width={450}
          height={600}
        />
      </div>

      <div className="card-content-wrapper">
        <p>{props.project.title}</p>
        <span>{props.project.description}</span>
      </div>
    </Styles.ProjectCardContainer>
  )
}
