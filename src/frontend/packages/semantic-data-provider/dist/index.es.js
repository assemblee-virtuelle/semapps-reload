import e,{useState as r,useEffect as t}from"react";import{ImageField as n,ReferenceArrayField as a,ReferenceField as o,useQueryWithStore as i,DateTimeInput as c,useResourceContext as u,ReferenceArrayInput as s,ReferenceInput as l,ArrayInput as f,SimpleFormIterator as p,TextInput as d,fetchUtils as y}from"react-admin";import{makeStyles as m}from"@material-ui/core/styles";import h from"jsonld";function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,r,t,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,a)}function g(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){v(o,n,a,i,c,"next",e)}function c(e){v(o,n,a,i,c,"throw",e)}i(void 0)}))}}function x(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function j(){return(j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){x(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function E(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function A(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||k(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,r){if(e){if("string"==typeof e)return R(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?R(e,r):void 0}}function R(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function S(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=k(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}var P=function(r){var t=r.record,a=r.source,o=E(r,["record","source"]);return"string"==typeof t&&(t=x({},a,t)),e.createElement(n,j({record:t,source:a},o))},T=function(r){var t=r.record,n=r.source,o=E(r,["record","source"]);return(null==t?void 0:t[n])&&(Array.isArray(t[n])||(t[n]=[t[n]]),t[n]=t[n].map((function(e){return e["@id"]||e.id||e}))),e.createElement(a,j({record:t,source:n},o))};T.defaultProps={addLabel:!0};var I=function(r){var t=r.record,n=r.source,a=E(r,["record","source"]);return t[n]&&"object"===b(t[n])&&(t[n]=t[n]["@id"]||t[n].id),e.createElement(o,j({record:t,source:n},a))};I.defaultProps={addLabel:!0};var C=function(n){var a=n.children,o=n.record,i=n.filter,c=n.source,u=E(n,["children","record","filter","source"]),s=A(r(),2),l=s[0],f=s[1];return t((function(){if(o&&c&&Array.isArray(null==o?void 0:o[c])){var e=null==o?void 0:o[c].filter((function(e){var r=!0;for(var t in i){var n=e[t];Array.isArray(n)?n.includes(i[t])||(r=!1):n!==i[t]&&(r=!1)}return r})),r=O({},o);r[c]=e.length>0?e:void 0,f(r)}}),[o,c,i]),e.createElement(e.Fragment,null,e.Children.map(a,(function(r,t){return e.cloneElement(r,O(O({},u),{},{record:l,addLabel:!0,source:c}))})))},F=function(r){var t=r.children,n=r.groupReference,a=r.groupLabel,o=r.groupHeader,c=r.filterProperty,u=E(r,["children","groupReference","groupLabel","groupHeader","filterProperty"]),s=i({type:"getList",resource:n,payload:{}}).data;return e.createElement(e.Fragment,null,null==s?void 0:s.map((function(r,n){var i={};return i[c]=r.id,e.createElement(e.Fragment,null,o&&o(O(O({},u),{},{group:r})),e.createElement(C,j({},u,{filter:i,label:r[a]}),t))})))},L=function(r){return e.createElement(c,j({},r,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},U=function(r){var t=u({});return e.createElement(s,j({},r,{resource:t,format:function(e){return e?(Array.isArray(e)||(e=[e]),r.format&&(e=r.format(e)),e.map((function(e){return"object"===b(e)?e.id||e["@id"]:e}))):e}}))},N=function(r){var t=u({});return e.createElement(l,j({},r,{resource:t,format:function(e){return e?(r.format&&(e=r.format(e)),"object"===b(e)?e.id||e["@id"]:e):e}}))},q=m({form:{display:"flex"},input:{paddingRight:"20px"}}),H=m({root:{display:"none"}}),M=function(r){var t=r.reificationClass,n=(r.children,E(r,["reificationClass","children"])),a=q(),o=H();return e.createElement(f,n,e.createElement(p,{classes:{form:a.form}},e.Children.map(r.children,(function(r,t){return e.cloneElement(r,{className:a.input})})),e.createElement(d,{className:o.root,source:"type",initialValue:t})))},D=function(e){return e.split(":").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")},J=function(e){var r,t={};if(e){var n,a=S(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r=o.includes("/")?o.split("/").reverse():[o],t=O(O({},t),r.reduce((function(e,r){return x({},r,O({"@embed":"@last"},e))}),{}))}}catch(e){a.e(e)}finally{a.f()}return t}},W=function(e){var r=e.types,t=e.params.filter,n=e.dereference,a=e.ontologies,o="";t&&(t.q&&t.q.length>0&&(o+='\n      {\n        SELECT ?s1\n        WHERE {\n          ?s1 ?p1 ?o1 .\n          FILTER regex(lcase(str(?o1)), "'.concat(t.q.toLowerCase(),'")\n          FILTER NOT EXISTS {?s1 a ?o1}\n        }\n      }\n      '),delete t.q),Object.keys(t).forEach((function(e){if(t[e]){var r=t[e].startsWith("http")?"<".concat(t[e],">"):t[e];o+="?s1 ".concat(e," ").concat(r," .")}})));var i=function(e){var r=[];if(e)for(var t=e.reduce((function(e,r){return function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"root";if(t.includes("/")){var a=t.split(/\/(.+)/);r[a[0]]=n,e(r,a[1],a[0])}else r[t]=n;return r}(e,r)}),{}),n=0,a=Object.entries(t);n<a.length;n++){var o=A(a[n],2),i=o[0],c=o[1],u=D(i),s="root"===c?"1":D(c),l="root"===c?i:c;r[l]||(r[l]=[]),r[l].push("\n        ?s".concat(s," ").concat(i," ?s").concat(u," .\n        ?s").concat(u," ?p").concat(u," ?o").concat(u," .\n      "))}return{construct:Object.values(r).map((function(e){return Object.values(e).join("\n")})).join("\n"),where:Object.values(r).map((function(e){return"OPTIONAL { ".concat(Object.values(e).join("\n")," }")})).join("\n")}}(n);return"\n    ".concat(function(e){return e.map((function(e){return"PREFIX ".concat(e.prefix,": <").concat(e.url,">")})).join("\n")}(a),"\n    CONSTRUCT {\n      ?s1 ?p2 ?o2 .\n      ").concat(i.construct,"\n    }\n    WHERE {\n      ?s1 a ?type .\n      FILTER( ?type IN (").concat(r.join(", "),") ) .\n      FILTER( (isIRI(?s1)) ) .\n      ").concat(o,"\n      ").concat(i.where,"\n      ?s1 ?p2 ?o2 .\n    }\n  ")},G=require("speakingurl"),X=function(e){var r={};return e.forEach((function(e){return r[e.prefix]=e.url})),r},z=function(e){return e&&e.rawFile&&e.rawFile instanceof File},B=function(e){var r,t,n,a,o,i,c=e.sparqlEndpoint,u=e.httpClient,s=e.resources,l=e.ontologies,f=e.jsonContext,p=e.uploadsContainerUri,d=e.returnFailedResources,y=void 0!==d&&d,m=function(){var e=g(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=2;break}throw new Error("No uploadsContainerUri defined for the data provider");case 2:return e.next=4,u(p,{method:"POST",body:r,headers:new Headers({Slug:(n=r.name,a=void 0,o=void 0,a="",o=n.split("."),o.length>1&&(a=o.pop(),n=o.join(".")),G(n,{lang:"fr"})+"."+a),"Content-Type":r.type})});case 4:if(201!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",t.headers.get("Location"));case 7:case"end":return e.stop()}var n,a,o}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=g(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(t=e.t1.value,!r.hasOwnProperty(t)){e.next=20;break}if(!Array.isArray(r[t])){e.next=16;break}n=0;case 6:if(!(n<r[t].length)){e.next=14;break}if(!z(r[t][n])){e.next=11;break}return e.next=10,m(r[t][n].rawFile);case 10:r[t][n]=e.sent;case 11:n++,e.next=6;break;case 14:e.next=20;break;case 16:if(!z(r[t])){e.next=20;break}return e.next=19,m(r[t].rawFile);case 19:r[t]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return{getList:(i=g(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,p,d,y,m,b,v,g,x,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s[r],!t.id&&!t["@id"]&&s[r].types){e.next=26;break}return n=t.id||t["@id"]||s[r].containerUri,e.next=5,u(n);case 5:if(a=e.sent,o=a.json,w="ldp:Container",k=void 0,k=(E=o).type||E["@type"],!(Array.isArray(k)?k.includes(w):k===w)){e.next=14;break}return i=o["ldp:contains"].map((function(e){return e.id=e.id||e["@id"],e})),t.filter&&(t.filter.q&&delete t.filter.q,Object.keys(t.filter).length>0&&(i=i.filter((function(e){return Object.entries(t.filter).some((function(r){var t=A(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),t.pagination&&(i=i.slice((t.pagination.page-1)*t.pagination.perPage,t.pagination.page*t.pagination.perPage)),e.abrupt("return",{data:i,total:o["ldp:contains"].length});case 14:if(!o.first){e.next=19;break}return e.next=17,u(o.first);case 17:p=e.sent,o=p.json;case 19:if(d=["as:orderedItems","orderedItems","as:items","items"].find((function(e){return o[e]}))){e.next=22;break}return e.abrupt("return",{data:[],total:0});case 22:return y=o[d].map((function(e){return e.id=e.id||e["@id"],e})),e.abrupt("return",{data:y,total:o.totalItems});case 24:e.next=43;break;case 26:return m=W({types:s[r].types,params:O(O({},t),{},{filter:O(O({},s[r].filter),t.filter)}),dereference:s[r].dereference,ontologies:l}),e.next=29,u(c,{method:"POST",body:m});case 29:return b=e.sent,v=b.json,g=O({"@context":f||X(l),"@type":s[r].types,"@embed":"@never"},J(s[r].dereference)),e.next=34,h.frame(v,g,{omitGraph:!1});case 34:if(x=e.sent,1!==Object.keys(x).length){e.next=39;break}return e.abrupt("return",{data:[],total:0});case 39:return j=x["@graph"].map((function(e){return e.id=e.id||e["@id"],e})),t.sort&&(j=j.sort((function(e,r){return!(t.sort&&e[t.sort.field]&&r[t.sort.field])||("ASC"===t.sort.order?e[t.sort.field].localeCompare(r[t.sort.field]):r[t.sort.field].localeCompare(e[t.sort.field]))}))),t.pagination&&(j=j.slice((t.pagination.page-1)*t.pagination.perPage,t.pagination.page*t.pagination.perPage)),e.abrupt("return",{data:j,total:x["@graph"].length});case 43:case"end":return e.stop()}var w,E,k}),e)}))),function(e,r){return i.apply(this,arguments)}),getOne:(o=g(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s[r],n=s[r],e.next=4,u(t.id);case 4:return a=e.sent,(o=a.json).id=o.id||o["@id"],e.next=9,h.compact(o,f||X(l));case 9:if(i=e.sent,n.forceArray){c=S(n.forceArray);try{for(c.s();!(p=c.n()).done;)d=p.value,i[d]&&!Array.isArray(i[d])&&(i[d]=[i[d]])}catch(e){c.e(e)}finally{c.f()}}return e.abrupt("return",{data:i});case 12:case"end":return e.stop()}}),e)}))),function(e,r){return o.apply(this,arguments)}),getMany:(a=g(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=S(t.ids),e.prev=2,a.s();case 4:if((o=a.n()).done){e.next=21;break}return i="object"===b(i=o.value)?i["@id"]:i,e.prev=7,e.next=10,u(i);case 10:c=e.sent,(s=c.json).id=i,n.push(s),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),y&&n.push({id:i});case 19:e.next=4;break;case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(2),a.e(e.t1);case 26:return e.prev=26,a.f(),e.finish(26);case 29:return e.abrupt("return",{data:n});case 30:case"end":return e.stop()}}),e,null,[[2,23,26,29],[7,16]])}))),function(e,r){return a.apply(this,arguments)}),getManyReference:function(e,r){throw new Error("getManyReference is not implemented yet")},create:(n=g(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,p,d,y,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s[r],n=s[r],a=n.slugField,o=n.containerUri,i=n.types,c=new Headers,a&&c.set("Slug",Array.isArray(a)?a.map((function(e){return t.data[e]})).join(" "):t.data[a]),e.next=6,v(t.data);case 6:return t.data=e.sent,e.next=9,u(o,{method:"POST",headers:c,body:JSON.stringify(O({"@context":f||X(l),"@type":i},t.data))});case 9:return p=e.sent,d=p.headers,y=d.get("Location"),e.next=14,u(y);case 14:return m=e.sent,(h=m.json).id=h.id||h["@id"],e.abrupt("return",{data:h});case 18:case"end":return e.stop()}}),e)}))),function(e,r){return n.apply(this,arguments)}),update:(t=g(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t.data);case 2:return t.data=e.sent,e.next=5,u(t.id,{method:"PUT",body:JSON.stringify(O({"@context":f||X(l)},t.data))});case 5:return e.abrupt("return",{data:t.data});case 6:case"end":return e.stop()}}),e)}))),function(e,r){return t.apply(this,arguments)}),updateMany:function(e,r){throw new Error("updateMany is not implemented yet")},delete:(r=g(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t.id,{method:"DELETE"});case 2:return e.abrupt("return",{data:{id:t.id}});case 3:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)}),deleteMany:function(e,r){throw new Error("deleteMany is not implemented yet")}}},V=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":case"PUT":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}var t=localStorage.getItem("token");return t&&r.headers.set("Authorization","Bearer ".concat(t)),y.fetchJson(e,r)};export{L as DateTimeInput,C as FilterHandler,F as GroupedReferenceHandler,P as ImageField,T as ReferenceArrayField,U as ReferenceArrayInput,I as ReferenceField,N as ReferenceInput,M as ReificationArrayInput,T as UriArrayField,U as UriArrayInput,B as dataProvider,V as httpClient};
//# sourceMappingURL=index.es.js.map
