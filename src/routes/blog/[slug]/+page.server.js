// export const prerender = false
import { posts } from '$lib/blog-posts'


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { slug } = params
// console.log('slug#', slug);
  // get post with metadata
  const post = posts.find((post) => slug === post.slug)
  // console.log('post#', post);
  // if page doesn't exist, direct to page 1
  if (post.length == 0) {
    return {
      redirect: `/blog`,
      status: 302
    }
  }

  return {
    post: JSON.stringify(post)
  }
}