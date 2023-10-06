


<div class="page-container">


<div class="text-center mb-2">
<div class=" flex justify-center">
  <img src="src\assets\images\ensocircle.png" alt="" class="infinite-rotate  w-1/2  ">
</div>

<div class="posts-container shadow-xl  mt-2 flex flex-col justify-center p-2 m-10 ">

</div>
  {#each posts as post, index (post.title)}
      <BlogPostCard {post} />
    {/each}
</div>
</div>


<script>


  import BlogPostCard from "../components/BlogPostCard.svelte";


import posts from "../lib/posts.js"


</script>


<style>

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


.infinite-rotate {
  animation: rotate 50s linear infinite; /* Adjust the duration (10s) for slower or faster rotation */
}
</style>

