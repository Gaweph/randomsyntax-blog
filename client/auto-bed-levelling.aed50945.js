import{S as e,i as t,s as r,c as s,e as n,a as o,h as a,m as c,j as $,t as i,b as m,d as f,g as l,p,v as g,o as d,r as u}from"./client.7f23730d.js";import"./Tag.dc308403.js";import"./Post-Tags-Projects.f85592ea.js";import{P as h,a as b}from"./Post-Contents.64a4cb77.js";import{L as j}from"./Link-External.a0dfaf28.js";import{C as v}from"./Callout.940c58f8.js";import{V as w}from"./Vimeo.ee07d8cc.js";import{G as x}from"./Gallery.c0c3a145.js";function G(e){let t;return{c(){t=p("Johan's (jcrocholl) Github branch")},l(e){t=g(e,"Johan's (jcrocholl) Github branch")},m(e,r){$(e,t,r)},d(e){e&&l(t)}}}function P(e){let t,r,h,b;const v=new j({props:{href:"https://github.com/jcrocholl/Marlin/tree/fsr",$$slots:{default:[G]},$$scope:{ctx:e}}});return{c(){t=p("Code can be found at\r\n    "),s(v.$$.fragment),r=n(),h=d("br")},l(e){t=g(e,"Code can be found at\r\n    "),o(v.$$.fragment,e),r=a(e),h=u(e,"BR",{})},m(e,s){$(e,t,s),c(v,e,s),$(e,r,s),$(e,h,s),b=!0},p(e,t){const r={};8&t&&(r.$$scope={dirty:t,ctx:e}),v.$set(r)},i(e){b||(i(v.$$.fragment,e),b=!0)},o(e){m(v.$$.fragment,e),b=!1},d(e){e&&l(t),f(v,e),e&&l(r),e&&l(h)}}}function C(e){let t,r,n,a;const d=new w({props:{id:"98630132"}}),u=new v({props:{$$slots:{default:[P]},$$scope:{ctx:e}}}),h=new x({props:{images:e[2]}});return{c(){t=p("Video of the G29 (Auto level) command.\r\n  "),s(d.$$.fragment),r=p("\r\n  This process involves using 3 Force Sense Resistors (FSR's) in order to use\r\n  the actual print head as the z-probe.\r\n  "),s(u.$$.fragment),n=p("\r\n  Here are some images of how the sensors are attached to the printer (under\r\n  the bed):\r\n  "),s(h.$$.fragment)},l(e){t=g(e,"Video of the G29 (Auto level) command.\r\n  "),o(d.$$.fragment,e),r=g(e,"\r\n  This process involves using 3 Force Sense Resistors (FSR's) in order to use\r\n  the actual print head as the z-probe.\r\n  "),o(u.$$.fragment,e),n=g(e,"\r\n  Here are some images of how the sensors are attached to the printer (under\r\n  the bed):\r\n  "),o(h.$$.fragment,e)},m(e,s){$(e,t,s),c(d,e,s),$(e,r,s),c(u,e,s),$(e,n,s),c(h,e,s),a=!0},p(e,t){const r={};8&t&&(r.$$scope={dirty:t,ctx:e}),u.$set(r)},i(e){a||(i(d.$$.fragment,e),i(u.$$.fragment,e),i(h.$$.fragment,e),a=!0)},o(e){m(d.$$.fragment,e),m(u.$$.fragment,e),m(h.$$.fragment,e),a=!1},d(e){e&&l(t),f(d,e),e&&l(r),f(u,e),e&&l(n),f(h,e)}}}function R(e){let t,r;const p=new h({props:{title:S,tags:e[0],projects:e[1]}}),g=new b({props:{$$slots:{default:[C]},$$scope:{ctx:e}}});return{c(){s(p.$$.fragment),t=n(),s(g.$$.fragment)},l(e){o(p.$$.fragment,e),t=a(e),o(g.$$.fragment,e)},m(e,s){c(p,e,s),$(e,t,s),c(g,e,s),r=!0},p(e,[t]){const r={};8&t&&(r.$$scope={dirty:t,ctx:e}),g.$set(r)},i(e){r||(i(p.$$.fragment,e),i(g.$$.fragment,e),r=!0)},o(e){m(p.$$.fragment,e),m(g.$$.fragment,e),r=!1},d(e){f(p,e),e&&l(t),f(g,e)}}}const S="3D Printer 4 - Auto Bed Levelling";function y(e){return[["hardware"],["3D-Printer"],["/content/images/auto-bed-levelling/fsr_b.jpg","/content/images/auto-bed-levelling/electronics_a.jpg","/content/images/auto-bed-levelling/electronics_b.jpg"]]}export default class extends e{constructor(e){super(),t(this,e,y,R,r,{})}}
