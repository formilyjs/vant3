<template><h1 id="previewtext" tabindex="-1"><a class="header-anchor" href="#previewtext" aria-hidden="true">#</a> PreviewText</h1>
<blockquote>
<p>阅读态组件，主要用来实现类 Input，类 DatePicker 这些组件的阅读态</p>
</blockquote>
<h2 id="简单案例" tabindex="-1"><a class="header-anchor" href="#简单案例" aria-hidden="true">#</a> 简单案例</h2>
<dumi-previewer demoPath="guide/preview-text/base" />
<h2 id="扩展案例" tabindex="-1"><a class="header-anchor" href="#扩展案例" aria-hidden="true">#</a> 扩展案例</h2>
<dumi-previewer demoPath="guide/preview-text/extend" />
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="previewtext-input" tabindex="-1"><a class="header-anchor" href="#previewtext-input" aria-hidden="true">#</a> PreviewText.Input</h3>
<p>参考 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/field#api" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/field#api<ExternalLinkIcon/></a></p>
<h3 id="previewtext-checkbox" tabindex="-1"><a class="header-anchor" href="#previewtext-checkbox" aria-hidden="true">#</a> PreviewText.Checkbox</h3>
<p>参考 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/checkbox#api" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/checkbox#api<ExternalLinkIcon/></a></p>
<h3 id="previewtext-switch" tabindex="-1"><a class="header-anchor" href="#previewtext-switch" aria-hidden="true">#</a> PreviewText.Switch</h3>
<p>参考 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/switch#api" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/switch#api<ExternalLinkIcon/></a></p>
<h3 id="previewtext-stepper" tabindex="-1"><a class="header-anchor" href="#previewtext-stepper" aria-hidden="true">#</a> PreviewText.Stepper</h3>
<p>参考 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/stepper#api" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/stepper#api<ExternalLinkIcon/></a></p>
<h3 id="previewtext-rate" tabindex="-1"><a class="header-anchor" href="#previewtext-rate" aria-hidden="true">#</a> PreviewText.Rate</h3>
<p>参考 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/rate#api" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/rate#api<ExternalLinkIcon/></a></p>
<h3 id="previewtext-slider" tabindex="-1"><a class="header-anchor" href="#previewtext-slider" aria-hidden="true">#</a> PreviewText.Slider</h3>
<p>参考 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/slider#api" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/slider#api<ExternalLinkIcon/></a></p>
<h3 id="previewtext-uploader" tabindex="-1"><a class="header-anchor" href="#previewtext-uploader" aria-hidden="true">#</a> PreviewText.Uploader</h3>
<p>参考 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/uploader#api" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/uploader#api<ExternalLinkIcon/></a></p>
<h3 id="previewtext-picker、previewtext-datetimepicker、previewtext-calendar、previewtext-cascader、previewtext-area" tabindex="-1"><a class="header-anchor" href="#previewtext-picker、previewtext-datetimepicker、previewtext-calendar、previewtext-cascader、previewtext-area" aria-hidden="true">#</a> PreviewText.Picker、PreviewText.DatetimePicker、PreviewText.Calendar、PreviewText.Cascader、PreviewText.Area</h3>
<p>参考 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/field#api" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/field#api<ExternalLinkIcon/></a></p>
<h3 id="previewtext-1" tabindex="-1"><a class="header-anchor" href="#previewtext-1" aria-hidden="true">#</a> PreviewText</h3>
<table>
<thead>
<tr>
<th>属性名</th>
<th>类型</th>
<th>描述</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>stirng</td>
<td>缺省占位符</td>
<td>N/A</td>
</tr>
</tbody>
</table>
<h3 id="previewtext-placeholder" tabindex="-1"><a class="header-anchor" href="#previewtext-placeholder" aria-hidden="true">#</a> PreviewText.Placeholder</h3>
<table>
<thead>
<tr>
<th>属性名</th>
<th>类型</th>
<th>描述</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>stirng</td>
<td>缺省占位符</td>
<td>N/A</td>
</tr>
</tbody>
</table>
<h3 id="previewtext-useplaceholder" tabindex="-1"><a class="header-anchor" href="#previewtext-useplaceholder" aria-hidden="true">#</a> PreviewText.usePlaceholder</h3>
<div class="language-typescript ext-ts"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">usePreviewTextPlaceholder</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div></template>
