"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4681],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=l(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1218:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),p=["components"],i={title:"Input Components"},u=void 0,l={unversionedId:"frontend/input-components",id:"frontend/input-components",title:"Input Components",description:"New React-Admin inputs to be used in SemApps projects.",source:"@site/docs/frontend/input-components.md",sourceDirName:"frontend",slug:"/frontend/input-components",permalink:"/docs/frontend/input-components",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/frontend/input-components.md",tags:[],version:"current",frontMatter:{title:"Input Components"},sidebar:"frontend",previous:{title:"Geo Components",permalink:"/docs/frontend/geo-components"},next:{title:"Interop Components",permalink:"/docs/frontend/interop-components"}},c={},m=[{value:"Installation",id:"installation",level:2},{value:"Components",id:"components",level:2},{value:"ImageInput",id:"imageinput",level:3},{value:"MultiLinesInput",id:"multilinesinput",level:3},{value:"MultiServerAutocompleteInput",id:"multiserverautocompleteinput",level:3},{value:"MultiServerAutocompleteArrayInput",id:"multiserverautocompletearrayinput",level:3},{value:"ReferenceArrayInput",id:"referencearrayinput",level:3},{value:"ReferenceInput",id:"referenceinput",level:3}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"New ",(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/doc/3.19/Inputs.html"},"React-Admin inputs")," to be used in SemApps projects."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @semapps/input-components --save\n")),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("h3",{id:"imageinput"},"ImageInput"),(0,o.kt)("p",null,"To be used instead of React-Admin ",(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/ImageInput.html"},"ImageInput")," because this\ncomponent expects an object while uploads handled through SemApps return only an URL."),(0,o.kt)("h3",{id:"multilinesinput"},"MultiLinesInput"),(0,o.kt)("p",null,"A multi-lines ",(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/doc/3.19/Inputs.html#textinput"},"TextInput"),", which returns an array with\neach line as an element. Can be used with ",(0,o.kt)("a",{parentName:"p",href:"field-components"},"MultiUrlField"),"."),(0,o.kt)("h3",{id:"multiserverautocompleteinput"},"MultiServerAutocompleteInput"),(0,o.kt)("p",null,"Same as React-Admin ",(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/doc/3.19/Inputs.html#autocompleteinput"},"AutocompleteInput")," but displays the name of the data server where the resource is coming from."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ReferenceInput } from 'react-admin';\nimport { MultiServerAutocompleteInput } from '@semapps/input-components';\n\nexport const TopicInput = props => (\n  <ReferenceInput reference=\"Topic\" fullWidth>\n    <MultiServerAutocompleteInput optionText=\"label\" resettable />\n  </ReferenceInput>\n);\n")),(0,o.kt)("h3",{id:"multiserverautocompletearrayinput"},"MultiServerAutocompleteArrayInput"),(0,o.kt)("p",null,"Same as React-Admin ",(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/doc/3.19/Inputs.html#autocompletearrayinput"},"AutocompleteArrayInput"),"\nbut displays the name of the data server (in grey and italic)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ReferenceArrayInput } from 'react-admin';\nimport { MultiServerAutocompleteArrayInput } from '@semapps/input-components';\n\nexport const TopicsInput = props => (\n  <ReferenceArrayInput reference=\"Topic\" {...props}>\n    <MultiServerAutocompleteArrayInput optionText=\"label\" />\n  </ReferenceArrayInput>\n);\n")),(0,o.kt)("p",null,"To prevent the name of the server to be displayed inside the chip, you can add this to your Material-UI theme:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"overrides: {\n  RaAutocompleteArrayInput: {\n    chipContainerFilled: {\n      '& .serverName': {\n        display: 'none'\n      }\n    }\n  }\n}\n")),(0,o.kt)("h3",{id:"referencearrayinput"},"ReferenceArrayInput"),(0,o.kt)("p",null,"Same as React-Admin ",(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/doc/3.19/Inputs.html#referencearrayinput"},"ReferenceArrayInput")," but,\nif there is a single value, transform the string into an array. Also, if the value is dereferenced, only keep it's ",(0,o.kt)("inlineCode",{parentName:"p"},"@id"),"."),(0,o.kt)("h3",{id:"referenceinput"},"ReferenceInput"),(0,o.kt)("p",null,"Same as React-Admin ",(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/doc/3.19/Inputs.html#referenceinput"},"ReferenceInput")," but, if the\nvalue is dereferenced, only keep it's ",(0,o.kt)("inlineCode",{parentName:"p"},"@id"),"."))}d.isMDXComponent=!0}}]);