(window.webpackJsonp=window.webpackJsonp||[]).push([[31,52,53,55,56,57],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,i=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),f=a("dI71"),h=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),b=a===r,i=new RegExp(r+"/?(#.*)?$"),c=n.replace(i,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=b,t),h.listItem)},Object(p.b)(l.Link,{className:h.link,to:""+c},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},b))))))},t}(r.a.Component),k=a("MjG9"),v=a("CzIb"),N=a("Asxa"),w=a("OIbQ"),P=a.n(w),I=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(N.c,{className:P.a.row},Object(p.b)(N.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,f=s.theme,h=s.description,N=s.keywords,w=s.date,P=Object(v.a)().interiorTheme,y=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=y?n.pathname.replace(y,""):n.pathname,D=m?C.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",E=f||P;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:E,pageTitle:O,pageDescription:h,pageKeywords:N,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):O,label:"label",tabs:m,theme:E}),m&&Object(p.b)(T,{title:O,slug:C,tabs:m,currentTab:D}),Object(p.b)(k.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(I,{date:w})),Object(p.b)(g.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:D}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gvkL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),["components"]),i={},c={_frontmatter:i},s=o.a;function d(e){var t=e.components,a=Object(r.a)(e,l);return Object(b.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Basic Docker, Kubernetes and Red Hat OpenShift Container Platform (OCP) Labs"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("a",{parentName:"li",href:"/app-mod/labs/basic-labs/dk0100-docker101/"},"DK0100 - Docker Introduction")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("a",{parentName:"li",href:"/app-mod/labs/basic-labs/dk0200-kubernetes101/"},"DK0200 - Kubernetes Introduction")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("a",{parentName:"li",href:"/app-mod/labs/basic-labs/dk0300-ocp101/"},"DK0300 - OCP Introduction"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-labs-basic-labs-index-mdx-b16141f161f5f5f8801d.js.map