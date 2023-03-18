"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[99344],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,u=function(e,t){if(null==e)return{};var r,n,u={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(u[r]=e[r]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,u=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),b=c(r),d=u,g=b["".concat(p,".").concat(d)]||b[d]||l[d]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function d(e,t){var r=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=r.length,i=new Array(o);i[0]=b;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:u,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8973:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var n=r(83117),u=r(80102),o=(r(67294),r(3905)),i=["components"],a={slug:"gcppubsubmonitoring",title:"Pub/Sub Monitoring",sidebar_label:"Pub/Sub Monitoring"},p=void 0,c={unversionedId:"gcp/audit/gcppubsubmonitoring",id:"gcp/audit/gcppubsubmonitoring",title:"Pub/Sub Monitoring",description:"Checks performed",source:"@site/docs/gcp/audit/gcppubsubmonitoring.md",sourceDirName:"gcp/audit",slug:"/gcp/audit/gcppubsubmonitoring",permalink:"/gcp/audit/gcppubsubmonitoring",draft:!1,tags:[],version:"current",frontMatter:{slug:"gcppubsubmonitoring",title:"Pub/Sub Monitoring",sidebar_label:"Pub/Sub Monitoring"}},s={},l=[{value:"Checks performed",id:"checks-performed",level:3}],b={toc:l};function d(e){var t=e.components,r=(0,u.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"checks-performed"},"Checks performed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcppubsubmonitoring/rules/pubsub_dlq_enabled"},"PubSub Subscriptions Should Have Dead Letter Queue Enabled")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcppubsubmonitoring/rules/pubsub_topics_encrypted"},"PubSub Topics Should Be Encrypted")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcppubsubmonitoring/rules/pubsub_subscriptions_not_detached"},"PubSub Subscriptions Should Not Be Detached From Topics")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcppubsubmonitoring/rules/pubsub_dlq_topic_set"},"PubSub Subscriptions Should Have Dead Letter Queue Topic Set For Failed Messages")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcppubsubmonitoring/rules/pubsub_subscription_retain_ack_message"},"PubSub Subscriptions Should Retain Acknowledged Messages For Record Keeping")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcppubsubmonitoring/rules/pubsub_subscription_message_expiration"},"PubSub Subscriptions Should Have Set Expiration For Messages")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"gcppubsubmonitoring/rules/pubsub_subscription_message_order"},"PubSub Subscriptions Should Have Set Message Ordering To True"))))}d.isMDXComponent=!0}}]);