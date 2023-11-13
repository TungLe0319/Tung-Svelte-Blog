<!-- CreateBlogPost.svelte -->

<script lang="ts">
  import Editor from "@tinymce/tinymce-svelte";
  import { Checkbox, Input, MultiSelect } from "flowbite-svelte";
  import { formData } from "$lib/stores/FormData";
  import type { PageData } from "./$types";
  import { applyAction, deserialize, enhance } from "$app/forms";
  import { invalidateAll } from "$app/navigation";

  export let data: PageData;

  $: categories = data.body?.map((category) => {
    return {
      value: category.name,
      name: category.name,
    };
  });

  async function handleSubmit(event: {
    currentTarget: HTMLFormElement | undefined;
  }) {
    try {
      const data = new FormData(event?.currentTarget);
      data.append("content", $formData.content);

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
      $formData.content = "";
    } catch (error) {
      console.error(error);
    }
  }
</script>

<div class="p-4 pt-20">
  <h2 class="text-2xl font-semibold mb-4">Create a New Blog Post</h2>

  <form
    action="?/createPost"
    method="POST"
    on:submit|preventDefault="{handleSubmit}"
    use:enhance="{({ formElement }) => {
      return async ({ update }) => {
        formElement.reset();
        await update();
      };
    }}"
  >
    <div class="flex space-x-4">
      <div class="mb-4 w-1/2">
        <label for="title" class="block text-gray-600">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div class="mb-4 w-1/2">
        <label for="subtitle" class="block text-gray-600">Subtitle</label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          class="w-full border rounded px-3 py-2"
        />
      </div>
    </div>

    <div class=" flex space-x-4">
      <div class="mb-4 w-1/2">
        <label for="img" class="block text-gray-600">Image URL</label>
        <Input
          type="text"
          id="img"
          name="img"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div class=" mt-6 mb-4 w-1/2">
        <MultiSelect
          size="lg"
          items="{categories}"
          bind:value="{$formData.categories}"
        />
      </div>
    </div>

    <div class="mb-4 flex items-center space-x-4">
      <Checkbox checked name="published">Published</Checkbox>

      <button formaction="?/createPost" type="submit" class="">Create</button>
    </div>

    <div class="two-column">
      <div class="editor-column">
        <div class="mb-4">
          <label for="content" class="block text-gray-600">Content</label>
          <!-- <Editor bind:value="{content}" /> -->
          <Editor bind:value="{$formData.content}" />
        </div>
      </div>
      <!-- <div class="preview-column">
        <div class="mb-4">
          <label for="content_preview" class="block text-gray-600"
            >Preview</label
          >
          <div class="rounded px-3 py-2">
            {@html $formData.content}
          </div>
        </div>
      </div> -->
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
    height: 100%;
    flex: 1;
  }
</style>
