<script>
  import { page } from "$app/stores";
  import { error } from "@sveltejs/kit";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import CommentCard from "../../../components/Comments/CommentCard.svelte";
  import CommentForm from "../../../components/Comments/CommentForm.svelte";

  export let data;
  let post;
  let recentPosts;
  let comments;
  let postId;
  let userEmail;
  let content = "";
  $: {
    post = data?.body.post;
    recentPosts = data?.body?.recentPosts;
    comments = data?.body?.post?.comments;
  }

  onMount(() => {
    postId = post?.id;
    userEmail = $page.data.session?.user?.email;
  });

  // console.log(comments);

  async function submitComment() {
    let formData = new FormData();
    formData.append("postId", postId);
    formData.append("content", content);
    formData.append("userEmail", userEmail);

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
          <div class="post-info pt-5 text-sm text-gray-500">
            <!-- <p>Published on  by {data.post.author}</p> -->
          </div>
          <div class="post-title text-xl font-bold my-2">{post?.title}</div>
          <div class="post-subtitle">{post?.subtitle}</div>
          <div class="post-content">{@html post?.content}</div>
        </div>
      </div>
      <!-- COMMENT FORM  -->
      {#if $page.data.session}
        <!-- <form
          on:submit|preventDefault={submitComment}
          method="PUT"
          action="?/put"
        >
          <div
            class=" p-2 shadow-md w-full bg-red-50 flex justify-center flex-col"
          >
            <label for="content">Content:</label>
            <textarea
              id="content"
              bind:value={content}
              required
              class="p-2 rounded focus:outline-none shadow-md"
            />

            <button type="submit">Submit Comment</button>
          </div>
        </form> -->

        <CommentForm {post} />
      {/if}
      <!-- COMMENT SECTION  -->
      <div class="comment-container">
        {#each comments as comment (comment.id)}
          <CommentCard {comment} />
        {/each}
      </div>
    </div>

    <!-- Recent Post Section to the right -->
    <div class="w=1/4 mt-8 px-4">
      <h4
        class="  border-l-2 pl-2 border-l-orange-300 text-shadow font-semibold text-gray-500"
      >
        Recent Posts
      </h4>

      {#each recentPosts as recentPost, index (recentPost.id)}
        <div class="flex space-x-2 my-2 p-2 pb-4 border-b-2">
          <div class="">
            <a href={`/blog/${recentPost?.id}`}>
              <img
                src={recentPost.img}
                class="recent-post-img"
                alt="post illustration"
              />
            </a>
          </div>
          <div class="flex flex-col justify-between">
            <a
              class="hover:text-orange-500 transition-all duration-150"
              href={`/blog/${recentPost?.id}`}
            >
              <div class="text-sm font-semibold flex-wrap break-words">
                {recentPost.title}
              </div>
            </a>
            <div class=" text-xs font-bold text-gray-500 flex justify-between">
              {new Date(recentPost.datePublished).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "2-digit",
              })} -
              {recentPost.author.name}
            </div>
          </div>
        </div>
      {/each}

      <div class="mt-10 flex items-center">
        <a
          href="https://www.linkedin.com/in/tung-le0319/"
          target="_blank"
          class="flex items-center space-x-2"
        >
          <img
            src="https://media.licdn.com/dms/image/D5603AQHXRnhq5heTzA/profile-displayphoto-shrink_100_100/0/1668461106434?e=1702512000&v=beta&t=33NYfv1mItUA6k5ntGdAv9rZ98bJDR1PTEbRUhlsw20"
            alt="linkedin profile"
            class="w-16 h-16 rounded-full shadow-md shadow-slate-500 hover:brightness-75 transition-all duration-150"
          />
          <span class="text-blue-500 font-semibold">LinkedIn</span>
        </a>
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
    @apply p-4 my-2 flex flex-col;
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

  .recent-post-img {
    @apply w-16 h-16 object-cover rounded-md hover:brightness-75 transition-all duration-300;
  }
</style>
