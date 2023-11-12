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

    // TODO PAGINATION
    // const lastPostInResults = posts[1];
    // const myCursor = lastPostInResults.id;

    return {
      posts,
      categories,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      posts: [],
      categories: [],
    };
  }
};
