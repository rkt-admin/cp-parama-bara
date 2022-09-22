<script>
    import ButtonLink from '$lib/components/ButtonLink.svelte'
    import { format, parseISO } from 'date-fns'
    import PostPreview from '$lib/components/PostPreview.svelte'
    import Divider from '$lib/components/Divider.svelte'
    const SITE_NAME = import.meta.env.VITE_PUBLIC_SITE_NAME

    /** @type {import('./$types').PageData} */
    export let data
    let title = 'Blog & News update'

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
        if (data.posts.length > 0)
            if (data.tag !== '') {
                if (data.page > 1) {
                    pageUrl = '/blog/tag/' + data.tag
                    setNextPage(1, limit * data.page < data.posts[0].TotalFilteredPost)
                } else {
                    pageUrl = '/blog/tag/' + data.tag + '/page/'
                    if (data.posts[0].TotalFilteredPost <= data.limit) {
                        hasNextPage = false
                    } else {
                        setNextPage(2, data.limit * data.page < data.posts[0].TotalFilteredPost)
                    }
                }
            } else {
                if (data.page > 1) {
                    pageUrl = '/blog/'
                    setNextPage(3, data.limit * data.page < data.posts[0].TotalFilteredPost)
                } else {
                    pageUrl = '/blog/page/'
                    setNextPage(4, data.limit * data.page < data.posts[0].TotalFilteredPost)
                }
            }

        title = data.tag == '' ? title : data.tag
        // console.log( 'tag:' + tag + ', page:' + page + ', limit: ' + limit + ', posts:' + posts.length + ', TotalFilteredPost: ' + posts[0].TotalFilteredPost)
    }

    $: isFirstPage = data.page === 1

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
    <title>{SITE_NAME} - Blog category {title}</title>
</svelte:head>
<div class="mx-auto w-full max-w-full bg-slate-200 dark:bg-slate-700 shadow-lg bg-pattern-memphis">
    <div class="px-4 mx-auto max-w-4xl ">
        <h1 class="!mt-14 !mb-6 item-left text-left capitalize text-2xl">{title}</h1>
    </div>
    <Divider size=small />
</div>
<div class="px-4 mx-auto flex flex-col flex-grow w-full max-w-4xl">
    <div class="container py-10 mx-auto">
        <div class="-my-8">
            {#each data.posts as post}
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span class="text-base"
                            >{format(new Date(parseISO(post.date)), 'MMMM d, yyyy')}</span>
                        <span class="text-base">{post.readingTime}</span>
                        <span class="text-1xl" style="max-width: 12em"
                            >{@html formatTags(post.tags)}</span>
                    </div>
                    <div class="md:flex-grow">
                        <PostPreview {post} small />
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div class="flex visible items-center justify-between pt-8 opacity-70">
        {#if !isFirstPage}
            <ButtonLink
                raised={false}
                href={`${pageUrl}${data.page - 1 == 1 ? '' : data.page - 1}`}
                arrowsLeft={true}
                class="hover:text-sky-600">
                Previous</ButtonLink>
        {:else}
            <div />
        {/if}

        {#if hasNextPage}
            <ButtonLink
                raised={false}
                href={`${pageUrl}${data.page + 1}`}
                size="large"
                arrowsRight={true}
                class="hover:text-sky-600">
                Next
            </ButtonLink>
        {/if}
    </div>
</div>
