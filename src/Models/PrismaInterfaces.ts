// import { Role, User, Like, Category, Post } from "@prisma/client";

// interface BasePrisma<T> {
//   [key: string]: T;
// }

// type PrismaTypes<T> = {
//   [K in keyof T]: BasePrisma<T[K]>;
// };

// type PrismaRole = "USER" | "ADMIN"; // Map the enum as a string literal type

// type PrismaRoleEnum = Record<Role, PrismaRole>; // Create a mapping for Role enum

// type PrismaEnums = {
//   role: PrismaRoleEnum;
// };

// const prismaEnums: PrismaEnums = {
//   role: {
//     USER: "USER",
//     ADMIN: "ADMIN",
//   },
// };

// type Prisma = PrismaTypes<{
//   Post: {
//     id: number;
//     title: string;
//     img: string;
//     subtitle: string;
//     content?: string | null;
//     published: boolean;
//     datePublished: string; // Change to a string representing date and time
//     authorId: number;
//     author: BasePrisma<User>;
//     likes: BasePrisma<Like> | null;
//     comments: BasePrisma<Comment> | null;
//     categories: BasePrisma<Category> | null;
//   };
//   User: {
//     id: number;
//     email: string;
//     name: string | null;
//     role: PrismaRole;
//     posts: BasePrisma<Post>[];
//     likes: BasePrisma<Like>[];
//     comments: BasePrisma<Comment>[];
//   };
//   Category: {
//     id: number;
//     name: string;
//     posts: BasePrisma<Post>[];
//   };
//   Like: {
//     id: number;
//     postId: number;
//     post: BasePrisma<Post>;
//     userId: number;
//     user: BasePrisma<User>;
//     createdAt: string; // Change to a string representing date and time
//     updatedAt: string; // Change to a string representing date and time
//   };
//   Comment: {
//     id: number;
//     postId: number;
//     post: BasePrisma<Post>;
//     userId: number;
//     user: BasePrisma<User>;
//     content: string;
//     createdAt: string; // Change to a string representing date and time
//     updatedAt: string; // Change to a string representing date and time
//   };
// }>;

// export { prismaEnums, Prisma };
