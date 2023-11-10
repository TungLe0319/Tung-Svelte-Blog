<!-- CreateBlogPost.svelte -->

<script>
  import Editor from "@tinymce/tinymce-svelte";
  import { Button, Checkbox, MultiSelect } from "flowbite-svelte";
  import { goto } from "$app/navigation";
 
  /** @type {import('./$types').PageData} */
  export let data;
  let post = data.body.post

 let id = post ? post.id : "";
let title = post ? post.title : "";
let img = post ? post.img : "";
let subtitle = post ? post.subtitle : "";
let content = post ? post.content : "";
let published = post ? post.published : false;
let selected = post ? post.categories.map((c) => c.name) : [];

let mappedCategories = data.body.categories.map((category) => {
  return {
    value: category.name,
    name: category.name,
  };
});
let categoriesJsonString;
$: categoriesJsonString = JSON.stringify(
  selected.map((category) => ({ name: category }))
);
let conf = {
  toolbar: "undo redo",
  menubar: false,
  height: 1000,
};

async function handleSubmit() {
  try {
    if (title === "" || subtitle === "" || content === "") {
      errorMessage = "Title, subtitle, and content are required.";
      return;
    }

    let formData = new FormData();

    formData.append("id", id);
    formData.append("title", title);
    formData.append("img", img);
    formData.append("subtitle", subtitle);
    formData.append("content", content);
    formData.append("categories", categoriesJsonString);
    formData.append("published", published);



   
    const response = await fetch("/api/posts", {
      method: "PUT",
      body: formData,
    });
  if (response.ok) {
      const responseData = await response.json();
     goto(`/blog/${responseData.id}`)
    }
  } catch (error) {
    console.error(error);
  }
}

async function handleDelete(){
  try {

      let formData = new FormData();

    formData.append("id", id);
    await fetch(`/api/posts`,{
      method:'DELETE',
       body: formData,
    })
  } catch (error) {
       console.error(error);
  }
}
  
</script>

{#if post}
  <div class="p-4 pt-20">
    <div class="flex space-x-4">
      <h2 class="text-2xl font-semibold mb-4">Create a New Blog Post</h2>
      <Button on:click="{handleDelete}">Delete</Button>
    </div>

    <form on:submit="{handleSubmit}">
      <div class="flex space-x-4">
        <div class="mb-4 w-1/2">
          <label for="title" class="block text-gray-600">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            bind:value="{title}"
            class="w-full border rounded px-3 py-2"
          />
        </div>

        <div class="mb-4 w-1/2">
          <label for="subtitle" class="block text-gray-600">Subtitle</label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            bind:value="{subtitle}"
            class="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <div class=" flex space-x-4">
        <div class="mb-4 w-1/2">
          <label for="img" class="block text-gray-600">Image URL</label>
          <input
            type="text"
            id="img"
            name="img"
            bind:value="{img}"
            class="w-full border rounded px-3 py-2"
          />
        </div>

        <div class=" mt-6 mb-4 w-1/2">
          <MultiSelect
            size="lg"
            items="{mappedCategories}"
            bind:value="{selected}"
          />
        </div>
      </div>

      <div class="mb-4 flex space-x-4">
        <Checkbox bind:checked="{published}">Published</Checkbox>
           <Button
          type="submit"
         
          >Edit</Button
        >
      </div>

      

      <div class="two-column">
        <div class="editor-column">
          <div class="mb-4">
            <label for="content" class="block text-gray-600">Content</label>

            <Editor conf="{conf}" bind:value="{content}" />
          </div>
        </div>
      </div>

    
     
    
    </form>
  </div>

  {:else}
  <div class="text-8xl font-bold font-1 p-44 text-center">
    NO ACTIVE POST
  </div>
{/if}

<style lang="scss" scoped>
  .two-column {
    display: flex;
    gap: 20px;
  }

  .editor-column {
    @apply min-h-screen flex-1;
  }

  .preview-column {
    @apply h-full;
    flex: 1;
  }
</style>
