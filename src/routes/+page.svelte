<script>
  import BlogPostCard from "../components/BlogPostCard.svelte";
  import FeaturedBlogPost from "../components/FeaturedBlogPost.svelte";
  import { onMount } from "svelte";
 
  // import posts from "../lib/posts.js";
  // import posts from "../lib/posts.js";

  export let data;

  let posts = data.body?.posts;
</script>

<div class="">


  <!-- <div class="hero-image">
   
  </div> -->


    
  <!-- <div>{@html data.post.content}</div> -->
  <div class="text-center mb-2 flex flex-col items-center">
    <div class=" flex justify-center">
      <img
        src="src\assets\images\ensocircle.png"
        alt=""
        class="infinite-rotate w-1/6"
      />
    </div>
    <ul />

    <div class=" flex space-x-2 mb-20">
      {#each posts.slice(0, 3) as post, index (post.title)}
        <FeaturedBlogPost {post} />
      {/each}
    </div>

    <div
      class="posts-container mt-2 flex flex-col justify-center p-2 m-10 px-10"
    >
      {#each posts as post, index (post.title)}
        <BlogPostCard {post} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
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


  .hero-image{
    height: 50vh;
    /* always scale the image to the appropriate size of your screen */
    background-size: cover;
    background-image: url(https://img.freepik.com/free-photo/modern-abstract-design-depicts-nature-autumn-elegance-generated-by-ai_188544-29068.jpg?t=st=1696798711~exp=1696802311~hmac=76754527319f0dd495f60ed3704d8f84e3f494e8611d0c162fb3ea000b65574c&w=1380);
    
    background-position: center;
    /* keeps the image fixed while scrolling , neat effect. */
    background-attachment: fixed; 
  }
</style>
