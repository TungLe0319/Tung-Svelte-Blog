// stores/comments.js
import { writable } from "svelte/store";
import { db } from "../lib/prisma";

const comments = writable([]);

// Comment interface based on your Prisma schema
interface Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
  createdAt: string; // Date and time as a string
  updatedAt: string; // Date and time as a string
}

const addComment = async (postId, userId, content) => {
  try {
    const newComment = await db.comment.create({
      data: {
        postId: postId,
        userId: userId,
        content: content,
      },
    });

    comments.update((currentComments) => [...currentComments, newComment]);
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};

const getComments = async (postId) => {
  try {
    const fetchedComments = await db.comment.findMany({
      where: {
        postId: postId,
      },
    });

    comments.set(fetchedComments);
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};

const updateComment = async (commentId, content) => {
  try {
    const updatedComment = await db.comment.update({
      where: {
        id: commentId,
      },
      data: {
        content: content,
      },
    });

    comments.update((currentComments) => {
      const updatedIndex = currentComments.findIndex((c) => c.id === commentId);
      if (updatedIndex !== -1) {
        currentComments[updatedIndex] = updatedComment;
      }
      return [...currentComments];
    });
  } catch (error) {
    console.error("Error updating comment:", error);
  }
};

const deleteComment = async (commentId) => {
  try {
    await db.comment.delete({
      where: {
        id: commentId,
      },
    });

    comments.update((currentComments) =>
      currentComments.filter((c) => c.id !== commentId)
    );
  } catch (error) {
    console.error("Error deleting comment:", error);
  }
};

export { comments, addComment, getComments, updateComment, deleteComment };
