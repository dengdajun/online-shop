layui.define("layer",function(p){var k=layui.jquery,w=layui.layer,y=layui.hint(),h=layui.device(),j="form",z=".layui-form",v="layui-this",b="layui-disabled",x=function(){this.config={verify:{required:[/[\S]+/,"必填项不能为空"],phone:[/^1\d{10}$/,"请输入正确的手机号"],email:[/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,"邮箱格式不正确"],url:[/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/,"链接格式不正确"],number:[/^\d+$/,"只能填写数字"],date:[/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/,"日期格式不正确"],identity:[/(^\d{15}$)|(^\d{17}(x|X|\d)$)/,"请输入正确的身份证号"]}}};x.prototype.set=function(d){var c=this;return k.extend(!0,c.config,d),c},x.prototype.verify=function(d){var c=this;return k.extend(!0,c.config.verify,d),c},x.prototype.on=function(c,a){return layui.onevent(j,c,a)},x.prototype.render=function(d){var c=this,f={select:function(){var s="请选择",i="layui-form-select",r="layui-select-title",B=k(z).find("select"),l=function(a,o){k(a.target).parent().hasClass(r)&&!o||k("."+i).removeClass(i+"ed")},A=function(t,C){var a=k(this),u=t.find("."+r);C||(u.on("click",function(e){t.hasClass(i+"ed")?t.removeClass(i+"ed"):(l(e,!0),t.addClass(i+"ed"))}),t.find("dl>dd").on("click",function(){var D=k(this),n=D.attr("lay-value"),o=a.attr("lay-filter");return !D.hasClass(b)&&(a.val(n).removeClass("layui-form-danger"),u.find("input").val(D.text()),D.addClass(v).siblings().removeClass(v),void layui.event(j,"select("+o+")",{elem:a[0],value:n}))}),t.find("dl>dt").on("click",function(n){return !1}),k(document).off("click",l).on("click",l))};B.each(function(F,a){var t=k(this),o=t.next("."+i),D=this.disabled,C=a.value,E=k(a.options[a.selectedIndex]),e=k(['<div class="layui-unselect '+i+(D?" layui-select-disabled":"")+'">','<div class="'+r+'"><input type="text" placeholder="'+(a.options[0].innerHTML?a.options[0].innerHTML:s)+'" value="'+(C?E.html():"")+'" readonly class="layui-input layui-unselect'+(D?" "+b:"")+'">','<i class="layui-edge"></i></div>','<dl class="layui-anim layui-anim-upbit'+(t.find("optgroup")[0]?" layui-select-group":"")+'">'+function(u){var n=[];return layui.each(u,function(H,G){(0!==H||G.value)&&("optgroup"===G.tagName.toLowerCase()?n.push("<dt>"+G.label+"</dt>"):n.push('<dd lay-value="'+G.value+'" class="'+(C===G.value?v:"")+(G.disabled?" "+b:"")+'">'+G.innerHTML+"</dd>"))}),n.join("")}(t.find("*"))+"</dl>","</div>"].join(""));o[0]&&o.remove(),t.after(e),A.call(this,e,D)})},checkbox:function(){var n={checkbox:["layui-form-checkbox","layui-form-checked","checkbox"],_switch:["layui-form-switch","layui-form-onswitch","switch"]},i=k(z).find("input[type=checkbox]"),l=function(s,o){var r=k(this);s.on("click",function(){var a=r.attr("lay-filter");r[0].disabled||(r[0].checked?(r[0].checked=!1,s.removeClass(o[1])):(r[0].checked=!0,s.addClass(o[1])),layui.event(j,o[2]+"("+a+")",{elem:r[0],value:r[0].value}))})};i.each(function(r,E){var e=k(this),A=e.attr("lay-skin"),D=this.disabled;"switch"===A&&(A="_"+A);var t=n[A]||n.checkbox,C=e.next("."+t[0]),B=k(['<div class="layui-unselect '+t[0]+(E.checked?" "+t[1]:"")+(D?" layui-checkbox-disbaled "+b:"")+'">',{_switch:"<i></i>"}[A]||"<span>"+(E.title||"勾选")+'</span><i class="layui-icon">&#xe618;</i>',"</div>"].join(""));C[0]&&C.remove(),e.after(B),l.call(this,B,t)})},radio:function(){var o="layui-form-radio",i=["&#xe643;","&#xe63f;"],l=k(z).find("input[type=radio]"),r=function(a){var s=k(this),e="layui-anim-scaleSpring";a.on("click",function(){var t=s[0].name,n=s.parents(z),B=s.attr("lay-filter"),A=n.find("input[name="+t.replace(/(\.|#|\[|\])/g,"\\$1")+"]");s[0].disabled||(layui.each(A,function(){var u=k(this).next("."+o);this.checked=!1,u.removeClass(o+"ed"),u.find(".layui-icon").removeClass(e).html(i[1])}),s[0].checked=!0,a.addClass(o+"ed"),a.find(".layui-icon").addClass(e).html(i[0]),layui.event(j,"radio("+B+")",{elem:s[0],value:s[0].value}))})};l.each(function(n,a){var A=k(this),C=A.next("."+o),e=this.disabled,B=k(['<div class="layui-unselect '+o+(a.checked?" "+o+"ed":"")+(e?" layui-radio-disbaled "+b:"")+'">','<i class="layui-anim layui-icon">'+i[a.checked?0:1]+"</i>","<span>"+(a.title||"未命名")+"</span>","</div>"].join(""));C[0]&&C.remove(),A.after(B),r.call(this,B)})}};return d?f[d]?f[d]():y.error("不支持的"+d+"表单渲染"):layui.each(f,function(l,a){a()}),c};var g=function(){var n=k(this),D=q.config.verify,s=null,a="layui-form-danger",C={},d=n.parents(z),l=d.find("*[lay-verify]"),A=n.parents("form")[0],B=d.find("input,select,textarea"),i=n.attr("lay-filter");return layui.each(l,function(F,c){var t=k(this),r=t.attr("lay-verify"),H="",G=t.val(),E="function"==typeof D[r];if(t.removeClass(a),D[r]&&(E?H=D[r](G,c):!D[r][0].test(G))){return w.msg(H||D[r][1],{icon:5,shift:6}),h.android||h.ios||c.focus(),t.addClass(a),s=!0}}),!s&&(layui.each(B,function(f,c){c.name&&(/^checkbox|radio$/.test(c.type)&&!c.checked||(C[c.name]=c.value))}),layui.event.call(this,j,"submit("+i+")",{elem:this,form:A,field:C}))},q=new x,m=k(document);q.render(),m.on("reset",z,function(){setTimeout(function(){q.render()},50)}),m.on("submit",z,g).on("click","*[lay-submit]",g),p(j,function(a){return q.set(a)})});