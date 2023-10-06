<div>
  {#if blog}
    <div class="post p-3 my-2 shadow-md flex justify-center space-x-2 rounded-md">
    
      <div class="post-body p-4 space-y-2 flex-col flex items-center">
        <div class="post-image flex justify-center">
          <img src={blog.image} alt="Blog-post" class="w-1/2 rounded-md shadow-xl shadow-slate-400 ">
        </div>
        <div class="post-info   pt-5 text-sm text-gray-500">
          <p>Published on {blog.date} by {blog.author}</p>
        </div>
        <div class="post-title text-xl font-bold my-2">{blog.title}</div>
        <div class="post-subtitle">{blog.subtitle}</div>
        <div class="post-description">{blog.description}</div>
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</div>

<script>

  import { onMount } from 'svelte';
   import { page } from '$app/stores';

 
  import  posts  from '../lib/posts.js'; 

  let blog;
 
 const id = $page.params.slug



  onMount(() => {
    blog = fetchBlogById(id);   
  });

  function fetchBlogById(id) {
    return posts.find(post => post.id === id);
  }
</script>



