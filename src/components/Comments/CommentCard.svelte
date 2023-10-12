<!-- commentCard.svelte -->
<script>
  import { page } from "$app/stores";
  import { error } from "@sveltejs/kit";
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import {
    Button,
    Dropdown,
    DropdownItem,
    Checkbox,
    Helper,
    Avatar,
  } from "flowbite-svelte";

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

    <div class="flex items-center space-x-4">
  <Avatar     src={comment?.user?.image} class="shadow-md shadow-slate-500" />
  <div class="space-y-1 font-medium dark:text-white">
    <div>{comment?.user?.name}</div>
    <!-- <div class="text-sm text-gray-500 dark:text-gray-400"></div> -->
  </div>
</div>
  
  
  </div>

  <div class="content-container">
    {#if comment?.user?.email === userEmail}
      <Button
        class="p-1 w-fit  bg-transparent hover:bg-opacity-40 hover:bg-orange-400"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/7168/7168581.png"
          alt=""
          class="w-5"
        /></Button
      >
      <Dropdown class="w-60 p-3 space-y-1 text-sm shadow-lg shadow-slate-400 ">
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <div class="">
            <button on:click={deleteComment(comment.id)} class="">Delete</button
            >
          </div>
        </li>
    
      </Dropdown>
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
