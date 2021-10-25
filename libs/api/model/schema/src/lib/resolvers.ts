import { DateTimeResolver } from "graphql-scalars"

export default {
  Query: {
    allUsers: (_parent: unknown, _args: unknown, context: Context) => {
      return context.prisma.user.findMany()
    },
    postById: (_parent: unknown, args: { id: number }, context: Context) => {
      return context.prisma.post.findUnique({
        where: { id: args.id || undefined }
      })
    },
    feed: (
      _parent: unknown,
      args: {
        searchString: string
        skip: number
        take: number
        orderBy: PostOrderByUpdatedAtInput
      },
      context: Context
    ) => {
      const or = args.searchString
        ? {
            OR: [{ title: { contains: args.searchString } }, { content: { contains: args.searchString } }]
          }
        : {}

      return context.prisma.post.findMany({
        where: {
          published: true,
          ...or
        },
        take: args?.take,
        skip: args?.skip,
        orderBy: args?.orderBy
      })
    },
    draftsByUser: (_parent: unknown, args: { userUniqueInput: UserUniqueInput }, context: Context) => {
      return context.prisma.user
        .findUnique({
          where: {
            id: args.userUniqueInput.id || undefined,
            email: args.userUniqueInput.email || undefined
          }
        })
        .posts({
          where: {
            published: false
          }
        })
    }
  },
  Mutation: {
    signupUser: (_parent: unknown, args: { data: UserCreateInput }, context: Context) => {
      const postData = args.data.posts?.map((post) => {
        return { title: post.title, content: post.content || undefined }
      })

      return context.prisma.user.create({
        data: {
          name: args.data.name,
          email: args.data.email,
          posts: {
            create: postData
          }
        }
      })
    },
    createDraft: (_parent: unknown, args: { data: PostCreateInput; authorEmail: string }, context: Context) => {
      return context.prisma.post.create({
        data: {
          title: args.data.title,
          content: args.data.content,
          author: {
            connect: { email: args.authorEmail }
          }
        }
      })
    },
    togglePublishPost: async (_parent: unknown, args: { id: number }, context: Context) => {
      try {
        const post = await context.prisma.post.findUnique({
          where: { id: args.id || undefined },
          select: {
            published: true
          }
        })

        return context.prisma.post.update({
          where: { id: args.id || undefined },
          data: { published: !post?.published }
        })
      } catch (error) {
        throw new Error(`Post with ID ${args.id} does not exist in the database.`)
      }
    },
    incrementPostViewCount: (_parent: unknown, args: { id: number }, context: Context) => {
      return context.prisma.post.update({
        where: { id: args.id || undefined },
        data: {
          viewCount: {
            increment: 1
          }
        }
      })
    },
    deletePost: (_parent: unknown, args: { id: number }, context: Context) => {
      return context.prisma.post.delete({
        where: { id: args.id }
      })
    }
  },
  DateTime: DateTimeResolver,
  Post: {
    author: (parent: { id?: number }, _args: unknown, context: Context) => {
      return context.prisma.post
        .findUnique({
          where: { id: parent?.id }
        })
        .author()
    }
  },
  User: {
    posts: (parent: { id?: number }, _args: unknown, context: Context) => {
      return context.prisma.user
        .findUnique({
          where: { id: parent?.id }
        })
        .posts()
    }
  }
}
