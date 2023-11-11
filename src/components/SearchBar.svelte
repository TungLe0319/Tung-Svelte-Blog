<script>
  import { Input } from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons";
  import { onMount } from "svelte";
  import { AppState } from "$lib/stores/AppState";

  export let posts;

  let searchTerm = "";
  let filteredPosts = [];

  // Function to filter posts based on the search term
  function filterPosts() {
    filteredPosts = $AppState.posts
      .filter((post) => {
        const lowerTitle = post.title.toLowerCase();
        const lowerSearchTerm = searchTerm.toLowerCase();
        return lowerTitle.includes(lowerSearchTerm);
      })
      .map((post) => {
        const title = post.title;
        const lowerTitle = title.toLowerCase();
        const lowerSearchTerm = searchTerm.toLowerCase();
        const index = lowerTitle.indexOf(lowerSearchTerm);
        if (index !== -1) {
          const highlightedTitle =
            title.substring(0, index) +
            `<span class="text-orange-800 bg-orange-300 px-0.5 rounded">${title.substring(
              index,
              index + searchTerm.length
            )}</span>` +
            title.substring(index + searchTerm.length);

          return { ...post, highlightedTitle };
        } else {
          return { ...post, highlightedTitle: title };
        }
      });
  }

  // Function to handle input change and filter posts
  function handleInputChange(event) {
    searchTerm = event.target.value;
    filterPosts();
  }
  //  function handleSelect(post) {
  //     searchTerm = post.title;
  //     filteredPosts = [];
  //   }
  // Close the dropdown on click outside
  onMount(() => {
    window.addEventListener("click", (event) => {
      if (!event.target.closest(".search-dropdown")) {
        filteredPosts = [];
      }
    });
  });
</script>

<div class="relative flex items-center just-center">
  <div class="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
    <SearchOutline class="w-4 h-4 text-black " />
  </div>
  <Input
    id="search-navbar"
    class="pl-10"
    placeholder="Search posts..."
    on:input="{handleInputChange}"
  />

  {#if filteredPosts.length > 0}
    <div
      class="search-dropdown absolute top-16 left-0 bg-white border border-gray-300 dark:border-none shadow-md z-10"
    >
      <div
        class=" p-1 text-lg font-1 dark:bg-gray-800 dark:text-white outline-none border-none"
      >
        Posts:
      </div>
      <ul class="dark:bg-gray-800 outline-none border-none shadow-md w-full">
        {#each filteredPosts as post (post.id)}
          <li
            class="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <a href="/blog/{post.id}"> {@html post.highlightedTitle}</a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style lang="scss" scoped>
  .link {
    font-size: 16px !important;
  }

  .search-list {
    @apply absolute top-14 left-12 z-50 bg-slate-100 bg-opacity-50 rounded-md;
  }
  .item-list {
    @apply h-auto max-h-60 w-auto  max-w-full overflow-y-scroll;
  }
  .item {
    @apply my-2;
  }

  .not-visible {
    .magnifier {
      src: url(../assets/magnifierWhite.png) !important;
    }
    .search-list {
      background-color: rgba(0, 0, 0, 0.584);
      backdrop-filter: blur(4px);
    }
  }

  /* Set the width and height of the scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  /* Set the track color */
  ::-webkit-scrollbar-track {
    background: #f1f1f144;
  }

  /* Set the thumb color and border */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
    border: 3px solid #f1f1f1;
  }

  /* Set the thumb color on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
