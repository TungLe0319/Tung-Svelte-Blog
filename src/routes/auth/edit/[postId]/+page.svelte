<!-- CreateBlogPost.svelte -->

<script lang="ts">
  import Editor from "@tinymce/tinymce-svelte";
  import { Button, Checkbox, Label, MultiSelect } from "flowbite-svelte";
  import { goto, invalidateAll } from "$app/navigation";
  import { toast } from "$lib/stores/Toast";
  import type { PageData } from "./$types";
  import { formData } from "$lib/stores/FormData";
  import type { Category } from "@prisma/client";
  import { applyAction, deserialize } from "$app/forms";

  export let data: PageData;
console.log(data);

  $: post = data.post;
  // console.log(post);

  let categories = data.categories.map((c: Category) => {
    return { value: c.name, name: c.name };
  });

  let selected = data.post
    ? data.post.categories.map((c: Category) => c.name)
    : [];

  async function handleSubmit(event: {
    currentTarget: HTMLFormElement | undefined;
  }) {
    try {
      const data = new FormData(event?.currentTarget);

    
      data.append("content", post.content);

      $formData.categories.forEach((category) => {
        data.append("selected[]", category);
      });

      const response = await fetch(event.currentTarget!.action, {
        method: "POST",
        body: data,
      });

      const result = deserialize(await response.text());

      if (result.type === "success") {
        // rerun all `load` functions, following the successful update
        await invalidateAll();
      }

      applyAction(result);
    } catch (error) {
      console.error(error)
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
    on:submit="{() =>handleSubmit}"
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
          <Label for="content">Content</Label>
          <Editor  bind:value="{post.content}" />
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
