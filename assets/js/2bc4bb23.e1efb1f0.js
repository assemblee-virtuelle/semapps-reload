"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4973],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],d={title:"Data Model"},o=void 0,p={unversionedId:"frontend/semantic-data-provider/data-model",id:"frontend/semantic-data-provider/data-model",title:"Data Model",description:"The dataModel config passed to the semantic data provider describes how we want the data to be displayed in React-Admin.",source:"@site/docs/frontend/semantic-data-provider/data-model.md",sourceDirName:"frontend/semantic-data-provider",slug:"/frontend/semantic-data-provider/data-model",permalink:"/docs/frontend/semantic-data-provider/data-model",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/frontend/semantic-data-provider/data-model.md",tags:[],version:"current",frontMatter:{title:"Data Model"},sidebar:"frontend",previous:{title:"Data Servers",permalink:"/docs/frontend/semantic-data-provider/data-servers"},next:{title:"Auth Provider",permalink:"/docs/frontend/auth-provider"}},s={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Servers special keys",id:"servers-special-keys",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"dataModel")," config passed to the semantic data provider describes how we want the data to be displayed in React-Admin."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"In the config below ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," is the name of the React-Admin ",(0,l.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/doc/3.19/Resource.html"},"resource"),".\nAll the configs are solely for this given resource."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const dataModel = {\n  User: {\n    types: 'foaf:Person',\n    list: {\n      servers: '@all',\n      containers: {}, // Si sp\xe9cifi\xe9, bypass la valeur servers. On passe quand m\xeame par SPARQL pour faire la requ\xeate.\n      blankNodes: [],\n      blankNodesDepth: 2.\n      forceArray: [],\n      predicates: [],\n      filter: {},\n      fetchContainer: false,\n      explicitEmbedOnFraming: true,\n    },\n    create: {\n      server: '@default',\n      container: null,\n    },\n    fieldsMapping: {\n      title: 'foaf:name'\n    }\n  },\n  Document: { ... }\n};\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"types")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")," or `String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"Type(s) of resources to fetch or create")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list.servers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},'"@all"'),(0,l.kt)("td",{parentName:"tr",align:null},"The servers where to fetch the resource.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list.containers")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"URL(s) of the container(s) to fetch. If specified, will bypass the ",(0,l.kt)("inlineCode",{parentName:"td"},"list.servers")," config.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list.blankNodes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Predicates listed are blank nodes and will be dereferenced in SPARQL queries. Automatically set if VoID endpoints are found.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list.blankNodesDepth")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"If no blank nodes are indicated above, the SPARQL query will automatically search for blank nodes 2-level deep. Setting this parameter to ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"td"},"blankNodes: []")," (no blank nodes will be returned)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list.forceArray")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Predicates listed will be turned to arrays if they are simple strings. Used by for reified relationship. To be deprecated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list.predicates")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Will only fetch the given predicates (and the ",(0,l.kt)("inlineCode",{parentName:"td"},"@type"),"). ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/assemblee-virtuelle/semapps/pull/1026"},"Benchmark"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list.filter")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"React-Admin permanent filter applied to all requests. ",(0,l.kt)("a",{parentName:"td",href:"https://marmelab.com/react-admin/doc/3.19/List.html#filter-permanent-filter"},"Docs"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list.fetchContainer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, the data provider will fetch the LDP containers instead of doing a SPARQL request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"list.explicitEmbedOnFraming")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"If false, improve performances by not including the ",(0,l.kt)("inlineCode",{parentName:"td"},"@embed")," rule in post-request JSON-LD framing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"create.server")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},'"@default"'),(0,l.kt)("td",{parentName:"tr",align:null},"The server where to create new resources.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"create.container")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"URL of the container where to create new resources. If specified, will bypass the ",(0,l.kt)("inlineCode",{parentName:"td"},"create.server")," config.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fieldsMapping.title")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The predicate of the title. Required by several components.")))),(0,l.kt)("h2",{id:"servers-special-keys"},"Servers special keys"),(0,l.kt)("p",null,"For the ",(0,l.kt)("inlineCode",{parentName:"p"},"list.servers")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"create.server")," config, you can use either the server key (the main key defined in the dataServers config) or the following special keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@default"),": The server with the config ",(0,l.kt)("inlineCode",{parentName:"li"},"default: true")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@auth"),": The server with the config ",(0,l.kt)("inlineCode",{parentName:"li"},"authServer: true")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@pod"),": The server with the config ",(0,l.kt)("inlineCode",{parentName:"li"},"pod: true"))),(0,l.kt)("p",null,"For the ",(0,l.kt)("inlineCode",{parentName:"p"},"list.servers")," config, you can use these additional special keys:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@all"),": All the servers defined"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@remote"),": All servers which are not the default server")))}c.isMDXComponent=!0}}]);