<!-- Navbar.svelte -->
<script>
  import { onDestroy, onMount } from "svelte";
  import { page } from "$app/stores";
  import { signIn, signOut } from "@auth/sveltekit/client";
  import {
    Avatar,
    Dropdown,
    DropdownHeader,
    DropdownItem,
    DropdownDivider,
  } from "flowbite-svelte";
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class=" navbar z-50" id="navbar">
  <div class=" flex items-center lg:justify-between space-x-2 w-full">
    <div class="text-xl font-semibold icon-container">
      <a href="/">
        <img
          src="https://cdn-icons-png.flaticon.com/128/12285/12285722.png"
          alt="Home"
          width="60"
          class=" w-10 py-2"
        />
        <!-- <img src="src\assets\images\mushroomcolor.png" alt="Mushroom Icon" width="60" class="icon-img-2">
        home
      </a> -->
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
    <div
      class="hidden lg:flex lg:space-x-6 text-lg lg:justify-center lg:items-center"
    >
      {#if !$page.data?.session}
        <a href="/login" class="link">Login</a>
      {:else}
        <div class="flex space-x-2 items-center">
          <Avatar
            id="user-drop"
            src={$page.data?.session.user.image}
            class="cursor-pointer hover:shadow-lg hover:border-2 transition-all duration-100 shadow-md "
          />
          <Dropdown
            triggeredBy="#user-drop"
            class="shadow-xl  shadow-slate-400"
          >
            <DropdownHeader>
              <span class="block text-sm">{$page.data?.session.user.name}</span>
              <span class="block truncate text-sm font-medium">
                {$page.data?.session.user.email}</span
              >
            </DropdownHeader>

            <DropdownItem>
              <button on:click={() => signOut()} class=" m-1">Sign out</button
              ></DropdownItem
            >
          </Dropdown>
        </div>
      {/if}
      {#if $page?.data?.session?.user?.email === "tung.le0319@gmail.com"}
        <a href="/auth/create" class="link">Create</a>
        <a href="/TKR" class="link">TKR</a>
      {/if}

      <a href="/about" class="link">About</a>
      <a href="/contact" class="link">Contact</a>
      <a href="https://github.com/TungLe0319" target="_blank" class="w-10"
        ><img
          src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
          alt="Github"
        /></a
      >
      <a
        href="https://www.linkedin.com/in/tung-le0319/"
        target="_blank"
        class="w-10"
        ><img
          src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
          alt="LinkedIn"
        /></a
      >
    </div>
  </div>

  <!-- Responsive Mobile Menu (shown on small screens) -->
  {#if isMenuOpen}
    <div class="lg:hidden mt-2 flex flex-col space-y-2 w-fit">
      {#if !$page.data?.session}
        <a href="/login" class="hover:underline w-fit">Login</a>
      {:else}
        <!-- else content here -->
        <!-- <a href="/auth/account" class="hover:underline w-fit">Account</a> -->
      {/if}
      {#if $page?.data?.session?.user?.email === "tung.le0319@gmail.com"}
        <a href="/auth/create" class="hover:underline w-fit">Create</a>
      {/if}

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
      rgba(164, 191, 196, 0.116) 0%,
      rgba(6, 7, 6, 0) 100%
    );
  }

  /* Style your navbar as needed */
  .link,
  .sign-out-btn {
    @apply relative transition-transform duration-200  text-2xl;

    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

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
