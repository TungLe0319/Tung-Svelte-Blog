<!-- BlogPost.svelte -->


<div class="blog-post-card  p-3 my-2 shadow-md flex  rounded-md">
  <a class="flex space-x-4" href={`technology/blog/${post.id}`}>
    <img src={post.image} alt="Blog-pos-image" class="blog-post-card-image">
    <div class="post-body p-4 w-1/2 space-y-10 flex-col flex items-center ">
      <div class="post-title text-4xl     font-extrabold">{post.title}</div>
      <div class="post-subtitle  text-2xl font-semibold text-gray-400">{post.subtitle}</div>
    </div>
  </a>
</div>

<script>
   export let post;

</script>


<style lang="scss">
.blog-post-card-image{
  @apply  w-1/2 rounded-md shadow-xl shadow-gray-400  transition-all   duration-150 ease-in-out
  hover:shadow-xl hover:shadow-orange-200  hover:brightness-75
}

</style>