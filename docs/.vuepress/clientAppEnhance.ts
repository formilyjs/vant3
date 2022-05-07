import { defineClientAppEnhance } from '@vuepress/client'
import Vant from 'vant'
import '@formily/vant3/style.ts'

import DumiPreviewer from './components/dumi-previewer.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('dumi-previewer', DumiPreviewer)
  app.use(Vant)
})
