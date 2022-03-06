<script>
  import '../app.css'
  import '../prism.css'
  import 'focus-visible'
  import MoonIcon from 'heroicons-svelte/solid/MoonIcon.svelte'
  import SunIcon from 'heroicons-svelte/solid/SunIcon.svelte'
  import Logo from '../components/Logo.svelte'
  import { browser } from '$app/env'
  import { name, website } from '$lib/info'
  import Footer from '../components/Footer.svelte'
  import { onMount } from 'svelte'

  let prefersLight = browser ? Boolean(JSON.parse(localStorage.getItem('prefersLight'))) : false

  // Show mobile icon and display menu
  let showMobileMenu = false

  // List of navigation items
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
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

</script>

<div class="flex flex-col min-h-screen">
  <div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
    <div class="bg-slate-100  dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 rounded-b-lg shadow-md flex h-16 px-4 py-2 justify-between items-center mb-0 sticky top-0 z-50">
      <Logo {website} {name} />
      <nav>
        <div class="inner">
          <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
            {#each navItems as item}
              <li>
                <a href={item.href}>{item.label}</a>
              </li>
            {/each}
          </ul>
        </div>
      </nav>

      {#if browser}        
        <button
          type="button"
          role="switch"
          aria-label="Toggle Dark Mode"
          aria-checked={!prefersLight}
          class="h-6 w-6 sm:h-8 sm:w-8 sm:p-1"
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
            <MoonIcon class="text-slate-500" />
          {:else}
            <SunIcon class="text-slate-400" />
          {/if}
        </button>
        <div
          on:click={handleMobileIconClick}
          class={`mobile-icon${showMobileMenu ? ' active' : ''}`}
        >
          <div class="middle-line" />
        </div>
      {/if}
    </div>
    <main
      class="prose prose-slate prose-sm sm:prose sm:prose-slate sm:prose-lg sm:max-w-none dark:prose-invert flex flex-col w-full flex-grow py-4 px-4"
    >
      <slot />
    </main>
  </div>
</div>

<Footer {website} {name} />

<style lang="postcss">
  nav {
    /* background-color: rgba(0, 0, 0, 0.8); */
    /* font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif; */
    height: 45px;
  }

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
    padding: 40px;
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

  .navbar-list.mobile::after li  {
    border-bottom: 1px solid bg-slate-500;
  }

  :global(.dark) .navbar-list.mobile {
    @apply bg-slate-500;
  }

  .navbar-list li {
    list-style-type: none;
    position: relative;
    @apply border-b border-slate-400;

  }

  /* .navbar-list li:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #424245;
  } */

  .navbar-list a {
    color: rgb(75, 75, 75);
    text-decoration: none;
    display: flex;
    height: 45px;
    align-items: center;
    padding: 0 10px;
    font-size: 13px;
  }

  /* .navbar-list a {
    @apply flex p-4 border border-slate-300 rounded-lg;
  } */

  .navbar-list a {
    @apply mb-2 text-slate-500 uppercase text-base font-medium;
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
