import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import "dotenv/config";
import type { Review } from "./sample-data";

export const getAverageRating = (reviews: Review[]) => {
	return reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length;
};

export const summarizeReviews = async (productName: string, reviews: Review[]) => {
	if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
		throw new Error("GOOGLE_GENERATIVE_AI_API_KEY environment variable is required");
	}

	// Move dynamic content (product name) to end of prompt to optimise implicit caching.
	// See: https://ai-sdk.dev/providers/ai-sdk-providers/google-generative-ai#cached-content
	const baseContext = `You are an assistant that summarizes product reviews.
Your goal is to highlight the most common themes and sentiments expressed by customers.
If multiple themes are present, try to capture the most important ones.
If no patterns emerge but there is a shared sentiment, capture that instead.
Try to use natural language and keep the summary concise.
Use a maximum of 4 sentences and 30 words.
Don't include any word count or character count.
No need to reference which reviews you're summarizing.
Do not reference the star rating in the summary.

Start the summary with "Customers like…" or "Customers mention…"

Here are 3 examples of a good summary:
Example 1: Customers like the quality, space, fit and value of the sport equipment bag case. They mention it's heavy duty, has lots of space and pockets, and can fit all their gear. They also appreciate the portability and appearance. That said, some disagree on the zipper.
Example 2: Customers like the quality, ease of installation, and value of the transport rack. They mention that it holds on to everything really well, and is reliable. Some complain about the wind noise, saying it makes a whistling noise at high speeds. Opinions are mixed on fit, and performance.
Example 3: Customers like the quality and value of the body deodorant. They say it works great and provides freshness for a long time after application. Some customers have different opinions on smell and durability.

Hit the following tone based on rating:
- 1-2 stars: negative
- 3 stars: neutral
- 4-5 stars: positive
`;

	const prompt = `${baseContext}
Write a summary of the reviews for the ${productName} product.
Its average rating is ${getAverageRating(reviews)} out of 5 stars.
The customer reviews to summarize are as follows:
${reviews.map((review) => `id: ${review.id}\ncontent: ${review.review}`).join("\n\n")}`;

	const res = await generateText({
		model: google("models/gemini-2.5-flash", {
			safetySettings: [
				{
					category: "HARM_CATEGORY_HARASSMENT",
					threshold: "BLOCK_LOW_AND_ABOVE",
				},
			],
		}),
		prompt,
		// ⬇️ Values from vercel example
		maxTokens: 1200,
		temperature: 0.75,
		topP: 1,
		// frequencyPenalty: 1, // Not enabled for gemini-2.5-flash
	});

	return res;
};
