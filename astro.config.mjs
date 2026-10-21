import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sobraz.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/tesekkurler') && !p.includes('/iletisim/hata') })],
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
