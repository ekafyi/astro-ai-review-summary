/// <reference types="vitest" />
import tsconfigPaths from "vite-plugin-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		globals: true, // Use `describe`, `it` (etc) without importing
	},
});
