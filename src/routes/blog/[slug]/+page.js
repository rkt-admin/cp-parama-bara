/** @type {import('./$types').PageLoad} */
export function load({ data }) {
    // console.log(JSON.parse(data.posts));
    return {
        posts: JSON.parse(data.posts),
        page: data.page,
        limit: data.limit,
        tag: data.tag
    }
}