layui.config({base:"js/lib/layui/assembly/"}).use(["element","layer","navbar","tab"],function(){var d=layui.element(),g=layui.jquery,c=layui.layer,f=layui.navbar(),e=layui.tab({elem:".admin-nav-card"});g(window).on("resize",function(){var h=g(".admin-nav-card .layui-tab-content");h.height(g(this).height()-147);h.find("iframe").each(function(){g(this).height(h.height())})}).resize();g(function(){g(document).ajaxError(function(j,k,i,h){c.msg(k.responseText)})});f.set({spreadOne:true,elem:"#admin-navbar-side",cached:true,type:"POST",url:"protal/list"});f.render();f.on("click(side)",function(h){e.tabAdd(h.field)});g(".admin-side-toggle").on("click",function(){var h=g("#admin-side").width();if(h===200){g("#admin-body").animate({left:"0"});g("#admin-footer").animate({left:"0"});g("#admin-side").animate({width:"0"})}else{g("#admin-body").animate({left:"200px"});g("#admin-footer").animate({left:"200px"});g("#admin-side").animate({width:"200px"})}});g(document).on("keydown",function(){var h=window.event;if(h.keyCode===76&&h.altKey){lock(g,c)}});g("#lock").on("click",function(){lock(g,c)});var b=g(".site-tree-mobile"),a=g(".site-mobile-shade");b.on("click",function(){g("body").addClass("site-mobile")});a.on("click",function(){g("body").removeClass("site-mobile")})});function lock(b,a){a.open({title:false,type:1,closeBtn:0,anim:6,content:b("#lock-temp").html(),shade:[0.9,"#393D49"],success:function(c,d){c.find("div#lockUserName").text("admin");c.find("input[name=lockPwd]").on("focus",function(){var f=b(this);if(f.val()==="输入密码解锁.."){f.val("").attr("type","password")}}).on("blur",function(){var f=b(this);if(f.val()===""||f.length===0){f.attr("type","text").val("输入密码解锁..")}});c.find("button#unlock").on("click",function(){var g=b("div#lock-box");var f=g.find("div#lockUserName").text();var h=g.find("input[name=lockPwd]").val();if(h==="输入密码解锁.."||h.length===0){a.msg("请输入密码..",{icon:2,time:1000});return}e(f,h)});var e=function(f,g){a.close(d)}}})};