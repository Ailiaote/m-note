(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,n,t){},123:function(e,n,t){},184:function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"m-note"},[e.hideLogo?e._e():t("svg",{staticClass:"logo",style:e.style,attrs:{width:"92pt",height:"92pt",viewBox:"0 0 92 92",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[t("g",[t("path",{attrs:{fill:e.color,opacity:"1.00",d:" M 19.20 16.18 C 29.96 8.27 44.21 5.70 57.15 8.82 C 53.33 10.96 49.67 13.90 48.14 18.14 C 45.94 24.10 47.45 30.66 49.84 36.31 C 49.41 30.70 48.18 24.77 50.38 19.36 C 52.20 14.55 56.85 11.05 61.92 10.43 C 78.91 16.40 91.14 33.27 92.00 51.21 L 92.00 55.97 C 91.48 66.34 87.34 76.36 80.62 84.26 C 78.51 84.27 76.39 84.29 74.27 84.31 C 77.13 74.73 77.08 64.05 73.03 54.82 C 71.32 51.19 68.41 47.06 63.95 47.11 C 59.54 47.32 56.75 51.48 55.07 55.13 C 51.21 64.28 51.22 74.82 53.96 84.28 C 50.01 84.29 46.07 84.29 42.12 84.28 C 44.90 75.00 44.88 64.72 41.25 55.67 C 39.67 52.03 37.18 47.99 32.98 47.18 C 28.40 46.51 25.09 50.63 23.31 54.31 C 19.01 63.63 18.94 74.54 21.82 84.29 C 18.42 84.28 15.03 84.27 11.63 84.35 C 4.62 76.67 0.64 66.48 0.00 56.14 L 0.00 51.36 C 0.70 37.52 7.91 24.22 19.20 16.18 M 75.36 30.32 C 73.20 31.37 73.04 34.74 75.29 35.79 C 77.46 37.33 80.50 34.69 79.72 32.29 C 79.27 30.43 77.06 29.52 75.36 30.32 Z"}})])]),e._v(" "),e.hideText?e._e():t("AniLetter",{ref:"aniLetter",attrs:{text:"MNote",options:{size:e.size,weight:e.weight}}})],1)};i._withStripped=!0;var a=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"ani-letter",style:this.style},[this._v(this._s(this.text))])};a._withStripped=!0;var s=t(10),r=t.n(s),h=t(14),o=t.n(h),l=t(8),d=t.n(l),g=t(9),u=t.n(g),c=t(7),f=t.n(c),b=t(11),p=t.n(b),w=t(13),y=t.n(w),m=t(109),v=t.n(m),O=t(53),A=t.n(O);
/**
 * segment - A little JavaScript class (without dependencies) to draw and animate SVG path strokes
 * @version v1.0.8
 * @link https://github.com/lmgonzalves/segment
 * @license MIT
 */
function x(e,n,t,i){this.path=e,this.length=e.getTotalLength(),this.path.style.strokeDashoffset=2*this.length,this.begin=void 0!==n?this.valueOf(n):0,this.end=void 0!==t?this.valueOf(t):this.length,this.circular="undefined"!==i&&i,this.timer=null,this.animationTimer=null,this.draw(this.begin,this.end,0,{circular:this.circular})}!function(){for(var e=0,n=["ms","moz","webkit","o"],t=0;t<n.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[n[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[t]+"CancelAnimationFrame"]||window[n[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var t=(new Date).getTime(),i=Math.max(0,16-(t-e)),a=window.setTimeout((function(){n(t+i)}),i);return e=t+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),x.prototype={draw:function(e,n,t,i){if(this.circular=!(!i||!i.hasOwnProperty("circular"))&&i.circular,t){var a=i&&i.hasOwnProperty("delay")?1e3*A()(i.delay):0,s=i&&i.hasOwnProperty("easing")?i.easing:null,r=i&&i.hasOwnProperty("callback")?i.callback:null,h=this;if(this.stop(),a)return delete i.delay,this.timer=setTimeout((function(){h.draw(e,n,t,i)}),a),this.timer;var o=new Date,l=this.begin,d=this.end,g=this.valueOf(e),u=this.valueOf(n);!function e(){var n=(new Date-o)/1e3/A()(t),i=n;return"function"==typeof s&&(i=s(i)),n>1?i=1:h.animationTimer=window.requestAnimationFrame(e),h.begin=l+(g-l)*i,h.end=d+(u-d)*i,h.begin=h.begin<0&&!h.circular?0:h.begin,h.begin=h.begin>h.length&&!h.circular?h.length:h.begin,h.end=h.end<0&&!h.circular?0:h.end,h.end=h.end>h.length&&!h.circular?h.length:h.end,h.end-h.begin<=h.length&&h.end-h.begin>0?h.draw(h.begin,h.end,0,{circular:h.circular}):h.circular&&h.end-h.begin>h.length?h.draw(0,h.length,0,{circular:h.circular}):h.draw(h.begin+(h.end-h.begin),h.end-(h.end-h.begin),0,{circular:h.circular}),n>1&&"function"==typeof r?r.call(h):void 0}()}else this.path.style.strokeDasharray=this.strokeDasharray(e,n)},strokeDasharray:function(e,n){if(this.begin=this.valueOf(e),this.end=this.valueOf(n),this.circular){var t=this.begin>this.end||this.begin<0&&this.begin<-1*this.length?v()(this.begin/v()(this.length)):v()(this.end/v()(this.length));0!==t&&(this.begin=this.begin-this.length*t,this.end=this.end-this.length*t)}if(this.end>this.length){var i=this.end-this.length;return[this.length,this.length,i,this.begin-i,this.end-this.begin].join(" ")}if(this.begin<0){var a=this.length+this.begin;return this.end<0?[this.length,this.length+this.begin,this.end-this.begin,a-this.end,this.end-this.begin,this.length].join(" "):[this.length,this.length+this.begin,this.end-this.begin,a-this.end,this.length].join(" ")}return[this.length,this.length+this.begin,this.end-this.begin].join(" ")},valueOf:function(e){var n,t=A()(e);("string"==typeof e||e instanceof String)&&~e.indexOf("%")&&(~e.indexOf("+")?(n=e.split("+"),t=this.percent(n[0])+A()(n[1])):~e.indexOf("-")?t=3===(n=e.split("-")).length?-this.percent(n[1])-A()(n[2]):n[0]?this.percent(n[0])-A()(n[1]):-this.percent(n[1]):t=this.percent(e));return t},stop:function(){window.cancelAnimationFrame(this.animationTimer),this.animationTimer=null,clearTimeout(this.timer),this.timer=null},percent:function(e){return A()(e)/100*this.length}};var C=x,M={ease:function(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}},P=(function e(n){return n=+n,{exponent:e,ease:function(e){return Math.pow(e,n)}}}(3),function e(n){return n=+n,{exponent:e,ease:function(e){return 1-Math.pow(1-e,n)}}}(3),function e(n){return n=+n,{exponent:e,ease:function(e){return((e*=2)<=1?Math.pow(e,n):2-Math.pow(2-e,n))/2}}}(3),Math.PI,{ease:function(e){return((e*=2)<=1?Math.pow(2,10*e-10):2-Math.pow(2,10-10*e))/2}});(function e(n){return n=+n,{overshoot:e,ease:function(e){return e*e*((n+1)*e-n)}}})(1.70158),function e(n){return n=+n,{overshoot:e,ease:function(e){return--e*e*((n+1)*e+n)+1}}}(1.70158),function e(n){return n=+n,{overshoot:e,ease:function(e){return((e*=2)<1?e*e*((n+1)*e-n):(e-=2)*e*((n+1)*e+n)+2)/2}}}(1.70158);var F=2*Math.PI;(function e(n,t){var i=Math.asin(1/(n=Math.max(1,n)))*(t/=F);return{amplitude:function(n){return e(n,t*F)},period:function(t){return e(n,t)},ease:function(e){return n*Math.pow(2,10*--e)*Math.sin((i-e)/t)}}})(1,.3),function e(n,t){var i=Math.asin(1/(n=Math.max(1,n)))*(t/=F);return{amplitude:function(n){return e(n,t*F)},period:function(t){return e(n,t)},ease:function(e){return 1-n*Math.pow(2,-10*(e=+e))*Math.sin((e+i)/t)}}}(1,.3),function e(n,t){var i=Math.asin(1/(n=Math.max(1,n)))*(t/=F);return{amplitude:function(n){return e(n,t*F)},period:function(t){return e(n,t)},ease:function(e){return((e=2*e-1)<0?n*Math.pow(2,10*e)*Math.sin((i-e)/t):2-n*Math.pow(2,-10*e)*Math.sin((i+e)/t))/2}}}(1,.3);function k(e,n){this.el=e,this.text=e.innerHTML.toLowerCase(),e.innerHTML='<span style="position: absolute; visibility: hidden;">'+this.text+"</span>",this.init(n)}function L(e,n){var t=p()(e);if(f.a){var i=f()(e);n&&(i=i.filter((function(n){return u()(e,n).enumerable}))),t.push.apply(t,i)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(t,!0).forEach((function(n){y()(e,n,t[n])})):d.a?o()(e,d()(t)):L(t).forEach((function(n){r()(e,n,u()(t,n))}))}return e}k.prototype={init:function(e){this.size=e&&e.hasOwnProperty("size")?e.size:100,this.weight=e&&e.hasOwnProperty("weight")?e.weight:1,this.rounded=!(!e||!e.hasOwnProperty("rounded"))&&e.rounded,this.color=e&&e.hasOwnProperty("color")?e.color:"#5F6062",this.duration=e&&e.hasOwnProperty("duration")?e.duration:1,this.delay=e&&e.hasOwnProperty("delay")?e.delay:[0,.05],this.fade=e&&e.hasOwnProperty("fade")?e.fade:.5,this.easing=e&&e.hasOwnProperty("easing")?e.easing:M.ease,this.individualDelays=!(!e||!e.hasOwnProperty("individualDelays"))&&e.individualDelays,this.visible=!1,this._svgNS="http://www.w3.org/2000/svg",this.svgs=[],this.timer=[],this.segments=[],this.drawText()},drawText:function(){this.letters=this.text.replace(/[^a-z ]/g,"").split("");var e=this,n="number"==typeof e.size?e.size:e.size[0],t="number"==typeof e.weight?e.weight:e.weight[0],i="boolean"==typeof e.rounded?e.rounded:e.rounded[0],a="string"==typeof e.color?e.color:e.color[0],s="number"==typeof e.fade?e.fade:e.fade[0];e.renderAlphabet="number"!=typeof e.weight||"boolean"!=typeof e.rounded||e.initAlphabet(t,i)&&!1;var r=0;this.letters.forEach((function(h,o){n="number"==typeof e.size[o]?e.size[o]:n,t="number"==typeof e.weight[o]?e.weight[o]:t,i="boolean"==typeof e.rounded[o]?e.rounded[o]:i,a="string"!=typeof e.color&&"string"==typeof e.color[o]?e.color[o]:a,s="number"==typeof e.fade[o]?e.fade[o]:s,e.renderAlphabet&&e.initAlphabet(t,i)," "===h?(e.drawLetter(h,o,n),r++):e.segments[o-r]=e.drawLetter(h,o-r,n,t,i,a,s)})),this.letters=this.text.replace(/[^a-z]/g,"").split("")},drawLetter:function(e,n,t,i,a,s,r){if(" "!==e){var h,o,l=this.createSVG(this.alphabet[e].svg,e,n,t,r),d=[],g=this.alphabet[e].paths,u=this.alphabet[e].initial,c=this;return g.forEach((function(e,n){(h=document.createElementNS(c._svgNS,"path")).setAttribute("d",e),h.setAttribute("stroke-width",i),h.setAttribute("stroke-linecap",a?"round":"butt"),h.setAttribute("stroke",s),h.setAttribute("fill","none"),o=new C(h,u[n].begin,u[n].end,!0),d.push(o),l.appendChild(h)})),d}this.createSVG(this.alphabet[e].svg,"space",n,t)},createSVG:function(e,n,t,i,a){var s=document.createElementNS(this._svgNS,"svg");s.setAttribute("aria-hidden","true"),s.setAttribute("role","img"),s.setAttribute("viewBox","0 0 "+e.width+" "+e.height),s.setAttribute("height",i+"px");var r=i*(e.width/e.height);if(s.setAttribute("width",Math.ceil(r)+"px"),s.setAttribute("class","letter letter-"+n+("space"!==n?" letter-"+(t+1):"")),this.el.appendChild(s),"space"!==n)return this.svgs[t]=s,a&&(s.style.opacity=0,this.setupFade(a,t)),s},setupFade:function(e,n){var t=this.svgs[n];e?(t.style.transition=e+"s opacity",t.style.webkitTransition=e+"s opacity"):t.style.transition=null},show:function(e){this.visible=!0,this.clear();var n,t,i=e&&e.hasOwnProperty("duration")?e.duration:this.duration,a=e&&e.hasOwnProperty("delay")?e.delay:this.delay,s=e&&e.hasOwnProperty("fade")?e.fade:this.fade,r=e&&e.hasOwnProperty("easing")?e.easing:this.easing,h=e&&e.hasOwnProperty("individualDelays")?e.individualDelays:this.individualDelays,o=0,l=0,d="number"==typeof i?i:i[0],g="number"==typeof s?s:s[0],u="function"==typeof r?r:r[0],c=this;c.renderAlphabet&&(n="number"==typeof c.weight?c.weight:c.weight[0],t="boolean"==typeof c.rounded?c.rounded:c.rounded[0]);var f=this.letters.length;this.letters.forEach((function(b,p){d="number"==typeof i[p]?i[p]:d,g="number"==typeof s[p]?s[p]:g,u="function"==typeof r[p]?r[p]:u,"number"==typeof a?o=h?a:o+a:(l="number"==typeof a[p]?a[p]:l,o=h?l:o+l),o?c.timer[p]=setTimeout((function(){c.setupFade(g,p),c.svgs[p].style.opacity=1,c.el.offsetHeight}),1e3*o):(c.setupFade(g,p),c.svgs[p].style.opacity=1,c.el.offsetHeight),c.renderAlphabet&&(n="number"==typeof c.weight[p]?c.weight[p]:n,t="boolean"==typeof c.rounded[p]?c.rounded[p]:t,c.initAlphabet(n,t));var w=p===f-1&&e&&e.hasOwnProperty("callback")?e.callback:null,y=c.alphabet[b].final;c.segments[p].forEach((function(e,n){e.draw(y[n].begin,y[n].end,d,{delay:o,circular:!0,easing:u,callback:w}),w=null}))}))},hide:function(e){this.visible=!1,this.clear();var n=e&&e.hasOwnProperty("duration")?e.duration:this.duration,t=e&&e.hasOwnProperty("delay")?e.delay:this.delay,i=e&&e.hasOwnProperty("fade")?e.fade:this.fade,a=e&&e.hasOwnProperty("easing")?e.easing:this.easing,s=e&&e.hasOwnProperty("individualDelays")?e.individualDelays:this.individualDelays,r=0,h=0,o="number"==typeof n?n:n[0],l="number"==typeof i?i:i[0],d="function"==typeof a?a:a[0],g=this,u=this.letters.length;this.letters.forEach((function(c,f){o="number"==typeof n[f]?n[f]:o,l="number"==typeof i[f]?i[f]:l,d="function"==typeof a[f]?a[f]:d,"number"==typeof t?r=s?t:r+t:(h="number"==typeof t[f]?t[f]:h,r=s?h:r+h),g.setupFade(l,f);var b=1e3*(o-l+r);b?g.timer[f]=setTimeout((function(){g.svgs[f].style.opacity=0,g.el.offsetHeight}),b):(g.svgs[f].style.opacity=0,g.el.offsetHeight);var p=f===u-1&&e&&e.hasOwnProperty("callback")?e.callback:null,w=g.alphabet[c].initial;g.segments[f].forEach((function(e,n){e.draw(w[n].begin,w[n].end,o,{delay:r,circular:!0,easing:d,callback:p}),p=null}))}))},toggle:function(e){this.visible?this.hide(e):this.show(e)},showInstantly:function(){this.show({duration:0,delay:0,fade:0})},hideInstantly:function(){this.hide({duration:0,delay:0,fade:0})},toggleInstantly:function(){this.toggle({duration:0,delay:0,fade:0})},clear:function(){var e=this;this.letters.forEach((function(n,t){clearTimeout(e.timer[t])}))},initAlphabet:function(e,n){var t=44+e,i=94+2*e,a=n?0:e/2,s="m 0 -20 a 20 20 0 1 1 0 40 a 20 20 0 1 1 0 -40",r="m "+t/2+" "+i/2+" "+s,h="m "+t/2+" "+i/2+" "+s,o="m "+(t/2+40)+" "+i/2+" "+s,l="m "+t/2+" "+(i/2-12)+" "+s,d="m "+t/2+" "+(i/2+e/2)+" "+s,g="m "+t/2+" "+(i/2+20+a)+" "+s,u="m "+(t/2-20-a)+" "+(i/2+20+a)+" "+s,c="m "+(t/2-20-a)+" "+i/2+" "+s,f="m "+(t/2+20-a)+" "+i/2+" "+s,b="m "+(t/2-20)+" 0 l 0 "+i,p="m "+(t/2-20)+" 0 l 0 "+i,w="m "+(t/2+20)+" 0 l 0 "+i,y="m "+(t/2+60)+" 0 l 0 "+i,m="m "+(t/2-20)+" 0 l 0 "+i,v="m 0 "+(i/2+a+(a?0:1))+" l "+t+" 0",O="m "+(t/2-a)+" 0 l 0 "+i,A="m 0 "+(i/2-20)+" l "+t+" 0",x={width:t,height:i},C={width:t+40,height:i},M={width:t-20-a,height:i},P={width:t-2*a,height:i},F="50% + "+(20+a),k="50% - "+(20+a),L="50% - "+(20+a+12);this.alphabet={a:{svg:x,paths:[r,w],initial:[{begin:"5%",end:"5%"},{begin:"90%",end:"90%"}],final:[{begin:"50%",end:"125% + 1"},{begin:"50%",end:F}]},b:{svg:x,paths:[r,b],initial:[{begin:"-125%",end:"-125%"},{begin:"5%",end:"5%"}],final:[{begin:"-125%",end:"-50%"},{begin:L,end:F}]},c:{svg:x,paths:[r],initial:[{begin:"105%",end:"105%"}],final:[{begin:"-50%",end:"25%"}]},d:{svg:x,paths:[r,w],initial:[{begin:"125%",end:"125%"},{begin:"5%",end:"5%"}],final:[{begin:"50%",end:"125%"},{begin:L,end:F}]},e:{svg:x,paths:[r,v],initial:[{begin:"-105%",end:"-105%"},{begin:"5%",end:"5%"}],final:[{begin:"50%",end:"125% + 1"},{begin:"50%",end:F}]},f:{svg:M,paths:[l,d,b],initial:[{begin:"-25%",end:"-25%"},{begin:"1",end:"1"},{begin:"50% - 13",end:"50% - 13"}],final:[{begin:"-25%",end:"1"},{begin:"-25%",end:"1"},{begin:"50% - 13",end:F}]},g:{svg:x,paths:[r,g,w],initial:[{begin:"25%",end:"25%"},{begin:"-10%",end:"-10%"},{begin:"50%",end:"50%"}],final:[{begin:"-50%",end:"25% + 1"},{begin:"-75% - 1",end:"-50%"},{begin:"50%",end:F}]},h:{svg:x,paths:[r,b,w],initial:[{begin:"-25%",end:"-25%"},{begin:"10%",end:"10%"},{begin:"90%",end:"90%"}],final:[{begin:"-150%",end:"-75% + 1"},{begin:L,end:"50%"},{begin:"50%",end:F}]},i:{svg:{width:t-40,height:i},paths:[m],initial:[{begin:"50%",end:"50%"}],final:[{begin:k,end:F}]},j:{svg:M,paths:[u,O],initial:[{begin:"5%",end:"5%"},{begin:k,end:k}],final:[{begin:"25% - 1",end:"50%"},{begin:k,end:F}]},k:{svg:x,paths:[r,b],initial:[{begin:"50%",end:"50%"},{begin:"80%",end:"80%"}],final:[{begin:"25%",end:"100%"},{begin:L,end:F}]},l:{svg:{width:t-40,height:i},paths:[m],initial:[{begin:"50%",end:"50%"}],final:[{begin:L,end:F}]},m:{svg:C,paths:[h,o,p],initial:[{begin:"90%",end:"90%"},{begin:"90%",end:"90%"},{begin:"90%",end:"90%"}],final:[{begin:"-25%",end:"50%"},{begin:"-25%",end:"50%"},{begin:k,end:F}]},n:{svg:x,paths:[r,b],initial:[{begin:"-60%",end:"-60%"},{begin:"90%",end:"90%"}],final:[{begin:"-25%",end:"50%"},{begin:k,end:F}]},o:{svg:x,paths:[r],initial:[{begin:"-150%",end:"-150%"}],final:[{begin:"2%",end:"98%"}]},p:{svg:x,paths:[r,b],initial:[{begin:"25%",end:"25%"},{begin:F,end:F}],final:[{begin:"-25% - 1",end:"50%"},{begin:"50%",end:"50% + 46"}]},q:{svg:x,paths:[r,w],initial:[{begin:"-25%",end:"-25%"},{begin:F,end:F}],final:[{begin:"-50%",end:"25% + 1"},{begin:"50%",end:"50% + 46"}]},r:{svg:M,paths:[r,b],initial:[{begin:"-25% - 1",end:"-25% - 1"},{begin:"50%",end:"50%"}],final:[{begin:"-25% - 1",end:"1"},{begin:"50%",end:F}]},s:{svg:P,paths:[c,f],initial:[{begin:"50%",end:"50%"},{begin:"1",end:"1"}],final:[{begin:"25%",end:"50%"},{begin:"-25% - 1",end:"1"}]},t:{svg:M,paths:[r,b,A],initial:[{begin:"50%",end:"50%"},{begin:"5%",end:"5%"},{begin:"50%",end:"50%"}],final:[{begin:"50%",end:"75% + 1"},{begin:L,end:"50%"},{begin:"50% - 20",end:"50%"}]},u:{svg:x,paths:[r,w],initial:[{begin:"50%",end:"50%"},{begin:"80%",end:"80%"}],final:[{begin:"25%",end:"100%"},{begin:k,end:F}]},v:{svg:x,paths:[r,w],initial:[{begin:"10%",end:"10%"},{begin:"20%",end:"20%"}],final:[{begin:"25% - 1",end:"100%"},{begin:k,end:"50%"}]},w:{svg:C,paths:[h,o,y],initial:[{begin:"10%",end:"10%"},{begin:"10%",end:"10%"},{begin:"20%",end:"20%"}],final:[{begin:"25%",end:"100%"},{begin:"25% - 1",end:"100%"},{begin:k,end:"50%"}]},x:{svg:P,paths:[c,f],initial:[{begin:"50%",end:"50%"},{begin:"1",end:"1"}],final:[{begin:"0",end:"50%"},{begin:"-50%",end:"1"}]},y:{svg:x,paths:[r,g,w],initial:[{begin:"1",end:"1"},{begin:"1",end:"1"},{begin:k,end:k}],final:[{begin:"-75%",end:"1"},{begin:"25% - 1",end:"50%"},{begin:k,end:F}]},z:{svg:P,paths:[c,f],initial:[{begin:"25%",end:"25%"},{begin:"75%",end:"75%"}],final:[{begin:"0",end:"25% + 1"},{begin:"50%",end:"75%"}]}," ":{svg:x}}}};var z={size:48,weight:5,rounded:!1,color:["#F26B3A","#5F6062","#F26B3A"],duration:1,delay:[.2,.15],fade:.5,easing:M.ease,individualDelays:!1},_={props:{text:{type:String,default:"ani-letter"},options:{type:Object,default:function(){return{}}}},computed:{style:function(){return{height:(this.options.size||z.size)+"px"}}},mounted:function(){this.refresh()},methods:{toggle:function(){this.aniLetter.toggle()},reShow:function(e){var n=this;this.aniLetter.hide(T({duration:.2,delay:0,fade:1,easing:P.ease},e,{callback:function(){n.aniLetter.show()}}))},refresh:function(){this.aniLetter=new k(this.$el,T({},z,{},this.options)),this.aniLetter.show()}}},D=(t(241),t(3)),S=Object(D.a)(_,a,[],!1,null,null,null);S.options.__file="common/component/ani-letter/index.vue";var E={components:{AniLetter:S.exports},props:{color:{type:String,default:"#5F6062"},size:{type:Number,default:48},weight:{type:Number,default:5},hideLogo:{type:Boolean,default:!1},hideText:{type:Boolean,default:!1}},computed:{style:function(){var e=Math.round(this.size/3*2-2)+"px";return{width:e,height:e}}},methods:{animate:function(){this.$refs.aniLetter.reShow()}}},j=(t(242),Object(D.a)(E,i,[],!1,null,null,null));j.options.__file="src/component/common/m-note.vue";n.a=j.exports},241:function(e,n,t){"use strict";var i=t(122);t.n(i).a},242:function(e,n,t){"use strict";var i=t(123);t.n(i).a}}]);