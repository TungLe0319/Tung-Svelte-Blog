// @ts-nocheck


import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const actions = {
  default: async ({ request }) => {
    try {


      const postData = await request.formData();


      console.log(postData.get('title'));
      const title = postData.get("title") || "";
      const subtitle = postData.get("subtitle") || "";
      const img = postData.get("img") || "";
      const content = postData.get("content") || "";
      const categories = postData.get("categories") || "Art";
      const published = postData.get("published") === "true";
      const datePublished = new Date().toISOString();

      const newPost = await db.post.create({
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
            connect: {
              name: categories,
            },
          },
        },
      });


      
      return {
        status: 200,
        body: newPost,
      };




 












    } catch (error) {
      return {
        status: 500,
        body: JSON.stringify({ error: "Failed to create a post" }),
      };
    }
  },

  // put: async ({ request }) => {
  //   try {
  //     const postData = await request.formData();
  //     const postId = postData.get("id");
  //     const title = postData.get("title") || "";
  //     const subtitle = postData.get("subtitle") || "";
  //     const img = postData.get("img") || "";
  //     const content = postData.get("content") || "";
  //     const categories = postData.get("categories") || "Art";
  //     const published = postData.get("published") === "true";
  //     const datePublished = new Date().toISOString();

  //     const existingPost = await db.post.findUnique({
  //       where: {
  //         id: postId,
  //       },
  //     });

  //     if (!existingPost) {
  //       return {
  //         status: 404,
  //         body: JSON.stringify({ error: "Post not found" }),
  //       };
  //     }

  //     const updatedPost = await db.post.update({
  //       where: {
  //         id: postId,
  //       },
  //       data: {
  //         title,
  //         subtitle,
  //         img,
  //         content,
  //         published,
  //         categories: {
  //           connect: {
  //             name: categories,
  //           },
  //         },
  //       },
  //     });
  //     return {
  //       body: updatedPost,
  //     };
  //   } catch (error) {}
  // },
}
