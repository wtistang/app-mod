(window.webpackJsonp=window.webpackJsonp||[]).push([[23,41,42],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),b=a.n(i),n=a("NmYn"),c=a.n(n),l=a("Wbzz"),o=a("Xrax"),r=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),d=a.n(m),u=a("qKvR"),g=function(e){var t,a=e.title,i=e.theme,b=e.tabs,n=void 0===b?[]:b;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=n.length,t[d.a.darkMode]="dark"===i,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},A=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||i,n=b.baseUrl,c=b.subDirectory,o=n+"/edit/"+b.branch+c+"/src/pages"+t;return n?Object(u.b)("div",{className:"bx--row "+A.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:A.link,href:o},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var t,b=c()(e,{lower:!0,strict:!0}),n=b===i,o=new RegExp(i+"/?(#.*)?$"),r=a.replace(o,b);return Object(u.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=n,t),j.listItem)},Object(u.b)(l.Link,{className:j.link,to:""+r},e))}));return Object(u.b)("div",{className:j.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:j.list},b))))))},t}(b.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,b=e.Title,n=t.frontmatter,s=void 0===n?{}:n,p=t.relativePagePath,m=t.titleType,d=s.tabs,A=s.title,O=s.theme,j=s.description,x=s.keywords,I=Object(y.a)().interiorTheme,T=Object(l.useStaticQuery)("2456312558").site.pathPrefix,E=T?i.pathname.replace(T,""):i.pathname,v=d?E.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"",C=O||I;return Object(u.b)(r.a,{tabs:d,homepage:!1,theme:C,pageTitle:A,pageDescription:j,pageKeywords:x,titleType:m},Object(u.b)(g,{title:b?Object(u.b)(b,null):A,label:"label",tabs:d,theme:C}),d&&Object(u.b)(N,{slug:E,tabs:d,currentTab:v}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(f.a,{pageContext:t,location:i,slug:E,tabs:d,currentTab:v}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},nnuE:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var i=a("wx14"),b=a("zLVn"),n=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),{}),o={_frontmatter:l},r=c.a;function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)(r,Object(i.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Your work as an Application Developer and API Designer is now complete.\nIt’s time to switch roles and become an API Product Manager. The role\nof the API Product Manager is to take the developed assets and bundle\nthem together using a go-to-market strategy."),Object(n.b)("p",null,"In this case, you will publish the APIs from the accessories project\ntogether as a bundled product offering to API Consumers. Additionally,\nyou will create two plans which have different levels of access to your\nAPIs."),Object(n.b)("p",null,"In this tutorial, you will explore the following key capabilities:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create a Product")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Attach APIs to a Product")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create a Plan")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Publish a Product"))),Object(n.b)("h2",null,"APIC Dev Jam Series"),Object(n.b)("p",null,"The APIC Dev Jam Series is a hands-on workshop with lab exercises that\nwalk you through designing, publishing, and securing APIs. This workshop\nis for API developers, architects, and line of business people who want\nto create a successful API strategy. There are 8 labs and each is 30\nminutes long. Make sure you choose enough time in your reservation to\nget through all the labs! "),Object(n.b)("p",null,"[NOTE: ]",Object(n.b)("strong",{parentName:"p"},"[This demo environment contains a\nfull API Connect installation in Cloud Pak for Integration. The login\ninformation to the APIC cluster will be sent in a separate email when\nyou reserve the instance. Use Google Chrome, Firefox or Microsoft Edge\nto access the cluster using the credentials supplied. Make sure you\nlogin using API Manager User Registry not Common Services\nregistry.]")),Object(n.b)("p",null,"Prerequisites: Labs 1-5"),Object(n.b)("h2",null,"Create an API Product"),Object(n.b)("p",null,"Before being published, APIs are packaged into Products. In Lab 4, you\nsaw how to create a new Product. In this section, you will create\nanother new Product for the accessories APIs, as well as create two new\nPlans to which consumers can subscribe."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Go to the Develop home page.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click [","[Add. ]","]Select [","[Product]","].")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("strong",{parentName:"p"},"[New product]","*"),".*")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Provide the following configuration for the new product:"),Object(n.b)("p",{parentName:"li"},"Title: [","[Accessories]","]"),Object(n.b)("p",{parentName:"li"},"Name: [","[accessories]","]"),Object(n.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.51388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABXklEQVQ4y5WSSW6DQBBFOVzOnGUOkEW2WWQTJXFiGwMN9AgNP1VlY4EZZCN9NdXD068heXrWcM4jzwuSgiorxBjR9z06Ur+i24/3bOiQfGQexgWR840oNC0pLsqFVu4e0hy/+xS7vxSVdrD0zrgGSaAfCaxH0zTouoitj6G18fj8+sP37oj9MUdRaoFpG5DU9gysakMbXhzwI7+g0NJK5zU9TAtD4EBxvMLEob4AC1VDVUaAaxIwrfx4SJH/B5g4HIDaWEq5Rey6ZcWOytETtL1CxqCZQ1VpsX+vw3GaYyW8yZ095SWyohLoktwgfxeQC+1RUfcM18ZPL3GsaR1S52acz1aA04MwEwNYL28/eH0/yOBzvOhwXNQt8b1DbpAqe26iDWspj1zZubtxvaQ5frl2E4druh2LtVGZ1fCedLdcTYCWOrylR2ACPGWKZlAhoznkVeKL0lOBsrYPQf8B6OfcjQcRPa0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 8a48fefa2dfaf506",title:"tutorial html 8a48fefa2dfaf506",src:"/cp4i-demohub/static/1bf0d80bb6c02b7ed22e021efe8c5a38/3cbba/tutorial_html_8a48fefa2dfaf506.png",srcSet:["/cp4i-demohub/static/1bf0d80bb6c02b7ed22e021efe8c5a38/7fc1e/tutorial_html_8a48fefa2dfaf506.png 288w","/cp4i-demohub/static/1bf0d80bb6c02b7ed22e021efe8c5a38/a5df1/tutorial_html_8a48fefa2dfaf506.png 576w","/cp4i-demohub/static/1bf0d80bb6c02b7ed22e021efe8c5a38/3cbba/tutorial_html_8a48fefa2dfaf506.png 1152w","/cp4i-demohub/static/1bf0d80bb6c02b7ed22e021efe8c5a38/6b4c9/tutorial_html_8a48fefa2dfaf506.png 1419w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"[Next]"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Select the checkboxes next\nto ",Object(n.b)("strong",{parentName:"p"},"[financing]")," and [","[logistics]","].\nThen\nclick [","[Next]","]."),Object(n.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA90lEQVQoz62QR27DQAxF5/63yg2y9ipAYKRBlqb3+SFpKbbslE0EPJFDkJ9FGevAWOfQWscY409uPw51+sXSoWbt4EKG9Umsj2Xl7Iev95mQChbj8fI+CafF7uoUBzRNuGiLXCoJZDgfUWoTa12QeMpVxLjo42RwfJvIamHWXkQZ5UJCLUVW7q0hpYQYI63fUCheayG/YvRGu3Up0i4RGVGa1N0GaraJRDKM8yTQEMlneCpmW3/SAYfneXeCbaoNEZTHdQLb1efYbCK46dOrwcPjUaa6FtjfnQS5+yXh3t8m4huO3u8EblE/dfpuLet/z10nLPhPPgHPZbwnqlGhtQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html b454495554d463d4",title:"tutorial html b454495554d463d4",src:"/cp4i-demohub/static/87839b261d2f3f584358437347b9fdef/3cbba/tutorial_html_b454495554d463d4.png",srcSet:["/cp4i-demohub/static/87839b261d2f3f584358437347b9fdef/7fc1e/tutorial_html_b454495554d463d4.png 288w","/cp4i-demohub/static/87839b261d2f3f584358437347b9fdef/a5df1/tutorial_html_b454495554d463d4.png 576w","/cp4i-demohub/static/87839b261d2f3f584358437347b9fdef/3cbba/tutorial_html_b454495554d463d4.png 1152w","/cp4i-demohub/static/87839b261d2f3f584358437347b9fdef/0d642/tutorial_html_b454495554d463d4.png 1512w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Provide the following Plan details:"),Object(n.b)("p",{parentName:"li"},"Title: ",Object(n.b)("strong",{parentName:"p"},"[Silver]")),Object(n.b)("p",{parentName:"li"},"Description: ",Object(n.b)("strong",{parentName:"p"},"[Limited access to the Accessories APIs]")),Object(n.b)("p",{parentName:"li"},"Keep rate limit of 100 with an interval of 1 hour")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click [","[Next]","].")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Modify the Visibility so that the product is only visible\nto [","[Authenticated\nusers]","].\nThen\nclick [","[Next]","]."),Object(n.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.333333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABHUlEQVQoz42SDW6EIBCFuf+ReoZeom2aukZXBWH4EV8ZIhvCurUkX0Qlj/dmRkipsBz4ELDvO2J8Df9n2lW+C6UdjPVwPiS2S/jsahxuw4SffkTX3yFXyt80eQh+0YbgnDu9ufEBciELfHcj+nFGP8wYJomFdVjQew9r7cNyzXPkmB1yqnFhgZAvMDZkMXYpJmnyjVw/ju0PeL9tEVus2OIjsjkEarJDQxZkHWyKbOtncs2O6oIzRbAWKc8s2KXiKqXwn1ULFoEWITWlmhBCisN1aiO2XAum+o2zhloNKMU3RBnKkY/mVE26FlTrEfm5y2eLm3UhaNIB7vL5IPNYlMMfnczj8pdLUTbtCBRmRejvOvP2/oXPm0yT8NrlL1T/qq7VO7H6AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 21d7e02a18ac77eb",title:"tutorial html 21d7e02a18ac77eb",src:"/cp4i-demohub/static/5bac7dfa362936059a73b1d05b6c72b4/3cbba/tutorial_html_21d7e02a18ac77eb.png",srcSet:["/cp4i-demohub/static/5bac7dfa362936059a73b1d05b6c72b4/7fc1e/tutorial_html_21d7e02a18ac77eb.png 288w","/cp4i-demohub/static/5bac7dfa362936059a73b1d05b6c72b4/a5df1/tutorial_html_21d7e02a18ac77eb.png 576w","/cp4i-demohub/static/5bac7dfa362936059a73b1d05b6c72b4/3cbba/tutorial_html_21d7e02a18ac77eb.png 1152w","/cp4i-demohub/static/5bac7dfa362936059a73b1d05b6c72b4/0c365/tutorial_html_21d7e02a18ac77eb.png 1453w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The product has been created! Click [","[Edit\nProduct]","] to\nmake changes."),Object(n.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.708333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAA9UlEQVQoz42Sa27DIBCEuf9RcooeIz+iVq3ycmMcQ2zeZsqCkaqUJF1pZLTAN7us2SgERikxCgnnPWKMWJak2FZcdR+Uon02awdtPawL/5IyDnTnm19x7HqcOp4KmjEpm/NM2wU+xNUlPlU6kc3p8uHM0fUjLlygH1KHUhXgRe4xTQraGMQXUIoK5EKlL3VHVfsMozw7DO+43WaEEPAsKlSbAiyt27yuyhVKdYUxFr4OpDEEGlIN6/wfSF7rYsCMWXLJ9bHvRYddgnyeJTZvO3ycBMzadus8++32SGTGhcb2a8hvp1ajJrCVbFVJUO/Lb/MIRvoBOdG+zWu9D5IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 76be1bfa7168087f",title:"tutorial html 76be1bfa7168087f",src:"/cp4i-demohub/static/04f5bcd4053effc20888d31f137f651e/3cbba/tutorial_html_76be1bfa7168087f.png",srcSet:["/cp4i-demohub/static/04f5bcd4053effc20888d31f137f651e/7fc1e/tutorial_html_76be1bfa7168087f.png 288w","/cp4i-demohub/static/04f5bcd4053effc20888d31f137f651e/a5df1/tutorial_html_76be1bfa7168087f.png 576w","/cp4i-demohub/static/04f5bcd4053effc20888d31f137f651e/3cbba/tutorial_html_76be1bfa7168087f.png 1152w","/cp4i-demohub/static/04f5bcd4053effc20888d31f137f651e/ab92f/tutorial_html_76be1bfa7168087f.png 1477w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"In the Product Setup section, specify the following details:"),Object(n.b)("p",{parentName:"li"},"Summary: [","[The Accessories product will provide really awesome APIs to your application.]","]"))),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),"Contact Name: Thomas Watson\n\nContact Email: watson@ibm.com\n\nContact URL: https://developer.ibm.com/apiconnect/\n\n")),Object(n.b)("ol",{start:12},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Specify a License and Terms of Service:"),Object(n.b)("p",{parentName:"li"},"License Name: [","[The MIT License (MIT)]","]"),Object(n.b)("p",{parentName:"li"},"License\nURL: [","[https://opensource.org/licenses/MIT]","]"),Object(n.b)("p",{parentName:"li"},"Terms of Service: ",Object(n.b)("em",{parentName:"p"},"paste the contents of the box below:")))),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),'[[Copyright (c) 2016 IBM Permission is hereby granted, free of charge,\nto any person obtaining a copy of this software and associated\ndocumentation files (the \\"Software\\"), to deal in the Software without\nrestriction, including without limitation the rights to use, copy,\nmodify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to\ndo so, subject to the following conditions: The above copyright notice\nand this permission notice shall be included in all copies or\nsubstantial portions of the Software. THE SOFTWARE IS PROVIDED \\"AS\nIS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT\nNOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A\nPARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\nWHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT\nOF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE\nSOFTWARE.]]\n')),Object(n.b)("ol",{start:13},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Scroll to the bottom and\nclick [","[Save]","].")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Navigate to the Plans section. Click the ",Object(n.b)("strong",{parentName:"p"},"Add")," button to add a new\nplan.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Fill in the following details:"),Object(n.b)("p",{parentName:"li"},"Title: [","[Gold]","]"),Object(n.b)("p",{parentName:"li"},"Description: ",Object(n.b)("strong",{parentName:"p"},"[Unlimited access to the Accessories APIs for approved\nusers]")),Object(n.b)("p",{parentName:"li"},"Approval: check"),Object(n.b)("p",{parentName:"li"},"Rate Limits: Click ",Object(n.b)("strong",{parentName:"p"},"unlimited")," on rate to make this plan unlimited."),Object(n.b)("p",{parentName:"li"},"Burst Limits: Delete the default burst-limit."),Object(n.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABbklEQVQ4y41SyU4DMQyd//8STpxBLELihFgERyQEFXRoWdRlptmXh52lGsoINdJTHMd5fo7drDqJ5apLkFJhuA4vn3Fw/gRtHHwIxRsxviJCjGiYRAiBQA+MseiFIgIPbT1MAdvJ9w+M85Daorl9nOP05hVnd1NM5msISiApQCW4PUBEtHPiLeHR1QTH1294ma1JpYGiC+dDKnN/xExonUPk/6H6Hcn+/F5iOvvCRhoKcHvDupAJe3rYC4OOIJTFeqNTE5yPKWgXrHz3zGX30mZCViIISRERdv0GWuvSzYwYM3hx86pd94+FwMXDe3rfsCoGEyqWbm165LyHZxTb0dfwWGhtkl2TcAxPh/el5CEhO5TSRKy32X9N2sDHdijn+ULi5HY6rjBlK2WxEs5c7brXshnGZnW8xhUWdWOoyipCGPzhfTum0Kb/GipIM1Z83Cy2OSYT5nHjoV7RdPxRyIS7Haw7E7Vtm0lG7mvJP5bG+B/e6poJAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html bee42885833ec65a",title:"tutorial html bee42885833ec65a",src:"/cp4i-demohub/static/b1eb6e1a358bdbedec8a1ec00a1abe78/3cbba/tutorial_html_bee42885833ec65a.png",srcSet:["/cp4i-demohub/static/b1eb6e1a358bdbedec8a1ec00a1abe78/7fc1e/tutorial_html_bee42885833ec65a.png 288w","/cp4i-demohub/static/b1eb6e1a358bdbedec8a1ec00a1abe78/a5df1/tutorial_html_bee42885833ec65a.png 576w","/cp4i-demohub/static/b1eb6e1a358bdbedec8a1ec00a1abe78/3cbba/tutorial_html_bee42885833ec65a.png 1152w","/cp4i-demohub/static/b1eb6e1a358bdbedec8a1ec00a1abe78/0417f/tutorial_html_bee42885833ec65a.png 1436w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Save")," your changes. Then\nclick [","[Develop]","] in\nthe main menu on the left."))),Object(n.b)("h2",null,"Publish the API Product"),Object(n.b)("p",null,"Publish the Accessories Product and make it ready for consumers."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"On The Develop page, you should see the Accessories-1.0.0 Product in\nthe list.  ",Object(n.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABCElEQVQoz42SaU7EMAyFe/87cQROgZBAM3RJ4ixO0oftTjsziCJ+fErr5fXZ6ZBLwew8el/R13U7/4vUr7ee2jq4dgxLSBhnb4RYQImFcsq9huEpy3uGo4KX1ze8XwIGksA0O1wnEaSEnDPSCTrN4hyWxYGZ8TVOhsU92QeGXBhJUIda1FpFrb/TWkNMCT4Ee9Z667FctQlM0EfGx9Vj9vFUbBcMgeC87rzDOZ2KDvFDMOVqu/AUzf6ZS23cx1dBihFJHJtgfXAYxOHnGHCZguyQj1F+oqLqSF2qyCIOZ9mnxsvucLu5tN1i1MWzJOspmt9r9CTp1TuIueyCGnz8XfhP4o177LnnG/lPvkA3u3/CAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 89ab455eda83363d",title:"tutorial html 89ab455eda83363d",src:"/cp4i-demohub/static/729ae4b2ed24583b6cc62ae480ac7ec5/3cbba/tutorial_html_89ab455eda83363d.png",srcSet:["/cp4i-demohub/static/729ae4b2ed24583b6cc62ae480ac7ec5/7fc1e/tutorial_html_89ab455eda83363d.png 288w","/cp4i-demohub/static/729ae4b2ed24583b6cc62ae480ac7ec5/a5df1/tutorial_html_89ab455eda83363d.png 576w","/cp4i-demohub/static/729ae4b2ed24583b6cc62ae480ac7ec5/3cbba/tutorial_html_89ab455eda83363d.png 1152w","/cp4i-demohub/static/729ae4b2ed24583b6cc62ae480ac7ec5/57ccb/tutorial_html_89ab455eda83363d.png 1519w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the [","[3 dot menu\nbutton]","] in\nthe row for\nAccessories-1.0.0.  ",Object(n.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.166666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABIElEQVQoz52SW07EMAxFu/8lsQZWwQ+vdpp34qSZi+0UqMTAqHxc2XKiY18nU8oF1nn06xW9n9R1aOsdtXUQa7I+4WI8VusRM91VSBKr5i5kpEJ4vUQ8PD7BRcIUU8ZqHOaVgZyXUm4qs4iI71p4HzR/e59hreNzggwmzaZClS9XnbK19qe2bUOMUSV5rZU16nKuQGKgTxXPs1cL94CO9x0Y2HlvxlqknLVODD9M2OBj5osJ0uCz4y2gAMSu5AIWu61t6tLHHSgTviwBs4kKHFZ+SqCyP9m1QFZj4ANDucGodXmUApW8IkdpQLyX31SII+05TyXfLrKzZVn08abvL1EP8ZxCLLpbsT8FthvyWKjmiU7rCyyPMqzuxfTPCQ/gD1beWZxUk6mHAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html db68536832d13fed",title:"tutorial html db68536832d13fed",src:"/cp4i-demohub/static/8872a7dffcc8a5f6a99c7b855e643c9e/3cbba/tutorial_html_db68536832d13fed.png",srcSet:["/cp4i-demohub/static/8872a7dffcc8a5f6a99c7b855e643c9e/7fc1e/tutorial_html_db68536832d13fed.png 288w","/cp4i-demohub/static/8872a7dffcc8a5f6a99c7b855e643c9e/a5df1/tutorial_html_db68536832d13fed.png 576w","/cp4i-demohub/static/8872a7dffcc8a5f6a99c7b855e643c9e/3cbba/tutorial_html_db68536832d13fed.png 1152w","/cp4i-demohub/static/8872a7dffcc8a5f6a99c7b855e643c9e/57ccb/tutorial_html_db68536832d13fed.png 1519w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click [","[Publish.]","]")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The Sandbox catalog is already selected.\nClick ",Object(n.b)("strong",{parentName:"p"},"[Publish]"),"."))),Object(n.b)("h2",null,"Summary"),Object(n.b)("p",null,"Congratulations! You have successfully configured and published a new\nproduct with multiple APIs. Throughout the tutorial, you explored the\nkey takeaways:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create a product.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Attach APIs to a product.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create a plan.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Publish a product."))),Object(n.b)("p",null,"Continue with the APIC Dev Jam! Go\nto ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"../Lab7"}),"APIC Dev Jam - Lab 7 - The Consumer Experience"),")] to\nexplore the consumer experience for APIs that have been exposed to your Sandbox catalog."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-apic-dev-jam-lab-6-index-md-ad3e65243cd032672290.js.map