<script context="module">
  export const prerender = false
</script>

<script>
  import '../app.css'
  import '../prism.css'
  import 'focus-visible'
  import MoonIcon from 'heroicons-svelte/solid/MoonIcon.svelte'
  import SunIcon from 'heroicons-svelte/solid/SunIcon.svelte'
  import Logo from '../components/Logo.svelte'
  import { browser } from '$app/env'
  import Footer from '../components/Footer.svelte'
  import { onMount } from 'svelte'
  import { t, locale, locales } from '$lib/i18n'
  import { ToggleCore } from 'svelte-toggle'
  import { SITE_NAME, MODE } from '$lib/variables'
  import { language } from '../stores.js'
  // import { onDestroy } from 'svelte'
  // import { fly } from 'svelte/transition'
  import Alert from '../components/Alert.svelte'

  /**
   * HANDLE OF LIGHT & DARK THEME
   *
   */

  let prefersLight = false
  prefersLight = browser ? Boolean(JSON.parse(localStorage.getItem('prefersLight'))) : false
  // let yScreen
  // Show mobile icon and display menu
  let showMobileMenu = false
  // let navActive = '/'

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

  // Media match query handler
  const mediaQueryHandler = (e) => {
    // Reset mobile state
    if (!e.matches) {
      showMobileMenu = false
    }
  }

  // Attach media query listener on mount hook
  onMount(() => {
    const mediaListener = window.matchMedia('(max-width: 767px)')
    mediaListener.addListener(mediaQueryHandler)
  })

  // let navOverScroll = false
  $: {
    console.log($language)
    $locale = ($language ? 'en' : 'id')
    
    // if (yScreen > 20) {
    //   navOverScroll = true
    // } else {
    //   navOverScroll = false
    // }
  }
</script>

<svelte:head>
  <title>{SITE_NAME + ' - ' + MODE}</title>
  <meta name="description" content="Page description of rakit.id" />
</svelte:head>

<!-- <svelte:window bind:scrollY={yScreen} /> -->
<Alert />
<div class="flex flex-col min-h-full">
  <div class="mx-auto py-8 flex flex-col w-full max-w-4xl">
    <div class="flex h-16 justify-center items-center mb-0 z-50" >
      {#if browser}
        <Logo />
        <nav class="mx-12">
          <div class="inner">
            <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
              {#each navItems as item}
                <li>
                  <a href={item.href} class="text-slate-600">{$t(item.label)}</a>
                </li>
              {/each}
            </ul>
          </div>
        </nav>
        <button
          type="button"
          role="switch"
          aria-label="Toggle Dark Mode"
          aria-checked={!prefersLight}
          class="h-6 w-6 sm:h-8 sm:w-8 sm:p-1 mr-4"
          on:click={() => {
            prefersLight = !prefersLight
            localStorage.setItem('prefersLight', prefersLight.toString())

            if (prefersLight) {
              document.querySelector('html').classList.remove('dark')
            } else {
              document.querySelector('html').classList.add('dark')
            }
          }}
        >
          {#if prefersLight}
            <MoonIcon class="text-slate-800" />
          {:else}
            <SunIcon class="text-slate-400" />
          {/if}
        </button>
        <ToggleCore toggled={$language} let:label let:button>
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <!-- <label {...label}>Label</label> -->
          <button
            class="bg-slate-800 rounded-xl py-1 px-2 text-white text-xs"
            {...button}
            on:click={() => language.toggle()
            }
          >
            {!$language ? 'Bahasa' : 'English'}
          </button>
        </ToggleCore>
        <div
          on:click={handleMobileIconClick}
          class={`mobile-icon${showMobileMenu ? ' active' : ''}`}
        >
          <div class="middle-line" />
        </div>
      {/if}
    </div>
  </div>
  <div class="flex flex-col max-w-none">
    <main
      class="prose prose-slate prose-sm sm:prose sm:prose-slate sm:prose-lg sm:max-w-none dark:prose-invert flex flex-col flex-grow"
    >
      <slot />
    </main>
  </div>
</div>
<Footer />

<style lang="postcss">
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
      padding: 0 25px;
    }
  }
</style>
