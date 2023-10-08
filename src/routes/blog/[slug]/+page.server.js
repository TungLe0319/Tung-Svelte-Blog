// @ts-nocheck

import { PrismaClient } from "@prisma/client";
import { error,HandleFetch } from "@sveltejs/kit";

const db = new PrismaClient();

/** @type {import('./$types').PageServerLoad} */
export async function load({ params,query }) {
  try {
    const postId = parseInt(params.slug, 10);

    // Find the specific post by ID
    const post = await db.post.findFirstOrThrow({
      where: {
        id: postId,
      },
    });

    // Find the top 3 most recent posts by date published
    const recentPosts = await db.post.findMany({
      where: {
        id: {
          not: postId, 
        },
      },
      orderBy: {
        datePublished: "desc", 
      },
      take: 3, 
    });

   
    
    // if (postId !== params.slug) {
    //     console.log("New slug:", newSlug);

    // }

    if (post ) {
      return {
        body: {
          post,
          recentPosts,
        },
      };
    } else {
      throw error(404, "Post not found");
    }
  } catch (error) {
    // Handle errors or uncomment these lines to re-throw them
    // console.error("Error fetching post:", error);
    // throw error(500, "Internal server error");
  }
}
