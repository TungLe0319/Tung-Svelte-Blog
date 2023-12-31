import { prisma } from "$lib/server/prisma";
import type { Actions, PageServerLoad } from "./$types";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
  const post = prisma.post.findUnique({
    where: {
      id: Number(params.postId),
    },
    include: {
      categories: true,
      comments: true,
      likes: true,
      author: true,
    },
  });

  if (!post) {
    return fail(400, { message: "No post found" });
  }

  const categories = prisma.category.findMany();

  if (!categories) {
    return fail(400, { message: "No categories found" });
  }
  return {
    post,
    categories,
  };
};

export const actions: Actions = {
  updatePost: async ({ request, params }) => {
    try {
      const formData = await request.formData();

      const title = formData.get("title") as string;
      const subtitle = formData.get("subtitle") as string;
      const img = formData.get("img") as string;
      const content = formData.get("content") as string;
      const published = formData.get("published") === "true";
      const categoryNames = formData.getAll("selected[]") as string[];
      const categories = categoryNames.map((name) => ({ name }));

      console.log(content);
      console.log(categoryNames);
      console.log(categories);
      console.log(title);
      console.log(subtitle);
      console.log(img);
      console.log(published);

      const post = await prisma.post.findUnique({
        where: {
          id: Number(params.postId),
        },
        include: {
          categories: true,
        },
      });
      if (!post) {
        return fail(400, { message: "Invalid Request" });
      }

      const existingCategories = post.categories.map((c) => {
        return { name: c.name };
      });

      // To disconnect categories not present in the received categories list
      const disconnect = existingCategories.filter(
        (c) => !categories.includes(c)
      );

      // To connect categories from the received list that are not already present
      const connect = categories.filter(
        (category) => !existingCategories.includes(category)
      );

      // console.log(disconnect);
      // console.log(connect);

      const disconnectCategories = disconnect.map((categoryName) => ({
        name: categoryName,
      }));
      const connectCategories = connect.map((categoryName) => ({
        name: categoryName,
      }));

      await prisma.post.update({
        where: {
          id: Number(params.postId),
        },
        data: {
          title,
          subtitle,
          img,
          // content,
          published,
          categories: {
            disconnect: disconnectCategories,
            connect: connectCategories,
          },
        },
      });

      return {
        status: 200,
      };
    } catch (error) {
      return fail(500, { message: "Failed to Update Post" });
    }
  },

  deletePost: async ({ url }) => {
    const id = url.searchParams.get("id");
    if (!id) {
      return fail(400, { message: "Invalid Request" });
    }

    try {
      await prisma.post.delete({
        where: {
          id: Number(id),
        },
      });

      return { status: 201 };
    } catch (error) {
      return fail(500, { message: "Could not delete the post" });
    }
  },
};
