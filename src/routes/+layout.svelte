<script>

  import "../assets/scss/main.scss"
  import Navbar from "../lib/Navbar.svelte";
   import { fade } from 'svelte/transition';

  // This transition defines the animation when entering a page
  const intro = (node) => {
    return {
      duration: 300,
      delay: 0,
      easing: 'ease',
      css: (t) => `opacity: ${t}`,
    };
  };
</script>

<Navbar />

<main class="w-full bg-red-50" transition:fade={intro}>
  <slot />
</main>