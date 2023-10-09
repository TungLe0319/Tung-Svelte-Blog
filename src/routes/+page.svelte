<script>
  import BlogPostCard from "../components/BlogPostCard.svelte";
  import FeaturedBlogPost from "../components/FeaturedBlogPost.svelte";
  import { onMount } from "svelte";
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";

  // import posts from "../lib/posts.js";
  // import posts from "../lib/posts.js";

  export let data;

  let posts = data.body?.posts;

  let featuredPosts = data.body?.posts.filter((post) => post.categories.includes("Featured Posts"));

console.log(posts);
</script>

<div class="">
  <div class="hero-image flex flex-col">
    <div class="  headliner">
      <h1 class="text-6xl">
        there is no education like adversity and curiosity
      </h1>
    </div>

    <div class="headliner-2">
      <h2 class="text-4xl">
        How Art, Curiosity, and Passion Fuel My Creative Drive
      </h2>
    </div>
  </div>

  <!-- <div>{@html data.post.content}</div> -->
  <div class="text-center flex flex-col items-center mb-20">
    <div class="    absolute -bottom-72">
      <div class=" featured-post-headliner">
        <h3 class="text-4xl mb-10 permanent-marker-font text-white ">Featured Posts</h3>
      </div>
      <div class="flex justify-center space-x-2 mb-20">
        {#each featuredPosts as featuredPost, index ( featuredPost.id)}
          <FeaturedBlogPost {featuredPost} />
        {/each}
      </div>
    </div>

    <div
      class="posts-container  mt-60 flex flex-col justify-center p-2 m-10 px-10"
    >
      {#each posts as post, index (post.title)}
        <BlogPostCard {post} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .headliner {
    @apply flex justify-center mt-20 text-white text-center pt-20 select-none hover:cursor-default;

    transform: rotate(-2deg);
    font-family: "Permanent Marker", cursive;
  }

  .headliner-2 {
    @apply flex justify-center  text-white text-center p-20  select-none hover:cursor-default;
    font-family: "Shadows Into Light", cursive;
  }

  .featured-post-headliner {
    @apply flex justify-center mt-20 text-black text-center pt-20 select-none hover:cursor-default;
  }
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

  .hero-image {
    height: 100vh;
    /* always scale the image to the appropriate size of your screen */
    background-size: cover;
    background-image: url(https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg);

    background-position: bottom;
    /* keeps the image fixed while scrolling , neat effect. */
    background-attachment: fixed;
  }

  .hero-image::after {
    content: "";
    position: absolute;
    top: 700px;
    left: 0;
    right: 0;
    bottom: -18px;
    background: linear-gradient(
      to bottom,
      rgba(182, 50, 50, 0),
      rgba(255, 255, 255, 1)
    ); /* Fades to white at the bottom */
    pointer-events: none; /* Allows clicks to pass through the overlay */
  }
</style>
