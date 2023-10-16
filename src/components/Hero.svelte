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
  <div class="hero-text text-shadow-overlay">
    <div class="hero-title">
      <h1 class="text-6xl">{heroProps.title}</h1>
    </div>

    <div class="hero-subtitle">
      <h2 class="text-4xl">{heroProps.subTitle}</h2>
    </div>
  </div>
</div>

<style lang="scss">
  .hero-title {
    @apply flex justify-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 text-white text-center pt-20 select-none hover:cursor-default;

    transform: rotate(-2deg);
    font-family: "Permanent Marker", cursive;
  }

  .hero-subtitle {
    @apply flex justify-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24  text-white text-center p-20  select-none hover:cursor-default;
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
