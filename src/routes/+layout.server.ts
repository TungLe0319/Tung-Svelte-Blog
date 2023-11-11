import { prisma } from "$lib/server/prisma";
import type {LayoutServerLoad} from './$types'

export const load:LayoutServerLoad = async (event) => {
  const { url } = event;

  const sessionData = await event.locals.getSession();

  return {
    session: sessionData,
    pathname: url.pathname,
  };
};
