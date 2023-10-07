// @ts-nocheck

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient()
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  return {
    post: await db.post.findFirst({
      where: {
        id: '1'
      }
    }),
    if (post) {
      return post

    }
  };
}
