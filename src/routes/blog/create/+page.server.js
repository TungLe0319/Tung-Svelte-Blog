// @ts-nocheck

import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

const db = new PrismaClient();
/** @type {import('./$types').PageServerLoad} */
export const actions = {
  
    createPost: async (_, { input }) => {
      // Assuming the default user's ID is 1, you can change this based on your setup
      const defaultUserId = 1;

      const newPost = await db.post.create({
        data: {
          ...input,
          author: {
            connect: {
              id: defaultUserId,
            },
          },
        },
      });

      return newPost;
    },
  
};
