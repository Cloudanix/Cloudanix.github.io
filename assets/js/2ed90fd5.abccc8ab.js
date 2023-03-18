"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[17349],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),k=o,f=p["".concat(c,".").concat(k)]||p[k]||d[k]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],u={slug:"k8s_bootdisk_encrypt",title:"Kubernetes Boot Disk Should Be Encrypted With Customer Managed Keys",sidebar_label:"Kubernetes Boot Disk Should Be Encrypted With Customer Managed Keys"},c=void 0,l={unversionedId:"gcp/audit/gcpkubemonitoring/rules/k8s_bootdisk_encrypt",id:"gcp/audit/gcpkubemonitoring/rules/k8s_bootdisk_encrypt",title:"Kubernetes Boot Disk Should Be Encrypted With Customer Managed Keys",description:"Back",source:"@site/docs/gcp/audit/gcpkubemonitoring/rules/k8s_bootdisk_encrypt.md",sourceDirName:"gcp/audit/gcpkubemonitoring/rules",slug:"/gcp/audit/gcpkubemonitoring/rules/k8s_bootdisk_encrypt",permalink:"/gcp/audit/gcpkubemonitoring/rules/k8s_bootdisk_encrypt",draft:!1,tags:[],version:"current",frontMatter:{slug:"k8s_bootdisk_encrypt",title:"Kubernetes Boot Disk Should Be Encrypted With Customer Managed Keys",sidebar_label:"Kubernetes Boot Disk Should Be Encrypted With Customer Managed Keys"}},s={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function k(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"../../gcpkubemonitoring"},"Back"))),(0,i.kt)("h3",{id:"more-info"},"More Info:"),(0,i.kt)("p",null,"Ensure that boot disk on k8 node pools are encrypted with CMK"),(0,i.kt)("h3",{id:"risk-level"},"Risk Level"),(0,i.kt)("p",null,"High"),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("p",null,"Security"),(0,i.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,i.kt)("p",null,"CBP"),(0,i.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/blog/products/containers-kubernetes/exploring-container-security-use-your-own-keys-to-protect-your-data-on-gke"},"https://cloud.google.com/blog/products/containers-kubernetes/exploring-container-security-use-your-own-keys-to-protect-your-data-on-gke"))))}k.isMDXComponent=!0}}]);