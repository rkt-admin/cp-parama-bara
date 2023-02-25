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
    {image : '/slide1.png', alt: 'Slide1'},
    {image : '/slide2.png', alt: 'Slide2'},
    {image : '/slide3.png', alt: 'Slide3'},
]
</script>
<div>
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
    <div class="px-[100px] py-20 flex flex-row">
        <div class="w-1/5 mr-[60px]">
                <h2 class="text-5xl font-extrabold">Get to know us</h2>
                <div class="mt-20 grid grid-rows-3 gap-6 ">
                        <a href="/company" class="hover:text-black {$page.url.pathname === '/company' ? 'font-bold text-black text-2xl' : 'font-semibold text-gray-300 text-[20px]'}">History</a>
                        <a href="/company/vision" class="hover:text-black {$page.url.pathname === '/company/vision'? 'font-bold text-black text-2xl' : 'font-semibold text-gray-300 text-[20px]'}">Vision</a>
                        <a href="/company/service" class="hover:text-black {$page.url.pathname === '/company/service' ? 'font-bold text-black text-2xl' : 'font-semibold text-gray-300 text-[20px]'}">Service</a>
                </div>
        </div>
        <div class="w-4/5">
            <slot/>
        </div>
    </div>
</div>