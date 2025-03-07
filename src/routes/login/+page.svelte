<script>
  import { signIn } from "@auth/sveltekit/client";
  export let data;
</script>

{#if !data.session}
  <div class="    flex h-screen">
    <div class="left-column">
      <div class="dark:text-white underline font-1 mb-3">Thanks for Checking out the Project!</div>

      <!-- <div class=" text-xl font-1 dark:text-white">LOGIN</div> -->
      <div class=" login-container">
        <!-- <button on:click={() => signIn("github")} class=" sign-in-btn dark:bg-white">
          <img
            src="https://cdn-icons-png.flaticon.com/128/733/733609.png?ga=GA1.1.2107270949.1696371575&track=ais"
            alt="Google Icon"
            class="  w-10 h-10 "
          />
          <div class=" sign-in-text">Continue with Github</div>
        </button> -->
        <button on:click={() => signIn("google")} class="sign-in-btn dark:bg-white">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png?ga=GA1.1.2107270949.1696371575"
            alt="Google Icon"
            class="  w-10 h-10"
          />
          <div class=" sign-in-text">Continue with Google</div>
        </button>
      </div>

      <div class=" copyright-text dark:text-white">
        Copyright © 2022 DevOpportunities, LLC <br />
        <!-- Bloginweb™ -->
      </div>
    </div>
    <div class=" right-column">
      <img
        class="hero-image"
        src="https://images.unsplash.com/photo-1542417938-e59c0a54102b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="banner"
      />
    </div>
  </div>
{/if}

<style lang="scss" scoped>
  .left-column {
    @apply w-1/4 lg:w-1/3 sm:w-full  flex-col justify-center items-center flex;
  }
  .right-column {
    @apply sm:w-0 md:w-3/4 lg:w-2/3 w-0;
  }

  .sign-in-btn {
    @apply shadow-md px-10 my-4 rounded-full py-2 flex items-center space-x-2 hover:shadow-2xl hover:shadow-slate-400 transition-all duration-150;
  }
  .sign-in-text {
    @apply text-lg font-semibold;
  }
  .copyright-text {
    @apply p-2 text-center text-sm px-10 mt-14;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: relative;
  }

  .login-container {
    @apply flex flex-col items-center justify-center;
  }
</style>
