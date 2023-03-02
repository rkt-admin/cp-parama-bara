<script>
    import { page } from '$app/stores'
    export let delay = 5000
    let activeIndex = 0
    const nextSlide = () => {
        activeIndex = (activeIndex + 1) % slides.length
    }
    let interval = setInterval(nextSlide, delay)
    const onDestroy = () => clearInterval(interval)

    const slides = [
        { image: '/slide1.png', alt: 'Slide1' },
        { image: '/slide2.png', alt: 'Slide2' },
        { image: '/slide3.png', alt: 'Slide3' }
    ]
</script>

<div>
    <h2
        class="absolute text-yellow-400 px-4 md:px-[100px] z-50 pt-5 mt-[180px] border-b-4 md:border-b-8 border-yellow-400 text-3xl md:text-5xl font-extrabold w-full md:w-fit"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200">
        Get to know us
    </h2>
    <div id="default-carousel" class="relative" data-carousel="slide">
        <div class="relative h-60 overflow-hidden md:h-64">
            {#each slides as slide, i}
                <div
                    class={`duration-700 ease-in-out ${i === activeIndex ? '' : 'opacity-0'}`}
                    data-carousel-item>
                    <img
                        src={slide.image}
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-cover"
                        alt={slide.alt} />
                </div>
            {/each}
        </div>
    </div>
    <div class="md:px-[100px] px-5 my-6 md:my-16 flex md:flex-row flex-col">
        <div class="md:w-1/5 md:mr-[60px]">
            <div class="grid grid-cols-3 grid-rows-none md:grid-cols-none md:grid-rows-3 md:gap-6 ">
                <a
                    href="/company"
                    class="border-b-2 pb-2 md:border-0 md:pb-0 text-center md:text-left hover:text-black {$page.url.pathname === '/company'
                        ? 'font-bold text-black text-xl md:text-2xl border-black'
                        : 'font-semibold text-gray-300 text-xl border-transparent'}">History</a>
                <a
                    href="/company/vision"
                    class="border-b-2 pb-2 md:border-0 md:pb-0 text-center md:text-left hover:text-black {$page.url.pathname === '/company/vision'
                        ? 'font-bold text-black text-xl md:text-2xl border-black'
                        : 'font-semibold text-gray-300 text-xl border-transparent'}">Vision</a>
                <a
                    href="/company/service"
                    class="border-b-2 pb-2 md:border-0 md:pb-0 text-center md:text-left hover:text-black {$page.url.pathname === '/company/service'
                        ? 'font-bold text-black text-xl md:text-2xl border-black'
                        : 'font-semibold text-gray-300 text-xl border-transparent'}">Service</a>
            </div>
        </div>
        <div class="md:w-4/5 py-4 md:border-0 mt-2 md:mt-0 md:py-0">
            <slot />
        </div>
    </div>
</div>
