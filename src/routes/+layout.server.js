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

const sessionData = await event.locals.getSession()

  return {
    
    posts,
    session: sessionData,
    pathname: url.pathname,
  };
};

