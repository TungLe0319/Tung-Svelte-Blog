// // @ts-nocheck

import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

const db = new PrismaClient();

/** @type {import('./$types').LayoutServerLoad} */
export const load = async (event) => {
  const { url } = event;
     const posts = await db.post.findMany({
       include: {
         author: true,
         categories: true,
         likes: true,
         comments: true,
       },
     });
  return {
    posts,
    session: await event.locals.getSession(),
    pathname: url.pathname,
  };
};

// /** @type {import('./$types').LayoutServerLoad} */
// export const _posts = async (event) => {
//   try {
//     const posts = await db.post.findMany({
//       include: {
//         author: true,
//         categories: true,
//         likes: true,
//         comments: true,
//       },
//     });

//     if (posts) {
//       return {
//         body: {
//           posts,
//         },
//       };
//     } else {
//       throw error(404, "Post not found");
//     }
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     throw error(500, "Internal server error");
//   }
// };

// @ts-nocheck

// import { PrismaClient } from "@prisma/client";
// import { error } from "@sveltejs/kit";

// const db = new PrismaClient();

// /** @type {import('./$types').ServerLoad} */
// export const load = async (event) => {
//   try {
//     const { url } = event;
//     const session = await event.locals.getSession();

//     const posts = await db.post.findMany({
//       select: {
//         id: true,
//         title: true,
//       },
//     });

//     if (posts) {
//       return {
//         session: await event.locals.getSession(),
//         pathname: url.pathname,
//         body: {
//           posts,
//         },
//       };
//     } else {
//       throw error(404, "Post not found");
//     }
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     throw error(500, "Internal server error");
//   }
// };
