// @ts-check
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	image: {
		responsiveStyles: true,
		layout: "constrained",
	},
	integrations: [react()],
	adapter: vercel(),
	session: {
		// driver: "memory",
		driver: "redis",
		options: {
			url: process.env.UPSTASH_STORAGE_REDIS_URL,
		},
	},
});
