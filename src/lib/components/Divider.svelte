<div class="border-half"></div>

<style lang="postcss">
  .border-half {
    /* margin: 60px 0 60px 0; */
    @apply border-t-2 border-solid border-slate-100;
  }
  /* .border-half:before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 0;
    width: 100%;
    @apply border-t-2 border-dotted border-slate-300;
  } */

  :global(.dark) .border-half:before {
    @apply border-t-2 border-dotted border-slate-700;
  }
  
</style>
