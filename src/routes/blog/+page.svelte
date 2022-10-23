<script>
    import ButtonLink from '$lib/components/ButtonLink.svelte'
    import { format, fromUnixTime, parseISO } from 'date-fns'
    import PostPreview from '$lib/components/PostPreview.svelte'
    import Divider from '$lib/components/Divider.svelte'
    const SITE_NAME = import.meta.env.VITE_PUBLIC_SITE_NAME

    /** @type {import('./$types').PageData} */
    export let data
    let title = 'Blog & News update'

    let pageUrl = '/blog/'
    let hasNextPage = false

    function setNextPage(condition) {
        if (condition) {
            hasNextPage = true
        } else {
            hasNextPage = false
        }
    }

    $: {
        if (data.posts.length > 0){
            // console.log(data.tag, );
            if (data.tag !== undefined) {   
                if (data.page > 1) {
                    pageUrl = '/blog/category/' + data.tag
                    setNextPage(limit * data.page < data.posts[0].TotalFilteredPost)
                } else {
                    pageUrl = '/blog/category/' + data.tag + '/page/'
                    if (data.posts[0].TotalFilteredPost <= data.limit) {
                        hasNextPage = false
                    } else {
                        setNextPage(data.limit * data.page < data.posts[0].TotalFilteredPost)
                    }
                }
            } else {
                if (data.page > 1) {
                    pageUrl = '/blog/'
                    setNextPage(data.limit * data.page < data.posts[0].TotalFilteredPost)
                } else {
                    pageUrl = '/blog/page/'
                    setNextPage(data.limit * data.page < data.posts[0].TotalFilteredPost)
                }
            }
        }
        title = data.tag == '' ? title : data.tag
        // console.log( 'tag:' + tag + ', page:' + page + ', limit: ' + limit + ', posts:' + posts.length + ', TotalFilteredPost: ' + posts[0].TotalFilteredPost)
    }

    $: isFirstPage = data.page === 1

    let PostFirst = data.posts.filter((_, index) => index == 0)
    let PostRest = data.posts.filter((_, index) => index !== 0)
</script>

<svelte:head>
    <title>{SITE_NAME} - Blog category {title}</title>
</svelte:head>
<div class="px-4 mx-auto flex flex-col flex-grow w-full max-w-5xl rounded-xl {PostFirst[0].bgColor}">
    {#if !PostFirst[0]}
        <h1 class="!mt-14 !mb-6 item-left text-left capitalize text-xl">{title}</h1>
    {:else}
        <div class="p-8 flex flex-wrap md:flex-nowrap">
            <div class="md:flex-grow">
                <span class="text-1xl" style="max-width: 12em" />
                <PostPreview post={PostFirst[0]} small />
            </div>
        </div>
    {/if}
</div>
<Divider size="small" />
<div class="mx-auto flex flex-col flex-grow w-full max-w-5xl">
    <div class="container mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-2 gap-10">
            {#each PostRest as post}
                <div class="flex flex-wrap md:flex-nowrap p-8 rounded-xl {post.bgColor}">
                    <div class="md:flex-grow">
                        <span class="text-1xl" style="max-width: 12em" />
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
