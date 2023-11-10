import { PrismaClient } from "@prisma/client";
import { db } from "../../../lib/utils/useDb";
import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  try {
    const postData = await request.formData();
    const title = postData.get("title") || "";
    const subtitle = postData.get("subtitle") || "";
    const img = postData.get("img") || "";
    const content = postData.get("content") || "";
    const categories = postData.get("categories");
    const published = postData.get("published") === "true";
    const datePublished = new Date().toISOString();
    const parsedCategories = JSON.parse(categories);

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

    return new Response(JSON.stringify(newPost), {
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

/** @type {import('./$types').RequestHandler} */
export async function PUT({ request }) {
  try {
    const putData = await request.formData();

    const id = putData.get("id") || "";
    const title = putData.get("title") || "";
    const subtitle = putData.get("subtitle") || "";
    const img = putData.get("img") || "";
    const content = putData.get("content") || "";
    const published = putData.get("published") === "true";

    const categories = putData.get("categories");
    const parsedCategories = JSON.parse(categories);
    console.log(JSON.parse(categories));

    const postToUpdate = await db.post.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        categories: true,
      },
    });

    const existingCategoryNames = postToUpdate!.categories.map((cat) => ({
      name: cat.name,
    }));

    const parsedCategoryNames = parsedCategories.map((cat) => cat.name);

    const categoriesToDisconnect = existingCategoryNames.filter(
      (cat) => !parsedCategoryNames.includes(cat.name)
    );

    const categoriesToConnect = parsedCategories.filter(
      (cat) => !existingCategoryNames.some((c) => c.name === cat.name)
    );

    const updatedPost = await db.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        subtitle,
        img,
        content,
        published,
        categories: {
          disconnect: categoriesToDisconnect,
          connect: categoriesToConnect,
        },
      },
    });

    return new Response(JSON.stringify(updatedPost), {
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
