(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64178e2a"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}},"5e4c":function(t,e,r){"use strict";var n=r("bbff"),o=r.n(n);o.a},"5f84":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"",id:"app"}},[0!=t.images.length||0!=t.articles.length||0!=t.videos.length?r("h3",{staticClass:"font-weight-regular text-center pb-4"},[t._v("Additional Resources")]):t._e(),0!=t.images.length?r("div",{staticClass:"mb-10"},[0!=t.articles.length||0!=t.videos.length?r("h4",{staticClass:"font-weight-light",staticStyle:{"border-bottom":"1.5px solid blue"}},[t._v(" Images ")]):t._e(),r("v-row",t._l(t.images,(function(e,n){return r("v-col",{key:n,attrs:{cols:"4"}},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4","max-width":"600"}},[r("v-img",{attrs:{"aspect-ratio":"1.2",src:e.thumbURL}},[r("v-expand-transition",[o?r("div",{staticClass:"d-flex transition-fast-in-fast-out blue-grey darken-5 v-card--reveal px-2",staticStyle:{height:"100%",color:"white",opacity:".8"}},[t._v(" "+t._s(e.caption)+" ")]):t._e()])],1)],1)]}}],null,!0)})],1)})),1)],1):t._e(),0!=t.videos.length?r("div",{staticClass:"mb-10"},[0!=t.images.length||0!=t.articles.length?r("h4",{staticClass:"font-weight-light",staticStyle:{"border-bottom":"1.5px solid blue"}},[t._v(" Videos ")]):t._e(),r("v-row",t._l(t.videos,(function(e,n){return r("v-col",{key:n,attrs:{cols:"6"}},[r("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4"}},[r("iframe",{attrs:{width:"100%",src:"https://www.youtube.com/embed/"+e.url,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),r("div",{staticClass:"caption px-2 pb-1"},[t._v(t._s(e.title))])])],1)})),1)],1):t._e(),0!=t.articles.length?r("div",{staticClass:"mb-10"},[0!=t.images.length||0!=t.videos.length?r("h4",{staticClass:"font-weight-light mb-4",staticStyle:{"border-bottom":"1.5px solid blue"}},[t._v(" Articles ")]):t._e(),t._l(t.articles,(function(e){return r("v-row",{staticClass:"pb-5"},[r("v-col",[r("v-card",{attrs:{outlined:""}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("div",{staticClass:"mb-5"},[r("v-card-subtitle",{staticClass:"pb-0",staticStyle:{"font-size":"10px"},domProps:{textContent:t._s(e.newsSource)}}),r("p",{staticClass:"preview pt-1 pl-4 ma-0",staticStyle:{"font-size":"18px"}},[t._v(t._s(e.title))]),r("v-card-subtitle",{staticClass:"caption py-0",domProps:{textContent:t._s(e.published)}}),r("v-card-subtitle",{staticClass:"truncate",staticStyle:{height:"60px","font-size":"14px"}},[r("p",[t._v(t._s(e.summary))])])],1),r("div",{staticClass:"d-flex flex-column justify-end align-end"},[e.articleURL?r("v-avatar",{staticClass:"ma-3 ml-0",staticStyle:{border:"1px solid lightgrey"},attrs:{size:"100",tile:""}},[r("v-img",{attrs:{src:e.articleURL}})],1):t._e(),r("v-card-actions",[r("v-btn",{attrs:{text:"",color:"deep-purple accent-4",href:e.url,target:"_blank"}},[t._v(" Read More")])],1)],1)])])],1)],1)}))],2):t._e()])},o=[],i={props:{images:Array,articles:Array,videos:Array},data:function(){return{dialog:!1}}},a=i,s=(r("5e4c"),r("2877")),c=r("6544"),l=r.n(c),u=r("8212"),h=r("8336"),f=r("b0af"),d=r("99d9"),v=r("62ad"),p=r("a523"),y=r("0789"),g=r("ce87"),m=r("adda"),w=r("0fd9"),b=Object(s["a"])(a,n,o,!1,null,"8fb0a84e",null);e["a"]=b.exports;l()(b,{VAvatar:u["a"],VBtn:h["a"],VCard:f["a"],VCardActions:d["a"],VCardSubtitle:d["b"],VCol:v["a"],VContainer:p["a"],VExpandTransition:y["a"],VHover:g["a"],VImg:m["a"],VRow:w["a"]})},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=C(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u="suspendedStart",h="suspendedYield",f="executing",d="completed",v={};function p(){}function y(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(O([])));b&&b!==r&&n.call(b,i)&&(m=b);var x=g.prototype=p.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t,e){function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function C(t,e,r){var n=u;return function(o,i){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return A()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,g[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),x[s]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},bbff:function(t,e,r){},ce87:function(t,e,r){"use strict";var n=r("16b7"),o=r("f2e7"),i=r("58df"),a=r("d9bd");e["a"]=Object(i["a"])(n["a"],o["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(a["c"])("v-hover should only contain a single element",this),t)):(Object(a["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}})}}]);
//# sourceMappingURL=chunk-64178e2a.2ba2aac2.js.map