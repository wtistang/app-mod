(window.webpackJsonp=window.webpackJsonp||[]).push([[47,42,43,70,71,73,74,75],{"013z":function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),r=a("NmYn"),i=a.n(r),o=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),l=a.n(b),d=a("QH2O"),m=a.n(d),u=a("qKvR"),p=function(e){var t,a=e.title,A=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:l()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===A,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,A=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||A,r=n.baseUrl,i=n.subDirectory,c=r+"/edit/"+n.branch+i+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},x=a("FCXl"),h=a("dI71"),f=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,A=e.slug,n=A.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===n,c=new RegExp(n+"/?(#.*)?$"),s=A.replace(c,a);return Object(u.b)("li",{key:e,className:l()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(u.b)(o.Link,{className:f.link,to:""+s},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},r))))))},t}(n.a.Component),E=a("MjG9"),v=a("CzIb"),w=a("Asxa"),N=a("OIbQ"),T=a.n(N),B=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(w.c,{className:T.a.row},Object(u.b)(w.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,A=e.location,n=e.Title,r=t.frontmatter,b=void 0===r?{}:r,l=t.relativePagePath,d=t.titleType,m=b.tabs,g=b.title,h=b.theme,f=b.description,w=b.keywords,N=b.date,T=Object(v.a)().interiorTheme,Q=Object(o.useStaticQuery)("2456312558").site.pathPrefix,P=Q?A.pathname.replace(Q,""):A.pathname,y=m?P.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",D=h||T;return Object(u.b)(s.a,{tabs:m,homepage:!1,theme:D,pageTitle:g,pageDescription:f,pageKeywords:w,titleType:d},Object(u.b)(p,{title:n?Object(u.b)(n,null):g,label:"label",tabs:m,theme:D}),m&&Object(u.b)(O,{title:g,slug:P,tabs:m,currentTab:y}),Object(u.b)(E.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:l}),Object(u.b)(B,{date:N})),Object(u.b)(x.a,{pageContext:t,location:A,slug:P,tabs:m,currentTab:y}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gYZX:function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return s})),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return u}));var A,n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),["components"]),s=function(){return Object(i.b)("span",null,"Automate customer interactions using APIs and Integration Demo")},b={},l=(A="FeatureCard",function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),d={Title:s,_frontmatter:b},m=o.a;function u(e){var t=e.components,a=Object(r.a)(e,c);return Object(i.b)(m,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{title:"Automate customer interactions using APIs and Integration Demo",color:"dark",mdxType:"FeatureCard"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.33333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgD/2gAMAwEAAhADEAAAAbpA2UEf/8QAGBAAAwEBAAAAAAAAAAAAAAAAAQIDADH/2gAIAQEAAQUCQJIc1KBm/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BSf/EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/ARn/xAAaEAACAgMAAAAAAAAAAAAAAAAAAQISETFh/9oACAEBAAY/Al0lXaM1P//EABkQAAMBAQEAAAAAAAAAAAAAAAABESFBUf/aAAgBAQABPyFfJ6E4pXN6X7n2H//aAAwDAQACAAMAAAAQf9//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QJ2f/xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QbCf/xAAaEAEAAwEBAQAAAAAAAAAAAAABACExEWGB/9oACAEBAAE/EKyGLTaEEmvNemp18lmigXT4VP/Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"banner",title:"banner",src:"/cp4i-demohub/static/c8a2a8b273a5880f3cb9787f3c60a10c/2e753/customer-service.jpg",srcSet:["/cp4i-demohub/static/c8a2a8b273a5880f3cb9787f3c60a10c/69549/customer-service.jpg 288w","/cp4i-demohub/static/c8a2a8b273a5880f3cb9787f3c60a10c/473e3/customer-service.jpg 576w","/cp4i-demohub/static/c8a2a8b273a5880f3cb9787f3c60a10c/2e753/customer-service.jpg 1152w","/cp4i-demohub/static/c8a2a8b273a5880f3cb9787f3c60a10c/92dea/customer-service.jpg 1500w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Demo Use Case"),": Access applications through APIs and Integrations"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Demo Description"),": Use Watson AI together with SaaS connectivity to Salesforce and ServiceNow to create a self-service car repair API giving customers real-time estimates and integrating directly with systems of record. The demo shows easy API creation with No-code App Connect Designer, rate limiting plans, security policies and Self-Service API consumption using the API Connect Portal"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Demo Capabilities"),": ACE Designer, ACE, APIC"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Demo Products"),": CP4I 2021.1 on ROKS 4.6"),Object(i.b)("p",null,"Here you will be able to prepare yourself to deliver this demo. To deliver this demo, follow the steps below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cp4i-demohub/salesdemos/carrepair-new/understand"},"Understand the Demo"),": Learn the Demo Scenario, check the Demo Video and review the Demo Sequence"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cp4i-demohub/salesdemos/carrepair-new/deliver"},"Deliver the Demo"),": Check the different delivery options and be ready to deliver the demo")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-salesdemos-carrepair-new-overview-mdx-fea4d7c6229be9fe18ff.js.map