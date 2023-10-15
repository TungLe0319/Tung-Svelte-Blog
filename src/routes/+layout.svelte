<script>
  import "$lib/assets/scss/main.scss";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  // import "../app.postcss"
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";

  export let data;
  export const pageSession = $page.data.session
</script>

<Navbar />
<div class="wrapper">
  {#key data?.pathname}
    <main
      class="w-full background"
      in:fade={{ duration: 300, delay: 300 }}
      out:fade={{ duration: 300 }}
    >
      <slot {pageSession} />
    </main>
  {/key}

  <Footer />
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .background {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 86%,
      rgba(164, 191, 196, 0.3617822128851541) 100%
    );
  }
</style>
