import { PrismaClient } from "@prisma/client";
import { jsonResponse, HttpStatusCode } from "../../../lib/utils/apiUtils";
// @ts-ignore
import { db } from "$lib/utils/useDb";


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
