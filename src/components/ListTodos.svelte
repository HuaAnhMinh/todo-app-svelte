<script>
  import { getContext } from 'svelte';
  
  const searchPattern = getContext('searchPatternContext');
</script>

<style lang="scss">
  @import "../styles/ListTodos";
</style>

<div class="list-todos">
  List Todos
  {$searchPattern}
</div>