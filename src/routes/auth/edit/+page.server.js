import { db } from "../../../lib/utils/useDb";

import { error } from "@sveltejs/kit";
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const categories = await db.category.findMany();

    return {
      body: categories,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error(500, "Internal server error");
  }
}

export const actions = {
  default: async ({ params, request }) => {
    const putData = await request.formData();

    console.log(putData.get("categories"));
    const title = putData.get("title") || "";
    const subtitle = putData.get("subtitle") || "";
    const img = putData.get("img") || "";
    const content = putData.get("content") || "";
    const categories = putData.get("categories");
    const published = putData.get("published") === "true";
    const datePublished = new Date().toISOString();
    const parsedCategories = JSON.parse(categories);
    console.log(JSON.parse(categories));

    const postId = Number(params.id); // Assuming the post ID is passed in the URL params

    const updatedPost = await db.post.update({
      where: {
        id: postId,
      },
      data: {
        title,
        subtitle,
        img,
        content,
        published,
        datePublished,
        author: {
          connect: {
            id: 1,
          },
        },
        categories: {
          set: parsedCategories,
        },
      },
    });

    return {
      status: 200,
      body: JSON.stringify(updatedPost),
    };
  },
};