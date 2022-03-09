<script context="module">
  export const prerender = false

  /**
   * @type {import("@sveltejs/kit").Load}
   */
  export const load = async ({ fetch, params }) => {
    //set default value
    let page = 1
    let limit = 2

    if (params.page) {
      try {
        // a url of /posts/page/2 will come through as 'page/2' for params.page
        page = parseInt(params.page.split('page/').pop())
      } catch (e) {
        console.error(e)
      }
    }

    const fetchPostsParams = new URLSearchParams()

    fetchPostsParams.set('page', page.toString())
    fetchPostsParams.set('limit', limit.toString())

    console.log(`/posts.json?${fetchPostsParams.toString()}`)
    const posts = await fetch(`/posts.json?${fetchPostsParams.toString()}`).then((res) =>
      res.json()
    )

    // if page doesn't exist, direct to page 1
    if (posts.length == 0 && page > 1) {
      return {
        redirect: `/blog`,
        status: 302
      }
    }

    return {
      props: {
        posts,
        page,
        limit
      }
    }
  }
</script>

<script>
  import HeroComponent from '../../components/Hero.svelte'
  import Pagination from './pagination.svelte'
  import PostPreview from '$lib/components/PostPreview.svelte'
  import { name } from '$lib/info.js'

  export let posts
  export let page

  $: isFirstPage = page === 1
  $: hasNextPage = posts[posts.length - 1]?.previous
</script>

<svelte:head>
  <title>{name} | Posts</title>
</svelte:head>

<div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
  <HeroComponent />

  <Pagination {isFirstPage} {hasNextPage} {page} />

  <div class="mt-6 mb-4">
    {#each posts as post}
      <div class="flex mb-2 pb-6 border-b">
        <PostPreview {post} small />
      </div>
    {/each}
  </div>

  <Pagination {isFirstPage} {hasNextPage} {page} />
</div>
