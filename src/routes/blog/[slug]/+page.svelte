<script>

  import BlogPost from "../../../components/BlogPost.svelte"; 
  export let data
 let {post} = data
 

</script>




 {#if data}
<div>

    <div class="post p-3  shadow-md flex justify-center space-x-2 rounded-md">
    
      <div class="post-body p-4 space-y-2 flex-col flex items-center">
        <div class="post-image flex justify-center">
          <img src={post?.img} alt="Blog-post" class=" w-3/4 rounded-md shadow-xl shadow-slate-400 ">
        </div>
        <div class="post-info   pt-5 text-sm text-gray-500">
          <!-- <p>Published on  by {data.post.author}</p> -->
        </div>
        <div class="post-title text-xl font-bold my-2">{post?.title}</div>
        <div class="post-subtitle">{post?.subtitle}</div>
        <div class="post-content">{@html post?.content}</div>
      </div>
    </div>
 
</div>
 {:else}
<div class="">
  NO POST
</div>
 {/if}

<!-- <BlogPost {data?.post} /> -->
<style lang="scss" scoped >
  
  


:global(h1) {
  @apply text-6xl text-gray-700 font-semibold; /* Apply text styles */
}

:global(h2) {
  @apply text-4xl text-gray-400 font-semibold my-2; /* Apply text styles */
}

:global(p) {
  @apply text-gray-600 text-xl; /* Apply text color */
}

:global(img) {
  @apply rounded-md shadow-md shadow-slate-600 my-14; /* Apply rounded corners and box shadow */
}
</style>