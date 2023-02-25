<script>
    // import '../app.css'
    // import '../prism.css'
    import Logo from '../components/Logo.svelte'
    import Topbar from '../components/Topbar.svelte'
    import { browser } from '$app/environment'
    import Footer from '../components/Footer.svelte'
    import { onMount } from 'svelte'
    import { t } from '$lib/i18n'
    import PageTransition from '$lib/components/PageTransition.svelte'
    import { URL_BASE, SITE_NAME, MODE } from '$lib/variables'
    import { page } from '$app/stores'
    $: isActive = $page.url.pathname === $$props.href
    $: console.log('$page.url.pathname', $page.url.pathname)
    $: console.log('$$props.href', $$props.href)

    let isSideNavOpen = false

    /** @type {import('./$types').LayoutData} */
    export let data

    let expanded = false
    let yScreen
    let scrollActive = false
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
        const mql = window.matchMedia('(max-width: 950px)')

        mql.addEventListener('change', (e) => {
            if (!e.matches) {
                showMobileMenu = false
            }
        })
    })

    $: {
        if (yScreen >= 10) {
            scrollActive = true
        }
        scrollActive = scrollActive
    }
</script>

<svelte:head>
    <title>{SITE_NAME + ' - ' + MODE}</title>
    <meta name="description" content="Page description of rakit.id" />
</svelte:head>
<svelte:window bind:scrollY={yScreen} />
<!-- <Alert /> -->
<!-- <Topbar /> -->
{#if browser}
    <div
        class="sticky top-0 z-10 dark:bg-slate-900 pt-3 
        px-[20px] sm:px-[20px] md:px-[75px]
    {yScreen > 10 && scrollActive
            ? ' transition-all duration-150 bg-black bg-opacity-60 drop-shadow-lg sticky top-0 pb-5'
            : ' bg-transparent'} 
    {yScreen <= 12 && scrollActive ? ' transition-all duration-300 drop-shadow-none' : ''}
    ">
        <div class="h-6">
            <div class="flex flex-col">
                <div class="flex justify-between items-center">
                    <Logo size="small" text={true} dark={false} />
                    <nav>
                        <div>
                            <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
                                <li>
                                    <a
                                        href="/company-overview"
                                        class="menu-link {$page.url.pathname === '/company-overview'
                                            ? 'active'
                                            : ''}">Company</a>
                                </li>
                                <li>
                                    <a
                                        href="/customer"
                                        class="menu-link {$page.url.pathname === '/customer'
                                            ? 'active'
                                            : ''}">Customer</a>
                                </li>
                                <li class="relative group z-10">
                                    <a href="#!">Treatment</a>
                                    <ul
                                        class="z-50 absolute w-52 top-9 rounded-b-sm rounded-r-sm bg-white bg-opacity-95 invisible group-hover:visible">
                                        <li>
                                            <a
                                                href="/quality-control"
                                                class="menu-link {$page.url.pathname ===
                                                '/quality-control'
                                                    ? 'active'
                                                    : ''}">
                                                <div class="flex items-start">
                                                    <div class="grow">
                                                        <h3>Quality Control</h3>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/excelent-services"
                                                class="menu-link {$page.url.pathname ===
                                                '/excelent-services'
                                                    ? 'active'
                                                    : ''}">
                                                <div class="flex items-start">
                                                    <div class="grow">
                                                        <h3>Excelent Services</h3>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        class="menu-link {$page.url.pathname === '/contact'
                                            ? 'active'
                                            : ''}">Contact</a>
                                </li>
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
    <div class="max-w-full w-full -mt-12">
        <div class="flex flex-col">
            <div class="flex flex-col ">
                <main class="dark:text-slate-100 flex flex-col flex-grow">
                    <!-- <PageTransition url={data.url}> -->
                        <slot />
                    <!-- </PageTransition> -->
                </main>
            </div>
        </div>
    </div>
    <Footer border={$page.url.pathname === '/customer' ? false : true} />
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
        @apply bg-slate-100 text-base font-medium;
    }

    :global(.dark) .mobile-icon:after,
    .mobile-icon:before,
    .middle-line {
        @apply bg-slate-50;
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
        align-items: center;
        @apply font-medium border-b border-slate-700;
    }

    .navbar-list li a {
        @apply text-white;
    }

    :global(.dark) .navbar-list a {
        @apply text-slate-50;
    }

    .navbar-list li a:hover {
        @apply text-white;
    }
    .navbar-list li a.active,
    .navbar-list li:hover {
        @apply bg-slate-200 bg-opacity-30 rounded-sm;
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
            float: right;
            @apply text-sm py-2 px-7;
        }

        /*ini submenu*/
        .navbar-list li ul li {
            list-style-type: decimal;
            position: relative;
            text-decoration: none;
            align-items: center;
            @apply font-semibold px-0 pt-1 transition duration-300 ease-in-out rounded-sm hover:bg-slate-200;
        }

        .navbar-list li ul li:hover {
            @apply bg-yellow-300;
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
