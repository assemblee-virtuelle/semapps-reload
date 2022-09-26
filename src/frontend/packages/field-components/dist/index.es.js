import e,{useState as t,useMemo as r,useEffect as n,useCallback as a}from"react";import{useRecordContext as o,useTranslate as l,useDataProvider as i,getResources as c,useGetResourceLabel as u,linkToRecord as s,useRefresh as m,useNotify as f,Button as p,usePermissionsOptimized as d,ReferenceArrayField as b}from"react-admin";import{makeStyles as g,Box as h,Avatar as y,Chip as v,List as E,ListItem as w,ListItemAvatar as O,ListItemText as x,ListItemSecondaryAction as k,IconButton as j,CircularProgress as T,Dialog as C,DialogTitle as N,DialogContent as A,TextField as L,DialogActions as P}from"@material-ui/core";import S from"@material-ui/icons/Launch";import{Form as F,Field as I}from"react-final-form";import R from"@material-ui/icons/Add";import{useSelector as M,shallowEqual as z}from"react-redux";import W from"lodash.debounce";import B from"@material-ui/icons/Visibility";import D from"@material-ui/icons/Error";import{useDataServers as U,useDataModel as _}from"@semapps/semantic-data-provider";import q from"@material-ui/icons/Language";import G from"@material-ui/icons/Facebook";import H from"@material-ui/icons/GitHub";import V from"@material-ui/icons/Twitter";import Y from"@material-ui/icons/Instagram";import $ from"@material-ui/icons/YouTube";function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e,t,r,n,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function X(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){Q(o,n,a,l,i,"next",e)}function i(e){Q(o,n,a,l,i,"throw",e)}l(void 0)}))}}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}(e,t)||ae(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e){return function(e){if(Array.isArray(e))return oe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ae(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){if(e){if("string"==typeof e)return oe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?oe(e,t):void 0}}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var le=["label","defaultLabel","image","fallback","externalLink","labelColor","classes"],ie=g((function(e){return{parent:function(e){return K({position:"relative"},e.parent)},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},chip:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:3,paddingBottom:3,paddingLeft:6,paddingRight:6,marginBottom:10,cursor:"pointer"},launchIcon:{width:14}}})),ce=function(){},ue=function(t){var r=t.label,n=t.defaultLabel,a=t.image,l=t.fallback,i=t.externalLink,c=t.labelColor,u=t.classes,s=te(t,le);u=ie(u);var m=o(),f=("function"==typeof r?r(m):m[r])||n,p="function"==typeof a?a(m):m[a],d="function"==typeof l?l(m):l;return e.createElement(h,{className:u.parent},e.createElement("div",{className:u.square},e.createElement(y,ee({src:p||d,alt:f,fallback:d},s,{className:u.avatar}))),f?i?e.createElement(v,{color:c,className:u.chip,size:"small",label:f,deleteIcon:e.createElement(S,{className:u.launchIcon}),onDelete:ce}):e.createElement(v,{color:c,className:u.chip,size:"small",label:f}):null)};ue.defaultProps={labelColor:"secondary",externalLink:!1};var se=g((function(e){return{root:{width:"100%",maxWidth:"100%",backgroundColor:e.palette.background.paper,paddingTop:0,paddingBottom:0},primaryText:{width:"30%"},secondaryText:{fontStyle:"italic",color:"grey"}}})),me=function(e,t){var r=t&&Object.values(t).find((function(t){return e.startsWith(t.baseUrl)}));return r?r.name:"Inconnu"},fe=function(a){var m,f=a.keyword,p=a.source,d=a.reference,b=a.appendLink,g=a.switchToCreate,v=se(),C=re(t(!1),2),N=C[0],A=C[1],L=re(t(!1),2),P=L[0],S=L[1],F=re(t([]),2),I=F[0],q=F[1],G=l(),H=i(),V=U(),Y=o(),$=M(c,z),J=r((function(){return $.find((function(e){return e.name===d}))}),[$,d]),K=u(),Q=_(d);if(Q&&Object.keys(Q).length>0&&(null==Q||null===(m=Q.fieldsMapping)||void 0===m||!m.title))throw new Error("No fieldsMapping.title config found for ".concat(d," dataModel"));var X=r((function(){return W((function(e){var t;H.getList(d,{pagination:{page:1,perPage:100},sort:{field:null==Q||null===(t=Q.fieldsMapping)||void 0===t?void 0:t.title,order:"ASC"},filter:{q:e,_servers:"@all"}}).then((function(e){var t=e.data,r=Y[p]?Array.isArray(Y[p])?Y[p]:[Y[p]]:[],n=t.filter((function(e){return!r.includes(e.id)}));q(n),S(!0),A(!1)})).catch((function(e){A(!1)}))}),700)}),[H,Q,Y,p,d,q,A,S]);return n((function(){if(f)return A(!0),S(!1),X(f),function(){return X.cancel()}}),[f,X,A]),f?e.createElement(E,{dense:!0,className:v.root},P&&I.map((function(t){return e.createElement(w,{key:t.id,button:!0,onClick:function(){return b(t.id)}},e.createElement(O,null,e.createElement(y,null,e.createElement(J.icon))),e.createElement(x,{className:v.primaryText,primary:t[Q.fieldsMapping.title]}),e.createElement(x,{className:v.secondaryText,primary:me(t.id,V)}),e.createElement(k,null,e.createElement("a",{href:s("/"+d,t.id,"show"),target:"_blank",rel:"noopener noreferrer"},e.createElement(j,{edge:"end"},e.createElement(B,null)))))})),P&&0===I.length&&e.createElement(w,null,e.createElement(O,null,e.createElement(y,null,e.createElement(D,null))),e.createElement(x,{className:v.primaryText,primary:G("ra.navigation.no_results")})),P&&J.hasCreate&&e.createElement(w,{button:!0,onClick:g},e.createElement(O,null,e.createElement(y,null,e.createElement(R,null))),e.createElement(x,{className:v.primaryText,primary:G("ra.page.create",{name:K(d,1)})})),N&&e.createElement(h,{display:"flex",alignItems:"center",justifyContent:"center",height:150},e.createElement(T,{size:60,thickness:6}))):null},pe=["meta","input"],de=g((function(){return{title:{paddingBottom:8},actions:{padding:15},addForm:{paddingTop:0},listForm:{paddingLeft:8,paddingRight:8,paddingTop:0,paddingBottom:0,maxHeight:210}}})),be=function(t){var r=t.meta,n=r.touched,a=r.error,o=t.input,l=te(t,pe);return e.createElement(L,ee({error:!(!n||!a),helperText:n&&a},o,l,{fullWidth:!0}))},ge=function(r){var n=r.open,o=r.onClose,c=r.subjectUri,s=r.resource,d=r.source,b=r.reference,g=de(),h=re(t(""),2),y=h[0],v=h[1],E=re(t("find"),2),w=E[0],O=E[1],x=i(),k=l(),j=m(),T=f(),S=u(),M=_(b),z=a(function(){var e=X(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getOne(s,{id:c});case 2:return r=e.sent,n=r.data,e.next=6,x.update(s,{id:c,data:K(K({},n),{},Z({},d,n[d]?Array.isArray(n[d])?[].concat(ne(n[d]),[t]):[n[d],t]:t)),previousData:n});case 6:j(),o();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[x,c,s,d,j,o]),W=a(function(){var e=X(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.create(b,{data:Z({},M.fieldsMapping.title,t.title)});case 2:return r=e.sent,n=r.data,e.next=6,z(n.id);case 6:T('La resource "'.concat(t.title,'" a été créée'),"success");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[x,M,z,b,T]);return e.createElement(C,{fullWidth:!0,open:n,onClose:o},"find"===w?e.createElement(e.Fragment,null,e.createElement(N,{className:g.title},"Ajouter une relation"),e.createElement(A,{className:g.addForm},e.createElement(L,{autoFocus:!0,label:"Rechercher ou créer des "+S(b,2).toLowerCase(),variant:"filled",margin:"dense",value:y,onChange:function(e){return v(e.target.value)},fullWidth:!0})),e.createElement(A,{className:g.listForm},e.createElement(fe,{keyword:y,source:d,reference:b,appendLink:z,switchToCreate:function(){return O("create")}})),e.createElement(P,{className:g.actions},e.createElement(p,{label:"ra.action.close",variant:"text",onClick:o}))):e.createElement(F,{onSubmit:W,initialValues:{title:y},render:function(t){var r=t.handleSubmit,n=t.submitting;return e.createElement("form",{onSubmit:r},e.createElement(N,{className:g.title},k("ra.page.create",{name:S(b,1)})),e.createElement(A,{className:g.addForm},e.createElement(I,{autoFocus:!0,id:"title",name:"title",component:be,label:"Titre",disabled:n,variant:"filled",margin:"dense"})),e.createElement(P,{className:g.actions},e.createElement(p,{label:"ra.action.create",variant:"contained",startIcon:e.createElement(R,null),type:"submit",disabled:n}),e.createElement(p,{label:"ra.action.close",variant:"text",onClick:o})))}}))},he=["record","reference","source","resource"],ye=function(n){var a=n.record,o=n.reference,l=n.source,i=n.resource,c=te(n,he),u=re(t(!1),2),s=u[0],m=u[1],f=d(a.id).permissions,p=r((function(){return!!f&&f.some((function(e){return["acl:Append","acl:Write","acl:Control"].includes(e["acl:mode"])}))}),[f]);return null!=a&&a[l]&&(Array.isArray(a[l])||(a[l]=[a[l]]),a[l]=a[l].map((function(e){return e["@id"]||e.id||e}))),e.createElement(e.Fragment,null,e.createElement(b,ee({record:a,reference:o,source:l,resource:i,appendLink:p?function(){return m(!0)}:void 0},c)),p&&s&&e.createElement(ge,{open:s,onClose:function(){return m(!1)},subjectUri:a.id,resource:i,source:l,reference:o}))};ye.defaultProps={addLabel:!0};var ve={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ee=e.createContext&&e.createContext(ve),we=function(){return(we=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},Oe=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function xe(t){return function(r){return e.createElement(ke,we({attr:we({},t.attr)},r),function t(r){return r&&r.map((function(r,n){return e.createElement(r.tag,we({key:n},r.attr),t(r.child))}))}(t.child))}}function ke(t){var r=function(r){var n,a=t.attr,o=t.size,l=t.title,i=Oe(t,["attr","size","title"]),c=o||r.size||"1em";return r.className&&(n=r.className),t.className&&(n=(n?n+" ":"")+t.className),e.createElement("svg",we({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,i,{className:n,style:we(we({color:t.color||r.color},r.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&e.createElement("title",null,l),t.children)};return void 0!==Ee?e.createElement(Ee.Consumer,null,(function(e){return r(e)})):r(ve)}function je(e){return xe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"}}]})(e)}var Te=["source","domainMapping"],Ce={"github.com":{label:"GitHub",icon:e.createElement(H,null),color:"black",contrastText:"white"},"gitlab.com":{label:"GitLab",icon:e.createElement(je,null),color:"orange",contrastText:"black"},"opencollective.com":{label:"Open Collective",icon:e.createElement(y,{src:"https://opencollective.com/static/images/opencollective-icon.svg"}),color:"white",contrastText:"#297EFF"},"facebook.com":{label:"Facebook",icon:e.createElement(G,null),color:"#4267B2",contrastText:"white"},"twitter.com":{label:"Twitter",icon:e.createElement(V,null),color:"#00ACEE",contrastText:"white"},"instagram.com":{label:"Instagram",icon:e.createElement(Y,null),color:"#8a3ab9",contrastText:"white"},"youtube.com":{label:"YouTube",icon:e.createElement($,null),color:"#FF0000",contrastText:"white"}},Ne=g((function(e){return{link:{textDecoration:"unset","& :hover":{cursor:"pointer"}},chip:{paddingLeft:5,paddingRight:5,marginRight:5},label:{marginTop:-1}}})),Ae=function(t){var r=t.source,n=t.domainMapping,a=te(t,Te),l=K(K({},Ce),n),i=o(),c=Ne();return(i[r]?Array.isArray(i[r])?i[r]:[i[r]]:[]).map((function(t,r){t.startsWith("http")||(t="https://"+t);var n=new URL(t);if(!n)return null;var o=l[n.hostname]||{label:"Site web",icon:e.createElement(q,null),color:"#ea",contrastText:"black"};return e.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:c.link},e.createElement(v,ee({},a,{icon:e.cloneElement(o.icon,{style:{color:o.contrastText}}),size:"small",label:o.label,classes:{root:c.chip,label:c.label},style:{color:o.contrastText,backgroundColor:o.color}})))}))};Ae.defaultProps={addLabel:!0};export{ue as AvatarWithLabelField,Ae as MultiUrlField,ye as QuickAppendReferenceArrayField};
//# sourceMappingURL=index.es.js.map
