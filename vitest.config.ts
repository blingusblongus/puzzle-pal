import { getViteConfig } from "astro/config";

export default getViteConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  test: {
    // Your test configuration goes here
    // globals: true,
    environment: "jsdom",
  },
});
