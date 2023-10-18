<script>
  import "$lib/assets/scss/main.scss";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  // import "../app.postcss"
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import NavbarCopy from "../components/NavbarCopy.svelte";

  export let data;
  export const pageSession = $page.data?.session;
</script>

<NavbarCopy {pageSession} />
<div class="wrapper">
  {#key data?.pathname}
    <main
      class="w-full "
      in:fade={{ duration: 200, delay: 100 }}
      out:fade={{ duration: 200 }}
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
