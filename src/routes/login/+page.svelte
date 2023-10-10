<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import { redirect } from "@sveltejs/kit";


  // if ($page.data.session) {
  //    redirect(303, "/account")
  // }

</script>

<!-- <div class="relative hero-image-container">
  <img
    class="hero-image"
    src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80"
    alt="banner"
  />
  <div class="hero-text">
    <h1 class="text-8xl text-shadow-overlay shadow-into-light-font">Login</h1>
 
  </div>
</div> -->

<div class="    flex justify-center  h-screen ">
   <div class="w-1/4 login-box  flex-col justify-center items-center flex">


    <div class="">ICON OR LOGO SPOT</div>

      <div class="">LOGIN</div>
       <div class=" flex flex-col space-y-2 items-center justify-center">
          <button on:click={() => signIn("github")} class=" sign-in-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png?ga=GA1.1.2107270949.1696371575&track=ais"
              alt="Google Icon"
              class="  w-10 h-10"
            />
            <div class=" sign-in-text">Continue with Github</div>
          </button>
          <button on:click={() => signIn("google")} class="sign-in-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png?ga=GA1.1.2107270949.1696371575"
              alt="Google Icon"
              class="  w-10 h-10"
            />
              <div class=" sign-in-text">Continue with Google</div>
          </button>
        </div>


        <div class=" p-2 text0center text-sm px-10 mt-14   ">
          Copyright © 2022 DevOpportunities, LLC  <br>Bloginweb™ 
        </div>
  
      <!-- {#if $page.data.session}
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
     
     
      {/if} -->

  </div>
  <div class="w-3/4 bg-red-50">
 <img
    class="hero-image"
    src="https://images.unsplash.com/photo-1542417938-e59c0a54102b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    alt="banner"
  />

  </div>
 
</div>

<!-- markup (zero or more items) goes here -->

<style lang="scss" scoped>
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

  .sign-in-btn{
    @apply  mt-2 shadow-md px-10 rounded-full py-2 flex items-center space-x-2 hover:shadow-2xl hover:shadow-slate-400 transition-all duration-150;
  }
  .sign-in-text{
    @apply text-lg font-semibold ;
  }

  .hero-image{
        width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: relative;
  }
</style>
