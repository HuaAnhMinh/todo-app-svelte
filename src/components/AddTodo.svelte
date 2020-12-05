<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const onclick = () => {
    dispatch('onOpen');
  };
</script>

<style lang="scss">
  @import "../styles/AddTodo";
</style>

<div class="add-todo">
  <button
    type="button"
    class="btn btn-primary add-todo__add-button"
    data-toggle="tooltip"
    data-placement="top"
    title="Add a new todo"
    on:click={onclick}>
    <span aria-hidden="true">&plus;</span>
  </button>
</div>
