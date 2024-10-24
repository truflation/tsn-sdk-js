// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({

  test: {
    includeSource: ['src/**/*.{js,ts}'], 
    setupFiles: ['disposablestack/auto'],
    maxConcurrency: 1, // Disable concurrency to avoid nonce errors
    fileParallelism: false,
  },
})
