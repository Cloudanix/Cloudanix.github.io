"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[34693],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=i(r),f=l,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,c=new Array(o);c[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,c[1]=a;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},77417:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return d}});var n=r(83117),l=r(80102),o=(r(67294),r(3905)),c=["components"],a={slug:"s3_allows_full_control",title:"S3 Bucket Should Not Allow Public FULL_CONTROL Access",sidebar_label:"S3 Bucket Should Not Allow Public FULL_CONTROL Access"},u=void 0,i={unversionedId:"aws/audit/s3publiccheck/rules/s3_allows_full_control",id:"aws/audit/s3publiccheck/rules/s3_allows_full_control",title:"S3 Bucket Should Not Allow Public FULL_CONTROL Access",description:"Back",source:"@site/docs/aws/audit/s3publiccheck/rules/s3_allows_full_control.md",sourceDirName:"aws/audit/s3publiccheck/rules",slug:"/aws/audit/s3publiccheck/rules/s3_allows_full_control",permalink:"/aws/audit/s3publiccheck/rules/s3_allows_full_control",draft:!1,tags:[],version:"current",frontMatter:{slug:"s3_allows_full_control",title:"S3 Bucket Should Not Allow Public FULL_CONTROL Access",sidebar_label:"S3 Bucket Should Not Allow Public FULL_CONTROL Access"}},s={},d=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],p={toc:d};function f(e){var t=e.components,r=(0,l.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"../../s3publiccheck"},"Back"))),(0,o.kt)("h3",{id:"more-info"},"More Info:"),(0,o.kt)("p",null,"There should not be any publicly accessible S3 buckets available in your AWS account in order to protect your S3 data from loss and unauthorized access."),(0,o.kt)("h3",{id:"risk-level"},"Risk Level"),(0,o.kt)("p",null,"High"),(0,o.kt)("h3",{id:"address"},"Address"),(0,o.kt)("p",null,"Security"),(0,o.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,o.kt)("p",null,"CBP"),(0,o.kt)("h3",{id:"additional-reading"},"Additional Reading:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/access-control-overview.html"},"https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/access-control-overview.html"))))}f.isMDXComponent=!0}}]);