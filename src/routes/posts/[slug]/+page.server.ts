// @ts-nocheck

import { PrismaClient } from "@prisma/client";
import { error, fail } from "@sveltejs/kit";

import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ params }) => {
  try {
    const post = await prisma.post.findFirstOrThrow({
      where: {
        id: Number(params.slug),
      },
      include: {
        author: true,
        categories: true,
        comments: {
          include: {
            user: true,
          },
        },
        likes: {
          include: {
            user: true,
          },
        },
      },
    });

    const recentPosts = await prisma.post.findMany({
      where: {
        id: {
          not: postId,
        },
      },
      orderBy: {
        datePublished: "desc",
      },
      include: {
        author: true,
      },
      take: 3,
    });

    if (post) {
      return {
        body: {
          post,
          recentPosts,
        },
      };
    } else {
      throw error(404, "Post not found");
    }
  } catch (error) {
    return fail(500, { message: "Failed to get posts and recent posts" });
  }
};

export const actions: Actions = {
  createComment: async ({ request }) => {
    try {
      const commentData = await request.formData();

      const postId = commentData.get("postId");
      const content = commentData.get("content");

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
  },

  // TODO USE urlSEARCH PARAMS
  deleteComment: async ({ url }) => {
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
  },

  updateComment: async ({ request, params }) => {
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
  },



// LIKES

toggleLike: async ({request}) => {
    try {
      const likeData = await request.formData();
      const postId = parseInt(likeData.get("postId"));
      const userEmail = likeData.get("userEmail");

      const user = await prisma.user.findUnique({
        where: { email: userEmail },
      });

      if (!user) return fail(400,{message:'User not found'})

      const post = await prisma.post.findUnique({
        where: { id: postId },
      });

      if (!post) return fail(400, { message: "Post not found" });

      const existingLike = await prisma.like.findFirst({
        where: { postId: post.id, userId: user.id },
      });

      if (existingLike) {
        const deletedLike = await prisma.like.delete({
          where: { id: existingLike.id },
          include: { user: true },
        });
        return jsonResponse(HttpStatusCode.Ok, deletedLike);
      }

      const newLike = await prisma.like.create({
        data: { postId: post.id, userId: user.id },
        include: { user: true },
      });

      return jsonResponse(HttpStatusCode.Created, newLike);
    } catch (error) {
      return fail(500, {message:'Failed to Toggle Like'});
    }
}


};
