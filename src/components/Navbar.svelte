<!-- Navbar.svelte -->
<script >
  import { page } from "$app/stores";
  import { signOut } from "@auth/sveltekit/client";
  import {
    Avatar,
    Dropdown,
    DropdownHeader,
    DropdownItem,
    DropdownDivider,
    DarkMode,
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  import { ArrowRightToBracketSolid, GithubSolid, LinkedinSolid } from "flowbite-svelte-icons";
  import SearchBar from "./SearchBar.svelte";

  export let pageSession;
  export let posts;
  let y = 0;
  let lastScrollY = 0;
  let isNavbarHidden =false;
  let activeUrl

  $: {
    activeUrl = $page.url.pathname;
    if (y == 0) {
      isNavbarHidden = false;
    }
  }

  const handleScroll = () => {
    if (y > lastScrollY) {
      isNavbarHidden = true;
    } else {
      isNavbarHidden = false;
    }
    lastScrollY = y;
  };
</script>


  <div
    class:navbar-hidden="{isNavbarHidden}"
    id="navi"
    class="flex transition-all duration-300 dark:border-none fixed w-full top-0 z-50 left-0  justify-between px-6 py-1 rounded {y>200 ? 'bg-white  shadow':'bg-transparent'} dark:bg-gray-900  "
  >
    <NavBrand href="/">
      <img
        src="https://imgs.search.brave.com/YWjAuewFGspuo35AEkQ2ropTlCjZx1H73-kcak5PThM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzNo/dGt6L3N0eWxlcy9j/b21tdW5pdHlJY29u/XzVnbjQ3ZGhkcDRv/MzEucG5n"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span
        class="self-center whitespace-nowrap text-xl font-1 font-semibold dark:text-white"
      >
        <span class="font-bold text-orange-500">B</span>rowse
        <span class="font-bold text-orange-500">L</span>earn
        <span class="font-bold text-orange-500">O</span>ffer
        <span class="font-bold text-orange-500">G</span>row
      </span>
    </NavBrand>
    <div class="flex items-center justify-center space-x-5 md:order-2">
      {#if pageSession?.user}
        <Avatar
          id="avatar-menu"
          src="{pageSession?.user?.image}"
          class="shadow-md cursor-pointer"
        />
      {:else}
        <a href="/login">
        <ArrowRightToBracketSolid/>
        </a>
      {/if}
      <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
      <DarkMode btnClass=" w-6 h-6" />

      <a href="https://github.com/TungLe0319" target="_blank">
        <GithubSolid class="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com/in/tung-le0319/" target="_blank">
        <LinkedinSolid class=" w-6 h-6" />
      </a>
    </div>
    {#if pageSession?.user}
      <Dropdown placement="bottom" triggeredBy="#avatar-menu">
        <DropdownHeader>
          <span class="block text-sm">{pageSession?.user?.name}</span>
          <span class="block truncate text-sm font-medium"
            >{pageSession?.user?.email}</span
          >
        </DropdownHeader>
        {#if pageSession?.user?.email === "tung.le0319@gmail.com"}
          <DropdownItem>
            <a href="/auth/create">Create</a>
          </DropdownItem>
        {/if}

        <DropdownDivider />
        <DropdownItem>
          <button on:click="{() => signOut()}" class=" m-1">Sign out</button
          ></DropdownItem
        >
      </Dropdown>
    {/if}
    <NavUl activeUrl="{activeUrl}" activeClass="active-link" nonActiveClass="">
      <NavLi class="text-lg font-3" href="/" active="{true}">Home</NavLi>
      <NavLi class="text-lg font-3" href="/about">About</NavLi>
    
    </NavUl>
    <SearchBar posts="{posts}" />
  </div>


<svelte:window bind:scrollY="{y}" on:scroll="{handleScroll}" />

<style lang="scss" scoped>
  .navbar-hidden {
    transform: translateY(-100%);
    transition: all 0.5s ease;
  }

  :global(.active-link) {
    @apply text-white bg-green-700 md:bg-transparent md:text-orange-700 md:dark:text-orange-400 dark:bg-green-600 md:dark:bg-transparent;
  }
</style>
