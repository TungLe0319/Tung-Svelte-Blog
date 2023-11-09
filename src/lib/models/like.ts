import { Post, User } from "@prisma/client";


export interface Like {
  id: number;
  postId: number;
  post: Post;
  userId: number;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}


