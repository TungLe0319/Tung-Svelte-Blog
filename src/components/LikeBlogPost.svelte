<script>
  import { page } from "$app/stores";
  import { createEventDispatcher } from "svelte";


  export let post;

  const dispatch = createEventDispatcher();

  let liked = false; // Initialize with false

  async function toggleLikePost() {
    let formData = new FormData();
    formData.append("postId", post.id);
    formData.append("userEmail", $page.data?.session.user.email);

    const response = await fetch("/api/likes", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      liked = !liked
      const like = await response.json();

      dispatch("toggledLikePost", like);
    } else {
      console.error("Error in creating Post");
    }


  }
</script>



<!-- 
{#if post.likes.some(like => like.user?.email.includes($page.data?.session?.user?.email)) }

   <p>You liked this post.</p>
{:else}

   <p>You haven't liked this post.</p>
{/if} -->
<button class="like-btn" on:click={toggleLikePost}>   {#if liked}
    <img title="like" src="https://cdn-icons-png.flaticon.com/128/4118/4118906.png" alt="heart" class="w-10">
    <div class=" shadow-into-light-font font-semibold text-2xl">
      UNLIKE
      </div>
  {:else}


    <img title="like" src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="heart" class="w-10">
    <div class=" shadow-into-light-font font-semibold text-2xl">
      LIKE
    </div>
  {/if}</button>

<style lang="scss">
  .like-btn {
    @apply p-1  items-center rounded-md flex space-x-4 hover:underline  transition-all duration-150;
  }
</style>
