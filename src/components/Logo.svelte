<script>
    // export let lightmode = false
    import { SITE_NAME, URL_BASE } from '$lib/variables'
    import { lightmode } from '$lib/stores'
</script>

<h2 class="!text-transparent bg-clip-text focus:outline-none focus:shadow-outline">
    <a title="Rakit.id Logo" href={URL_BASE} class="flex items-center">
        <img
            src={ $lightmode == true ? '/logo.svg' : '/logo.svg'}
            class="h-8"
            alt="{SITE_NAME} Logo" />
        <span class="self-center text-sm font-semibold whitespace-nowrap text-slate-200">PT PARAMA BARA INTERCONTINENTAL</span>
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
