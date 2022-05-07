export const themeData = {
  "logo": "//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg",
  "navbar": [
    {
      "text": "指南",
      "link": "/guide/"
    },
    {
      "text": "主站",
      "link": "https://v2.formilyjs.org"
    },
    {
      "text": "CHANGELOG",
      "link": "https://github.com/formilyjs/vant3/blob/main/CHANGELOG.md"
    },
    {
      "text": "GITHUB",
      "link": "https://github.com/formilyjs/vant3"
    }
  ],
  "sidebar": {
    "/guide/": [
      "/guide/index.md",
      "area",
      "array-items",
      "calendar",
      "cascader",
      "checkbox",
      "datetime-picker",
      "form-item",
      "group",
      "input",
      "picker",
      "preview-text",
      "radio",
      "rate",
      "slider",
      "stepper",
      "switch",
      "uploader"
    ]
  },
  "lastUpdated": true,
  "smoothScroll": true,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
