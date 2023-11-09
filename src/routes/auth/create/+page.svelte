<!-- CreateBlogPost.svelte -->

<script>
  import Editor from "@tinymce/tinymce-svelte";
  import { Badge, Label, Select, MultiSelect } from "flowbite-svelte";
  import { parse } from "svelte/compiler";

  /** @type {import('./$types').PageData} */
  export let data;
  let title = "TESTINGFORCATES";
  let img = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let subtitle = "If you're new to the exciting world of IT and want to learn about keeping your digital kingdom safe from the cyber beasts, you've come to the right place.";
  let content = `<h1><strong><em>Exploring the Enigmatic World of Banksy</em></strong></h1> <p>&nbsp;</p> <p>&nbsp;</p> <p><em><img class="_1n5grcph _1n5grcpk _1n5grcp7y _1n5grcp3cy _1n5grcp3j4 _1n5grcp6 _1n5grcp94" src="https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-4166.jpg" sizes="(max-width: 480px) 100vw, (min-aspect-ratio: 626/314) calc((100vh - 184px) * 1.994), (max-width: 1096px) calc(100vw - 40px), calc(100vw - 540px)" srcset="https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-4166.jpg?w=360 360w, https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-4166.jpg?w=740 740w, https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-4166.jpg?w=826 826w, https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-4166.jpg?w=900 900w, https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-4166.jpg?w=996 996w, https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-4166.jpg?w=1060 1060w, https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-4166.jpg?w=1380 1380w, https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-4166.jpg?w=1480 1480w, https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-4166.jpg?w=1800 1800w, https://img.freepik.com/premium-photo/generative-ai-ink-black-street-graffiti-art-textured-paper-vintage-background-inspired-banksy_93150-4166.jpg?w=2000 2000w" alt="Generative AI Ink black street graffiti art on a textured paper vintage background inspired Banksy" width="626" height="314"></em></p> <p>&nbsp;</p> <p>&nbsp;</p> <p><strong>I</strong><strong>ntroduction:</strong></p> <p>Banksy, the pseudonymous British street artist, political activist, and self-proclaimed "art terrorist," has left an indelible mark on the art world. Known for his thought-provoking and often politically charged artworks, Banksy has achieved global recognition while maintaining his anonymity. In this article, we delve into the fascinating world of Banksy, exploring his art, activism, and the enduring mystery surrounding his identity.</p> <p>&nbsp;</p> <p>&nbsp;</p> <p><strong>Banksy's Origins:</strong></p> <p>Banksy emerged on the street art scene in the early 2000s, primarily in the city of Bristol, UK. His early works featured stenciled images and subversive messages that challenged societal norms and questioned authority. Banksy's signature style combined satirical humor with poignant social commentary, captivating both art enthusiasts and the general public.</p> <p>&nbsp;</p> <p>&nbsp;</p> <p><strong>The Artistic Impact:</strong></p> <p>Banksy's artworks often convey powerful messages on topics such as war, capitalism, poverty, and social justice. His iconic pieces, including the "Girl with a Balloon" and "There Is Always Hope" murals, have become symbols of hope and resilience. Banksy's ability to provoke thought and inspire discourse through his art has made him a revered figure in contemporary art.</p> <p>&nbsp;</p> <p>&nbsp;</p> <p><strong>Political Activism:</strong></p> <p>Beyond his art, Banksy is known for his activism. He uses his works to shine a spotlight on pressing issues, such as the Syrian refugee crisis and police brutality. His art installations and public interventions have drawn attention to important global concerns, sparking conversations and calls for change.</p> <p>&nbsp;</p> <p>&nbsp;</p> <p><strong>The Elusive Identity:</strong></p> <p>One of the most intriguing aspects of Banksy is his determination to remain anonymous. Despite immense fame and speculation about his identity, Banksy's true face remains hidden. His commitment to anonymity adds an air of mystique to his art and keeps the focus on the messages he conveys rather than his personal fame.</p> <p>&nbsp;</p> <p>&nbsp;</p> <p><strong>Legacy and Influence:</strong></p> <p>Banksy's influence extends far beyond the realm of street art. His artworks have been featured in prestigious galleries, and his name is synonymous with contemporary urban art. Banksy's ability to merge activism with artistic expression has inspired a new generation of artists to use their talents as a force for change.</p> <p>&nbsp;</p> <p>&nbsp;</p> <p><strong>Conclusion:</strong></p> <p>In a world where art can transcend boundaries and ignite social change, Banksy stands as a testament to the power of creative expression. With each mural, installation, and public statement, he challenges our perspectives and encourages us to question the status quo. As Banksy continues to captivate the world, his impact on art and society remains immeasurable, proving that art can be a powerful catalyst for change.</p>`;
  let categories = "";
  let published = true;
  let availableCategories = data.body;
    let mappedCategories = availableCategories.map(category => {
    return {
      value: category.name.toLowerCase(),
      name: category.name
    };
  });
  let selected = ["Technology",'Education'];









  async function handleSubmit() {
    try {
      if (title === "" || subtitle === "" || content === "") {
        errorMessage = "Title, subtitle, and content are required.";
        return;
      }

      let formData = new FormData();
      formData.append("title", title);
      formData.append("img", img);
      formData.append("subtitle", subtitle);
      formData.append("content", content);
      formData.append("categories", selected);
      formData.append("published", published);

      const response = await fetch("/auth/create", {
        method: "POST",

        body: formData,
      });
// console.log(response);
      if (response.ok) {
        // console.log(response);
        const responseData = await response.json();
const parsedData = parse(responseData)
     console.log(responseData);
        // console.log(parsedData);
        // console.log("Post created successfully");
        // title = "";
        // img = "";
        // subtitle = "";
        // content = "";
        // categories = "";
        // published = false;

      
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

  {#each selected as item}
   {item}
  {/each}
      </div>
    </div>

    <div class="mb-4">
      <label class="block text-gray-600">
        <input
          type="checkbox"
          name="published"
          bind:checked="{published}"
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
          <!-- <Editor
         
            bind:value="{content}"
          /> -->
        </div>
      </div>
      <div class="preview-column">
        <div class="mb-4">
          <label for="content_preview" class="block text-gray-600"
            >Preview</label
          >
          <div class="rounded px-3 py-2">
            {@html content}
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
