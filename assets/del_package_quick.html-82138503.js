import{_ as e,o as a,c as s,e as n}from"./app-6fcf50f1.js";const d={},r=n(`<h1 id="快速删除node-modules" tabindex="-1"><a class="header-anchor" href="#快速删除node-modules" aria-hidden="true">#</a> 快速删除node_modules</h1><h2 id="powershell命令" tabindex="-1"><a class="header-anchor" href="#powershell命令" aria-hidden="true">#</a> PowerShell命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Remove-item <span class="token parameter variable">-Force</span> <span class="token parameter variable">-Recurse</span> node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="npm包-rimraf" tabindex="-1"><a class="header-anchor" href="#npm包-rimraf" aria-hidden="true">#</a> npm包 rimraf</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> rimraf <span class="token parameter variable">-g</span>
rimraf node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cmd命令" tabindex="-1"><a class="header-anchor" href="#cmd命令" aria-hidden="true">#</a> Cmd命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rd /s /q node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),i=[r];function l(c,o){return a(),s("div",null,i)}const h=e(d,[["render",l],["__file","del_package_quick.html.vue"]]);export{h as default};