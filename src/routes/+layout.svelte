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
    import Divider from '$lib/components/Divider.svelte'
    $: isActive = $page.url.pathname === $$props.href
    // $: console.log('$page.url.pathname', $page.url.pathname)
    // $: console.log('$$props.href', $$props.href)
    import AOS from 'aos'
    import 'aos/dist/aos.css'

    let isSideNavOpen = false

    /** @type {import('./$types').LayoutData} */
    // export let data

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
        AOS.init()
        const mql = window.matchMedia('(max-width: 950px)')

        mql.addEventListener('change', (e) => {
            if (!e.matches) {
                showMobileMenu = false
                scrollActive = true
            } else {
                scrollActive = false
            }
        })
    })

    function handleClickOutside(event) {
        // alert('Click outside!');
        // showMobileMenu = !showMobileMenu;
    }

    export function clickOutside(node) {
        const handleClick = (event) => {
            if (node && !node.contains(event.target) && !event.defaultPrevented) {
                node.dispatchEvent(new CustomEvent('click_outside', node))
            }
        }

        document.addEventListener('click', handleClick, true)

        return {
            destroy() {
                document.removeEventListener('click', handleClick, true)
            }
        }
    }

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
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        on:click={handleMobileIconClick}
        class={`button_container${showMobileMenu ? ' active' : ''}`}
        id="toggle">
        <span class="top" /><span class="middle" /><span class="bottom" />
    </div>
    <div
        class={`overlay ${showMobileMenu ? 'open' : ''}`}
        use:clickOutside
        on:click_outside={handleClickOutside}
        id="overlay">
        <nav class="overlay-menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/company">Company</a></li>
                <li><a href="/customer">Customer</a></li>
                <li>
                    <a href="# ">Product & Services</a>
                    <ul>
                        <li><a href="/quality-controll">Quality Controll</a></li>
                        <li><a href="/excellent-services">Excellent Services</a></li>
                    </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    <div
        class="sticky top-0 z-50 dark:bg-slate-900 pt-3
        px-[20px] md:px-[100px]
    {yScreen > 10 && scrollActive
            ? ' transition-all duration-150 bg-black bg-opacity-80 drop-shadow-lg sticky top-0 pb-5'
            : ' bg-transparent'} 
    {yScreen <= 12 && scrollActive ? ' transition-all duration-300 drop-shadow-none' : ''}
    ">
        <div class="h-6">
            <div class="flex flex-col">
                <div class="flex justify-between items-center">
                    <Logo size="small" text={true} dark={false} />

                    <nav data-aos="fade-down" data-aos-duration="1500" data-aos-delay="0">
                        <div class="navbar">
                            <ul class={`navbar-list ${showMobileMenu ? ' mobile' : ''}`}>
                                <li>
                                    <a
                                        href="/"
                                        class="menu-link {$page.url.pathname === '/'
                                            ? 'active'
                                            : ''}">Home</a>
                                </li>
                                <li>
                                    <a
                                        href="/company"
                                        class="menu-link {$page.url.pathname === '/company' ||
                                        $page.url.pathname === '/company/vision' ||
                                        $page.url.pathname === '/company/service'
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
                                    <a
                                        href="/products/anthracite"
                                        class="menu-link {$page.url.pathname === '/products/anthracite'
                                            ? 'active'
                                            : ''}">Products</a>
                                </li>
                                <li class="relative group z-10">
                                    <a
                                        href="#!"
                                        class="group-hover:bg-white group-hover:rounded-sm group-hover:bg-opacity-30"
                                        >Services</a>
                                    <ul class="z-50 absolute invisible group-hover:visible">
                                        <li>
                                            <a
                                                href="/chruser-coal"
                                                class={$page.url.pathname === '/chruser-coal'
                                                    ? 'active'
                                                    : ''}>
                                                <div class="flex items-start">
                                                    <div class="grow">
                                                        <h3>Crusher Coal</h3>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/conveyor"
                                                class={$page.url.pathname === '/conveyor'
                                                    ? 'active'
                                                    : ''}>
                                                <div class="flex items-start">
                                                    <div class="grow">
                                                        <h3>Conveyor</h3>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/washing-plant"
                                                class={$page.url.pathname === '/washing-plant'
                                                    ? 'active'
                                                    : ''}>
                                                <div class="flex items-start">
                                                    <div class="grow">
                                                        <h3>Washing Plant</h3>
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
                    <!-- <div
                        on:click={handleMobileIconClick}
                        class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
                        <div class="middle-line" />
                    </div> -->
                </div>
            </div>
        </div>
    </div>
    <div class="max-w-full w-full -mt-12">
        <div class="flex flex-col">
            <div class="flex flex-col">
                <main class="dark:text-slate-100 flex flex-col flex-grow">
                    <!-- <PageTransition url={data.url}> -->
                    <slot />
                    <!-- </PageTransition> -->
                </main>
            </div>
        </div>
    </div>
    <Divider border={$page.url.pathname === '/customer' ? false : true} size={'medium'} />
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
    /* 
    ul.navbar-list.mobile {
        @apply bg-red-600 bg-current uppercase text-base font-medium;
        position: fixed;
        display: block;
        height: calc(100% - 55px);
        bottom: 0;
        left: 0;
        z-index: 100;
        border-bottom: 1px solid bg-slate-500;
        background-color: #ffcc00;
    }

    ul.navbar-list.mobile li a {
        @apply text-white font-semibold;
    }
    ul.navbar-list.mobile li a.active {
        @apply bg-white bg-opacity-30 rounded-sm;
    }
    ul.navbar-list.mobile > li > a:hover {
        @apply text-white bg-white bg-opacity-30 rounded-sm;
    }
    :global(.dark) ul.navbar-list.mobile a {
        @apply text-slate-50 font-semibold;
    } */

    /* .navbar-list.mobile::after li {
        @apply border-yellow-400 bg-yellow-500;
    } */

    /* :global(.dark) .navbar-list.mobile {
        @apply bg-slate-700 bg-gradient-to-br from-slate-800 to-slate-800;
    } */

    .navbar-list li {
        list-style-type: none;
        /* position: relative; */
        text-decoration: none;
        display: flex;
        align-items: center;
        @apply font-medium border-b border-slate-700;
    }

    .navbar-list li a {
        @apply text-white font-semibold bg-opacity-30;
    }

    :global(.dark) .navbar-list a {
        @apply text-slate-50 font-semibold;
    }
    .navbar-list li a.active {
        @apply bg-white bg-opacity-30 rounded-sm;
    }
    .navbar-list > li > a:hover {
        @apply text-white bg-white bg-opacity-30 rounded-sm;
    }

    @media only screen and (min-width: 767px) {
        .mobile-icon {
            display: none;
        }
        .button_container {
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
            @apply text-sm py-2 px-4 mx-2;
        }

        /*ini submenu*/
        .navbar-list > li > ul {
            @apply w-44 left-2 top-9 bg-white bg-opacity-90;
        }
        .navbar-list > li > ul > li:hover {
            @apply bg-yellow-300;
        }
        .navbar-list > li > ul > li a {
            @apply text-sm font-semibold text-black bg-transparent;
        }
        .navbar-list > li > ul > li a:hover {
            @apply text-black bg-transparent;
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

    /*menu mobile*/
    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        width: 50%;
        height: 0%;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.35s, visibility 0.35s, height 0.35s;
        overflow: hidden;
        @apply z-50 bg-black bg-opacity-95 bg-scroll uppercase;
    }
    .overlay.open {
        opacity: 0.9;
        visibility: visible;
        height: 100%;
    }
    /* .overlay.open li {
        animation: fadeInRight 0.5s ease forwards;
        animation-delay: 0.5s;
    }
    .overlay.open li:nth-of-type(2) {
        animation-delay: 0.4s;
    }
    .overlay.open li:nth-of-type(3) {
        animation-delay: 0.45s;
    }
    .overlay.open li:nth-of-type(4) {
        animation-delay: 0.5s;
    } */
    .overlay nav {
        position: relative;
        height: 30%;
        top: 20%;
        transform: translateY(-50%);
        @apply text-lg text-left pl-5 font-bold;
    }
    .overlay ul {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        display: inline-block;
        height: 100%;
    }
    /* .overlay ul>li {
        display: block;
        height: 10px;
        height: calc(100% / 4);
        min-height: 50px;c 
        opacity: 0;
    } */
    .overlay ul > li > a {
        display: block;
        position: relative;
        color: #ffffff;
        text-decoration: none;
        overflow: hidden;
        @apply pt-2;
    }
    .overlay ul > li > ul {
        @apply border-l-2 border-yellow-500 ml-2 mt-2;
    }
    .overlay ul > li > ul > li > a {
        display: block;
        position: relative;
        color: #ffffff;
        text-decoration: none;
        overflow: hidden;
        @apply pt-2 pl-3;
    }

    .overlay ul li a:hover {
        @apply text-yellow-600;
    }
    /* .overlay ul li a:hover:after,
    .overlay ul li a:focus:after,
    .overlay ul li a:active:after {
        width: 100%;
        @apply text-yellow-50;
    }
    
    .overlay ul li a:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0%;
        transform: translateX(-50%);
        height: 3px;
        background: #fff;
        transition: 0.5s;
    } */

    /* @keyframes fadeInRight {
        0% {
            opacity: 0;
            left: 20%;
        }
        100% {
            opacity: 1;
            left: 0;
        }
    } */

    .button_container {
        position: fixed;
        top: 10px;
        right: 10px;
        height: 20px;
        width: 30px;
        cursor: pointer;
        z-index: 100;
        transition: opacity 0.25s ease;
    }
    .button_container:hover {
        opacity: 0.7;
    }
    .button_container.active .top {
        transform: translateY(10px) translateX(0) rotate(45deg);
        background: #fff;
    }
    .button_container.active .middle {
        opacity: 0;
        background: #fff;
    }
    .button_container.active .bottom {
        transform: translateY(-10px) translateX(0) rotate(-45deg);
        background: #fff;
    }
    .button_container span {
        @apply bg-slate-100 rounded-sm;
        border: none;
        height: 3px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.35s ease;
        cursor: pointer;
    }
    .button_container span:nth-of-type(2) {
        top: 10px;
    }
    .button_container span:nth-of-type(3) {
        top: 20px;
    }
</style>
