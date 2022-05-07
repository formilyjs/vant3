export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroText": "Formily Vant3",
    "tagline": "基于 vant3 封装的 Formily2.x 组件体系",
    "actions": [
      {
        "text": "开发指南",
        "link": "/guide/"
      }
    ],
    "features": [
      {
        "title": "更易用",
        "details": "开箱即用，案例丰富"
      },
      {
        "title": "更高效",
        "details": "傻瓜写法，超高性能"
      },
      {
        "title": "更专业",
        "details": "完备，灵活，优雅"
      }
    ],
    "footer": "Open-source MIT Licensed | Copyright © 2019-present"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "安装",
      "slug": "安装",
      "children": []
    },
    {
      "level": 2,
      "title": "快速开始",
      "slug": "快速开始",
      "children": []
    }
  ],
  "filePathRelative": "README.md"
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
