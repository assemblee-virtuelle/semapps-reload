"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-admin"),r=require("@material-ui/core"),a=require("@material-ui/icons/Launch"),n=require("react-final-form"),l=require("@material-ui/icons/Add"),o=require("react-redux"),i=require("lodash.debounce"),u=require("@material-ui/icons/Visibility"),c=require("@material-ui/icons/Error"),s=require("@semapps/semantic-data-provider"),d=require("@material-ui/icons/Language"),f=require("@material-ui/icons/GitHub"),m=require("react-icons/fi");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var b=p(e),g=p(a),y=p(l),h=p(i),v=p(u),E=p(c),x=p(d),w=p(f);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r,a,n,l,o){try{var i=e[l](o),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}function L(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var l=e.apply(t,r);function o(e){A(l,a,n,o,i,"next",e)}function i(e){A(l,a,n,o,i,"throw",e)}o(void 0)}))}}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,l=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){i=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw n}}return l}(e,t)||P(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||P(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var R=["label","defaultLabel","image","fallback","externalLink","labelColor","classes"],D=r.makeStyles((function(e){return{parent:function(e){return O({position:"relative"},e.parent)},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},chip:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:3,paddingBottom:3,paddingLeft:6,paddingRight:6,marginBottom:10,cursor:"pointer"},launchIcon:{width:14}}})),F=function(){},q=function(e){var a=e.label,n=e.defaultLabel,l=e.image,o=e.fallback,i=e.externalLink,u=e.labelColor,c=e.classes,s=S(e,R);c=D(c);var d=t.useRecordContext(),f=("function"==typeof a?a(d):d[a])||n,m="function"==typeof l?l(d):d[l],p="function"==typeof o?o(d):o;return b.default.createElement(r.Box,{className:c.parent},b.default.createElement("div",{className:c.square},b.default.createElement(r.Avatar,T({src:m||p,alt:f,fallback:p,className:c.avatar},s))),i?b.default.createElement(r.Chip,{color:u,className:c.chip,size:"small",label:f,deleteIcon:b.default.createElement(g.default,{className:c.launchIcon}),onDelete:F}):b.default.createElement(r.Chip,{color:u,className:c.chip,size:"small",label:f}))};q.defaultProps={labelColor:"secondary",externalLink:!1};var M=r.makeStyles((function(e){return{root:{width:"100%",maxWidth:"100%",backgroundColor:e.palette.background.paper,paddingTop:0,paddingBottom:0},primaryText:{width:"30%"},secondaryText:{fontStyle:"italic",color:"grey"}}})),B=function(e,t){var r=t&&Object.values(t).find((function(t){return e.startsWith(t.baseUrl)}));return r?r.name:"Inconnu"},W=function(a){var n,l=a.keyword,i=a.source,u=a.reference,c=a.appendLink,d=a.switchToCreate,f=M(),m=j(e.useState(!1),2),p=m[0],g=m[1],x=j(e.useState(!1),2),w=x[0],k=x[1],O=j(e.useState([]),2),A=O[0],L=O[1],C=t.useTranslate(),T=t.useDataProvider(),S=s.useDataServers(),I=t.useRecordContext(),P=o.useSelector(t.getResources,o.shallowEqual),N=e.useMemo((function(){return P.find((function(e){return e.name===u}))}),[P,u]),R=t.useGetResourceLabel(),D=s.useDataModel(u);if(D&&Object.keys(D).length>0&&(null==D||null===(n=D.fieldsMapping)||void 0===n||!n.title))throw new Error("No fieldsMapping.title config found for ".concat(u," dataModel"));var F=e.useMemo((function(){return h.default((function(e){var t;T.getList(u,{pagination:{page:1,perPage:100},sort:{field:null==D||null===(t=D.fieldsMapping)||void 0===t?void 0:t.title,order:"ASC"},filter:{q:e,_servers:"@all"}}).then((function(e){var t=e.data,r=I[i]?Array.isArray(I[i])?I[i]:[I[i]]:[],a=t.filter((function(e){return!r.includes(e.id)}));L(a),k(!0),g(!1)})).catch((function(e){g(!1)}))}),700)}),[T,D,I,i,u,L,g,k]);return e.useEffect((function(){if(l)return g(!0),k(!1),F(l),function(){return F.cancel()}}),[l,F,g]),l?b.default.createElement(r.List,{dense:!0,className:f.root},w&&A.map((function(e){return b.default.createElement(r.ListItem,{key:e.id,button:!0,onClick:function(){return c(e.id)}},b.default.createElement(r.ListItemAvatar,null,b.default.createElement(r.Avatar,null,b.default.createElement(N.icon))),b.default.createElement(r.ListItemText,{className:f.primaryText,primary:e[D.fieldsMapping.title]}),b.default.createElement(r.ListItemText,{className:f.secondaryText,primary:B(e.id,S)}),b.default.createElement(r.ListItemSecondaryAction,null,b.default.createElement("a",{href:t.linkToRecord("/"+u,e.id,"show"),target:"_blank",rel:"noopener noreferrer"},b.default.createElement(r.IconButton,{edge:"end"},b.default.createElement(v.default,null)))))})),w&&0===A.length&&b.default.createElement(r.ListItem,null,b.default.createElement(r.ListItemAvatar,null,b.default.createElement(r.Avatar,null,b.default.createElement(E.default,null))),b.default.createElement(r.ListItemText,{className:f.primaryText,primary:C("ra.navigation.no_results")})),w&&N.hasCreate&&b.default.createElement(r.ListItem,{button:!0,onClick:d},b.default.createElement(r.ListItemAvatar,null,b.default.createElement(r.Avatar,null,b.default.createElement(y.default,null))),b.default.createElement(r.ListItemText,{className:f.primaryText,primary:C("ra.page.create",{name:R(u,1)})})),p&&b.default.createElement(r.Box,{display:"flex",alignItems:"center",justifyContent:"center",height:150},b.default.createElement(r.CircularProgress,{size:60,thickness:6}))):null},G=["meta","input"],U=r.makeStyles((function(){return{title:{paddingBottom:8},actions:{padding:15},addForm:{paddingTop:0},listForm:{paddingLeft:8,paddingRight:8,paddingTop:0,paddingBottom:0,maxHeight:210}}})),_=function(e){var t=e.meta,a=t.touched,n=t.error,l=e.input,o=S(e,G);return b.default.createElement(r.TextField,T({error:!(!a||!n),helperText:a&&n},l,o,{fullWidth:!0}))},z=function(a){var l=a.open,o=a.onClose,i=a.subjectUri,u=a.resource,c=a.source,d=a.reference,f=U(),m=j(e.useState(""),2),p=m[0],g=m[1],h=j(e.useState("find"),2),v=h[0],E=h[1],x=t.useDataProvider(),w=t.useTranslate(),k=t.useRefresh(),A=t.useNotify(),T=t.useGetResourceLabel(),S=s.useDataModel(d),P=e.useCallback(function(){var e=L(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getOne(u,{id:i});case 2:return r=e.sent,a=r.data,e.next=6,x.update(u,{id:i,data:O(O({},a),{},C({},c,a[c]?Array.isArray(a[c])?[].concat(I(a[c]),[t]):[a[c],t]:t)),previousData:a});case 6:k(),o();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[x,i,u,c,k,o]),N=e.useCallback(function(){var e=L(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.create(d,{data:C({},S.fieldsMapping.title,t.title)});case 2:return r=e.sent,a=r.data,e.next=6,P(a.id);case 6:A('La resource "'.concat(t.title,'" a été créée'),"success");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[x,S,P,d,A]);return b.default.createElement(r.Dialog,{fullWidth:!0,open:l,onClose:o},"find"===v?b.default.createElement(b.default.Fragment,null,b.default.createElement(r.DialogTitle,{className:f.title},"Ajouter une relation"),b.default.createElement(r.DialogContent,{className:f.addForm},b.default.createElement(r.TextField,{autoFocus:!0,label:"Rechercher ou créer des "+T(d,2).toLowerCase(),variant:"filled",margin:"dense",value:p,onChange:function(e){return g(e.target.value)},fullWidth:!0})),b.default.createElement(r.DialogContent,{className:f.listForm},b.default.createElement(W,{keyword:p,source:c,reference:d,appendLink:P,switchToCreate:function(){return E("create")}})),b.default.createElement(r.DialogActions,{className:f.actions},b.default.createElement(t.Button,{label:"ra.action.close",variant:"text",onClick:o}))):b.default.createElement(n.Form,{onSubmit:N,initialValues:{title:p},render:function(e){var a=e.handleSubmit,l=e.submitting;return b.default.createElement("form",{onSubmit:a},b.default.createElement(r.DialogTitle,{className:f.title},w("ra.page.create",{name:T(d,1)})),b.default.createElement(r.DialogContent,{className:f.addForm},b.default.createElement(n.Field,{autoFocus:!0,id:"title",name:"title",component:_,label:"Titre",disabled:l,variant:"filled",margin:"dense"})),b.default.createElement(r.DialogActions,{className:f.actions},b.default.createElement(t.Button,{label:"ra.action.create",variant:"contained",startIcon:b.default.createElement(y.default,null),type:"submit",disabled:l}),b.default.createElement(t.Button,{label:"ra.action.close",variant:"text",onClick:o})))}}))},H=["record","reference","source","resource"],V=function(r){var a=r.record,n=r.reference,l=r.source,o=r.resource,i=S(r,H),u=j(e.useState(!1),2),c=u[0],s=u[1],d=t.usePermissionsOptimized(a.id).permissions,f=e.useMemo((function(){return!!d&&d.some((function(e){return["acl:Append","acl:Write","acl:Control"].includes(e["acl:mode"])}))}),[d]);return null!=a&&a[l]&&(Array.isArray(a[l])||(a[l]=[a[l]]),a[l]=a[l].map((function(e){return e["@id"]||e.id||e}))),b.default.createElement(b.default.Fragment,null,b.default.createElement(t.ReferenceArrayField,T({record:a,reference:n,source:l,resource:o,appendLink:f?function(){return s(!0)}:void 0},i)),f&&c&&b.default.createElement(z,{open:c,onClose:function(){return s(!1)},subjectUri:a.id,resource:o,source:l,reference:n}))};V.defaultProps={addLabel:!0};var Q=["source","domainMapping"],$={"github.com":{label:"GitHub",icon:b.default.createElement(w.default,null),color:"black",contrastText:"white"},"gitlab.com":{label:"GitLab",icon:b.default.createElement(m.FiGitlab,null),color:"orange",contrastText:"black"},"opencollective.com":{label:"Open Collective",icon:b.default.createElement(r.Avatar,{src:"https://opencollective.com/static/images/opencollective-icon.svg"}),color:"white",contrastText:"#297EFF"}},J=r.makeStyles((function(e){return{link:{textDecoration:"unset","& :hover":{cursor:"pointer"}},chip:{paddingLeft:5,paddingRight:5,marginRight:5},label:{marginTop:-1}}})),K=function(e){var a=e.source,n=e.domainMapping,l=S(e,Q),o=O(O({},$),n),i=t.useRecordContext(),u=J();return(i[a]?Array.isArray(i[a])?i[a]:[i[a]]:[]).map((function(e,t){e.startsWith("http")||(e="https://"+e);var a=new URL(e);if(!a)return null;var n=o[a.hostname]||{label:"Site web",icon:b.default.createElement(x.default,null),color:"#ea",contrastText:"black"};return b.default.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:u.link},b.default.createElement(r.Chip,T({icon:b.default.cloneElement(n.icon,{style:{color:n.contrastText}}),size:"small",label:n.label,classes:{root:u.chip,label:u.label},style:{color:n.contrastText,backgroundColor:n.color}},l)))}))};K.defaultProps={addLabel:!0},exports.AvatarWithLabelField=q,exports.MultiUrlField=K,exports.QuickAppendReferenceArrayField=V;
//# sourceMappingURL=index.cjs.js.map
