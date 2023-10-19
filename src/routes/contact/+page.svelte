<!-- Contact.svelte -->
<script>
  import Hero from "../../components/Hero.svelte";

  // Define your contact information
  let contactInfo = [
    {
      title: "tung-le0319",
      icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
      link: "https://www.linkedin.com/in/tung-le0319/",
    },
    {
      title: "tung.le0319@gmail.com",
      icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
      link: "mailto:tung.le0319@gmail.com",
    },
  ];
  const heroProps = {
    image:
      "https://images.unsplash.com/photo-1577083862054-7324cd025fa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1541&q=80",
    title: "Contact Me",
    subTitle: "Discover a Partnership",
    height: 100,
  };
</script>

<div class="relative dark:text-white">
  <Hero {heroProps} />
  <div class="contact-container flex  items-center justify-center">
    {#each contactInfo as info (info.title)}
      <a href={info.link} target="_blank" class="badge-link">
        <div class="contact-item badge">
          <img src={info.icon} class="badge-icon" alt="contact" />
        
        </div>
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  /* Add styling for the centered box */
  .contact-container {
    @apply absolute  bottom-1/3 left-0 right-0 z-50;
  }

  /* Style for individual contact items */

  /* Style for icons */
  .contact-icon {
    @apply w-20 h-20;
  }

  .badge-link {
    text-decoration: none;
  }

  .badge {

    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 5px;
    transition: transform 0.2s;
  }

  .badge:hover {
    transform: translateY(-3px);
  }

  .badge-icon {
    width: 120px;
    height: 120px;
    margin-right: 5px;
  }

  .badge-text {
    font-size: 24px;
    font-weight: bold;
  }
</style>
