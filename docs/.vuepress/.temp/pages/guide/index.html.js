export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "Vant3",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "介绍",
      "slug": "介绍",
      "children": []
    },
    {
      "level": 2,
      "title": "安装",
      "slug": "安装",
      "children": []
    },
    {
      "level": 2,
      "title": "在 vite 项目中按需打包（推荐）",
      "slug": "在-vite-项目中按需打包-推荐",
      "children": []
    },
    {
      "level": 2,
      "title": "在非 vite 项目中按需打包",
      "slug": "在非-vite-项目中按需打包",
      "children": []
    },
    {
      "level": 2,
      "title": "Q/A",
      "slug": "q-a",
      "children": []
    }
  ],
  "filePathRelative": "guide/index.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
