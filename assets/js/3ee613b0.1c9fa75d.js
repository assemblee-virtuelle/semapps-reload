"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2144],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3661:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),o=["components"],i={title:"Semantic Data Provider"},s=void 0,d={unversionedId:"frontend/semantic-data-provider/index",id:"frontend/semantic-data-provider/index",title:"Semantic Data Provider",description:"Installation",source:"@site/docs/frontend/semantic-data-provider/index.md",sourceDirName:"frontend/semantic-data-provider",slug:"/frontend/semantic-data-provider/",permalink:"/semapps/docs/frontend/semantic-data-provider/",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/frontend/semantic-data-provider/index.md",tags:[],version:"current",frontMatter:{title:"Semantic Data Provider"},sidebar:"frontend",previous:{title:"Introduction",permalink:"/semapps/docs/frontend/"},next:{title:"Data Servers",permalink:"/semapps/docs/frontend/semantic-data-provider/data-servers"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Settings",id:"settings",level:2},{value:"<code>httpClient</code>",id:"httpclient",level:3},{value:"<code>dataServers</code>",id:"dataservers",level:3},{value:"<code>resources</code>",id:"resources",level:3},{value:"<code>ontologies</code>",id:"ontologies",level:3},{value:"<code>jsonContext</code>",id:"jsoncontext",level:3},{value:"<code>returnFailedResources</code>",id:"returnfailedresources",level:3},{value:"Filters",id:"filters",level:2},{value:"<code>_predicates</code>",id:"_predicates",level:3},{value:"<code>_servers</code>",id:"_servers",level:3},{value:"<code>blankNodes</code>",id:"blanknodes",level:3},{value:"<code>q</code>",id:"q",level:3},{value:"<code>sparqlWhere</code>",id:"sparqlwhere",level:3},{value:"Hooks",id:"hooks",level:2},{value:"useContainers",id:"usecontainers",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return value",id:"return-value",level:4},{value:"useCreateContainer",id:"usecreatecontainer",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Return value",id:"return-value-1",level:4},{value:"useDataModel",id:"usedatamodel",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Return value",id:"return-value-2",level:4},{value:"useDataModels",id:"usedatamodels",level:3},{value:"useDataServers",id:"usedataservers",level:3}],c={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @semapps/semantic-data-provider\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Admin } from 'react-admin';\nimport { dataProvider, httpClient } from '@semapps/semantic-data-provider';\n\nconst App = () => (\n  <Admin\n    dataProvider={dataProvider({\n      httpClient,\n      dataServers: { ... },\n      resources: { ... },\n      ontologies: { ... },\n      jsonContext: 'http://localhost:3000/context.json',\n      returnFailedResources: false\n    })}\n  >\n    <Resource name=\"Project\" ... />\n    <Resource name=\"Organization\" ... />\n  </Admin>\n);\n")),(0,l.kt)("p",null,"The semantic data provider rely on two important configuration:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"/semapps/docs/frontend/semantic-data-provider/data-servers"},"Data Servers"),", which describes the servers to which we want to connect and what they contain."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"/semapps/docs/frontend/semantic-data-provider/data-model"},"Data Model"),", which describes how we want the data to be displayed in React-Admin.")),(0,l.kt)("h2",{id:"settings"},"Settings"),(0,l.kt)("h3",{id:"httpclient"},(0,l.kt)("inlineCode",{parentName:"h3"},"httpClient")),(0,l.kt)("p",null,"HTTP client used to fetch data. Same type as the ",(0,l.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/doc/3.19/DataProviders.html#adding-custom-headers"},"fetchJson utility")," of React-Admin."),(0,l.kt)("p",null,"We recommend to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"httpClient")," exported from the ",(0,l.kt)("inlineCode",{parentName:"p"},"@semapps/semantic-data-provider")," package."),(0,l.kt)("h3",{id:"dataservers"},(0,l.kt)("inlineCode",{parentName:"h3"},"dataServers")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"data-servers"},"Data servers")," page."),(0,l.kt)("h3",{id:"resources"},(0,l.kt)("inlineCode",{parentName:"h3"},"resources")),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"data-model"},"Data model")," page."),(0,l.kt)("h3",{id:"ontologies"},(0,l.kt)("inlineCode",{parentName:"h3"},"ontologies")),(0,l.kt)("p",null,"List of ontologies used to format or select SPARQL data. Format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const ontologies = [\n  {\n    prefix: 'rdf',\n    url: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'\n  },\n  {\n    prefix: 'ldp',\n    url: 'http://www.w3.org/ns/ldp#',\n  }\n];\n")),(0,l.kt)("h3",{id:"jsoncontext"},(0,l.kt)("inlineCode",{parentName:"h3"},"jsonContext")),(0,l.kt)("p",null,"All SPARQL results returned will be framed with this context."),(0,l.kt)("p",null,"If it is not set, the ontologies set above will be used."),(0,l.kt)("h3",{id:"returnfailedresources"},(0,l.kt)("inlineCode",{parentName:"h3"},"returnFailedResources")),(0,l.kt)("p",null,"If true, the ",(0,l.kt)("inlineCode",{parentName:"p"},"getMany")," method will not fail completely if one resource is missing. "),(0,l.kt)("p",null,"Missing resources will be returned with their ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"_error: true"),"."),(0,l.kt)("h2",{id:"filters"},"Filters"),(0,l.kt)("p",null,"When using React-Admin ",(0,l.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/doc/3.19/List.html#filter-permanent-filter"},"filters"),", in the ",(0,l.kt)("inlineCode",{parentName:"p"},"List")," components or the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReferenceArrayInput"),", there are special keywords that you can use:"),(0,l.kt)("h3",{id:"_predicates"},(0,l.kt)("inlineCode",{parentName:"h3"},"_predicates")),(0,l.kt)("p",null,"Return only the given predicates instead of the full resource."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"{ _predicates: ['foaf:name']}")," will return only the name of a list of users."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: The ",(0,l.kt)("inlineCode",{parentName:"p"},"@type")," is always returned because it is needed by React-Admin.")),(0,l.kt)("h3",{id:"_servers"},(0,l.kt)("inlineCode",{parentName:"h3"},"_servers")),(0,l.kt)("p",null,"Select the ",(0,l.kt)("a",{parentName:"p",href:"/semapps/docs/frontend/semantic-data-provider/data-servers"},"data servers")," that you want to query, bypassing the config in the ",(0,l.kt)("a",{parentName:"p",href:"/semapps/docs/frontend/semantic-data-provider/data-model"},"data model"),"."),(0,l.kt)("p",null,"You can use the server keys or ",(0,l.kt)("a",{parentName:"p",href:"/semapps/docs/frontend/semantic-data-provider/data-model#servers-special-keys"},"special keywords"),"."),(0,l.kt)("h3",{id:"blanknodes"},(0,l.kt)("inlineCode",{parentName:"h3"},"blankNodes")),(0,l.kt)("p",null,"Choose the blank nodes you want to dereference, bypassing the config in the ",(0,l.kt)("a",{parentName:"p",href:"/semapps/docs/frontend/semantic-data-provider/data-model"},"data model")," or the VOID endpoint."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"{ blankNodes: [] }")," will not dereference any blank nodes for the given resources."),(0,l.kt)("p",null,"This is useful if you don't need the values of the blank nodes and want to increase performances."),(0,l.kt)("h3",{id:"q"},(0,l.kt)("inlineCode",{parentName:"h3"},"q")),(0,l.kt)("p",null,"Do a full-text search on the resources."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},'{ q: "sem" }'),' will return all resources with the characters "sem" in string-types values.'),(0,l.kt)("h3",{id:"sparqlwhere"},(0,l.kt)("inlineCode",{parentName:"h3"},"sparqlWhere")),(0,l.kt)("p",null,"Allow to make advanced search by providing a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/RubenVerborgh/SPARQL.js"},"SPARQL.js"),"-formatted array that will be appended to the ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," query."),(0,l.kt)("p",null,"Here's an example to fetch ActivityStreams events after a given date:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  sparqlWhere: [\n    {\n      type: "bgp",\n      triples: [\n        {\n          "subject": { termType: "Variable", value: "s1" },\n          "predicate": { termType: "NameNode", value: "https://www.w3.org/ns/activitystreams#startTime" },\n          "object": { termType: "Variable", value: "startTime" }\n        }\n      ]\n    },\n    {\n      type: "filter",\n      expression:{\n        type: "operation",\n        operator: ">",\n        args: [\n          {\n            termType: "Variable",\n            value: "startTime"\n          },\n          {\n            termType: "Literal",\n            datatype: {\n              termType: "NamedNode",\n              value:"http://www.w3.org/2001/XMLSchema#dateTime"\n            },\n            value: "2022-11-17T10:20:13+05:30"\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: In the above example, the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"s1")," is the URI of a LDP resource.")),(0,l.kt)("h2",{id:"hooks"},"Hooks"),(0,l.kt)("h3",{id:"usecontainers"},"useContainers"),(0,l.kt)("p",null,"Returns a list of containers linked with a given resource."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const containers = useContainers(resourceId, serverKeys);\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"React-Admin resource ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serverKeys")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},'"@all"'),(0,l.kt)("td",{parentName:"tr",align:null},"The servers where the containers are")))),(0,l.kt)("h4",{id:"return-value"},"Return value"),(0,l.kt)("p",null,"Array of containers URIs."),(0,l.kt)("h3",{id:"usecreatecontainer"},"useCreateContainer"),(0,l.kt)("p",null,"Get the URI of the container where to create a new resource."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const createContainerUri = useCreateContainer(resourceId);\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"React-Admin resource ID")))),(0,l.kt)("h4",{id:"return-value-1"},"Return value"),(0,l.kt)("p",null,"URI of the container where to create a new resource."),(0,l.kt)("h3",{id:"usedatamodel"},"useDataModel"),(0,l.kt)("p",null,"Get the ",(0,l.kt)("a",{parentName:"p",href:"data-model"},"data model")," config of the given resource, including data fetched through VoID endpoints."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const dataModel = useDataModel(resourceId);\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"React-Admin resource ID")))),(0,l.kt)("h4",{id:"return-value-2"},"Return value"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"data-model"},"data model")," config of the given resource."),(0,l.kt)("h3",{id:"usedatamodels"},"useDataModels"),(0,l.kt)("p",null,"Get the ",(0,l.kt)("a",{parentName:"p",href:"data-model"},"data model")," config of all the resources, including data fetched through VoID endpoints."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const dataModel = useDataModels();\n")),(0,l.kt)("h3",{id:"usedataservers"},"useDataServers"),(0,l.kt)("p",null,"Get the ",(0,l.kt)("a",{parentName:"p",href:"data-servers"},"data servers")," config, including data fetched through VoID endpoints."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const dataServers = useDataServers();\n")))}m.isMDXComponent=!0}}]);