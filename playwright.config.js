import { defineConfig } from "@playwright/test";
import { browserOptions } from "./scripts/test-browser.js";
export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  fullyParallel: true,
  use: {
    baseURL: process.env.TEST_BASE_URL || "http://127.0.0.1:5173",
    launchOptions: await browserOptions(),
    headless: true,
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 1000 } } },
    {
      name: "mobile",
      use: {
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer: process.env.TEST_BASE_URL
    ? undefined
    : {
        command: "npm run dev",
        url: "http://127.0.0.1:5173",
        reuseExistingServer: true,
      },
  reporter: "list",
});
