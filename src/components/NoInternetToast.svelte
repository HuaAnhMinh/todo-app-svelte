<style lang="scss">
  @import '../styles/NoInternetToast.scss';
</style>

<script>
  export let onHide;
  export let show;
  
  let zIndex = 'unset';

  $: zIndex = show ? 1 : 'unset';
</script>

<div
  class="no-internet toast {show ? 'show' : ''}"
  role="alert"
  aria-atomic="true"
  aria-live="assertive"
  style="z-index: {zIndex}"
>
  <div class="toast-header no-internet__header">
    <strong class="mr-auto no-internet__header__title">
      No internet connection
    </strong>
    <button
      type="button"
      class="ml-2 mb-1 close no-internet__header__close"
      data-dismiss="toast"
      aria-label="Close"
      on:click={() => onHide(false)}
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="toast-body no-internet__body">
    Check your internet connection again.
  </div>
</div>