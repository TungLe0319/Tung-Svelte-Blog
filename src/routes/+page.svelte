<script>
  import BlogPostCard from "../components/BlogPostCard.svelte";
  import FeaturedBlogPost from "../components/FeaturedBlogPost.svelte";
  import { onMount } from "svelte";
  // import posts from "../lib/posts.js";
  // import posts from "../lib/posts.js";

  export let data;

  let posts = data.body?.posts;
</script>

<div class="page-container">
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
</style>
