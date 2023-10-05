


<div class="page-container">
<div class="p-8 mt-24 flex justify-center  items-center flex-col">
  <img src="src\assets\images\Profilephoto.png" width="300px" height="300px" alt="Profile Photo" class="   rounded-full shadow-lg">

  <div class="text-center mt-2">
    <p class="text-2xl">Hello, I'm</p>
    <p class="text-2xl   font-bold text-orange-400">Tung Le</p>
    <p class="mt-4 text-md text-gray-500 font-semibold">Passionate about information-technology and development</p>
  </div>
</div>


<div class="posts-container  mt-2 flex flex-col justify-center p-2 ">
<div class="text-center mb-2">
  <h1 class="text-black">
  
    Top 10 Recent Posts
  </h1>
</div>
  {#each posts as post, index (post.title)}
      <PostPreviewCard {post} />
    {/each}
</div>
</div>


<script>
  import PostPreviewCard from "../components/post-preview-card.svelte";


import posts from "../lib/posts.js"


</script>


<style>

</style>



<!-- <div key={index} class=" post p-3 my-2 shadow-md flex space-x-2 bg-red-300 rounded-md">
  
    <img src="https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280" alt="Blog-post " class=" post-image w-1/2 rounded-md shadow-xl shadow-slate-400 hover:shadow-xl hover:shadow-red-300">
  
<div class="post-body p-4 w-1/2  space-y-4  flex-col flex  items-center  bg-slate-400">
  <div class="post-title  text-xl font-bold">
    TITLE
  </div>
  <div class="post-description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illo, omnis quo consectetur architecto voluptatem minima atque odio ex eaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quos animi blanditiis quibusdam quod ipsam explicabo asperiores. Consequuntur, eveniet ex?
  </div>
</div>
</div> -->

