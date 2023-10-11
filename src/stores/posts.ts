// stores/posts.ts
import { writable } from "svelte/store";
import { db } from "../lib/prisma";
import { Post, User, Category, Like, Comment, Role } from "../Models/model";
// Post interface based on your Prisma schema or your post model

const posts = writable<Post[]>([]);

// Function to add a post
async function addPost(post: Post) {
  try {
    const newPost = await db.post.create({
      data: post,
    });

    posts.update((currentPosts) => [...currentPosts, newPost]);
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

// Function to get all posts
async function getPosts() {
  try {
    const fetchedPosts = await db.post.findMany();

    posts.set(fetchedPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Function to update a post
async function updatePost(postId: number, updatedPost: Post) {
  try {
    const updatedPostData = await db.post.update({
      where: { id: postId },
      data: updatedPost,
    });

    posts.update((currentPosts) =>
      currentPosts.map((post) => (post.id === postId ? updatedPostData : post))
    );
  } catch (error) {
    console.error("Error updating post:", error);
  }
}

// Function to delete a post
async function deletePost(postId: number) {
  try {
    await db.post.delete({
      where: { id: postId },
    });

    posts.update((currentPosts) =>
      currentPosts.filter((post) => post.id !== postId)
    );
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

export { posts, addPost, getPosts, updatePost, deletePost };
