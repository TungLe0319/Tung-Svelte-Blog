import { PrismaClient } from "@prisma/client";
import { jsonResponse, HttpStatusCode } from "../../../lib/utils/apiUtils.js";
import { db } from "$db";

// export async function POST({ request }) {
//   try {
//     const likeData = await request.formData();

//     const postId = likeData.get("postId");
//     const userEmail = likeData.get("userEmail");

//     const user = await db.user.findUnique({
//       where: {
//         email: userEmail,
//       },
//     });

//     if (!user) {
//       return new Response(JSON.stringify({ error: "User not found" }), {
//         status: 404,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     }

//     const post = await db.post.findUnique({
//       where: {
//         id: parseInt(postId),
//       },
//     });

//     if (!post) {
//       return new Response(JSON.stringify({ error: "Post not found" }), {
//         status: 404,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     }

//     const existingLike = await db.like.findFirst({
//       where: {
//         postId: post.id,
//         userId: user.id,
//       },
//     });

//     if (existingLike) {
//       const deletedLike = await db.like.delete({
//         where: {
//           id: existingLike.id,
//         },
//         include: {
//           user: true,
//         },
//       });

//       return new Response(JSON.stringify(deletedLike), {
//         status: 200,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     }

//     const newLike = await db.like.create({
//       data: {
//         postId: post.id,
//         userId: user.id,
//       },
//       include: {
//         user: true,
//       },
//     });

//     return new Response(JSON.stringify(newLike), {
//       status: 201, // Status code for resource created
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Failed to like the post" }), {
//       status: 500, // Status code for server error
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }

export async function POST({ request }) {
  try {
    const likeData = await request.formData();
    const postId = parseInt(likeData.get("postId"));
    const userEmail = likeData.get("userEmail");

    const user = await db.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) return jsonResponse(HttpStatusCode.NotFound, "User not found");

    const post = await db.post.findUnique({
      where: { id: postId },
    });

    if (!post) return jsonResponse(HttpStatusCode.NotFound, "Post not found");

    const existingLike = await db.like.findFirst({
      where: { postId: post.id, userId: user.id },
    });

    if (existingLike) {
      const deletedLike = await db.like.delete({
        where: { id: existingLike.id },
        include: { user: true },
      });
      return jsonResponse(HttpStatusCode.Ok, deletedLike);
    }

    const newLike = await db.like.create({
      data: { postId: post.id, userId: user.id },
      include: { user: true },
    });

    return jsonResponse(HttpStatusCode.Created, newLike);
  } catch (error) {
    return jsonResponse(500, "Failed to like the post");
  }
}
