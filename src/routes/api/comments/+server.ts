// +page.server.ts
import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

import { db } from "$db";

export async function POST({ request }) {
  try {
    const commentData = await request.formData();

    const postId = commentData.get("postId");
    const content = commentData.get("content") 

    const userEmail = commentData.get("userEmail") || "";



if (content === "") {
     return new Response(JSON.stringify({ error: "User not found" }), {
       status: 400, // Use an appropriate status code
       headers: {
         "Content-Type": "application/json",
       },
     });
}



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
    } else {
      // Handle the case when the user is not found
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404, // Use an appropriate status code
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to create a comment" }),
      {
        status: 500, // Status code for server error
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function PUT({ request }) {
  try {
    const commentData = await request.formData();

    const commentId = commentData.get("id");
    const content = commentData.get("content") || "";

    const existingComment = await db.comment.findUnique({
      where: {
        id: parseInt(commentId),
      },
    });

    if (existingComment) {
      const updatedComment = await db.comment.update({
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

export async function DELETE({ request }) {
  try {
    const commentData = await request.formData();
    const commentId = commentData.get("id");
    const creatorEmail = commentData.get("userEmail");

    const creator = await db.user.findUnique({
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

    const existingComment = await db.comment.findUnique({
      where: {
        id: parseInt(commentId),
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
    const deletedComment = await db.comment.delete({
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

export async function GET({ request }) {
  try {
    const comments = await db.comment.findMany({
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
