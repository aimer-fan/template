import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import autoComponents from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['src/stores', 'src/composables', 'src/apis'],
      dts: true,
      eslintrc: { enabled: true },
    }),
    autoComponents({
      dts: true,
      dirs: ['src/components'],
      directoryAsNamespace: false,
    }),
  ],
})
