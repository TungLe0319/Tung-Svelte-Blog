<!-- commentCard.svelte -->
<script>
  import { page } from "$app/stores";
  import { error } from "@sveltejs/kit";
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  export let comment;
  let userEmail = $page.data.session?.user?.email;
  let showOptionMenu = false;
  const dispatch = createEventDispatcher();

  function formatTimeDifference(createdAt) {
    const currentTime = new Date();
    const commentTime = new Date(createdAt);

    const timeDifference = currentTime - commentTime;
    const seconds = Math.floor(timeDifference / 1000);

    if (seconds < 60) {
      return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
    } else {
      const minutes = Math.floor(seconds / 60);
      if (minutes < 60) {
        return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
      } else {
        const hours = Math.floor(minutes / 60);
        return `${hours} hour${hours === 1 ? "" : "s"} ago`;
      }
    }
  }

  async function deleteComment(commentId) {
    try {
      const shouldDelete = confirm(
        "Are you sure you want to delete this comment?"
      );

      if (shouldDelete) {
        const formData = new FormData();
        formData.append("id", commentId);
        // COMMENT CREATOR
        formData.append("userEmail", userEmail);

        const response = await fetch(`/api/comments`, {
          method: "DELETE",
          body: formData,
        });

        const deletedComment = await response.json();

        dispatch("commentDeleted", deletedComment);
      }
    } catch (error) {
      console.error("Failed to Delete");
    }
  }

  function toggleShowOptionMenu() {
    showOptionMenu = !showOptionMenu;
  }
</script>

<div
  class="comment-card group relative"
  in:fly={{ x: -100, duration: 300, opacity: 1 }}
  out:fly={{ x: 100, duration: 400, opacity: 0 }}
>
  <div class="user-info">
    <img
      class="user-image"
      src={comment?.user?.image}
      alt={comment?.user?.name}
    />
    {comment?.user?.name}
  </div>

  <div class="content-container">
      {#if comment?.user?.email === userEmail}
    <button class="ellipsis-menu flex justify-end" on:click={() => toggleShowOptionMenu()}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/7168/7168581.png"
        alt=""
        class="w-5"
      />
      {#if showOptionMenu}
        <div
          class="popup-menu p-2 bg-slate-800 text-white absolute -top-8 right-0.5 transition-all duration-150 rounded-md shadow-sm hover:shadow-lg hover:shadow-slate-400 text-lg shadow-into-light-font font-semibold"
        >
          <button on:click={deleteComment(comment.id)} class="">Delete</button>
        </div>
      {/if}
    </button>
  {/if}
    <div class="created-at">
      {formatTimeDifference(comment.createdAt)}
    </div>

    <div class="content">
      {comment?.content}
    </div>
  </div>


</div>

<style lang="scss" scoped>
  .comment-card {
    @apply flex items-center  px-5 py-1 border-b-2  my-4;
  }
  .content-container {
    @apply flex flex-col w-full;
  }

  .created-at {
    @apply text-right text-sm font-medium;
  }

  .content {
    @apply flex  p-2;
  }

  .user-info {
    @apply flex flex-col justify-center my-2 items-center mr-4 text-sm;
  }

  .user-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .content {
    flex: 1;
  }
</style>
