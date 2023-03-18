"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[10887],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82005:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={slug:"aws-resources-for-pricing",title:"AWS Services which determine your cost",sidebar_label:"Services towards your invoice"},u=void 0,s={unversionedId:"aws/aws-resources-for-pricing",id:"aws/aws-resources-for-pricing",title:"AWS Services which determine your cost",description:"This page covers the below topics.",source:"@site/docs/aws/aws-resources-for-pricing.md",sourceDirName:"aws",slug:"/aws/aws-resources-for-pricing",permalink:"/aws/aws-resources-for-pricing",draft:!1,tags:[],version:"current",frontMatter:{slug:"aws-resources-for-pricing",title:"AWS Services which determine your cost",sidebar_label:"Services towards your invoice"},sidebar:"sidebar",previous:{title:"SNS Audit",permalink:"/aws/audit/snsmonitoring"},next:{title:"Azure Authentication",permalink:"/azure/azure-authentication"}},c={},p=[{value:"Resources which determine your pricing",id:"resources-which-determine-your-pricing",level:3},{value:"How do we count your resources?",id:"how-do-we-count-your-resources",level:3},{value:"An example",id:"an-example",level:3},{value:"Additional FAQ",id:"additional-faq",level:3},{value:"What about Spot instances?",id:"what-about-spot-instances",level:4},{value:"What about other resources like VPC, SQS etc?",id:"what-about-other-resources-like-vpc-sqs-etc",level:4}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page covers the below topics."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resources which determine your pricing"),(0,a.kt)("li",{parentName:"ul"},"How do we count your resources?"),(0,a.kt)("li",{parentName:"ul"},"An example"),(0,a.kt)("li",{parentName:"ul"},"Additional FAQ")),(0,a.kt)("h3",{id:"resources-which-determine-your-pricing"},"Resources which determine your pricing"),(0,a.kt)("p",null,"AWS offers several services. Cloudanix monitors many of these services. However, we do not consider all of them to determine your Cloudanix pricing. Infact, we only use a subset of these services to generate your Cloudanix invoice."),(0,a.kt)("p",null,"The below table lists all the AWS services which makes up your Cloudanix invoice."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EC2"),(0,a.kt)("td",{parentName:"tr",align:null},"Per instance"),(0,a.kt)("td",{parentName:"tr",align:null},"Count of the nodes. Size doesn't matter.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Lambda"),(0,a.kt)("td",{parentName:"tr",align:null},"Per function"),(0,a.kt)("td",{parentName:"tr",align:null},"No dependency on invocations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"S3"),(0,a.kt)("td",{parentName:"tr",align:null},"Per bucket"),(0,a.kt)("td",{parentName:"tr",align:null},"Count of the buckets")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"KMS"),(0,a.kt)("td",{parentName:"tr",align:null},"Per key"),(0,a.kt)("td",{parentName:"tr",align:null},"Count of the keys")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RDS"),(0,a.kt)("td",{parentName:"tr",align:null},"Per node"),(0,a.kt)("td",{parentName:"tr",align:null},"Count of the nodes. Size doesn't matter.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DynamoDB"),(0,a.kt)("td",{parentName:"tr",align:null},"Per db"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"how-do-we-count-your-resources"},"How do we count your resources?"),(0,a.kt)("p",null,"We continuously monitor the resources and record the max during the month. At the end of the month, your invoice will be generated accordingly."),(0,a.kt)("h3",{id:"an-example"},"An example"),(0,a.kt)("p",null,"Let's say you got 20 EC2, 50 Lambda, 20 S3 and 4 RDS. Then your pricing per month will be"),(0,a.kt)("p",null,"(20+50+20+4) = 94 * 0.99 (for Growth plan) = $93.06 per month"),(0,a.kt)("p",null,"We simply add the count of these resources. It doesn't matter the number of your Lambda invocations or the size of your EC2 servers. They are a single unit and gets added up in the count."),(0,a.kt)("h3",{id:"additional-faq"},"Additional FAQ"),(0,a.kt)("p",null,"There is an FAQ available on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.cloudanix.com/pricing?ref=aws-resources-for-pricing"},"Pricing Page")," which answer the popular pricing related questions. Below FAQ covers AWS specific queries."),(0,a.kt)("h4",{id:"what-about-spot-instances"},"What about Spot instances?"),(0,a.kt)("p",null,"No, they are not counted."),(0,a.kt)("h4",{id:"what-about-other-resources-like-vpc-sqs-etc"},"What about other resources like VPC, SQS etc?"),(0,a.kt)("p",null,"We monitor them but we do not use them towards your pricing. They are free."),(0,a.kt)("p",null,"If you have any other questions or feedback for us, please feel free to email us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@cloudanix.com"},"support@cloudanix.com")))}m.isMDXComponent=!0}}]);