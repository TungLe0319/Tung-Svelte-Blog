<script>
  import Hero from "../../../components/Hero.svelte";
  import { Timeline, TimelineItem, Button } from "flowbite-svelte";
  import { ArrowRightOutline, CalendarWeekSolid } from "flowbite-svelte-icons";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

// Then register the languages you need
hljs.registerLanguage('javascript', javascript);
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

  const highlightedCode = hljs.highlight(
  `generator client {
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
}`,
  { language: 'xml' }
).value
  const heroProps = {
    image:
      "https://images.unsplash.com/photo-1685391722227-df9eec0583ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1445&q=80",
    title: "About This Project",
    subTitle: "The Tech Stack Paired with Development & Growth.",
    height: 100,
  };

  const schema = ``
</script>

<Hero {heroProps} />
<div class=" px-40 py-10 mt-3 text-xl flex flex-col items-center">

<pre>{highlightedCode}</pre>
  
</div>



<style lang="scss" scoped>
 
</style>
