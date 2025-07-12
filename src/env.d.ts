/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly GOOGLE_GENERATIVE_AI_API_KEY: string;
	readonly UPSTASH_KV_REST_API_URL: string;
	readonly UPSTASH_KV_REST_API_TOKEN: string;
	readonly UMAMI_WEBSITE_ID?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
