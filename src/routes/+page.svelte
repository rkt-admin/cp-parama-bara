<!-- <script context="module">
    export const prerender = true
</script> -->
<script>
    import Hero from '../components/Hero.svelte'
    import Divider from '$lib/components/Divider.svelte'
    import WhatWeDo from '../components/HowWeDoIt.svelte'
    import Services from '../components/Services.svelte'
    import TechStack from '../components/TechStack.svelte'
    // import CTA from '../components/CallToAction.svelte'
    import ContactUs from './contact/+page.svelte'
    import SectionTransition from '$lib/components/SectionTransition.svelte'
    import Carousel from '../components/Carousel.svelte'

    const slides = [
        { image: '/banner1.png', alt: 'Slide1' },
        { image: '/banner2.png', alt: 'Slide2' },
        { image: '/banner3.png', alt: 'Slide3' }
    ]
</script>

<Carousel {slides} delay={10000} />

<!-- <div class="absolute top-0 left-5 -rotate-1 h-full w-[1px] bg-gray-100 z-50 m-0 p-0">&nbsp;</div>
<div class="absolute top-0 right-5 rotate-1 h-full w-[1px] bg-gray-100 z-50 m-0 p-0">&nbsp;</div> -->
