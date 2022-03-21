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

    const posts = await fetch(`/api/posts?${fetchPostsParams.toString()}`).then((res) =>
      res.json()
    )

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
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import { format, parseISO } from 'date-fns'
  import PostPreview from '$lib/components/PostPreview.svelte'
  import { name } from '$lib/.info.js'

  export let posts
  export let page = 1
  export let tag
  export let limit = 0
  let pageUrl = '/blog/'
  let hasNextPage = false

  function setNextPage(flag, condition) {
    // console.log('flag: ' + condition)
    if (condition) {
      hasNextPage = true
    } else {
      hasNextPage = false
    }
    // console.log('hasNextPage: ' + hasNextPage)
  }

  $: {
    if (posts.length > 0)
      if (tag !== '') {
        if (page > 1) {
          pageUrl = '/blog/tag/' + tag
          setNextPage(1, limit * page < posts[0].TotalFilteredPost)
        } else {
          pageUrl = '/blog/tag/' + tag + '/page/'
          // console.log(posts.length, limit)
          if(posts[0].TotalFilteredPost <= limit){
            hasNextPage = false
          }else{
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

    // console.log(
    //   'tag:' +
    //     tag +
    //     ', page:' +
    //     page +
    //     ', limit: ' +
    //     limit +
    //     ', posts:' +
    //     posts.length +
    //     ', TotalPost: ' +
    //     posts[0].TotalPost
    // )
  }

  $: isFirstPage = page === 1

  function formatTags(tags) {
    return tags
      .map(
        (tag) =>
          '<a style="text-decoration: none"  href="/blog/tag/' +
          tag +
          '">#' +
          tag +
          '</a>'
      )
      .join(' ')
  }
</script>

<svelte:head>
  <title>{name} | Posts</title>
</svelte:head>

<div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
  <section>
    <div class="container px-5 py-24 mx-auto">
      <div class="-my-8">
        {#each posts as post}
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col pt-10">
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
  </section>
  <!-- begin pagination -->
  <div class="flex visible items-center justify-between pt-8 opacity-70">
    {#if !isFirstPage}
      <ButtonLink
        raised={false}
        href={`${pageUrl}${page - 1 == 1 ? '' : page - 1}`}
        class="hover:text-sky-600"
      >
        <slot slot="icon-start">
          <ArrowLeftIcon class="h-5 w-5" />
        </slot>
        PREVIOUS
        <slot slot="icon-end" /></ButtonLink
      >
    {:else}
      <div />
    {/if}

    {#if hasNextPage}
      <ButtonLink
        raised={false}
        href={`${pageUrl}${page + 1}`}
        size="large"
        class="hover:text-sky-600"
      >
        <slot slot="icon-start">
          NEXT <ArrowRightIcon class="h-5 w-5" />
        </slot>
        <slot slot="icon-end" /></ButtonLink
      >
    {/if}
    <!-- end pagination -->
  </div>
</div>
