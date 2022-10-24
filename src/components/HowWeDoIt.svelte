<script lang="ts">
    import Divider from '$lib/components/Divider.svelte'
</script>

<section class="z-20 mt-10 bg-secondary dark:bg-slate-900 section-style dark:bg-none">
    <Divider border={false} size="large" />
    <div id="howwedoit" class="group grid grid-cols-1 max-w-5xl mx-auto">
        <div class="mx-4">
            <div class="col-span-1 max-w-5xl relative">
                <div class="text-center">
                    <div
                        class="col-span-1 text-4xl sm:text-6xl text-red-600 font-thin leading-none tracking-widest mb-10">
                        HOW WE DO IT
                    </div>
                    <div class="col-span-1 text-center text-xl sm:text-2xl drop-shadow-sm">
                        We help you <span class="text-yellow-500">streamline</span> your business
                        <span class="text-yellow-500">workflow</span>, make it simple and more efficient,
                        then deliver it with optimized and proven technology for <span class="text-yellow-500">the best user experience</span>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="relative">
                    <div class="mx-auto max-w-2xl mt-10">
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
