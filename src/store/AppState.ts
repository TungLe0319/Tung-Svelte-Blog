import { readonly, writable,Writable } from "svelte/store";
import type {Post} from '../lib/models/post'

interface AppStateData {
  listView: boolean;
  searchQuery: string;
  activeCategory: string;
  myCursor: number;
  filteredPosts: Post[]; 
  posts: Post[]; 
  paginationPosts:Post[]
  activePost: any; 
}


export const AppState: Writable<AppStateData> = writable({
  listView: true,
  searchQuery: "",
  activeCategory: "All categories",
  myCursor: 0,
  filteredPosts: [],
  posts: [], 
  paginationPosts:[],
  activePost: null, 
});


