(window.webpackJsonp=window.webpackJsonp||[]).push([[39,38,49,50,52,53,54],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),d=a.n(c),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,b=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),v=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,b=new RegExp(r+"/?(#.*)?$"),s=n.replace(b,a);return Object(p.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(p.b)(l.Link,{className:v.link,to:""+s},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:v.list},o))))))},t}(r.a.Component),h=a("MjG9"),N=a("CzIb"),P=a("Asxa"),w=a("OIbQ"),k=a.n(w),I=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(P.c,{className:k.a.row},Object(p.b)(P.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,c=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=c.tabs,O=c.title,f=c.theme,v=c.description,P=c.keywords,w=c.date,k=Object(N.a)().interiorTheme,C=Object(l.useStaticQuery)("2456312558").site.pathPrefix,y=C?n.pathname.replace(C,""):n.pathname,D=m?y.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",E=f||k;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:E,pageTitle:O,pageDescription:v,pageKeywords:P,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):O,label:"label",tabs:m,theme:E}),m&&Object(p.b)(T,{title:O,slug:y,tabs:m,currentTab:D}),Object(p.b)(h.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:d}),Object(p.b)(I,{date:w})),Object(p.b)(j.a,{pageContext:t,location:n,slug:y,tabs:m,currentTab:D}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},YaIs:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),["components"]),b={},s={_frontmatter:b},c=i.a;function d(e){var t=e.components,a=Object(r.a)(e,l);return Object(o.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"DevOps Use Case Labs"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/app-mod/labs/devops-labs/dv0100-argocd/"},"DV0100 - ArgoCD Introduction")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/app-mod/labs/devops-labs/dv0100-tekton/"},"DV0200 - Using Tekton Pipelines for CI/CD of Microservices to Red Hat OpenShift Container Platform")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"/app-mod/labs/devops-labs/dv0200-devops/"},"DV0300 - Move an existing application to OCP using Transformation Advisor and Cloud Pak for Applications Pipeline"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-labs-devops-labs-index-mdx-6d0ecda50af83b228a97.js.map