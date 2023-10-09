// // src/routes/posts.js

// import { PrismaClient } from "@prisma/client";

// export async function get() {
//   const prisma = new PrismaClient();
//   try {
//     const posts = await prisma.post.findMany();
//     return {
//       body: posts,
//     };
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     return {
//       status: 500,
//       body: { error: "Unable to fetch posts" },
//     };
//   } finally {
//     await prisma.$disconnect();
//   }
// }


// export { get as handler };