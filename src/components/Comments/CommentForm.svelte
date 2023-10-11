<script>
  import { page } from "$app/stores";
import { createEventDispatcher } from "svelte";
  export let post;
  let content = "";
  const dispatch = createEventDispatcher();

  async function createComment() {
    let formData = new FormData();
    formData.append("postId", post.id);
    formData.append("content", content);
    formData.append("userEmail", $page.data?.session.user.email);


    const response = await fetch("/api/comments", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {

       const newComment = await response.json();


     dispatch("commentCreated", newComment);
    } else {
      console.error("Error in creating Post");
    }

    content = "";
  }













</script>

{#if $page.data.session}
  <form on:submit|preventDefault={createComment}>
    <div class=" p-2  w-full  flex justify-center flex-col">
     <h1 class="shadow-into-light-font font-medium my-2"> Comment: </h1>
      <textarea
        id="content"
        name="content"
        bind:value={content}
        required
        class="p-2 rounded focus:outline-none shadow-xl shadow-slate-500 mb-10 bg-slate-800 text-white"
      />

      <button class="text-left w-1/2 p-2 mr-2 bg-slate-600">Submit Comment</button>
    </div>
  </form>
{:else}
  <div>UNAUTHORIZED, NO SESSION FOUND</div>
{/if}

<style lang="scss">
</style>
