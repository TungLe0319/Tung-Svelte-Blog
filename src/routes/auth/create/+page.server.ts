import { prisma } from "$lib/server/prisma";
import type { Prisma } from "@prisma/client";
import type { Actions, PageServerLoad } from "./$types";
import { error, fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
  try {
    const categories = await prisma.category.findMany();

    return {
      body: categories,
    };
  } catch (error) {
    return fail(500, { message: "Unable to load Categories" });
  }
};



//TODO FIX CONTENT NOT PASSING THROUGH
export const actions: Actions = {
  createPost: async ({ request }) => {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const subtitle = formData.get("subtitle") as string;
    const img = formData.get("img") as string;
    const content = formData.get("content") as string;
    const published = formData.get("published") === "true"; // If the checkbox is expected to return a string 'true' or 'false'
    const categories = formData.getAll(
      "selected[]"
    ) as Prisma.CategoryWhereUniqueInput[];

    const datePublished = new Date().toISOString();

    console.log(title, img, categories, subtitle);

    try {
      await prisma.post.create({
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

      return { status: 200 };
    } catch (error) {
      console.error(error);
      return fail(500, { message: "Could not create the Post" });
    }
  },
};
