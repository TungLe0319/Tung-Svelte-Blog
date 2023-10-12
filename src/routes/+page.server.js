// @ts-nocheck

import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

const db = new PrismaClient();
/** @type {import('./$types').PageServerLoad} */
export async function load() {

  try {
    const posts = await db.post.findMany({
      include: {
        author: true, 
        categories:true,
        likes: true,
        comments:true,
      },
    });

    if (posts) {
    
        return {
          body: {
            posts,
          },
        };
    } else {
      throw error(404, "Post not found");
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error(500, "Internal server error");
  }
}
