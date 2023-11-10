<!-- CreateBlogPost.svelte -->

<script>
  import Editor from "@tinymce/tinymce-svelte";
  import { Checkbox, MultiSelect } from "flowbite-svelte";
  import { AppState } from "../../../store/AppState";

  /** @type {import('./$types').PageData} */
  export let data;
  let id = $AppState.activePost.id;
  let title = $AppState.activePost.title;
  let img = $AppState.activePost.img;
  let subtitle = $AppState.activePost.subtitle;
  let content = $AppState.activePost.content;
  let published = $AppState.activePost.published;
  let mappedCategories = data.body.map((category) => {
    return {
      value: category.name,
      name: category.name,
    };
  });
  let selected = $AppState.activePost.categories.map((c) => c.name);
  let categoriesJsonString;
  console.log($AppState.activePost);
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
        console.log(responseData);
      }
    } catch (error) {
      console.error(error);
    }
  }
</script>

<div class="p-4 pt-20">
  <h2 class="text-2xl font-semibold mb-4">Create a New Blog Post</h2>

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

    <div class="mb-4">
      <Checkbox bind:checked="{published}">Published</Checkbox>
      <!-- <label class="block text-gray-600">
        <input
          type="checkbox"
          name="published"
          bind:checked="{published}"
          class="mr-2"
        />
        Published
      </label> -->
    </div>

    <div class="two-column">
      <div class="editor-column">
        <div class="mb-4">
          <label for="content" class="block text-gray-600">Content</label>
          <!-- <Editor bind:value="{content}" /> -->
          <Editor conf="{conf}" bind:value="{content}" />
        </div>
      </div>
      <!-- <div class="preview-column">
        <div class="mb-4">
          <label for="content_preview" class="block text-gray-600"
            >Preview</label
          >
          <div class="rounded px-3 py-2">
            {@html content}
          </div>
        </div>
      </div> -->
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
    @apply min-h-screen flex-1;
  }

  .preview-column {
    @apply h-full;
    flex: 1;
  }
</style>
