<script>
  import { page } from "$app/stores";
  import { redirect } from "@sveltejs/kit";
  import { createEventDispatcher } from "svelte";
  export let post;
  let content = "";
  const dispatch = createEventDispatcher();

  async function createComment() {
    let formData = new FormData();
    formData.append("postId", post.id);
    formData.append("content", content);
    formData.append("userEmail", $page.data?.session.user.email);

    if (!$page.data?.session) {
      console.log("No User Session");
      throw redirect(303, "/login");
    }

    if (!formData.has("content") || formData.get("content").trim() === "") {
      console.log("Comment cannot be empty");
      return; // Return early if there's an error.
    }

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newComment = await response.json();
        console.log(newComment);
        dispatch("commentCreated", newComment);
        content = "";
      } else {
        console.error("Error in creating Post");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
</script>



{#if $page.data.session}
  <form on:submit|preventDefault={createComment}>
    <div class="comment-form-container">
      <h1 class="comment-form-label font-1 dark:text-white">Comment:</h1>
      <textarea
        id="content"
        name="content"
        rows="5"
        bind:value={content}
        required
        class="comment-input"
      />

      <button class=" comment-submit-button">Submit Comment</button>
    </div>
  </form>
{:else}
  <div>UNAUTHORIZED, NO SESSION FOUND</div>
{/if}

<style lang="scss" scoped>
  .comment-form-container {
    @apply p-2 w-full flex justify-center flex-col;
  }
  .comment-form-label {
    @apply font-semibold my-2;
  }

  .comment-submit-button {
    @apply text-left w-fit rounded-md p-2 mr-2 bg-slate-800 text-white font-medium;
  }

  .comment-input {
    @apply p-2 rounded   border-slate-300 shadow-md dark:bg-slate-800  mb-10;
  }
</style>
