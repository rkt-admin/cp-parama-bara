<script context="module">
    export const prerender = true
</script>

<script lang="ts">
    import '../app.css'
    import '../prism.css'
    import Logo from '../components/Logo.svelte'
    import { browser } from '$app/env'
    import Footer from '../components/Footer.svelte'
    import { onMount } from 'svelte'
    import { t, locale } from '$lib/i18n'
    import { ToggleCore } from 'svelte-toggle'
    import { SITE_NAME, MODE } from '$lib/variables'
    // import { language } from '../stores'
    // import Alert from '../components/Alert.svelte'

    let yScreen;
    let language = 'id'

    if (browser) {
        language = localStorage.getItem('language') == 'id' ? 'id' : 'en'
    }

    $: $locale = language

    // Show mobile icon and display menu
    let showMobileMenu = false

    // List of navigation items
    let navItems = [
        { label: 'menu.home', href: '/' },
        { label: 'menu.services', href: '/services' },
        { label: 'menu.contact-us', href: '/contact-us' },
        { label: 'menu.blog', href: '/blog' },
        { label: 'menu.login', href: '/login' }
    ]

    // Mobile menu click event handler
    const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu)

    // Attach media query listener on mount hook
    onMount(() => {
        const mql = window.matchMedia('(max-width: 767px)')

        mql.addEventListener('change', (e) => {
            if (!e.matches) {
                showMobileMenu = false
            }
        })
    })
    $: yScreen = yScreen;
</script>

<svelte:head>
    <title>{SITE_NAME + ' - ' + MODE}</title>
    <meta name="description" content="Page description of rakit.id" />
</svelte:head>

<svelte:window bind:scrollY={yScreen} />
<!-- <Alert /> -->
{#if browser}
    <div class="bg-white dark:bg-slate-800">
        <div class="flex flex-col">            
            <div class="w-full z-50 pt-1 fixed {yScreen > 50 ? ' drop-shadow-md backdrop-blur-xl bg-white/70': ''}">
                <div class="mx-auto px-4 flex flex-col w-full max-w-5xl">
                    <div class="flex justify-between items-center">
                        <Logo />
                        <nav>
                            <div class="inner">
                                <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
                                    {#each navItems as item}
                                        <li>
                                            <a href={item.href} class="text-slate-600"
                                                >{$t(item.label)}</a>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </nav>
                        <ToggleCore toggled={language == 'id' ? false : true} let:button>
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <!-- <label {...label}>Label</label> -->
                            <button
                                class="border-[1px]  border-slate-400 bg-slate-600 dark:bg-slate-200 rounded-md py-1 px-2 text-white font-bold dark:text-slate-800 text-sm  hover:drop-shadow-md"
                                {...button}
                                on:click={() => {
                                    language = language == 'en' ? 'id' : 'en'
                                    localStorage.setItem('language', language)
                                    $locale = language
                                }}>
                                {language == 'id' ? 'English' : 'Bahasa'}
                            </button>
                        </ToggleCore>
                        <div
                            on:click={handleMobileIconClick}
                            class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
                            <div class="middle-line" />
                        </div>
                    </div>
                </div>
            </div>       
            <div class="flex flex-col max-w-none mt-16">
                <main
                    class="prose prose-slate prose-sm sm:prose sm:prose-slate sm:prose-lg sm:max-w-none dark:prose-invert flex flex-col flex-grow">
                    <slot />
                </main>
            </div>
        </div>
        <Footer />
    </div>
{:else}
    <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube" />
        <div class="sk-cube2 sk-cube" />
        <div class="sk-cube4 sk-cube" />
        <div class="sk-cube3 sk-cube" />
    </div>
{/if}

<style lang="postcss">
    .light {
        line-height: 0.7em;
        @apply text-slate-800;
    }
    .dark {
        line-height: 0.7em;
        @apply text-slate-400;
    }
    /* :global(.dark) .menu-active {
    @apply bg-slate-700 bg-gradient-to-br from-slate-800 to-slate-800;
  } */

    .inner {
        max-width: 980px;
        padding-left: 20px;
        padding-right: 20px;
        margin: auto;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: 100%;
    }

    .mobile-icon {
        width: 25px;
        height: 14px;
        position: relative;
        cursor: pointer;
    }

    .mobile-icon:after,
    .mobile-icon:before,
    .middle-line {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        transition: all 0.4s;
        transform-origin: center;
        @apply bg-slate-500 text-base font-medium;
    }

    :global(.dark) .mobile-icon:after,
    .mobile-icon:before,
    .middle-line {
        @apply bg-slate-400;
    }

    .mobile-icon:before,
    .middle-line {
        top: 0;
    }

    .mobile-icon:after,
    .middle-line {
        bottom: 0;
    }

    .mobile-icon:before {
        width: 66%;
    }

    .mobile-icon:after {
        width: 33%;
    }

    .middle-line {
        margin: auto;
    }

    .mobile-icon:hover:before,
    .mobile-icon:hover:after,
    .mobile-icon.active:before,
    .mobile-icon.active:after,
    .mobile-icon.active .middle-line {
        width: 100%;
    }

    .mobile-icon.active:before,
    .mobile-icon.active:after {
        top: 50%;
        transform: rotate(-45deg);
    }

    .mobile-icon.active .middle-line {
        transform: rotate(45deg);
    }

    .navbar-list {
        display: none;
        width: 100%;
        justify-content: space-between;
        margin: 0;
        padding: 0 40px;
    }

    .navbar-list.mobile {
        @apply bg-slate-100 uppercase text-base font-medium;
        position: fixed;
        display: block;
        height: calc(100% - 55px);
        bottom: 0;
        left: 0;
        z-index: 100;
        border-bottom: 1px solid bg-slate-500;
    }

    .navbar-list.mobile::after li {
        border-bottom: 1px solid bg-slate-500;
    }

    :global(.dark) .navbar-list.mobile {
        @apply bg-slate-700 bg-gradient-to-br from-slate-800 to-slate-800;
    }

    .navbar-list li {
        list-style-type: none;
        position: relative;
        @apply border-b border-slate-700;
        text-decoration: none;
        display: flex;
        height: 45px;
        align-items: center;
        padding: 0;
        @apply mb-2 uppercase font-medium;
    }

    .active {
        @apply bg-slate-200 text-base rounded-2xl;
    }

    .navbar-list a:hover,
    .navbar-list li a:active {
        @apply text-sky-500;
    }

    :global(.dark) .navbar-list a {
        @apply text-slate-400;
    }

    @media only screen and (min-width: 767px) {
        .mobile-icon {
            display: none;
        }

        .navbar-list {
            display: flex;
            padding: 0;
        }

        .navbar-list li {
            border: unset;
        }

        .navbar-list a {
            display: inline-flex;
            margin-bottom: 0;
            text-transform: none;
            padding: 0 40px;
            font-size: medium;
            /* text-transform: uppercase; */
        }
    }

    /*
    SPINNER
    */

    .sk-folding-cube {
        margin: 10em auto;
        width: 40px;
        height: 40px;
        position: relative;
        -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
    }

    .sk-folding-cube .sk-cube {
        float: left;
        width: 50%;
        height: 50%;
        position: relative;
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
    }
    .sk-folding-cube .sk-cube:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #ffcc00;
        -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
        animation: sk-foldCubeAngle 2.4s infinite linear both;
        -webkit-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
    }
    .sk-folding-cube .sk-cube2 {
        -webkit-transform: scale(1.1) rotateZ(90deg);
        transform: scale(1.1) rotateZ(90deg);
    }
    .sk-folding-cube .sk-cube3 {
        -webkit-transform: scale(1.1) rotateZ(180deg);
        transform: scale(1.1) rotateZ(180deg);
    }
    .sk-folding-cube .sk-cube4 {
        -webkit-transform: scale(1.1) rotateZ(270deg);
        transform: scale(1.1) rotateZ(270deg);
    }
    .sk-folding-cube .sk-cube2:before {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }
    .sk-folding-cube .sk-cube3:before {
        -webkit-animation-delay: 0.6s;
        animation-delay: 0.6s;
    }
    .sk-folding-cube .sk-cube4:before {
        -webkit-animation-delay: 0.9s;
        animation-delay: 0.9s;
    }
    @-webkit-keyframes sk-foldCubeAngle {
        0%,
        10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
            opacity: 0;
        }
        25%,
        75% {
            -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
            opacity: 1;
        }
        90%,
        100% {
            -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
            opacity: 0;
        }
    }

    @keyframes sk-foldCubeAngle {
        0%,
        10% {
            -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
            opacity: 0;
        }
        25%,
        75% {
            -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
            opacity: 1;
        }
        90%,
        100% {
            -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
            opacity: 0;
        }
    }
</style>
