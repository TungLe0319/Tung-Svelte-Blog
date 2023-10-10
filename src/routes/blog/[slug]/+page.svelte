<script>
  import { fade } from "svelte/transition";

  export let data;
  let post;
  let recentPosts;

  $: {
    post = data.body.post;
  }
  recentPosts = data?.body?.recentPosts;

 
console.log(data.body.post);

</script>

{#if data}
  <div class=" flex mt-16" >
    <div class="w-3/4 mt-8">
      <div class="post p-3 shadow-md flex justify-center space-x-2 rounded-md">
        <div class="post-body p-4 space-y-2 flex-col flex items-center">
          <div class="post-image flex justify-center">
            <img
              src={post?.img}
              alt="Blog-post"
              class=" w-3/4 rounded-md shadow-xl shadow-slate-400"
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
               <a class="hover:text-orange-500 transition-all duration-150" href={`/blog/${recentPost?.id}`}>
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
  <a href="https://www.linkedin.com/in/tung-le0319/" target="_blank" class="flex items-center space-x-2">
    <img src="https://media.licdn.com/dms/image/D5603AQHXRnhq5heTzA/profile-displayphoto-shrink_100_100/0/1668461106434?e=1702512000&v=beta&t=33NYfv1mItUA6k5ntGdAv9rZ98bJDR1PTEbRUhlsw20" alt="linkedin profile" class="w-16 h-16 rounded-full shadow-md shadow-slate-500 hover:brightness-75 transition-all duration-150">
    <span class="text-blue-500 font-semibold ">LinkedIn</span>
  </a>
</div>
    </div>
  </div>
{:else}
  <div class="">NO POST</div>
{/if}

<!-- <BlogPost {data?.post} /> -->
<style lang="scss">
  .post-content :global(h1) {
    @apply text-6xl text-gray-700 font-semibold; /* Apply text styles */
  }

  .post-content :global(h2) {
    @apply text-4xl text-gray-400 font-semibold my-2; /* Apply text styles */
  }

  .post-content :global(p) {
    @apply text-gray-600 text-xl; /* Apply text color */
  }

  .post-content :global(img) {
    @apply rounded-md shadow-md shadow-slate-600 my-14; /* Apply rounded corners and box shadow */
  }

  .recent-post-img {
    @apply w-16 h-16 object-cover rounded-md hover:brightness-75 transition-all duration-300;
  }
</style>
