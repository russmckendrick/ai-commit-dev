// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://ai-commit.dev',
  output: 'static',
  adapter: cloudflare(),
  integrations: [mermaid({ theme: 'dark', autoTheme: false }), sitemap(), react()],
  markdown: {
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['react-icons/si', 'react-icons/vsc', 'react-icons/lu'],
    },
  },
});
