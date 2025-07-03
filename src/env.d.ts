/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly GOOGLE_GENERATIVE_AI_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare namespace App {
	interface SessionData {
		[key: `summary-product:${string}`]: {
			text: string;
			timestamp: string;
		};
	}
}
