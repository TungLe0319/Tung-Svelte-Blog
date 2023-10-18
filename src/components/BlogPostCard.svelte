<script>
  export let post;
  let commentsLength = post.comments.length;
  let likesLength = post.likes.length;
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

<div class="blogPost">
  <a class="link-container" href={`/blog/${post?.id}`}>
    <img src={post?.img} alt="Blog-post-img" class="blogPost-image" />
  </a>
  <div class="blogPost-body">
    <div class="blogPost-body-title-and-subtitle">
      <a class=" blogPost-link-title" href={`blog/${post?.id}`}>
        {post?.title}
      </a>
      <div class="blogPost-subtitle">{post?.subtitle}</div>
    </div>

    <div class="lg:flex md:flex  justify-between">
      <div class="blogPost-categories">
        {#each post?.categories as categories}
          <div class=" ">
            {categories.name}
          </div>
        {/each}
      </div>

      <div class="likes-comment-container">
        {#if likesLength > 0}
          <div class="flex space-x-1">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
              alt="comment box"
              class="w-7"
            />
            <div class="">
              {likesLength}
            </div>
          </div>
        {/if}

        {#if commentsLength > 0}
          <div class="flex space-x-0.5">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3475/3475079.png"
              alt="comment box"
              class="w-10"
            />
            <div class="">
              {commentsLength}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <div class="blogPost-date">
    {new Date(post?.datePublished).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "2-digit",
    })}
  </div>
</div>

<style lang="scss" scoped>
  .likes-comment-container {
    @apply flex justify-center items-center space-x-4;
  }
  .link-container {
    @apply flex space-x-4;
  }

  .blogPost {
    @apply p-3 my-2 shadow-lg flex rounded-l-md relative hover:bg-orange-50 transition-all duration-150;
  }
  .blogPost-image {
    @apply rounded-md  shadow-2xl shadow-gray-400  transition-all   duration-300 ease-in-out
  hover:shadow-xl  hover:brightness-50;

    width: 500px;
    height: 350px;
    object-fit: cover;
    @media only screen and (max-width: 768px) {
      width: 250px;

      height: auto;
    }
  }

  .blogPost-body {
    @apply p-4 lg:w-1/2 w-4/5 flex flex-col lg:justify-between md:justify-between;
  }

  .blogPost-body-title-and-subtitle {
    @apply flex-col  space-y-10  flex items-center md:mt-20;
  }

  .blogPost-link-title {
    @apply lg:text-4xl text-2xl mt-4 font-extrabold hover:text-orange-500 transition-all duration-200 hover:underline hover:underline-offset-2;
  }
  .blogPost-subtitle {
    @apply lg:text-2xl  text-base font-semibold text-gray-400 md:px-10;
    margin-top: 8px !important;
  }

  .blogPost-categories {
    @apply flex  lg:text-sm lg:my-0 my-2   text-xs font-semibold space-x-4 text-orange-400;
  }

  .blogPost-date {
    @apply absolute top-3 right-4 font-semibold text-sm text-orange-400;
  }
  // .blogPost-date-and-author{
  //   @apply
  // }
</style>
