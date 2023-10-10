<!-- Contact.svelte -->
<script>
  // Define your contact information
  let contactInfo = [
    { title: 'tung-le0319', icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png', link: 'https://www.linkedin.com/in/tung-le0319/' },
    { title: 'tung.le0319@gmail.com', icon: 'https://cdn-icons-png.flaticon.com/128/732/732200.png', link: 'mailto:tung.le0319@gmail.com' },
   
  ];
</script>

<div class="contact-container ">
  <h1 class="text-8xl font-bold mb-3 shadow-into-light-font">Contact Me At:</h1>
  {#each contactInfo as info (info.title)}
    <div class="contact-item  space-x-4 flex flex-col my-2 justify-center items-center">
    
      <img src="{info.icon}" class="contact-icon">
      <a href="{info.link}" target="_blank" class="text-lg  ">{info.title}</a>
    </div>
  {/each}
</div>

<style>
  /* Add styling for the centered box */
  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    background-color: #ffffff;
  }

  /* Style for individual contact items */


  /* Style for icons */
  .contact-icon {
   @apply w-20 h-20 ;
  }
</style>
