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

  interface FormData {
    title: string;
    subtitle: string;
    img: string;
    selected: string;
    published: boolean;
    content: string;
  }

  function validateForm() {
    const formData: FormData = {
      title: (document.getElementById("title") as HTMLInputElement).value,
      subtitle: (document.getElementById("subtitle") as HTMLInputElement).value,
      img: (document.getElementById("img") as HTMLInputElement).value,
      selected: (
        document.querySelector('input[name="selected[]"') as HTMLInputElement
      ).value,

      published: (
        document.querySelector('input[name="published"') as HTMLInputElement
      ).checked,

      content: (document.getElementById("content") as HTMLInputElement).value,
    };

    if (
      !formData.title ||
      !formData.subtitle ||
      !formData.img ||
      !formData.selected ||
      !formData.content
    ) {
      alert("Please fill in all required fields.");
      return;
    }
  }
</script>

<div class="p-4 pt-20">
  <div class="flex space-x-4">
    <h2 class="text-2xl font-semibold mb-4">Create a New Blog Post</h2>

    <form action="?/deletePost&id={post.id}" method="POST">
      <Button type="submit">Delete</Button>
    </form>
  </div>

  <form
    action="?/updatePost&id={post.id}"
    method="POST"
    on:submit="{validateForm}"
  >
    <div class="flex space-x-4">
      <div class="mb-4 w-1/2">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value="{post.title}"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div class="mb-4 w-1/2">
        <label for="subtitle">Subtitle</label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value="{post.subtitle}"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>
    </div>

    <div class="flex space-x-4">
      <div class="w-1/2">
        <label for="img">Image URL</label>
        <input
          type="text"
          id="img"
          name="img"
          value="{post.img}"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div class="w-1/2">
        <label for="selected[]">Categories</label>
        <MultiSelect
          size="md"
          name="selected[]"
          items="{categories}"
          bind:value="{selected}"
          required
        />
      </div>
    </div>

    <div class=" my-4 flex space-x-4">
      <Checkbox bind:checked="{post.published}">Published</Checkbox>
      <Button type="submit">Edit</Button>
    </div>

    <div class="two-column">
      <div class="editor-column">
        <div class="mb-4">
          <Label for="content" >Content</Label>
          <Editor value="{post.content}" />
        </div>
      </div>
    </div>
  </form>

  <script>
    function validateForm() {
      const title = document.getElementById("title").value;
      const subtitle = document.getElementById("subtitle").value;
      const img = document.getElementById("img").value;
      const categories = document.querySelector(
        'input[name="selected[]"]'
      ).value; // You might need to adjust this based on the MultiSelect component

      if (!title || !subtitle || !img || !categories) {
        alert("Please fill in all required fields.");
        return false;
      }
      return true;
    }
  </script>
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
