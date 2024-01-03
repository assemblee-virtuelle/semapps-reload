"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7959],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,f=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5721:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={title:"Field Components"},p=void 0,d={unversionedId:"frontend/field-components",id:"frontend/field-components",title:"Field Components",description:"New React-Admin fields to be used in SemApps projects.",source:"@site/docs/frontend/field-components.md",sourceDirName:"frontend",slug:"/frontend/field-components",permalink:"/docs/frontend/field-components",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/frontend/field-components.md",tags:[],version:"current",frontMatter:{title:"Field Components"},sidebar:"frontend",previous:{title:"Date Components",permalink:"/docs/frontend/date-components"},next:{title:"Geo Components",permalink:"/docs/frontend/geo-components"}},m={},s=[{value:"Installation",id:"installation",level:2},{value:"Components",id:"components",level:2},{value:"AvatarWithLabelField",id:"avatarwithlabelfield",level:3},{value:"MultiUrlField",id:"multiurlfield",level:3},{value:"QuickAppendReferenceArrayField",id:"quickappendreferencearrayfield",level:3},{value:"ReferenceArrayField",id:"referencearrayfield",level:3},{value:"ReferenceField",id:"referencefield",level:3},{value:"SeparatedListField",id:"separatedlistfield",level:3}],c={toc:s};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"New ",(0,l.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/Fields.html"},"React-Admin fields")," to be used in SemApps projects."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @semapps/field-components --save\n")),(0,l.kt)("h2",{id:"components"},"Components"),(0,l.kt)("h3",{id:"avatarwithlabelfield"},"AvatarWithLabelField"),(0,l.kt)("p",null,"Display the user avatar in a round image and a label below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Show, SimpleShowLayout, ReferenceArrayField } from \'react-admin\';\nimport { GridList } from \'@semapps/list-components\';\nimport { AvatarWithLabelField } from \'@semapps/field-components\';\n\nconst PersonShow = props => (\n  <Show {...props}>\n    <SimpleShowLayout>\n      <ReferenceArrayField reference="Person" source="friendOf">\n        <GridList xs={6} sm={4} md={2} linkType="show">\n          <AvatarWithLabelField image="image" label="label" />\n        </GridList>\n      </ReferenceArrayField>\n    </SimpleShowLayout>\n  </Show>\n);\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"A function which takes a record and returns a label, or the property to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"A function which takes a record and returns an image, or the property to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"defaultLabel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Default label used if label is empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fallback")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A function which takes a record and returns a fallback image, or the property to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"externalLink")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, will display an icon next to the label showing this is an external link")))),(0,l.kt)("h3",{id:"multiurlfield"},"MultiUrlField"),(0,l.kt)("p",null,"Display a list of MUI ",(0,l.kt)("a",{parentName:"p",href:"https://v4.mui.com/components/chips/"},"Chips"),", with an icon, color and label which depends on the\ndomain of URLs provided. Domain mapping is provided for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Facebook"),(0,l.kt)("li",{parentName:"ul"},"Twitter"),(0,l.kt)("li",{parentName:"ul"},"Instagram"),(0,l.kt)("li",{parentName:"ul"},"YouTube"),(0,l.kt)("li",{parentName:"ul"},"GitHub"),(0,l.kt)("li",{parentName:"ul"},"GitLab"),(0,l.kt)("li",{parentName:"ul"},"OpenCollective")),(0,l.kt)("p",null,"If no mapping is found, it will display a standard chip."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4169).Z,width:"431",height:"37"})),(0,l.kt)("p",null,"You can pass your own mapping through the ",(0,l.kt)("inlineCode",{parentName:"p"},"domainMapping")," prop, with an object with this shape:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import GitHubIcon from '@material-ui/icons/GitHub';\n\nconst domainMapping = {\n  'github.com': {\n    label: 'GitHub',\n    icon: <GitHubIcon />,\n    color: 'black',\n    contrastText: 'white'\n  },\n  ...\n};\n")),(0,l.kt)("h3",{id:"quickappendreferencearrayfield"},"QuickAppendReferenceArrayField"),(0,l.kt)("p",null,"Same as React-Admin ",(0,l.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/Fields.html#referencearrayfield"},"ReferenceArrayField")," but, if the user has a ",(0,l.kt)("inlineCode",{parentName:"p"},"acl:Append")," right on the resource, he will have the possibility to add a new relationship through a modal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Show, SimpleShowLayout } from \'react-admin\';\nimport { QuickAppendReferenceArrayField } from \'@semapps/field-components\';\nimport { ChipList } from \'@semapps/list-components\';\n\nconst PersonShow = props => (\n  <Show {...props}>\n    <SimpleShowLayout>\n        <QuickAppendReferenceArrayField reference="Topic" source="interestedBy">\n          <ChipList primaryText="label" linkType="show" />\n        </QuickAppendReferenceArrayField>\n    </SimpleShowLayout>\n  </Show>\n);\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: If the user has a ",(0,l.kt)("inlineCode",{parentName:"p"},"acl:Append")," right, this component pass a ",(0,l.kt)("inlineCode",{parentName:"p"},"appendLink")," to its child. The child is responsible for displaying the link. Currently only the ",(0,l.kt)("a",{parentName:"p",href:"/docs/frontend/list-components"},"ChipList")," component display such a link (through a + icon), but you can create your own list component.")),(0,l.kt)("h3",{id:"referencearrayfield"},"ReferenceArrayField"),(0,l.kt)("p",null,"Same as React-Admin ",(0,l.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/Fields.html#referencearrayfield"},"ReferenceArrayField")," but, if there\nis a single value, transform the string into an array. Also, if the value is dereferenced, only keep it's ",(0,l.kt)("inlineCode",{parentName:"p"},"@id"),"."),(0,l.kt)("h3",{id:"referencefield"},"ReferenceField"),(0,l.kt)("p",null,"Same as React-Admin ",(0,l.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/Fields.html#referencearrayfield"},"ReferenceArrayField")," but, if the\nvalue is dereferenced, only keep it's ",(0,l.kt)("inlineCode",{parentName:"p"},"@id"),"."),(0,l.kt)("h3",{id:"separatedlistfield"},"SeparatedListField"),(0,l.kt)("p",null,"Displays a list of resources separated by a comma or another string of choice."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<ReferenceArrayField reference="Project" source="hasTopic">\n  <SeparatedListField>\n    <TextField source="label" />\n  </SeparatedListField>\n</ReferenceArrayField>\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"separator")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},'", "'),(0,l.kt)("td",{parentName:"tr",align:null},"The string used to separate the resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"link")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},'"edit"'),(0,l.kt)("td",{parentName:"tr",align:null},'"edit" or "show" to show a link, ',(0,l.kt)("inlineCode",{parentName:"td"},"false")," otherwise.")))))}u.isMDXComponent=!0},4169:function(e,t){t.Z="data:image/png;base64,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"}}]);