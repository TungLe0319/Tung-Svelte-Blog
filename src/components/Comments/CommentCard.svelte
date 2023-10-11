<!-- commentCard.svelte -->
<script>
  export let comment;
</script>

<style>
  .comment-card {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 0;
  }

  .user-info {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .user-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .content {
    flex: 1;
  }
</style>

<div class="comment-card">
  <div class="user-info">
  
    <img class="user-image" src={comment?.user?.image} alt={comment?.user?.name} />
    <span>{comment?.user?.name}</span>
  </div>
  <div class="content">
    <p>{comment?.content}</p>
  </div>
</div>