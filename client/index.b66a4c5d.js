import{S as s,i as t,s as a,I as e,e as r,o,c as n,p as c,q as f,g as p,h as i,r as m,u as j,a as $,v as h,j as u,m as g,x as l,t as d,b as x,d as P}from"./client.f1de05a8.js";import{f as v}from"./Tag.cb4c02f3.js";import{P as w}from"./Post-Tags-Projects.8208234e.js";function b(s){let t,a,b,E,T;const q=new e({props:{icon:v}}),y=new w({props:{projects:s[0]}});return{c(){t=r(),a=o("h1"),n(q.$$.fragment),b=c("\r\n  Projects"),E=r(),n(y.$$.fragment),this.h()},l(s){f('[data-svelte="svelte-rfgxwv"]',document.head).forEach(p),t=i(s),a=m(s,"H1",{});var e=j(a);$(q.$$.fragment,e),b=h(e,"\r\n  Projects"),e.forEach(p),E=i(s),$(y.$$.fragment,s),this.h()},h(){document.title="Projects"},m(s,e){u(s,t,e),u(s,a,e),g(q,a,null),l(a,b),u(s,E,e),g(y,s,e),T=!0},p(s,[t]){const a={};1&t&&(a.projects=s[0]),y.$set(a)},i(s){T||(d(q.$$.fragment,s),d(y.$$.fragment,s),T=!0)},o(s){x(q.$$.fragment,s),x(y.$$.fragment,s),T=!1},d(s){s&&p(t),s&&p(a),P(q),s&&p(E),P(y,s)}}}async function E(s,t){const a=await this.fetch("index.json");return{projects:(await a.json()).map(s=>s.projects)}}function T(s,t,a){let{projects:e}=t;return s.$set=s=>{"projects"in s&&a(0,e=s.projects)},[e]}export default class extends s{constructor(s){super(),t(this,s,T,b,a,{projects:0})}}export{E as preload};
