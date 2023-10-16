<script>
  import BlogPostCard from "../components/BlogPostCard.svelte";
  import FeaturedBlogPost from "../components/FeaturedBlogPost.svelte";

  import { fly } from "svelte/transition";
  import Hero from "../components/Hero.svelte";

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

  const heroProps = {
    image:
      "https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80",
    title: "there is no education like curiosity",
    subTitle: "How Art, Technology and Curiosity Fuel My Life",
    height: 100,
  };
</script>

<div>
  <Hero {heroProps} />

  <div class="text-center flex flex-col items-center mb-20">
    <div class="  absolute -bottom-72 z-30">
      <div class=" featured-post-headliner">
        <h3 class="text-4xl mb-10 font-1 text-white text-shadow-overlay">
          Featured 
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
        <label for="categorySelect" class="font-2 font-semibold text-4xl"
          >Select Category:</label
        >
        <div />
        <select
          id="categorySelect"
          class="bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 p-2.5"
          on:change={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Technology">Technology</option>
          <option value="Art and Culture">Art</option>
          <option value="Health and Wellness">Health</option>
          <!-- Add more category options as needed -->
        </select>
      </div>
      <div class="border-b-4 border-b-orange-300 rounded-md mb-4" />
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
  </div>
</div>

<style lang="scss">
  .fly-transition {
    will-change: transform;
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
