<script lang="ts">
    import Divider from '$lib/components/Divider.svelte'
</script>

<section name="Technology Stack" class="bg-secondary dark:bg-slate-900 section-style">
    <Divider border={false} size="large" />
    <div id="whatwedo" class="group grid grid-cols-1 max-w-5xl mx-auto">
        <div class="mx-4">
            <div class="grid grid-cols-1 grid-rows-2">
                <div
                    class="col-span-1 text-right sm:text-right text-4xl sm:text-6xl text-red-600 sm:text-red-600 font-light leading-none tracking-widest mb-10">
                    TECHNOLOGY STACK
                </div>
                <div class="col-span-1 text-right sm:text-right text-xl sm:text-2xl drop-shadow-md">
                    Using globally proven technology gets you ahead before you start
                </div>
            </div>
            <div class="mx-auto">
                <div
                    class="inline-grid 
        grid-cols-2 gap-x-16 gap-y-8
        sm:grid-cols-3 sm:gap-x-16 sm:gap-y-8 
        md:grid-cols-4 md:gap-x-16 md:gap-y-8
        lg:grid-cols-4 lg:gap-x-28 lg:gap-y-8">
                    <div>
                        <h3>Front End</h3>
                        <div class="grid sm:grid-cols-1 lg:grid-cols-1 relative group">
                            <span class="tech-item">
                                <img
                                    src="images/tech-logo/javascript_logo.svg"
                                    class="tech-img"
                                    alt="Javascript Logo" />
                                <span class="tech-name">Javascript</span>
                            </span>
                            <span class="tech-item">
                                <img
                                    src="images/tech-logo/svelte-logo.svg"
                                    class="tech-img"
                                    alt="Svelte Logo" />
                                <span class="tech-name">Svelte</span>
                            </span>
                            <span class="tech-item">
                                <img
                                    src="images/tech-logo/vue-logo.svg"
                                    class="tech-img"
                                    alt="Vue Logo" />
                                <span class="tech-name">Vue</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h3>Back End</h3>
                        <div class="grid sm:grid-cols-1 lg:grid-cols-1">
                            <span class="tech-item">
                                <img
                                    src="images/tech-logo/golang-logo.svg"
                                    class="tech-img"
                                    alt="Golang Logo" />
                                <span class="tech-name">Golang</span>
                            </span>
                            <span class="tech-item">
                                <img
                                    src="images/tech-logo/nodejs-logo.svg"
                                    class="tech-img"
                                    alt="Node.js Logo" />
                                <span class="tech-name">Node.js</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h3>Databases</h3>
                        <div class="grid sm:grid-cols-1 lg:grid-cols-1">
                            <span class="tech-item">
                                <img
                                    src="images/tech-logo/mysql-logo.svg"
                                    class="tech-img"
                                    alt="MySQL Database Logo" />
                                <span class="tech-name">MySQL</span>
                            </span>
                            <span class="tech-item">
                                <img
                                    src="images/tech-logo/mongodb-logo.svg"
                                    class="tech-img"
                                    alt="MongoDB Logo" />
                                <span class="tech-name">MongoDB</span>
                            </span>
                            <span class="tech-item">
                                <img
                                    src="images/tech-logo/redis-logo.svg"
                                    class="tech-img"
                                    alt="Redis Logo" />
                                <span class="tech-name">RedisDB</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h3>UI/UX</h3>
                        <div class="grid sm:grid-cols-1 lg:grid-cols-1">
                            <span class="tech-item">
                                <img
                                    src="images/tech-logo/tailwind-logo.svg"
                                    class="tech-img"
                                    alt="Tailwind CSS Logo" />
                                <span class="tech-name">Tailwind CSS</span>
                            </span>
                            <span class="tech-item">
                                <img
                                    src="images/tech-logo/Bootstrap-logo.svg"
                                    class="tech-img"
                                    alt="Bootstrap Logo" />
                                <span class="tech-name">Bootstrap</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Divider border={false} size="large" />
</section>

<style lang="postcss">
    h3 {
        @apply font-light text-xl;
    }
    .tech-item {
        @apply flex items-center m-0 py-4 rounded-xl justify-items-start;
    }
    .tech-item:hover {
        @apply transition-transform duration-150 animate-vote;
    }
    .tech-img {
        @apply m-0 mr-3;
    }
    .tech-name {
        @apply text-lg ml-1;
    }
</style>
