<script lang="ts">
  import { fade } from "svelte/transition";
  import { notifications } from "../store/Toast";
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";

  $: coloredNotifications = $notifications.map((notification) => ({
    ...notification,
    message: notification.message,
  }));
</script>

{#if coloredNotifications}
  <div class="notifications">
    {#each coloredNotifications as notification}
      <div role="alert" class="notification" transition:fade>
        <Alert border color="{notification.color}" class="font-medium shadow-md">
          <InfoCircleSolid slot="icon" class="w-4 h-4" />

          {notification.message}
        </Alert>
      </div>
    {/each}
  </div>
{/if}

<style lang="scss">
  .notifications {
    @apply fixed top-16 left-16 w-1/2;
    z-index: 99999;
  }

  .notification {
    @apply mt-4;
  }
</style>
