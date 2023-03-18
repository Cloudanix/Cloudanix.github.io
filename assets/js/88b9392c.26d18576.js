"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[56937],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),m=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(a),p=r,b=d["".concat(u,".").concat(p)]||d[p]||c[p]||i;return a?n.createElement(b,o(o({ref:t},s),{},{components:a})):n.createElement(b,o({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},194:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={slug:"lambdamonitoring",title:"Lambda Audit",sidebar_label:"Lambda Audit"},u=void 0,m={unversionedId:"aws/audit/lambdamonitoring",id:"aws/audit/lambdamonitoring",title:"Lambda Audit",description:"Checks performed",source:"@site/docs/aws/audit/lambdamonitoring.md",sourceDirName:"aws/audit",slug:"/aws/audit/lambdamonitoring",permalink:"/aws/audit/lambdamonitoring",draft:!1,tags:[],version:"current",frontMatter:{slug:"lambdamonitoring",title:"Lambda Audit",sidebar_label:"Lambda Audit"},sidebar:"sidebar",previous:{title:"Kubernetes Audit",permalink:"/aws/audit/kubernetesmonitoring"},next:{title:"RDS Audit",permalink:"/aws/audit/rdsmonitoring"}},s={},c=[{value:"Checks performed",id:"checks-performed",level:3}],d={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/admin_privilege"},"Lambda Functions Should Not Have Administrative Permissions")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/publicly_accessible"},"Lambda Functions Should Not Be Publicly Accessible")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/dlq_configured"},"AWS Lambda Should Have DLQ Configured")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/default_timeout_used"},"Lambda Functions Should Have Default Timeout Set")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/alias_present"},"Lambda Functions Should Have Aliases")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/exceeds_versions_limit"},"AWS Lambda Functions Should Not Have Too Many Versions")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/allowed_runtime"},"Lambda Functions Should Have Latest Runtime Version")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/deprecated_runtime"},"Lambda Functions Should Not Use Deprecated Versions")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/is_tracing_enabled"},"Lambda Functions Should Have Tracing Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/multiple_functions_with_same_iam"},"Multiple Functions Should Not Have The Same IAM Role")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/calls_in_cloudtrail"},"CloudTrail Should Be Enabled For AWS Lambda")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/has_tags"},"Lambda Functions Should Have Tags")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/check_cross_account_access"},"Lambda Functions Should Not Allow Cross Account Access")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"lambdamonitoring/rules/check_vpc_access"},"Lambda Should Have Access To VPC-only Resources"))))}p.isMDXComponent=!0}}]);