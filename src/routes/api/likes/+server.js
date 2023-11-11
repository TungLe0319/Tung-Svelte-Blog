import { PrismaClient } from "@prisma/client";
import { jsonResponse, HttpStatusCode } from "../../../lib/utils/apiUtils";
// @ts-ignore
import { prisma } from "$lib/server/prisma";


export async function POST({ request }) {
  try {
    const likeData = await request.formData();
    const postId = parseInt(likeData.get("postId"));
    const userEmail = likeData.get("userEmail");

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) return jsonResponse(HttpStatusCode.NotFound, "User not found");

    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) return jsonResponse(HttpStatusCode.NotFound, "Post not found");

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
    return jsonResponse(500, "Failed to like the post");
  }
}
