<script>
    import tippy from 'tippy.js'
    import 'tippy.js/dist/tippy.css'
    import 'tippy.js/themes/light.css'
    import { onMount } from 'svelte'

    onMount(() => {
        tippy('.tippy', {
            content: (reference) => {
                const title = reference.getAttribute('title')
                const parser = new DOMParser()
                const fragment = parser.parseFromString(
                    `<div class="flex flex-col items-center p-1 bg-white"><img src="/logo.svg"/ width="32px" height="32px"><p class="mt-2">${title}</p></div>`,
                    'text/html'
                )
                return fragment.body.firstChild
            },
            theme: 'light',
            arrow: true
        })
    })
    const data = [
        { name: 'vietnam', title: 'Vietnam', top: '48%', left: '75.9%', delay: '1000' },
        { name: 'china', title: 'China', top: '28%', left: '69.6%', delay: '3000' },
        { name: 'bangladesh', title: 'Bangladesh', top: '41%', left: '70.6%', delay: '2000' },
        { name: 'india', title: 'India', top: '42%', left: '67.3%', delay: '2000' },
        { name: 'filipina', title: 'Filipina', top: '48%', left: '80%', delay: '1000' },
        { name: 'swedia', title: 'Swedia', top: '14%', left: '48.5%', delay: '2000' },
        { name: 'sulawesi', title: 'Sulawesi', top: '58.6%', left: '79.7%', delay: '500' },
        { name: 'jawa', title: 'Jawa', top: '62%', left: '77%', delay: '1000' }
    ]
</script>

<div class="absolute z-[-1] w-full h-1/4 bg-gray-700 top-0 left-0"/>
<div class="flex items-center justify-center mt-20 bg-gray-700">
    <!-- <div class="absolute top-14 z-50 w-screen">
            <marquee class="text-white font-bold">From Parama Resources to the world</marquee>
        </div> -->
    <div class="relative inline-block px-2 my-28 md:my-0 md:px-14 md:py-3 z-0">
        <img
            src="/images/world-map-white.svg"
            alt="map"
            class="w-full mx-auto"
            data-aos="zoom-in"
            data-aos-duration="1000" />
        {#each data as map}
            <div
                class={`point tippy ml-1 md:ml-0 bg-yellow-400 w-2 h-2 md:h-3 md:w-3 ${map.name}`}
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="{map.delay}"
                style={`top:${map.top}; left:${map.left};`}
                title={map.title} />
        {/each}
    </div>
</div>

<style lang="postcss">
    .point {
        cursor: pointer;
        position: absolute;
        border-radius: 100%;
        transition: all 0.3s ease;
        will-change: transform, box-shadow;
        /* transform: translate(-50%, -50%); */
        box-shadow: 0 0 0 rgba(#facc14, 0.4);
        animation: pulse 3s ease-in-out infinite;
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(250, 204, 20, 0.5);
        }
        70% {
            box-shadow: 0 0 0 15px rgba(250, 204, 20, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(250, 204, 20, 0);
        }
    }
    .point:hover {
        animation: none;
        transform: translate(-50%, -50%) scale3D(1.35, 1.35, 1);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
</style>
