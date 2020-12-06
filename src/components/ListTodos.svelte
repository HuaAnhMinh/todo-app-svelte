<script>
  import { getContext } from 'svelte';

  import SingleTodo from './SingleTodo.svelte';
  
  const listTodos = getContext('listTodos');
  const searchPattern = getContext('searchPattern');

  $: derivedListTodos = $listTodos.filter(todo => todo.title.toLowerCase().includes($searchPattern.toLowerCase()));
</script>

<style lang="scss">
  @import "../styles/ListTodos";
</style>

<div class="list-todos">
  {#each derivedListTodos as todo, index}
    <SingleTodo todo={todo} todoIndex={index} />
  {/each}
</div>