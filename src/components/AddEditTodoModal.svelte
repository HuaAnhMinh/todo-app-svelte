<script>
  import { onMount, getContext, afterUpdate } from 'svelte';
  import moment from 'moment';

  export let open;
  export let onClose;
  export let modalId;
  export let todo = {};
  export let todoIndex;

  let openFirstTime = true;
  let editableTodo = {
    title: '',
    description: '',
    isFinished: false,
    deadline: '',
  };

  onMount(() => {
    editableTodo = todo;
    if (todo._id) {
      editableTodo.deadline = moment(new Date(editableTodo.deadline)).format('yyyy-MM-ddThh:mm');
      console.log(editableTodo)
    }
  });

  const getTodo = getContext('getTodo');

  afterUpdate(async () => {
    if (open && openFirstTime && !editableTodo.description && todo._id) {
      console.log('Here');
      openFirstTime = false;
      editableTodo = await getTodo(todo._id, todoIndex);
    }

  });
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
        <h5 class="modal-title" id="{modalId}-title">{editableTodo._id ? 'Edit' : 'Add'} todo</h5>
        <button
          type="button"
          class="close add-edit-todo-modal__header__close"
          data-dismiss="modal"
          aria-label="close"
          on:click={onClose}
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
            bind:value={editableTodo.title}
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
            bind:value={editableTodo.description}
          />
        </div>
        <div class="add-edit-modal__body_form">
          <label for="{modalId}-deadline">Deadline</label>
          <input type="datetime-local" id="{modalId}-deadline" class="form-control" bind:value={editableTodo.deadline} />
        </div>
        <div class="add-edit-modal__body_form add-edit-modal__body_form--is-finished">
          <input class="form-check-input" type="checkbox" value="" id="{modalId}-isFinished" bind:checked={editableTodo.isFinished}>
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
        >
          Close
        </button>
        <button
          type="button"
          class="btn btn-primary add-edit-todo-modal__footer__button add-edit-todo-modal__footer__button--add"
        >
          {todo._id ? 'Update' : 'Add'} todo
        </button>
      </div>
    </div>
  </div>
</div>