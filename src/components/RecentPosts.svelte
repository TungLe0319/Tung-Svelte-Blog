<script>
  export let recentPosts;
</script>

<div>
  <h4
    class="  border-l-2 pl-2 border-l-orange-300 text-shadow font-semibold text-gray-500"
  >
    Recent Posts
  </h4>

  {#each recentPosts as recentPost, index (recentPost.id)}
    <div class="lg:flex space-x-3 my-2 pb-4 border-b-2">
      <div class="">
        <a class="flex justify-center" href={`/blog/${recentPost?.id}`}>
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
</div>

<style lang="scss">
  .recent-post-img {
    @apply w-16 h-16 object-cover rounded-md hover:brightness-75 transition-all duration-300;
  }
</style>
