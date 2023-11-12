<!-- CreateBlogPost.svelte -->

<script lang="ts">
  import { formData } from "$lib/stores/FormData";
  import { AppState } from "$lib/stores/AppState";
  import Editor from "@tinymce/tinymce-svelte";
  import { Button, Checkbox, MultiSelect } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import { toast } from "$lib/stores/Toast";
  import type { Category } from "@prisma/client";
  /** @type {import('./$types').PageData} */
  export let data;
  let post = data.body?.post;
  let id = post.id;
  let title = post.title;
  let subtitle = post.subtitle;
  let img = post.img;
  let content = post.content;
  let published = post.published;
  let currentCategories = post.categories.map((c: Category) => c.name);

  let categories = data.body.categories.map((category: Category) => {
    return {
      value: category.name,
      name: category.name,
    };
  });

  async function handleUpdate(event: {
    currentTarget: HTMLFormElement | undefined;
  }) {
    try {
      if (confirm("Edit?")) {
      }

      let formData = new FormData();

      formData.append("title", post.title);
      formData.append("img", post.img);
      formData.append("subtitle", post.subtitle);
      formData.append("content", post.content);
      currentCategories.forEach((c: string) => {
        formData.append("categories[]", c);
      });
      formData.append("categories", currentCategories);
      formData.append("published", post.published);

      await fetch(event.currentTarget!.action, {
        method: "POST",
        body: formData,
      });

      toast({
        color: "green",
        message: "Post Successfully Updated",
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(event: {
    currentTarget: HTMLFormElement | undefined;
  }) {
    try {
      if (confirm("Delete?")) {
      }

      let formData = new FormData();

      await fetch(event.currentTarget!.action, {
        method: "POST",
        body: formData,
      });

      toast({
        color: "green",
        message: "Post Deleted",
      });

      goto('/')
    } catch (error) {
      console.error(error);
    }
  }
</script>

<div class="p-4 pt-20">
  <div class=" mb-4">
    <form
      action="?/deletePost&id={post.id}"
      method="POST"
      on:submit|preventDefault="{handleDelete}"
    >
      <Button type="submit">Delete Post</Button>
    </form>
  </div>
  <form
    action="?/updatePost&id={post.id}"
    method="POST"
    on:submit|preventDefault="{handleUpdate}"
  >
    <div class="flex space-x-4">
      <div class="mb-4 w-1/2">
        <label for="title" class="block text-gray-600">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          bind:value="{post.title}"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div class="mb-4 w-1/2">
        <label for="subtitle" class="block text-gray-600">Subtitle</label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          bind:value="{post.subtitle}"
          class="w-full border rounded px-3 py-2"
        />
      </div>
    </div>

    <div class=" flex space-x-4">
      <div class="mb-4 w-1/2">
        <label for="img" class="block text-gray-600">Image URL</label>
        <input
          type="url"
          id="img"
          name="img"
          bind:value="{post.img}"
          class="w-full border rounded px-3 py-2"
        />
        <img src="{post.img}" alt=" post" class="w-1/3 rounded m-2" />
      </div>

      <div class=" mt-6 mb-4 w-1/2">
        <MultiSelect
          size="lg"
          items="{categories}"
          bind:value="{currentCategories}"
        />
      </div>
    </div>

    <div class="mb-4 flex space-x-2 items-center">
      <Checkbox bind:checked="{post.published}">Published</Checkbox>
      <Button type="submit">Edit</Button>
    </div>

    <div class="two-column">
      <div class="editor-column">
        <div class="mb-4">
          <label for="content" class="block text-gray-600">Content</label>

          <Editor bind:value="{post.content}" />
        </div>
      </div>
    </div>
  </form>
</div>

{#if $AppState.activePost}
  <div class="p-4 pt-20">
    <h2 class="text-2xl font-semibold mb-4">Create a New Blog Post</h2>

    <!-- <form on:submit="{handleUpdate}">
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
          <img src="{img}" alt=" post" class="w-1/3 rounded m-2">
        </div>

        <div class=" mt-6 mb-4 w-1/2">
          <MultiSelect
            size="lg"
            items="{categories}"
            bind:value="{currentCategories}"
          />
        </div>
      </div>

      <div class="mb-4 flex space-x-2 items-center">
        <Checkbox bind:checked="{published}">Published</Checkbox>
            <Button
          type="submit"
         
          >Create</Button
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

   
    </form> -->
  </div>
{:else}
  <div class="text-8xl font-bold font-1 p-44 text-center">NO ACTIVE POST</div>
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
