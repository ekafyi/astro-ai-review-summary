import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import "dotenv/config";

if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
	throw new Error("GOOGLE_GENERATIVE_AI_API_KEY environment variable is required");
}

type GenerateTextParams = Omit<Parameters<typeof generateText>[0], "model">;
type GoogleModelId = Parameters<typeof google>[0];
type GoogleSettings = Parameters<typeof google>[1];

const DEFAULT_MODEL: GoogleModelId = "gemini-2.5-flash-preview-04-17"; // Type annotation not required, just for autocomplete

// Example of google-specific additional settings
const googleAdditionalSettings: GoogleSettings = {
	safetySettings: [
		{
			category: "HARM_CATEGORY_HARASSMENT",
			threshold: "BLOCK_LOW_AND_ABOVE",
		},
	],
};

export const generateTextWithAI = async (
	options: GenerateTextParams,
	modelName: GoogleModelId = DEFAULT_MODEL,
) => {
	return await generateText({
		...options,
		model: google(`models/${modelName}`, googleAdditionalSettings),
	});
};
