"use strict";(self.webpackChunkcloudanix_docs=self.webpackChunkcloudanix_docs||[]).push([[64160],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=(n(44996),["components"]),s={},l=void 0,c={unversionedId:"aws/audit/sesmonitoring/rules/is_dkim_enabled_remediation",id:"aws/audit/sesmonitoring/rules/is_dkim_enabled_remediation",title:"is_dkim_enabled_remediation",description:"Remediation",source:"@site/docs/aws/audit/sesmonitoring/rules/is_dkim_enabled_remediation.md",sourceDirName:"aws/audit/sesmonitoring/rules",slug:"/aws/audit/sesmonitoring/rules/is_dkim_enabled_remediation",permalink:"/aws/audit/sesmonitoring/rules/is_dkim_enabled_remediation",draft:!1,tags:[],version:"current",frontMatter:{}},u={},d=[{value:"Remediation",id:"remediation",level:3},{value:"Using AWS Console",id:"using-aws-console",level:4}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"remediation"},"Remediation"),(0,a.kt)("p",null,"How to enable DKIM signing for existing AWS Simple Email Service (SES) registered identities (domains and email addresses)?"),(0,a.kt)("h4",{id:"using-aws-console"},"Using AWS Console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 1: In the navigation panel, under Identity Management section, choose either Domains or Email Addresses, depending whether you want to enable DKIM signing for a domain or an email address registered with AWS SES.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 2: Select the identity (domain or email address) that you want to configure to use DKIM signatures then click the View Details button from the dashboard top menu.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 3: On the selected identity configuration page click DKIM to expand the feature tab then click Generate DKIM Settings button to generate the necessary DNS records for enabling DKIM signatures.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 4: Once the requested DNS (CNAME) records are created copy them one by one and update the registered identity DNS zone file with the CNAME record information displayed. The DKIM Verification Status for the selected identity will change from pending verification to verified as soon as AWS SES is detecting the changes made to your DNS zone file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 5: Click (enable) next to DKIM: to enable the feature in order to sign all the email messages sent by the selected identity using a DKIM signature.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Step 6: Within Enable DKIM dialog box, click Yes, enable DKIM to confirm the action."))))}m.isMDXComponent=!0}}]);