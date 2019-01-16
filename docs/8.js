(window.webpackJsonp=window.webpackJsonp||[]).push([[8,30],{421:function(n,e,t){"use strict";t.r(e),e.default={}},439:function(n,e,t){"use strict";t.r(e);var r=t(5),a=t.n(r),i=(t(421),t(0)),o=t.n(i),u=t(64),l=t.n(u),c=t(449),s=t.n(c),d=t(61),f=(t(451),t(63)),m=t.n(f),p=(t(452),t(16)),v=t(450),h=(t(66),t(454)),y=t(2),b=t(463),E=t(464);function g(){var n=a()(["invert(0%)"]);return g=function(){return n},n}var w=h.a.Slide,x=h.a.A,k=h.a.B,S=[[Object(E.a)([1,0],[3,0])],[Object(E.a)([4,0],[12,0])],[Object(E.a)([13,0],[15,0])]],A=o.a.createElement(m.a,null,o.a.createElement("h3",null,"WebUSB explained with USB descriptors"),o.a.createElement("p",null,"We can also send data (ArrayBuffer) to the Arduino by calling transferOut on Endpoint 4"),o.a.createElement("p",null,"And when we are done using the Arduino we can tell it on Interface #2 that we don't want to receive data anymore"),o.a.createElement("p",null,"And then close the connection"));e.default=o.a.createElement(w,{key:l()()},o.a.createElement(p.Plugins.Data,{luminave:[""]}),A,o.a.createElement(x,null,o.a.createElement(d.Subtitle,null,o.a.createElement(v.c,{style:{filter:Object(y.css)(g())},time:30,text:"USB Descriptor"})),o.a.createElement(b.a,null,o.a.createElement("li",null,"Endpoint"),o.a.createElement(s.a,{order:1},o.a.createElement("li",null,"Interface")),o.a.createElement(s.a,{order:2},o.a.createElement("li",null,"Device")))),o.a.createElement(k,null,o.a.createElement(v.a,{ranges:S,options:{lineNumbers:!0,mode:"javascript",theme:"dracula"},order:-1},"// Send data (ArrayBuffer) to the Arduino on Endpoint #4\ndevice.transferOut(4, data)\n\n// Tell the Arduino that we don't want to receive data anymore on Interface #2\ndevice.controlTransferOut({\n  'requestType': 'class',\n  'recipient': 'interface',\n  'request': 0x22,\n  'value': 0x01,\n  'index': 0x02\n})\n\n  // Close the connection to the USB device\n  .then(() => device.close())")))},450:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(61),o=t(8),u=t.n(o),l=t(9),c=t.n(l),s=t(10),d=t.n(s),f=t(6),m=t.n(f),p=t(11),v=t.n(p),h=t(1),y=t.n(h),b=t(65),E=t.n(b),g=(E.a,t(5)),w=t.n(g),x=t(2);function k(){var n=w()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return k=function(){return n},n}x.default.div(k());function S(){var n=w()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return S=function(){return n},n}x.default.div(S());function A(){var n=w()(["\n  font-style: italic\n"]);return A=function(){return n},n}x.default.span(A());function B(){var n=w()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return B=function(){return n},n}x.default.span(B());function O(){var n=w()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return O=function(){return n},n}function j(){var n=w()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return j=function(){return n},n}function C(){var n=w()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return C=function(){return n},n}var D=Object(x.keyframes)(C()),M=x.default.span(j(),D,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),q=x.default.div(O()),z=function(n){var e=n.text.split(""),t=e.length,r=n.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,{style:r},e.map(function(e,r){var i=n.time/t*(t-r)*-1;return a.a.createElement(M,{key:r,time:n.time,delay:i},e)})))};z.defaultProps={time:.85};var P=z;function I(){var n=w()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return I=function(){return n},n}x.default.span(I());var U=t(455),F=t.n(U),T=(t(449),t(456));function V(){var n=w()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return V=function(){return n},n}var W=t(14).search.parse(window.location.href),J=W.present,R=(W.live,function(n){function e(n){return u()(this,e),c()(this,d()(e).call(this,n))}return v()(e,n),m()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),N=x.default.div(V()),Q=function(n){function e(n){return u()(this,e),c()(this,d()(e).call(this,n))}return v()(e,n),m()(e,[{key:"render",value:function(){var n=this;return J?this.props.children(F()({},this.props,{quiet:!0,children:[a.a.createElement("div",null,"YouTube")]})):a.a.createElement(T.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null,e.iframe),n.props.children(F()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function X(){var n=w()(["\n  width: 5vw;\n"]);return X=function(){return n},n}function Y(){var n=w()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return Y=function(){return n},n}function G(){var n=w()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return G=function(){return n},n}x.default.div(G()),x.default.div(Y()),x.default.div(X());var H=t(457),K=t.n(H),L=(t(453),t(458),function(n){return a.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},a.a.createElement(K.a,n))});function Z(){var n=w()(["\n    font-size: 3.5rem;\n    --quote-border-color: #ddd;\n"]);return Z=function(){return n},n}var $=x.default.div(Z()),_=function(n){return a.a.createElement($,null,a.a.createElement(i.Quote,n))};function nn(){var n=w()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return nn=function(){return n},n}var en=x.default.span(nn()),tn=t(62);t.d(e,"c",function(){return P}),t.d(e,"g",function(){return Q}),t.d(e,"f",function(){return R}),t.d(e,"a",function(){return L}),t.d(e,"b",function(){return _}),t.d(e,"e",function(){return en}),t.d(e,"d",function(){return tn.a})},454:function(n,e,t){"use strict";t.d(e,"a",function(){return p}),t.d(e,"b",function(){return v});var r=t(5),a=t.n(r),i=t(0),o=t.n(i),u=t(459),l=t.n(u),c=t(460);function s(){var n=a()(["\n  ",";\n"]);return s=function(){return n},n}function d(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]);return d=function(){return n},n}function f(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return f=function(){return n},n}function m(){var n=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return m=function(){return n},n}var p=Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"})))(m(),l.a.AB.leftRight,u.vertical.center),v=Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"})))(f(),l.a.AB.topBottom,u.vertical.end,u.vertical.start);Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"}),o.a.createElement(c.Slot,{name:"C"})))(d(),l.a.ABC.right,u.vertical.start),Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"}),o.a.createElement(c.Slot,{name:"C"}),o.a.createElement(c.Slot,{name:"D"})))(s(),l.a.ABCD)},463:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(5),a=t.n(r);t(0);function i(){var n=a()(["\n  list-style: none;\n  text-align: right;\n  font-size: 2em;\n  padding-right: .25em;\n  margin: .5em 1em 0 0;\n  width: 100%;\n\n  > span {\n    display: block !important;\n  }\n\n  > span[style=\"--time:0;\"] {\n  }\n\n  li {\n      position: relative;\n      text-align: right;\n      display: inline-block;\n      margin: 0 0 .35em auto;\n      padding-bottom: .1em;\n      border-bottom: 1px solid var(--theme-primary-dark);\n\n      &:before {\n          content: '';\n          position: absolute;\n          left: -1em;\n          top: 0;\n      }\n  }\n"]);return i=function(){return n},n}var o=t(2).default.ul(i())},464:function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t(465),a=t.n(r),i=function(n,e){var t=a()(n,2),r=t[0],i=void 0===r?0:r,o=t[1],u=void 0===o?0:o,l=a()(e,2),c=l[0],s=void 0===c?0:c,d=l[1];return{anchor:{line:i-1,ch:u},head:{line:s-1,ch:void 0===d?0:d}}}},465:function(n,e,t){var r=t(466),a=t(467),i=t(468);n.exports=function(n,e){return r(n)||a(n,e)||i()}},466:function(n,e){n.exports=function(n){if(Array.isArray(n))return n}},467:function(n,e){n.exports=function(n,e){var t=[],r=!0,a=!1,i=void 0;try{for(var o,u=n[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!e||t.length!==e);r=!0);}catch(n){a=!0,i=n}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return t}},468:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}]);
//# sourceMappingURL=8.js.map