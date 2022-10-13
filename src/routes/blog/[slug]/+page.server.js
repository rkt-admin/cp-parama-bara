// export const prerender = false
import { getPosts } from '$lib/blog-posts'


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let posts = await getPosts({ slug: params.slug})  

  // if page doesn't exist, direct to page 1
  if (posts.length == 0) {
    return {
      redirect: `/blog`,
      status: 302
    }
  }

  return {
    posts: JSON.stringify(posts)
  }
}