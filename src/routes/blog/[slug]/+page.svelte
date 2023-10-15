<script>
  import CommentCard from "$components/Comments/CommentCard.svelte";
  import CommentForm from "$components/Comments/CommentForm.svelte";
  import LikeBlogPost from "$components/LikeBlogPost.svelte";
  import RecentPosts from "$components/RecentPosts.svelte";
  import LinkedInCard from "$components/LinkedInCard.svelte";
  import { onDestroy, onMount } from "svelte";

  export let data;

  /**
   * @type {import('@prisma/client').Post}
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
    post = data?.body.post;
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
  <div class=" flex mt-16">
    <div class="w-3/4 mt-8">
      <!-- POST  -->

      <div class="post">
        <div class="post-body p-4 space-y-2 flex-col flex items-center">
          <div class="post-image flex justify-center">
            <img
              src={post?.img}
              alt="Blog-post"
              class=" rounded-md shadow-xl shadow-slate-400"
            />
          </div>
          <div class="post-info pt-5 text-md text-slate-400 font-bold">
            <p>
              Published {new Date(post.datePublished).toDateString()} by {post
                .author.name}
            </p>
            <div class="flex justify-center items-center my-2 space-x-4">
              <img
                title="like"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                alt="heart"
                class="w-6 h-6"
              />
              <div class=" font-semibold text-2xl text-black">
                {post.likes.length}
              </div>
            </div>
          </div>
          <div class="post-title text-xl font-bold my-2">{post?.title}</div>
          <div class="post-subtitle">{post?.subtitle}</div>
          <div class="post-content">{@html post?.content}</div>
        </div>
      </div>
      <!-- COMMENT FORM  -->
      {#if data?.session}
        <CommentForm on:commentCreated={handleCommentCreated} {post} />
      {/if}
      <!-- COMMENT SECTION  -->
      <div class="comment-container">
        {#each comments as comment (comment.id)}
          <CommentCard
            on:commentDeleted={handleCommentDeleted(comment.id)}
            {comment}
          />
        {/each}
      </div>
    </div>

    <!-- Recent Post Section to the right -->
    <div class="w-1/4 mt-8 px-4 pb-5">
      <div class="sticky top-5 z-10">
        <RecentPosts {recentPosts} />
        <!-- LINKED IN  -->
        <LinkedInCard />
        <!--  !LIKES -->
        <LikeBlogPost {post} {liked} on:likeToggled={handleLikeToggled(post)} />
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
    @apply p-3 shadow-md flex justify-center space-x-2 rounded-md;
  }

  .comment-container {
    @apply p-4 my-2 mt-10  relative;
  }
  .post-content :global(h1) {
    @apply text-4xl text-gray-800 font-semibold my-4 mb-10;
  }

  .post-content :global(h2) {
    @apply text-3xl text-orange-300 font-semibold my-4;
  }

  .post-content :global(h3) {
    @apply text-2xl text-gray-600 font-semibold my-4;
  }

  .post-content :global(p) {
    @apply text-gray-700 text-lg leading-7 my-4;
  }

  .post-content :global(ul),
  .post-content :global(ol) {
    @apply text-gray-700 text-lg leading-7 my-4;
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
</style>
