<script context="module">
  export const prerender = true
</script>

<script>
  import Hero from '$lib/components/Hero.svelte'
  import FeatureGrid from '$lib/components/FeatureGrid.svelte'
  // import Divider from '$lib/components/Divider.svelte'
  import { name } from '../routes/api/info'

  // export let recentPosts
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content="Page description of rakit.id">
</svelte:head>

<div class="flex flex-col flex-grow">
  <Hero />
  <!-- <Divider /> -->
  <FeatureGrid />
</div>