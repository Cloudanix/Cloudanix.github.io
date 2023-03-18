"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[50530],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),p=a,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37329:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=["components"],l={slug:"is_ecr_vuln_scan_enabled",title:"Image Vulnerability Scanning Should Be Enabled For Amazon ECR",sidebar_label:"Image Vulnerability Scanning Should Be Enabled For Amazon ECR"},u=void 0,s={unversionedId:"aws/audit/kubernetesmonitoring/rules/is_ecr_vuln_scan_enabled",id:"aws/audit/kubernetesmonitoring/rules/is_ecr_vuln_scan_enabled",title:"Image Vulnerability Scanning Should Be Enabled For Amazon ECR",description:"Back",source:"@site/docs/aws/audit/kubernetesmonitoring/rules/is_ecr_vuln_scan_enabled.md",sourceDirName:"aws/audit/kubernetesmonitoring/rules",slug:"/aws/audit/kubernetesmonitoring/rules/is_ecr_vuln_scan_enabled",permalink:"/aws/audit/kubernetesmonitoring/rules/is_ecr_vuln_scan_enabled",draft:!1,tags:[],version:"current",frontMatter:{slug:"is_ecr_vuln_scan_enabled",title:"Image Vulnerability Scanning Should Be Enabled For Amazon ECR",sidebar_label:"Image Vulnerability Scanning Should Be Enabled For Amazon ECR"}},c={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],m={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"../../kubernetesmonitoring"},"Back"))),(0,i.kt)("h3",{id:"more-info"},"More Info:"),(0,i.kt)("p",null,"Image Vulnerability scanning should be enabled for Amazon ECR container images after being pushed to a repository. Amazon ECR image scanning helps in identifying software vulnerabilities in your container images. Amazon ECR uses the Common Vulnerabilities and Exposures (CVEs) database from the open-source Clair project and provides a list of scan findings."),(0,i.kt)("h3",{id:"risk-level"},"Risk Level"),(0,i.kt)("p",null,"High"),(0,i.kt)("h3",{id:"address"},"Address"),(0,i.kt)("p",null,"Security, Operational Maturity"),(0,i.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,i.kt)("p",null,"CBP"),(0,i.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html"},"https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html"))))}p.isMDXComponent=!0}}]);