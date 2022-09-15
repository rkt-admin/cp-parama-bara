<script>
    import { browser } from '$app/environment'

    let prefersLight = true
    if (browser) {
        prefersLight = localStorage.getItem('prefersLight') == 'false' ? false : true
    }
</script>

<button
    type="button"
    role="switch"
    aria-label="Toggle Dark Mode"
    aria-checked={prefersLight}
    class=""
    on:click={() => {
        prefersLight = !prefersLight
        localStorage.setItem('prefersLight', prefersLight.toString())

        if (prefersLight) {
            document.querySelector('html')?.classList.remove('dark')
        } else {
            document.querySelector('html')?.classList.add('dark')
        }
    }}>
    {#if prefersLight}
        <i class="light fa-solid fa-moon text-slate-800 dark:text-slate-100 text-2xl" />
    {:else}
        <i class="dark fa-solid fa-sun text-slate-800 dark:text-slate-100 text-2xl" />
    {/if}
</button>
