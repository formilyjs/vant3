import path from 'path'
import utils from './util'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import vueJsx from '@vitejs/plugin-vue-jsx'

const componentFiles = utils
  .getFiles(path.resolve(__dirname, '../guide'))
  .map((item) => item.replace(/(\.md)$/, ''))
  .filter((item) => !['el-form', 'el-form-item', 'index'].includes(item))

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  title: 'Vant3',
  description: 'Alibaba unified front-end form solution',
  dest: './doc-site',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '//img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/vant@3.4.8/lib/index.css',
      },
    ],
  ],
  theme: 'vuepress-theme-dumi',
  themeConfig: {
    logo: '//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',
    navbar: [
      {
        text: 'Vant3',
        link: '/guide/',
      },
      {
        text: '主站',
        link: 'https://v2.formilyjs.org',
      },
      {
        text: 'CHANGELOG',
        link: 'https://github.com/formilyjs/vant3/blob/main/CHANGELOG.md',
      },
      {
        text: 'GITHUB',
        link: 'https://github.com/formilyjs/vant3',
      },
    ],
    sidebar: {
      '/guide/': ['/guide/index.md', ...componentFiles],
    },
    lastUpdated: true,
    smoothScroll: true,
  },
  markdown: {
    code: {
      lineNumbers: false,
    },
  },
  alias: {
    '@formily/vant3': path.resolve(__dirname, '../../packages/components/src'),
  },
  plugins: ['vuepress-plugin-typescript'],
  bundlerConfig: {
    viteOptions: {
      plugins: [
        vueJsx({
          // options are passed on to @vue/babel-plugin-jsx
        }),
      ],
    },
  },
})
