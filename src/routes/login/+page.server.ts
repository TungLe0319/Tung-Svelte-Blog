import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { PrismaClient } from "@prisma/client";
import { prisma } from "$lib/server/prisma";



export const load: PageServerLoad = async (event) => {

  const session = await event.locals.getSession();

  if (session?.user && session.user.email !== null) {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: session.user.email, // Use session.user.email directly
      },
    });

  if (
    !existingUser &&
    session?.user &&
    session.user.email !== null &&
    session.user.email !== undefined
  ) {
    try {
      const newUser = await prisma.user.create({
        data: {
          email: session.user.email,
          name: session.user.name,
          role: "USER",
        },
      });

      // Log the newly created user
      console.log("New user created:", newUser);
      redirect(303, "/");
    } catch (error) {
      console.error("Error creating a new user:", error);
      return fail(500,{message:'Failed to create newUser'})
    }
  }

 

   
    throw redirect(303, "/"); // Redirect to the desired location
  }

  // Return an empty response if the user is not authenticated
  return  fail(500,{message:'Not Authenticated'});
};
