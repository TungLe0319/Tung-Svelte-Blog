<script>
  import { Pagination } from "flowbite-svelte";
  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";
  let helper = { start: 1, end: 4 };

  import { AppState } from "$lib/stores/AppState";

  $: $AppState.activeCategory;

  const getPosts = async () => {
    try {
      let cursorPosition = $AppState.myCursor;
      let formData = new FormData();
      formData.append("cursor", cursorPosition);

      const data = await fetch(`/api/posts/pagination`, {
        method: "POST",
        body: formData,
      });
      const res = await data.json();

      $AppState.myCursor = res.myCursor;
      $AppState.filteredPosts = res.posts;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const previous = async () => {
    helper.end -= 4;
    helper.start -= 4;

    await getPosts();
  };

  const next = async () => {
    helper.end += 4;
    helper.start += 4;
    await getPosts();
  };
</script>

<div class="flex flex-col items-center justify-center gap-2 mt-2">
  <Pagination table>
    <button
      on:click="{previous}"
      slot="prev"
      class="flex items-center gap-2 text-white"
    >
      <ArrowLeftOutline class="w-3.5 h-3.5 mr-2" />
      Prev
    </button>
    <button
      on:click="{next}"
      slot="next"
      class="flex items-center gap-2 text-white"
    >
      Next
      <ArrowRightOutline class="w-3.5 h-3.5 mr-2" />
    </button>
  </Pagination>
  <div class="text-sm text-gray-700 dark:text-gray-400">
    <span class="font-semibold text-gray-900 dark:text-white"
      >{helper.start}</span
    >
    to
    <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span
    >
  </div>
</div>
