<script>
  import Detail from "./detail/Detail.svelte";
  import Library from "./library/Library.svelte";

  let page = "detail";
  let pageArgs = { id: 3 };
  function handleBookSelect(event) {
    page = "detail";
    pageArgs = event.detail;
  }
</script>

<style>
  main {
    padding: var(--spacingLarge);
  }
</style>

<main>
  {#if page === 'detail'}
    <Detail {...pageArgs} />
  {:else}
    <Library on:book-select={handleBookSelect} />
  {/if}
</main>
