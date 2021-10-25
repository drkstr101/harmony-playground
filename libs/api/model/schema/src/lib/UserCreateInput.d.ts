import { PostCreateInput } from "./PostCreateInput"
export interface UserCreateInput {
  email: string
  name?: string
  posts?: PostCreateInput[]
}
