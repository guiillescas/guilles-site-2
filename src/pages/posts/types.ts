import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface PostPageProps {
  post: {
    title: string
    cover: string
    createdAt: string
    content: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    >
  }
}

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
