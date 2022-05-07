<template><h1 id="arrayitems" tabindex="-1"><a class="header-anchor" href="#arrayitems" aria-hidden="true">#</a> ArrayItems</h1>
<blockquote>
<p>自增列表，对于简单的自增编辑场景比较适合，或者对于空间要求高的场景比较适合</p>
<p>注意：该组件只适用于 Schema 场景</p>
</blockquote>
<h2 id="markup-schema-案例" tabindex="-1"><a class="header-anchor" href="#markup-schema-案例" aria-hidden="true">#</a> Markup Schema 案例</h2>
<dumi-previewer demoPath="guide/array-items/markup-schema" />
<h2 id="json-schema-案例" tabindex="-1"><a class="header-anchor" href="#json-schema-案例" aria-hidden="true">#</a> JSON Schema 案例</h2>
<dumi-previewer demoPath="guide/array-items/json-schema" />
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="arrayitems-1" tabindex="-1"><a class="header-anchor" href="#arrayitems-1" aria-hidden="true">#</a> ArrayItems</h3>
<p>继承 HTMLDivElement Props</p>
<h3 id="arrayitems-item" tabindex="-1"><a class="header-anchor" href="#arrayitems-item" aria-hidden="true">#</a> ArrayItems.Item</h3>
<blockquote>
<p>列表区块</p>
</blockquote>
<p>继承 HTMLDivElement Props</p>
<h3 id="arrayitems-sorthandle" tabindex="-1"><a class="header-anchor" href="#arrayitems-sorthandle" aria-hidden="true">#</a> ArrayItems.SortHandle</h3>
<h3 id="arrayitems-addition" tabindex="-1"><a class="header-anchor" href="#arrayitems-addition" aria-hidden="true">#</a> ArrayItems.Addition</h3>
<blockquote>
<p>添加按钮</p>
</blockquote>
<p>扩展属性</p>
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
<td>title</td>
<td>string</td>
<td>文案</td>
<td></td>
</tr>
<tr>
<td>method</td>
<td><code>'push' | 'unshift'</code></td>
<td>添加方式</td>
<td><code>'push'</code></td>
</tr>
<tr>
<td>defaultValue</td>
<td>any</td>
<td>默认值</td>
<td></td>
</tr>
</tbody>
</table>
<p>其余参考 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/button" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/button<ExternalLinkIcon/></a></p>
<p>注意：title 属性可以接收 Field 模型中的 title 映射，也就是在 Field 上传 title 也是生效的</p>
<h3 id="arrayitems-remove" tabindex="-1"><a class="header-anchor" href="#arrayitems-remove" aria-hidden="true">#</a> ArrayItems.Remove</h3>
<blockquote>
<p>删除按钮</p>
</blockquote>
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
<td>title</td>
<td>string</td>
<td>文案</td>
<td></td>
</tr>
</tbody>
</table>
<p>其余参考 <a href="https://vant-contrib.gitee.io/vant/#/zh-CN/icon" target="_blank" rel="noopener noreferrer">https://vant-contrib.gitee.io/vant/#/zh-CN/icon<ExternalLinkIcon/></a></p>
<p>注意：title 属性可以接收 Field 模型中的 title 映射，也就是在 Field 上传 title 也是生效的</p>
<h3 id="arrayitems-index" tabindex="-1"><a class="header-anchor" href="#arrayitems-index" aria-hidden="true">#</a> ArrayItems.Index</h3>
<blockquote>
<p>索引渲染器</p>
</blockquote>
<p>无属性</p>
<h3 id="arrayitems-useindex" tabindex="-1"><a class="header-anchor" href="#arrayitems-useindex" aria-hidden="true">#</a> ArrayItems.useIndex</h3>
<blockquote>
<p>读取当前渲染行索引的 Hook</p>
</blockquote>
<h3 id="arrayitems-userecord" tabindex="-1"><a class="header-anchor" href="#arrayitems-userecord" aria-hidden="true">#</a> ArrayItems.useRecord</h3>
<blockquote>
<p>读取当前渲染记录的 Hook</p>
</blockquote>
</template>
