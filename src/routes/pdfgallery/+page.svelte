<script>
        import PdfGallery from "$components/PDFGallery.svelte"
        import pdfData from '../../../static/docs/index.json';
        const dropdownItem = [
            { id: '0', text: 'All' },
            { id: '1', text: '2022' },
            { id: '2', text: '2023' }
        ]
</script>

<PdfGallery pdfData={pdfData} dropdownItem={dropdownItem}/>