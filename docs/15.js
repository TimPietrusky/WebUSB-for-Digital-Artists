(window.webpackJsonp=window.webpackJsonp||[]).push([[15,30],{421:function(n,e,t){"use strict";t.r(e),e.default={}},425:function(n,e,t){"use strict";t.r(e);var r=t(485),i=t.n(r),a=(t(421),t(0)),u=t.n(a),o=t(64),c=t.n(o),l=t(449),s=(t(61),t(451),t(63)),f=t.n(s),d=t(452),p=t(13),v=t(450),m=d.Main.Slide,h=d.Main.A,g=u.a.createElement(f.a,null,u.a.createElement("h3",null,"Demo"),u.a.createElement("p",null,"The WebUSB DMX512 Controller used in luminave combined with visuals from modV"));e.default=u.a.createElement(m,{key:c()()},u.a.createElement(p.Plugins.Data,{luminave:[""]}),g,u.a.createElement(h,null,u.a.createElement(v.g,{videoId:"GiTkwz9AKhM",start:93},function(n){return u.a.createElement(u.a.Fragment,null,u.a.createElement(l.Sequence,{order:1,steps:2},function(e,t,r){return u.a.createElement(p.Live,null,u.a.createElement(v.f,i()({},n,{isPlaying:0===e})))}))})))},450:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(61),u=t(8),o=t.n(u),c=t(9),l=t.n(c),s=t(10),f=t.n(s),d=t(6),p=t.n(d),v=t(11),m=t.n(v),h=t(1),g=t.n(h),y=t(65),w=t.n(y),b=(w.a,t(5)),k=t.n(b),E=t(2);function x(){var n=k()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}E.default.div(x());function P(){var n=k()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return P=function(){return n},n}E.default.div(P());function q(){var n=k()(["\n  font-style: italic\n"]);return q=function(){return n},n}E.default.span(q());function D(){var n=k()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return D=function(){return n},n}E.default.span(D());function z(){var n=k()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return z=function(){return n},n}function F(){var n=k()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return F=function(){return n},n}function C(){var n=k()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return C=function(){return n},n}var M=Object(E.keyframes)(C()),O=E.default.span(F(),M,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),S=E.default.div(z()),V=function(n){var e=n.text.split(""),t=e.length,r=n.style;return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{style:r},e.map(function(e,r){var a=n.time/t*(t-r)*-1;return i.a.createElement(O,{key:r,time:n.time,delay:a},e)})))};V.defaultProps={time:.85};var j=V;function A(){var n=k()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return A=function(){return n},n}E.default.span(A());var I=t(455),T=t.n(I),U=(t(449),t(456));function W(){var n=k()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return W=function(){return n},n}var J=t(14).search.parse(window.location.href),X=J.present,B=(J.live,function(n){function e(n){return o()(this,e),l()(this,f()(e).call(this,n))}return m()(e,n),p()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),G=E.default.div(W()),K=function(n){function e(n){return o()(this,e),l()(this,f()(e).call(this,n))}return m()(e,n),p()(e,[{key:"render",value:function(){var n=this;return X?this.props.children(T()({},this.props,{quiet:!0,children:[i.a.createElement("div",null,"YouTube")]})):i.a.createElement(U.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(G,null,e.iframe),n.props.children(T()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function L(){var n=k()(["\n  width: 5vw;\n"]);return L=function(){return n},n}function Q(){var n=k()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return Q=function(){return n},n}function R(){var n=k()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return R=function(){return n},n}E.default.div(R()),E.default.div(Q()),E.default.div(L());var Y=t(457),H=t.n(Y),N=(t(453),t(458),function(n){return i.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},i.a.createElement(H.a,n))});function Z(){var n=k()(["\n    font-size: 3.5rem;\n    --quote-border-color: #ddd;\n"]);return Z=function(){return n},n}var $=E.default.div(Z()),_=function(n){return i.a.createElement($,null,i.a.createElement(a.Quote,n))};function nn(){var n=k()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return nn=function(){return n},n}var en=E.default.span(nn()),tn=t(62);t.d(e,"c",function(){return j}),t.d(e,"g",function(){return K}),t.d(e,"f",function(){return B}),t.d(e,"a",function(){return N}),t.d(e,"b",function(){return _}),t.d(e,"e",function(){return en}),t.d(e,"d",function(){return tn.a})},485:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},t.apply(this,arguments)}n.exports=t}}]);
//# sourceMappingURL=15.js.map