<script>
  export let post;
  let commentsLength = post.comments.length;
  let likesLength = post.likes.length;
  import { Card, Badge } from "flowbite-svelte";
  import {
    HeartOutline,
    MessagesOutline,
    ClockSolid,
  } from "flowbite-svelte-icons";

  let hCard = false;
</script>

<div class="blogPost">
  <a href={`/blog/${post?.id}`}>
    <img src={post?.img} alt="Blog-post-img" class="blogPost-image" />
  </a>
  <div class="blogPost-body">
    <div class="blogPost-body-title-and-subtitle">
      <a class=" blogPost-link-title" href={`blog/${post?.id}`}>
        {post?.title}
      </a>
      <div class="blogPost-subtitle">{post?.subtitle}</div>
    </div>

    <div class="lg:flex md:flex justify-between mt-5">
      <div class="blogPost-categories">
        {#each post?.categories as categories}
          <div class=" category-name">
            <Badge color="default" border class="text-orange-400">
              {categories.name}
            </Badge>
          </div>
        {/each}
      </div>

      <div class="likes-comment-container">
        {#if likesLength > 0}
          <div class="flex space-x-1">
            <HeartOutline />

            <div class="text-xs font-semibold">
              {likesLength}
            </div>
          </div>
        {/if}

        {#if commentsLength > 0}
          <div class="flex space-x-0.5">
            <MessagesOutline />

            <div class="text-xs font-semibold">
              {commentsLength}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <div class="blogPost-date">
    <Badge color="default" border class="text-orange-400">
      <ClockSolid class="w-2.5 h-2.5 mr-1.5 " />

      {new Date(post?.datePublished).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}
    </Badge>
  </div>
</div>

<div class="lg:hidden md:hidden">
  <Card img={post.img} href={`/blog/${post?.id}`} reverse={hCard} class="mb-4 ">
    <h5
      class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {post.title}
    </h5>
    <p
      class="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 leading-tight"
    >
      {post.subtitle}
    </p>

    <div class="lg:flex md:flex justify-between mt-5">
      <div class="blogPost-categories">
        {#each post?.categories as categories}
          <div class="category-name truncate">
            {categories.name}
          </div>
        {/each}
      </div>

      <div class="likes-comment-container">
        {#if likesLength > 0}
          <div class="flex space-x-1">
            <HeartOutline />
            <div class="">
              {likesLength}
            </div>
          </div>
        {/if}

        {#if commentsLength > 0}
          <div class="flex space-x-0.5">
            <MessagesOutline />
            <div class="">
              {commentsLength}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </Card>
</div>

<style lang="scss" scoped>
  .likes-comment-container {
    @apply flex justify-center items-center space-x-4;
  }

  .blogPost {
    @apply py-3 my-2 shadow-lg justify-between px-4 hidden lg:flex flex-col  items-center  lg:flex-row md:flex-row rounded-l-md relative hover:bg-orange-50 transition-all duration-150;
  }
  .blogPost-image {
    @apply rounded-md  shadow-2xl shadow-gray-400  transition-all   duration-300 ease-in-out
  hover:shadow-xl  hover:brightness-50;

    width: 400px;
    height: 250px;
    object-fit: cover;
    @media only screen and (max-width: 768px) {
      widows: auto;

      height: auto;
    }
  }

  .blogPost-body {
    @apply lg:p-4 md:p-4 lg:w-1/2 md:w-4/5;
  }

  .blogPost-body-title-and-subtitle {
    @apply flex-col   space-y-10  flex items-center justify-center   lg:mt-0;

    .blogPost-link-title {
      @apply lg:text-4xl md:text-2xl mt-4 font-extrabold hover:text-orange-500 transition-all duration-200 hover:underline hover:underline-offset-2;
    }
    .blogPost-subtitle {
      @apply lg:text-xl md:text-sm  font-semibold text-gray-400 md:px-10;
      margin-top: 8px !important;

      @media only screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
  }

  .blogPost-categories {
    @apply flex  lg:text-sm lg:my-0 my-2   text-xs font-semibold space-x-4 text-orange-400;

    .category-name {
      @media only screen and (max-width: 768px) {
        font-size: 10px;
      }
    }
  }

  .blogPost-date {
    @apply absolute top-3 right-4 font-semibold text-sm text-orange-400;
  }
  // .blogPost-date-and-author{
  //   @apply
  // }
</style>
