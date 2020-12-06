<script>
  import { onMount } from "svelte";
  import NoInternetToast from "./NoInternetToast.svelte";
  import SearchPatternContext from "../context/SearchPattern.context.svelte";
  import ListTodosContext from "../context/ListTodos.context.svelte";
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
    window.ononline = () => (showNoInternetToast = false);
    window.onoffline = () => (showNoInternetToast = true);
  });
</script>

<style lang="scss">
  @import "../styles/Home.scss";
</style>

<div class="container-sm home">
  <div class="row home__row">
    <NoInternetToast
      show={showNoInternetToast}
      onHide={setShowNoInternetToast}
    />
    
    {#if width < 992}
      <div class="col home-wrapper">
        <SearchPatternContext>
          <ListTodosContext>
            <SearchBar />
            <ListTodos />
            <AddTodo />
          </ListTodosContext>
        </SearchPatternContext>
      </div>
    {:else}
      <div class="col-2" />
      <div class="col-8 home-wrapper">
        <SearchPatternContext>
          <ListTodosContext>
            <SearchBar />
            <ListTodos />
            <AddTodo />
          </ListTodosContext>
        </SearchPatternContext>
      </div>
      <div class="col-2" />
    {/if}
  </div>
</div>
