(window.webpackJsonp=window.webpackJsonp||[]).push([[37,40,41,68,69,71,72,73],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("NmYn"),b=a.n(o),c=a("Wbzz"),i=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),p=a.n(m),u=a("qKvR"),j=function(e){var t,a=e.title,r=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===r,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},O=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,r=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,o=n.baseUrl,b=n.subDirectory,i=o+"/edit/"+n.branch+b+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),f=a("dI71"),h=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),o=a===n,i=new RegExp(n+"/?(#.*)?$"),l=r.replace(i,a);return Object(u.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=o,t),h.listItem)},Object(u.b)(c.Link,{className:h.link,to:""+l},e))}));return Object(u.b)("div",{className:h.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:h.list},o))))))},t}(n.a.Component),v=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,m=t.titleType,p=s.tabs,O=s.title,f=s.theme,h=s.description,P=s.keywords,w=Object(T.a)().interiorTheme,k=Object(c.useStaticQuery)("2456312558").site.pathPrefix,y=k?r.pathname.replace(k,""):r.pathname,I=p?y.split("/").filter(Boolean).slice(-1)[0]||b()(p[0],{lower:!0}):"",C=f||w;return Object(u.b)(l.a,{tabs:p,homepage:!1,theme:C,pageTitle:O,pageDescription:h,pageKeywords:P,titleType:m},Object(u.b)(j,{title:n?Object(u.b)(n,null):O,label:"label",tabs:p,theme:C}),p&&Object(u.b)(N,{title:O,slug:y,tabs:p,currentTab:I}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(x,{relativePagePath:d})),Object(u.b)(g.a,{pageContext:t,location:r,slug:y,tabs:p,currentTab:I}),Object(u.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},fPf4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return m}));var r,n=a("wx14"),o=a("zLVn"),b=(a("q1tI"),a("7ljp")),c=a("013z"),i=(a("qKvR"),{}),l=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),s={_frontmatter:i},d=c.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(b.b)(d,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(l,{mdxType:"PageDescription"},Object(b.b)("p",null,"The DemoHub for Cloud Pak for Integration is the place to find demos for Cloud Pak for Integration."),Object(b.b)("p",null,"IBM Cloud Pak for Integration offers a complete set of integration capabilities to efficiently connect your applications and data wherever they live")),Object(b.b)("h2",null,"Demos offered"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Sales Demos")," – open ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../salesdemos/"}),"salesdemos")," to read more.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Learn with Labs")," – open ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../tutorials/"}),"tutorials")," to read more.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Community resources")," – open ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../community/"}),"community")," to read more.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"References")," – open ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"../resources/"}),"resources")," to read more."))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-index-mdx-859175e82b20bb43f0d6.js.map