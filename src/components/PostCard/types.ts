export interface PostCardProps {
  imageSrc: string
  postedAt: Date
  title: string
  description: string
  urlSlug: string
  featured?: boolean
}

export interface PostCardContainerProps {
  featured: boolean
}
