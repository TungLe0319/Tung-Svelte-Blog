import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { PrismaClient } from "@prisma/client";


export const load: PageServerLoad = async (event) => {
  const db = new PrismaClient();
  const session = await event.locals.getSession();

  if (session?.user) {
    const existingUser = await db.user.findUnique({
      where: {
        email: session?.user.email, // Use session.user.email directly
      },
    });

    if (!existingUser) {
      try {
        const newUser = await db.user.create({
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
        // Handle the error (e.g., log, return an error response, or redirect as needed)
      }
    }

    // You can add more logic here if needed

    // After creating the user or handling other logic, you can redirect
    throw redirect(303, "/"); // Redirect to the desired location
  }

  // Return an empty response if the user is not authenticated
  return {};
};
