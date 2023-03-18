"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[86210],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,v=d["".concat(c,".").concat(p)]||d[p]||f[p]||n;return r?i.createElement(v,u(u({ref:t},s),{},{components:r})):i.createElement(v,u({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,u=new Array(n);u[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var l=2;l<n;l++)u[l]=r[l];return i.createElement.apply(null,u)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42342:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return f}});var i=r(83117),a=r(80102),n=(r(67294),r(3905)),u=["components"],o={slug:"azure_audit_keyvault_certificates_without_sufficient_renewal_period",title:"Certificates have insufficient auto renewal period",sidebar_label:"Certificates have insufficient auto renewal period"},c=void 0,l={unversionedId:"azure/audit/azurekeyvaultaudit/rules/azure_audit_keyvault_certificates_without_sufficient_renewal_period",id:"azure/audit/azurekeyvaultaudit/rules/azure_audit_keyvault_certificates_without_sufficient_renewal_period",title:"Certificates have insufficient auto renewal period",description:"Back",source:"@site/docs/azure/audit/azurekeyvaultaudit/rules/azure_audit_keyvault_certificates_without_sufficient_renewal_period.md",sourceDirName:"azure/audit/azurekeyvaultaudit/rules",slug:"/azure/audit/azurekeyvaultaudit/rules/azure_audit_keyvault_certificates_without_sufficient_renewal_period",permalink:"/azure/audit/azurekeyvaultaudit/rules/azure_audit_keyvault_certificates_without_sufficient_renewal_period",draft:!1,tags:[],version:"current",frontMatter:{slug:"azure_audit_keyvault_certificates_without_sufficient_renewal_period",title:"Certificates have insufficient auto renewal period",sidebar_label:"Certificates have insufficient auto renewal period"}},s={},f=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],d={toc:f};function p(e){var t=e.components,r=(0,a.Z)(e,u);return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"../../azurekeyvaultaudit"},"Back"))),(0,n.kt)("h3",{id:"more-info"},"More Info:"),(0,n.kt)("p",null,"In Microsoft Azure Key Vault, ensure that certificates have a sufficient auto-renewal period configured for security and compliance purposes. This period indicates the amount of time (number of days) before SSL certificate expiration, when the renewal process is automatically triggered."),(0,n.kt)("h3",{id:"risk-level"},"Risk Level"),(0,n.kt)("p",null,"Low"),(0,n.kt)("h3",{id:"address"},"Address"),(0,n.kt)("p",null,"Security"),(0,n.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,n.kt)("p",null,"CISMicrosoftAzureFoundations"),(0,n.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/key-vault/certificates/certificate-scenarios"},"https://docs.microsoft.com/en-us/azure/key-vault/certificates/certificate-scenarios"))))}p.isMDXComponent=!0}}]);