import type { Writable } from "svelte/store";
import { writable } from "svelte/store";
import type { Prisma } from "@prisma/client";

 export type PostFullType = Prisma.PostGetPayload<{
  include: {
    comments: true;
    author: true;
    likes: true;
    categories: true;
  };
}>;




interface AppStateData {
  listView: boolean | undefined;
  searchQuery: string | undefined;
  activeCategory: string | undefined;
  myCursor: number | undefined;
  filteredPosts: PostFullType[];
  posts: PostFullType[];
  paginationPosts: PostFullType[];
  activePost: any | undefined;
}

export const AppState: Writable<AppStateData> = writable({
  listView: true,
  searchQuery: "",
  activeCategory: "All categories",
  myCursor: 0,
  filteredPosts: [],
  posts: [],
  paginationPosts: [],
  activePost: null,
});
