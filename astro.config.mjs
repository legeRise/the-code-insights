import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://legerise.github.io',
  base: '/the-code-insights',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-default', wrap: true },
  },
});
