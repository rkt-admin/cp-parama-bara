<script>
    import Carousel from "../../components/Carousel.svelte";

    const slides = [
        {image : '/banner1.png', alt: 'Slide1'},
        {image : '/banner2.png', alt: 'Slide2'},
        {image : '/banner3.png', alt: 'Slide3'},
    ]
</script>

<Carousel slides={slides} delay={10000}/>
