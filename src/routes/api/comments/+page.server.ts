// +page.server.ts
import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

const db = new PrismaClient();

export const actions = {
  post: async ({ request }) => {
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

  put: async ({ request }) => {
    try {
      const commentData = await request.formData();
      const commentId = commentData.get("id");
      const postId = commentData.get("postId");
      const content = commentData.get("content") || "";

      const userEmail = commentData.get("userEmail") || "";

      const existingComment = await db.comment.findUnique({
        where: {
          id: commentId,
        },
      });

      if (!existingComment) {
        throw error(400, "NO Comment Found");
      }

      const newComment = await db.comment.update({
        where: {
          id: existingComment.id,
        },
        data: {
          content: content,
        },
      });

      return {
        body: newComment,
      };
    } catch (error) {
      return {
        status: 500,
        body: JSON.stringify({ error: "Failed to create a comment" }),
      };
    }
  },
};
