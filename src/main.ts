/*
 * @Author: 邱狮杰
 * @Date: 2023-02-09 21:17:58
 * @LastEditTime: 2023-04-05 17:56:18
 * @Description:
 * @FilePath: /v3-uni-temp/src/main.ts
 */

import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)

  app.use(createPinia())

  return {
    app,
  }
}
