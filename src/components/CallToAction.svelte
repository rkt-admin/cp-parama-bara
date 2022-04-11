<script>
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import { t } from '$lib/i18n'
</script>

<section class="container mx-4 md:mx-auto max-w-3xl rounded-lg shadow-lg border-b-8 mt-24 text-center backdrop-filter backdrop-blur-sm">
  <div class="pb-10 px-8">
    <h2 class="font-bold">
      Hubungi kami melalui WhatsApp
    </h2>
    <p class="text-slate-600 dark:text-slate-100 text-md">
      Atur Schedule dan Konsultasi secara Gratis! Anda tidak harus menggunakan layanan kami untuk bisa berdiskusi dengan kami, tidak peduli jika
      masalah yang Anda hadapi besar atau kecil.
    </p>
    <div>
      <div class="justify-end">
        <ButtonLink
          href="https://api.whatsapp.com/send?phone=6281212626030&text=Halo%2C%20saya%20ingin%20berdiskusi%20dengan%20Team%20Rakit.id%2C%20terima%20kasih."
          type="submit"
          class="inline-flex items-center justify-center h-10 px-4 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-800 hover:text-white hover:bg-sky-700 dark:bg-slate-100 dark:text-slate-700 dark:hover:text-slate-100 dark:hover:bg-slate-700 focus:shadow-outline focus:outline-none"
        >
          <i class="fa-brands fa-whatsapp  text-base" /> &nbsp;{$t('cta.button-action')}
        </ButtonLink>
      </div>
    </div>
  </div>
</section>
