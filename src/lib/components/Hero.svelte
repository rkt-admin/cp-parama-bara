<script>
  import { t } from '$lib/i18n'
</script>

<div
  class="px-4 pb-[4em] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
>
  <div class="md:mb-12">
    <h2
      class="max-w-xl text-justify mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
    >
      {@html $t('hero.title')}
    </h2>
    <p class="max-w-xl text-lg md:text-xl  mx-auto leading-none tracking-tight">
      {@html $t('hero.sub-title')}
    </p>
  </div>
  <div class="flex sm:justify-end">
    <button
      type="submit"
      class="inline-flex items-center justify-center h-10 px-4 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-800 hover:text-white hover:bg-sky-700 dark:bg-slate-100 dark:text-slate-700 dark:hover:text-slate-100 dark:hover:bg-slate-700 focus:shadow-outline focus:outline-none"
    >
      {$t('hero.button-action')}
    </button>
    <button
      type="submit"
      class="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-800 hover:text-white hover:bg-sky-700 dark:bg-slate-100 dark:text-slate-700 dark:hover:text-slate-100 dark:hover:bg-slate-700 focus:shadow-outline focus:outline-none"
    >
    <i class="fa-brands fa-whatsapp  text-base"></i>&nbsp;WhatsApp
    </button>
    <!-- <a
      href="/"
      aria-label=""
      class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
      >Learn more</a
    > -->
  </div>
</div>
