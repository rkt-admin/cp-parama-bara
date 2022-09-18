import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
/** @type {import('vite').UserConfig} */
const config: UserConfig =  {
  plugins: [sveltekit()],
  // allows vite access to ./posts
  server: {
    fs: {
      allow: ['./']
    }
  },
  resolve: {
    
  }
};

export default config;