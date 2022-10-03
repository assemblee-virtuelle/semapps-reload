"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("markdown-to-jsx"),t=require("react-mde"),n=require("react-admin"),o=require("@material-ui/core");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=a(e),i=a(r),l=a(t);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r,t,n,o,a,u){try{var i=e[a](u),l=i.value}catch(e){return void t(e)}i.done?r(l):Promise.resolve(l).then(n,o)}function p(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function u(e){s(a,n,o,u,i,"next",e)}function i(e){s(a,n,o,u,i,"throw",e)}u(void 0)}))}}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function v(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function b(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(e){i=!0,o=e}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var h=["source","record","LabelComponent","overrides"],g=function(e){var r=e.source,t=e.record,n=e.LabelComponent,o=e.overrides,a=void 0===o?{}:o,l=v(e,h);return t&&t[r]?u.default.createElement(i.default,{options:f({createElement:function(e,r,t){return r.label?u.default.createElement(u.default.Fragment,null,u.default.createElement(n,null,r.label),u.default.createElement(e,r,t)):u.default.createElement(e,r,t)},overrides:f({h1:n},a)},l)},t[r]):null};g.defaultProps={LabelComponent:"h2",addLabel:!0};var O=o.makeStyles((function(e){return{validationError:{"& .MuiFormLabel-root":{color:e.palette.error.main},"& .mde-text":{outline:"-webkit-focus-ring-color auto 1px",outlineOffset:0,outlineColor:e.palette.error.main,outlineStyle:"auto",outlineWidth:1}}}}));exports.MarkdownField=g,exports.MarkdownInput=function(r){var t=O(),a=r.validate,c=e.useMemo((function(){return!!a&&!![].concat(a).find((function(e){return e.toString()===n.required().toString()}))}),[a]),f=b(e.useState("write"),2),s=f[0],d=f[1],v=n.useInput(r),y=v.input,h=y.value,g=y.onChange,w=v.meta,j=w.error,x=w.touched;return u.default.createElement(o.FormControl,{fullWidth:!0,className:"ra-input-mde ".concat(j?t.validationError:"")},u.default.createElement(n.Labeled,m({},r,{isRequired:c}),u.default.createElement(l.default,m({value:h,onChange:function(e){return g(e)},onTabChange:function(e){return d(e)},generateMarkdownPreview:function(){var e=p(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.default.createElement(i.default,null,r));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),selectedTab:s},r))),u.default.createElement(o.FormHelperText,{error:!!j,margin:"dense",variant:"outlined"},u.default.createElement(n.InputHelperText,{error:j,helperText:r.helperText,touched:j||x})))},exports.useLoadLinks=function(e,r){var t=n.useDataProvider(),o=n.useTranslate();return function(){var n=p(regeneratorRuntime.mark((function n(a){var u;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a){n.next=9;break}return n.next=3,t.getList(e,{pagination:{page:1,perPage:5},filter:{q:a}});case 3:if(!((u=n.sent).total>0)){n.next=8;break}return n.abrupt("return",u.data.map((function(t){return{preview:t[r],value:"[".concat(t[r],"](/").concat(e,"/").concat(encodeURIComponent(t.id),"/show)")}})));case 8:return n.abrupt("return",[{preview:o("ra.navigation.no_results"),value:"["+a}]);case 9:return n.abrupt("return",[{preview:o("ra.action.search"),value:"["+a}]);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};
//# sourceMappingURL=index.cjs.js.map
