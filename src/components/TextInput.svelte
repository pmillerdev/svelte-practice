<script>
  export let label;
  export let value;
  export let multiline = false;
</script>

<style>
  label {
    font-weight: var(--typeWeightBold);
    text-transform: uppercase;
  }
  span {
    padding: 0 0 var(--spacingSmall) var(--spacingLarge);
  }
  input,
  textarea {
    display: block;
    background: #f8ecde;
    border-radius: 25px;
    border: 2px solid var(--colorFg);
    padding: 0.75rem var(--spacingSmall) 0.75rem var(--spacingLarge);
    max-width: 100%;
    width: 45vw;
  }
  textarea {
    height: 8rem;
  }
</style>

<label>
  <span>{label}</span>
  {#if multiline}
    <textarea bind:value />
  {:else}
    <!-- Two way binding of title -->
    <input ype="text" bind:value />
  {/if}
</label>
