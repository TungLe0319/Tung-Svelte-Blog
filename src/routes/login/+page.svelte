<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import { redirect } from "@sveltejs/kit";


  // if ($page.data.session) {
  //    redirect(303, "/account")
  // }

</script>

<div class="  h-screen flex justify-center items-center w-full">
  <div class="login-box  flex-col justify-center items-center flex">



      <!-- <div class="text text-9xl p-0  absolute font-bold permanent-marker-font top-14">LOGIN</div> -->
    
  
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
          <button on:click={() => signIn("github")} class="mt-2  px-4 py-2  text-white rounded">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png?ga=GA1.1.2107270949.1696371575&track=ais"
              alt="Google Icon"
              class=""
            />
          </button>
          <button on:click={() => signIn("google")} class="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png?ga=GA1.1.2107270949.1696371575"
              alt="Google Icon"
              class=""
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
  background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
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
