<script>
    import ButtonLink from '$lib/components/ButtonLink.svelte'
    import { t } from '$lib/i18n'
</script>

<section
    class="container text-left mx-4 md:mx-auto max-w-3xl shadow-2xl border-b-8 mt-20 backdrop-blur-xl rounded-2xl">
    <div class="pb-10 px-8 grid grid-cols-3 content-center">
        <div class="col-span-2">
            <h2 class="font-bold">Hubungi Kami</h2>
            <p class="text-slate-600 dark:text-slate-100 text-xl">
                Konsultasi dengan kami secara Gratis! <br />Chat kami melalui Whatsapp
            </p>
        </div>
        <div class="col-span-1 flex mx-auto my-auto">
            <ButtonLink
                href="https://api.whatsapp.com/send?phone=6281212626030&text=Halo%2C%20saya%20ingin%20berdiskusi%20dengan%20Team%20Rakit.id%2C%20terima%20kasih."
                type="submit"
                class="relative inline-flex py-4 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:text-white hover:bg-green-700 dark:bg-slate-100 dark:text-slate-700 dark:hover:text-slate-100 dark:hover:bg-slate-700 focus:shadow-outline focus:outline-none">
                <div class=" items-center justify-center align-middle"><i class="fa-brands fa-whatsapp text-xl mr-2" /><span>{$t('cta.button-action')}</span> </div>
                <div
                    class="absolute -right-6 -top-2 ml-4 mr-4 w-6 h-6 rounded-full bg-green-300 z-20 animate-ping">
                    <div class="absolute left-2 top-2 w-2 h-2 rounded-full bg-green-400 z-20">
                        &nbsp;
                    </div>
                </div>
            </ButtonLink>
        </div>
    </div>
</section>
