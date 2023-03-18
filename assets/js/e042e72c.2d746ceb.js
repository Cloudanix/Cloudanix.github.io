"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[41660],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,s=new Array(c);s[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<c;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29894:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var r=n(83117),o=n(80102),c=(n(67294),n(3905)),s=["components"],a={slug:"kms_cross_account_access",title:"KMS Cross Account Access Must Not Be Present",sidebar_label:"KMS Cross Account Access Must Not Be Present"},i=void 0,u={unversionedId:"gcp/audit/gcpkmsmonitoring/rules/kms_cross_account_access",id:"gcp/audit/gcpkmsmonitoring/rules/kms_cross_account_access",title:"KMS Cross Account Access Must Not Be Present",description:"Back",source:"@site/docs/gcp/audit/gcpkmsmonitoring/rules/kms_cross_account_access.md",sourceDirName:"gcp/audit/gcpkmsmonitoring/rules",slug:"/gcp/audit/gcpkmsmonitoring/rules/kms_cross_account_access",permalink:"/gcp/audit/gcpkmsmonitoring/rules/kms_cross_account_access",draft:!1,tags:[],version:"current",frontMatter:{slug:"kms_cross_account_access",title:"KMS Cross Account Access Must Not Be Present",sidebar_label:"KMS Cross Account Access Must Not Be Present"}},l={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("a",{parentName:"p",href:"../../gcpkmsmonitoring"},"Back"))),(0,c.kt)("h3",{id:"more-info"},"More Info:"),(0,c.kt)("p",null,"Ensure that all KMS keys are configured to be accessed only by trusted accounts in order to prevent unauthorized access"),(0,c.kt)("h3",{id:"risk-level"},"Risk Level"),(0,c.kt)("p",null,"High"),(0,c.kt)("h3",{id:"address"},"Address"),(0,c.kt)("p",null,"Security"),(0,c.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,c.kt)("p",null,"PCI, APRA, MAS, NIST"),(0,c.kt)("h3",{id:"additional-reading"},"Additional Reading:"))}m.isMDXComponent=!0}}]);