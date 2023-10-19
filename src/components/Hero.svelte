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
      {heroProps.title}
    </div>

    <div class="hero-subtitle">
      {heroProps.subTitle}
    </div>
  </div>
</div>

<!-- 
  .hero-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  position: relative;
}
.hero-image-container::before {
  content: "";
  position: absolute;
  bottom: 0;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 10px; /* adjust height as per your need */
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    #fff
  ); /* adjust the color as per your need */
}
 -->

<style lang="scss">
  .hero-title {
    @apply lg:text-6xl  text-3xl    sm:mt-12 md:mt-12 lg:mt-12 xl:mt-24    text-center  select-none hover:cursor-default;

    transform: rotate(-2deg);
    font-family: "Permanent Marker", cursive;
  }

  .hero-subtitle {
    @apply lg:text-4xl text-2xl flex justify-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24  text-center lg:pb-20  select-none hover:cursor-default;
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
  position: absolute;
  bottom: 0;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 200px; /* adjust height as per your need */
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.3), /* Adjust the transparency as needed */
    rgba(255, 255, 255, 0.5), /* Adjust the transparency as needed */
    rgba(255, 255, 255, 0.7), /* Adjust the transparency as needed */
    rgba(255, 255, 255, 0.9), /* Adjust the transparency as needed */
    #fff
  );
}

  .hero-text {
    @apply lg:pb-52;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;
    color: #fff;
  }
</style>
