(window.webpackJsonp=window.webpackJsonp||[]).push([[28,40,41,68,69,71,72,73],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),b=a.n(i),c=a("NmYn"),l=a.n(c),o=a("Wbzz"),n=a("Xrax"),r=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),d=a.n(m),u=a("qKvR"),A=function(e){var t,a=e.title,i=e.theme,b=e.tabs,c=void 0===b?[]:b;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=c.length,t[d.a.darkMode]="dark"===i,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||i,c=b.baseUrl,l=b.subDirectory,n=c+"/edit/"+b.branch+l+"/src/pages"+t;return c?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:n},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),N=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,b=i.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),c=a===b,n=new RegExp(b+"/?(#.*)?$"),r=i.replace(n,a);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=c,t),N.listItem)},Object(u.b)(o.Link,{className:N.link,to:""+r},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:N.list},c))))))},t}(b.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,b=e.Title,c=t.frontmatter,s=void 0===c?{}:c,p=t.relativePagePath,m=t.titleType,d=s.tabs,g=s.title,O=s.theme,N=s.description,I=s.keywords,x=Object(y.a)().interiorTheme,E=Object(o.useStaticQuery)("2456312558").site.pathPrefix,T=E?i.pathname.replace(E,""):i.pathname,k=d?T.split("/").filter(Boolean).slice(-1)[0]||l()(d[0],{lower:!0}):"",P=O||x;return Object(u.b)(r.a,{tabs:d,homepage:!1,theme:P,pageTitle:g,pageDescription:N,pageKeywords:I,titleType:m},Object(u.b)(A,{title:b?Object(u.b)(b,null):g,label:"label",tabs:d,theme:P}),d&&Object(u.b)(j,{title:g,slug:T,tabs:d,currentTab:k}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(f.a,{pageContext:t,location:i,slug:T,tabs:d,currentTab:k}),Object(u.b)(n.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},nnuE:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));var i=a("wx14"),b=a("zLVn"),c=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),{}),n={_frontmatter:o},r=l.a;function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(c.b)(r,Object(i.a)({},n,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Your work as an Application Developer and API Designer is now complete.\nIt’s time to switch roles and become an API Product Manager. The role\nof the API Product Manager is to take the developed assets and bundle\nthem together using a go-to-market strategy."),Object(c.b)("p",null,"In this case, you will publish the APIs from the accessories project\ntogether as a bundled product offering to API Consumers. Additionally,\nyou will create two plans which have different levels of access to your\nAPIs."),Object(c.b)("p",null,"In this tutorial, you will explore the following key capabilities:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Create a Product")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Attach APIs to a Product")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Create a Plan")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Publish a Product"))),Object(c.b)("h2",null,"APIC Dev Jam Series"),Object(c.b)("p",null,"The APIC Dev Jam Series is a hands-on workshop with lab exercises that\nwalk you through designing, publishing, and securing APIs. This workshop\nis for API developers, architects, and line of business people who want\nto create a successful API strategy. There are 8 labs and each is 30\nminutes long. Make sure you choose enough time in your reservation to\nget through all the labs! "),Object(c.b)("p",null,"[NOTE: ]",Object(c.b)("strong",{parentName:"p"},"[This demo environment contains a\nfull API Connect installation in Cloud Pak for Integration. The login\ninformation to the APIC cluster will be sent in a separate email when\nyou reserve the instance. Use Google Chrome, Firefox or Microsoft Edge\nto access the cluster using the credentials supplied. Make sure you\nlogin using API Manager User Registry not Common Services\nregistry.]")),Object(c.b)("p",null,"Prerequisites: Labs 1-5"),Object(c.b)("h2",null,"Create an API Product"),Object(c.b)("p",null,"Before being published, APIs are packaged into Products. In Lab 4, you\nsaw how to create a new Product. In this section, you will create\nanother new Product for the accessories APIs, as well as create two new\nPlans to which consumers can subscribe."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Go to the Develop home page.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click [","[Add. ]","]Select [","[Product]","].")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select ",Object(c.b)("strong",{parentName:"p"},"[New product]","*"),".*")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Provide the following configuration for the new product:"),Object(c.b)("p",{parentName:"li"},"Title: [","[Accessories]","]"),Object(c.b)("p",{parentName:"li"},"Name: [","[accessories]","]"),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.51388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVQ4y5WTC26DMAyGue7utytMu8QqVdq6rrQ8mofzgNSzzejSFmgb6ScQ4s9/sCle3gAxAO6rBuumRaUNpnTC02leU4PXtU9YrOqAzgW04NH5KAqxI/WTcqFDYz3+lBV+7w4yW4oHirMuYhH+boAWY4yzDsbBwFYBrtYb/NrucbursNUgDAMBCwMDTBuQTH7BXeySAJXxWDZWIC70Z5g45AuDqkbRRpANHHQtCEMiPhoHj/Oos8PxuBYcdl2PfUrT6pMUy/luEjQYyxwetSUHadLd6FqK4i8B1zo75LZplKFv2GeQXMMa3ANyUTirMg41tYOlI1mufCbgNdrMI1JCvQwcXo59xMe/FCWjRK12+Pq+xo9NK9A5l8X4UR/RZ6mxVm7x2MX/izDpLg/kPwgeKcqc8rZYapUbh/e0BLgBcgWX9AxMgIe6xao+0q93lJmfc0krPQH9Bd0j3Rerg2qiAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 8a48fefa2dfaf506",title:"tutorial html 8a48fefa2dfaf506",src:"/cp4i-demohub/static/1bf0d80bb6c02b7ed22e021efe8c5a38/3cbba/tutorial_html_8a48fefa2dfaf506.png",srcSet:["/cp4i-demohub/static/1bf0d80bb6c02b7ed22e021efe8c5a38/7fc1e/tutorial_html_8a48fefa2dfaf506.png 288w","/cp4i-demohub/static/1bf0d80bb6c02b7ed22e021efe8c5a38/a5df1/tutorial_html_8a48fefa2dfaf506.png 576w","/cp4i-demohub/static/1bf0d80bb6c02b7ed22e021efe8c5a38/3cbba/tutorial_html_8a48fefa2dfaf506.png 1152w","/cp4i-demohub/static/1bf0d80bb6c02b7ed22e021efe8c5a38/6b4c9/tutorial_html_8a48fefa2dfaf506.png 1419w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"[Next]"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select the checkboxes next\nto ",Object(c.b)("strong",{parentName:"p"},"[financing]")," and [","[logistics]","].\nThen\nclick [","[Next]","]."),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVQoz51R7U7DMAzM+z8Rz8BTIPgxBuuaDzeJk7Y3O6MsgwISkU62kvP5TjEhEJwP8CGg1go967r+ir2j97kuMKMjUGSEKbc6pYKY67V2/YaYi3AT3k4jju9nnG34nFOYYfRw4nK0HknIikARXEQoZnE+IXNt0DcdGizh5XDC8WRF2IooIYgoRRH0lDBLVI2ulZkRY8Q8zyilCFj6ikWAdWmCXtLYkJF4/pbADD6LiJBEUF1l1qi59UWQWIncHDwdXKvbMDVXNzTBPj91m7Z7dTK4iNdhwsPjMxzlu/derAnq9q+broQbMX58xrosd2J7MP2mPUK/xE+Mv/jmp03/xQXMG7wbjiA0ggAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html b454495554d463d4",title:"tutorial html b454495554d463d4",src:"/cp4i-demohub/static/87839b261d2f3f584358437347b9fdef/3cbba/tutorial_html_b454495554d463d4.png",srcSet:["/cp4i-demohub/static/87839b261d2f3f584358437347b9fdef/7fc1e/tutorial_html_b454495554d463d4.png 288w","/cp4i-demohub/static/87839b261d2f3f584358437347b9fdef/a5df1/tutorial_html_b454495554d463d4.png 576w","/cp4i-demohub/static/87839b261d2f3f584358437347b9fdef/3cbba/tutorial_html_b454495554d463d4.png 1152w","/cp4i-demohub/static/87839b261d2f3f584358437347b9fdef/0d642/tutorial_html_b454495554d463d4.png 1512w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Provide the following Plan details:"),Object(c.b)("p",{parentName:"li"},"Title: ",Object(c.b)("strong",{parentName:"p"},"[Silver]")),Object(c.b)("p",{parentName:"li"},"Description: ",Object(c.b)("strong",{parentName:"p"},"[Limited access to the Accessories APIs]")),Object(c.b)("p",{parentName:"li"},"Keep rate limit of 100 with an interval of 1 hour")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click [","[Next]","].")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Modify the Visibility so that the product is only visible\nto [","[Authenticated\nusers]","].\nThen\nclick [","[Next]","]."),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.333333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABOElEQVQoz42Sa26EMAyEuf+VeoVeoH9bVYLCsgRCEvJgOs5Cy7JdaKQhwYq+eGwXqu/RqZsm7zHPQOJnPtF+SUjixWAmGOfhpkCgKB5K7o7Wo2kVqrpF1VzRa8vYlOOF/OjREjghpYSzJQ8Po8NneUFZX6kWNeHdYG7AEAKcc4T9bS3tZAnUdNUoJmI8/yXrkGGSZdENFor0ECI84T+i/RATIrOOcRHPlpYFaATAXW+UMzTWQeTcxMvuV4zFGJeCL43YZLiFrHsGfol/pfDftQJXwF5FzwL32mR7Uset7uzuLD8FSscuasx1FKvGWqxlkK7fNYaPWHeSoR4Neg73nFIGbMWiPVj2nMVjy7Q7UD4kKj5Ihl3GQmpXtiPd2NzhZ9BiPejdCKxS2qEiqOkMXl4/8PZ+PczyG5pqqtbgDt4jAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 21d7e02a18ac77eb",title:"tutorial html 21d7e02a18ac77eb",src:"/cp4i-demohub/static/5bac7dfa362936059a73b1d05b6c72b4/3cbba/tutorial_html_21d7e02a18ac77eb.png",srcSet:["/cp4i-demohub/static/5bac7dfa362936059a73b1d05b6c72b4/7fc1e/tutorial_html_21d7e02a18ac77eb.png 288w","/cp4i-demohub/static/5bac7dfa362936059a73b1d05b6c72b4/a5df1/tutorial_html_21d7e02a18ac77eb.png 576w","/cp4i-demohub/static/5bac7dfa362936059a73b1d05b6c72b4/3cbba/tutorial_html_21d7e02a18ac77eb.png 1152w","/cp4i-demohub/static/5bac7dfa362936059a73b1d05b6c72b4/0c365/tutorial_html_21d7e02a18ac77eb.png 1453w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The product has been created! Click [","[Edit\nProduct]","] to\nmake changes."),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.708333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9klEQVQoz42RCU7DMBBFff9rcAtugoSEKkoIAbLYrj3x9vE4dUgDLYz0lGisefMTC6kUpNKYpMLsPGJMCDFehc+ZlLAWv6fEcwniZB3s7OFDhPPhTww58Ezb9XhuOhxfO3wOOZS2uT9DkFtkeceyClc4R6K8XJsZzVuPjyzqR12YlCmLRDseIOUJlqjEvgWXPQsHZaGMy4l9gWXcF83wBJXtIQT8p2pCY90qqZSE2koQzXCbC4k7ao8/vSbcSuqzCC19/+jl4BLu8e0fWom7+wc8Hsc1ZZVsEdttukj3LIOTJry8a4yKfqS6EP7W3FOHOZm5IWO+ABTuvsCBDtNYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 76be1bfa7168087f",title:"tutorial html 76be1bfa7168087f",src:"/cp4i-demohub/static/04f5bcd4053effc20888d31f137f651e/3cbba/tutorial_html_76be1bfa7168087f.png",srcSet:["/cp4i-demohub/static/04f5bcd4053effc20888d31f137f651e/7fc1e/tutorial_html_76be1bfa7168087f.png 288w","/cp4i-demohub/static/04f5bcd4053effc20888d31f137f651e/a5df1/tutorial_html_76be1bfa7168087f.png 576w","/cp4i-demohub/static/04f5bcd4053effc20888d31f137f651e/3cbba/tutorial_html_76be1bfa7168087f.png 1152w","/cp4i-demohub/static/04f5bcd4053effc20888d31f137f651e/ab92f/tutorial_html_76be1bfa7168087f.png 1477w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the Product Setup section, specify the following details:"),Object(c.b)("p",{parentName:"li"},"Summary: [","[The Accessories product will provide really awesome APIs to your application.]","]"))),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{}),"Contact Name: Thomas Watson\n\nContact Email: watson@ibm.com\n\nContact URL: https://developer.ibm.com/apiconnect/\n\n")),Object(c.b)("ol",{start:12},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Specify a License and Terms of Service:"),Object(c.b)("p",{parentName:"li"},"License Name: [","[The MIT License (MIT)]","]"),Object(c.b)("p",{parentName:"li"},"License\nURL: [","[https://opensource.org/licenses/MIT]","]"),Object(c.b)("p",{parentName:"li"},"Terms of Service: ",Object(c.b)("em",{parentName:"p"},"paste the contents of the box below:")))),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{}),'[[Copyright (c) 2016 IBM Permission is hereby granted, free of charge,\nto any person obtaining a copy of this software and associated\ndocumentation files (the \\"Software\\"), to deal in the Software without\nrestriction, including without limitation the rights to use, copy,\nmodify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to\ndo so, subject to the following conditions: The above copyright notice\nand this permission notice shall be included in all copies or\nsubstantial portions of the Software. THE SOFTWARE IS PROVIDED \\"AS\nIS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT\nNOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A\nPARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\nWHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT\nOF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE\nSOFTWARE.]]\n')),Object(c.b)("ol",{start:13},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Scroll to the bottom and\nclick [","[Save]","].")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Navigate to the Plans section. Click the ",Object(c.b)("strong",{parentName:"p"},"Add")," button to add a new\nplan.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Fill in the following details:"),Object(c.b)("p",{parentName:"li"},"Title: [","[Gold]","]"),Object(c.b)("p",{parentName:"li"},"Description: ",Object(c.b)("strong",{parentName:"p"},"[Unlimited access to the Accessories APIs for approved\nusers]")),Object(c.b)("p",{parentName:"li"},"Approval: check"),Object(c.b)("p",{parentName:"li"},"Rate Limits: Click ",Object(c.b)("strong",{parentName:"p"},"unlimited")," on rate to make this plan unlimited."),Object(c.b)("p",{parentName:"li"},"Burst Limits: Delete the default burst-limit."),Object(c.b)("span",Object(i.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAABgElEQVQ4y42Ty07DMBBF8///wJYlLFmxoCAh2BUJgVQkEJA2QClNE8eOX5eZSVz6oAVLt47t+MydmTSblQrzssLXfAFtWqThQ8DByT0OT0dorYf3AftHRIwRmWoaKKXoghegaowAWEpbKOOW632yLqAxFtlw9IbL2wmu795QfNZY1A0dOJFuvSit98n0BrLz4SuOBg84vnjE06SEs1YiOkqR007z34poGGitQ6B0qQBk26P4mCEvphJNt+5f7lgt3RVg1bSoVIsFiSFlpamWVmqyVieX5s39AENlYQmwJiBLGkBaVDW9aH/tovzGuHXy8l5hcDOWjLIEYihvMCxw7ZyTzrOc5y5SaQimtZE1g1nOsbsuI2nKKpDbro2hF9p1bzFuzazQr5/J4dlwh0OG+d4Bu2S36flnLy6hljLqMthyaMWhoY976aCHpWce63udw3xa44q+Y202HRIwOQj9pa6OQUDsJtV1NQibKWaq+6dsppyir4oHB8rz8c5zHsz5BqZE97NZXLIQAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html bee42885833ec65a",title:"tutorial html bee42885833ec65a",src:"/cp4i-demohub/static/b1eb6e1a358bdbedec8a1ec00a1abe78/3cbba/tutorial_html_bee42885833ec65a.png",srcSet:["/cp4i-demohub/static/b1eb6e1a358bdbedec8a1ec00a1abe78/7fc1e/tutorial_html_bee42885833ec65a.png 288w","/cp4i-demohub/static/b1eb6e1a358bdbedec8a1ec00a1abe78/a5df1/tutorial_html_bee42885833ec65a.png 576w","/cp4i-demohub/static/b1eb6e1a358bdbedec8a1ec00a1abe78/3cbba/tutorial_html_bee42885833ec65a.png 1152w","/cp4i-demohub/static/b1eb6e1a358bdbedec8a1ec00a1abe78/0417f/tutorial_html_bee42885833ec65a.png 1436w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Save")," your changes. Then\nclick [","[Develop]","] in\nthe main menu on the left."))),Object(c.b)("h2",null,"Publish the API Product"),Object(c.b)("p",null,"Publish the Accessories Product and make it ready for consumers."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"On The Develop page, you should see the Accessories-1.0.0 Product in\nthe list.  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVQoz4VSS3bEIAzL/c/UK/QU3cxrJx8CNoYEVJtMktkks9BD2FgWho44YvYBtQKl1M+oJ691g/G1FOSloHOeMUweowugmBXpHpyOc54ErOvvQPj6/sHoIzpz2I8OvYoaFxHEC4gkjJODDwEpqdDfE5ObW25wBK/NupSX1m1yHsuy3GJdVwQibcyN55wVW9zytAlmTEHweM7tCusHQTfPIGKdW1ETDjFKi6eUEZqgEhbbRO3OreudIMfYrru7lRc3Y4ego4RH73WO1BL5AiY6ew/W5iZi87QfYnHZHZJaNnft9ViadZvrFaxQXmeibDW257i9fnd+iXysfAc5+XvNjn/8xb5DcgBiCAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html 89ab455eda83363d",title:"tutorial html 89ab455eda83363d",src:"/cp4i-demohub/static/729ae4b2ed24583b6cc62ae480ac7ec5/3cbba/tutorial_html_89ab455eda83363d.png",srcSet:["/cp4i-demohub/static/729ae4b2ed24583b6cc62ae480ac7ec5/7fc1e/tutorial_html_89ab455eda83363d.png 288w","/cp4i-demohub/static/729ae4b2ed24583b6cc62ae480ac7ec5/a5df1/tutorial_html_89ab455eda83363d.png 576w","/cp4i-demohub/static/729ae4b2ed24583b6cc62ae480ac7ec5/3cbba/tutorial_html_89ab455eda83363d.png 1152w","/cp4i-demohub/static/729ae4b2ed24583b6cc62ae480ac7ec5/57ccb/tutorial_html_89ab455eda83363d.png 1519w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click the [","[3 dot menu\nbutton]","] in\nthe row for\nAccessories-1.0.0.  ",Object(c.b)("span",Object(i.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(c.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.166666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJUlEQVQoz5WSV3LDMAxEdf9L5Qo5Qn4ytidRIQEWUGUDUJLjzMglH28ItgWwZEMc4ImxAJjnBfPyAtu5ZaPOlVxmNI4iOkcYfEBI5QlSx7jFFDKkjPg4Oby9fyLlgoZDRNs7hfRgQs5ZN46xva4fEPSOxefLF4gZIeq6C+AoaCyDZRs8Y5omjON4F9sntccSWyyloJTxeq8K2sLAGadvXzM9ExycQ9oE+8Ehi9Q4S9krVE+0dwoJrBSdPxKNMV7PsD6obHHK5ukm6Fhwbkl9WA/fRS96T9VPE2m7XhOY76JVi+7rK1ubXJHasnkqMq7jAdaaYXFUEcMepu+6mrRZv4L8+RaPiDfsa8RR/zLVRA0nM3M19Hf8H7twfZRaVXy9wiNuhX8AtI1ZvQzLGwYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"tutorial html db68536832d13fed",title:"tutorial html db68536832d13fed",src:"/cp4i-demohub/static/8872a7dffcc8a5f6a99c7b855e643c9e/3cbba/tutorial_html_db68536832d13fed.png",srcSet:["/cp4i-demohub/static/8872a7dffcc8a5f6a99c7b855e643c9e/7fc1e/tutorial_html_db68536832d13fed.png 288w","/cp4i-demohub/static/8872a7dffcc8a5f6a99c7b855e643c9e/a5df1/tutorial_html_db68536832d13fed.png 576w","/cp4i-demohub/static/8872a7dffcc8a5f6a99c7b855e643c9e/3cbba/tutorial_html_db68536832d13fed.png 1152w","/cp4i-demohub/static/8872a7dffcc8a5f6a99c7b855e643c9e/57ccb/tutorial_html_db68536832d13fed.png 1519w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click [","[Publish.]","]")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The Sandbox catalog is already selected.\nClick ",Object(c.b)("strong",{parentName:"p"},"[Publish]"),"."))),Object(c.b)("h2",null,"Summary"),Object(c.b)("p",null,"Congratulations! You have successfully configured and published a new\nproduct with multiple APIs. Throughout the tutorial, you explored the\nkey takeaways:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Create a product.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Attach APIs to a product.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Create a plan.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Publish a product."))),Object(c.b)("p",null,"Continue with the APIC Dev Jam! Go\nto ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"../Lab7"}),"APIC Dev Jam - Lab 7 - The Consumer Experience"),")] to\nexplore the consumer experience for APIs that have been exposed to your Sandbox catalog."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-apic-dev-jam-lab-6-index-md-0ac7f30c6066ab567518.js.map