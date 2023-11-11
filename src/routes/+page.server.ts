import { error, fail } from "@sveltejs/kit";
import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";
export const load: PageServerLoad = async () => {
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

    return {
      lastPostInResults,
      myCursor,
      posts,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      posts: [],
      categories: [],
    };
  }
};
