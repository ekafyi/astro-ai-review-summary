# Astro Server Islands + Gemini API + AI SDK starter template

AI-powered customer reviews analysis with Astro and Gemini API via Vercel’s AI SDK. Modified from [this Next.js template](https://github.com/vercel/ai-review-summary), described as follows.

> This is a demo of AI generated summaries of customer reviews for an e-commerce storefront. The demo takes a set of customer reviews, and uses an LLM to create summaries of those reviews. It then displays the summary and the reviews in a demo UI.

## Prerequisites

- Node v18.20.8 or v20.3.0, v22.0.0 or higher
- Gemini API key – [get free here](https://aistudio.google.com/apikey)
- Upstash Redis DB – [get free here](https://upstash.com)

## Quick Start

```
npm create astro@latest my-astro-project -- --template ekafyi/astro-ai-review-summary
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/ekafyi/astro-ai-review-summary/tree/main)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/ekafyi/astro-ai-review-summary/tree/main)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fekafyi%2Fastro-ai-review-summary&env=GOOGLE_GENERATIVE_AI_API_KEY&envDescription=Google%20Gemini%20API%20key%20(free%20tier%20available)&envLink=https%3A%2F%2Faistudio.google.com%2Fapikey)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ekafyi/astro-ai-review-summary?devcontainer_path=.devcontainer/blog/devcontainer.json)

1. Clone this repo / use as template / open in cloud IDE above
2. Run `mv .env.example .env` and fill in the credentials
3. Run `npm install` and `npm run dev` (or your preferred package manager)

## Features

<img width="1411" height="443" alt="100 Lighthouse performance score" src="https://github.com/user-attachments/assets/8630e350-54f7-4d13-9ab6-039b86b9874e" />
&nbsp;

- [Astro](https://docs.astro.build/) web framework
   - Performant by default
   - [Server Islands](https://docs.astro.build/en/guides/server-islands/) for enabling server-side functionalities by component. Keep rest of page static or long-cached for optimal performance.
   - [Adapters](https://docs.astro.build/en/guides/on-demand-rendering/#server-adapters) for deploy target. Deploy to Vercel (default), Netlify, Cloudflare, Node.js, and more.
   - [`Image` component](https://docs.astro.build/en/guides/images/#astro-components-for-images) for image transformation
- [AI SDK](https://ai-sdk.dev/docs)
   - Unified API for interfacing with LLMs from various providers. Supports Google (default), OpenAI, Anthropic, and more.
- [React](https://react.dev/) + [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) for UI components
- [Upstash Redis](https://upstash.com) for data persistence
- Basic must-haves
   - Semantic markup and ARIA attributes for accessibility
   - [Vitest](https://vitest.dev/) for unit testing
   - [Biome](https://biomejs.dev) for linting & formatting

## Project Structure

```
public  # unprocessed static files
src     # details below
├── assets
├── components
│   ├── astro
│   └── ui
├── layouts
├── lib
├── pages
└── styles
```

#### `src/assets`

Image files to be processed by Astro Image component

#### `src/components`

- `/`
   - React UI components
- `/astro` 
   - [Astro Server Island components]((https://docs.astro.build/en/guides/server-islands/))
   - [Astro Image component](https://docs.astro.build/en/guides/images/#astro-components-for-images)
   - Sitewide footer and header
- `/ui`
   - (Auto generated) shadcn/ui components

#### `src/layouts`

Sitewide [layout component](https://docs.astro.build/en/basics/layouts/)

#### `src/lib`

- `ai-summarizer.ts` – text generation with AI SDK
- `fake-api.ts`, `fake-logger.ts` – self-explanatory :)
- `redis.ts` – instantiate storage
- `sample-data.ts` – products and reviews data model
- `utils.ts` – (Auto generated) shadcn/ui CSS class helper

#### `src/pages`

Astro [page components](https://docs.astro.build/en/basics/astro-pages/)

- `index.astro`
   - show list of products
- `products/[productId].astro`
   - show a product
   - show reviews of given product
   - show summary of reviews of given product
      - get summary from storage if exists
      - generate with AI if it does not exist, then write to storage

#### `src/styles`

CSS file

## Deploying

This template uses the [@astrojs/vercel adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/). Steps to deploy:

1. Create a free Vercel account
2. Create a new project and import your repository
3. Paste your `.env` value in the "Deploy" screen

To deploy elsewhere, install your preferred adapter, eg. `npx astro add netlify`.

Docs: https://docs.astro.build/en/guides/on-demand-rendering/#server-adapters

## Customising

### LLM provider

Use another provider:

```diff
// src/lib/ai-summarizer.ts
- import { google } from "@ai-sdk/google";
+ import { openai } from "@ai-sdk/openai";
```

Docs: https://ai-sdk.dev/providers/ai-sdk-providers

### Frontend frameworks

Add an Astro frontend framework integration:

```
pnpm astro add svelte
```

You can use multiple framework integrations together – eg. React and Svelte.

You can use regular HTML markup and vanilla JS in Astro components.

Docs: 
- https://docs.astro.build/en/guides/framework-components
- https://docs.astro.build/en/basics/astro-components/

### Styling

Vanilla CSS is supported by default. Edit in `src/styles/global.css`.

Docs: https://docs.astro.build/en/guides/styling/

#### Don’t want to use Tailwind and/or shadcn/ui?

Remove Tailwind:

1. Run `pnpm remove tailwindcss @tailwindcss/vite` 
2. Remove imports from `src/styles/global.css`

Remove shadcn/ui: (this repo only uses the `Avatar` component)

1. Remove files: `rm components.json src/lib/utils.ts`
2. Remove dir: `rm -rf src/components/ui`
3. Remove supporting libraries: `pnpm remove tailwind-merge @radix-ui/react-avatar`

