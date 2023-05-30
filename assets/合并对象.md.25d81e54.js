import{_ as s,o as a,c as n,O as o}from"./chunks/framework.56b4393c.js";const i=JSON.parse('{"title":"合并对象","description":"","frontmatter":{},"headers":[],"relativePath":"合并对象.md","filePath":"合并对象.md"}'),l={name:"合并对象.md"},p=o(`<h1 id="合并对象" tabindex="-1">合并对象 <a class="header-anchor" href="#合并对象" aria-label="Permalink to &quot;合并对象&quot;">​</a></h1><h2 id="使用object-assign-合并对象" tabindex="-1">使用Object.assign()合并对象 <a class="header-anchor" href="#使用object-assign-合并对象" aria-label="Permalink to &quot;使用Object.assign()合并对象&quot;">​</a></h2><p>可以使用Object.assign()合并对象，例如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assign</span><span style="color:#A6ACCD;">(obj1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">obj2)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj)  </span><span style="color:#676E95;font-style:italic;">// { a: 2, b: 2, c: 3 }</span></span></code></pre></div><p>合并对象时，如果存在同名属性，则后边的对象属性值会覆盖前面的属性值。</p><h2 id="使用三点操作符合并对象" tabindex="-1">使用三点操作符合并对象 <a class="header-anchor" href="#使用三点操作符合并对象" aria-label="Permalink to &quot;使用三点操作符合并对象&quot;">​</a></h2><p>作为一种语法糖，可以使用三点操作符合并对象：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{...</span><span style="color:#A6ACCD;">obj1</span><span style="color:#89DDFF;">,...</span><span style="color:#A6ACCD;">obj2</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj)  </span><span style="color:#676E95;font-style:italic;">// { a: 2, b: 2, c: 3 }</span></span></code></pre></div><p>最后，要特别说明的是，无论使用Object.assign()，还是使用三点运算符，只推荐源对象不包括嵌套属性、并且属性值是原始值的时候使用，此时新对象对于源对象是独立的，不存在深浅拷贝的问题。如果源对象包括嵌套属性、或者属性值存在非原始值（其实嵌套属性本身也意味着属性值非原始值了），那么新对象的某些属性可能还引用着源对象，这里面有一些“语法陷阱”需要避免，建议先使用其它方式将对象打平，再进行合并。</p>`,9),e=[p];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const b=s(l,[["render",t]]);export{i as __pageData,b as default};
