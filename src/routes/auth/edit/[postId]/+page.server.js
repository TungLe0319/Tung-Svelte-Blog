import { prisma } from "$lib/server/prisma";
import { error } from "@sveltejs/kit";
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  try {
    const categories = await prisma.category.findMany();
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(params.postId),
      },
      include: {
        categories: true,
      },
    });
    return {
      body: {
        categories,
        post,
      },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error(500, "Internal server error");
  }
}

export const actions = {
  default: async ({ params, request }) => {
    const putData = await request.formData();

    const title = putData.get("title") || "";
    const subtitle = putData.get("subtitle") || "";
    const img = putData.get("img") || "";
    const content = putData.get("content") || "";
    const categoryNames = putData.getAll("categories[]");
    const published = putData.get("published") === "true";
    const datePublished = new Date().toISOString();
    const categories = categoryNames.map((name) => ({ name }));
    const postId = Number(params.postId); 






console.log(content);






    const post = await prisma.post.findUnique({
      where: {
        id: postId
      },
      include: {
        categories: true,
      },
    });

    if (!post) {
      return fail(400, { message: "No Post" });
    }

    const existingCategoryNames = post.categories.map((c) => ({
      name: c.name,
    }));

    // To disconnect categories not present in the received categories list
    const disconnect = existingCategoryNames.filter(
      (c) => !categories.some((category) => category.name === c.name)
    );

    // To connect categories from the received list that are not already present
    const connect = categories.filter(
      (category) => !existingCategoryNames.some((c) => c.name === category.name)
    );

    const updatedPost = await prisma.post.update({
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
          disconnect,
          connect,
        },
      },
    });

    return {
      status: 200,
      body: JSON.stringify(updatedPost),
    };
  },
};
