<script>
  import { Badge } from "flowbite-svelte";
  import { ClockSolid } from "flowbite-svelte-icons";
  import { svelteTime } from "svelte-time";

  export let recentPosts;
</script>

<div>
  <h4 class="  recent-post-text">Recent Posts</h4>

  {#each recentPosts as recentPost, index (recentPost.id)}
    <div class="lg:flex space-x-3 my-2 pb-4 border-b-2">
      <div class=" w-1/3">
        <a class="flex justify-center" href="{`/posts/${recentPost?.id}`}">
          <img
            src="{recentPost.img}"
            class="recent-post-img"
            alt="post illustration"
          />
        </a>
      </div>
      <div class="flex flex-col justify-between w-2/3">
        <a
          class="hover:text-orange-500 hover:underline transition-all duration-150"
          href="{`/posts/${recentPost?.id}`}"
        >
          <div class="text-sm font-semibold">
            {recentPost.title}
          </div>
        </a>
        <div
          class=" text-xs font-bold text-gray-500 flex justify-between items-center"
        >
          <Badge color="default" border class="">
            <ClockSolid class="w-2.5 h-2.5 mr-1.5 " />
            <time
              use:svelteTime="{{
                live: true,
                timestamp: recentPost.datePublished,
                format: 'MMMM D, YYYY',
              }}"></time>
          </Badge>
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .recent-post-img {
    @apply w-20 h-20 object-cover rounded-md hover:brightness-75 transition-all duration-300;
    @media only screen and (min-width: 1400px) {
      @apply w-16 h-16;
    }
  }
  //when screen is 768px OR LESS

  .recent-post-text {
    @apply border-l-2 pl-2 mb-4 border-l-orange-300  font-semibold text-gray-500;
    @media only screen and (min-width: 1400px) {
      @apply text-sm;
    }
  }
</style>
