(function(t){function a(a){for(var r,l,i=a[0],o=a[1],u=a[2],p=0,m=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);s&&s(a);while(m.length)m.shift()();return c.push.apply(c,u||[]),e()}function e(){for(var t,a=0;a<c.length;a++){for(var e=c[a],r=!0,i=1;i<e.length;i++){var o=e[i];0!==n[o]&&(r=!1)}r&&(c.splice(a--,1),t=l(l.s=e[0]))}return t}var r={},n={app:0},c=[];function l(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=r,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)l.d(e,r,function(a){return t[a]}.bind(null,r));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/GenshinCalculator/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=a,i=i.slice();for(var u=0;u<i.length;u++)a(i[u]);var s=o;c.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{color:"primary",dark:"",app:""}},[e("Header")],1),e("v-main",[e("Input",{on:{"change:total_attack":function(a){t.total_attack=a},"change:critical_rate":function(a){t.critical_rate=a},"change:critical_damage":function(a){t.critical_damage=a},"change:damage_bonus":function(a){t.damage_bonus=a}}}),e("Output",{attrs:{total_attack:t.total_attack,critical_rate:t.critical_rate,critical_damage:t.critical_damage,damage_bonus:t.damage_bonus}})],1),e("v-footer",{attrs:{color:"primary",dark:"",app:""}},[e("Footer")],1)],1)},c=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-toolbar-title",[e("strong",[t._v("原神ダメージ計算ツール")])])},i=[],o=e("2877"),u=e("6544"),s=e.n(u),p=e("2a7f"),m={},f=Object(o["a"])(m,l,i,!1,null,null,null),g=f.exports;s()(f,{VToolbarTitle:p["a"]});var d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Nashik")])])},h=[],_=e("62ad"),v={},b=Object(o["a"])(v,d,h,!1,null,null,null),k=b.exports;s()(b,{VCol:_["a"]});var y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto my-10",attrs:{"max-width":"500"}},[e("v-card-title",[t._v("Input")]),e("v-card-text",[e("InputAttack",{attrs:{label:"基礎攻撃力"},on:{"change:attack":t.changeBaseAttack}}),e("InputAttack",{attrs:{label:"聖遺物攻撃力"},on:{"change:attack":t.changeArtifactsAttack}}),e("InputPercentage",{attrs:{label:"会心率(%)"},on:{"change:percentage":t.changeCriticalRate}}),e("InputPercentage",{attrs:{label:"会心ダメージ(%)"},on:{"change:percentage":t.changeCriticalDamage}}),e("InputPercentage",{attrs:{label:"ダメージバフ(%)"},on:{"change:percentage":t.changeDamageBonus}})],1)],1)},x=[],C=(e("a9e3"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-text-field",{attrs:{label:t.label,type:"number",min:"0",placeholder:"1234"},on:{keypress:t.validateInteger},model:{value:t.attack_val,callback:function(a){t.attack_val="string"===typeof a?a.trim():a},expression:"attack_val"}})}),D=[],N={name:"InputAttack",props:{label:{type:String},attack:{type:Number}},computed:{attack_val:{get:function(){return this.attack},set:function(t){this.$emit("change:attack",t)}}},methods:{validateInteger:function(t){var a=t.which?t.which:t.keyCode;if(!(a>31&&(a<48||a>57)))return!0;t.preventDefault()}}},O=N,w=e("8654"),j=Object(o["a"])(O,C,D,!1,null,null,null),V=j.exports;s()(j,{VTextField:w["a"]});var $=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-text-field",{attrs:{label:t.label,type:"number",min:"0",placeholder:"12.3"},on:{keypress:t.validateFloat},model:{value:t.percentage_val,callback:function(a){t.percentage_val="string"===typeof a?a.trim():a},expression:"percentage_val"}})},I=[],A={name:"InputPercentage",props:{label:{type:String},percentage:{type:Number}},computed:{percentage_val:{get:function(){return this.percentage},set:function(t){this.$emit("change:percentage",t)}}},methods:{validateFloat:function(t){var a=t.which?t.which:t.keyCode;if(!(a>31&&(a<46||47==a||a>57)))return!0;t.preventDefault()}}},P=A,T=Object(o["a"])(P,$,I,!1,null,null,null),E=T.exports;s()(T,{VTextField:w["a"]});var S={name:"Main",components:{InputAttack:V,InputPercentage:E},data:function(){return{base_attack:0,artifacts_attack:0}},props:{total_attack:{type:Number},critical_rate:{type:Number},critical_damage:{type:Number}},methods:{changeBaseAttack:function(t){this.base_attack=t,this.$emit("change:total_attack",Number(this.base_attack)+Number(this.artifacts_attack))},changeArtifactsAttack:function(t){this.artifacts_attack=t,this.$emit("change:total_attack",Number(this.base_attack)+Number(this.artifacts_attack))},changeCriticalRate:function(t){this.$emit("change:critical_rate",Number(t))},changeCriticalDamage:function(t){var a=(100+Number(t))/100;this.$emit("change:critical_damage",a)},changeDamageBonus:function(t){var a=(100+Number(t))/100;this.$emit("change:damage_bonus",a)}}},F=S,M=e("b0af"),B=e("99d9"),G=Object(o["a"])(F,y,x,!1,null,null,null),H=G.exports;s()(G,{VCard:M["a"],VCardText:B["a"],VCardTitle:B["b"]});var J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto my-10",attrs:{width:"500px"}},[e("v-card-title",[t._v("Output")]),e("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Name")]),e("th",{staticClass:"text-left"},[t._v("Value")])])]),e("tbody",[e("tr",[e("td",[t._v("通常ダメージ")]),e("td",[t._v(t._s(t.normalDamage))])]),e("tr",[e("td",[t._v("会心ダメージ")]),e("td",[t._v(t._s(t.criticalDamage))])]),e("tr",[e("td",[t._v("期待値")]),e("td",[t._v(t._s(t.expectedDamage))])])])]},proxy:!0}])})],1)},R=[],Y={name:"Output",props:{total_attack:{type:Number},critical_rate:{type:Number},critical_damage:{type:Number},damage_bonus:{type:Number}},computed:{normalDamage:function(){return this.calcNormalDamage()},criticalDamage:function(){return this.calcCriticalDamage()},expectedDamage:function(){return this.calcExpectedDamage()}},methods:{calcNormalDamage:function(){return this.total_attack*this.damage_bonus},calcCriticalDamage:function(){return this.calcNormalDamage()*this.critical_damage},calcExpectedDamage:function(){return this.calcNormalDamage()*(1-this.critical_rate/100)+this.calcCriticalDamage()*(this.critical_rate/100)}}},q=Y,z=e("1f4f"),K=Object(o["a"])(q,J,R,!1,null,null,null),L=K.exports;s()(K,{VCard:M["a"],VCardTitle:B["b"],VSimpleTable:z["a"]});var Q={name:"GenshinCalc",components:{Header:g,Footer:k,Input:H,Output:L},data:function(){return{total_attack:0,critical_rate:0,critical_damage:0,damage_bonus:0}}},U=Q,W=e("7496"),X=e("40dc"),Z=e("553a"),tt=e("f6c4"),at=Object(o["a"])(U,n,c,!1,null,null,null),et=at.exports;s()(at,{VApp:W["a"],VAppBar:X["a"],VFooter:Z["a"],VMain:tt["a"]});var rt=e("f309");r["a"].use(rt["a"]);var nt=new rt["a"]({});r["a"].config.devtools=!0,r["a"].config.productionTip=!1,new r["a"]({vuetify:nt,render:function(t){return t(et)}}).$mount("#app")}});
//# sourceMappingURL=app.e45c8a30.js.map