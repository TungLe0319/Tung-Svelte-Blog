<!-- Hero.svelte -->
<script lang="ts">
  interface HeroProps {
    image: string;
    title: string;
    subTitle: string;
    height: number;
  }

  export let heroProps: HeroProps;
</script>

<div class="relative hero-image-container">
  <img
    class="hero-image"
    src={heroProps.image}
    alt="Hero"
    style="height: {heroProps.height}vh"
  />
  <div class="hero-text lg:pb-52 text-shadow-overlay">
    <div class="hero-title">
      {heroProps.title}
    </div>

    <div class="hero-subtitle">
     {heroProps.subTitle}
    </div>
  </div>
</div>

<style lang="scss">
  .hero-title {
    @apply lg:text-6xl  text-3xl    sm:mt-12 md:mt-12 lg:mt-12 xl:mt-24 text-white text-center  select-none hover:cursor-default;

    transform: rotate(-2deg);
    font-family: "Permanent Marker", cursive;
  }

  .hero-subtitle {
    @apply lg:text-4xl text-2xl flex justify-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24  text-white text-center lg:pb-20  select-none hover:cursor-default;
    font-family: "Shadows Into Light", cursive;
  }

  .hero-image {
    width: 100%;
    background-size: cover;

    background-position: bottom;
    background-attachment: fixed;
    position: relative;
  }

  .hero-image-container::before {
    content: "";
    z-index: 1;
    height: 200px;
    background: rgb(255, 255, 255);

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }
</style>
