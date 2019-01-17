(window.webpackJsonp=window.webpackJsonp||[]).push([[20,30],{421:function(n,e,t){"use strict";t.r(e),e.default={}},431:function(n,e,t){"use strict";t.r(e);t(421);var r=t(0),i=t.n(r),a=t(64),o=t.n(a),u=(t(449),t(61),t(451),t(63)),c=t.n(u),l=t(452),s=t(16),f=(t(450),t(66)),d=l.Main.Slide,p=l.Main.A,h=i.a.createElement(c.a,null,i.a.createElement("h3",null,"WebUSB Arduino added"),i.a.createElement("p",null,"...we get this nice notification which indicates that we should open localhost:1337"),i.a.createElement("p",null,"The URL is the one we specified in the Arduino Sketch"),i.a.createElement("p",null,"Not working in Windows as of now"));e.default=i.a.createElement(d,{key:o()(),background:"#f8f8ff",animationIn:f.fade.in},i.a.createElement(s.Plugins.Data,{luminave:[""]}),h,i.a.createElement(p,null,i.a.createElement("img",{src:"media/webusb_dmxcontroller_added.png",alt:"Added WebUSB DMX512 Controller to computer",style:{width:"90vw"}})))},450:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(61),o=t(8),u=t.n(o),c=t(9),l=t.n(c),s=t(10),f=t.n(s),d=t(6),p=t.n(d),h=t(11),m=t.n(h),v=t(1),w=t.n(v),g=t(65),b=t.n(g),y=(b.a,t(5)),k=t.n(y),E=t(2);function x(){var n=k()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return x=function(){return n},n}E.default.div(x());function z(){var n=k()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return z=function(){return n},n}E.default.div(z());function P(){var n=k()(["\n  font-style: italic\n"]);return P=function(){return n},n}E.default.span(P());function q(){var n=k()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return q=function(){return n},n}E.default.span(q());function D(){var n=k()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return D=function(){return n},n}function S(){var n=k()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return S=function(){return n},n}function A(){var n=k()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return A=function(){return n},n}var C=Object(E.keyframes)(A()),F=E.default.span(S(),C,function(n){var e=n.time;return void 0===e?.85:e},function(n){var e=n.delay;return void 0===e?0:e}),U=E.default.div(D()),W=function(n){var e=n.text.split(""),t=e.length,r=n.style;return i.a.createElement(i.a.Fragment,null,i.a.createElement(U,{style:r},e.map(function(e,r){var a=n.time/t*(t-r)*-1;return i.a.createElement(F,{key:r,time:n.time,delay:a},e)})))};W.defaultProps={time:.85};var M=W;function V(){var n=k()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return V=function(){return n},n}E.default.span(V());var I=t(455),j=t.n(I),B=(t(449),t(456));function J(){var n=k()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return J=function(){return n},n}var O=t(14).search.parse(window.location.href),R=O.present,T=(O.live,function(n){function e(n){return u()(this,e),l()(this,f()(e).call(this,n))}return m()(e,n),p()(e,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.children)}}]),e}(r.Component)),X=E.default.div(J()),_=function(n){function e(n){return u()(this,e),l()(this,f()(e).call(this,n))}return m()(e,n),p()(e,[{key:"render",value:function(){var n=this;return R?this.props.children(j()({},this.props,{quiet:!0,children:[i.a.createElement("div",null,"YouTube")]})):i.a.createElement(B.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(X,null,e.iframe),n.props.children(j()({},n.props,e,{children:[],iframe:null})))}})}}]),e}(r.Component);function L(){var n=k()(["\n  width: 5vw;\n"]);return L=function(){return n},n}function N(){var n=k()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return N=function(){return n},n}function Q(){var n=k()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return Q=function(){return n},n}E.default.div(Q()),E.default.div(N()),E.default.div(L());var Y=t(457),G=t.n(Y),H=(t(454),t(458),function(n){return i.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},i.a.createElement(G.a,n))});function K(){var n=k()(["\n    font-size: .65em;\n    color: #ccc;\n    margin: 0 0 0 3em;\n    font-style: italic;\n"]);return K=function(){return n},n}function Z(){var n=k()(['\n    font-size: 3.5rem;\n    --quote-border-color: #fff;\n    position: relative;\n\n    :before, \n    :after {\n      position: absolute;\n      font-size: 4em;\n      color: #ccc;\n      \n    }\n\n    :before {\n      content: "“";\n      top: 0;\n      left: 0;\n    }\n\n    :after {\n      content: "”";\n      bottom: 0;\n      right: 0;\n      line-height: 0;\n    }\n']);return Z=function(){return n},n}var $=E.default.div(Z()),nn=E.default.div(K()),en=function(n){return i.a.createElement($,null,i.a.createElement(a.Quote,n),i.a.createElement(nn,null,n.source))};function tn(){var n=k()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return tn=function(){return n},n}var rn=E.default.span(tn()),an=t(62);t.d(e,"c",function(){return M}),t.d(e,"g",function(){return _}),t.d(e,"f",function(){return T}),t.d(e,"a",function(){return H}),t.d(e,"b",function(){return en}),t.d(e,"e",function(){return rn}),t.d(e,"d",function(){return an.a})}}]);
//# sourceMappingURL=20.js.map