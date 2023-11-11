import { prisma } from "$lib/server/prisma";
import { db } from "../../../../lib/utils/useDb";
import type { Actions, PageServerLoad } from "./$types";
import { error, fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ params }) => {
  const getPost = async () => {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(params.postId),
      },
      include: {
        author: true,
        comments: true,
        likes: true,
        categories: true,
      },
    });
    if (!post) {
      return fail(400, { message: "Invalid Request" });
    }

    return post;
  };

  const getCategories = async () => {
    const categories = await db.category.findMany();

    if (!categories) {
      return fail(400, { message: "Invalid Request" });
    }

    return categories;
  };

  return {
    post: getPost(),
    categories: getCategories(),
  };
};

export const actions: Actions = {


  updatePost: async({request,params})=>{
    const {title,subtitle,img,content,published} = Object.fromEntries(await request.formData()) as {
      title:string,
      subtitle:string,
      img:string,
      content:string,
      published:boolean
    }



try {
  

await prisma.post.update({
  where:{
    id:Number(params.postId)
  },
  data:{
    title,
    subtitle,
    img,
    content,
    published
  }
})

} catch (error) {
  return fail(500,{message:'Failed to Update Post'})
}
return {
  status:200,
  
}
  }





};
