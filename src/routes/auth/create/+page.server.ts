import { db } from "$lib/server/prisma";
import type { Actions, PageServerLoad } from "./$types";
import { error, fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
  try {
    const categories = await db.category.findMany();

    return {
      body: categories,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error(500, "Internal server error");
  }
};

export const actions: Actions = {
  createPost: async ({ request }) => {
    const { title, content, img, categories, subtitle, published } =
      Object.fromEntries(await request.formData()) as {
        title: string;
        subtitle: string;
        img: string;
        content: string;
        published: boolean;
        categories: [];
      };

      console.log(content);
      
    const datePublished = new Date().toISOString();

    console.log(title, img, categories, subtitle);

    try {
      await db.post.create({
        data: {
          title,
          subtitle,
          img,
          // content,
          published,
          datePublished,
          author: {
            connect: {
              id: 1,
            },
          },
          categories: {
            connect: categories,
          },
        },
      });

      return { status: 201 };
    } catch (error) {
      console.error(error);
      return fail(500, { message: "Could not create the Post" });
    }
  },


};
