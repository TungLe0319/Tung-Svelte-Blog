import { readonly, writable,Writable } from "svelte/store";
import type {Post} from '../lib/models/post'

interface AppStateData {
  listView: boolean;
  searchQuery: string;
  activeCategory: string;
  myCursor: number;
  filteredPosts: Post[]; // Adjust type as per your data structure
  posts: Post[]; // Adjust type as per your data structure
  activePost: any; // Adjust type as per your data structure
}


export const AppState: Writable<AppStateData> = writable({
  listView: true,
  searchQuery: "",
  activeCategory: "All categories",
  myCursor: 0,
  filteredPosts: [], // Add appropriate structure for your data
  posts: [], // Add appropriate structure for your data
  activePost: null, // Add appropriate structure for your data
});


