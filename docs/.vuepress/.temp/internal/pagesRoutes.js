import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-c40c5e00","/guide/area.html",{"title":"Area"},["/guide/area","/guide/area.md"]],
  ["v-aaa16c0e","/guide/array-items.html",{"title":"ArrayItems"},["/guide/array-items","/guide/array-items.md"]],
  ["v-421a42ef","/guide/calendar.html",{"title":"Calendar"},["/guide/calendar","/guide/calendar.md"]],
  ["v-9030e422","/guide/cascader.html",{"title":"Cascader"},["/guide/cascader","/guide/cascader.md"]],
  ["v-4132a4ec","/guide/checkbox.html",{"title":"Checkbox"},["/guide/checkbox","/guide/checkbox.md"]],
  ["v-37e958a5","/guide/datetime-picker.html",{"title":"DatetimePicker"},["/guide/datetime-picker","/guide/datetime-picker.md"]],
  ["v-577ca06e","/guide/form-item.html",{"title":"FormItem"},["/guide/form-item","/guide/form-item.md"]],
  ["v-792a83a6","/guide/group.html",{"title":"Group"},["/guide/group","/guide/group.md"]],
  ["v-fffb8e28","/guide/",{"title":"Vant3"},["/guide/index.html","/guide/index.md"]],
  ["v-7f60393b","/guide/input.html",{"title":"Input"},["/guide/input","/guide/input.md"]],
  ["v-7a889c9f","/guide/picker.html",{"title":"Picker"},["/guide/picker","/guide/picker.md"]],
  ["v-74bf189b","/guide/preview-text.html",{"title":"PreviewText"},["/guide/preview-text","/guide/preview-text.md"]],
  ["v-2c9a73aa","/guide/radio.html",{"title":"Radio"},["/guide/radio","/guide/radio.md"]],
  ["v-9e3bdee6","/guide/rate.html",{"title":"Rate"},["/guide/rate","/guide/rate.md"]],
  ["v-8ef52fa8","/guide/slider.html",{"title":"Slider"},["/guide/slider","/guide/slider.md"]],
  ["v-592b6b94","/guide/stepper.html",{"title":"Stepper"},["/guide/stepper","/guide/stepper.md"]],
  ["v-3ae325b9","/guide/switch.html",{"title":"Switch"},["/guide/switch","/guide/switch.md"]],
  ["v-51b71dbf","/guide/uploader.html",{"title":"Uploader"},["/guide/uploader","/guide/uploader.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
