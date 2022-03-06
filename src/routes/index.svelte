<script context="module">
  export const prerender = true

  export const load = async ({ fetch }) => {
    return {
      props: {
        recentPosts: await fetch('/posts.json?page=1&limit=10').then((res) => res.json())
      }
    }
  }
</script>

<script>
  import HeroComponent from "../components/Hero.svelte"
  import PostPreview from '$lib/components/PostPreview.svelte'
  import { name } from '$lib/info.js'

  export let recentPosts
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>
<HeroComponent />
<div class="flex flex-col flex-grow">
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 mt-6">
    {#each recentPosts as post}
      <div class="flex p-4 border border-slate-300 dark:border-slate-700 rounded-lg">
        <PostPreview {post} small />
      </div>
    {/each}
  </div>
</div>

<!-- <style>
  .border-half:after {
    margin: auto;
    /* margin-top: -35px; */
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 5px;
    width: 50%; /* or 100px */
    border-bottom: 1px dashed rgb(203 213 225);
  }
</style> -->