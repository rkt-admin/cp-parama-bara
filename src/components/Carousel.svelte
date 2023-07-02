<script>
    import ButtonLink from '$lib/components/ButtonLink.svelte'
    export let slides = []
    export let delay = 5000
    let activeIndex = 0
    const nextSlide = () => {
        activeIndex = (activeIndex + 1) % slides.length
    }
    let interval = setInterval(nextSlide, delay)
    const onDestroy = () => clearInterval(interval)
</script>

<div id="default-carousel" class="relative" data-carousel="slide">
    <div class="relative h-screen overflow-hidden">
        {#each slides as slide, i}
            <div
                class={`duration-700 ease-in-out ${i === activeIndex ? '' : 'opacity-0'}`}
                data-carousel-item>
                <img
                    src={slide.image}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-screen object-cover"
                    alt={slide.alt} />
            </div>
        {/each}
    </div>
    <div
        class="
    absolute top-0 mt-28 max-w-4xl 
    px-[20px] sm:px-[20px] md:pl-[100px] 
    flex items-center justify-center" data-aos="fade-right" data-aos-duration="1000">
        <div class=" items-center justify-center text-white">
            <h1
                class="text-xl leading-10 mb-8 md:text-5xl md:max-w-4xl md:leading-[60px] font-extrabold tracking-[0.16px]"
                data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000" >
                Your Trusted Energy Partner
            </h1>
            <p
                class="text-sm border-l-4 border-yellow-300 py-4 px-8 leading-4 md:text-lg md:max-w-3xl mt-4 font-normal md:leading-6 tracking-[0.16px]"
                data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1500" >
                PARAMA BARA INTERCONTINENTAL handle the exportation of branded thermal coal of multi
                origins, as well as exporting coal and cokes from multi origin to reputable end
                users in various Asian Countries.
            </p>
            <div class="inline-flex mt-10 text-left" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000" >
                <ButtonLink
                    href="/company"
                    type="submit"
                    class="relative inline-flex items-center h-10 px-4 font-bold tracking-normal transition duration-200 rounded-md shadow-md text-gray-800 bg-yellow-400 hover:text-gray-800 hover:bg-yellow-300">
                    <span class="text-sm">Company Overview</span>
                </ButtonLink>
                <ButtonLink
                    href="/docs/2023/Parama Bara Company Profile (2023).pdf"
                    type="submit"
                    class="relative inline-flex items-center h-10 ml-5 px-4 font-bold tracking-normal transition duration-200 rounded-md text-slate-200 hover:text-yellow-300 ">
                    <span class="text-sm">Download Company Overview</span>
                </ButtonLink>
            </div>
        </div>
    </div>
</div>
