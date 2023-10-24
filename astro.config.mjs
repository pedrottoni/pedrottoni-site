import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "static",
  build: {
    client: './client'
  }
  //output: "server",
  //adapter: vercel()
});