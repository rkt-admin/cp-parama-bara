import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    mdsvex(mdsvexConfig),
    preprocess({
      postcss: true
    })
  ],

  kit: {
    // target: '#svelte',
    adapter: adapter({
      pages: 'public',
      assets: 'static'
    }),

    // if you are not using the static adapter and
    // you don't want prerendering, remove this section
    // prerender: {
    //   entries: ['*', '/sitemap.xml', '/rss.xml']
    // },
  }
}

export default config
