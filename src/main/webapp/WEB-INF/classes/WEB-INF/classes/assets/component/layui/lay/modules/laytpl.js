layui.define(function(l){var c={open:"{{",close:"}}"},i={exp:function(a){return new RegExp(a,"g")},query:function(d,a,f){var b=["#([\\s\\S])+?","([^{#}])*?"][d||0];return j((a||"")+c.open+b+c.close+(f||""))},escape:function(a){return String(a||"").replace(/&(?!#?[a-zA-Z0-9]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")},error:function(b,d){var a="Laytpl Error：";return"object"==typeof console&&console.error(a+b+"\n"+(d||"")),a+b}},j=i.exp,e=function(a){this.tpl=a};e.pt=e.prototype,window.errors=0,e.pt.parse=function(o,b){var g=this,a=o,f=j("^"+c.open+"#",""),h=j(c.close+"$","");o=o.replace(/\s+|\r|\t|\n/g," ").replace(j(c.open+"#"),c.open+"# ").replace(j(c.close+"}"),"} "+c.close).replace(/\\/g,"\\\\").replace(/(?="|')/g,"\\").replace(i.query(),function(m){return m=m.replace(f,"").replace(h,""),'";'+m.replace(/\\/g,"")+';view+="'}).replace(i.query(1),function(m){var n='"+(';return m.replace(/\s/g,"")===c.open+c.close?"":(m=m.replace(j(c.open+"|"+c.close),""),/^=/.test(m)&&(m=m.replace(/^=/,""),n='"+_escape_('),n+m.replace(/\\/g,"")+')+"')}),o='"use strict";var view = "'+o+'";return view;';try{return g.cache=o=new Function("d, _escape_",o),o(b,i.escape)}catch(d){return delete g.cache,i.error(d,a)}},e.pt.render=function(b,d){var a,f=this;return b?(a=f.cache?f.cache(b,i.escape):f.parse(f.tpl,b),d?void d(a):a):i.error("no data")};var k=function(a){return"string"!=typeof a?i.error("Template not found"):new e(a)};k.config=function(b){b=b||{};for(var a in b){c[a]=b[a]}},k.v="1.2.0",l("laytpl",k)});