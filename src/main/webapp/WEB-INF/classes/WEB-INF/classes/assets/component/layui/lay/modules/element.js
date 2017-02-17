layui.define("jquery",function(o){var t=layui.jquery,b=(layui.hint(),layui.device()),i="element",p="layui-this",s="layui-show",r=function(){this.config={}};r.prototype.set=function(j){var g=this;return t.extend(!0,g.config,j),g},r.prototype.on=function(g,j){return layui.onevent(i,g,j)},r.prototype.tabAdd=function(m,q){var k=t(".layui-tab[lay-filter="+m+"]"),g=k.children(".layui-tab-title"),j=k.children(".layui-tab-content");return g.append("<li>"+(q.title||"unnaming")+"</li>"),j.append('<div class="layui-tab-item">'+(q.content||"")+"</div>"),y.tabAuto(),this},r.prototype.tabDelete=function(k,m){var j=t(".layui-tab[lay-filter="+k+"]"),g=j.children(".layui-tab-title").find(">li").eq(m);return y.tabDelete(null,g),this},r.prototype.tabChange=function(k,m){var j=t(".layui-tab[lay-filter="+k+"]"),g=j.children(".layui-tab-title").find(">li").eq(m);return y.tabClick(null,m,g),this};var a=".layui-nav",e="layui-nav-item",f="layui-nav-bar",u="layui-nav-tree",h="layui-nav-child",n="layui-nav-more",l="layui-anim layui-anim-upbit",y={tabClick:function(q,g,m){var j=m||t(this),g=g||j.index(),x=j.parents(".layui-tab"),k=x.children(".layui-tab-content").children(".layui-tab-item"),w=x.attr("lay-filter");j.addClass(p).siblings().removeClass(p),k.eq(g).addClass(s).siblings().removeClass(s),layui.event.call(this,i,"tab("+w+")",{elem:x,index:g})},tabDelete:function(w,g){var m=g||t(this).parent(),j=m.index(),q=m.parents(".layui-tab"),k=q.children(".layui-tab-content").children(".layui-tab-item");m.hasClass(p)&&(m.next()[0]?y.tabClick.call(m.next()[0],null,j+1):m.prev()[0]&&y.tabClick.call(m.prev()[0],null,j-1)),m.remove(),k.eq(j).remove()},tabAuto:function(){var g="layui-tab-more",m="layui-tab-bar",j="layui-tab-close",k=this;t(".layui-tab").each(function(){var z=t(this),w=z.children(".layui-tab-title"),q=(z.children(".layui-tab-content").children(".layui-tab-item"),'lay-stope="tabmore"'),x=t('<span class="layui-unselect layui-tab-bar" '+q+"><i "+q+' class="layui-icon">&#xe61a;</i></span>');if(k===window&&8!=b.ie&&y.hideTabMore(!0),z.attr("lay-allowClose")&&w.find("li").each(function(){var B=t(this);if(!B.find("."+j)[0]){var A=t('<i class="layui-icon layui-unselect '+j+'">&#x1006;</i>');A.on("click",y.tabDelete),B.append(A)}}),w.prop("scrollWidth")>w.outerWidth()+1){if(w.find("."+m)[0]){return}w.append(x),x.on("click",function(A){w[this.title?"removeClass":"addClass"](g),this.title=this.title?"":"收缩"})}else{w.find("."+m).remove()}})},hideTabMore:function(j){var g=t(".layui-tab-title");j!==!0&&"tabmore"===t(j.target).attr("lay-stope")||(g.removeClass("layui-tab-more"),g.find(".layui-tab-bar").attr("title",""))},clickThis:function(){var k=t(this),g=k.parents(a),j=g.attr("lay-filter");k.find("."+h)[0]||(g.find("."+p).removeClass(p),k.addClass(p),layui.event.call(this,i,"nav("+j+")",k))},clickChild:function(){var k=t(this),g=k.parents(a),j=g.attr("lay-filter");g.find("."+p).removeClass(p),k.addClass(p),layui.event.call(this,i,"nav("+j+")",k)},showChild:function(){var k=t(this),m=k.parents(a),j=k.parent(),g=k.siblings("."+h);m.hasClass(u)&&(g.removeClass(l),j["none"===g.css("display")?"addClass":"removeClass"](e+"ed"))}};r.prototype.init=function(j){var g={tab:function(){y.tabAuto.call({})},nav:function(){var q,x,w,m=200,k=function(A,C){var B=t(this),z=B.find("."+h);C.hasClass(u)?A.css({top:B.position().top,height:B.children("a").height(),opacity:1}):(z.addClass(l),A.css({left:B.position().left+parseFloat(B.css("marginLeft")),top:B.position().top+B.height()-5}),q=setTimeout(function(){A.css({width:B.width(),opacity:1})},b.ie&&b.ie<10?0:m),clearTimeout(w),"block"===z.css("display")&&clearTimeout(x),x=setTimeout(function(){z.addClass(s),B.find("."+n).addClass(n+"d")},300))};t(a).each(function(){var B=t(this),z=t('<span class="'+f+'"></span>'),A=B.find("."+e);B.find("."+f)[0]||(B.append(z),A.on("mouseenter",function(){k.call(this,z,B)}).on("mouseleave",function(){B.hasClass(u)||(clearTimeout(x),x=setTimeout(function(){B.find("."+h).removeClass(s),B.find("."+n).removeClass(n+"d")},300))}),B.on("mouseleave",function(){clearTimeout(q),w=setTimeout(function(){B.hasClass(u)?z.css({height:0,top:z.position().top+z.height()/2,opacity:0}):z.css({width:0,left:z.position().left+z.width()/2,opacity:0})},m)})),A.each(function(){var D=t(this),E=D.find("."+h);if(E[0]&&!D.find("."+n)[0]){var C=D.children("a");C.append('<span class="'+n+'"></span>')}D.off("click",y.clickThis).on("click",y.clickThis),D.children("a").off("click",y.showChild).on("click",y.showChild),E.children("dd").off("click",y.clickChild).on("click",y.clickChild)})})},breadcrumb:function(){var k=".layui-breadcrumb";t(k).each(function(){var q=t(this),w=q.attr("lay-separator")||">",m=q.find("a");m.find(".layui-box")[0]||(m.each(function(x){x!==m.length-1&&t(this).append('<span class="layui-box">'+w+"</span>")}),q.css("visibility","visible"))})}};return layui.each(g,function(k,m){m()})};var d=new r,c=t(document);d.init();var v=".layui-tab-title li";c.on("click",v,y.tabClick),c.on("click",y.hideTabMore),t(window).on("resize",y.tabAuto),o(i,function(g){return d.set(g)})});