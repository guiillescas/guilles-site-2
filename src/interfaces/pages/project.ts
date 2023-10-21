import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface ProjectPageProps {
  project: {
    name: string
    cover: string
    createdAt: string
    content: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    >
  }
}
