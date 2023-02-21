<script>
    import 'carbon-components-svelte/css/g80.css'
    import { Dropdown } from 'carbon-components-svelte'
    export let pdfData = [];
    export let dropdownItem = []
    let selectedYear = 'All'
    let filteredData = pdfData 
    function handleChange(event) {
        selectedYear = event.detail.selectedItem.text
        filteredData = selectedYear == 'All' ? pdfData : pdfData.filter((item) => item.year == selectedYear)
    }
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
:global(.bx--list-box__menu-item, .bx--list-box__menu-item__option) {
        height: auto;
    }
</style>

<div class="flex px-4 md:px-[100px] py-2 md:py-4 flex-col">
    <Dropdown
        size="sm"
        selectedId="0"
        items={dropdownItem}
        let:item
        let:index
        on:select={handleChange}
        class="md:w-32">
        <div>
            <strong>{item.text}</strong>
        </div>
    </Dropdown>
    <div class="flex flex-col lg:grid grid-cols-2 gap-4">
        {#each filteredData as pdf}
            <div class="mt-8 flex md:flex-row flex-col">
                    <iframe src={pdf.path} title={pdf.title} class="md:w-96 md:h-64"/>
                <div class="md:px-6 flex-col flex mt-4">
                    <h1 class="font-pjs-bold text-xl text-black">{pdf.title}</h1>
                    <p class="font-pjs-medium text-sm text-gray-600">{pdf.date}</p>
                    <a href={pdf.path} download={pdf.title} class="cursor-pointer bg-gray-700 hover:bg-gray-800 hover:text-white text-white p-2 mt-4 font-pjs-semibold">Download PDF</a>
                </div>
            </div>
        {/each}
    </div>
</div>

