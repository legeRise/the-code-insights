import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ez-clip.ovh',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-default', wrap: true },
  },
});
