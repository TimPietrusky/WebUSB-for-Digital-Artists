(window.webpackJsonp=window.webpackJsonp||[]).push([[24,29],{421:function(e,n,t){"use strict";t.r(n),n.default={}},447:function(e,n,t){"use strict";t.r(n);t(421);var a=t(0),l=t.n(a),r=t(64),i=t.n(r),o=t(448),s=t(61),c=(t(450),t(63)),u=t.n(c),m=t(451),p=t(13),d=t(8),h=t.n(d),v=t(6),E=t.n(v),f=t(9),g=t.n(f),y=t(10),P=t.n(y),w=t(11),S=t.n(w),J=t(14).search.parse(window.location.href),b=J.present,k=J.live,C=J.preview,U=function(e){var n=e.children;return void 0===b&&void 0===k&&void 0===C&&l.a.createElement(l.a.Fragment,null,n)},B=function(e){function n(e){var t;return h()(this,n),(t=g()(this,P()(n).call(this,e))).isPlaying=!1,t}return S()(n,e),E()(n,[{key:"componentDidUpdate",value:function(e){var n=document.getElementById("video");null!==n&&(this.props.isPlaying?(n.play(),this.isPlaying=!0):(n.pause(),this.isPlaying=!1))}},{key:"shouldComponentUpdate",value:function(e){return e.isPlaying!==this.isPlaying}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.Preview,null,l.a.createElement(s.Title,null,"Video ",this.props.isPlaying?"playing":"paused"),l.a.createElement("br",null),l.a.createElement(s.Bold,null,this.props.src)),l.a.createElement(U,null,l.a.createElement("video",{controls:!1,id:"video",src:this.props.src,preload:"auto"})),l.a.createElement(p.Live,null,l.a.createElement("video",{controls:!1,id:"video",src:this.props.src,preload:"auto"})))}}]),n}(a.Component),D=m.Main.Slide,L=m.Main.A,M=l.a.createElement(u.a,null,l.a.createElement("h3",null,"Demo: LiveJS Performance for JSConf EU 2018"),l.a.createElement("p",null,"This is a peformance of LiveJS at this years JSConf EU in Berlin."),l.a.createElement("p",null,"Besides the very huge projections you can see a lot of big squares in the background (135 in total)"),l.a.createElement("p",null,"Each of these squares have a DMX light behind and all of them are controller using the WebUSB DMX512 Controller"));n.default=l.a.createElement(D,{key:i()()},l.a.createElement(p.Plugins.Data,{luminave:[""]}),M,l.a.createElement(L,null,l.a.createElement(o.Sequence,{order:1,steps:2,time:-1},function(e,n,t){return l.a.createElement(B,{src:"media/JSConfEU_LiveJS_Performance_2018.mp4#t=2",isPlaying:0===e})})))}}]);
//# sourceMappingURL=24.js.map