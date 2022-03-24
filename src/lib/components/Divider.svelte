<script>
  export let border = false
  export let dividerHight = 0
</script>
<div class="max-w-full block {border? 'border-half': ''} my-{dividerHight}">&nbsp;</div>

<style lang="postcss">

  .border-half:before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 0;
    width: 100%;
    @apply border-t-2 border-dashed border-slate-300;
  }

  :global(.dark) .border-half:before {
    @apply border-t-2 border-dashed border-slate-700;
  }
  
</style>
