!function(g){var d=function(){this.v="1.0.7"};d.fn=d.prototype;var j=document,h=d.fn.cache={},c=function(){var k=j.scripts,i=k[k.length-1].src;return i.substring(0,i.lastIndexOf("/")+1)}(),f=function(e){g.console&&console.error&&console.error("Layui hint: "+e)},b="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),a={layer:"modules/layer",laydate:"modules/laydate",laypage:"modules/laypage",laytpl:"modules/laytpl",layim:"modules/layim",layedit:"modules/layedit",form:"modules/form",upload:"modules/upload",tree:"modules/tree",slide:"modules/slide",table:"modules/table",element:"modules/element",util:"modules/util",flow:"modules/flow",code:"modules/code",single:"modules/single",mobile:"modules/mobile",jquery:"lib/jquery","layui.mod":"dest/layui.mod"};h.modules={},h.status={},h.timeout=10,h.event={},d.fn.define=function(o,l){var p=this,k="function"==typeof o,m=function(){return"function"==typeof l&&l(function(n,i){layui[n]=i,h.status[n]=!0}),this};return k&&(l=o,o=[]),layui["layui.all"]?m.call(p):(p.use(o,m),p)},d.fn.use=function(q,A,x){function B(s,p){var v="PLaySTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/;("load"===s.type||v.test((s.currentTarget||s.srcElement).readyState))&&(h.modules[k]=p,w.removeChild(z),function m(){return ++i>1000*h.timeout/4?f(k+" is not a valid module"):void (h.status[k]?u():setTimeout(m,4))}())}function u(){x.push(layui[k]),q.length>1?o.use(q.slice(1),A,x):"function"==typeof A&&A.apply(layui,x)}var o=this,r=h.dir=h.dir?h.dir:c,w=j.getElementsByTagName("head")[0];q="string"==typeof q?[q]:q,window.jQuery&&jQuery.fn.on&&(o.each(q,function(e,m){"jquery"===m&&q.splice(e,1)}),layui.jquery=jQuery);var k=q[0],i=0;if(x=x||[],h.host=h.host||(r.match(/\/\/([\s\S]+?)\//)||["//"+location.host+"/"])[0],0===q.length||layui["layui.all"]&&a[k]){return"function"==typeof A&&A.apply(layui,x),o}var z=j.createElement("script"),l=(a[k]?r+"lay/":h.base||"")+(o.modules[k]||k)+".js";return z.async=!0,z.charset="utf-8",z.src=l+function(){var m=h.version===!0?h.v||(new Date).getTime():h.version||"";return m?"?v="+m:""}(),h.modules[k]?!function n(){return ++i>1000*h.timeout/4?f(k+" is not a valid module"):void ("string"==typeof h.modules[k]&&h.status[k]?u():setTimeout(n,4))}():(w.appendChild(z),!z.attachEvent||z.attachEvent.toString&&z.attachEvent.toString().indexOf("[native code")<0||b?z.addEventListener("load",function(m){B(m,l)},!1):z.attachEvent("onreadystatechange",function(m){B(m,l)})),h.modules[k]=l,o},d.fn.getStyle=function(e,k){var i=e.currentStyle?e.currentStyle:g.getComputedStyle(e,null);return i[i.getPropertyValue?"getPropertyValue":"getAttribute"](k)},d.fn.link=function(o,w,m){var v=this,k=j.createElement("link"),r=j.getElementsByTagName("head")[0];"string"==typeof w&&(m=w);var x=(m||o).replace(/\.|\//g,""),q=k.id="layuicss-"+x,n=0;k.rel="stylesheet",k.href=o+(h.debug?"?v="+(new Date).getTime():""),k.media="all",j.getElementById(q)||r.appendChild(k),"function"==typeof w&&!function p(){return ++n>1000*h.timeout/100?f(o+" timeout"):void (1989===parseInt(v.getStyle(j.getElementById(q),"width"))?function(){w()}():setTimeout(p,100))}()},d.fn.addcss=function(k,i,l){layui.link(h.dir+"css/"+k,i,l)},d.fn.img=function(k,i,m){var l=new Image;return l.src=k,l.complete?i(l):(l.onload=function(){l.onload=null,i(l)},void (l.onerror=function(n){l.onerror=null,m(n)}))},d.fn.config=function(k){k=k||{};for(var i in k){h[i]=k[i]}return this},d.fn.modules=function(){var k={};for(var i in a){k[i]=a[i]}return k}(),d.fn.extend=function(k){var i=this;k=k||{};for(var l in k){i[l]||i.modules[l]?f("模块名 "+l+" 已被占用"):i.modules[l]=k[l]}return i},d.fn.router=function(m){for(var l,q=(m||location.hash).replace(/^#/,"").split("/")||[],p={dir:[]},k=0;k<q.length;k++){l=q[k].split("="),/^\w+=/.test(q[k])?function(){"dir"!==l[0]&&(p[l[0]]=l[1])}():p.dir.push(q[k]),l=null}return p},d.fn.data=function(k,m){if(k=k||"layui",g.JSON&&g.JSON.parse){if(null===m){return delete localStorage[k]}m="object"==typeof m?m:{key:m};try{var l=JSON.parse(localStorage[k])}catch(e){var l={}}return m.value&&(l[m.key]=m.value),m.remove&&delete l[m.key],localStorage[k]=JSON.stringify(l),m.key?l[m.key]:l}},d.fn.device=function(k){var m=navigator.userAgent.toLowerCase(),l=function(n){var i=new RegExp(n+"/([^\\s\\_\\-]+)");return n=(m.match(i)||[])[1],n||!1},e={os:function(){return/windows/.test(m)?"windows":/linux/.test(m)?"linux":/iphone|ipod|ipad|ios/.test(m)?"ios":void 0}(),ie:function(){return !!(g.ActiveXObject||"ActiveXObject" in g)&&((m.match(/msie\s(\d+)/)||[])[1]||"11")}(),weixin:l("micromessenger")};return k&&!e[k]&&(e[k]=l(k)),e.android=/android/.test(m),e.ios="ios"===e.os,e},d.fn.hint=function(){return{error:f}},d.fn.each=function(k,i){var m,l=this;if("function"!=typeof i){return l}if(k=k||[],k.constructor===Object){for(m in k){if(i.call(k[m],m,k[m])){break}}}else{for(m=0;m<k.length&&!i.call(k[m],m,k[m]);m++){}}return l},d.fn.stope=function(e){e=e||g.event,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},d.fn.onevent=function(k,i,l){return"string"!=typeof k||"function"!=typeof l?this:(h.event[k+"."+i]=[l],this)},d.fn.event=function(v,q,w){var p=this,s=null,o=q.match(/\(.*\)$/)||[],m=(q=v+"."+q).replace(o,""),k=function(l,i){var n=i&&i.call(p,w);n===!1&&null===s&&(s=!1)};return layui.each(h.event[m],k),o[0]&&layui.each(h.event[q],k),s},g.layui=new d}(window);