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
        const fragment = parser.parseFromString(`<div class="flex flex-col items-center p-1 bg-white"><img src="/logo.svg"/ width="32px" height="32px"><p>${title}</p></div>`, 'text/html');
        return fragment.body.firstChild;
            },
            theme: 'light',
            arrow: true,
        })
    })
    const data = [
        { name: 'vietnam', title: 'Vietnam', top:'49%', left:'76.5%'},
        { name: 'china', title: 'China', top:'29%', left:'70%'},
        { name: 'bangladesh', title: 'Bangladesh', top:'42%', left:'71%'},
        { name: 'india', title: 'India', top:'43%', left:'67.8%'},
        { name: 'filipina', title: 'Filipina', top:'49%', left:'80.5%'},
        { name: 'swedia', title: 'Swedia', top:'15%', left:'49%'},
    ]
</script>
<div
class="
absolute
z-[-1]
w-full
h-1/4
bg-gray-900
top-0
left-0
" />
<div class="flex items-center justify-center mt-20 bg-gray-900">
    <div class="relative inline-block px-14 py-3 z-0">
        <img
            src="/images/world-map.svg"
            alt="map"
            class="w-full mx-auto" />
        {#each data as map}
            <div class={`point tippy ${map.name}`} style={`top:${map.top}; left:${map.left};`} title={map.title}/>
        {/each}
    </div>
</div>

<style lang="postcss">
    .point {
        cursor: pointer;
        position: absolute;
        @apply bg-yellow-400 w-3 h-3;
        border-radius: 50%;
        transition: all 0.3s ease;
        will-change: transform, box-shadow;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 0 rgba(#00acc1, 0.4);
        animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(255, 238, 0, 0.322);
        }
        70% {
            box-shadow: 0 0 0 8px rgba(255, 251, 149, 0.203);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(251, 255, 2, 0.221);
        }
    }
    .point:hover {
        animation: none;
        transform: translate(-50%, -50%) scale3D(1.35, 1.35, 1);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
</style>