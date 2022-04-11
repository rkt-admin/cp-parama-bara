<script>  
  import Logo from '../components/Logo.svelte'
  import { SITE_NAME, URL_BASE } from '$lib/variables'
  import Divider from '$lib/components/Divider.svelte'
</script>
<Divider border={true} size="medium" />
<footer class="mx-auto flex flex-col flex-grow w-full max-w-4xl px-4 md:px-0">
  <div class="md:flex md:justify-between ">
    <div>
      <h2>COMPANY</h2>
      <ul>
        <li class="mb-2">
          <a href="/about-us">About us</a>
        </li>
        <li class="mb-2">
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li class="mb-2">
          <a href="/term-condition">Terms of Services</a>
        </li>
        <li class="mb-2">
          <a href="/teams">Teams</a>
        </li>
        <li class="mb-2">
          <a href="/media">media</a>
        </li>
        <li class="mb-2">
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </div>
    <div>
      <h2>Help center</h2>
      <ul>
        <li class="mb-2">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="/">Discord Server</a>
        </li>
        <li class="mb-2">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="/">Instagram</a>
        </li>
        <li class="mb-2">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="/">Facebook </a>
        </li>
        <li class="mb-2">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="/contact-us">Contact Us</a>
        </li>
      </ul>
    </div>
    <div>
      <h2>Help center</h2>
      <ul>
        <li class="mb-2">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="/">Discord Server</a>
        </li>
        <li class="mb-2">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="/">Instagram</a>
        </li>
        <li class="mb-2">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="/">Facebook </a>
        </li>
        <li class="mb-2">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="/contact-us">Contact Us</a>
        </li>
      </ul>
    </div>
    <div>
      <h2>Download</h2>
      <ul>
        <li class="mb-2">
          <a href="/">iOS</a>
        </li>
        <li class="mb-2">
          <a href="/">Android</a>
        </li>
        <li class="mb-2">
          <a href="/">Windows</a>
        </li>
        <li class="mb-2">
          <a href="/">MacOS</a>
        </li>
      </ul>
    </div>
    <div>
      <Logo />    
    </div>
  </div>
  <Divider border={true} size="small" />
  <div class="sm:flex sm:items-center sm:justify-between mb-4 ">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400" >
      <i class="fa-regular fa-copyright"></i> 2022 <a href={URL_BASE}>{SITE_NAME}</a> site of PT Rakit Digital Creator, All Rights Reserved.      
    </span>
    <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0 items-center">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="https://www.facebook.com/rakit.id" class="text-gray-500">
        <i class="fa-brands fa-facebook-f  text-base"></i>
      </a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="https://www.instagram.com/rakit.official" class="text-gray-500">
        <i class="fa-brands fa-instagram  text-base"></i>
      </a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="/" class="text-gray-500">
        <i class="fa-brands fa-twitter text-base"></i>
      </a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="/" class="text-gray-500">
        <i class="fa-brands fa-github text-base"></i>
      </a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="/" class="text-gray-500">
        <i class="fa-brands fa-discord text-base"></i>
      </a>
    </div>
  </div>
</footer>

<style lang="postcss">
  h2 {
    @apply text-slate-400 mb-6 text-sm font-normal uppercase;
  }
  footer a {
    @apply text-slate-900  text-base font-normal;
  }
  :global(.dark) footer a {
    @apply text-slate-300  text-base font-normal;
  }
  footer a:hover {
    @apply text-sky-400;
  }
</style>
