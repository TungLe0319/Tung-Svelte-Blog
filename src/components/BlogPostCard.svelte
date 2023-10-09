<script>
  import CategoryBadge from "./CategoryBadge.svelte";

  export let post;

  function getCategoryColorClass(category) {
    switch (category) {
      case "Technology":
        return "border-r-4 border-r-blue-400  ";
      case "Art":
        return "border-r-4 border-r-purple-400";
      case "Software-development":
        return "border-r-4 border-r-red-400";
      case "Health":
        return "border-r-4 border-r-green-400";
      default:
        return ""; // Default color for other categories
    }
  }
</script>

<div class="blogPost ">
  <a class="link-container" href={`/blog/${post?.id}`}>
    <img src={post?.img} alt="Blog-post-img" class="blogPost-image" />
  </a>
  <div class="blogPost-body">
    <div class="blogPost-body-title-and-subtitle">
      <a
        class=" blogPost-link-title"
        href={`blog/${post?.id}`}
      >
        {post?.title}
      </a>
      <div class="blogPost-subtitle">{post?.subtitle}</div>
    </div>

    <div class="blogPost-categories">
      {#each post?.categories as categories}
        <div class="">
          {categories.name}
        </div>
      {/each}
    </div>
  </div>


    <div class="blogPost-date ">
       {new Date(post?.datePublished).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "2-digit",
      })} 
      </div>
</div>

<style lang="scss">
  .link-container {
    @apply flex space-x-4;
  }

  .blogPost {
    @apply p-3 my-2 shadow-lg flex rounded-l-md relative;
  }
  .blogPost-image {
    @apply w-1/2 rounded-md  shadow-2xl shadow-gray-400  transition-all   duration-300 ease-in-out
  hover:shadow-xl  hover:brightness-50;

    width: 500px;
    height: 350px;
    object-fit: cover;
  }

  .blogPost-body {
    @apply p-4 w-1/2 flex flex-col justify-between;
  }

  .blogPost-body-title-and-subtitle {
    @apply flex-col  space-y-10  flex items-center;
  }

  .blogPost-link-title {
    @apply text-4xl mt-4 font-extrabold hover:text-orange-500 transition-all duration-200 hover:underline hover:underline-offset-2;
  }
  .blogPost-subtitle {
    @apply text-2xl font-semibold text-gray-400;
  }

  .blogPost-categories {
    @apply flex text-sm  font-semibold space-x-4 text-orange-400;
  }

  .blogPost-date {
    @apply absolute top-3 right-4 font-semibold text-sm text-orange-400;
  }
  // .blogPost-date-and-author{
  //   @apply
  // }
</style>
