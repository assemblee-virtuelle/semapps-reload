"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6001],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=o(a),N=r,s=k["".concat(p,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1603:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return u}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],d={title:"LdpResourceService"},p=void 0,o={unversionedId:"middleware/ldp/resource",id:"middleware/ldp/resource",title:"LdpResourceService",description:"This service is automatically created by the LdpService",source:"@site/docs/middleware/ldp/resource.md",sourceDirName:"middleware/ldp",slug:"/middleware/ldp/resource",permalink:"/semapps/docs/middleware/ldp/resource",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/middleware/ldp/resource.md",tags:[],version:"current",frontMatter:{title:"LdpResourceService"},sidebar:"middleware",previous:{title:"LDP",permalink:"/semapps/docs/middleware/ldp/"},next:{title:"LdpContainerService",permalink:"/semapps/docs/middleware/ldp/container"}},m={},u=[{value:"Actions",id:"actions",level:2},{value:"<code>create</code>",id:"create",level:3},{value:"Parameters",id:"parameters",level:5},{value:"Return values",id:"return-values",level:5},{value:"<code>delete</code>",id:"delete",level:3},{value:"Parameters",id:"parameters-1",level:5},{value:"Return values",id:"return-values-1",level:5},{value:"<code>exist</code>",id:"exist",level:3},{value:"Parameters",id:"parameters-2",level:5},{value:"Return values",id:"return-values-2",level:5},{value:"<code>generateId</code>",id:"generateid",level:3},{value:"Parameters",id:"parameters-3",level:5},{value:"Return values",id:"return-values-3",level:5},{value:"<code>get</code>",id:"get",level:3},{value:"Parameters",id:"parameters-4",level:5},{value:"Return",id:"return",level:5},{value:"<code>patch</code>",id:"patch",level:3},{value:"Example query",id:"example-query",level:5},{value:"Parameters",id:"parameters-5",level:5},{value:"Return values",id:"return-values-4",level:5},{value:"<code>put</code>",id:"put",level:3},{value:"Parameters",id:"parameters-6",level:5},{value:"Return values",id:"return-values-5",level:5},{value:"Events",id:"events",level:2},{value:"<code>ldp.resource.created</code>",id:"ldpresourcecreated",level:3},{value:"Payload",id:"payload",level:5},{value:"<code>ldp.resource.deleted</code>",id:"ldpresourcedeleted",level:3},{value:"Payload",id:"payload-1",level:5},{value:"<code>ldp.resource.patched</code>",id:"ldpresourcepatched",level:3},{value:"Payload",id:"payload-2",level:5},{value:"<code>ldp.resource.updated</code>",id:"ldpresourceupdated",level:3},{value:"Payload",id:"payload-3",level:5}],k={toc:u};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This service is automatically created by the ",(0,l.kt)("a",{parentName:"p",href:"index"},"LdpService")),(0,l.kt)("h2",{id:"actions"},"Actions"),(0,l.kt)("p",null,"The following service actions are available:"),(0,l.kt)("h3",{id:"create"},(0,l.kt)("inlineCode",{parentName:"h3"},"create")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This action is called internally by ",(0,l.kt)("inlineCode",{parentName:"li"},"ldp.container.post")),(0,l.kt)("li",{parentName:"ul"},"If called directly, the full URI must be provided in the ",(0,l.kt)("inlineCode",{parentName:"li"},"@id")," of the ",(0,l.kt)("inlineCode",{parentName:"li"},"resource")," object")),(0,l.kt)("h5",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resource")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"Resource to create (with an ID)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"contentType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of provided resource (",(0,l.kt)("inlineCode",{parentName:"td"},"application/ld+json"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"text/turtle")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"application/n-triples"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Logged user's webId"),(0,l.kt)("td",{parentName:"tr",align:null},"User doing the action")))),(0,l.kt)("h5",{id:"return-values"},"Return values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the created resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"newData")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"New value of the resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"User who did the action")))),(0,l.kt)("h3",{id:"delete"},(0,l.kt)("inlineCode",{parentName:"h3"},"delete")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Delete the whole resource and detach it from its container")),(0,l.kt)("h5",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of resource to delete")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Logged user's webId"),(0,l.kt)("td",{parentName:"tr",align:null},"User doing the action")))),(0,l.kt)("h5",{id:"return-values-1"},"Return values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the deleted resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oldData")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Old value of the resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"User who did the action")))),(0,l.kt)("h3",{id:"exist"},(0,l.kt)("inlineCode",{parentName:"h3"},"exist")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check if a resource exist")),(0,l.kt)("h5",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the resource to check")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Logged user's webId"),(0,l.kt)("td",{parentName:"tr",align:null},"User doing the action")))),(0,l.kt)("h5",{id:"return-values-2"},"Return values"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Boolean")),(0,l.kt)("h3",{id:"generateid"},(0,l.kt)("inlineCode",{parentName:"h3"},"generateId")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Finds an unique ID for a resource")),(0,l.kt)("h5",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the container where to create the resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"slug")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'Preferred slug (will be "slugified")')))),(0,l.kt)("h5",{id:"return-values-3"},"Return values"),(0,l.kt)("p",null,"Full URI available"),(0,l.kt)("h3",{id:"get"},(0,l.kt)("inlineCode",{parentName:"h3"},"get")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get a resource by its URI\n-Accept triples, turtle or JSON-LD (see ",(0,l.kt)("inlineCode",{parentName:"li"},"@semapps/mime-types")," package)")),(0,l.kt)("h5",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"accept")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"Type to return (",(0,l.kt)("inlineCode",{parentName:"td"},"application/ld+json"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"text/turtle")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"application/n-triples"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Logged user's webId"),(0,l.kt)("td",{parentName:"tr",align:null},"User doing the action")))),(0,l.kt)("p",null,"You can also pass any parameter defined in the ",(0,l.kt)("a",{parentName:"p",href:"/semapps/docs/middleware/ldp/#container-options"},"container options"),"."),(0,l.kt)("h5",{id:"return"},"Return"),(0,l.kt)("p",null,"Triples, Turtle or JSON-LD depending on ",(0,l.kt)("inlineCode",{parentName:"p"},"accept")," type."),(0,l.kt)("h3",{id:"patch"},(0,l.kt)("inlineCode",{parentName:"h3"},"patch")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Partial update of an existing resource. Allow to add and/or remove tripled."),(0,l.kt)("li",{parentName:"ul"},"Accept either a SPARQL Update (with INSERT DATA and/or DELETE DATA) or an array of triples conforming with the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rdfjs-base/data-model"},"RDF.js data model")),(0,l.kt)("li",{parentName:"ul"},"You can add blank nodes but not remove them (this is a limitation of the SPARQL specifications for DELETE DATA)"),(0,l.kt)("li",{parentName:"ul"},"If you try to modify triples not linked to the PATCH resource, it will throw an error.")),(0,l.kt)("h5",{id:"example-query"},"Example query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sparql"},'PREFIX as: <https://www.w3.org/ns/activitystreams#>\nINSERT DATA {\n  <http://localhost:3000/actor/virtual-assembly> as:name "Virtual Assembly" .\n  <http://localhost:3000/actor/virtual-assembly> as:location [\n     a as:Place ;\n     pair:label "Paris"\n  ] .\n};\nDELETE DATA {\n  <http://localhost:3000/actor/virtual-assembly> as:name "VirtualAssembly" .\n};\n')),(0,l.kt)("h5",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of resource to update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sparqlUpdate")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"SPARQL query with INSERT DATA and/or DELETE DATA operations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"triplesToAdd")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of triples conforming with the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/rdfjs-base/data-model"},"RDF.js data model"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"triplesToRemove")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of triples conforming with the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/rdfjs-base/data-model"},"RDF.js data model"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Logged user's webId"),(0,l.kt)("td",{parentName:"tr",align:null},"User doing the action")))),(0,l.kt)("h5",{id:"return-values-4"},"Return values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the updated resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"triplesToAdd")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of triples conforming with the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/rdfjs-base/data-model"},"RDF.js data model"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"triplesToRemove")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of triples conforming with the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/rdfjs-base/data-model"},"RDF.js data model"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"User who did the action")))),(0,l.kt)("h3",{id:"put"},(0,l.kt)("inlineCode",{parentName:"h3"},"put")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Full update of an existing resource"),(0,l.kt)("li",{parentName:"ul"},"If some predicates existed but are not provided, they will be deleted."),(0,l.kt)("li",{parentName:"ul"},"Content-type can be triples, turtle or JSON-LD (see ",(0,l.kt)("inlineCode",{parentName:"li"},"@semapps/mime-types")," package)")),(0,l.kt)("h5",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resource")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"Resource to update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"contentType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of resource (",(0,l.kt)("inlineCode",{parentName:"td"},"application/ld+json"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"text/turtle")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"application/n-triples"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Logged user's webId"),(0,l.kt)("td",{parentName:"tr",align:null},"User doing the action")))),(0,l.kt)("h5",{id:"return-values-5"},"Return values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the updated resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"newData")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"New value of the resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oldData")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Old value of the resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"User who did the action")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"The following events are emitted."),(0,l.kt)("h3",{id:"ldpresourcecreated"},(0,l.kt)("inlineCode",{parentName:"h3"},"ldp.resource.created")),(0,l.kt)("p",null,"Sent after a resource is created."),(0,l.kt)("h5",{id:"payload"},"Payload"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the created resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"newData")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"New value of the resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"User who did the action")))),(0,l.kt)("h3",{id:"ldpresourcedeleted"},(0,l.kt)("inlineCode",{parentName:"h3"},"ldp.resource.deleted")),(0,l.kt)("p",null,"Sent after a resource is deleted."),(0,l.kt)("h5",{id:"payload-1"},"Payload"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the deleted resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oldData")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Old value of the resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"User who did the action")))),(0,l.kt)("h3",{id:"ldpresourcepatched"},(0,l.kt)("inlineCode",{parentName:"h3"},"ldp.resource.patched")),(0,l.kt)("p",null,"Sent after a resource is patched"),(0,l.kt)("h5",{id:"payload-2"},"Payload"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the updated resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"triplesAdded")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of triples conforming with the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/rdfjs-base/data-model"},"RDF.js data model"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"triplesRemoved")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of triples conforming with the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/rdfjs-base/data-model"},"RDF.js data model"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"User who did the action")))),(0,l.kt)("h3",{id:"ldpresourceupdated"},(0,l.kt)("inlineCode",{parentName:"h3"},"ldp.resource.updated")),(0,l.kt)("p",null,"Sent after a resource is updated (through PUT)"),(0,l.kt)("h5",{id:"payload-3"},"Payload"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resourceUri")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the updated resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"newData")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"New value of the resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"oldData")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Old value of the resource")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"User who did the action")))))}N.isMDXComponent=!0}}]);