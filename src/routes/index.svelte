<script context="module">
    export const prerender = true
</script>

<script lang="ts">
    import Hero from '../components/Hero.svelte'
    import Divider from '$lib/components/Divider.svelte'
    import WhatWeDo from '../components/WhatWeDo.svelte'
    import FeatureGrid from '../components/Services.svelte'
    import TechStack from '../components/TechStack.svelte'
    // import CTA from '../components/CallToAction.svelte'
    import ContactUs from './contact-us.svelte'
</script>

<div class="flex flex-col flex-grow ">
    <Hero />
    <Divider />
    <WhatWeDo />
    <Divider />
    <FeatureGrid />
    <Divider />
    <TechStack />
    <Divider />
    <ContactUs />
    <Divider border={true} size='large' />
    <div class="absolute top-0 left-5 -rotate-1 h-full w-[1px] bg-slate-200 z-20 m-0 p-0">
        &nbsp;
    </div>    
    <div class="absolute top-0 right-5 rotate-1 h-full w-[1px] bg-slate-200 z-20 m-0 p-0">
        &nbsp;
    </div>
</div>
