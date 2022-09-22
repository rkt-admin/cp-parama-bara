/** @type {import('./$types').PageLoad} */
export function load({ data, params, routeId }) {
  console.log(params.slug);
  console.log(params.param);
  console.log(routeId);
  return {
    b: data.a * 2
  };
}