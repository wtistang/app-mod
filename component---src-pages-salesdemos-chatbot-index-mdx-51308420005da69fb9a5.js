(window.webpackJsonp=window.webpackJsonp||[]).push([[51,42,43,70,71,73,74,75],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),o=a.n(i),n=a("NmYn"),c=a.n(n),s=a("Wbzz"),b=a("Xrax"),r=a("k4MR"),l=a("TSYQ"),d=a.n(l),p=a("QH2O"),m=a.n(p),u=a("qKvR"),g=function(e){var t,a=e.title,i=e.theme,o=e.tabs,n=void 0===o?[]:o;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=n.length,t[m.a.darkMode]="dark"===i,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),A=function(e){var t=e.relativePagePath,a=e.repository,i=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||i,n=o.baseUrl,c=o.subDirectory,b=n+"/edit/"+o.branch+c+"/src/pages"+t;return n?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},w=a("FCXl"),y=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),n=a===o,b=new RegExp(o+"/?(#.*)?$"),r=i.replace(b,a);return Object(u.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=n,t),f.listItem)},Object(u.b)(s.Link,{className:f.link,to:""+r},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},n))))))},t}(o.a.Component),x=a("MjG9"),j=a("CzIb"),O=a("Asxa"),N=a("OIbQ"),T=a.n(N),I=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(O.c,{className:T.a.row},Object(u.b)(O.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,n=t.frontmatter,l=void 0===n?{}:n,d=t.relativePagePath,p=t.titleType,m=l.tabs,h=l.title,y=l.theme,f=l.description,O=l.keywords,N=l.date,T=Object(j.a)().interiorTheme,k=Object(s.useStaticQuery)("2456312558").site.pathPrefix,C=k?i.pathname.replace(k,""):i.pathname,W=m?C.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",z=y||T;return Object(u.b)(r.a,{tabs:m,homepage:!1,theme:z,pageTitle:h,pageDescription:f,pageKeywords:O,titleType:p},Object(u.b)(g,{title:o?Object(u.b)(o,null):h,label:"label",tabs:m,theme:z}),m&&Object(u.b)(v,{title:h,slug:C,tabs:m,currentTab:W}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(A,{relativePagePath:d}),Object(u.b)(I,{date:N})),Object(u.b)(w.a,{pageContext:t,location:i,slug:C,tabs:m,currentTab:W}),Object(u.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},LXZl:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return h}));var i=a("wx14"),o=a("zLVn"),n=(a("q1tI"),a("7ljp")),c=a("013z"),s=a("rl46"),b=(a("qKvR"),["components"]),r={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},d=l("Row"),p=l("Column"),m=l("ResourceCard"),u={_frontmatter:r},g=c.a;function h(e){var t=e.components,a=Object(o.a)(e,b);return Object(n.b)(g,Object(i.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s.a,{name:"Ulas Cubuk",lastUpdated:"December 2020",readTimeMinutes:"120",mdxType:"ArticleDetails"}),Object(n.b)("p",null,"This demo shows how Watson Assistant on IBM cloud can be used together with CP4i to create an\nengaging chatbot experience which allows users to make online insurance claims and also upload\nphotographs of the items for which they wish to claim."),Object(n.b)(d,{className:"resource-card-group",mdxType:"Row"},Object(n.b)(p,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(m,{subTitle:"Storyboard",title:"Avoid the chaos with integrated cognitive technology",aspectRatio:"2:1",actionIcon:"Blog",href:"https://community.ibm.com/community/user/middleware/blogs/ulas-cubuk1/2020/09/09/integrated-cognitive-technology",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"232px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"93.9655172413793%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsTAAALEwEAmpwYAAACdklEQVQ4y3WUT0uiURTGX23SMUpEW7oL2phBtBFSXOgiiD6BSyGwZSC4cSX4OZywIBhNHHBX2iojpdTZFNqIQlToSGmjU5rz833NP9k8i8v13vOc8zznnleh3W4XCoXd3d1vEwgEAvv7+4+Pjy8vL41G488EhFKptLCwIAjCzMzM13GoVCrONzc34RNar9c/kqPRKBGnp6d3d3dI+CXi5uaGpKwGg4Hb9fX1SqXy+vr6ob5weHg4PT1dLBa73W6n0+mKeHt7YyVUEgUsFku1Wm02m9Tn/Pn5uU+WyWRUu7q62tvb+y4Cq+l0mna43W673b62tkaBZDI5KEAW+D0yie/v7z0eD5spEWycTidBrVaLNZFIcHJ5eYn5jY2N7e3tvyJ6ZLlcns/nSYbJogiEYJLcRBOUy+VcLhcxJpNJq9UqlUqHw0HeHplS19fXA6sD8FMyif5arWY2m6nv9/uDwSCbo6OjoWdafXBwEIlEOGENhULHx8cSk1YtLS3p9fqdnR21Wj03N7e6uorTTzyzko6V6N8iVlZWNBoN2cvlMpp5v9vbW5IOPT89PWUymZ/vyGaztADDNpttdnYWafRCp9MtLy8/PDzARNR/PUtPQgoknJycIG1+fh7xbAiTpq1fWRqpcDj84x3YjsfjvAq39JZpNRqNTOGA2SePesbSl3Ew84uLi16vV/I5OuFDz7T07OwsPY5UKoV/HhzDPKw0lUMyUhUKBW0cne0BKMVKUupfXFygefTbEGKxGGqZakaXh02Mg0k4Pz/3+XzoZ87IPkZmDK1WK3yupz4D59xubW3xSX6Uzb8EA5yeQOodVKYmhqUvaZT8D5ub6hqhB0WsAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Blog icon",title:"Blog icon",src:"/cp4i-demohub/static/c2d609ac5870cce57f74569ee6188331/d9af1/blog-icon.png",srcSet:["/cp4i-demohub/static/c2d609ac5870cce57f74569ee6188331/d9af1/blog-icon.png 232w"],sizes:"(max-width: 232px) 100vw, 232px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)(p,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(m,{subTitle:"Detailed steps",title:"Demo Instructions",aspectRatio:"2:1",actionIcon:"download",href:" /cp4i-demohub/pdf/chatbot-v0.1.pdf",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"320px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAADSElEQVQ4y42U2Su0YRjGHyFyRkTJiQMiu7HGjCWKQpaxjDggEaUcIKXmYHImSykpmiFLtiwl0ziQ5Q+QUEqKhmSM7bNv8/3GM0l9J99b83a/93Nf93Ld1zPi8/Pz8fHRbDZXVlYGBwfHxMSEh4dHRERERUWFhYVFR0djh4aGZmZmHhwc2Gy26+vrp6en9/d3q9Uq+MBVW1ubnJy8sbExNTW1srKyuLg4OztrNBonJiZw1tfXCyFIdHx8TPCf7we8oOzb21tqaur4+DgHHx8ftl8PEbx7e3vF90NTJycnEg9QcPzy8qJUKvV6PV5auru7e3h4eH5+vrm5IQJnd3c3SDc3N4k/OjpiWE7tbX99faWnp4+MjBB3dXVFIzIFEQyGk+jAwECQLi4uvIuLi4mhR0EERWjbYDAQhxcYYAzycnp7e4t9eno6ODg4NzdXVVWVlZVFPTthVOcsLS1teHgYsMViAclIYEgqub2/v2cQEhEwOjqqUqk4en19FZIhksHzv4T9fuQR4JycHPkp1tbWGhoa/Pz8EhISWDV2c3NzXV1ddXW1Wq1mhXhaWlqamppKS0vZGULw9/cnZmlpSSgUCjjIy8vTarWdnZ0hISF8IozW1ladTldSUuLh4SFJ7ujowNnT00NqPCkpKQIlYW1ubh4eHk5OTjJJUFBQf38/RPT19Z2dne3t7Tk7O1OZVldXV6enp9va2qRm7EWwtre3qYwBN2VlZV1dXSaTic+AgAAwlGI9GOTF6erqytvesgQTur+/jzDPz8+9vLwGBga2trakqlgy/RcVFcmFIwSmwx8fH+9oG/Du7i7E2JsRAsGsr69jwA39azQawNBbUVGRmJgoBRMbG+uovLOzIzXo7u4uwZeXl+3t7QwMF05OTnJmrt2PzuLi4r4TCMHAZP2ZJzc3F8EhKVbi6ekpuYVFb29vbPhzzDw0NMSefHx8IiMjy8vLgdEhMuACZ2dnJyUl5efnFxYW4uGooKCAYr6+vtiISqBS+uFWcXX/R2FcvoyMDIfCUClWTU0NCpufn+dvgCwzMzMLCwtjY2PLy8ssX34iTHil28bGRnn/BD+KsyF6pnPYpjE0yBaI4/3zCUP8H1Hm4uKCewLqL2VNnW2uf7FyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/cp4i-demohub/static/72b9c11886a51b44e05e552a0a39a3f3/46c5d/pdf-icon.png",srcSet:["/cp4i-demohub/static/72b9c11886a51b44e05e552a0a39a3f3/7fc1e/pdf-icon.png 288w","/cp4i-demohub/static/72b9c11886a51b44e05e552a0a39a3f3/46c5d/pdf-icon.png 320w"],sizes:"(max-width: 320px) 100vw, 320px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)(p,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(n.b)(m,{subTitle:"Resources and code samples",title:"Demo Artifacts",actionIcon:"arrowRight",aspectRatio:"2:1",href:"https://github.com/IBM/cp4i-demos/tree/main/ace-weather-chatbot",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/cp4i-demohub/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/cp4i-demohub/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(n.b)("h2",null,"Overview and description"),Object(n.b)("p",null,"An insurance company that specializes in ‘Storm insurance’ wants to streamline its claims process.\nThey have a chatbot that verifies that there was a storm on the date and location provided by the\ncustomer and provides an initial estimate for property damage, by analysing images uploaded by the\ncustomer and raises a ticket for human followup."),Object(n.b)("p",null,"This demo shows how Watson Assistant on IBM cloud can be used together with CP4i to create an\nengaging chatbot experience which allows users to make online insurance claims and also upload\nphotographs of the items for which they wish to claim."),Object(n.b)("p",null,"It shows how we can securely link cloud applications to CP4i - whether running on the cloud or\non-premise by exposing APIs securely via the IBM DataPower Gateway. "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABu0lEQVQoz42SzW/aQBDFfUAICXGAAxIgmlIQHxL/PUHlwplbpB5aqQkGkpjadYwNXX+s7V2/7q4NocqhrLSyPfv2N29mrH2+u8N4PEa324WmaSiXy9judoiiEC5J8WQQHE4UWZapzTkXT8C2GE4eB3COiaBYWr/fx2QywXQ6RbPZRLVaxXw+x2LxFX6UwiMx0kgoU3k1A2MMlMZ43YmETvIR+Ek4GwwGGA6HqNfrqFQqmM1mWC6XoFGkRI8/n7DdbBHHsbq82egwjGcRW8NxHKW5AL/0esqhhHY6HVWybdu5SBpLU9zP77FarQonXMVNl8Kn7KNDCZLA0WiERqOhgPv9Xh1KoVzS2fvicIXxxYMDh4QX3QXYarXQEy7b7bZyWKvV/gGeheeyOGd4MSx8ezTw/PoCQoiIZe9AOdnrXSqVYJrmlcPsMmEULbB/W/AcC5Zl4XQ8Fs3JE/4XmINyoL4n+BMk6uzHTjgrzH/fHvF2pLc5vC45EEPg4jtOGGyPqnPGuHqnMb+1ZAEKAhU7HN6QJElRtokwzIcSBgSe56p+3gT0fR/r9VoM65f6sSVU13W4rlskDBVMJvgL2Vi89DdOkI8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"chatbot overview",title:"chatbot overview",src:"/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/3cbba/chatbot-overview.png",srcSet:["/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/7fc1e/chatbot-overview.png 288w","/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/a5df1/chatbot-overview.png 576w","/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/3cbba/chatbot-overview.png 1152w","/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/0b124/chatbot-overview.png 1728w","/cp4i-demohub/static/783ed3b3390cd8da9b46cd970e06fd1d/f0200/chatbot-overview.png 2146w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"The demo creates three separate API implementations which are independently deployable and scalable\nbut are brought together to support one application."),Object(n.b)("p",null,"This also leverages Watson AI for image recognition and also IBM’s Weather service using the CP4i\nbuilt-in TWC Connector."),Object(n.b)("p",null,"This demo includes a Node.js GUI for the chatbot."),Object(n.b)("h2",null,"Solution Architecture"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACv0lEQVQ4y3VUzU8TQRzdP8Y/wav/hwfjiajBmBAPJh48e9DogUiDCDEGvIoGDwbRRAUDgWgtFmjpJ3S77e7s9/fXc2Z2t6WAk0y7mZnf+719780KYZTANC00Gk202m00mi20Wm30RBFBGMMLIqiaDkJU6IaJKE7ARpqmSJMkm+w5W4TAihzX50Xt7imO6k3+7DguXD+CYftotLq8YX8gw/FjDnBh5KACcMkmHVFcrCeIwwi0LyL6D8R8Ve/U4G4swFsvwTnYylbTBAJrluQdOwMHX8oKvlUIdNNDW42wsmtjs+nx/Z22i7d7DvYHgNk5An4uAd/nge5OTpIDprR7psvcWgdXpn7g6sw2uqKBxxs2hFsE10o6pRfg+rIBYUrDzHsT21WC6YUWHi53cXe+jtLHDscQCoHZGOo+Nn4r2KxqSKjYjOHqvo/dk5CdQrkX4NWWhSaJsb43xJ3Zv3j0pobpF1XMfsgBGVjhJivygpibQQgBkQfQpC7UoYh+X4JlGtSskBd+/qXg/ssDPFg8xL1SFYufTsaAjhtAlhUeC0n1oRgBDNPEaU/EYa1BXe5AkiSohoOu7PPCr2WCm08ruD1bxY0nFTx/1x6/ckw1ZPnygxCi4oIYPizahDmdmUYn/WGZHWjB5bHJpRPObxIzhGoGZ4+hiFZMQYd6kGUubzKafC0HLCYbqhXCdKMRVERZMY2jKIbthegpWYTYW7EG7EwBOuFyAcgY6nY44sdukdgfoC8NqIYuTimg5QRwKDjRDNTrx/SaSrzpCPBsdHSbMRnf15jGh2nHNOYa6mMNbccDUTVqoM0ZT+YwzZIuqtRpzf6v6FzDMwQumMJva5qhH8p/8Lr8DCv7cxA1hWYSsLyIMo75R0F3IqqhPwFw3oMJwGNygNXaEtbqyzimXxbNSqimAddVptlkk5lWFF/G8h9kjbpe3K9YqwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"chatbot architecture",title:"chatbot architecture",src:"/cp4i-demohub/static/57fec89a3a65f75578539617020e2d7d/3cbba/chatbot-architecture.png",srcSet:["/cp4i-demohub/static/57fec89a3a65f75578539617020e2d7d/7fc1e/chatbot-architecture.png 288w","/cp4i-demohub/static/57fec89a3a65f75578539617020e2d7d/a5df1/chatbot-architecture.png 576w","/cp4i-demohub/static/57fec89a3a65f75578539617020e2d7d/3cbba/chatbot-architecture.png 1152w","/cp4i-demohub/static/57fec89a3a65f75578539617020e2d7d/29764/chatbot-architecture.png 1646w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h3",null,"Other resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.ibm.com/PHIPPEN/demos-2020"},"Flows for Designer, API Connect, Watson Assistant")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.ibm.com/PHIPPEN/watson-assistant"},"Chatbot Node UI"))),Object(n.b)("p",null,"Get started with the demo by reviweing the storyboard/video instructions, detailed instructions and additional artifcats."))}h.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-salesdemos-chatbot-index-mdx-51308420005da69fb9a5.js.map