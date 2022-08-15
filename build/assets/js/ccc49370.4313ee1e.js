"use strict";(self.webpackChunkdocusaurus_git_pages=self.webpackChunkdocusaurus_git_pages||[]).push([[103],{390:(e,t,n)=>{n.d(t,{Z:()=>A});var a=n(7294),l=n(6010),r=n(9460),o=n(4996);function s(e){var t;let{children:n,className:l}=e;const{frontMatter:s,assets:c}=(0,r.C)(),{withBaseUrl:i}=(0,o.C)(),m=null!=(t=c.image)?t:s.image;return a.createElement("article",{className:l,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},m&&a.createElement("meta",{itemProp:"image",content:i(m,{absolute:!0})}),n)}var c=n(9960);const i="title_f1Hy";function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:o}=(0,r.C)(),{permalink:s,title:m}=n,u=o?"h1":"h2";return a.createElement(u,{className:(0,l.Z)(i,t),itemProp:"headline"},o?m:a.createElement(c.Z,{itemProp:"url",to:s},m))}var u=n(5999),d=n(8824);const g="container_mt6G";function f(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,d.c)();return t=>{const n=Math.ceil(t);return e(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return a.createElement(a.Fragment,null,n(t))}function p(e){let{date:t,formattedDate:n}=e;return a.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function h(){return a.createElement(a.Fragment,null," \xb7 ")}function v(e){let{className:t}=e;const{metadata:n}=(0,r.C)(),{date:o,formattedDate:s,readingTime:c}=n;return a.createElement("div",{className:(0,l.Z)(g,"margin-vert--md",t)},a.createElement(p,{date:o,formattedDate:s}),void 0!==c&&a.createElement(a.Fragment,null,a.createElement(h,null),a.createElement(f,{readingTime:c})))}function E(e){return e.href?a.createElement(c.Z,e):a.createElement(a.Fragment,null,e.children)}function b(e){let{author:t,className:n}=e;const{name:r,title:o,url:s,imageURL:c,email:i}=t,m=s||i&&"mailto:"+i||void 0;return a.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",n)},c&&a.createElement(E,{href:m,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:c,alt:r})),r&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(E,{href:m,itemProp:"url"},a.createElement("span",{itemProp:"name"},r))),o&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const N="authorCol_Hf19",P="imageOnlyAuthorRow_pa_O",_="imageOnlyAuthorCol_G86a";function L(e){let{className:t}=e;const{metadata:{authors:n},assets:o}=(0,r.C)();if(0===n.length)return null;const s=n.every((e=>{let{name:t}=e;return!t}));return a.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?P:"row",t)},n.map(((e,t)=>{var n;return a.createElement("div",{className:(0,l.Z)(!s&&"col col--6",s?_:N),key:t},a.createElement(b,{author:{...e,imageURL:null!=(n=o.authorsImageUrls[t])?n:e.imageURL}}))})))}function C(){return a.createElement("header",null,a.createElement(m,null),a.createElement(v,null),a.createElement(L,null))}var Z=n(8780),x=n(210);function k(e){let{children:t,className:n}=e;const{isBlogPostPage:o}=(0,r.C)();return a.createElement("div",{id:o?Z.blogPostContainerID:void 0,className:(0,l.Z)("markdown",n),itemProp:"articleBody"},a.createElement(x.Z,null,t))}var H=n(4881),y=n(1526),w=n(7462);function T(){return a.createElement("b",null,a.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function I(e){const{blogPostTitle:t,...n}=e;return a.createElement(c.Z,(0,w.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),a.createElement(T,null))}const M="blogPostFooterDetailsFull_mRVl";function B(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:n,title:o,editUrl:s,hasTruncateMarker:c}=e,i=!t&&c,m=n.length>0;return m||i||s?a.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&M)},m&&a.createElement("div",{className:(0,l.Z)("col",{"col--9":i})},a.createElement(y.Z,{tags:n})),t&&s&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(H.Z,{editUrl:s})),i&&a.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},a.createElement(I,{blogPostTitle:o,to:e.permalink}))):null}function A(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return a.createElement(s,{className:(0,l.Z)(o,n)},a.createElement(C,null),a.createElement(k,null,t),a.createElement(B,null))}},5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(7294),l=n(6010),r=n(1944),o=n(5281),s=n(9460),c=n(9058),i=n(390),m=n(7462),u=n(5999),d=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){var e;const{assets:t,metadata:n}=(0,s.C)(),{title:l,description:o,date:c,tags:i,authors:m,frontMatter:u}=n,{keywords:d}=u,g=null!=(e=t.image)?e:u.image;return a.createElement(r.d,{title:l,description:o,keywords:d,image:g},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&a.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var p=n(9407);function h(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,s.C)(),{nextItem:o,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:h}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&r.length>0?a.createElement(p.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:h}):void 0},a.createElement(i.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function v(e){const t=e.content;return a.createElement(s.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(f,null),a.createElement(h,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),l=n(7294),r=n(6010),o=n(3743);const s="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),l=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function i(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>c(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=i(s,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:d,...f}=e;const p=(0,r.L)(),h=null!=m?m:p.tableOfContents.minHeadingLevel,v=null!=d?d:p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return u((0,l.useMemo)((()=>{if(c&&i)return{linkClassName:c,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:v}}),[c,i,h,v])),l.createElement(g,(0,a.Z)({toc:E,className:n,linkClassName:c},f))}},9460:(e,t,n)=>{n.d(t,{C:()=>s,n:()=>o});var a=n(7294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,content:n,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:l});return a.createElement(r.Provider,{value:o},t)}function s(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},8824:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(7294),l=n(2263);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),s}}),[e])}function i(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);const l=n.select(t),r=n.pluralForms.indexOf(l);return a[Math.min(r,a.length-1)]}(n,t,e)}}}}]);