import { Redis } from "@upstash/redis";
import "dotenv/config";

if (!process.env.UPSTASH_KV_REST_API_URL || !process.env.UPSTASH_KV_REST_API_TOKEN) {
	throw new Error(
		"UPSTASH_KV_REST_API_URL and UPSTASH_KV_REST_API_TOKEN environment variables are required",
	);
}

export const redis = new Redis({
	url: process.env.UPSTASH_KV_REST_API_URL,
	token: process.env.UPSTASH_KV_REST_API_TOKEN,
});
