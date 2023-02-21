<script>
    export let slides = [];
    export let delay = 5000;
    let activeIndex = 0;
    const nextSlide = () => {
        activeIndex = (activeIndex + 1) % slides.length;
    }

    let interval = setInterval(nextSlide, delay);

    const onDestroy = () => clearInterval(interval);
    
</script>

<style>
    @font-face {
    font-family: "PlusJakartaSans-Bold";   /*Can be any text*/
    src: local("PlusJakartaSans-Bold"),
      url("./fonts/PlusJakartaSans-Bold.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-BoldItalic";   /*Can be any text*/
    src: local("PlusJakartaSans-BoldItalic"),
      url("./fonts/PlusJakartaSans-BoldItalic.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-ExtraBold";   /*Can be any text*/
    src: local("PlusJakartaSans-ExtraBold"),
      url("./fonts/PlusJakartaSans-ExtraBold.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-ExtraBoldItalic";   /*Can be any text*/
    src: local("PlusJakartaSans-ExtraBoldItalic"),
      url("./fonts/PlusJakartaSans-ExtraBoldItalic.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-ExtraLight";   /*Can be any text*/
    src: local("PlusJakartaSans-ExtraLight"),
      url("./fonts/PlusJakartaSans-ExtraLight.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-ExtraLight";   /*Can be any text*/
    src: local("PlusJakartaSans-ExtraLight"),
      url("./fonts/PlusJakartaSans-ExtraLight.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-ExtraLightItalic";   /*Can be any text*/
    src: local("PlusJakartaSans-ExtraLightItalic"),
      url("./fonts/PlusJakartaSans-ExtraLightItalic.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-Italic";   /*Can be any text*/
    src: local("PlusJakartaSans-Italic"),
      url("./fonts/PlusJakartaSans-Italic.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-Light";   /*Can be any text*/
    src: local("PlusJakartaSans-Light"),
      url("./fonts/PlusJakartaSans-Light.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-LightItalic";   /*Can be any text*/
    src: local("PlusJakartaSans-LightItalic"),
      url("./fonts/PlusJakartaSans-LightItalic.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-Medium";   /*Can be any text*/
    src: local("PlusJakartaSans-Medium"),
      url("./fonts/PlusJakartaSans-Medium.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-MediumItalic";   /*Can be any text*/
    src: local("PlusJakartaSans-MediumItalic"),
      url("./fonts/PlusJakartaSans-MediumItalic.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-Regular";   /*Can be any text*/
    src: local("PlusJakartaSans-Regular"),
      url("./fonts/PlusJakartaSans-Regular.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-SemiBold";   /*Can be any text*/
    src: local("PlusJakartaSans-SemiBold"),
      url("./fonts/PlusJakartaSans-SemiBold.ttf") format("truetype");
}
@font-face {
    font-family: "PlusJakartaSans-SemiBoldItalic";   /*Can be any text*/
    src: local("PlusJakartaSans-SemiBoldItalic"),
      url("./fonts/PlusJakartaSans-SemiBoldItalic.ttf") format("truetype");
}
</style>

<div id="default-carousel" class="relative" data-carousel="slide">
    <div class="relative h-96 overflow-hidden md:h-[832px]">
        {#each slides as slide, i }
        <div class={`duration-700 ease-in-out ${i === activeIndex ? '' : 'opacity-0'}`} data-carousel-item>
            <img src={slide.image} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-cover" alt={slide.alt}>
        </div>
        {/each}
    </div>
    <div class="absolute md:top-[180px] md:left-[100px] top-10 left-2 z-30 flex items-center justify-center md:max-w-[520px]">
        <div class=" items-center justify-center text-white">
            <h1 class="text-xl leading-8 md:text-5xl md:leading-[60px] font-pjs-extrabold tracking-[0.16px]">Exportation of Branded Thermal Coal of Multi Origins.</h1>
            <p class="text-xs leading-4 md:text-sm mt-4 font-pjs-regular md:leading-6 tracking-[0.16px]">PARAMA BARA INTERCONTINENTAL handle the exportation of branded thermal coal of multi origins, as well as exporting coal and cokes from multi origin to reputable end users in various Asian Countries.</p>
        </div>
    </div>
</div>