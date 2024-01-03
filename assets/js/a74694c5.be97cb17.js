"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4031],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7727:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=r(3117),n=r(102),i=(r(7294),r(3905)),l=["components"],o={title:"Sync"},s=void 0,c={unversionedId:"middleware/sync/index",id:"middleware/sync/index",title:"Sync",description:"Tools to synchronize data between servers.",source:"@site/docs/middleware/sync/index.md",sourceDirName:"middleware/sync",slug:"/middleware/sync/",permalink:"/semapps/docs/middleware/sync/",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/middleware/sync/index.md",tags:[],version:"current",frontMatter:{title:"Sync"},sidebar:"middleware",previous:{title:"SPARQL endpoint",permalink:"/semapps/docs/middleware/sparql-endpoint"},next:{title:"ObjectsWatcherMiddleware",permalink:"/semapps/docs/middleware/sync/objects-watcher"}},d={},p=[{value:"Middlewares",id:"middlewares",level:2},{value:"Services",id:"services",level:2},{value:"Install",id:"install",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"1. I want to synchronize all public data from another server",id:"1-i-want-to-synchronize-all-public-data-from-another-server",level:3},{value:"2. I want to aggregate the public data of Pods",id:"2-i-want-to-aggregate-the-public-data-of-pods",level:3},{value:"3. I want to synchronize data which have been shared specifically with some users",id:"3-i-want-to-synchronize-data-which-have-been-shared-specifically-with-some-users",level:3}],u={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tools to synchronize data between servers."),(0,i.kt)("h2",{id:"middlewares"},"Middlewares"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/semapps/docs/middleware/sync/objects-watcher"},"ObjectsWatcherMiddleware"))),(0,i.kt)("h2",{id:"services"},"Services"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/semapps/docs/middleware/sync/aggregator"},"AggregatorService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/semapps/docs/middleware/sync/mirror"},"MirrorService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/semapps/docs/middleware/sync/synchronizer"},"SynchronizerService"))),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @semapps/sync\n")),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("h3",{id:"1-i-want-to-synchronize-all-public-data-from-another-server"},"1. I want to synchronize all public data from another server"),(0,i.kt)("p",null,"The other server will need to install the ",(0,i.kt)("a",{parentName:"p",href:"/semapps/docs/middleware/sync/objects-watcher"},"WatcherMiddleware"),", which itself require the ",(0,i.kt)("a",{parentName:"p",href:"/semapps/docs/middleware/activitypub/relay"},"RelayService"),"."),(0,i.kt)("p",null,"Your server should use the ",(0,i.kt)("a",{parentName:"p",href:"/semapps/docs/middleware/sync/mirror"},"MirrorService")," and indicate the URL of the other server in the ",(0,i.kt)("inlineCode",{parentName:"p"},"servers")," settings. This service requires the ",(0,i.kt)("a",{parentName:"p",href:"/semapps/docs/middleware/activitypub/relay"},"RelayService")," as well."),(0,i.kt)("p",null,"At first launch, all the public data of the other server will be downloaded (via the LDP protocol) and inserted into a separate graph named ",(0,i.kt)("inlineCode",{parentName:"p"},"http://semapps.org/mirror"),"."),(0,i.kt)("p",null,"Then the ",(0,i.kt)("inlineCode",{parentName:"p"},"relay")," actor of your server will follow the ",(0,i.kt)("inlineCode",{parentName:"p"},"relay")," actor of the remote server you are mirroring."),(0,i.kt)("p",null,"Everytime some data changes occur on the remote server, your server will receive ActivityPub activities and will update its local mirror of the data accordingly."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"http://semapps.org/mirror")," graph is not directly editable through LDP, but can be fetched with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ldp.resource.get")," action or via the SPARQL endpoint."),(0,i.kt)("h3",{id:"2-i-want-to-aggregate-the-public-data-of-pods"},"2. I want to aggregate the public data of Pods"),(0,i.kt)("p",null,"The Pod provider will need to install the ",(0,i.kt)("a",{parentName:"p",href:"/semapps/docs/middleware/sync/objects-watcher"},"WatcherMiddleware"),"."),(0,i.kt)("p",null,"Your server should use the ",(0,i.kt)("a",{parentName:"p",href:"/semapps/docs/middleware/sync/aggregator"},"AggregatorService"),". This service requires the ",(0,i.kt)("a",{parentName:"p",href:"/semapps/docs/middleware/activitypub/relay"},"RelayService"),"."),(0,i.kt)("p",null,"If Pods want their public data to be aggregated in your server, they should send an ",(0,i.kt)("inlineCode",{parentName:"p"},"Offer > Follow")," activity to its ",(0,i.kt)("inlineCode",{parentName:"p"},"relay")," actor."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"relay")," actor will automatically accept these requests, and will thus send a ",(0,i.kt)("inlineCode",{parentName:"p"},"Follow")," activity to the Pod."),(0,i.kt)("p",null,"Whenever a public data is created, updated or deleted, the ",(0,i.kt)("inlineCode",{parentName:"p"},"relay")," actor will be informed and its local cache will be updated."),(0,i.kt)("p",null,"Remote resources will be attached to a local container which accepts the same type of resources."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"At the moment, there is no mechanism to download the existant public data when a ",(0,i.kt)("inlineCode",{parentName:"p"},"Offer > Follow")," activity is received.")),(0,i.kt)("h3",{id:"3-i-want-to-synchronize-data-which-have-been-shared-specifically-with-some-users"},"3. I want to synchronize data which have been shared specifically with some users"),(0,i.kt)("p",null,"The Pod provider will need to install the ",(0,i.kt)("a",{parentName:"p",href:"/semapps/docs/middleware/sync/objects-watcher"},"WatcherMiddleware"),"."),(0,i.kt)("p",null,"When a user is being given ",(0,i.kt)("inlineCode",{parentName:"p"},"acl:Read")," rights on a resource, an activity of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Announce > Create")," is automatically sent to them."),(0,i.kt)("p",null,"When this shared resource is updated or deleted, an activity of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Announce > Update")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Announce > Delete")," is sent to all users who have ",(0,i.kt)("inlineCode",{parentName:"p"},"acl:Read")," rights."),(0,i.kt)("p",null,"The recipients will synchronize the data received thanks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"SynchronizerService"),"."))}h.isMDXComponent=!0}}]);