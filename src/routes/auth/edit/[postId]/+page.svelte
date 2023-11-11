<!-- CreateBlogPost.svelte -->

<script lang="ts">
  import Editor from "@tinymce/tinymce-svelte";
  import {
    Badge,
    Button,
    Checkbox,
    Input,
    Label,
    MultiSelect,
  } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import { toast } from "../../../../store/Toast";
  import type { PageData } from "./$types";

  export let data: PageData;
  // console.log(data);

  $: post = data.post;
  // console.log(post);

  let categories = data.categories.map((c) => {
    return { value: c.name, name: c.name };
  });

  let selected = data.post ? data.post.categories.map((c) => c.name) : [];
</script>

<div class="p-4 pt-20">
  <div class="flex space-x-4">
    <h2 class="text-2xl font-semibold mb-4">Create a New Blog Post</h2>

    <form action="?/deletePost&id={post.id}" method="POST">
      <Button type="submit">Delete</Button>
    </form>
  </div>

  <form action="?/updatePost&id={post.id}" method="POST">
    <div class="flex space-x-4">
      <div class="mb-4 w-1/2">
        <Label for="title">Title</Label>
        <input
          type="text"
          id="title"
          name="title"
          value="{post.title}"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div class="mb-4 w-1/2">
        <Label for="subtitle" class="">Subtitle</Label>
        <Input
          type="text"
          id="subtitle"
          name="subtitle"
          value="{post.subtitle}"
          class="w-full border rounded px-3 py-2"
        />
      </div>
    </div>

    <div class=" flex space-x-4">
      <div class=" w-1/2">
        <Label for="img">Image URL</Label>
        <Input
          type="text"
          id="img"
          name="img"
          value="{post.img}"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div class="  w-1/2">
        <Label for="sedlected[]">Categories</Label>

        <MultiSelect
          size="md"
          name="selected[]"
          items="{categories}"
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
