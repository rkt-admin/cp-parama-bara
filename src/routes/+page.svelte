<script context="module">
    export const prerender = true
</script>

<script lang="ts">
    import Hero from '../components/Hero.svelte'
    import Divider from '$lib/components/Divider.svelte'
    import WhatWeDo from '../components/HowWeDoIt.svelte'
    import Services from '../components/Services.svelte'
    import TechStack from '../components/TechStack.svelte'
    // import CTA from '../components/CallToAction.svelte'
    import ContactUs from './contact/+page.svelte'
</script>

<Hero />
<WhatWeDo />
<Divider />
<Services />
<Divider />
<TechStack />
<ContactUs />

<!-- <div class="absolute top-0 left-5 -rotate-1 h-full w-[1px] bg-slate-100 -z-20 m-0 p-0">
        &nbsp;
    </div>    
    <div class="absolute top-0 right-5 rotate-1 h-full w-[1px] bg-slate-100 -z-20 m-0 p-0">
        &nbsp;
    </div> -->
