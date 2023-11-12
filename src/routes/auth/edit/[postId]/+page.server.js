import { prisma } from "$lib/server/prisma";
import { error, fail } from "@sveltejs/kit";
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
  updatePost: async ({ params, request }) => {
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

    console.log(title);
    console.log(content);
    console.log(postId);
  

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        categories: true,
      },
    });

    if (!post) {
      return fail(400, { message: "No Post" });
    }

console.log(post);

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
        categories: {
          disconnect,
          connect,
        },
      },
    });


     console.log(updatedPost);
    return {
      status: 200,
      body: JSON.stringify(updatedPost),
    };
  },

  deletePost: async ({ params, request }) => {
    const post = prisma.post.findUnique({
      where: {
        id: Number(params.postId),
      },
    });

    if (!post) {
      return fail(400, { message: "No post found" });
    }

    await prisma.post.delete({
      where: {
        id: Number(params.postId),
      },
    });
  },
};
