import{S as e,i as t,s as r,c as s,e as n,a as o,h as a,m as $,j as c,t as i,b as m,d as l,g as f,p as g,v as p,o as d,r as u}from"./client.f1de05a8.js";import"./Tag.cb4c02f3.js";import"./Post-Tags-Projects.8208234e.js";import{P as h,a as b}from"./Post-Contents.24855e65.js";import{L as j}from"./Link-External.a49a32a4.js";import{C as v}from"./Callout.794ad15f.js";import{V as w}from"./Vimeo.648db57d.js";import{G as x}from"./Gallery.d0849ba6.js";function G(e){let t;return{c(){t=g("Johan's (jcrocholl) Github branch")},l(e){t=p(e,"Johan's (jcrocholl) Github branch")},m(e,r){c(e,t,r)},d(e){e&&f(t)}}}function P(e){let t,r,h,b;const v=new j({props:{href:"https://github.com/jcrocholl/Marlin/tree/fsr",$$slots:{default:[G]},$$scope:{ctx:e}}});return{c(){t=g("Code can be found at\r\n    "),s(v.$$.fragment),r=n(),h=d("br")},l(e){t=p(e,"Code can be found at\r\n    "),o(v.$$.fragment,e),r=a(e),h=u(e,"BR",{})},m(e,s){c(e,t,s),$(v,e,s),c(e,r,s),c(e,h,s),b=!0},p(e,t){const r={};8&t&&(r.$$scope={dirty:t,ctx:e}),v.$set(r)},i(e){b||(i(v.$$.fragment,e),b=!0)},o(e){m(v.$$.fragment,e),b=!1},d(e){e&&f(t),l(v,e),e&&f(r),e&&f(h)}}}function C(e){let t,r,n,a;const d=new w({props:{id:"98630132"}}),u=new v({props:{$$slots:{default:[P]},$$scope:{ctx:e}}}),h=new x({props:{images:e[2]}});return{c(){t=g("Video of the G29 (Auto level) command.\r\n  "),s(d.$$.fragment),r=g("\r\n  This process involves using 3 Force Sense Resistors (FSR's) in order to use\r\n  the actual print head as the z-probe.\r\n  "),s(u.$$.fragment),n=g("\r\n  Here are some images of how the sensors are attached to the printer (under\r\n  the bed):\r\n  "),s(h.$$.fragment)},l(e){t=p(e,"Video of the G29 (Auto level) command.\r\n  "),o(d.$$.fragment,e),r=p(e,"\r\n  This process involves using 3 Force Sense Resistors (FSR's) in order to use\r\n  the actual print head as the z-probe.\r\n  "),o(u.$$.fragment,e),n=p(e,"\r\n  Here are some images of how the sensors are attached to the printer (under\r\n  the bed):\r\n  "),o(h.$$.fragment,e)},m(e,s){c(e,t,s),$(d,e,s),c(e,r,s),$(u,e,s),c(e,n,s),$(h,e,s),a=!0},p(e,t){const r={};8&t&&(r.$$scope={dirty:t,ctx:e}),u.$set(r)},i(e){a||(i(d.$$.fragment,e),i(u.$$.fragment,e),i(h.$$.fragment,e),a=!0)},o(e){m(d.$$.fragment,e),m(u.$$.fragment,e),m(h.$$.fragment,e),a=!1},d(e){e&&f(t),l(d,e),e&&f(r),l(u,e),e&&f(n),l(h,e)}}}function R(e){let t,r;const g=new h({props:{title:S,tags:e[0],projects:e[1]}}),p=new b({props:{$$slots:{default:[C]},$$scope:{ctx:e}}});return{c(){s(g.$$.fragment),t=n(),s(p.$$.fragment)},l(e){o(g.$$.fragment,e),t=a(e),o(p.$$.fragment,e)},m(e,s){$(g,e,s),c(e,t,s),$(p,e,s),r=!0},p(e,[t]){const r={};8&t&&(r.$$scope={dirty:t,ctx:e}),p.$set(r)},i(e){r||(i(g.$$.fragment,e),i(p.$$.fragment,e),r=!0)},o(e){m(g.$$.fragment,e),m(p.$$.fragment,e),r=!1},d(e){l(g,e),e&&f(t),l(p,e)}}}const S="3D Printer 4 - Auto Bed Levelling";function y(e){return[["hardware"],["3D-Printer"],["/content/images/auto-bed-levelling/fsr_a.jpg","/content/images/auto-bed-levelling/fsr_b.jpg","/content/images/auto-bed-levelling/electronics_a.jpg","/content/images/auto-bed-levelling/electronics_b.jpg"]]}export default class extends e{constructor(e){super(),t(this,e,y,R,r,{})}}
