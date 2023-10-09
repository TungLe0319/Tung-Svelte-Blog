<script>
  // import posts from "../lib/posts.js";
  export let featuredPost;
</script>

<a href={`/blog/${featuredPost?.id}`}>
  <div class=" featured-blogpost">
    <img class="featured-blogpost-img" src={featuredPost?.img} alt="post" />

    <div
      class="absolute z-20 flex justify-center w-full opacity-0 transition-opacity duration-300"
    >
      <div>
        <h4 class=" fire-effect-milo text-shadow">
          {featuredPost?.title}
        </h4>
      </div>
    </div>
  </div></a
>

<style lang="scss">
  .featured-blogpost {
    @apply relative shadow-xl duration-150 hover:brightness-75 hover:shadow-orange-300 product-card rounded-lg;

    img {
      @apply object-cover  rounded-lg shadow-xl shadow-slate-500 hover:shadow-orange-200 transition-all duration-150;
    }
  }

  .product-card {
    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
    width: 350px;
    height: 500px;
    float: left; /* Add this to make cards align horizontally */

    /* ... other styles ... */

    &:hover {
      // @apply border-4 border-green-600  ;
      width: 525px;
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;

      /* Decrease width of other product-cards when hovering */
    }

    /* ... other styles ... */
  }

  .product-card img {
    height: 100%;
    width: 100%;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .product-card .absolute {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: translateX(-50px);
    left: 0;

    top: 0;
    //when screen is 768px OR LESS
    @media only screen and (max-width: 768px) {
      opacity: 50%;
    }
  }
  .product-card:hover .absolute {
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    opacity: 1;
    transform: translateX(0px);
  }
  .product-card:hover img {
    //when screen is 768px OR LESS
    @media only screen and (min-width: 768px) {
      filter: brightness(80%);
      width: 100%;
      transition: all 3.3s ease-out !important;
    }
  }
</style>
