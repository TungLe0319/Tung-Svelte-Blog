export interface Post {
  id: number;
  title: string;
  img: string;
  subtitle: string;
  content?: string | null;
  published: boolean;
  datePublished: Date;
  authorId: number;
  author: User | null;
  likes: Like[] | null;
  comments: Comment[] | null;
  categories: Category[] | null;
}

export interface User {
  id: number;
  email: string;
  name: string | null;
  role: Role;
  posts: Post[];
  likes: Like[];
  comments: Comment[];
}
export interface Category {
  id: number;
  name: string;
  posts: Post[];
}

export interface Like {
  id: number;
  postId: number;
  post: Post;
  userId: number;
  user: User;
  createdAt: string; // Date and time as a string
  updatedAt: string; // Date and time as a string
}

export interface Comment {
  id: number;
  postId: number;
  post: Post;
  userId: number;
  user: User;
  content: string;
  createdAt: string; // Date and time as a string
  updatedAt: string; // Date and time as a string
}

export enum Role {
  USER,
  ADMIN,
}
