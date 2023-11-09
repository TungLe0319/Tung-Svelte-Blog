import { writable } from "svelte/store";

export const AppState = writable({
  listView: true,
  searchQuery: "",
  activeCategory: "All categories",
  myCursor:0,
  filteredPosts: [],
  posts: [],
});