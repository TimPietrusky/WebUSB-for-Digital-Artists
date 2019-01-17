(window.webpackJsonp=window.webpackJsonp||[]).push([[19,30],{421:function(n,e,t){"use strict";t.r(e),e.default={}},430:function(n,e,t){"use strict";t.r(e);var r=t(5),a=t.n(r),i=(t(421),t(0)),o=t.n(i),u=t(64),l=t.n(u),c=t(449),d=t.n(c),s=t(61),f=t.n(s),m=(t(451),t(63)),p=t.n(m),v=t(452),h=(t(454),t(16)),g=t(66),w=(t(450),t(2));function b(){var n=a()(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-content: flex-end;\n  justify-content: flex-end;\n"]);return b=function(){return n},n}function E(){var n=a()(["\n  --h: ",";\n  --color: ",";\n  --width: ",";\n  --background: ",";\n\n  //background-color: hsl(var(--h), 80%, 80%);\n  background-color: var(--background);\n  // color: hsl(var(--h), 60%, 10%);\n  color: #fff;\n  padding: .25em .25em 0 .25em;\n  // border: 0.1em solid hsl(var(--h), 60%, 50%);\n  width: var(--width);\n  margin: 0 0 .25em 0;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);return E=function(){return n},n}var k=v.Main.Slide,y=v.Main.A,x=o.a.createElement(p.a,null,o.a.createElement("h3",null,"USB Descriptor"),o.a.createElement("p",null,"Describes the properties and function of a USB device so that the OS understands how to use it"),o.a.createElement("p",null,"Device: basic information like USB version, vendor and product id"),o.a.createElement("p",null,"Configuration: how the device is powered, maximum power consumption"),o.a.createElement("p",null,"Interface: Functional endpoint, combines the endpoints into functional groups to perform a single feature of the device"),o.a.createElement("p",null,"Endpoints: Channel on where data is send or received")),S=w.default.div(E(),function(n){return n.hue},function(n){return n.color},function(n){return n.width},function(n){return n.background});S.defaultProps={hue:0,color:"white"};var D=w.default.div(b());e.default=o.a.createElement(k,{key:l()(),background:"#000",mixin:"--slide-color: white"},o.a.createElement(h.Plugins.Data,{luminave:[""]}),x,o.a.createElement(y,null,o.a.createElement(s.Title,null,"USB Descriptor"),o.a.createElement("br",null),o.a.createElement(D,null,o.a.createElement(d.a,{order:1,animation:g.slide.normal},o.a.createElement(S,{width:"100vw",background:"var(--color-red)"},o.a.createElement(s.Subtitle,null,"Device"),o.a.createElement(f.a,null,"USB Version, vendor, productid"))),o.a.createElement(d.a,{order:2,animation:g.slide.normal},o.a.createElement(S,{width:"80vw",hue:"90",background:"var(--color-green)"},o.a.createElement(s.Subtitle,null,"Configurations"),o.a.createElement(f.a,null,"How to power the device, max power consumption"))),o.a.createElement(d.a,{order:3,animation:g.slide.normal},o.a.createElement(S,{width:"60vw",hue:"180",background:"var(--color-yellow)"},o.a.createElement(s.Subtitle,null,"Interfaces"),o.a.createElement(f.a,null,"A feature of the device"))),o.a.createElement(d.a,{order:4,animation:g.slide.normal},o.a.createElement(S,{width:"40vw",hue:"270",background:"var(--color-blue)"},o.a.createElement(s.Subtitle,null,"Endpoints"),o.a.createElement(f.a,null,"Send or receive data"))))))},450:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(61),o=t(8),u=t.n(o),l=t(9),c=t.n(l),d=t(10),s=t.n(d),f=t(6),m=t.n(f),p=t(11),v=t.n(p),h=t(1),g=t.n(h),w=t(65),b=t.n(w),E=(b.a,t(5)),k=t.n(E),y=t(2);function x(){var n=k()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}y.default.div(x());function S(){var n=k()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return S=function(){return n},n}y.default.div(S());function D(){var n=k()(["\n  font-style: italic\n"]);return D=function(){return n},n}y.default.span(D());function P(){var n=k()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return P=function(){return n},n}y.default.span(P());function z(){var n=k()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return z=function(){return n},n}function C(){var n=k()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return C=function(){return n},n}function U(){var n=k()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return U=function(){return n},n}var q=Object(y.keyframes)(U()),F=y.default.span(C(),q,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),B=y.default.div(z()),V=function(n){var e=n.text.split(""),t=e.length,r=n.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement(B,{style:r},e.map(function(e,r){var i=n.time/t*(t-r)*-1;return a.a.createElement(F,{key:r,time:n.time,delay:i},e)})))};V.defaultProps={time:.85};var I=V;function j(){var n=k()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return j=function(){return n},n}y.default.span(j());var A=t(455),M=t.n(A),O=(t(449),t(456));function J(){var n=k()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return J=function(){return n},n}var T=t(14).search.parse(window.location.href),W=T.present,H=(T.live,function(n){function e(n){return u()(this,e),c()(this,s()(e).call(this,n))}return v()(e,n),m()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return a.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),Q=y.default.div(J()),R=function(n){function e(n){return u()(this,e),c()(this,s()(e).call(this,n))}return v()(e,n),m()(e,[{key:"render",value:function(){var n=this;return W?this.props.children(M()({},this.props,{quiet:!0,children:[a.a.createElement("div",null,"YouTube")]})):a.a.createElement(O.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,null,e.iframe),n.props.children(M()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function X(){var n=k()(["\n  width: 5vw;\n"]);return X=function(){return n},n}function Y(){var n=k()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return Y=function(){return n},n}function G(){var n=k()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return G=function(){return n},n}y.default.div(G()),y.default.div(Y()),y.default.div(X());var K=t(457),L=t.n(K),N=(t(454),t(458),function(n){return a.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},a.a.createElement(L.a,n))});function Z(){var n=k()(["\n    font-size: .65em;\n    color: #ccc;\n    margin: 0 0 0 3em;\n    font-style: italic;\n"]);return Z=function(){return n},n}function $(){var n=k()(['\n    font-size: 3.5rem;\n    --quote-border-color: #fff;\n    position: relative;\n\n    :before, \n    :after {\n      position: absolute;\n      font-size: 4em;\n      color: #ccc;\n      \n    }\n\n    :before {\n      content: "“";\n      top: 0;\n      left: 0;\n    }\n\n    :after {\n      content: "”";\n      bottom: 0;\n      right: 0;\n      line-height: 0;\n    }\n']);return $=function(){return n},n}var _=y.default.div($()),nn=y.default.div(Z()),en=function(n){return a.a.createElement(_,null,a.a.createElement(i.Quote,n),a.a.createElement(nn,null,n.source))};function tn(){var n=k()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return tn=function(){return n},n}var rn=y.default.span(tn()),an=t(62);t.d(e,"c",function(){return I}),t.d(e,"g",function(){return R}),t.d(e,"f",function(){return H}),t.d(e,"a",function(){return N}),t.d(e,"b",function(){return en}),t.d(e,"e",function(){return rn}),t.d(e,"d",function(){return an.a})}}]);
//# sourceMappingURL=19.js.map