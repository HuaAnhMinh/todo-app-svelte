<script>
  import { setContext, onMount } from 'svelte';

  import listTodos from '../stores/listTodos.store';

  import addTodoToServer from '../services/addTodo.service';
  import getListTodosFromServer from '../services/getListTodos.service';
  import getTodoFromServer from '../services/getTodo.service';
  import updateTodoToServer from '../services/updateTodo.service';
  import removeTodoFromServer from '../services/removeTodo.service';

  import responseTypes from '../config/response.config';

  const addNewTodo = async (newTodo) => {
    const result = await addTodoToServer(newTodo);
    if (result.type === responseTypes.FAILED) {
      return result.error;
    }

    $listTodos = [result.data.todo, ...$listTodos];
  };

  const getListTodos = async () => {
    const result = await getListTodosFromServer();
    if (result.type === responseTypes.FAILED) {
      return;
    }

    $listTodos = result.data.todos;
  };

  const getTodo = async (id, currentIndex) => {
    const result = await getTodoFromServer(id);
    if (result.type === responseTypes.FAILED) {
      return;
    }

    $listTodos[currentIndex] = result.data.todo;
    return result.data.todo;
  };

  const updateTodo = async (id, index, oldTodo, updatedTodo) => {
    const updatedPart = {};

    if (oldTodo.title !== updatedTodo.title) {
      updatedPart.title = updatedTodo.title;
    }

    if (oldTodo.description !== updatedTodo.description) {
      updatedPart.description = updatedTodo.description;
    }

    if (oldTodo.deadline !== updatedTodo.deadline) {
      updatedPart.deadline = updatedTodo.deadline;
    }

    if (oldTodo.isFinished !== updatedTodo.isFinished) {
      updatedPart.isFinished = updatedTodo.isFinished;
    }

    const result = await updateTodoToServer(id, updatedPart);
    if (result.type === responseTypes.FAILED) {
      return result.error;
    }

    $listTodos[index] = result.data.todo;
  };

  const removeTodo = async (id, index) => {
    const result = await removeTodoFromServer(id);
    if (result.type === responseTypes.FAILED) {
      return;
    }

    let temp = [...$listTodos];
    temp.splice(index, 1);
    $listTodos = temp;
  };

  setContext('listTodos', listTodos);
  setContext('addTodo', addNewTodo);
  setContext('getTodo', getTodo);
  setContext('updateTodo', updateTodo);
  setContext('removeTodo', removeTodo);

  onMount(() => {
    getListTodos();
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