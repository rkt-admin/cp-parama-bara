/** @type {import('./$types').PageLoad} */
export function load({ data, params }) {
    // console.log(JSON.parse(data.posts));
    console.log(params.category)
    return {
        posts: JSON.parse(data.posts),
        page: data.page,
        limit: data.limit,
        tag: data.tag
    }
}