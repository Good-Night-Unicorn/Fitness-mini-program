(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order-confirm/shop-order-confirm"],{"25d2":function(e,t,r){"use strict";(function(e){r("f588"),r("921b");s(r("66fd"));var t=s(r("d26e"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},"432a":function(e,t,r){"use strict";r.r(t);var s=r("52c2"),o=r.n(s);for(var n in s)"default"!==n&&function(e){r.d(t,e,(function(){return s[e]}))}(n);t["default"]=o.a},"52c2":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(r("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r,s,o,n,a){try{var i=e[n](a),d=i.value}catch(u){return void r(u)}i.done?t(d):Promise.resolve(d).then(s,o)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(s,o){var a=e.apply(t,r);function i(e){n(a,s,o,i,d,"next",e)}function d(e){n(a,s,o,i,d,"throw",e)}i(void 0)}))}}var i={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0}},onLoad:function(){var t=a(s.default.mark((function t(r){var o;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.type=r.type,this.seat=r.seat,this.orderGoods=e.getStorageSync("orderGoods"),1!=this.seat)for(o=0;o<this.orderGoods.length;o++)0==this.total?this.total=parseFloat(this.orderGoods[o].price)*this.orderGoods[o].buynumber:this.total=parseFloat(this.total)+parseFloat(this.orderGoods[o].price)*this.orderGoods[o].buynumber;else this.total=parseFloat(this.orderGoods[0].total),this.address=this.orderGoods[0].address;this.total=this.total.toFixed(2);case 5:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}(),onShow:function(){var t=a(s.default.mark((function t(){var r,o,n;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(o=t.sent,this.user=o.data,1==this.seat){t.next=15;break}if(n=e.getStorageSync("address"),!n||this.user.id!=n.userid){t.next=11;break}this.address=e.getStorageSync("address"),t.next=15;break;case 11:return t.next=13,this.$api.defaultAddress(this.user.id);case 13:o=t.sent,this.address=o.data;case 15:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),methods:{onSubmitTap:function(){var t=a(s.default.mark((function t(){var r,o;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=this,1==r.seat||r.address){t.next=4;break}return r.$utils.msg("请选择地址"),t.abrupt("return");case 4:o=e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var t=a(s.default.mark((function t(n){var a,i,d,u,c,f;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=40;break}if(a=r.type,i=!0,d="已支付",1!=a){t.next=8;break}r.user.money-r.total<0&&(r.$utils.msg("余额不足，请先充值"),i=!1,d="未支付"),t.next=13;break;case 8:if(2!=a){t.next=13;break}if(!(r.user.jifen-r.total<0)){t.next=13;break}return r.$utils.msg("积分不足，兑换商品失败"),i=!1,t.abrupt("return");case 13:u=0;case 14:if(!(u<r.orderGoods.length)){t.next=26;break}return c={orderid:r.$utils.genTradeNo(),tablename:r.orderGoods[u].tablename,userid:r.user.id,goodid:r.orderGoods[u].goodid,goodname:r.orderGoods[u].goodname,picture:r.orderGoods[u].picture,buynumber:r.orderGoods[u].buynumber,discountprice:r.orderGoods[u].price,price:r.orderGoods[u].price,total:r.orderGoods[u].price*r.orderGoods[u].buynumber,discounttotal:r.orderGoods[u].price*r.orderGoods[u].buynumber,type:a,address:r.address.address,tel:r.address.phone,consignee:r.address.name,status:d},1==r.seat&&(c["address"]=r.address,f=r.address.split(",").length,c["buynumber"]=f,c["total"]=r.orderGoods[u].price*f,c["discounttotal"]=r.orderGoods[u].price*f),t.next=19,r.$api.add("orders",c);case 19:if(!r.orderGoods[u].id){t.next=23;break}return t.next=22,r.$api.del("cart",JSON.stringify([r.orderGoods[u].id]));case 22:e.removeStorageSync("cart".concat(r.orderGoods[u].goodid).concat(r.user.id));case 23:u++,t.next=14;break;case 26:if(!i){t.next=40;break}if(1!=a){t.next=35;break}return r.$utils.msgBack("支付成功"),r.user.money=r.user.money-r.total,(r.user.jifen||0==r.user.jifen)&&(r.user.jifen=parseFloat(r.user.jifen)+parseFloat(r.total)),t.next=33,r.$api.update(o,r.user);case 33:t.next=40;break;case 35:if(2!=a){t.next=40;break}return r.$utils.msgBack("兑换成功"),r.user.jifen=r.user.jifen-r.total,t.next=40,r.$api.update(o,r.user);case 40:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()});case 6:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}(),onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};t.default=i}).call(this,r("543d")["default"])},5747:function(e,t,r){"use strict";var s,o=function(){var e=this,t=e.$createElement;e._self._c},n=[];r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return s}))},"7e13":function(e,t,r){},a25c:function(e,t,r){"use strict";var s=r("7e13"),o=r.n(s);o.a},d26e:function(e,t,r){"use strict";r.r(t);var s=r("5747"),o=r("432a");for(var n in o)"default"!==n&&function(e){r.d(t,e,(function(){return o[e]}))}(n);r("a25c");var a,i=r("f0c5"),d=Object(i["a"])(o["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);t["default"]=d.exports}},[["25d2","common/runtime","common/vendor"]]]);