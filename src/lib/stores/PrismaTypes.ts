import type { Prisma } from "@prisma/client";

export type commentWithUser = Prisma.CommentGetPayload<{
  include: {
    user: true;
  };
}>;

export type likesWithUser = Prisma.LikeGetPayload<{
  include: {
    user: true;
  };
}>;

export type PostFull = Prisma.PostGetPayload<{
  include: {
    comments: {
      include:{
        user:true
      }
    };
    author: true;
    likes: {
      include:{
        user:true
      }
    };
    categories: true;
  };
}>;



export type PostSemiFull = Prisma.PostGetPayload<{
  include: {
    comments: true;
    author: true;
    likes: true;
    categories: true;
  };
}>;
