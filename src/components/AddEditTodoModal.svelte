<script>
  import { onMount, getContext, afterUpdate } from 'svelte';
  import moment from 'moment';

  export let open;
  export let onClose;
  export let modalId;
  export let todo = {};
  export let todoIndex;

  let openFirstTime = true;

  let title = '';
  let description = '';
  let isFinished = false;
  let deadline = '';

  const addTodo = getContext('addTodo');

  onMount(() => {
    if (todo._id) {
      title = todo.title;
      description = todo.description ? todo.description : '';
      isFinished = todo.isFinished;
      deadline = moment(new Date(todo.deadline)).format('YYYY-MM-DDTHH:mm');
    }

    document.getElementById(modalId).addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    });
  });

  const getTodo = getContext('getTodo');

  afterUpdate(async () => {
    if (open && openFirstTime && !description && todo._id) {
      openFirstTime = false;
      const fullTodo = await getTodo(todo._id, todoIndex);

      title = fullTodo.title;
      description = fullTodo.description;
      isFinished = fullTodo.isFinished;
      deadline = moment(new Date(fullTodo.deadline)).format('YYYY-MM-DDTHH:mm');
    }

    if (!open && !todo._id) {
      title = '';
      description = '';
      isFinished = false;
      deadline = '';
    }
  });

  const handleAddTodo = async () => {
    const result = await addTodo({
      title,
      description,
      isFinished,
      deadline: (new Date(deadline)).valueOf(),
    });
    document.getElementById(`${modalId}-close`).click();
  };

  const handleEditTodo = async () => {
    console.log('Edit');
  };
</script>

<style lang="scss">
  @import '../styles/AddEditTodoModal.scss';
</style>

<div
  class="modal fade add-edit-todo-modal {open ? 'show' : ''}"
  arial-modal="true"
  role="dialog"
  tabindex="-1"
  aria-hidden="true"
  id="{modalId}"
  aria-labelledby="{modalId}-title"
>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header close add-edit-todo-modal__header">
        <h5 class="modal-title" id="{modalId}-title">{todo._id ? 'Edit' : 'Add'} todo</h5>
        <button
          type="button"
          class="close add-edit-todo-modal__header__close"
          data-dismiss="modal"
          aria-label="close"
          on:click={onClose}
          id="{modalId}-close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body add-edit-todo-modal__body">
        <div class="add-edit-modal__body__form">
          <label for="{modalId}-title">Title</label>
          <input
            type="text"
            id="{modalId}-title"
            class="form-control"
            placeholder="Title"
            bind:value={title}
          />
        </div>
        <div class="add-edit-modal__body__form">
          <label for="{modalId}-description">Description</label>
          <textarea
            type="text"
            id="{modalId}-description"
            class="form-control add-edit-modal__body__form__description"
            rows="5"
            placeholder="Description"
            bind:value={description}
          />
        </div>
        <div class="add-edit-modal__body_form">
          <label for="{modalId}-deadline">Deadline</label>
          <input type="datetime-local" id="{modalId}-deadline" class="form-control" bind:value={deadline} />
        </div>
        <div class="add-edit-modal__body_form add-edit-modal__body_form--is-finished">
          <input class="form-check-input" type="checkbox" value="" id="{modalId}-isFinished" bind:checked={isFinished}>
          <label class="form-check-label" for="{modalId}-isFinished">
            Is finished?
          </label>
        </div>
      </div>
      <div class="modal-footer add-edit-todo-modal__footer">
        <button
          type="button"
          class="btn btn-secondary add-edit-todo-modal__footer__button"
          data-dismiss="modal"
          on:click={onClose}
        >
          Close
        </button>
        <button
          type="button"
          class="btn btn-primary add-edit-todo-modal__footer__button add-edit-todo-modal__footer__button--add"
          on:click={todo._id ? handleEditTodo : handleAddTodo}
        >
          {todo._id ? 'Update' : 'Add'} todo
        </button>
      </div>
    </div>
  </div>
</div>