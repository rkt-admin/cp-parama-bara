<script>
    // @ts-nocheck

    import Logo from '../components/Logo.svelte'
    import { SITE_NAME, URL_BASE } from '$lib/variables'
    import Divider from '$lib/components/Divider.svelte'
    import LightMode from '$lib/components/LightMode.svelte'
    import { ToggleCore } from 'svelte-toggle'
    import { locale } from '$lib/i18n'
    import { browser } from '$app/environment'

    let language = 'id'

    if (browser) {
        language = localStorage.getItem('language') == 'id' ? 'id' : 'en'
    }

    $: $locale = language
</script>

<footer class="max-w-full bg-slate-50 dark:bg-current pb-2">
    <Divider border={true} size="large" />
    <div class="mx-auto w-full max-w-4xl">
        <div class="px-10">
        <div
            class="inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-x-16 gap-y-16 md:flex md:justify-between ">
            <div>
                <h2>COMPANY</h2>
                <ul>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/term-condition">Terms of Services</a>
                    </li>
                    <li>
                        <a href="/teams">Teams</a>
                    </li>
                    <li>
                        <a href="/media">media</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Help center</h2>
                <ul>
                    <li>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a href="/">Discord Server</a>
                    </li>
                    <li>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a href="/">Instagram</a>
                    </li>
                    <li>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a href="/">Facebook </a>
                    </li>
                    <li>
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>            
            <div>
                <h2>Download</h2>
                <ul>
                    <li>
                        <a href="/">iOS</a>
                    </li>
                    <li>
                        <a href="/">Android</a>
                    </li>
                    <li>
                        <a href="/">Windows</a>
                    </li>
                    <li>
                        <a href="/">MacOS</a>
                    </li>
                </ul>
            </div>
            <div>
                <div class="inline-flex rounded-md shadow-sm" role="group">
                    <button
                        type="button"
                        class="px-4 text-sm font-normal text-gray-900 bg-white rounded-l-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600  dark:focus:text-white">
                        <LightMode />
                    </button>
                    <ToggleCore toggled={language == 'id' ? false : true} let:button>
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <!-- <label {...label}>Label</label> -->
                        <button
                            type="button"
                            class="px-4 text-sm font-normal text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600  dark:focus:text-white"
                            {...button}
                            on:click={() => {
                                language = language == 'en' ? 'id' : 'en'
                                localStorage.setItem('language', language)
                                $locale = language
                            }}>
                            {language == 'id' ? 'English' : 'Bahasa'}
                        </button>
                    </ToggleCore>
                </div>
            </div>
        </div>

        <Divider border={false} size="small" />

        <div class="sm:flex sm:items-center sm:justify-between mb-4 ">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                <i class="fa-regular fa-copyright" /> 2022 <a href={URL_BASE}>{SITE_NAME}</a> by PT Rakit
                Digital Creator, All Rights Reserved.
            </span>
            <div class="flex my-4 space-x-5 sm:justify-center sm:mt-0 items-center">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="https://www.facebook.com/rakit.id" class="text-gray-500">
                    <i class="fa-brands fa-facebook-f  text-base" />
                </a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="https://www.instagram.com/rakit.official" class="text-gray-500">
                    <i class="fa-brands fa-instagram  text-base" />
                </a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="/" class="text-gray-500">
                    <i class="fa-brands fa-twitter text-base" />
                </a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="/" class="text-gray-500">
                    <i class="fa-brands fa-github text-base" />
                </a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="/" class="text-gray-500">
                    <i class="fa-brands fa-discord text-base" />
                </a>
            </div>
        </div>
    </div>
</div>
</footer>

<style lang="postcss">
    h2 {
        @apply text-slate-400 mb-6 text-sm font-normal uppercase;
    }
    footer a {
        @apply text-slate-500 text-base font-normal;
    }
    footer ul li {
        @apply mt-4;
    }
    :global(.dark) footer a {
        @apply text-slate-300  text-base font-normal;
    }
    footer a:hover {
        @apply text-sky-400;
    }
</style>
