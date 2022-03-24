<script context="module">
  export const prerender = true
</script>

<script>
  import Hero from '$lib/components/Hero.svelte'
  import FeatureGrid from '$lib/components/FeatureGrid.svelte'
  import Divider from '$lib/components/Divider.svelte'
  import CTA from '$lib/components/CallToAction.svelte'

</script>

<div class="flex flex-col flex-grow">
  <Hero />
  <Divider dividerHight={7} />
  <FeatureGrid />
  <Divider dividerHight={7} />
  <CTA />
  <Divider dividerHight={12} />
</div>