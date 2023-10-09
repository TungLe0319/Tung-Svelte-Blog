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

<div class="blog-post-card {getCategoryColorClass(post?.category)}">
  <a class="link-container" href={`/blog/${post?.id}`}>
    <img src={post?.img} alt="Blog-post-img" class="blog-post-card-image" />
  </a>
  <div class="blog-post-card-body">
    <div class="blog-post-card-body-title-and-subtitle">
      <a
        class=" hover:text-orange-500 transition-all duration-200 hover:underline hover:underline-offset-2"
        href={`blog/${post?.id}`}
      >
        <div class="blog-post-card-title">{post?.title}</div>
      </a>
      <div class="blog-post-card-subtitle">{post?.subtitle}</div>
    </div>
    <div class="blog-post-card-date-author-category flex justify-between">
      Published {new Date(post?.datePublished).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "2-digit",
      })} by {post?.author?.name}

      <CategoryBadge category={post?.category} />
    </div>
  </div>
</div>

<style lang="scss">
  .link-container {
    @apply flex space-x-4;
  }

  .blog-post-card {
    @apply p-3 my-2 shadow-lg flex rounded-l-md;
  }
  .blog-post-card-image {
    @apply w-1/2 rounded-md  shadow-2xl shadow-gray-400  transition-all   duration-300 ease-in-out
  hover:shadow-xl  hover:brightness-50;

    width: 500px;
    height: 350px;
    object-fit: cover;
  }

  .blog-post-card-body {
    @apply p-4 w-1/2 flex flex-col justify-between;
  }

  .blog-post-card-body-title-and-subtitle {
    @apply flex-col  space-y-10  flex items-center;
  }

  .blog-post-card-title {
    @apply text-4xl font-extrabold;
  }
  .blog-post-card-subtitle {
    @apply text-2xl font-semibold text-gray-400;
  }

  // .blog-post-card-date-and-author{
  //   @apply
  // }
</style>
