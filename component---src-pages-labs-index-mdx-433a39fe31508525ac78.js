(window.webpackJsonp=window.webpackJsonp||[]).push([[43,40,50,51,53,54,55],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=a("NmYn"),i=a.n(l),b=a("Wbzz"),r=a("Xrax"),s=a("k4MR"),c=a("TSYQ"),d=a.n(c),p=a("QH2O"),m=a.n(p),u=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,o=e.tabs,l=void 0===o?[]:o;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,l=o.baseUrl,i=o.subDirectory,r=l+"/edit/"+o.branch+i+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:r},"Edit this page on GitHub"))):null},f=a("FCXl"),h=a("dI71"),g=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),l=a===o,r=new RegExp(o+"/?(#.*)?$"),s=n.replace(r,a);return Object(u.b)("li",{key:e,className:d()((t={},t[g.selectedItem]=l,t),g.listItem)},Object(u.b)(b.Link,{className:g.link,to:""+s},e))}));return Object(u.b)("div",{className:g.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:g.list},l))))))},t}(o.a.Component),N=a("MjG9"),T=a("CzIb"),k=a("Asxa"),P=a("OIbQ"),C=a.n(P),y=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(k.c,{className:C.a.row},Object(u.b)(k.a,null,Object(u.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,l=t.frontmatter,c=void 0===l?{}:l,d=t.relativePagePath,p=t.titleType,m=c.tabs,j=c.title,h=c.theme,g=c.description,k=c.keywords,P=c.date,C=Object(T.a)().interiorTheme,w=Object(b.useStaticQuery)("2456312558").site.pathPrefix,D=w?n.pathname.replace(w,""):n.pathname,I=m?D.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",A=h||C;return Object(u.b)(s.a,{tabs:m,homepage:!1,theme:A,pageTitle:j,pageDescription:g,pageKeywords:k,titleType:p},Object(u.b)(O,{title:o?Object(u.b)(o,null):j,label:"label",tabs:m,theme:A}),m&&Object(u.b)(v,{title:j,slug:D,tabs:m,currentTab:I}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(x,{relativePagePath:d}),Object(u.b)(y,{date:P})),Object(u.b)(f.a,{pageContext:t,location:n,slug:D,tabs:m,currentTab:I}),Object(u.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},snKM:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("qKvR"),["components"]),r={},s={_frontmatter:r},c=i.a;function d(e){var t=e.components,a=Object(o.a)(e,b);return Object(l.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Here are the App Modernization and DevOps PoT Labs. "),Object(l.b)("p",null,"All labs are bunsiness use case driven and they are independent of each other, you can pick and choose any lab you like to start with.  If you have any questions, please contact Dr. Yi Tang at ",Object(l.b)("a",{parentName:"p",href:"mailto:yitang@us.ibm.com"},"yitang@us.ibm.com"),"."),Object(l.b)("h2",null,"Basic Docker, Kubernetes and Red Hat OpenShift Container Platform (OCP) Labs"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/basic-labs/dk0100-docker101/"},"DK0100 - Docker Introduction")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/basic-labs/dk0200-kubernetes101/"},"DK0200 - Kubernetes Introduction")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/basic-labs/dk0300-ocp101/"},"DK0300 - OCP Introduction"))),Object(l.b)("h2",null,"App Modernization Use Case Labs"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0100-evaluation/"},"AM0100 - Evaluate existing applications using Transformation Advisor")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0200-replatform/"},"AM0200 - Re-platform an existing Java application to OCP with Transformation Advisor")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0220-replatform/"},"AM0220 - Re-platform an existing Java application to OCP using Open Liberty Operator")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/appmod-labs/am0300-rehost/"},"AM0300 - Rehost an existing Java application to OCP using WAS Base Container"))),Object(l.b)("h2",null,"Cloud Native Use Case Labs"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/cloudnative-labs/cn0100-knative-serving/"},"CN0100 - OpenShift Serverless (Knative) Introduction")),Object(l.b)("li",{parentName:"ol"},"CN0200 - Create and Deploy Cloud Native Application Using ODO 2.0 - coming soon")),Object(l.b)("h2",null,"DevOps Use Case Labs"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/devops-labs/dv0100-argocd/"},"DV0100 - Deploy application to OpenShift cluster using ArgoCD")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/devops-labs/dv0200-tekton/"},"DV0200 - Using Tekton Pipelines for CI/CD of Microservices to Red Hat OpenShift Container Platform")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/devops-labs/dv0300-devops/"},"DV0300 - Move an existing application to OCP using Transformation Advisor and Cloud Pak for Applications Pipeline"))),Object(l.b)("h2",null,"Day 2 Operation Use Case Labs"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"/app-mod/labs/day2operation-labs/d20100-istio/"},"D20100 - Learn Red Hat OpenShift Service Mesh"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-labs-index-mdx-433a39fe31508525ac78.js.map