import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true
  }), preact()]
});