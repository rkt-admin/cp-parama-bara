// export const prerender = false
import { getPosts } from '$lib/get-posts'


/** @type {import('./$types').PageServerLoad} */
export async function load({ url, params }) {
  let page = 1
  let limit = 10
  let category = ''
  // let page = url.searchParams.get('page') ? parseInt(url.searchParams.get('page')) : 1
  // let limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')) : 3
  // let tag = url.searchParams.get('tag') ? url.searchParams.get('tag') : ''
  console.log('awal#', limit, page, category);

  let pr = url.toString()
  console.log(pr);
  // const fetchPostsParams = new URLSearchParams()

  try {
    switch (pr.length) {
      case 2:
        switch (pr[0]) {
          case 'page':
            page = parseInt(params.page.split('/').pop())
            // fetchPostsParams.set('page', page.toString())
            break
          case 'tag':
            category = params.page.split('/').pop()
            // fetchPostsParams.set('tag', tag)
            break
          default:
            return {
              redirect: `/blog`,
              status: 302
            }
        }
        break
      case 4:
        switch (pr[0].toString() + '-' + pr[2].toString()) {
          case 'tag-page':
            category = pr[1].toString()
            page = parseInt(pr[3].toString())
            break
          case 'page-tag':
            category = pr[3].toString()
            page = parseInt(pr[1].toString())
            break
          default:
            return {
              redirect: `/blog`,
              status: 302
            }
        }
        // fetchPostsParams.set('tag', tag)
        // fetchPostsParams.set('page', page.toString())
        break
    }

    // fetchPostsParams.set('limit', limit.toString())

    // console.log(`/posts.json?${fetchPostsParams.toString()}`)
  } catch (e) {
    console.error(e)
  }

  // const posts = await fetch(`/blogs?${fetchPostsParams.toString()}`).then((res) => res.json())
  console.log('filtered#', limit, page, category);
  let posts = await getPosts({ limit, page, category })
  // console.log(posts)

  // if page doesn't exist, direct to page 1
  if (posts.length == 0 && page > 1) {
    return {
      redirect: `/blog`,
      status: 302
    }
  }

  return {
    posts: JSON.stringify(),
    page,
    limit,
    category
  }
}