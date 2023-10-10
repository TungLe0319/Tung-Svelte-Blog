<!-- Navbar.svelte -->
<script>
  import { onDestroy, onMount } from "svelte";
  import { page } from "$app/stores";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class=" navbar z-50" id="navbar">
  <div class=" flex items-center lg:justify-between space-x-2 w-full">
    <div class="text-xl font-semibold icon-container">
      <a href="/">
        <!-- <img src="src\assets\images\mushroom.png" alt="Mushroom Icon" width="60" class="icon-img-1">
    <img src="src\assets\images\mushroomcolor.png" alt="Mushroom Icon" width="60" class="icon-img-2"> -->
        home
      </a>
    </div>

    <button class="lg:hidden focus:outline-none" on:click={toggleMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Navigation Links (hidden on small screens) -->
    <div class="hidden lg:flex lg:space-x-8 text-lg">
      {#if !$page.data?.session}
        <a href="/login" class="hover:underline">Login</a>
      {:else}
        <!-- else content here -->
        <a href="/auth/account" class="hover:underline">Account</a>
      {/if}
      {#if $page?.data?.session?.user?.email === "tung.le0319@gmail.com"}
        <a href="/auth/create" class="hover:underline">Create</a>
      {/if}
      <a href="/category/technology" class="hover:underline">Technology</a>
      <a href="/art" class="hover:underline">Art</a>
      <a href="/software-development" class="hover:underline"
        >Software Development</a
      >
      <a href="/about" class="hover:underline">About</a>
      <a href="/contact" class="hover:underline">Contact</a>
    </div>
  </div>

  <!-- Responsive Mobile Menu (shown on small screens) -->
  {#if isMenuOpen}
    <div class="lg:hidden mt-2 flex flex-col space-y-2 w-fit">
      {#if !$page.data?.session}
        <a href="/login" class="hover:underline w-fit">Login</a>
      {:else}
        <!-- else content here -->
        <a href="/auth/account" class="hover:underline w-fit">Account</a>
      {/if}
      {#if $page?.data?.session?.user?.email === "tung.le0319@gmail.com"}
        <a href="/auth/create" class="hover:underline w-fit">Create</a>
      {/if}
      <a href="/category/technology" class="hover:underline w-fit">Technology</a
      >
      <a href="/art" class="hover:underline">Art</a>
      <a href="/software-development" class="hover:underline w-fit"
        >Software Development</a
      >
      <a href="/about" class="hover:underline w-fit">About</a>
    </div>
  {/if}
</nav>

<style lang="scss">
  .scrolled {
    transform: translate(0, calc(-100% - 1rem));
  }
  .navbar {
    @apply bg-transparent text-white p-4 pb-20  absolute w-full;

    background: rgb(119, 119, 119);
    background: linear-gradient(
      180deg,
      rgba(119, 119, 119, 0.5186449579831933) 0%,
      rgba(82, 199, 8, 0) 93%
    );
  }

  /* Style your navbar as needed */
  a {
    @apply relative transition-transform duration-200  text-2xl;

    text-decoration: none;
    font-weight: 600;
    font-family: "Shadows Into Light", cursive;

    &:hover {
      transform: scaleX(1);
      text-decoration: none;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: orange;
      transform-origin: 0 100%;
      transform: scaleX(0);
      transition: transform 0.3s, width 0.3s;
    }

    &:hover::after {
      transform: scaleX(1);
      width: 100%;
    }
  }

  // .icon-img-1 {
  //   width: 60px;
  //   transition: opacity 0.3s ease-in-out; /* Define the transition property */
  // }
  // .icon-img-2 {

  //    opacity: 0;
  //    width: 0;
  // }
  // .icon-container:hover .icon-img-1 {
  //   opacity: 0;
  //   width: 0;
  // }

  // .icon-container:hover .icon-img-2 {
  //   opacity: 1; width: 60px;
  // }
</style>
