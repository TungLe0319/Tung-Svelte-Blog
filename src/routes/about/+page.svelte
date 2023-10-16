<script>
  import Hero from "../../components/Hero.svelte";

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

  const heroProps = {
    image:
      "https://images.unsplash.com/photo-1685391722227-df9eec0583ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1445&q=80",
    title: "About This Project",
    subTitle: "The Tech Stack Paired with Development & Growth.",
    height: 100,
  };
</script>

<Hero {heroProps} />
<div class=" px-40 py-4 mt-3 text-xl flex justify-center items-center">
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

<div class=" text-center my-2 text-4xl font-2 font-bold">Tech Stack</div>
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
</style>
