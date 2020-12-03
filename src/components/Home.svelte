<script>
  import {onMount} from 'svelte';
  import NoInternetToast from './NoInternetToast.svelte';
  import TodoContext from '../context/TodoContext.context.svelte';
  import SearchBar from "./SearchBar.svelte";
  import ListTodos from "./ListTodos.svelte";
  import AddTodo from "./AddTodo.svelte";

  let width = window.innerWidth;
  const onWindowResize = (e) => {
    if (e.target.innerWidth !== width) {
      width = e.target.innerWidth;
    }
  };

  let showNoInternetToast = false;
  const setShowNoInternetToast = (show = false) => {
    showNoInternetToast = show;
  };

  onMount(() => {
    window.onresize = onWindowResize;
    window.ononline = () => showNoInternetToast = false;
    window.onoffline = () => showNoInternetToast = true;
  });

</script>

<style lang="scss">
  @import '../styles/Home.scss';
</style>

<div class="container-sm home">
  <div class="row home__row">

  {#if width < 992}
    <div class="col">
      <TodoContext>
        <SearchBar/>
        <ListTodos/>
        <AddTodo/>
      </TodoContext>
    </div>
  {:else}
    <div class="col-2"></div>
    <div class="col-8">
      <TodoContext>
        <SearchBar/>
        <ListTodos/>
        <AddTodo/>
      </TodoContext>
    </div>
    <div class="col-2"></div>
  {/if}

    <NoInternetToast
      show={showNoInternetToast}
      onHide={setShowNoInternetToast}
    />
  </div>
</div>