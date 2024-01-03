"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6241],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1354:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={title:"Contribute to the documentation"},l=void 0,u={unversionedId:"contribute/documentation",id:"contribute/documentation",title:"Contribute to the documentation",description:"We use Docusaurus to document the SemApps project. Docusaurus is used to generate documentation from Github :",source:"@site/docs/contribute/documentation.md",sourceDirName:"contribute",slug:"/contribute/documentation",permalink:"/docs/contribute/documentation",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/contribute/documentation.md",tags:[],version:"current",frontMatter:{title:"Contribute to the documentation"},sidebar:"contribute",previous:{title:"Coding conventions",permalink:"/docs/contribute/coding-conventions"},next:{title:"Style Guide",permalink:"/docs/contribute/style-guide"}},p={},c=[{value:"Where to find the Docusaurus files",id:"where-to-find-the-docusaurus-files",level:2},{value:"How to contribute to the documentation",id:"how-to-contribute-to-the-documentation",level:2},{value:"General scheme",id:"general-scheme",level:3},{value:"Propose topics or improvements by creating an &quot;issue&quot;",id:"propose-topics-or-improvements-by-creating-an-issue",level:3},{value:"Modify a page of Docusaurus",id:"modify-a-page-of-docusaurus",level:3},{value:"Create a new page on Docusaurus",id:"create-a-new-page-on-docusaurus",level:3},{value:"Getting help",id:"getting-help",level:2}],m={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," to document the SemApps project. Docusaurus is used to generate documentation from Github :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We benefit from the collaborative environment of Github (markdown editing, versioning, commits, pull requests, reviews, etc.)."),(0,i.kt)("li",{parentName:"ul"},"You can preview the changes"),(0,i.kt)("li",{parentName:"ul"},"The code can be easily deployed")),(0,i.kt)("h2",{id:"where-to-find-the-docusaurus-files"},"Where to find the Docusaurus files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"documentation files")," in markdown are in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/assemblee-virtuelle/semapps/tree/master/website/docs"},"/website/docs/")," folder, or in french in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/assemblee-virtuelle/semapps/tree/master/website/i18n/fr/docusaurus-plugin-content-docs"},"/website/i18n/fr/docusaurus-plugin-content-docs/")," folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"configurations")," to customize the  ",(0,i.kt)("strong",{parentName:"p"},"menu")," (navbar), the ",(0,i.kt)("strong",{parentName:"p"},"header")," (title and tagline) and the ",(0,i.kt)("strong",{parentName:"p"},"footer")," are in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/assemblee-virtuelle/semapps/blob/master/website/docusaurus.config.js"},"/website/docusaurus.config.js")," file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the ",(0,i.kt)("strong",{parentName:"p"},"translation")," files (for exemple 'fr') are in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/assemblee-virtuelle/semapps/blob/master/website/i18n/fr/"},"/website/i18n/fr/")," folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"content of the homepage")," (coded in React) is in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/assemblee-virtuelle/semapps/blob/master/website/src/pages/index.js"},"/website/src/pages/index.js"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"sidebars")," can be customized by modifying the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/assemblee-virtuelle/semapps/blob/master/website/sidebars.js"},"/website/sidebars.js")," file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"blog")," is a plugin we found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/assemblee-virtuelle/semapps/tree/master/website/blog"},"/website/blog/"),", or in french in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/assemblee-virtuelle/semapps/tree/master/website/i18n/fr/docusaurus-plugin-content-blog"},"/website/i18n/fr/docusaurus-plugin-content-blog/")," folder."))),(0,i.kt)("h2",{id:"how-to-contribute-to-the-documentation"},"How to contribute to the documentation"),(0,i.kt)("h3",{id:"general-scheme"},"General scheme"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Until there is a decision/consent from the documentation circle: ",(0,i.kt)("strong",{parentName:"li"},"Create an issue")),(0,i.kt)("li",{parentName:"ul"},"If the content of what you want to publish has been approved by the documentation group :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Create a pull request on a dedicated branch."),"  "),(0,i.kt)("li",{parentName:"ul"},"As long as it's in draft or draft form, ",(0,i.kt)("strong",{parentName:"li"},"don't request a review"),"."))),(0,i.kt)("li",{parentName:"ul"},"When our proposal for a contribution appears to be complete, ",(0,i.kt)("strong",{parentName:"li"},"a review is requested"),".")),(0,i.kt)("h3",{id:"propose-topics-or-improvements-by-creating-an-issue"},'Propose topics or improvements by creating an "issue"'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/assemblee-virtuelle/semapps/issues"},"https://github.com/assemblee-virtuelle/semapps/issues")),(0,i.kt)("li",{parentName:"ul"},"Detail your request/proposal, put links if necessary to clarify your intention as much as possible.  "),(0,i.kt)("li",{parentName:"ul"},'Fill in the external / internal / technical documentation label from the "Labels" tab of the menu on the right-hand side of the screen.'),(0,i.kt)("li",{parentName:"ul"},"And let's discuss it!")),(0,i.kt)("h3",{id:"modify-a-page-of-docusaurus"},"Modify a page of Docusaurus"),(0,i.kt)("p",null,"Go to the relevant place by referring to the previous chapter."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'If it is a minor modification, a spelling mistake for example, make the change by editing the page (edit file), then "commit" to the ',(0,i.kt)("strong",{parentName:"li"},"Master")," branch. Describe your change in the space provided."),(0,i.kt)("li",{parentName:"ul"},"If it is a substantial change :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"make the change by editing the page,"),(0,i.kt)("li",{parentName:"ul"},'then "commit" to a new branch that you can explicitly name.'),(0,i.kt)("li",{parentName:"ul"},"Fill in a ",(0,i.kt)("strong",{parentName:"li"},"Label")," and identify ",(0,i.kt)("strong",{parentName:"li"},"Reviewers")," who will be invited to comment / approve / propose changes to your pull request."),(0,i.kt)("li",{parentName:"ul"},"At the end of this collective process, it will be time to ",(0,i.kt)("strong",{parentName:"li"},"merger")," the pull request on the ",(0,i.kt)("strong",{parentName:"li"},"Master")," branch.")))),(0,i.kt)("h3",{id:"create-a-new-page-on-docusaurus"},"Create a new page on Docusaurus"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Propose an issue ;")),(0,i.kt)("p",null,"If the initiative seems relevant:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Create a markdown file in the desired location, remembering to fill in the extension: ".md". It must necessarily begin with :'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"---\ntitle: [your page title]\n---\n")),(0,i.kt)("p",{parentName:"li"},"NB: The page title may have spaces. On the other hand, the name of the .md file must not have spaces, and must be written in lower case.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Commit and make a pull request on a dedicated branch.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once the reviewers you've identified have validated it, merge the pull request on the master branch."))),(0,i.kt)("h2",{id:"getting-help"},"Getting help"),(0,i.kt)("p",null,"Our ",(0,i.kt)("a",{parentName:"p",href:"https://chat.lescommuns.org/channel/semapps_dev"},"Semapps dev channel")," is the main entry point for all people who want to contribute."))}h.isMDXComponent=!0}}]);