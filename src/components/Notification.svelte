<script lang="ts">
  import { fade } from 'svelte/transition'
  import { notifications } from '../store/Toast'
</script>

{#if $notifications}
  <div class="notifications">
    {#each $notifications as notification}
      <div
        role="alert"
        class="notification"
        transition:fade
      >
        {notification}
      </div>
    {/each}
  </div>
{/if}

<style lang="scss">

  .notifications{
  @apply fixed top-16 left-16;
    z-index: 99999;   
  }

  .notification{
    @apply mt-4
  }
</style>