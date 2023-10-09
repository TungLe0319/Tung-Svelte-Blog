<script>
  export let category;

  // Function to determine the appropriate color class based on the category
  function getCategoryColorClass(category) {
    switch (category) {
      case "Technology":
        return "text-blue-400";
      case "Art":
        return "text-purple-400";
      case "Software-development":
        return "text-red-500";
      default:
        return "text-black"; // Default color for other categories
    }
  }
</script>

<div class=" font-semibold category-badge {getCategoryColorClass(category)}">
  {category}
</div>

<style lang="scss">
  .category-badge {
    @apply py-1    font-bold rounded-full px-4;
  }
</style>
