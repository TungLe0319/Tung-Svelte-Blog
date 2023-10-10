import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  const { url } = event;
  return {
    session: await event.locals.getSession(),
    pathname: url.pathname,
  };
};