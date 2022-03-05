// import { auth, get } from '@upstash/redis'
// auth(
//   'https://global-excited-reindeer-32086.upstash.io',
//   'AX1WASQgYTEwZTY5ZTktMzUzNi00M2JmLThjMzQtYWJmYjYwNmM2YWM2MmQ2Mzk1Njk4Y2VkNGIzYWFjY2Q1MWVhYzMzMmFlNTE='
// )
const URL_PREFIX = 'https://apn1-thorough-lemur-32588.upstash.io:32588'
const headers = {
  'Authorization':
        'Bearer AX9MASQgYTI0ZmJlNmMtODMxNi00NDY0LWFkYjUtOGE2YzdjZDJhY2ViODkwMzdhNDc0NDFiNDdkYjg2NWIyMjVlMTJhNzc2ZGU=',
  'Content-Type': 'application/json'
};

export async function getJson(path) {
  fetch(URL_PREFIX+path, {
    headers
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
}

export async function postJson(body) {
  const res = await fetch(URL_PREFIX, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(await res.text());
  return getResponse(res);
}

function getResponse(res) {
  const contentType = res.headers.get('Content-Type');
  return contentType === 'application/json' ? res.json() : res.text();
}