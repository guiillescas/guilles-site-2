import { PostProps } from 'interfaces/post'

export interface BlogProps {
  posts: PostProps[]
}

export interface BlogContainerProps {
  formError: boolean
  activeSearch: boolean
}

export interface IFormProps {
  search: string
}

export interface SearchButtonProps {
  activeSearch: boolean
}
