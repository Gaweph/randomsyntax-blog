import{S as s,i as t,s as a,u as e,n as r,e as l,c,v as o,w as n,o as i,g,h as f,a as p,x as h,j as u,y as j,m,z as $,t as v,b as d,d as y}from"./client.f2ad848a.js";import{P}from"./Post-Tags-Projects.307e0a83.js";function x(s){let t,a,x,E,k,w;const b=new P({props:{tags:s[3],projects:s[2]}});return{c(){t=e("div"),a=e("h2"),x=e("a"),E=r(s[0]),k=l(),c(b.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var r=n(t);a=o(r,"H2",{class:!0});var l=n(a);x=o(l,"A",{rel:!0,href:!0,class:!0});var c=n(x);E=i(c,s[0]),c.forEach(g),l.forEach(g),k=f(r),p(b.$$.fragment,r),r.forEach(g),this.h()},h(){h(x,"rel","prefetch"),h(x,"href",s[1]),h(x,"class","svelte-1ygst4l"),h(a,"class","post-link-title svelte-1ygst4l"),h(t,"class","post-link-container svelte-1ygst4l")},m(s,e){u(s,t,e),j(t,a),j(a,x),j(x,E),j(t,k),m(b,t,null),w=!0},p(s,[t]){(!w||1&t)&&$(E,s[0]),(!w||2&t)&&h(x,"href",s[1]);const a={};8&t&&(a.tags=s[3]),4&t&&(a.projects=s[2]),b.$set(a)},i(s){w||(v(b.$$.fragment,s),w=!0)},o(s){d(b.$$.fragment,s),w=!1},d(s){s&&g(t),y(b)}}}function E(s,t,a){let{title:e=""}=t,{slug:r=""}=t,{projects:l=[]}=t,{tags:c=[]}=t;return s.$set=s=>{"title"in s&&a(0,e=s.title),"slug"in s&&a(1,r=s.slug),"projects"in s&&a(2,l=s.projects),"tags"in s&&a(3,c=s.tags)},[e,r,l,c]}class k extends s{constructor(s){super(),t(this,s,E,x,a,{title:0,slug:1,projects:2,tags:3})}}export{k as P};
