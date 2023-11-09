<script>
import { Search, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { SearchOutline, ChevronDownSolid } from 'flowbite-svelte-icons';
  import { AppState } from "../store/AppState";


export let categories

  let selectCategory = 'All categories'
  // export let posts;
  let searchTerm = "";
  let filteredPosts = [];

  // Function to filter posts based on the search term
  function filterPosts() {
    filteredPosts = posts
   
  }

  // Function to handle input change and filter posts
 function handleInputChange(event) {
  $AppState.searchQuery = event.target.value;
  $AppState.filteredPosts = $AppState.posts.filter((p) =>
    p.title.toLowerCase().includes($AppState.searchQuery.toLowerCase())
  );
}

</script>

<div class="relative items-center just-center ">

 <form class="flex">
  <div class="relative">
    <Button class="rounded-e-none whitespace-nowrap border border-r-0 border-primary-700">
      {selectCategory}
      <ChevronDownSolid class="w-2.5 h-2.5 ml-2.5" />
    </Button>
    <Dropdown classContainer="w-40">
      {#each categories as  label }
        <DropdownItem
          on:click={() => {
            selectCategory = label.name;
          }}
          class=' w-full {selectCategory === label.name ? 'underline' : ''}'
        >
          {label.name}
        </DropdownItem>
      {/each}
    </Dropdown>
  </div>
  <Search on:input={handleInputChange}  size="md" class="rounded-none py-2.5" placeholder="Search Mockups, Logos, Design Templates..." />
  <Button class="!p-2.5 rounded-s-none">
    <SearchOutline class="w-5 h-5" />
  </Button>
</form>
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
