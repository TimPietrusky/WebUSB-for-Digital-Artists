(window.webpackJsonp=window.webpackJsonp||[]).push([[13,48],{421:function(n,t,e){"use strict";e.r(t),t.default={}},423:function(n,t,e){"use strict";e.r(t);e(421);var r=e(0),a=e.n(r),i=e(64),o=e.n(i),u=(e(467),e(61),e(469),e(63)),c=e.n(u),l=e(470),f=e(16),d=(e(468),e(473)),s=(e(481),e(478)),m=(e(2),e(471),l.Main.Slide),v=l.Main.A,p=a.a.createElement(c.a,null,a.a.createElement("h3",null,"Arduino Headers"));t.default=a.a.createElement(m,{key:o()(),background:"#fff"},a.a.createElement(f.Plugins.Data,{luminave:[""]}),p,a.a.createElement(v,null,a.a.createElement(s.b,{src:"media/arduino_dmx_shield.jpg",alt:"Arduino DMX512 Shield"}),a.a.createElement(d.a,{href:"https://www.tindie.com/products/Conceptinetics/25kv-isolated-dmx-512-shield-for-arduino-r2/"},"tindie.com/products/Conceptinetics/25kv-isolated-dmx-512-shield-for-arduino-r2")))},468:function(n,t,e){"use strict";var r=e(0),a=e.n(r),i=e(61),o=e(8),u=e.n(o),c=e(9),l=e.n(c),f=e(10),d=e.n(f),s=e(6),m=e.n(s),v=e(11),p=e.n(v),h=e(1),b=e.n(h),g=e(65),w=e.n(g),k=(w.a,e(5)),y=e.n(k),E=e(2);function x(){var n=y()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}E.default.div(x());function S(){var n=y()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return S=function(){return n},n}E.default.div(S());function A(){var n=y()(["\n  font-style: italic\n"]);return A=function(){return n},n}E.default.span(A());function j(){var n=y()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return j=function(){return n},n}E.default.span(j());function O(){var n=y()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return O=function(){return n},n}function M(){var n=y()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return M=function(){return n},n}function z(){var n=y()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return z=function(){return n},n}var B=Object(E.keyframes)(z()),C=E.default.span(M(),B,function(n){var t=n.time;return void 0===t?.85:t},function(n){var t=n.delay;return void 0===t?0:t}),D=E.default.div(O()),P=function(n){var t=n.text.split(""),e=t.length,r=n.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{style:r},t.map(function(t,r){var i=n.time/e*(e-r)*-1;return a.a.createElement(C,{key:r,time:n.time,delay:i},t)})))};P.defaultProps={time:.85};var q=P;function F(){var n=y()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return F=function(){return n},n}E.default.span(F());var V=e(474),I=e.n(V),J=(e(467),e(475));function R(){var n=y()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return R=function(){return n},n}var U=e(14).search.parse(window.location.href),W=U.present,X=(U.live,function(n){function t(n){return u()(this,t),l()(this,d()(t).call(this,n))}return p()(t,n),m()(t,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),t}(r.Component)),_=E.default.div(R()),H=function(n){function t(n){return u()(this,t),l()(this,d()(t).call(this,n))}return p()(t,n),m()(t,[{key:"render",value:function(){var n=this;return W?this.props.children(I()({},this.props,{quiet:!0,children:[a.a.createElement("div",null,"YouTube")]})):a.a.createElement(J.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_,null,t.iframe),n.props.children(I()({},n.props,t,{children:[],iframe:null})))}})}}]),t}(r.Component);function Q(){var n=y()(["\n  width: 5vw;\n"]);return Q=function(){return n},n}function T(){var n=y()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n\n  &.left {\n    align-items: flex-end;\n  }\n\n  &.right {\n    align-items: flex-start;\n  }\n"]);return T=function(){return n},n}function Y(){var n=y()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return Y=function(){return n},n}E.default.div(Y()),E.default.div(T()),E.default.div(Q());var G=e(476),K=e.n(G),L=(e(472),e(477),function(n){return a.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},a.a.createElement(K.a,n))});function N(){var n=y()(["\n    font-size: .65em;\n    color: #ccc;\n    margin: 0 0 0 3em;\n    font-style: italic;\n"]);return N=function(){return n},n}function Z(){var n=y()(['\n    font-size: 3.5rem;\n    --quote-border-color: #fff;\n    position: relative;\n\n    :before, \n    :after {\n      position: absolute;\n      font-size: 4em;\n      color: #ccc;\n      \n    }\n\n    :before {\n      content: "“";\n      top: 0;\n      left: 0;\n    }\n\n    :after {\n      content: "”";\n      bottom: 0;\n      right: 0;\n      line-height: 0;\n    }\n']);return Z=function(){return n},n}var $=E.default.div(Z()),nn=E.default.div(N()),tn=function(n){return a.a.createElement($,null,a.a.createElement(i.Quote,n),a.a.createElement(nn,null,n.source))};function en(){var n=y()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return en=function(){return n},n}var rn=E.default.span(en()),an=e(62);e.d(t,"c",function(){return q}),e.d(t,"g",function(){return H}),e.d(t,"f",function(){return X}),e.d(t,"a",function(){return L}),e.d(t,"b",function(){return tn}),e.d(t,"e",function(){return rn}),e.d(t,"d",function(){return an.a})},471:function(n,t,e){"use strict";e.d(t,"b",function(){return p}),e.d(t,"c",function(){return h}),e.d(t,"a",function(){return b});var r=e(5),a=e.n(r),i=e(0),o=e.n(i),u=e(479),c=e.n(u),l=e(480);function f(){var n=a()(["\n  ",";\n"]);return f=function(){return n},n}function d(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]);return d=function(){return n},n}function s(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return s=function(){return n},n}function m(){var n=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return m=function(){return n},n}function v(){var n=a()(["\n    ",";\n    [data-slot='A'] {\n        ",";\n        align-items: flex-start;\n    }\n"]);return v=function(){return n},n}Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"})))(v(),c.a.A,u.vertical.center);var p=Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(m(),c.a.AB.leftRight,u.vertical.center),h=Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"})))(s(),c.a.AB.topBottom,u.vertical.end,u.vertical.start),b=(Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"})))(d(),c.a.ABC.right,u.vertical.start),Object(l.createStyledMaster)(o.a.createElement(l.Master,null,o.a.createElement(l.Slot,{name:"A"}),o.a.createElement(l.Slot,{name:"B"}),o.a.createElement(l.Slot,{name:"C"}),o.a.createElement(l.Slot,{name:"D"})))(f(),c.a.ABCD))},473:function(n,t,e){"use strict";e.d(t,"a",function(){return o});var r=e(5),a=e.n(r);e(0);function i(){var n=a()(["\n  color: var(--theme-on-primary);\n  background: var(--theme-primary);\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1rem var(--theme-primary);\n  line-height: 1.25em;\n  display: inline-block;\n  max-width: 80vw;\n  text-decoration: none;\n\n  :hover {\n      filter: invert(100%);\n  }\n"]);return i=function(){return n},n}var o=e(2).default.a(i())},478:function(n,t,e){"use strict";e.d(t,"b",function(){return y}),e.d(t,"c",function(){return E}),e.d(t,"d",function(){return x}),e.d(t,"a",function(){return S});var r=e(5),a=e.n(r),i=(e(0),e(2)),o=e(469),u=e.n(o);function c(){var n=a()(["\n  border-left: 10px solid #fff;\n"]);return c=function(){return n},n}function l(){var n=a()(["\n  border-radius: 50%;\n  border: .5em solid var(--theme-primary);\n"]);return l=function(){return n},n}function f(){var n=a()(["\n  height: 40vh;\n"]);return f=function(){return n},n}function d(){var n=a()(["\n  height: 90vh;\n"]);return d=function(){return n},n}function s(){var n=a()(["\n  ",";\n  ",";  \n"]);return s=function(){return n},n}function m(){var n=a()(["\n  ",";\n"]);return m=function(){return n},n}function v(){var n=a()(["\n  --background-size: 200% auto;\n"]);return v=function(){return n},n}function p(){var n=a()(["\n  --background-position: top center;\n"]);return p=function(){return n},n}function h(){var n=a()(["\n  --background-position: top right;\n"]);return h=function(){return n},n}function b(){var n=a()(["\n  --width: 300px;\n  --height: 300px;\n"]);return b=function(){return n},n}var g=Object(i.css)(b()),w=Object(i.css)(h()),k=(Object(i.css)(p()),Object(i.css)(v())),y=(Object(i.default)(u.a)(m(),g),Object(i.default)(u.a)(s(),k,w),i.default.img(d())),E=i.default.img(f()),x=Object(i.default)(E)(l()),S=Object(i.default)(o.FitImage)(c())},481:function(n,t,e){"use strict";e.d(t,"b",function(){return m}),e.d(t,"c",function(){return h}),e.d(t,"a",function(){return g});var r=e(5),a=e.n(r),i=e(0),o=e.n(i),u=e(2);function c(){var n=a()(["\n    font-size: 3em;\n"]);return c=function(){return n},n}function l(){var n=a()(["\n    margin: 1em 0 0 0;\n    font-size: 0.85em;\n"]);return l=function(){return n},n}function f(){var n=a()(["\n    --background: ",";\n\n    background: #fff;\n    width: 100%;\n    text-align: center;\n\n    font-weight: bold;\n    font-size: 2em;\n"]);return f=function(){return n},n}function d(){var n=a()(["\n    --background: ",";\n\n    background: var(--background, #fff);\n    color: #000;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    position: relative;\n    padding: .25em;\n    \n    :before {\n        counter-increment: number;\n        content: counter(number);\n        position: absolute;\n        display: block;\n        left: 0;\n        bottom: 0;\n        padding: 0.25em;\n\n        width: 35px;\n        height: 35px;\n        background: #fff;\n        text-align: center;\n    }\n\n    &.strobe {\n        animation: strobe 250ms steps(1, end) infinite;\n\n        @keyframes strobe {\n          74% {\n            background: white;\n          }\n          75% {\n            background: black;\n          }\n        }\n    }\n\n    &.uv {\n        box-shadow: 0 0 20px #5b1ccf;\n    }\n\n    &.active {\n        box-shadow: 0 0 0.5em rgba(0, 0, 0, .75);\n        filter: zoom(100%);\n    }\n\n    &.inactive {\n        filter: blur(5px) invert(100%);\n        transform: scale(0.75);\n\n    }\n"]);return d=function(){return n},n}function s(){var n=a()(["\n\n    --channels: ",";\n    --width: ",";\n    --height: ",";\n\n    width: var(--width, 100%);\n    height: var(--height, 50%);\n    display: grid;\n    grid-template-columns: repeat(var(--channels), 1fr);\n    column-gap: 1em;\n    justify-items: center;\n    counter-reset: number;\n"]);return s=function(){return n},n}var m=u.default.div(s(),function(n){return n.channels},function(n){return n.width},function(n){return n.height}),v=u.default.div(d(),function(n){return n.background}),p=u.default.div(f(),function(n){return n.background}),h=u.default.div(l()),b=u.default.div(c()),g=function(n){var t=n.value,e=n.label;return o.a.createElement(v,n,o.a.createElement(p,n,e),n.children,o.a.createElement(b,null,t))}}}]);
//# sourceMappingURL=13.js.map