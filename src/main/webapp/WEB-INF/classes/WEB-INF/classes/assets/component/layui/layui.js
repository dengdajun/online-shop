!function(m){var o=function(){this.v="1.0.7"};o.fn=o.prototype;var k=document,l=o.fn.cache={},p=function(){var a=k.scripts,b=a[a.length-1].src;return b.substring(0,b.lastIndexOf("/")+1)}(),n=function(a){m.console&&console.error&&console.error("Layui hint: "+a)},e="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),i={layer:"modules/layer",laydate:"modules/laydate",laypage:"modules/laypage",laytpl:"modules/laytpl",layim:"modules/layim",layedit:"modules/layedit",form:"modules/form",upload:"modules/upload",tree:"modules/tree",slide:"modules/slide",table:"modules/table",element:"modules/element",util:"modules/util",flow:"modules/flow",code:"modules/code",single:"modules/single",mobile:"modules/mobile",jquery:"lib/jquery","layui.mod":"dest/layui.mod"};l.modules={},l.status={},l.timeout=10,l.event={},o.fn.define=function(f,b){var d=this,c="function"==typeof f,a=function(){return"function"==typeof b&&b(function(h,g){layui[h]=g,l.status[h]=!0}),this};return c&&(b=f,f=[]),layui["layui.all"]?a.call(d):(d.use(f,a),d)},o.fn.use=function(b,f,v){function c(u,w){var r="PLaySTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/;("load"===u.type||r.test((u.currentTarget||u.srcElement).readyState))&&(l.modules[j]=w,y.removeChild(t),function q(){return ++s>1000*l.timeout/4?n(j+" is not a valid module"):void (l.status[j]?C():setTimeout(q,4))}())}function C(){v.push(layui[j]),b.length>1?d.use(b.slice(1),f,v):"function"==typeof f&&f.apply(layui,v)}var d=this,a=l.dir=l.dir?l.dir:p,y=k.getElementsByTagName("head")[0];b="string"==typeof b?[b]:b,window.jQuery&&jQuery.fn.on&&(d.each(b,function(r,q){"jquery"===q&&b.splice(r,1)}),layui.jquery=jQuery);var j=b[0],s=0;if(v=v||[],l.host=l.host||(a.match(/\/\/([\s\S]+?)\//)||["//"+location.host+"/"])[0],0===b.length||layui["layui.all"]&&i[j]){return"function"==typeof f&&f.apply(layui,v),d}var t=k.createElement("script"),h=(i[j]?a+"lay/":l.base||"")+(d.modules[j]||j)+".js";return t.async=!0,t.charset="utf-8",t.src=h+function(){var q=l.version===!0?l.v||(new Date).getTime():l.version||"";return q?"?v="+q:""}(),l.modules[j]?!function g(){return ++s>1000*l.timeout/4?n(j+" is not a valid module"):void ("string"==typeof l.modules[j]&&l.status[j]?C():setTimeout(g,4))}():(y.appendChild(t),!t.attachEvent||t.attachEvent.toString&&t.attachEvent.toString().indexOf("[native code")<0||e?t.addEventListener("load",function(q){c(q,h)},!1):t.attachEvent("onreadystatechange",function(q){c(q,h)})),l.modules[j]=h,d},o.fn.getStyle=function(c,a){var b=c.currentStyle?c.currentStyle:m.getComputedStyle(c,null);return b[b.getPropertyValue?"getPropertyValue":"getAttribute"](a)},o.fn.link=function(d,s,g){var t=this,h=k.createElement("link"),a=k.getElementsByTagName("head")[0];"string"==typeof s&&(g=s);var j=(g||d).replace(/\.|\//g,""),b=h.id="layuicss-"+j,f=0;h.rel="stylesheet",h.href=d+(l.debug?"?v="+(new Date).getTime():""),h.media="all",k.getElementById(b)||a.appendChild(h),"function"==typeof s&&!function c(){return ++f>1000*l.timeout/100?n(d+" timeout"):void (1989===parseInt(t.getStyle(k.getElementById(b),"width"))?function(){s()}():setTimeout(c,100))}()},o.fn.addcss=function(b,c,a){layui.link(l.dir+"css/"+b,c,a)},o.fn.img=function(c,d,a){var b=new Image;return b.src=c,b.complete?d(b):(b.onload=function(){b.onload=null,d(b)},void (b.onerror=function(f){b.onerror=null,a(f)}))},o.fn.config=function(a){a=a||{};for(var b in a){l[b]=a[b]}return this},o.fn.modules=function(){var a={};for(var b in i){a[b]=i[b]}return a}(),o.fn.extend=function(b){var c=this;b=b||{};for(var a in b){c[a]||c.modules[a]?n("模块名 "+a+" 已被占用"):c.modules[a]=b[a]}return c},o.fn.router=function(a){for(var b,d=(a||location.hash).replace(/^#/,"").split("/")||[],f={dir:[]},c=0;c<d.length;c++){b=d[c].split("="),/^\w+=/.test(d[c])?function(){"dir"!==b[0]&&(f[b[0]]=b[1])}():f.dir.push(d[c]),b=null}return f},o.fn.data=function(c,a){if(c=c||"layui",m.JSON&&m.JSON.parse){if(null===a){return delete localStorage[c]}a="object"==typeof a?a:{key:a};try{var b=JSON.parse(localStorage[c])}catch(d){var b={}}return a.value&&(b[a.key]=a.value),a.remove&&delete b[a.key],localStorage[c]=JSON.stringify(b),a.key?b[a.key]:b}},o.fn.device=function(c){var a=navigator.userAgent.toLowerCase(),b=function(g){var f=new RegExp(g+"/([^\\s\\_\\-]+)");return g=(a.match(f)||[])[1],g||!1},d={os:function(){return/windows/.test(a)?"windows":/linux/.test(a)?"linux":/iphone|ipod|ipad|ios/.test(a)?"ios":void 0}(),ie:function(){return !!(m.ActiveXObject||"ActiveXObject" in m)&&((a.match(/msie\s(\d+)/)||[])[1]||"11")}(),weixin:b("micromessenger")};return c&&!d[c]&&(d[c]=b(c)),d.android=/android/.test(a),d.ios="ios"===d.os,d},o.fn.hint=function(){return{error:n}},o.fn.each=function(c,d){var a,b=this;if("function"!=typeof d){return b}if(c=c||[],c.constructor===Object){for(a in c){if(d.call(c[a],a,c[a])){break}}}else{for(a=0;a<c.length&&!d.call(c[a],a,c[a]);a++){}}return b},o.fn.stope=function(a){a=a||m.event,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},o.fn.onevent=function(b,c,a){return"string"!=typeof b||"function"!=typeof a?this:(l.event[b+"."+c]=[a],this)},o.fn.event=function(d,g,b){var h=this,f=null,j=g.match(/\(.*\)$/)||[],a=(g=d+"."+g).replace(j,""),c=function(q,r){var s=r&&r.call(h,b);s===!1&&null===f&&(f=!1)};return layui.each(l.event[a],c),j[0]&&layui.each(l.event[g],c),f},m.layui=new o}(window);