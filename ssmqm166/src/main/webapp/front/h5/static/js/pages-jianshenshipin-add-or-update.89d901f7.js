(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jianshenshipin-add-or-update"],{"0d27":function(i,e,t){"use strict";var r,n=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 0 2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[i._v("视频名称")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 170, 51, 1)",borderRadius:"8rpx",color:"rgba(51, 51, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{disabled:i.ro.shipinmingcheng,placeholder:"视频名称"},model:{value:i.ruleForm.shipinmingcheng,callback:function(e){i.$set(i.ruleForm,"shipinmingcheng",e)},expression:"ruleForm.shipinmingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 0 2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[i._v("视频类型")]),t("v-uni-picker",{attrs:{value:i.shipinleixingIndex,range:i.shipinleixingOptions},on:{change:function(e){arguments[0]=e=i.$handleEvent(e),i.shipinleixingChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 170, 51, 1)",borderRadius:"8rpx",color:"rgba(51, 51, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"}},[i._v(i._s(i.ruleForm.shipinleixing?i.ruleForm.shipinleixing:"请选择视频类型"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==i.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"140rpx"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.fengmiantuTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[i._v("封面图")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[i.ruleForm.fengmiantu?t("v-uni-image",{staticClass:"avator",style:{width:"120rpx",boxShadow:"0 0 8rpx rgba(0,0,0,.3)",borderRadius:"50%",textAlign:"left",height:"120rpx"},attrs:{src:i.ruleForm.fengmiantu,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"120rpx",boxShadow:"0 0 8rpx rgba(0,0,0,.3)",borderRadius:"50%",textAlign:"left",height:"120rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==i.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"140rpx"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.shipinTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[i._v("视频")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[i.ruleForm.shipin?t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 170, 51, 1)",borderRadius:"8rpx",color:"rgba(51, 51, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"},attrs:{placeholder:"视频"},model:{value:i.ruleForm.shipin,callback:function(e){i.$set(i.ruleForm,"shipin",e)},expression:"ruleForm.shipin"}}):t("v-uni-image",{staticClass:"avator",style:{width:"120rpx",boxShadow:"0 0 8rpx rgba(0,0,0,.3)",borderRadius:"50%",textAlign:"left",height:"120rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"rgba(245, 245, 245, 1)",margin:"0",borderWidth:"0 0 2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[i._v("发布日期")]),t("v-uni-picker",{attrs:{mode:"date",value:i.ruleForm.faburiqi},on:{change:function(e){arguments[0]=e=i.$handleEvent(e),i.faburiqiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 170, 51, 1)",borderRadius:"8rpx",color:"rgba(51, 51, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"26rpx",borderStyle:"solid",height:"80rpx"}},[i._v(i._s(i.ruleForm.faburiqi?i.ruleForm.faburiqi:"请选择发布日期"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 107, 19, 0.1)",borderColor:"rgba(245, 245, 245, 1)",margin:"0 0 0 0",borderWidth:"0 0 2rpx",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"200rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"right"}},[i._v("视频介绍")]),t("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"rgba(255, 170, 51, 1)",borderRadius:"8rpx",color:"rgba(51, 51, 51, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"视频介绍"},model:{value:i.ruleForm.shipinjieshao,callback:function(e){i.$set(i.ruleForm,"shipinjieshao",e)},expression:"ruleForm.shipinjieshao"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(255, 107, 19, 1)",borderColor:"rgba(255, 107, 19, 1)",borderRadius:"20rpx",color:"#fff",borderWidth:"0",width:"100%",fontSize:"32rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.onSubmitTap.apply(void 0,arguments)}}},[i._v("提交")])],1)],1)],1)},a=[];t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return r}))},"34cb":function(i,e,t){var r=t("24fb");e=r(!1),e.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-01de835a]{padding:%?20?%}.content[data-v-01de835a]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-01de835a]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-01de835a]{width:%?180?%}.avator[data-v-01de835a]{width:%?150?%;height:%?60?%}.right-input[data-v-01de835a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-01de835a]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-01de835a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-01de835a]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-01de835a]{border:0}.cu-form-group uni-input[data-v-01de835a]{padding:0 %?30?%}.uni-input[data-v-01de835a]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-01de835a]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-01de835a]::after{line-height:%?80?%}.select .uni-input[data-v-01de835a]{line-height:%?80?%}.input .right-input[data-v-01de835a]{line-height:%?80?%}',""]),i.exports=e},"547e":function(i,e,t){var r=t("34cb");"string"===typeof r&&(r=[[i.i,r,""]]),r.locals&&(i.exports=r.locals);var n=t("4f06").default;n("00501b58",r,!0,{sourceMap:!1,shadowMode:!1})},"5b6d":function(i,e,t){"use strict";t.r(e);var r=t("c99b"),n=t.n(r);for(var a in r)"default"!==a&&function(i){t.d(e,i,(function(){return r[i]}))}(a);e["default"]=n.a},8608:function(i,e,t){"use strict";t.r(e);var r=t("0d27"),n=t("5b6d");for(var a in n)"default"!==a&&function(i){t.d(e,i,(function(){return n[i]}))}(a);t("d2f7");var o,s=t("f0c5"),u=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"01de835a",null,!1,r["a"],o);e["default"]=u.exports},c99b:function(i,e,t){"use strict";var r=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("ac6a"),t("96cf");var n=r(t("3b8d")),a=r(t("e2b1")),o={data:function(){return{ruleForm:{shipinmingcheng:"",shipinleixing:"",fengmiantu:"",shipin:"",shipinjieshao:"",faburiqi:"",userid:""},shipinleixingOptions:[],shipinleixingIndex:0,user:{},ro:{shipinmingcheng:!1,shipinleixing:!1,fengmiantu:!1,shipin:!1,shipinjieshao:!1,faburiqi:!1,clicknum:!1,userid:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var i=(0,n.default)(regeneratorRuntime.mark((function i(e){var t,r,n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t=uni.getStorageSync("nowTable"),i.next=3,this.$api.session(t);case 3:return r=i.sent,this.user=r.data,i.next=7,this.$api.option("shipinleixing","leixing",{});case 7:if(r=i.sent,this.shipinleixingOptions=r.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){i.next=17;break}return this.ruleForm.id=e.id,i.next=15,this.$api.info("jianshenshipin",this.ruleForm.id);case 15:r=i.sent,this.ruleForm=r.data;case 17:if(!e.cross){i.next=56;break}n=uni.getStorageSync("crossObj"),i.t0=regeneratorRuntime.keys(n);case 20:if((i.t1=i.t0()).done){i.next=56;break}if(a=i.t1.value,"shipinmingcheng"!=a){i.next=26;break}return this.ruleForm.shipinmingcheng=n[a],this.ro.shipinmingcheng=!0,i.abrupt("continue",20);case 26:if("shipinleixing"!=a){i.next=30;break}return this.ruleForm.shipinleixing=n[a],this.ro.shipinleixing=!0,i.abrupt("continue",20);case 30:if("fengmiantu"!=a){i.next=34;break}return this.ruleForm.fengmiantu=n[a],this.ro.fengmiantu=!0,i.abrupt("continue",20);case 34:if("shipin"!=a){i.next=38;break}return this.ruleForm.shipin=n[a],this.ro.shipin=!0,i.abrupt("continue",20);case 38:if("shipinjieshao"!=a){i.next=42;break}return this.ruleForm.shipinjieshao=n[a],this.ro.shipinjieshao=!0,i.abrupt("continue",20);case 42:if("faburiqi"!=a){i.next=46;break}return this.ruleForm.faburiqi=n[a],this.ro.faburiqi=!0,i.abrupt("continue",20);case 46:if("clicknum"!=a){i.next=50;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,i.abrupt("continue",20);case 50:if("userid"!=a){i.next=54;break}return this.ruleForm.userid=n[a],this.ro.userid=!0,i.abrupt("continue",20);case 54:i.next=20;break;case 56:this.styleChange();case 57:case"end":return i.stop()}}),i,this)})));function e(e){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(i){this.ruleForm.faburiqi=i.target.value,this.$forceUpdate()},shipinleixingChange:function(i){this.shipinleixingIndex=i.target.value,this.ruleForm.shipinleixing=this.shipinleixingOptions[this.shipinleixingIndex]},fengmiantuTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.fengmiantu=i.$base.url+"upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},shipinTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.shipin=i.$base.url+"upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=(0,n.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(this.ruleForm.shipinmingcheng){i.next=3;break}return this.$utils.msg("视频名称不能为空"),i.abrupt("return");case 3:if(this.ruleForm.shipin){i.next=6;break}return this.$utils.msg("视频不能为空"),i.abrupt("return");case 6:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){i.next=9;break}return this.$utils.msg("点击次数应输入整数"),i.abrupt("return");case 9:if(!this.ruleForm.id){i.next=14;break}return i.next=12,this.$api.update("jianshenshipin",this.ruleForm);case 12:i.next=16;break;case 14:return i.next=16,this.$api.add("jianshenshipin",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate();return"start"===i?t-=60:"end"===i&&(t+=2),r=r>9?r:"0"+r,n=n>9?n:"0"+n,"".concat(t,"-").concat(r,"-").concat(n)},toggleTab:function(i){this.$refs[i].show()}}};e.default=o},d2f7:function(i,e,t){"use strict";var r=t("547e"),n=t.n(r);n.a}}]);