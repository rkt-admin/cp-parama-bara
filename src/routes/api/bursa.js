const URL_PREFIX = 'https://apn1-thorough-lemur-32588.upstash.io:32588'
const headers = {
  Authorization:
    'Bearer AX9MASQgYTI0ZmJlNmMtODMxNi00NDY0LWFkYjUtOGE2YzdjZDJhY2ViODkwMzdhNDc0NDFiNDdkYjg2NWIyMjVlMTJhNzc2ZGU=',
  'Content-Type': 'application/json'
}


/** @type {import('../../../.svelte-kit/types/src/routes/services/bursa/data').RequestHandler} */
export async function get({ url: { searchParams } }) {
  const q = searchParams.get('q') ? searchParams.get('q') : undefined  

  // console.log('path: ', URL_PREFIX + '/' + path)
  const res = await fetch(URL_PREFIX + '/' + q, {
    headers
  })
  if (!res.ok) throw new Error(await res.text())
  // return getResponse(res)
  return res
}
export async function post({ request }) {
  const res = await fetch(URL_PREFIX, {
    method: 'POST',
    headers,
    body: JSON.stringify(request)
  })

  if (!res.ok) throw new Error(await res.text())
  // return getResponse(res)
  return res
}
  
  // function getResponse(res) {
  //   return res.headers.get('Content-Type').contains('application/json') ? res.json() : res.text();
  // }  