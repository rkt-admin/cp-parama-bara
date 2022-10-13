/** @type {import('./$types').PageLoad} */
export function load({ params, routeId }) {
  // console.log(params.slug);
  // console.log(params.param);
  console.log(routeId);
  return {
    slug: params.slug
  };
}