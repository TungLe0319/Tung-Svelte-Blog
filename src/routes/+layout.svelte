<script>

  import "../assets/scss/main.scss"
  import Footer from "../lib/Footer.svelte";
  import Navbar from "../lib/Navbar.svelte";
   import { fade } from 'svelte/transition';

  // This transition defines the animation when entering a page
  const intro = (node) => {
    return {
      duration: 3000,
      delay: 0,
      easing: 'ease',
      css: (t) => `opacity: ${t}`,
    };
  };
</script>

<Navbar />

<main class="w-full " transition:fade={intro}>
  <slot />
</main>

<Footer/>