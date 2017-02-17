layui.define("jquery",function(C){var m=layui.jquery,J=(layui.hint(),layui.device()),F="element",B="layui-this",A="layui-show",q=function(){this.config={}};q.prototype.set=function(c){var b=this;return m.extend(!0,b.config,c),b},q.prototype.on=function(b,a){return layui.onevent(F,b,a)},q.prototype.tabAdd=function(d,c){var f=m(".layui-tab[lay-filter="+d+"]"),b=f.children(".layui-tab-title"),h=f.children(".layui-tab-content");return b.append("<li>"+(c.title||"unnaming")+"</li>"),h.append('<div class="layui-tab-item">'+(c.content||"")+"</div>"),g.tabAuto(),this},q.prototype.tabDelete=function(d,c){var f=m(".layui-tab[lay-filter="+d+"]"),b=f.children(".layui-tab-title").find(">li").eq(c);return g.tabDelete(null,b),this},q.prototype.tabChange=function(d,c){var f=m(".layui-tab[lay-filter="+d+"]"),b=f.children(".layui-tab-title").find(">li").eq(c);return g.tabClick(null,c,b),this};var z=".layui-nav",H="layui-nav-item",w="layui-nav-bar",k="layui-nav-tree",G="layui-nav-child",D="layui-nav-more",E="layui-anim layui-anim-upbit",g={tabClick:function(e,b,f){var l=f||m(this),b=b||l.index(),n=l.parents(".layui-tab"),h=n.children(".layui-tab-content").children(".layui-tab-item"),d=n.attr("lay-filter");l.addClass(B).siblings().removeClass(B),h.eq(b).addClass(A).siblings().removeClass(A),layui.event.call(this,F,"tab("+d+")",{elem:n,index:b})},tabDelete:function(c,b){var f=b||m(this).parent(),l=f.index(),d=f.parents(".layui-tab"),h=d.children(".layui-tab-content").children(".layui-tab-item");f.hasClass(B)&&(f.next()[0]?g.tabClick.call(f.next()[0],null,l+1):f.prev()[0]&&g.tabClick.call(f.prev()[0],null,l-1)),f.remove(),h.eq(l).remove()},tabAuto:function(){var b="layui-tab-more",c="layui-tab-bar",a="layui-tab-close",d=this;m(".layui-tab").each(function(){var e=m(this),h=e.children(".layui-tab-title"),i=(e.children(".layui-tab-content").children(".layui-tab-item"),'lay-stope="tabmore"'),f=m('<span class="layui-unselect layui-tab-bar" '+i+"><i "+i+' class="layui-icon">&#xe61a;</i></span>');if(d===window&&8!=J.ie&&g.hideTabMore(!0),e.attr("lay-allowClose")&&h.find("li").each(function(){var n=m(this);if(!n.find("."+a)[0]){var l=m('<i class="layui-icon layui-unselect '+a+'">&#x1006;</i>');l.on("click",g.tabDelete),n.append(l)}}),h.prop("scrollWidth")>h.outerWidth()+1){if(h.find("."+c)[0]){return}h.append(f),f.on("click",function(l){h[this.title?"removeClass":"addClass"](b),this.title=this.title?"":"收缩"})}else{h.find("."+c).remove()}})},hideTabMore:function(c){var b=m(".layui-tab-title");c!==!0&&"tabmore"===m(c.target).attr("lay-stope")||(b.removeClass("layui-tab-more"),b.find(".layui-tab-bar").attr("title",""))},clickThis:function(){var c=m(this),b=c.parents(z),d=b.attr("lay-filter");c.find("."+G)[0]||(b.find("."+B).removeClass(B),c.addClass(B),layui.event.call(this,F,"nav("+d+")",c))},clickChild:function(){var c=m(this),b=c.parents(z),d=b.attr("lay-filter");b.find("."+B).removeClass(B),c.addClass(B),layui.event.call(this,F,"nav("+d+")",c)},showChild:function(){var d=m(this),c=d.parents(z),f=d.parent(),b=d.siblings("."+G);c.hasClass(k)&&(b.removeClass(E),f["none"===b.css("display")?"addClass":"removeClass"](H+"ed"))}};q.prototype.init=function(a){var b={tab:function(){g.tabAuto.call({})},nav:function(){var d,n,c,f=200,h=function(i,p){var e=m(this),l=e.find("."+G);p.hasClass(k)?i.css({top:e.position().top,height:e.children("a").height(),opacity:1}):(l.addClass(E),i.css({left:e.position().left+parseFloat(e.css("marginLeft")),top:e.position().top+e.height()-5}),d=setTimeout(function(){i.css({width:e.width(),opacity:1})},J.ie&&J.ie<10?0:f),clearTimeout(c),"block"===l.css("display")&&clearTimeout(n),n=setTimeout(function(){l.addClass(A),e.find("."+D).addClass(D+"d")},300))};m(z).each(function(){var e=m(this),l=m('<span class="'+w+'"></span>'),i=e.find("."+H);e.find("."+w)[0]||(e.append(l),i.on("mouseenter",function(){h.call(this,l,e)}).on("mouseleave",function(){e.hasClass(k)||(clearTimeout(n),n=setTimeout(function(){e.find("."+G).removeClass(A),e.find("."+D).removeClass(D+"d")},300))}),e.on("mouseleave",function(){clearTimeout(d),c=setTimeout(function(){e.hasClass(k)?l.css({height:0,top:l.position().top+l.height()/2,opacity:0}):l.css({width:0,left:l.position().left+l.width()/2,opacity:0})},f)})),i.each(function(){var p=m(this),o=p.find("."+G);if(o[0]&&!p.find("."+D)[0]){var r=p.children("a");r.append('<span class="'+D+'"></span>')}p.off("click",g.clickThis).on("click",g.clickThis),p.children("a").off("click",g.showChild).on("click",g.showChild),o.children("dd").off("click",g.clickChild).on("click",g.clickChild)})})},breadcrumb:function(){var c=".layui-breadcrumb";m(c).each(function(){var f=m(this),d=f.attr("lay-separator")||">",h=f.find("a");h.find(".layui-box")[0]||(h.each(function(e){e!==h.length-1&&m(this).append('<span class="layui-box">'+d+"</span>")}),f.css("visibility","visible"))})}};return layui.each(b,function(d,c){c()})};var x=new q,I=m(document);x.init();var j=".layui-tab-title li";I.on("click",j,g.tabClick),I.on("click",g.hideTabMore),m(window).on("resize",g.tabAuto),C(F,function(a){return x.set(a)})});