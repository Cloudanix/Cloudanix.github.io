"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[19329],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41759:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],c={slug:"role_service_inactive",title:"Role Service Inactivity",sidebar_label:"Role Service Inactivity"},l=void 0,u={unversionedId:"aws/audit/iamcompliance/rules/role_service_inactive",id:"aws/audit/iamcompliance/rules/role_service_inactive",title:"Role Service Inactivity",description:"Back",source:"@site/docs/aws/audit/iamcompliance/rules/role_service_inactive.md",sourceDirName:"aws/audit/iamcompliance/rules",slug:"/aws/audit/iamcompliance/rules/role_service_inactive",permalink:"/aws/audit/iamcompliance/rules/role_service_inactive",draft:!1,tags:[],version:"current",frontMatter:{slug:"role_service_inactive",title:"Role Service Inactivity",sidebar_label:"Role Service Inactivity"}},s={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"../../iamcompliance"},"Back"))),(0,a.kt)("h3",{id:"more-info"},"More Info:"),(0,a.kt)("p",null,"Roles which have access to services but have not used in past several days should be looked into and cleaned up."),(0,a.kt)("h3",{id:"risk-level"},"Risk Level"),(0,a.kt)("p",null,"Medium"),(0,a.kt)("h3",{id:"address"},"Address"),(0,a.kt)("p",null,"Security"),(0,a.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,a.kt)("p",null,"CBP, NIST"),(0,a.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/security/continuously-monitor-unused-iam-roles-aws-config/"},"https://aws.amazon.com/blogs/security/continuously-monitor-unused-iam-roles-aws-config/"))))}m.isMDXComponent=!0}}]);