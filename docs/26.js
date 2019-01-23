(window.webpackJsonp=window.webpackJsonp||[]).push([[26,48],{421:function(n,e,t){"use strict";t.r(e),e.default={}},459:function(n,e,t){"use strict";t.r(e);t(421);var r=t(0),a=t.n(r),i=t(64),o=t.n(i),u=(t(467),t(61),t(469),t(63)),l=t.n(u),c=t(470),s=t(16),f=(t(468),t(473),t(471),t(2),c.Main.Slide),d=c.Main.A,m=a.a.createElement(l.a,null,a.a.createElement("h3",null,"WebUSB DMX512 controller"),a.a.createElement("p",null,"One way of controlling other hardware with the Arduino is by using shields, so I added this DMX512 shield on top of the Arduino"));e.default=a.a.createElement(f,{key:o()(),background:'url("media/webusb_dmx512_controller.jpg")'},a.a.createElement(s.Plugins.Data,{luminave:[""]}),m,a.a.createElement(d,null,a.a.createElement("br",null)))},468:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(61),o=t(8),u=t.n(o),l=t(9),c=t.n(l),s=t(10),f=t.n(s),d=t(6),m=t.n(d),p=t(11),v=t.n(p),h=t(1),b=t.n(h),g=t(65),y=t.n(g),E=(y.a,t(5)),w=t.n(E),k=t(2);function x(){var n=w()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}k.default.div(x());function S(){var n=w()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return S=function(){return n},n}k.default.div(S());function A(){var n=w()(["\n  font-style: italic\n"]);return A=function(){return n},n}k.default.span(A());function M(){var n=w()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return M=function(){return n},n}k.default.span(M());function B(){var n=w()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return B=function(){return n},n}function D(){var n=w()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return D=function(){return n},n}function j(){var n=w()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return j=function(){return n},n}var z=Object(k.keyframes)(j()),C=k.default.span(D(),z,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),O=k.default.div(B()),P=function(n){var e=n.text.split(""),t=e.length,r=n.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{style:r},e.map(function(e,r){var i=n.time/t*(t-r)*-1;return a.a.createElement(C,{key:r,time:n.time,delay:i},e)})))};P.defaultProps={time:.85};var q=P;function F(){var n=w()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return F=function(){return n},n}k.default.span(F());var V=t(474),I=t.n(V),U=(t(467),t(475));function W(){var n=w()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return W=function(){return n},n}var X=t(14).search.parse(window.location.href),J=X.present,R=(X.live,function(n){function e(n){return u()(this,e),c()(this,f()(e).call(this,n))}return v()(e,n),m()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),_=k.default.div(W()),Q=function(n){function e(n){return u()(this,e),c()(this,f()(e).call(this,n))}return v()(e,n),m()(e,[{key:"render",value:function(){var n=this;return J?this.props.children(I()({},this.props,{quiet:!0,children:[a.a.createElement("div",null,"YouTube")]})):a.a.createElement(U.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,null,e.iframe),n.props.children(I()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function T(){var n=w()(["\n  width: 5vw;\n"]);return T=function(){return n},n}function Y(){var n=w()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n\n  &.left {\n    align-items: flex-end;\n  }\n\n  &.right {\n    align-items: flex-start;\n  }\n"]);return Y=function(){return n},n}function G(){var n=w()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return G=function(){return n},n}k.default.div(G()),k.default.div(Y()),k.default.div(T());var H=t(476),K=t.n(H),L=(t(472),t(477),function(n){return a.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},a.a.createElement(K.a,n))});function N(){var n=w()(["\n    font-size: .65em;\n    color: #ccc;\n    margin: 0 0 0 3em;\n    font-style: italic;\n"]);return N=function(){return n},n}function Z(){var n=w()(['\n    font-size: 3.5rem;\n    --quote-border-color: #fff;\n    position: relative;\n\n    :before, \n    :after {\n      position: absolute;\n      font-size: 4em;\n      color: #ccc;\n      \n    }\n\n    :before {\n      content: "“";\n      top: 0;\n      left: 0;\n    }\n\n    :after {\n      content: "”";\n      bottom: 0;\n      right: 0;\n      line-height: 0;\n    }\n']);return Z=function(){return n},n}var $=k.default.div(Z()),nn=k.default.div(N()),en=function(n){return a.a.createElement($,null,a.a.createElement(i.Quote,n),a.a.createElement(nn,null,n.source))};function tn(){var n=w()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return tn=function(){return n},n}var rn=k.default.span(tn()),an=t(62);t.d(e,"c",function(){return q}),t.d(e,"g",function(){return Q}),t.d(e,"f",function(){return R}),t.d(e,"a",function(){return L}),t.d(e,"b",function(){return en}),t.d(e,"e",function(){return rn}),t.d(e,"d",function(){return an.a})},471:function(n,e,t){"use strict";t.d(e,"b",function(){return v}),t.d(e,"c",function(){return h}),t.d(e,"a",function(){return b});var r=t(5),a=t.n(r),i=t(0),o=t.n(i),u=t(479),l=t.n(u),c=t(480);function s(){var n=a()(["\n  ",";\n"]);return s=function(){return n},n}function f(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]);return f=function(){return n},n}function d(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return d=function(){return n},n}function m(){var n=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return m=function(){return n},n}function p(){var n=a()(["\n    ",";\n    [data-slot='A'] {\n        ",";\n        align-items: flex-start;\n    }\n"]);return p=function(){return n},n}Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"})))(p(),l.a.A,u.vertical.center);var v=Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"})))(m(),l.a.AB.leftRight,u.vertical.center),h=Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"})))(d(),l.a.AB.topBottom,u.vertical.end,u.vertical.start),b=(Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"}),o.a.createElement(c.Slot,{name:"C"})))(f(),l.a.ABC.right,u.vertical.start),Object(c.createStyledMaster)(o.a.createElement(c.Master,null,o.a.createElement(c.Slot,{name:"A"}),o.a.createElement(c.Slot,{name:"B"}),o.a.createElement(c.Slot,{name:"C"}),o.a.createElement(c.Slot,{name:"D"})))(s(),l.a.ABCD))},473:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(5),a=t.n(r);t(0);function i(){var n=a()(["\n  color: var(--theme-on-primary);\n  background: var(--theme-primary);\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1rem var(--theme-primary);\n  line-height: 1.25em;\n  display: inline-block;\n  max-width: 80vw;\n  text-decoration: none;\n\n  :hover {\n      filter: invert(100%);\n  }\n"]);return i=function(){return n},n}var o=t(2).default.a(i())}}]);
//# sourceMappingURL=26.js.map