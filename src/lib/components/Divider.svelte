<div class="border-half">&nbsp;</div>

<style lang="postcss">
  .border-half {
    margin: 60px 0 60px 0;
  }
  .border-half:before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 5px;
    width: 100%;
    @apply border-t-2 border-dotted border-slate-300;
  }

  :global(.dark) .border-half:before {
    @apply border-t-2 border-dotted border-slate-700;
  }
  
</style>
