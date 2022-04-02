<script>
  export let border = false
  export let size = 'large' // small, medium, or large
</script>

<div
  class="max-w-full block {border ? 'border-half' : ''}"
  class:small={size === 'small'}
  class:medium={size === 'medium'}
  class:large={size === 'large'}
/>

<style lang="postcss">
  .small {
    @apply my-4;
  }
  .medium {
    @apply my-8;
  }
  .large {
    @apply my-16;
  }
  .border-half:before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 0;
    width: 100%;
    @apply border-t-2 border-solid border-slate-100;
  }

  :global(.dark) .border-half:before {
    @apply border-t-2 border-dashed border-slate-700;
  }
</style>
