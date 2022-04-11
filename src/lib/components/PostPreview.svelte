<script>
    import { format, parseISO } from 'date-fns'
    import ButtonLink from './ButtonLink.svelte'

    export let post
    export let small = false
    export let previewText = true
    export let readMore = true
</script>

<div class="flex flex-col">
    <div>
        {#if !small}
            <h1 class="!mt-0 !mb-1 ">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h1>
        {:else}
            <h3 class="!mt-0 !mb-1 ">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h3>
        {/if}
        <div class="opacity-70 mb-2">
            <time>{format(new Date(parseISO(post.date)), 'MMMM d, yyyy')}</time>
            •
            <span>{post.readingTime}</span>
        </div>
    </div>
    {#if previewText}
        <div class="flex-1">{@html post.preview.html}</div>
    {:else}
        &nbsp;
    {/if}
    {#if readMore}
        <slot name="actions">
            <div class="flex justify-start w-full">
                <ButtonLink
                    href="/blog/{post.slug}"
                    size="medium"
                    raised={false}
                    arrowsRight={true}
                    class="text-slate-600 hover:text-sky-500 font-bold">Read More</ButtonLink>
            </div>
        </slot>
    {:else}
        &nbsp;
    {/if}
</div>
