<script>
    import { fly } from "svelte/transition";
    export let url = "";
    const pageTransitionDuration = 100;
  </script>
  
  {#key url}
    <div in:fly={{  x:-2, duration: pageTransitionDuration }}
         out:fly={{ x: 2, duration: pageTransitionDuration }}>
      <slot />
    </div>
  {/key}