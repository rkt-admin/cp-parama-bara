<script lang="ts">
    import Divider from '$lib/components/Divider.svelte'
</script>

<section class="z-20 mt-10 bg-slate-100 dark:bg-black section-style">
    <Divider border={false} size="large" />
    <div id="HowWeDoIt" class="group grid grid-cols-1 max-w-5xl mx-auto">
        <div class="mx-4">
            <div class="col-span-1 max-w-4xl relative">
                <div class="text-center">
                    <div
                        class="col-span-1 text-4xl sm:text-6xl text-red-600 font-thin leading-none tracking-widest mb-10">
                        HOW WE DO IT
                    </div>
                    <div class="col-span-1 text-xl sm:text-3xl text-justify">
                        We help you <span class="text-yellow-500">streamline</span> your business
                        <span class="text-yellow-500">workflow</span>, make it simple and efficient,
                        then optimize it with technology
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="relative">
                    <div class="mx-auto max-w-3xl mt-10">
                        <img
                            src="images/bg-streamline.svg"
                            class="relative w-full z-20"
                            alt="Rakit.id - Streamline" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Divider border={false} size="large" />
</section>
