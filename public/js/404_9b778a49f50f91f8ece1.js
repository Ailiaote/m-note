(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1:function(e,t,n){"use strict";var r=n(5),o=n.n(r),a=n(12),i=n.n(a),u=n(6),s=n.n(u),c=n(10),l=n.n(c),f=n(14),p=n.n(f),d=n(8),h=n.n(d),g=n(9),m=n.n(g),v=n(7),y=n.n(v),w=n(11),b=n.n(w),x=n(32),_=n.n(x),$=n(13),I=n.n($),N=n(35),k=n.n(N);function O(e,t){var n=b()(e);if(y.a){var r=y()(e);t&&(r=r.filter((function(t){return m()(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){I()(e,t,n[t])})):h.a?p()(e,h()(n)):O(n).forEach((function(t){l()(e,t,m()(n,t))}))}return e}function C(e,t){return console.warn("fixedCost delay",t.url,e),new s.a((function(t){setTimeout(t,e)}))}var P,E={_mock:!1,_aspect:{start:!1,finish:!1,error:!1},headers:!1,init:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.axios){var r=k.a.create(S({baseURL:t,timeout:5e5,withCredentials:!0},n));this.extra=n,r.interceptors.request.use((function(e){return e}),(function(t){return console.warn("error interceptors",t),e._aspect.error&&e._aspect.error(t),s.a.reject(t)})),r.interceptors.response.use((function(e){var t=e.data;return t instanceof Blob?e:t}),(function(t){return console.warn("error interceptors",t),e._aspect.error&&e._aspect.error(t),s.a.reject(t)})),this.axios=r}},mock:function(e){var t=this,n=e.method,r=e.url,o=e.data;e.params;if(this._mock){var a=this._mock[r];if(a){var i=a[n];if(i)return this._aspect.start&&this._aspect.start(),new s.a((function(e,n){setTimeout((function(){var n=i(o);e(n),t._aspect.finish&&t._aspect.finish(n)}),1e3)}))}}return!1},send:(P=i()(o.a.mark((function e(t,n){var r,a,i,u,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&(t=S({},t,{},n)),this._aspect.start&&this._aspect.start(t),(r=this.mock(t))||(r=this.axios(t)),!(n&&n.noCost||this.extra.noCost)){e.next=10;break}return e.next=7,r;case 7:a=e.sent,e.next=19;break;case 10:return i=_()(),e.next=13,r;case 13:if(a=e.sent,u=_()(),!((s=u-i)<888)){e.next=19;break}return e.next=19,C(888-s,t);case 19:return this._aspect.finish&&this._aspect.finish(a,t),e.abrupt("return",a);case 21:case"end":return e.stop()}}),e,this)}))),function(e,t){return P.apply(this,arguments)}),get:function(e,t,n){return this.send({method:"get",url:e,params:t},n)},delete:function(e,t,n){return this.send({method:"delete",url:e,params:t},n)},post:function(e,t,n){return this.send({method:"post",url:e,data:t},n)},put:function(e,t,n){return this.send({method:"put",url:e,data:t},n)},upload:function(e,t,n){var r=new FormData,o=t.el;return o?r.append(o.getAttribute("field")||t.field||"file",o.files[0],o.getAttribute("name")||t.name):r.append(t.field||"file",t.file,t.name),this.post(e,r,n)},download:function(e,t,n){this.send({method:"post",url:e,data:t,responseType:"blob"},n).then((function(e){var t=e.data,n=e.headers["content-disposition"],r=n.indexOf("filename="),o=decodeURIComponent(n.substr(r+"filename=".length)),a=new FileReader;a.readAsDataURL(t),a.onload=function(e){var t=document.createElement("a");t.href=e.target.result,t.download=o,document.body.appendChild(t),t.click(),document.body.removeChild(t)}}))}};console.warn("common/api/ajax plugin");var M=E,j=n(56),U=n.n(j),R=n(17),A=n.n(R),B=n(16),T=n.n(B),L=n(57),q=n.n(L),D=n(58),J=n.n(D),K=n(59),Q=n.n(K).a,F=J.a,G=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/;function H(e,t){var n,r=t.length,o=V,a=ee,i=function(e,t){var n;try{n=e[t]}catch(e){n=!1}if(n){var r="__"+Math.round(1e7*Math.random());try{e[t].setItem(r,r),e[t].removeItem(r,r)}catch(e){n=!1}}return n}(window,e);return n=null,(n={$reset:function(e){for(var r in n)"$"===r[0]||delete n[r]&&i.removeItem(t+r);return n.$set(e)},$fetch:function(){for(var e,o=0,u=i.length;o<u;o++)(e=i.key(o))&&t===e.slice(0,r)&&(n[e.slice(r)]=a(i.getItem(e)))},$clear:function(){i.clear()},$set:function(){var e=Array.prototype.slice.call(arguments);if(1===e.length&&X(e[0])){var r=e[0];for(var a in r)n[a]=z(r[a]),i.setItem(t+a,o(r[a]))}else if(2===e.length){var u=e[0],s=e[1];n[u]=z(s),i.setItem(t+u,o(s))}return n},$delete:function(e){delete n[e]&&i.removeItem(t+e)},$supported:function(){return!!i}}).$fetch(),n}function W(e,t,n){var r,o;if(e)if("function"==typeof e)for(r in e)"prototype"===r||"length"===r||"name"===r||e.hasOwnProperty&&!e.hasOwnProperty(r)||t.call(n,e[r],r,e);else if(F(e)||function(e){if(null==e)return!1;if(F(e)||te(e))return!0;var t="length"in Object(e)&&e.length;return ne(t)&&(t>=0&&(t-1 in e||e instanceof Array)||"function"==typeof e.item)}(e)){var a="object"!==T()(e);for(r=0,o=e.length;r<o;r++)(a||r in e)&&t.call(n,e[r],r,e)}else if(e.forEach&&e.forEach!==W)e.forEach(t,n,e);else if(Y(e))for(r in e)t.call(n,e[r],r,e);else if("function"==typeof e.hasOwnProperty)for(r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,e);else for(r in e)hasOwnProperty.call(e,r)&&t.call(n,e[r],r,e);return e}function X(e){return null!==e&&"object"===T()(e)}function Y(e){return null!==e&&"object"===T()(e)&&!Q(e)}function z(e,t,n,r){if(t){if(e===t)return void console.log("cpi","Can't copy! Source and destination are identical.");var o;if(n=n||[],r=r||[],X(e)&&(n.push(e),r.push(t)),F(e)){t.length=0;for(var a=0;a<e.length;a++)t.push(z(e[a],null,n,r))}else{var i=t.$$hashKey;if(F(t)?t.length=0:W(t,(function(e,n){delete t[n]})),Y(e))for(o in e)t[o]=z(e[o],null,n,r);else if(e&&"function"==typeof e.hasOwnProperty)for(o in e)e.hasOwnProperty(o)&&(t[o]=z(e[o],null,n,r));else for(o in e)hasOwnProperty.call(e,o)&&(t[o]=z(e[o],null,n,r));!function(e,t){t?e.$$hashKey=t:delete e.$$hashKey}(t,i)}}else if(t=e,X(e)){var u;if(n&&-1!==(u=n.indexOf(e)))return r[u];if(F(e))return z(e,[],n,r);if(s=e,G.test(toString.call(s)))t=new e.constructor(e);else if(function(e){return"[object Date]"===toString.call(e)}(e))t=new Date(e.getTime());else{if(!function(e){return"[object RegExp]"===toString.call(e)}(e))return z(e,q()(Q(e)),n,r);(t=new RegExp(e.source,e.toString().match(/[^\/]*$/)[0])).lastIndex=e.lastIndex}r&&(n.push(e),r.push(t))}var s;return t}function V(e,t){if(void 0!==e)return ne(t)||(t=t?2:null),A()(e,Z,t)}function Z(e,t){var n=t;return"string"==typeof e&&"$"===e.charAt(0)&&"$"===e.charAt(1)?n=void 0:t&&document===t&&(n="$DOCUMENT"),n}function ee(e){return te(e)?JSON.parse(e):e}function te(e){return"string"==typeof e}function ne(e){return"number"==typeof e}var re=function(e){var t="vStorage-";return e&&e.storageKeyPrefix&&(t=e.storageKeyPrefix),{local:H("localStorage",t),session:H("sessionStorage",t)}};function oe(e,t){var n=b()(e);if(y.a){var r=y()(e);t&&(r=r.filter((function(t){return m()(e,t).enumerable}))),n.push.apply(n,r)}return n}console.warn("common/api/storage plugin");var ae={init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"env";this.instance||(this.instance=re({storageKeyPrefix:e+"-"}))},params:function(e,t){var n=e.$route.name,r=this.get(n);if(!t){var o=e.$route.params;return"{}"===A()(o)?r||{}:r&&"object"===T()(r)?(U()(r,o),this.set(n,r),r):(this.set(n,o),o)}r&&"object"===T()(r)&&(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(n,!0).forEach((function(t){I()(e,t,n[t])})):h.a?p()(e,h()(n)):oe(n).forEach((function(t){l()(e,t,m()(n,t))}))}return e}({},r,{},t)),this.set(n,t)},get:function(e){var t=this.instance.local[e];return console.log("localStorage get",e,t),t},set:function(e,t){console.log("localStorage set",e,t),this.instance.local.$set(e,t)},clear:function(){this.instance.local.$clear()},delete:function(e){this.instance.local.$delete(e)},getS:function(e){return this.instance.session[e]},setS:function(e,t){this.instance.session.$set(e,t)}},ie=n(15),ue=n(2),se={error:!1,warning:!1,start:!1,offline:!1},ce={start:function(){se.start||(se.start=!0,ue.default.prototype.$Loading.start())},finish:function(e,t){if(e instanceof Blob);else if(e.code>0&&!se.error&&!t._ignore){se.error=!0;var n={title:e.msg};e.err&&(n.desc=e.err),ue.default.prototype.$Notice.error(n),setTimeout((function(){se.error=!1}),2e3),ue.default.prototype._emit&&ue.default.prototype._emit("ajax-error",e)}else e.code<0&&!se.warning&&!t._ignore&&(se.warning=!0,ue.default.prototype.$Message.warning(e.msg),setTimeout((function(){se.warning=!1}),2e3),ue.default.prototype._emit&&ue.default.prototype._emit("ajax-warning",e));ue.default.prototype.$Loading.finish(),se.start=!1},error:function(e){se.offline||(se.offline=!0,ue.default.prototype.$Notice.error({title:"Network Error",desc:"请刷新页面，稍后尝试"}),ue.default.prototype.$Loading.error(),setTimeout((function(){se.offline=!1}),2e3),se.start=!1)}};console.warn("common/api/aspect/iview plugin");var le=n(25),fe=n.n(le),pe=n(26),de=n.n(pe),he="🐽",ge=new(function(){function e(){fe()(this,e),this.map={}}return de()(e,[{key:"on",value:function(e,t){this._on(e,t,"on")}},{key:"_on",value:function(e,t,n){e=he+e+he;var r=this.map;r.hasOwnProperty(e)||(r[e]=[]),r[e].push({type:n,key:e,params:{},left:e,cb:t})}},{key:"once",value:function(e,t){this._on(e,t,"once")}},{key:"emit",value:function(e,t){var n,r,o=he+e+he,a=this.map;for(var i in a)if(i.indexOf(o)>-1&&(n=a[i]))for(var u=n.length-1;u>=0;u--)(r=n[u]).left=r.left.replace(o,"").trim(),r.params[e]=t,""===r.left&&(r.cb(r.params),"once"===r.type||"all"===r.type?n.splice(u,1):"batch"===r.type&&(r.left=r.key))}},{key:"all",value:function(e,t){var n=e.sort().join("🐽🐽");this._on(n,t,"all")}},{key:"least",value:function(e,t){var n=e.sort().join("🐽🐽");this._on(n,t,"least")}},{key:"batch",value:function(e,t){var n=e.sort().join("🐽🐽");this._on(n,t,"batch")}}]),e}()),me={},ve=window.G||{serverRoot:"/"};M._aspect=ce,M.init(ve.serverRoot,{uuid:"yes",noCost:!0}),ae.init(ve.storageKey);var ye={storage:ae,util:ie.a,user:{cache:{},searchPage:function(e){return M.post("/user/searchPage",{page:e})},switchLastSpace:function(e){return M.post("/user/switchLastSpace/"+e,me)},updateAccount:function(e){return M.put("/user/update/account",e)},updatePreviewColor:function(e){return M.put("/user/update/previewColor",e)},updateTheme:function(e){return M.put("/user/update/theme",e)},updateStyle:function(e){return M.put("/user/update/style",e)},signUp:function(e){return M.post("/user/signUp",e)},signIn:function(e){return M.post("/user/signIn",e)},signOut:function(){return M.post("/user/signOut",me)},sync:function(){return M.get("/user/sync",me)},render:function(e){return ye.render("user",e,this.cache)}},space:{import:function(e){return M.post("/space/import",e)},createSpace:function(e){return M.post("/space/create",e)},delete:function(e){return M.delete("/space/delete/"+e,me)},get:function(e){return M.get("/space/"+e,me)},export:function(e,t,n){return M.download("/space/export/"+e,t,n)},searchMyNote:function(e){return M.post("/space/my/searchNote",e)},my:function(e){return M.get("/space/my",e)},updateName:function(e,t){return M.put("/space/updateName/"+e,{name:t})}},folder:{move:function(e){return M.put("/folder/move",e)},my:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastSpace";return M.get("/folder/my/"+e,me)},delete:function(e){return M.delete("/folder/delete/"+e,me)},create:function(e){return M.post("/folder/create",e)},updateName:function(e,t){return M.put("/folder/updateName/"+e,{name:t})},updateNotesIndex:function(e){return M.put("/folder/updateNotesIndex",e)},export:function(e,t,n){return M.download("/folder/export/"+e,t,n)},import:function(e){return M.post("/folder/import",e)}},blog:{spaces:function(e){return M.post("/blog/spaces",e)},folders:function(e){return M.post("/blog/folders",{userId:e})},notes:function(e,t){return M.post("/blog/notes",{condition:e,page:t})},sort:function(e){return M.get("/blog/sort/"+e,me)},user:function(e){return M.get("/blog/user/".concat(e),me)},pv:function(e){return M.put("/blog/pv",{noteId:e})},great:function(e){return M.put("/blog/great",{noteId:e})},getNoteNeighbor:function(e){return M.post("/blog/getNoteNeighbor",e)},getNote:function(e){return M.post("/blog/getNote",e)},getUser:function(e){return M.post("/blog/getUser",e)},savePage:function(e){return M.post("/blog/savePage",e)}},file:{upload:function(e,t,n){return M.upload("/file",{file:e,name:t},n)}},comment:{post:function(e){return M.post("/comment/post",e)},searchPage:function(e,t){return M.post("/comment/searchPage",{condition:e,page:t})}},note:{my:function(e,t){return M.post("/note/my/"+e,t)},share:function(e){return M.post("/note/share",e)},move:function(e){return M.put("/note/move",e)},export:function(e,t,n){return M.download("/note/export/"+e,t,n)},import:function(e){return M.post("/note/import",e)},load:function(e){return M.get("/note/load/"+e,me)},delete:function(e){return M.delete("/note/delete/"+e,me)},update:function(e,t){return M.put("/note/update/"+e,t)},create:function(e){var t=e.folderId,n=e.name;return M.post("/note/create/"+t,{name:n})},updateName:function(e,t){return M.put("/note/updateName/"+e,{name:t})},publish:function(e,t){return M.put("/note/publish",{noteId:e,private:t})}},render:function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return new s.a(function(){var u=i()(o.a.mark((function i(u){var s,c,l,f;return o.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(s=e+":"+t,a&&delete n[t],!n[t]){o.next=7;break}console.log("%crender from cache","color:green",e,t,a),"done"===n[t].status?u(n[t].data):ge.once(s,(function(e){u(e[s])})),o.next=16;break;case 7:return ge.once(s,(function(e){u(e[s])})),console.log("%crender from remote","color:red",e,t,a),n[t]={status:"loading",data:null},o.next=12,M.get("/"+e+"/render/"+t,r);case 12:c=o.sent,l=c.code,f=c.data,0===l?(n[t].status="done",n[t].data=f,ge.emit(s,f)):delete n[t];case 16:case"end":return o.stop()}}),i)})));return function(e){return u.apply(this,arguments)}}())}};t.a=ye},133:function(e,t,n){},15:function(e,t,n){"use strict";var r=n(17),o=n.n(r),a=n(6),i=n.n(a);t.a={isParent:function(e,t){for(;null!=e&&"BODY"!==e.tagName.toUpperCase();){if(e.classList.contains(t))return!0;e=e.parentNode}return!1},getLocation:function(){return new i.a((function(e,t){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){e({longitude:t.coords.longitude,latitue:t.coords.latitude})}),t):(alert("Browser doesn't support Geolocation"),t(new Error("Browser doesn't support Geolocation")))}))},igReplace:function(e,t,n){if(e){var r=new RegExp(e.replace(/[()?^$[\]|]/g,(function(e){return"\\"+e})).replace(/\s+/,"|"),"ig");return t.replace(r,n)}return t},loadScript:function(e,t){return t=t||e,new i.a((function(n,r){var o=document.getElementById(t);if(o)n();else{(o=document.createElement("script")).src=e,o.id=t;var a=document.head||document.getElementsByTagName("head")[0]||document.body;o.onload=n,o.onerror=function(e){o.parentNode.removeChild(o),r(e)},a.appendChild(o)}}))},base64:function(e){return new i.a((function(t,n){var r=new Image;r.crossOrigin="anonymous",r.src=e,r.onload=function(){var e=document.createElement("canvas");e.width=r.width,e.height=r.height,e.getContext("2d").drawImage(r,0,0,e.width,e.height),t(e.toDataURL())}}))},copy:function(e){return e?JSON.parse(o()(e)):e},format:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yy-MM-dd hh:mm:ss";return"string"!=typeof e&&"number"!=typeof e||(e=new Date(e)),e.format(t)},randomColor:function(){return"#"+function e(t){return(t+="0123456789abcdef"[Math.floor(16*Math.random())])&&6===t.length?t:e(t)}("")},propInSearch:function(e){return window.location.search.indexOf(e)>-1},query2Json:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={},n=(e=(e=e||location.search).replace("?","")).split("&");return n.forEach((function(e){var n=e.split("=");2===n.length&&(t[n[0]]=decodeURIComponent(n[1]))})),t},json2Query:function(e){var t="";for(var n in e)e[n]&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t&&(t="?"+t.substr(0,t.length-1)),t},parseQuery:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.indexOf("?");return n>-1?(t.base=e.substr(0,n),t.query=this.query2Json(e.substr(n))):t.base=e,t},parseHash:function(e,t){var n=e.indexOf("#");return n>-1&&(t.hash=e.substr(n),e=e.substr(0,n)),e},parseHashQuery:function(e,t){t=t||window.location.href;var n={base:"",hash:"",query:{}};for(var r in t=this.parseHash(t,n),this.parseQuery(t,n),e)n.query[r]=e[r];var o=this.json2Query(n.query);return n.base+o+n.hash},open:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?window.location.href=e:window.open(e)},reload:function(e){var t=window.location,n="?";for(var r in e)n+=r+"="+e[r]+"&";n=n.substring(0,n.length-1),t.href=t.origin+t.pathname+n+t.hash},intervalMap:{},interval:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;this.intervalMap.hasOwnProperty(e)&&(window.clearInterval(this.intervalMap[e]),console.warn("stop interval",e),delete this.intervalMap[e]),t&&(t(),console.warn("start interval",e),this.intervalMap[e]=setInterval(t,n))},uuid:function(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")},addStyle:function(e,t){var n=document.head.querySelector("style#"+e);n&&document.head.removeChild(n),(n=document.createElement("style")).type="text/css",n.id=e,n.appendChild(document.createTextNode(t)),document.head.appendChild(n)},isWX:/MicroMessenger/i.test(navigator.userAgent),isMobile:!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},console.warn("common/api/util plugin")},19:function(e,t){e.exports=third},2:function(e,t,n){e.exports=n(19)(12)},297:function(e,t,n){"use strict";var r=n(133);n.n(r).a},35:function(e,t,n){e.exports=n(19)(15)},362:function(e,t,n){"use strict";n.r(t);var r=n(2),o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"not-found"},[this._v("\n    404~Not Found!\n    "),this.msg?t("span",[this._v(this._s(this.msg))]):this._e()])};o._withStripped=!0;var a=n(1),i=a.a.util.query2Json(),u={data:function(){return{msg:""}},created:function(){i.s&&(this.msg=a.a.storage.get(i.s))}},s=(n(297),n(3)),c=Object(s.a)(u,o,[],!1,null,null,null);c.options.__file="src/404/app.vue";var l=c.exports;new r.default({render:function(e){return e(l)}}).$mount("#main");console.warn("app inited")}},[[362,2,3]]]);