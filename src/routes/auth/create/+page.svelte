<!-- CreateBlogPost.svelte -->

<script>
  import Editor from "@tinymce/tinymce-svelte";
  import {  MultiSelect } from "flowbite-svelte";
import { formData, updateFormData } from "../../../store/FormData";


  /** @type {import('./$types').PageData} */
  export let data;

   let mappedCategories = data.body.map(category => {
    return {
      value: category.name,
      name: category.name
    };
  });
  $:categoriesJsonString = JSON.stringify($formData.categories.map(category => ({ name: category })));





async function handleSubmit() {
  try {
    const { title, img, subtitle, content, published } = $formData;

    if (title === "" || subtitle === "" || content === "") {
      errorMessage = "Title, subtitle, and content are required.";
      return;
    }

    let form = new FormData();
    form.append("title", title);
    form.append("img", img);
    form.append("subtitle", subtitle);
    form.append("content", content);
    form.append("categories", categoriesJsonString);
    form.append("published", published);

    console.log(form.get('categories'));
    const response = await fetch("/auth/create", {
      method: "POST",
      body: form,
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    }
  } catch (error) {
    console.error(error);
  }
}
</script>

<div class="p-4 pt-20">
  <h2 class="text-2xl font-semibold mb-4">Create a New Blog Post</h2>

  <form on:submit|preventDefault="{handleSubmit}">
    <div class="flex space-x-4">
      <div class="mb-4 w-1/2">
        <label for="title" class="block text-gray-600">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          bind:value="{$formData.title}"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div class="mb-4 w-1/2">
        <label for="subtitle" class="block text-gray-600">Subtitle</label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          bind:value="{$formData.subtitle}"
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
          bind:value="{$formData.img}"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div class=" mt-6 mb-4 w-1/2">
        <MultiSelect
          size="lg"
          items="{mappedCategories}"
          bind:value="{$formData.categories}"
         
        />

  {#each $formData.categories as item}
   {item}
  {/each}
      </div>
    </div>

    <div class="mb-4">
      <label class="block text-gray-600">
        <input
          type="checkbox"
          name="published"
          bind:checked="{$formData.published}"
          class="mr-2"
        />
        Published
      </label>
    </div>

    <div class="two-column">
      <div class="editor-column">
        <div class="mb-4">
          <label for="content" class="block text-gray-600">Content</label>
          <!-- <Editor bind:value="{content}" /> -->
          <Editor
         
            bind:value="{$formData.content}"
          />
        </div>
      </div>
      <div class="preview-column">
        <div class="mb-4">
          <label for="content_preview" class="block text-gray-600"
            >Preview</label
          >
          <div class="rounded px-3 py-2">
            {@html $formData.content}
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >Create</button
      >
    </div>
  </form>
</div>

<style lang="scss" scoped>
  .two-column {
    display: flex;
    gap: 20px;
  }

  .editor-column {
    flex: 1;
  }

  .preview-column {
    @apply h-full;
    flex: 1;
  }
</style>
