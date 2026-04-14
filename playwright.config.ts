import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    headless: false,  // rodar sem interface
    baseURL: process.env.BASE_URL  // define base URL
  },  

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/
    },
    {
      name: 'no-auth',
      use: {
        ...devices['Desktop Chrome'],
        storageState: undefined
      },
      testMatch: /.*login\.spec\.ts/
    },

    {
      name: 'chromium',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'storage/storageState.json'
      },
      testIgnore: /.*login\.spec\.ts/
    },

    {
      name: 'firefox',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Firefox'],
        storageState: 'storage/storageState.json'
      },
      testIgnore: /.*login\.spec\.ts/
    },

    {
      name: 'webkit',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Safari'],
        storageState: 'storage/storageState.json'
      },
      testIgnore: /.*login\.spec\.ts/
    }
  ],
});
