<!-- YourPage.svelte -->

<script>

   import { signIn, signOut } from "@auth/sveltekit/client"
  import { page } from "$app/stores"

</script>

<div class="mt-20">
<div class="banner">
  <!-- Banner image -->
  <img src="https://img.freepik.com/free-vector/hand-drawn-japanese-illustration-cherry-tree-petals_23-2149601832.jpg?w=1380&t=st=1696862588~exp=1696863188~hmac=34bbc25b49f39ef342f3bf36d33683fd980eb8aecad938a1b461679052b8cbea" alt="Banner" />
  
  <!-- Profile picture (rounded and shadowed) -->
  <div class="profile-picture">
    <img src="https://avatars.githubusercontent.com/u/107594367?v=4" alt="Profile Picture" />
  </div>
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


</div>
<style>
  /* Add your CSS styles here */
  .banner {
    position: relative;
  }

  .banner img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  .profile-picture {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    width: 100px; /* Adjust the size as needed */
    height: 100px; /* Adjust the size as needed */
  }

  .profile-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Add more styles for your Auth section as needed */
</style>
