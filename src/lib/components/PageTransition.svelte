<script>
    import { fly,blur } from "svelte/transition";
    export let url = "";
    const pageTransitionDuration = 1000;
  </script>
  
  {#key url}
    <div in:fly={{  x:-20, y:0, delay:0, opacity:100, duration: 500 }} out:fly={{  x:-20, y:0, delay:0, opacity:100, duration: 100 }}>
      <slot />
    </div>
  {/key}