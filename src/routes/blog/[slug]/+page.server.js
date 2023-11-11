// @ts-nocheck

import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

import { prisma } from "$lib/server/prisma";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
  try {
    const session = await locals.getSession();
    const postId = parseInt(params.slug, 10);

    const post = await prisma.post.findFirstOrThrow({
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

    const recentPosts = await prisma.post.findMany({
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
