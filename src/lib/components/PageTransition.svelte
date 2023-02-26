<script>
    import { fly,blur } from "svelte/transition";
    export let url = "";
    const pageTransitionDuration = 1000;
  </script>
  
  {#key url}
    <div in:fly={{  x:0, y:40, opacity:80, duration: 1000 }} out:fly={{  x:0, y:20, opacity:100, duration: 100 }}>
      <slot />
    </div>
  {/key}