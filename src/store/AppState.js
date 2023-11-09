import { writable } from "svelte/store";

export const AppState = writable({
  listView: true,
  searchQuery: "",
  activeCategory: "All categories",
  page:0,
  filteredPosts: [],
  posts: [],
});