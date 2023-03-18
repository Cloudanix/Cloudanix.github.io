"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[45618],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=c(t),p=o,f=s["".concat(u,".").concat(p)]||s[p]||g[p]||l;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=s;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},65278:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return g}});var r=t(83117),o=t(80102),l=(t(67294),t(3905)),i=["components"],a={slug:"k8s_logging_enabled",title:"Logging Should Be Enabled",sidebar_label:"Logging Should Be Enabled"},u=void 0,c={unversionedId:"gcp/audit/gcpkubemonitoring/rules/k8s_logging_enabled",id:"gcp/audit/gcpkubemonitoring/rules/k8s_logging_enabled",title:"Logging Should Be Enabled",description:"Back",source:"@site/docs/gcp/audit/gcpkubemonitoring/rules/k8s_logging_enabled.md",sourceDirName:"gcp/audit/gcpkubemonitoring/rules",slug:"/gcp/audit/gcpkubemonitoring/rules/k8s_logging_enabled",permalink:"/gcp/audit/gcpkubemonitoring/rules/k8s_logging_enabled",draft:!1,tags:[],version:"current",frontMatter:{slug:"k8s_logging_enabled",title:"Logging Should Be Enabled",sidebar_label:"Logging Should Be Enabled"}},d={},g=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],s={toc:g};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"../../gcpkubemonitoring"},"Back"))),(0,l.kt)("h3",{id:"more-info"},"More Info:"),(0,l.kt)("p",null,"Ensures all Kubernetes clusters have logging enabled. This setting should be enabled to ensure Kubernetes control plane logs are properly recorded."),(0,l.kt)("h3",{id:"risk-level"},"Risk Level"),(0,l.kt)("p",null,"High"),(0,l.kt)("h3",{id:"address"},"Address"),(0,l.kt)("p",null,"Security"),(0,l.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,l.kt)("p",null,"PCIDSS, HIPAA, GDPR, APRA"),(0,l.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/monitoring/kubernetes-engine/legacy-stackdriver/logging"},"https://cloud.google.com/monitoring/kubernetes-engine/legacy-stackdriver/logging"))))}p.isMDXComponent=!0}}]);