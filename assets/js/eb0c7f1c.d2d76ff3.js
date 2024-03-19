"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4422],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,k=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},234:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),i=["components"],o={title:"LdpLinkHeaderService"},d=void 0,p={unversionedId:"middleware/ldp/link-header",id:"middleware/ldp/link-header",title:"LdpLinkHeaderService",description:"This service is automatically created by the LdpService with the key ldp.link-header. It allows other services to add custom Link header to GET and HEAD calls on LDP resources and containers.",source:"@site/docs/middleware/ldp/link-header.md",sourceDirName:"middleware/ldp",slug:"/middleware/ldp/link-header",permalink:"/docs/middleware/ldp/link-header",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/middleware/ldp/link-header.md",tags:[],version:"current",frontMatter:{title:"LdpLinkHeaderService"},sidebar:"middleware",previous:{title:"LdpContainerService",permalink:"/docs/middleware/ldp/container"},next:{title:"LdpRegistryService",permalink:"/docs/middleware/ldp/registry"}},c={},u=[{value:"Actions",id:"actions",level:2},{value:"<code>get</code>",id:"get",level:3},{value:"Parameters",id:"parameters",level:5},{value:"Return values",id:"return-values",level:5},{value:"<code>register</code>",id:"register",level:3},{value:"Parameters",id:"parameters-1",level:5}],s={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This service is automatically created by the ",(0,l.kt)("a",{parentName:"p",href:"/docs/middleware/ldp/"},"LdpService")," with the key ",(0,l.kt)("inlineCode",{parentName:"p"},"ldp.link-header"),". It allows other services to add custom ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link"},"Link header")," to GET and HEAD calls on LDP resources and containers."),(0,l.kt)("h2",{id:"actions"},"Actions"),(0,l.kt)("p",null,"The following service actions are available:"),(0,l.kt)("h3",{id:"get"},(0,l.kt)("inlineCode",{parentName:"h3"},"get")),(0,l.kt)("p",null,"Get the Link header for the provided URI."),(0,l.kt)("h5",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the resource or container being fetched")))),(0,l.kt)("h5",{id:"return-values"},"Return values"),(0,l.kt)("p",null,"A string with the whole Link header."),(0,l.kt)("h3",{id:"register"},(0,l.kt)("inlineCode",{parentName:"h3"},"register")),(0,l.kt)("p",null,"Register a Moleculer action which will be called every time a HEAD or GET call is made.\nThis action will receive ",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," as a parameter, and must return an object containing at least an ",(0,l.kt)("inlineCode",{parentName:"p"},"uri")," property, as well as any other parameter to be passed (for example ",(0,l.kt)("inlineCode",{parentName:"p"},"rel"),")."),(0,l.kt)("h5",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"actionName")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"Full name of the Moleculer action to be called")))))}m.isMDXComponent=!0}}]);