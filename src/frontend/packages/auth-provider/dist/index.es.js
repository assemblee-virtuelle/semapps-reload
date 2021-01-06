import e from"jwt-decode";import t,{createElement as n,forwardRef as r,useState as o}from"react";import{useNotify as i,useLogin as a,Notification as c,useLogout as l,useGetIdentity as m,MenuItemLink as u}from"react-admin";import{ThemeProvider as s}from"@material-ui/styles";import{makeStyles as f,createMuiTheme as d}from"@material-ui/core/styles";import{Card as p,Avatar as h,CardActions as g,Button as y,Box as v,Menu as w}from"@material-ui/core";import I from"@material-ui/icons/Lock";import k from"@material-ui/core/MenuItem";import b from"@material-ui/icons/PowerSettingsNew";import C from"@material-ui/icons/ArrowDropDown";import E from"@material-ui/icons/Edit";import S from"@material-ui/icons/AccountCircle";var A=function(t){return{login:function(e){return window.location.href="".concat(t,"auth?redirectUrl=")+encodeURIComponent(window.location.href),Promise.resolve()},logout:function(){var e=new URL(window.location.href);return window.location.href="".concat(t,"auth/logout?redirectUrl=")+encodeURIComponent(e.origin+"/#/login?logout"),Promise.resolve("/")},checkAuth:function(){return localStorage.getItem("token"),Promise.resolve()},checkError:function(e){return Promise.resolve()},getPermissions:function(e){return Promise.resolve()},getIdentity:function(){var t=localStorage.getItem("token");if(t){var n=e(t),r=n.webId,o=n.name,i=n.familyName;return{id:r,fullName:"".concat(o," ").concat(i)}}}}},N=f((function(e){return{main:{display:"flex",flexDirection:"column",minHeight:"100vh",alignItems:"center",justifyContent:"flex-start",backgroundColor:e.palette.primary[500]},card:{minWidth:300,marginTop:"6em"},lockIconAvatar:{margin:"1em",display:"flex",justifyContent:"center"},lockIcon:{backgroundColor:e.palette.secondary[500]},button:{width:"100%"},icon:{width:24,height:24}}})),U=function(e){var t=e.theme,r=e.history,o=e.location,l=N(),m=i(),u=a(),f=new URLSearchParams(o.search);return f.has("token")&&(localStorage.setItem("token",f.get("token")),m("Vous êtes maintenant connecté","info"),r.push("/")),f.has("logout")&&(localStorage.removeItem("token"),m("Vous êtes maintenant déconnecté","info"),r.push("/")),n(s,{theme:d(t)},n("div",{className:l.main},n(p,{className:l.card},n("div",{className:l.lockIconAvatar},n(h,{className:l.lockIcon},n(I,null))),n(g,null,n(y,{className:l.button,variant:"outlined",type:"submit",onClick:function(){return u()},startIcon:n(h,{src:"/lescommuns.jpg",className:l.icon})},"Les Communs")))),n(c,null))},x=r((function(e,n){var r=l();return t.createElement(k,{onClick:function(){return r()},ref:n},t.createElement(b,null),"   Se déconnecter")}));function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R=function(e){var n=e.logout,r=e.children,i=m().identity,a=j(o(null),2),c=a[0],l=a[1];if(!n&&!r)return null;var s=Boolean(c),f=function(){return l(null)};return t.createElement(v,{spacing:2},t.createElement(y,{variant:"outlined",onClick:function(e){return l(e.currentTarget)},endIcon:t.createElement(C,null)},i&&i.fullName?i.fullName:"Anonyme"),t.createElement(w,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:f},i&&""!==i.id?t.createElement(t.Fragment,null,t.createElement(u,{to:"/User/".concat(encodeURIComponent(i.id),"/show"),primaryText:"Voir son profil",leftIcon:t.createElement(S,null),onClick:f}),t.createElement(u,{to:"/User/".concat(encodeURIComponent(i.id),"/edit"),primaryText:"Editer son profil",leftIcon:t.createElement(E,null),onClick:f}),n):t.createElement(u,{to:"/login",primaryText:"Se connecter",onClick:f})))};export{U as LoginPage,x as LogoutButton,R as UserMenu,A as authProvider};
