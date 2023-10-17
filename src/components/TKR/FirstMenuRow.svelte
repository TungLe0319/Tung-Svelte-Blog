<script>
  import { onDestroy } from "svelte";
  const phonePattern = /\b\d{10}\b|\b\d{3}-\d{3}-\d{4}\b/g;
  const ticketPattern = /\bIRC\d{8}\b/g;
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
  let isOpen = false;
  let inputValue = "";

  function open() {
    isOpen = true;
  }

  function close() {
    isOpen = false;
  }

  let emailInput = "";

  // async function checkClipboard() {
  //   try {
  //     const clipboardData = await navigator.clipboard.readText();
  //     const emailMatch = clipboardData.match(/\S+@\S+/); // Basic email address regex

  //     if (emailMatch) {
  //       emailInput = emailMatch[0];
  //     }
  //   } catch (error) {
  //     console.error("Clipboard access error: ", error);
  //   }
  // }

  // Check clipboard every 2 seconds (you can adjust the interval as needed)
  // const clipboardWatcher = setInterval(checkClipboard, 10000);

  // Clear the clipboard watcher when the component is destroyed
  onDestroy(() => {
    // clearInterval(clipboardWatcher);
  });
</script>

<ul class="flex space-x-0.5 w-full bg-gray-300">
  <li class="line-item">CLASSIFIED</li>
  <button on:click={open} class="line-item">{emailInput || "USER"}</button>
  <li class="line-item">Asset#</li>
  <li class="line-item">Machine</li>
  <li class="line-item">Ticket#</li>
  <li class="line-item">Phone#</li>
</ul>

{#if isOpen}
  <div class="modal">
    <div class="modal-content">
      <input type="text" bind:value={emailInput} />
      <button on:click={close}>Close</button>
    </div>
  </div>
{/if}

<style lang="scss">
  .line-item {
    @apply p-2 bg-purple-400 hover:brightness-90 items-center border-2 border-black cursor-pointer;
  }

  .modal {
    position: absolute;
    top: 110px;

    z-index: 10;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: white;
    padding: 10px;
    border-radius: 2px;
  }
</style>
