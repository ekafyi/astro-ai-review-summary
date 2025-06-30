# Astro Server Islands + Gemini API + AI SDK starter template

AI-powered product reviews analysis with Astro and Gemini API via Vercel’s AI SDK. Modified from [Vercel’s Next.js template](https://github.com/vercel/ai-review-summary).

> This is a demo of AI generated summaries of customer reviews for an e-commerce storefront. The demo takes a set of customer reviews, and uses an LLM to create summaries of those reviews. It then displays the summary and the reviews in a demo UI.
> <cite>– Original template repo description</cite>

## Features

Get started quickly with this template; take advantage of Astro and AI SDK’s versatility to customise with your preferred services and stack 🚀.

- [Astro](https://docs.astro.build) web framework
   - Optimise performance by keeping pages static (or long-cached) but enabling server-side functionalities in specific [Server Island components](https://docs.astro.build/en/guides/server-islands/). This video breaks down how it works: [Server Islands are really cool](https://www.youtube.com/watch?v=uBxehYwQox4).
- [Gemini API](https://ai.google.dev/gemini-api) + [AI SDK](https://ai-sdk.dev/docs)
   - or choose from other AI providers
- React + Tailwind CSS + shadcn-ui
   - or choose from other UI frameworks
- Vercel hosting platform
   - or choose from other deployment targets

## Installation

1. Clone this repo, _or_ [use as template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template), _or_ open in cloud IDE:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ekafyi/astro-ai-review-summary/tree/main)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/ekafyi/astro-ai-review-summary/tree/main)

2. Run `mv .env.example .env` and fill it in
   - Get a free Gemini API key: https://aistudio.google.com/apikey

3. Run `npm install` and `npm run dev`

## Deploying

This template uses the [Vercel](https://vercel.com) adapter. Steps to deploy:

1. Create a free Vercel account
2. Create a new project and import your repository
3. Paste your `.env` value in the "Deploy" screen

To deploy elsewhere, simply install your preferred adapter, eg. `npx astro add netlify`.

More about Astro adapters: https://docs.astro.build/en/guides/on-demand-rendering/#server-adapters
