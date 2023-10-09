// @ts-nocheck

import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

const db = new PrismaClient();
/** @type {import('./$types').PageServerLoad} */
export async function load({body}) {
  try {
    // Create a new post using Prisma's post.create
    const newPost = await db.post.create({
      data: {
   body
      },
    });

    if (newPost) {
      return {
        body: {
          post: newPost,
        },
      };
    } else {
      throw error(500, "Failed to create a new post");
    }
  } catch (error) {
    console.error("Error creating post:", error);
    throw error(500, "Internal server error");
  }
}
