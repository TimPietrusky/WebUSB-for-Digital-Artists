(window.webpackJsonp=window.webpackJsonp||[]).push([[14,30],{421:function(n,e,t){"use strict";t.r(e),e.default={}},440:function(n,e,t){"use strict";t.r(e);var r=t(5),a=t.n(r),i=(t(421),t(0)),o=t.n(i),l=t(64),u=t.n(l),c=t(449),s=t.n(c),d=t(61),f=t(451),m=t(63),p=t.n(m),v=(t(452),t(16)),h=t(450),b=t(461),E=t(453),g=t(2);function y(){var n=a()(["40vw"]);return y=function(){return n},n}var w=E.a.Slide,k=E.a.A,x=E.a.B,S=o.a.createElement(p.a,null,o.a.createElement("h3",null,"WebUSB DMX512 controller"),o.a.createElement("p",null,"In my digital art projects I love to use DMX512, which is a standard for professional lighting"),o.a.createElement("p",null,"One way of controlling other hardware with the Arduino is by using shields, so I added this DMX512 shield on top of the Arduino"),o.a.createElement("p",null,"I have written a detailed guide on how you can do this too, but as I don't have much time left I will just show you the WebUSB DMX512 Controller in action"));e.default=o.a.createElement(w,{key:u()()},o.a.createElement(v.Plugins.Data,{luminave:[""]}),S,o.a.createElement(k,null,o.a.createElement(s.a,{order:0},o.a.createElement(d.Title,null,o.a.createElement(h.c,{time:30,text:"DMX512"}))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(s.a,{order:2},o.a.createElement(d.Subtitle,null,o.a.createElement(b.a,{style:{maxWidth:Object(g.css)(y())},href:"https://medium.com/@timpietrusky/how-to-build-a-webusb-dmx512-controller-by-using-an-arduino-e0dd8efb7bf0"},"How to build a",o.a.createElement("br",null),"WebUSB DMX512",o.a.createElement("br",null),"Controller",o.a.createElement("br",null),"by using an Arduino")))),o.a.createElement(x,null,o.a.createElement(s.a,{fit:!0,order:1},o.a.createElement(f.FitImage,{src:"media/webusb_dmx512_controller.jpg",alt:"WebUSB DMX512 Controller"}))))},450:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(61),o=t(8),l=t.n(o),u=t(9),c=t.n(u),s=t(10),d=t.n(s),f=t(6),m=t.n(f),p=t(11),v=t.n(p),h=t(1),b=t.n(h),E=t(65),g=t.n(E),y=(g.a,t(5)),w=t.n(y),k=t(2);function x(){var n=w()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}k.default.div(x());function S(){var n=w()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return S=function(){return n},n}k.default.div(S());function A(){var n=w()(["\n  font-style: italic\n"]);return A=function(){return n},n}k.default.span(A());function M(){var n=w()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return M=function(){return n},n}k.default.span(M());function B(){var n=w()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return B=function(){return n},n}function D(){var n=w()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return D=function(){return n},n}function j(){var n=w()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return j=function(){return n},n}var C=Object(k.keyframes)(j()),I=k.default.span(D(),C,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),O=k.default.div(B()),z=function(n){var e=n.text.split(""),t=e.length,r=n.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{style:r},e.map(function(e,r){var i=n.time/t*(t-r)*-1;return a.a.createElement(I,{key:r,time:n.time,delay:i},e)})))};z.defaultProps={time:.85};var X=z;function P(){var n=w()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return P=function(){return n},n}k.default.span(P());var W=t(455),q=t.n(W),F=(t(449),t(456));function U(){var n=w()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return U=function(){return n},n}var V=t(14).search.parse(window.location.href),J=V.present,R=(V.live,function(n){function e(n){return l()(this,e),c()(this,d()(e).call(this,n))}return v()(e,n),m()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),T=k.default.div(U()),_=function(n){function e(n){return l()(this,e),c()(this,d()(e).call(this,n))}return v()(e,n),m()(e,[{key:"render",value:function(){var n=this;return J?this.props.children(q()({},this.props,{quiet:!0,children:[a.a.createElement("div",null,"YouTube")]})):a.a.createElement(F.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null,e.iframe),n.props.children(q()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function H(){var n=w()(["\n  width: 5vw;\n"]);return H=function(){return n},n}function Q(){var n=w()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return Q=function(){return n},n}function Y(){var n=w()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return Y=function(){return n},n}k.default.div(Y()),k.default.div(Q()),k.default.div(H());var G=t(457),K=t.n(G),L=(t(454),t(458),function(n){return a.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},a.a.createElement(K.a,n))});function N(){var n=w()(["\n    font-size: .65em;\n    color: #ccc;\n    margin: 0 0 0 3em;\n    font-style: italic;\n"]);return N=function(){return n},n}function Z(){var n=w()(['\n    font-size: 3.5rem;\n    --quote-border-color: #fff;\n    position: relative;\n\n    :before, \n    :after {\n      position: absolute;\n      font-size: 4em;\n      color: #ccc;\n      \n    }\n\n    :before {\n      content: "“";\n      top: 0;\n      left: 0;\n    }\n\n    :after {\n      content: "”";\n      bottom: 0;\n      right: 0;\n      line-height: 0;\n    }\n']);return Z=function(){return n},n}var $=k.default.div(Z()),nn=k.default.div(N()),en=function(n){return a.a.createElement($,null,a.a.createElement(i.Quote,n),a.a.createElement(nn,null,n.source))};function tn(){var n=w()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return tn=function(){return n},n}var rn=k.default.span(tn()),an=t(62);t.d(e,"c",function(){return X}),t.d(e,"g",function(){return _}),t.d(e,"f",function(){return R}),t.d(e,"a",function(){return L}),t.d(e,"b",function(){return en}),t.d(e,"e",function(){return rn}),t.d(e,"d",function(){return an.a})},453:function(n,e,t){"use strict";t.d(e,"a",function(){return v}),t.d(e,"b",function(){return h});var r=t(5),a=t.n(r),i=t(0),o=t.n(i),l=t(459),u=t.n(l),c=t(460);function s(){var n=a()(["\n  ",";\n"]);return s=function(){return n},n}function d(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]);return d=function(){return n},n}function f(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return f=function(){return n},n}function m(){var n=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return m=function(){return n},n}function p(){var n=a()(["\n    ",";\n    [data-slot='A'] {\n        ",";\n        align-items: flex-start;\n    }\n"]);return p=function(){return n},n}Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"})))(p(),u.a.A,l.vertical.center);var v=Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"})))(m(),u.a.AB.leftRight,l.vertical.center),h=Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"})))(f(),u.a.AB.topBottom,l.vertical.end,l.vertical.start);Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"}),o.a.createElement(c.Slot,{name:"C"})))(d(),u.a.ABC.right,l.vertical.start),Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"}),o.a.createElement(c.Slot,{name:"C"}),o.a.createElement(c.Slot,{name:"D"})))(s(),u.a.ABCD)},461:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(5),a=t.n(r);t(0);function i(){var n=a()(["\n  color: var(--theme-on-primary);\n  background: var(--theme-primary);\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1rem var(--theme-primary);\n  line-height: 1.25em;\n  display: inline-block;\n  max-width: 80vw;\n  text-decoration: none;\n\n  :hover {\n      filter: invert(100%);\n  }\n"]);return i=function(){return n},n}var o=t(2).default.a(i())}}]);
//# sourceMappingURL=14.js.map