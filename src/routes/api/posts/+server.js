// import { db } from "$db";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient()

/** @type {import('./$types').PageServerLoad} */
export async function GET({ url }) {
  try {
const body =  url.searchParams
     
    const posts = await db.post.findMany({
      take: 4,
      skip: 1, // Skip the cursor
   cursor:body,
      include: {
        author: true,
        categories: true,
        likes: true,
        comments: true,
      },
    });
   

   

    return new Response(JSON.stringify(body), {
      status: 200, // Status code for success
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch comments" }), {
      status: 500, // Status code for server error
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
