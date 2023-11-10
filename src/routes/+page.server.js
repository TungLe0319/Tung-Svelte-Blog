// @ts-nocheck

import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";
import { db } from "$lib/utils/useDb";
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    
    const posts = await db.post.findMany({
    
      include: {
        author: true,
        categories: true,
        likes: true,
        comments: true,
      },
    });
    const categories = await db.category.findMany();

    const lastPostInResults = posts[1]; // Remember: zero-based index! :)
    const myCursor = lastPostInResults.id; // Example: 29

    if (posts) {
      return {
        body: {
          lastPostInResults,
          myCursor,
          posts,
          categories,
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
