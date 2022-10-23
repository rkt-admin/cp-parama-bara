export const RandBGColors = Shuffle(['bg-red-100', 'bg-green-100', 'bg-blue-100', 'bg-yellow-100']);

export function FormatCategories(categories) {
    return categories
        .map(
            (category) =>
                '<a class="text-slate-500 hover:text-slate-700 inline-block py-2 pr-2 leading-none text-center whitespace-nowrap align-baseline"  href="/blog/category/' +
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