// @ts-nocheck

import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

const db = new PrismaClient();
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);
console.log("GITHUB_ID:", process.env.GITHUB_ID);
console.log("GITHUB_SECRET:", process.env.GITHUB_SECRET);

  try {
    const posts = await db.post.findMany({
      include: {
        author: true, 
        categories:true,
      },
    });

    if (posts) {
    
        return {
          body: {
            posts,
          },
        };
    } else {
      throw error(404, "Post not found");
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error(500, "Internal server error");
  }
}
