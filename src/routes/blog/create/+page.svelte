<!-- CreateBlogPost.svelte -->

<script>
  let title = '';
  let img = '';
  let subtitle = '';
  let content = '';
  let category = 'Art';
  let published = false;

  // Function to handle form submission
  function handleSubmit() {
    const newBlogPost = {
      title,
      img,
      subtitle,
      content,
      category,
      published,
      datePublished: new Date().toISOString(),
      // authorId can be set based on your authentication system
    };

    // You can send the newBlogPost object to your API or store it in your application state
    console.log(newBlogPost);

    // Clear form fields
    title = '';
    img = '';
    subtitle = '';
    content = '';
    category = 'Art';
    published = false;
  }
</script>

<div class="p-4">
  <h2 class="text-2xl font-semibold mb-4">Create a New Blog Post</h2>
  <form on:submit={handleSubmit}>
    <div class="mb-4">
      <label for="title" class="block text-gray-600">Title</label>
      <input type="text" id="title" bind:value={title} class="w-full border rounded px-3 py-2">
    </div>
    
    <div class="mb-4">
      <label for="subtitle" class="block text-gray-600">Subtitle</label>
      <input type="text" id="subtitle" bind:value={subtitle} class="w-full border rounded px-3 py-2">
    </div>
    <div class="mb-4">
      <label for="img" class="block text-gray-600">Image URL</label>
      <input type="text" id="img" bind:value={img} class="w-full border rounded px-3 py-2">
    </div>
    <div class="mb-4">
      <label for="content" class="block text-gray-600">Content</label>
      <textarea id="content" bind:value={content} class="w-full border rounded px-3 py-2"></textarea>
    </div>
    <div class="mb-4">
      <label for="category" class="block text-gray-600">Category</label>
      <select id="category" bind:value={category} class="w-full border rounded px-3 py-2">
        <option value="Art">Art</option>
        <option value="Technology">Technology</option>
        <!-- Add more categories as needed -->
      </select>
    </div>
    <div class="mb-4">
      <label class="block text-gray-600">
        <input type="checkbox" bind:checked={published} class="mr-2">
        Published
      </label>
    </div>
    <div class="mt-4">
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create</button>
    </div>
  </form>
</div>
