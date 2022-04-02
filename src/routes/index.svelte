<script context="module">
  export const prerender = true
</script>

<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import FeatureGrid from '../components/FeatureGrid.svelte'
  import Divider from '$lib/components/Divider.svelte'
  import CTA from '../components/CallToAction.svelte'
</script>

<div class="flex flex-col flex-grow">  
  <Hero />
  <FeatureGrid />
  <CTA />
  <Divider border={true} />
</div>
