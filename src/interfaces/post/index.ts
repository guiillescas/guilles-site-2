export interface PostProps {
  createdAt: string
  description: string
  title: string
  urlSlug: string
  imagePath: string
  cover: {
    data: {
      attributes: { url: string }
    }
  }
}

export interface PostApiResponseProps {
  id: number
  attributes: PostProps
}
