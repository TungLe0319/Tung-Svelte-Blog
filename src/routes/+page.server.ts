import { error } from "@sveltejs/kit";
import { prisma } from "$lib/server/prisma";
import type {PageServerLoad} from './$types'
export const load:PageServerLoad =async() => {
  try {
    
    const posts = await prisma.post.findMany({
    
      include: {
        author: true,
        categories: true,
        likes: true,
        comments: true,
      },
    });
    const categories = await prisma.category.findMany();

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
