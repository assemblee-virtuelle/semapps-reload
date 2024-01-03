"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9179],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9167:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],s={title:"Notifications"},l=void 0,c={unversionedId:"middleware/notifications/index",id:"middleware/notifications/index",title:"Notifications",description:"This package allows you to send notifications to user, through digest emails, single emails or push notifications.",source:"@site/docs/middleware/notifications/index.md",sourceDirName:"middleware/notifications",slug:"/middleware/notifications/",permalink:"/semapps/docs/middleware/notifications/",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/middleware/notifications/index.md",tags:[],version:"current",frontMatter:{title:"Notifications"},sidebar:"middleware",previous:{title:"Migration utilities",permalink:"/semapps/docs/middleware/migration"},next:{title:"Digest",permalink:"/semapps/docs/middleware/notifications/digest"}},u={},p=[{value:"Services",id:"services",level:2},{value:"Install",id:"install",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This package allows you to send notifications to user, through digest emails, single emails or push notifications."),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/semapps/docs/middleware/notifications/digest"},"DigestNotificationsService")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/semapps/docs/middleware/notifications/single-mail"},"SingleMailNotificationsService")),(0,o.kt)("li",{parentName:"ul"},"ExpoPushService ",(0,o.kt)("em",{parentName:"li"},"(legacy, must be refactored)"))),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @semapps/notifications\n")))}f.isMDXComponent=!0}}]);