export interface ProjectProps {
  id: number
  title: string
  description: string
  imageSrc: string
  link: string
}

export interface ProjectCardProps {
  project: ProjectProps
  inverted: boolean
}

export interface ProjectCardContainerProps {
  inverted: boolean
}
