(window.webpackJsonp=window.webpackJsonp||[]).push([[32,48],{421:function(n,e,t){"use strict";t.r(e),e.default={}},433:function(n,e,t){"use strict";t.r(e);t(421);var a=t(0),r=t.n(a),i=t(64),c=t.n(i),l=(t(467),t(61),t(469),t(63)),u=t.n(l),o=t(470),d=t(16),f=t(66),m=t(481),s=(t(2),o.Main.Slide),b=o.Main.A,g=r.a.createElement(u.a,null,r.a.createElement("h3",null,"luminave"),r.a.createElement("p",null,"change the color to blue"));e.default=r.a.createElement(s,{key:c()(),background:"#00f",mixin:"--slide-color: black",animationOut:f.flip.y,animationIn:f.flip.y},r.a.createElement(d.Plugins.Data,{luminave:["blue"]}),g,r.a.createElement(b,null,r.a.createElement(m.b,{channels:"6",width:"90%",height:"10em"},r.a.createElement(m.a,{background:"",label:"Red",value:"0",className:"inactive"}),r.a.createElement(m.a,{background:"",label:"Green",value:"0",className:"inactive"}),r.a.createElement(m.a,{background:"",label:"Blue",value:"255",className:"active"}),r.a.createElement(m.a,{background:"",label:"UV",value:"0",className:"inactive"}),r.a.createElement(m.a,{background:"",label:"Dimmer",value:"255",className:"active"}),r.a.createElement(m.a,{background:"",label:"Strobe",value:"0",className:"inactive"}))))},481:function(n,e,t){"use strict";t.d(e,"b",function(){return s}),t.d(e,"c",function(){return v}),t.d(e,"a",function(){return k});var a=t(5),r=t.n(a),i=t(0),c=t.n(i),l=t(2);function u(){var n=r()(["\n    font-size: 3em;\n"]);return u=function(){return n},n}function o(){var n=r()(["\n    margin: 1em 0 0 0;\n    font-size: 0.85em;\n"]);return o=function(){return n},n}function d(){var n=r()(["\n    --background: ",";\n\n    background: #fff;\n    width: 100%;\n    text-align: center;\n\n    font-weight: bold;\n    font-size: 2em;\n"]);return d=function(){return n},n}function f(){var n=r()(["\n    --background: ",";\n\n    background: var(--background, #fff);\n    color: #000;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    position: relative;\n    padding: .25em;\n    \n    :before {\n        counter-increment: number;\n        content: counter(number);\n        position: absolute;\n        display: block;\n        left: 0;\n        bottom: 0;\n        padding: 0.25em;\n\n        width: 35px;\n        height: 35px;\n        background: #fff;\n        text-align: center;\n    }\n\n    &.strobe {\n        animation: strobe 250ms steps(1, end) infinite;\n\n        @keyframes strobe {\n          74% {\n            background: white;\n          }\n          75% {\n            background: black;\n          }\n        }\n    }\n\n    &.uv {\n        box-shadow: 0 0 20px #5b1ccf;\n    }\n\n    &.active {\n        box-shadow: 0 0 0.5em rgba(0, 0, 0, .75);\n        filter: zoom(100%);\n    }\n\n    &.inactive {\n        filter: blur(5px) invert(100%);\n        transform: scale(0.75);\n\n    }\n"]);return f=function(){return n},n}function m(){var n=r()(["\n\n    --channels: ",";\n    --width: ",";\n    --height: ",";\n\n    width: var(--width, 100%);\n    height: var(--height, 50%);\n    display: grid;\n    grid-template-columns: repeat(var(--channels), 1fr);\n    column-gap: 1em;\n    justify-items: center;\n    counter-reset: number;\n"]);return m=function(){return n},n}var s=l.default.div(m(),function(n){return n.channels},function(n){return n.width},function(n){return n.height}),b=l.default.div(f(),function(n){return n.background}),g=l.default.div(d(),function(n){return n.background}),v=l.default.div(o()),h=l.default.div(u()),k=function(n){var e=n.value,t=n.label;return c.a.createElement(b,n,c.a.createElement(g,n,t),n.children,c.a.createElement(h,null,e))}}}]);
//# sourceMappingURL=32.js.map