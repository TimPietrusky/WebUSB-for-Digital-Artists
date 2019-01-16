(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{448:function(e,t,n){e.exports=n(470)},450:function(e,t,n){e.exports=n(472)},451:function(e,t,n){e.exports=n(475)},458:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.vertical=t.baseStyles=void 0;var r=n(2),a={AB:{},ABC:{}};t.default=a;var l=t.baseStyles=(0,r.css)(["--default-font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;font-family:var(--font-family,var(--default-font-family));font-size:var(--font-size,2rem);"]),o=t.vertical={};o.base=(0,r.css)(["display:flex;flex-direction:column;align-items:center;align-content:center;"]),o.start=(0,r.css)(["",";justify-content:flex-start;"],o.base),o.end=(0,r.css)(["",";justify-content:flex-end;"],o.base),o.center=(0,r.css)(["",";justify-content:center;"],o.base),a.base=(0,r.css)(["",";display:grid;[data-slot='A']{grid-area:slotA;}[data-slot='B']{grid-area:slotB;}[data-slot='C']{grid-area:slotC;}[data-slot='D']{grid-area:slotD;}"],l),a.A=(0,r.css)(["",";grid-template-columns:1fr;grid-template-rows:1fr;grid-template-areas:'slotA';"],a.base),a.AB.topBottom=(0,r.css)(["",";grid-template-columns:1fr;grid-template-rows:1fr 1fr;grid-template-areas:'slotA' 'slotB';"],a.base),a.AB.leftRight=(0,r.css)(["",";grid-template-columns:1fr 1fr;grid-template-rows:1fr;grid-template-areas:'slotA slotB';"],a.base),a.ABC.top=(0,r.css)(["",";grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;grid-template-areas:'slotA slotA' 'slotB slotC';"],a.base),a.ABC.right=(0,r.css)(["",";grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;grid-template-areas:'slotB slotA' 'slotC slotA';"],a.base),a.ABC.bottom=(0,r.css)(["",";grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;grid-template-areas:'slotB slotC' 'slotA slotA';"],a.base),a.ABC.left=(0,r.css)(["",";grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;grid-template-areas:'slotA slotB' 'slotA slotC';"],a.base),a.ABCD=(0,r.css)(["",";grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;grid-template-areas:'slotA slotB' 'slotC slotD';"],a.base)},459:function(e,t,n){e.exports=n(476)},468:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Slot=function(){return null},t.Static=function(){return null},t.Master=function(){return null}},470:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Sequence=t.FitFragment=t.PlainFragment=t.FragmentRoot=t.default=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),o=d(l),i=d(n(1)),u=n(40),s=d(n(471));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.renderChildren=r.renderChildren.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),a(t,null,[{key:"propTypes",get:function(){return{children:i.default.oneOfType([i.default.func,i.default.node]).isRequired,mixin:i.default.oneOfType([i.default.array,i.default.string]),animation:i.default.oneOfType([i.default.array,i.default.string]),onRest:i.default.func,root:i.default.bool,plain:i.default.bool,fit:i.default.bool,order:i.default.number.isRequired,displayAs:i.default.string,springSettings:i.default.shape({stiffness:i.default.number,damping:i.default.number,precision:i.default.number})}}},{key:"defaultProps",get:function(){return{animation:void 0,mixin:void 0,onRest:function(){},displayAs:void 0,fit:!1,root:!1,plain:!1,springSettings:void 0}}},{key:"contextTypes",get:function(){return{store:i.default.object.isRequired,isPreview:i.default.bool,fragmentOrder:i.default.number,fragmentHost:i.default.number,hostedFragmentOrder:i.default.number}}},{key:"childContextTypes",get:function(){return{hostedFragmentOrder:i.default.number}}}]),a(t,[{key:"getChildContext",value:function(){var e=this.context.hostedFragmentOrder,t=void 0===e?0:e;return{hostedFragmentOrder:this.props.root?this.props.order+t:t}}},{key:"componentWillMount",value:function(){var e=this.props.order,t=this.context,n=t.fragmentHost,r=t.hostedFragmentOrder,a=void 0===r?0:r,l=this.context.store.fragmentHosts.length-1>=n?this.context.store.fragmentHosts[n]:[],o=e+a;l.indexOf(o)<0&&l.push(o),l.length>0&&l.indexOf(0)<0&&l.push(0),this.context.store.fragmentHosts[n]=l.sort(function(e,t){return e-t})}},{key:"renderChildren",value:function(e,t,n){return"function"==typeof this.props.children?this.props.children(e,t,n):this.props.children}},{key:"render",value:function(){var e=this,t=this.context,n=t.store,a=t.fragmentHost,l=t.fragmentOrder,i=t.isPreview,d=t.hostedFragmentOrder,f=void 0===d?0:d,c=n.fragmentHosts[a].length,p=void 0===c?0:c,m=Math.max(0,p-1),g=n.fragmentOrder,y=void 0===g?0===n.fragmentHosts[a].length?0:n.fragmentHosts[a][Math.min(n.fragmentIndex,m)]:g,h=a<n.slideIndex,b=a===n.slideIndex,v=a>n.slideIndex,_=this.props.order+f,O=i||b&&(l||y)>=_||h||v&&0===_,E={t:(0,u.spring)(O?0:1,r({},this.props.springSettings))};return o.default.createElement(u.Motion,{defaultStyle:{t:O?0:1},style:E,onRest:function(){return O?e.props.onRest(n.fragmentIndex,n.fragmentOrder):null}},function(t){var r=t.t,a=O?r:1,l={"--time":a};return e.props.plain?e.renderChildren(a,O,n.fragmentOrder):o.default.createElement(s.default,{style:l,isActive:O,isFit:e.props.fit,displayAs:e.props.displayAs,mixin:e.props.mixin,animation:e.props.animation},e.renderChildren(a,O,n.fragmentOrder))})}},{key:"length",get:function(){return this.context.store.fragmentHosts[this.context.fragmentHost].length}}]),t}();t.default=f;t.FragmentRoot=function(e){return o.default.createElement(f,r({},e,{root:!0}))},t.PlainFragment=function(e){return o.default.createElement(f,r({},e,{plain:!0}))},t.FitFragment=function(e){return o.default.createElement(f,r({},e,{fit:!0}))};var c=t.Sequence=function e(t){var n=t.order,a=t.nextOrder,l=void 0===a?n+1:a,i=t.time,u=void 0===i?1:i,s=t.steps,d=Math.max(-1,l-n-2),c=Math.max(0,d-u+1);return l-n<=s?o.default.createElement(f,r({},t,{order:l,plain:!0}),function(n,a){return a?o.default.createElement(e,r({},t,{nextOrder:l+1,time:n})):t.children(d,u,c)}):t.children(d,u,c)};c.defaultProps={children:function(){},onRest:function(){},time:void 0,nextOrder:void 0,order:0,steps:2},c.propTypes={children:i.default.oneOfType([i.default.node,i.default.func]),onRest:i.default.func,nextOrder:i.default.number,time:i.default.number,order:i.default.number,steps:i.default.number}},471:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}var l=a(n(2)).default.span.withConfig({displayName:"fragment__StyledFragment"})(["--direction:1;",";display:",";",";",";"],function(e){return e.mixin||""},function(e){return e.displayAs||"inline-block"},function(e){return e.isFit?"\n    display: flex;\n    height: 100%;\n    width: 100%;\n    flex: 1;\n  ":""},function(e){return e.animation||"\n      visibility: "+(e.isActive?"visible":"hidden")+"\n  "});l.displayName="StyledFragment",l.propTypes={children:r.default.oneOfType([r.default.func,r.default.node]),isFit:r.default.bool,isActive:r.default.bool,mixin:r.default.oneOfType([r.default.array,r.default.string]),animation:r.default.oneOfType([r.default.array,r.default.string])},t.default=l},472:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FitImage=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),l=d(a),o=d(n(1)),i=d(n(2)),u=d(n(473)),s=d(n(474));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.getImage=n.getImage.bind(n),n.handleLoad=n.handleLoad.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,null,[{key:"propTypes",get:function(){return{mixin:o.default.oneOfType([o.default.array,o.default.string]),className:o.default.string,alt:o.default.string.isRequired,src:o.default.string.isRequired,title:o.default.string}}},{key:"defaultProps",get:function(){return{title:"",mixin:"",className:""}}}]),r(t,[{key:"handleLoad",value:function(){this.setState({height:this.image.height,width:this.image.width})}},{key:"getImage",value:function(e){this.image=e}},{key:"render",value:function(){return l.default.createElement(s.default,{mixin:this.props.mixin,imageData:this.imageData,className:this.props.className},l.default.createElement(u.default,{innerRef:this.getImage,src:this.props.src,alt:this.props.alt,title:this.props.title,onLoad:this.handleLoad}))}},{key:"imageData",get:function(){return"\n      --original-height: "+this.state.height+"px;\n      --original-width: "+this.state.width+'px;\n      background-image: url("'+this.props.src+'");\n    '}}]),t}();t.default=f,(t.FitImage=(0,i.default)(f).withConfig({displayName:"src__FitImage"})(["--height:100%;--width:100%;"])).propTypes={mixin:o.default.oneOfType([o.default.array,o.default.string]),className:o.default.string,alt:o.default.string.isRequired,src:o.default.string.isRequired,title:o.default.string}},473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}var l=a(n(2)).default.img.withConfig({displayName:"img__Img"})(["display:none;"]);l.propTypes={onLoad:r.default.func,innerRef:r.default.func,src:r.default.string.isRequired,alt:r.default.string.isRequired,title:r.default.string},t.default=l},474:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}var l=a(n(2)).default.div.withConfig({displayName:"mask__Mask"})(["",";",";width:var(--width,var(--original-width,0));height:var(--height,var(--original-height,0));background-size:var(--background-size,cover);background-position:var(--background-position,center center);"],function(e){return e.mixin||""},function(e){return e.imageData||""});l.propTypes={imageData:r.default.oneOfType([r.default.array,r.default.string]),mixin:r.default.oneOfType([r.default.array,r.default.string]),className:r.default.string,children:r.default.element},t.default=l},475:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageGrid=t.Grid=t.Collage=t.Half=t.Chapter=t.Cover=t.Main=t.baseStyles=void 0;var r=h(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n"],["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n"]),a=h(["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"],["\n  ",";\n  [data-slot='A'] {\n    ",";\n  }\n  [data-slot='B'] {\n    ",";\n  }\n"]),l=h(["\n  ",";\n  [data-slot='B'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"],["\n  ",";\n  [data-slot='B'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]),o=h(["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"],["\n  ",";\n  [data-slot='A'] {\n    ",";\n    box-sizing: border-box;\n    padding: 0 2rem;\n  }\n"]),i=h(["\n  ",";\n  [data-slot] {\n    box-sizing: border-box;\n    padding: 1rem;\n  }\n"],["\n  ",";\n  [data-slot] {\n    box-sizing: border-box;\n    padding: 1rem;\n  }\n"]),u=h(["\n  ",";\n"],["\n  ",";\n"]),s=n(458);Object.defineProperty(t,"baseStyles",{enumerable:!0,get:function(){return s.baseStyles}});var d=y(n(0)),f=n(459),c=n(61),p=y(c),m=n(450),g=y(s);function y(e){return e&&e.__esModule?e:{default:e}}function h(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}t.Main=(0,f.createStyledMaster)(d.default.createElement(f.Master,null,d.default.createElement(f.Slot,{name:"A"})))(r,g.default.A,s.vertical.center),t.Cover=(0,f.createStyledMaster)(d.default.createElement(f.Master,null,d.default.createElement(f.Slot,{name:"A",only:[c.Title]}),d.default.createElement(f.Slot,{name:"B",only:[c.Subtitle]})))(a,g.default.AB.topBottom,s.vertical.end,s.vertical.start),t.Chapter=(0,f.createStyledMaster)(d.default.createElement(f.Master,null,d.default.createElement(f.Slot,{name:"A",only:[c.Title]}),d.default.createElement(f.Slot,{name:"B",only:[c.Subtitle,p.default]})))(a,g.default.AB.topBottom,s.vertical.end,s.vertical.start),t.Half=(0,f.createStyledMaster)(d.default.createElement(f.Master,null,d.default.createElement(f.Slot,{name:"A",only:[m.FitImage]}),d.default.createElement(f.Slot,{name:"B",not:[m.FitImage]})))(l,g.default.AB.leftRight,s.vertical.start),t.Collage=(0,f.createStyledMaster)(d.default.createElement(f.Master,null,d.default.createElement(f.Slot,{name:"A",not:[m.FitImage]}),d.default.createElement(f.Slot,{name:"B",only:[m.FitImage]}),d.default.createElement(f.Slot,{name:"C",only:[m.FitImage]})))(o,g.default.ABC.right,s.vertical.start),t.Grid=(0,f.createStyledMaster)(d.default.createElement(f.Master,null,d.default.createElement(f.Slot,{name:"A"}),d.default.createElement(f.Slot,{name:"B"}),d.default.createElement(f.Slot,{name:"C"}),d.default.createElement(f.Slot,{name:"D"})))(i,g.default.ABCD),t.ImageGrid=(0,f.createStyledMaster)(d.default.createElement(f.Master,null,d.default.createElement(f.Slot,{name:"A",only:[m.FitImage]}),d.default.createElement(f.Slot,{name:"B",only:[m.FitImage]}),d.default.createElement(f.Slot,{name:"C",only:[m.FitImage]}),d.default.createElement(f.Slot,{name:"D",only:[m.FitImage]})))(u,g.default.ABCD)},476:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(468);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a=n(477);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(a).default}}),Object.defineProperty(t,"createStyledMaster",{enumerable:!0,get:function(){return a.createStyledMaster}})},477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createStyledMaster=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=f;var a=n(0),l=d(a),o=d(n(1)),i=d(n(2)),u=d(n(478)),s=n(468);function d(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.props.children,n=function e(n){return l.default.createElement(u.default,r({},n,{content:n.children}),a.Children.toArray(t).map(function(t,n){return t.type===s.Slot?(0,a.cloneElement)(t,{key:"master-slot__"+n,component:e[t.props.name]}):t}))};return a.Children.toArray(t).filter(function(e){return e.type===s.Slot}).forEach(function(e){var t=e.props.name;n[t]=function(){return null}}),n.propTypes={children:o.default.node.isRequired},n}t.createStyledMaster=function(e){var t=f(e);return function(){return t.Slide=(0,i.default)(t).apply(void 0,arguments),t}}},478:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(0),o=m(l),i=m(n(1)),u=m(n(20)),s=m(n(63)),d=n(448),f=m(d),c=m(n(479)),p=n(468);function m(e){return e&&e.__esModule?e:{default:e}}var g=function(e,t,n){return o.default.createElement("div",{key:"slot__"+t,"data-slot":e.name},o.default.createElement(c.default,a({},n,{type:e.type&&(e.type.displayName||e.type.name)||'"'+e+'"',invalid:!0})))},y=function(e,t,n){return o.default.createElement("div",{key:"slot__"+t,"data-slot":e},o.default.createElement(c.default,a({},n,{missing:!0})))},h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"render",value:function(){return o.default.createElement(u.default,this.props,this.filledStatics,this.filledSlots,this.notes)}},{key:"slots",get:function(){return l.Children.toArray(this.props.children).filter(function(e){return e.type===p.Slot})}},{key:"statics",get:function(){return l.Children.toArray(this.props.children).filter(function(e){return e.type===p.Static})}},{key:"helperSlots",get:function(){return[s.default]}},{key:"content",get:function(){var e=this;return l.Children.toArray(this.props.content).filter(function(t){return!e.helperSlots.includes(t.type)})}},{key:"notes",get:function(){return l.Children.toArray(this.props.content).filter(function(e){return e.type===s.default})}},{key:"filledStatics",get:function(){return this.statics.map(function(e,t){return o.default.createElement("div",{key:"static__"+t,"data-static":e.props.name},e.props.children)})}},{key:"filledSlots",get:function(){var e=this;return this.slots.map(function(t,n){var r=t.props,a=r.only,i=r.not,u=r.required,s=r.component,c=r.name,p=e.content.map(function(e){return e.type}).indexOf(s);if(p<0)return u?y(c,n,t.props):null;var m=l.Children.toArray(e.content[p].props.children).map(function(e,n){return a?function e(t,n,r,a){return t.includes(n.type)?n:n.type===f.default||n.type===d.FragmentRoot?(0,l.cloneElement)(n,{children:l.Children.toArray(n.props.children).map(function(n,l){return e(t,n,100*r+l,a)})}):g(n,r,a)}(a,e,n,t.props):i?function e(t,n,r,a){return n.type===f.default||n.type===d.FragmentRoot?(0,l.cloneElement)(n,{children:l.Children.toArray(n.props.children).map(function(n,l){return e(t,n,100*r+l,a)})}):t.includes(n.type)?g(n,r,a):n}(i,e,n,t.props):e});return u&&0===m.length?y(c,n,t.props):o.default.createElement("div",{key:"item__"+n,"data-slot":t.props.name},m)}).filter(function(e){return Boolean(e)})}}]),t}();h.propTypes={children:function(e,t){var n=new Error('"Master" only accepts children of type "Slot" or "Static"');return Boolean(l.Children.toArray(e[t]).map(function(e){return[p.Static,p.Slot].includes(e.type)?e:n}).filter(function(e){return e===n}).length)?n:null},content:i.default.node},h.defaultProps={children:"",content:""},t.default=h},479:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(0)),a=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.not,n=e.only,a=e.invalid,l=e.missing,o=e.type,i=n?r.default.createElement("div",null,r.default.createElement("strong",null,"Allowed components:"),r.default.createElement("ul",null,n.map(function(e,t){return r.default.createElement("li",{key:"warning_item__"+t},e.displayName||e.name)}))):null,u=t?r.default.createElement("div",null,r.default.createElement("strong",null,"Forbidden components:"),r.default.createElement("ul",null,t.map(function(e,t){return r.default.createElement("li",{key:"warning_item__"+t},e.displayName||e.name)}))):null,s=l?r.default.createElement("div",null,r.default.createElement("strong",null,"Error: Required slot"),u,i):a?r.default.createElement("div",null,r.default.createElement("strong",null,"Error: Invalid component"),r.default.createElement("p",null,"Tried to use ",o),u,i):null;return r.default.createElement("div",null,s)};o.propTypes={not:a.default.array,only:a.default.array,type:a.default.string,invalid:a.default.bool,missing:a.default.bool},o.defaultProps={not:void 0,only:void 0,type:void 0,invalid:void 0,missing:void 0},t.default=o}}]);
//# sourceMappingURL=0.js.map