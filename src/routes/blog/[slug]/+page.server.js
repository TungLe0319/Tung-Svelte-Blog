// @ts-nocheck

import { error } from "@sveltejs/kit";
import { PageServerLoad } from "./$types";
const db = new PrismaClient();

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  try {
    const postId = parseInt(params.slug, 10);

    /**
     * Fetches a post with associated data from the database.
     *
     * @param {number} postId - The ID of the post to fetch.
     * @returns {Promise<import("@prisma/client").Post>} A promise that resolves to the fetched post.
     */
    const post = await db.post.findFirstOrThrow({
      where: {
        id: postId,
      },
      include: {
        author: true,
        categories: true,
        comments: {
          include: {
            user: true,
          },
        },
        likes: {
          include: {
            user: true,
          },
        },
      },
    });

    const recentPosts = await db.post.findMany({
      where: {
        id: {
          not: postId,
        },
      },
      orderBy: {
        datePublished: "desc",
      },
      include: {
        author: true,
      },
      take: 3,
    });

    if (post) {
      return {
        body: {
          post,
          recentPosts,
        },
      };
    } else {
      throw error(404, "Post not found");
    }
  } catch (error) {}
}
