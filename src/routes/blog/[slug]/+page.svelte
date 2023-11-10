<script>
  import CommentCard from "$components/Comments/CommentCard.svelte";
  import CommentForm from "$components/Comments/CommentForm.svelte";
  import LikeBlogPost from "$components/LikeBlogPost.svelte";
  import RecentPosts from "$components/RecentPosts.svelte";
  import LinkedInCard from "$components/LinkedInCard.svelte";
  import { onMount } from "svelte";
  import {
    ClockOutline,
    HeartOutline,
    MessagesOutline,
  } from "flowbite-svelte-icons";
  import { svelteTime } from "svelte-time";
  import { Avatar, Badge } from "flowbite-svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  /**
   * @type {import('@prisma/client').Prisma.PostInclude<comments:true,author:true,likes:true>}
   */
  let post;

  /**
   * @type {import('@prisma/client').Post[]}
   */
  let recentPosts;

  /**
   * @type {import('@prisma/client').Comment[]}
   */
  let comments = [];

  /**
   * @type {import('@prisma/client').Like[]}
   */
  let likes = [];

  /**
   * @type {boolean}
   */
  let liked;

  $: {
    post = data?.body?.post;
    recentPosts = data?.body?.recentPosts;
    comments = data?.body?.post?.comments;
    likes = data?.body?.post?.likes;
  }

  onMount(() => {
    liked = data?.body?.post?.likes.some(
      (like) => like.user.email === data.session?.user.email
    );
  });

  /**
   * Handle a comment created event.
   *
   * @param {Event} event - The comment created event.
   */
  function handleCommentCreated(event) {
    const newComment = event.detail;
    comments = [...comments, newComment];
  }

  function handleCommentDeleted(commentId) {
    // Find the index of the comment to be deleted
    const commentIndex = comments.findIndex(
      (comment) => comment.id === commentId
    );

    if (commentIndex !== -1) {
      // Remove the comment from the array
      comments = [
        ...comments.slice(0, commentIndex),
        ...comments.slice(commentIndex + 1),
      ];
    }
  }

  function handleLikeToggled(updatedPost) {
    liked = updatedPost.likes.some(
      (like) => like.user.email === data.session?.user.email
    );

    post = updatedPost;
  }
</script>

{#if data}
  <div class=" lg:flex mt-16">
    <div class="post-container">
      <!-- POST  -->

      <div class="post">
        <div class="post-body">
          <img src="{post?.img}" alt="Blog-post" class=" post-image" />

          <div class="post-info">
            <Badge
              color="default"
              border
              class="hover:-translate-y-2 transition-all duration-150  text-base cursor-default py-2 "
            >
              <ClockOutline class="w-6 h-6 mr-1.5 " />
              <div class="space-x-3">
                <time
                  use:svelteTime="{{
                    live: true,
                    timestamp: post.datePublished,
                    format: 'MMMM D, YYYY',
                  }}"></time>

                <time
                  use:svelteTime="{{
                    relative: true,
                    live: true,
                    timestamp: post.datePublished,
                    format: 'MMMM D, YYYY',
                  }}"></time>
              </div>
            </Badge>

            <Badge
              color="default"
              border
              class="hover:-translate-y-2 transition-all duration-150  text-base cursor-default py-1 space-x-2"
            >
              <Avatar src="{post.author.image}" size="sm" />
              <span> {post.author.name}</span>
            </Badge>

            <Badge
              color="default"
              border
              class="hover:-translate-y-2 transition-all duration-150  text-base cursor-default py-2"
            >
              <HeartOutline class="w-6 h-6 mr-1.5 " />
              {post.likes.length}
            </Badge>
            <Badge
              color="default"
              border
              class="hover:-translate-y-2 transition-all duration-150  text-base cursor-default py-2"
            >
              <MessagesOutline class="w-6 h-6 mr-1.5 " />
              {post.comments.length}
            </Badge>
          </div>

          <div class="post-title">{post?.title}</div>
          <div class="post-subtitle">{post?.subtitle}</div>
          <hr class="  w-full" />

          <article class="   prose   max-w-full">
            {@html post?.content}
          </article>

          <!-- <div class="post-content dark:text-white">{@html post?.content}</div> -->
        </div>
      </div>
      <!-- COMMENT FORM  -->
      {#if data?.session}
        <CommentForm on:commentCreated="{handleCommentCreated}" post="{post}" />
      {/if}
      <!-- COMMENT SECTION  -->
      <div class="comment-container">
        {#each comments as comment (comment.id)}
          <CommentCard
            on:commentDeleted="{handleCommentDeleted(comment.id)}"
            comment="{comment}"
          />
        {/each}
      </div>
    </div>

    <!-- Recent Post Section to the right -->
    <div class="recent-posts-container">
      <div class="sticky top-28 z-10">
        <RecentPosts recentPosts="{recentPosts}" />
        <!-- LINKED IN  -->
        <LinkedInCard />
        <!--  !LIKES -->
        <LikeBlogPost
          post="{post}"
          liked="{liked}"
          on:likeToggled="{handleLikeToggled(post)}"
        />
      </div>
    </div>
  </div>
{:else}
  <div class="">NO POST</div>
{/if}

<!-- COMMENT FORM -->

<!-- <BlogPost {data?.post} /> -->
<style lang="scss">
  .post {
    @apply p-3 px-6 shadow-md   space-x-2 rounded-md w-full;
  }
  .post-body {
    @apply py-3 space-y-2 flex-col flex items-center;
  }
  .post-info {
    @apply pt-5 text-base space-x-3 text-slate-400 font-bold flex items-center justify-center;
  }

  .post-image {
    @apply rounded-md shadow-xl shadow-slate-400 dark:shadow-lg dark:shadow-gray-600/20 md:w-full xl:w-1/2;
  }
  .post-title {
    @apply text-4xl  font-bold pt-5 dark:text-white;
  }
  .post-subtitle {
    @apply dark:text-white text-xl pb-4;
  }

  .post-container {
    @apply lg:w-3/4 xl:w-4/5 mt-8;
  }

  .comment-container {
    @apply p-4 my-2 mt-10  relative;
  }
  .post-content :global(h1) {
    @apply text-4xl  font-semibold my-4 mb-10;
  }

  .post-content :global(h2) {
    @apply text-3xl text-orange-300 font-semibold my-4;
  }

  .post-content :global(h3) {
    @apply text-2xl  font-semibold my-4;
  }

  .post-content :global(p) {
    @apply text-lg leading-7 my-4;
  }

  .post-content :global(ul),
  .post-content :global(ol) {
    @apply text-lg leading-7 my-4;
  }

  .post-content :global(li) {
    @apply list-disc ml-6 my-4   text-base font-medium;
  }

  .post-content :global(a) {
    @apply text-blue-500 hover:underline;
  }

  .post-content :global(img) {
    @apply rounded-md shadow-md shadow-slate-600 my-6;
  }

  .post-content :global(blockquote) {
    @apply border-l-4 border-gray-300 pl-4 my-6;
  }

  .post-content :global(pre) {
    @apply bg-gray-100 p-4 rounded-md my-6;
  }

  .post-content :global(code) {
    @apply font-mono bg-gray-100 rounded-md p-1;
  }

  .recent-posts-container {
    @apply lg:w-1/4 xl:w-1/5  mt-8 px-4 pb-5  dark:text-white;
  }
</style>
