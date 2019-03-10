(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],s[o]&&f.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},s={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"272f":function(t,e,n){"use strict";var r=n("7b55"),s=n.n(r);s.a},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(t,e,n){},7958:function(t,e,n){"use strict";var r=n("d052"),s=n.n(r);s.a},"7b55":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),s=n("af88"),a=n("ce5b"),o=n.n(a),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{style:t.customBackground,attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-card",{staticClass:"pa-4 elevation-5",attrs:{color:"grey lighten-3",width:"400"}},[n("h1",{staticClass:"text-xs-center mb-3"},[t._v("The Password Genie")]),n("Result",{attrs:{password:t.newPassword}}),n("Commands",{attrs:{password:t.newPassword},on:{reload:t.generatePassword}}),n("Strength",{attrs:{score:t.score}}),n("Options",{model:{value:t.settings,callback:function(e){t.settings=e},expression:"settings"}}),n("MoreOptions",{model:{value:t.settings,callback:function(e){t.settings=e},expression:"settings"}})],1)],1)],1)],1)},c=[],l=n("cebc"),u=(n("386d"),n("96cf"),n("3b8d")),d=n("d225"),f=n("b0b4"),b=n("308d"),p=n("6bb5"),g=n("4e2b"),v=n("9ab4"),h=n("938a"),m=n.n(h),y=n("60a3"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"my-1":""}},[n("v-flex",{attrs:{xs6:""}},[n("v-btn",{attrs:{block:"",flat:""},on:{click:t.reload}},[n("v-icon",{staticClass:"mr-1"},[t._v("cached")]),t._v("Regenerate\n    ")],1)],1),n("v-flex",{attrs:{xs6:""}},[n("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.password,expression:"password"}],attrs:{block:"",flat:""}},[n("v-icon",{staticClass:"mr-1"},[t._v("content_copy")]),t._v("Copy\n    ")],1)],1)],1)},j=[],w=function(t){function e(){return Object(d["a"])(this,e),Object(b["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(g["a"])(e,t),Object(f["a"])(e,[{key:"reload",value:function(){}}]),e}(y["e"]);v["a"]([Object(y["d"])(),v["b"]("design:type",String)],w.prototype,"password",void 0),v["a"]([Object(y["b"])(),v["b"]("design:type",Function),v["b"]("design:paramtypes",[]),v["b"]("design:returntype",void 0)],w.prototype,"reload",null),w=v["a"]([y["a"]],w);var x,_=w,k=_,S=n("2877"),C=Object(S["a"])(k,O,j,!1,null,null,null),E=C.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panel",[n("v-expansion-panel-content",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("More options")]),n("v-card",[n("v-card-text",[n("v-tooltip",{attrs:{top:""}},[n("v-switch",{attrs:{slot:"activator",label:"Ambiguous",color:"blue darken-2"},slot:"activator",model:{value:t.settings.ambiguous,callback:function(e){t.$set(t.settings,"ambiguous",e)},expression:"settings.ambiguous"}}),n("span",[t._v("Adds ambiguous chars to the Symbols set.\n            "),n("br"),t._v("\n            "+t._s(t.ambiguousChars)+"\n          ")])],1)],1)],1)],1)],1)},P=[],R=(n("28a5"),n("c5f6"),n("3b2b"),n("4917"),n("2fdb"),n("75fc")),$=Math.random,M=Math.floor,N=(Math.round,"abcdefghijklmnopqrstuvwxyz"),T="=+-^?!%&*$#^@|",L="(){}[]/~;:.<>",G=T+L,B="\\"+G.split("").join("\\"),z="\\w"+B,W=function(){return $()<.5},V=function(t){return t.charAt(M($()*t.length))},Y=function(t,e){return M($()*(e-t+1)+t)},q=function(t){return Object(R["a"])(Array(t))},D=function(t){return/[a-zA-Z]/.test(t)},F=function(t){return/[a-z]/.test(t)},K=function(t){return/[A-Z]/.test(t)},I=function(t){return/\d/.test(t)},U=function(t){return G.includes(t)};function Z(t){for(var e=Object(R["a"])(t),n=e.length-1;n>0;n--){var r=M($()*(n+1)),s=[e[r],e[n]];e[n]=s[0],e[r]=s[1]}return e}function J(t){return q(t).map(function(){return Y(0,9)})}function H(t,e){return q(t).map(function(){return V(e?T.concat(L):T)})}function Q(t){return q(t).map(function(){var t=W();return t?V(N).toUpperCase():V(N)})}function X(t){return(t.match(/[a-zA-Z]/g)||[]).length}function tt(t){return(t.match(/\d/g)||[]).length}function et(t){var e=new RegExp("["+B+"]","g");return(t.match(e)||[]).length}function nt(t){return t.split("").reduce(function(e,n,r){var s=F(n)&&F(t[r-1])||K(n)&&K(t[r-1])||I(n)&&I(t[r-1])||U(n)&&U(t[r-1]);return e+(0!==r&&s?1:0)},0)}function rt(t){var e=new RegExp("(["+z+"])\\1*","g");return(t.match(e)||[]).reduce(function(t,e){return t+(e.length-1)},0)}function st(t){return t.split("").reduce(function(e,n,r){var s=0!==r&&(D(n)&&D(t[r-1])&&t[r-1].toLowerCase()===N[N.indexOf(n.toLowerCase())-1]||I(n)&&I(t[r-1])&&Number(t[r-1])===Number(n)-1);return e+(s?1:0)},0)}function at(t){return t.split("").reduce(function(e,n,r){var s=0!==r&&(D(n)&&D(t[r-1])&&t[r-1].toLowerCase()===N[N.indexOf(n.toLowerCase())+1]||I(n)&&I(t[r-1])&&Number(t[r-1])===Number(n)+1);return e+(s?1:0)},0)}var ot=function(t){function e(){var t;return Object(d["a"])(this,e),t=Object(b["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.ambiguousChars=L.split("").join(" "),t}return Object(g["a"])(e,t),e}(y["e"]);v["a"]([Object(y["c"])("change"),v["b"]("design:type","function"===typeof(x="undefined"!==typeof Partial&&Partial)?x:Object)],ot.prototype,"settings",void 0),ot=v["a"]([y["a"]],ot);var it,ct=ot,lt=ct,ut=Object(S["a"])(lt,A,P,!1,null,null,null),dt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mt-5"},[n("v-layout",[n("h3",{staticClass:"subheading mr-2"},[t._v("Options")]),n("v-tooltip",{attrs:{top:""}},[n("v-icon",{attrs:{slot:"activator"},slot:"activator"},[t._v("info")]),n("span",[t._v("The tool will generate a password with the chosen length,\n        "),n("br"),t._v("containing the chosen number of digits and symbols, filling the remaining slots with letters.\n        "),n("br"),t._v("Notes:\n        "),n("br"),t._v("- letters will be randomly upper-cased;\n        "),n("br"),t._v("- digits + symbols will always be lower or equal to length;\n        "),n("br"),t._v("- if you set digits + symbols = length, password will not contain any letter.\n      ")])],1)],1),n("v-layout",{attrs:{"align-center":""}},[n("label",{staticClass:"slider-label",attrs:{for:"length"}},[t._v("Length")]),n("v-flex",[n("v-slider",{attrs:{id:"length",min:"4",max:255},model:{value:t.settings.length,callback:function(e){t.$set(t.settings,"length",e)},expression:"settings.length"}})],1),n("v-text-field",{staticClass:"slider-field",attrs:{min:"4",type:"number"},model:{value:t.settings.length,callback:function(e){t.$set(t.settings,"length",e)},expression:"settings.length"}})],1),n("v-layout",{attrs:{"align-center":""}},[n("label",{staticClass:"slider-label",attrs:{for:"Digits"}},[t._v("Digits")]),n("v-flex",[n("v-slider",{attrs:{id:"Digits",max:t.settings.length},model:{value:t.settings.digits,callback:function(e){t.$set(t.settings,"digits",e)},expression:"settings.digits"}})],1),n("v-text-field",{staticClass:"slider-field",attrs:{min:"0",type:"number"},model:{value:t.settings.digits,callback:function(e){t.$set(t.settings,"digits",e)},expression:"settings.digits"}})],1),n("v-layout",{attrs:{"align-center":""}},[n("v-tooltip",{staticClass:"slider-label",attrs:{top:""}},[n("label",{attrs:{slot:"activator",for:"Symbols"},slot:"activator"},[t._v("Symbols")]),n("span",[t._v(t._s(t.SYMBOLS))])]),n("v-flex",[n("v-slider",{attrs:{id:"Symbols",max:t.settings.length},model:{value:t.settings.symbols,callback:function(e){t.$set(t.settings,"symbols",e)},expression:"settings.symbols"}})],1),n("v-text-field",{staticClass:"slider-field",attrs:{min:"0",type:"number"},model:{value:t.settings.symbols,callback:function(e){t.$set(t.settings,"symbols",e)},expression:"settings.symbols"}})],1)],1)},bt=[],pt=function(t){function e(){var t;return Object(d["a"])(this,e),t=Object(b["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.SYMBOLS=T.split("").join(" "),t}return Object(g["a"])(e,t),e}(y["e"]);v["a"]([Object(y["c"])("change"),v["b"]("design:type","function"===typeof(it="undefined"!==typeof Partial&&Partial)?it:Object)],pt.prototype,"settings",void 0),pt=v["a"]([y["a"]],pt);var gt=pt,vt=gt,ht=(n("272f"),Object(S["a"])(vt,ft,bt,!1,null,"0a16b056",null)),mt=ht.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:"white"}},[n("v-card-text",{staticClass:"text-xs-center"},[t._v(t._s(t.password))])],1)},Ot=[],jt=function(t){function e(){return Object(d["a"])(this,e),Object(b["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(g["a"])(e,t),e}(y["e"]);v["a"]([Object(y["d"])(),v["b"]("design:type",String)],jt.prototype,"password",void 0),jt=v["a"]([y["a"]],jt);var wt,xt=jt,_t=xt,kt=(n("7958"),Object(S["a"])(_t,yt,Ot,!1,null,"155e6690",null)),St=kt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mt-3"},[n("v-layout",{attrs:{"justify-space-between":""}},[n("h3",{staticClass:"subheading"},[t._v("Strength")]),n("span",{style:{color:t.$vuetify.theme[t.status.color]||t.status.color}},[t._v(t._s(t.status.label)+" "+t._s(t.computedScore)+" %")])]),n("v-progress-linear",{attrs:{color:t.status.color},model:{value:t.computedScore,callback:function(e){t.computedScore=e},expression:"computedScore"}})],1)},Et=[],At=n("ab8c"),Pt=n.n(At);(function(t){t["VERY_WEAK"]="Very Weak",t["WEAK"]="Weak",t["AVERAGE"]="Average",t["STRONG"]="Strong",t["SECURE"]="Secure"})(wt||(wt={}));var Rt=[{label:wt.VERY_WEAK,color:"error"},{label:wt.WEAK,color:"orange"},{label:wt.AVERAGE,color:"warning"},{label:wt.STRONG,color:"success"},{label:wt.SECURE,color:"info"}],$t=function(t){function e(){return Object(d["a"])(this,e),Object(b["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(g["a"])(e,t),Object(f["a"])(e,[{key:"computedScore",set:function(t){},get:function(){return Pt()(this.score)?this.score:0}},{key:"status",get:function(){return Pt()(this.score)?this.score>=100?Rt[4]:Rt[Math.floor(this.score/20)]:{label:"",color:"darkgrey"}}}]),e}(y["e"]);v["a"]([Object(y["d"])(),v["b"]("design:type",Number)],$t.prototype,"score",void 0),$t=v["a"]([y["a"]],$t);var Mt,Nt=$t,Tt=Nt,Lt=Object(S["a"])(Tt,Ct,Et,!1,null,null,null),Gt=Lt.exports;function Bt(t){var e=t.length,n=void 0===e?8:e,r=t.digits,s=void 0===r?4:r,a=t.symbols,o=void 0===a?2:a,i=t.ambiguous,c=void 0===i||i;if(n<s+o)throw new Error("DIGITS + SYMBOLS should be lower than total LENGTH !");var l=n-s-o;return Z(Object(R["a"])(J(s)).concat(Object(R["a"])(H(o,c)),Object(R["a"])(Q(l)))).join("")}function zt(t){var e=0,n=t.length;e+=4*n;var r=X(t);e+=2*(n-r),e-=r===n?n:0;var s=nt(t);e-=2*s;var a=st(t)+at(t);e-=3*a;var o=tt(t);e+=4*o,e-=o===n?n:0;var i=et(t);e+=6*i,e+=n>=8?2:0,e+=r>=1?2:0,e+=o>=1?2:0,e+=i>=1?2:0;var c=rt(t);return e-=3*c,e<0?0:e>100?100:e}var Wt={ambiguous:!0,digits:4,length:8,symbols:2},Vt={backgroundImage:"-webkit-radial-gradient(100% 100%,ellipse farthest-side,#dbf6c8 20%,#1cafc6 50%,#012690 110%),\n  radial-gradient(ellipse farthest-side at 100% 100%,#dbf6c8 20%,#1cafc6 50%,#012690 110%)"},Yt=function(t){function e(){var t;return Object(d["a"])(this,e),t=Object(b["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.customBackground={backgroundColor:"#b0c4de"},t.newPassword='Click "REGENERATE"',t.score=null,t.settings=Wt,t}return Object(g["a"])(e,t),Object(f["a"])(e,[{key:"mounted",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=new m.a,t.next=3,e.search(["nature","zen"]).size(1980,1080).frequency("daily").fetch();case 3:t.sent,this.customBackground=Vt;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"generatePassword",value:function(t){this.newPassword=Bt(Object(l["a"])({},this.settings)),this.score=zt(this.newPassword)}}]),e}(y["e"]);v["a"]([Object(y["f"])("settings",{deep:!0}),v["b"]("design:type",Function),v["b"]("design:paramtypes",["function"===typeof(Mt=!1)?Mt:Object]),v["b"]("design:returntype",void 0)],Yt.prototype,"generatePassword",null),Yt=v["a"]([Object(y["a"])({components:{Commands:E,MoreOptions:dt,Options:mt,Result:St,Strength:Gt}})],Yt);var qt=Yt,Dt=qt,Ft=(n("5c0b"),Object(S["a"])(Dt,i,c,!1,null,null,null)),Kt=Ft.exports,It=n("9483");Object(It["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["default"].config.productionTip=!1,r["default"].use(s["a"]),r["default"].use(o.a),new r["default"]({render:function(t){return t(Kt)}}).$mount("#app")},d052:function(t,e,n){}});
//# sourceMappingURL=app.a8892df1.js.map