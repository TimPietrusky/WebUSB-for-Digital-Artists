(window.webpackJsonp=window.webpackJsonp||[]).push([[23,30],{421:function(n,e,t){"use strict";t.r(e),e.default={}},444:function(n,e,t){"use strict";t.r(e);t(421);var r=t(0),i=t.n(r),a=t(64),o=t.n(a),u=(t(449),t(61),t(451),t(63)),c=t.n(u),l=t(452),s=t(16),d=t(450),f=l.Main.Slide,p=l.Main.A,v=i.a.createElement(c.a,null,i.a.createElement("h3",null,"WebUSB: Let's hack any keyboard in the world"));e.default=i.a.createElement(f,{key:o()(),background:"url(media/keyboard.jpg)",mixin:"--footer-color: #f00;"},i.a.createElement(s.Plugins.Data,{luminave:[""]}),v,i.a.createElement(p,null,i.a.createElement(d.d,null,i.a.createElement("a",{href:"https://www.flickr.com/photos/qubodup/14303947303/"},"flickr.com/photos/qubodup/14303947303"))))},450:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(61),o=t(8),u=t.n(o),c=t(9),l=t.n(c),s=t(10),d=t.n(s),f=t(6),p=t.n(f),v=t(11),h=t.n(v),m=t(1),w=t.n(m),b=t(65),y=t.n(b),g=(y.a,t(5)),k=t.n(g),E=t(2);function x(){var n=k()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}E.default.div(x());function q(){var n=k()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return q=function(){return n},n}E.default.div(q());function P(){var n=k()(["\n  font-style: italic\n"]);return P=function(){return n},n}E.default.span(P());function z(){var n=k()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return z=function(){return n},n}E.default.span(z());function D(){var n=k()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return D=function(){return n},n}function F(){var n=k()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return F=function(){return n},n}function C(){var n=k()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return C=function(){return n},n}var S=Object(E.keyframes)(C()),V=E.default.span(F(),S,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),j=E.default.div(D()),M=function(n){var e=n.text.split(""),t=e.length,r=n.style;return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{style:r},e.map(function(e,r){var a=n.time/t*(t-r)*-1;return i.a.createElement(V,{key:r,time:n.time,delay:a},e)})))};M.defaultProps={time:.85};var U=M;function W(){var n=k()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return W=function(){return n},n}E.default.span(W());var A=t(455),I=t.n(A),J=(t(449),t(456));function O(){var n=k()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return O=function(){return n},n}var B=t(14).search.parse(window.location.href),L=B.present,Q=(B.live,function(n){function e(n){return u()(this,e),l()(this,d()(e).call(this,n))}return h()(e,n),p()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),R=E.default.div(O()),T=function(n){function e(n){return u()(this,e),l()(this,d()(e).call(this,n))}return h()(e,n),p()(e,[{key:"render",value:function(){var n=this;return L?this.props.children(I()({},this.props,{quiet:!0,children:[i.a.createElement("div",null,"YouTube")]})):i.a.createElement(J.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(R,null,e.iframe),n.props.children(I()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function X(){var n=k()(["\n  width: 5vw;\n"]);return X=function(){return n},n}function Y(){var n=k()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return Y=function(){return n},n}function G(){var n=k()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return G=function(){return n},n}E.default.div(G()),E.default.div(Y()),E.default.div(X());var H=t(457),K=t.n(H),N=(t(453),t(458),function(n){return i.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},i.a.createElement(K.a,n))});function Z(){var n=k()(["\n    font-size: 3.5rem;\n    --quote-border-color: #ddd;\n"]);return Z=function(){return n},n}var $=E.default.div(Z()),_=function(n){return i.a.createElement($,null,i.a.createElement(a.Quote,n))};function nn(){var n=k()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return nn=function(){return n},n}var en=E.default.span(nn()),tn=t(62);t.d(e,"c",function(){return U}),t.d(e,"g",function(){return T}),t.d(e,"f",function(){return Q}),t.d(e,"a",function(){return N}),t.d(e,"b",function(){return _}),t.d(e,"e",function(){return en}),t.d(e,"d",function(){return tn.a})}}]);
//# sourceMappingURL=23.js.map