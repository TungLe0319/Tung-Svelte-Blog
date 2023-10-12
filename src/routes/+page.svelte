<script>
  import BlogPostCard from "../components/BlogPostCard.svelte";
  import FeaturedBlogPost from "../components/FeaturedBlogPost.svelte";
  import { onMount } from "svelte";
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import { fade, fly } from "svelte/transition";
  

  export let data;
  let posts = data.body?.posts;
  let selectedCategory = "all";
  let filteredPosts = [];

  // Function to filter posts based on the selected category
  function filterPosts(category) {
    if (category === "all") {
      filteredPosts = posts;
    } else {
      filteredPosts = posts.filter(
        (post) =>
          post.categories &&
          post.categories.some((cat) => cat.name === category)
      );
    }
  }

  // Initialize filteredPosts with all posts
  filterPosts(selectedCategory);

  // Event listener for the category selection dropdown
  function handleCategoryChange() {
    selectedCategory = categorySelect.value;
    filterPosts(selectedCategory);
  }

  let featuredPosts = posts.filter(
    (post) =>
      post.categories &&
      post.categories.some((category) => category.name === "Featured")
  );



</script>

<div>
  <div class="relative hero-image-container">
    <img
      class="hero-image"
      src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80"
      alt="banner"
    />
    <div class="hero-text text-shadow-overlay">
      <div class="  headliner">
        <h1 class="text-6xl">
          there is no education like curiosity 
        </h1>
      </div>

      <div class="headliner-2">
        <h2 class="text-4xl">
          How Art, Technology and Curiosity Fuel My Life
        </h2>
      </div>
    </div>
  </div>

  <div class="text-center flex flex-col items-center mb-20 ">
    <div class="  absolute -bottom-72 z-30">
      <div class=" featured-post-headliner">
        <h3 class="text-4xl mb-10 permanent-marker-font text-white text-shadow-overla">
          Featured Posts
        </h3>
      </div>
      <div class="flex justify-center space-x-2 mb-20">
        {#each featuredPosts as featuredPost}
          <FeaturedBlogPost {featuredPost} />
        {/each}
      </div>
    </div>


    <div
      class="posts-container mt-60 flex flex-col justify-center p-2 m-10 px-10"
    >
      <div class="selection-bar py-10">
        <label for="categorySelect" class="mr-2">Select Category:</label>
        <div class="p-8">

</div>
        <select
          id="categorySelect"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 p-2.5"
          on:change={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Technology">Technology</option>
          <option value="Art and Culture">Art</option>
          <option value="Health and Wellness">Health</option>
          <!-- Add more category options as needed -->
        </select>
      </div>
      <div class="border-b-4 border-b-orange-300 rounded-md mb-4"></div>
      {#each filteredPosts as post (post.id)}
        {#key post}
          <div
            in:fly={{ x: -100, duration: 300, opacity: 1 }}
            out:fly={{ x: 100, duration: 300, opacity: 0 }}
            class="fly-transition my-4"
          >
            <BlogPostCard {post} />
          </div>
        {/key}
      {/each}
    </div>

    <!-- <div
      class="posts-container  mt-60 flex flex-col justify-center p-2 m-10 px-10"
    >
      {#each posts as post, index (post.title)}
        <BlogPostCard {post} />
      {/each}
    </div> -->
  </div>
</div>

<style lang="scss">
  
  .fly-transition {
    will-change: transform;
  }
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

  .hero-image {
    height: 100vh;
    /* always scale the image to the appropriate size of your screen */
    background-size: cover;
    background-image: url(https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg);

    background-position: bottom;
    /* keeps the image fixed while scrolling , neat effect. */
    background-attachment: fixed;
  }


  .hero-image-container:before {
  content: "";
  z-index: 1;
  height: 200px;
  background: rgb(255, 255, 255);

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
  // .hero-image::after {
  //   content: "";
  //   position: absolute;
  //   top: 1000px;
  //   left: 0;
  //   right: 0;
  //   bottom: -18px;
  //   background: linear-gradient(
  //     to bottom,
  //     rgba(182, 50, 50, 0),
  //     rgba(255, 255, 255, 1)
  //   ); /* Fades to white at the bottom */
  //   pointer-events: none; /* Allows clicks to pass through the overlay */
  // }
</style>
