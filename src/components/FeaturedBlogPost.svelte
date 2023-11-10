<script lang="ts">
  import type { Post } from "../lib/models/post";
  import { Card } from "flowbite-svelte";
  export let featuredPost: Post;
  let hCard = false;
</script>

<a class="hidden lg:block" href="{`/blog/${featuredPost?.id}`}">
  <div class=" featured-blogpost mx-1">
    <img class="featured-blogpost-img" src="{featuredPost?.img}" alt="post" />

    <div class="featured-blogpost-title-container">
      <div>
        <h4 class=" featured-blogpost-title text-shadow-overlay">
          {featuredPost?.title}
        </h4>
      </div>
    </div>
  </div></a
>

<div class="lg:hidden">
  <Card
    img="{featuredPost.img}"
    href="{`/blog/${featuredPost?.id}`}"
    reverse="{hCard}"
    class="mb-4 "
  >
    <h5
      class="  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {featuredPost?.title}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {featuredPost?.subtitle}
    </p>
  </Card>

</div>

<style lang="scss">
  .featured-blogpost {
    @apply relative shadow-xl duration-150  hover:shadow-orange-300  rounded-lg;
    width: 325px;
    height: 375px;
    float: left; /* Add this to make cards align horizontally */
    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;

    &:hover {
      width: 525px;
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;

      .featured-blogpost-title {
        opacity: 1;
      }
    }
    @media only screen and (max-width: 768px) {
      width: 150px;
      height: 200px;
      &:hover {
        width: 250px;
      }
    }

    //when screen is 768px OR LESS
    @media only screen and (max-height: 700px) {
      height: 375px;
      width: 300px;
    }
  }

  .featured-blogpost-title-container {
    @apply absolute z-20 flex justify-center w-full opacity-0 transition-all duration-300;

    .featured-blogpost-title {
      @apply text-2xl text-orange-400 font-bold mt-10 mb-10 pr-2 border-r-4 text-left opacity-0 transition-all delay-150 p-2 rounded-l;
    }
  }

  .featured-blogpost img {
    @apply object-cover  rounded-lg shadow-xl dark:shadow-lg shadow-slate-400 dark:shadow-gray-600/50 hover:shadow-orange-200 transition-all duration-150;
    height: 100%;
    width: 100%;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .featured-blogpost .absolute {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: translateX(-50px);
    left: 0;

    top: 0;
    //when screen is 768px OR LESS
    @media only screen and (max-width: 768px) {
      opacity: 50%;
    }
  }
  .featured-blogpost:hover .absolute {
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    opacity: 1;
    transform: translateX(0px);
  }
  .featured-blogpost:hover img {
    //when screen is 768px OR LESS
    @media only screen and (min-width: 768px) {
      filter: brightness(80%);
      width: 100%;
      transition: all 3.3s ease-out !important;
    }
  }
</style>
