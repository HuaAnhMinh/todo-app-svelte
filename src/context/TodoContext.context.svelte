<script>
  import { setContext, onMount, onDestroy } from 'svelte';

  let todos = [];
  let searchPattern = '';

  setContext('todoContext', {
    getTodos: () => todos,
    getSearchPattern: () => searchPattern,
    setSearchPattern: (pattern='') => searchPattern = pattern,
  });

  onMount(() => {
    // Fetch data interval
  });

  onDestroy(() => {
    // Clear interval
  });
</script>

<style lang="scss">
  .todo-context {
    width: 100%;
    height: 100%;
  }
</style>

<div class="todo-context">
  <slot>
    <h1>Something is wrong here...</h1>
  </slot>
</div>