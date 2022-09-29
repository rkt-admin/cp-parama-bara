// export const prerender = false
// import { getPosts } from '$lib/blog-posts'


/** @type {import('./$types').PageServerLoad} */
// export async function load({ url, params }) {
  
//   let posts = await getPosts({ limit, page, category })
//   // console.log(posts)

//   // if page doesn't exist, direct to page 1
//   if (posts.length == 0 && page > 1) {
//     console.log('redirect::', posts.length, page);
//     return {      
//       redirect: `/blog`,
//       status: 302
//     }
//   }

//   return {
//     posts: JSON.stringify(posts),
//     page,
//     limit,
//     category
//   }
// }