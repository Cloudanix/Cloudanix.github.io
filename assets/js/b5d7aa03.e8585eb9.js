"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[37730],{3905:function(e,r,t){t.d(r,{Zo:function(){return g},kt:function(){return y}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},g=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),s=c(t),y=i,b=s["".concat(l,".").concat(y)]||s[y]||p[y]||o;return t?n.createElement(b,a(a({ref:r},g),{},{components:t})):n.createElement(b,a({ref:r},g))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=s;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4667:function(e,r,t){t.r(r),t.d(r,{assets:function(){return g},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=t(83117),i=t(80102),o=(t(67294),t(3905)),a=["components"],u={slug:"gcpbigquerymonitoring",title:"BigQuery Monitoring",sidebar_label:"BigQuery Monitoring"},l=void 0,c={unversionedId:"gcp/audit/gcpbigquerymonitoring",id:"gcp/audit/gcpbigquerymonitoring",title:"BigQuery Monitoring",description:"Checks performed",source:"@site/docs/gcp/audit/gcpbigquerymonitoring.md",sourceDirName:"gcp/audit",slug:"/gcp/audit/gcpbigquerymonitoring",permalink:"/gcp/audit/gcpbigquerymonitoring",draft:!1,tags:[],version:"current",frontMatter:{slug:"gcpbigquerymonitoring",title:"BigQuery Monitoring",sidebar_label:"BigQuery Monitoring"}},g={},p=[{value:"Checks performed",id:"checks-performed",level:3}],s={toc:p};function y(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcpbigquerymonitoring/rules/bigquery_user_activity_logging_enabled"},"GCP BigQuery Should Have User Activity Logging Enabled")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcpbigquerymonitoring/rules/bigquery_audit_logging_enabled"},"GCP BigQuery Should Have Audit Logging Enabled")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcpbigquerymonitoring/rules/bigquery_table_snapshots_should_be_frequent"},"GCP BigQuery Table Snapshots Should Be Taken Frequently For Redundancy")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcpbigquerymonitoring/rules/bigquery_table_encrypted"},"GCP BigQuery Tables Should Be Encrypted")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcpbigquerymonitoring/rules/bigquery_table_encrypted_with_cmk"},"GCP BigQuery Tables Should Be Encrypted With Customer Managed Keys")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcpbigquerymonitoring/rules/bigquery_table_ignore_unknown_values"},"GCP BigQuery Tables Should Enable Ignore Unknown Values")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcpbigquerymonitoring/rules/bigquery_table_enable_table_refresh"},"GCP BigQuery Tables Should Enable Table Refresh"))))}y.isMDXComponent=!0}}]);