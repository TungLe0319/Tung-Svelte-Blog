import { PrismaClient } from "@prisma/client";
import { db } from "../../../../lib/utils/useDb";
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  try {
    const postData = await request.formData();
    const cursor = postData.get("cursor");
    console.log(cursor);

    const posts = await db.post.findMany({
      take: 4,
      skip: 1,
      cursor: {
        id: parseInt(cursor),
      },
      include: {
        categories: true,
        comments: true,
        author: true,
        likes: true,
      },
    });

    const lastPostInResults = posts[3]; // Remember: zero-based index! :)
    const myCursor = lastPostInResults.id; // Example: 5

    const responseObject = {
      posts,
      lastPostInResults,
      myCursor,

    }
    return new Response(JSON.stringify(responseObject), {
      status: 200, // Status code for success
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch Posts" }), {
      status: 500, // Status code for server error
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
