import { PostApiResponseProps } from 'interfaces/post'

export interface BlogProps {
  posts: PostApiResponseProps[]
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
