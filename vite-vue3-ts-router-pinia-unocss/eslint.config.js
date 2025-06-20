import { defineConfig, globals } from '@aimerfan/eslint-config'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const eslintAutoImport = require('./.eslintrc-auto-import.json')

export default defineConfig({
  overrides: [
    {
      files: [globals.GLOB_TS],
      rules: { 'no-undef': 'off', '@stylistic/spaced-comment': 'off' },
    },
    {
      files: globals.GLOB_ALL,
      languageOptions: { globals: eslintAutoImport.globals },
    },
  ],
})
