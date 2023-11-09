// post.ts

import { Category, User } from "@prisma/client";




export interface Post {
  id: number;
  title: string;
  img: string;
  subtitle: string;
  content: string;
  published: boolean;
  datePublished: string;
  authorId: number;
  author: User;
  categories: Category[];
  likes: any[]; // You might want to define a type for likes
  comments: any[]; // You might want to define a type for comments
}
