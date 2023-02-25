<script>
    import Carousel from "../../components/Carousel.svelte";

const slides = [
    {image : '/slide1.png', alt: 'Slide1'},
    {image : '/slide2.png', alt: 'Slide2'},
    {image : '/slide3.png', alt: 'Slide3'},
]
</script>
<Carousel slides={slides} delay={10000}/>