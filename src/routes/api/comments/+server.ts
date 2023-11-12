// +page.server.ts

import { error, fail, json } from "@sveltejs/kit";

import { prisma } from "$lib/server/prisma";

// /** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  try {
    const commentData = await request.formData();

    const postId = commentData.get("postId") as string;
    const content = commentData.get("content") as string;

    const userEmail = commentData.get("userEmail") as string;

    if (content === "") {
      throw error(400, "Must have content body to create comment");
    }

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      throw error(400, "Invalid Request");
    }

    const newComment = await prisma.comment.create({
      data: {
        postId: parseInt(postId),
        content,
        userId: user.id,
      },
      include: {
        user: true,
      },
    });

    return new Response(JSON.stringify(newComment), {
      status: 200, // Status code for success
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // throw error(500, "Unable to Create Comment");
    console.error(error)
  }
}
/** @type {import('./$types').RequestHandler} */
export async function PUT({ request }) {
  try {
    const commentData = await request.formData();

    const commentId = commentData.get("id") as string;
    const content = commentData.get("content") as string

    const existingComment = await prisma.comment.findUnique({
      where: {
        id: Number(commentId),
      },
    });

    if (existingComment) {
      const updatedComment = await prisma.comment.update({
        where: {
          id: existingComment.id,
        },
        data: {
          content,
        },
        include: {
          user: true,
        },
      });

      return new Response(JSON.stringify(updatedComment), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new Response(JSON.stringify({ error: "Comment not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to update the comment" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
  try {
    const commentData = await request.formData();
    const commentId = commentData.get("id");
    const creatorEmail = commentData.get("userEmail") as string;

    const creator = await prisma.user.findUnique({
      where: {
        email: creatorEmail,
      },
    });

    if (!creator) {
      // Unauthorized: Creator not found
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const existingComment = await prisma.comment.findUnique({
      where: {
        id: Number(commentId),
      },
    });

    if (!existingComment) {
      // Comment not found
      return new Response(JSON.stringify({ error: "Comment not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (existingComment.userId !== creator.id) {
      // Unauthorized: User is not the comment creator
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Delete the comment
    const deletedComment = await prisma.comment.delete({
      where: {
        id: existingComment.id,
      },
    });

    return new Response(JSON.stringify(deletedComment), {
      status: 200, // Status code for success
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to delete the comment" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  try {
    const comments = await prisma.comment.findMany({
      include: {
        user: true,
      },
    });

    return new Response(JSON.stringify(comments), {
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
