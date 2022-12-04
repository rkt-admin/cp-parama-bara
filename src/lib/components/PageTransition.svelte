<script>
    import { fly } from "svelte/transition";
    export let url = "";
    const pageTransitionDuration = 1000;
  </script>
  
  {#key url}
    <div in:fly={{  y:-20, duration: pageTransitionDuration }}>
      <slot />
    </div>
  {/key}