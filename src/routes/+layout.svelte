<script>

  import "../assets/scss/main.scss"
  import Navbar from "../lib/Navbar.svelte";
  Navbar
</script>

<Navbar />

<main class="pt-12">
  <slot />
</main>