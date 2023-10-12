<!-- commentCard.svelte -->
<script>
  import { page } from "$app/stores";
  import { error } from "@sveltejs/kit";
  import { createEventDispatcher } from "svelte";

  export let comment;

  
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
</script>

<div class="comment-card group relative">
  <div class="user-info">
    <img
      class="user-image"
      src={comment?.user?.image}
      alt={comment?.user?.name}
    />
    {comment?.user?.name}
  </div>

  <div class="content-container">
    <div class="created-at">
      {formatTimeDifference(comment.createdAt)}
    </div>

    <div class="content">
      {comment?.content}
    </div>
  </div>
</div>

<style lang="scss" scoped>
  .delete-btn {
    @apply p-2 shadow-md shadow-slate-300 rounded-md text-white hover:shadow-xl hover:shadow-slate-500 scale-0 group-hover:scale-100 transition-all duration-300 absolute top-0 right-0 bg-slate-800;
  }
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
