<script>
  export let post;
</script>

<div class="post p-3 my-2 shadow-md flex space-x-2  rounded-md">
  <img src={post.image} alt="Blog-post" class="post-image w-1/2 rounded-md shadow-xl shadow-slate-400 hover:shadow-xl hover:shadow-red-300">
  <div class="post-body p-4 w-1/2 space-y-4 flex-col flex items-center ">
    <div class="post-title text-xl font-bold">{post.title}</div>
    <div class="post-description">{post.description}</div>
  </div>
</div>