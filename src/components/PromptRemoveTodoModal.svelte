<script>
  export let open;
  export let modalId;
  export let onClose;
  export let removeCallback;

  const removeTodo = async () => {
    await removeCallback();
    document.getElementById(`${modalId}-close`).click();
  };
</script>

<style lang="scss">
  @import '../styles/PromptRemoveTodoModal.scss';
</style>

<div
  class="modal fade prompt-remove-todo {open ? 'show' : ''}"
  aria-modal="true"
  role="dialog"
  tabindex="-1"
  aria-hidden="true"
  id="{modalId}"
  aria-labelledby="{modalId}-title"
>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header close prompt-remove-todo__header">
        <h5 class="modal-title" id="{modalId}-title">Are you sure you want to remove this todo</h5>
        <button
          type="button"
          class="close prompt-remove-todo__header__close"
          data-dismiss="modal"
          aria-label="close"
          on:click={onClose}
          id="{modalId}-close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body prompt-remove-todo__body">
        <p>This action can not be undo. Please be caution!</p>
      </div>
      <div class="modal-footer prompt-remove-todo__footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          on:click={onClose}
        >
          Cancel
        </button>
        <button
          type="button"
          class="btn btn-danger"
          on:click={removeTodo}
        >
          Remove todo
        </button>
      </div>
    </div>
  </div>
</div>