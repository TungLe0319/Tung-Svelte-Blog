<!-- CreateBlogPost.svelte -->

<script lang="ts">
  import Editor from "@tinymce/tinymce-svelte";
  import { Button, Checkbox, MultiSelect } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import { toast } from "../../../../store/Toast";
  import type { PageData } from "./$types";

  export let data: PageData;
  console.log(data);

  let selected: [];
  $: post = data.post;
  $: categories = data.categories;

  let mappedCategories = data.categories.map((c) => {
    return { value: c.name, name: c.name };
  });
  console.log(mappedCategories);
</script>

<div class="p-4 pt-20">
  <div class="flex space-x-4">
    <h2 class="text-2xl font-semibold mb-4">Create a New Blog Post</h2>

    <form action="?/deletePost&id=" method="POST">
      <Button type="submit">Delete</Button>
    </form>
  </div>

  <form action="?/updatePost" method="PUT">
    <div class="flex space-x-4">
      <div class="mb-4 w-1/2">
        <label for="title" class="block text-gray-600">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value="{post.title}"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div class="mb-4 w-1/2">
        <label for="subtitle" class="block text-gray-600">Subtitle</label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value="{post.subtitle}"
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
          value="{post.img}"
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
      <Checkbox bind:checked="{post.published}">Published</Checkbox>
      <Button type="submit">Edit</Button>
    </div>

    <div class="two-column">
      <div class="editor-column">
        <div class="mb-4">
          <label for="content" class="block text-gray-600">Content</label>

          <Editor value="{post.content}" />
        </div>
      </div>
    </div>
  </form>
</div>

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
