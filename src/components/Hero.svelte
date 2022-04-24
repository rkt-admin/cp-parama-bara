<script>
    import { t } from '$lib/i18n'
</script>

<div
    class="px-4 mx-auto sm:max-w-2xl md:max-w-full md:px-24 lg:px-8 bg-transparent group mt-5">
    <div class="inline-grid grid-cols-2 grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 max-w-5xl md:mb-9">
        <div class="col-span-2 z-20">
            <h2
                class="text-left md:text-left text-yellow-500 sm:text-yellow-500 mb-4 md:mb-6  lg:font-medium text-2xl sm:text-2xl leading-none tracking-normal md:mx-auto">
                {@html $t('hero.title2')}
            </h2>
            <h2
                class="animate-character items-left text-left md:text-left mb-6 md:mb-8 text-2xl sm:text-[2.5em] sm:text-slate-700 leading-none tracking-widest drop-shadow-lg">
                <!-- {@html $t('hero.title')} -->
                WEB, MOBILE & SOLUTION
            </h2>
            <div
                class="max-w-2xl text-left md:text-left mb-0 md:mb-2 text-lg md:text-xl mx-auto leading-none tracking-wide">
                {@html $t('hero.sub-title')}
            </div>

            <div class="block mt-12 text-left">
                <button
                    type="submit"
                    class="inline-flex items-center h-14 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:text-white hover:bg-red-700 dark:bg-slate-100 dark:text-slate-700 dark:hover:text-slate-100 dark:hover:bg-slate-700 focus:shadow-outline focus:outline-none">
                    {$t('hero.button-action')}
                </button>
                <button
                    type="submit"
                    class="relative inline-flex items-center h-14 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:text-white hover:bg-green-700 dark:bg-slate-100 dark:text-slate-700 dark:hover:text-slate-100 dark:hover:bg-slate-700 focus:shadow-outline focus:outline-none">
                    <i class="fa-brands fa-whatsapp  text-base" />&nbsp;WhatsApp
                    <div class="absolute -right-6 -top-2 ml-4 mr-4 w-6 h-6 rounded-full bg-green-300 z-20 animate-ping">
                        <div class="absolute left-2 top-2 w-2 h-2 rounded-full bg-green-400 z-20">
                            &nbsp;
                        </div>
                    </div>
                </button>
                <!-- <a
                href="/"
                aria-label=""
                class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >Learn more</a
              > -->
            </div>
        </div>
        <div class="hidden lg:block">
            <div
                class="-z-10 transition duration-300 group-hover:animate-vote">
                <img
                    src="images/services-web-development.svg"
                    class="w-full"
                    alt="Rakit.id - Custom Web Development" />
            </div>
        </div>
    </div>

    <!-- <div class="absolute right-60  -top-32 h-full w-full bg-sky-100 dark:bg-gray-900 -z-20 ">&nbsp;</div>
    <div class="absolute top-0 left-0 w-full min-h-screen bg-slate-200 dark:bg-gray-900 -z-20">&nbsp;</div> -->

</div>

<style>
    .animate-character {
        /* font-weight: 300; */
        background-image: linear-gradient(
            -225deg,
            #ea0000 25%,
            #007c1d 50%,
            #b9a000 75%,
            #ce5757 100%
        );
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 3s reverse infinite;
        display: inline-block;
    }

    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
</style>
