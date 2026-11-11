// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The production domain, set by Vercel at build time: the custom domain once
// the project has one, otherwise its vercel.app domain. Local builds point at
// the preview server.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: productionHost ? `https://${productionHost}` : 'http://localhost:4321',
  // Scope with a class, so a parent's scoped styles reach a child component
  // through the `class` prop alone.
  scopedStyleStrategy: 'class',
  // /sitemap-index.xml, listing every page on `site`
  integrations: [sitemap()],
});
