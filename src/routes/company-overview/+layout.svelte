<script>
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
    <div class="px-[100px] py-20">
        <div>
            <ul>
                <li class="text-5xl font-extrabold">Get to know us</li>
                <div class="mt-20">
                    <li>
                        <a href="/company-overview">History</a>
                    </li>
                    <li>Vision</li>
                    <li>Service</li>
                </div>
            </ul>
        </div>
    </div>
</div>