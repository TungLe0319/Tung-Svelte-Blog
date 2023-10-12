import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function POST({ request }) {
  try {
    const likeData = await request.formData();

    const postId = likeData.get("postId");
    const userEmail = likeData.get("userEmail");

    const user = await db.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const post = await db.post.findUnique({
      where: {
        id: parseInt(postId),
      },
    });

    if (!post) {
      return new Response(JSON.stringify({ error: "Post not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const existingLike = await db.like.findFirst({
      where: {
        postId: post.id,
        userId: user.id,
      },
    });

    if (existingLike) {
      const deletedLike = await db.like.delete({
        where: {
          id: existingLike.id,
        },
        include: {
          user: true,
        },
      });

      return new Response(JSON.stringify(deletedLike), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const newLike = await db.like.create({
      data: {
        postId: post.id,
        userId: user.id,
      },
      include: {
        user: true,
      },
    });

    return new Response(JSON.stringify(newLike), {
      status: 201, // Status code for resource created
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to like the post" }), {
      status: 500, // Status code for server error
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

// export async function GET({params}) {

// console.log(params.slug);



//   const post = db.like.findUnique({
//     where: {
//       postId: parseInt(postId),
//     },
//   });

//   if (!post) {
//     return new Response(JSON.stringify({ error: "Post not found" }), {
//       status: 404,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }
