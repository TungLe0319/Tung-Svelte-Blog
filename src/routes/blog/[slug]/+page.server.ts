// @ts-nocheck

import { PrismaClient } from "@prisma/client";
import { error,  } from "@sveltejs/kit";

const db = new PrismaClient();

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  try {
    const postId = parseInt(params.slug, 10);

    const post = await db.post.findFirstOrThrow({
      where: {
        id: postId,
      },
      include: {
        author: true,
        categories: true,
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
