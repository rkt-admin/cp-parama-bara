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
  import PostPreview from '$lib/components/PostPreview.svelte'

  export let recentPosts
</script>

<div class="flex flex-col flex-grow">
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 mt-6">
    {#each recentPosts as post}
      <div class="flex p-4 border border-slate-300 dark:border-slate-700 rounded-lg">
        <PostPreview {post} small />
      </div>
    {/each}
  </div>
</div>
