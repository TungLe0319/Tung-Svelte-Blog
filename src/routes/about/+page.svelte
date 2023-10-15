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
    src="https://media.discordapp.net/attachments/1060066788878069891/1161434758987927572/914.png?ex=65384968&is=6525d468&hm=5883c4baa5e56399db2eeec4e2c9155376f324f1ab0033e08c1188ec6d8ddc80&=&width=1408&height=676"
    alt="banner"
  />
  <!-- <img
    class="hero-image"
    src="https://img.freepik.com/free-photo/vibrant-colorful-abstract-spiral-wallpaper-with-ornate-shapes-generated-by-ai_188544-27890.jpg?t=st=1696968447~exp=1696972047~hmac=6c5c2d6e498c21ac10551fa8386ada84d3fa39d73f7eb30dfd289d02ece8ea32&w=1380"
    alt="banner"
  /> -->
  <div class="hero-text">
    <h1 class="text-8xl text-shadow-overlay font-2">About</h1>
    <!-- <small class="text-xl">We Love Software Development!</small> -->
  </div>
</div>

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
