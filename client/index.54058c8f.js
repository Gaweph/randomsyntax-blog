import{S as t,i as s,s as a,T as e,e as n,c as r,q as $,g as o,h as c,a as g,j as f,m,t as i,b as p,d,I as l,p as u,v as h,z as x}from"./client.2d8b461f.js";import{T,c as j}from"./Tag.e7ad2adc.js";function w(t){let s,a;const e=new l({props:{icon:j}});return{c(){r(e.$$.fragment),s=u("\r\n  Tags")},l(t){g(e.$$.fragment,t),s=h(t,"\r\n  Tags")},m(t,n){m(e,t,n),f(t,s,n),a=!0},p:x,i(t){a||(i(e.$$.fragment,t),a=!0)},o(t){p(e.$$.fragment,t),a=!1},d(t){d(e,t),t&&o(s)}}}function v(t){let s,a,l;const u=new e({props:{$$slots:{default:[w]},$$scope:{ctx:t}}}),h=new T({props:{tags:t[0]}});return{c(){s=n(),r(u.$$.fragment),a=n(),r(h.$$.fragment),this.h()},l(t){$('[data-svelte="svelte-32lck8"]',document.head).forEach(o),s=c(t),g(u.$$.fragment,t),a=c(t),g(h.$$.fragment,t),this.h()},h(){document.title="Tags"},m(t,e){f(t,s,e),m(u,t,e),f(t,a,e),m(h,t,e),l=!0},p(t,[s]){const a={};2&s&&(a.$$scope={dirty:s,ctx:t}),u.$set(a);const e={};1&s&&(e.tags=t[0]),h.$set(e)},i(t){l||(i(u.$$.fragment,t),i(h.$$.fragment,t),l=!0)},o(t){p(u.$$.fragment,t),p(h.$$.fragment,t),l=!1},d(t){t&&o(s),d(u,t),t&&o(a),d(h,t)}}}async function b(t,s){const a=await this.fetch("index.json");return{tags:(await a.json()).map(t=>t.tags)}}function y(t,s,a){let{tags:e}=s;return t.$set=t=>{"tags"in t&&a(0,e=t.tags)},[e]}export default class extends t{constructor(t){super(),s(this,t,y,v,a,{tags:0})}}export{b as preload};
