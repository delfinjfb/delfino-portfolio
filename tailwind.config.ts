import type {Config} from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1d4ed8",
				secondary: "#9333ea",
				background: "var(--background)",
				foreground: "var(--foreground)"
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"]
			}
		}
	},
	plugins: [typography]
};

export default config;
