// @ts-nocheck

import { PrismaClient } from "@prisma/client";

import { error } from "@sveltejs/kit";

const db = new PrismaClient();

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
  try {
     const postId = parseInt(params.slug,10);
    const post = await db.post.findFirstOrThrow({
      where: {
        id:  postId
      },
    });

    if (post) {
      return {
      post
      };
    } else {
      throw error(404, "Post not found");
    }
  } catch (error) {
    // console.error("Error fetching post:", error);
    // throw error(500, "Internal server error");
  }
}
