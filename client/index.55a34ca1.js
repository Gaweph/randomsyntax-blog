import{S as s,i as t,s as a,T as e,e as n,c as r,q as o,g as c,h as $,a as g,j as f,m as i,t as m,b as h,d as l,o as p,p as u,r as d,u as x,v as T,w as j}from"./client.47898928.js";import{T as w}from"./Tag.b2648605.js";function v(s){let t,a;return{c(){t=p("span"),a=u("\r\n  Tags"),this.h()},l(s){t=d(s,"SPAN",{class:!0}),x(t).forEach(c),a=T(s,"\r\n  Tags"),this.h()},h(){j(t,"class","fa fa-tags")},m(s,e){f(s,t,e),f(s,a,e)},d(s){s&&c(t),s&&c(a)}}}function b(s){let t,a,p;const u=new e({props:{$$slots:{default:[v]},$$scope:{ctx:s}}}),d=new w({props:{tags:s[0]}});return{c(){t=n(),r(u.$$.fragment),a=n(),r(d.$$.fragment),this.h()},l(s){o('[data-svelte="svelte-32lck8"]',document.head).forEach(c),t=$(s),g(u.$$.fragment,s),a=$(s),g(d.$$.fragment,s),this.h()},h(){document.title="Tags"},m(s,e){f(s,t,e),i(u,s,e),f(s,a,e),i(d,s,e),p=!0},p(s,[t]){const a={};2&t&&(a.$$scope={dirty:t,ctx:s}),u.$set(a);const e={};1&t&&(e.tags=s[0]),d.$set(e)},i(s){p||(m(u.$$.fragment,s),m(d.$$.fragment,s),p=!0)},o(s){h(u.$$.fragment,s),h(d.$$.fragment,s),p=!1},d(s){s&&c(t),l(u,s),s&&c(a),l(d,s)}}}async function y(s,t){const a=await this.fetch("index.json");return{tags:(await a.json()).map(s=>s.tags)}}function E(s,t,a){let{tags:e}=t;return s.$set=s=>{"tags"in s&&a(0,e=s.tags)},[e]}export default class extends s{constructor(s){super(),t(this,s,E,b,a,{tags:0})}}export{y as preload};
