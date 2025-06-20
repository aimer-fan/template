/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import autoImport from 'unplugin-auto-import/vite'
import autoComponents from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { fileURLToPath } from 'node:url'


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, fileURLToPath(new URL('.', import.meta.url))) as ImportMetaEnv

  return {
    base: env.VITE_BASE_URL,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
    plugins: [
      vue(),
      unocss(),
      autoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dirs: ['src/stores', 'src/composables', 'src/apis'],
        dts: true,
        eslintrc: { enabled: true },
      }),
      autoComponents({
        dirs: ['src/components'],
        directoryAsNamespace: false,
        dts: true,
      }),
    ],
    test: {
      environment: 'happy-dom',
      globals: true,
      coverage: {
        provider: 'v8',
        enabled: true,
        include: [
          'src/components/**',
        ],
      },
    },
  }
})
