!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t,e){"use strict";function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}e.d(t,"a",(function(){return i})),e.d(t,"p",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"e",(function(){return c})),e.d(t,"n",(function(){return s})),e.d(t,"f",(function(){return h})),e.d(t,"b",(function(){return f})),e.d(t,"d",(function(){return d})),e.d(t,"q",(function(){return l})),e.d(t,"l",(function(){return m})),e.d(t,"m",(function(){return v})),e.d(t,"o",(function(){return b})),e.d(t,"h",(function(){return p})),e.d(t,"k",(function(){return y})),e.d(t,"i",(function(){return w})),e.d(t,"r",(function(){return g})),e.d(t,"g",(function(){return M})),e.d(t,"j",(function(){return j}));var i=2*Math.PI;function o(n,t,e){e=e||window;var r=!1;e.addEventListener(n,(function(){r||(r=!0,requestAnimationFrame((function(){e.dispatchEvent(new CustomEvent(t)),r=!1})))}))}var a=-1,u=-2;function c(n){var t={keepAnimating:!0},e=performance.now();return requestAnimationFrame((function r(i){var o=(i-e)/n.duration;o>1&&(o=1),o<0&&(o=0);var c=n.timing(o);if(n.draw(c),t.keepAnimating)if(o<1)requestAnimationFrame(r);else{var s=!0;if(n.repeatCount===a){var h=n.timing;n.timing=function(n){return h(1-n)},n.repeatCount=0}else n.repeatCount===u||(n.repeatCount>0?n.repeatCount--:s=!1);s&&(e=performance.now(),requestAnimationFrame(r))}})),t}function s(n,t){var e={keepAnimating:!0},r=setInterval((function(){e.keepAnimating?requestAnimationFrame(n):clearInterval(r)}),t);return e}function h(n,t,e){return(1-e)*n+e*t}var f=function(){function n(t,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.x=parseFloat(t.toFixed(4)),this.y=parseFloat(e.toFixed(4))}var t,e,i;return t=n,(e=[{key:"connect",value:function(n,t){t.moveTo(this.x,this.y),t.lineTo(n.x,n.y)}},{key:"add",value:function(t){return new n(this.x+t.x,this.y+t.y)}},{key:"sub",value:function(t){return new n(this.x-t.x,this.y-t.y)}},{key:"dist",value:function(n){return Math.hypot(this.x-n.x,this.y-n.y)}},{key:"len",value:function(){return Math.hypot(this.x,this.y)}},{key:"mult",value:function(t){return new n(this.x*t,this.y*t)}},{key:"div",value:function(t){return new n(this.x/t,this.y/t)}},{key:"isInside",value:function(n,t){return this.dist(n)<=t}}])&&r(t.prototype,e),i&&r(t,i),n}();function d(n,t){return Math.atan2(t.y-n.y,t.x-n.x)}function l(n){return n*(180/Math.PI)}function m(n,t){return n*Math.cos(t)}function v(n,t){return n*Math.sin(t)}function b(n,t){var e;return(e=(n=n||0)%360)<0&&(e+=360),e<180&&t>e+180&&(n-=360),e>=180&&t<=e-180&&(n+=360),n+=t-e}function p(n,t,e){var r=t.sub(n),i=r.len();if(i<e)return t;var o=r.div(i);return n.add(o.mult(e))}function y(n,t){var e=(y.canvas||(y.canvas=document.createElement("canvas"))).getContext("2d");e.font=t;var r=e.measureText(n);return new f(r.width,32)}function w(n,t,e){for(var r=i/e,o=t,a=[],u=0;u<e;u++)a.push(new f(m(n,o),v(n,o))),o+=r;return a}function g(n){return n*(2*Math.random()-1)}function x(n,t){for(var e=1,r=n-t+1;r<=n;r++)e*=r;for(var i=1;i<=t;i++)e/=i;return e}function M(n,t){for(var e=t.length-1,r=0,i=0,o=0;o<=e;o++)i+=x(e,o)*Math.pow(1-n,e-o)*Math.pow(n,o)*t[o].x,r+=x(e,o)*Math.pow(1-n,e-o)*Math.pow(n,o)*t[o].y;return{x:i,y:r}}function j(n,t){n.beginPath(),n.moveTo(t[0].x,t[0].y);for(var e=1;e<t.length-2;e++){var r=(t[e].x+t[e+1].x)/2,i=(t[e].y+t[e+1].y)/2;n.quadraticCurveTo(t[e].x,t[e].y,r,i)}var o=t.length-2;n.quadraticCurveTo(t[o].x,t[o].y,t[o+1].x,t[o+1].y),n.stroke()}},,,,function(n,t,e){"use strict";e.r(t);var r=e(0),i=0,o=0,a=100,u=30;function c(n,t,e,r){return n+r*Math.sin(e*t)}function s(n,t,e,i){var o=Math.PI/180,a=0,u=Object(r.l)(c(t,a,10,i),a)+e.x,s=Object(r.m)(c(t,a,10,i),a)+e.y;for(n.beginPath();a<2*Math.PI;)n.moveTo(u,s),u=Object(r.l)(c(t,a,10,i),a)+e.x,s=Object(r.m)(c(t,a,10,i),a)+e.y,a+=o,n.lineTo(u,s);n.stroke()}var h=0,f=(Math.PI,100),d=0,l=0;var m=5,v=1;var b=30*Math.random()+50;var p=Object(r.i)(200,Math.random()*r.a,b);function y(n,t){n.fillStyle="rgba(0,0,0,0.05)",p=p.map((function(n){return n.add(new r.b(Object(r.r)(20),Object(r.r)(20)))}));for(var e=0;e<1;e+=.006*Math.random()+.001){n.beginPath();var i=Object(r.g)(e,p);n.arc(t.center.x+i.x,t.center.y+i.y,1,0,r.a),n.fill()}}var w=30*Math.random()+25;function g(n){return n.map((function(n){return n.add(new r.b(Object(r.r)(3),Object(r.r)(3)))}))}var x=[g,function(n){return g(n)}],M=Object(r.i)(200,Math.random()*r.a,w);function j(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var A=[[0,1],[0,3],[1,2],[1,3],[1,4],[2,4],[2,6],[3,4],[3,5],[4,5],[4,6],[5,6],[5,7],[6,7],[6,8],[7,8]],O=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.nodes=[],this.mirrornodes=[],this.nodes.push(new r.b(0,0)),this.nodes.push(new r.b(0,-t)),this.nodes.push(new r.b(0,-2*t)),this.nodes.push(new r.b(t/2,-t/2)),this.nodes.push(new r.b(.5*t,-1.5*t)),this.nodes.push(new r.b(t,-t)),this.nodes.push(new r.b(t,-2*t)),this.nodes.push(new r.b(1.5*t,-1.5*t)),this.nodes.push(new r.b(2*t,-2*t)),this.mirrornodes.push(new r.b(0,0)),this.mirrornodes.push(new r.b(t,0)),this.mirrornodes.push(new r.b(2*t,0)),this.mirrornodes.push(new r.b(t/2,-t/2)),this.mirrornodes.push(new r.b(1.5*t,-.5*t)),this.mirrornodes.push(new r.b(t,-t)),this.mirrornodes.push(new r.b(2*t,-t)),this.mirrornodes.push(new r.b(1.5*t,-1.5*t)),this.mirrornodes.push(new r.b(2*t,-2*t)),this.connectChoices=new Array(16);for(var e=0;e<this.connectChoices.length;e++)this.connectChoices[e]=Math.random()>=.5}var t,e,i;return t=n,(e=[{key:"connectDraw",value:function(n){for(var t=0;t<this.connectChoices.length;t++)this.connectChoices[t]&&(this.nodes[A[t][0]].connect(this.nodes[A[t][1]],n),this.mirrornodes[A[t][0]].connect(this.mirrornodes[A[t][1]],n))}},{key:"display",value:function(n){for(var t=0;t<4;t++)n.save(),n.rotate(Math.PI/2*t),this.connectDraw(n),n.restore()}}])&&j(t.prototype,e),i&&j(t,i),n}();var k=[function n(t,e){var c=e.center.len();i=c,o=c/a,n.lastAnimation&&(n.lastAnimation.keepAnimating=!1),n.lastAnimation=Object(r.e)({duration:5e3,timing:function(n){return Object(r.f)(0,a,Math.abs(n))},draw:function(n){!function(n,t,e){n.clearRect(0,0,t.width,t.height);for(var r=o+e;r<i;){var c=r/i;n.strokeStyle="rgba(0,0,0,"+c+")",s(n,r,t.center,u*c),r+=a}}(t,e,n)},repeatCount:r.c})},function n(t,e){h=.4*Math.min(e.height,e.width),n.lastAnimation&&(n.lastAnimation.keepAnimating=!1),n.lastAnimation=Object(r.n)((function(){!function(n,t){n.fillStyle="rgba(0,0,0,0.05)";for(var e=0;e<f;e++){n.beginPath(),d+=2*Math.random()-1;var i=h+d;n.arc(t.center.x+Object(r.l)(i,l),t.center.y+Object(r.m)(i,l),1,0,r.a),n.fill(),l+=1/i}}(t,e)}),16)},function n(t,e){n.lastAnimation&&(n.lastAnimation.keepAnimating=!1),n.lastAnimation=Object(r.n)((function(){!function(n,t){for(var e=0;e<v;e++){var i=new r.b(Math.random()*t.width,Math.random()*t.height),o=Math.floor(50*Math.random())+m,a=void 0;if(t.center.isInside(i,o))a=n.createRadialGradient(t.center.x,t.center.y,1,i.x,i.y,o);else{var u=Object(r.d)(i,t.center),c=Math.cos(u)*o,s=Math.sin(u)*o;a=n.createLinearGradient(i.x+c,i.y+s,i.x-c,i.y-s)}a.addColorStop(0,"rgba(0,0,0,0.05)"),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.beginPath(),n.arc(i.x,i.y,o,0,r.a),n.fill()}}(t,e)}),25)},function n(t,e){n.lastAnimation&&(n.lastAnimation.keepAnimating=!1),n.lastAnimation=Object(r.n)((function(){y(t,e)}),100)},function n(t,e){n.lastAnimation&&(n.lastAnimation.keepAnimating=!1);var i=x[Math.floor(Math.random()*x.length)];n.lastAnimation=Object(r.n)((function(){!function(n,t,e){n.setLineDash([1,1+6*Math.random()]),n.fillStyle="rgba(0,0,0,0.05)",n.strokeStyle="rgba(0,0,0,0.05)",n.lineJoin="round",n.lineWidth=1,M=e(M),Object(r.j)(n,M.map((function(n){return n.add(t.center)})))}(t,e,i)}),16)},function(n,t){var e=50,r=50,i=Math.floor(t.width/(30+r)+1),o=Math.floor(t.height/(30+e)+1);r=t.width/(i-1)-30,e=t.height/(o-1)-30,n.strokeStyle="rgba(0,0,0,0.5)",n.clearRect(0,0,t.width,t.height),function(n,t,e,r,i,o,a,u){n.beginPath();for(var c=0;c<e;c++)for(var s=0;s<r;s++)n.save(),n.translate(c*(i+u),s*(o+u)),new O(a).display(n),n.restore();n.stroke()}(n,0,i,o,r,e,10,30)}],C=new r.b(0,0);window.addEventListener("load",(function(){var n=document.getElementById("bg-canvas"),t=n.getContext("2d"),e=document.getElementsByTagName("body")[0],r=k[Math.floor(Math.random()*k.length)];function i(){n.width=window.innerWidth,n.height=window.innerHeight,C.x=.5*e.clientWidth,C.y=.5*e.clientHeight,r(t,{center:C,height:n.height,width:n.width})}i(),window.addEventListener("optimizedResize",(function(){i()}))}))}]);
//# sourceMappingURL=bg.bundle.js.map