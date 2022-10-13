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

    let ligthswitch

    $: $locale = language
</script>

<footer class="max-w-full bg-slate-50 dark:bg-current pb-2">
    <Divider border={true} size="large" />
    <div class="mx-auto w-full max-w-5xl">
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
                    <!-- <div class="inline-flex rounded-lg" role="group"> -->
                        
                        <ToggleCore toggled={language == 'id' ? false : true} let:button>
                            <button
                                type="button"
                                class="px-3 pt-1 text-sm font-normal text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100  dark:bg-black dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-slate-700  dark:focus:text-white"
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
                                        class="w-5 h-5">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                                    </svg>
                                    <span>&nbsp;{language == 'id' ? 'English' : 'Bahasa'}</span>
                                </span>
                            </button>
                        </ToggleCore><br/><br/>
                        <button
                            on:click={ligthswitch.lightSwitchHandler()}
                            type="button"
                            >
                            <LightMode bind:this={ligthswitch} />
                        </button>
                    <!-- </div> -->
                </div>
            </div>

            <Divider border={false} size="medium" />

            <div class="sm:flex sm:items-center sm:justify-between mb-4 ">
                <span class="text-gray-500 sm:text-center dark:text-gray-400">
                    <i class="fa-regular fa-copyright" /> 2022 <a href={URL_BASE}>{SITE_NAME}</a> by
                    PT Rakit Digital Creator, All Rights Reserved.
                </span>
                <div class="flex my-4 space-x-8 sm:justify-center sm:mt-0 items-center">
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
        @apply text-slate-500 mb-6 text-sm font-normal uppercase;
    }
    /* footer a {
        @apply text-slate-500 text-base font-normal;
    } */
    footer ul li {
        @apply mt-4;
    }
    /* :global(.dark) footer a {
        @apply text-slate-300  text-base font-normal;
    }
    footer a:hover {
        @apply text-sky-400;
    } */
</style>
