<script>
  import Hero from "../../components/Hero.svelte";
  import { Timeline, TimelineItem, Button } from "flowbite-svelte";
  import { ArrowRightOutline, CalendarWeekSolid } from "flowbite-svelte-icons";

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

  const schema = `generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  image String?
   role          Role      @default(USER)
  posts Post[]
   likes    Like[]   
  comments Comment[] 
}

model Post {
  id            Int      @id @default(autoincrement())
  title         String
  img           String
  subtitle      String
  content       String?
  
  published     Boolean  @default(false)
  datePublished DateTime
  authorId      Int
  author        User     @relation(fields: [authorId], references: [id])
   likes         Like[]  
  comments      Comment[] 
   categories    Category[]
}

enum Role {
  USER
  ADMIN
}

model Category {
  id     Int      @id @default(autoincrement())
  name   String   @unique
  posts  Post[]   
}


model Like {
  id       Int    @id @default(autoincrement())
  postId   Int
  post     Post   @relation(fields: [postId], references: [id])
  userId   Int
  user     User   @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Comment {
  id       Int    @id @default(autoincrement())
  postId   Int
  post     Post   @relation(fields: [postId], references: [id])
  userId   Int
  user     User   @relation(fields: [userId], references: [id])
  content  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}`
</script>

<Hero {heroProps} />
<div class=" px-40 py-10 mt-3 text-xl flex flex-col items-center">
  <!-- <h2 class="description">
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
  </h2> -->

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
    <TimelineItem title="Object-Relational Mapping (ORM)" date="">
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


  
</div>

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
