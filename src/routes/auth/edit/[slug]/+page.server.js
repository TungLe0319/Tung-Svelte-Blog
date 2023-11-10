
import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

import { db } from "../../../../lib/utils/useDb";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
  try {
    const session = await locals.getSession();
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

   const categories = await db.category.findMany()

    if (post) {
      return {
        body: {
          post,
       categories
        },
      };
    } else {
      throw error(404, "Post not found");
    }
  } catch (error) {}
}
