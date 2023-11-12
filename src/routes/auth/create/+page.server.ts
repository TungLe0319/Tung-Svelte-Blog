import { prisma } from "$lib/server/prisma";
import type { Prisma } from "@prisma/client";
import type { Actions, PageServerLoad } from "./$types";
import { error, fail, redirect } from "@sveltejs/kit";

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
    try {
      const formData = await request.formData();

      const title = formData.get("title") as string;
      const subtitle = formData.get("subtitle") as string;
      const img = formData.get("img") as string;
      const content = formData.get("content") as string;
      const published = formData.get("published") === "true"; 
      const categoryNames = formData.getAll("selected[]") as string[];
      const categories = categoryNames.map((name) => ({ name }));
      const datePublished = new Date().toISOString();

      // console.log( content);
      // console.log(categoryNames);
      // console.log(categories);
      // console.log(title);
      // console.log(subtitle);
      // console.log(img);
      // console.log(published);

      const newPost = await prisma.post.create({
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
            connect: categories,
          },
        },
      });
      // console.log(newPost);

     throw  redirect(301,`/posts/${newPost.id}`) ;
    } catch (error) {
      console.error(error);
      return fail(500, { message: "Failed to create post" });
    }
  },
};
