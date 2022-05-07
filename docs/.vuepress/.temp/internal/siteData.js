export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Formily Vant3",
  "description": "Alibaba unified front-end form solution",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "//img.alicdn.com/imgextra/i3/O1CN01XtT3Tv1Wd1b5hNVKy_!!6000000002810-55-tps-360-360.svg"
      }
    ],
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://unpkg.com/vant@3.4.8/lib/index.css"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
