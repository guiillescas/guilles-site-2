export interface PostProps {
  attributes: {
    createdAt: string
    description: string
    title: string
    urlSlug: string
    cover: {
      data: {
        attributes: { url: string }
      }
    }
  }
}
