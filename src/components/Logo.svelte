<script>
    // export let lightmode = false
    import { SITE_NAME, URL_BASE } from '$lib/variables'
    import { lightmode } from '$lib/stores'

    $: console.log("lightmode", $lightmode);
</script>

<h2 class="!text-transparent bg-clip-text focus:outline-none focus:shadow-outline">
    <a title="Rakit.id Logo" href={URL_BASE} class="flex items-center">
        <img
            src={ $lightmode == true ? 'rakit-id-logo-black.svg' : 'rakit-id-logo-white.svg'}
            class="h-10"
            alt="{SITE_NAME} Logo" />
        <!-- <span class="self-center text-lg sm:text-3xl font-bold whitespace-nowrap dark:text-white">{name}</span> -->
    </a>
</h2>

<!-- <style>
  .logo-img {
    height: 42px;
    width: 106px;
    background-image: url(rakit-id-logo-black.svg);
  }
  :global(.dark) .logo-img {
    height: 42px;
    width: 106px;
    background-image: url(rakit-id-logo-white.svg);
  }
</style> -->
