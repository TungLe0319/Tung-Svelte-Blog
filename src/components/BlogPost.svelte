<div>
  {url}
  {testparams}
  {#if blog}
    <div class="post p-3 my-2 shadow-md flex space-x-2  rounded-md">
      <img src={blog.image} alt="Blog-post" class="post-image w-1/2 rounded-md shadow-xl shadow-slate-400 hover:shadow-xl hover:shadow-red-300">
      <div class="post-body p-4 w-1/2 space-y-4 flex-col flex items-center ">
        <div class="post-title text-xl font-bold">{blog.title}</div>
        <div class="post-description">{blog.description}</div>
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</div> 



<script>
  // Import necessary modules and data
  import { onMount } from 'svelte';
   import { page } from '$app/stores';

 
  import  posts  from '../lib/posts.js'; 

  let blog;
  let testparams


const url = $page.url;


  function getIdFromUrl(url) {
    const params = new URL(url).searchParams;
    testparams = params.toString()
    return params.get('id');
  }


  const id = getIdFromUrl(url);


  onMount(() => {
    blog = fetchBlogById(id); 
  });

  function fetchBlogById(id) {
    return posts.find(post => post.id === id);
  }
</script>





<!-- 
<!-- <script>
  // Import necessary modules and data
  import { onMount } from 'svelte';
 import {Route, Router, Link} from "@s";
 
  import posts from '../lib/posts.js'; // Assuming you have a data source for your posts

  let blog;

  // Get the ID from the route parameters
  const { id } = Route

  // Fetch the blog post based on the ID
  onMount(async () => {
    blog = await fetchBlogById(id); // You should implement this function to fetch the blog by ID
  });

  // Mock implementation for fetching a blog post by ID
  async function fetchBlogById(id) {
    return posts.find(post => post.id === id);
  }
</script> -->

<div>
  {#if blog}
    <div class="post p-3 my-2 shadow-md flex space-x-2  rounded-md">
      <img src={blog.image} alt="Blog-post" class="post-image w-1/2 rounded-md shadow-xl shadow-slate-400 hover:shadow-xl hover:shadow-red-300">
      <div class="post-body p-4 w-1/2 space-y-4 flex-col flex items-center ">
        <div class="post-title text-xl font-bold">{blog.title}</div>
        <div class="post-description">{blog.description}</div>
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</div> -->
