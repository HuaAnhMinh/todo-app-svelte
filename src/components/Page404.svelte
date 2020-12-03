<script>
  import { Link } from 'svelte-routing';
</script>

<style lang="scss">
  @import '../styles/Page404.scss';
</style>

<div class="page-404">
  <h1 class="page-404__title">404 Not Found :(</h1>
  <p class="page-404__sorry">we are sorry for the inconvenience.</p>
  <p class="page-404__back-to-home">Back to <Link to="/">Home</Link></p>
</div>