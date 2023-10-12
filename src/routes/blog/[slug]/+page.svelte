<script>
  import { page } from "$app/stores";
  import { fade, fly } from "svelte/transition";
  import CommentCard from "../../../components/Comments/CommentCard.svelte";
  import CommentForm from "../../../components/Comments/CommentForm.svelte";

  export let data;
  let post;
  let recentPosts;
  let comments = [];
  let userEmail = $page.data.session.user.email;
  
  $: {
    post = data?.body.post;
    recentPosts = data?.body?.recentPosts;
    comments = data?.body?.post?.comments;
  }

  let showOptionMenu = Array(comments.length).fill(false);

  function toggleShowOptionMenu(index) {
    showOptionMenu[index] = !showOptionMenu[index];
  }
  async function deleteComment(commentId) {
    try {
      const formData = new FormData();
      formData.append("id", commentId);
      formData.append("userEmail", userEmail);

      // console.log(formData.get('commentId'));
      const response = await fetch(`/api/comments`, {
        method: "DELETE",
        body: formData,
      });

      const deletedComment = await response.json();

      comments = comments.filter((comment) => comment.id !== deletedComment.id);
    } catch (error) {
      console.error("Failed to Delete");
    }
  }

  function handleCommentCreated(event) {
    const newComment = event.detail;
    comments = [...comments, newComment]; // Add the new comment to the list
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
        <CommentForm on:commentCreated={handleCommentCreated} {post} />
      {/if}
      <!-- COMMENT SECTION  -->
      <div class="comment-container">
        {#each comments as comment (comment.id)}
          <div
            class="relative group"
            in:fly={{ x: -100, duration: 300, opacity: 1 }}
            out:fly={{ x: 100, duration: 300, opacity: 0 }}
          >
            <CommentCard {comment} />

            <button
              class="ellipsis-menu absolute top-0 right-0"
            on:click={() => toggleShowOptionMenu(comment.id)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/7168/7168581.png"
                alt=""
                class="w-5"
              />
              {#if showOptionMenu[comment.id] }
                <div class="popup-menu p-2 bg-slate-800 text-white absolute -top-10 transition-all duration-150 rounded-md shadow-sm hover:shadow-lg hover:shadow-slate-400" >
                  <button on:click={deleteComment(comment.id)} class=""
                    >Delete</button
                  >
                </div>
              {/if}
            </button>
          </div>
        {/each}
      </div>
    </div>

    <!-- Recent Post Section to the right -->
    <div class="w-1/4 mt-8 px-4">
      <div class="sticky top-5 z-10">
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
              <div
                class=" text-xs font-bold text-gray-500 flex justify-between"
              >
                {new Date(recentPost.datePublished).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "2-digit",
                  }
                )} -
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
  </div>
{:else}
  <div class="">NO POST</div>
{/if}

<!-- COMMENT FORM -->

<!-- <BlogPost {data?.post} /> -->
<style lang="scss">
  .delete-btn {
    @apply p-2 shadow-md shadow-slate-300 rounded-md text-white hover:shadow-xl hover:shadow-slate-500 transition-all duration-300 scale-0 group-hover:scale-100  bg-slate-800 absolute top-0 right-0;
  }

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

  .recent-post-img {
    @apply w-16 h-16 object-cover rounded-md hover:brightness-75 transition-all duration-300;
  }
</style>
