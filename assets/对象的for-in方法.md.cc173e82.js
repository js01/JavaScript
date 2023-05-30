import{_ as s,o as a,c as n,O as o}from"./chunks/framework.56b4393c.js";const C=JSON.parse('{"title":"对象的for in 方法","description":"","frontmatter":{},"headers":[],"relativePath":"对象的for-in方法.md","filePath":"对象的for-in方法.md"}'),l={name:"对象的for-in方法.md"},p=o(`<h1 id="对象的for-in-方法" tabindex="-1">对象的for in 方法 <a class="header-anchor" href="#对象的for-in-方法" aria-label="Permalink to &quot;对象的for in 方法&quot;">​</a></h1><p>可迭代对象可以使用for of 循环遍历，而Object类型并非可迭代对象，不过可以使用for in 方法遍历其属性名和属性值，例如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> key </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> obj)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">)  </span><span style="color:#676E95;font-style:italic;">// a  b  c</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>从这里可以看出，如果只有一个参数，那么只遍历属性名称。</p>`,4),e=[p];function t(c,r,i,y,D,F){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{C as __pageData,A as default};
