layui.define(function(h){var m=window,k={path:"",skin:"default",format:"YYYY-MM-DD",min:"1900-01-01 00:00:00",max:"2099-12-31 23:59:59",isv:!1,init:!0},c={},p=document,g="createElement",b="getElementById",f="getElementsByTagName",j=["laydate_box","laydate_void","laydate_click","LayDateSkin","skins/","/laydate.css"];m.laydate=function(a){return a=a||{},c.run(a),laydate},laydate.v="1.1",c.trim=function(a){return a=a||"",a.replace(/^\s|\s$/g,"").replace(/\s+/g," ")},c.digit=function(a){return a<10?"0"+(0|a):a},c.stopmp=function(a){return a=a||m.event,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,this},c.each=function(l,i){for(var d=0,o=l.length;d<o&&i(d,l[d])!==!1;d++){}},c.hasClass=function(d,a){return d=d||{},new RegExp("\\b"+a+"\\b").test(d.className)},c.addClass=function(d,a){return d=d||{},c.hasClass(d,a)||(d.className+=" "+a),d.className=c.trim(d.className),this},c.removeClass=function(l,i){if(l=l||{},c.hasClass(l,i)){var d=new RegExp("\\b"+i+"\\b");l.className=l.className.replace(d,"")}return this},c.removeCssAttr=function(l,i){var d=l.style;d.removeProperty?d.removeProperty(i):d.removeAttribute(i)},c.shde=function(d,a){d.style.display=a?"none":"block"},c.query=function(s){if(s&&1===s.nodeType){if("input"!==s.tagName.toLowerCase()){throw new Error("选择器elem错误")}return s}var o,s=c.trim(s).split(" "),l=p[b](s[0].substr(1));if(l){if(s[1]){if(/^\./.test(s[1])){var n,u=s[1].substr(1),q=new RegExp("\\b"+u+"\\b");return o=[],n=p.getElementsByClassName?l.getElementsByClassName(u):l[f]("*"),c.each(n,function(i,d){q.test(d.className)&&o.push(d)}),o[0]?o:""}return o=l[f](s[1]),o[0]?l[f](s[1]):""}return l}},c.on=function(l,d,i){return l.attachEvent?l.attachEvent("on"+d,function(){i.call(l,m.even)}):l.addEventListener(d,i,!1),c},c.stopMosup=function(d,a){"mouseup"!==d&&c.on(a,"mouseup",function(i){c.stopmp(i)})},c.run=function(d){var a=(c.query,d.elem);a&&(j.elemv=/textarea|input/.test(a.tagName.toLocaleLowerCase())?"value":"innerHTML",("init" in d?d.init:k.init)&&!a[j.elemv]&&(a[j.elemv]=laydate.now(null,d.format||k.format)),c.view(a,d),c.reshow())},c.scroll=function(a){return a=a?"scrollLeft":"scrollTop",p.body[a]|p.documentElement[a]},c.winarea=function(a){return document.documentElement[a?"clientWidth":"clientHeight"]},c.isleap=function(a){return a%4===0&&a%100!==0||a%400===0},c.checkVoid=function(n,i,d){var l=[];return n=0|n,i=0|i,d=0|d,n<c.mins[0]?l=["y"]:n>c.maxs[0]?l=["y",1]:n>=c.mins[0]&&n<=c.maxs[0]&&(n==c.mins[0]&&(i<c.mins[1]?l=["m"]:i==c.mins[1]&&d<c.mins[2]&&(l=["d"])),n==c.maxs[0]&&(i>c.maxs[1]?l=["m",1]:i==c.maxs[1]&&d>c.maxs[2]&&(l=["d",1]))),l},c.timeVoid=function(d,a){if(c.ymd[1]+1==c.mins[1]&&c.ymd[2]==c.mins[2]){if(0===a&&d<c.mins[3]){return 1}if(1===a&&d<c.mins[4]){return 1}if(2===a&&d<c.mins[5]){return 1}}else{if(c.ymd[1]+1==c.maxs[1]&&c.ymd[2]==c.maxs[2]){if(0===a&&d>c.maxs[3]){return 1}if(1===a&&d>c.maxs[4]){return 1}if(2===a&&d>c.maxs[5]){return 1}}}if(d>(a?59:23)){return 1}},c.check=function(){var q=c.options.format.replace(/YYYY|MM|DD|hh|mm|ss/g,"\\d+\\").replace(/\\$/g,""),n=new RegExp(q),d=c.elem[j.elemv],o=d.match(/\d+/g)||[],l=c.checkVoid(o[0],o[1],o[2]);if(""!==d.replace(/\s/g,"")){if(!n.test(d)){return c.elem[j.elemv]="",c.msg("日期不符合格式，请重新选择。"),1}if(l[0]){return c.elem[j.elemv]="",c.msg("日期不在有效期内，请重新选择。"),1}l.value=c.elem[j.elemv].match(n).join(),o=l.value.match(/\d+/g),o[1]<1?(o[1]=1,l.auto=1):o[1]>12?(o[1]=12,l.auto=1):o[1].length<2&&(l.auto=1),o[2]<1?(o[2]=1,l.auto=1):o[2]>c.months[(0|o[1])-1]?(o[2]=31,l.auto=1):o[2].length<2&&(l.auto=1),o.length>3&&(c.timeVoid(o[3],0)&&(l.auto=1),c.timeVoid(o[4],1)&&(l.auto=1),c.timeVoid(o[5],2)&&(l.auto=1)),l.auto?c.creation([o[0],0|o[1],0|o[2]],1):l.value!==c.elem[j.elemv]&&(c.elem[j.elemv]=l.value)}},c.months=[31,null,31,30,31,30,31,31,30,31,30,31],c.viewDate=function(q,n,d){var o=(c.query,{}),l=new Date;q<(0|c.mins[0])&&(q=0|c.mins[0]),q>(0|c.maxs[0])&&(q=0|c.maxs[0]),l.setFullYear(q,n,d),o.ymd=[l.getFullYear(),l.getMonth(),l.getDate()],c.months[1]=c.isleap(o.ymd[0])?29:28,l.setFullYear(o.ymd[0],o.ymd[1],1),o.FDay=l.getDay(),o.PDay=c.months[0===n?11:n-1]-o.FDay+1,o.NDay=1,c.each(j.tds,function(v,u){var r,s=o.ymd[0],w=o.ymd[1]+1;u.className="",v<o.FDay?(u.innerHTML=r=v+o.PDay,c.addClass(u,"laydate_nothis"),1===w&&(s-=1),w=1===w?12:w-1):v>=o.FDay&&v<o.FDay+c.months[o.ymd[1]]?(u.innerHTML=r=v-o.FDay+1,v-o.FDay+1===o.ymd[2]&&(c.addClass(u,j[2]),o.thisDay=u)):(u.innerHTML=r=o.NDay++,c.addClass(u,"laydate_nothis"),12===w&&(s+=1),w=12===w?1:w+1),c.checkVoid(s,w,r)[0]&&c.addClass(u,j[1]),c.options.festival&&c.festival(u,w+"."+r),u.setAttribute("y",s),u.setAttribute("m",w),u.setAttribute("d",r),s=w=r=null}),c.valid=!c.hasClass(o.thisDay,j[1]),c.ymd=o.ymd,j.year.value=c.ymd[0]+"年",j.month.value=c.digit(c.ymd[1]+1)+"月",c.each(j.mms,function(s,r){var i=c.checkVoid(c.ymd[0],(0|r.getAttribute("m"))+1);"y"===i[0]||"m"===i[0]?c.addClass(r,j[1]):c.removeClass(r,j[1]),c.removeClass(r,j[2]),i=null}),c.addClass(j.mms[c.ymd[1]],j[2]),o.times=[0|c.inymd[3]||0,0|c.inymd[4]||0,0|c.inymd[5]||0],c.each(new Array(3),function(a){c.hmsin[a].value=c.digit(c.timeVoid(o.times[a],a)?0|c.mins[a+3]:0|o.times[a])}),c[c.valid?"removeClass":"addClass"](j.ok,j[1])},c.festival=function(l,i){var d;switch(i){case"1.1":d="元旦";break;case"3.8":d="妇女";break;case"4.5":d="清明";break;case"5.1":d="劳动";break;case"6.1":d="儿童";break;case"9.10":d="教师";break;case"10.1":d="国庆"}d&&(l.innerHTML=d),d=null},c.viewYears=function(l){var i=c.query,d="";c.each(new Array(14),function(a){d+=7===a?"<li "+(parseInt(j.year.value)===l?'class="'+j[2]+'"':"")+' y="'+l+'">'+l+"年</li>":'<li y="'+(l-7+a)+'">'+(l-7+a)+"年</li>"}),i("#laydate_ys").innerHTML=d,c.each(i("#laydate_ys li"),function(n,a){"y"===c.checkVoid(a.getAttribute("y"))[0]?c.addClass(a,j[1]):c.on(a,"click",function(o){c.stopmp(o).reshow(),c.viewDate(0|this.getAttribute("y"),c.ymd[1],c.ymd[2])})})},c.initDate=function(){var d=(c.query,new Date),a=c.elem[j.elemv].match(/\d+/g)||[];a.length<3&&(a=c.options.start.match(/\d+/g)||[],a.length<3&&(a=[d.getFullYear(),d.getMonth()+1,d.getDate()])),c.inymd=a,c.viewDate(a[0],a[1]-1,a[2])},c.iswrite=function(){var d=c.query,a={time:d("#laydate_hms")};c.shde(a.time,!c.options.istime),c.shde(j.oclear,!("isclear" in c.options?c.options.isclear:1)),c.shde(j.otoday,!("istoday" in c.options?c.options.istoday:1)),c.shde(j.ok,!("issure" in c.options?c.options.issure:1))},c.orien=function(n,i){var d,l=c.elem.getBoundingClientRect();n.style.left=l.left+(i?0:c.scroll(1))+"px",d=l.bottom+n.offsetHeight/1.5<=c.winarea()?l.bottom-1:l.top>n.offsetHeight/1.5?l.top-n.offsetHeight+1:c.winarea()-n.offsetHeight,n.style.top=Math.max(d+(i?0:c.scroll()),1)+"px"},c.follow=function(a){c.options.fixed?(a.style.position="fixed",c.orien(a,1)):(a.style.position="absolute",c.orien(a))},c.viewtb=function(){var q,l=[],i=["日","一","二","三","四","五","六"],u={},s=p[g]("table"),n=p[g]("thead");return n.appendChild(p[g]("tr")),u.creath=function(d){var a=p[g]("th");a.innerHTML=i[d],n[f]("tr")[0].appendChild(a),a=null},c.each(new Array(6),function(d){l.push([]),q=s.insertRow(0),c.each(new Array(7),function(a){l[d][a]=0,0===d&&u.creath(a),q.insertCell(a)})}),s.insertBefore(n,s.children[0]),s.id=s.className="laydate_table",q=l=null,s.outerHTML.toLowerCase()}(),c.view=function(n,d){var q,a=c.query,i={};d=d||n,c.elem=n,c.options=d,c.options.format||(c.options.format=k.format),c.options.start=c.options.start||"",c.mm=i.mm=[c.options.min||k.min,c.options.max||k.max],c.mins=i.mm[0].match(/\d+/g),c.maxs=i.mm[1].match(/\d+/g),c.box?c.shde(c.box):(q=p[g]("div"),q.id=j[0],q.className=j[0],q.style.cssText="position: absolute;",q.setAttribute("name","laydate-v"+laydate.v),q.innerHTML=i.html='<div class="laydate_top"><div class="laydate_ym laydate_y" id="laydate_YY"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_y" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms"><a class="laydate_tab laydate_chtop"><cite></cite></a><ul id="laydate_ys"></ul><a class="laydate_tab laydate_chdown"><cite></cite></a></div></div><div class="laydate_ym laydate_m" id="laydate_MM"><a class="laydate_choose laydate_chprev laydate_tab"><cite></cite></a><input id="laydate_m" readonly><label></label><a class="laydate_choose laydate_chnext laydate_tab"><cite></cite></a><div class="laydate_yms" id="laydate_ms">'+function(){var l="";return c.each(new Array(12),function(e){l+='<span m="'+e+'">'+c.digit(e+1)+"月</span>"}),l}()+"</div></div></div>"+c.viewtb+'<div class="laydate_bottom"><ul id="laydate_hms"><li class="laydate_sj">时间</li><li><input readonly>:</li><li><input readonly>:</li><li><input readonly></li></ul><div class="laydate_time" id="laydate_time"></div><div class="laydate_btn"><a id="laydate_clear">清空</a><a id="laydate_today">今天</a><a id="laydate_ok">确认</a></div>'+(k.isv?'<a href="http://sentsin.com/layui/laydate/" class="laydate_v" target="_blank">laydate-v'+laydate.v+"</a>":"")+"</div>",p.body.appendChild(q),c.box=a("#"+j[0]),c.events(),q=null),c.follow(c.box),d.zIndex?c.box.style.zIndex=d.zIndex:c.removeCssAttr(c.box,"z-index"),c.stopMosup("click",c.box),c.initDate(),c.iswrite(),c.check()},c.reshow=function(){return c.each(c.query("#"+j[0]+" .laydate_show"),function(d,a){c.removeClass(a,"laydate_show")}),this},c.close=function(){c.reshow(),c.shde(c.query("#"+j[0]),1),c.elem=null},c.parse=function(i,a,d){return i=i.concat(a),d=d||(c.options?c.options.format:k.format),d.replace(/YYYY|MM|DD|hh|mm|ss/g,function(l,e){return i.index=0|++i.index,c.digit(i[i.index])})},c.creation=function(n,i){var d=(c.query,c.hmsin),l=c.parse(n,[d[0].value,d[1].value,d[2].value]);c.elem[j.elemv]=l,i||(c.close(),"function"==typeof c.options.choose&&c.options.choose(l))},c.events=function(){var i=c.query,d={box:"#"+j[0]};c.addClass(p.body,"laydate_body"),j.tds=i("#laydate_table td"),j.mms=i("#laydate_ms span"),j.year=i("#laydate_y"),j.month=i("#laydate_m"),c.each(i(d.box+" .laydate_ym"),function(l,a){c.on(a,"click",function(e){c.stopmp(e).reshow(),c.addClass(this[f]("div")[0],"laydate_show"),l||(d.YY=parseInt(j.year.value),c.viewYears(d.YY))})}),c.on(i(d.box),"click",function(){c.reshow()}),d.tabYear=function(a){0===a?c.ymd[0]--:1===a?c.ymd[0]++:2===a?d.YY-=14:d.YY+=14,a<2?(c.viewDate(c.ymd[0],c.ymd[1],c.ymd[2]),c.reshow()):c.viewYears(d.YY)},c.each(i("#laydate_YY .laydate_tab"),function(l,a){c.on(a,"click",function(e){c.stopmp(e),d.tabYear(l)})}),d.tabMonth=function(a){a?(c.ymd[1]++,12===c.ymd[1]&&(c.ymd[0]++,c.ymd[1]=0)):(c.ymd[1]--,c.ymd[1]===-1&&(c.ymd[0]--,c.ymd[1]=11)),c.viewDate(c.ymd[0],c.ymd[1],c.ymd[2])},c.each(i("#laydate_MM .laydate_tab"),function(l,a){c.on(a,"click",function(e){c.stopmp(e).reshow(),d.tabMonth(l)})}),c.each(i("#laydate_ms span"),function(l,a){c.on(a,"click",function(n){c.stopmp(n).reshow(),c.hasClass(this,j[1])||c.viewDate(c.ymd[0],0|this.getAttribute("m"),c.ymd[2])})}),c.each(i("#laydate_table td"),function(l,a){c.on(a,"click",function(n){c.hasClass(this,j[1])||(c.stopmp(n),c.creation([0|this.getAttribute("y"),0|this.getAttribute("m"),0|this.getAttribute("d")]))})}),j.oclear=i("#laydate_clear"),c.on(j.oclear,"click",function(){c.elem[j.elemv]="",c.close()}),j.otoday=i("#laydate_today"),c.on(j.otoday,"click",function(){var a=new Date;c.creation([a.getFullYear(),a.getMonth()+1,a.getDate()])}),j.ok=i("#laydate_ok"),c.on(j.ok,"click",function(){c.valid&&c.creation([c.ymd[0],c.ymd[1]+1,c.ymd[2]])}),d.times=i("#laydate_time"),c.hmsin=d.hmsin=i("#laydate_hms input"),d.hmss=["小时","分钟","秒数"],d.hmsarr=[],c.msg=function(e,l){var a='<div class="laydte_hsmtex">'+(l||"提示")+"<span>×</span></div>";"string"==typeof e?(a+="<p>"+e+"</p>",c.shde(i("#"+j[0])),c.removeClass(d.times,"laydate_time1").addClass(d.times,"laydate_msg")):(d.hmsarr[e]?a=d.hmsarr[e]:(a+='<div id="laydate_hmsno" class="laydate_hmsno">',c.each(new Array(0===e?24:60),function(n){a+="<span>"+n+"</span>"}),a+="</div>",d.hmsarr[e]=a),c.removeClass(d.times,"laydate_msg"),c[0===e?"removeClass":"addClass"](d.times,"laydate_time1")),c.addClass(d.times,"laydate_show"),d.times.innerHTML=a},d.hmson=function(n,e){var o=i("#laydate_hmsno span"),l=c.valid?null:1;c.each(o,function(q,a){l?c.addClass(a,j[1]):c.timeVoid(q,e)?c.addClass(a,j[1]):c.on(a,"click",function(r){c.hasClass(this,j[1])||(n.value=c.digit(0|this.innerHTML))})}),c.addClass(o[0|n.value],"laydate_click")},c.each(d.hmsin,function(l,a){c.on(a,"click",function(e){c.stopmp(e).reshow(),c.msg(l,d.hmss[l]),d.hmson(this,l)})}),c.on(p,"mouseup",function(){var a=i("#"+j[0]);a&&"none"!==a.style.display&&(c.check()||c.close())}).on(p,"keydown",function(n){n=n||m.event;var l=n.keyCode;13===l&&c.elem&&c.creation([c.ymd[0],c.ymd[1]+1,c.ymd[2]])})},laydate.reset=function(){c.box&&c.elem&&c.follow(c.box)},laydate.now=function(l,i){var d=new Date(0|l?function(a){return a<86400000?+new Date+86400000*a:a}(parseInt(l)):+new Date);return c.parse([d.getFullYear(),d.getMonth()+1,d.getDate()],[d.getHours(),d.getMinutes(),d.getSeconds()],i)},layui.addcss("modules/laydate/laydate.css",function(){},"laydatecss"),h("laydate",laydate)});