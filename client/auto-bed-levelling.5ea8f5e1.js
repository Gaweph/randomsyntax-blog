import{S as e,i as t,s as r,c as s,e as n,a as o,h as a,m as $,j as c,t as i,b as m,d as f,g as l,p as d,v as g,o as p,r as u}from"./client.946cb0ce.js";import"./Post-Tags-Projects.2348769a.js";import"./Tag.5ade3b98.js";import{P as h,a as b}from"./Post-Contents.5f1d2e26.js";import{L as j}from"./Link-External.d9e9572d.js";import{C as v}from"./Callout.4f16af37.js";import{V as w}from"./Vimeo.fb992dad.js";import{G as x}from"./Gallery.ddd1d49f.js";function G(e){let t;return{c(){t=d("Johan's (jcrocholl) Github branch")},l(e){t=g(e,"Johan's (jcrocholl) Github branch")},m(e,r){c(e,t,r)},d(e){e&&l(t)}}}function P(e){let t,r,h,b;const v=new j({props:{href:"https://github.com/jcrocholl/Marlin/tree/fsr",$$slots:{default:[G]},$$scope:{ctx:e}}});return{c(){t=d("Code can be found at\r\n    "),s(v.$$.fragment),r=n(),h=p("br")},l(e){t=g(e,"Code can be found at\r\n    "),o(v.$$.fragment,e),r=a(e),h=u(e,"BR",{})},m(e,s){c(e,t,s),$(v,e,s),c(e,r,s),c(e,h,s),b=!0},p(e,t){const r={};8&t&&(r.$$scope={dirty:t,ctx:e}),v.$set(r)},i(e){b||(i(v.$$.fragment,e),b=!0)},o(e){m(v.$$.fragment,e),b=!1},d(e){e&&l(t),f(v,e),e&&l(r),e&&l(h)}}}function C(e){let t,r,n,a;const p=new w({props:{id:"98630132"}}),u=new v({props:{$$slots:{default:[P]},$$scope:{ctx:e}}}),h=new x({props:{images:e[2]}});return{c(){t=d("Video of the G29 (Auto level) command.\r\n  "),s(p.$$.fragment),r=d("\r\n  This process involves using 3 Force Sense Resistors (FSR's) in order to use\r\n  the actual print head as the z-probe.\r\n  "),s(u.$$.fragment),n=d("\r\n  Here are some images of how the sensors are attached to the printer (under\r\n  the bed):\r\n  "),s(h.$$.fragment)},l(e){t=g(e,"Video of the G29 (Auto level) command.\r\n  "),o(p.$$.fragment,e),r=g(e,"\r\n  This process involves using 3 Force Sense Resistors (FSR's) in order to use\r\n  the actual print head as the z-probe.\r\n  "),o(u.$$.fragment,e),n=g(e,"\r\n  Here are some images of how the sensors are attached to the printer (under\r\n  the bed):\r\n  "),o(h.$$.fragment,e)},m(e,s){c(e,t,s),$(p,e,s),c(e,r,s),$(u,e,s),c(e,n,s),$(h,e,s),a=!0},p(e,t){const r={};8&t&&(r.$$scope={dirty:t,ctx:e}),u.$set(r)},i(e){a||(i(p.$$.fragment,e),i(u.$$.fragment,e),i(h.$$.fragment,e),a=!0)},o(e){m(p.$$.fragment,e),m(u.$$.fragment,e),m(h.$$.fragment,e),a=!1},d(e){e&&l(t),f(p,e),e&&l(r),f(u,e),e&&l(n),f(h,e)}}}function R(e){let t,r;const d=new h({props:{title:S,tags:e[0],projects:e[1]}}),g=new b({props:{$$slots:{default:[C]},$$scope:{ctx:e}}});return{c(){s(d.$$.fragment),t=n(),s(g.$$.fragment)},l(e){o(d.$$.fragment,e),t=a(e),o(g.$$.fragment,e)},m(e,s){$(d,e,s),c(e,t,s),$(g,e,s),r=!0},p(e,[t]){const r={};8&t&&(r.$$scope={dirty:t,ctx:e}),g.$set(r)},i(e){r||(i(d.$$.fragment,e),i(g.$$.fragment,e),r=!0)},o(e){m(d.$$.fragment,e),m(g.$$.fragment,e),r=!1},d(e){f(d,e),e&&l(t),f(g,e)}}}const S="3D Printer 4 - Auto Bed Levelling";function y(e){return[["hardware"],["3D-Printer"],["/content/images/auto-bed-levelling/fsr_a.jpg","/content/images/auto-bed-levelling/fsr_b.jpg","/content/images/auto-bed-levelling/electronics_a.jpg","/content/images/auto-bed-levelling/electronics_b.jpg"]]}export default class extends e{constructor(e){super(),t(this,e,y,R,r,{})}}
