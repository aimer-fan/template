import { defineConfig } from '@aimerfan/eslint-config'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const autoImports = require('./.eslintrc-auto-import.json')

export default defineConfig({
  vue: true,
  overrides: [
    {
      languageOptions: {
        globals: autoImports.globals,
      },
    },
  ],
})
