import{S as t,i as s,s as e,T as n,c as o,a,m as r,t as l,b as c,d as g,e as f,f as i,q as $,g as p,h as u,j as m,k as d,l as h,I as j,p as x,v as w,y as T,n as P}from"./client.f1de05a8.js";import{d as v}from"./Tag.cb4c02f3.js";import"./Post-Tags-Projects.8208234e.js";import{P as y}from"./Post-Link.693646e7.js";function b(t,s,e){const n=t.slice();return n[2]=s[e],n}function k(t){let s,e,n;const i=new j({props:{icon:v}});return{c(){o(i.$$.fragment),s=f(),e=x(t[0])},l(n){a(i.$$.fragment,n),s=u(n),e=w(n,t[0])},m(t,o){r(i,t,o),m(t,s,o),m(t,e,o),n=!0},p(t,s){(!n||1&s)&&T(e,t[0])},i(t){n||(l(i.$$.fragment,t),n=!0)},o(t){c(i.$$.fragment,t),n=!1},d(t){g(i,t),t&&p(s),t&&p(e)}}}function q(t){let s;const e=new y({props:{title:t[2].title,slug:t[2].slug,projects:t[2].projects,tags:t[2].tags}});return{c(){o(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,n){r(e,t,n),s=!0},p(t,s){const n={};2&s&&(n.title=t[2].title),2&s&&(n.slug=t[2].slug),2&s&&(n.projects=t[2].projects),2&s&&(n.tags=t[2].tags),e.$set(n)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){g(e,t)}}}function B(t){let s,e,j,x,w;document.title=s="Tag - "+t[0];const T=new n({props:{$$slots:{default:[k]},$$scope:{ctx:t}}});let v=t[1],y=[];for(let s=0;s<v.length;s+=1)y[s]=q(b(t,v,s));const B=t=>c(y[t],1,1,()=>{y[t]=null});return{c(){e=f(),o(T.$$.fragment),j=f();for(let t=0;t<y.length;t+=1)y[t].c();x=i()},l(t){$('[data-svelte="svelte-13xwic5"]',document.head).forEach(p),e=u(t),a(T.$$.fragment,t),j=u(t);for(let s=0;s<y.length;s+=1)y[s].l(t);x=i()},m(t,s){m(t,e,s),r(T,t,s),m(t,j,s);for(let e=0;e<y.length;e+=1)y[e].m(t,s);m(t,x,s),w=!0},p(t,[e]){(!w||1&e)&&s!==(s="Tag - "+t[0])&&(document.title=s);const n={};if(33&e&&(n.$$scope={dirty:e,ctx:t}),T.$set(n),2&e){let s;for(v=t[1],s=0;s<v.length;s+=1){const n=b(t,v,s);y[s]?(y[s].p(n,e),l(y[s],1)):(y[s]=q(n),y[s].c(),l(y[s],1),y[s].m(x.parentNode,x))}for(P(),s=v.length;s<y.length;s+=1)B(s);d()}},i(t){if(!w){l(T.$$.fragment,t);for(let t=0;t<v.length;t+=1)l(y[t]);w=!0}},o(t){c(T.$$.fragment,t),y=y.filter(Boolean);for(let t=0;t<y.length;t+=1)c(y[t]);w=!1},d(t){t&&p(e),g(T,t),t&&p(j),h(y,t),t&&p(x)}}}async function E(t,s){const{slug:e}=t.params,n=await this.fetch("index.json");return{posts:(await n.json()).filter(t=>t.tags.includes(e)),slug:e}}function I(t,s,e){let{slug:n}=s,{posts:o}=s;return t.$set=t=>{"slug"in t&&e(0,n=t.slug),"posts"in t&&e(1,o=t.posts)},[n,o]}export default class extends t{constructor(t){super(),s(this,t,I,B,e,{slug:0,posts:1})}}export{E as preload};
