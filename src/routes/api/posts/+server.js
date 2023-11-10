import { PrismaClient } from "@prisma/client";
import { db } from "$lib/utils/useDb";

export async function POST({ request }) {
  try {
    const paginationData = await request.formData();

    const cursor = paginationData.get("cursor");

    const posts = await db.post.findMany({
      take: 2,
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

    const lastPostInResults = posts[1]; // Remember: zero-based index! :)
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


export async function PUT({request})  {
 
  try {
    const putData = await request.formData();

    console.log(putData.get("id"));
    const id = putData.get("id") || "";
    const title = putData.get("title") || "";
    const subtitle = putData.get("subtitle") || "";
    const img = putData.get("img") || "";
    const content = putData.get("content") || "";
    const categories = putData.get("categories");
    const published = putData.get("published") === "true";
    const datePublished = new Date().toISOString();
    const parsedCategories = JSON.parse(categories);
    console.log(JSON.parse(categories));

    const updatedPost = await db.post.update({
      where: {
        id: id,
      },
      data: {
        title,
        subtitle,
        img,
        content,
        published,
      },
    });

    return new Response('23455', {
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
