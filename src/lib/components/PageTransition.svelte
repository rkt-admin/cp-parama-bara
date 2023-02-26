<script>
    import { fly,blur } from "svelte/transition";
    export let url = "";
    const pageTransitionDuration = 1000;
  </script>
  
  {#key url}
    <div in:fly={{  x:0, y:-20, delay:0, opacity:1, duration: 1000 }} out:fly={{  x:0, y:-5, delay:0, opacity:1, duration: 200 }}>
      <slot />
    </div>
  {/key}