import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
/** @type {import('vite').UserConfig} */
const config: UserConfig =  {
  logLevel: 'info',
  plugins: [sveltekit()],
  // allows vite access to ./posts
  server: {
    fs: {
      allow: ['./'],
      strict: false
    }
  },
  resolve: {
    
  }
};

export default config;