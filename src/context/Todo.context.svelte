<script>
  import { setContext } from 'svelte';

  import todo from '../stores/todo.store';
</script>

<div>
  <slot>
    <h1>Todo context...</h1>
  </slot>
</div>