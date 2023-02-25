<script>
    import { page } from '$app/stores'
    $: isActive = $page.url.pathname === $$props.href
    //     $: console.log('1', $page.url.pathname);
    //     $: console.log('2', $$props.href);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...$$props} class:active={isActive}>
    <slot />
</a>

<style lang="postcss">
    a {
        @apply text-white;
    }
    a:hover {
        @apply text-white;
    }
    a:visited {
        @apply text-white bg-white bg-opacity-30;
    }
    a.active {
        @apply text-white bg-white bg-opacity-30;
    }
</style>
