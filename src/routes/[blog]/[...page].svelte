<script context="module">
  export const prerender = false

  /**
   * @type {import("@sveltejs/kit").Load}
   */
  export const load = async ({ fetch, params }) => {
    //set default value
    let page = 1
    let limit = 2
    let tag = ''

    console.log('#debug: ', params.page.split('/'))
    let pr = params.page.toLowerCase().trim().split('/')

    const fetchPostsParams = new URLSearchParams()

    try {
      switch (pr.length) {
        case 2:
          switch (pr[0]) {
            case 'page':
              page = parseInt(params.page.split('/').pop())
              fetchPostsParams.set('page', page.toString())
              break
            case 'tag':
              tag = params.page.split('/').pop()
              fetchPostsParams.set('tag', tag)
              break
            default:
              return {
                redirect: `/blog`,
                status: 302
              }
          }
          break
        case 4:
          switch (pr[0].toString() +'-'+ pr[2].toString()) {
            case 'tag-page':
              tag = pr[1].toString()
              page = parseInt(pr[3].toString())
              break
            case 'page-tag':
              tag = pr[3].toString()
              page = parseInt(pr[1].toString())
              break
            default:
              return {
                redirect: `/blog`,
                status: 302
              }
          }
          fetchPostsParams.set('tag', tag)
          fetchPostsParams.set('page', page.toString())
          break
      }

      fetchPostsParams.set('limit', limit.toString())

      console.log(`/posts.json?${fetchPostsParams.toString()}`)
    } catch (e) {
      console.error(e)
    }

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
  import Pagination from './pagination.svelte'
  import PostPreview from '$lib/components/PostPreview.svelte'
  import { name } from '$lib/info.js'

  export let posts
  export let page

  $: isFirstPage = page === 1
  $: hasNextPage = posts[posts.length - 1]?.previous

  function formatTags(tags) {
    return tags
      .map((tag) => '<a class="no-underline" href="/blog/tag/' + tag + '">#' + tag + '</a>')
      .join(', ')
  }
</script>

<svelte:head>
  <title>{name} | Posts</title>
</svelte:head>

<div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
  <section class="text-gray-600">
    <div class="container px-5 py-24 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        {#each posts as post}
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold no-underline">{@html formatTags(post.tags)}</span>
              <span class="text-sm text-gray-500">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
              <PostPreview {post} small />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  <Pagination {isFirstPage} {hasNextPage} {page} />
</div>
