<script>
  let objects = [
    {
      title: "The quick brown fox jumps over the lazy dog.",
      deadline: 20000,
      _id: "0",
      isFinished: false,
    },
    {
      title: "The quick brown fox jumps over the lazy dog.",
      deadline: 20000,
      _id: "0",
      isFinished: false,
    },
  ];
</script>

<style lang="scss">
  @import "../styles/SingleTodo";
</style>

{#each objects as object}
  <div class="single-todo">
    <div class="todo-group">
      <div class="todo-group-component">
        {#if object.isFinished}
          <lable><del>{object.title}</del></lable>
        {:else}
          <lable>{object.title}</lable>
        {/if}
        <div class="todo-group-component-button">
          <button> <i class="fas fa-edit" /> </button>
        </div>
      </div>
      <div class="todo-group-component">
        {#if object.isFinished}
          <lable><del>{object.deadline}</del></lable>
        {:else}
          <lable>{object.deadline}</lable>
        {/if}
        <div class="todo-group-component-button">
          <button> <i class="fas fa-trash" /> </button>
        </div>
      </div>
    </div>
  </div>
{/each}
