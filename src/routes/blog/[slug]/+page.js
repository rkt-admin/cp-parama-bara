/** @type {import('./$types').PageLoad} */
export async function load({ data, params, routeId }) {
    console.log(params.slug);
  console.log(params.param);
  console.log(routeId);
    // console.log(JSON.parse(data.posts));
    
    // fetch posts from endpoint so that it includes all metadata (see posts.json.js for explanation)
    const posts = await fetch('/api/posts').then((res) => res.json())
    const post = posts.find((post) => data.slug === post.slug)

    if (!post) {
        return {
            status: 404,
            error: 'Post not found'
        }
    }

    const component = post.isIndexFile
        ? // vite requires relative paths and explicit file extensions for dynamic imports
        await import(`../../../blog/posts/${post.slug}/index.md`)
        : await import(`../../../blog/posts/${post.slug}.md`)

    return {
        ...post,
        component: component.default
    }
}