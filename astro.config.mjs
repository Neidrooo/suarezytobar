import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://suarezytobar.cl',
  integrations: [
    sitemap({
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CL',
        },
      },
      serialize(item) {
        // Homepage - máxima prioridad
        if (item.url === 'https://suarezytobar.cl/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Páginas legales - baja prioridad, rara vez cambian
        else if (item.url.includes('/privacidad') || item.url.includes('/terminos')) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        // Otras páginas principales
        else {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
});