# Astro Server Islands + Gemini API + AI SDK starter template

AI-powered customer reviews analysis with Astro and Gemini API via Vercel’s AI SDK. Modified from [this Next.js template](https://github.com/vercel/ai-review-summary).

> This is a demo of AI generated summaries of customer reviews for an e-commerce storefront. The demo takes a set of customer reviews, and uses an LLM to create summaries of those reviews. It then displays the summary and the reviews in a demo UI.
> <cite>– Original template repo description</cite>

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ekafyi/astro-ai-review-summary/tree/main)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/ekafyi/astro-ai-review-summary/tree/main)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fekafyi%2Fastro-ai-review-summary&env=GOOGLE_GENERATIVE_AI_API_KEY&envDescription=Google%20Gemini%20API%20key%20(free%20tier%20available)&envLink=https%3A%2F%2Faistudio.google.com%2Fapikey)

## Features

Get started quickly with this template; take advantage of Astro and AI SDK’s versatility to meet your project’s needs.

- [Astro](https://docs.astro.build) web framework
   - Optimise performance by keeping pages static (or long-cached) while enabling server-side functionalities in specific [Server Island components](https://docs.astro.build/en/guides/server-islands/).
- [Gemini API](https://ai.google.dev/gemini-api) + [AI SDK](https://ai-sdk.dev/docs)
   - or choose from other AI providers
- React + Tailwind CSS + shadcn-ui
   - or choose from other UI frameworks
- [Vercel](https://vercel.com) hosting platform
   - or choose from other deployment targets
- [Biome](https://biomejs.dev) for linting and formatting

## Installation

1. Clone this repo or run in cloud IDE of your choice

2. Run `mv .env.example .env` and fill it in
   - Get a free Gemini API key: https://aistudio.google.com/apikey

3. Run `npm install` and `npm run dev`

## Deploying

This template uses the [@astrojs/vercel adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/). Steps to deploy:

1. Create a free Vercel account
2. Create a new project and import your repository
3. Paste your `.env` value in the "Deploy" screen

To deploy elsewhere, simply install your preferred adapter, eg. `npx astro add netlify`.

More about Astro adapters: https://docs.astro.build/en/guides/on-demand-rendering/#server-adapters
