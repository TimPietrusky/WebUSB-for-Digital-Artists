(window.webpackJsonp=window.webpackJsonp||[]).push([[15,48],{421:function(n,e,t){"use strict";t.r(e),e.default={}},428:function(n,e,t){"use strict";t.r(e);t(421);var r=t(0),a=t.n(r),i=t(64),u=t.n(i),o=t(467),c=t.n(o),l=t(61),f=(t(469),t(63)),s=t.n(f),d=(t(470),t(16)),m=(t(468),t(473),t(481),t(478)),v=(t(2),t(471)),h=v.b.Slide,p=v.b.A,b=v.b.B,g=a.a.createElement(s.a,null,a.a.createElement("h3",null,"Fixture"),a.a.createElement("p",null,"In the DMX512 world you don't say light, but call it fixture"),a.a.createElement("p",null,"One of the most basic and cheapest fixtures is a LED Flat PAR like you can see in this picture and here on stage"),a.a.createElement("p",null,"A fixture usually has 1 or more functions. Each of these functions can be used individually"),a.a.createElement("p",null,"This fixture has 6 function, the first ist to display Red, Green & Blue"));e.default=a.a.createElement(h,{key:u()(),background:'url("media/dmx512_universe.jpg")'},a.a.createElement(d.Plugins.Data,{luminave:[""]}),g,a.a.createElement(p,null,a.a.createElement(l.Title,null,"Universe")),a.a.createElement(b,null,a.a.createElement(c.a,{fit:!0,order:1},a.a.createElement(m.a,{src:"media/dmx512_connector.jpg",alt:"DMX512 connector"}))))},468:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(61),u=t(8),o=t.n(u),c=t(9),l=t.n(c),f=t(10),s=t.n(f),d=t(6),m=t.n(d),v=t(11),h=t.n(v),p=t(1),b=t.n(p),g=t(65),y=t.n(g),E=(y.a,t(5)),w=t.n(E),k=t(2);function x(){var n=w()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}k.default.div(x());function S(){var n=w()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return S=function(){return n},n}k.default.div(S());function j(){var n=w()(["\n  font-style: italic\n"]);return j=function(){return n},n}k.default.span(j());function A(){var n=w()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return A=function(){return n},n}k.default.span(A());function O(){var n=w()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return O=function(){return n},n}function z(){var n=w()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return z=function(){return n},n}function B(){var n=w()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return B=function(){return n},n}var M=Object(k.keyframes)(B()),D=k.default.span(z(),M,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),C=k.default.div(O()),F=function(n){var e=n.text.split(""),t=e.length,r=n.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{style:r},e.map(function(e,r){var i=n.time/t*(t-r)*-1;return a.a.createElement(D,{key:r,time:n.time,delay:i},e)})))};F.defaultProps={time:.85};var P=F;function q(){var n=w()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return q=function(){return n},n}k.default.span(q());var I=t(474),R=t.n(I),V=(t(467),t(475));function T(){var n=w()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return T=function(){return n},n}var U=t(14).search.parse(window.location.href),X=U.present,J=(U.live,function(n){function e(n){return o()(this,e),l()(this,s()(e).call(this,n))}return h()(e,n),m()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),W=k.default.div(T()),_=function(n){function e(n){return o()(this,e),l()(this,s()(e).call(this,n))}return h()(e,n),m()(e,[{key:"render",value:function(){var n=this;return X?this.props.children(R()({},this.props,{quiet:!0,children:[a.a.createElement("div",null,"YouTube")]})):a.a.createElement(V.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(W,null,e.iframe),n.props.children(R()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function G(){var n=w()(["\n  width: 5vw;\n"]);return G=function(){return n},n}function L(){var n=w()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n\n  &.left {\n    align-items: flex-end;\n  }\n\n  &.right {\n    align-items: flex-start;\n  }\n"]);return L=function(){return n},n}function Q(){var n=w()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return Q=function(){return n},n}k.default.div(Q()),k.default.div(L()),k.default.div(G());var Y=t(476),H=t.n(Y),K=(t(472),t(477),function(n){return a.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},a.a.createElement(H.a,n))});function N(){var n=w()(["\n    font-size: .65em;\n    color: #ccc;\n    margin: 0 0 0 3em;\n    font-style: italic;\n"]);return N=function(){return n},n}function Z(){var n=w()(['\n    font-size: 3.5rem;\n    --quote-border-color: #fff;\n    position: relative;\n\n    :before, \n    :after {\n      position: absolute;\n      font-size: 4em;\n      color: #ccc;\n      \n    }\n\n    :before {\n      content: "“";\n      top: 0;\n      left: 0;\n    }\n\n    :after {\n      content: "”";\n      bottom: 0;\n      right: 0;\n      line-height: 0;\n    }\n']);return Z=function(){return n},n}var $=k.default.div(Z()),nn=k.default.div(N()),en=function(n){return a.a.createElement($,null,a.a.createElement(i.Quote,n),a.a.createElement(nn,null,n.source))};function tn(){var n=w()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return tn=function(){return n},n}var rn=k.default.span(tn()),an=t(62);t.d(e,"c",function(){return P}),t.d(e,"g",function(){return _}),t.d(e,"f",function(){return J}),t.d(e,"a",function(){return K}),t.d(e,"b",function(){return en}),t.d(e,"e",function(){return rn}),t.d(e,"d",function(){return an.a})},471:function(n,e,t){"use strict";t.d(e,"b",function(){return h}),t.d(e,"c",function(){return p}),t.d(e,"a",function(){return b});var r=t(5),a=t.n(r),i=t(0),u=t.n(i),o=t(479),c=t.n(o),l=t(480);function f(){var n=a()(["\n  ",";\n"]);return f=function(){return n},n}function s(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]);return s=function(){return n},n}function d(){var n=a()(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]);return d=function(){return n},n}function m(){var n=a()(["\n    ",";\n    [data-slot='A'],\n    [data-slot='B'] {\n        ",";\n    }\n"]);return m=function(){return n},n}function v(){var n=a()(["\n    ",";\n    [data-slot='A'] {\n        ",";\n        align-items: flex-start;\n    }\n"]);return v=function(){return n},n}Object(l.createStyledMaster)(u.a.createElement(l.Master,null,u.a.createElement(l.Slot,{name:"A"})))(v(),c.a.A,o.vertical.center);var h=Object(l.createStyledMaster)(u.a.createElement(l.Master,null,u.a.createElement(l.Slot,{name:"A"}),u.a.createElement(l.Slot,{name:"B"})))(m(),c.a.AB.leftRight,o.vertical.center),p=Object(l.createStyledMaster)(u.a.createElement(l.Master,null,u.a.createElement(l.Slot,{name:"A"}),u.a.createElement(l.Slot,{name:"B"})))(d(),c.a.AB.topBottom,o.vertical.end,o.vertical.start),b=(Object(l.createStyledMaster)(u.a.createElement(l.Master,null,u.a.createElement(l.Slot,{name:"A"}),u.a.createElement(l.Slot,{name:"B"}),u.a.createElement(l.Slot,{name:"C"})))(s(),c.a.ABC.right,o.vertical.start),Object(l.createStyledMaster)(u.a.createElement(l.Master,null,u.a.createElement(l.Slot,{name:"A"}),u.a.createElement(l.Slot,{name:"B"}),u.a.createElement(l.Slot,{name:"C"}),u.a.createElement(l.Slot,{name:"D"})))(f(),c.a.ABCD))},473:function(n,e,t){"use strict";t.d(e,"a",function(){return u});var r=t(5),a=t.n(r);t(0);function i(){var n=a()(["\n  color: var(--theme-on-primary);\n  background: var(--theme-primary);\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1rem var(--theme-primary);\n  line-height: 1.25em;\n  display: inline-block;\n  max-width: 80vw;\n  text-decoration: none;\n\n  :hover {\n      filter: invert(100%);\n  }\n"]);return i=function(){return n},n}var u=t(2).default.a(i())},478:function(n,e,t){"use strict";t.d(e,"b",function(){return w}),t.d(e,"c",function(){return k}),t.d(e,"d",function(){return x}),t.d(e,"a",function(){return S});var r=t(5),a=t.n(r),i=(t(0),t(2)),u=t(469),o=t.n(u);function c(){var n=a()(["\n  border-left: 10px solid #fff;\n"]);return c=function(){return n},n}function l(){var n=a()(["\n  border-radius: 50%;\n  border: .5em solid var(--theme-primary);\n"]);return l=function(){return n},n}function f(){var n=a()(["\n  height: 40vh;\n"]);return f=function(){return n},n}function s(){var n=a()(["\n  height: 90vh;\n"]);return s=function(){return n},n}function d(){var n=a()(["\n  ",";\n  ",";  \n"]);return d=function(){return n},n}function m(){var n=a()(["\n  ",";\n"]);return m=function(){return n},n}function v(){var n=a()(["\n  --background-size: 200% auto;\n"]);return v=function(){return n},n}function h(){var n=a()(["\n  --background-position: top center;\n"]);return h=function(){return n},n}function p(){var n=a()(["\n  --background-position: top right;\n"]);return p=function(){return n},n}function b(){var n=a()(["\n  --width: 300px;\n  --height: 300px;\n"]);return b=function(){return n},n}var g=Object(i.css)(b()),y=Object(i.css)(p()),E=(Object(i.css)(h()),Object(i.css)(v())),w=(Object(i.default)(o.a)(m(),g),Object(i.default)(o.a)(d(),E,y),i.default.img(s())),k=i.default.img(f()),x=Object(i.default)(k)(l()),S=Object(i.default)(u.FitImage)(c())},481:function(n,e,t){"use strict";t.d(e,"b",function(){return m}),t.d(e,"c",function(){return p}),t.d(e,"a",function(){return g});var r=t(5),a=t.n(r),i=t(0),u=t.n(i),o=t(2);function c(){var n=a()(["\n    font-size: 3em;\n"]);return c=function(){return n},n}function l(){var n=a()(["\n    margin: 1em 0 0 0;\n    font-size: 0.85em;\n"]);return l=function(){return n},n}function f(){var n=a()(["\n    --background: ",";\n\n    background: #fff;\n    width: 100%;\n    text-align: center;\n\n    font-weight: bold;\n    font-size: 2em;\n"]);return f=function(){return n},n}function s(){var n=a()(["\n    --background: ",";\n\n    background: var(--background, #fff);\n    color: #000;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    position: relative;\n    padding: .25em;\n    \n    :before {\n        counter-increment: number;\n        content: counter(number);\n        position: absolute;\n        display: block;\n        left: 0;\n        bottom: 0;\n        padding: 0.25em;\n\n        width: 35px;\n        height: 35px;\n        background: #fff;\n        text-align: center;\n    }\n\n    &.strobe {\n        animation: strobe 500ms steps(1, end) infinite;\n\n        @keyframes strobe {\n          74% {\n            background: white;\n          }\n          75% {\n            background: black;\n          }\n        }\n    }\n\n    &.uv {\n        box-shadow: 0 0 20px #5b1ccf;\n    }\n\n    &.active {\n        box-shadow: 0 0 0.5em rgba(0, 0, 0, .75);\n        filter: zoom(100%);\n    }\n\n    &.inactive {\n        filter: blur(5px) invert(100%);\n        transform: scale(0.75);\n\n    }\n"]);return s=function(){return n},n}function d(){var n=a()(["\n\n    --channels: ",";\n    --width: ",";\n    --height: ",";\n\n    width: var(--width, 100%);\n    height: var(--height, 50%);\n    display: grid;\n    grid-template-columns: repeat(var(--channels), 1fr);\n    column-gap: 1em;\n    justify-items: center;\n    counter-reset: number;\n"]);return d=function(){return n},n}var m=o.default.div(d(),function(n){return n.channels},function(n){return n.width},function(n){return n.height}),v=o.default.div(s(),function(n){return n.background}),h=o.default.div(f(),function(n){return n.background}),p=o.default.div(l()),b=o.default.div(c()),g=function(n){var e=n.value,t=n.label;return u.a.createElement(v,n,u.a.createElement(h,n,t),n.children,u.a.createElement(b,null,e))}}}]);
//# sourceMappingURL=15.js.map