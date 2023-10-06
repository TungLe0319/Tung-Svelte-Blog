

<script context="module">
  export async function load({ params }) {
    // You can perform any additional data loading or validation here if needed
    return {
      props: {
        slug: params.slug
      }
    };
  }
</script>

<script>
  import BlogPost from '../../../../components/BlogPost.svelte'; // Adjust the path as needed
</script>

<BlogPost />
