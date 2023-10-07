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

<main class="w-full background " transition:fade={intro}>
  <slot />
</main>

<Footer/>

<style>
  .background{
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 86%, rgba(164,191,196,0.3617822128851541) 100%);
  }
</style>