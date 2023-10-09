<script>

  import "../assets/scss/main.scss"
import Navbar from '../components/Navbar.svelte'
import Footer from '../components/Footer.svelte'
   import { fade ,} from 'svelte/transition';
   import { signIn, signOut } from "@auth/sveltekit/client"
  import { page } from "$app/stores"


  const intro = () => {
    return {
      duration: 300,
      delay: 0,
      easing: 'ease',
      css: (t) => `opacity: ${t}`,
    };
  };
</script>

<Navbar />
<div class="wrapper  " transition:fade={intro}>
  <main class="w-full background" >
    <slot />
  </main>

<!-- <div class="Auth fixed  bg-red-50 top-2.5 right-3 flex flex-col justify-center items-center">


  {#if $page.data.session}
    {#if $page.data.session.user?.image}
      <img src={$page.data.session.user?.image} alt="profile" class="w-10 h-10 rounded-full">
    {/if}
    <span class="signedInText">
    
      <strong>{$page.data.session.user?.name ?? "User"}</strong>
    </span>
    <button on:click={() => signOut()} class="button">Sign out</button>
  {:else}
    <span class="notSignedInText">You are not signed in</span>
    <button on:click={() => signIn("github")}>Sign In with GitHub</button>
    <button on:click={() => signIn("google")}>Sign In with Google</button>
  {/if}


</div> -->
  <Footer />
</div>

<style lang="scss" scoped>
  .wrapper {
  
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
  }
  .background {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 86%,
      rgba(164, 191, 196, 0.3617822128851541) 100%
    );
  }
</style>
