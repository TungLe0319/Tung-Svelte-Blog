<script>
  import "../app.postcss";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  // import "../app.postcss"
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";


/** @type {import('./$types').LayoutData} */
  export let data;
export let 
posts = data?.posts
  export let pageSession = data?.session;
</script>

<Navbar {pageSession} {posts} />
<div class="flex flex-col min-h-screen">
  {#key data?.pathname}
    <main
      class="w-full"
 transition:fade={{ delay: 150, duration: 200 }}
    >
      <slot {pageSession} />
    </main>
  {/key}

  <Footer />
</div>

