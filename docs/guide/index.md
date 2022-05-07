# Vant3

## 介绍

@formily/vant3 是基于 Vant3 封装的针对表单场景专业级(Professional)组件库，它主要有以下几个特点：

- 更丰富的组件体系

  - 布局组件

    - FormItem
    - Space
    - Submit

  - 输入控件
    - Input
    - Select
    - DatePicker
    - TimePicker
    - Cascader
    - Radio
    - Checkbox
    - Upload
    - Switch
  - 场景组件
    - ArrayItems
  - 阅读态组件
    - PreviewText

- 主题定制能力
  - follow 组件库的样式体系，更方便定制主题
- 支持二次封装
  - 所有组件都能二次封装
- 支持阅读态
  - 提供了 PreviewText 组件，用户可以基于它自己做阅读态封装，灵活性更强
- 类型更加友好
  - 每个组件都有着极其完整的类型定义，用户在实际开发过程中，可以感受到前所未有的智能提示体验
- 更完备的布局控制能力
  - 基于 FormItem 组件，提供更智能的布局能力。

## 安装

```bash
$ npm install --save vant
$ npm install --save @formily/core @formily/vue @vue/composition-api @formily/vant3
```

## 在 vite 项目中按需打包（推荐）

`Vant3` vite 项目中按需引入参见 [https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#zai-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian-tui-jian](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#zai-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian-tui-jian)

`@formily/vant3` vite 项目中按需引入需借助 `vite-plugin-style-import`

#### 安装 `vite-plugin-style-import`

```shell
npm i vite-plugin-style-import@1.4.1 -D
```

或者

```shell
yarn add vite-plugin-style-import@1.4.1 -D
```

或者

```shell
pnpm add vite-plugin-style-import@1.4.1 -D
```

修改 `vite.config.js`

```code
import vue from '@vitejs/plugin-vue';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
};
```

## 在非 vite 项目中按需打包

`Vant3` 非 vite 项目中按需引入参见 [https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#zai-fei-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian-tui-jian](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#zai-fei-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian-tui-jian)

`@formily/vant3`非 vite 项目中按需引入需借助 `babel-plugin-import`

#### 安装 `babel-plugin-import`

```shell
npm install babel-plugin-import --save-dev
```

或者

```shell
yarn add babel-plugin-import --dev
```

修改 `.babelrc`或 `babel.config.js`

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

## Q/A

问：我想自己封装一套组件库，该怎么做？

答：如果是开源组件库，可以直接参与项目共建，提供 PR，如果是企业内私有组件库，参考源码即可，源码并没有太多复杂逻辑。
