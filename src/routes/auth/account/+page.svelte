<!-- YourPage.svelte -->

<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
</script>

<div class="relative hero-image-container">
  <img
    class="hero-image"
    src="https://images.unsplash.com/photo-1562688722-369523a4a270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    alt="banner"
  />
  <div class="hero-text flex flex-col items-center space-y-2">
    <h1 class="text-8xl text-shadow-overlay font-2">Account</h1>
    <img
      src={$page.data.session?.user.image}
      class="profile-img"
      alt="profile"
    />
  </div>

  <div class="absolute bottom-0 right-1/2 p-2 transform translate-x-1/2" />
</div>

<div class="Auth">
  <h1>SvelteKit Auth Example</h1>
  <p>
    {#if $page.data.session}
      {#if $page.data.session.user?.image}
        <span
          style="background-image: url('{$page.data.session.user.image}')"
          class="avatar"
        />
      {/if}
      <span class="signedInText">
        <small>Signed in as</small><br />
        <strong>{$page.data.session.user?.name ?? "User"}</strong>
      </span>
      <button on:click={() => signOut()} class="button">Sign out</button>
    {:else}
      <span class="notSignedInText">You are not signed in</span>
      <button on:click={() => signIn("github")}>Sign In with GitHub</button>
      <button on:click={() => signIn("google")}>Sign In with Google</button>
    {/if}
  </p>
</div>

<style lang="scss" scoped>
  /* Add your CSS styles here */
  .description {
    line-height: 1.5;
  }
  .hero-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    position: relative;
  }
  .hero-image-container::before {
    content: "";
    position: absolute;
    bottom: 0;
    z-index: 1999;
    left: 0;
    width: 100%;
    height: 10px; /* adjust height as per your need */
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      #fff
    ); /* adjust the color as per your need */
  }

  .hero-text {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;
    color: #fff;
    user-select: none;
  }

  .text-shadow-overlay {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  .profile-img {
    @apply rounded-full shadow-lg shadow-slate-700;
  }
</style>
