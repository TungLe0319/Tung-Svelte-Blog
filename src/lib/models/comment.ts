import {  User } from "@prisma/client";
import { Post } from "./post";

export interface Comment {
  id: number;
  postId: number;
  post: Post;
  userId: number;
  user: User;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
