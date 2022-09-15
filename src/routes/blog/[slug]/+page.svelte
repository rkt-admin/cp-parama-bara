<script context="module">
  export const prerender = false

  /**
   * @type {import("@sveltejs/kit").Load}
   */
  export const load = async ({ fetch, params }) => {
    let page = 1
    let limit = 2
    let tag = ''

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
          switch (pr[0].toString() + '-' + pr[2].toString()) {
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

      // console.log(`/posts.json?${fetchPostsParams.toString()}`)
    } catch (e) {
      console.error(e)
    }

    const posts = await fetch(`/api/posts?${fetchPostsParams.toString()}`).then((res) => res.json())

    // console.log(posts)

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
        limit,
        tag
      }
    }
  }
</script>

<script>
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import { format, parseISO } from 'date-fns'
  import PostPreview from '$lib/components/PostPreview.svelte'
  import Divider from '$lib/components/Divider.svelte'
  const SITE_NAME = import.meta.env.VITE_PUBLIC_SITE_NAME

  export let posts
  export let page = 1
  export let tag
  export let limit = 0
  let title = 'Blog'

  let pageUrl = '/blog/'
  let hasNextPage = false

  function setNextPage(flag, condition) {
    if (condition) {
      hasNextPage = true
    } else {
      hasNextPage = false
    }
  }

  $: {
    if (posts.length > 0)
      if (tag !== '') {
        if (page > 1) {
          pageUrl = '/blog/tag/' + tag
          setNextPage(1, limit * page < posts[0].TotalFilteredPost)
        } else {
          pageUrl = '/blog/tag/' + tag + '/page/'
          if (posts[0].TotalFilteredPost <= limit) {
            hasNextPage = false
          } else {
            setNextPage(2, limit * page < posts[0].TotalFilteredPost)
          }
        }
      } else {
        if (page > 1) {
          pageUrl = '/blog/'
          setNextPage(3, limit * page < posts[0].TotalFilteredPost)
        } else {
          pageUrl = '/blog/page/'
          setNextPage(4, limit * page < posts[0].TotalFilteredPost)
        }
      }

    title = tag == '' ? 'Blog' : tag

    // console.log(
    //   'tag:' +
    //     tag +
    //     ', page:' +
    //     page +
    //     ', limit: ' +
    //     limit +
    //     ', posts:' +
    //     posts.length +
    //     ', TotalFilteredPost: ' +
    //     posts[0].TotalFilteredPost
    // )
  }

  $: isFirstPage = page === 1

  function formatTags(tags) {
    return tags
      .map(
        (tag) => '<a style="text-decoration: none"  href="/blog/tag/' + tag + '">#' + tag + '</a>'
      )
      .join(' ')
  }
</script>

<svelte:head>
  <title>{SITE_NAME} - Blog category {title}</title>
</svelte:head>
<div class="mx-auto w-full max-w-full bg-slate-100 dark:bg-slate-700 shadow-lg bg-pattern-memphis">
  <div class="px-4 mx-auto max-w-4xl ">
    <h1 class="!mt-14 !mb-6 item-left text-left capitalize">{title}</h1>
  </div>
  <Divider />
</div>
<div class="px-4 mx-auto flex flex-col flex-grow w-full max-w-4xl">
  <div class="container py-10 mx-auto">
    <div class="-my-8">
      {#each posts as post}
        <div class="py-8 flex flex-wrap md:flex-nowrap">
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="text-base">{format(new Date(parseISO(post.date)), 'MMMM d, yyyy')}</span>
            <span class="text-base">{post.readingTime}</span>
            <span class="text-1xl" style="max-width: 12em">{@html formatTags(post.tags)}</span>
          </div>
          <div class="md:flex-grow">
            <PostPreview {post} small />
          </div>
        </div>
      {/each}
    </div>
  </div>
  <!-- begin pagination -->
  <div class="flex visible items-center justify-between pt-8 opacity-70">
    {#if !isFirstPage}
      <ButtonLink
        raised={false}
        href={`${pageUrl}${page - 1 == 1 ? '' : page - 1}`}
        arrowsLeft={true}
        class="hover:text-sky-600"
      >
        Previous</ButtonLink
      >
    {:else}
      <div />
    {/if}

    {#if hasNextPage}
      <ButtonLink
        raised={false}
        href={`${pageUrl}${page + 1}`}
        size="large"
        arrowsRight={true}
        class="hover:text-sky-600"
      >
        Next
      </ButtonLink>
    {/if}
    <!-- end pagination -->
  </div>
</div>
