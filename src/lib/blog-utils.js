export function FormatCategories(categories) {
    return categories
        .map(
            (category) =>
                '<a class="inline-block py-2 pr-2 leading-none text-center whitespace-nowrap align-baseline font-medium text-sm tracking-widest"  href="/blog/category/' +
                category +
                '">' +
                category +
                '</a>'
        )
        .join(' ')
}

export function Shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
  }