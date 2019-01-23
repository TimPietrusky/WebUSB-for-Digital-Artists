(window.webpackJsonp=window.webpackJsonp||[]).push([[43,48],{421:function(e,n,t){"use strict";t.r(n),n.default={}},462:function(e,n,t){"use strict";t.r(n);t(421);var r=t(0),i=t.n(r),a=t(64),o=t.n(a),u=t(467),c=t.n(u),l=(t(61),t(469),t(63)),s=t.n(l),d=t(470),f=t(16),p=t(468),v=d.Main.Slide,h=d.Main.A,m=i.a.createElement(s.a,null,i.a.createElement("h3",null,"WebUSB: Introduction 2"),i.a.createElement("p",null,"Nope, because when we go back into the specification"),i.a.createElement("p",null,"Quote 1: Standard devices like the keyboard are using the drivers provided by operating systems, which means we can't control them via WebUSB."),i.a.createElement("p",null,"Quote 2: But there are many devices that don't fit into the standard device classes."),i.a.createElement("p",null,"Quote 3.1: Hardware vendors have to write a driver for each operating system in order for us to use the device"),i.a.createElement("p",null,"Quote 3.2: But this drivers prevent us from using those devices in the web because the browser can't even get access to the device if the OS or the native driver already claimed access to it"));n.default=i.a.createElement(v,{key:o()(),background:"#fff",mixin:"--slide-color: black"},i.a.createElement(f.Plugins.Data,{luminave:[""]}),m,i.a.createElement(h,null,i.a.createElement(p.b,{source:"https://wicg.github.io/webusb"},i.a.createElement(c.a,{order:0},"Operating systems support such devices using the ",i.a.createElement(p.e,null,'"class driver" provided by the OS')," vendor."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(c.a,{order:1},"There is however a long tail of ",i.a.createElement(p.e,null,"devices that do not fit into")," one of the ",i.a.createElement(p.e,null,"standardized device classes"),"."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(c.a,{order:2,displayAs:"inline"},"These devices require ",i.a.createElement(p.e,null,"hardware vendors to write native drivers")," and SDKs in order for developers to take advantage of them"),i.a.createElement(c.a,{order:3,displayAs:"inline"}," and this ",i.a.createElement(p.e,null,"native code prevents these devices from being used by the web"),"."))))},468:function(e,n,t){"use strict";var r=t(0),i=t.n(r),a=t(61),o=t(8),u=t.n(o),c=t(9),l=t.n(c),s=t(10),d=t.n(s),f=t(6),p=t.n(f),v=t(11),h=t.n(v),m=t(1),b=t.n(m),g=t(65),w=t.n(g),y=(w.a,t(5)),E=t.n(y),k=t(2);function x(){var e=E()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return e},e}k.default.div(x());function S(){var e=E()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return S=function(){return e},e}k.default.div(S());function z(){var e=E()(["\n  font-style: italic\n"]);return z=function(){return e},e}k.default.span(z());function q(){var e=E()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return q=function(){return e},e}k.default.span(q());function P(){var e=E()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return P=function(){return e},e}function D(){var e=E()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return D=function(){return e},e}function F(){var e=E()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return F=function(){return e},e}var O=Object(k.keyframes)(F()),Q=k.default.span(D(),O,function(e){var n=e.time;return void 0===n?.85:n},function(e){var n=e.delay;return void 0===n?0:n}),A=k.default.div(P()),B=function(e){var n=e.text.split(""),t=n.length,r=e.style;return i.a.createElement(i.a.Fragment,null,i.a.createElement(A,{style:r},n.map(function(n,r){var a=e.time/t*(t-r)*-1;return i.a.createElement(Q,{key:r,time:e.time,delay:a},n)})))};B.defaultProps={time:.85};var C=B;function U(){var e=E()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return U=function(){return e},e}k.default.span(U());var V=t(474),W=t.n(V),I=(t(467),t(475));function M(){var e=E()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return M=function(){return e},e}var T=t(14).search.parse(window.location.href),j=T.present,J=(T.live,function(e){function n(e){return u()(this,n),l()(this,d()(n).call(this,e))}return h()(n,e),p()(n,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(e){if(this.props.quiet)return!0;if(e.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(e){return!!this.props.quiet||e.getPlayerState()>-1}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.children)}}]),n}(r.Component)),H=k.default.div(M()),K=function(e){function n(e){return u()(this,n),l()(this,d()(n).call(this,e))}return h()(n,e),p()(n,[{key:"render",value:function(){var e=this;return j?this.props.children(W()({},this.props,{quiet:!0,children:[i.a.createElement("div",null,"YouTube")]})):i.a.createElement(I.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(n){return i.a.createElement(i.a.Fragment,null,i.a.createElement(H,null,n.iframe),e.props.children(W()({},e.props,n,{children:[],iframe:null})))}})}}]),n}(r.Component);function N(){var e=E()(["\n  width: 5vw;\n"]);return N=function(){return e},e}function R(){var e=E()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n\n  &.left {\n    align-items: flex-end;\n  }\n\n  &.right {\n    align-items: flex-start;\n  }\n"]);return R=function(){return e},e}function X(){var e=E()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return X=function(){return e},e}k.default.div(X()),k.default.div(R()),k.default.div(N());var Y=t(476),G=t.n(Y),L=(t(472),t(477),function(e){return i.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},i.a.createElement(G.a,e))});function Z(){var e=E()(["\n    font-size: .65em;\n    color: #ccc;\n    margin: 0 0 0 3em;\n    font-style: italic;\n"]);return Z=function(){return e},e}function $(){var e=E()(['\n    font-size: 3.5rem;\n    --quote-border-color: #fff;\n    position: relative;\n\n    :before, \n    :after {\n      position: absolute;\n      font-size: 4em;\n      color: #ccc;\n      \n    }\n\n    :before {\n      content: "“";\n      top: 0;\n      left: 0;\n    }\n\n    :after {\n      content: "”";\n      bottom: 0;\n      right: 0;\n      line-height: 0;\n    }\n']);return $=function(){return e},e}var _=k.default.div($()),ee=k.default.div(Z()),ne=function(e){return i.a.createElement(_,null,i.a.createElement(a.Quote,e),i.a.createElement(ee,null,e.source))};function te(){var e=E()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return te=function(){return e},e}var re=k.default.span(te()),ie=t(62);t.d(n,"c",function(){return C}),t.d(n,"g",function(){return K}),t.d(n,"f",function(){return J}),t.d(n,"a",function(){return L}),t.d(n,"b",function(){return ne}),t.d(n,"e",function(){return re}),t.d(n,"d",function(){return ie.a})}}]);
//# sourceMappingURL=43.js.map