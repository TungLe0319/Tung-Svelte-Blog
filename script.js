// @ts-nocheck

import { PrismaClient } from "@prisma/client";
import { error } from "@sveltejs/kit";

const db = new PrismaClient();
/** @type {import('./$types').PageServerLoad} */
 async function createCategories() {
  try {

const categoriesData = [
  { name: "News" },
  { name: "How-To Guides" },
  { name: "Tips and Tricks" },
  { name: "Opinion/Editorial" },
  { name: "Reviews" },
  { name: "Guide" },
  { name: "Tutorials" },
  { name: "Technology" },
  { name: "Art and Culture" },
  { name: "Health and Wellness" },
  { name: "Education" },
  { name: "Finance" },
  { name: "Food and Cooking" },
  { name: "Environment" },
  { name: "Business" },
  { name: "Case Studies" },
  { name: "FAQs" },
  { name: "Guest Posts" },
  { name: "Featured Stories" },
  { name: "Events" },

];



  const createdCategories = await db.category.createMany({
    data: [
      { name: "News" },
      { name: "How-To Guides" },
      { name: "Tips and Tricks" },
      { name: "Opinion/Editorial" },
      { name: "Reviews" },
      { name: "Guide" },
      { name: "Tutorials" },
      { name: "Technology" },
      { name: "Art and Culture" },
      { name: "Health and Wellness" },
      { name: "Education" },
      { name: "Finance" },
      { name: "Food and Cooking" },
      { name: "Environment" },
      { name: "Business" },
      { name: "Case Studies" },
      { name: "FAQs" },
      { name: "Guest Posts" },
      { name: "Featured Stories" },
      { name: "Events" },
    ],
    skipDuplicates: true
  });



    // console.log('Categories created:', createdCategories);
  } catch (error) {
    console.error('Error creating categories:', error);
  } finally {
    await db.$disconnect();
  }
}




    // Create a new post using Prisma's post.create
  //   const newPost = await db.post.create({
  //     data: {
  //  body
  //     },
  //   });

  //   if (createdCategories) {
  //     return {
  //       body: {
  //         post: newPost,
  //       },
  //     };
  //   } else {
  //     throw error(500, "Failed to create a new post");
  //   }
  // } catch (error) {
  //   console.error("Error creating post:", error);
  //   throw error(500, "Internal server error");
  // }

