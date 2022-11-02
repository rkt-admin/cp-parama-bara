<script>
    import '../app.css'
    import '../prism.css'

    import LightMode from '$lib/components/LightMode.svelte'
    import { ToggleCore } from 'svelte-toggle'
    import { locale } from '$lib/i18n'
    import { browser } from '$app/environment'
    import ButtonLink from '$lib/components/ButtonLink.svelte'
    
    let language = 'id'

    if (browser) {
        language = localStorage.getItem('language') == 'id' ? 'id' : 'en'
    }

    let ligthswitch

    $: $locale = language

    let yScreen
    let scrollActive = false

    $: {
        if (yScreen >= 5) {
            scrollActive = true
        }
        scrollActive = scrollActive
        // console.log(scrollActive);
    }
</script>

<svelte:window bind:scrollY={yScreen} />
<div class="w-full mx-auto bg-secondary dark:bg-black py-1 text-xs">
    <div class="flex max-w-5xl w-full mx-auto">
        <!-- <div class="relative">
            <span class="relative group z-50">
                <a href="/" class="flex items-center px-3 group-hover:bg-slate-100 rounded-t-lg pt-1">
                    Support
                </a>        
                <ul class="z-50 absolute bg-slate-100 invisible group-hover:visible w-48 rounded-b-lg rounded-r-lg">
                   <li><a href="/services" class="px-4 py-2 block text-black hover:bg-grey-lighter">Call Us</a></li>
                   <li><a href="#" class="px-4 py-2 block text-black hover:bg-grey-lighter">Chat Us</a></li>                   
                   <li><a href="#" class="px-4 py-2 block text-black hover:bg-grey-lighter">Email Us</a></li>
                </ul>
            </span>
        </div> -->
        <div class="relative ml-auto pt-1">
            <ToggleCore toggled={language == 'id' ? false : true} let:button>
                <button
                    type="button"
                    class="px-3 font-normal text-gray-900 hover:text-yellow-700 dark:bg-black dark:border-gray-600 dark:text-white dark:hover:text-white dark:focus:text-white"
                    {...button}
                    on:click={() => {
                        language = language == 'en' ? 'id' : 'en'
                        localStorage.setItem('language', language)
                        $locale = language
                    }}>
                    <span class="inline-flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        <span>&nbsp;{language == 'id' ? 'English (US)' : 'Bahasa (ID)'}</span>
                    </span>
                </button>
            </ToggleCore>&nbsp;&nbsp;
            <button
                on:click={ligthswitch.lightSwitchHandler()}
                type="button"
                class="inline-flex px-3 font-normal text-gray-900 hover:text-yellow-700 dark:bg-black dark:border-gray-600 dark:text-white dark:hover:text-white  dark:focus:text-white">
                <LightMode bind:this={ligthswitch} />
            </button>
        </div>
    </div>
</div>

<style lang="postcss">
    
</style>