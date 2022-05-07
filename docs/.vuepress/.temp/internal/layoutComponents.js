import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/liyao/frontend/code/vant3/node_modules/vuepress-theme-dumi/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/liyao/frontend/code/vant3/node_modules/vuepress-theme-dumi/lib/client/layouts/Layout.vue")),
}
