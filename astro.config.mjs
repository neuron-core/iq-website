// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Scope with a class, so a parent's scoped styles reach a child component
  // through the `class` prop alone.
  scopedStyleStrategy: 'class',
});
