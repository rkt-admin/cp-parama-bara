<script>
    import { format, parseISO } from 'date-fns'
    import { page } from '$app/stores'
    import ButtonLink from '$lib/components/ButtonLink.svelte'
    import ToC from '$lib/components/ToC.svelte'
    import PostPreview from '$lib/components/PostPreview.svelte'
    import Divider from '$lib/components/Divider.svelte'
    import { URL_BASE, SITE_NAME } from '$lib/variables'
    import { FormatCategories, RandBGColors } from '$lib/blog-utils'

    /** @type {import('./$types').PageData} */
    export let data

    // metadata
    export let next
    export let previous

    // generated open-graph image for sharing on social media. Visit https://og-image.vercel.app/ to see more options.
    const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
        data.post.title
    )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`

    const url = `${URL_BASE}/${data.post.slug}`

    function formatTags(tags) {
        return tags
            .map(
                (tag) =>
                    '<a style="text-decoration: none" class="hover:text-sky-500" href="/blog/tag/' +
                    tag +
                    '">#' +
                    tag +
                    '</a>'
            )
            .join(' ')
    }
</script>

<svelte:head>
    <title>{data.post.title}</title>
    <meta name="description" content={data.post.preview.text} />
    <meta name="author" content={SITE_NAME} />

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={data.post.title} />
    <meta property="og:description" content={data.post.preview.text} />
    <meta property="og:image" content={ogImage} />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content={URL_BASE} />
    <meta property="twitter:url" content={url} />
    <meta name="twitter:title" content={data.post.title} />
    <meta name="twitter:description" content={data.post.preview.text} />
    <meta name="twitter:image" content={ogImage} />
</svelte:head>
<div
    class="mx-auto w-full max-w-full back-circle bg-pattern-memphis dark:bg-slate-900 py-5 mb-8">
    <div class="max-w-4xl mx-auto">
        <div class="my-5">
            <span>{@html FormatCategories(data.post.tags)}</span>
        </div>
        <a class="!font-medium text-6xl" href={$page.url.pathname}>
            <h1>{data.post.title}</h1>
        </a>
        <div class="my-10 font-normal">
            <time datetime={new Date(parseISO(data.post.date)).toISOString()}
                >{format(new Date(parseISO(data.post.date)), 'MMMM d, yyyy')}</time>
            <span class="ml-5 inline-flex items-center px-2.5">{data.post.readingTime}</span>
        </div>
    </div>
</div>
<div class="grid gap-2 grid-cols-12 mx-auto max-w-5xl">
    <div class="col-start-1 col-end-4">
        <!-- table of contents -->
        <aside class="sticky top-24 mt-4">
            <div aria-label="Table of Contents">
                <ToC allowedHeadings={['h2', 'h3', 'h4', 'h5', 'h6']} />
            </div>
        </aside>
    </div>
    <div class="col-start-4 col-end-12">
        <article class="prose dark:prose-invert prose-base text-xl">
            <!-- render the post -->
            <svelte:component this={data.component} />

            <div class="pt-12 flex justify-between">
                <ButtonLink
                    raised={false}
                    href={`/blog`}
                    size="large"
                    arrowsLeft={true}
                    class="hover:text-sky-600">
                    Back to Posts
                </ButtonLink>
            </div>
        </article>
    </div>
</div>
<Divider />
{#if previous || next}
    <div class="flex mx-auto w-full max-w-4xl relative">
        {#if previous}
            <div class="flex-auto text-left">
                <h6 class="not-prose post-preview-label">Previous Post</h6>
                <div class="flex-1 post-preview">
                    <PostPreview post={previous} small previewText={false} readMore={false} />
                </div>
            </div>
        {:else}
            <div />
        {/if}
        {#if next}
            <div class="flex-auto text-right">
                <h6 class="not-prose post-preview-label flex justify-end">Next Post</h6>
                <div class="flex-1 post-preview text-right">
                    <PostPreview post={next} small previewText={false} readMore={false} />
                </div>
            </div>
        {/if}
    </div>
{/if}

<style lang="postcss">
    /* .post-preview {
    @apply flex p-4 border border-slate-300 rounded-lg;
  } */

    .post-preview-label {
        @apply mb-2 text-slate-500 uppercase text-base font-medium;
    }

    /* :global(.dark) .post-preview {
    @apply border-slate-700;
  } */

    :global(.dark) .post-preview-label {
        @apply text-slate-400;
    }

    .back-circle {
        background: linear-gradient(180deg,hsla(0,0%,100%,0) 0,#fff 300px),fixed 0 0 /20px 20px radial-gradient(#d1d1d1 1px,transparent 0),fixed 10px 10px /20px 20px radial-gradient(#d1d1d1 1px,transparent 0);
    }
</style>
