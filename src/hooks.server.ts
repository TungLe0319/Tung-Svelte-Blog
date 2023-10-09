import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import Google from '@auth/core/providers/google'
import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

async function authorization({ event, resolve }) {
  // Protect any routes under /authenticated
  if (event.url.pathname.startsWith("/authenticated")) {
    const session = await event.locals.getSession();
    if (!session) {
      throw redirect(303, "/login");
    }
  }

  // If the request is still here, just proceed as normally
  return resolve(event);
}
export const handle: Handle  =  sequence(
    SvelteKitAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // GitHub({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
  ],
}),
  authorization
)
