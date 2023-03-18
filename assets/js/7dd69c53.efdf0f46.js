"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[80110],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={slug:"gcpcomputemonitoring",title:"Compute Audit",sidebar_label:"Compute Audit"},u=void 0,l={unversionedId:"gcp/audit/gcpcomputemonitoring",id:"gcp/audit/gcpcomputemonitoring",title:"Compute Audit",description:"Checks performed",source:"@site/docs/gcp/audit/gcpcomputemonitoring.md",sourceDirName:"gcp/audit",slug:"/gcp/audit/gcpcomputemonitoring",permalink:"/gcp/audit/gcpcomputemonitoring",draft:!1,tags:[],version:"current",frontMatter:{slug:"gcpcomputemonitoring",title:"Compute Audit",sidebar_label:"Compute Audit"},sidebar:"sidebar",previous:{title:"CloudSql Audit",permalink:"/gcp/audit/gcpsqlmonitoring"},next:{title:"IAM Audit",permalink:"/gcp/audit/gcpiamcompliance"}},p={},s=[{value:"Checks performed",id:"checks-performed",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/os_login_enabled"},"OS Login Should Be Enabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/ip_forwarding_disabled"},"IP Forwarding Should Be Disabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/instances_multi_az"},"Instances Should Be Multi AZ")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/vm_max_instances"},"Total VMs Should Not Exceed Threshold")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/instance_level_ssh_only"},"SSH Keys Should Be Instance Specific")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/vm_instances_least_privilege"},"VM Instances Should Not Use Default Service Accounts With Full Access To Cloud APIs")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/csek_encryption_enabled"},"Customer Supplied Encryption Key Should Be Enabled For Disks")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/serial_ports_disabled"},"Serial Ports Connection Should Be Disabled")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/shielded_vm_enabled"},"Shielded VM Should Be Enabled For Compute Instances")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/compute_no_public_ip_addresses"},"Compute Instances Should Not Have Public IPs")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/compute_not_using_default_service_account"},"VM Instances Should Not Use Default Service Account")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"gcpcomputemonitoring/rules/service_limits"},"Total Resources Should Be Under Per Account Limit"))))}d.isMDXComponent=!0}}]);