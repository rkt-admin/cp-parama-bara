<script>
  import ArrowRightIcon from './ArrowRightIcon.svelte'

  export let href
  export let raised = true
  export let size = 'medium' // small, medium, or large
  export let arrows = false

  let className = ''

  export { className as class }
</script>

<div class="not-prose">
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <a
    {...$$restProps}
    {href}
    class={'inline-block text-slate-800 dark:text-slate-200 dark:text-opacity-90 rounded-md no-underline '+
      className}
    class:small={size === 'small'}
    class:medium={size === 'medium'}
    class:large={size === 'large'}
    class:raised
  >
    <div class="flex items-center space-x-1">
      <slot name="icon-start" />
      <span>
        <slot />
      </span>
      {#if arrows}
      <slot name="icon-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </slot>
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
