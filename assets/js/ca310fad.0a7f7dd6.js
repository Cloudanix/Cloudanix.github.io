"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[55545],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,v=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(v,c(c({ref:r},s),{},{components:t})):n.createElement(v,c({ref:r},s))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=p;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},22809:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var n=t(83117),i=t(80102),o=(t(67294),t(3905)),c=["components"],a={slug:"server_side_encryption",title:"S3 Buckets Should Enforce Server Side Encryption",sidebar_label:"S3 Buckets Should Enforce Server Side Encryption"},l=void 0,u={unversionedId:"aws/audit/s3publiccheck/rules/server_side_encryption",id:"aws/audit/s3publiccheck/rules/server_side_encryption",title:"S3 Buckets Should Enforce Server Side Encryption",description:"Back",source:"@site/docs/aws/audit/s3publiccheck/rules/server_side_encryption.md",sourceDirName:"aws/audit/s3publiccheck/rules",slug:"/aws/audit/s3publiccheck/rules/server_side_encryption",permalink:"/aws/audit/s3publiccheck/rules/server_side_encryption",draft:!1,tags:[],version:"current",frontMatter:{slug:"server_side_encryption",title:"S3 Buckets Should Enforce Server Side Encryption",sidebar_label:"S3 Buckets Should Enforce Server Side Encryption"}},s={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function f(e){var r=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"../../s3publiccheck"},"Back"))),(0,o.kt)("h3",{id:"more-info"},"More Info:"),(0,o.kt)("p",null,"AWS S3 buckets should protect their sensitive data at rest by enforcing Server-Side Encryption (SSE)."),(0,o.kt)("h3",{id:"risk-level"},"Risk Level"),(0,o.kt)("p",null,"High"),(0,o.kt)("h3",{id:"address"},"Address"),(0,o.kt)("p",null,"Security"),(0,o.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,o.kt)("p",null,"SOC2, NIST, GDPR, HIPAA"),(0,o.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html"},"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html"))))}f.isMDXComponent=!0}}]);