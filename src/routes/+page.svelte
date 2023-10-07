<script>
  import BlogPostCard from "../components/BlogPostCard.svelte";
  import FeaturedBlogPost from "../components/FeaturedBlogPost.svelte";

  import posts from "../lib/posts.js";

  import { fade } from "svelte/transition";

  // This transition defines the animation when entering a page
  const intro = (node) => {
    return {
      duration: 30,
      delay: 0,
      easing: "ease",
      css: (t) => `opacity: ${t}`,
    };
  };
</script>

<div class="page-container">
  <div class="text-center mb-2 flex flex-col items-center">
    <div class=" flex justify-center" in:fade={intro}>
      <img
        src="src\assets\images\ensocircle.png"
        alt=""
        class="infinite-rotate w-1/6"
      />
    </div>


<!-- {#each posts as post1, index (post1.title)}
  <FeaturedBlogPost {posts}/>
{/each} -->

   <FeaturedBlogPost />

 

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
