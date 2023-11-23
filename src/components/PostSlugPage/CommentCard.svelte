<script lang="ts">
  import { page } from "$app/stores";
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";
  import { Dropdown, DropdownItem, Avatar, Badge } from "flowbite-svelte";
  import {  DotsHorizontalOutline } from "flowbite-svelte-icons";
  import { svelteTime } from "svelte-time";
  import type {  Prisma } from "@prisma/client";

  export let comment: Prisma.CommentGetPayload<{
    include: {
      user: true;
    };
  }>;

  let userEmail = $page.data.session?.user?.email;
  const dispatch = createEventDispatcher();

  async function deleteComment(commentId: number) {
    try {
      const shouldDelete = confirm(
        "Are you sure you want to delete this comment?"
      );

      if (shouldDelete) {
        const formData = new FormData();
        formData.append("id", commentId.toString());
      
        if (userEmail) {
          // COMMENT CREATOR
          formData.append("userEmail", userEmail);
        }

        const response = await fetch(`/api/comments`, {
          method: "DELETE",
          body: formData,
        });

        const deletedComment = await response.json();

        dispatch("commentDeleted", deletedComment);
      }
    } catch (error) {
      console.error(error);
    }
  }


</script>

<div class="comment-card group relative" transition:fly>
  <div class=" w-full">
    <div class="flex items-center justify-between space-x-3 mb-2">
      <div class="flex items-center space-x-2">
        <Avatar
          size="sm"
          src="{comment?.user?.image  || ''}"
          class="shadow-sm shadow-slate-500"
        />
        <div class="  text-center text-sm dark:text-white mt-2">
          {comment?.user?.name}
        </div>
        <div class="">
          <Badge color="dark">
            <time
              use:svelteTime="{{
                relative: false,
                live: true,
                timestamp: comment.createdAt,
                format: 'MMMM D, YYYY',
              }}"></time>
          </Badge>
        </div>
      </div>

      <div class="">
        {#if comment?.user?.email === userEmail}
          <DotsHorizontalOutline
            class="dots-menu dark:text-white cursor-pointer outline-none  focus:text-orange-400"
          />
          <Dropdown triggeredBy=".dots-menu">
            <DropdownItem>
              <button on:click="{()=> deleteComment(comment.id)}" class=""
                >Delete</button
              ></DropdownItem
            >
          </Dropdown>
        {/if}
      </div>
    </div>
  </div>

  <div class="content-container">
    <div class="content">
      {comment?.content}
    </div>
  </div>
</div>

<style lang="scss" scoped>
  .comment-card {
    @apply flex flex-col items-center  pr-5 py-1 border-b-2  my-4;
  }
  .content-container {
    @apply flex flex-col w-full p-3;
  }

  .created-at {
    @apply text-right text-sm font-medium pr-4;
  }

  .content {
    @apply flex  p-2;
  }

  .user-info {
    @apply flex w-auto flex-col justify-center my-2 items-center mr-4 text-sm;
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
