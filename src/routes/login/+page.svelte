<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
</script>

<div class="  h-screen flex justify-center items-center w-full">
  <div class="login-box  flex-col justify-center items-center flex">



      <div class="text text-9xl p-0 absolute font-bold permanent-marker-font top-14">LOGIN</div>
    
  
      {#if $page.data.session}
        {#if $page.data.session.user?.image}
          <span
            style="background-image: url('{$page.data.session.user.image}')"
            class="avatar block w-10 h-10 rounded-full bg-cover bg-center"
          />
        {/if}
        <span class="signedInText">
          <small>Signed in as</small><br />
          <strong>{$page.data.session.user?.name ?? "User"}</strong>
        </span>
        <button
          on:click={() => signOut()}
          class="mt-2 inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sign out
        </button>
      {:else}
        <div class=" flex space-x-6">
          <button on:click={() => signIn("github")} class="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png?ga=GA1.1.2107270949.1696371575&track=ais"
              alt="Google Icon"
            />
          </button>
          <button on:click={() => signIn("google")} class="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png?ga=GA1.1.2107270949.1696371575"
              alt="Google Icon"
            />
          </button>
        </div>
      {/if}

  </div>
</div>

<!-- markup (zero or more items) goes here -->

<style>
  /* Define a class for the container div */

  /* Style the text */
  .text {
letter-spacing: 0.15em;
    margin: 1em 0;
    padding: 1.4em;
    background-image: url("https://img.freepik.com/free-vector/hand-drawn-cherry-branch-illustration_52683-91680.jpg?t=st=1696809432~exp=1696810032~hmac=9a2674a0050a3edb397b9dcfd91dda4bab35c4426d97fc5dd0ec0d786a7e46e5");
    background-size: cover;
    background-repeat: no-repeat; 
    background-position: center center; 


  }

  .text {
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(0, 0, 0, 0.2);
  }
</style>
