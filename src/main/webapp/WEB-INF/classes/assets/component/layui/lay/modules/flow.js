layui.define("jquery",function(c){var a=layui.jquery,d=function(f){},b='<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>';d.prototype.load=function(B){var l,w,q,j,F=this,D=0;B=B||{};var H=a(B.elem);if(H[0]){var A=a(B.scrollElem||document),t=B.mb||50,I=!("isAuto" in B)||B.isAuto,E=B.end||"没有更多了",G=B.scrollElem&&B.scrollElem!==document,C="<cite>加载更多</cite>",x=a('<div class="layui-flow-more"><a href="javascript:;">'+C+"</a></div>");H.find(".layui-flow-more")[0]||H.append(x);var k=function(g,f){g=a(g),x.before(g),f=0==f||null,f?x.html(E):x.find("a").html(C),w=f,l=null,q&&q()},z=function(){l=!0,x.find("a").html(b),"function"==typeof B.done&&B.done(++D,k)};if(z(),x.find("a").on("click",function(){a(this);w||l||z()}),B.isLazyimg){var q=F.lazyimg({elem:B.elem+" img",scrollElem:B.scrollElem})}return I?(A.on("scroll",function(){var g=a(this),f=g.scrollTop();j&&clearTimeout(j),w||(j=setTimeout(function(){var e=G?g.height():a(window).height(),h=G?g.prop("scrollHeight"):document.documentElement.scrollHeight;h-f-e<=t&&(l||z())},100))}),F):F}},d.prototype.lazyimg=function(m){var h,v=this,k=0;m=m||{};var j=a(m.scrollElem||document),g=m.elem||"img",q=m.scrollElem&&m.scrollElem!==document,p=function(u,i){var w=j.scrollTop(),n=w+i,x=q?function(){return u.offset().top-j.offset().top+w}():u.offset().top;if(x>=w&&x<=n&&!u.attr("src")){var t=u.attr("lay-src");layui.img(t,function(){var e=v.lazyimg.elem.eq(k);u.attr("src",t).removeAttr("lay-src"),e[0]&&s(e),k++})}},s=function(x,z){var r=q?(z||j).height():a(window).height(),w=j.scrollTop(),i=w+r;if(v.lazyimg.elem=a(g),x){p(x,r)}else{for(var t=0;t<v.lazyimg.elem.length;t++){var A=v.lazyimg.elem.eq(t),n=q?function(){return A.offset().top-j.offset().top+w}():A.offset().top;if(p(A,r),k=t,n>i){break}}}};if(s(),!h){var l;j.on("scroll",function(){var f=a(this);l&&clearTimeout(l),l=setTimeout(function(){s(null,f)},50)}),h=!0}return s},c("flow",new d)});