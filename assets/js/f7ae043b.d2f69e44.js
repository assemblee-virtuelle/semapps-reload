"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8229],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return d}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(i),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return i?n.createElement(f,o(o({ref:t},p),{},{components:i})):n.createElement(f,o({ref:t},p))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3939:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=i(3117),a=i(102),r=(i(7294),i(3905)),o=["components"],l={title:"Single Mail"},s=void 0,c={unversionedId:"middleware/notifications/single-mail",id:"middleware/notifications/single-mail",title:"Single Mail",description:"This service listen for ActivityPub activities in all users' inboxes and turns them into email notification using the ActivityMappingService.",source:"@site/docs/middleware/notifications/single-mail.md",sourceDirName:"middleware/notifications",slug:"/middleware/notifications/single-mail",permalink:"/docs/middleware/notifications/single-mail",draft:!1,editUrl:"https://github.com/assemblee-virtuelle/semapps/edit/master/website/docs/middleware/notifications/single-mail.md",tags:[],version:"current",frontMatter:{title:"Single Mail"},sidebar:"middleware",previous:{title:"Digest",permalink:"/docs/middleware/notifications/digest"},next:{title:"SPARQL endpoint",permalink:"/docs/middleware/sparql-endpoint"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"1. Add mappings for the activities",id:"1-add-mappings-for-the-activities",level:3},{value:"2. Setup the <code>SingleMailNotificationsService</code>",id:"2-setup-the-singlemailnotificationsservice",level:3}],m={toc:u};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This service listen for ActivityPub activities in all users' inboxes and turns them into email notification using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/middleware/activitypub/activity-mapping"},"ActivityMappingService"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"1-add-mappings-for-the-activities"},"1. Add mappings for the activities"),(0,r.kt)("p",null,"If you want an activity to be sent as an email notification, it must be mapped using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/middleware/activitypub/activity-mapping"},"ActivityMappingService")),(0,r.kt)("p",null,"If you use the default template provided, the following properties should be mapped:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"actionName")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"actionLink"))),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { ActivityMappingService } = require('@semapps/activitypub');\n\nmodule.exports = {\n  mixins: [ActivityMappingService],\n  settings: {\n    mappers: [\n      {\n        match: {\n          type: 'Announce',\n          object: {\n            type: 'Create',\n            object: {\n              type: 'Event'\n            }\n          }\n        },\n        mapping: {\n          title: '{{activity.object.object.name}}',\n          description: '{{activity.object.object.description}}',\n          actionName: 'View',\n          actionLink: '/Event/{{activity.object.object.url}}'\n        }\n      }\n    ]\n  }\n};\n")),(0,r.kt)("p",null,"You may map other properties, which will be available in a custom template or passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"filterNotification")," method (see below)."),(0,r.kt)("h3",{id:"2-setup-the-singlemailnotificationsservice"},"2. Setup the ",(0,r.kt)("inlineCode",{parentName:"h3"},"SingleMailNotificationsService")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { SingleMailNotificationsService } = require('@semapps/notifications');\nconst QueueMixin = require('moleculer-bull');\n\nmodule.exports = {\n  mixins: [SingleMailNotificationsService, QueueMixin('redis://localhost:6379/0')],\n  settings: {\n    defaultLocale: 'en',\n    defaultFrontUrl: 'https://mydomain.com', // Base URL for the action links\n    color: '#E2003B', // Color of the mail buttons\n    delay: 0, // Delay (in ms) before processing notifications\n    // The following settings are from the moleculer-mail mixin used to send emails\n    // See https://github.com/moleculerjs/moleculer-addons/tree/master/packages/moleculer-mail\n    from: `\"My service\" <myservice@mydomain.com>`,\n    transport: {},\n    // Directory with the template. It looks for a template named 'digest'\n    templateFolder: path.join(__dirname, '../templates'),\n    // Global data to be used in the template\n    data: {}\n  },\n  methods: {\n    // Optional method called for each notification\n    // Return true if you want the notification to be sent by email\n    async filterNotification(notification, activity, recipientUri) {\n      return true;\n    },\n    // Method called to format the actionLink prop of each notification\n    // Overwrite it if you have custom needs\n    async formatLink(link, recipientUri) {\n      if (link && !link.startsWith('http')) {\n        return urlJoin(this.settings.defaultFrontUrl, link);\n      } else {\n        return link;\n      }\n    },\n  }\n};\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you want some notifications to be sent immediately in single mails, and others in a ",(0,r.kt)("a",{parentName:"p",href:"/docs/middleware/notifications/digest"},"digest"),", you should add a new property to the mappings (for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"immediate: true/false"),") and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"filterNotification")," method in both services to differentiate the notifications.")))}d.isMDXComponent=!0}}]);