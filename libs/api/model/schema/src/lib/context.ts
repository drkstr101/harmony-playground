import { PrismaClient } from "@prisma/client"
import { Context } from "./Context"

const prisma = new PrismaClient()

export const context: Context = {
  prisma: prisma
}
