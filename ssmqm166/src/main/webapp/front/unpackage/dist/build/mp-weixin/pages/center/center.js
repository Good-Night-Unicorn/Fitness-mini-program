(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{2014:function(t,e,n){"use strict";(function(t){n("7796");r(n("66fd"));var e=r(n("d752"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},2034:function(t,e,n){"use strict";n.r(e);var r=n("f4c6"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},2861:function(t,e,n){},b626:function(t,e,n){"use strict";var r=n("2861"),a=n.n(r);a.a},cf24:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},d752:function(t,e,n){"use strict";n.r(e);var r=n("cf24"),a=n("2034");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("b626");var o,c=n("f0c5"),i=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=i.exports},f4c6:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),a=u(n("caaf"));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,a,u,o){try{var c=t[u](o),i=c.value}catch(f){return void n(f)}c.done?e(i):Promise.resolve(i).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var u=t.apply(e,n);function c(t){o(u,r,a,c,i,"next",t)}function i(t){o(u,r,a,c,i,"throw",t)}c(void 0)}))}}var i={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[]}},onLoad:function(){var e=this;return c(r.default.mark((function n(){var u,o,c;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.role=t.getStorageSync("role"),u=t.getStorageSync("nowTable"),n.next=4,e.$api.session(u);case 4:o=n.sent,e.user=o.data,e.tableName=u,c=a.default.list(),e.menuList=c;case 9:case"end":return n.stop()}}),n)})))()},onShow:function(){var e=this;return c(r.default.mark((function n(){var u,o,c;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.role=t.getStorageSync("role"),u=t.getStorageSync("nowTable"),n.next=4,e.$api.session(u);case 4:o=n.sent,e.user=o.data,e.tableName=u,c=a.default.list(),e.menuList=c;case 9:case"end":return n.stop()}}),n)})))()},methods:{onPageTap:function(e){t.navigateTo({url:e,fail:function(){t.switchTab({url:e})}})}}};e.default=i}).call(this,n("543d")["default"])}},[["2014","common/runtime","common/vendor"]]]);