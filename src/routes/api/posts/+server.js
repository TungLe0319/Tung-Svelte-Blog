import { PrismaClient } from "@prisma/client";
import { db } from "$lib/utils/useDb";

export async function POST({ request }) {
  try {
    const paginationData = await request.formData();

    const cursor = paginationData.get("cursor");

    const posts = await db.post.findMany({
      take: 4,
      skip: 1, // Skip the cursor
      cursor: {
        id: parseInt(cursor),
      },
      include: {
        author: true,
        categories: true,
        likes: true,
        comments: true,
      },
    });

    const lastPostInResults = posts[3]; // Remember: zero-based index! :)
    const myCursor = lastPostInResults.id; // Example: 52

const responseObject = {
  posts: posts,
  myCursor: myCursor,
};



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
