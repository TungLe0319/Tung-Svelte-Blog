<script>
  import BlogPostCard from "../../../components/BlogPostCard.svelte";


 export let data;

  let posts = data.body?.posts;
</script>


<div class="page-container">


  <div class="text-center mb-2 flex flex-col items-center">
    <div class=" flex justify-center">
      <!-- <img
        src="src\assets\images\ensocircle.png"
        alt=""
        class="infinite-rotate w-1/6"
      /> -->

      <h1>
        
      </h1>
    </div>
 



    <div
      class="posts-container mt-2 flex flex-col justify-center p-2 m-10 px-10"
    >
      {#each posts as post, index (post.title)}
        <BlogPostCard {post} />
      {/each}
    </div>
  </div>

  
</div>

<style lang="scss">

</style>
