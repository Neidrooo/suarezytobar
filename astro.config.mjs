import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://www.suarezytobar.cl',
	output: 'hybrid',
	integrations: [
		sitemap({
			changefreq: 'weekly',
			priority: 1.0,
			lastmod: new Date(),
			i18n: {
				defaultLocale: 'es',
				locales: {
					es: 'es-CL',
				},
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