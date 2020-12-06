<script>
  import { getContext } from 'svelte';

  const searchPattern = getContext('searchPattern');
</script>

<style lang="scss">
  @import "../styles/SearchBar";
</style>

<div class="search-bar">
  <div class="input-group mb-3 search-bar__search-group">
    <div class="input-group-prepend search-bar__icon">
      <span class="input-group-text">
        <i class="fas fa-search"></i>
      </span>
    </div>
    <input
      type="text"
      class="form-control search-bar--input"
      placeholder="Search todo"
      aria-label="Search todo"
      bind:value={$searchPattern}
    />
  </div>
</div>