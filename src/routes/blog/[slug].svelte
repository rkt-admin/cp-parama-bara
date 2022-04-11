<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ params, fetch }) {
        const { slug } = params

        // fetch posts from endpoint so that it includes all metadata (see posts.json.js for explanation)
        const posts = await fetch('/api/posts').then((res) => res.json())
        const post = posts.find((post) => slug === post.slug)

        if (!post) {
            return {
                status: 404,
                error: 'Post not found'
            }
        }

        const component = post.isIndexFile
            ? // vite requires relative paths and explicit file extensions for dynamic imports
              await import(`../../../blog/posts/${post.slug}/index.md`)
            : await import(`../../../blog/posts/${post.slug}.md`)

        return {
            props: {
                ...post,
                component: component.default
            }
        }
    }
</script>

<script>
    import { format, parseISO } from 'date-fns'
    import { page } from '$app/stores'
    import ButtonLink from '$lib/components/ButtonLink.svelte'
    import ToC from '$lib/components/ToC.svelte'
    import PostPreview from '$lib/components/PostPreview.svelte'
    import Divider from '$lib/components/Divider.svelte'
    import { URL_BASE, SITE_NAME } from '$lib/variables'
    export let component

    // metadata
    export let title
    export let date
    export let tags
    export let preview
    export let readingTime
    export let slug
    export let next
    export let previous

    // generated open-graph image for sharing on social media. Visit https://og-image.vercel.app/ to see more options.
    const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
        title
    )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`

    const url = `${URL_BASE}/${slug}`

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
    <title>{title}</title>
    <meta name="description" content={preview.text} />
    <meta name="author" content={SITE_NAME} />

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={preview.text} />
    <meta property="og:image" content={ogImage} />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content={URL_BASE} />
    <meta property="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={preview.text} />
    <meta name="twitter:image" content={ogImage} />
</svelte:head>
<div class="mx-auto w-full max-w-full bg-slate-200 bg-pattern-memphis dark:bg-slate-900 shadow-md py-14">
    <h1 class="my-8 item-center text-center">
        <a class="!font-medium" href={$page.url.pathname}>
            {title}
        </a>
    </h1>
    <div class="text-center">
        <time datetime={new Date(parseISO(date)).toISOString()}
            >{format(new Date(parseISO(date)), 'MMMM d, yyyy')}</time>
        •
        <span>{readingTime}</span>
    </div>
    <div class="text-center">
        <span>{@html formatTags(tags)}</span>
    </div>
</div>
<div class="grid gap-4 grid-cols-12 mx-auto max-w-full">
    <div class="col-start-3 col-end-10">
        <article>
            <!-- render the post -->
            <svelte:component this={component} />

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
    <div class="col-start-10 col-end-12">
        <!-- table of contents -->
        <aside class="sticky top-10 mt-4">
            <div aria-label="Table of Contents">
                <ToC allowedHeadings={['h2', 'h3', 'h4', 'h5', 'h6']} />
            </div>
        </aside>
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
</style>
