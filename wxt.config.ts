import { defineConfig } from "wxt";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	srcDir: "src",
	vite: () => ({
		plugins: [
			svelte({
				// Using a svelte.config.js file causes a segmentation fault when importing the file
				configFile: false,
				preprocess: [vitePreprocess()],
			}),
		],
	}),
});
