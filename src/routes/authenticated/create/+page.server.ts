// +page.server.js

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();


export const actions = {
  default: async ({ request }) => {
    try {
      const postData = await request.formData();
  

      const title = postData.get("title") || "";
      const subtitle = postData.get("subtitle") || "";
      const img = postData.get("img") || "";
      const content = postData.get("content") || "";
      const category = postData.get("category") || "Art";
      const published = postData.get("published") === "true";
    
     const datePublished = new Date().toISOString();

      const newPost = await db.post.create({
        data: {
          title,
          subtitle,
          img,
          content,
          category,
          published,
          datePublished,
          author: {
            connect: {
              id: 1,
            },
          },
        },
      });

      return {
        status: 200,
        body: JSON.stringify(newPost),
      };
    } catch (error) {
      return {
        status: 500,
        body: JSON.stringify({ error: "Failed to create a post" }),
      };
    }
  },
};
