<script>
  export let post;
</script>

<!-- BlogPost.svelte -->

<div class="blog-post-card ">
  <a class="link-container" href={`blog/${post.id}`}>
    <img src={post.image} alt="Blog-post-img" class="blog-post-card-image" />
    <div class="blog-post-card-body ">
      <div class="blog-post-card-body-title-and-subtitle  ">
        <div class="blog-post-card-title ">{post.title}</div>
        <div class="blog-post-card-subtitle "> {post.subtitle}</div>
      </div>
      <div class="blog-post-card-date-author-category flex justify-between">
        Created on {post.date} by {post.author} 
    <div class="text-sm font-semibold category-badge">
  {post.category}
</div>

      </div>
    </div>
  </a>
</div>

<style lang="scss">

  .link-container{
    @apply flex space-x-4
  }

  .blog-post-card {
    @apply  p-3 my-2 shadow-md flex rounded-md
  }
  .blog-post-card-image {
    @apply w-1/2 rounded-md shadow-xl shadow-gray-400  transition-all   duration-150 ease-in-out
  hover:shadow-xl hover:shadow-orange-200  hover:brightness-75;

  width: 500px;
  height: 350px;
  object-fit: cover;
  }

  .blog-post-card-body {
    @apply  p-4 w-1/2 flex flex-col justify-between
  } 

  .blog-post-card-body-title-and-subtitle{
    @apply flex-col  space-y-10  flex items-center 
  }

  .blog-post-card-title{
  @apply text-4xl font-extrabold
  }
.blog-post-card-subtitle{
  @apply  text-2xl font-semibold text-gray-400
}
.category-badge {
  display: inline-block;
  padding: 4px 8px; /* Adjust padding as needed */
  background-color: #007bff; /* Choose your desired background color */
  color: #fff; /* Text color for better contrast */
  border-radius: 999px; /* Use a large value for a rounded shape */
  font-size: 12px; /* Adjust font size as needed */
  text-transform: uppercase; /* Optional: Convert text to uppercase */
}

// .blog-post-card-date-and-author{
//   @apply 
// }
</style>
