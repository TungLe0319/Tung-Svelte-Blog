<script>
  import { page } from "$app/stores";

  export let post;
  let content = "";

  async function submitComment() {
    let formData = new FormData();
    formData.append("postId", post.id);
    formData.append("content", content);
    formData.append("userEmail", $page.data?.session.user.email);

    const response = await fetch("/api/comments", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Post created successfully");
    } else {
      console.error("Error in creating Post");
    }

    content = "";
  }
</script>

{#if $page.data.session}
  <form on:submit|preventDefault={submitComment} method="PUT" action="?/put">
    <div class=" p-2 shadow-md w-full bg-red-50 flex justify-center flex-col">
      <label for="content">Content:</label>
      <textarea
        id="content"
        bind:value={content}
        required
        class="p-2 rounded focus:outline-none shadow-md"
      />

      <button type="submit">Submit Comment</button>
    </div>
  </form>
{:else}
  <div>UNAUTHORIZED, NO SESSION FOUND</div>
{/if}

<style lang="scss">
</style>
