import App from './App.vue'

import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import '@/styles/index.less'

import router from './router'

/**
 * create a vue app
 */
function bootstrap () {
  const app = createApp(App)
    .use(router)
    .use(createPinia())

  app.mount('#app')
}

bootstrap()
