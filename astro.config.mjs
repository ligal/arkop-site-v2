import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ligal.github.io',
  base: '/arkop-site-v2',
  output: 'static',
  integrations: [tailwind()],
});
