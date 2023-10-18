<!-- Navbar.svelte -->
<script>
  import { page } from "$app/stores";
  import { signIn, signOut } from "@auth/sveltekit/client";
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
    ImagePlaceholder,
    Skeleton,
    TextPlaceholder,
  } from "flowbite-svelte";
  import {
    GithubSolid,
    HomeOutline,
    LinkedinSolid,
  } from "flowbite-svelte-icons";

  let isMenuOpen = false;

  export let pageSession;

  $: activeUrl = $page.url.pathname;
  let activeClass =
    "text-white bg-green-700 md:bg-transparent md:text-orange-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent";
  let nonActiveClass =
    "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<div class="relative">
  <Navbar class=" sm:px-4  fixed w-full z-20 top-0 left-0 border-b ">
    <NavBrand href="/">
      <img
        src="/images/flowbite-svelte-icon-logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >Flowbite</span
      >
    </NavBrand>
    <div class="flex items-center space-x-2 md:order-2">
      <Avatar id="avatar-menu" src={pageSession.user.image} />
      <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
      <DarkMode btnClass=" w-6 h-6" />

      <a href="https://github.com/TungLe0319" target="_blank">
        <GithubSolid class="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com/in/tung-le0319/" target="_blank">
        <LinkedinSolid class=" w-6 h-6" />
      </a>
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
        <span class="block text-sm">{pageSession.user.name}</span>
        <span class="block truncate text-sm font-medium"
          >{pageSession.user.email}</span
        >
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>
        <button on:click={() => signOut()} class=" m-1">Sign out</button
        ></DropdownItem
      >
    </Dropdown>
    <NavUl {activeUrl} {activeClass} {nonActiveClass}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
</div>

<style lang="scss">
  .scrolled {
    transform: translate(0, calc(-100% - 1rem));
  }
  .navbar {
    @apply bg-transparent  p-4 pb-20  absolute w-full;

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
    @apply relative flex ml-0 pl-0  transition-transform duration-200  text-2xl;

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
      height: 3px;
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
