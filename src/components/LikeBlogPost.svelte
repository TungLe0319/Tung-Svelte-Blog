<script>
  import { page } from "$app/stores";
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  export let post;

  

  let liked = false; 

  async function toggleLikePost() {
    let formData = new FormData();
    formData.append("postId", post.id);
    formData.append("userEmail", $page.data?.session.user.email);

    const response = await fetch("/api/likes", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      liked = !liked;
      const like = await response.json();

      handleToggledLikePost(like);
    } else {
      console.error("Error in creating Post");
    }
  }

  function handleToggledLikePost(likeData) {
    const newLike = likeData;

    // Check if the newLike.id is already in the likes array
    const likeIndex = post.likes.findIndex((like) => like.id === newLike.id);

    if (likeIndex !== -1) {
      // If the like is already in the array, remove it
      post.likes = post.likes.filter((like) => like.id !== newLike.id);
    } else {
      // If the like is not in the array, add it
      post.likes = [...post.likes, newLike];
    }
  }
</script>

<div class=" mt-10">
  {#if $page.data.session}
  <button class="like-btn" on:click={toggleLikePost}>
  {#if liked }
      <img
        title="like"
        src="https://cdn-icons-png.flaticon.com/128/4118/4118906.png"
        alt="heart"
        class="w-10"
      />
      <div class=" shadow-into-light-font font-semibold text-2xl">UNLIKE</div>
    {:else}
      <img
        title="like"
        src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
        alt="heart"
        class="w-10"
      />
      <div class=" shadow-into-light-font font-semibold text-2xl">LIKE</div>
    {/if}</button
  >
  {/if}

  <div class="mt-5 grid grid-cols-6 gap-y-2">
    {#each post.likes as l (l.id)}
      <div class="flex items-center">
        <img
          in:fly={{ x: -100, duration: 300, opacity: 1 }}
  out:fly={{ x: 100, duration: 400, opacity: 0 }}
          src={l.user?.image}
          alt=""
          class="w-10 h-10 rounded-full shadow-md shadow-slate-400 object-cover"
        />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .like-btn {
    @apply p-1  items-center rounded-md flex space-x-4 hover:underline  transition-all duration-150;
  }
</style>
