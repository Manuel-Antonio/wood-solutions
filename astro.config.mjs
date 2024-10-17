import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from '@astrojs/preact';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [preact(), tailwind()],
  output: 'server',
  adapter: netlify(),
});