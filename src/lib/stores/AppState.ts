import type { Writable } from "svelte/store";
import { writable } from "svelte/store";
import type {  PostSemiFull } from "./PrismaTypes";



interface AppStateData {
  listView: boolean | undefined;
  searchQuery: string | undefined;
  activeCategory: string | undefined;
  myCursor: number | undefined;
  filteredPosts: PostSemiFull[];
  posts: PostSemiFull[];
  paginationPosts: PostSemiFull[];
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
