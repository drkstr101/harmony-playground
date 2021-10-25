import { PrismaClient } from "@prisma/client"

export interface Context {
  prisma: PrismaClient
}

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}

export interface PostCreateInput {
  title: string
  content?: string
}

export interface PostOrderByUpdatedAtInput {
  updatedAt: SortOrder
}

export interface UserCreateInput {
  email: string
  name?: string
  posts?: PostCreateInput[]
}

export interface UserUniqueInput {
  id?: number
  email?: string
}
