<script>
  import "../app.postcss";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  // import "../app.postcss"
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";


/** @type {import('./$types').LayoutData} */
  export let data;

export let posts = data?.posts
  export let pageSession = data?.session;
</script>

<Navbar {pageSession} {posts} />
<div class="wrapper">
  {#key data?.pathname}
    <main
      class="w-full"
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
