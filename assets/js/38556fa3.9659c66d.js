"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[4535],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,d=s["".concat(a,".").concat(m)]||s[m]||p[m]||i;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=s;var g={};for(var a in n)hasOwnProperty.call(n,a)&&(g[a]=n[a]);g.originalType=e,g.mdxType="string"==typeof e?e:o,l[1]=g;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},41198:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return g},metadata:function(){return u},toc:function(){return p}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),l=["components"],g={slug:"gcploggingmonitoring",title:"Log Monitoring",sidebar_label:"Log Monitoring"},a=void 0,u={unversionedId:"gcp/audit/gcploggingmonitoring",id:"gcp/audit/gcploggingmonitoring",title:"Log Monitoring",description:"Checks performed",source:"@site/docs/gcp/audit/gcploggingmonitoring.md",sourceDirName:"gcp/audit",slug:"/gcp/audit/gcploggingmonitoring",permalink:"/gcp/audit/gcploggingmonitoring",draft:!1,tags:[],version:"current",frontMatter:{slug:"gcploggingmonitoring",title:"Log Monitoring",sidebar_label:"Log Monitoring"}},c={},p=[{value:"Checks performed",id:"checks-performed",level:3}],s={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/vpc_network_route_logging"},"Network Route Change Log Alerts Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/vpc_network_logging"},"Network Change Log Alerts Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/vpc_firewall_rule_logging"},"Firewall Change Log Alerts Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/sql_configuration_logging"},"SQL Configuration Change Log Alerts Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/project_ownership_logging"},"Project Ownership Change Log Alerts Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/audit_configuration_logging"},"Audit Configuration Change Log Alerts Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/storage_permissions_logging"},"Storage Permissions Change Log Alerts Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/custom_role_logging"},"Custom Role Change Log Alerts Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/cloud_audit_logging"},"Cloud Audit Logging Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/configured_sinks"},"Sinks Should Be Configured For Log Entries")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/bucket_lock_on_log_buckets"},"Log Buckets Should Have Retention Policies")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/sql_data_access_audit_log_enabled"},"Cloud Sql Data Access Audit Logging Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/sql_admin_activity_log_enabled"},"Cloud Sql Admin Activity Audit Logging Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcploggingmonitoring/rules/sql_system_event_log_enabled"},"Cloud Sql System Event Audit Logging Should Be Enabled"))))}m.isMDXComponent=!0}}]);