(window.webpackJsonp=window.webpackJsonp||[]).push([[13,29],{421:function(n,t,e){"use strict";e.r(t),t.default={}},423:function(n,t,e){"use strict";e.r(t);e(421);var r=e(0),i=e.n(r),a=e(64),u=e.n(a),o=(e(448),e(61),e(450),e(63)),c=e.n(o),l=e(451),s=e(16),f=(e(449),e(460),e(461),l.Main.Slide),d=l.Main.A,p=i.a.createElement(c.a,null,i.a.createElement("h3",null,"Fixture"),i.a.createElement("p",null,"In the DMX512 world a light is called a fixture, because it can be mounted onto other things so that is stays fix"),i.a.createElement("p",null,"There are many different types, this one is pointing into a single direction"),i.a.createElement("p",null,"There are others that can move or produce smoke or even lasers, but we will focus on this simple one"));t.default=i.a.createElement(f,{key:u()(),background:'url("media/flat_par.jpg")'},i.a.createElement(s.Plugins.Data,{luminave:[""]}),p,i.a.createElement(d,null,i.a.createElement("br",null)))},449:function(n,t,e){"use strict";var r=e(0),i=e.n(r),a=e(61),u=e(8),o=e.n(u),c=e(9),l=e.n(c),s=e(10),f=e.n(s),d=e(6),p=e.n(d),v=e(11),h=e.n(v),m=e(1),b=e.n(m),g=e(65),y=e.n(g),w=(y.a,e(5)),k=e.n(w),x=e(2);function E(){var n=k()(["\n  font-size: calc(1vw + 1vh + .7vmin)\n"]);return E=function(){return n},n}x.default.div(E());function j(){var n=k()(["\n  font-size: calc(.8vw + .8vh + .2vmin)\n"]);return j=function(){return n},n}x.default.div(j());function O(){var n=k()(["\n  font-style: italic\n"]);return O=function(){return n},n}x.default.span(O());function P(){var n=k()(["\n  color: #000;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);\n  background: url(https://i.giphy.com/l2R01FtX9gO0aDio0.gif);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n"]);return P=function(){return n},n}x.default.span(P());function q(){var n=k()(["\n  background: var(--theme-surface);\n  box-shadow: 0 0 0 1rem var(--theme-surface);\n"]);return q=function(){return n},n}function z(){var n=k()(["\n  animation: "," ease-in-out ","s infinite backwards ","s;\n"]);return z=function(){return n},n}function D(){var n=k()(["\n  0% {\n    color: #35c9a4;\n  }\n  25% {\n    color: #DA4453;\n  }\n  50% {\n    color: #FFCE54;\n  }\n  75% {\n    color: #3caee5;\n  }\n  100% {\n    color: #35c9a4;\n  }\n"]);return D=function(){return n},n}var F=Object(x.keyframes)(D()),C=x.default.span(z(),F,function(n){var t=n.time;return void 0===t?.85:t},function(n){var t=n.delay;return void 0===t?0:t}),M=x.default.div(q()),V=function(n){var t=n.text.split(""),e=t.length,r=n.style;return i.a.createElement(i.a.Fragment,null,i.a.createElement(M,{style:r},t.map(function(t,r){var a=n.time/e*(e-r)*-1;return i.a.createElement(C,{key:r,time:n.time,delay:a},t)})))};V.defaultProps={time:.85};var I=V;function S(){var n=k()(["\n  animation: strobe 250ms steps(1, end) infinite;\n\n  @keyframes strobe {\n    74% {\n      background: white;\n    }\n    75% {\n      background: black;\n    }\n  }\n"]);return S=function(){return n},n}x.default.span(S());var T=e(454),A=e.n(T),J=(e(448),e(455));function U(){var n=k()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1;\n\n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n"]);return U=function(){return n},n}var W=e(14).search.parse(window.location.href),X=W.present,Q=(W.live,function(n){function t(n){return o()(this,t),l()(this,f()(t).call(this,n))}return h()(t,n),p()(t,[{key:"componentDidMount",value:function(){if(this.props.quiet)return!0;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}},{key:"componentDidUpdate",value:function(n){if(this.props.quiet)return!0;if(n.isPlaying!==this.props.isPlaying){if(this.props.quiet)return;this.props.isPlaying?this.props.playVideo():this.props.pauseVideo()}}},{key:"shouldComponentUpdate",value:function(n){return!!this.props.quiet||n.getPlayerState()>-1}},{key:"render",value:function(){return i.a.createElement("div",null,this.props.children)}}]),t}(r.Component)),R=x.default.div(U()),Y=function(n){function t(n){return o()(this,t),l()(this,f()(t).call(this,n))}return h()(t,n),p()(t,[{key:"render",value:function(){var n=this;return X?this.props.children(A()({},this.props,{quiet:!0,children:[i.a.createElement("div",null,"YouTube")]})):i.a.createElement(J.a,{videoId:this.props.videoId,controls:0,disablekb:1,rel:0,start:this.props.start,modestbranding:0,showinfo:0,origin:window.location.origin,render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(R,null,t.iframe),n.props.children(A()({},n.props,t,{children:[],iframe:null})))}})}}]),t}(r.Component);function _(){var n=k()(["\n  width: 5vw;\n"]);return _=function(){return n},n}function B(){var n=k()(["\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"]);return B=function(){return n},n}function G(){var n=k()(["\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n"]);return G=function(){return n},n}x.default.div(G()),x.default.div(B()),x.default.div(_());var H=e(456),K=e.n(H),L=(e(452),e(457),function(n){return i.a.createElement("div",{style:{minWidth:"50vw",maxWidth:"70vw",fontSize:"0.75em"}},i.a.createElement(K.a,n))});function N(){var n=k()(["\n    font-size: 3.5rem;\n    --quote-border-color: #ddd;\n"]);return N=function(){return n},n}var Z=x.default.div(N()),$=function(n){return i.a.createElement(Z,null,i.a.createElement(a.Quote,n))};function nn(){var n=k()(["\n  background: var(--theme-primary);\n  box-shadow: \n    -6px 0 0 0 var(--theme-primary),\n    6px 0 0 0 var(--theme-primary)\n  ;\n"]);return nn=function(){return n},n}var tn=x.default.span(nn()),en=e(62);e.d(t,"c",function(){return I}),e.d(t,"g",function(){return Y}),e.d(t,"f",function(){return Q}),e.d(t,"a",function(){return L}),e.d(t,"b",function(){return $}),e.d(t,"e",function(){return tn}),e.d(t,"d",function(){return en.a})},460:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var r=e(5),i=e.n(r);e(0);function a(){var n=i()(["\n  color: var(--theme-on-primary);\n  background: var(--theme-primary);\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1rem var(--theme-primary);\n  line-height: 1.25em;\n  display: inline-block;\n  max-width: 80vw;\n  text-decoration: none;\n\n  :hover {\n      filter: invert(100%);\n  }\n"]);return a=function(){return n},n}var u=e(2).default.a(a())},461:function(n,t,e){"use strict";e.d(t,"a",function(){return w}),e.d(t,"b",function(){return k}),e.d(t,"c",function(){return x});var r=e(5),i=e.n(r),a=(e(0),e(2)),u=e(450),o=e.n(u);function c(){var n=i()(["\n  border-radius: 50%;\n  border: .5em solid var(--theme-primary);\n"]);return c=function(){return n},n}function l(){var n=i()(["\n  height: 40vh;\n"]);return l=function(){return n},n}function s(){var n=i()(["\n  height: 90vh;\n"]);return s=function(){return n},n}function f(){var n=i()(["\n  ",";\n  ",";  \n"]);return f=function(){return n},n}function d(){var n=i()(["\n  ",";\n"]);return d=function(){return n},n}function p(){var n=i()(["\n  --background-size: 200% auto;\n"]);return p=function(){return n},n}function v(){var n=i()(["\n  --background-position: top center;\n"]);return v=function(){return n},n}function h(){var n=i()(["\n  --background-position: top right;\n"]);return h=function(){return n},n}function m(){var n=i()(["\n  --width: 300px;\n  --height: 300px;\n"]);return m=function(){return n},n}var b=Object(a.css)(m()),g=Object(a.css)(h()),y=(Object(a.css)(v()),Object(a.css)(p())),w=(Object(a.default)(o.a)(d(),b),Object(a.default)(o.a)(f(),y,g),a.default.img(s())),k=a.default.img(l()),x=Object(a.default)(k)(c())}}]);
//# sourceMappingURL=13.js.map