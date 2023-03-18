"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[10950],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26622:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(83117),o=n(80102),l=(n(67294),n(3905)),i=["components"],a={slug:"sql_log_checkpoints_flag",title:"PostgreSQL Log Checkpoints Flag Should Be Disabled",sidebar_label:"PostgreSQL Log Checkpoints Flag Should Be Disabled"},c=void 0,s={unversionedId:"gcp/audit/gcpsqlmonitoring/rules/sql_log_checkpoints_flag",id:"gcp/audit/gcpsqlmonitoring/rules/sql_log_checkpoints_flag",title:"PostgreSQL Log Checkpoints Flag Should Be Disabled",description:"Back",source:"@site/docs/gcp/audit/gcpsqlmonitoring/rules/sql_log_checkpoints_flag.md",sourceDirName:"gcp/audit/gcpsqlmonitoring/rules",slug:"/gcp/audit/gcpsqlmonitoring/rules/sql_log_checkpoints_flag",permalink:"/gcp/audit/gcpsqlmonitoring/rules/sql_log_checkpoints_flag",draft:!1,tags:[],version:"current",frontMatter:{slug:"sql_log_checkpoints_flag",title:"PostgreSQL Log Checkpoints Flag Should Be Disabled",sidebar_label:"PostgreSQL Log Checkpoints Flag Should Be Disabled"}},u={},p=[{value:"More Info:",id:"more-info",level:3},{value:"Risk Level",id:"risk-level",level:3},{value:"Address",id:"address",level:3},{value:"Compliance Standards",id:"compliance-standards",level:3},{value:"Additional Reading:",id:"additional-reading",level:3}],d={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"../../gcpsqlmonitoring"},"Back"))),(0,l.kt)("h3",{id:"more-info"},"More Info:"),(0,l.kt)("p",null,"Ensure that the log_checkpoints database flag for Cloud SQL PostgreSQL instance is set to on."),(0,l.kt)("h3",{id:"risk-level"},"Risk Level"),(0,l.kt)("p",null,"Medium"),(0,l.kt)("h3",{id:"address"},"Address"),(0,l.kt)("p",null,"Security"),(0,l.kt)("h3",{id:"compliance-standards"},"Compliance Standards"),(0,l.kt)("p",null,"CIS"),(0,l.kt)("h3",{id:"additional-reading"},"Additional Reading:"))}g.isMDXComponent=!0}}]);