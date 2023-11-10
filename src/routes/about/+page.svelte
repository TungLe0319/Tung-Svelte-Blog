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
    GithubSolid,
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
      portfolio:'https://tung.devfoliov2.devopportunities.dev/'
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
        portfolio:'https://v2.daniel.devopportunities.dev/'
    },
  ];

 
</script>






<div class="px-10">

  <Section name="content" >
      <HeroHeader class="max-w-screen-md mb-8 lg:mb-16" h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" pClass="text-gray-500 sm:text-xl dark:text-gray-400">
  <svelte:fragment slot="h2">About this Project</svelte:fragment>
<svelte:fragment slot="paragraph">This blog project serves as an opportunity for me to strengthen my
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
    coding practices, and elevate my development skills..</svelte:fragment>

  </HeroHeader>
    <a href="https://github.com/TungLe0319/Tung-Svelte-Blog" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
      Find out More details at the repo
      <ChevronRightSolid class="ml-2" size="xs" />
    </a>

</Section>

  
<Section name="feature" sectionClass="py-0 sm:py-0">
  <HeroHeader class="max-w-screen-md mb-8 lg:mb-16" h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" pClass="text-gray-500 sm:text-xl dark:text-gray-400">
  <svelte:fragment slot="h2">Project Features</svelte:fragment>
<svelte:fragment slot="paragraph">The multitude of features incorporated into this project not only facilitated the creation of the blog but also streamlined the entire process, making it seamless and efficient. These  functionalities and tools played a pivotal role in simplifying various aspects of development, from managing the user interface to optimizing backend processes, ensuring a user-friendly and robust end project.</svelte:fragment>

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




<Section name="team" sectionClass="" >
  <TeamWrapper divClass="py-0">
  

  <HeroHeader class="max-w-screen-md mb-8 lg:mb-16" h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" pClass="text-gray-500 sm:text-xl dark:text-gray-400">
  <svelte:fragment slot="h2">About Us</svelte:fragment>
<svelte:fragment slot="paragraph">I'm Tung Le, passionate about crafting seamless digital experiences. Collaborating with my brother, Daniel Le, managing the backend part of our projects has been our forte. Together we tackle challenges and  create projects that harmonize the front and backend. <br><br>
If you want to learn more about us check out our developer portfolios and hit us up on LinkedIn.</svelte:fragment>


  </HeroHeader>



    <TeamBody>
      {#each members as {portfolio, github, linkedIn, href, src, alt, name, jobTitle, description }}
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
          
     <a
              href="{github}"
              class="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            >
              <GithubSolid size="lg"/>
            </a>
           
            <a
              href="{linkedIn}"
              class="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            >
              <LinkedinSolid size="lg" />
            </a>

                 <a
              href="{portfolio}"
              class="text-slate-500 flex items-center hover:text-slate-700 dark:hover:text-slate-300"
            >
              <RocketSolid size="lg"/>
            </a>
            
          </svelte:fragment>
        </TeamItem>
      {/each}
    </TeamBody>
  </TeamWrapper>
</Section>



</div>



<style lang="scss" scoped>
</style>
