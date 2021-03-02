(window.webpackJsonp=window.webpackJsonp||[]).push([[25,53,55,56],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),c=a.n(i),l=a("NmYn"),o=a.n(l),n=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),r=a("TSYQ"),p=a.n(r),d=a("QH2O"),m=a.n(d),g=a("qKvR"),A=function(e){var t,a=e.title,i=e.theme,c=e.tabs,l=void 0===c?[]:c;return Object(g.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===i,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},u=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(n.useStaticQuery)("1364590287").site.siteMetadata.repository,c=a||i,l=c.baseUrl,o=c.subDirectory,b=l+"/edit/"+c.branch+o+"/src/pages"+t;return l?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],c=t.map((function(e){var t,c=o()(e,{lower:!0,strict:!0}),l=c===i,b=new RegExp(i+"/?(#.*)?$"),s=a.replace(b,c);return Object(g.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=l,t),j.listItem)},Object(g.b)(n.Link,{className:j.link,to:""+s},e))}));return Object(g.b)("div",{className:j.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:j.list},c))))))},t}(c.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,c=e.Title,l=t.frontmatter,r=void 0===l?{}:l,p=t.relativePagePath,d=t.titleType,m=r.tabs,u=r.title,O=r.theme,j=r.description,x=r.keywords,k=Object(y.a)().interiorTheme,v=Object(n.useStaticQuery)("2456312558").site.pathPrefix,I=v?i.pathname.replace(v,""):i.pathname,S=m?I.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",B=O||k;return Object(g.b)(s.a,{tabs:m,homepage:!1,theme:B,pageTitle:u,pageDescription:j,pageKeywords:x,titleType:d},Object(g.b)(A,{title:c?Object(g.b)(c,null):u,label:"label",tabs:m,theme:B}),m&&Object(g.b)(N,{slug:I,tabs:m,currentTab:S}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:p})),Object(g.b)(f.a,{pageContext:t,location:i,slug:I,tabs:m,currentTab:S}),Object(g.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},u7Tq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return r}));var i=a("wx14"),c=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("013z"),n=(a("qKvR"),{}),b={_frontmatter:n},s=o.a;function r(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(l.b)(s,Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this lab, you will explore the consumer experience for APIs that have\nbeen exposed to your Sandbox catalog. Using the Developer Portal, you\nwill log in and subscribe to the latest Accessories Product and test the\nAPIs from the portal, before testing it in a live Web Application."),Object(l.b)("p",null,"In this tutorial, you will explore the following key capabilities:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Subscribe to a plan in order to consume an API.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Test an API from the developer portal.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Consume an API from a sample test application."),Object(l.b)("h2",{parentName:"li"},"APIC Dev Jam Series"))),Object(l.b)("p",null,"The APIC Dev Jam Series is a hands-on workshop with lab exercises that\nwalk you through designing, publishing, and securing APIs. This workshop\nis for API developers, architects, and line of business people who want\nto create a successful API strategy. There are 8 labs and each is 30\nminutes long. Make sure you choose enough time in your reservation to\nget through all the labs! "),Object(l.b)("p",null,"[NOTE: ]",Object(l.b)("strong",{parentName:"p"},"[This demo environment contains a\nfull API Connect installation in Cloud Pak for Integration. The login\ninformation to the APIC cluster will be sent in a separate email when\nyou reserve the instance. Use Google Chrome, Firefox or Microsoft Edge\nto access the cluster using the credentials supplied. Make sure you\nlogin using API Manager User Registry not Common Services\nregistry.]")),Object(l.b)("p",null,"Prerequisites: Labs 1-6"),Object(l.b)("h2",null,"Subscribe o the Accessories Product"),Object(l.b)("p",null,"In this section, you will subscribe to a plan for the\nAccessories Product using the IBM Consumer application."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Launch the Developer Portal in a browser using the link provided.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"If you are logged in to the portal, log out to clear your session.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click the [","[API\nProducts]","] link.  ",Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"594px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"8.333333333333332%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAApElEQVQI1w3NywoBYQCAUU+BBcYlCzTu/DNmxi0kSsoCU5NcskAibGTjiWQhEoq818cLnGObrR7M10+mizvW5Io5vGCNb3SsE4OySVPVqYk8VSVPR2jIUYGULuCSFZzhDN6kjieuYQ+lccdy2PbHL5v9m93hw3L7whxd6Q3OBEWfVipFWytR/2MNvUxXNZBjCgG1gpQwcEQE/kwR3z9whLNISYMfqLxNApSWPVYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 444fff2d8e0d46b7",title:"tutorial html 444fff2d8e0d46b7",src:"/cp4i-demohub/static/31d54a4a50d15206d415f6b488a0ed0c/d7406/tutorial_html_444fff2d8e0d46b7.png",srcSet:["/cp4i-demohub/static/31d54a4a50d15206d415f6b488a0ed0c/7fc1e/tutorial_html_444fff2d8e0d46b7.png 288w","/cp4i-demohub/static/31d54a4a50d15206d415f6b488a0ed0c/a5df1/tutorial_html_444fff2d8e0d46b7.png 576w","/cp4i-demohub/static/31d54a4a50d15206d415f6b488a0ed0c/d7406/tutorial_html_444fff2d8e0d46b7.png 594w"],sizes:"(max-width: 594px) 100vw, 594px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Notice that only the Inventory product is listed, even though you\njust published the Accessories product. Recall that you assigned the\nAccessories product to be visible only by developers who are logged\nin to the portal.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Enter Login page using Sign in option at the top right corner of the\npage."),Object(l.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"548px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABK0lEQVQoz63O20vCYBgG8F11IIqyVnRCTEt3argTbqlrEWUnvOs2FpFBN8XozvI2kxAz+j/LsE2Lp2/fKOhW+uDHA+/38vAys5wBNqNjhtIQW1MxmcpialUllD+m0xrdjZE81nJw1jXkBQW2pMEUNbiGCYbb2AWfL9HCpLEFefMQ6nYZQmEPYjEiFEqQ7H3EFRtzQg4LkoWCYiFdPADvHCFp7oBVHdhZUjiyzGNiRcbQIofxhEyL50WTXhNe/yOcj8Uluje8xEFPy7Q8oTtgOR2jKQVWRgZTa7Rx99BGrfFMs1pvoXrfwm39ieYvMo/2iMcXNK88eCdn8Nxz3JxWcO1W0Ly4BIMBn9/7gu/3EQSfCMIkugTz+u5jEJ1uD52PPsnIG80eGPrxj74Bp453X82Rj04AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html db604e248301f829",title:"tutorial html db604e248301f829",src:"/cp4i-demohub/static/4a4413879890e390f721d8ed8f8946c4/8bd1a/tutorial_html_db604e248301f829.png",srcSet:["/cp4i-demohub/static/4a4413879890e390f721d8ed8f8946c4/7fc1e/tutorial_html_db604e248301f829.png 288w","/cp4i-demohub/static/4a4413879890e390f721d8ed8f8946c4/8bd1a/tutorial_html_db604e248301f829.png 548w"],sizes:"(max-width: 548px) 100vw, 548px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Login using the username \\<portaluser",">"," and password\n\\<portaluser-password",">"),Object(l.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABfklEQVQoz42TZ0/DMBCG82PhC3tLCCGQEP8KRPnAEHsJKDNNQkpTkjSmGY7tvNgORKxCT3p09ul8fn22DcYYHPcZ7RcfuRz/ZUVR4D8zkjTDY8NGs+XBtByYtgPrycVDw9L+3rTQsJ8ghKiKfhT+bQNDKexEEV67MSilJXle+ew99n2tEEVV/DOGWmTaLp49H1yK4DLxOypRKRSCQRRcznnvI6ud/U4XIYmRZBxxxr6SMjDGEYQEF1cmLq8bskUtEJIj7GSICEUUUe25VGSkGYXpuGj7odz9p0LGyt7tHzYxMLSG0ekaJuY2sby6i8WVHT0fntzA2EwNlk1g5LJqQLpSJQGJUzBV5AtAJvschAmu6gHqtyW3dyFuJPWboETGUnkaQzWX5kKTKaiCVzHKlFfP6f8no3toO69arpI+MrWB+aUtLCxv6/H4bA2DI+vYO3B1MueFvt1e6FuOkxxHJ17F6XkbZxdtPT4+9bB/1IIfpD/eYE+F6NP6+SXK3gDGvkQ7LkG3ygAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 492593c5f2350159",title:"tutorial html 492593c5f2350159",src:"/cp4i-demohub/static/acd8d064626f88d0b1dac68d7390fa1d/3cbba/tutorial_html_492593c5f2350159.png",srcSet:["/cp4i-demohub/static/acd8d064626f88d0b1dac68d7390fa1d/7fc1e/tutorial_html_492593c5f2350159.png 288w","/cp4i-demohub/static/acd8d064626f88d0b1dac68d7390fa1d/a5df1/tutorial_html_492593c5f2350159.png 576w","/cp4i-demohub/static/acd8d064626f88d0b1dac68d7390fa1d/3cbba/tutorial_html_492593c5f2350159.png 1152w","/cp4i-demohub/static/acd8d064626f88d0b1dac68d7390fa1d/221bd/tutorial_html_492593c5f2350159.png 1398w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click the [","[API\nProducts]","] link\nafter logging in.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Select the [","[ Accessories\n1.0.0]","] product. "),Object(l.b)("p",{parentName:"li"},Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABJUlEQVQoz22Ry07DMBBF8/0sWMGqeyT+AqlsukJiTwVV6yakSey08Xt8GZu2Ki2WjvzQnTsznupgAkKMBe0irP+LYabJQq03ULsOqu0w1g32zfcNatugIiL0I2EnCUCCY9NCNrSRXwCvDYyUSMMAalt4SrDGwxzR2pcYbywqw4f75wl3TxO6wUFs99h1Bv1g0bYaISQE5+C6HpjNgMcH7KWBqDU61g2sy3o1ekTvUeVWX989Xt5cyaJGh+uVM1upQIsF4nyOA1fUD7p0RBSZUHTBsaEP8cYgpXTmZGi4XTFILEWN1UZgzXx8rrjSBkqNRZs7qRwb5jiiS5MjF4aOg87Jjgq6KiRGQjXZgPyPxoX/KVM2kF8rnmINJbZnRvF7l1ztaf8BH6gbYVTZuxsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 6efccbf2582a30c0",title:"tutorial html 6efccbf2582a30c0",src:"/cp4i-demohub/static/a4880eff1ee491b36aaceac4b588fd87/3cbba/tutorial_html_6efccbf2582a30c0.png",srcSet:["/cp4i-demohub/static/a4880eff1ee491b36aaceac4b588fd87/7fc1e/tutorial_html_6efccbf2582a30c0.png 288w","/cp4i-demohub/static/a4880eff1ee491b36aaceac4b588fd87/a5df1/tutorial_html_6efccbf2582a30c0.png 576w","/cp4i-demohub/static/a4880eff1ee491b36aaceac4b588fd87/3cbba/tutorial_html_6efccbf2582a30c0.png 1152w","/cp4i-demohub/static/a4880eff1ee491b36aaceac4b588fd87/32e21/tutorial_html_6efccbf2582a30c0.png 1394w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"You will be directed to the Product page which lists the available\nplans for subscription.\nClick [","[Subscribe]","] under\nthe [","[Silver]","] plan.  ",Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"22.916666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAv0lEQVQY02VQwQrCMAzd/3+KR48iXhRkBw+CyBju4kWUqevWtVva7ZmWDVtteeSFJK8vTYTsIbVBoyiKnnvYKSeumQlBT8Adkj8R5m1nQGYA9QqGNHMLa0eOHYwlxhAZCJHEzugr2Clslyk2ix20VnBnn16xWl8w8p0FQnfe4e9LjgvZ4V3VyI4Fzocc91KgfNfIiwdO2Q0v0fjV5znXPyMJ1UPxuu2heG3Nq7p/Fi7vDTRZrlHU+6xalJXkKPEBc3OBHya/onsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html fd5ece1fe8b66fa5",title:"tutorial html fd5ece1fe8b66fa5",src:"/cp4i-demohub/static/a1bf28454fc27a9ac9324a746c669a11/3cbba/tutorial_html_fd5ece1fe8b66fa5.png",srcSet:["/cp4i-demohub/static/a1bf28454fc27a9ac9324a746c669a11/7fc1e/tutorial_html_fd5ece1fe8b66fa5.png 288w","/cp4i-demohub/static/a1bf28454fc27a9ac9324a746c669a11/a5df1/tutorial_html_fd5ece1fe8b66fa5.png 576w","/cp4i-demohub/static/a1bf28454fc27a9ac9324a746c669a11/3cbba/tutorial_html_fd5ece1fe8b66fa5.png 1152w","/cp4i-demohub/static/a1bf28454fc27a9ac9324a746c669a11/a35d6/tutorial_html_fd5ece1fe8b66fa5.png 1543w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Note:")," The Gold plan requires approval by the API provider for\nany subscription requests and allows unlimited requests for a given\ntime period. The Silver plan is limited to 100 requests per hour and\ndoes not require approval by the API provider for subscription\nrequests.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"A subscription wizard is initiated. All the applications available\nare displayed (in this case we only have the IBM Consumer\napplication). Click [","[Select\nApp]","] which\nis located below the application\ntile.  \n",Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABLklEQVQoz62RX0vDMBTF87Xd1Am6qdN1g4HIQMQnn0TYg0++ifsIiqLOPzhmbWu6pE27tD2mWddVEKtg4UfuaU7OvSHktD9E7/AC60YX1XoblXoLq1tt1LY7qDZ2sbSxg+VGS1NR9cqmgbVmB7UCzW4Pxv4B9o6PQPDPHxmZLl7GFKbN4bhCY1MflsLWtdC11jTb+5jpdE216Xi4ubMxemMgnoiQTAHuTzHxMlTNCpr9oLmQKligf/aA61sHxI8kzt+fIeMYfiDBxMz0V8JInQ8jEItSDF4f4TIOT22knblYTFEGz87MJ88fJUkSeIHMTWUw8TVwDhmcXGJ4dQ9HTejyIDeUhRWD9P90TQPNpzEcywVVYcWOpRMWPDpYN5LqlaW6ahh/a/xNINN6EfgJlh3uu71xfc8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html fe0fc338b5ae9fd3",title:"tutorial html fe0fc338b5ae9fd3",src:"/cp4i-demohub/static/5f4b14e460bc382211a12eb8e28268ff/3cbba/tutorial_html_fe0fc338b5ae9fd3.png",srcSet:["/cp4i-demohub/static/5f4b14e460bc382211a12eb8e28268ff/7fc1e/tutorial_html_fe0fc338b5ae9fd3.png 288w","/cp4i-demohub/static/5f4b14e460bc382211a12eb8e28268ff/a5df1/tutorial_html_fe0fc338b5ae9fd3.png 576w","/cp4i-demohub/static/5f4b14e460bc382211a12eb8e28268ff/3cbba/tutorial_html_fe0fc338b5ae9fd3.png 1152w","/cp4i-demohub/static/5f4b14e460bc382211a12eb8e28268ff/821f3/tutorial_html_fe0fc338b5ae9fd3.png 1590w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"A window with the subscription details is displayed to confirm the\ninformation provided.\nClick [","[Next]","] once\nyou have reviewed the\ninformation.  \n",Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"914px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.08333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABqklEQVQ4y42TzW7bMBCE9f6PEaD3HAIU6DGpgZ5a9NRLDkESt64dS6Qk/kikNN2hRFtuY9cEBqRW3N1vyWUBGWXl8LZ3qOsOxvTwPsK5kObnFw2ljaw93CzvZZ914qcwDAOWoxjHEVaclfKoFB2CmEfQzpkJtO7EkTYsNKag1jkMsmZg7ika28NIENtNaiU4bVQt4jf/Z9tS/Lfc37oexdKQN7mOiify/TRbJv9LbgFS5CzZQCeW0xojJVk0bZvWddOkszs3WN27AUkSQsD610YuqsRbWWJfVtjt9yiVgq6bFFxpjUrEhAQgyEXCze9tIuOYDnxSiAExRlGQdUzrdLHnCG26ZUDVLTa7SmYjNiHPZ7kQv/swtY31Z89wCtgaKy3BNuqEZECUlojDcKo4tcrFM7TdkdBKG3RCwCT+H8Vk/y9hLrlSNbZSMgmoeKA8isFIfxWh8xa10dAN28bPfTjRuVmHcc2lfP2+xe3do7xlxYcohKd0pF59+Ylvsu+qkh9Wa9x8+CEBmxlizDgHsI+fnnD/+fVyQM78md16OSPzznPLicc5WPb/AwU0kMfI92BQAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html ea31c68f8a08a741",title:"tutorial html ea31c68f8a08a741",src:"/cp4i-demohub/static/f73b48b7fdc4fef23ab41a9542df934d/01161/tutorial_html_ea31c68f8a08a741.png",srcSet:["/cp4i-demohub/static/f73b48b7fdc4fef23ab41a9542df934d/7fc1e/tutorial_html_ea31c68f8a08a741.png 288w","/cp4i-demohub/static/f73b48b7fdc4fef23ab41a9542df934d/a5df1/tutorial_html_ea31c68f8a08a741.png 576w","/cp4i-demohub/static/f73b48b7fdc4fef23ab41a9542df934d/01161/tutorial_html_ea31c68f8a08a741.png 914w"],sizes:"(max-width: 914px) 100vw, 914px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"The last step is displayed with the summary of the subscription.\nClick [","[Done]","] to\nfinalize the\nwizard.  \n",Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"887px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABzklEQVQ4y41UPW/UQBD1Xw4lDYGCJiXSVYiCNkIkcKCQFLTUaRNACIiiix2fz97Zb7/M7N4qd4kPYd3T7M7sPs/MG19V14S6IXSdwTA4GBOgtYe1AYuFwk2t0l6v/QLnAv5e9enOw6ciclh2Gu2S+JJLznEck9WaY+z3IYo3+UvMWJ/uOB8Q2RdjRqWMB3E2goHf3vMLBCuG7CVe9v0Gcuz+jtiBE6i2DzkQE2gmL6CydjHF1Br0wGYOjyozZwdxGVKSUgpEGv0wgLSGIsKq7xFC2OjWffnSkpLlFqFkEmNEs1piUdcsVsP97dje4npxk9YCIU/9XFPvJCwZupaVJcPlWM7QslgW3rO6XtS3rLLbEmg3IY8DeI0351j9btEy2cDExnlMPf9RskcYIy6bmlU1aSQCH5YLJSPZb0JGZZJQxkKGWQWHZxff8JN7JTPaKcOH7TqbcTLT3SUbXwScKpAHGDj9+geH7y/x7sMPHB59x/zLL64KeWymCEtfSokJMfuiMXj98jOe7x3j4OkcL54c49X+J0Qa0POQC8d0ho+7ny0pnM7meHtwgqPZWbIfZyeIbYPejo8JlfwpsNL/Qow8CdHzzyc7xvwllR7eAeFrOPEtl5CJAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 359b7068e5f3a808",title:"tutorial html 359b7068e5f3a808",src:"/cp4i-demohub/static/04a24c6f4df52c208dbf47e6c8846a23/59d12/tutorial_html_359b7068e5f3a808.png",srcSet:["/cp4i-demohub/static/04a24c6f4df52c208dbf47e6c8846a23/7fc1e/tutorial_html_359b7068e5f3a808.png 288w","/cp4i-demohub/static/04a24c6f4df52c208dbf47e6c8846a23/a5df1/tutorial_html_359b7068e5f3a808.png 576w","/cp4i-demohub/static/04a24c6f4df52c208dbf47e6c8846a23/59d12/tutorial_html_359b7068e5f3a808.png 887w"],sizes:"(max-width: 887px) 100vw, 887px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(l.b)("h2",null,"Test APIs from the Developer Portal"),Object(l.b)("p",null,"In this section, you will use the Developer Portal to test one of the\nAccessories APIs. This is useful for application developers to try the\nAPIs before their application is fully developed or to simply see the\nexpected response based on inputs they provide the API."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click the [","[logistics\n2.0.0]","] API\nlink on the Accessories product\npage.  \n",Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABhElEQVQoz62SvU/DMBDF88cX1C6Flo82CCGGDgyIkR0BEwgYmBAtlahIoqZJ7NhJnAQeZ6uGABViINIvd7Yu757Pcfb2T3F88oCD0SU6/QHhot0fot0bEEOsb+6i1d3B2sZqWt1tdLZc9NxDuEcjOGA1EAkAb/iPx4lJzA9iLFiGRSIMEROIuTQwkSOVBfgvpJasgDOPODx/jihiCBcJQdEIS8zjFElaQOQVFZd/wpFBAH5/g/hxAvk0RjaegM1JUChTYMV0FDnFj3w1jj5WRI5SSR2kMnAS47TmmUYLWofN/HuzpaAtbG6mRFZUKMoKucpRqJLymihpP4eqXo3blUc2Io0NW6hILBUZzi6mePFic4Oez3F+OYVSNWTx051xaBNp3S2L9O0GYYKr2xmmzwv6C7iJ13cz6Is081zWJ2luYDQuh9NLL2KeQeeiIaxnqOrafJzQXLUrvW7OUM86YpIaSqPj6P9u5ofwQoYgptvlOUJGDYT6dJzZJl+PaXNZ1AadvwM3wjwF+JgQ0wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 8ec6b1024d5a2f9a",title:"tutorial html 8ec6b1024d5a2f9a",src:"/cp4i-demohub/static/97f225e8f49b078c781e140479c698c0/3cbba/tutorial_html_8ec6b1024d5a2f9a.png",srcSet:["/cp4i-demohub/static/97f225e8f49b078c781e140479c698c0/7fc1e/tutorial_html_8ec6b1024d5a2f9a.png 288w","/cp4i-demohub/static/97f225e8f49b078c781e140479c698c0/a5df1/tutorial_html_8ec6b1024d5a2f9a.png 576w","/cp4i-demohub/static/97f225e8f49b078c781e140479c698c0/3cbba/tutorial_html_8ec6b1024d5a2f9a.png 1152w","/cp4i-demohub/static/97f225e8f49b078c781e140479c698c0/13676/tutorial_html_8ec6b1024d5a2f9a.png 1544w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click the [","[GET\n/shipping]","] path\non the left navigation menu. ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click the ","`","Try it","`"," link to access the test\narea.  \n",Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAACHVAAAh1QEEnLSdAAABdklEQVQoz4WSiU7DMBBE8//fBuIHAIkIAW3a2InvIx52naOhtGqkkSPZfp6d3SZ3b1DiDG08yjShlIL6reuDbz3//HLA0/MPmtS9YyDgoB209QgxIU8Fmc4lWlPOpOmP8pUmgsrBoxcOzXFM+OwMjtLj0FvYkCC6DqL9gDx19IiD0hrDqDAqDevcP4fT4tJYi6b9lnhte3RDqFDlMtSpR/pqEaTAaCzBRhhaLV1gIF/UxtR/BpYFzA82Qjn0g4F2CcpGKjnD+8BHkFJGL2VdufQQAmKMc6mU97RkzgY3IIPMAmNxRmvQfIHdZIKx2JH3ftufYRdV4AqaHSZEcsOlTdVBIaCvrmOam8MrN24vH+d7m8NVe4erC0Elc5lrdvdHih2a28D9fJ3FQDAPH2LNto7UrdGhihzt3wXOGRZoejUtZXpuCpee5gj2Yiifeegwx7njo3E1z+tGXOIp9OADYNlldZIaR2EwmAChPaQOm4TyNCmxOvwFdnerG+9jLdcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 6326764a039cba2b",title:"tutorial html 6326764a039cba2b",src:"/cp4i-demohub/static/3e25f8e21ecd16805dc2cc33ab2447ec/3cbba/tutorial_html_6326764a039cba2b.png",srcSet:["/cp4i-demohub/static/3e25f8e21ecd16805dc2cc33ab2447ec/7fc1e/tutorial_html_6326764a039cba2b.png 288w","/cp4i-demohub/static/3e25f8e21ecd16805dc2cc33ab2447ec/a5df1/tutorial_html_6326764a039cba2b.png 576w","/cp4i-demohub/static/3e25f8e21ecd16805dc2cc33ab2447ec/3cbba/tutorial_html_6326764a039cba2b.png 1152w","/cp4i-demohub/static/3e25f8e21ecd16805dc2cc33ab2447ec/4147f/tutorial_html_6326764a039cba2b.png 1429w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Scroll down to the Parameters section, enter any ",Object(l.b)("strong",{parentName:"p"},"United State Zip\nCode")," (e.g., ","`","90210","`",") and\nclick [","[Send]","] to\ninvoke the API.  \n",Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1128px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABGUlEQVQoz5WSzU6EMBSFeXSXLkzcm/gOs/IhXE5i1GGAQMt/KS1tgVkdL4ygk4xOWHzp5vTLub31SqHACwGpLZTpZ9rOzae2wzbojieUQdVoyG9JoyxiXsyBbrNwgLc0+d3umJREBVYopJUGv8GcKTVy0cGbBAuL8DNkOEQpKmk2UbeWGq5CajhJqW2UNfBZDS4MMmGpQYe0vgFlisacR14bkqwREg1jGKVEX9dwSsMNJ7h+/BM74cbzUi42606Q/gH+/h1xwMBCjnT/hoTe8j/SWiOhhnFlLoWtHaE4R/bhI/dDlMcIpR8gp1GmB79GRuMGiUQcFeBR9iNcpdPWjYPuJiz9gP46lLPDgCTTeHh8xdPdDs/3L/gC1oWnlvH40psAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 74d26a44eab03d67",title:"tutorial html 74d26a44eab03d67",src:"/cp4i-demohub/static/76f6127d0b0891bd85211563c8aa3b91/5469f/tutorial_html_74d26a44eab03d67.png",srcSet:["/cp4i-demohub/static/76f6127d0b0891bd85211563c8aa3b91/7fc1e/tutorial_html_74d26a44eab03d67.png 288w","/cp4i-demohub/static/76f6127d0b0891bd85211563c8aa3b91/a5df1/tutorial_html_74d26a44eab03d67.png 576w","/cp4i-demohub/static/76f6127d0b0891bd85211563c8aa3b91/5469f/tutorial_html_74d26a44eab03d67.png 1128w"],sizes:"(max-width: 1128px) 100vw, 1128px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"You should see a [","[200\nOK ]","]and\na response body as shown\nbelow.  \n",Object(l.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1136px"}}),"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.34722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABh0lEQVQoz32S3W6cMBBGef9H6k2VSGmVKNmwWwhsYhYwNgbza2Db5urr2DRRkJK9OBrJaA7zje2VuoPSPcb5t4OXDRJeIZONIy9bpELjVNQO+83CcgVe9SibCbIxkNqgHRd4vVlgGaYzpvNfPIYJvv/wcXd4wc9dhIfwhN1TivsggR9zHLMWcaoRZxrPvMVL0TueeYe6n+F140zmmaY7O6mmw9L9cYSoBghb68Fhz6puRtWuKMf0TmfO8FTTQ9adk5nlD1KKFTGBXPUkmwgD1S0oqVlSvKI2XzCuka3EskZ+xWPA8O3qDjf3ARHi+vaAW/8IP0oRMIlEDGCi35CINbZN51nRG/ZSGNd4ONC+njLs4ww72uk+yml3GqzocJLDp1ipE44fZLba8Y9MI9gX8NMUsaiQV/OmcSvrt8Lhv8hhn001IowlwlDgV8oRcYWT+Ex0cUJ6g3ZKqrkaELOahBL7NEfM6/eGS7DtDmnKeY0t6LZyNYLbm6sMTWwo8ugmv4TtaYYF/wCEHOQfpjN9HAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html f9b90c1492df91e8",title:"tutorial html f9b90c1492df91e8",src:"/cp4i-demohub/static/b637500c7b4d7870006db9653200d0e7/0fd57/tutorial_html_f9b90c1492df91e8.png",srcSet:["/cp4i-demohub/static/b637500c7b4d7870006db9653200d0e7/7fc1e/tutorial_html_f9b90c1492df91e8.png 288w","/cp4i-demohub/static/b637500c7b4d7870006db9653200d0e7/a5df1/tutorial_html_f9b90c1492df91e8.png 576w","/cp4i-demohub/static/b637500c7b4d7870006db9653200d0e7/0fd57/tutorial_html_f9b90c1492df91e8.png 1136w"],sizes:"(max-width: 1136px) 100vw, 1136px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Go ahead and try out the [","[Logistics GET\n/stores]","] and\nthe [","[Financing GET\n/calculate ]","]APIs\nas well."))),Object(l.b)("h2",null,"Summary"),Object(l.b)("p",null,"Congratulations! You have created multiple plans, tested APIs in the\ndeveloper portal, and used the APIs in a consumer application. "))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-apic-dev-jam-lab-7-index-md-b7cf23e89fe5440e7d51.js.map