<script>

  import BlogPost from "../../../components/BlogPost.svelte"; 
  export let data

// console.log(data);
</script>




 {#if data}
<div>
  
    <div class="post p-3 my-2 shadow-md flex justify-center space-x-2 rounded-md">
    
      <div class="post-body p-4 space-y-2 flex-col flex items-center">
        <div class="post-image flex justify-center">
          <img src={data.post?.img} alt="Blog-post" class=" w-3/4 rounded-md shadow-xl shadow-slate-400 ">
        </div>
        <div class="post-info   pt-5 text-sm text-gray-500">
          <!-- <p>Published on  by {data.post.author}</p> -->
        </div>
        <div class="post-title text-xl font-bold my-2">{data.post?.title}</div>
        <div class="post-subtitle">{data.post?.subtitle}</div>
        <div class="post-content">{@html data.post?.content}</div>
      </div>
    </div>
 
</div>
 {:else}
<div class="">
  NO POST
</div>
 {/if}

<!-- <BlogPost {data?.post} /> -->
<style lang="scss" >
  
  
:global(a) {
  @apply rounded-md shadow-md; /* Apply rounded corners and box shadow */
}

:global(h1) {
  @apply text-4xl text-gray-700 font-semibold; /* Apply text styles */
}

:global(h2) {
  @apply text-2xl text-gray-400 font-semibold; /* Apply text styles */
}

:global(p) {
  @apply text-gray-600; /* Apply text color */
}

:global(img) {
  @apply rounded-md shadow-md shadow-slate-600 my-14; /* Apply rounded corners and box shadow */
}
</style>