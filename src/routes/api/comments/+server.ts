// +page.server.ts
import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

const db = new PrismaClient();

// export const actions = {
//   default: async ({ request }) => {

//   },

//   put: async ({ request }) => {
//     try {
//       const commentData = await request.formData();
//       const commentId = commentData.get("id");
//       const postId = commentData.get("postId");
//       const content = commentData.get("content") || "";

//       const userEmail = commentData.get("userEmail") || "";

//       const existingComment = await db.comment.findUnique({
//         where: {
//           id: commentId,
//         },
//       });

//       if (!existingComment) {
//         throw error(400, "NO Comment Found");
//       }

//       const newComment = await db.comment.update({
//         where: {
//           id: existingComment.id,
//         },
//         data: {
//           content: content,
//         },
//       });

//       return {
//         body: newComment,
//       };
//     } catch (error) {
//       return {
//         status: 500,
//         body: JSON.stringify({ error: "Failed to create a comment" }),
//       };
//     }
//   },
// };

export async function POST({ request }) {
  try {
    const commentData = await request.formData();

    const postId = commentData.get("postId");
    const content = commentData.get("content") || "";

    const userEmail = commentData.get("userEmail") || "";

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
        include:{
          user:true
        }
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

export async function PUT({ request }) {}

export async function DELETE({ request }) {}
export async function GET() {}
