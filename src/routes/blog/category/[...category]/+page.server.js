// export const prerender = false
import { getPosts } from '$lib/blog-posts'


/** @type {import('./$types').PageServerLoad} */
export async function load({ url, params }) {
  let page = 1
  let limit = 10
  let category = ''
  // let page = url.searchParams.get('page') ? parseInt(url.searchParams.get('page')) : 1
  // let limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')) : 3
  // let tag = url.searchParams.get('tag') ? url.searchParams.get('tag') : ''
  // console.log('paramCate#', params.category);

  let pr = url.toString()
  // console.log(pr);
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
  // console.log('filtered#', limit, page, category);
  console.log("__________", params.category, "______________");
  // page = 1, limit = 10, tag = '', slug = ''
  let posts = await getPosts({ limit: limit, page: page, tag: params.category });

  // posts = posts.filter(post => post.tags.indexOf(params.category) > -1);
  // console.log(posts);

  // let post = posts.filter(post => post.tags.indexOf(params.category) > -1);
  posts.map((p) => {
      console.log(p.slug, p.tags);
  });

  // if page doesn't exist, direct to page 1
  if (posts.length == 0 && page > 1) {
    // console.log('redirect::', posts.length, page);
    return {
      redirect: `/blog`,
      status: 302
    }
  }

  return {
    posts: JSON.stringify(posts),
    page,
    limit,
    category
  }
}