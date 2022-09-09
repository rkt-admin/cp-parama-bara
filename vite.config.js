// import { sveltekit } from '@sveltejs/kit/vite';
// import { kitDocsPlugin } from '@svelteness/kit-docs/node';
// import Icons from 'unplugin-icons/vite';
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	// allows vite access to ./posts
    server: {
        fs: {
          allow: ['./']
        }
      },
      resolve: {
        alias: {
          // $i18n: path.resolve('./src/i18n'),
          $lib: path.resolve('./src/lib'),
          $components: path.resolve('./src/components')
        }
      }
};

export default config;