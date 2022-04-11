<script>
  export let border = false
  export let size = 'large' // small, medium, or large
</script>

<div
  class="max-w-full align-top block {border ? 'border-half' : ''}"
  class:small={size === 'small'}
  class:medium={size === 'medium'}
  class:large={size === 'large'}
>&nbsp;</div>

<style lang="postcss">
  .small {
    @apply my-2;
  }
  .medium {
    @apply my-4;
  }
  .large {
    @apply my-8;
  }
  .border-half:before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 0;
    margin-top: 13px;
    width: 100%;
    @apply border-t-2 border-dashed border-slate-200;
  }

  :global(.dark) .border-half:before {
    @apply border-t-2 border-dashed border-slate-700;
  }
</style>
