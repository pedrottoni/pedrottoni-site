import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // Enable Vue to support Vue components.
  integrations: [vue(), sitemap(), compress()],
  output: "server",
  adapter: vercel()
});