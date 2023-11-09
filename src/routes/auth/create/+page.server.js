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
  default: async ({ request }) => {
    
      const postData = await request.formData();

      console.log(postData.get("categories"));
      const title = postData.get("title") || "";
      const subtitle = postData.get("subtitle") || "";
      const img = postData.get("img") || "";
      const content = postData.get("content") || "";
      const categories = postData.get("categories") 
      const published = postData.get("published") === "true";
      const datePublished = new Date().toISOString();
// const mappedCategories = categories.map((c) => ({
//   id: c.id,
// }));

      // const newPost = await db.post.create({
      //   data: {
      //     title,
      //     subtitle,
      //     img,
      //     content,
      //     published,
      //     datePublished,
      //     author: {
      //       connect: {
      //         id: 1,
      //       },
      //     },
      //     categories: {
      //       connect: mappedCategories,
      //     },
      //   },
      // });
//  console.log(mappedCategories);
      return {
        status: 200,
        body: 'adsfsfasdfsgd'
      };
   
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
};
