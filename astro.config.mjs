import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://arkop.co.il',
  output: 'static',
  integrations: [tailwind()],
});
