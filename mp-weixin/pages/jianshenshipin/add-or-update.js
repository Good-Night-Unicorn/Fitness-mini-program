(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jianshenshipin/add-or-update"],{"16fb":function(i,e,n){"use strict";(function(i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(n("a34a"));function r(i){return i&&i.__esModule?i:{default:i}}function u(i,e,n,t,r,u,a){try{var s=i[u](a),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(t,r)}function a(i){return function(){var e=this,n=arguments;return new Promise((function(t,r){var a=i.apply(e,n);function s(i){u(a,t,r,s,o,"next",i)}function o(i){u(a,t,r,s,o,"throw",i)}s(void 0)}))}}var s=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("5d79"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{ruleForm:{shipinmingcheng:"",shipinleixing:"",fengmiantu:"",shipin:"",shipinjieshao:"",faburiqi:"",userid:""},shipinleixingOptions:[],shipinleixingIndex:0,user:{},ro:{shipinmingcheng:!1,shipinleixing:!1,fengmiantu:!1,shipin:!1,shipinjieshao:!1,faburiqi:!1,clicknum:!1,userid:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var e=a(t.default.mark((function e(n){var r,u,a,s;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:return u=e.sent,this.user=u.data,e.next=7,this.$api.option("shipinleixing","leixing",{});case 7:if(u=e.sent,this.shipinleixingOptions=u.data,this.ruleForm.userid=i.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=i.getStorageSync("nickname")),!n.id){e.next=17;break}return this.ruleForm.id=n.id,e.next=15,this.$api.info("jianshenshipin",this.ruleForm.id);case 15:u=e.sent,this.ruleForm=u.data;case 17:if(!n.cross){e.next=56;break}a=i.getStorageSync("crossObj"),e.t0=t.default.keys(a);case 20:if((e.t1=e.t0()).done){e.next=56;break}if(s=e.t1.value,"shipinmingcheng"!=s){e.next=26;break}return this.ruleForm.shipinmingcheng=a[s],this.ro.shipinmingcheng=!0,e.abrupt("continue",20);case 26:if("shipinleixing"!=s){e.next=30;break}return this.ruleForm.shipinleixing=a[s],this.ro.shipinleixing=!0,e.abrupt("continue",20);case 30:if("fengmiantu"!=s){e.next=34;break}return this.ruleForm.fengmiantu=a[s],this.ro.fengmiantu=!0,e.abrupt("continue",20);case 34:if("shipin"!=s){e.next=38;break}return this.ruleForm.shipin=a[s],this.ro.shipin=!0,e.abrupt("continue",20);case 38:if("shipinjieshao"!=s){e.next=42;break}return this.ruleForm.shipinjieshao=a[s],this.ro.shipinjieshao=!0,e.abrupt("continue",20);case 42:if("faburiqi"!=s){e.next=46;break}return this.ruleForm.faburiqi=a[s],this.ro.faburiqi=!0,e.abrupt("continue",20);case 46:if("clicknum"!=s){e.next=50;break}return this.ruleForm.clicknum=a[s],this.ro.clicknum=!0,e.abrupt("continue",20);case 50:if("userid"!=s){e.next=54;break}return this.ruleForm.userid=a[s],this.ro.userid=!0,e.abrupt("continue",20);case 54:e.next=20;break;case 56:this.styleChange();case 57:case"end":return e.stop()}}),e,this)})));function n(i){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(i){this.ruleForm.faburiqi=i.target.value,this.$forceUpdate()},shipinleixingChange:function(i){this.shipinleixingIndex=i.target.value,this.ruleForm.shipinleixing=this.shipinleixingOptions[this.shipinleixingIndex]},fengmiantuTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.fengmiantu=i.$base.url+"upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},shipinTap:function(){var i=this;this.$api.upload((function(e){i.ruleForm.shipin=i.$base.url+"upload/"+e.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=a(t.default.mark((function i(){return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(this.ruleForm.shipinmingcheng){i.next=3;break}return this.$utils.msg("视频名称不能为空"),i.abrupt("return");case 3:if(this.ruleForm.shipin){i.next=6;break}return this.$utils.msg("视频不能为空"),i.abrupt("return");case 6:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){i.next=9;break}return this.$utils.msg("点击次数应输入整数"),i.abrupt("return");case 9:if(!this.ruleForm.id){i.next=14;break}return i.next=12,this.$api.update("jianshenshipin",this.ruleForm);case 12:i.next=16;break;case 14:return i.next=16,this.$api.add("jianshenshipin",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var e=new Date,n=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return"start"===i?n-=60:"end"===i&&(n+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(n,"-").concat(t,"-").concat(r)},toggleTab:function(i){this.$refs[i].show()}}};e.default=o}).call(this,n("543d")["default"])},"4c00":function(i,e,n){"use strict";var t,r=function(){var i=this,e=i.$createElement;i._self._c},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return t}))},"81f8":function(i,e,n){"use strict";n.r(e);var t=n("16fb"),r=n.n(t);for(var u in t)"default"!==u&&function(i){n.d(e,i,(function(){return t[i]}))}(u);e["default"]=r.a},bba4:function(i,e,n){"use strict";var t=n("d525"),r=n.n(t);r.a},d525:function(i,e,n){},d898:function(i,e,n){"use strict";n.r(e);var t=n("4c00"),r=n("81f8");for(var u in r)"default"!==u&&function(i){n.d(e,i,(function(){return r[i]}))}(u);n("bba4");var a,s=n("f0c5"),o=Object(s["a"])(r["default"],t["b"],t["c"],!1,null,"3eb7377d",null,!1,t["a"],a);e["default"]=o.exports},feb6:function(i,e,n){"use strict";(function(i){n("f588"),n("921b");t(n("66fd"));var e=t(n("d898"));function t(i){return i&&i.__esModule?i:{default:i}}i(e.default)}).call(this,n("543d")["createPage"])}},[["feb6","common/runtime","common/vendor"]]]);