<script>
  import Hero from "../../components/Hero.svelte";
  import { Timeline, TimelineItem, Button } from "flowbite-svelte";
  import {
    ArrowRightOutline,
    BriefcaseSolid,
    CalendarWeekSolid,
    ChartSolid,
    ChevronRightSolid,
    CogOutline,
    DollarSolid,
    LandmarkSolid,
    LinkedinSolid,
    RocketSolid,
  } from "flowbite-svelte-icons";
  import {
    Section,
    Portfolio,
    PortfolioItem,
    TeamWrapper,
    TeamHeader,
    TeamBody,
    TeamItem,
    Facebook,
    Github,
    Twitter,
    Content,
    HeroHeader,
    FeatureDefault,
    FeatureItem,
  } from "flowbite-svelte-blocks";

  let members = [
    {
      href: "https://www.linkedin.com/in/tung-le0319/",
      src: "https://avatars.githubusercontent.com/u/107594367?s=400&u=279c4a706755639789d6b825966e54161df0c7aa&v=4",
      alt: "Tung Le",
      name: "Tung Le",
      jobTitle: "Software Developer",
      description: "Drives the frontend Design asthetic lorem100 23423412342",
      github: "https://github.com/TungLe0319",
      linkedIn: "https://www.linkedin.com/in/tung-le0319/",
    },
    {
      href: "https://www.linkedin.com/in/daniel-le97/",
      src: "https://avatars.githubusercontent.com/u/107774403?v=4",
      alt: "Daniel Le",
      name: "Daniel Le",
      jobTitle: "Software Engineer",
      description:
        "Drives the backend data, database manegment and type safety",
      github: "https://github.com/daniel-le97",
      linkedIn: "https://www.linkedin.com/in/daniel-le97/",
    },
  ];

  const heroProps = {
    image:
      "https://images.unsplash.com/photo-1685391722227-df9eec0583ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1445&q=80",
    title: "About This Project",
    subTitle: "And a little about us",
    height: 100,
  };
</script>

<Hero heroProps="{heroProps}" />




<div class="px-10">
  
<Section name="feature">
  <HeroHeader class="max-w-screen-md mb-8 lg:mb-16" h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" pClass="text-gray-500 sm:text-xl dark:text-gray-400">
    <svelte:fragment slot="h2">Designed for business teams like yours</svelte:fragment>
    <svelte:fragment slot="paragraph">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</svelte:fragment>
  </HeroHeader>
  <FeatureDefault>
    <FeatureItem>
      <svelte:fragment slot="icon"><RocketSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">SvelteKit</svelte:fragment>
      <svelte:fragment slot="paragraph">Build powerful and efficient web applications using SvelteKit, offering a streamlined development experience.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><RocketSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Tailwind CSS</svelte:fragment>
      <svelte:fragment slot="paragraph">Utilize Tailwind CSS for rapid UI development, creating sleek and customizable user interfaces.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><RocketSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Prisma</svelte:fragment>
      <svelte:fragment slot="paragraph">Leverage Prisma for a modern database toolkit, facilitating database access and management.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><RocketSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Node.js</svelte:fragment>
      <svelte:fragment slot="paragraph">Empower your backend with Node.js, enabling server-side logic and API integrations.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><RocketSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Tailwind Typography</svelte:fragment>
      <svelte:fragment slot="paragraph">Implement Tailwind Typography to style your text content, ensuring consistent and beautiful typography across your project.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><RocketSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Flowbite-Svelte</svelte:fragment>
      <svelte:fragment slot="paragraph">Integrate Flowbite-Svelte to leverage UI components for a consistent and polished design language in your Svelte applications.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><RocketSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">TinyMCE for Rich Text Editing</svelte:fragment>
      <svelte:fragment slot="paragraph">Incorporate TinyMCE for a powerful and customizable rich text editing experience in your web applications.</svelte:fragment>
    </FeatureItem>
    <FeatureItem>
      <svelte:fragment slot="icon"><RocketSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
      <svelte:fragment slot="h3">Auth with SvelteKit</svelte:fragment>
      <svelte:fragment slot="paragraph">Enable user authentication and authorization functionalities using Auth in SvelteKit applications.</svelte:fragment>
    </FeatureItem>
<FeatureItem>
  <svelte:fragment slot="icon">
    <RocketSolid class="text-primary-600 dark:text-primary-300" />
  </svelte:fragment>
  <svelte:fragment slot="h3">PostCSS</svelte:fragment>
  <svelte:fragment slot="paragraph">Enhance your CSS workflow with PostCSS, offering a flexible and modular approach to processing and optimizing your styles.</svelte:fragment>
</FeatureItem>

  </FeatureDefault>
</Section>

<Section name="content" >
  <Content>
    <svelte:fragment slot="h2">About this Project</svelte:fragment>
    <p class="mb-4 "> This blog project serves as an opportunity for me to strengthen my
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
</p>
    <p class="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
    <a href="https://github.com/TungLe0319/Tung-Svelte-Blog" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
      Learn more
      <ChevronRightSolid class="ml-2" size="xs" />
    </a>
  </Content>
</Section>



<Section name="team" sectionClass="" >
  <TeamWrapper divClass="py-0">
    <TeamHeader>
      <svelte:fragment slot="label">Us</svelte:fragment>
      <p
        class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
      >
        Get in touch with us! Reach out to us, and let's embark on a journey of
        collaboration and mutual growth.
      </p>
    </TeamHeader>
    <TeamBody>
      {#each members as { github, linkedIn, href, src, alt, name, jobTitle, description }}
        <TeamItem
          href="{href}"
          src="{src}"
          alt="{alt}"
          name="{name}"
          jobTitle="{jobTitle}"
        >
          <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <svelte:fragment slot="social">
            <Github href="{github}" />

            <a
              href="{linkedIn}"
              class="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            >
              <LinkedinSolid size="sm" />
            </a>
          </svelte:fragment>
        </TeamItem>
      {/each}
    </TeamBody>
  </TeamWrapper>
</Section>



</div>

<!-- <div
  class=" px-40 py-10 mt-3 text-xl flex flex-col items-center dark:text-white"
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

  <div class=" text-center my-2 mb-16 text-4xl font-1 font-bold">The Stack</div>
  <Timeline order="vertical">
    <TimelineItem title="Framework" date="">
      <svelte:fragment slot="icon">
        <span
          class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
        >
          <CalendarWeekSolid
            class="w-3 h-3 text-primary-600 dark:text-primary-400"
          />
        </span>
      </svelte:fragment>

      <div class="mt-4">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--k-z0ysHD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p3nn57r52krvpdieblta.png"
          alt="sveltekit"
          width="300"
          class="mb-4"
        />

        <Button color="alternative"
          ><a href="https://kit.svelte.dev/" target="_blank"> Check It Out</a>
          <ArrowRightOutline class="ml-2 w-3 h-3" /></Button
        >
      </div>
    </TimelineItem>
    <TimelineItem title="Node.js | PostgreSQL Backend ORM" date="">
      <svelte:fragment slot="icon">
        <span
          class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
        >
          <CalendarWeekSolid
            class="w-3 h-3 text-primary-600 dark:text-primary-400"
          />
        </span>
      </svelte:fragment>
      <div class="mt-4">
        <img
          src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/4WJkWMYGkEpa05B0hyL88E/91dd67e91752d39d94b60cdcdfdc287d/prismalogo-freelogovectors.net_.png"
          alt="sveltekit"
          width="300"
          class="mb-4"
        />

        <Button color="alternative"
          ><a href="https://www.prisma.io/" target="_blank"> Check It Out</a>
          <ArrowRightOutline class="ml-2 w-3 h-3" /></Button
        >
      </div>
    </TimelineItem>
    <TimelineItem title="Authentication & User Management" date="">
      <svelte:fragment slot="icon">
        <span
          class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
        >
          <CalendarWeekSolid
            class="w-3 h-3 text-primary-600 dark:text-primary-400"
          />
        </span>
      </svelte:fragment>

      <div class="mt-4">
        <img
          src="https://authjs.dev/img/og-image.png"
          alt="sveltekit"
          width="300"
          class="mb-4"
        />

        <Button color="alternative"
          ><a href="https://authjs.dev/" target="_blank"> Check It Out</a>
          <ArrowRightOutline class="ml-2 w-3 h-3" /></Button
        >
      </div>
    </TimelineItem>
    <TimelineItem title="CSS Framework" date="">
      <svelte:fragment slot="icon">
        <span
          class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
        >
          <CalendarWeekSolid
            class="w-3 h-3 text-primary-600 dark:text-primary-400"
          />
        </span>
      </svelte:fragment>
      <div class="mt-4">
        <img
          src="https://cdnlogo.com/logos/t/34/tailwind-css.svg"
          alt="sveltekit"
          width="300"
          class="mb-4"
        />

        <Button color="alternative"
          ><a href="https://tailwindcss.com/" target="_blank"> Check It Out</a>
          <ArrowRightOutline class="ml-2 w-3 h-3" /></Button
        >
      </div>
    </TimelineItem>
  </Timeline>
</div> -->

<!-- <div class=" text-center my-2 text-4xl font-2 font-bold">Tech Stack</div>
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
</ul> -->

<style lang="scss" scoped>
</style>
