<script>
    import ButtonLink from '$lib/components/ButtonLink.svelte'
    import { t } from '$lib/i18n'
</script>
<section class="container mx-auto max-w-3xl rounded-lg shadow-lg border-b-8 mt-24">
  <div class="pb-10 px-10">
      <h3 class="font-bold">Hubungi kami melalui WhatsApp, Atur Schedule dan Konsultasi secara Gratis!</h3>
      <p class="text-slate-600 text-md">
        Anda tidak harus menggunakan layanan kami untuk bisa berdiskusi dengan kami, tidak peduli jika masalah yang Anda hadapi besar atau kecil.         
      </p>
    <div>
      <div class="justify-end">
        <button
          type="submit"
          class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-800 hover:text-white hover:bg-sky-700 dark:bg-slate-100 dark:text-slate-700 dark:hover:text-slate-100 dark:hover:bg-slate-700 focus:shadow-outline focus:outline-none"
        >
        <i class="fa-brands fa-whatsapp  text-base"></i> &nbsp;{$t('cta.button-action')}
        </button>
      </div>
    </div>
  </div>
</section>
