<script>
    import { t } from '$lib/i18n'
    import ButtonLink from '$lib/components/ButtonLink.svelte'
</script>

<section class="w-full group section-style pb-10 bg-hero bg-no-repeat bg-biggest md:bg-cover dark:bg-none">
    <div class="max-w-5xl mx-auto">
        <div class="inline-grid grid-cols-2 grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 mt-10 mx-2">
            <div class="col-span-2 z-20">
                <div
                    class="items-left tracking-tight drop-shadow-lg text-left
                text-3xl mb-2 font-extrabold
                sm:text-4xl sm:mb-4
                md:text-4xl md:mb-4
                lg:text-5xl lg:mb-4">
                {$t('hero.title2')} <br />
                </div>
                <div
                    class="text-red-500 items-left  drop-shadow-md tracking-tight
                text-left 
                text-2xl mb-10 font-medium
                sm:text-3xl sm:mb-8
                md:text-3xl md:mb-8
                lg:text-2xl lg:mb-10 lg:font-bold">
                    WEB . MOBILE . API . CUSTOM
                </div>
                <div
                    class="max-w-2xl mx-auto tracking-normal  drop-shadow-md
                text-justify  text-xl mb-0
                sm:text-xl sm:mb-2
                md:text-xl md:mb-2
                lg:text-2xl lg:mb-2">
                    {@html $t('hero.sub-title')}
                </div>

                <div class="inline-flex mt-16 text-left">                    
                    <ButtonLink
                        href="https://api.whatsapp.com/send?phone=6281212626030&text=Halo%2C%20saya%20ingin%20berdiskusi%20dengan%20Team%20Rakit.id%2C%20terima%20kasih."
                        type="submit"
                        class="relative inline-flex items-center h-14 px-4 font-normal tracking-normal text-white transition duration-200 rounded-md shadow-md bg-green-500 hover:text-white hover:bg-green-600 dark:bg-green-600 dark:text-slate-50 dark:hover:text-slate-100 dark:hover:bg-green-500 focus:shadow-outline focus:outline-none">
                        <i class="fa-brands fa-whatsapp text-xl mr-2" /><i class="absolute left-4 fa-brands fa-whatsapp text-xl animate-ping" /><span class="text-lg"
                            >{$t('cta.button-action')}</span>
                        <!-- <div
                            class="absolute -right-6 -top-2 ml-4 mr-4 w-6 h-6 rounded-full bg-green-300 z-20 animate-ping">
                            <div
                                class="absolute left-2 top-2 w-2 h-2 rounded-full bg-green-400 z-20">
                                &nbsp;
                            </div>
                        </div> -->
                    </ButtonLink>
                    <ButtonLink
                        href="#howwedoit"
                        type="submit"
                        class="relative inline-flex items-center h-16 px-4 ml-8 font-normal text-2xl tracking-normal text-yellow-600 transition duration-200  hover:text-yellow-500 dark:text-slate-100 focus:shadow-outline focus:outline-none 
                        mr-5">
                        <span class="text-xl">{$t('hero.button-action')}</span>
                    </ButtonLink>
                    <!-- <a
                href="/"
                aria-label=""
                class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >Learn more</a
              > -->
                </div>
            </div>
            <div class="hidden lg:block">
                <div class="-z-10 transition duration-300 group-hover:animate-vote">
                    <img
                        src="images/services-web-development-noback.svg"
                        class="w-full"
                        alt="Rakit.id - Custom Web Development" />
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="absolute right-60  -top-32 h-full w-full bg-sky-100 dark:bg-gray-900 -z-20 ">&nbsp;</div>
    <div class="absolute top-0 left-0 w-full min-h-screen bg-slate-200 dark:bg-gray-900 -z-20">&nbsp;</div> -->
</section>

<style>
    .animate-character {
        /* font-weight: 300; */
        background-image: linear-gradient(
            -90deg,
            #ffd000 0%,
            #e3b900 50%,
            #d2ac01 75%,
            #ffd000 100%
        );
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 1s reverse infinite;
        display: inline-block;
    }

    :global(.dark) .animate-character {
        /* font-weight: 300; */
        background-image: linear-gradient(
            -225deg,
            #ffffff 25%,
            #e3e3e3 50%,
            #b9b9b9 75%,
            #ffffff 100%
        );
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 4s reverse infinite;
        display: inline-block;
    }

    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
</style>
