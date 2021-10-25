interface UserCreateInput {
  email: string
  name?: string
  posts?: PostCreateInput[]
}
