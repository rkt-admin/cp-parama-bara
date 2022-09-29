// export const prerender = true
/** @type {import('./$types').PageLoad} */
export function load({ data }) {
    // console.log(data.posts);
    return {
        posts: JSON.parse(data.posts),
        page: data.page,
        limit: data.limit,
        tag: data.tag
    }
}