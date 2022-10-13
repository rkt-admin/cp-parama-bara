/** @type {import('./$types').PageLoad} */
export async function load({ data, params }) {
    // console.log(params.slug);
    // console.log(params.param);
    // console.log(routeId);
    // console.log(JSON.parse(data.posts);

    const posts = JSON.parse(data.posts);
    let post = posts.find((post) => post.slug === params.slug)
    // console.log(post);
    if (!post) {
        return {
            status: 404,
            error: 'Post not found'
        }
    }
    // const modules = import.meta.glob(`../../../blog/posts/${post.slug}/index.md`)
    // const page = (await match()).default
    let componentTitle = post.isIndexFile
        ? `../../../../blog/posts/${params.slug}/index.md`
        : `../../../../blog/posts/${params.slug}.md`

    const component = await import(componentTitle)

    return {
        post: post,
        component: component.default
    }
}