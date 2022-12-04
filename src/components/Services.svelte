<script lang="ts">
    import Divider from '$lib/components/Divider.svelte'
</script>

<section class="z-20 section-style">
    <div class="max-w-5xl mx-auto">
        <div class="mb-52 ml-4 mr-8">
            <div
                class="col-span-1 text-justify sm:text-left text-4xl sm:text-6xl text-red-600 sm:text-red-600 font-light leading-none tracking-widest mb-8">
                OUR SERVICES
            </div>
            <div class="col-span-1 text-justify sm:text-left text-xl sm:text-2xl drop-shadow-md">
                Custom software development services to create mobile apps, websites and web
                applications from idea to post-launch support for all-sized businesses of various
                industries.
            </div>
        </div>
        <div
            class="grid grid-cols-1 gap-x-4 gap-y-48 mx-4
                    sm:grid-cols-2 sm:gap-x-8 sm:gap-y-32 sm:mx-4
                    md:grid-cols-2 md:gap-x-10 md:gap-y-32 md:mx-8
                    lg:grid-cols-2 lg:gap-x-32 lg:gap-y-36 lg:mx-10">
            <div class="relative group">
                <div class="absolute -top-28 left-5 z-10 lg:group-hover:animate-vote">
                    <img
                        src="images/services-web-development.svg"
                        class="w-44"
                        width="176px"
                        height="176px"
                        alt="Rakit.id - Custom Web Development" />
                </div>
                <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-gray-100 dark:bg-gray-600  shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-105" />
                <div class="relative text-left space-y-4 p-6 md:p-8 md:mt-5">
                    <h3 class="header-service">Custom Web Development</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-base text-left">
                        Whether you need a small presentation website to attract new clients, or a
                        complete custom platform supporting millions of monthly visits, we can
                        tailor a solution that is right for your own particular needs.
                    </p>
                </div>
            </div>
            <div class="relative group">
                <div class="absolute -top-28 left-5 z-10 lg:group-hover:animate-vote">
                    <img
                        src="images/services-backend-development.svg"
                        class="w-44"
                        width="176px"
                        height="176px"
                        alt="Rakit.id - Custom Web Development" />
                </div>
                <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-gray-100 dark:bg-gray-600  shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-105" />
                <div class="relative text-left space-y-4 p-6 md:p-8 md:mt-5">
                    <h3 class="header-service">Backend Development</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-base text-left">
                        Need to make performan API, API Gateway management, and DevOps cycle, we cover it.
                    </p>
                </div>
            </div>
            <div class="relative group">
                <div class="absolute -top-28 left-5 z-10 lg:group-hover:animate-vote">
                    <img
                        src="images/services-desktop-development.svg"
                        class="w-44"
                        width="176px"
                        height="176px"
                        alt="Rakit.id - Custom Web Development" />
                </div>
                <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-gray-100 dark:bg-gray-600  shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-105" />
                <div class="relative text-left space-y-4 p-6 md:p-8 md:mt-5">
                    <h3 class="header-service">Services Development</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-base text-left">
                        Whether you need a small presentation website to attract new clients, or a
                        complete custom platform supporting millions of monthly visits, we can
                        tailor a solution that is right for your own particular needs.
                    </p>
                </div>
            </div>
            <div class="relative group">
                <div class="absolute -top-28 left-5 z-10 lg:group-hover:animate-vote">
                    <img
                        src="images/services-backend-development.svg"
                        class="w-44"
                        width="176px"
                        height="176px"
                        alt="Rakit.id - Custom Web Development" />
                </div>
                <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-gray-100 dark:bg-gray-600  shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-105" />
                <div class="relative text-left space-y-4 p-6 md:p-8 md:mt-5">
                    <h3 class="header-service">UI/UX Design</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-base text-left">
                        Whether you need a small presentation website to attract new clients, or a
                        complete custom platform supporting millions of monthly visits, we can
                        tailor a solution that is right for your own particular needs.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Divider border={false} size="medium" />
</section>

<style lang="postcss">
    .header-service {
        @apply sm:pt-0 text-2xl font-medium mt-10 sm:mt-10 md:mt-0;
    }

    .service-item {
        @apply absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-105;
    }

</style>
