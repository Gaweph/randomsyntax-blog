import{S as t,i as e,s as n,c as r,e as o,a as s,h as a,m as c,j as $,t as f,b as i,d as l,g as m,u,n as g,v as p,w as h,o as d,y}from"./client.f2ad848a.js";import"./Tag.23e8f2ea.js";import"./Post-Tags-Projects.307e0a83.js";import{P as w,a as k}from"./Post-Contents.d5d16112.js";import{P as x}from"./Post-Section.6cf4253a.js";import{L as b}from"./Link-External.920178a9.js";import{P as C}from"./PrismJS.c429627b.js";import{C as v}from"./Callout.607fe896.js";import{G as P}from"./Gallery.e7b3689a.js";function j(t){let e;return{c(){e=g("Conky-Colors")},l(t){e=d(t,"Conky-Colors")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function E(t){let e;return{c(){e=g("conky-nvidia")},l(t){e=d(t,"conky-nvidia")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function I(t){let e;return{c(){e=g("lm_sensors")},l(t){e=d(t,"lm_sensors")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function T(t){let e;return{c(){e=g("conky-colors TTF files")},l(t){e=d(t,"conky-colors TTF files")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function S(t){let e;return{c(){e=g("I'm sure there's a better way of getting the CPU temps. Please let me know\r\n      if this is the case. I'm not sure that the Ethernet if else statements are\r\n      working correctly.")},l(t){e=d(t,"I'm sure there's a better way of getting the CPU temps. Please let me know\r\n      if this is the case. I'm not sure that the Ethernet if else statements are\r\n      working correctly.")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function G(t){let e;return{c(){e=g("Lovely conky-colors deviant-art by helmuthdu")},l(t){e=d(t,"Lovely conky-colors deviant-art by helmuthdu")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function L(t){let e;return{c(){e=g("helmuthdu's github conky-colors repository")},l(t){e=d(t,"helmuthdu's github conky-colors repository")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function O(t){let e,n,o;const a=new b({props:{href:"http://helmuthdu.deviantart.com/art/CONKY-COLORS-244793180",$$slots:{default:[G]},$$scope:{ctx:t}}}),u=new b({props:{href:"https://github.com/helmuthdu/conky_colors",$$slots:{default:[L]},$$scope:{ctx:t}}});return{c(){e=g("There is some\r\n      "),r(a.$$.fragment),n=g("\r\n      . Further information on this project cna be found at\r\n      "),r(u.$$.fragment)},l(t){e=d(t,"There is some\r\n      "),s(a.$$.fragment,t),n=d(t,"\r\n      . Further information on this project cna be found at\r\n      "),s(u.$$.fragment,t)},m(t,r){$(t,e,r),c(a,t,r),$(t,n,r),c(u,t,r),o=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n);const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),u.$set(r)},i(t){o||(f(a.$$.fragment,t),f(u.$$.fragment,t),o=!0)},o(t){i(a.$$.fragment,t),i(u.$$.fragment,t),o=!1},d(t){t&&m(e),l(a,t),t&&m(n),l(u,t)}}}function R(t){let e,n,w,k,x,G,L,R,_,F,N,q,D,H,U,X,A,B,J,K,Y,z;const M=new P({props:{images:["/content/images/conky-config/Conky_Config.png"]}}),Q=new b({props:{href:"https://aur.archlinux.org/packages/conky-colors/",$$slots:{default:[j]},$$scope:{ctx:t}}}),V=new b({props:{href:"https://aur.archlinux.org/packages/conky-nvidia/",$$slots:{default:[E]},$$scope:{ctx:t}}}),W=new b({props:{href:"https://www.archlinux.org/packages/?name=lm_sensors",$$slots:{default:[I]},$$scope:{ctx:t}}}),Z=new C({props:{language:"Bash",code:t[0]}}),tt=new b({props:{href:"https://github.com/helmuthdu/conky_colors/tree/master/fonts/conkycolors",$$slots:{default:[T]},$$scope:{ctx:t}}}),et=new v({props:{title:"PLEASE NOTE:",$$slots:{default:[S]},$$scope:{ctx:t}}}),nt=new v({props:{title:"FURTHER READING:",$$slots:{default:[O]},$$scope:{ctx:t}}});return{c(){e=u("p"),n=g("I have had a couple of queries regarding my conky config that can be seen\r\n      on my new arch desktop screenshot:"),w=o(),r(M.$$.fragment),k=o(),x=u("p"),G=g("In order to recreate this config you will need the\r\n      "),r(Q.$$.fragment),L=g("\r\n      ,\r\n      "),r(V.$$.fragment),R=g("\r\n      and\r\n      "),r(W.$$.fragment),_=g("\r\n      packages"),F=g("\r\n    Here is the conky config file (feel free to copy as needed):\r\n    "),r(Z.$$.fragment),N=o(),q=u("p"),D=u("strong"),H=g("wlp4s0"),U=g("\r\n      and\r\n      "),X=u("strong"),A=g("enp3s0f0"),B=g("\r\n      are the network device IDS, so you will need to substitute your own. If\r\n      you would like to modify the icons then they can be found in the\r\n      "),r(tt.$$.fragment),J=g("\r\n      on helmuthdu's github repository"),K=o(),r(et.$$.fragment),Y=o(),r(nt.$$.fragment)},l(t){e=p(t,"P",{});var r=h(e);n=d(r,"I have had a couple of queries regarding my conky config that can be seen\r\n      on my new arch desktop screenshot:"),r.forEach(m),w=a(t),s(M.$$.fragment,t),k=a(t),x=p(t,"P",{});var o=h(x);G=d(o,"In order to recreate this config you will need the\r\n      "),s(Q.$$.fragment,o),L=d(o,"\r\n      ,\r\n      "),s(V.$$.fragment,o),R=d(o,"\r\n      and\r\n      "),s(W.$$.fragment,o),_=d(o,"\r\n      packages"),o.forEach(m),F=d(t,"\r\n    Here is the conky config file (feel free to copy as needed):\r\n    "),s(Z.$$.fragment,t),N=a(t),q=p(t,"P",{});var c=h(q);D=p(c,"STRONG",{});var $=h(D);H=d($,"wlp4s0"),$.forEach(m),U=d(c,"\r\n      and\r\n      "),X=p(c,"STRONG",{});var f=h(X);A=d(f,"enp3s0f0"),f.forEach(m),B=d(c,"\r\n      are the network device IDS, so you will need to substitute your own. If\r\n      you would like to modify the icons then they can be found in the\r\n      "),s(tt.$$.fragment,c),J=d(c,"\r\n      on helmuthdu's github repository"),c.forEach(m),K=a(t),s(et.$$.fragment,t),Y=a(t),s(nt.$$.fragment,t)},m(t,r){$(t,e,r),y(e,n),$(t,w,r),c(M,t,r),$(t,k,r),$(t,x,r),y(x,G),c(Q,x,null),y(x,L),c(V,x,null),y(x,R),c(W,x,null),y(x,_),$(t,F,r),c(Z,t,r),$(t,N,r),$(t,q,r),y(q,D),y(D,H),y(q,U),y(q,X),y(X,A),y(q,B),c(tt,q,null),y(q,J),$(t,K,r),c(et,t,r),$(t,Y,r),c(nt,t,r),z=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),Q.$set(n);const r={};8&e&&(r.$$scope={dirty:e,ctx:t}),V.$set(r);const o={};8&e&&(o.$$scope={dirty:e,ctx:t}),W.$set(o);const s={};1&e&&(s.code=t[0]),Z.$set(s);const a={};8&e&&(a.$$scope={dirty:e,ctx:t}),tt.$set(a);const c={};8&e&&(c.$$scope={dirty:e,ctx:t}),et.$set(c);const $={};8&e&&($.$$scope={dirty:e,ctx:t}),nt.$set($)},i(t){z||(f(M.$$.fragment,t),f(Q.$$.fragment,t),f(V.$$.fragment,t),f(W.$$.fragment,t),f(Z.$$.fragment,t),f(tt.$$.fragment,t),f(et.$$.fragment,t),f(nt.$$.fragment,t),z=!0)},o(t){i(M.$$.fragment,t),i(Q.$$.fragment,t),i(V.$$.fragment,t),i(W.$$.fragment,t),i(Z.$$.fragment,t),i(tt.$$.fragment,t),i(et.$$.fragment,t),i(nt.$$.fragment,t),z=!1},d(t){t&&m(e),t&&m(w),l(M,t),t&&m(k),t&&m(x),l(Q),l(V),l(W),t&&m(F),l(Z,t),t&&m(N),t&&m(q),l(tt),t&&m(K),l(et,t),t&&m(Y),l(nt,t)}}}function _(t){let e;const n=new x({props:{$$slots:{default:[R]},$$scope:{ctx:t}}});return{c(){r(n.$$.fragment)},l(t){s(n.$$.fragment,t)},m(t,r){c(n,t,r),e=!0},p(t,e){const r={};9&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(f(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){l(n,t)}}}function F(t){let e,n;const u=new w({props:{title:q,tags:t[1],projects:t[2]}}),g=new k({props:{$$slots:{default:[_]},$$scope:{ctx:t}}});return{c(){r(u.$$.fragment),e=o(),r(g.$$.fragment)},l(t){s(u.$$.fragment,t),e=a(t),s(g.$$.fragment,t)},m(t,r){c(u,t,r),$(t,e,r),c(g,t,r),n=!0},p(t,[e]){const n={};9&e&&(n.$$scope={dirty:e,ctx:t}),g.$set(n)},i(t){n||(f(u.$$.fragment,t),f(g.$$.fragment,t),n=!0)},o(t){i(u.$$.fragment,t),i(g.$$.fragment,t),n=!1},d(t){l(u,t),t&&m(e),l(g,t)}}}async function N({params:t,query:e}){let n=await this.fetch("https://gist.githubusercontent.com/Gaweph/63d48a9c43e1b256ca8c8a9a7717fed7/raw/37e5276e3cbe53162a49b27706df5142ac92fff6/conky-config");return{gistContents:await n.text()}}const q="Conky Config";function D(t,e,n){let{gistContents:r="XXX"}=e;return t.$set=t=>{"gistContents"in t&&n(0,r=t.gistContents)},[r,["config","conky"],[]]}export default class extends t{constructor(t){super(),e(this,t,D,F,n,{gistContents:0})}}export{N as preload};
