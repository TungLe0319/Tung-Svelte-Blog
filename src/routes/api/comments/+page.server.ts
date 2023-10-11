// +page.server.ts
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const actions = {
  default: async ({ request }) => {
    try {
      const commentData = await request.formData();

      const postId = commentData.get("postId");
      const content = commentData.get("content") || "";

      const userEmail = commentData.get("userEmail") || "";

      const user = await db.user.findUnique({
        where: {
          email: userEmail,
        },
      });

      if (user) {
        const newComment = await db.comment.create({
          data: {
            postId: parseInt(postId),
            content,
            userId: user.id,
       
          },
        });

        return {
          body: newComment,
        };
      }
    } catch (error) {
      return {
        status: 500,
        body: JSON.stringify({ error: "Failed to create a comment" }),
      };
    }
  },
};
