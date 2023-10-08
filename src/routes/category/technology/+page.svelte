<script>
  import BlogPostCard from "../../../components/BlogPostCard.svelte";

  export let data;

  let posts = data.body?.posts;
</script>

<div class="page-container">
  <div class="flex flex-col ">

    <div class="">
      <h1 class="text-3xl font-bold mb-4">Technology</h1>

    </div>


    <div
      class="posts-container mt-2 flex flex-col justify-center text-center p-2 m-10 px-10"
    >
      {#each posts as post, index (post.title)}
        <BlogPostCard {post} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
</style>
