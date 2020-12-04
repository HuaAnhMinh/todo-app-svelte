<script>
  import { setContext } from 'svelte';

  import searchPattern from '../stores/searchPattern.store';

  setContext('searchPattern', searchPattern);
</script>

<style lang="scss">
  .search-pattern-context {
    width: 100%;
    height: calc(100% - 20px);
  }
</style>

<div class="search-pattern-context">
  <slot>
    <h1>Search pattern context...</h1>
  </slot>
</div>