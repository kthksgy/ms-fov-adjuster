(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8569)}])},8569:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var r=n(5893),i=n(9008),o=n(7294),a=n(545),s=n(1555),u=n(4119),c=n(4266),l=n(4051),h="4:3 Horizontal",f="16:9 Horizontal",d="Direct Horizontal",p="Vertical",g=1e6;function v(e){return e*(Math.PI/180)}function y(e){return e/(Math.PI/180)}function m(e,t,n,r){switch(n){case"value":return{value:r?parseFloat(r):"",basis:e.basis};case"basis":return function(e,t,n){var r=b(e,t);return{value:Math.round(y(n==d?r:2*Math.atan(Math.tan(r/2)/j(n)/(t.width/t.height)))*g)/g,basis:n}}(e,t,r);default:return null}}function j(e){switch(e){case h:return 3/4;case f:return 9/16;case p:default:return 1}}function b(e,t){switch(e.basis){case h:case f:case p:return 2*Math.atan(Math.tan(v(e.value)/2)*j(e.basis)*(t.width/t.height));case d:default:return v(e.value)}}function x(e,t){return t=0===t?1e-15:t,2*Math.atan(t*Math.tan(e/2))}function w(e){return(0,r.jsxs)(l.Z,{className:"g-0",children:[(0,r.jsx)(s.Z,{md:8,children:(0,r.jsx)(c.Z.Group,{children:(0,r.jsx)(u.Z,{controlId:"floatingInputGrid",label:"\u8996\u91ce\u89d2",children:(0,r.jsx)(c.Z.Control,{type:"number",name:"value",min:"0",value:e.fieldOfView.value,onChange:e.handleFieldOfViewChange})})})}),(0,r.jsx)(s.Z,{md:4,children:(0,r.jsx)(c.Z.Group,{children:(0,r.jsx)(u.Z,{controlId:"floatingSelectGrid",label:"\u8996\u91ce\u89d2\u306e\u57fa\u6e96",children:(0,r.jsxs)(c.Z.Select,{name:"basis",value:e.fieldOfView.basis,onChange:e.handleFieldOfViewChange,"aria-label":"\u8996\u91ce\u89d2\u306e\u57fa\u6e96",children:[(0,r.jsx)("option",{value:h,children:"4:3\u753b\u9762 \u6c34\u5e73\u8996\u91ce\u89d2"}),(0,r.jsx)("option",{value:f,children:"16:9\u753b\u9762 \u6c34\u5e73\u8996\u91ce\u89d2"}),(0,r.jsx)("option",{value:d,children:"\u76f4\u63a5\u5165\u529b \u6c34\u5e73\u8996\u91ce\u89d2"}),(0,r.jsx)("option",{value:p,children:"\u5782\u76f4\u8996\u91ce\u89d2"})]})})})})]})}var O={CM_360:"cm/360\xb0",IN_360:"in/360\xb0"};function S(e,t,n){switch(t){case"value":return{value:n?parseFloat(n):"",unit:e.unit};case"unit":if(e.unit!=n)return n==O.CM_360?M(e):n==O.IN_360?function(e){return e.unit==O.IN_360?e:{value:e.value/2.54,unit:O.IN_360}}(e):null;default:return null}}function M(e){return e.unit==O.CM_360?e:{value:2.54*e.value,unit:O.CM_360}}function C(e){return(0,r.jsxs)(l.Z,{className:"g-0",children:[(0,r.jsx)(s.Z,{md:8,children:(0,r.jsx)(c.Z.Group,{children:(0,r.jsx)(u.Z,{controlId:"floatingInputGrid",label:"\u30de\u30a6\u30b9\u611f\u5ea6",children:(0,r.jsx)(c.Z.Control,{type:"number",name:"value",min:"0",value:e.mouseSensitivity.value,onChange:e.handleMouseSensitivityChange,placeholder:"40.0"})})})}),(0,r.jsx)(s.Z,{md:4,children:(0,r.jsx)(c.Z.Group,{children:(0,r.jsx)(u.Z,{controlId:"floatingSelectGrid",label:"\u30de\u30a6\u30b9\u611f\u5ea6\u306e\u5358\u4f4d",children:(0,r.jsx)(c.Z.Select,{name:"unit",value:e.mouseSensitivity.unit,onChange:e.handleMouseSensitivityChange,"aria-label":"\u30de\u30a6\u30b9\u611f\u5ea6\u306e\u5358\u4f4d",children:Object.values(O).map((function(e){return(0,r.jsx)("option",{value:e,children:e},e)}))})})})})]})}function _(e){return(0,r.jsxs)(l.Z,{className:"g-0",children:[(0,r.jsx)(s.Z,{md:!0,children:(0,r.jsx)(c.Z.Group,{children:(0,r.jsx)(u.Z,{controlId:"floatingInputGrid",label:"\u89e3\u50cf\u5ea6\u306e\u6a2a\u5e45",children:(0,r.jsx)(c.Z.Control,{type:"number",name:"width",min:"0",step:"1",value:e.resolution.width,onChange:e.handleResolutionChange,placeholder:"1920"})})})}),(0,r.jsx)(s.Z,{md:!0,children:(0,r.jsx)(c.Z.Group,{children:(0,r.jsx)(u.Z,{controlId:"floatingInputGrid",label:"\u89e3\u50cf\u5ea6\u306e\u7e26\u5e45",children:(0,r.jsx)(c.Z.Control,{type:"number",name:"height",min:"0",step:"1",value:e.resolution.height,onChange:e.handleResolutionChange,placeholder:"1080"})})})})]})}function Z(e){return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(a.Z.Header,{children:"\u73fe\u5728\u306e\u8a2d\u5b9a"}),(0,r.jsxs)(a.Z.Body,{className:"m-0",children:[(0,r.jsx)(C,{mouseSensitivity:e.sourceMouseSensitivity,handleMouseSensitivityChange:e.handleSourceMouseSensitivityChange}),(0,r.jsx)(w,{fieldOfView:e.sourceFieldOfView,handleFieldOfViewChange:e.handleSourceFieldOfViewChange}),(0,r.jsx)(_,{resolution:e.sourceResolution,handleResolutionChange:e.handleSourceResolutionChange})]})]})}function R(e,t,n,r,i){var o=function(e,t){return e.unit!=t.unit&&(e=M(e),t=M(t)),t.value/e.value}(e=M(e),r=M(r));return{value:y(function(e,t){return t=0===t?1e-15:t,2*Math.atan(Math.tan(e/2)/t)}(x(b(t,n),i)/o,i)),basis:d}}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return!t||"object"!==D(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=V(e);if(t){var i=V(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return P(this,n)}}var I=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(s,e);var t,n,i,o=N(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=o.call(this,e)).handleTargetFieldOfViewChange=function(e){var n=m(t.state.targetFieldOfView,t.props.sourceResolution,e.target.name,e.target.value);null!==n&&t.setState({targetFieldOfView:n})},t.state={targetFieldOfView:{value:100,basis:h}},t}return t=s,(n=[{key:"render",value:function(){var e=function(e,t,n,r,i){var o=b(t,n),a=b(r,n);return function(e,t){return{value:e.value*t,unit:e.unit}}(e,x(o,i)/x(a,i))}(this.props.sourceMouseSensitivity,this.props.sourceFieldOfView,this.props.sourceResolution,this.state.targetFieldOfView,this.props.targetMonitorDistance);return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(a.Z.Header,{children:"\u8996\u91ce\u89d2\u304b\u3089\u30de\u30a6\u30b9\u611f\u5ea6\u3092\u8a08\u7b97\u3059\u308b"}),(0,r.jsxs)(a.Z.Body,{className:"m-0",children:[(0,r.jsx)(w,{fieldOfView:this.state.targetFieldOfView,handleFieldOfViewChange:this.handleTargetFieldOfViewChange}),(0,r.jsxs)("p",{className:"mt-1",children:["\u65b0\u3057\u3044\u30de\u30a6\u30b9\u611f\u5ea6: ",e.value,"[",e.unit,"]"]})]})]})}}])&&F(t.prototype,n),i&&F(t,i),s}(o.Component);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return!t||"object"!==H(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var i=E(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return G(this,n)}}var W=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(s,e);var t,n,i,o=z(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=o.call(this,e)).handleTargetMouseSensitivityChange=function(e){var n=S(t.state.targetMouseSensitivity,e.target.name,e.target.value);null!==n&&t.setState({targetMouseSensitivity:n})},t.state={targetMouseSensitivity:{value:30,unit:O.CM_360}},t}return t=s,(n=[{key:"render",value:function(){var e=R(this.props.sourceMouseSensitivity,this.props.sourceFieldOfView,this.props.sourceResolution,this.state.targetMouseSensitivity,this.props.targetMonitorDistance);return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(a.Z.Header,{children:"\u30de\u30a6\u30b9\u611f\u5ea6\u304b\u3089\u8996\u91ce\u89d2\u3092\u8a08\u7b97\u3059\u308b"}),(0,r.jsxs)(a.Z.Body,{className:"m-0",children:[(0,r.jsx)(C,{mouseSensitivity:this.state.targetMouseSensitivity,handleMouseSensitivityChange:this.handleTargetMouseSensitivityChange}),(0,r.jsxs)("p",{className:"mt-1",children:["\u65b0\u3057\u3044\u8996\u91ce\u89d2: ",e.value,"\xb0 (\u76f4\u63a5\u5165\u529b \u6c34\u5e73\u8996\u91ce\u89d2)"]})]})]})}}])&&T(t.prototype,n),i&&T(t,i),s}(o.Component);function X(e){return(0,r.jsxs)(l.Z,{className:"g-0",children:[(0,r.jsx)(s.Z,{md:10,children:(0,r.jsxs)(c.Z.Group,{className:"pe-3",children:[(0,r.jsx)(c.Z.Label,{children:"\u30e2\u30cb\u30bf\u30fc\u30c7\u30a3\u30b9\u30bf\u30f3\u30b9"}),(0,r.jsx)(c.Z.Range,{min:"0.0",max:"1.0",step:"0.01",value:e.monitorDistance,onChange:e.handleMonitorDistanceChange})]})}),(0,r.jsx)(s.Z,{md:2,children:(0,r.jsx)(c.Z.Group,{children:(0,r.jsx)(u.Z,{controlId:"floatingInputGrid",label:(100*e.monitorDistance).toFixed(2)+"%",children:(0,r.jsx)(c.Z.Control,{type:"number",min:"0.0",max:"1.0",step:"0.01",placeholder:"0",value:e.monitorDistance,onChange:e.handleMonitorDistanceChange})})})})]})}function J(e){return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(a.Z.Header,{children:"\u5909\u63db\u65b9\u6cd5\u306e\u8a2d\u5b9a"}),(0,r.jsx)(a.Z.Body,{className:"m-0",children:(0,r.jsx)(X,{monitorDistance:e.targetMonitorDistance,handleMonitorDistanceChange:e.handleTargetMonitorDistanceChange})})]})}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){q(e,t,n[t])}))}return e}function Q(e,t){return!t||"object"!==Y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Y=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=A(e);if(t){var i=A(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Q(this,n)}}var ee=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(a,e);var t,n,i,o=$(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).handleSourceMouseSensitivityChange=function(e){var n=S(t.state.sourceMouseSensitivity,e.target.name,e.target.value);null!==n&&t.setState({sourceMouseSensitivity:n})},t.handleSourceFieldOfViewChange=function(e){var n=m(t.state.sourceFieldOfView,t.state.sourceResolution,e.target.name,e.target.value);n&&t.setState({sourceFieldOfView:n})},t.handleSourceResolutionChange=function(e){t.setState({sourceResolution:K({},t.state.sourceResolution,q({},e.target.name,e.target.value?parseInt(e.target.value):""))})},t.handleTargetMonitorDistanceChange=function(e){t.setState({targetMonitorDistance:e.target.value?parseFloat(e.target.value):0})},t.state={sourceMouseSensitivity:{value:40,unit:O.CM_360},sourceFieldOfView:{value:90,basis:h},sourceResolution:{width:1920,height:1080},targetMonitorDistance:0},t}return t=a,(n=[{key:"render",value:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"m-2",children:(0,r.jsx)(Z,{sourceMouseSensitivity:this.state.sourceMouseSensitivity,sourceFieldOfView:this.state.sourceFieldOfView,sourceResolution:this.state.sourceResolution,handleSourceMouseSensitivityChange:this.handleSourceMouseSensitivityChange,handleSourceFieldOfViewChange:this.handleSourceFieldOfViewChange,handleSourceResolutionChange:this.handleSourceResolutionChange})}),(0,r.jsx)("div",{className:"m-2",children:(0,r.jsx)(J,{targetMonitorDistance:this.state.targetMonitorDistance,handleTargetMonitorDistanceChange:this.handleTargetMonitorDistanceChange})}),(0,r.jsx)("div",{className:"m-2",children:(0,r.jsx)(I,{sourceMouseSensitivity:this.state.sourceMouseSensitivity,sourceFieldOfView:this.state.sourceFieldOfView,sourceResolution:this.state.sourceResolution,targetMonitorDistance:this.state.targetMonitorDistance})}),(0,r.jsx)("div",{className:"m-2",children:(0,r.jsx)(W,{sourceMouseSensitivity:this.state.sourceMouseSensitivity,sourceFieldOfView:this.state.sourceFieldOfView,sourceResolution:this.state.sourceResolution,targetMonitorDistance:this.state.targetMonitorDistance})})]})}}])&&L(t.prototype,n),i&&L(t,i),a}(o.Component),te=function(){var e="\u30de\u30a6\u30b9\u611f\u5ea6\uff0f\u8996\u91ce\u89d2\u8abf\u6574\u30a2\u30d7\u30ea",t="\u30e2\u30cb\u30bf\u30fc\u30c7\u30a3\u30b9\u30bf\u30f3\u30b9\u3092\u7528\u3044\u3066\u30de\u30a6\u30b9\u611f\u5ea6\u3068\u8996\u91ce\u89d2\u3092\u8abf\u6574\u3059\u308bWeb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002\u8996\u91ce\u89d2\u3092\u6307\u5b9a\u3057\u305f\u30de\u30a6\u30b9\u611f\u5ea6\u306e\u8abf\u6574\u3001\u30de\u30a6\u30b9\u611f\u5ea6\u3092\u6307\u5b9a\u3057\u305f\u8996\u91ce\u89d2\u306e\u8abf\u6574\u304c\u51fa\u6765\u307e\u3059\u3002";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("link",{rel:"apple-touch-icon",type:"image/png",href:"apple-touch-icon-180x180.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"icon-192x192.png"}),(0,r.jsx)("meta",{name:"author",content:"kthksgy"}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{name:"keywords",content:"\u30de\u30a6\u30b9\u611f\u5ea6,\u8996\u91ce\u89d2,FPS,Web\u30a2\u30d7\u30ea"}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://kthksgy.github.io/ms-fov-adjuster/"}),(0,r.jsx)("meta",{property:"og:image",content:"https://kthksgy.github.io/ms-fov-adjuster/featured-image-1200x630.png"}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:locale",content:"ja_JP"}),(0,r.jsx)("meta",{property:"og:site_name",content:"kthksgy"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"kthksgy"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"kthksgy"}),(0,r.jsx)("meta",{property:"fb:app_id",content:"582586216303936"})]}),(0,r.jsx)(ee,{})]})}}},function(e){e.O(0,[587,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);