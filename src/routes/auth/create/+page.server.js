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
const parsedCategories = JSON.parse(categories)
      console.log(JSON.parse(categories))
// const mappedCategories = categories.map((c) => ({
//   id: c.id,
// }));

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
            connect: parsedCategories,
          },
        },
      });
      return {
        status: 200,
        body: 'adsfsfasdfsgd'
      };
   
  },

}
