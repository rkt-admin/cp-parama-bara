<script>
    import tippy from 'tippy.js'
    import 'tippy.js/dist/tippy.css'
    import 'tippy.js/themes/light.css'
    import { onMount } from 'svelte'

    onMount(() => {
        tippy('.tippy', {
            content: (reference) => {
            const title = reference.getAttribute('title')
            const parser = new DOMParser();
        const fragment = parser.parseFromString(`<div class="flex flex-col items-center p-2"><img src="/logo.svg"/ width="32px" height="32px"><p>${title}</p></div>`, 'text/html');
        return fragment.body.firstChild;
            },
            theme: 'light',
            size: 'small',
            arrow: true,
        })
    })
    const data = [
        { name: 'vietnam', title: 'Vietnam', top:'46%', left:'73.5%'},
        { name: 'china', title: 'China', top:'29%', left:'68%'},
        { name: 'bangladesh', title: 'Bangladesh', top:'38.4%', left:'67%'},
        { name: 'india', title: 'India', top:'38.4%', left:'63.8%'},
        { name: 'filipina', title: 'Filipina', top:'48%', left:'78%'},
        { name: 'swedia', title: 'Swedia', top:'13%', left:'43%'},
    ]
</script>

<div class="flex items-center justify-center h-full bg-[#f0f0f0] mt-14">
    <div class="relative inline-block px-14 py-3">
        <img
            src="http://res.cloudinary.com/slzr/image/upload/v1500321012/world-map-1500_vvekl5.png"
            alt="map"
            class="w-full" />
        {#each data as map}
            <div class={`point tippy ${map.name}`} style={`top:${map.top}; left:${map.left};`} title={map.title}/>
        {/each}
    </div>
</div>

<style>
    .point {
        cursor: pointer;
        position: absolute;
        width: 1rem;
        height: 1rem;
        background-color: #00acc1;
        border-radius: 50%;
        transition: all 0.3s ease;
        will-change: transform, box-shadow;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 0 rgba(#00acc1, 0.4);
        animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 172, 193, 0.5);
        }
        70% {
            box-shadow: 0 0 0 25px rgba(0, 172, 193, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(0, 172, 193, 0);
        }
    }
    .point:hover {
        animation: none;
        transform: translate(-50%, -50%) scale3D(1.35, 1.35, 1);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
</style>