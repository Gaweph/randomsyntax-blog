import{S as t,i as s,s as e,T as n,c as a,a as o,m as r,t as l,b as c,d as f,e as g,f as i,q as $,g as p,h as u,j as m,k as d,l as h,I as j,p as x,v as w,y as T,n as P}from"./client.2d8b461f.js";import{d as b}from"./Tag.e7ad2adc.js";import"./Post-Tags-Projects.de220f6c.js";import{P as v}from"./Post-Link.7b4f38c3.js";function y(t,s,e){const n=t.slice();return n[2]=s[e],n}function k(t){let s,e,n;const i=new j({props:{icon:b}});return{c(){a(i.$$.fragment),s=g(),e=x(t[0])},l(n){o(i.$$.fragment,n),s=u(n),e=w(n,t[0])},m(t,a){r(i,t,a),m(t,s,a),m(t,e,a),n=!0},p(t,s){(!n||1&s)&&T(e,t[0])},i(t){n||(l(i.$$.fragment,t),n=!0)},o(t){c(i.$$.fragment,t),n=!1},d(t){f(i,t),t&&p(s),t&&p(e)}}}function q(t){let s;const e=new v({props:{title:t[2].title,slug:t[2].slug,projects:t[2].projects,tags:t[2].tags}});return{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){r(e,t,n),s=!0},p(t,s){const n={};2&s&&(n.title=t[2].title),2&s&&(n.slug=t[2].slug),2&s&&(n.projects=t[2].projects),2&s&&(n.tags=t[2].tags),e.$set(n)},i(t){s||(l(e.$$.fragment,t),s=!0)},o(t){c(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function B(t){let s,e,j,x,w;document.title=s="Tag - "+t[0];const T=new n({props:{$$slots:{default:[k]},$$scope:{ctx:t}}});let b=t[1],v=[];for(let s=0;s<b.length;s+=1)v[s]=q(y(t,b,s));const B=t=>c(v[t],1,1,()=>{v[t]=null});return{c(){e=g(),a(T.$$.fragment),j=g();for(let t=0;t<v.length;t+=1)v[t].c();x=i()},l(t){$('[data-svelte="svelte-13xwic5"]',document.head).forEach(p),e=u(t),o(T.$$.fragment,t),j=u(t);for(let s=0;s<v.length;s+=1)v[s].l(t);x=i()},m(t,s){m(t,e,s),r(T,t,s),m(t,j,s);for(let e=0;e<v.length;e+=1)v[e].m(t,s);m(t,x,s),w=!0},p(t,[e]){(!w||1&e)&&s!==(s="Tag - "+t[0])&&(document.title=s);const n={};if(33&e&&(n.$$scope={dirty:e,ctx:t}),T.$set(n),2&e){let s;for(b=t[1],s=0;s<b.length;s+=1){const n=y(t,b,s);v[s]?(v[s].p(n,e),l(v[s],1)):(v[s]=q(n),v[s].c(),l(v[s],1),v[s].m(x.parentNode,x))}for(P(),s=b.length;s<v.length;s+=1)B(s);d()}},i(t){if(!w){l(T.$$.fragment,t);for(let t=0;t<b.length;t+=1)l(v[t]);w=!0}},o(t){c(T.$$.fragment,t),v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)c(v[t]);w=!1},d(t){t&&p(e),f(T,t),t&&p(j),h(v,t),t&&p(x)}}}async function E(t,s){const{slug:e}=t.params,n=await this.fetch("index.json");return{posts:(await n.json()).filter(t=>t.tags.includes(e)),slug:e}}function I(t,s,e){let{slug:n}=s,{posts:a}=s;return t.$set=t=>{"slug"in t&&e(0,n=t.slug),"posts"in t&&e(1,a=t.posts)},[n,a]}export default class extends t{constructor(t){super(),s(this,t,I,B,e,{slug:0,posts:1})}}export{E as preload};
