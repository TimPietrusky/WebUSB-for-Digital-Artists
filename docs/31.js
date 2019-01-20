(window.webpackJsonp=window.webpackJsonp||[]).push([[31,48],{421:function(n,e,t){"use strict";t.r(e),e.default={}},460:function(n,e,t){"use strict";t.r(e);t(421);var r=t(0),i=t.n(r),a=t(64),u=t.n(a),o=(t(467),t(61),t(491)),c=(t(469),t(63)),l=t.n(c),s=t(470),f=t(16),d=(t(468),s.Main.Slide),p=s.Main.A,v=i.a.createElement(l.a,null,i.a.createElement("h3",null,"How can we use WebUSB then?"),i.a.createElement("p",null,"We can't hack our keyboard because it's a standard device that is already claimed by the OS"));e.default=i.a.createElement(d,{key:u()()},i.a.createElement(f.Plugins.Data,{luminave:[""]}),v,i.a.createElement(p,null,i.a.createElement(o.a,null,"How can we use WebUSB then?")))},468:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(61),u=t(8),o=t.n(u),c=t(9),l=t.n(c),s=t(10),f=t.n(s),d=t(6),p=t.n(d),v=t(11),m=t.n(v),h=t(1),b=t.n(h),g=t(65),w=t.n(g),y=(w.a,t(5)),k=t.n(y),E=t(2);function x(){var n=k()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}E.default.div(x());function z(){var n=k()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return z=function(){return n},n}E.default.div(z());function P(){var n=k()(["\n  font-style: italic\n"]);return P=function(){return n},n}E.default.span(P());function q(){var n=k()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return q=function(){return n},n}E.default.span(q());function S(){var n=k()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return S=function(){return n},n}function D(){var n=k()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return D=function(){return n},n}function F(){var n=k()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return F=function(){return n},n}var W=Object(E.keyframes)(F()),C=E.default.span(D(),W,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),U=E.default.div(S()),V=function(n){var e=n.text.split(""),t=e.length,r=n.style;return i.a.createElement(i.a.Fragment,null,i.a.createElement(U,{style:r},e.map(function(e,r){var a=n.time/t*(t-r)*-1;return i.a.createElement(C,{key:r,time:n.time,delay:a},e)})))};V.defaultProps={time:.85};var M=V;function O(){var n=k()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return O=function(){return n},n}E.default.span(O());var j=t(474),A=t.n(j),B=(t(467),t(475));function H(){var n=k()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return H=function(){return n},n}var I=t(14).search.parse(window.location.href),J=I.present,T=(I.live,function(n){function e(n){return o()(this,e),l()(this,f()(e).call(this,n))}return m()(e,n),p()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),Q=E.default.div(H()),R=function(n){function e(n){return o()(this,e),l()(this,f()(e).call(this,n))}return m()(e,n),p()(e,[{key:"render",value:function(){var n=this;return J?this.props.children(A()({},this.props,{quiet:!0,children:[i.a.createElement("div",null,"YouTube")]})):i.a.createElement(B.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Q,null,e.iframe),n.props.children(A()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function X(){var n=k()(["\n  width: 5vw;\n"]);return X=function(){return n},n}function Y(){var n=k()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n\n  &.left {\n    align-items: flex-end;\n  }\n\n  &.right {\n    align-items: flex-start;\n  }\n"]);return Y=function(){return n},n}function G(){var n=k()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return G=function(){return n},n}E.default.div(G()),E.default.div(Y()),E.default.div(X());var K=t(476),L=t.n(K),N=(t(472),t(477),function(n){return i.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},i.a.createElement(L.a,n))});function Z(){var n=k()(["\n    font-size: .65em;\n    color: #ccc;\n    margin: 0 0 0 3em;\n    font-style: italic;\n"]);return Z=function(){return n},n}function $(){var n=k()(['\n    font-size: 3.5rem;\n    --quote-border-color: #fff;\n    position: relative;\n\n    :before, \n    :after {\n      position: absolute;\n      font-size: 4em;\n      color: #ccc;\n      \n    }\n\n    :before {\n      content: "“";\n      top: 0;\n      left: 0;\n    }\n\n    :after {\n      content: "”";\n      bottom: 0;\n      right: 0;\n      line-height: 0;\n    }\n']);return $=function(){return n},n}var _=E.default.div($()),nn=E.default.div(Z()),en=function(n){return i.a.createElement(_,null,i.a.createElement(a.Quote,n),i.a.createElement(nn,null,n.source))};function tn(){var n=k()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return tn=function(){return n},n}var rn=E.default.span(tn()),an=t(62);t.d(e,"c",function(){return M}),t.d(e,"g",function(){return R}),t.d(e,"f",function(){return T}),t.d(e,"a",function(){return N}),t.d(e,"b",function(){return en}),t.d(e,"e",function(){return rn}),t.d(e,"d",function(){return an.a})},491:function(n,e,t){"use strict";t.d(e,"a",function(){return f});var r=t(5),i=t.n(r),a=t(2),u=t(0),o=t.n(u),c=t(61);function l(){var n=i()(["\n    > h1 {\n    }\n"]);return l=function(){return n},n}var s=a.default.span(l()),f=function(n){return o.a.createElement(s,null,o.a.createElement(c.Title,n))}}}]);
//# sourceMappingURL=31.js.map