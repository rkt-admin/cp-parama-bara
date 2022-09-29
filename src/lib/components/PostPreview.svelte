<script>
    import { format, parseISO } from 'date-fns'
    import ButtonLink from './ButtonLink.svelte'
    import { FormatCategories } from '$lib/blog-utils'

    export let post
    export let small = false
    export let previewText = true
    // export let readMore = true
</script>

<div class="flex flex-col">
    <div>
        <div class=" prose">            
            <span>{post.readingTime} </span>
        </div>
        {#if !small}
            <h1 class="text-3xl font-medium">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h1>
        {:else}
            <h2 class="text-3xl font-medium">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h2>
        {/if}        
    </div>
    {#if previewText}
        <div class="flex-1 !mt-5 prose">{@html post.preview.html}</div>
    {:else}
        &nbsp;
    {/if}
    <div class="text-gray-500 mt-5 uppercase"> {@html FormatCategories(post.tags)}</div>
    <div class="font-normal text-gray-500">Kharis Hidayatulloh &nbsp;&nbsp; {format(new Date(parseISO(post.date)), 'MMMM d, yyyy')}</div>
    <!-- {#if readMore}
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
    {/if} -->
</div>
