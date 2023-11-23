<script lang="ts">
  import { fade } from "svelte/transition";
  import BlogPostCard from "../components/BlogPostCard.svelte";
  import FeaturedBlogPost from "../components/FeaturedBlogPost.svelte";
  import Hero from "../components/Hero.svelte";
  import SearchBarV2 from "../components/SearchBarV2.svelte";
  import { AppState } from "$lib/stores/AppState";

  //create abserver for when a component is in view for svelte

  
  import type { PageData } from "./$types";

  export let data:PageData;



  let posts = data?.posts;
  let categories = data?.categories;
  let selectedCategory = "all";

 


  $AppState.posts = data.posts;
  $AppState.filteredPosts = data?.posts;

  // Function to filter posts based on the selected category
  function filterPosts(category: string) {
    if (category === "all") {
      $AppState.filteredPosts = posts;
    } else {
      $AppState.filteredPosts = posts.filter(
        (post) =>
          post.categories &&
          post.categories.some((cat) => cat.name === category)
      );
    }
  }

  // Initialize filteredPosts with all posts
  filterPosts(selectedCategory);

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

<div class="whatisme">
  <Hero heroProps="{heroProps}" />

  <div class="text-center flex flex-col items-center mb-20">
    <div class=" container-3 lg:absolute lg:-bottom-72 -bottom-64 z-30">
      <div class=" featured-post-headliner">
        <h3 class="text-4xl mb-10 font-1 lg:text-white text-shadow-overlay">
          Featured
        
        </h3>
      </div>
      <div class="featured-blogs-container">
        {#each featuredPosts as featuredPost}
          <FeaturedBlogPost featuredPost="{featuredPost}" />
        {/each}
      </div>
    </div>

    <div class="  mt-64 px-24">
      <div class=" sticky top-16 z-50">
        <SearchBarV2 categories="{categories}" />
      </div>

      <div class="divider my-5"></div>

      <div class=" Blog-Cards-Container flex flex-col mx-20">
        {#if $AppState.filteredPosts.length > 0}
          {#each $AppState.filteredPosts as post (post.id)}
            <div transition:fade="{{ delay: 150, duration: 200 }}">
              <BlogPostCard post="{post}" />
            </div>
          {/each}
        {:else}
          <div class="w-full card p-10">
            <div class="text-4xl font-bold dark:text-white font-1">
              Couldn't find a match. Please try another search.
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style lang="scss">
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
    @apply flex lg:flex-row flex-col items-center justify-center lg:space-y-0 space-y-6 lg:justify-center lg:space-x-2   mx-10 lg:mx-0 mb-44;
    //when screen is 768px OR LESS
  }

  .container-3 {
    @media only screen and (max-height: 768px) {
      bottom: -275px;
    }
  }
</style>
