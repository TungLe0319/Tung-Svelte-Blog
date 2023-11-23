<script lang="ts">
  import "../app.postcss";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import { fade } from "svelte/transition";
  import Notification from "../components/Notification.svelte";
  import type { LayoutData } from "./$types";
  import type { Post } from "@prisma/client";

  export let data:LayoutData;

$: posts = data?.posts as Post[]
  export let pageSession = data?.session;
</script>

<Navbar {pageSession} {posts} />
<div class="flex flex-col min-h-screen">
  {#key data?.pathname}
    <main
      class="w-full"
 transition:fade={{ delay: 0, duration: 200 }}
    >
      <slot {pageSession} />
    </main>
  {/key}
<Notification/>
  <Footer />
</div>

