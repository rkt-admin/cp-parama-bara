<script>
  // import ArrowRightIcon from './ArrowRightIcon.svelte'

  export let href
  export let raised = false
  export let size = 'medium' // small, medium, or large
  export let arrowsRight = false
  export let arrowsLeft = false

  let className = ''

  export { className as class }
</script>

<div class="not-prose">
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <a
    {...$$restProps}
    {href}
    class={'inline-block dark:text-opacity-90 rounded-md no-underline '+
      className}
    class:small={size === 'small'}
    class:medium={size === 'medium'}
    class:large={size === 'large'}
    class:raised
  >
    <div class="flex items-center space-x-1"> 
      {#if arrowsLeft}
      <i class="fa-solid fa-arrow-left"></i>
      {/if}      
      <span>
        <slot />
      </span>
      {#if arrowsRight}
      <i class="fa-solid fa-arrow-right"></i>
      {/if}
    </div>
  </a>
</div>

<style lang="postcss">
  .small {
    @apply text-sm font-medium;
  }

  .small.raised {
    @apply px-2 py-1;
  }

  .medium {
    @apply text-base;
  }

  .medium.raised {
    @apply px-3 py-1;
  }

  .large {
    @apply text-lg;
  }

  .large.raised {
    @apply px-4 py-2;
  }

  .raised {
    @apply bg-slate-300;
  }

  :global(.dark) .raised {
    @apply bg-slate-700;
  }
</style>
