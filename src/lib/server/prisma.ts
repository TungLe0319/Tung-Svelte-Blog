import { PrismaClient } from "@prisma/client";


export const prisma = new PrismaClient()
// const prisma = global.prisma || new PrismaClient

// if (process.env.NODE_ENV === 'development') {
//   global.prisma = prisma
// }


// export  {prisma}