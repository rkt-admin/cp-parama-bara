<script lang="ts">
    import '../app.css'
    import '../prism.css'
    import Logo from '../components/Logo.svelte'
    import Topbar from '../components/Topbar.svelte'
    import { browser } from '$app/environment'
    import Footer from '../components/Footer.svelte'
    import { onMount } from 'svelte'
    import { t } from '$lib/i18n'
    import PageTransition from '$lib/components/PageTransition.svelte'
    import { URL_BASE, SITE_NAME, MODE } from '$lib/variables'

    /** @type {import('./$types').LayoutData} */
    export let data

    let yScreen: number
    let scrollActive: boolean = false

    let language

    if (browser) {
        language = localStorage.getItem('language') == 'en' ? 'en' : 'id'
    }

    // Show mobile icon and display menu
    let showMobileMenu = false

    // List of navigation items
    let navItems = [
        // { label: 'menu.home', href: '/' },
        { label: 'menu.services', href: '/services' },
        // { label: 'menu.contact-us', href: '/contact' },
        // { label: 'menu.docs', href: '/docs' },
        { label: 'menu.blog', href: '/blog' }
        // { label: 'menu.login', href: '/login' }
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
    $: {
        console.log(data.url + URL_BASE)
        if (yScreen >= 5) {
            scrollActive = true
        }
        scrollActive = scrollActive
        // console.log(scrollActive);
    }
</script>

<svelte:head>
    <title>{SITE_NAME + ' - ' + MODE}</title>
    <meta name="description" content="Page description of rakit.id" />
</svelte:head>

<svelte:window bind:scrollY={yScreen} />
<!-- <Alert /> -->
<Topbar />
{#if browser}
    <div
        class="w-full mx-auto z-50 bg-primary dark:bg-slate-900 px-10 py-2
        {yScreen > 0 && scrollActive
            ? ' transition-all duration-150 drop-shadow-lg pt-1 sticky top-0'
            : ''} 
        {yScreen <= 150 && scrollActive ? ' drop-shadow-none' : ''}">
        <div class="max-w-5xl w-full mx-auto">
            <div class="mx-auto flex flex-col">
                <div class="flex justify-between items-center">
                    <Logo />
                    <nav>
                        <div>
                            <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
                                <li>
                                    <a href='/'>Home</a>
                                </li>
                                <li class="relative group z-50">
                                    <a
                                        href="#!"
                                        class="flex items-center rounded-t-lg group-hover:bg-slate-50">
                                        Company
                                    </a>
                                    <ul
                                        class="z-50 absolute py-4 px-2 w-72 top-10 rounded-b-lg rounded-r-lg bg-slate-50 invisible group-hover:visible">
                                        <li>
                                            <a href="/questions">
                                                <div class="flex items-start">
                                                    <div class="shrink-0">
                                                        <div class="pr-2">
                                                            <img
                                                                src="/images/question-logo.svg"
                                                                class="h-5"
                                                                alt="careers logo" />
                                                        </div>
                                                    </div>
                                                    <div class="grow">
                                                        <h3>Questions</h3>
                                                        <p>Get your answer here</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="media">
                                                <div class="flex items-start">
                                                    <div class="shrink-0">
                                                        <div class="pr-2">
                                                            <img
                                                                src="/images/media-logo.svg"
                                                                class="h-5"
                                                                alt="media logo" />
                                                        </div>
                                                    </div>
                                                    <div class="grow">
                                                        <h3>Media</h3>
                                                        <p>Company bio, logos, perks</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="careers">
                                                <div class="flex items-start">
                                                    <div class="shrink-0">
                                                        <div class="pr-2">
                                                            <img
                                                                src="/images/careers-logo.svg"
                                                                class="h-5"
                                                                alt="careers logo" />
                                                        </div>
                                                    </div>
                                                    <div class="grow">
                                                        <h3>Careers</h3>
                                                        <p>Come work with us!</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="relative group z-50">
                                    <a
                                        href="#!"
                                        class="flex items-center rounded-t-lg group-hover:bg-slate-50">
                                        Contact Us
                                    </a>
                                    <ul
                                        class="z-50 absolute py-4 px-2 w-72 top-10 rounded-b-lg rounded-r-lg bg-slate-50 invisible group-hover:visible">
                                        <li>
                                            <a
                                                href="https://api.whatsapp.com/send?phone=6281212626030&text=Halo%2C%20saya%20ingin%20berdiskusi...">
                                                <div class="flex items-start">
                                                    <div class="shrink-0">
                                                        <div class="pr-2">
                                                            <img
                                                                src="/images/chat-logo.svg"
                                                                class="h-5"
                                                                alt="careers logo" />
                                                        </div>
                                                    </div>
                                                    <div class="grow">
                                                        <h3>WA Chat</h3>
                                                        <p>Chat with Us by Whatsapp</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+6281212626030">
                                                <div class="flex items-start">
                                                    <div class="shrink-0">
                                                        <div class="pr-2">
                                                            <img
                                                                src="/images/call-logo.svg"
                                                                class="h-5"
                                                                alt="careers logo" />
                                                        </div>
                                                    </div>
                                                    <div class="grow">
                                                        <h3>Call</h3>
                                                        <p>Let's talk with our sales directly</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact">
                                                <div class="flex items-start">
                                                    <div class="shrink-0">
                                                        <div class="pr-2">
                                                            <img
                                                                src="/images/media-logo.svg"
                                                                class="h-5"
                                                                alt="media logo" />
                                                        </div>
                                                    </div>
                                                    <div class="grow">
                                                        <h3>EMail</h3>
                                                        <p>Need formal message? we cover it up</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {#each navItems as item}
                                    <li>
                                        <a href={item.href}>{$t(item.label)}</a>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </nav>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        on:click={handleMobileIconClick}
                        class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
                        <div class="middle-line" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="max-w-full w-full mt-10">
        <div class="flex flex-col">
            <div class="flex flex-col ">
                <main class="dark:text-slate-100 flex flex-col flex-grow">
                    {#if data.url == URL_BASE}
                        <slot />
                    {:else}
                        <PageTransition url={data.url}>
                            <slot />
                        </PageTransition>
                    {/if}
                </main>
            </div>
        </div>
    </div>
    <Footer />
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
        /* max-width: 980px; */
        /* padding-left: 20px;
        padding-right: 20px; */
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
        /* justify-content: space-between; */
        margin: 0;
        padding: 0 40px;
        @apply z-50;
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
        text-decoration: none;
        display: flex;
        /* height: 45px; */
        align-items: center;
        @apply font-medium border-b border-slate-700;
    }

    .active {
        @apply bg-slate-200 text-base rounded-2xl;
    }

    /* .navbar-list a {
        @apply text-gray-600;
    }

    :global(.dark) .navbar-list a {
        @apply text-slate-50;
    }

    .navbar-list a:hover,
    .navbar-list li a:active {
        @apply text-gray-500;
    } */

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
            padding: 0 25px;
            font-size: medium;
            float: right;
            @apply text-base py-2;
        }

        .navbar-list li ul li {
            list-style-type: decimal;
            position: relative;
            text-decoration: none;
            align-items: center;
            @apply font-bold px-0 transition duration-300 ease-in-out rounded-xl hover:bg-secondary;
        }

        .navbar-list li ul li .grow {
            @apply ml-1 -mt-1;
        }

        .navbar-list li ul li h3 {
            @apply text-gray-800 font-bold;
        }
        .navbar-list li ul li p {
            @apply text-sm font-normal text-gray-500;
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
