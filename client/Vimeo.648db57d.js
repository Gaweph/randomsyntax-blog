import{S as s,i as e,s as a,o as r,e as t,r as i,u as l,h as c,g as o,w as d,D as n,j as h,x as f,z as m}from"./client.f1de05a8.js";function u(s){let e,a,u,v,p,j,x,b;return{c(){e=r("div"),a=r("br"),u=t(),v=r("div"),p=r("iframe"),x=t(),b=r("br"),this.h()},l(s){e=i(s,"DIV",{style:!0});var r=l(e);a=i(r,"BR",{}),u=c(r),v=i(r,"DIV",{class:!0});var t=l(v);p=i(t,"IFRAME",{src:!0,frameborder:!0,allowfullscreen:!0,title:!0,class:!0}),l(p).forEach(o),t.forEach(o),x=c(r),b=i(r,"BR",{}),r.forEach(o),this.h()},h(){p.src!==(j="//player.vimeo.com/video/"+s[0])&&d(p,"src",j),d(p,"frameborder","0"),p.allowFullscreen="",d(p,"title",s[1]),d(p,"class","svelte-ghjj6u"),d(v,"class","video-container svelte-ghjj6u"),n(e,"max-width","700px")},m(s,r){h(s,e,r),f(e,a),f(e,u),f(e,v),f(v,p),f(e,x),f(e,b)},p(s,[e]){1&e&&p.src!==(j="//player.vimeo.com/video/"+s[0])&&d(p,"src",j),2&e&&d(p,"title",s[1])},i:m,o:m,d(s){s&&o(e)}}}function v(s,e,a){let{id:r}=e,{title:t}=e;return s.$set=s=>{"id"in s&&a(0,r=s.id),"title"in s&&a(1,t=s.title)},[r,t]}class p extends s{constructor(s){super(),e(this,s,v,u,a,{id:0,title:1})}}export{p as V};
