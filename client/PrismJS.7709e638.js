import{S as s,i as a,s as e,o as c,c as t,e as n,p as r,r as o,u as l,a as m,h as i,v as h,g as p,w as d,j as u,m as f,x as g,y as j,t as b,b as v,d as E,q as $,n as x,k,H as w,K as y,I as P}from"./client.f1de05a8.js";import{b as q}from"./Tag.cb4c02f3.js";const{document:I}=y;function A(s){let a,e,$,x;const k=new P({props:{icon:q}});return{c(){a=c("h4"),t(k.$$.fragment),e=n(),$=r(s[2]),this.h()},l(c){a=o(c,"H4",{class:!0});var t=l(a);m(k.$$.fragment,t),e=i(t),$=h(t,s[2]),t.forEach(p),this.h()},h(){d(a,"class","svelte-1x2uof1")},m(s,c){u(s,a,c),f(k,a,null),g(a,e),g(a,$),x=!0},p(s,a){(!x||4&a)&&j($,s[2])},i(s){x||(b(k.$$.fragment,s),x=!0)},o(s){v(k.$$.fragment,s),x=!1},d(s){s&&p(a),E(k)}}}function C(s){let a,e,t,m,f,E,w,y,P,q=s[2]&&A(s);return{c(){a=c("link"),e=n(),t=c("div"),q&&q.c(),m=n(),f=c("pre"),E=c("code"),w=r(s[1]),this.h()},l(c){const n=$('[data-svelte="svelte-nzyx1b"]',I.head);a=o(n,"LINK",{rel:!0,href:!0}),n.forEach(p),e=i(c),t=o(c,"DIV",{});var r=l(t);q&&q.l(r),m=i(r),f=o(r,"PRE",{class:!0});var d=l(f);E=o(d,"CODE",{class:!0});var u=l(E);w=h(u,s[1]),u.forEach(p),d.forEach(p),r.forEach(p),this.h()},h(){d(a,"rel","stylesheet"),d(a,"href","/content/css/prism-xonokai.css"),d(E,"class",y="language-"+s[0]),d(f,"class","svelte-1x2uof1")},m(s,c){g(I.head,a),u(s,e,c),u(s,t,c),q&&q.m(t,null),g(t,m),g(t,f),g(f,E),g(E,w),P=!0},p(s,[a]){s[2]?q?(q.p(s,a),4&a&&b(q,1)):(q=A(s),q.c(),b(q,1),q.m(t,m)):q&&(x(),v(q,1,1,()=>{q=null}),k()),(!P||2&a)&&j(w,s[1]),(!P||1&a&&y!==(y="language-"+s[0]))&&d(E,"class",y)},i(s){P||(b(q),P=!0)},o(s){v(q),P=!1},d(s){p(a),s&&p(e),s&&p(t),q&&q.d()}}}function D(s,a,e){let{language:c}=a,{code:t}=a,{header:n}=a;return w(()=>{let s=document.createElement("script");s.src="//cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/prism.js",document.head.append(s),s.onload=function(){let s,a,e=!1;switch(c.toLowerCase()){case"json":a="https://prismjs.com/components/prism-json.min.js",e=!0;break;case"sql":a="https://prismjs.com/components/prism-sql.min.js",e=!0;break;case"bash":a="https://prismjs.com/components/prism-bash.min.js",e=!0;break;case"powershell":a="https://prismjs.com/components/prism-powershell.min.js",e=!0;break;case"csharp":a="https://prismjs.com/components/prism-csharp.min.js",e=!0}1==e?(s=document.createElement("script"),s.src=a,s.async=!0,document.head.append(s),s.onload=()=>{Prism.highlightAll()}):Prism.highlightAll()}}),s.$set=s=>{"language"in s&&e(0,c=s.language),"code"in s&&e(1,t=s.code),"header"in s&&e(2,n=s.header)},[c,t,n]}class H extends s{constructor(s){super(),a(this,s,D,C,e,{language:0,code:1,header:2})}}export{H as P};
