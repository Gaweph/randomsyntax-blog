import{S as s,i as e,s as t,u as l,e as i,v as a,w as n,h as o,g as r,x as c,j as h,y as m,q as u,J as g,G as f,p,l as d,L as x}from"./client.f2ad848a.js";function b(s,e,t){const l=s.slice();return l[7]=e[t],l}function j(s){let e,t,u,g,f,p;return{c(){e=l("a"),t=l("img"),f=i(),this.h()},l(s){e=a(s,"A",{href:!0,class:!0});var l=n(e);t=a(l,"IMG",{alt:!0,src:!0,class:!0}),f=o(l),l.forEach(r),this.h()},h(){c(t,"alt",u=s[3](s[7])),t.src!==(g=s[2](s[7]))&&c(t,"src",g),c(t,"class","svelte-6sopm9"),c(e,"href",p=s[7]),c(e,"class","svelte-6sopm9")},m(s,l){h(s,e,l),m(e,t),m(e,f)},p(s,l){1&l&&u!==(u=s[3](s[7]))&&c(t,"alt",u),1&l&&t.src!==(g=s[2](s[7]))&&c(t,"src",g),1&l&&p!==(p=s[7])&&c(e,"href",p)},d(s){s&&r(e)}}}function v(s){let e,t,x,v,y,I,T=s[0],w=[];for(let e=0;e<T.length;e+=1)w[e]=j(b(s,T,e));return{c(){e=l("script"),x=l("link"),v=i(),y=l("div");for(let s=0;s<w.length;s+=1)w[s].c();this.h()},l(s){const t=u('[data-svelte="svelte-coxi64"]',document.head);e=a(t,"SCRIPT",{src:!0,integrity:!0,crossorigin:!0}),n(e).forEach(r),x=a(t,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),t.forEach(r),v=o(s),y=a(s,"DIV",{class:!0});var l=n(y);for(let s=0;s<w.length;s+=1)w[s].l(l);l.forEach(r),this.h()},h(){e.src!==(t="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.2.1/simple-lightbox.min.js")&&c(e,"src","https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.2.1/simple-lightbox.min.js"),c(e,"integrity","sha256-XC8w+g7s6jfpD0qiG2Goj2wuZ0747UaT/E0Nf2ulmew="),c(e,"crossorigin","anonymous"),c(x,"rel","stylesheet"),c(x,"href","https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.2.1/simple-lightbox.min.css"),c(x,"integrity","sha256-UZP8fxAiI5/RA82wRNC5aN+ebMcpGxJCnDzlKzuIVXY="),c(x,"crossorigin","anonymous"),c(y,"class","svelte-6sopm9"),g(y,"solo-image",1===s[0].length)},m(t,l,i){m(document.head,e),m(document.head,x),h(t,v,l),h(t,y,l);for(let s=0;s<w.length;s+=1)w[s].m(y,null);s[6](y),i&&I(),I=f(e,"load",s[4])},p(s,[e]){if(13&e){let t;for(T=s[0],t=0;t<T.length;t+=1){const l=b(s,T,t);w[t]?w[t].p(l,e):(w[t]=j(l),w[t].c(),w[t].m(y,null))}for(;t<w.length;t+=1)w[t].d(1);w.length=T.length}1&e&&g(y,"solo-image",1===s[0].length)},i:p,o:p,d(t){r(e),r(x),t&&r(v),t&&r(y),d(w,t),s[6](null),I()}}}function y(s,e,t){let{images:l=[]}=e,{useThumbnail:i=!0}=e;let a;return s.$set=s=>{"images"in s&&t(0,l=s.images),"useThumbnail"in s&&t(5,i=s.useThumbnail)},[l,a,s=>{if(!i)return s;var e=s.lastIndexOf(".");return[s.slice(0,e),"_thumb",s.slice(e)].join("")},s=>{var e=s.split("/").pop();return e.slice(0,e.lastIndexOf("."))},function(){new SimpleLightbox(a.getElementsByTagName("a"),{})},i,function(s){x[s?"unshift":"push"](()=>{t(1,a=s)})}]}class I extends s{constructor(s){super(),e(this,s,y,v,t,{images:0,useThumbnail:5})}}export{I as G};
