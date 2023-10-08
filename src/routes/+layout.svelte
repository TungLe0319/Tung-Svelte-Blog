<script>

  import "../assets/scss/main.scss"
  import Footer from "../lib/Footer.svelte";
  import Navbar from "../lib/Navbar.svelte";
   import { fade ,fly} from 'svelte/transition';

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
<div class="wrapper justify-between  ">

  
  <main class="w-full background "  transition:fade={intro}>
    <slot />
  </main>
  
  <Footer/>
</div>

<style lang="scss" scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
  .background{
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 86%, rgba(164,191,196,0.3617822128851541) 100%);
  }
</style>