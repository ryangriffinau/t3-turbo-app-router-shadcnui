import type { Config } from "tailwindcss";

import baseConfig from "@askthem/tailwind-config";

export default {
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/**/*.{js,ts,jsx,tsx}"],
  presets: [baseConfig],
} satisfies Config;
