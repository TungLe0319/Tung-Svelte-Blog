// stores/likes.ts
import { writable } from "svelte/store";
import { db } from "../lib/prisma";

// Like interface based on your Prisma schema
interface Like {
  id: number;
  postId: number;
  userId: number;
  // Add other properties as needed
}

const likes = writable<Like[]>([]);

// Function to add a like
async function addLike(like: Like) {
  try {
    const newLike = await db.like.create({
      data: like,
    });

    likes.update((currentLikes) => [...currentLikes, newLike]);
  } catch (error) {
    console.error("Error creating like:", error);
  }
}

// Function to get all likes for a specific post
async function getLikesForPost(postId: number) {
  try {
    const fetchedLikes = await db.like.findMany({
      where: {
        postId: postId,
      },
    });

    likes.set(fetchedLikes);
  } catch (error) {
    console.error("Error fetching likes:", error);
  }
}

// Function to delete a like
async function deleteLike(likeId: number) {
  try {
    await db.like.delete({
      where: { id: likeId },
    });

    likes.update((currentLikes) =>
      currentLikes.filter((like) => like.id !== likeId)
    );
  } catch (error) {
    console.error("Error deleting like:", error);
  }
}

export { likes, addLike, getLikesForPost, deleteLike };
