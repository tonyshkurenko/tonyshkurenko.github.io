!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({3:function(e,t,n){"use strict";function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"<size>",n=100*window.devicePixelRatio,o=[100,200,300],i=o.findIndex((function(e){return e<n}));return i=-1===i?o.length-1:i+1,e.replace(t,o[i])}function i(e){return e*z}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.r(t);var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,c(t).apply(this,arguments))}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,Phaser.Scene),n=t,(r=[{key:"init",value:function(e){this.game.scale.scaleMode=Phaser.Scale.ScaleModes.FIT,this.game.scale.autoCenter=Phaser.Scale.Center.CENTER_BOTH}},{key:"preload",value:function(){this.load.image("kbp_bg",o("assets/birthday2019/kbp/kbp@<size>x.png")),this.load.image("df_bg",o("assets/birthday2019/dutyFree/df@<size>x.png")),this.load.image("road",o("assets/birthday2019/road/road@<size>x.png")),this.load.image("car",o("assets/birthday2019/car/car@<size>x.png")),this.load.spritesheet("shapes",o("assets/birthday2019/players/shapes@<size>x.png"),{frameWidth:i(32),frameHeight:i(32),margin:0,spacing:0})}},{key:"create",value:function(){this.game.scene.start(I)}}])&&a(n.prototype,r),u&&a(n,u),t}();class h extends Phaser.GameObjects.Zone{constructor(e,t,n,o,i){super(e,t,n,o,i),this.scene=e,this.setOrigin(0),e.physics.add.existing(this),e.add.existing(this),this.body.setEnable(!0),this.body.setImmovable(!0)}collideWith(e,t){this.scene.physics.add.collider(e,this,t,null,this.scene)}putTextInside(e,t){let n=this.scene.add.text(this.x+.5*this.width,this.y+.5*this.height,e,t);n.setAlign("center"),n.setOrigin(.5)}}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"create",value:function(e){this.scene=e,e.physics.world.bounds.width=F,e.physics.world.bounds.height=V,this.roadSprite=e.add.tileSprite(i(.5*E),0,i(175),V,"road"),this.roadSprite.setOrigin(.5,0);var t=e.add.image(0,0,"car");t.setOrigin(0);var n=e.add.image(.2*t.width,.2*t.height,"shapes",0);n.setOrigin(0),n.tint=15684432;var o=e.add.text(.55*t.width,.55*t.height,"🧳",{fontFamily:"Arial",fontSize:i(24),fill:"#ff0000"});o.setOrigin(0);var r=e.add.container(i(.5*E)+.05*this.roadSprite.width,i(.8*T),[t,n,o]);e.physics.add.existing(r),r.body.setSize(t.width,t.height),r.body.setEnable(!0),r.body.setCollideWorldBounds(!0),e.cameras.main.setBounds(0,0,F,V),e.cameras.main.startFollow(r),e.cameras.main.roundPixels=!0,e.time.delayedCall(5e3,(function(){e.tweens.addCounter({from:0,to:1,duration:2e3,onUpdate:function(e,t){r.body.setVelocityY(-750*Phaser.Math.Easing.Back.In(e.progress))}})}))}},{key:"update",value:function(e,t,n){this.roadSprite.tilePositionY-=5}}])&&f(t.prototype,n),o&&f(t,o),e}();function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"create",value:function(e){this.scene=e,e.add.image(0,0,"kbp_bg").setOrigin(0),this.player=e.physics.add.sprite(i(.5*E),i(.9*T),"shapes",0),this.player.tint=15684432,e.physics.world.bounds.width=F,e.physics.world.bounds.height=V,this.player.setCollideWorldBounds(!0);var t=new h(e,i(256),i(0),i(256),i(64));t.collideWith(this.player,(function(t,n){console.log("Collided player: ".concat(t," with kbp zone: ").concat(n)),e.scene.restart({behavior:new y})})),t.putTextInside("🛬 Arrivals",{fontFamily:"Arial",fontSize:i(24),fill:"#000000"});var n=new h(e,i(112),i(200),i(144),i(144));n.collideWith(this.player,(function(e,t){console.log("Collided player: ".concat(e," with flowers zone: ").concat(t))})),n.putTextInside("💐 Flowers",{fontFamily:"Arial",fontSize:i(22),fill:"#000000"});var o=new h(e,i(512),i(200),i(144),i(144));o.collideWith(this.player,(function(e,t){console.log("Collided player: ".concat(e," with exch zone: ").concat(t))})),o.putTextInside("💸 Exchange",{fontFamily:"Arial",fontSize:i(22),fill:"#000000"}),new h(e,i(180),i(475),i(408),i(1)).collideWith(this.player,(function(e,t){console.log("Collided player: ".concat(e," with entrance zone: ").concat(t))})),this.cursors=e.input.keyboard.createCursorKeys(),e.cameras.main.setBounds(0,0,F,V),e.cameras.main.startFollow(this.player),e.cameras.main.roundPixels=!0}},{key:"update",value:function(e,t,n){this.player.body.setVelocity(i(0)),this.cursors.left.isDown?this.player.body.setVelocityX(i(-80)):this.cursors.right.isDown&&this.player.body.setVelocityX(i(80)),this.cursors.up.isDown?this.player.body.setVelocityY(i(-80)):this.cursors.down.isDown&&this.player.body.setVelocityY(i(80))}}])&&d(t.prototype,n),o&&d(t,o),e}();function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"create",value:function(e){var t=this;this.scene=e,e.add.image(0,0,"df_bg").setOrigin(0),this.player=e.physics.add.sprite(i(.5*E),i(.9*T),"shapes",0),this.player.tint=15684432,e.physics.world.bounds.width=F,e.physics.world.bounds.height=V,this.player.setCollideWorldBounds(!0);var n=new h(e,i(256),i(0),i(256),i(64));n.collideWith(this.player,(function(n,o){console.log("Collided player: ".concat(n," with df zone: ").concat(o)),t.scene.cameras.main.flash(400),e.scene.restart({behavior:new p})})),n.putTextInside("🍷👗🕶 Duty Free",{fontFamily:"Arial",fontSize:i(24),fill:"#000000"}),[{name:"YSL",x:0,y:0},{name:"Gucci",x:0,y:144},{name:"Balenciaga",x:0,y:288},{name:"Nike",x:0,y:432},{name:"Versace",x:624,y:0},{name:"Lacoste",x:624,y:144},{name:"Louis Vuitton",x:624,y:288},{name:"Valentino",x:624,y:432}].forEach((function(n){var o=new h(e,i(n.x),i(n.y),i(144),i(144));o.collideWith(t.player,(function(e,t){console.log("Collided player: ".concat(e," with shop zone: ").concat(n.name))})),o.putTextInside(n.name,{fontFamily:"Arial",fontSize:i(22),fill:"#000000"})}));var o=[{ch:"👜",vAlign:"btm",hAlign:"right"},{ch:"💼",vAlign:"btm",hAlign:"right"},{ch:"🌂",vAlign:"btm",hAlign:"right"},{ch:"👒",vAlign:"top",hAlign:"center"},{ch:"🧢",vAlign:"top",hAlign:"center"}];[{x:.4*F,y:.4*V},{x:.4*F+i(40),y:.4*V+i(5)}].forEach((function(n){var r=e.add.image(0,0,"shapes",0);r.x=.5*r.width,r.y=.5*r.height,r.setRotation(Phaser.Math.RND.rotation());var a=e.add.container(n.x,n.y,[r]);if(Phaser.Math.RND.between(0,4)>2){var s=Phaser.Math.RND.pick(o),c=e.add.text(0,0,s.ch,{fontFamily:"Arial",fontSize:i(20),fill:"#ff0000"});switch(s.vAlign){case"center":c.y=.5*r.height-.5*c.height;break;case"btm":c.y=r.height-c.height;break;case"top":c.y=0;break;default:throw"Unsupported vAlign"}switch(s.hAlign){case"center":c.x=.5*r.width-.5*c.width;break;case"right":c.x=r.width-c.width;break;case"left":c.x=0;break;default:throw"Unsupported hAlign"}a.add(c)}e.physics.add.existing(a),a.body.setSize(r.width,r.height),a.body.setEnable(!0),a.body.setImmovable(!0),e.physics.add.collider(t.player,a,(function(){console.log("Collided player with person: ".concat(n))}))})),this.cursors=e.input.keyboard.createCursorKeys(),e.cameras.main.setBounds(0,0,F,V),e.cameras.main.startFollow(this.player),e.cameras.main.roundPixels=!0}},{key:"update",value:function(e,t,n){this.player.body.setVelocity(i(0)),this.cursors.left.isDown?this.player.body.setVelocityX(i(-80)):this.cursors.right.isDown&&this.player.body.setVelocityX(i(80)),this.cursors.up.isDown?this.player.body.setVelocityY(i(-80)):this.cursors.down.isDown&&this.player.body.setVelocityY(i(80))}}])&&b(t.prototype,n),o&&b(t,o),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,x(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,Phaser.Scene),n=t,(o=[{key:"init",value:function(e){}},{key:"preload",value:function(){}},{key:"create",value:function(){this.game.scene.start(W,{behavior:new g})}}])&&w(n.prototype,o),i&&w(n,i),t}();function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,j(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,Phaser.Scene),n=t,(o=[{key:"init",value:function(e){this.behavior=e.behavior}},{key:"preload",value:function(){}},{key:"create",value:function(){this.cameras.main.setBackgroundColor("#FFFFFF"),this.behavior.create&&this.behavior.create(this)}},{key:"update",value:function(e,t){this.behavior.update&&this.behavior.update(this,e,t)}}])&&k(n.prototype,o),i&&k(n,i),t}(),z=window.devicePixelRatio,E=768,T=576,F=E*z,V=T*z;console.log("Game size: ".concat(F,"/").concat(V));var D="boot",I="menu",W="world",B={type:Phaser.AUTO,parent:"game",scale:{mode:Phaser.Scale.NONE,width:F,height:V,zoom:1/z},physics:{default:"arcade",arcade:{gravity:{y:0},debug:!0}}};window.addEventListener("load",(function(){var e;(e=new Phaser.Game(B)).scene.add(D,new u(null)),e.scene.add(I,new S(null)),e.scene.add(W,new C(null)),e.scene.start(D)}))}});
//# sourceMappingURL=birthday2019.bundle.js.map