"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("react")),t=require("react-admin"),n=e(require("jsonld"));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,r,t,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,a)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var i=e.apply(r,t);function c(e){o(i,n,a,c,u,"next",e)}function u(e){o(i,n,a,c,u,"throw",e)}c(void 0)}))}}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||d(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,r){if(e){if("string"==typeof e)return y(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,r):void 0}}function y(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function m(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=d(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}var b=function(e){var n=e.record,a=e.source,o=p(e,["record","source"]);return n[a]&&(Array.isArray(n[a])||(n[a]=[n[a]]),n[a]=n[a].map((function(e){return e["@id"]||e}))),r.createElement(t.ReferenceArrayField,u({record:n,source:a},o))};b.defaultProps={addLabel:!0};var h=function(e){var n=e.record,o=e.source,i=p(e,["record","source"]);return n[o]&&"object"===a(n[o])&&(n[o]=n[o]["@id"]||n[o].id),r.createElement(t.ReferenceField,u({record:n,source:o},i))};h.defaultProps={addLabel:!0};var g=function(e){var n=t.useResourceContext({});return r.createElement(t.ReferenceArrayInput,u({},e,{resource:n,format:function(r){return r?(Array.isArray(r)||(r=[r]),e.format&&(r=e.format(r)),r.map((function(e){return"object"===a(e)?e.id||e["@id"]:e}))):r}}))},v=function(e){return e.split(":").map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")},x=function(e){var r=e.types,t=e.params,n=t.pagination,a=(t.sort,t.filter),o=e.dereference,i=e.ontologies,c="";a&&(a.q&&a.q.length>0&&(c+='\n      {\n        SELECT ?s1\n        WHERE {\n          ?s1 ?p1 ?o1 .\n          FILTER regex(lcase(str(?o1)), "'.concat(a.q.toLowerCase(),'")\n          FILTER NOT EXISTS {?s1 a ?o1}\n        }\n      }\n      '),delete a.q),Object.keys(a).forEach((function(e){var r=a[e].startsWith("http")?"<".concat(a[e],">"):a[e];c+="?s1 ".concat(e," ").concat(r," .")})));var u=function(e){var r=[];if(e)for(var t=e.reduce((function(e,r){return function e(r,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"root";if(t.includes("/")){var a=t.split(/\/(.+)/);r[a[0]]=n,e(r,a[1],a[0])}else r[t]=n;return r}(e,r)}),{}),n=0,a=Object.entries(t);n<a.length;n++){var o=l(a[n],2),i=o[0],c=o[1],u=v(i),s="root"===c?"1":v(c),f="root"===c?i:c;r[f]||(r[f]=[]),r[f].push("\n        ?s".concat(s," ").concat(i," ?s").concat(u," .\n        ?s").concat(u," ?p").concat(u," ?o").concat(u," .\n      "))}return{construct:Object.values(r).map((function(e){return Object.values(e).join("\n")})).join("\n"),where:Object.values(r).map((function(e){return"OPTIONAL { ".concat(Object.values(e).join("\n")," }")})).join("\n")}}(o);return"\n    ".concat(function(e){return e.map((function(e){return"PREFIX ".concat(e.prefix,": <").concat(e.url,">")})).join("\n")}(i),"\n    CONSTRUCT {\n      ?s1 ?p2 ?o2 .\n      ").concat(u.construct,"\n    }\n    WHERE {\n      ?s1 a ?type .\n      FILTER( ?type IN (").concat(r.join(", "),") ) .\n      FILTER( (isIRI(?s1)) ) .\n      ").concat(c,"\n      ").concat(u.where,"\n      ?s1 ?p2 ?o2 .\n    }\n    # TODO try to make pagination work in SPARQL as this doesn't work.\n    # LIMIT ").concat(n.perPage,"\n    # OFFSET ").concat((n.page-1)*n.perPage,"\n  ")},w=require("speakingurl"),j=function(e){var r={};return e.forEach((function(e){return r[e.prefix]=e.url})),r},O=function(e){return e&&e.rawFile&&e.rawFile instanceof File};exports.DateTimeInput=function(e){return r.createElement(t.DateTimeInput,u({},e,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},exports.ImageField=function(e){var n=e.record,a=e.source,o=p(e,["record","source"]);return"string"==typeof n&&(n=c({},a,n)),r.createElement(t.ImageField,u({record:n,source:a},o))},exports.ReferenceArrayField=b,exports.ReferenceArrayInput=g,exports.ReferenceField=h,exports.ReferenceInput=function(e){var n=t.useResourceContext({});return r.createElement(t.ReferenceInput,u({},e,{resource:n,format:function(r){return r?(e.format&&(r=e.format(r)),"object"===a(r)?r.id||r["@id"]:r):r}}))},exports.UriArrayField=b,exports.UriArrayInput=g,exports.dataProvider=function(e){var r,t,o,c,u,s,p=e.sparqlEndpoint,d=e.httpClient,y=e.resources,b=e.ontologies,h=e.jsonContext,g=e.uploadsContainerUri,v=function(){var e=i(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=2;break}throw new Error("No uploadsContainerUri defined for the data provider");case 2:return e.next=4,d(g,{method:"POST",body:r,headers:new Headers({Slug:(n=r.name,a=void 0,o=void 0,a="",o=n.split("."),o.length>1&&(a=o.pop(),n=o.join(".")),w(n,{lang:"fr"})+"."+a),"Content-Type":r.type})});case 4:if(201!==(t=e.sent).status){e.next=7;break}return e.abrupt("return",t.headers.get("Location"));case 7:case"end":return e.stop()}var n,a,o}),e)})));return function(r){return e.apply(this,arguments)}}(),k=function(){var e=i(regeneratorRuntime.mark((function e(r){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(t=e.t1.value,!r.hasOwnProperty(t)){e.next=20;break}if(!Array.isArray(r[t])){e.next=16;break}n=0;case 6:if(!(n<r[t].length)){e.next=14;break}if(!O(r[t][n])){e.next=11;break}return e.next=10,v(r[t][n].rawFile);case 10:r[t][n]=e.sent;case 11:n++,e.next=6;break;case 14:e.next=20;break;case 16:if(!O(r[t])){e.next=20;break}return e.next=19,v(r[t].rawFile);case 19:r[t]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return{getList:(s=i(regeneratorRuntime.mark((function e(r,t){var a,o,i,c,u,s,m,g,v,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y[r],!t.id&&!t["@id"]&&y[r].types){e.next=17;break}return a=t.id||t["@id"]||y[r].containerUri,e.next=5,d(a);case 5:if(o=e.sent,i=o.json,c=["ldp:contains","as:orderedItems","orderedItems","as:items","items"].find((function(e){return i[e]}))){e.next=11;break}throw new Error("Unknown list type");case 11:return u=i[c].map((function(e){return e.id=e.id||e["@id"],e})),t.filter&&(t.filter.q&&delete t.filter.q,Object.keys(t.filter).length>0&&(u=u.filter((function(e){return Object.entries(t.filter).some((function(r){var t=l(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),t.pagination&&(u=u.slice((t.pagination.page-1)*t.pagination.perPage,t.pagination.page*t.pagination.perPage)),e.abrupt("return",{data:u,total:i[c].length});case 17:return s=x({types:y[r].types,params:f(f({},t),{},{filter:f(f({},y[r].filter),t.filter)}),dereference:y[r].dereference,ontologies:b}),e.next=20,d(p,{method:"POST",body:s});case 20:return m=e.sent,g=m.json,e.next=24,n.frame(g,{"@context":h||j(b),"@type":y[r].types});case 24:if(v=e.sent,1!==Object.keys(v).length){e.next=29;break}return e.abrupt("return",{data:[],total:0});case 29:if(v["@graph"]){e.next=34;break}return v.id=v.id||v["@id"],e.abrupt("return",{data:[v],total:1});case 34:return w=v["@graph"].map((function(e){return e.id=e.id||e["@id"],e})).sort((function(e,r){return!(t.sort&&e[t.sort.field]&&r[t.sort.field])||("DESC"===t.sort.order?e[t.sort.field].localeCompare(r[t.sort.field]):r[t.sort.field].localeCompare(e[t.sort.field]))})).slice((t.pagination.page-1)*t.pagination.perPage,t.pagination.page*t.pagination.perPage),e.abrupt("return",{data:w,total:v["@graph"].length});case 36:case"end":return e.stop()}}),e)}))),function(e,r){return s.apply(this,arguments)}),getOne:(u=i(regeneratorRuntime.mark((function e(r,t){var a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t.id);case 2:return a=e.sent,(o=a.json).id=o.id||o["@id"],e.next=7,n.compact(o,h||j(b));case 7:return i=e.sent,e.abrupt("return",{data:i});case 9:case"end":return e.stop()}}),e)}))),function(e,r){return u.apply(this,arguments)}),getMany:(c=i(regeneratorRuntime.mark((function e(r,t){var n,o,i,c,u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],o=m(t.ids),e.prev=2,o.s();case 4:if((i=o.n()).done){e.next=20;break}return c="object"===a(c=i.value)?c["@id"]:c,e.prev=7,e.next=10,d(c);case 10:u=e.sent,(s=u.json).id=s.id||s["@id"],n.push(s),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(7);case 18:e.next=4;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(2),o.e(e.t1);case 25:return e.prev=25,o.f(),e.finish(25);case 28:return e.abrupt("return",{data:n});case 29:case"end":return e.stop()}}),e,null,[[2,22,25,28],[7,16]])}))),function(e,r){return c.apply(this,arguments)}),getManyReference:function(e,r){throw new Error("getManyReference is not implemented yet")},create:(o=i(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,c,u,s,p,l,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y[r],n=y[r],a=n.slugField,o=n.containerUri,i=n.types,c=new Headers,a&&c.set("Slug",Array.isArray(a)?a.map((function(e){return t.data[e]})).join(" "):t.data[a]),e.next=6,k(t.data);case 6:return t.data=e.sent,e.next=9,d(o,{method:"POST",headers:c,body:JSON.stringify(f({"@context":h||j(b),"@type":i},t.data))});case 9:return u=e.sent,s=u.headers,p=s.get("Location"),e.next=14,d(p);case 14:return l=e.sent,(m=l.json).id=m.id||m["@id"],e.abrupt("return",{data:m});case 18:case"end":return e.stop()}}),e)}))),function(e,r){return o.apply(this,arguments)}),update:(t=i(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t.data);case 2:return t.data=e.sent,e.next=5,d(t.id,{method:"PUT",body:JSON.stringify(f({"@context":h||j(b)},t.data))});case 5:return e.abrupt("return",{data:t.data});case 6:case"end":return e.stop()}}),e)}))),function(e,r){return t.apply(this,arguments)}),updateMany:function(e,r){throw new Error("updateMany is not implemented yet")},delete:(r=i(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t.id,{method:"DELETE"});case 2:return e.abrupt("return",{data:{id:t.id}});case 3:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)}),deleteMany:function(e,r){throw new Error("deleteMany is not implemented yet")}}},exports.httpClient=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}var n=localStorage.getItem("token");return n&&r.headers.set("Authorization","Bearer ".concat(n)),t.fetchUtils.fetchJson(e,r)};
