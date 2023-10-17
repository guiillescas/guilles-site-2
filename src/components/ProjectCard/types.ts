export interface ProjectProps {
  id: number
  title: string
  description: string
  imageSrc: string
  link: string
}

export interface ProjectCardProps {
  project: ProjectProps
  isInverted: boolean
}

export interface ProjectCardContainerProps {
  isInverted: boolean
}
