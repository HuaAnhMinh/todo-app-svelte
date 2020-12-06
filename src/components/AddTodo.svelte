<script>
  import AddEditTodoModal from './AddEditTodoModal.svelte';

  let openAddModal = false;
  const onCloseAddModal = () => {
    openAddModal = false;
  };
</script>

<style lang="scss">
  @import "../styles/AddTodo";
</style>

<div class="add-todo">
  <button
    type="button"
    class="btn btn-primary add-todo__add-button"
    data-toggle="modal"
    data-placement="top"
    data-keyboard="true"
    data-target="#add-todo"
    title="Add a new todo"
    on:click={() => openAddModal = true}
  >
    <span aria-hidden="true">&plus;</span>
  </button>

  <AddEditTodoModal
    onClose={onCloseAddModal}
    open={openAddModal}
    modalId={"add-todo"}
  />
</div>
