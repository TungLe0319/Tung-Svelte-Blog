<script>

  import BlogPost from "../../../components/BlogPost.svelte"; 
  export let data

// console.log(data);
</script>




 {#if data}
<div>
  
    <div class="post p-3 my-2 shadow-md flex justify-center space-x-2 rounded-md">
    
      <div class="post-body p-4 space-y-2 flex-col flex items-center">
        <div class="post-image flex justify-center">
          <img src={data.post?.img} alt="Blog-post" class=" w-3/4 rounded-md shadow-xl shadow-slate-400 ">
        </div>
        <div class="post-info   pt-5 text-sm text-gray-500">
          <!-- <p>Published on  by {data.post.author}</p> -->
        </div>
        <div class="post-title text-xl font-bold my-2">{data.post?.title}</div>
        <div class="post-subtitle">{data.post?.subtitle}</div>
        <!-- <div class="post-description">{data.post.description}</div> -->
      </div>
    </div>
 
</div>
 {:else}
<div class="">
  NO POST
</div>
 {/if}

<!-- <BlogPost {data?.post} /> -->
