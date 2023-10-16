// @ts-nocheck

/** @type {import('./$types').LayoutServerLoad} */
export const load= async (event) => {
  const { url } = event;
  return {
    session: await event.locals.getSession(),
    pathname: url.pathname,
  };
};