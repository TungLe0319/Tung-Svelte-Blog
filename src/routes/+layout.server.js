import { db } from "$lib/utils/useDb";
/** @type {import('./$types').LayoutServerLoad} */
export const load = async (event) => {
  const { url } = event;
  // const posts = await db.post.findMany({
  //   include: {
  //     author: true,
  //     categories: true,
  //     likes: true,
  //     comments: true,
  //   },
  // });

  const sessionData = await event.locals.getSession();
  const user = await db.user.findUnique({
    where: {
      name: sessionData.user.name,
      email: sessionData.user.email,
    },
  });
  return {
    user,
    session: sessionData,
    pathname: url.pathname,
  };
};
