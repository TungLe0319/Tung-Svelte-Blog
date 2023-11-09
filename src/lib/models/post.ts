// post.ts

import { Category } from "@prisma/client";
import { Author } from "./author";




export interface Post {
  id: number;
  title: string;
  img: string;
  subtitle: string;
  content: string;
  published: boolean;
  datePublished: string;
  authorId: number;
  author: Author;
  categories: Category[];
  likes: any[]; // You might want to define a type for likes
  comments: any[]; // You might want to define a type for comments
}
