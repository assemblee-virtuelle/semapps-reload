"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("react"),t=e(r),n=require("react-admin"),a=require("@material-ui/core/styles"),o=e(require("jsonld")),i=e(require("speakingurl")),u=e(require("crypto"));function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,r,t,n,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void t(e)}u.done?r(c):Promise.resolve(c).then(n,a)}function l(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){s(o,n,a,i,u,"next",e)}function u(e){s(o,n,a,i,u,"throw",e)}i(void 0)}))}}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return t}(e,r)||g(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){if(e){if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,r):void 0}}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function w(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=g(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}var x=function(e){var r=e.record,a=e.source,o=v(e,["record","source"]);return(null==r?void 0:r[a])&&(Array.isArray(r[a])||(r[a]=[r[a]]),r[a]=r[a].map((function(e){return e["@id"]||e.id||e}))),t.createElement(n.ReferenceArrayField,f({record:r,source:a},o))};x.defaultProps={addLabel:!0};var k=function(e){var r=e.record,a=e.source,o=v(e,["record","source"]);return r[a]&&"object"===c(r[a])&&(r[a]=r[a]["@id"]||r[a].id),t.createElement(n.ReferenceField,f({record:r,source:a},o))};k.defaultProps={addLabel:!0};var S=function(e){var n=e.children,a=e.record,o=e.filter,i=e.source,u=v(e,["children","record","filter","source"]),c=y(r.useState(),2),s=c[0],l=c[1];return r.useEffect((function(){if(a&&i&&Array.isArray(null==a?void 0:a[i])){var e=null==a?void 0:a[i].filter((function(e){var r=!0;for(var t in o){var n=e[t];Array.isArray(n)?n.includes(o[t])||(r=!1):n!==o[t]&&(r=!1)}return r})),r=h({},a);r[i]=e.length>0?e:void 0,l(r)}}),[a,i,o]),t.createElement(t.Fragment,null,t.Children.map(n,(function(e,r){return t.cloneElement(e,h(h({},u),{},{record:s,addLabel:!0,source:i}))})))},j=function(e){var r=n.useResourceContext({});return t.createElement(n.ReferenceArrayInput,f({},e,{resource:r,format:function(r){return r?(Array.isArray(r)||(r=[r]),e.format&&(r=e.format(r)),r.map((function(e){return"object"===c(e)?e.id||e["@id"]:e}))):r}}))},O=a.makeStyles({form:{display:"flex"},input:{paddingRight:"20px"}}),T=a.makeStyles({root:{display:"none"}}),E=function(e,r){return Object.keys(r).find((function(t){return r[t][e]}))},R=function(e,r){return Object.keys(r).find((function(t){return e.startsWith(r[t].baseUrl)}))},C=function(){var e=l(regeneratorRuntime.mark((function e(r,t){var n,a,i,u,c,s,l,p,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.dataServers,u=t.httpClient,c=t.jsonContext,s=E("authServer",i),(l=R(r,i))===s||!(null===(n=i[s])||void 0===n?void 0:n.proxyUrl)||!0===(null===(a=i[l])||void 0===a?void 0:a.noProxy)){e.next=9;break}return e.next=6,u(i[s].proxyUrl,{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:new URLSearchParams({id:r})});case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,u(r,{noToken:l!==s});case 11:e.t0=e.sent;case 12:if(p=e.t0,(f=p.json).id=f.id||f["@id"],f["@context"]===c){e.next=19;break}return e.next=18,o.compact(f,c);case 18:f=e.sent;case 19:return e.abrupt("return",f);case 20:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),q=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,c,s,l,p,f,d,h,v,y,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.resources,u=i[t]){r.next=4;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 4:return r.next=6,C(n.id,e);case 6:if(c=r.sent,null===(a=u.list)||void 0===a?void 0:a.forceArray){l=w(null===(s=u.list)||void 0===s?void 0:s.forceArray);try{for(l.s();!(p=l.n()).done;)f=p.value,c[f]&&!Array.isArray(c[f])&&(c[f]=[c[f]])}catch(e){l.e(e)}finally{l.f()}}if(!(null===(o=u.list)||void 0===o?void 0:o.dereference)){r.next=35;break}h=w(null===(d=u.list)||void 0===d?void 0:d.dereference),r.prev=10,h.s();case 12:if((v=h.n()).done){r.next=27;break}if(y=v.value,!c[y]||"string"!=typeof c[y]||!c[y].startsWith("http")){r.next=25;break}return r.prev=15,r.next=18,C(c[y],e);case 18:delete(m=r.sent)["@context"],c[y]=m,r.next=25;break;case 23:r.prev=23,r.t0=r.catch(15);case 25:r.next=12;break;case 27:r.next=32;break;case 29:r.prev=29,r.t1=r.catch(10),h.e(r.t1);case 32:return r.prev=32,h.f(),r.finish(32);case 35:return r.abrupt("return",{data:c});case 36:case"end":return r.stop()}}),r,null,[[10,29,32,35],[15,23]])})));return function(e,t){return r.apply(this,arguments)}}()},A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var P=function(e,r){return e(r={exports:{}},r.exports),r.exports}((function(e){var r,t;r=A,t=function(){function e(e){var r=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var t=e.shift();e[0]=t+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(n>0&&(a=a.replace(/^[\/]+/,"")),a=n<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),r.push(a))}var o=r.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=t():r.urljoin=t()})),I=function(e){return e&&e.rawFile&&e.rawFile instanceof File},N=function(e){var r=Object.keys(e.dataServers).find((function(r){return e.dataServers[r].uploadsContainer}));if(r)return P(e.dataServers[r].baseUrl,e.dataServers[r].uploadsContainer)},U=function(){var e=l(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=N(t)){e.next=3;break}throw new Error("You must define an uploadsContainer in one of the server's configuration");case 3:return e.next=5,t.httpClient(n,{method:"POST",body:r,headers:new Headers({Slug:(o=r.name,u=void 0,c=void 0,u="",c=o.split("."),c.length>1&&(u=c.pop(),o=c.join(".")),i(o,{lang:"fr"})+"."+u),"Content-Type":r.type})});case 5:if(201!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.headers.get("Location"));case 8:case"end":return e.stop()}var o,u,c}),e)})));return function(r,t){return e.apply(this,arguments)}}(),L=function(){var e=l(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(n=e.t1.value,!r.hasOwnProperty(n)){e.next=20;break}if(!Array.isArray(r[n])){e.next=16;break}a=0;case 6:if(!(a<r[n].length)){e.next=14;break}if(!I(r[n][a])){e.next=11;break}return e.next=10,U(r[n][a].rawFile,t);case 10:r[n][a]=e.sent;case 11:a++,e.next=6;break;case 14:e.next=20;break;case 16:if(!I(r[n])){e.next=20;break}return e.next=19,U(r[n].rawFile,t);case 19:r[n]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),F=function(e,r,t){var n={},a=[];return Object.keys(t).forEach((function(o){Object.keys(t[o].containers).forEach((function(i){r&&!(Array.isArray(r)?r.includes(i):r===i)||Object.keys(t[o].containers[i]).forEach((function(r){e.includes(r)&&t[o].containers[i][r].map((function(e){var r=P(t[i].baseUrl,e);a.includes(r)||(a.push(r),n[o]||(n[o]=[]),n[o].push(r))}))}))}))})),n},D=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,c,s,l,p,f,d,v,y,m,g,b,w,x,k;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.dataServers,u=e.resources,c=e.httpClient,s=e.jsonContext,l=u[t],p=new Headers,(null===(a=l.fieldsMapping)||void 0===a?void 0:a.title)&&p.set("Slug",n.data[null===(f=l.fieldsMapping)||void 0===f?void 0:f.title]),!(null===(o=l.create)||void 0===o?void 0:o.container)){r.next=10;break}d=null===(y=l.create)||void 0===y?void 0:y.container,v=R(d,i),r.next=20;break;case 10:if(v=(null===(m=l.create)||void 0===m?void 0:m.server)||Object.keys(e.dataServers).find((function(r){return!0===e.dataServers[r].default}))){r.next=13;break}throw new Error("You must define a server for the creation, or a container, or a default server");case 13:if(g=F(l.types,[v],i),(b=Object.keys(g))&&0!==b.length){r.next=17;break}throw new Error("No container with types ".concat(JSON.stringify(l.types)," found on server ").concat(v));case 17:if(!(b.length>1||g[b[0]].length>1)){r.next=19;break}throw new Error("More than one container detected with types ".concat(JSON.stringify(l.types)," on server ").concat(v));case 19:d=g[b[0]][0];case 20:return r.next=22,L(n.data,e);case 22:return n.data=r.sent,r.next=25,c(d,{method:"POST",headers:p,body:JSON.stringify(h({"@context":s,"@type":l.types},n.data)),noToken:!0!==i[v].authServer});case 25:return w=r.sent,x=w.headers,k=x.get("Location"),r.next=30,q(e)(t,{id:k});case 30:return r.abrupt("return",r.sent);case 31:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},M=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=R(n.id,a),r.next=4,o(n.id,{method:"DELETE",noToken:!i||!0!==a[i].authServer});case 4:return r.abrupt("return",{data:{id:n.id}});case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},G=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.httpClient,o=[],i=w(n.ids),r.prev=3,i.s();case 5:if((u=i.n()).done){r.next=17;break}return c=u.value,r.prev=7,r.next=10,a(c,{method:"DELETE"});case 10:o.push(c),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(7);case 15:r.next=5;break;case 17:r.next=22;break;case 19:r.prev=19,r.t1=r.catch(3),i.e(r.t1);case 22:return r.prev=22,i.f(),r.finish(22);case 25:return r.abrupt("return",{data:o});case 26:case"end":return r.stop()}}),r,null,[[3,19,22,25],[7,13]])})));return function(e,t){return r.apply(this,arguments)}}()},H=function(e,r,t){var n=[];if(Object.keys(t[r].containers[r]).forEach((function(a){e.includes(a)&&t[r].containers[r][a].map((function(e){var a=P(t[r].baseUrl,e);n.includes(a)||n.push(a)}))})),0===n.length)throw new Error("No container found matching with types ".concat(JSON.stringify(e),". You can set explicitely the create.container property of the resource."));if(n.length>1)throw new Error("More than one container found matching with types ".concat(JSON.stringify(e),". You must set the create.server or create.container property for the resource."));return n[0]},J=function(e){return function(r){var t,n,a,o,i=e.dataServers,u=e.resources[r];if(!u)throw new Error("Resource ".concat(r," is not mapped in resources file"));if(null===(t=u.create)||void 0===t?void 0:t.container)return null===(a=u.create)||void 0===a?void 0:a.container;if(null===(n=u.create)||void 0===n?void 0:n.server)return H(u.types,null===(o=u.create)||void 0===o?void 0:o.server,i);var c=E("default",i);return H(u.types,c,i)}},Q=function(){var e=l(regeneratorRuntime.mark((function e(r,t,n,a){var i,u,c,s,l,p,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.dataServers,u=a.httpClient,c=a.jsonContext,s=Object.keys(r).reduce((function(e,t){return h(h({},e),Object.fromEntries(r[t].map((function(e){return[e,t]}))))}),{}),l=Object.keys(s).map((function(e){return u(e,{noToken:!s[e]||!0!==i[s[e]].authServer}).then((function(e){var r=e.json;return r["@context"]!==c?o.compact(r,c):r})).then((function(r){if(t="ldp:Container",a=(n=r).type||n["@type"],Array.isArray(a)?a.includes(t):a===t)return r["ldp:contains"];throw new Error(e+" is not a LDP container");var t,n,a}))})),e.next=5,Promise.all(l);case 5:if(0!==(p=e.sent).length){e.next=10;break}return e.abrupt("return",{data:[],total:0});case 10:return p=(f=[].concat).apply.apply(f,m(p)),d=p.map((function(e){return e.id=e.id||e["@id"],e})),n.filter&&(n.filter.a&&(n.filter.type=n.filter.a,delete n.filter.a),n.filter.q&&delete n.filter.q,Object.keys(n.filter).length>0&&(d=d.filter((function(e){return Object.entries(n.filter).some((function(r){var t=y(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),n.sort&&(d=d.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(d=d.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:d,total:p.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),W=function(e){var r,t={};if(e){var n,a=w(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r=o.includes("/")?o.split("/").reverse():[o],t=h(h({},t),r.reduce((function(e,r){return p({},r,h({"@embed":"@last"},e))}),{}))}}catch(e){a.e(e)}finally{a.f()}return t}};class ${constructor(e){this.value=e||"b"+ ++$.nextId}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value}}$.prototype.termType="BlankNode",$.nextId=0;var Y=$;class B{equals(e){return!!e&&e.termType===this.termType}}B.prototype.termType="DefaultGraph",B.prototype.value="";var V=B;var X=function(e){if(!e)return null;if("BlankNode"===e.termType)return this.blankNode(e.value);if("DefaultGraph"===e.termType)return this.defaultGraph();if("Literal"===e.termType)return this.literal(e.value,e.language||this.namedNode(e.datatype.value));if("NamedNode"===e.termType)return this.namedNode(e.value);if("Quad"===e.termType){const r=this.fromTerm(e.subject),t=this.fromTerm(e.predicate),n=this.fromTerm(e.object),a=this.fromTerm(e.graph);return this.quad(r,t,n,a)}if("Variable"===e.termType)return this.variable(e.value);throw new Error("unknown termType "+e.termType)};class _{constructor(e){this.value=e}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value}}_.prototype.termType="NamedNode";var z=_;class Z{constructor(e,r,t){this.value=e,this.datatype=Z.stringDatatype,this.language="",r?(this.language=r,this.datatype=Z.langStringDatatype):t&&(this.datatype=t)}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value&&e.language===this.language&&e.datatype.equals(this.datatype)}}Z.prototype.termType="Literal",Z.langStringDatatype=new z("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),Z.stringDatatype=new z("http://www.w3.org/2001/XMLSchema#string");var K=Z;class ee{constructor(e,r,t,n){this.subject=e,this.predicate=r,this.object=t,this.graph=n||new V}equals(e){return!!e&&("Quad"===e.termType||!e.termType)&&e.subject.equals(this.subject)&&e.predicate.equals(this.predicate)&&e.object.equals(this.object)&&e.graph.equals(this.graph)}}ee.prototype.termType="Quad",ee.prototype.value="";var re=ee;class te{constructor(e){this.value=e}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value}}te.prototype.termType="Variable";var ne=te;const ae={namedNode:function(e){return new z(e)},blankNode:function(e){return new Y(e)},literal:function(e,r){return"string"==typeof r?-1===r.indexOf(":")?new K(e,r):new K(e,null,ae.namedNode(r)):new K(e,null,r)},variable:function(e){return new ne(e)},defaultGraph:function(){return ae.defaultGraphInstance},triple:function(e,r,t){return ae.quad(e,r,t)},quad:function(e,r,t,n){return new re(e,r,t,n||ae.defaultGraphInstance)},fromTerm:function(e){return X.call(ae,e)},fromQuad:function(e){return X.call(ae,e)},defaultGraphInstance:new V};var oe=ae,ie=oe.namedNode,ue=oe.quad,ce=oe.variable,se=function(e){var r=[];if(e){var t,n=w(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.includes("/"))for(var o=a.split("/"),i=1;i<=o.length;i++)r.push(o.slice(0,i).join("/"));else r.push(a)}}catch(e){n.e(e)}finally{n.f()}}return r},le=function(e){return u.createHash("md5").update(e).digest("hex")},pe=function(e){return e.includes("/")&&e.split("/")[0]},fe=function(e){return e.includes("/")?e.split("/")[1]:e},de=function e(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.filter((function(e){return e.parentNode===t})).map((function(t){return"\n      OPTIONAL { \n        ".concat(t.query,"\n        ").concat(t.filter,"\n        ").concat(e(r,t.node),"\n      }\n    ")})).join("\n")},he=function(e){var r=[],t=se(e);if(t){var n,a=w(t);try{for(a.s();!(n=a.n()).done;){var o=n.value,i=pe(o),u=fe(o),c=le(o),s=i?le(i):"1";r.push({node:o,parentNode:i,query:"?s".concat(s," ").concat(u," ?s").concat(c," .\n?s").concat(c," ?p").concat(c," ?o").concat(c," ."),filter:""})}}catch(e){a.e(e)}finally{a.f()}return{construct:r.map((function(e){return e.query})).join("\n"),where:de(r)}}return{construct:"",where:""}},ve=function e(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.filter((function(e){return e.parentNode===t})).map((function(t){return{type:"optional",patterns:[{type:"bgp",triples:t.query},e(r,t.node)]}}))},ye=function(e,r){var t=[],n=se(e);if(n&&r&&r.length>0){var a,o=w(n);try{var i=function(){var e=a.value,n=pe(e),o=fe(e),i=le(e),u=n?le(n):"1",c=o.split(":")[0],s=o.split(":")[1],l=r.find((function(e){return e.prefix===c})),p=[ue(ce("s"+u),ie(l.url+s),ce("s"+i)),ue(ce("s"+i),ce("p"+i),ce("o"+i))];t.push({node:e,parentNode:n,query:p,filter:""})};for(o.s();!(a=o.n()).done;)i()}catch(e){o.e(e)}finally{o.f()}return{construct:t.length>0?t.map((function(e){return e.query})).reduce((function(e,r){return e.concat(r)})):null,where:ve(t)}}return{construct:"",where:""}},me=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r?ye(e,t):he(e)},ge=oe.literal,be=oe.namedNode,we=oe.quad,xe=oe.variable,ke=new(0,require("sparqljs").Generator)({}),Se=function(e){var r=e.containers,t=e.params.filter,n=e.dereference,a=e.ontologies,o={queryType:"CONSTRUCT",template:[we(xe("s1"),xe("p1"),xe("o1"))],where:[{type:"bgp",triples:[we(xe("s1"),xe("p1"),xe("o1"))]},{type:"filter",expression:{type:"operation",operator:"isiri",args:[xe("s1")]}},{type:"filter",expression:{type:"operation",operator:"in",args:[xe("containerUri"),[be(r[0])]]}},{type:"bgp",triples:[we(xe("containerUri"),be("http://www.w3.org/ns/ldp#contains"),xe("s1"))]}],type:"query",prefixes:{}};a.map((function(e){o.prefixes=h(h({},o.prefixes),{},p({},e.prefix,e.url))}));var i=me(n,!0,a);if(i&&i.construct&&(o.where=o.where.concat(i.where),o.template=o.template.concat(i.construct)),t&&Object.keys(t).length>0){var u=t.sparqlWhere&&Object.keys(t.sparqlWhere).length>0,c=t.q&&t.q.length>0;u&&o.where.push(t.sparqlWhere),c?o.where.push({type:"group",patterns:[{queryType:"SELECT",variables:[xe("s1")],where:[{type:"bgp",triples:[we(xe("s1"),xe("p1"),xe("o1"))]},{type:"filter",expression:{type:"operation",operator:"regex",args:[{type:"operation",operator:"lcase",args:[{type:"operation",operator:"str",args:[xe("o1")]}]},ge(t.q.toLowerCase(),"",be("http://www.w3.org/2001/XMLSchema#string"))]}},{type:"filter",expression:{type:"operation",operator:"notexists",args:[{type:"bgp",triples:[we(xe("s1"),be("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),xe("o1"))]}]}}],type:"query"}]}):Object.keys(t).forEach((function(e){if(t[e]&&"sparqlWhere"!==e){var r=null,n=null,i=null,u=null;"a"===e?(r=t[e].split(":")[0],n=t[e].split(":")[1],u="http://www.w3.org/1999/02/22-rdf-syntax-ns#type",i=a.find((function(e){return e.prefix===r})).url+n):(r=e.split(":")[0],n=e.split(":")[1],u=a.find((function(e){return e.prefix===r})).url+n,i=t[e]),o.where.push({type:"bgp",triples:[we(xe("s1"),be(u),be(i))]})}}))}var s=ke.stringify(o);return t.q&&delete t.q,s},je=function(){var e=l(regeneratorRuntime.mark((function e(r,t,n,a){var i,u,c,s,l,p,f,d,v,y,g,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=a.dataServers,c=a.resources,s=a.httpClient,l=a.jsonContext,p=a.ontologies,f=c[t],d=h({"@context":l,"@type":f.types,"@embed":"@never"},W(null===(i=f.list)||void 0===i?void 0:i.dereference)),v=Object.keys(r).map((function(e){return new Promise((function(t,a){var i,c,l=Se({containers:r[e],params:h(h({},n),{},{filter:h(h({},null===(i=f.list)||void 0===i?void 0:i.filter),n.filter)}),dereference:null===(c=f.list)||void 0===c?void 0:c.dereference,ontologies:p});s(u[e].sparqlEndpoint,{method:"POST",body:l,noToken:!0!==u[e].authServer}).then((function(e){var r=e.json;return o.frame(r,d,{omitGraph:!1})})).then((function(e){t(e["@graph"]||[])})).catch((function(e){return a(e)}))}))})),e.next=6,Promise.all(v);case 6:if(0!==(y=e.sent).length){e.next=11;break}return e.abrupt("return",{data:[],total:0});case 11:return y=(g=[].concat).apply.apply(g,m(y)),b=y.map((function(e){return e.id=e.id||e["@id"],e})),n.sort&&(b=b.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(b=b.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:b,total:y.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),Oe=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t){var n,a,o,i,u,c,s,l,p,f,d=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=d.length>1&&void 0!==d[1]?d[1]:{},u=e.dataServers,c=e.resources,s=c[t]){r.next=5;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 5:if(l=(null===(n=s.list)||void 0===n?void 0:n.containers)&&(null===(a=s.list)||void 0===a?void 0:a.containers.length)>0?null===(p=s.list)||void 0===p?void 0:p.containers:F(s.types,null===(f=s.list)||void 0===f?void 0:f.servers,u),!(null===(o=s.list)||void 0===o?void 0:o.fetchContainer)){r.next=10;break}return r.abrupt("return",Q(l,t,i,e));case 10:return r.abrupt("return",je(l,t,i,e));case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},Te=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s,l,p;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.returnFailedResources,o=[],i=w(n.ids),r.prev=3,i.s();case 5:if((u=i.n()).done){r.next=21;break}return s="object"===c(s=u.value)?s["@id"]:s,r.prev=8,r.next=11,q(e)(t,{id:s});case 11:l=r.sent,p=l.data,o.push(p),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(8),a&&o.push({id:s});case 19:r.next=5;break;case 21:r.next=26;break;case 23:r.prev=23,r.t1=r.catch(3),i.e(r.t1);case 26:return r.prev=26,i.f(),r.finish(26);case 29:return r.abrupt("return",{data:o});case 30:case"end":return r.stop()}}),r,null,[[3,23,26,29],[8,16]])})));return function(e,t){return r.apply(this,arguments)}}()},Ee=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.filter=h(h({},n.filter),{},p({},n.target,n.id)),delete n.target,r.next=4,Oe(e)(t,n);case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},Re=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=e.jsonContext,u=R(n.id,a),r.next=4,L(n.data,e);case 4:return n.data=r.sent,r.next=7,o(n.id,{method:"PUT",body:JSON.stringify(h({"@context":i},n.data)),noToken:!u||!0!==a[u].authServer});case 7:return r.abrupt("return",{data:n.data});case 8:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()};function Ce(e){this.message=e}Ce.prototype=new Error,Ce.prototype.name="InvalidCharacterError";var qe="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new Ce("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,a=0,o=0,i="";n=r.charAt(o++);~n&&(t=a%4?64*t+n:n,a++%4)?i+=String.fromCharCode(255&t>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function Ae(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(qe(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return qe(r)}}function Pe(e){this.message=e}function Ie(e,r){if("string"!=typeof e)throw new Pe("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(Ae(e.split(".")[t]))}catch(e){throw new Pe("Invalid token specified: "+e.message)}}Pe.prototype=new Error,Pe.prototype.name="InvalidTokenError";var Ne=function(){var e=l(regeneratorRuntime.mark((function e(r){var t,n,a,o,i,u,c,s,l,p,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.dataServers,n=r.httpClient,a=localStorage.getItem("token"),o=E("pod",t),i=E("authServer",t),!a){e.next=24;break}return u=Ie(a),c=u.webId,e.prev=6,e.next=9,n(c);case 9:l=e.sent,p=l.json,s=p,e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(6),console.error(e.t0),localStorage.removeItem("token"),window.location.reload(),e.abrupt("return");case 20:o&&(r.dataServers[o].name="My Pod",r.dataServers[o].baseUrl=P(c,"data"),r.dataServers[o].sparqlEndpoint=(null===(f=s.endpoints)||void 0===f?void 0:f["void:sparqlEndpoint"])||P(c,"sparql")),i&&(r.dataServers[i].proxyUrl=null===(d=s.endpoints)||void 0===d?void 0:d.proxyUrl),e.next=25;break;case 24:o&&delete r.dataServers[o];case 25:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(r){return e.apply(this,arguments)}}(),Ue=function(){var e=l(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.values(r.dataServers).filter((function(e){return!0!==e.pod})).map((function(e){return r.httpClient(new URL("/.well-known/void",e.baseUrl)).then((function(e){return{data:e.json}})).catch((function(e){if(404===e.status)return{error:e};throw e}))})),e.prev=1,e.next=4,Promise.all(t);case 4:n=e.sent,a=w(n);try{for(a.s();!(o=a.n()).done;)o.value.data}catch(e){a.e(e)}finally{a.f()}e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}();exports.DateTimeInput=function(e){return t.createElement(n.DateTimeInput,f({},e,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},exports.FilterHandler=S,exports.GroupedReferenceHandler=function(e){var r=e.children,a=e.groupReference,o=e.groupLabel,i=e.groupHeader,u=e.filterProperty,c=v(e,["children","groupReference","groupLabel","groupHeader","filterProperty"]),s=n.useQueryWithStore({type:"getList",resource:a,payload:{}}).data;return t.createElement(t.Fragment,null,null==s?void 0:s.map((function(e,n){var a={};return a[u]=e.id,t.createElement(t.Fragment,null,i&&i(h(h({},c),{},{group:e})),t.createElement(S,f({},c,{filter:a,label:e[o]}),r))})))},exports.ImageField=function(e){var r=e.record,a=e.source,o=v(e,["record","source"]);return"string"==typeof r&&(r=p({},a,r)),t.createElement(n.ImageField,f({record:r,source:a},o))},exports.ReferenceArrayField=x,exports.ReferenceArrayInput=j,exports.ReferenceField=k,exports.ReferenceInput=function(e){var r=n.useResourceContext({});return t.createElement(n.ReferenceInput,f({},e,{resource:r,format:function(r){return r?(e.format&&(r=e.format(r)),"object"===c(r)?r.id||r["@id"]:r):r}}))},exports.ReificationArrayInput=function(e){var r=e.reificationClass,a=(e.children,v(e,["reificationClass","children"])),o=O(),i=T();return t.createElement(n.ArrayInput,a,t.createElement(n.SimpleFormIterator,{classes:{form:o.form}},t.Children.map(e.children,(function(e,r){return t.cloneElement(e,{className:o.input})})),t.createElement(n.TextInput,{className:i.root,source:"type",initialValue:r})))},exports.UriArrayField=x,exports.UriArrayInput=j,exports.buildDereferenceQuery=me,exports.buildSparqlQuery=Se,exports.dataProvider=function(e){if(!E("default",e.dataServers))throw new Error("You must define a default server in your dataServers config");e.jsonContext||(e.jsonContext=Object.fromEntries(e.ontologies.map((function(e){return[e.prefix,e.url]})))),e.returnFailedResources||(e.returnFailedResources=!1);var r=Ne(e),t=Ue(e),n=function(e){return l(regeneratorRuntime.mark((function n(){var a=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r;case 2:return n.next=4,t;case 4:return n.next=6,e.apply(void 0,a);case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))};return{getList:n(Oe(e)),getOne:n(q(e)),getMany:n(Te(e)),getManyReference:n(Ee(e)),create:n(D(e)),update:n(Re(e)),updateMany:function(){throw new Error("updateMany is not implemented yet")},delete:n(M(e)),deleteMany:n(G(e)),getCreateContainer:n(J(e))}},exports.httpClient=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":case"PUT":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}if(!r.noToken){var t=localStorage.getItem("token");t&&r.headers.set("Authorization","Bearer ".concat(t))}return n.fetchUtils.fetchJson(e,r)},exports.useCreateContainer=function(e){var t=r.useContext(n.DataProviderContext),a=y(r.useState(),2),o=a[0],i=a[1];return r.useEffect((function(){e&&t.getCreateContainer(e).then((function(e){return i(e)}))}),[e]),o};
//# sourceMappingURL=index.cjs.js.map
