!function(e,n,o){function t(e,n){return typeof e===n}function a(){var e,n,o,a,s,i,r;for(var l in d)if(d.hasOwnProperty(l)){if(e=[],n=d[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(a=t(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],r=i.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),c.push((a?"":"no-")+r.join("-"))}}function s(e){var n=p.className,o=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?p.className.baseVal=n:p.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(u?"svg":"body"),e.fake=!0),e}function l(e,o,t,a){var s,l,c,d,f="modernizr",u=i("div"),v=r();if(parseInt(t,10))for(;t--;)c=i("div"),c.id=a?a[t]:f+(t+1),u.appendChild(c);return s=i("style"),s.type="text/css",s.id="s"+f,(v.fake?v:u).appendChild(s),v.appendChild(u),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),u.id=f,v.fake&&(v.style.background="",v.style.overflow="hidden",d=p.style.overflow,p.style.overflow="hidden",p.appendChild(v)),l=o(u,e),v.fake?(v.parentNode.removeChild(v),p.style.overflow=d,p.offsetHeight):u.parentNode.removeChild(u),!!l}var c=[],d=[],f={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){d.push({name:e,fn:n,options:o})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var p=n.documentElement,u="svg"===p.nodeName.toLowerCase(),v=f._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];f._prefixes=v,Modernizr.addTest("video",function(){var e=i("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(o){}return n});var h=f.testStyles=l;Modernizr.addTest("touchevents",function(){var o;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)o=!0;else{var t=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");h(t,function(e){o=9===e.offsetTop})}return o}),a(),s(c),delete f.addTest,delete f.addAsyncTest;for(var m=0;m<Modernizr._q.length;m++)Modernizr._q[m]();e.Modernizr=Modernizr}(window,document);
/* Chartist.js 0.11.4
 * Copyright © 2019 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */

!function(a,b){"function"==typeof define&&define.amd?define("Chartist",[],function(){return a.Chartist=b()}):"object"==typeof module&&module.exports?module.exports=b():a.Chartist=b()}(this,function(){var a={version:"0.11.4"};return function(a,b){"use strict";var c=a.window,d=a.document;b.namespaces={svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",ct:"http://gionkunz.github.com/chartist-js/ct"},b.noop=function(a){return a},b.alphaNumerate=function(a){return String.fromCharCode(97+a%26)},b.extend=function(a){var c,d,e;for(a=a||{},c=1;c<arguments.length;c++){d=arguments[c];for(var f in d)e=d[f],"object"!=typeof e||null===e||e instanceof Array?a[f]=e:a[f]=b.extend(a[f],e)}return a},b.replaceAll=function(a,b,c){return a.replace(new RegExp(b,"g"),c)},b.ensureUnit=function(a,b){return"number"==typeof a&&(a+=b),a},b.quantity=function(a){if("string"==typeof a){var b=/^(\d+)\s*(.*)$/g.exec(a);return{value:+b[1],unit:b[2]||void 0}}return{value:a}},b.querySelector=function(a){return a instanceof Node?a:d.querySelector(a)},b.times=function(a){return Array.apply(null,new Array(a))},b.sum=function(a,b){return a+(b?b:0)},b.mapMultiply=function(a){return function(b){return b*a}},b.mapAdd=function(a){return function(b){return b+a}},b.serialMap=function(a,c){var d=[],e=Math.max.apply(null,a.map(function(a){return a.length}));return b.times(e).forEach(function(b,e){var f=a.map(function(a){return a[e]});d[e]=c.apply(null,f)}),d},b.roundWithPrecision=function(a,c){var d=Math.pow(10,c||b.precision);return Math.round(a*d)/d},b.precision=8,b.escapingMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},b.serialize=function(a){return null===a||void 0===a?a:("number"==typeof a?a=""+a:"object"==typeof a&&(a=JSON.stringify({data:a})),Object.keys(b.escapingMap).reduce(function(a,c){return b.replaceAll(a,c,b.escapingMap[c])},a))},b.deserialize=function(a){if("string"!=typeof a)return a;a=Object.keys(b.escapingMap).reduce(function(a,c){return b.replaceAll(a,b.escapingMap[c],c)},a);try{a=JSON.parse(a),a=void 0!==a.data?a.data:a}catch(c){}return a},b.createSvg=function(a,c,d,e){var f;return c=c||"100%",d=d||"100%",Array.prototype.slice.call(a.querySelectorAll("svg")).filter(function(a){return a.getAttributeNS(b.namespaces.xmlns,"ct")}).forEach(function(b){a.removeChild(b)}),f=new b.Svg("svg").attr({width:c,height:d}).addClass(e),f._node.style.width=c,f._node.style.height=d,a.appendChild(f._node),f},b.normalizeData=function(a,c,d){var e,f={raw:a,normalized:{}};return f.normalized.series=b.getDataArray({series:a.series||[]},c,d),e=f.normalized.series.every(function(a){return a instanceof Array})?Math.max.apply(null,f.normalized.series.map(function(a){return a.length})):f.normalized.series.length,f.normalized.labels=(a.labels||[]).slice(),Array.prototype.push.apply(f.normalized.labels,b.times(Math.max(0,e-f.normalized.labels.length)).map(function(){return""})),c&&b.reverseData(f.normalized),f},b.safeHasProperty=function(a,b){return null!==a&&"object"==typeof a&&a.hasOwnProperty(b)},b.isDataHoleValue=function(a){return null===a||void 0===a||"number"==typeof a&&isNaN(a)},b.reverseData=function(a){a.labels.reverse(),a.series.reverse();for(var b=0;b<a.series.length;b++)"object"==typeof a.series[b]&&void 0!==a.series[b].data?a.series[b].data.reverse():a.series[b]instanceof Array&&a.series[b].reverse()},b.getDataArray=function(a,c,d){function e(a){if(b.safeHasProperty(a,"value"))return e(a.value);if(b.safeHasProperty(a,"data"))return e(a.data);if(a instanceof Array)return a.map(e);if(!b.isDataHoleValue(a)){if(d){var c={};return"string"==typeof d?c[d]=b.getNumberOrUndefined(a):c.y=b.getNumberOrUndefined(a),c.x=a.hasOwnProperty("x")?b.getNumberOrUndefined(a.x):c.x,c.y=a.hasOwnProperty("y")?b.getNumberOrUndefined(a.y):c.y,c}return b.getNumberOrUndefined(a)}}return a.series.map(e)},b.normalizePadding=function(a,b){return b=b||0,"number"==typeof a?{top:a,right:a,bottom:a,left:a}:{top:"number"==typeof a.top?a.top:b,right:"number"==typeof a.right?a.right:b,bottom:"number"==typeof a.bottom?a.bottom:b,left:"number"==typeof a.left?a.left:b}},b.getMetaData=function(a,b){var c=a.data?a.data[b]:a[b];return c?c.meta:void 0},b.orderOfMagnitude=function(a){return Math.floor(Math.log(Math.abs(a))/Math.LN10)},b.projectLength=function(a,b,c){return b/c.range*a},b.getAvailableHeight=function(a,c){return Math.max((b.quantity(c.height).value||a.height())-(c.chartPadding.top+c.chartPadding.bottom)-c.axisX.offset,0)},b.getHighLow=function(a,c,d){function e(a){if(void 0!==a)if(a instanceof Array)for(var b=0;b<a.length;b++)e(a[b]);else{var c=d?+a[d]:+a;g&&c>f.high&&(f.high=c),h&&c<f.low&&(f.low=c)}}c=b.extend({},c,d?c["axis"+d.toUpperCase()]:{});var f={high:void 0===c.high?-Number.MAX_VALUE:+c.high,low:void 0===c.low?Number.MAX_VALUE:+c.low},g=void 0===c.high,h=void 0===c.low;return(g||h)&&e(a),(c.referenceValue||0===c.referenceValue)&&(f.high=Math.max(c.referenceValue,f.high),f.low=Math.min(c.referenceValue,f.low)),f.high<=f.low&&(0===f.low?f.high=1:f.low<0?f.high=0:f.high>0?f.low=0:(f.high=1,f.low=0)),f},b.isNumeric=function(a){return null!==a&&isFinite(a)},b.isFalseyButZero=function(a){return!a&&0!==a},b.getNumberOrUndefined=function(a){return b.isNumeric(a)?+a:void 0},b.isMultiValue=function(a){return"object"==typeof a&&("x"in a||"y"in a)},b.getMultiValue=function(a,c){return b.isMultiValue(a)?b.getNumberOrUndefined(a[c||"y"]):b.getNumberOrUndefined(a)},b.rho=function(a){function b(a,c){return a%c===0?c:b(c,a%c)}function c(a){return a*a+1}if(1===a)return a;var d,e=2,f=2;if(a%2===0)return 2;do e=c(e)%a,f=c(c(f))%a,d=b(Math.abs(e-f),a);while(1===d);return d},b.getBounds=function(a,c,d,e){function f(a,b){return a===(a+=b)&&(a*=1+(b>0?o:-o)),a}var g,h,i,j=0,k={high:c.high,low:c.low};k.valueRange=k.high-k.low,k.oom=b.orderOfMagnitude(k.valueRange),k.step=Math.pow(10,k.oom),k.min=Math.floor(k.low/k.step)*k.step,k.max=Math.ceil(k.high/k.step)*k.step,k.range=k.max-k.min,k.numberOfSteps=Math.round(k.range/k.step);var l=b.projectLength(a,k.step,k),m=l<d,n=e?b.rho(k.range):0;if(e&&b.projectLength(a,1,k)>=d)k.step=1;else if(e&&n<k.step&&b.projectLength(a,n,k)>=d)k.step=n;else for(;;){if(m&&b.projectLength(a,k.step,k)<=d)k.step*=2;else{if(m||!(b.projectLength(a,k.step/2,k)>=d))break;if(k.step/=2,e&&k.step%1!==0){k.step*=2;break}}if(j++>1e3)throw new Error("Exceeded maximum number of iterations while optimizing scale step!")}var o=2.221e-16;for(k.step=Math.max(k.step,o),h=k.min,i=k.max;h+k.step<=k.low;)h=f(h,k.step);for(;i-k.step>=k.high;)i=f(i,-k.step);k.min=h,k.max=i,k.range=k.max-k.min;var p=[];for(g=k.min;g<=k.max;g=f(g,k.step)){var q=b.roundWithPrecision(g);q!==p[p.length-1]&&p.push(q)}return k.values=p,k},b.polarToCartesian=function(a,b,c,d){var e=(d-90)*Math.PI/180;return{x:a+c*Math.cos(e),y:b+c*Math.sin(e)}},b.createChartRect=function(a,c,d){var e=!(!c.axisX&&!c.axisY),f=e?c.axisY.offset:0,g=e?c.axisX.offset:0,h=a.width()||b.quantity(c.width).value||0,i=a.height()||b.quantity(c.height).value||0,j=b.normalizePadding(c.chartPadding,d);h=Math.max(h,f+j.left+j.right),i=Math.max(i,g+j.top+j.bottom);var k={padding:j,width:function(){return this.x2-this.x1},height:function(){return this.y1-this.y2}};return e?("start"===c.axisX.position?(k.y2=j.top+g,k.y1=Math.max(i-j.bottom,k.y2+1)):(k.y2=j.top,k.y1=Math.max(i-j.bottom-g,k.y2+1)),"start"===c.axisY.position?(k.x1=j.left+f,k.x2=Math.max(h-j.right,k.x1+1)):(k.x1=j.left,k.x2=Math.max(h-j.right-f,k.x1+1))):(k.x1=j.left,k.x2=Math.max(h-j.right,k.x1+1),k.y2=j.top,k.y1=Math.max(i-j.bottom,k.y2+1)),k},b.createGrid=function(a,c,d,e,f,g,h,i){var j={};j[d.units.pos+"1"]=a,j[d.units.pos+"2"]=a,j[d.counterUnits.pos+"1"]=e,j[d.counterUnits.pos+"2"]=e+f;var k=g.elem("line",j,h.join(" "));i.emit("draw",b.extend({type:"grid",axis:d,index:c,group:g,element:k},j))},b.createGridBackground=function(a,b,c,d){var e=a.elem("rect",{x:b.x1,y:b.y2,width:b.width(),height:b.height()},c,!0);d.emit("draw",{type:"gridBackground",group:a,element:e})},b.createLabel=function(a,c,e,f,g,h,i,j,k,l,m){var n,o={};if(o[g.units.pos]=a+i[g.units.pos],o[g.counterUnits.pos]=i[g.counterUnits.pos],o[g.units.len]=c,o[g.counterUnits.len]=Math.max(0,h-10),l){var p=d.createElement("span");p.className=k.join(" "),p.setAttribute("xmlns",b.namespaces.xhtml),p.innerText=f[e],p.style[g.units.len]=Math.round(o[g.units.len])+"px",p.style[g.counterUnits.len]=Math.round(o[g.counterUnits.len])+"px",n=j.foreignObject(p,b.extend({style:"overflow: visible;"},o))}else n=j.elem("text",o,k.join(" ")).text(f[e]);m.emit("draw",b.extend({type:"label",axis:g,index:e,group:j,element:n,text:f[e]},o))},b.getSeriesOption=function(a,b,c){if(a.name&&b.series&&b.series[a.name]){var d=b.series[a.name];return d.hasOwnProperty(c)?d[c]:b[c]}return b[c]},b.optionsProvider=function(a,d,e){function f(a){var f=h;if(h=b.extend({},j),d)for(i=0;i<d.length;i++){var g=c.matchMedia(d[i][0]);g.matches&&(h=b.extend(h,d[i][1]))}e&&a&&e.emit("optionsChanged",{previousOptions:f,currentOptions:h})}function g(){k.forEach(function(a){a.removeListener(f)})}var h,i,j=b.extend({},a),k=[];if(!c.matchMedia)throw"window.matchMedia not found! Make sure you're using a polyfill.";if(d)for(i=0;i<d.length;i++){var l=c.matchMedia(d[i][0]);l.addListener(f),k.push(l)}return f(),{removeMediaQueryListeners:g,getCurrentOptions:function(){return b.extend({},h)}}},b.splitIntoSegments=function(a,c,d){var e={increasingX:!1,fillHoles:!1};d=b.extend({},e,d);for(var f=[],g=!0,h=0;h<a.length;h+=2)void 0===b.getMultiValue(c[h/2].value)?d.fillHoles||(g=!0):(d.increasingX&&h>=2&&a[h]<=a[h-2]&&(g=!0),g&&(f.push({pathCoordinates:[],valueData:[]}),g=!1),f[f.length-1].pathCoordinates.push(a[h],a[h+1]),f[f.length-1].valueData.push(c[h/2]));return f}}(this||global,a),function(a,b){"use strict";b.Interpolation={},b.Interpolation.none=function(a){var c={fillHoles:!1};return a=b.extend({},c,a),function(c,d){for(var e=new b.Svg.Path,f=!0,g=0;g<c.length;g+=2){var h=c[g],i=c[g+1],j=d[g/2];void 0!==b.getMultiValue(j.value)?(f?e.move(h,i,!1,j):e.line(h,i,!1,j),f=!1):a.fillHoles||(f=!0)}return e}},b.Interpolation.simple=function(a){var c={divisor:2,fillHoles:!1};a=b.extend({},c,a);var d=1/Math.max(1,a.divisor);return function(c,e){for(var f,g,h,i=new b.Svg.Path,j=0;j<c.length;j+=2){var k=c[j],l=c[j+1],m=(k-f)*d,n=e[j/2];void 0!==n.value?(void 0===h?i.move(k,l,!1,n):i.curve(f+m,g,k-m,l,k,l,!1,n),f=k,g=l,h=n):a.fillHoles||(f=k=h=void 0)}return i}},b.Interpolation.cardinal=function(a){var c={tension:1,fillHoles:!1};a=b.extend({},c,a);var d=Math.min(1,Math.max(0,a.tension)),e=1-d;return function f(c,g){var h=b.splitIntoSegments(c,g,{fillHoles:a.fillHoles});if(h.length){if(h.length>1){var i=[];return h.forEach(function(a){i.push(f(a.pathCoordinates,a.valueData))}),b.Svg.Path.join(i)}if(c=h[0].pathCoordinates,g=h[0].valueData,c.length<=4)return b.Interpolation.none()(c,g);for(var j,k=(new b.Svg.Path).move(c[0],c[1],!1,g[0]),l=0,m=c.length;m-2*!j>l;l+=2){var n=[{x:+c[l-2],y:+c[l-1]},{x:+c[l],y:+c[l+1]},{x:+c[l+2],y:+c[l+3]},{x:+c[l+4],y:+c[l+5]}];j?l?m-4===l?n[3]={x:+c[0],y:+c[1]}:m-2===l&&(n[2]={x:+c[0],y:+c[1]},n[3]={x:+c[2],y:+c[3]}):n[0]={x:+c[m-2],y:+c[m-1]}:m-4===l?n[3]=n[2]:l||(n[0]={x:+c[l],y:+c[l+1]}),k.curve(d*(-n[0].x+6*n[1].x+n[2].x)/6+e*n[2].x,d*(-n[0].y+6*n[1].y+n[2].y)/6+e*n[2].y,d*(n[1].x+6*n[2].x-n[3].x)/6+e*n[2].x,d*(n[1].y+6*n[2].y-n[3].y)/6+e*n[2].y,n[2].x,n[2].y,!1,g[(l+2)/2])}return k}return b.Interpolation.none()([])}},b.Interpolation.monotoneCubic=function(a){var c={fillHoles:!1};return a=b.extend({},c,a),function d(c,e){var f=b.splitIntoSegments(c,e,{fillHoles:a.fillHoles,increasingX:!0});if(f.length){if(f.length>1){var g=[];return f.forEach(function(a){g.push(d(a.pathCoordinates,a.valueData))}),b.Svg.Path.join(g)}if(c=f[0].pathCoordinates,e=f[0].valueData,c.length<=4)return b.Interpolation.none()(c,e);var h,i,j=[],k=[],l=c.length/2,m=[],n=[],o=[],p=[];for(h=0;h<l;h++)j[h]=c[2*h],k[h]=c[2*h+1];for(h=0;h<l-1;h++)o[h]=k[h+1]-k[h],p[h]=j[h+1]-j[h],n[h]=o[h]/p[h];for(m[0]=n[0],m[l-1]=n[l-2],h=1;h<l-1;h++)0===n[h]||0===n[h-1]||n[h-1]>0!=n[h]>0?m[h]=0:(m[h]=3*(p[h-1]+p[h])/((2*p[h]+p[h-1])/n[h-1]+(p[h]+2*p[h-1])/n[h]),isFinite(m[h])||(m[h]=0));for(i=(new b.Svg.Path).move(j[0],k[0],!1,e[0]),h=0;h<l-1;h++)i.curve(j[h]+p[h]/3,k[h]+m[h]*p[h]/3,j[h+1]-p[h]/3,k[h+1]-m[h+1]*p[h]/3,j[h+1],k[h+1],!1,e[h+1]);return i}return b.Interpolation.none()([])}},b.Interpolation.step=function(a){var c={postpone:!0,fillHoles:!1};return a=b.extend({},c,a),function(c,d){for(var e,f,g,h=new b.Svg.Path,i=0;i<c.length;i+=2){var j=c[i],k=c[i+1],l=d[i/2];void 0!==l.value?(void 0===g?h.move(j,k,!1,l):(a.postpone?h.line(j,f,!1,g):h.line(e,k,!1,l),h.line(j,k,!1,l)),e=j,f=k,g=l):a.fillHoles||(e=f=g=void 0)}return h}}}(this||global,a),function(a,b){"use strict";b.EventEmitter=function(){function a(a,b){d[a]=d[a]||[],d[a].push(b)}function b(a,b){d[a]&&(b?(d[a].splice(d[a].indexOf(b),1),0===d[a].length&&delete d[a]):delete d[a])}function c(a,b){d[a]&&d[a].forEach(function(a){a(b)}),d["*"]&&d["*"].forEach(function(c){c(a,b)})}var d=[];return{addEventHandler:a,removeEventHandler:b,emit:c}}}(this||global,a),function(a,b){"use strict";function c(a){var b=[];if(a.length)for(var c=0;c<a.length;c++)b.push(a[c]);return b}function d(a,c){var d=c||this.prototype||b.Class,e=Object.create(d);b.Class.cloneDefinitions(e,a);var f=function(){var a,c=e.constructor||function(){};return a=this===b?Object.create(e):this,c.apply(a,Array.prototype.slice.call(arguments,0)),a};return f.prototype=e,f["super"]=d,f.extend=this.extend,f}function e(){var a=c(arguments),b=a[0];return a.splice(1,a.length-1).forEach(function(a){Object.getOwnPropertyNames(a).forEach(function(c){delete b[c],Object.defineProperty(b,c,Object.getOwnPropertyDescriptor(a,c))})}),b}b.Class={extend:d,cloneDefinitions:e}}(this||global,a),function(a,b){"use strict";function c(a,c,d){return a&&(this.data=a||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.eventEmitter.emit("data",{type:"update",data:this.data})),c&&(this.options=b.extend({},d?this.options:this.defaultOptions,c),this.initializeTimeoutId||(this.optionsProvider.removeMediaQueryListeners(),this.optionsProvider=b.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter))),this.initializeTimeoutId||this.createChart(this.optionsProvider.getCurrentOptions()),this}function d(){return this.initializeTimeoutId?i.clearTimeout(this.initializeTimeoutId):(i.removeEventListener("resize",this.resizeListener),this.optionsProvider.removeMediaQueryListeners()),this}function e(a,b){return this.eventEmitter.addEventHandler(a,b),this}function f(a,b){return this.eventEmitter.removeEventHandler(a,b),this}function g(){i.addEventListener("resize",this.resizeListener),this.optionsProvider=b.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter),this.eventEmitter.addEventHandler("optionsChanged",function(){this.update()}.bind(this)),this.options.plugins&&this.options.plugins.forEach(function(a){a instanceof Array?a[0](this,a[1]):a(this)}.bind(this)),this.eventEmitter.emit("data",{type:"initial",data:this.data}),this.createChart(this.optionsProvider.getCurrentOptions()),this.initializeTimeoutId=void 0}function h(a,c,d,e,f){this.container=b.querySelector(a),this.data=c||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.defaultOptions=d,this.options=e,this.responsiveOptions=f,this.eventEmitter=b.EventEmitter(),this.supportsForeignObject=b.Svg.isSupported("Extensibility"),this.supportsAnimations=b.Svg.isSupported("AnimationEventsAttribute"),this.resizeListener=function(){this.update()}.bind(this),this.container&&(this.container.__chartist__&&this.container.__chartist__.detach(),this.container.__chartist__=this),this.initializeTimeoutId=setTimeout(g.bind(this),0)}var i=a.window;b.Base=b.Class.extend({constructor:h,optionsProvider:void 0,container:void 0,svg:void 0,eventEmitter:void 0,createChart:function(){throw new Error("Base chart type can't be instantiated!")},update:c,detach:d,on:e,off:f,version:b.version,supportsForeignObject:!1})}(this||global,a),function(a,b){"use strict";function c(a,c,d,e,f){a instanceof Element?this._node=a:(this._node=y.createElementNS(b.namespaces.svg,a),"svg"===a&&this.attr({"xmlns:ct":b.namespaces.ct})),c&&this.attr(c),d&&this.addClass(d),e&&(f&&e._node.firstChild?e._node.insertBefore(this._node,e._node.firstChild):e._node.appendChild(this._node))}function d(a,c){return"string"==typeof a?c?this._node.getAttributeNS(c,a):this._node.getAttribute(a):(Object.keys(a).forEach(function(c){if(void 0!==a[c])if(c.indexOf(":")!==-1){var d=c.split(":");this._node.setAttributeNS(b.namespaces[d[0]],c,a[c])}else this._node.setAttribute(c,a[c])}.bind(this)),this)}function e(a,c,d,e){return new b.Svg(a,c,d,this,e)}function f(){return this._node.parentNode instanceof SVGElement?new b.Svg(this._node.parentNode):null}function g(){for(var a=this._node;"svg"!==a.nodeName;)a=a.parentNode;return new b.Svg(a)}function h(a){var c=this._node.querySelector(a);return c?new b.Svg(c):null}function i(a){var c=this._node.querySelectorAll(a);return c.length?new b.Svg.List(c):null}function j(){return this._node}function k(a,c,d,e){if("string"==typeof a){var f=y.createElement("div");f.innerHTML=a,a=f.firstChild}a.setAttribute("xmlns",b.namespaces.xmlns);var g=this.elem("foreignObject",c,d,e);return g._node.appendChild(a),g}function l(a){return this._node.appendChild(y.createTextNode(a)),this}function m(){for(;this._node.firstChild;)this._node.removeChild(this._node.firstChild);return this}function n(){return this._node.parentNode.removeChild(this._node),this.parent()}function o(a){return this._node.parentNode.replaceChild(a._node,this._node),a}function p(a,b){return b&&this._node.firstChild?this._node.insertBefore(a._node,this._node.firstChild):this._node.appendChild(a._node),this}function q(){return this._node.getAttribute("class")?this._node.getAttribute("class").trim().split(/\s+/):[]}function r(a){return this._node.setAttribute("class",this.classes(this._node).concat(a.trim().split(/\s+/)).filter(function(a,b,c){return c.indexOf(a)===b}).join(" ")),this}function s(a){var b=a.trim().split(/\s+/);return this._node.setAttribute("class",this.classes(this._node).filter(function(a){return b.indexOf(a)===-1}).join(" ")),this}function t(){return this._node.setAttribute("class",""),this}function u(){return this._node.getBoundingClientRect().height}function v(){return this._node.getBoundingClientRect().width}function w(a,c,d){return void 0===c&&(c=!0),Object.keys(a).forEach(function(e){function f(a,c){var f,g,h,i={};a.easing&&(h=a.easing instanceof Array?a.easing:b.Svg.Easing[a.easing],delete a.easing),a.begin=b.ensureUnit(a.begin,"ms"),a.dur=b.ensureUnit(a.dur,"ms"),h&&(a.calcMode="spline",a.keySplines=h.join(" "),a.keyTimes="0;1"),c&&(a.fill="freeze",i[e]=a.from,this.attr(i),g=b.quantity(a.begin||0).value,a.begin="indefinite"),f=this.elem("animate",b.extend({attributeName:e},a)),c&&setTimeout(function(){try{f._node.beginElement()}catch(b){i[e]=a.to,this.attr(i),f.remove()}}.bind(this),g),d&&f._node.addEventListener("beginEvent",function(){d.emit("animationBegin",{element:this,animate:f._node,params:a})}.bind(this)),f._node.addEventListener("endEvent",function(){d&&d.emit("animationEnd",{element:this,animate:f._node,params:a}),c&&(i[e]=a.to,this.attr(i),f.remove())}.bind(this))}a[e]instanceof Array?a[e].forEach(function(a){f.bind(this)(a,!1)}.bind(this)):f.bind(this)(a[e],c)}.bind(this)),this}function x(a){var c=this;this.svgElements=[];for(var d=0;d<a.length;d++)this.svgElements.push(new b.Svg(a[d]));Object.keys(b.Svg.prototype).filter(function(a){return["constructor","parent","querySelector","querySelectorAll","replace","append","classes","height","width"].indexOf(a)===-1}).forEach(function(a){c[a]=function(){var d=Array.prototype.slice.call(arguments,0);return c.svgElements.forEach(function(c){b.Svg.prototype[a].apply(c,d)}),c}})}var y=a.document;b.Svg=b.Class.extend({constructor:c,attr:d,elem:e,parent:f,root:g,querySelector:h,querySelectorAll:i,getNode:j,foreignObject:k,text:l,empty:m,remove:n,replace:o,append:p,classes:q,addClass:r,removeClass:s,removeAllClasses:t,height:u,width:v,animate:w}),b.Svg.isSupported=function(a){return y.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#"+a,"1.1")};var z={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};b.Svg.Easing=z,b.Svg.List=b.Class.extend({constructor:x})}(this||global,a),function(a,b){"use strict";function c(a,c,d,e,f,g){var h=b.extend({command:f?a.toLowerCase():a.toUpperCase()},c,g?{data:g}:{});d.splice(e,0,h)}function d(a,b){a.forEach(function(c,d){t[c.command.toLowerCase()].forEach(function(e,f){b(c,e,d,f,a)})})}function e(a,c){this.pathElements=[],this.pos=0,this.close=a,this.options=b.extend({},u,c)}function f(a){return void 0!==a?(this.pos=Math.max(0,Math.min(this.pathElements.length,a)),this):this.pos}function g(a){return this.pathElements.splice(this.pos,a),this}function h(a,b,d,e){return c("M",{x:+a,y:+b},this.pathElements,this.pos++,d,e),this}function i(a,b,d,e){return c("L",{x:+a,y:+b},this.pathElements,this.pos++,d,e),this}function j(a,b,d,e,f,g,h,i){return c("C",{x1:+a,y1:+b,x2:+d,y2:+e,x:+f,y:+g},this.pathElements,this.pos++,h,i),this}function k(a,b,d,e,f,g,h,i,j){return c("A",{rx:+a,ry:+b,xAr:+d,lAf:+e,sf:+f,x:+g,y:+h},this.pathElements,this.pos++,i,j),this}function l(a){var c=a.replace(/([A-Za-z])([0-9])/g,"$1 $2").replace(/([0-9])([A-Za-z])/g,"$1 $2").split(/[\s,]+/).reduce(function(a,b){return b.match(/[A-Za-z]/)&&a.push([]),a[a.length-1].push(b),a},[]);"Z"===c[c.length-1][0].toUpperCase()&&c.pop();var d=c.map(function(a){var c=a.shift(),d=t[c.toLowerCase()];return b.extend({command:c},d.reduce(function(b,c,d){return b[c]=+a[d],b},{}))}),e=[this.pos,0];return Array.prototype.push.apply(e,d),Array.prototype.splice.apply(this.pathElements,e),this.pos+=d.length,this}function m(){var a=Math.pow(10,this.options.accuracy);return this.pathElements.reduce(function(b,c){var d=t[c.command.toLowerCase()].map(function(b){return this.options.accuracy?Math.round(c[b]*a)/a:c[b]}.bind(this));return b+c.command+d.join(",")}.bind(this),"")+(this.close?"Z":"")}function n(a,b){return d(this.pathElements,function(c,d){c[d]*="x"===d[0]?a:b}),this}function o(a,b){return d(this.pathElements,function(c,d){c[d]+="x"===d[0]?a:b}),this}function p(a){return d(this.pathElements,function(b,c,d,e,f){var g=a(b,c,d,e,f);(g||0===g)&&(b[c]=g)}),this}function q(a){var c=new b.Svg.Path(a||this.close);return c.pos=this.pos,c.pathElements=this.pathElements.slice().map(function(a){return b.extend({},a)}),c.options=b.extend({},this.options),c}function r(a){var c=[new b.Svg.Path];return this.pathElements.forEach(function(d){d.command===a.toUpperCase()&&0!==c[c.length-1].pathElements.length&&c.push(new b.Svg.Path),c[c.length-1].pathElements.push(d)}),c}function s(a,c,d){for(var e=new b.Svg.Path(c,d),f=0;f<a.length;f++)for(var g=a[f],h=0;h<g.pathElements.length;h++)e.pathElements.push(g.pathElements[h]);return e}var t={m:["x","y"],l:["x","y"],c:["x1","y1","x2","y2","x","y"],a:["rx","ry","xAr","lAf","sf","x","y"]},u={accuracy:3};b.Svg.Path=b.Class.extend({constructor:e,position:f,remove:g,move:h,line:i,curve:j,arc:k,scale:n,translate:o,transform:p,parse:l,stringify:m,clone:q,splitByCommand:r}),b.Svg.Path.elementDescriptions=t,b.Svg.Path.join=s}(this||global,a),function(a,b){"use strict";function c(a,b,c,d){this.units=a,this.counterUnits=a===e.x?e.y:e.x,this.chartRect=b,this.axisLength=b[a.rectEnd]-b[a.rectStart],this.gridOffset=b[a.rectOffset],this.ticks=c,this.options=d}function d(a,c,d,e,f){var g=e["axis"+this.units.pos.toUpperCase()],h=this.ticks.map(this.projectValue.bind(this)),i=this.ticks.map(g.labelInterpolationFnc);h.forEach(function(j,k){var l,m={x:0,y:0};l=h[k+1]?h[k+1]-j:Math.max(this.axisLength-j,30),b.isFalseyButZero(i[k])&&""!==i[k]||("x"===this.units.pos?(j=this.chartRect.x1+j,m.x=e.axisX.labelOffset.x,"start"===e.axisX.position?m.y=this.chartRect.padding.top+e.axisX.labelOffset.y+(d?5:20):m.y=this.chartRect.y1+e.axisX.labelOffset.y+(d?5:20)):(j=this.chartRect.y1-j,m.y=e.axisY.labelOffset.y-(d?l:0),"start"===e.axisY.position?m.x=d?this.chartRect.padding.left+e.axisY.labelOffset.x:this.chartRect.x1-10:m.x=this.chartRect.x2+e.axisY.labelOffset.x+10),g.showGrid&&b.createGrid(j,k,this,this.gridOffset,this.chartRect[this.counterUnits.len](),a,[e.classNames.grid,e.classNames[this.units.dir]],f),g.showLabel&&b.createLabel(j,l,k,i,this,g.offset,m,c,[e.classNames.label,e.classNames[this.units.dir],"start"===g.position?e.classNames[g.position]:e.classNames.end],d,f))}.bind(this))}var e=(a.window,a.document,{x:{pos:"x",len:"width",dir:"horizontal",rectStart:"x1",rectEnd:"x2",rectOffset:"y2"},y:{pos:"y",len:"height",dir:"vertical",rectStart:"y2",rectEnd:"y1",rectOffset:"x1"}});b.Axis=b.Class.extend({constructor:c,createGridAndLabels:d,projectValue:function(a,b,c){throw new Error("Base axis can't be instantiated!")}}),b.Axis.units=e}(this||global,a),function(a,b){"use strict";function c(a,c,d,e){var f=e.highLow||b.getHighLow(c,e,a.pos);this.bounds=b.getBounds(d[a.rectEnd]-d[a.rectStart],f,e.scaleMinSpace||20,e.onlyInteger),this.range={min:this.bounds.min,max:this.bounds.max},b.AutoScaleAxis["super"].constructor.call(this,a,d,this.bounds.values,e)}function d(a){return this.axisLength*(+b.getMultiValue(a,this.units.pos)-this.bounds.min)/this.bounds.range}a.window,a.document;b.AutoScaleAxis=b.Axis.extend({constructor:c,projectValue:d})}(this||global,a),function(a,b){"use strict";function c(a,c,d,e){var f=e.highLow||b.getHighLow(c,e,a.pos);this.divisor=e.divisor||1,this.ticks=e.ticks||b.times(this.divisor).map(function(a,b){return f.low+(f.high-f.low)/this.divisor*b}.bind(this)),this.ticks.sort(function(a,b){return a-b}),this.range={min:f.low,max:f.high},b.FixedScaleAxis["super"].constructor.call(this,a,d,this.ticks,e),this.stepLength=this.axisLength/this.divisor}function d(a){return this.axisLength*(+b.getMultiValue(a,this.units.pos)-this.range.min)/(this.range.max-this.range.min)}a.window,a.document;b.FixedScaleAxis=b.Axis.extend({constructor:c,projectValue:d})}(this||global,a),function(a,b){"use strict";function c(a,c,d,e){b.StepAxis["super"].constructor.call(this,a,d,e.ticks,e);var f=Math.max(1,e.ticks.length-(e.stretch?1:0));this.stepLength=this.axisLength/f}function d(a,b){return this.stepLength*b}a.window,a.document;b.StepAxis=b.Axis.extend({constructor:c,projectValue:d})}(this||global,a),function(a,b){"use strict";function c(a){var c=b.normalizeData(this.data,a.reverseData,!0);this.svg=b.createSvg(this.container,a.width,a.height,a.classNames.chart);var d,f,g=this.svg.elem("g").addClass(a.classNames.gridGroup),h=this.svg.elem("g"),i=this.svg.elem("g").addClass(a.classNames.labelGroup),j=b.createChartRect(this.svg,a,e.padding);d=void 0===a.axisX.type?new b.StepAxis(b.Axis.units.x,c.normalized.series,j,b.extend({},a.axisX,{ticks:c.normalized.labels,stretch:a.fullWidth})):a.axisX.type.call(b,b.Axis.units.x,c.normalized.series,j,a.axisX),f=void 0===a.axisY.type?new b.AutoScaleAxis(b.Axis.units.y,c.normalized.series,j,b.extend({},a.axisY,{high:b.isNumeric(a.high)?a.high:a.axisY.high,low:b.isNumeric(a.low)?a.low:a.axisY.low})):a.axisY.type.call(b,b.Axis.units.y,c.normalized.series,j,a.axisY),d.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),f.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),a.showGridBackground&&b.createGridBackground(g,j,a.classNames.gridBackground,this.eventEmitter),c.raw.series.forEach(function(e,g){var i=h.elem("g");i.attr({"ct:series-name":e.name,"ct:meta":b.serialize(e.meta)}),i.addClass([a.classNames.series,e.className||a.classNames.series+"-"+b.alphaNumerate(g)].join(" "));var k=[],l=[];c.normalized.series[g].forEach(function(a,h){var i={x:j.x1+d.projectValue(a,h,c.normalized.series[g]),y:j.y1-f.projectValue(a,h,c.normalized.series[g])};k.push(i.x,i.y),l.push({value:a,valueIndex:h,meta:b.getMetaData(e,h)})}.bind(this));var m={lineSmooth:b.getSeriesOption(e,a,"lineSmooth"),showPoint:b.getSeriesOption(e,a,"showPoint"),showLine:b.getSeriesOption(e,a,"showLine"),showArea:b.getSeriesOption(e,a,"showArea"),areaBase:b.getSeriesOption(e,a,"areaBase")},n="function"==typeof m.lineSmooth?m.lineSmooth:m.lineSmooth?b.Interpolation.monotoneCubic():b.Interpolation.none(),o=n(k,l);if(m.showPoint&&o.pathElements.forEach(function(c){var h=i.elem("line",{x1:c.x,y1:c.y,x2:c.x+.01,y2:c.y},a.classNames.point).attr({"ct:value":[c.data.value.x,c.data.value.y].filter(b.isNumeric).join(","),"ct:meta":b.serialize(c.data.meta)});this.eventEmitter.emit("draw",{type:"point",value:c.data.value,index:c.data.valueIndex,meta:c.data.meta,series:e,seriesIndex:g,axisX:d,axisY:f,group:i,element:h,x:c.x,y:c.y})}.bind(this)),m.showLine){var p=i.elem("path",{d:o.stringify()},a.classNames.line,!0);this.eventEmitter.emit("draw",{type:"line",values:c.normalized.series[g],path:o.clone(),chartRect:j,index:g,series:e,seriesIndex:g,seriesMeta:e.meta,axisX:d,axisY:f,group:i,element:p})}if(m.showArea&&f.range){var q=Math.max(Math.min(m.areaBase,f.range.max),f.range.min),r=j.y1-f.projectValue(q);o.splitByCommand("M").filter(function(a){return a.pathElements.length>1}).map(function(a){var b=a.pathElements[0],c=a.pathElements[a.pathElements.length-1];return a.clone(!0).position(0).remove(1).move(b.x,r).line(b.x,b.y).position(a.pathElements.length+1).line(c.x,r)}).forEach(function(b){var h=i.elem("path",{d:b.stringify()},a.classNames.area,!0);this.eventEmitter.emit("draw",{type:"area",values:c.normalized.series[g],path:b.clone(),series:e,seriesIndex:g,axisX:d,axisY:f,chartRect:j,index:g,group:i,element:h})}.bind(this))}}.bind(this)),this.eventEmitter.emit("created",{bounds:f.bounds,chartRect:j,axisX:d,axisY:f,svg:this.svg,options:a})}function d(a,c,d,f){b.Line["super"].constructor.call(this,a,c,e,b.extend({},e,d),f)}var e=(a.window,a.document,{axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:b.noop,type:void 0},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:b.noop,type:void 0,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,showLine:!0,showPoint:!0,showArea:!1,areaBase:0,lineSmooth:!0,showGridBackground:!1,low:void 0,high:void 0,chartPadding:{top:15,right:15,bottom:5,left:10},fullWidth:!1,reverseData:!1,classNames:{chart:"ct-chart-line",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",line:"ct-line",point:"ct-point",area:"ct-area",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}});b.Line=b.Base.extend({constructor:d,createChart:c})}(this||global,a),function(a,b){"use strict";function c(a){var c,d;a.distributeSeries?(c=b.normalizeData(this.data,a.reverseData,a.horizontalBars?"x":"y"),c.normalized.series=c.normalized.series.map(function(a){return[a]})):c=b.normalizeData(this.data,a.reverseData,a.horizontalBars?"x":"y"),this.svg=b.createSvg(this.container,a.width,a.height,a.classNames.chart+(a.horizontalBars?" "+a.classNames.horizontalBars:""));var f=this.svg.elem("g").addClass(a.classNames.gridGroup),g=this.svg.elem("g"),h=this.svg.elem("g").addClass(a.classNames.labelGroup);
if(a.stackBars&&0!==c.normalized.series.length){var i=b.serialMap(c.normalized.series,function(){return Array.prototype.slice.call(arguments).map(function(a){return a}).reduce(function(a,b){return{x:a.x+(b&&b.x)||0,y:a.y+(b&&b.y)||0}},{x:0,y:0})});d=b.getHighLow([i],a,a.horizontalBars?"x":"y")}else d=b.getHighLow(c.normalized.series,a,a.horizontalBars?"x":"y");d.high=+a.high||(0===a.high?0:d.high),d.low=+a.low||(0===a.low?0:d.low);var j,k,l,m,n,o=b.createChartRect(this.svg,a,e.padding);k=a.distributeSeries&&a.stackBars?c.normalized.labels.slice(0,1):c.normalized.labels,a.horizontalBars?(j=m=void 0===a.axisX.type?new b.AutoScaleAxis(b.Axis.units.x,c.normalized.series,o,b.extend({},a.axisX,{highLow:d,referenceValue:0})):a.axisX.type.call(b,b.Axis.units.x,c.normalized.series,o,b.extend({},a.axisX,{highLow:d,referenceValue:0})),l=n=void 0===a.axisY.type?new b.StepAxis(b.Axis.units.y,c.normalized.series,o,{ticks:k}):a.axisY.type.call(b,b.Axis.units.y,c.normalized.series,o,a.axisY)):(l=m=void 0===a.axisX.type?new b.StepAxis(b.Axis.units.x,c.normalized.series,o,{ticks:k}):a.axisX.type.call(b,b.Axis.units.x,c.normalized.series,o,a.axisX),j=n=void 0===a.axisY.type?new b.AutoScaleAxis(b.Axis.units.y,c.normalized.series,o,b.extend({},a.axisY,{highLow:d,referenceValue:0})):a.axisY.type.call(b,b.Axis.units.y,c.normalized.series,o,b.extend({},a.axisY,{highLow:d,referenceValue:0})));var p=a.horizontalBars?o.x1+j.projectValue(0):o.y1-j.projectValue(0),q=[];l.createGridAndLabels(f,h,this.supportsForeignObject,a,this.eventEmitter),j.createGridAndLabels(f,h,this.supportsForeignObject,a,this.eventEmitter),a.showGridBackground&&b.createGridBackground(f,o,a.classNames.gridBackground,this.eventEmitter),c.raw.series.forEach(function(d,e){var f,h,i=e-(c.raw.series.length-1)/2;f=a.distributeSeries&&!a.stackBars?l.axisLength/c.normalized.series.length/2:a.distributeSeries&&a.stackBars?l.axisLength/2:l.axisLength/c.normalized.series[e].length/2,h=g.elem("g"),h.attr({"ct:series-name":d.name,"ct:meta":b.serialize(d.meta)}),h.addClass([a.classNames.series,d.className||a.classNames.series+"-"+b.alphaNumerate(e)].join(" ")),c.normalized.series[e].forEach(function(g,k){var r,s,t,u;if(u=a.distributeSeries&&!a.stackBars?e:a.distributeSeries&&a.stackBars?0:k,r=a.horizontalBars?{x:o.x1+j.projectValue(g&&g.x?g.x:0,k,c.normalized.series[e]),y:o.y1-l.projectValue(g&&g.y?g.y:0,u,c.normalized.series[e])}:{x:o.x1+l.projectValue(g&&g.x?g.x:0,u,c.normalized.series[e]),y:o.y1-j.projectValue(g&&g.y?g.y:0,k,c.normalized.series[e])},l instanceof b.StepAxis&&(l.options.stretch||(r[l.units.pos]+=f*(a.horizontalBars?-1:1)),r[l.units.pos]+=a.stackBars||a.distributeSeries?0:i*a.seriesBarDistance*(a.horizontalBars?-1:1)),t=q[k]||p,q[k]=t-(p-r[l.counterUnits.pos]),void 0!==g){var v={};v[l.units.pos+"1"]=r[l.units.pos],v[l.units.pos+"2"]=r[l.units.pos],!a.stackBars||"accumulate"!==a.stackMode&&a.stackMode?(v[l.counterUnits.pos+"1"]=p,v[l.counterUnits.pos+"2"]=r[l.counterUnits.pos]):(v[l.counterUnits.pos+"1"]=t,v[l.counterUnits.pos+"2"]=q[k]),v.x1=Math.min(Math.max(v.x1,o.x1),o.x2),v.x2=Math.min(Math.max(v.x2,o.x1),o.x2),v.y1=Math.min(Math.max(v.y1,o.y2),o.y1),v.y2=Math.min(Math.max(v.y2,o.y2),o.y1);var w=b.getMetaData(d,k);s=h.elem("line",v,a.classNames.bar).attr({"ct:value":[g.x,g.y].filter(b.isNumeric).join(","),"ct:meta":b.serialize(w)}),this.eventEmitter.emit("draw",b.extend({type:"bar",value:g,index:k,meta:w,series:d,seriesIndex:e,axisX:m,axisY:n,chartRect:o,group:h,element:s},v))}}.bind(this))}.bind(this)),this.eventEmitter.emit("created",{bounds:j.bounds,chartRect:o,axisX:m,axisY:n,svg:this.svg,options:a})}function d(a,c,d,f){b.Bar["super"].constructor.call(this,a,c,e,b.extend({},e,d),f)}var e=(a.window,a.document,{axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:b.noop,scaleMinSpace:30,onlyInteger:!1},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:b.noop,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,high:void 0,low:void 0,referenceValue:0,chartPadding:{top:15,right:15,bottom:5,left:10},seriesBarDistance:15,stackBars:!1,stackMode:"accumulate",horizontalBars:!1,distributeSeries:!1,reverseData:!1,showGridBackground:!1,classNames:{chart:"ct-chart-bar",horizontalBars:"ct-horizontal-bars",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",bar:"ct-bar",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}});b.Bar=b.Base.extend({constructor:d,createChart:c})}(this||global,a),function(a,b){"use strict";function c(a,b,c){var d=b.x>a.x;return d&&"explode"===c||!d&&"implode"===c?"start":d&&"implode"===c||!d&&"explode"===c?"end":"middle"}function d(a){var d,e,g,h,i,j=b.normalizeData(this.data),k=[],l=a.startAngle;this.svg=b.createSvg(this.container,a.width,a.height,a.donut?a.classNames.chartDonut:a.classNames.chartPie),e=b.createChartRect(this.svg,a,f.padding),g=Math.min(e.width()/2,e.height()/2),i=a.total||j.normalized.series.reduce(function(a,b){return a+b},0);var m=b.quantity(a.donutWidth);"%"===m.unit&&(m.value*=g/100),g-=a.donut&&!a.donutSolid?m.value/2:0,h="outside"===a.labelPosition||a.donut&&!a.donutSolid?g:"center"===a.labelPosition?0:a.donutSolid?g-m.value/2:g/2,h+=a.labelOffset;var n={x:e.x1+e.width()/2,y:e.y2+e.height()/2},o=1===j.raw.series.filter(function(a){return a.hasOwnProperty("value")?0!==a.value:0!==a}).length;j.raw.series.forEach(function(a,b){k[b]=this.svg.elem("g",null,null)}.bind(this)),a.showLabel&&(d=this.svg.elem("g",null,null)),j.raw.series.forEach(function(e,f){if(0!==j.normalized.series[f]||!a.ignoreEmptyValues){k[f].attr({"ct:series-name":e.name}),k[f].addClass([a.classNames.series,e.className||a.classNames.series+"-"+b.alphaNumerate(f)].join(" "));var p=i>0?l+j.normalized.series[f]/i*360:0,q=Math.max(0,l-(0===f||o?0:.2));p-q>=359.99&&(p=q+359.99);var r,s,t,u=b.polarToCartesian(n.x,n.y,g,q),v=b.polarToCartesian(n.x,n.y,g,p),w=new b.Svg.Path(!a.donut||a.donutSolid).move(v.x,v.y).arc(g,g,0,p-l>180,0,u.x,u.y);a.donut?a.donutSolid&&(t=g-m.value,r=b.polarToCartesian(n.x,n.y,t,l-(0===f||o?0:.2)),s=b.polarToCartesian(n.x,n.y,t,p),w.line(r.x,r.y),w.arc(t,t,0,p-l>180,1,s.x,s.y)):w.line(n.x,n.y);var x=a.classNames.slicePie;a.donut&&(x=a.classNames.sliceDonut,a.donutSolid&&(x=a.classNames.sliceDonutSolid));var y=k[f].elem("path",{d:w.stringify()},x);if(y.attr({"ct:value":j.normalized.series[f],"ct:meta":b.serialize(e.meta)}),a.donut&&!a.donutSolid&&(y._node.style.strokeWidth=m.value+"px"),this.eventEmitter.emit("draw",{type:"slice",value:j.normalized.series[f],totalDataSum:i,index:f,meta:e.meta,series:e,group:k[f],element:y,path:w.clone(),center:n,radius:g,startAngle:l,endAngle:p}),a.showLabel){var z;z=1===j.raw.series.length?{x:n.x,y:n.y}:b.polarToCartesian(n.x,n.y,h,l+(p-l)/2);var A;A=j.normalized.labels&&!b.isFalseyButZero(j.normalized.labels[f])?j.normalized.labels[f]:j.normalized.series[f];var B=a.labelInterpolationFnc(A,f);if(B||0===B){var C=d.elem("text",{dx:z.x,dy:z.y,"text-anchor":c(n,z,a.labelDirection)},a.classNames.label).text(""+B);this.eventEmitter.emit("draw",{type:"label",index:f,group:d,element:C,text:""+B,x:z.x,y:z.y})}}l=p}}.bind(this)),this.eventEmitter.emit("created",{chartRect:e,svg:this.svg,options:a})}function e(a,c,d,e){b.Pie["super"].constructor.call(this,a,c,f,b.extend({},f,d),e)}var f=(a.window,a.document,{width:void 0,height:void 0,chartPadding:5,classNames:{chartPie:"ct-chart-pie",chartDonut:"ct-chart-donut",series:"ct-series",slicePie:"ct-slice-pie",sliceDonut:"ct-slice-donut",sliceDonutSolid:"ct-slice-donut-solid",label:"ct-label"},startAngle:0,total:void 0,donut:!1,donutSolid:!1,donutWidth:60,showLabel:!0,labelOffset:0,labelPosition:"inside",labelInterpolationFnc:b.noop,labelDirection:"neutral",reverseData:!1,ignoreEmptyValues:!1});b.Pie=b.Base.extend({constructor:e,createChart:d,determineAnchorPosition:c})}(this||global,a),a});
//# sourceMappingURL=chartist.min.js.map
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['chartist'], function (chartist) {
            return (root.returnExportsGlobal = factory(chartist));
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('chartist'));
    } else {
        root['Chartist.plugins.legend'] = factory(root.Chartist);
    }
}(this, function (Chartist) {
    /**
     * This Chartist plugin creates a legend to show next to the chart.
     *
     */
    'use strict';

    var defaultOptions = {
        className: '',
        classNames: false,
        removeAll: false,
        legendNames: false,
        clickable: true,
        onClick: null,
        position: 'top'
    };

    Chartist.plugins = Chartist.plugins || {};

    Chartist.plugins.legend = function (options) {

        // Catch invalid options
        if (options && options.position) {
            if (!(options.position === 'top' || options.position === 'bottom' || options.position instanceof HTMLElement)) {
                throw Error('The position you entered is not a valid position');
            }
            if (options.position instanceof HTMLElement) {
                // Detatch DOM element from options object, because Chartist.extend
                // currently chokes on circular references present in HTMLElements
                var cachedDOMPosition = options.position;
                delete options.position;
            }
        }

        options = Chartist.extend({}, defaultOptions, options);

        if (cachedDOMPosition) {
            // Reattatch the DOM Element position if it was removed before
            options.position = cachedDOMPosition
        }

        return function legend(chart) {

            function removeLegendElement() {
                var legendElement = chart.container.querySelector('.ct-legend');
                if (legendElement) {
                    legendElement.parentNode.removeChild(legendElement);
                }
            }

            // Set a unique className for each series so that when a series is removed,
            // the other series still have the same color.
            function setSeriesClassNames() {
                chart.data.series = chart.data.series.map(function (series, seriesIndex) {
                    if (typeof series !== 'object') {
                        series = {
                            value: series
                        };
                    }
                    series.className = series.className || chart.options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex);
                    return series;
                });
            }

            function createLegendElement() {
                var legendElement = document.createElement('ul');
                legendElement.className = 'ct-legend';
                if (chart instanceof Chartist.Pie) {
                    legendElement.classList.add('ct-legend-inside');
                }
                if (typeof options.className === 'string' && options.className.length > 0) {
                    legendElement.classList.add(options.className);
                }
                if (chart.options.width) {
                    legendElement.style.cssText = 'width: ' + chart.options.width + 'px;margin: 0 auto;';
                }
                return legendElement;
            }

            // Get the right array to use for generating the legend.
            function getLegendNames(useLabels) {
                return options.legendNames || (useLabels ? chart.data.labels : chart.data.series);
            }

            // Initialize the array that associates series with legends.
            // -1 indicates that there is no legend associated with it.
            function initSeriesMetadata(useLabels) {
                var seriesMetadata = new Array(chart.data.series.length);
                for (var i = 0; i < chart.data.series.length; i++) {
                    seriesMetadata[i] = {
                        data: chart.data.series[i],
                        label: useLabels ? chart.data.labels[i] : null,
                        legend: -1
                    };
                }
                return seriesMetadata;
            }

            function createNameElement(i, legendText, classNamesViable) {
                var li = document.createElement('li');
                li.classList.add('ct-series-' + i);
                // Append specific class to a legend element, if viable classes are given
                if (classNamesViable) {
                    li.classList.add(options.classNames[i]);
                }
                li.setAttribute('data-legend', i);
                li.innerHTML = legendText;
                return li;
            }

            // Append the legend element to the DOM
            function appendLegendToDOM(legendElement) {
                if (!(options.position instanceof HTMLElement)) {
                    switch (options.position) {
                        case 'top':
                            chart.container.insertBefore(legendElement, chart.container.childNodes[0]);
                            break;

                        case 'bottom':
                            chart.container.insertBefore(legendElement, null);
                            break;
                    }
                } else {
                    // Appends the legend element as the last child of a given HTMLElement
                    options.position.insertBefore(legendElement, null);
                }
            }

            function addClickHandler(legendElement, legends, seriesMetadata, useLabels) {
                legendElement.addEventListener('click', function(e) {
                    var li = e.target;
                    if (li.parentNode !== legendElement || !li.hasAttribute('data-legend'))
                        return;
                    e.preventDefault();

                    var legendIndex = parseInt(li.getAttribute('data-legend'));
                    var legend = legends[legendIndex];

                    if (!legend.active) {
                        legend.active = true;
                        li.classList.remove('inactive');
                    } else {
                        legend.active = false;
                        li.classList.add('inactive');

                        var activeCount = legends.filter(function(legend) { return legend.active; }).length;
                        if (!options.removeAll && activeCount == 0) {
                            // If we can't disable all series at the same time, let's
                            // reenable all of them:
                            for (var i = 0; i < legends.length; i++) {
                                legends[i].active = true;
                                legendElement.childNodes[i].classList.remove('inactive');
                            }
                        }
                    }

                    var newSeries = [];
                    var newLabels = [];

                    for (var i = 0; i < seriesMetadata.length; i++) {
                        if (seriesMetadata[i].legend != -1 && legends[seriesMetadata[i].legend].active) {
                            newSeries.push(seriesMetadata[i].data);
                            newLabels.push(seriesMetadata[i].label);
                        }
                    }

                    chart.data.series = newSeries;
                    if (useLabels) {
                        chart.data.labels = newLabels;
                    }

                    chart.update();

                    if (options.onClick) {
                        options.onClick(chart, e);
                    }
                });
            }

            removeLegendElement();

            var legendElement = createLegendElement();
            var useLabels = chart.data.labels && chart.data.labels.length;
            var legendNames = getLegendNames(useLabels);
            var seriesMetadata = initSeriesMetadata(useLabels);
            var legends = [];

            // Check if given class names are viable to append to legends
            var classNamesViable = Array.isArray(options.classNames) && options.classNames.length === legendNames.length;

            // Loop through all legends to set each name in a list item.
            legendNames.forEach(function (legend, i) {
                var legendText = legend.name || legend;
                var legendSeries = legend.series || [i];

                var li = createNameElement(i, legendText, classNamesViable);
                legendElement.appendChild(li);

                legendSeries.forEach(function(seriesIndex) {
                    seriesMetadata[seriesIndex].legend = i;
                });

                legends.push({
                    text: legendText,
                    series: legendSeries,
                    active: true
                });
            });

            chart.on('created', function (data) {
                appendLegendToDOM(legendElement);
            });

            if (options.clickable) {
                setSeriesClassNames();
                addClickHandler(legendElement, legends, seriesMetadata, useLabels);
            }
        };
    };

    return Chartist.plugins.legend;

}));

/**
 * A simple Chartist plugin to put labels on top of bar charts.
 *
 * Copyright (c) 2015 Yorkshire Interactive (yorkshireinteractive.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function(window, document, Chartist) {
  'use strict';
  var defaultOptions = {
    // The class name so you can style the text
    labelClass: 'ct-bar-label',

    // Use this to get the text of the data and you can return your own
    // formatted text. For example, for a percentage: 
    // {
    //  labelInterpolationFnc: function (text) { return text + '%' }
    // }
    labelInterpolationFnc: Chartist.noop,

    // Depending on your font size you may need to tweak these
    labelOffset: {
      x: 0,
      y: 0
    },

    // If labelOffset doesn't work for you and you need more custom positioning
    // you can use this. You can set position.x and position.y to functions and
    // instead of centering + labelOffset. This will _completely_ override the
    // built in positioning so labelOffset will no longer do anything. It will
    // pass the bar `data` back as the first param.
    //
    // Example:
    // Chartist.plugins.ctBarLabels({
    //   position: {
    //     x: function (data) {
    //       return data.x1 + 50; // align left with 50px of padding
    //     }
    //   }
    // });
    position: {
      x: null,
      y: null
    }
  };

  Chartist.plugins = Chartist.plugins || {};
  Chartist.plugins.ctBarLabels = function(options) {

    options = Chartist.extend({}, defaultOptions, options);
    
    var positionX = options.position.x || function (data) {
      return ((data.x1 + data.x2) / 2) + options.labelOffset.x;
    };

    var positionY = options.position.y || function (data) {
      return ((data.y1 + data.y2) / 2) + options.labelOffset.y;
    };

    return function ctBarLabels(chart) {
      // Since it's specific to bars, verify its a bar chart
      if(chart instanceof Chartist.Bar) {
        chart.on('draw', function(data) {
          // If the data we're drawing is the actual bar, let's add the text
          // inside of it
          if(data.type === 'bar') {
            data.group.elem('text', {
              // This gets the middle point of the bars and then adds the
              // optional offset to them
              x: positionX(data),
              y: positionY(data),
              style: 'text-anchor: middle'
            }, options.labelClass)
              .text(
              options.labelInterpolationFnc(
                // If there's not x (horizontal bars) there must be a y
                data.value.x || data.value.y
              )
            );
          }
        });
      }
    };
  };

}(window, document, Chartist));

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(["chartist"], function (Chartist) {
      return (root.returnExportsGlobal = factory(Chartist));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require("chartist"));
  } else {
    root['Chartist.plugins.tooltip'] = factory(Chartist);
  }
}(this, function (Chartist) {

  /**
  * Chartist.js plugin to display a data label on top of the points in a line chart.
  *
  */
  /* global Chartist */
  (function (window, document, Chartist) {
    'use strict';

    var defaultOptions = {
      currency: undefined,
      currencyFormatCallback: undefined,
      tooltipOffset: {
        x: 0,
        y: -20
      },
      anchorToPoint: false,
      appendToBody: false,
      class: undefined,
      pointClass: 'ct-point'
    };

    Chartist.plugins = Chartist.plugins || {};
    Chartist.plugins.tooltip = function (options) {
      options = Chartist.extend({}, defaultOptions, options);

      return function tooltip(chart) {
        var tooltipSelector = options.pointClass;
        if (chart.constructor.name == Chartist.Bar.prototype.constructor.name) {
          tooltipSelector = 'ct-bar';
        } else if (chart.constructor.name ==  Chartist.Pie.prototype.constructor.name) {
          // Added support for donut graph
          if (chart.options.donut) {
            tooltipSelector = 'ct-slice-donut';
          } else {
            tooltipSelector = 'ct-slice-pie';
          }
        }

        var $chart = chart.container;
        var $toolTip = $chart.querySelector('.chartist-tooltip');
        if (!$toolTip) {
          $toolTip = document.createElement('div');
          $toolTip.className = (!options.class) ? 'chartist-tooltip' : 'chartist-tooltip ' + options.class;
          if (!options.appendToBody) {
            $chart.appendChild($toolTip);
          } else {
            document.body.appendChild($toolTip);
          }
        }
        var height = $toolTip.offsetHeight;
        var width = $toolTip.offsetWidth;

        hide($toolTip);

        function on(event, selector, callback) {
          $chart.addEventListener(event, function (e) {
            if (!selector || hasClass(e.target, selector))
            callback(e);
          });
        }
        
        function getElementIndex(node) {
            var index = 0;
            while ( (node = node.previousElementSibling) ) {
                index++;
            }
            return index;
        }

        on('mouseover', tooltipSelector, function (event) {
          var $point = event.target;
          var tooltipText = '';

          var isPieChart = (chart instanceof Chartist.Pie) ? $point : $point.parentNode;
          var seriesName = (isPieChart) ? $point.parentNode.getAttribute('ct:meta') || $point.parentNode.getAttribute('ct:series-name') : '';
          var meta = $point.getAttribute('ct:meta') || seriesName || '';
          var hasMeta = !!meta;
          var value = $point.getAttribute('ct:value');
          var index = getElementIndex($point.parentElement);

          if (options.transformTooltipTextFnc && typeof options.transformTooltipTextFnc === 'function') {
            value = options.transformTooltipTextFnc(value);
          }

          if (options.tooltipFnc && typeof options.tooltipFnc === 'function') {
            tooltipText = options.tooltipFnc(meta, value, index);
          } else {
            if (options.metaIsHTML) {
              var txt = document.createElement('textarea');
              txt.innerHTML = meta;
              meta = txt.value;
            }

            meta = '<span class="chartist-tooltip-meta">' + meta + '</span>';

            if (hasMeta) {
              tooltipText += meta + '<br>';
            } else {
              // For Pie Charts also take the labels into account
              // Could add support for more charts here as well!
              if (chart instanceof Chartist.Pie) {
                var label = next($point, 'ct-label');
                if (label) {
                  tooltipText += text(label) + '<br>';
                }
              }
            }

            if (value) {
              if (options.currency) {
                if (options.currencyFormatCallback != undefined) {
                  value = options.currencyFormatCallback(value, options);
                } else {
                  value = options.currency + value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                }
              }
              value = '<span class="chartist-tooltip-value">' + value + '</span>';
              tooltipText += value;
            }
          }

          if(tooltipText) {
            $toolTip.innerHTML = tooltipText;
            setPosition(event);
            show($toolTip);

            // Remember height and width to avoid wrong position in IE
            height = $toolTip.offsetHeight;
            width = $toolTip.offsetWidth;
          }
        });

        on('mouseout', tooltipSelector, function () {
          hide($toolTip);
        });

        on('mousemove', null, function (event) {
          if (false === options.anchorToPoint)
          setPosition(event);
        });

        function setPosition(event) {
          height = height || $toolTip.offsetHeight;
          width = width || $toolTip.offsetWidth;
          var offsetX = - width / 2 + options.tooltipOffset.x
          var offsetY = - height + options.tooltipOffset.y;
          var anchorX, anchorY;

          if (!options.appendToBody) {
            var box = $chart.getBoundingClientRect();
            var left = event.pageX - box.left - window.pageXOffset ;
            var top = event.pageY - box.top - window.pageYOffset ;

            if (true === options.anchorToPoint && event.target.x2 && event.target.y2) {
              anchorX = parseInt(event.target.x2.baseVal.value);
              anchorY = parseInt(event.target.y2.baseVal.value);
            }

            $toolTip.style.top = (anchorY || top) + offsetY + 'px';
            $toolTip.style.left = (anchorX || left) + offsetX + 'px';
          } else {
            $toolTip.style.top = event.pageY + offsetY + 'px';
            $toolTip.style.left = event.pageX + offsetX + 'px';
          }
        }
      }
    };

    function show(element) {
      if(!hasClass(element, 'tooltip-show')) {
        element.className = element.className + ' tooltip-show';
      }
    }

    function hide(element) {
      var regex = new RegExp('tooltip-show' + '\\s*', 'gi');
      element.className = element.className.replace(regex, '').trim();
    }

    function hasClass(element, className) {
      return (' ' + element.getAttribute('class') + ' ').indexOf(' ' + className + ' ') > -1;
    }

    function next(element, className) {
      do {
        element = element.nextSibling;
      } while (element && !hasClass(element, className));
      return element;
    }

    function text(element) {
      return element.innerText || element.textContent;
    }

  } (window, document, Chartist));

  return Chartist.plugins.tooltip;

}));

(function(a){function b(t){if(1/t==-1/0&&(t=0),t>Math.pow(2,32)-1)throw new RangeError("Invalid array length");var e=[];return e.length=t,e}function c(t,e,n){var r=2<arguments.length?n:[];if(!1===g(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(e,r)}function d(t,e){return t[e]}function e(t,e){return e in t}function g(t){return"function"==typeof t}function j(t){var e,n=(e=Number(t),isNaN(e)?0:1/e==1/0||1/e==-1/0||e===1/0||e===-1/0?e:(e<0?-1:1)*Math.floor(Math.abs(e)));return n<=0?0:Math.min(n,Math.pow(2,53)-1)}function k(t){if(null===t||t===a)throw TypeError();return Object(t)}function m(t,e){var n,r=(n=e,k(t)[n]);if(null===r||r===a)return a;if(!1===g(r))throw new TypeError("Method not callable: "+e);return r}function n(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in this&&t instanceof this.Symbol?"symbol":"object"}}function p(t){return"object"===n(t)&&("function"==typeof t&&t.prototype)}function r(t,e){var r=1<arguments.length?e:a;if("object"!==n(t))return t;if(arguments.length<2)var o="default";else r===String?o="string":r===Number&&(o="number");var i="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?m(t,this.Symbol.toPrimitive):a;if(i===a)return"default"===o&&(o="number"),function(t,e){if("string"===e)var r=["toString","valueOf"];else r=["valueOf","toString"];for(var o=0;o<r.length;o+=1){var i=d(t,r[o]);if(g(i)){var a=c(i,t);if("object"!==n(a))return a}}throw new TypeError("Cannot convert to primitive.")}(t,o);var u=c(i,t,[o]);if("object"!==n(u))return u;throw new TypeError("Cannot convert exotic object to primitive.")}function s(t){switch(n(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return s(r(t,"string"));default:return String(t)}}var Va,Wa,Xa,Ya,he,je,al,bl;function u(t,e,n){var r=function(t,e,n){var r={value:n,writable:!0,enumerable:!0,configurable:!0};try{return Object.defineProperty(t,e,r),!0}catch(t){return!1}}(t,e,n);if(!r)throw new TypeError("Cannot assign value `"+Object.prototype.toString.call(n)+"` to property `"+Object.prototype.toString.call(e)+"` on object `"+Object.prototype.toString.call(t)+"`");return r}function v(t,e,n){var r={value:n,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(t,e,r)}if("document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document)),"Element"in this&&"HTMLElement"in this||function(){if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,e=document.appendChild(document.createElement("body")),n=e.appendChild(document.createElement("iframe")).contentWindow.document,a=Element.prototype=n.appendChild(n.createElement("*")),u={},s=function(t,e){var n,r,o,i=t.childNodes||[],c=-1;if(1===t.nodeType&&t.constructor!==Element)for(n in t.constructor=Element,u)r=u[n],t[n]=r;for(;o=e&&i[c+=1];)s(o,e);return t},l=document.getElementsByTagName("*"),r=document.createElement,o=100;a.attachEvent("onpropertychange",function(t){for(var e,n=t.propertyName,r=!u.hasOwnProperty(n),o=a[n],i=u[n],c=-1;e=l[c+=1];)1===e.nodeType&&(!r&&e[n]!==i||(e[n]=o));u[n]=o}),a.constructor=Element,a.hasAttribute||(a.hasAttribute=function(t){return null!==this.getAttribute(t)}),i()||(document.onreadystatechange=i,t=setInterval(i,25)),document.createElement=function(t){var e=r(String(t).toLowerCase());return s(e)},document.removeChild(e)}else window.HTMLElement=window.Element;function i(){return o--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(s(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)}}(),"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),1}catch(t){return}}()||(Va=Object.defineProperty,Wa=Object.prototype.hasOwnProperty("__defineGetter__"),Xa="Getters & setters cannot be defined on this javascript engine",Ya="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,e,n){if(Va&&(t===window||t===document||t===Element.prototype||t instanceof Element))return Va(t,e,n);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var r=String(e),o="value"in n||"writable"in n,i="get"in n&&typeof n.get,c="set"in n&&typeof n.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!Wa)throw new TypeError(Xa);if(o)throw new TypeError(Ya);Object.__defineGetter__.call(t,r,n.get)}else t[r]=n.value;if(c){if("function"!==c)throw new TypeError("Setter must be a function");if(!Wa)throw new TypeError(Xa);if(o)throw new TypeError(Ya);Object.__defineSetter__.call(t,r,n.set)}return"value"in n&&(t[r]=n.value),t}),"forEach"in Array.prototype||v(Array.prototype,"forEach",function(t,n){var r=k(this),o=r instanceof String?r.split(""):r,i=j(d(r,"length"));if(!1===g(t))throw new TypeError(t+" is not a function");for(var u=1<arguments.length?n:a,l=0;l<i;){var f=s(l);if(e(o,f))c(t,u,[d(o,f),l,r]);l+=1}return a}),"bind"in Function.prototype||v(Function.prototype,"bind",function(e){function t(){}var n=Array,r=Object,o=n.prototype,i=o.slice,c=o.concat,a=o.push,u=Math.max,s=this;if(!g(s))throw new TypeError("Function.prototype.bind called on incompatible "+s);for(var l,f=i.call(arguments,1),p=u(0,s.length-f.length),h=[],y=0;y<p;y+=1)a.call(h,"$"+y);return l=Function("binder","return function ("+h.join(",")+"){ return binder.apply(this, arguments); }")(function(){if(this instanceof l){var t=s.apply(this,c.call(f,i.call(arguments)));return r(t)===t?t:this}return s.apply(e,c.call(f,i.call(arguments)))}),s.prototype&&(t.prototype=s.prototype,l.prototype=new t,t.prototype=null),l}),"freeze"in Object||v(Object,"freeze",function(t){return t}),"getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{var t={test:0};return 0===Object.getOwnPropertyDescriptor(t,"test").value}catch(t){return}}()||function(){var c,a,u,t=Function.prototype.call,s=Object.prototype,l=t.bind(s.hasOwnProperty);function e(t){try{return(t.sentinel=0)===Object.getOwnPropertyDescriptor(t,"sentinel").value}catch(t){}}if((u=l(s,"__defineGetter__"))&&(c=t.bind(s.__lookupGetter__),a=t.bind(s.__lookupSetter__)),Object.defineProperty){var n=e({});if(!("undefined"==typeof document||e(document.createElement("div")))||!n)var f=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||f){v(Object,"getOwnPropertyDescriptor",function(t,e){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+t);if(f)try{return f.call(Object,t,e)}catch(t){}if(l(t,e)){var n={enumerable:!0,configurable:!0};if(u){var r=t.__proto__;t.__proto__=s;var o=c(t,e),i=a(t,e);if(t.__proto__=r,o||i)return o&&(n.get=o),i&&(n.set=i),n}return n.value=t[e],n.writable=!0,n}})}}(),!("getOwnPropertyNames"in Object)){var w={}.toString,x="".split;v(Object,"getOwnPropertyNames",function(t){var e,n=[],r=["length","name","arguments","caller","prototype","observe","unobserve"];if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(e in t="[object String]"==w.call(t)?x.call(t,""):Object(t))Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);for(var o=0,i=r.length;o<i;o+=1)r[o]in t&&n.push(r[o]);return n})}function y(t,e,r){var o,i,c=r||{},a=(o=e,"object"!==n(i=d(t,"prototype"))&&(i=o),i),u=Object.create(a);for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&Object.defineProperty(u,s,{configurable:!0,enumerable:!1,writable:!0,value:c[s]});return u}function A(t,e){var r;if(1/e==-1/0&&(e=0),!1==(r=t,"[object Array]"===Object.prototype.toString.call(r)))return b(e);var o=d(t,"constructor");if("object"===n(o)&&null===(o="Symbol"in this&&"species"in this.Symbol?d(o,this.Symbol.species):a)&&(o=a),o===a)return b(e);if(!p(o))throw new TypeError("C must be a constructor");return function(t,e,n){var r=2<arguments.length?n:t,o=1<arguments.length?e:[];if(!p(t))throw new TypeError("F must be a constructor.");if(!p(r))throw new TypeError("newTarget must be a constructor.");return r===t?new(Function.prototype.bind.apply(t,[null].concat(o))):c(t,y(r,Object.prototype),o)}(o,[e])}function ie(t){if(je[t])return je[t].exports;var e=je[t]={i:t,l:!1,exports:{}};return he[t].call(e.exports,e,e.exports,ie),e.l=!0,e.exports}"getPrototypeOf"in Object||v(Object,"getPrototypeOf",function(t){if(t!==Object(t))throw new TypeError("Object.getPrototypeOf called on non-object");var e=t.__proto__;return e||null===e?e:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Object.prototype:null}),"keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),1}catch(t){return}}()||v(Object,"keys",function(){"use strict";function y(t){var e=t.constructor;return e&&e.prototype===t}var d=Object.prototype.hasOwnProperty,b=Object.prototype.toString,t=Object.prototype.propertyIsEnumerable,v=!t.call({toString:null},"toString"),m=t.call(function(){},"prototype"),w=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],e={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},g=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!e["$"+t]&&d.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{y(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();return function(t){var e,n,r="[object Function]"===b.call(t),o=(e=t,n=b.call(e),"[object Arguments]"===n||"[object Array]"!==n&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&0<=e.length&&"[object Function]"===b.call(e.callee)),i="[object String]"===b.call(t),c=[];if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");var u=m&&r;if(i&&0<t.length&&!d.call(t,0))for(var s=0;s<t.length;s+=1)c.push(String(s));if(o&&0<t.length)for(var l=0;l<t.length;l+=1)c.push(String(l));else for(var f in t)u&&"prototype"===f||!d.call(t,f)||c.push(String(f));if(v)for(var p=function(t){if("undefined"==typeof window||!g)return y(t);try{return y(t)}catch(t){return!1}}(t),h=0;h<w.length;h+=1)p&&"constructor"===w[h]||!d.call(t,w[h])||c.push(w[h]);return c}}()),"defineProperties"in Object||v(Object,"defineProperties",function(t,e){if("object"!==n(t))throw new TypeError("Object.defineProperties called on non-object");for(var r=k(e),o=Object.keys(r),i=[],c=0;c<o.length;c+=1){var u=o[c],s=Object.getOwnPropertyDescriptor(r,u);if(s!==a&&s.enumerable){var l=d(r,u);i.push([u,l])}}for(c=0;c<i.length;c+=1){var f=i[c][0];l=i[c][1];Object.defineProperty(t,f,l)}return t}),"create"in Object||v(Object,"create",function(t,e){if("object"!==n(t)&&"null"!==n(t))throw new TypeError("Object prototype may only be an Object or null");var r=new Function("e","function Object() {}Object.prototype=e;return new Object")(t);return r.constructor.prototype=t,1 in arguments?Object.defineProperties(r,e):r}),"filter"in Array.prototype||v(Array.prototype,"filter",function(t,n){var r=k(this),o=j(d(r,"length"));if(!1===g(t))throw new TypeError(t+" is not a function");for(var i,l=1<arguments.length?n:a,f=A(r,0),p=0,h=0;p<o;){var y=s(p);if(e(r,y)){var b=d(r,y);(i=c(t,l,[b,p,r]),Boolean(i))&&(u(f,s(h),b),h+=1)}p+=1}return f}),"map"in Array.prototype||v(Array.prototype,"map",function(t,n){var r=k(this),o=j(d(r,"length"));if(!1===g(t))throw new TypeError(t+" is not a function");for(var i=1<arguments.length?n:a,l=A(r,o),f=0;f<o;){var p=s(f);if(e(r,p))u(l,p,c(t,i,[d(r,p),f,r]));f+=1}return l}),"Promise"in this||(je={},ie.m=he={100:function(t,e,n){(function(t){var e=n(5);try{t.Promise=e,window.Promise=e}catch(t){}}).call(e,n(2))},2:function(Ae,Be){var Ce;Ce=function(){return this}();try{Ce=Ce||Function("return this")()||eval("this")}catch(t){"object"==typeof window&&(Ce=window)}Ae.exports=Ce},5:function(Q,t,e){(function(K){!function(){"use strict";function r(){return V[C][I]||"Symbol(species)"}function o(t){return t&&"object"==typeof t}function u(t){return"function"==typeof t}function s(t,e){return t instanceof e}function e(t,e,n){if(!e(t))throw p(n)}function n(){try{return O.apply(T,arguments)}catch(t){return G.e=t,G}}function l(t,e){return O=t,T=e,n}function t(e,n){function r(){for(var t=0;t<i;)n(o[t],o[t+1]),o[t++]=_,o[t++]=_;i=0,o.length>e&&(o.length=e)}var o=k(e),i=0;return function(t,e){o[i++]=t,o[i++]=e,2===i&&V.nextTick(r)}}function f(t,e){var n,r,o,i,c=0;if(!t)throw p(U);var a=t[V[C].iterator];if(u(a))r=a.call(t);else{if(!u(t.next)){if(s(t,k)){for(n=t.length;c<n;)e(t[c],c++);return c}throw p(U)}r=t}for(;!(o=r.next()).done;)if((i=l(e)(o.value,c++))===G)throw u(r.return)&&r.return(),i.e;return c}function p(t){return new TypeError(t)}function i(t){return(t?"":X)+(new M).stack}function c(t,e){var n="on"+t.toLowerCase(),r=A[n];L&&L.listeners(t).length?t===W?L.emit(t,e._v,e):L.emit(t,e):r?r({reason:e._v,promise:e}):V[t](e._v,e)}function h(t){return t&&t._s}function y(t){return h(t)?new t(j):(n=new t(function(t,e){if(n)throw p();r=t,o=e}),e(r,u),e(o,u),n);var n,r,o}function d(e,n){var r=!1;return function(t){r||(r=!0,R&&(e[q]=i(!0)),n===H?w(e,t):m(e,n,t))}}function b(t,e){function n(t){return r.push(t.replace(/^\s+|\s+$/g,""))}var r=[];return R&&(e[q]&&n(e[q]),function t(e){e&&N in e&&(t(e._next),n(e[N]+""),t(e._p))}(e)),(t&&t.stack?t.stack:t)+("\n"+r.join("\n")).replace(Y,"")}function v(t,e){return t(e)}function m(t,e,n){var r=0,o=t._c;if(t._s===F)for(t._s=e,t._v=n,e===B&&(R&&s(n,M)&&(n.longStack=b(n,t)),J(t));r<o;)z(t,t[r++]);return t}function w(t,e){if(e===t&&e)return m(t,B,p($)),t;if(e!==S&&(u(e)||o(e))){var n=l(g)(e);if(n===G)return m(t,B,n.e),t;u(n)?(R&&h(e)&&(t._next=e),h(e)?E(t,e,n):V.nextTick(function(){E(t,e,n)})):m(t,H,e)}else m(t,H,e);return t}function g(t){return t.then}function E(e,n,t){var r=l(t,n)(function(t){n&&(n=S,w(e,t))},function(t){n&&(n=S,m(e,B,t))});r===G&&n&&(m(e,B,r.e),n=S)}function j(){}var _,O,T,S=null,P="object"==typeof self,A=P?self:K,x=A.Promise,L=A.process,D=A.console,R=!1,k=Array,M=Error,B=1,H=2,F=3,C="Symbol",I="species",N="_pt",q="_st",U="Invalid argument",X="\nFrom previous ",$="Chaining cycle detected for promise",W="unhandledRejection",G={e:S},Y=/^.+\/node_modules\/yaku\/.+\n?/gm,V=function(t){var e,n=this;if(!o(n)||n._s!==_)throw p("Invalid this");if(n._s=F,R&&(n[N]=i()),t!==j){if(!u(t))throw p(U);(e=l(t)(d(n,H),d(n,B)))===G&&m(n,B,e.e)}};(function(t,e){for(var n in e)t[n]=e[n]})((V.default=V).prototype,{then:function(t,e){if(this._s===a)throw p();return n=this,r=y(V.speciesConstructor(this,V)),i=e,u(o=t)&&(r._onFulfilled=o),u(i)&&(n._uh&&c("rejectionHandled",n),r._onRejected=i),R&&(r._p=n),n[n._c++]=r,n._s!==F&&z(n,r),r;var n,r,o,i},catch:function(t){return this.then(_,t)},finally:function(e){return this.then(function(t){return V.resolve(e()).then(function(){return t})},function(t){return V.resolve(e()).then(function(){throw t})})},_c:0,_p:S}),V.resolve=function(t){return h(t)?t:w(y(this),t)},V.reject=function(t){return m(y(this),B,t)},V.race=function(t){function e(t){m(o,H,t)}function n(t){m(o,B,t)}var r=this,o=y(r),i=l(f)(t,function(t){r.resolve(t).then(e,n)});return i===G?r.reject(i.e):o},V.all=function(t){function n(t){m(i,B,t)}var r,o=this,i=y(o),c=[];return(r=l(f)(t,function(t,e){o.resolve(t).then(function(t){c[e]=t,--r||m(i,H,c)},n)}))===G?o.reject(r.e):(r||m(i,H,[]),i)},V.Symbol=A[C]||{},l(function(){Object.defineProperty(V,r(),{get:function(){return this}})})(),V.speciesConstructor=function(t,e){var n=t.constructor;return n&&n[r()]||e},V.unhandledRejection=function(t,e){D&&D.error("Uncaught (in promise)",R?e.longStack:b(t,e))},V.rejectionHandled=j,V.enableLongStackTrace=function(){R=!0},V.nextTick=P?function(t){x?new x(function(t){t()}).then(t):setTimeout(t)}:L.nextTick,V._s=1;var z=t(999,function(t,e){var n,r;return(r=t._s!==B?e._onFulfilled:e._onRejected)===_?void m(e,t._s,t._v):(n=l(v)(r,t._v))===G?void m(e,B,n.e):void w(e,n)}),J=t(9,function(t){!function t(e){if(e._umark)return 1;e._umark=!0;for(var n,r=0,o=e._c;r<o;)if((n=e[r++])._onRejected||t(n))return 1}(t)&&(t._uh=1,c(W,t))});try{Q.exports=V}catch(t){A.Yaku=V}}()}).call(t,e(2))}},ie.c=je,ie.i=function(t){return t},ie.d=function(t,e,n){ie.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},ie.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return ie.d(e,"a",e),e},ie.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},ie.p="",ie(ie.s=100)),"Symbol"in this&&0===this.Symbol.length||function(t,e){"use strict";function o(t){if("[object Window]"===T.call(t))try{return A(t)}catch(t){return S.call([],P)}return A(t)}function i(e,t,n){if(!_.call(e,b))try{k(e,b,{enumerable:!1,configurable:!1,writable:!1,value:{}})}catch(t){e[b]={}}e[b]["@@"+t]=n}function r(){}function n(t){return t!=b&&!_.call(F,t)}function c(t){return t!=b&&_.call(F,t)}function a(e){var n={enumerable:!1,configurable:!0,get:r,set:function(t){f(this,e,{enumerable:!1,configurable:!0,writable:!0,value:t}),i(this,e,!0)}};try{k(j,e,n)}catch(t){j[e]=n.value}return R(F[e]=k(t(e),"constructor",C))}function u(){var t=arguments[0];if(this instanceof u)throw new TypeError("Symbol is not a constructor");return a(y.concat(t||"",h,p+=1))}function s(t){return F[t]}function l(t){return o(t).filter(t===j?(e=t,function(t){return _.call(e,b)&&_.call(e[b],"@@"+t)}):c).map(s);var e}var f,p=0,h=""+Math.random(),y="__symbol:",d=y.length,b="__symbol@@"+h,v="defineProperty",m="defineProperties",w="getOwnPropertyNames",g="getOwnPropertyDescriptor",E="propertyIsEnumerable",j=t.prototype,_=j.hasOwnProperty,O=j[E],T=j.toString,S=Array.prototype.concat,P=t.getOwnPropertyNames?t.getOwnPropertyNames(window):[],A=t[w],x=t[g],L=t.create,D=t.keys,R=t.freeze||t,k=t[v],M=t[m],B=x(t,w),H=function(t){var e=""+t;return c(e)?_.call(this,e)&&this[b]["@@"+e]:O.call(this,t)},F=L(null),C={value:u},I=function(t,e,n){var r,o=""+e;return c(o)?(f(t,o,n.enumerable?((r=L(n)).enumerable=!1,r):n),i(t,o,!!n.enumerable)):k(t,e,n),t};B.value=I,k(t,v,B),B.value=l,k(t,"getOwnPropertySymbols",B),B.value=function(t){return o(t).filter(n)},k(t,w,B),B.value=function(e,n){var t=l(n);return t.length?D(n).concat(t).forEach(function(t){H.call(n,t)&&I(e,t,n[t])}):M(e,n),e},k(t,m,B),B.value=H,k(j,E,B),B.value=u,k(e,"Symbol",B),B.value=function(t){var e=y.concat(y,t,h);return e in j?F[e]:a(e)},k(u,"for",B),B.value=function(t){if(n(t))throw new TypeError(t+" is not a symbol");return _.call(F,t)?t.slice(2*d,-h.length):void 0},k(u,"keyFor",B),B.value=function(t,e){var n=x(t,e);return n&&c(e)&&(n.enumerable=H.call(t,e)),n},k(t,g,B),B.value=function(t,e){return 1===arguments.length||void 0===e?L(t):(n=e,r=L(t),o(n).forEach(function(t){H.call(n,t)&&I(r,t,n[t])}),r);var n,r},k(t,"create",B);var N=null===function(){return this}.call(null);B.value=N?function(){var t=T.call(this);return"[object String]"===t&&c(this)?"[object Symbol]":t}:function(){if(this===window)return"[object Null]";var t=T.call(this);return"[object String]"===t&&c(this)?"[object Symbol]":t},k(j,"toString",B),f=function(t,e,n){var r=x(j,e);delete j[e],k(t,e,n),t!==j&&k(j,e,r)}}(Object,this),"Symbol"in this&&"iterator"in this.Symbol||Object.defineProperty(Symbol,"iterator",{value:Symbol("iterator")}),"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(t){t.constructor?t.Window=t.constructor:(t.Window=t.constructor=new Function("return function Window() {}")()).prototype=this}(this),function(t){if("Event"in t)try{return new Event("click"),1}catch(t){return}}(this)||function(){var o={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var t=window.Event&&window.Event.prototype||null;e.NONE=0,e.CAPTURING_PHASE=1,e.AT_TARGET=2,e.BUBBLING_PHASE=3,window.Event=Window.prototype.Event=e,t&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:t}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(t,e){var c=this,n=t,r=e;if(c===window&&n in o)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");c._events||(c._events={}),c._events[n]||(c._events[n]=function(t){var e,n=c._events[t.type].list,r=n.slice(),o=-1,i=r.length;for(t.preventDefault=function(){!1!==t.cancelable&&(t.returnValue=!1)},t.stopPropagation=function(){t.cancelBubble=!0},t.stopImmediatePropagation=function(){t.cancelBubble=!0,t.cancelImmediate=!0},t.currentTarget=c,t.relatedTarget=t.fromElement||null,t.target=t.target||t.srcElement||c,t.timeStamp=(new Date).getTime(),t.clientX&&(t.pageX=t.clientX+document.documentElement.scrollLeft,t.pageY=t.clientY+document.documentElement.scrollTop);++o<i&&!t.cancelImmediate;)o in r&&-1!==u(n,e=r[o])&&"function"==typeof e&&e.call(c,t)},c._events[n].list=[],c.attachEvent&&c.attachEvent("on"+n,c._events[n])),c._events[n].list.push(r)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(t,e){var n,r=this,o=t,i=e;r._events&&r._events[o]&&r._events[o].list&&-1!==(n=u(r._events[o].list,i))&&(r._events[o].list.splice(n,1),r._events[o].list.length||(r.detachEvent&&r.detachEvent("on"+o,r._events[o]),delete r._events[o]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(e){if(!arguments.length)throw new Error("Not enough arguments");if(!e||"string"!=typeof e.type)throw new Error("DOM Events Exception 0");var n=this,r=e.type;try{if(!e.bubbles){e.cancelBubble=!0;var o=function(t){t.cancelBubble=!0,(n||window).detachEvent("on"+r,o)};this.attachEvent("on"+r,o)}this.fireEvent("on"+r,e)}catch(t){for(e.target=n;"_events"in(e.currentTarget=n)&&"function"==typeof n._events[r]&&n._events[r].call(n,e),"function"==typeof n["on"+r]&&n["on"+r].call(n,e),(n=9===n.nodeType?n.parentWindow:n.parentNode)&&!e.cancelBubble;);}return!0},document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new e("DOMContentLoaded",{bubbles:!0}))}))}function u(t,e){for(var n=-1,r=t.length;++n<r;)if(n in t&&t[n]===e)return n;return-1}function e(t,e){if(!t)throw new Error("Not enough arguments");var n;if("createEvent"in document){n=document.createEvent("Event");var r=!(!e||e.bubbles===a)&&e.bubbles,o=!(!e||e.cancelable===a)&&e.cancelable;return n.initEvent(t,r,o),n}return(n=document.createEventObject()).type=t,n.bubbles=!(!e||e.bubbles===a)&&e.bubbles,n.cancelable=!(!e||e.cancelable===a)&&e.cancelable,n}}(),"XMLHttpRequest"in this&&"prototype"in this.XMLHttpRequest&&"addEventListener"in this.XMLHttpRequest.prototype||function(t,r){t.XMLHttpRequest=function(){var e=this,n=e._request=r?new r:new ActiveXObject("MSXML2.XMLHTTP.3.0");n.onreadystatechange=function(){e.readyState=n.readyState;var t=4===e.readyState;e.response=e.responseText=t?n.responseText:null,e.status=t?n.status:null,e.statusText=t?n.statusText:null,e.dispatchEvent(new Event("readystatechange")),t&&e.dispatchEvent(new Event("load"))},"onerror"in n&&(n.onerror=function(){e.dispatchEvent(new Event("error"))})},t.XMLHttpRequest.UNSENT=0,t.XMLHttpRequest.OPENED=1,t.XMLHttpRequest.HEADERS_RECEIVED=2,t.XMLHttpRequest.LOADING=3,t.XMLHttpRequest.DONE=4;var e=t.XMLHttpRequest.prototype;e.addEventListener=t.addEventListener,e.removeEventListener=t.removeEventListener,e.dispatchEvent=t.dispatchEvent,e.abort=function(){return this._request()},e.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders()},e.getResponseHeader=function(t){return this._request.getResponseHeader(t)},e.open=function(t,e,n,r,o){this._request.open(t,e,n,r,o)},e.overrideMimeType=function(t){this._request.overrideMimeType(t)},e.send=function(t){this._request.send(0 in arguments?t:null)},e.setRequestHeader=function(t,e){this._request.setRequestHeader(t,e)}}(this,this.XMLHttpRequest),"fetch"in this||(al=this,bl=function(u){"use strict";var n="URLSearchParams"in self,r="Symbol"in self&&"iterator"in Symbol,s="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),o="FormData"in self,i="ArrayBuffer"in self;if(i)var e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))};function l(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:t===a,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function p(e){this.map={},e instanceof p?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function h(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(n){return new Promise(function(t,e){n.onload=function(){t(n.result)},n.onerror=function(){e(n.error)}})}function d(t){var e=new FileReader,n=y(e);return e.readAsArrayBuffer(t),n}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){var e;(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:o&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():i&&s&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(t)||c(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=h(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,n,r=h(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=y(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=[e.length],r=0;r<e.length;r+=1)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(t,e){t=l(t),e=f(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},p.prototype.delete=function(t){delete this.map[l(t)]},p.prototype.get=function(t){return t=l(t),this.has(t)?this.map[t]:null},p.prototype.has=function(t){return this.map.hasOwnProperty(l(t))},p.prototype.set=function(t,e){this.map[l(t)]=f(e)},p.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},p.prototype.keys=function(){var n=[];return this.forEach(function(t,e){n.push(e)}),t(n)},p.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},p.prototype.entries=function(){var n=[];return this.forEach(function(t,e){n.push([e,t])}),t(n)},r&&(p.prototype[Symbol.iterator]=p.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(t,e){var n,r,o=(e=e||{}).body;if(t instanceof w){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new p(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new p(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),-1<m.indexOf(r)?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function g(t){var o=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),n=e.shift().replace(/\+/g," "),r=e.join("=").replace(/\+/g," ");o.append(decodeURIComponent(n),decodeURIComponent(r))}}),o}function E(t,e){e=e||{},this.type="default",this.status=e.status===a?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new p(e.headers),this.url=e.url||"",this._initBody(t)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},v.call(w.prototype),v.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var j=[301,302,303,307,308];E.redirect=function(t,e){if(-1===j.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})},u.DOMException=self.DOMException;try{new u.DOMException}catch(t){u.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},u.DOMException.prototype=Object.create(Error.prototype),u.DOMException.prototype.constructor=u.DOMException}function _(o,c){return new Promise(function(r,t){var e=new w(o,c);if(e.signal&&e.signal.aborted)return t(new u.DOMException("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var t,o,e={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",o=new p,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),n=e.shift().trim();if(n){var r=e.join(":").trim();o.append(n,r)}}),o)};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new E(n,e))},i.onerror=function(){t(new TypeError("Network request failed"))},i.ontimeout=function(){t(new TypeError("Network request failed"))},i.onabort=function(){t(new u.DOMException("Aborted","AbortError"))},i.open(e.method,e.url,!0),"include"===e.credentials?i.withCredentials=!0:"omit"===e.credentials&&(i.withCredentials=!1),"responseType"in i&&s&&(i.responseType="blob"),e.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&e.signal.removeEventListener("abort",n)}),i.send(void 0===e._bodyInit?null:e._bodyInit)})}_.polyfill=!0,self.fetch=_,self.Headers=p,self.Request=w,self.Response=E,u.Headers=p,u.Request=w,u.Response=E,u.fetch=_,Object.defineProperty(u,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?bl(exports):"function"==typeof define&&define.amd?define(["exports"],bl):bl(al.WHATWGFetch={}))}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});
(function(undefined) {function Call(t,l){var n=arguments.length>2?arguments[2]:[];if(!1===IsCallable(t))throw new TypeError(Object.prototype.toString.call(t)+"is not a function.");return t.apply(l,n)}function Get(n,t){return n[t]}function HasProperty(n,r){return r in n}function IsArray(r){return"[object Array]"===Object.prototype.toString.call(r)}function IsCallable(n){return"function"==typeof n}function ToInteger(n){var i=Number(n);return isNaN(i)?0:1/i===Infinity||1/i==-Infinity||i===Infinity||i===-Infinity?i:(i<0?-1:1)*Math.floor(Math.abs(i))}function ToLength(n){var t=ToInteger(n);return t<=0?0:Math.min(t,Math.pow(2,53)-1)}function ToObject(e){if(null===e||e===undefined)throw TypeError();return Object(e)}function GetV(t,e){return ToObject(t)[e]}function GetMethod(e,n){var r=GetV(e,n);if(null===r||r===undefined)return undefined;if(!1===IsCallable(r))throw new TypeError("Method not callable: "+n);return r}function Type(e){switch(typeof e){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===e?"null":"Symbol"in this&&e instanceof this.Symbol?"symbol":"object"}}function OrdinaryToPrimitive(r,t){if("string"===t)var e=["toString","valueOf"];else e=["valueOf","toString"];for(var i=0;i<e.length;++i){var n=e[i],a=Get(r,n);if(IsCallable(a)){var o=Call(a,r);if("object"!==Type(o))return o}}throw new TypeError("Cannot convert to primitive.")}function ToPrimitive(e){var t=arguments.length>1?arguments[1]:undefined;if("object"===Type(e)){if(arguments.length<2)var i="default";else t===String?i="string":t===Number&&(i="number");var r="function"==typeof this.Symbol&&"symbol"==typeof this.Symbol.toPrimitive?GetMethod(e,this.Symbol.toPrimitive):undefined;if(r!==undefined){var n=Call(r,e,[i]);if("object"!==Type(n))return n;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===i&&(i="number"),OrdinaryToPrimitive(e,i)}return e}function ToString(t){switch(Type(t)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return ToString(ToPrimitive(t,"string"));default:return String(t)}}if (!("defineProperty"in Object&&function(){try{var e={}
return Object.defineProperty(e,"test",{value:42}),!0}catch(t){return!1}}()
)) {!function(e){var t=Object.prototype.hasOwnProperty("__defineGetter__"),r="A property cannot both have accessors and be writable or have a value";Object.defineProperty=function n(o,i,c){if(e&&(o===window||o===document||o===Element.prototype||o instanceof Element))return e(o,i,c);if(null===o||!(o instanceof Object||"object"==typeof o))throw new TypeError("Object.defineProperty called on non-object");if(!(c instanceof Object))throw new TypeError("Property description must be an object");var a=String(i),f="value"in c||"writable"in c,p="get"in c&&typeof c.get,s="set"in c&&typeof c.set;if(p){if("function"!==p)throw new TypeError("Getter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(f)throw new TypeError(r);Object.__defineGetter__.call(o,a,c.get)}else o[a]=c.value;if(s){if("function"!==s)throw new TypeError("Setter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(f)throw new TypeError(r);Object.__defineSetter__.call(o,a,c.set)}return"value"in c&&(o[a]=c.value),o}}(Object.defineProperty);}function CreateMethodProperty(e,r,t){var a={value:t,writable:!0,enumerable:!1,configurable:!0};Object.defineProperty(e,r,a)}if (!("isArray"in Array
)) {CreateMethodProperty(Array,"isArray",function r(e){return IsArray(e)});}if (!("forEach"in Array.prototype
)) {CreateMethodProperty(Array.prototype,"forEach",function r(t){var e=ToObject(this),n=e instanceof String?e.split(""):e,o=ToLength(Get(e,"length"));if(!1===IsCallable(t))throw new TypeError(t+" is not a function");for(var a=arguments.length>1?arguments[1]:undefined,i=0;i<o;){var f=ToString(i);if(HasProperty(n,f)){var l=Get(n,f);Call(t,a,[l,i,e])}i+=1}return undefined});}if (!("forEach"in NodeList.prototype
)) {NodeList.prototype.forEach=Array.prototype.forEach;}if (!("bind"in Function.prototype
)) {CreateMethodProperty(Function.prototype,"bind",function t(n){var r=Array,o=Object,e=r.prototype,l=function g(){},p=e.slice,a=e.concat,i=e.push,c=Math.max,u=this;if(!IsCallable(u))throw new TypeError("Function.prototype.bind called on incompatible "+u);for(var y,h=p.call(arguments,1),s=function(){if(this instanceof y){var t=u.apply(this,a.call(h,p.call(arguments)));return o(t)===t?t:this}return u.apply(n,a.call(h,p.call(arguments)))},f=c(0,u.length-h.length),b=[],d=0;d<f;d++)i.call(b,"$"+d);return y=Function("binder","return function ("+b.join(",")+"){ return binder.apply(this, arguments); }")(s),u.prototype&&(l.prototype=u.prototype,y.prototype=new l,l.prototype=null),y});}if (!("getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{var t={}
return t.test=0,0===Object.getOwnPropertyDescriptor(t,"test").value}catch(e){return!1}}()
)) {!function(){function e(e){try{return e.sentinel=0,0===Object.getOwnPropertyDescriptor(e,"sentinel").value}catch(t){}}var t,r,o,n=Function.prototype.call,c=Object.prototype,i=n.bind(c.hasOwnProperty);if((o=i(c,"__defineGetter__"))&&(t=n.bind(c.__lookupGetter__),r=n.bind(c.__lookupSetter__)),Object.defineProperty){var p=e({});if(!("undefined"==typeof document||e(document.createElement("div")))||!p)var _=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||_){CreateMethodProperty(Object,"getOwnPropertyDescriptor",function a(e,n){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+e);if(_)try{return _.call(Object,e,n)}catch(l){}if(i(e,n)){var p={enumerable:!0,configurable:!0};if(o){var a=e.__proto__;e.__proto__=c;var f=t(e,n),u=r(e,n);if(e.__proto__=a,f||u)return f&&(p.get=f),u&&(p.set=u),p}return p.value=e[n],p.writable=!0,p}})}}();}if (!("keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()
)) {CreateMethodProperty(Object,"keys",function(){"use strict";function t(t){var e=r.call(t),n="[object Arguments]"===e;return n||(n="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===r.call(t.callee)),n}var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,o=!n.call({toString:null},"toString"),l=n.call(function(){},"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],i=function(t){var e=t.constructor;return e&&e.prototype===t},u={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},a=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!u["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{i(window[t])}catch(r){return!0}}catch(r){return!0}return!1}(),f=function(t){if("undefined"==typeof window||!a)return i(t);try{return i(t)}catch(e){return!1}};return function p(n){var i="[object Function]"===r.call(n),u=t(n),a="[object String]"===r.call(n),p=[];if(n===undefined||null===n)throw new TypeError("Cannot convert undefined or null to object");var s=l&&i;if(a&&n.length>0&&!e.call(n,0))for(var y=0;y<n.length;++y)p.push(String(y));if(u&&n.length>0)for(var g=0;g<n.length;++g)p.push(String(g));else for(var h in n)s&&"prototype"===h||!e.call(n,h)||p.push(String(h));if(o)for(var w=f(n),d=0;d<c.length;++d)w&&"constructor"===c[d]||!e.call(n,c[d])||p.push(c[d]);return p}}());}if (!("defineProperties"in Object
)) {CreateMethodProperty(Object,"defineProperties",function e(r,t){if("object"!==Type(r))throw new TypeError("Object.defineProperties called on non-object");for(var o=ToObject(t),n=Object.keys(o),c=[],i=0;i<n.length;i++){var b=n[i],f=Object.getOwnPropertyDescriptor(o,b);if(f!==undefined&&f.enumerable){var p=Get(o,b),a=p;c.push([b,a])}}for(var i=0;i<c.length;i++){var j=c[i][0],a=c[i][1];Object.defineProperty(r,j,a)}return r});}if (!((function(e){"use strict"
try{var a=new e.URL("http://example.com")
if("href"in a&&"searchParams"in a){var r=new URL("http://example.com")
if(r.search="a=1&b=2","http://example.com/?a=1&b=2"===r.href&&(r.search="","http://example.com/"===r.href)){var t=new e.URLSearchParams("a=1"),h=new e.URLSearchParams(t)
if("a=1"===String(h))return!0}}return!1}catch(c){return!1}})(this)
)) {!function(e){"use strict";function t(t){return!!t&&("Symbol"in e&&"iterator"in e.Symbol&&"function"==typeof t[Symbol.iterator]||!!Array.isArray(t))}function n(e){return"from"in Array?Array.from(e):Array.prototype.slice.call(e)}!function(){function r(e){var t="",n=!0;return e.forEach(function(e){var r=encodeURIComponent(e.name),a=encodeURIComponent(e.value);n||(t+="&"),t+=r+"="+a,n=!1}),t.replace(/%20/g,"+")}function a(e,t){var n=e.split("&");t&&-1===n[0].indexOf("=")&&(n[0]="="+n[0]);var r=[];n.forEach(function(e){if(0!==e.length){var t=e.indexOf("=");if(-1!==t)var n=e.substring(0,t),a=e.substring(t+1);else n=e,a="";n=n.replace(/\+/g," "),a=a.replace(/\+/g," "),r.push({name:n,value:a})}});var a=[];return r.forEach(function(e){a.push({name:decodeURIComponent(e.name),value:decodeURIComponent(e.value)})}),a}function i(e){if(c)return new s(e);var t=document.createElement("a");return t.href=e,t}function o(e){var i=this;this._list=[],e===undefined||null===e||(e instanceof o?this._list=a(String(e)):"object"==typeof e&&t(e)?n(e).forEach(function(e){if(!t(e))throw TypeError();var r=n(e);if(2!==r.length)throw TypeError();i._list.push({name:String(r[0]),value:String(r[1])})}):"object"==typeof e&&e?Object.keys(e).forEach(function(t){i._list.push({name:String(t),value:String(e[t])})}):(e=String(e),"?"===e.substring(0,1)&&(e=e.substring(1)),this._list=a(e))),this._url_object=null,this._setList=function(e){u||(i._list=e)};var u=!1;this._update_steps=function(){u||(u=!0,i._url_object&&("about:"===i._url_object.protocol&&-1!==i._url_object.pathname.indexOf("?")&&(i._url_object.pathname=i._url_object.pathname.split("?")[0]),i._url_object.search=r(i._list),u=!1))}}function u(e,t){var n=0;this.next=function(){if(n>=e.length)return{done:!0,value:undefined};var r=e[n++];return{done:!1,value:"key"===t?r.name:"value"===t?r.value:[r.name,r.value]}}}function l(t,n){function r(){var e=l.href.replace(/#$|\?$|\?(?=#)/g,"");l.href!==e&&(l.href=e)}function u(){m._setList(l.search?a(l.search.substring(1)):[]),m._update_steps()}if(!(this instanceof e.URL))throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");n&&(t=function(){if(c)return new s(t,n).href;var e;try{var r;if("[object OperaMini]"===Object.prototype.toString.call(window.operamini)?(e=document.createElement("iframe"),e.style.display="none",document.documentElement.appendChild(e),r=e.contentWindow.document):document.implementation&&document.implementation.createHTMLDocument?r=document.implementation.createHTMLDocument(""):document.implementation&&document.implementation.createDocument?(r=document.implementation.createDocument("http://www.w3.org/1999/xhtml","html",null),r.documentElement.appendChild(r.createElement("head")),r.documentElement.appendChild(r.createElement("body"))):window.ActiveXObject&&(r=new window.ActiveXObject("htmlfile"),r.write("<head></head><body></body>"),r.close()),!r)throw Error("base not supported");var a=r.createElement("base");a.href=n,r.getElementsByTagName("head")[0].appendChild(a);var i=r.createElement("a");return i.href=t,i.href}finally{e&&e.parentNode.removeChild(e)}}());var l=i(t||""),f=function(){if(!("defineProperties"in Object))return!1;try{var e={};return Object.defineProperties(e,{prop:{get:function(){return!0}}}),e.prop}catch(t){return!1}}(),h=f?this:document.createElement("a"),m=new o(l.search?l.search.substring(1):null);return m._url_object=h,Object.defineProperties(h,{href:{get:function(){return l.href},set:function(e){l.href=e,r(),u()},enumerable:!0,configurable:!0},origin:{get:function(){return"origin"in l?l.origin:this.protocol+"//"+this.host},enumerable:!0,configurable:!0},protocol:{get:function(){return l.protocol},set:function(e){l.protocol=e},enumerable:!0,configurable:!0},username:{get:function(){return l.username},set:function(e){l.username=e},enumerable:!0,configurable:!0},password:{get:function(){return l.password},set:function(e){l.password=e},enumerable:!0,configurable:!0},host:{get:function(){var e={"http:":/:80$/,"https:":/:443$/,"ftp:":/:21$/}[l.protocol];return e?l.host.replace(e,""):l.host},set:function(e){l.host=e},enumerable:!0,configurable:!0},hostname:{get:function(){return l.hostname},set:function(e){l.hostname=e},enumerable:!0,configurable:!0},port:{get:function(){return l.port},set:function(e){l.port=e},enumerable:!0,configurable:!0},pathname:{get:function(){return"/"!==l.pathname.charAt(0)?"/"+l.pathname:l.pathname},set:function(e){l.pathname=e},enumerable:!0,configurable:!0},search:{get:function(){return l.search},set:function(e){l.search!==e&&(l.search=e,r(),u())},enumerable:!0,configurable:!0},searchParams:{get:function(){return m},enumerable:!0,configurable:!0},hash:{get:function(){return l.hash},set:function(e){l.hash=e,r()},enumerable:!0,configurable:!0},toString:{value:function(){return l.toString()},enumerable:!1,configurable:!0},valueOf:{value:function(){return l.valueOf()},enumerable:!1,configurable:!0}}),h}var c,s=e.URL;try{if(s){if("searchParams"in(c=new e.URL("http://example.com"))){var f=new l("http://example.com");if(f.search="a=1&b=2","http://example.com/?a=1&b=2"===f.href&&(f.search="","http://example.com/"===f.href))return}"href"in c||(c=undefined),c=undefined}}catch(m){}if(Object.defineProperties(o.prototype,{append:{value:function(e,t){this._list.push({name:e,value:t}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},"delete":{value:function(e){for(var t=0;t<this._list.length;)this._list[t].name===e?this._list.splice(t,1):++t;this._update_steps()},writable:!0,enumerable:!0,configurable:!0},get:{value:function(e){for(var t=0;t<this._list.length;++t)if(this._list[t].name===e)return this._list[t].value;return null},writable:!0,enumerable:!0,configurable:!0},getAll:{value:function(e){for(var t=[],n=0;n<this._list.length;++n)this._list[n].name===e&&t.push(this._list[n].value);return t},writable:!0,enumerable:!0,configurable:!0},has:{value:function(e){for(var t=0;t<this._list.length;++t)if(this._list[t].name===e)return!0;return!1},writable:!0,enumerable:!0,configurable:!0},set:{value:function(e,t){for(var n=!1,r=0;r<this._list.length;)this._list[r].name===e?n?this._list.splice(r,1):(this._list[r].value=t,n=!0,++r):++r;n||this._list.push({name:e,value:t}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},entries:{value:function(){return new u(this._list,"key+value")},writable:!0,enumerable:!0,configurable:!0},keys:{value:function(){return new u(this._list,"key")},writable:!0,enumerable:!0,configurable:!0},values:{value:function(){return new u(this._list,"value")},writable:!0,enumerable:!0,configurable:!0},forEach:{value:function(e){var t=arguments.length>1?arguments[1]:undefined;this._list.forEach(function(n){e.call(t,n.value,n.name)})},writable:!0,enumerable:!0,configurable:!0},toString:{value:function(){return r(this._list)},writable:!0,enumerable:!1,configurable:!0}}),"Symbol"in e&&"iterator"in e.Symbol&&(Object.defineProperty(o.prototype,e.Symbol.iterator,{value:o.prototype.entries,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,e.Symbol.iterator,{value:function(){return this},writable:!0,enumerable:!0,configurable:!0})),s)for(var h in s)s.hasOwnProperty(h)&&"function"==typeof s[h]&&(l[h]=s[h]);e.URL=l,e.URLSearchParams=o}(),function(){if("1"!==new e.URLSearchParams([["a",1]]).get("a")||"1"!==new e.URLSearchParams({a:1}).get("a")){var r=e.URLSearchParams;e.URLSearchParams=function(e){if(e&&"object"==typeof e&&t(e)){var a=new r;return n(e).forEach(function(e){if(!t(e))throw TypeError();var r=n(e);if(2!==r.length)throw TypeError();a.append(r[0],r[1])}),a}return e&&"object"==typeof e?(a=new r,Object.keys(e).forEach(function(t){a.set(t,e[t])}),a):new r(e)}}}()}(self);}}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});


if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) { 
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
(function (window, document, Chartist) {
    'use strict';
    var defaultOptions = {
        labelClass: 'ct-pie-label',
        labelInterpolationFnc: Chartist.noop,
        labelOffset: {
            x: 0,
            y: 0
        },
        position: {
            x: null,
            y: null
        }
    };
    
    Chartist.plugins = Chartist.plugins || {};
    Chartist.plugins.ctPieLabels = function (options) {
        options = Chartist.extend({}, defaultOptions, options);
        
        var positionX = options.position.x || function (data) {
            var cx = data.center.x;
            var cy = data.center.y;
            var radius = data.radius;
            // Subtracting by 90 so that it matches the origin point for circles in Chartist, which is at the top... 
            var angleMidpoint = (data.startAngle + data.endAngle) / 2 - 90 + options.labelOffset.x;
            
            return radius * Math.cos(angleMidpoint * Math.PI / 180) + cx;
        };
        
        var positionY = options.position.y || function (data) {
            var cy = data.center.y;
            var radius = data.radius;
            // Subtracting by 90 so that it matches the origin point for circles in Chartist, which is at the top...
            var angleMidpoint = (data.startAngle + data.endAngle) / 2 - 90;
            
            return radius * Math.sin(angleMidpoint * Math.PI / 180) + cy + options.labelOffset.y;
        };
        
        return function ctPieLabels (chart) {
            if (chart instanceof Chartist.Pie) {
                chart.on('draw', function (data) {
                    if (data.type === 'slice') {
                        data.group.elem('text', {
                            x: positionX(data),
                            y: positionY(data),
                            style: 'text-anchor: middle'
                        }, options.labelClass)
                            .text(
                                options.labelInterpolationFnc(data.value, data.totalDataSum)
                            );
                    }
                });
            }
        };
    };
}(window, document, Chartist));
/**
 * v0.3
 * @author Gabe Rose (gabe@equisolve.com)
 * This plugin is used to generate and configure charts dynamically via an HTML data
 * attribute interface.
 **/
function ChartBuilder (el) {
    var apiUrl = '/api/v1/chart-data';
    var self = this;
    this.el = el;
    this.cid = el.getAttribute('data-cid');
    this.pid = el.getAttribute('data-pid');
    this.name = el.getAttribute('data-chart-name');
    this.type = el.getAttribute('data-chart-type');
    this.fieldName = el.getAttribute('data-field-name');
    this.unitType = el.getAttribute('data-unit-type');
    this.donutSolid = el.getAttribute('data-donut-solid') == 'true' ? true : false;
    this.isFinancialChart = el.getAttribute('data-financial-chart');
    this.legend = el.getAttribute('data-legend') === 'true' ? true : false;
    this.extraOptionsId = el.getAttribute('data-extra-options-id');
    this.unitScale = el.getAttribute('data-unit-scale');
    this.width = el.getAttribute('data-width');
    this.data = {};
    this.chart = {};
    this.events = {
        afterDraw: new Event('afterDraw')
    };
    
    function getOptions() {
        var opts = {};
        if (self.type == 'pie') {
            opts = {
                height: 270,
                donut: true,
                donutWidth: 50,
                donutSolid: self.donutSolid,
                showLabel: false,
                plugins: [
                    // Chartist.plugins.ctPieLabels({
                    //     labelInterpolationFnc: function (value, totalValueSum) {
                    //         return Math.round((value / totalValueSum) * 100) + '%';
                    //     }
                    // }),
                    Chartist.plugins.legend({
                        clickable: false,
                        position: jq(self.el).parent().find('.ct-legend-wrapper')[0] ? jq(self.el).parent().find('.ct-legend-wrapper')[0] : 'bottom'
                    }),
                    Chartist.plugins.tooltip({
                        appendToBody: true,
                        tooltipFnc: function (meta, value, index) {
                            return self.data.labels[index];
                        }
                    })
                ]
            };
        }else {
            opts = {
                height: 250,
                width: self.width,
                distributeSeries: true,
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                seriesBarDistance: 15,
                plugins: [
                    Chartist.plugins.ctBarLabels({
                        labelInterpolationFnc: function (text) {
                            if (self.unitType == 'currency') {
                                if (self.unitScale == 'M') {
                                    var value = parseFloat(text) / 1000000
                                    value = value.toFixed(2);
                                }
                                return '$' + value.toLocaleString();
                            }
                            return text.toLocaleString();
                        },
                        position: {
                            y: function (data) {
                                return data.y2 - 10;
                            }
                        }
                    }),                    
                ]
            }
            if (self.legend) {
                opts.plugins.push(Chartist.plugins.legend({
                    clickable: false,
                    position: jq(self.el).parent().find('.ct-legend-wrapper')[0] ? jq(self.el).parent().find('.ct-legend-wrapper')[0] : 'bottom'
                }));
            }
        }
        return opts;
    }    
    
    function registerHandlers ()
    {
        self.chart.on('draw', function (event) {
            // X-axis label centering fix for IE11
            if (event.type === 'label' && event.axis && event.axis.units.pos === 'x') {
                if (!self.chart.supportsForeignObject) {
                    event.element.attr({
                        x: event.x + (event.width / 2) - 15,
                        'text-anchor': 'middle'
                    });
                }
            }
        });
        jq('.nav a').on('shown.bs.tab', function (e) {
            console.log('tab shown');
            var target = jq(this).attr('href');
            
            if (jq(target).find(self.el).length > 0) {
                console.log('update chart');
                self.chart.update();
            }
        });
    }
    
    function getChartData () {
        return new Promise(function (resolve, reject) {
            var url = new URL(window.location.protocol + '//' + window.location.hostname + apiUrl),
            params = {
                cid: self.cid,
                pid: self.pid,
                chart_name: self.name,
                field_name: self.fieldName,
                is_financial_chart: self.isFinancialChart
            };
            Object.keys(params).forEach(function (key) {
                url.searchParams.append(key, params[key]);
            });
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (results) {
                var resultsData = results.data.map(function (el, i) {
                        return el.match(/[\d.]+/g)[0];
                    });
                    self.data.series = resultsData;
                    self.data.labels = results.labels;
                    // Holds full value strings to use in the legend
                    self.data.labelValues = results.data;
                    if (self.legend) {
                        //If there's a legend, transform the labels.
                        self.data.labels = results.labels.map(function (el, i) {
                                var prefix = '';
                                if (self.unitType == 'percentage') {
                                    suffix = '<span class="percent">' + self.data.series[i] + '%</span>';
                                } else if (self.unitType == 'currency') {
                                    suffix = '<span class="currency">$' + self.data.labelValues[i] + '</span> ';
                                    if (self.unitScale == 'M') {
                                        el = el / 1000000
                                        el = el.toFixed(2);
                                    }
                                }
                                return el + suffix;
                        });
                    }
                resolve();
            });
        });
    }
    getChartData().then(function () {
      // We allow for entirely custom options to be passed via a JSON script.
      var customOpts = {};  
      if (document.getElementById(self.extraOptionsId)) {
          customOpts = JSON.parse(document.getElementById(self.extraOptionsId).innerHTML);
      }
      var opts = Object.assign({}, getOptions(), customOpts);
      if (self.type == 'pie') {
          self.chart = new Chartist.Pie(self.el, self.data, opts);
      }else {
          self.chart = new Chartist.Bar(self.el, self.data, opts);
      }
      registerHandlers();
      self.el.dispatchEvent(self.events.afterDraw);
    });
}

var charts = document.querySelectorAll('.chartist-chart')
if (charts.length) {
    charts.forEach(function (el) {
        new ChartBuilder(el);
    });
}
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/*!
 * Generated using the Bootstrap Customizer (https://getbootstrap.com/docs/3.4/customize/)
 */

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.4.1'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector !== '#' ? $(document).find(selector) : null

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.4.1'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(document).find(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
        .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
        .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
          .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#affix
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    var target = this.options.target === Affix.DEFAULTS.target ? $(this.options.target) : $(document).find(this.options.target)

    this.$target = target
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.4.1'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.4.1'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(document).find(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(document).find(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: https://modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // https://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options = options
    this.$body = $(document.body)
    this.$element = $(element)
    this.$dialog = this.$element.find('.modal-dialog')
    this.$backdrop = null
    this.isShown = null
    this.originalBodyPad = null
    this.scrollbarWidth = 0
    this.ignoreBackdropClick = false
    this.fixedContent = '.navbar-fixed-top, .navbar-fixed-bottom'

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION = '3.4.1'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
          this.$element[0] !== e.target &&
          !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    var scrollbarWidth = this.scrollbarWidth
    if (this.bodyIsOverflowing) {
      this.$body.css('padding-right', bodyPad + scrollbarWidth)
      $(this.fixedContent).each(function (index, element) {
        var actualPadding = element.style.paddingRight
        var calculatedPadding = $(element).css('padding-right')
        $(element)
          .data('padding-right', actualPadding)
          .css('padding-right', parseFloat(calculatedPadding) + scrollbarWidth + 'px')
      })
    }
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
    $(this.fixedContent).each(function (index, element) {
      var padding = $(element).data('padding-right')
      $(element).removeData('padding-right')
      element.style.paddingRight = padding ? padding : ''
    })
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
    var href = $this.attr('href')
    var target = $this.attr('data-target') ||
      (href && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7

    var $target = $(document).find(target)
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);


!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t()}):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(0,function(){!function(y){"use strict";function e(e){if(null==this)throw TypeError();var t=String(this);if(e&&"[object RegExp]"==l.call(e))throw TypeError();var i=t.length,n=String(e),s=n.length,o=1<arguments.length?arguments[1]:void 0,a=o?Number(o):0;return a!=a&&(a=0),!(i<s+Math.min(Math.max(a,0),i))&&-1!=r.call(t,n,a)}var l,t,r,i,d;function n(e){if(null==this)throw TypeError();var t=String(this);if(e&&"[object RegExp]"==d.call(e))throw TypeError();var i=t.length,n=String(e),s=n.length,o=1<arguments.length?arguments[1]:void 0,a=o?Number(o):0;a!=a&&(a=0);var l=Math.min(Math.max(a,0),i);if(i<s+l)return!1;for(var r=-1;++r<s;)if(t.charCodeAt(l+r)!=n.charCodeAt(r))return!1;return!0}function $(e){return y.each([{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}],function(){e=e.replace(this.re,this.ch)}),e}function h(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i="(?:"+Object.keys(t).join("|")+")",n=new RegExp(i),s=new RegExp(i,"g"),o=null==e?"":""+e;return n.test(o)?o.replace(s,function(e){return t[e]}):o}String.prototype.includes||(l={}.toString,t=function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i}(),r="".indexOf,t?t(String.prototype,"includes",{value:e,configurable:!0,writable:!0}):String.prototype.includes=e),String.prototype.startsWith||(i=function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i}(),d={}.toString,i?i(String.prototype,"startsWith",{value:n,configurable:!0,writable:!0}):String.prototype.startsWith=n),Object.keys||(Object.keys=function(e,t,i){for(t in i=[],e)i.hasOwnProperty.call(e,t)&&i.push(t);return i}),y.expr[":"].icontains=function(e,t,i){var n=y(e);return(n.data("tokens")||n.text()).toUpperCase().includes(i[3].toUpperCase())},y.expr[":"].ibegins=function(e,t,i){var n=y(e);return(n.data("tokens")||n.text()).toUpperCase().startsWith(i[3].toUpperCase())},y.expr[":"].aicontains=function(e,t,i){var n=y(e);return(n.data("tokens")||n.data("normalizedText")||n.text()).toUpperCase().includes(i[3].toUpperCase())},y.expr[":"].aibegins=function(e,t,i){var n=y(e);return(n.data("tokens")||n.data("normalizedText")||n.text()).toUpperCase().startsWith(i[3].toUpperCase())};var c=function(e,t,i){i&&(i.stopPropagation(),i.preventDefault()),this.$element=y(e),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=t,null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=c.prototype.val,this.render=c.prototype.render,this.refresh=c.prototype.refresh,this.setStyle=c.prototype.setStyle,this.selectAll=c.prototype.selectAll,this.deselectAll=c.prototype.deselectAll,this.destroy=c.prototype.remove,this.remove=c.prototype.remove,this.show=c.prototype.show,this.hide=c.prototype.hide,this.init()};function s(e,t){var o,a=arguments,l=e,r=t;[].shift.apply(a);var i=this.each(function(){var e=y(this);if(e.is("select")){var t=e.data("selectpicker"),i="object"==typeof l&&l;if(t){if(i)for(var n in i)i.hasOwnProperty(n)&&(t.options[n]=i[n])}else{var s=y.extend({},c.DEFAULTS,y.fn.selectpicker.defaults||{},e.data(),i);e.data("selectpicker",t=new c(this,s,r))}"string"==typeof l&&(o=t[l]instanceof Function?t[l].apply(t,a):t.options[l])}});return void 0!==o?o:i}c.VERSION="1.7.2",c.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1},c.prototype={constructor:c,init:function(){var t=this,e=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),void 0!==e&&(this.$button.attr("data-id",e),y('label[for="'+e+'"]').click(function(e){e.preventDefault(),t.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on("hide.bs.dropdown",function(e){t.$element.trigger("hide.bs.select",e)}),this.$newElement.on("hidden.bs.dropdown",function(e){t.$element.trigger("hidden.bs.select",e)}),this.$newElement.on("show.bs.dropdown",function(e){t.$element.trigger("show.bs.select",e)}),this.$newElement.on("shown.bs.dropdown",function(e){t.$element.trigger("shown.bs.select",e)}),setTimeout(function(){t.$element.trigger("loaded.bs.select")})},createDropdown:function(){var e=this.multiple?" show-tick":"",t=this.$element.parent().hasClass("input-group")?" input-group-btn":"",i=this.autofocus?" autofocus":"",n=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",s=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+h(this.options.liveSearchPlaceholder)+'"')+"></div>":"",o=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",a=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",l='<div class="btn-group bootstrap-select'+e+t+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+i+'><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">'+n+s+o+'<ul class="dropdown-menu inner" role="menu"></ul>'+a+"</div></div>";return y(l)},createView:function(){var e=this.createDropdown(),t=this.createLi();return e.find("ul")[0].innerHTML=t,e},reloadLi:function(){this.destroyLi();var e=this.createLi();this.$menuInner[0].innerHTML=e},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){function u(e,t,i,n){return"<li role=\"menuitem\" "+(void 0!==i&""!==i?' class="'+i+'"':"")+(void 0!==t&null!==t?' data-original-index="'+t+'"':"")+(void 0!==n&null!==n?'data-optgroup="'+n+'"':"")+">"+e+"</li>"}function m(e,t,i,n){return'<a tabindex="0"'+(void 0!==t?' class="'+t+'"':"")+(void 0!==i?' style="'+i+'"':"")+(f.options.liveSearchNormalize?' data-normalized-text="'+$(h(e))+'"':"")+(void 0!==n||null!==n?' data-tokens="'+n+'"':"")+">"+e+'<span class="'+f.options.iconBase+" "+f.options.tickIcon+' check-mark"></span></a>'}var f=this,v=[],g=0,e=document.createElement("option"),b=-1;if(this.options.title&&!this.multiple&&(b--,!this.$element.find(".bs-title-option").length)){var t=this.$element[0];e.className="bs-title-option",e.appendChild(document.createTextNode(this.options.title)),e.value="",t.insertBefore(e,t.firstChild),null===t.options[t.selectedIndex].getAttribute("selected")&&(e.selected=!0)}return this.$element.find("option").each(function(e){var t=y(this);if(b++,!t.hasClass("bs-title-option")){var i=this.className||"",n=this.style.cssText,s=t.data("content")?t.data("content"):t.html(),o=t.data("tokens")?t.data("tokens"):null,a=void 0!==t.data("subtext")?'<small class="text-muted">'+t.data("subtext")+"</small>":"",l=void 0!==t.data("icon")?'<span class="'+f.options.iconBase+" "+t.data("icon")+'"></span> ':"",r=this.disabled||"OPTGROUP"===this.parentElement.tagName&&this.parentElement.disabled;if(""!==l&&r&&(l="<span>"+l+"</span>"),f.options.hideDisabled&&r)b--;else{if(t.data("content")||(s=l+'<span class="text">'+s+a+"</span>"),"OPTGROUP"===this.parentElement.tagName&&!0!==t.data("divider")){if(0===t.index()){g+=1;var d=this.parentElement.label,h=void 0!==t.parent().data("subtext")?'<small class="text-muted">'+t.parent().data("subtext")+"</small>":"",c=t.parent().data("icon")?'<span class="'+f.options.iconBase+" "+t.parent().data("icon")+'"></span> ':"",p=" "+this.parentElement.className||"";d=c+'<span class="text">'+d+h+"</span>",0!==e&&0<v.length&&(b++,v.push(u("",null,"divider",g+"div"))),b++,v.push(u(d,null,"dropdown-header"+p,g))}v.push(u(m(s,"opt "+i+p,n,o),e,"",g))}else!0===t.data("divider")?v.push(u("",e,"divider")):!0===t.data("hidden")?v.push(u(m(s,i,n,o),e,"hidden is-hidden")):(this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName&&(b++,v.push(u("",null,"divider",g+"div"))),v.push(u(m(s,i,n,o),e)));f.liObj[e]=b}}}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),v.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(e){var t,n=this;!1!==e&&this.$element.find("option").each(function(e){var t=n.findLis().eq(n.liObj[e]);n.setDisabled(e,this.disabled||"OPTGROUP"===this.parentElement.tagName&&this.parentElement.disabled,t),n.setSelected(e,this.selected,t)}),this.tabIndex();var i=this.$element.find("option").map(function(){if(this.selected){if(n.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentElement.tagName&&this.parentElement.disabled))return!1;var e,t=y(this),i=t.data("icon")&&n.options.showIcon?'<i class="'+n.options.iconBase+" "+t.data("icon")+'"></i> ':"";return e=n.options.showSubtext&&t.data("subtext")&&!n.multiple?' <small class="text-muted">'+t.data("subtext")+"</small>":"",void 0!==t.attr("title")?t.attr("title"):t.data("content")&&n.options.showContent?t.data("content"):i+t.html()+e}}).toArray(),s=this.multiple?i.join(this.options.multipleSeparator):i[0];if(this.multiple&&-1<this.options.selectedTextFormat.indexOf("count")){var o=this.options.selectedTextFormat.split(">");if(1<o.length&&i.length>o[1]||1==o.length&&2<=i.length){t=this.options.hideDisabled?", [disabled]":"";var a=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+t).length;s=("function"==typeof this.options.countSelectedText?this.options.countSelectedText(i.length,a):this.options.countSelectedText).replace("{0}",i.length.toString()).replace("{1}",a.toString())}}null==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(s=this.options.title),s=s||(void 0!==this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",y.trim(s.replace(/<[^>]*>?/g,""))),this.$button.children(".filter-option").html(s),this.$element.trigger("rendered.bs.select")},setStyle:function(e,t){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var i=e||this.options.style;"add"==t?this.$button.addClass(i):"remove"==t?this.$button.removeClass(i):(this.$button.removeClass(this.options.style),this.$button.addClass(i))},liHeight:function(e){if(e||!1!==this.options.size&&!this.sizeInfo){var t=document.createElement("div"),i=document.createElement("div"),n=document.createElement("ul"),s=document.createElement("li"),o=document.createElement("li"),a=document.createElement("a"),l=document.createElement("span"),r=this.options.header?this.$menu.find(".popover-title")[0].cloneNode(!0):null,d=this.options.liveSearch?document.createElement("div"):null,h=this.options.actionsBox&&this.multiple?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,c=this.options.doneButton&&this.multiple?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(l.className="text",t.className=this.$menu[0].parentNode.className+" open",i.className="dropdown-menu open",n.className="dropdown-menu inner",s.className="divider",l.appendChild(document.createTextNode("Inner text")),a.appendChild(l),o.appendChild(a),n.appendChild(o),n.appendChild(s),r&&i.appendChild(r),d){var p=document.createElement("span");d.className="bs-searchbox",p.className="form-control",d.appendChild(p),i.appendChild(d)}h&&i.appendChild(h),i.appendChild(n),c&&i.appendChild(c),t.appendChild(i),document.body.appendChild(t);var u=a.offsetHeight,m=r?r.offsetHeight:0,f=d?d.offsetHeight:0,v=h?h.offsetHeight:0,g=c?c.offsetHeight:0,b=y(s).outerHeight(!0),$=!!getComputedStyle&&getComputedStyle(i),x=$?y(i):null,w=parseInt($?$.paddingTop:x.css("paddingTop"))+parseInt($?$.paddingBottom:x.css("paddingBottom"))+parseInt($?$.borderTopWidth:x.css("borderTopWidth"))+parseInt($?$.borderBottomWidth:x.css("borderBottomWidth")),C=w+parseInt($?$.marginTop:x.css("marginTop"))+parseInt($?$.marginBottom:x.css("marginBottom"))+2;document.body.removeChild(t),this.sizeInfo={liHeight:u,headerHeight:m,searchHeight:f,actionsHeight:v,doneButtonHeight:g,dividerHeight:b,menuPadding:w,menuExtras:C}}},setSize:function(){this.findLis(),this.liHeight();function o(){r=h.$newElement.offset().top-e.scrollTop(),d=e.height()-r-t}var a,l,r,d,h=this,c=this.$menu,p=this.$menuInner,e=y(window),t=this.$newElement[0].offsetHeight,u=this.sizeInfo.liHeight,m=this.sizeInfo.headerHeight,f=this.sizeInfo.searchHeight,v=this.sizeInfo.actionsHeight,g=this.sizeInfo.doneButtonHeight,i=this.sizeInfo.dividerHeight,b=this.sizeInfo.menuPadding,$=this.sizeInfo.menuExtras,n=this.options.hideDisabled?".disabled":"";if(o(),this.options.header&&c.css("padding-top",0),"auto"===this.options.size){var s=function(){function e(t,i){return function(e){return i?e.classList?e.classList.contains(t):y(e).hasClass(t):!(e.classList?e.classList.contains(t):y(e).hasClass(t))}}var t,i=h.$menuInner[0].getElementsByTagName("li"),n=Array.prototype.filter?Array.prototype.filter.call(i,e("hidden",!1)):h.$lis.not(".hidden"),s=Array.prototype.filter?Array.prototype.filter.call(n,e("dropdown-header",!0)):n.filter(".dropdown-header");o(),a=d-$,l=h.options.container?(c.data("height")||c.data("height",c.height()),c.data("height")):c.height(),h.options.dropupAuto&&h.$newElement.toggleClass("dropup",d<r&&a-$<l),h.$newElement.hasClass("dropup")&&(a=r-$),t=3<n.length+s.length?3*u+$-2:0,c.css({"max-height":a+"px",overflow:"hidden","min-height":t+m+f+v+g+"px"}),p.css({"max-height":a-m-f-v-g-b+"px","overflow-y":"auto","min-height":Math.max(t-b,0)+"px"})};s(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",s),e.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",s)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(n).length>this.options.size){var x=this.$lis.not(".divider").not(n).children().slice(0,this.options.size).last().parent().index(),w=this.$lis.slice(0,x+1).filter(".divider").length;a=u*this.options.size+w*i+b,l=h.options.container?(c.data("height")||c.data("height",c.height()),c.data("height")):c.height(),h.options.dropupAuto&&this.$newElement.toggleClass("dropup",d<r&&a-$<l),c.css({"max-height":a+m+f+v+g+"px",overflow:"hidden","min-height":""}),p.css({"max-height":a-b+"px","overflow-y":"auto","min-height":""})}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var e=this.$menu.parent().clone().appendTo("body"),t=this.options.container?this.$newElement.clone().appendTo("body"):e,i=e.children(".dropdown-menu").outerWidth(),n=t.css("width","auto").children("button").outerWidth();e.remove(),t.remove(),this.$newElement.css("width",Math.max(i,n)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){function e(e){s.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",e.hasClass("dropup")),t=e.offset(),i=e.hasClass("dropup")?0:e[0].offsetHeight,s.css({top:t.top+i,left:t.left,width:e[0].offsetWidth,position:"absolute"})}var t,i,n=this,s=y("<div />");this.$newElement.on("click",function(){n.isDisabled()||(e(y(this)),s.appendTo(n.options.container),s.toggleClass("open",!y(this).hasClass("open")),s.append(n.$menu))}),y(window).on("resize scroll",function(){e(n.$newElement)}),this.$element.on("hide.bs.select",function(){n.$menu.data("height",n.$menu.height()),s.detach()})},setSelected:function(e,t,i){if(!i)i=this.findLis().eq(this.liObj[e]);i.toggleClass("selected",t)},setDisabled:function(e,t,i){if(!i)i=this.findLis().eq(this.liObj[e]);t?i.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1):i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var e=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled")),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!e.isDisabled()})},tabIndex:function(){this.$element.is("[tabindex]")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex")))},clickListener:function(){var b=this,t=y(document);this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(e){e.stopPropagation()}),t.data("spaceSelect",!1),this.$button.on("keyup",function(e){/(32)/.test(e.keyCode.toString(10))&&t.data("spaceSelect")&&(e.preventDefault(),t.data("spaceSelect",!1))}),this.$newElement.on("click",function(){b.setSize(),b.$element.on("shown.bs.select",function(){if(b.options.liveSearch||b.multiple){if(!b.multiple){var e=b.liObj[b.$element[0].selectedIndex];if("number"!=typeof e)return;var t=b.$lis.eq(e)[0].offsetTop-b.$menuInner[0].offsetTop;t=t-b.$menuInner[0].offsetHeight/2+b.sizeInfo.liHeight/2,b.$menuInner[0].scrollTop=t}}else b.$menu.find(".selected a").focus()})}),this.$menu.on("click","li a",function(e){var t=y(this),i=t.parent().data("originalIndex"),n=b.$element.val(),s=b.$element.prop("selectedIndex");if(b.multiple&&e.stopPropagation(),e.preventDefault(),!b.isDisabled()&&!t.parent().hasClass("disabled")){var o=b.$element.find("option"),a=o.eq(i),l=a.prop("selected"),r=a.parent("optgroup"),d=b.options.maxOptions,h=r.data("maxOptions")||!1;if(b.multiple){if(a.prop("selected",!l),b.setSelected(i,!l),t.blur(),!1!==d||!1!==h){var c=d<o.filter(":selected").length,p=h<r.find("option:selected").length;if(d&&c||h&&p)if(d&&1==d)o.prop("selected",!1),a.prop("selected",!0),b.$menu.find(".selected").removeClass("selected"),b.setSelected(i,!0);else if(h&&1==h){r.find("option:selected").prop("selected",!1),a.prop("selected",!0);var u=t.parent().data("optgroup");b.$menu.find('[data-optgroup="'+u+'"]').removeClass("selected"),b.setSelected(i,!0)}else{var m="function"==typeof b.options.maxOptionsText?b.options.maxOptionsText(d,h):b.options.maxOptionsText,f=m[0].replace("{n}",d),v=m[1].replace("{n}",h),g=y('<div class="notify"></div>');m[2]&&(f=f.replace("{var}",m[2][1<d?0:1]),v=v.replace("{var}",m[2][1<h?0:1])),a.prop("selected",!1),b.$menu.append(g),d&&c&&(g.append(y("<div>"+f+"</div>")),b.$element.trigger("maxReached.bs.select")),h&&p&&(g.append(y("<div>"+v+"</div>")),b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(i,!1)},10),g.delay(750).fadeOut(300,function(){y(this).remove()})}}}else o.prop("selected",!1),a.prop("selected",!0),b.$menu.find(".selected").removeClass("selected"),b.setSelected(i,!0);b.multiple?b.options.liveSearch&&b.$searchbox.focus():b.$button.focus(),(n!=b.$element.val()&&b.multiple||s!=b.$element.prop("selectedIndex")&&!b.multiple)&&(b.$element.change(),b.$element.trigger("changed.bs.select",[i,a.prop("selected"),l]))}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(e){e.currentTarget==this&&(e.preventDefault(),e.stopPropagation(),b.options.liveSearch&&!y(e.target).hasClass("close")?b.$searchbox.focus():b.$button.focus())}),this.$menu.on("click","li.divider, li.dropdown-header",function(e){e.preventDefault(),e.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){b.$button.click()}),this.$searchbox.on("click",function(e){e.stopPropagation()}),this.$menu.on("click",".actions-btn",function(e){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),e.preventDefault(),e.stopPropagation(),y(this).hasClass("bs-select-all")?b.selectAll():b.deselectAll(),b.$element.change()}),this.$element.change(function(){b.render(!1)})},liveSearchListener:function(){var n=this,t=y('<li class="no-results"></li>');this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){n.$menuInner.find(".active").removeClass("active"),n.$searchbox.val()&&(n.$searchbox.val(""),n.$lis.not(".is-hidden").removeClass("hidden"),t.parent().length&&t.remove()),n.multiple||n.$menuInner.find(".selected").addClass("active"),setTimeout(function(){n.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(e){e.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(n.$searchbox.val()){var e=n.$lis.not(".is-hidden").removeClass("hidden").children("a");(e=n.options.liveSearchNormalize?e.not(":a"+n._searchStyle()+"("+$(n.$searchbox.val())+")"):e.not(":"+n._searchStyle()+"("+n.$searchbox.val()+")")).parent().addClass("hidden"),n.$lis.filter(".dropdown-header").each(function(){var e=y(this),t=e.data("optgroup");0===n.$lis.filter("[data-optgroup="+t+"]").not(e).not(".hidden").length&&(e.addClass("hidden"),n.$lis.filter("[data-optgroup="+t+"div]").addClass("hidden"))});var i=n.$lis.not(".hidden");i.each(function(e){var t=y(this);t.hasClass("divider")&&(t.index()===i.eq(0).index()||t.index()===i.last().index()||i.eq(e+1).hasClass("divider"))&&t.addClass("hidden")}),n.$lis.not(".hidden, .no-results").length?t.parent().length&&t.remove():(t.parent().length&&t.remove(),t.html(n.options.noneResultsText.replace("{0}",'"'+h(n.$searchbox.val())+'"')).show(),n.$menuInner.append(t))}else n.$lis.not(".is-hidden").removeClass("hidden"),t.parent().length&&t.remove();n.$lis.filter(".active").removeClass("active"),n.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(),y(this).focus()})},_searchStyle:function(){var e="icontains";switch(this.options.liveSearchStyle){case"begins":case"startsWith":e="ibegins"}return e},val:function(e){return void 0!==e?(this.$element.val(e),this.render(),this.$element):this.$element.val()},selectAll:function(){this.findLis(),this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected",!0),this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").addClass("selected"),this.render(!1)},deselectAll:function(){this.findLis(),this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected",!1),this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").removeClass("selected"),this.render(!1)},keydown:function(e){var t,i,n,s,o,a,l,r,d,h=y(this),c=h.is("input")?h.parent().parent():h.parent(),p=c.data("this"),u=":not(.disabled, .hidden, .dropdown-header, .divider)",m={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(p.options.liveSearch&&(c=h.parent().parent()),p.options.container&&(c=p.$menu),t=y("[role=menu] li a",c),!(d=p.$menu.parent().hasClass("open"))&&(48<=e.keyCode&&e.keyCode<=57||65<=event.keyCode&&event.keyCode<=90)&&(p.options.container?p.$newElement.trigger("click"):(p.setSize(),p.$menu.parent().addClass("open"),d=!0),p.$searchbox.focus()),p.options.liveSearch&&(/(^9$|27)/.test(e.keyCode.toString(10))&&d&&0===p.$menu.find(".active").length&&(e.preventDefault(),p.$menu.parent().removeClass("open"),p.options.container&&p.$newElement.removeClass("open"),p.$button.focus()),t=y("[role=menu] li:not(.disabled, .hidden, .dropdown-header, .divider)",c),h.val()||/(38|40)/.test(e.keyCode.toString(10))||0===t.filter(".active").length&&(t=p.$newElement.find("li"),t=p.options.liveSearchNormalize?t.filter(":a"+p._searchStyle()+"("+$(m[e.keyCode])+")"):t.filter(":"+p._searchStyle()+"("+m[e.keyCode]+")"))),t.length){if(/(38|40)/.test(e.keyCode.toString(10)))i=t.index(t.filter(":focus")),s=t.parent(u).first().data("originalIndex"),o=t.parent(u).last().data("originalIndex"),n=t.eq(i).parent().nextAll(u).eq(0).data("originalIndex"),a=t.eq(i).parent().prevAll(u).eq(0).data("originalIndex"),l=t.eq(n).parent().prevAll(u).eq(0).data("originalIndex"),p.options.liveSearch&&(t.each(function(e){y(this).hasClass("disabled")||y(this).data("index",e)}),i=t.index(t.filter(".active")),s=t.first().data("index"),o=t.last().data("index"),n=t.eq(i).nextAll().eq(0).data("index"),a=t.eq(i).prevAll().eq(0).data("index"),l=t.eq(n).prevAll().eq(0).data("index")),r=h.data("prevIndex"),38==e.keyCode?(p.options.liveSearch&&(i-=1),i!=l&&a<i&&(i=a),i<s&&(i=s),i==r&&(i=o)):40==e.keyCode&&(p.options.liveSearch&&(i+=1),-1==i&&(i=0),i!=l&&i<n&&(i=n),o<i&&(i=o),i==r&&(i=s)),h.data("prevIndex",i),p.options.liveSearch?(e.preventDefault(),h.hasClass("dropdown-toggle")||(t.removeClass("active").eq(i).addClass("active").children("a").focus(),h.focus())):t.eq(i).focus();else if(!h.is("input")){var f,v=[];t.each(function(){y(this).parent().hasClass("disabled")||y.trim(y(this).text().toLowerCase()).substring(0,1)==m[e.keyCode]&&v.push(y(this).parent().index())}),f=y(document).data("keycount"),f++,y(document).data("keycount",f),y.trim(y(":focus").text().toLowerCase()).substring(0,1)!=m[e.keyCode]?(f=1,y(document).data("keycount",f)):f>=v.length&&(y(document).data("keycount",0),f>v.length&&(f=1)),t.eq(v[f-1]).focus()}if((/(13|32)/.test(e.keyCode.toString(10))||/(^9$)/.test(e.keyCode.toString(10))&&p.options.selectOnTab)&&d){if(/(32)/.test(e.keyCode.toString(10))||e.preventDefault(),p.options.liveSearch)/(32)/.test(e.keyCode.toString(10))||(p.$menu.find(".active a").click(),h.focus());else{var g=y(":focus");g.click(),g.focus(),e.preventDefault(),y(document).data("spaceSelect",!0)}y(document).data("keycount",0)}(/(^9$|27)/.test(e.keyCode.toString(10))&&d&&(p.multiple||p.options.liveSearch)||/(27)/.test(e.keyCode.toString(10))&&!d)&&(p.$menu.parent().removeClass("open"),p.options.container&&p.$newElement.removeClass("open"),p.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement),this.options.container&&this.$menu.hide()},refresh:function(){this.$lis=null,this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()}};var o=y.fn.selectpicker;y.fn.selectpicker=s,y.fn.selectpicker.Constructor=c,y.fn.selectpicker.noConflict=function(){return y.fn.selectpicker=o,this},y(document).data("keycount",0).on("keydown",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',c.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',function(e){e.stopPropagation()}),y(window).on("load.bs.select.data-api",function(){y(".selectpicker").each(function(){var e=y(this);s.call(e,e.data())})})}(jQuery)});
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(h){h.extend(h.fn,{validate:function(t){if(this.length){var s=h.data(this[0],"validator");return s||(this.attr("novalidate","novalidate"),s=new h.validator(t,this[0]),h.data(this[0],"validator",s),s.settings.onsubmit&&(this.on("click.validate",":submit",function(t){s.settings.submitHandler&&(s.submitButton=t.target),h(this).hasClass("cancel")&&(s.cancelSubmit=!0),void 0!==h(this).attr("formnovalidate")&&(s.cancelSubmit=!0)}),this.on("submit.validate",function(i){function t(){var t,e;return!s.settings.submitHandler||(s.submitButton&&(t=h("<input type='hidden'/>").attr("name",s.submitButton.name).val(h(s.submitButton).val()).appendTo(s.currentForm)),e=s.settings.submitHandler.call(s,s.currentForm,i),s.submitButton&&t.remove(),void 0!==e&&e)}return s.settings.debug&&i.preventDefault(),s.cancelSubmit?(s.cancelSubmit=!1,t()):s.form()?s.pendingRequest?!(s.formSubmitted=!0):t():(s.focusInvalid(),!1)})),s)}t&&t.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing.")},valid:function(){var t,e,i;return h(this[0]).is("form")?t=this.validate().form():(i=[],t=!0,e=h(this[0].form).validate(),this.each(function(){t=e.element(this)&&t,i=i.concat(e.errorList)}),e.errorList=i),t},rules:function(t,e){var i,s,r,n,a,o,l=this[0];if(t)switch(s=(i=h.data(l.form,"validator").settings).rules,r=h.validator.staticRules(l),t){case"add":h.extend(r,h.validator.normalizeRule(e)),delete r.messages,s[l.name]=r,e.messages&&(i.messages[l.name]=h.extend(i.messages[l.name],e.messages));break;case"remove":return e?(o={},h.each(e.split(/\s/),function(t,e){o[e]=r[e],delete r[e],"required"===e&&h(l).removeAttr("aria-required")}),o):(delete s[l.name],r)}return(n=h.validator.normalizeRules(h.extend({},h.validator.classRules(l),h.validator.attributeRules(l),h.validator.dataRules(l),h.validator.staticRules(l)),l)).required&&(a=n.required,delete n.required,n=h.extend({required:a},n),h(l).attr("aria-required","true")),n.remote&&(a=n.remote,delete n.remote,n=h.extend(n,{remote:a})),n}}),h.extend(h.expr[":"],{blank:function(t){return!h.trim(""+h(t).val())},filled:function(t){return!!h.trim(""+h(t).val())},unchecked:function(t){return!h(t).prop("checked")}}),h.validator=function(t,e){this.settings=h.extend(!0,{},h.validator.defaults,t),this.currentForm=e,this.init()},h.validator.format=function(i,t){return 1===arguments.length?function(){var t=h.makeArray(arguments);return t.unshift(i),h.validator.format.apply(this,t)}:(2<arguments.length&&t.constructor!==Array&&(t=h.makeArray(arguments).slice(1)),t.constructor!==Array&&(t=[t]),h.each(t,function(t,e){i=i.replace(new RegExp("\\{"+t+"\\}","g"),function(){return e})}),i)},h.extend(h.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:h([]),errorLabelContainer:h([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(t)))},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){9===e.which&&""===this.elementValue(t)||-1!==h.inArray(e.keyCode,[16,17,18,20,35,36,37,38,39,40,45,144,225])||(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(t,e,i){"radio"===t.type?this.findByName(t.name).addClass(e).removeClass(i):h(t).addClass(e).removeClass(i)},unhighlight:function(t,e,i){"radio"===t.type?this.findByName(t.name).removeClass(e).addClass(i):h(t).removeClass(e).addClass(i)}},setDefaults:function(t){h.extend(h.validator.defaults,t)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:h.validator.format("Please enter no more than {0} characters."),minlength:h.validator.format("Please enter at least {0} characters."),rangelength:h.validator.format("Please enter a value between {0} and {1} characters long."),range:h.validator.format("Please enter a value between {0} and {1}."),max:h.validator.format("Please enter a value less than or equal to {0}."),min:h.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){this.labelContainer=h(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||h(this.currentForm),this.containers=h(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i,s=this.groups={};function t(t){var e=h.data(this.form,"validator"),i="on"+t.type.replace(/^validate/,""),s=e.settings;s[i]&&!h(this).is(s.ignore)&&s[i].call(e,this,t)}h.each(this.settings.groups,function(i,t){"string"==typeof t&&(t=t.split(/\s/)),h.each(t,function(t,e){s[e]=i})}),i=this.settings.rules,h.each(i,function(t,e){i[t]=h.validator.normalizeRule(e)}),h(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",t).on("click.validate","select, option, [type='radio'], [type='checkbox']",t),this.settings.invalidHandler&&h(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),h(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),h.extend(this.submitted,this.errorMap),this.invalid=h.extend({},this.errorMap),this.valid()||h(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(t){var e=this.clean(t),i=this.validationTargetFor(e),s=!0;return void 0===(this.lastElement=i)?delete this.invalid[e.name]:(this.prepareElement(i),this.currentElements=h(i),(s=!1!==this.check(i))?delete this.invalid[i.name]:this.invalid[i.name]=!0),h(t).attr("aria-invalid",!s),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),s},showErrors:function(e){if(e){for(var t in h.extend(this.errorMap,e),this.errorList=[],e)this.errorList.push({message:e[t],element:this.findByName(t)[0]});this.successList=h.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){h.fn.resetForm&&h(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors();var t,e=this.elements().removeData("previousValue").removeAttr("aria-invalid");if(this.settings.unhighlight)for(t=0;e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,"");else e.removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e,i=0;for(e in t)i++;return i},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(t){t.not(this.containers).text(""),this.addWrapper(t).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{h(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(t){}},findLastActive:function(){var e=this.lastActive;return e&&1===h.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var t=this,e={};return h(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){return!this.name&&t.settings.debug&&window.console&&console.error("%o has no name assigned",this),!(this.name in e||!t.objectLength(h(this).rules()))&&(e[this.name]=!0)})},clean:function(t){return h(t)[0]},errors:function(){var t=this.settings.errorClass.split(" ").join(".");return h(this.settings.errorElement+"."+t,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=h([]),this.toHide=h([]),this.currentElements=h([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(t){var e,i=h(t),s=t.type;return"radio"===s||"checkbox"===s?this.findByName(t.name).filter(":checked").val():"number"===s&&void 0!==t.validity?!t.validity.badInput&&i.val():"string"==typeof(e=i.val())?e.replace(/\r/g,""):e},check:function(e){e=this.validationTargetFor(this.clean(e));var t,i,s,r=h(e).rules(),n=h.map(r,function(t,e){return e}).length,a=!1,o=this.elementValue(e);for(i in r){s={method:i,parameters:r[i]};try{if("dependency-mismatch"===(t=h.validator.methods[i].call(this,o,e,s.parameters))&&1===n){a=!0;continue}if(a=!1,"pending"===t)return void(this.toHide=this.toHide.not(this.errorsFor(e)));if(!t)return this.formatAndAdd(e,s),!1}catch(t){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+s.method+"' method.",t),t instanceof TypeError&&(t.message+=".  Exception occurred when checking element "+e.id+", check the '"+s.method+"' method."),t}}if(!a)return this.objectLength(r)&&this.successList.push(e),!0},customDataMessage:function(t,e){return h(t).data("msg"+e.charAt(0).toUpperCase()+e.substring(1).toLowerCase())||h(t).data("msg")},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]},defaultMessage:function(t,e){return this.findDefined(this.customMessage(t.name,e),this.customDataMessage(t,e),!this.settings.ignoreTitle&&t.title||void 0,h.validator.messages[e],"<strong>Warning: No message defined for "+t.name+"</strong>")},formatAndAdd:function(t,e){var i=this.defaultMessage(t,e.method),s=/\$?\{(\d+)\}/g;"function"==typeof i?i=i.call(this,e.parameters,t):s.test(i)&&(i=h.validator.format(i.replace(s,"{$1}"),e.parameters)),this.errorList.push({message:i,element:t,method:e.method}),this.errorMap[t.name]=i,this.submitted[t.name]=i},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e,i;for(t=0;this.errorList[t];t++)i=this.errorList[t],this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return h(this.errorList).map(function(){return this.element})},showLabel:function(t,e){var i,s,r,n=this.errorsFor(t),a=this.idOrName(t),o=h(t).attr("aria-describedby");n.length?(n.removeClass(this.settings.validClass).addClass(this.settings.errorClass),n.html(e)):(i=n=h("<"+this.settings.errorElement+">").attr("id",a+"-error").addClass(this.settings.errorClass).html(e||""),this.settings.wrapper&&(i=n.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(i):this.settings.errorPlacement?this.settings.errorPlacement(i,h(t)):i.insertAfter(t),n.is("label")?n.attr("for",a):0===n.parents("label[for='"+a+"']").length&&(r=n.attr("id").replace(/(:|\.|\[|\]|\$)/g,"\\$1"),o?o.match(new RegExp("\\b"+r+"\\b"))||(o+=" "+r):o=r,h(t).attr("aria-describedby",o),(s=this.groups[t.name])&&h.each(this.groups,function(t,e){e===s&&h("[name='"+t+"']",this.currentForm).attr("aria-describedby",n.attr("id"))}))),!e&&this.settings.success&&(n.text(""),"string"==typeof this.settings.success?n.addClass(this.settings.success):this.settings.success(n,t)),this.toShow=this.toShow.add(n)},errorsFor:function(t){var e=this.idOrName(t),i=h(t).attr("aria-describedby"),s="label[for='"+e+"'], label[for='"+e+"'] *";return i&&(s=s+", #"+i.replace(/\s+/g,", #")),this.errors().filter(s)},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name)),h(t).not(this.settings.ignore)[0]},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(t){return h(this.currentForm).find("[name='"+t+"']")},getLength:function(t,e){switch(e.nodeName.toLowerCase()){case"select":return h("option:selected",e).length;case"input":if(this.checkable(e))return this.findByName(e.name).filter(":checked").length}return t.length},depend:function(t,e){return!this.dependTypes[typeof t]||this.dependTypes[typeof t](t,e)},dependTypes:{boolean:function(t){return t},string:function(t,e){return!!h(t,e.form).length},function:function(t,e){return t(e)}},optional:function(t){var e=this.elementValue(t);return!h.validator.methods.required.call(this,e,t)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(t,e){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[t.name],e&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(h(this.currentForm).submit(),this.formSubmitted=!1):!e&&0===this.pendingRequest&&this.formSubmitted&&(h(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(t){return h.data(t,"previousValue")||h.data(t,"previousValue",{old:null,valid:!0,message:this.defaultMessage(t,"remote")})},destroy:function(){this.resetForm(),h(this.currentForm).off(".validate").removeData("validator")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(t,e){t.constructor===String?this.classRuleSettings[t]=e:h.extend(this.classRuleSettings,t)},classRules:function(t){var e={},i=h(t).attr("class");return i&&h.each(i.split(" "),function(){this in h.validator.classRuleSettings&&h.extend(e,h.validator.classRuleSettings[this])}),e},normalizeAttributeRule:function(t,e,i,s){/min|max/.test(i)&&(null===e||/number|range|text/.test(e))&&(s=Number(s),isNaN(s)&&(s=void 0)),s||0===s?t[i]=s:e===i&&"range"!==e&&(t[i]=!0)},attributeRules:function(t){var e,i,s={},r=h(t),n=t.getAttribute("type");for(e in h.validator.methods)i="required"===e?(""===(i=t.getAttribute(e))&&(i=!0),!!i):r.attr(e),this.normalizeAttributeRule(s,n,e,i);return s.maxlength&&/-1|2147483647|524288/.test(s.maxlength)&&delete s.maxlength,s},dataRules:function(t){var e,i,s={},r=h(t),n=t.getAttribute("type");for(e in h.validator.methods)i=r.data("rule"+e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()),this.normalizeAttributeRule(s,n,e,i);return s},staticRules:function(t){var e={},i=h.data(t.form,"validator");return i.settings.rules&&(e=h.validator.normalizeRule(i.settings.rules[t.name])||{}),e},normalizeRules:function(s,r){return h.each(s,function(t,e){if(!1!==e){if(e.param||e.depends){var i=!0;switch(typeof e.depends){case"string":i=!!h(e.depends,r.form).length;break;case"function":i=e.depends.call(r,r)}i?s[t]=void 0===e.param||e.param:delete s[t]}}else delete s[t]}),h.each(s,function(t,e){s[t]=h.isFunction(e)?e(r):e}),h.each(["minlength","maxlength"],function(){s[this]&&(s[this]=Number(s[this]))}),h.each(["rangelength","range"],function(){var t;s[this]&&(h.isArray(s[this])?s[this]=[Number(s[this][0]),Number(s[this][1])]:"string"==typeof s[this]&&(t=s[this].replace(/[\[\]]/g,"").split(/[\s,]+/),s[this]=[Number(t[0]),Number(t[1])]))}),h.validator.autoCreateRanges&&(null!=s.min&&null!=s.max&&(s.range=[s.min,s.max],delete s.min,delete s.max),null!=s.minlength&&null!=s.maxlength&&(s.rangelength=[s.minlength,s.maxlength],delete s.minlength,delete s.maxlength)),s},normalizeRule:function(t){if("string"==typeof t){var e={};h.each(t.split(/\s/),function(){e[this]=!0}),t=e}return t},addMethod:function(t,e,i){h.validator.methods[t]=e,h.validator.messages[t]=void 0!==i?i:h.validator.messages[t],e.length<3&&h.validator.addClassRules(t,h.validator.normalizeRule(t))},methods:{required:function(t,e,i){if(!this.depend(i,e))return"dependency-mismatch";if("select"!==e.nodeName.toLowerCase())return this.checkable(e)?0<this.getLength(t,e):0<t.length;var s=h(e).val();return s&&0<s.length},email:function(t,e){return this.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)},url:function(t,e){return this.optional(e)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(new Date(t).toString())},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},number:function(t,e){return this.optional(e)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i,s,r=0,n=0,a=!1;if((t=t.replace(/\D/g,"")).length<13||19<t.length)return!1;for(i=t.length-1;0<=i;i--)s=t.charAt(i),n=parseInt(s,10),a&&9<(n*=2)&&(n-=9),r+=n,a=!a;return r%10==0},minlength:function(t,e,i){var s=h.isArray(t)?t.length:this.getLength(t,e);return this.optional(e)||i<=s},maxlength:function(t,e,i){var s=h.isArray(t)?t.length:this.getLength(t,e);return this.optional(e)||s<=i},rangelength:function(t,e,i){var s=h.isArray(t)?t.length:this.getLength(t,e);return this.optional(e)||s>=i[0]&&s<=i[1]},min:function(t,e,i){return this.optional(e)||i<=t},max:function(t,e,i){return this.optional(e)||t<=i},range:function(t,e,i){return this.optional(e)||t>=i[0]&&t<=i[1]},equalTo:function(t,e,i){var s=h(i);return this.settings.onfocusout&&s.off(".validate-equalTo").on("blur.validate-equalTo",function(){h(e).valid()}),t===s.val()},remote:function(n,a,t){if(this.optional(a))return"dependency-mismatch";var o,e,l=this.previousValue(a);return this.settings.messages[a.name]||(this.settings.messages[a.name]={}),l.originalMessage=this.settings.messages[a.name].remote,this.settings.messages[a.name].remote=l.message,t="string"==typeof t&&{url:t}||t,l.old===n?l.valid:(l.old=n,(o=this).startRequest(a),(e={})[a.name]=n,h.ajax(h.extend(!0,{mode:"abort",port:"validate"+a.name,dataType:"json",data:e,context:o.currentForm,success:function(t){var e,i,s,r=!0===t||"true"===t;o.settings.messages[a.name].remote=l.originalMessage,r?(s=o.formSubmitted,o.prepareElement(a),o.formSubmitted=s,o.successList.push(a),delete o.invalid[a.name],o.showErrors()):(e={},i=t||o.defaultMessage(a,"remote"),e[a.name]=l.message=h.isFunction(i)?i(n):i,o.invalid[a.name]=!0,o.showErrors(e)),l.valid=r,o.stopRequest(a,r)}},t)),"pending")}}});var s,r={};h.ajaxPrefilter?h.ajaxPrefilter(function(t,e,i){var s=t.port;"abort"===t.mode&&(r[s]&&r[s].abort(),r[s]=i)}):(s=h.ajax,h.ajax=function(t){var e=("mode"in t?t:h.ajaxSettings).mode,i=("port"in t?t:h.ajaxSettings).port;return"abort"===e?(r[i]&&r[i].abort(),r[i]=s.apply(this,arguments),r[i]):s.apply(this,arguments)})});
!function(c,l,g,b){"use strict";if(c.console=c.console||{info:function(t){}},g)if(g.fn.fancybox)console.info("fancyBox already initialized");else{var t,e,n,o,i={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:g.noop,beforeLoad:g.noop,afterLoad:g.noop,beforeShow:g.noop,afterShow:g.noop,beforeClose:g.noop,afterClose:g.noop,onActivate:g.noop,onDeactivate:g.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},a=g(c),s=g(l),r=0,f=c.requestAnimationFrame||c.webkitRequestAnimationFrame||c.mozRequestAnimationFrame||c.oRequestAnimationFrame||function(t){return c.setTimeout(t,1e3/60)},d=c.cancelAnimationFrame||c.webkitCancelAnimationFrame||c.mozCancelAnimationFrame||c.oCancelAnimationFrame||function(t){c.clearTimeout(t)},u=function(){var t,e=l.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in n)if(e.style[t]!==b)return n[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var n=g.extend(!0,{},t,e);return g.each(e,function(t,e){g.isArray(e)&&(n[t]=e)}),n},m=function(t,e,n){var o=this;o.opts=h({index:n},g.fancybox.defaults),g.isPlainObject(e)&&(o.opts=h(o.opts,e)),g.fancybox.isMobile&&(o.opts=h(o.opts,o.opts.mobile)),o.id=o.opts.id||++r,o.currIndex=parseInt(o.opts.index,10)||0,o.prevIndex=null,o.prevPos=null,o.currPos=0,o.firstRun=!0,o.group=[],o.slides={},o.addContent(t),o.group.length&&o.init()};g.extend(m.prototype,{init:function(){var e,n,o=this,i=o.group[o.currIndex].opts;i.closeExisting&&g.fancybox.close(!0),g("body").addClass("fancybox-active"),!g.fancybox.getInstance()&&!1!==i.hideScrollbar&&!g.fancybox.isMobile&&l.body.scrollHeight>c.innerHeight&&(g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(c.innerWidth-l.documentElement.clientWidth)+"px;}</style>"),g("body").addClass("compensate-for-scrollbar")),n="",g.each(i.buttons,function(t,e){n+=i.btnTpl[e]||""}),e=g(o.translate(o,i.baseTpl.replace("{{buttons}}",n).replace("{{arrows}}",i.btnTpl.arrowLeft+i.btnTpl.arrowRight))).attr("id","fancybox-container-"+o.id).addClass(i.baseClass).data("FancyBox",o).appendTo(i.parentEl),o.$refs={container:e},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){o.$refs[t]=e.find(".fancybox-"+t)}),o.trigger("onInit"),o.activate(),o.jumpTo(o.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return n[e]===b?t:n[e]})},addContent:function(t){var e,l=this,n=g.makeArray(t);g.each(n,function(t,e){var n,o,i,a,s,r={},c={};g.isPlainObject(e)?c=(r=e).opts||e:"object"===g.type(e)&&g(e).length?(c=(n=g(e)).data()||{},(c=g.extend(!0,{},c,c.options)).$orig=n,r.src=l.opts.src||c.src||n.attr("href"),r.type||r.src||(r.type="inline",r.src=e)):r={type:"html",src:e+""},r.opts=g.extend(!0,{},l.opts,c),g.isArray(c.buttons)&&(r.opts.buttons=c.buttons),g.fancybox.isMobile&&r.opts.mobile&&(r.opts=h(r.opts,r.opts.mobile)),o=r.type||r.opts.type,a=r.src||"",!o&&a&&((i=a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(o="video",r.opts.video.format||(r.opts.video.format="video/"+("ogv"===i[1]?"ogg":i[1]))):a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?o="image":a.match(/\.(pdf)((\?|#).*)?$/i)?(o="iframe",r=g.extend(!0,r,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===a.charAt(0)&&(o="inline")),o?r.type=o:l.trigger("objectNeedsType",r),r.contentType||(r.contentType=-1<g.inArray(r.type,["html","inline","ajax"])?"html":r.type),r.index=l.group.length,"auto"==r.opts.smallBtn&&(r.opts.smallBtn=-1<g.inArray(r.type,["html","inline","ajax"])),"auto"===r.opts.toolbar&&(r.opts.toolbar=!r.opts.smallBtn),r.$thumb=r.opts.$thumb||null,r.opts.$trigger&&r.index===l.opts.index&&(r.$thumb=r.opts.$trigger.find("img:first"),r.$thumb.length&&(r.opts.$orig=r.opts.$trigger)),r.$thumb&&r.$thumb.length||!r.opts.$orig||(r.$thumb=r.opts.$orig.find("img:first")),r.$thumb&&!r.$thumb.length&&(r.$thumb=null),r.thumb=r.opts.thumb||(r.$thumb?r.$thumb[0].src:null),"function"===g.type(r.opts.caption)&&(r.opts.caption=r.opts.caption.apply(e,[l,r])),"function"===g.type(l.opts.caption)&&(r.opts.caption=l.opts.caption.apply(e,[l,r])),r.opts.caption instanceof g||(r.opts.caption=r.opts.caption===b?"":r.opts.caption+""),"ajax"===r.type&&1<(s=a.split(/\s+/,2)).length&&(r.src=s.shift(),r.opts.filter=s.shift()),r.opts.modal&&(r.opts=g.extend(!0,r.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),l.group.push(r)}),Object.keys(l.slides).length&&(l.updateControls(),(e=l.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}).on("click.fb","[data-fancybox-zoom]",function(t){o[o.isScaledDown()?"scaleToActual":"scaleToFit"]()}),a.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(o.requestId&&d(o.requestId),o.requestId=f(function(){o.update(t)})):(o.current&&"iframe"===o.current.type&&o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update(t)},g.fancybox.isMobile?600:250))}),s.on("keydown.fb",function(t){var e=(g.fancybox?g.fancybox.getInstance():null).current,n=t.keyCode||t.which;if(9!=n){if(!(!e.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||g(t.target).is("input,textarea,video,audio,select")))return 8===n||27===n?(t.preventDefault(),void o.close(t)):37===n||38===n?(t.preventDefault(),void o.previous()):39===n||40===n?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,n)}else e.opts.trapFocus&&o.focus(t)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,s.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=c.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&!o.isDragging&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){a.off("orientationchange.fb resize.fb"),s.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),this.idleInterval&&(c.clearInterval(this.idleInterval),this.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,o){var e,n,i,a,s,r,c,l,d,u=this,f=u.group.length;if(!(u.isDragging||u.isClosing||u.isAnimating&&u.firstRun)){if(t=parseInt(t,10),!(i=u.current?u.current.opts.loop:u.opts.loop)&&(t<0||f<=t))return!1;if(e=u.firstRun=!Object.keys(u.slides).length,s=u.current,u.prevIndex=u.currIndex,u.prevPos=u.currPos,a=u.createSlide(t),1<f&&((i||a.index<f-1)&&u.createSlide(t+1),(i||0<a.index)&&u.createSlide(t-1)),u.current=a,u.currIndex=a.index,u.currPos=a.pos,u.trigger("beforeShow",e),u.updateControls(),a.forcedDuration=b,g.isNumeric(o)?a.forcedDuration=o:o=a.opts[e?"animationDuration":"transitionDuration"],o=parseInt(o,10),n=u.isMoved(a),a.$slide.addClass("fancybox-slide--current"),e)return a.opts.animationEffect&&o&&u.$refs.container.css("transition-duration",o+"ms"),u.$refs.container.addClass("fancybox-is-open").trigger("focus"),u.loadSlide(a),void u.preload("image");r=g.fancybox.getTranslate(s.$slide),c=g.fancybox.getTranslate(u.$refs.stage),g.each(u.slides,function(t,e){g.fancybox.stop(e.$slide,!0)}),s.pos!==a.pos&&(s.isComplete=!1),s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),n?(d=r.left-(s.pos*r.width+s.pos*s.opts.gutter),g.each(u.slides,function(t,e){e.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var n=e.pos*r.width+e.pos*e.opts.gutter;g.fancybox.setTranslate(e.$slide,{top:0,left:n-c.left+d}),e.pos!==a.pos&&e.$slide.addClass("fancybox-slide--"+(e.pos>a.pos?"next":"previous")),p(e.$slide),g.fancybox.animate(e.$slide,{top:0,left:(e.pos-a.pos)*r.width+(e.pos-a.pos)*e.opts.gutter},o,function(){e.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),e.pos===u.currPos&&u.complete()})})):o&&a.opts.transitionEffect&&(l="fancybox-animated fancybox-fx-"+a.opts.transitionEffect,s.$slide.addClass("fancybox-slide--"+(s.pos>a.pos?"next":"previous")),g.fancybox.animate(s.$slide,l,o,function(){s.$slide.removeClass(l).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),a.isLoaded?u.revealContent(a):u.loadSlide(a),u.preload("image")}},createSlide:function(t){var e,n,o=this;return n=(n=t%o.group.length)<0?o.group.length+n:n,!o.slides[t]&&o.group[n]&&(e=g('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage),o.slides[t]=g.extend(!0,{},o.group[n],{pos:t,$slide:e,isLoaded:!1}),o.updateSlide(o.slides[t])),o.slides[t]},scaleToActual:function(t,e,n){var o,i,a,s,r,c=this,l=c.current,d=l.$content,u=g.fancybox.getTranslate(l.$slide).width,f=g.fancybox.getTranslate(l.$slide).height,p=l.width,h=l.height;c.isAnimating||c.isMoved()||!d||"image"!=l.type||!l.isLoaded||l.hasError||(c.isAnimating=!0,g.fancybox.stop(d),t=t===b?.5*u:t,e=e===b?.5*f:e,(o=g.fancybox.getTranslate(d)).top-=g.fancybox.getTranslate(l.$slide).top,o.left-=g.fancybox.getTranslate(l.$slide).left,s=p/o.width,r=h/o.height,i=.5*u-.5*p,a=.5*f-.5*h,u<p&&(0<(i=o.left*s-(t*s-t))&&(i=0),i<u-p&&(i=u-p)),f<h&&(0<(a=o.top*r-(e*r-e))&&(a=0),a<f-h&&(a=f-h)),c.updateCursor(p,h),g.fancybox.animate(d,{top:a,left:i,scaleX:s,scaleY:r},n||366,function(){c.isAnimating=!1}),c.SlideShow&&c.SlideShow.isActive&&c.SlideShow.stop())},scaleToFit:function(t){var e,n=this,o=n.current,i=o.$content;n.isAnimating||n.isMoved()||!i||"image"!=o.type||!o.isLoaded||o.hasError||(n.isAnimating=!0,g.fancybox.stop(i),e=n.getFitPos(o),n.updateCursor(e.width,e.height),g.fancybox.animate(i,{top:e.top,left:e.left,scaleX:e.width/i.width(),scaleY:e.height/i.height()},t||366,function(){n.isAnimating=!1}))},getFitPos:function(t){var e,n,o,i,a=t.$content,s=t.$slide,r=t.width||t.opts.width,c=t.height||t.opts.height,l={};return!!(t.isLoaded&&a&&a.length)&&(e=g.fancybox.getTranslate(this.$refs.stage).width,n=g.fancybox.getTranslate(this.$refs.stage).height,e-=parseFloat(s.css("paddingLeft"))+parseFloat(s.css("paddingRight"))+parseFloat(a.css("marginLeft"))+parseFloat(a.css("marginRight")),n-=parseFloat(s.css("paddingTop"))+parseFloat(s.css("paddingBottom"))+parseFloat(a.css("marginTop"))+parseFloat(a.css("marginBottom")),r&&c||(r=e,c=n),e-.5<(r*=o=Math.min(1,e/r,n/c))&&(r=e),n-.5<(c*=o)&&(c=n),"image"===t.type?(l.top=Math.floor(.5*(n-c))+parseFloat(s.css("paddingTop")),l.left=Math.floor(.5*(e-r))+parseFloat(s.css("paddingLeft"))):"video"===t.contentType&&(r/(i=t.opts.width&&t.opts.height?r/c:t.opts.ratio||16/9)<c?c=r/i:c*i<r&&(r=c*i)),l.width=r,l.height=c,l)},update:function(n){var o=this;g.each(o.slides,function(t,e){o.updateSlide(e,n)})},updateSlide:function(t,e){var n=this,o=t&&t.$content,i=t.width||t.opts.width,a=t.height||t.opts.height,s=t.$slide;n.adjustCaption(t),o&&(i||a||"video"===t.contentType)&&!t.hasError&&(g.fancybox.stop(o),g.fancybox.setTranslate(o,n.getFitPos(t)),t.pos===n.currPos&&(n.isAnimating=!1,n.updateCursor())),n.adjustLayout(t),s.length&&(s.trigger("refresh"),t.pos===n.currPos&&n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",s.get(0).scrollHeight>s.get(0).clientHeight)),n.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,n=e.current,o=n.$slide;!e.isClosing&&n&&(o.siblings().css({transform:"",opacity:""}),o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),g.fancybox.animate(o,{top:0,left:0,opacity:1},t===b?0:t,function(){o.css({transform:"",opacity:""}),n.isComplete||e.complete()},!1))},isMoved:function(t){var e,n,o=t||this.current;return!!o&&(n=g.fancybox.getTranslate(this.$refs.stage),e=g.fancybox.getTranslate(o.$slide),!o.$slide.hasClass("fancybox-animated")&&(.5<Math.abs(e.top-n.top)||.5<Math.abs(e.left-n.left)))},updateCursor:function(t,e){var n,o,i=this,a=i.current,s=i.$refs.container;a&&!i.isClosing&&i.Guestures&&(s.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=!!(n=i.canPan(t,e))||i.isZoomable(),s.toggleClass("fancybox-is-zoomable",o),g("[data-fancybox-zoom]").prop("disabled",!o),n?s.addClass("fancybox-can-pan"):o&&("zoom"===a.opts.clickContent||g.isFunction(a.opts.clickContent)&&"zoom"==a.opts.clickContent(a))?s.addClass("fancybox-can-zoomIn"):a.opts.touch&&(a.opts.touch.vertical||1<i.group.length)&&"video"!==a.contentType&&s.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this.current;if(e&&!this.isClosing&&"image"===e.type&&!e.hasError){if(!e.isLoaded)return!0;if((t=this.getFitPos(e))&&(e.width>t.width||e.height>t.height))return!0}return!1},isScaledDown:function(t,e){var n=!1,o=this.current,i=o.$content;return t!==b&&e!==b?n=t<o.width&&e<o.height:i&&(n=(n=g.fancybox.getTranslate(i)).width<o.width&&n.height<o.height),n},canPan:function(t,e){var n=this.current,o=null,i=!1;return"image"===n.type&&(n.isComplete||t&&e)&&!n.hasError&&(i=this.getFitPos(n),t!==b&&e!==b?o={width:t,height:e}:n.isComplete&&(o=g.fancybox.getTranslate(n.$content)),o&&i&&(i=1.5<Math.abs(o.width-i.width)||1.5<Math.abs(o.height-i.height))),i},loadSlide:function(n){var t,e,o,i=this;if(!n.isLoading&&!n.isLoaded){if(!(n.isLoading=!0)===i.trigger("beforeLoad",n))return n.isLoading=!1;switch(t=n.type,(e=n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass),t){case"image":i.setImage(n);break;case"iframe":i.setIframe(n);break;case"html":i.setContent(n,n.src||n.content);break;case"video":i.setContent(n,n.opts.video.tpl.replace(/\{\{src\}\}/gi,n.src).replace("{{format}}",n.opts.videoFormat||n.opts.video.format||"").replace("{{poster}}",n.thumb||""));break;case"inline":g(n.src).length?i.setContent(n,g(n.src)):i.setError(n);break;case"ajax":i.showLoading(n),o=g.ajax(g.extend({},n.opts.ajax.settings,{url:n.src,success:function(t,e){"success"===e&&i.setContent(n,t)},error:function(t,e){t&&"abort"!==e&&i.setError(n)}})),e.one("onReset",function(){o.abort()});break;default:i.setError(n)}return!0}},setImage:function(e){var t,n=this;setTimeout(function(){var t=e.$image;n.isClosing||!e.isLoading||t&&t.length&&t[0].complete||e.hasError||n.showLoading(e)},50),n.checkSrcset(e),e.$content=g('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),!1!==e.opts.preload&&e.opts.width&&e.opts.height&&e.thumb&&(e.width=e.opts.width,e.height=e.opts.height,(t=l.createElement("img")).onerror=function(){g(this).remove(),e.$ghost=null},t.onload=function(){n.afterLoad(e)},e.$ghost=g(t).addClass("fancybox-image").appendTo(e.$content).attr("src",e.thumb)),n.setBigImage(e)},checkSrcset:function(t){var e,n,o,i,a=t.opts.srcset||t.opts.image.srcset;if(a){o=c.devicePixelRatio||1,i=c.innerWidth*o,(n=a.split(",").map(function(t){var o={};return t.trim().split(/\s+/).forEach(function(t,e){var n=parseInt(t.substring(0,t.length-1),10);if(0===e)return o.url=t;n&&(o.value=n,o.postfix=t[t.length-1])}),o})).sort(function(t,e){return t.value-e.value});for(var s=0;s<n.length;s++){var r=n[s];if("w"===r.postfix&&r.value>=i||"x"===r.postfix&&r.value>=o){e=r;break}}!e&&n.length&&(e=n[n.length-1]),e&&(t.src=e.url,t.width&&t.height&&"w"==e.postfix&&(t.height=t.width/t.height*e.value,t.width=e.value),t.opts.srcset=a)}},setBigImage:function(e){var n=this,t=l.createElement("img"),o=g(t);e.$image=o.one("error",function(){n.setError(e)}).one("load",function(){var t;e.$ghost||(n.resolveImageSlideSize(e,this.naturalWidth,this.naturalHeight),n.afterLoad(e)),n.isClosing||(e.opts.srcset&&((t=e.opts.sizes)&&"auto"!==t||(t=(1<e.width/e.height&&1<a.width()/a.height()?"100":Math.round(e.width/e.height*100))+"vw"),o.attr("sizes",t).attr("srcset",e.opts.srcset)),e.$ghost&&setTimeout(function(){e.$ghost&&!n.isClosing&&e.$ghost.hide()},Math.min(300,Math.max(1e3,e.height/1600))),n.hideLoading(e))}).addClass("fancybox-image").attr("src",e.src).appendTo(e.$content),(t.complete||"complete"==t.readyState)&&o.naturalWidth&&o.naturalHeight?o.trigger("load"):t.error&&o.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,0<o&&(t.width=o,t.height=Math.floor(o*n/e)),0<i&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(i){var a,e=this,s=i.opts.iframe,r=i.$slide;i.$content=g('<div class="fancybox-content'+(s.preload?" fancybox-is-hidden":"")+'"></div>').css(s.css).appendTo(r),r.addClass("fancybox-slide--"+i.contentType),i.$iframe=a=g(s.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(s.attr).appendTo(i.$content),s.preload?(e.showLoading(i),a.on("load.fb error.fb",function(t){this.isReady=1,i.$slide.trigger("refresh"),e.afterLoad(i)}),r.on("refresh.fb",function(){var t,e=i.$content,n=s.css.width,o=s.css.height;if(1===a[0].isReady){try{t=a.contents().find("body")}catch(t){}t&&t.length&&t.children().length&&(r.css("overflow","visible"),e.css({width:"100%","max-width":"100%",height:"9999px"}),n===b&&(n=Math.ceil(Math.max(t[0].clientWidth,t.outerWidth(!0)))),e.css("width",n||"").css("max-width",""),o===b&&(o=Math.ceil(Math.max(t[0].clientHeight,t.outerHeight(!0)))),e.css("height",o||""),r.css("overflow","auto")),e.removeClass("fancybox-is-hidden")}})):e.afterLoad(i),a.attr("src",i.src),r.one("onReset",function(){try{g(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}g(this).off("refresh.fb").empty(),i.isLoaded=!1,i.isRevealed=!1})},setContent:function(t,e){this.isClosing||(this.hideLoading(t),t.$content&&g.fancybox.stop(t.$content),t.$slide.empty(),function(t){return t&&t.hasOwnProperty&&t instanceof g}(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=g("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===g.type(e)&&(e=g("<div>").append(g.trim(e)).contents()),t.opts.filter&&(e=g("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){g(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(g(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),g(e).appendTo(t.$slide),g(e).is("video,audio")&&(g(e).addClass("fancybox-video"),g(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||g(e).attr("width"),t.opts.height=t.opts.height||g(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){(t=t||this.current)&&!t.$spinner&&(t.$spinner=g(this.translate(this,this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){(t=t||this.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=g(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&g('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?((e=s.clone().appendTo(s.parent())).children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=t||this.current;a.isLoaded&&!0!==a.opts.disableLayoutFix&&(a.$content.css("margin-bottom",""),a.$content.outerHeight()>a.$slide.height()+.5&&(o=a.$slide[0].style["padding-bottom"],i=a.$slide.css("padding-bottom"),0<parseFloat(i)&&(e=a.$slide[0].scrollHeight,a.$slide.css("padding-bottom",0),Math.abs(e-a.$slide[0].scrollHeight)<1&&(n=i),a.$slide.css("padding-bottom",o))),a.$content.css("margin-bottom",n))},revealContent:function(t){var e,n,o,i,a=this,s=t.$slide,r=!1,c=!1,l=a.isMoved(t),d=t.isRevealed;return t.isRevealed=!0,e=t.opts[a.firstRun?"animationEffect":"transitionEffect"],o=t.opts[a.firstRun?"animationDuration":"transitionDuration"],o=parseInt(t.forcedDuration===b?o:t.forcedDuration,10),!l&&t.pos===a.currPos&&o||(e=!1),"zoom"===e&&(t.pos===a.currPos&&o&&"image"===t.type&&!t.hasError&&(c=a.getThumbPos(t))?r=a.getFitPos(t):e="fade"),"zoom"===e?(a.isAnimating=!0,r.scaleX=r.width/c.width,r.scaleY=r.height/c.height,"auto"==(i=t.opts.zoomOpacity)&&(i=.1<Math.abs(t.width/t.height-c.width/c.height)),i&&(c.opacity=.1,r.opacity=1),g.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),c),p(t.$content),void g.fancybox.animate(t.$content,r,o,function(){a.isAnimating=!1,a.complete()})):(a.updateSlide(t),e?(g.fancybox.stop(s),n="fancybox-slide--"+(t.pos>=a.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,s.addClass(n).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(s),"image"!==t.type&&t.$content.hide().show(0),void g.fancybox.animate(s,"fancybox-slide--current",o,function(){s.removeClass(n).css({transform:"",opacity:""}),t.pos===a.currPos&&a.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),d||!l||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===a.currPos&&a.complete())))},getThumbPos:function(t){var e,n,o,i,a,s,r=t.$thumb;return!(!r||!function(t){var e,n;return!(!t||t.ownerDocument!==l)&&(g(".fancybox-container").css("pointer-events","none"),e={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},n=l.elementFromPoint(e.x,e.y)===t,g(".fancybox-container").css("pointer-events",""),n)}(r[0]))&&(n=g.fancybox.getTranslate(r),o=parseFloat(r.css("border-top-width")||0),i=parseFloat(r.css("border-right-width")||0),a=parseFloat(r.css("border-bottom-width")||0),s=parseFloat(r.css("border-left-width")||0),e={top:n.top+o,left:n.left+s,width:n.width-i-s,height:n.height-o-a,scaleX:1,scaleY:1},0<n.width&&0<n.height&&e)},complete:function(){var t,n=this,e=n.current,o={};!n.isMoved()&&e.isLoaded&&(e.isComplete||(e.isComplete=!0,e.$slide.siblings().trigger("onReset"),n.preload("inline"),p(e.$slide),e.$slide.addClass("fancybox-slide--complete"),g.each(n.slides,function(t,e){e.pos>=n.currPos-1&&e.pos<=n.currPos+1?o[e.pos]=e:e&&(g.fancybox.stop(e.$slide),e.$slide.off().remove())}),n.slides=o),n.isAnimating=!1,n.updateCursor(),n.trigger("afterShow"),e.opts.video.autoStart&&e.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),n.next()}),e.opts.autoFocus&&"html"===e.contentType&&((t=e.$content.find("input[autofocus]:enabled:visible:first")).length?t.trigger("focus"):n.focus(null,!0)),e.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],(e=o.slides[o.currPos-1])&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,e){var n,o,i=this,a=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");i.isClosing||((n=(n=!t&&i.current&&i.current.isComplete?i.current.$slide.find("*:visible"+(e?":not(.fancybox-close-small)":"")):i.$refs.container.find("*:visible")).filter(a).filter(function(){return"hidden"!==g(this).css("visibility")&&!g(this).hasClass("disabled")})).length?(o=n.index(l.activeElement),t&&t.shiftKey?(o<0||0==o)&&(t.preventDefault(),n.eq(n.length-1).trigger("focus")):(o<0||o==n.length-1)&&(t&&t.preventDefault(),n.eq(0).trigger("focus"))):i.$refs.container.trigger("focus"))},activate:function(){var e=this;g(".fancybox-container").each(function(){var t=g(this).data("FancyBox");t&&t.id!==e.id&&!t.isClosing&&(t.trigger("onDeactivate"),t.removeEvents(),t.isVisible=!1)}),e.isVisible=!0,(e.current||e.isIdle)&&(e.update(),e.updateControls()),e.trigger("onActivate"),e.addEvents()},close:function(t,e){function n(){d.cleanUp(t)}var o,i,a,s,r,c,l,d=this,u=d.current;return!d.isClosing&&(!(d.isClosing=!0)===d.trigger("beforeClose",t)?(d.isClosing=!1,f(function(){d.update()}),!1):(d.removeEvents(),a=u.$content,o=u.opts.animationEffect,i=g.isNumeric(e)?e:o?u.opts.animationDuration:0,u.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?g.fancybox.stop(u.$slide):o=!1,u.$slide.siblings().trigger("onReset").remove(),i&&d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),d.hideLoading(u),d.hideControls(!0),d.updateCursor(),"zoom"!==o||a&&i&&"image"===u.type&&!d.isMoved()&&!u.hasError&&(l=d.getThumbPos(u))||(o="fade"),"zoom"===o?(g.fancybox.stop(a),c={top:(s=g.fancybox.getTranslate(a)).top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},"auto"==(r=u.opts.zoomOpacity)&&(r=.1<Math.abs(u.width/u.height-l.width/l.height)),r&&(l.opacity=0),g.fancybox.setTranslate(a,c),p(a),g.fancybox.animate(a,l,i,n)):o&&i?g.fancybox.animate(u.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,n):!0===t?setTimeout(n,i):n(),!0))},cleanUp:function(t){var e,n,o,i=this,a=i.current.opts.$orig;i.current.$slide.trigger("onReset"),i.$refs.container.empty().remove(),i.trigger("afterClose",t),i.current.opts.backFocus&&(a&&a.length&&a.is(":visible")||(a=i.$trigger),a&&a.length&&(n=c.scrollX,o=c.scrollY,a.trigger("focus"),g("html, body").scrollTop(o).scrollLeft(n))),i.current=null,(e=g.fancybox.getInstance())?e.activate():(g("body").removeClass("fancybox-active compensate-for-scrollbar"),g("#fancybox-style-noscroll").remove())},trigger:function(t,e){var n,o=Array.prototype.slice.call(arguments,1),i=this,a=e&&e.opts?e:i.current;if(a?o.unshift(a):a=i,o.unshift(i),g.isFunction(a.opts[t])&&(n=a.opts[t].apply(a,o)),!1===n)return n;"afterClose"!==t&&i.$refs?i.$refs.container.trigger(t+".fb",o):s.trigger(t+".fb",o)},updateControls:function(){var t=this,e=t.current,n=e.index,o=t.$refs.container,i=t.$refs.caption,a=e.opts.caption;e.$slide.trigger("refresh"),a&&a.length?(t.$caption=i).children().eq(0).html(a):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),o.find("[data-fancybox-count]").html(t.group.length),o.find("[data-fancybox-index]").html(n+1),o.find("[data-fancybox-prev]").prop("disabled",!e.opts.loop&&n<=0),o.find("[data-fancybox-next]").prop("disabled",!e.opts.loop&&n>=t.group.length-1),"image"===e.type?o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",e.opts.image.src||e.src).show():e.opts.toolbar&&o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),g(l.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=["infobar","toolbar","nav"];!t&&this.current.opts.preventCaptionOverlap||e.push("caption"),this.$refs.container.removeClass(e.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&1<t.group.length)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&1<t.group.length)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),g.fancybox={version:"3.5.7",defaults:i,getInstance:function(t){var e=g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),n=Array.prototype.slice.call(arguments,1);return e instanceof m&&("string"===g.type(t)?e[t].apply(e,n):"function"===g.type(t)&&t.apply(e,n),e)},open:function(t,e,n){return new m(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),s.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:(t=l.createElement("div"),c.getComputedStyle&&c.getComputedStyle(t)&&c.getComputedStyle(t).getPropertyValue("transform")&&!(l.documentMode&&l.documentMode<11)),getTranslate:function(t){var e;return!(!t||!t.length)&&{top:(e=t[0].getBoundingClientRect()).top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))}},setTranslate:function(t,e){var n="",o={};if(t&&e)return e.left===b&&e.top===b||(n=(e.left===b?t.position().left:e.left)+"px, "+(e.top===b?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==b&&e.scaleY!==b?n+=" scale("+e.scaleX+", "+e.scaleY+")":e.scaleX!==b&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),e.opacity!==b&&(o.opacity=e.opacity),e.width!==b&&(o.width=e.width),e.height!==b&&(o.height=e.height),t.css(o)},animate:function(e,n,o,i,a){var s,r=this;g.isFunction(o)&&(i=o,o=null),r.stop(e),s=r.getTranslate(e),e.on(u,function(t){t&&t.originalEvent&&(!e.is(t.originalEvent.target)||"z-index"==t.originalEvent.propertyName)||(r.stop(e),g.isNumeric(o)&&e.css("transition-duration",""),g.isPlainObject(n)?n.scaleX!==b&&n.scaleY!==b&&r.setTranslate(e,{top:n.top,left:n.left,width:s.width*n.scaleX,height:s.height*n.scaleY,scaleX:1,scaleY:1}):!0!==a&&e.removeClass(n),g.isFunction(i)&&i(t))}),g.isNumeric(o)&&e.css("transition-duration",o+"ms"),g.isPlainObject(n)?(n.scaleX!==b&&n.scaleY!==b&&(delete n.width,delete n.height,e.parent().hasClass("fancybox-slide--image")&&e.parent().addClass("fancybox-is-scaling")),g.fancybox.setTranslate(e,n)):e.addClass(n),e.data("timer",setTimeout(function(){e.trigger(u)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(u),t.off(u).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},g.fn.fancybox=function(t){var e;return(e=(t=t||{}).selector||!1)?g("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},y):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},y),this},s.on("click.fb-start","[data-fancybox]",y),s.on("click.fb-start","[data-fancybox-trigger]",function(t){g('[data-fancybox="'+g(this).attr("data-fancybox-trigger")+'"]').eq(g(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:g(this)})}),e=".fancybox-button",n="fancybox-focus",o=null,s.on("mousedown mouseup focus blur",e,function(t){switch(t.type){case"mousedown":o=g(this);break;case"mouseup":o=null;break;case"focusin":g(e).removeClass(n),g(this).is(o)||g(this).is("[disabled]")||g(this).addClass(n);break;case"focusout":g(e).removeClass(n)}})}function y(t,e){var n,o,i,a=[],s=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),n=e.$target||g(t.currentTarget).trigger("blur"),(i=g.fancybox.getInstance())&&i.$trigger&&i.$trigger.is(n)||(a=e.selector?g(e.selector):(o=n.attr("data-fancybox")||"")?(a=t.data?t.data.items:[]).length?a.filter('[data-fancybox="'+o+'"]'):g('[data-fancybox="'+o+'"]'):[n],(s=g(a).index(n))<0&&(s=0),(i=g.fancybox.open(a,e,s)).$trigger=n))}}(window,document,jQuery),function(p){"use strict";function h(n,t,e){if(n)return e=e||"","object"===p.type(e)&&(e=p.param(e,!0)),p.each(t,function(t,e){n=n.replace("$"+t,e||"")}),e.length&&(n+=(0<n.indexOf("?")?"&":"?")+e),n}var o={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&0<t[12].indexOf("layer=c")?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};p(document).on("objectNeedsType.fb",function(t,e,i){var n,a,s,r,c,l,d,u=i.src||"",f=!1;n=p.extend(!0,{},o,i.opts.media),p.each(n,function(t,e){if(s=u.match(e.matcher)){if(f=e.type,d=t,l={},e.paramPlace&&s[e.paramPlace]){"?"==(c=s[e.paramPlace])[0]&&(c=c.substring(1)),c=c.split("&");for(var n=0;n<c.length;++n){var o=c[n].split("=",2);2==o.length&&(l[o[0]]=decodeURIComponent(o[1].replace(/\+/g," ")))}}return r=p.extend(!0,{},e.params,i.opts[t],l),u="function"===p.type(e.url)?e.url.call(this,s,r,i):h(e.url,s,r),a="function"===p.type(e.thumb)?e.thumb.call(this,s,r,i):h(e.thumb,s),"youtube"===t?u=u.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===t&&(u=u.replace("&%23","#")),!1}}),f?(i.opts.thumb||i.opts.$thumb&&i.opts.$thumb.length||(i.opts.thumb=a),"iframe"===f&&(i.opts=p.extend(!0,i.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),p.extend(i,{type:f,src:u,origSrc:i.src,contentSource:d,contentType:"image"===f?"image":"gmap_place"==d||"gmap_search"==d?"map":"video"})):u&&(i.type=i.opts.defaultType)});var i={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;this[t].loaded?setTimeout(function(){n.done(t)}):this[t].loading||(this[t].loading=!0,(e=document.createElement("script")).type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(t){var e,n;"youtube"===t&&delete window.onYouTubeIframeAPIReady,(e=p.fancybox.getInstance())&&(n=e.current.$content.find("iframe"),"youtube"===t&&void 0!==YT&&YT?new YT.Player(n.attr("id"),{events:{onStateChange:function(t){0==t.data&&e.next()}}}):"vimeo"===t&&void 0!==Vimeo&&Vimeo&&new Vimeo.Player(n).on("ended",function(){e.next()}))}};p(document).on({"afterShow.fb":function(t,e,n){1<e.group.length&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&i.load(n.contentSource)}})}(jQuery),function(g,c,b){"use strict";function d(t){var e=[];for(var n in t=(t=t.originalEvent||t||g.e).touches&&t.touches.length?t.touches:t.changedTouches&&t.changedTouches.length?t.changedTouches:[t])t[n].pageX?e.push({x:t[n].pageX,y:t[n].pageY}):t[n].clientX&&e.push({x:t[n].clientX,y:t[n].clientY});return e}function m(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0}function l(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||b.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,n=t[0].attributes,o=n.length;e<o;e++)if("data-fancybox-"===n[e].nodeName.substr(0,14))return!0;return!1}function u(t){for(var e,n,o,i,a,s=!1;e=t.get(0),void 0,n=g.getComputedStyle(e)["overflow-y"],o=g.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth,!(s=i||a)&&(t=t.parent()).length&&!t.hasClass("fancybox-stage")&&!t.is("body"););return s}function n(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",b.proxy(e,"ontouchstart"))}var y=g.requestAnimationFrame||g.webkitRequestAnimationFrame||g.mozRequestAnimationFrame||g.oRequestAnimationFrame||function(t){return g.setTimeout(t,1e3/60)},v=g.cancelAnimationFrame||g.webkitCancelAnimationFrame||g.mozCancelAnimationFrame||g.oCancelAnimationFrame||function(t){g.clearTimeout(t)};n.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),b(c).off(".fb.touch"),t.requestId&&(v(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},n.prototype.ontouchstart=function(t){var e=this,n=b(t.target),o=e.instance,i=o.current,a=i.$slide,s=i.$content,r="touchstart"==t.type;if(r&&e.$container.off("mousedown.fb.touch"),(!t.originalEvent||2!=t.originalEvent.button)&&a.length&&n.length&&!l(n)&&!l(n.parent())&&(n.is("img")||!(t.originalEvent.clientX>n[0].clientWidth+n.offset().left))){if(!i||o.isAnimating||i.$slide.hasClass("fancybox-animated"))return t.stopPropagation(),void t.preventDefault();e.realPoints=e.startPoints=d(t),e.startPoints.length&&(i.touch&&t.stopPropagation(),e.startEvent=t,e.canTap=!0,e.$target=n,e.$content=s,e.opts=i.opts.touch,e.isPanning=!1,e.isSwiping=!1,e.isZooming=!1,e.isScrolling=!1,e.canPan=o.canPan(),e.startTime=(new Date).getTime(),e.distanceX=e.distanceY=e.distance=0,e.canvasWidth=Math.round(a[0].clientWidth),e.canvasHeight=Math.round(a[0].clientHeight),e.contentLastPos=null,e.contentStartPos=b.fancybox.getTranslate(e.$content)||{top:0,left:0},e.sliderStartPos=b.fancybox.getTranslate(a),e.stagePos=b.fancybox.getTranslate(o.$refs.stage),e.sliderStartPos.top-=e.stagePos.top,e.sliderStartPos.left-=e.stagePos.left,e.contentStartPos.top-=e.stagePos.top,e.contentStartPos.left-=e.stagePos.left,b(c).off(".fb.touch").on(r?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",b.proxy(e,"ontouchend")).on(r?"touchmove.fb.touch":"mousemove.fb.touch",b.proxy(e,"ontouchmove")),b.fancybox.isMobile&&c.addEventListener("scroll",e.onscroll,!0),((e.opts||e.canPan)&&(n.is(e.$stage)||e.$stage.find(n).length)||(n.is(".fancybox-image")&&t.preventDefault(),b.fancybox.isMobile&&n.parents(".fancybox-caption").length))&&(e.isScrollable=u(n)||u(n.parent()),b.fancybox.isMobile&&e.isScrollable||t.preventDefault(),1!==e.startPoints.length&&!i.hasError||(e.canPan?(b.fancybox.stop(e.$content),e.isPanning=!0):e.isSwiping=!0,e.$container.addClass("fancybox-is-grabbing")),2===e.startPoints.length&&"image"===i.type&&(i.isLoaded||i.$ghost)&&(e.canTap=!1,e.isSwiping=!1,e.isPanning=!1,e.isZooming=!0,b.fancybox.stop(e.$content),e.centerPointStartX=.5*(e.startPoints[0].x+e.startPoints[1].x)-b(g).scrollLeft(),e.centerPointStartY=.5*(e.startPoints[0].y+e.startPoints[1].y)-b(g).scrollTop(),e.percentageOfImageAtPinchPointX=(e.centerPointStartX-e.contentStartPos.left)/e.contentStartPos.width,e.percentageOfImageAtPinchPointY=(e.centerPointStartY-e.contentStartPos.top)/e.contentStartPos.height,e.startDistanceBetweenFingers=m(e.startPoints[0],e.startPoints[1]))))}},n.prototype.onscroll=function(t){this.isScrolling=!0,c.removeEventListener("scroll",this.onscroll,!0)},n.prototype.ontouchmove=function(t){var e=this;void 0===t.originalEvent.buttons||0!==t.originalEvent.buttons?e.isScrolling?e.canTap=!1:(e.newPoints=d(t),(e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=m(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=m(e.newPoints[0],e.startPoints[0],"y"),e.distance=m(e.newPoints[0],e.startPoints[0]),0<e.distance&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))):e.ontouchend(t)},n.prototype.onSwipe=function(t){var e,i=this,a=i.instance,n=i.isSwiping,o=i.sliderStartPos.left||0;if(!0!==n)"x"==n&&(0<i.distanceX&&(i.instance.group.length<2||0===i.instance.current.index&&!i.instance.current.opts.loop)?o+=Math.pow(i.distanceX,.8):i.distanceX<0&&(i.instance.group.length<2||i.instance.current.index===i.instance.group.length-1&&!i.instance.current.opts.loop)?o-=Math.pow(-i.distanceX,.8):o+=i.distanceX),i.sliderLastPos={top:"x"==n?0:i.sliderStartPos.top+i.distanceY,left:o},i.requestId&&(v(i.requestId),i.requestId=null),i.requestId=y(function(){i.sliderLastPos&&(b.each(i.instance.slides,function(t,e){var n=e.pos-i.instance.currPos;b.fancybox.setTranslate(e.$slide,{top:i.sliderLastPos.top,left:i.sliderLastPos.left+n*i.canvasWidth+n*e.opts.gutter})}),i.$container.addClass("fancybox-is-sliding"))});else if(10<Math.abs(i.distance)){if(i.canTap=!1,a.group.length<2&&i.opts.vertical?i.isSwiping="y":a.isDragging||!1===i.opts.vertical||"auto"===i.opts.vertical&&800<b(g).width()?i.isSwiping="x":(e=Math.abs(180*Math.atan2(i.distanceY,i.distanceX)/Math.PI),i.isSwiping=45<e&&e<135?"y":"x"),"y"===i.isSwiping&&b.fancybox.isMobile&&i.isScrollable)return void(i.isScrolling=!0);a.isDragging=i.isSwiping,i.startPoints=i.newPoints,b.each(a.slides,function(t,e){var n,o;b.fancybox.stop(e.$slide),n=b.fancybox.getTranslate(e.$slide),o=b.fancybox.getTranslate(a.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===a.current.pos&&(i.sliderStartPos.top=n.top-o.top,i.sliderStartPos.left=n.left-o.left),b.fancybox.setTranslate(e.$slide,{top:n.top-o.top,left:n.left-o.left})}),a.SlideShow&&a.SlideShow.isActive&&a.SlideShow.stop()}},n.prototype.onPan=function(){var t=this;m(t.newPoints[0],t.realPoints[0])<(b.fancybox.isMobile?10:5)?t.startPoints=t.newPoints:(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&v(t.requestId),t.requestId=y(function(){b.fancybox.setTranslate(t.$content,t.contentLastPos)}))},n.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=r<h?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),0<l&&t<i&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),0<d&&e<a&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},n.prototype.limitPosition=function(t,e,n,o){var i=this.canvasWidth,a=this.canvasHeight;return t=i<n?(t=0<t?0:t)<i-n?i-n:t:Math.max(0,i/2-n/2),{top:e=a<o?(e=0<e?0:e)<a-o?a-o:e:Math.max(0,a/2-o/2),left:t}},n.prototype.onZoom=function(){var t=this,e=t.contentStartPos,n=e.width,o=e.height,i=e.left,a=e.top,s=m(t.newPoints[0],t.newPoints[1])/t.startDistanceBetweenFingers,r=Math.floor(n*s),c=Math.floor(o*s),l=(n-r)*t.percentageOfImageAtPinchPointX,d=(o-c)*t.percentageOfImageAtPinchPointY,u=(t.newPoints[0].x+t.newPoints[1].x)/2-b(g).scrollLeft(),f=(t.newPoints[0].y+t.newPoints[1].y)/2-b(g).scrollTop(),p=u-t.centerPointStartX,h={top:a+(d+(f-t.centerPointStartY)),left:i+(l+p),scaleX:s,scaleY:s};t.canTap=!1,t.newWidth=r,t.newHeight=c,t.contentLastPos=h,t.requestId&&v(t.requestId),t.requestId=y(function(){b.fancybox.setTranslate(t.$content,t.contentLastPos)})},n.prototype.ontouchend=function(t){var e=this,n=e.isSwiping,o=e.isPanning,i=e.isZooming,a=e.isScrolling;if(e.endPoints=d(t),e.dMs=Math.max((new Date).getTime()-e.startTime,1),e.$container.removeClass("fancybox-is-grabbing"),b(c).off(".fb.touch"),c.removeEventListener("scroll",e.onscroll,!0),e.requestId&&(v(e.requestId),e.requestId=null),e.isSwiping=!1,e.isPanning=!1,e.isZooming=!1,e.isScrolling=!1,e.instance.isDragging=!1,e.canTap)return e.onTap(t);e.speed=100,e.velocityX=e.distanceX/e.dMs*.5,e.velocityY=e.distanceY/e.dMs*.5,o?e.endPanning():i?e.endZooming():e.endSwiping(n,a)},n.prototype.endSwiping=function(t,e){var n=this,o=!1,i=n.instance.group.length,a=Math.abs(n.distanceX),s="x"==t&&1<i&&(130<n.dMs&&10<a||50<a);n.sliderLastPos=null,"y"==t&&!e&&50<Math.abs(n.distanceY)?(b.fancybox.animate(n.instance.current.$slide,{top:n.sliderStartPos.top+n.distanceY+150*n.velocityY,opacity:0},200),o=n.instance.close(!0,250)):s&&0<n.distanceX?o=n.instance.previous(300):s&&n.distanceX<0&&(o=n.instance.next(300)),!1!==o||"x"!=t&&"y"!=t||n.instance.centerSlide(200),n.$container.removeClass("fancybox-is-sliding")},n.prototype.endPanning=function(){var t,e,n,o=this;o.contentLastPos&&(e=!1===o.opts.momentum||350<o.dMs?(t=o.contentLastPos.left,o.contentLastPos.top):(t=o.contentLastPos.left+500*o.velocityX,o.contentLastPos.top+500*o.velocityY),(n=o.limitPosition(t,e,o.contentStartPos.width,o.contentStartPos.height)).width=o.contentStartPos.width,n.height=o.contentStartPos.height,b.fancybox.animate(o.$content,n,366))},n.prototype.endZooming=function(){var t,e,n,o,i=this,a=i.instance.current,s=i.newWidth,r=i.newHeight;i.contentLastPos&&(t=i.contentLastPos.left,o={top:e=i.contentLastPos.top,left:t,width:s,height:r,scaleX:1,scaleY:1},b.fancybox.setTranslate(i.$content,o),s<i.canvasWidth&&r<i.canvasHeight?i.instance.scaleToFit(150):s>a.width||r>a.height?i.instance.scaleToActual(i.centerPointStartX,i.centerPointStartY,150):(n=i.limitPosition(t,e,s,r),b.fancybox.animate(i.$content,n,150)))},n.prototype.onTap=function(n){function t(t){var e=s.opts[t];if(b.isFunction(e)&&(e=e.apply(a,[s,n])),e)switch(e){case"close":a.close(o.startEvent);break;case"toggleControls":a.toggleControls();break;case"next":a.next();break;case"nextOrClose":1<a.group.length?a.next():a.close(o.startEvent);break;case"zoom":"image"==s.type&&(s.isLoaded||s.$ghost)&&(a.canPan()?a.scaleToFit():a.isScaledDown()?a.scaleToActual(c,l):a.group.length<2&&a.close(o.startEvent))}}var e,o=this,i=b(n.target),a=o.instance,s=a.current,r=n&&d(n)||o.startPoints,c=r[0]?r[0].x-b(g).scrollLeft()-o.stagePos.left:0,l=r[0]?r[0].y-b(g).scrollTop()-o.stagePos.top:0;if((!n.originalEvent||2!=n.originalEvent.button)&&(i.is("img")||!(c>i[0].clientWidth+i.offset().left))){if(i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(i.is(".fancybox-slide"))e="Slide";else{if(!a.current.$content||!a.current.$content.find(i).addBack().filter(i).length)return;e="Content"}if(o.tapped){if(clearTimeout(o.tapped),o.tapped=null,50<Math.abs(c-o.tapX)||50<Math.abs(l-o.tapY))return this;t("dblclick"+e)}else o.tapX=c,o.tapY=l,s.opts["dblclick"+e]&&s.opts["dblclick"+e]!==s.opts["click"+e]?o.tapped=setTimeout(function(){o.tapped=null,a.isAnimating||t("click"+e)},500):t("click"+e);return this}},b(c).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new n(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(s,r){"use strict";r.extend(!0,r.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});function n(t){this.instance=t,this.init()}r.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,e=t.instance,n=e.group[e.currIndex].opts.slideShow;t.$button=e.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),e.group.length<2||!n?t.$button.hide():n.progress&&(t.$progress=r('<div class="fancybox-progress"></div>').appendTo(e.$refs.inner))},set:function(t){var e=this,n=e.instance,o=n.current;o&&(!0===t||o.opts.loop||n.currIndex<n.group.length-1)?e.isActive&&"video"!==o.contentType&&(e.$progress&&r.fancybox.animate(e.$progress.show(),{scaleX:1},o.opts.slideShow.speed),e.timer=setTimeout(function(){n.current.opts.loop||n.current.index!=n.group.length-1?n.next():n.jumpTo(0)},o.opts.slideShow.speed)):(e.stop(),n.idleSecondsCounter=0,n.showControls())},clear:function(){clearTimeout(this.timer),this.timer=null,this.$progress&&this.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){this.isActive?this.stop():this.start()}}),r(s).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.SlideShow;!a||!n.opts.slideShow||80!==i&&32!==i||r(s.activeElement).is("button,a,input")||(o.preventDefault(),a.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),r(s).on("visibilitychange",function(){var t=r.fancybox.getInstance(),e=t&&t.SlideShow;e&&e.isActive&&(s.hidden?e.clear():e.set())})}(document,jQuery),function(a,n){"use strict";var o=function(){for(var t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],e={},n=0;n<t.length;n++){var o=t[n];if(o&&o[1]in a){for(var i=0;i<o.length;i++)e[t[0][i]]=o[i];return e}}return!1}();if(o){var i={request:function(t){(t=t||a.documentElement)[o.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)},exit:function(){a[o.exitFullscreen]()},toggle:function(t){t=t||a.documentElement,this.isFullscreen()?this.exit():this.request(t)},isFullscreen:function(){return Boolean(a[o.fullscreenElement])},enabled:function(){return Boolean(a[o.fullscreenEnabled])}};n.extend(!0,n.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),n(a).on(o.fullscreenchange,function(){var t=i.isFullscreen(),e=n.fancybox.getInstance();e&&(e.current&&"image"===e.current.type&&e.isAnimating&&(e.isAnimating=!1,e.update(!0,!0,0),e.isComplete||e.complete()),e.trigger("onFullscreenChange",t),e.$refs.container.toggleClass("fancybox-is-fullscreen",t),e.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}n(a).on({"onInit.fb":function(t,e){o?e&&e.group[e.currIndex].opts.fullScreen?(e.$refs.container.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),i.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&i.request(),e.FullScreen=i):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide():e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&i.exit()}})}(document,jQuery),function(t,a){"use strict";var s="fancybox-thumbs",r=s+"-active";a.fancybox.defaults=a.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},a.fancybox.defaults);function o(t){this.init(t)}a.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,(t.Thumbs=e).$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(1<o));i++);1<o&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var n,t=this,e=t.instance,o=t.opts.parentEl,i=[];t.$grid||(t.$grid=a('<div class="'+s+" "+s+"-"+t.opts.axis+'"></div>').appendTo(e.$refs.container.find(o).addBack().filter(o)),t.$grid.on("click","a",function(){e.jumpTo(a(this).attr("data-index"))})),t.$list||(t.$list=a('<div class="'+s+'__list">').appendTo(t.$grid)),a.each(e.group,function(t,e){(n=e.thumb)||"image"!==e.type||(n=e.src),i.push('<a href="javascript:;" tabindex="0" data-index="'+t+'"'+(n&&n.length?' style="background-image:url('+n+')"':'class="fancybox-thumbs-missing"')+"></a>")}),t.$list[0].innerHTML=i.join(""),"x"===t.opts.axis&&t.$list.width(parseInt(t.$grid.css("padding-right"),10)+e.group.length*t.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(n=(e=i.children().removeClass(r).filter('[data-index="'+o.instance.current.index+'"]').addClass(r)).position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),a(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e)).isActive&&!0===n.opts.autoStart&&n.show()},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,i){"use strict";i.extend(!0,i.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),i(t).on("click","[data-fancybox-share]",function(){var t,e,n=i.fancybox.getInstance(),o=n.current||null;o&&("function"===i.type(o.opts.share.url)&&(t=o.opts.share.url.apply(o,[n,o])),e=o.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===o.type?encodeURIComponent(o.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,function(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}(t)).replace(/\{\{descr\}\}/g,n.$caption?encodeURIComponent(n.$caption.text()):""),i.fancybox.open({src:n.translate(n,e),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){n.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(a,s,i){"use strict";function r(){var t=a.location.hash.substr(1),e=t.split("-"),n=1<e.length&&/^\+?\d+$/.test(e[e.length-1])&&parseInt(e.pop(-1),10)||1;return{hash:t,index:n<1?1:n,gallery:e.join("-")}}function e(t){""!==t.gallery&&i("[data-fancybox='"+i.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function c(t){var e,n;return!!t&&(""!==(n=(e=t.current?t.current.opts:t.opts).hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}i.escapeSelector||(i.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),i(function(){!1!==i.fancybox.defaults.hash&&(i(s).on({"onInit.fb":function(t,e){var n,o;!1!==e.group[e.currIndex].opts.hash&&(n=r(),(o=c(e))&&n.gallery&&o==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(t,e,n,o){var i;n&&!1!==n.opts.hash&&(i=c(e))&&(e.currentHash=i+(1<e.group.length?"-"+(n.index+1):""),a.location.hash!=="#"+e.currentHash&&(o&&!e.origHash&&(e.origHash=a.location.hash),e.hashTimer&&clearTimeout(e.hashTimer),e.hashTimer=setTimeout(function(){"replaceState"in a.history?(a.history[o?"pushState":"replaceState"]({},s.title,a.location.pathname+a.location.search+"#"+e.currentHash),o&&(e.hasCreatedHistory=!0)):a.location.hash=e.currentHash,e.hashTimer=null},300)))},"beforeClose.fb":function(t,e,n){n&&!1!==n.opts.hash&&(clearTimeout(e.hashTimer),e.currentHash&&e.hasCreatedHistory?a.history.back():e.currentHash&&("replaceState"in a.history?a.history.replaceState({},s.title,a.location.pathname+a.location.search+(e.origHash||"")):a.location.hash=e.origHash),e.currentHash=null)}}),i(a).on("hashchange.fb",function(){var t=r(),o=null;i.each(i(".fancybox-container").get().reverse(),function(t,e){var n=i(e).data("FancyBox");if(n&&n.currentHash)return o=n,!1}),o?o.currentHash===t.gallery+"-"+t.index||1===t.index&&o.currentHash==t.gallery||(o.currentHash=null,o.close()):""!==t.gallery&&e(t)}),setTimeout(function(){i.fancybox.getInstance()||e(r())},50))})}(window,document,jQuery),function(t,e){"use strict";var i=(new Date).getTime();e(t).on({"onInit.fb":function(t,o,e){o.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var e=o.current,n=(new Date).getTime();o.group.length<2||!1===e.opts.wheel||"auto"===e.opts.wheel&&"image"!==e.type||(t.preventDefault(),t.stopPropagation(),e.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,n-i<250||(i=n,o[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=t(e),a=null,i=[];return o.each(function(){var e=t(this),o=e.offset().top-n(e.css("margin-top")),r=i.length>0?i[i.length-1]:null;null===r?i.push(e):Math.floor(Math.abs(a-o))<=1?i[i.length-1]=r.add(e):i.push(e),a=o}),i},i=function(e){var o={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");e[n]=n in e?e[n].add(o):o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i}n?-1===o&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

var jq = jQuery.noConflict();

var captchaIDs = {}; // Holds all hCaptcha elements so that we can use the correct response when there are multiples on a page
function hCaptchaOnLoad () {
     jq('.h-captcha').each(function () {
        var form = jq(this).closest('form');
        window.captchaIDs[form[0].id] = hcaptcha.render(this.id, {
            "sitekey" : window.hCaptchaSiteKey,
            "callback": function (token) {
                jq('<input>', {
                    type: 'hidden',
                    name: 'h-captcha-response',
                    value: token
                }).appendTo(form);
                form.submit();
            }
        });
    }); 
}

jq(document).ready(function() {
     jq('#slick_banner').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    
    // Scroll more home hero button
    var scrollMore = document.getElementById('scroll-more');
    if (scrollMore) {
        jq(scrollMore).click(function (e) {
            e.preventDefault();
            var target = jq(this).closest('.home-hero').siblings('.module').first();
            jq('html,body').animate({
                scrollTop: target.offset().top - jq('.general-wrapper > header').height()
            }, 'slow');
        });
    }
    
    jq('.mobile-nav-trigger').click(function(){
        jq('.main-nav').css('height', 'auto');
    });

    jq('.search-cta .material-icons').click(function(){
        jq('header').toggleClass('search-activated');
        jq('.search-cta form').toggleClass('activated');
        jq('.search-cta form input').focus();
    });
    
    if (jq( ".minor-announcement" ).length) {
        jq( ".sub-navigation, body" ).addClass('has-announcement');
    }
    
    //Set Cursor pointer to anything with data-toggle
    jq("*[data-toggle]").css( 'cursor', 'pointer' );
    
    jq('header.affixed').affix({
        offset:{
            top: 1
        }
    });
    
    //Circle Stat with Percentage Animation
    var divPercentage = jq('.stats-row-w-percents');
    if(divPercentage.length) {
        jq(document).bind('scroll', function(ev) {
            var scrollOffset = jq(document).scrollTop();
            var containerOffset = jq('.stats-row-w-percents').offset().top - window.innerHeight;
            if (scrollOffset > containerOffset) {
                jq('.stats-row-w-percents .stat').each(function() {
                    var percDiv = jq(this).find('.number'),
                    svgElm = jq(this).find('.circle'),
                    percentNumber = jq(this).attr('data-percent');
                    svgElm.attr('stroke-dasharray', percentNumber + ', 100');
                    svgElm.addClass('active');
                    jq({percentage: 0}).stop(true).animate({percentage: percentNumber}, {
                        duration : 2000,
                        step: function () {
                        var percentageVal = Math.round(this.percentage);
                        percDiv.text(percentageVal + '%');
                    }
                    }).promise().done(function () {
                        percDiv.text(percentNumber + "%");
                    });
                });
                jq(document).unbind('scroll');
            }
        });
    }
    
    var subNav = jq('.sub-navigation.affixed');
    if(subNav.length) {
        jq(subNav).affix({
            offset: { 
                top: jq(".sub-navigation").offset().top - jq("header").outerHeight()
            }
        });
    }

    var menuRight = document.getElementById( 'mobile-nav' ),
    showRight = document.getElementById( 'showRight' ),
    body = document.body;
    
    if (showRight) {
        showRight.onclick = function() {
            jq(this).toggleClass("active");
            jq('body').toggleClass('push-to-left');
            jq(menuRight).toggleClass("cbp-spmenu-open");
            disableOther( 'showRight' );
            toggleMenuKeybind();
        };
    }
    function disableOther( button ) {
        if( button !== 'showRight' ) {
          jq(showRight).toggleClass("disabled");
        }
    }
    
    /**
     * This function handles keydown events when a full screen nav is present, allowing
     * the navigation to be closed by pressing the esc key
     */
     function toggleMenuKeybind() {
        var $body = jq('body'),
            $body_events = $body.data("events");
            
        if ($body_events !== null && typeof($body_events.keydown) !== undefined) {
            $body.off('keydown');
        }else {
        $body.on('keydown', function(e) {
            if (e.which == 27) {
                jq('.main-nav').toggleClass("active");
                jq('body').toggleClass('push-to-left');
                jq(menuRight).toggleClass("cbp-spmenu-open");
                disableOther( 'showRight' );
                $body.off('keydown');
            }
        });
        }
    }

    // Basic Form Validation
    var validator = jq(".validate-form");
    validator.each(function () {
      var $form = jq(this);
      var formID = $form.attr('id');
      jq(this).validate({
          rules: {
              password_confirm: {
                  equalTo: "#password",
                  messages: {
                      equalTo: "Passwords must be the same"
                  }
              }
          },
          errorPlacement: function (error, element) {
              error.appendTo(element.parent());
          },
          submitHandler: function (form) {
              if (hcaptcha.getResponse(window.captchaIDs[formID])) {
                  form.submit();
              } else {
                  hcaptcha.reset(window.captchaIDs[formID]);
                  hcaptcha.execute(window.captchaIDs[formID]);
              }
          }
      });
    });
    jq.validator.methods.email = function( value, element ) {
      return this.optional( element ) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
    }
    
    jq('.toggle-button').click(function() {
        jq(this).toggleClass("open");
    });
    
    jq('.fancybox').fancybox({
        helpers: {
            overlay: {
                locked: true
            }
        },
        minHeight: '600'
    });
    jq('.fancybox-sec-filing').fancybox({
        helpers: {
            overlay: {
                locked: true
            }
        },
        minHeight: '900'
    });
    
    jq('.fancybox-bio').fancybox({
        helpers: {
            overlay: {
                locked: true
            }
        },
        minHeight: '0'
    });
    
    jq('.fancybox-modal').fancybox({
        width: 970,
        autoSize: false,
        height: 'auto'
    });
    
    jq(".fancybox\\.iframe").fancybox({
        type: 'iframe',
        iframe : {
            css : {
                width : '80%',
                maxWidth: '1024px',
            }
        }
    });
    
    //Bootrap Select
    jq('.selectpicker').selectpicker({
        iconBase: 'DIN',
        tickIcon: 'no-icon'
    });
    
    //File input
    var fileInput = jq('.file-text input');
    fileInput.change(function(e){
        $this = jq(this);
        var val = $this.val().split('\\');
        var length = val.length;
        var filename = val[length-1];
        jq(this).parent('.file-text').children('.text-wrapper').text(filename);
    });

    // SEC Filing Filters - auto submit form
    jq('#sec-filing-filter select').on('change', function(e) {
        jq(this).closest('form').submit(); 
    });
    
    var $filterSelect = jq('.year-filter .selectpicker');
    if ($filterSelect.length) {
        $filterSelect.on('change', function () {
            var url = window.location.protocol + '//' + window.location.hostname + window.location.pathname;
            var query = "";
            jq('.year-filter .selectpicker').each(function () {
                var prefix = '&';
                if (query.length === 0) {
                    prefix = '?';
                }
                if (jq(this).val() != -1) {
                    query += prefix + jq(this).attr('name') + '=' + jq(this).val();
                }
            });
            url = url + query;
            if (!query) {
            	var full_url = url + '?year=' + jq(this).val();
            	if (window.location.href != full_url) {
            		window.location.href = full_url;
            	}
            } else {
            	if (window.location.href != url) {
            		window.location.href = url;
            	}
            }
       });
    }
});

// Quote Box
function populateQuoteBox(quote) {

    if (jq('.ir-quote-box').length > 0) {
        var quoteContainer = jq('.ir-quote-box[data-symbol="' + quote.symbol + '"]');
    } else {
        var quoteContainer = jq('.quote-box[data-symbol="' + quote.symbol + '"]');
        var home_change = true;
    }
        
    var quote_price = checkQuoteProperty(quote.last),
        quote_change = checkQuoteProperty(quote.change),
        quote_change_pct = checkQuoteProperty(quote.change_pct),
        quote_high = checkQuoteProperty(quote.high),
        quote_low = checkQuoteProperty(quote.low),
        quote_day_low = checkQuoteProperty(quote.day_low),
        quote_day_high = checkQuoteProperty(quote.day_high),
        quote_volume = quote.volume;
        // Quotemedia's volume already comes back formatted, so we do not need to custom format it
        if (quote_volume && quote.use_quotemedia !== true) {
            quote_volume = quote_volume.replace(/\,/g,'');
            quote_volume = parseInt(quote_volume,10);
            quote_volume = abbrNum(quote_volume, 2);
        }   
   

    quoteContainer.find('.time').html('<time />');
    quoteContainer.find('time').attr('datetime', quote.last_trade_time).html(quote.last_trade_time);  
    
    
    if (quote_price == 'N/A') {
        quoteContainer.find('.price .value').html('N/A');
    } else {
          quoteContainer.find('.price .value').html('$' + quote_price);
    }

    if (quote.market_cap == 'N/A') {
        quoteContainer.find('.market-cap .value').html('N/A');
    } else {
        quoteContainer.find('.market-cap .value').html('$' + quote.market_cap);
    }
    
     if (quote.volume == null) {
         quoteContainer.find('.volume .value').html('N/A');
     }else {
         quoteContainer.find('.volume .value').html(quote_volume);
     }

    var change = quote_change.replace(/[+|-]/g, '');

    
    quoteContainer.find('.change .value .number').html(change);
    
    if(quote_change_pct != '0.00' && quote_change_pct != 'N/A' && quote_change_pct != '0' ) {
        quoteContainer.find('.change .value .percent').html('(' + quote_change_pct + '%)');
    }
    if (home_change) {
        quoteContainer.find('.change .home-change-value').html(change);
    }

    if (quote.change.indexOf('+') > -1 && change !== '0' && change !== '0.00') {
        quoteContainer.find('.change').addClass('up');
    } else if (quote.change.indexOf('-') > -1) {
        quoteContainer.find('.change').addClass('down');
    }
    
    if (quote.low == quote.high) {
        week = quote_low;    
    } else {
        var week = quote_low + ' - ' + quote_high;         
    }
    quoteContainer.find('.week-range .value').html(week);

    if (quote.day_low != 'N/A' && quote.day_high != 'N/A') {
        if (quote.day_low == quote.day_high) {
            var day = quote_day_low;
        } else {
            day = quote_day_low + ' - ' + quote_day_high;
        }
        quoteContainer.find('.day-range .value').html(day);
    } else {
        quoteContainer.find('.day-range .value').html(quote.last)
    }
    
    jq('.jsrange').jsRange({
        dayLow: quote_day_low,
        dayHigh: quote_day_high,
        yearLow: quote_low,
        yearHigh: quote_high
    });

}

// SEC Filings expand
jq(".spr-expandable").hide();
jq(".spr-toggle-expandable").click(function() {
	jq(this).next(".spr-expandable").toggle("blind");
});

// Equal Heights
jq(window).on('load', function() {
    checkWidth();
});

function checkQuoteProperty(value) {
    return (value != "N/A") ? parseFloat(value).toFixed(2) : value;
}

function abbrNum(number, decPlaces) {
    var orig = number;
    var dec = decPlaces;
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10, decPlaces);

    // Enumerate number abbreviations
    var abbrev = ["K", "M", "B", "T"];

    // Go through the array backwards, so we do the largest first
    for (var i = abbrev.length - 1; i >= 0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10, (i + 1) * 3);

        // If the number is bigger or equal do the abbreviation
        if (size <= number) {
            // Here, we multiply by decPlaces, round, and then divide by decPlaces.
            // This gives us nice rounding to a particular decimal place.
            number = Math.round(number * decPlaces / size) / decPlaces;

            // Handle special case where we round up to the next abbreviation
            if ((number == 1000) && (i < abbrev.length - 1)) {
                number = 1;
                i++;
            }

            // console.log(number);
            // Add the letter for the abbreviation
            number += abbrev[i];

            // We are done... stop
            break;
        }
    }

    //console.log('abbrNum('+ orig + ', ' + dec + ') = ' + number);
    return number;
}

// Add commas to numbers
jq.fn.digits = function() {
    return this.each(function() {
        jq(this).text(jq(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
};

//Smooth scroll to
function goToByScroll(id,topSpaceFix) {
    jq('html,body').animate({
        scrollTop: jq(id).offset().top - topSpaceFix
    }, 'slow');
}
jq('.smooth').click(function() {
    goToByScroll(jq(this).attr('href'));
    return false;
});

jq('.go-smooth').click(function() {
    goToByScroll(jq(this).attr('href'), 90);
    return false;
});

//Check Width
var resizeTimer;
jq(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(checkWidth, 250);
});

function checkWidth() {
    if (jq(window).width() > 767) {
        jq('.js-same-height, .js-same-height-row').each(function() {
            jq(this).addClass('active');
        });
        sameHeight();
    } else {
        jq('.js-same-height, .js-same-height-row').each(function() {
            jq(this).removeClass('active');
        });
        jq(".js-same-height,.js-same-height-row .js-height").css('min-height', '').css('height', '');
    }
    if (jq(window).width() < 769) {
        jq('.fancybox').each(function() {
            jq(this).addClass('fancybox-holder').removeClass('fancybox');
        });
        jq('.thickbox').each(function() {
            jq(this).addClass('thickbox-holder').removeClass('thickbox');
        });
    } else {
        jq('.fancybox-holder').each(function() {
            jq(this).addClass('fancybox').removeClass('fancybox-holder');
        });
        jq('.thickbox-holder').each(function() {
            jq(this).addClass('thickbox').removeClass('thickbox-holder');
        });
    }

}

//Match Height With Delay for Qmod. Add class same-height to elements
if (isQmod) {    
    var matchHeightInterval;

    matchHeightInterval = setInterval(matchHeightDelay, 50);
    
    function matchHeightDelay()
    {
        if (jq('.qmod-ui-tool').length == 0) return;
        jq('.same-height').matchHeight(); 
        clearInterval(matchHeightInterval);
    }
}


// Same Height
function sameHeight() {
    jq(".js-same-height-row").each(function() {
        var $maxHeight = 0,
            $window_width = jq(window).width();
        jq('.js-same-height', this).css({
            'height': 'auto',
            'min-height': 0
        });
        if ((jq(this).data('cutoff') && jq(this).data('cutoff') >= $window_width) || $window_width < 768) {
            return false;
        }
        jq('.js-same-height', this).each(function() {
            if (jq(this).outerHeight() > $maxHeight) {
                $maxHeight = jq(this).outerHeight();
            }
        }).css('min-height', $maxHeight);
        jq('.js-height', this).css({
            'height': $maxHeight,
            'min-height': 0
        });
    });
}

// Fixes XBRL Filing Close Button click event being unbound by an early call to tb_remove
jq(document).ajaxComplete(function() {
    jq('#TB_closeAjaxWindow #TB_closeWindowButton').on('mousedown', function() {
        tb_remove();
    });
});

// Checkbox Groups
var update_sec_checkboxes = function() {
    if (jq('#ir-sec-all').is(':checked')) {
        jq(".ir-sec-sub").prop('checked', true).prop('disabled', true);
    } else {
        jq(".ir-sec-sub").prop('disabled', false).prop('checked', false);
    }
}
jq('#ir-sec-all').change(update_sec_checkboxes);
if (jq('#ir-sec-all').is(':checked')) {
    jq(".ir-sec-sub").prop('checked', true).prop('disabled', true);
}

// Crisis Messaging
var crisisMessage = jq('.crisis-messaging');
if (crisisMessage.length) {
    jq('.crisis-messaging a[href="#"]').click(function(e){
        e.preventDefault();
        crisisMessage.addClass('hide');
    });
    var crisisMessageTimestamp = crisisMessage.data('timestamp');
    var crisisMessageCookieName = 'eqMajorAnnouncement';
    var crisisMessageCookie = Cookies.get(crisisMessageCookieName);
    if (crisisMessageCookie != crisisMessageTimestamp) {
        crisisMessage.removeClass('hide');
        Cookies.set(crisisMessageCookieName, crisisMessageTimestamp, {secure: true, domain: window.location.hostname, expires: 7 });
    }
}
jq(function () {
    var fleetSlider = jq('.fleet-slider');
    if (fleetSlider.length) {
        fleetSlider.slick({
            dots: false,
            //appendDots: '.fleet-slider__nav',
            appendArrows: '.fleet-slider__nav',
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll:1
                  }
                }
              ]
        });
        // Fleet slider navigation
        fleetSlider.on('afterChange', function (event, slick, currentSlide) {
            var slideTitle = jq(slick.$slides[currentSlide]).find('h2').text();
            fleetSlider.parent().find('.slick-dots li').each(function (i, el) {
                var tabTitle = jq(this).text().trim();
                if (tabTitle == slideTitle) {
                    jq('.slick-dots li').removeClass('slick-active');
                    jq(this).addClass('slick-active');
                    jq(this).next('li').addClass('slick-active');
                }
            });
        });
        fleetSlider.parent().find('.slick-dots li').click(function (e) {
            var goToIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
            fleetSlider.slick('slickGoTo',  goToIndex - 1);
        });
    }
    
    var homeHero = jq('.home-hero .home-hero__images');
    if (homeHero.length) {
        homeHero.slick({
            dots: true,
            arrows: false,
            appendDots: '.home-hero__nav',
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000
        });
    }
});

// Open image request modal on Image Gallery pages
var $requestModal = jq('#requestModal');
$requestModal.on('show.bs.modal', function (e) {
    console.log(e);
    // Populate the thumbnail in the modal
    var modalAnchor = e.relatedTarget;
    document.getElementById('previewImage').setAttribute('src', modalAnchor.getAttribute('data-img-src'));
    // Add gallery and image ID to form
    document.getElementById('galleryId').setAttribute('value', modalAnchor.getAttribute('data-gallery-id'));
    document.getElementById('imageId').setAttribute('value', modalAnchor.getAttribute('data-image-id'));
});
// Use default ruleset instead of recaptcha ruleset
$requestModal.find('form').validate();
$requestModal.find('form').on('submit', function (e) {
    e.preventDefault();
    // Form is valid, submit to the AJAX request page.
    var form = e.target;
    if (jq(form).valid()) {
        var data = {
            email: form.elements.email.value,
            galleryId: form.elements.galleryId.value,
            imageId: form.elements.imageId.value,
            intended_use: form.elements.intended_use.value
            
        };
        jq.post('/request-image', data, function (results) {
            $requestModal.modal('hide');
            jq('body').append('<div class="alert ' + results.alertClass + ' alert-overlay">' + results.message + "</div>");
            setTimeout(function () {
                jq('.alert-overlay').fadeOut(function () {
                    jq(this).remove();
                });
            }, 1000);
        });
    }
});

// Refresh matchheight on tab click
jq('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    jq.fn.matchHeight._update();    
});

// Fleet slider active checks
// jq('.fleet-slider__nav .slick-dots li').last().click(function(){
//     console.log("last");
//     jq('.fleet-slider__nav .slick-dots li').first().addClass('slick-active');
// });
