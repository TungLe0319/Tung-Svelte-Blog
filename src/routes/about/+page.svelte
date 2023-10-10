<script>
  let stackData = [
    {
      iconUrl:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--k-z0ysHD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p3nn57r52krvpdieblta.png",
      description: "SvelteKit - Framework",
      link: "https://www.prisma.io/",
    },
    {
      iconUrl:
        "https://cf-assets.www.cloudflare.com/slt3lc6tev37/4WJkWMYGkEpa05B0hyL88E/91dd67e91752d39d94b60cdcdfdc287d/prismalogo-freelogovectors.net_.png",
      description: "Prisma - Node.js & TypeScript ORM ",
      link: "https://www.prisma.io/",
    },
    {
      iconUrl: "https://authjs.dev/img/og-image.png",
      description: "Auth.js -  Authentication ",
      link: "https://authjs.dev/",
    },

    {
      iconUrl: "https://cdnlogo.com/logos/t/34/tailwind-css.svg",
      description: "TailwindCSS-  CSS Framework ",
      link: "https://tailwindcss.com/",
    },
  ];
</script>

<div class="relative hero-image-container">
  <img
    class="hero-image"
    src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80"
    alt="banner"
  />
  <div class="hero-text">
    <h1 class="text-8xl text-shadow-overlay shadow-into-light-font">About</h1>
    <!-- <small class="text-xl">We Love Software Development!</small> -->
  </div>
</div>

<div
  class=" px-40 py-4  mt-3 text-xl flex justify-center items-center"
>
  <h2 class="description">
    This blog project serves as an opportunity for me to strengthen my
    development skills, troubleshooting abilities, and utilize my creativity.
    This endeavor involves the creation of a personal blog application where I
    can share posts about topics within the industry and things I find
    fascinating.
    <br /> <br />
    As I embark on this project, my goal is to master various aspects of web development,
    from crafting an intuitive user interface to implementing robust backend functionality.Through
    this app, I also aim to provide readers with insightful content, whether it's
    about the latest trends in technology, deep dives into coding challenges, or
    explorations of intriguing subjects.

    <br /><br />
    I'm committed to delivering a seamless and enjoyable reading experience for users
    and using this project as an opportunity to expand my knowledge, embrace secure
    coding practices, and elevate my development skills.

    <br />
  </h2>
</div>

<div class=" text-center my-2 text-4xl shadow-into-light-font font-bold">Tech Stack</div>
<ul class="list grid grid-cols-2 py-4 mt-10 px-28">
  {#each stackData as stack}
    <li class="list-item">
      <a href={stack.link} target="_blank">
        <div class="">
          <img src={stack.iconUrl} alt={stack.description} class="" />
        </div>
      </a>
    </li>
  {/each}
</ul>

<style lang="scss" scoped>
  .description {
    line-height: 1.5;
  }
  .hero-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    position: relative;
  }
  .hero-image-container::before {
    content: "";
    position: absolute;
    bottom: 0;
    z-index: 1999;
    left: 0;
    width: 100%;
    height: 10px; /* adjust height as per your need */
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      #fff
    ); /* adjust the color as per your need */
  }

  .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;
    color: #fff;
  }

  .text-shadow-overlay {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
</style>
