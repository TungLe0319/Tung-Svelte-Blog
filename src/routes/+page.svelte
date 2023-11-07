<script>
  import BlogPostCard from "../components/BlogPostCard.svelte";
  import FeaturedBlogPost from "../components/FeaturedBlogPost.svelte";
  import { browser } from "$app/environment";
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
  $:{
    heroProps.image
  }

  
</script>

<div class="whatisme">
  <Hero {heroProps} />

  <div class="text-center flex flex-col items-center mb-20">
    <div class=" container-3  lg:absolute lg:-bottom-72 -bottom-64 z-30">
      <div class=" featured-post-headliner">
        <h3 class="text-4xl mb-10 font-1 lg:text-white text-shadow-overlay">
          Featured
        </h3>
      </div>
      <div class="featured-blogs-container">
        {#each featuredPosts as featuredPost}
          <FeaturedBlogPost {featuredPost} />
        {/each}
      </div>
    </div>

    <div class="posts-container">
      <div class="selection-bar">
        <label for="categorySelect" class="selection-bar-label font-1"
          >Select Category:</label
        >
        <div />
        <select
          id="categorySelect"
          class="category-select"
          on:change={handleCategoryChange}
        >
          <option value="all">All</option>
          <option value="Technology">Technology</option>
          <option value="Art and Culture">Art</option>
          <option value="Health and Wellness">Health</option>
          <!-- Add more category options as needed -->
        </select>

  
      </div>
      <div class="divider" />
      {#each filteredPosts as post (post.id)}
        {#key post}
          <div
            in:fly={{ x: -100, duration: 300, opacity: 1 }}
            out:fly={{ x: 100, duration: 300, opacity: 0 }}
            class=" my-4"
          >
            <BlogPostCard {post} />
          </div>
        {/key}
      {/each}
    </div>
  </div>
</div>

<style lang="scss" >
  .category-select {
    @apply bg-gray-50 mt-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 p-2.5;
  }
  .divider {
    @apply border-b-4 border-b-orange-300 rounded-md mb-4;
  }

  .selection-bar {
    @apply lg:py-10 py-2;
  }
  .selection-bar-label {
    @apply font-semibold text-4xl dark:text-white;
  }
  .featured-blogs-container {
    @apply flex lg:flex-row flex-col items-center justify-center lg:space-y-0 space-y-6 lg:justify-center lg:space-x-2   mx-10 lg:mx-0 mb-20;
    //when screen is 768px OR LESS
  
  }

  .container-3{
      @media only screen and (max-height: 768px){
    bottom: -275px;
    }
  }
  .posts-container {
    @apply lg:mt-60 md:mt-56 flex flex-col justify-center p-2 lg:m-10 px-20;
  }
</style>
