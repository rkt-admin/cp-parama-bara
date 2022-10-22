/**
 * Dynamically loads the svelte component for the post (only possible in +page.js)
 * and pass on the data from +page.server.js
 *
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ data }) {
  // load the markdown file based on slug
  const post = JSON.parse(data.post);
  // console.log('post#', post);
  const component = post.isIndexFile
    ? // vite requires relative paths and explicit file extensions for dynamic imports
    // see https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
    await import (`../../../../posts/${post.slug}/index.md`)
    : await import(`../../../../posts/${post.slug}.md`)
  // console.log('title#', title);
  // const component = await import(title)

  return {
    post: post,
    component: component.default
  }
}