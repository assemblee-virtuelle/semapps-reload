"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9099],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8879:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],s={title:"Introduction"},c=void 0,l={unversionedId:"triplestore/index",id:"triplestore/index",title:"Introduction",description:"SemApps currently relies on Apache's Jena Fuseki triplestore. Other",source:"@site/docs/triplestore/index.md",sourceDirName:"triplestore",slug:"/triplestore/",permalink:"/docs/triplestore/",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/triplestore/index.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"triplestore",next:{title:"Migrating datasets",permalink:"/docs/triplestore/migrating-datasets"}},p={},u=[{value:"Dataset creation",id:"dataset-creation",level:2},{value:"Docker image",id:"docker-image",level:2},{value:"Maintenance tasks",id:"maintenance-tasks",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"SemApps currently relies on Apache's ",(0,i.kt)("a",{parentName:"p",href:"https://jena.apache.org/documentation/fuseki2/"},"Jena Fuseki")," triplestore. Other\ntriplestore could be supported in the future, but it would require to adapt the ",(0,i.kt)("a",{parentName:"p",href:"/docs/middleware/triplestore/"},"TripleStoreService"),"."),(0,i.kt)("p",null,"To be able to offer public SPARQL endpoint which take into account WebACL permissions, we have developed a class which\nchecks the rights of each triples before returning them. The WebACL triples themselves should be stored on a graph named\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://semapps.org/webacl"),". You can have more information about this class by reading ",(0,i.kt)("a",{parentName:"p",href:"webacl-implementation"},"this page"),"."),(0,i.kt)("p",null,"If you have activated the ",(0,i.kt)("a",{parentName:"p",href:"../middleware/sync/mirror"},"MirrorService"),", mirrored data are also stored on their own graph,\nnamed ",(0,i.kt)("inlineCode",{parentName:"p"},"http://semapps.org/mirror"),". This allows to easily differentiate local data from cached data, and thus improve\nperformances of SPARQL queries."),(0,i.kt)("h2",{id:"dataset-creation"},"Dataset creation"),(0,i.kt)("p",null,"Jena Fuseki does not persist graphs by default, so it requires additional configuration for each dataset. To create a\nnew dataset with the right configuration, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"triplestore.dataset.create")," action, eventually with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"secure: true")," parameter if you wish to activate WebACL. "),(0,i.kt)("p",null,"Note that this will work only if you use the Docker image below."),(0,i.kt)("h2",{id:"docker-image"},"Docker image"),(0,i.kt)("p",null,"We have created a ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/semapps/jena-fuseki-webacl"},"semapps/jena-fuseki-webacl"),"\nimage which includes the class to check permissions. You should use it if you use WebACL permissions or the mirror\nservice."),(0,i.kt)("p",null,"Here is an example of a docker-compose.yml configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.5\'\nservices:\n  fuseki:\n    image: semapps/jena-fuseki-webacl\n    container_name: fuseki\n    volumes:\n      - ./data/fuseki:/fuseki\n    ports:\n      - "3030:3030"\n    expose:\n      - "3030"\n    environment:\n      ADMIN_PASSWORD: "change-me"\n')),(0,i.kt)("h2",{id:"maintenance-tasks"},"Maintenance tasks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"migrating-datasets"},"Migrating datasets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"compacting-datasets"},"Compacting datasets"))))}d.isMDXComponent=!0}}]);