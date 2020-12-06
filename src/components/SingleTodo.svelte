<script>
  import { getContext } from 'svelte';
  import moment from 'moment';

  import AddEditTodoModal from './AddEditTodoModal.svelte';
  import PromptRemoveTodoModal from './PromptRemoveTodoModal.svelte';

  export let todo;
  export let todoIndex;

  const deadlineString = moment((new Date(todo.deadline))).format('DD/MM/YYYY - HH:mm');

  let openEditTodo = false;
  let openPromptRemove = false;

  const removeTodo = getContext('removeTodo');

</script>

<style lang="scss">
  @import "../styles/SingleTodo";
</style>

<div class="single-todo">
  <div class="single-todo__contents {todo.isFinished ? 'single-todo__contents--finished' : ''}">
    <div>
      <h2 class="no-select single-todo__contents__title">{todo.title}</h2>
    </div>
    <div>
      <p class="no-select single-todo__contentes__description">Deadline: {deadlineString}</p>
    </div>
  </div>
  <div class="single-todo__actions">
    <div>
      <button
        class="btn btn-primary single-todo__actions__button"
        on:click={() => openEditTodo = true}
        data-toggle="modal"
        data-keyboard="true"
        data-target="#edit-todo-{todo._id}"
      >
        <i class="fas fa-edit" />
      </button>
    </div>
    <div>
      <button
        class="btn btn-primary single-todo__actions__button single-todo__actions__button--remove"
        on:click={() => openPromptRemove = true}
        data-toggle="modal"
        data-keyboard="true"
        data-target="#remove-todo-{todo._id}"
      >
        <i class="fas fa-trash" />
      </button>
    </div>
  </div>

  <AddEditTodoModal
    onClose={() => openEditTodo = false}
    open={openEditTodo}
    modalId="edit-todo-{todo._id}"
    todo={todo}
    todoIndex={todoIndex}
  />

  <PromptRemoveTodoModal
    open={openPromptRemove}
    onClose={() => openPromptRemove = false}
    modalId="remove-todo-{todo._id}"
    removeCallback={() => removeTodo(todo._id, todoIndex)}
  />
</div>