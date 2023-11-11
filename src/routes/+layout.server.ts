import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  try {
    const { url } = event;

    const session = await event.locals.getSession();
    const posts = await prisma.post.findMany();

    return {
      posts: posts,
      session: session,
      pathname: url.pathname,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      posts: [],
      session: null,
      pathname: event.url.pathname,
    };
  }
};
