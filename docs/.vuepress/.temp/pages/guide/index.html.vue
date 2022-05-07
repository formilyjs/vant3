<template><h1 id="vant3" tabindex="-1"><a class="header-anchor" href="#vant3" aria-hidden="true">#</a> Vant3</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>@formily/vant3 是基于 Vant3 封装的针对表单场景专业级(Professional)组件库，它主要有以下几个特点：</p>
<ul>
<li>
<p>更丰富的组件体系</p>
<ul>
<li>
<p>布局组件</p>
<ul>
<li>FormItem</li>
<li>Space</li>
<li>Submit</li>
</ul>
</li>
<li>
<p>输入控件</p>
<ul>
<li>Input</li>
<li>Select</li>
<li>DatePicker</li>
<li>TimePicker</li>
<li>Cascader</li>
<li>Radio</li>
<li>Checkbox</li>
<li>Upload</li>
<li>Switch</li>
</ul>
</li>
<li>
<p>场景组件</p>
<ul>
<li>ArrayItems</li>
</ul>
</li>
<li>
<p>阅读态组件</p>
<ul>
<li>PreviewText</li>
</ul>
</li>
</ul>
</li>
<li>
<p>主题定制能力</p>
<ul>
<li>follow 组件库的样式体系，更方便定制主题</li>
</ul>
</li>
<li>
<p>支持二次封装</p>
<ul>
<li>所有组件都能二次封装</li>
</ul>
</li>
<li>
<p>支持阅读态</p>
<ul>
<li>提供了 PreviewText 组件，用户可以基于它自己做阅读态封装，灵活性更强</li>
</ul>
</li>
<li>
<p>类型更加友好</p>
<ul>
<li>每个组件都有着极其完整的类型定义，用户在实际开发过程中，可以感受到前所未有的智能提示体验</li>
</ul>
</li>
<li>
<p>更完备的布局控制能力</p>
<ul>
<li>基于 FormItem 组件，提供更智能的布局能力。</li>
</ul>
</li>
</ul>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> --save vant
$ <span class="token function">npm</span> <span class="token function">install</span> --save @formily/core @formily/vue @vue/composition-api @formily/vant3
</code></pre></div><h2 id="在-vite-项目中按需打包-推荐" tabindex="-1"><a class="header-anchor" href="#在-vite-项目中按需打包-推荐" aria-hidden="true">#</a> 在 vite 项目中按需打包（推荐）</h2>
<p><code>Vant3</code> vite 项目中按需引入参见 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#zai-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian-tui-jian" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#zai-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian-tui-jian<ExternalLinkIcon/></a></p>
<p><code>@formily/vant3</code> vite 项目中按需引入需借助 <code>vite-plugin-style-import</code></p>
<h4 id="安装-vite-plugin-style-import" tabindex="-1"><a class="header-anchor" href="#安装-vite-plugin-style-import" aria-hidden="true">#</a> 安装 <code>vite-plugin-style-import</code></h4>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i vite-plugin-style-import@1.4.1 -D
</code></pre></div><p>或者</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vite-plugin-style-import@1.4.1 -D
</code></pre></div><p>或者</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> vite-plugin-style-import@1.4.1 -D
</code></pre></div><p>修改 <code>vite.config.js</code></p>
<div class="language-code ext-code"><pre v-pre class="language-code"><code>import vue from '@vitejs/plugin-vue';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
};
</code></pre></div><h2 id="在非-vite-项目中按需打包" tabindex="-1"><a class="header-anchor" href="#在非-vite-项目中按需打包" aria-hidden="true">#</a> 在非 vite 项目中按需打包</h2>
<p><code>Vant3</code> 非 vite 项目中按需引入参见 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#zai-fei-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian-tui-jian" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#zai-fei-vite-xiang-mu-zhong-an-xu-yin-ru-zu-jian-tui-jian<ExternalLinkIcon/></a></p>
<p><code>@formily/vant3</code>非 vite 项目中按需引入需借助 <code>babel-plugin-import</code></p>
<h4 id="安装-babel-plugin-import" tabindex="-1"><a class="header-anchor" href="#安装-babel-plugin-import" aria-hidden="true">#</a> 安装 <code>babel-plugin-import</code></h4>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> babel-plugin-import --save-dev
</code></pre></div><p>或者</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> babel-plugin-import --dev
</code></pre></div><p>修改 <code>.babelrc</code>或 <code>babel.config.js</code></p>
<div class="language-json ext-json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">"import"</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"vant"</span><span class="token punctuation">,</span>
        <span class="token property">"libraryDirectory"</span><span class="token operator">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span>
        <span class="token property">"style"</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q/A</h2>
<p>问：我想自己封装一套组件库，该怎么做？</p>
<p>答：如果是开源组件库，可以直接参与项目共建，提供 PR，如果是企业内私有组件库，参考源码即可，源码并没有太多复杂逻辑。</p>
</template>
