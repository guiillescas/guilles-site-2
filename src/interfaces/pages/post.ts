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
