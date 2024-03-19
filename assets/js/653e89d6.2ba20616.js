"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5482],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3509:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],s={title:"Wordpress"},p=void 0,l={unversionedId:"middleware/importer/wordpress",id:"middleware/importer/wordpress",title:"Wordpress",description:"This mixin allows you to import posts from Wordpress websites.",source:"@site/docs/middleware/importer/wordpress.md",sourceDirName:"middleware/importer",slug:"/middleware/importer/wordpress",permalink:"/docs/middleware/importer/wordpress",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/middleware/importer/wordpress.md",tags:[],version:"current",frontMatter:{title:"Wordpress"},sidebar:"middleware",previous:{title:"PrestaShop",permalink:"/docs/middleware/importer/prestashop"},next:{title:"YesWiki",permalink:"/docs/middleware/importer/yeswiki"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>retrieveMedia</code>",id:"retrievemedia",level:3}],u={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This mixin allows you to import posts from ",(0,i.kt)("a",{parentName:"p",href:"https://wordpress.com"},"Wordpress")," websites."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { WordpressImporterMixin } = require('@semapps/importer');\n\nmodule.exports = {\n  name: 'my-importer',\n  mixins: [WordpressImporterMixin],\n  settings: {\n    source: {\n      wordpress: {\n        baseUrl: null, // Base URL of the Wordpress instance\n        type: 'posts', // Only posts are supported for now\n        appPassword: null // If the API is protected with application passwords, enter one here\n      }\n    },\n    dest: {\n      containerUri: null, // Container where the data will be posted (must be created already)\n      filesContainerUri: null, // Container where the media will be uploaded (see retrieveMedia below)\n      predicatesToKeep: [] // Don't remove these predicates when updating data\n    },\n    activitypub: {\n      actorUri: null, // ActivityPub actor who will post activities on synchronization (leave null to disable this)\n      activities: ['Create', 'Update', 'Delete'] // The activities you want to be posted by the actor\n    },\n    cronJob: {\n      time: null, // '0 0 4 * * *' for every night at 4am\n      timeZone: 'Europe/Paris'\n    }\n  },\n  methods: {\n    transform(data) {\n      return {\n        ...data\n      };\n    }\n  }\n};\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("p",null,"For methods available on all importers, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/middleware/importer/#methods"},"here"),"."),(0,i.kt)("h3",{id:"retrievemedia"},(0,i.kt)("inlineCode",{parentName:"h3"},"retrieveMedia")),(0,i.kt)("p",null,"Take the ID of a media, fetch it, upload it to the container defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dest.filesContainerUri")," setting."),(0,i.kt)("p",null,"Return the URL of the newly-created file."))}m.isMDXComponent=!0}}]);