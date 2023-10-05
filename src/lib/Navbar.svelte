<!-- Navbar.svelte -->
<script>
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="bg-white text-black p-4  shadow-md navbar">
  <div class=" flex items-center justify-between w-full  b">
   <div class="text-xl font-semibold icon-container">
  <a href="/">
    <img src="src\assets\images\mushroom.png" alt="Mushroom Icon" width="60" class="icon-img-1">
    <img src="src\assets\images\mushroomcolor.png" alt="Mushroom Icon" width="60" class="icon-img-2">
  </a>
</div>

    <!-- Hamburger Menu Button -->
    <button
      class="lg:hidden focus:outline-none"
      on:click={toggleMenu}
    >
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
    <div class="hidden lg:flex  space-x-8 text-lg">
      <a href="#" class="hover:underline">Security Awareness</a>
      <a href="/technology" class="hover:underline">Technology</a>
      <a href="/art" class="hover:underline">Art</a>
      <a href="/software-development" class="hover:underline">Software Development</a>
    </div>
  </div>

  <!-- Responsive Mobile Menu (shown on small screens) -->
  {#if isMenuOpen}
    <div class="lg:hidden mt-2 space-y-2">
      <a href="#" class="block px-4 py-2 hover:bg-gray-700">Security Awareness</a>
      <a href="/technology" class="block px-4 py-2 hover:bg-gray-700">Technology</a>
     <a href="/art" class="hover:underline">Art</a>
        <a href="/software-development" class="hover:underline">Software Development</a>
    </div>
  {/if}
</nav>

<style lang="scss">
 
  /* Style your navbar as needed */
 a {
  position: relative;
  transition: transform 0.3s;
  text-decoration: none;
  font-weight: 600;


  &:hover {
    transform: scaleX(1);
     text-decoration: none;
  }

  &::after {
    content: '';
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


.icon-img-1 {
  width: 60px;
  transition: opacity 0.3s ease-in-out; /* Define the transition property */
}
.icon-img-2 {
 

   opacity: 0;
   width: 0;
}
.icon-container:hover .icon-img-1 {
  opacity: 0; 
  width: 0;
}

.icon-container:hover .icon-img-2 {
  opacity: 1; width: 60px; 
}
</style>
