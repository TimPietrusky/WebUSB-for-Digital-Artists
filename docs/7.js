(window.webpackJsonp=window.webpackJsonp||[]).push([[7,29],{421:function(n,e,t){"use strict";t.r(e),e.default={}},438:function(n,e,t){"use strict";t.r(e);var r=t(5),a=t.n(r),i=(t(421),t(0)),o=t.n(i),c=t(64),u=t.n(c),l=t(448),s=t.n(l),d=t(61),f=(t(450),t(63)),m=t.n(f),p=(t(451),t(16)),v=t(449),h=(t(66),t(453)),b=t(2),y=t(462),E=t(463);function g(){var n=a()(["invert(0%)"]);return g=function(){return n},n}var w=h.a.Slide,x=h.a.A,S=h.a.B,k=[[Object(E.a)([4,0],[9,0])],[Object(E.a)([10,0],[16,0])],[Object(E.a)([17,0],[19,0])],[Object(E.a)([20,0],[28,0])],[Object(E.a)([29,0],[31,0])]],A=o.a.createElement(m.a,null,o.a.createElement("h3",null,"WebUSB explained with USB descriptors"),o.a.createElement("p",null,"Use configuration #1 if no configuration was automatially applied by the Operating System"),o.a.createElement("p",null,"Get exclusive access to interface #2"),o.a.createElement("p",null,"We are ready to receive data on Interface #2 using a controlTransferOut -> Send control commands to the USB device"),o.a.createElement("p",null,"We wait until we receive 512 bytes on Endpoint 5"),o.a.createElement("p",null,"Convert the received bytes data into a String by using a TextDecoder, because what we get are bytes"));e.default=o.a.createElement(w,{key:u()()},o.a.createElement(p.Plugins.Data,{luminave:[""]}),A,o.a.createElement(x,null,o.a.createElement(d.Subtitle,null,o.a.createElement(v.c,{style:{filter:Object(b.css)(g())},time:30,text:"USB Descriptor"})),o.a.createElement(y.a,null,o.a.createElement("li",null,"Device"),o.a.createElement(s.a,{order:1},o.a.createElement("li",null,"Configuration")),o.a.createElement(s.a,{order:2},o.a.createElement("li",null,"Interface")),o.a.createElement(s.a,{order:3},o.a.createElement("li",null,"Interface")),o.a.createElement(s.a,{order:4},o.a.createElement("li",null,"Endpoint")))),o.a.createElement(S,null,o.a.createElement(v.a,{ranges:k,options:{lineNumbers:!0,mode:"javascript",theme:"dracula"},order:-1},"// Request access to the Arduino Leonardo ETH\nnavigator.usb.requestDevice({ filters: [{vendorId: 0x2a03, productId: 0x8040}] })\n\n  // Open session to selected Arduino\n  .then(selectedDevice => {\n    device = selectedDevice\n    return device.open()\n  })\n\n  // Select #1 configuration if not automatially set by OS\n  .then(() => {\n    if (device.configuration === null) {\n      return device.selectConfiguration(1)\n    }\n  })\n\n  // Get exclusive access to Interface #2\n  .then(() => device.claimInterface(2))\n\n  // Tell the Arduino that we are ready to send data on Interface #2\n  .then(() => device.controlTransferOut({\n    'requestType': 'class',\n    'recipient': 'interface',\n    'request': 0x22, // SET_CONTROL_LINE_STATE\n    'value': 0x01, // Yes\n    'index': 0x02 // Interface: #2\n  }))\n\n  // Receive 512 bytes on Endpoint #5\n  .then(() => device.transferIn(5, 512))")))},449:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(61),o=t(8),c=t.n(o),u=t(9),l=t.n(u),s=t(10),d=t.n(s),f=t(6),m=t.n(f),p=t(11),v=t.n(p),h=t(1),b=t.n(h),y=t(65),E=t.n(y),g=(E.a,t(5)),w=t.n(g),x=t(2);function S(){var n=w()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return S=function(){return n},n}x.default.div(S());function k(){var n=w()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return k=function(){return n},n}x.default.div(k());function A(){var n=w()(["\n  font-style: italic\n"]);return A=function(){return n},n}x.default.span(A());function O(){var n=w()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return O=function(){return n},n}x.default.span(O());function B(){var n=w()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return B=function(){return n},n}function I(){var n=w()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return I=function(){return n},n}function j(){var n=w()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return j=function(){return n},n}var D=Object(x.keyframes)(j()),C=x.default.span(I(),D,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),T=x.default.div(B()),q=function(n){var e=n.text.split(""),t=e.length,r=n.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,{style:r},e.map(function(e,r){var i=n.time/t*(t-r)*-1;return a.a.createElement(C,{key:r,time:n.time,delay:i},e)})))};q.defaultProps={time:.85};var M=q;function z(){var n=w()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return z=function(){return n},n}x.default.span(z());var P=t(454),U=t.n(P),F=(t(448),t(455));function R(){var n=w()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return R=function(){return n},n}var W=t(14).search.parse(window.location.href),V=W.present,L=(W.live,function(n){function e(n){return c()(this,e),l()(this,d()(e).call(this,n))}return v()(e,n),m()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),N=x.default.div(R()),_=function(n){function e(n){return c()(this,e),l()(this,d()(e).call(this,n))}return v()(e,n),m()(e,[{key:"render",value:function(){var n=this;return V?this.props.children(U()({},this.props,{quiet:!0,children:[a.a.createElement("div",null,"YouTube")]})):a.a.createElement(F.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,e.iframe),n.props.children(U()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function G(){var n=w()(["\n  width: 5vw;\n"]);return G=function(){return n},n}function J(){var n=w()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return J=function(){return n},n}function Y(){var n=w()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return Y=function(){return n},n}x.default.div(Y()),x.default.div(J()),x.default.div(G());var H=t(456),Q=t.n(H),X=(t(452),t(457),function(n){return a.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},a.a.createElement(Q.a,n))});function K(){var n=w()(["\n    font-size: 3.5rem;\n    --quote-border-color: #ddd;\n"]);return K=function(){return n},n}var Z=x.default.div(K()),$=function(n){return a.a.createElement(Z,null,a.a.createElement(i.Quote,n))};function nn(){var n=w()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return nn=function(){return n},n}var en=x.default.span(nn()),tn=t(62);t.d(e,"c",function(){return M}),t.d(e,"g",function(){return _}),t.d(e,"f",function(){return L}),t.d(e,"a",function(){return X}),t.d(e,"b",function(){return $}),t.d(e,"e",function(){return en}),t.d(e,"d",function(){return tn.a})},453:function(n,e,t){"use strict";t.d(e,"a",function(){return p}),t.d(e,"b",function(){return v});var r=t(5),a=t.n(r),i=t(0),o=t.n(i),c=t(458),u=t.n(c),l=t(459);function s(){var n=a()(["\n  ",";\n"]);return s=function(){return n},n}function d(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]);return d=function(){return n},n}function f(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return f=function(){return n},n}function m(){var n=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return m=function(){return n},n}var p=Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(m(),u.a.AB.leftRight,c.vertical.center),v=Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(f(),u.a.AB.topBottom,c.vertical.end,c.vertical.start);Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"})))(d(),u.a.ABC.right,c.vertical.start),Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"}),o.a.createElement(l.Slot,{name:"D"})))(s(),u.a.ABCD)},462:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(5),a=t.n(r);t(0);function i(){var n=a()(["\n  list-style: none;\n  text-align: right;\n  font-size: 2em;\n  padding-right: .25em;\n  margin: .5em 1em 0 0;\n  width: 100%;\n\n  > span {\n    display: block !important;\n  }\n\n  > span[style=\"--time:0;\"] {\n  }\n\n  li {\n      position: relative;\n      text-align: right;\n      display: inline-block;\n      margin: 0 0 .35em auto;\n      padding-bottom: .1em;\n      border-bottom: 1px solid var(--theme-primary-dark);\n\n      &:before {\n          content: '';\n          position: absolute;\n          left: -1em;\n          top: 0;\n      }\n  }\n"]);return i=function(){return n},n}var o=t(2).default.ul(i())},463:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(464),a=t.n(r),i=function(n,e){var t=a()(n,2),r=t[0],i=void 0===r?0:r,o=t[1],c=void 0===o?0:o,u=a()(e,2),l=u[0],s=void 0===l?0:l,d=u[1];return{anchor:{line:i-1,ch:c},head:{line:s-1,ch:void 0===d?0:d}}}},464:function(n,e,t){var r=t(465),a=t(466),i=t(467);n.exports=function(n,e){return r(n)||a(n,e)||i()}},465:function(n,e){n.exports=function(n){if(Array.isArray(n))return n}},466:function(n,e){n.exports=function(n,e){var t=[],r=!0,a=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(n){a=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}},467:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}]);
//# sourceMappingURL=7.js.map