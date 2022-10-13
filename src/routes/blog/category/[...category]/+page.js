// export const prerender = true
/** @type {import('./$types').PageLoad} */
export function load({ data }) {
    // console.log("__________",params.category,"______________");
    // let post = JSON.parse(data.posts).filter(post => post.tags.indexOf(params.category) > -1);
    // post.map((p) => {
    //     console.log(p.slug, p.tags);
    // });
    return {
        posts: JSON.parse(data.posts),
        page: data.page,
        limit: data.limit,
        tag: data.tag
    }
}