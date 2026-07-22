// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: reemplazar por el dominio real de producción (necesario para OG, canonical y sitemap).
  site: "https://velaza.co",
  integrations: [sitemap()],
});
