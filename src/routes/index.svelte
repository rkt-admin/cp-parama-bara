<!-- <script context="module">
  export const prerender = true

  export const load = async ({ fetch }) => {
    return {
      props: {
        recentPosts: await fetch('/posts.json?page=1&limit=10').then((res) => res.json())
      }
    }
  }
</script> -->

<script>
  // import PostPreview from '$lib/components/PostPreview.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import FeatureGrid from '$lib/components/FeatureGrid.svelte'
  import Divider from '$lib/components/Divider.svelte'
  import { name } from '$lib/info.js'

  // export let recentPosts
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content="Page description of rakit.id">
</svelte:head>

<div class="flex flex-col flex-grow">
  <Hero />
  <Divider />
  <FeatureGrid />
</div>