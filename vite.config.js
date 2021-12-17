import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	publicDir: process.env.NODE_ENV === "production" ? "/freshnesecom" : "",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "/src"),
		},
	},
	server: {
		fs: {
			allow: [".."],
		},
	},
});
