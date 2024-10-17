import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [preact(), tailwind()],
  output: 'server',
  adapter: vercel(),
});