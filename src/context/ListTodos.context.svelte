<script>
  import { setContext, onMount, onDestroy } from 'svelte';

  import listTodos from '../stores/listTodos.store';
  import getListTodosFromServer from '../services/getListTodos.service';
  import responseTypes from '../config/response.config';

  const addNewTodo = async (newTodo) => {

  };

  const getListTodos = async () => {
    const result = await getListTodosFromServer();
    if (result.type === responseTypes.FAILED) {
      return;
    }

    $listTodos = result.data;
  };

  const updateTodo = async (id, updatedTodo) => {

  };

  const removeTodo = async (id) => {

  };

  setContext('listTodos', listTodos);
  setContext('addTodo', addNewTodo);
  setContext('updateTodo', updateTodo);
  setContext('removeTodo', removeTodo);

  let refreshInterval;

  onMount(() => {
    getListTodos();
    refreshInterval = setInterval(() => {
      getListTodos();
    }, 10000);
  });

  onDestroy(() => {
    clearInterval(refreshInterval);
    refreshInterval = null;
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
    <h1>List todos context...</h1>
  </slot>
</div>