import{a as t,b as n,c as r,d as e,i as a,s as o,e as s,S as i,f as c,k as f,g as u,o as $,m,p,u as l,t as g,h as d,j as h,n as v,x as y,B as x,y as P,C as j,D as w,F as C,z as b}from"./client.1d4c87e8.js";import"./Tag.4c396b70.js";import"./Post-Tags-Projects.97a5f693.js";import{P as k,a as S}from"./Post-Contents.4bf35492.js";import{P as z}from"./Post-Section.0334ffa1.js";import{L as E}from"./Link-External.92ba38f8.js";import{F as R,P as I}from"./Full-Screen.9247c927.js";var T=function(t){t.setup=function(){var n=t.canvas.parentElement,r=n.offsetWidth,e=n.offsetHeight;t.createCanvas(r,e)};var n=0,r=0;t.draw=function(){t.stroke(3),t.stroke(t.color("hsba(160, 100%, 50%, 0.5)")),t.random(1)>.5?t.line(n,r,n+10,r+10):t.line(n,r+10,n+10,r),(n+=10)>t.width&&(n=0,r+=10),r>t.height&&(t.background(255),n=0,r=0)},t.resizeCanvas=function(){var n=t.canvas.parentElement,r=n.offsetWidth,e=n.offsetHeight;t.resizeCanvas(r,e)}};function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(e){var s=n(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return r(this,a)}}function F(t){var n;return{c:function(){n=y("10Print")},l:function(t){n=P(t,"10Print")},m:function(t,r){p(t,n,r)},d:function(t){t&&v(n)}}}function H(t){var n,r=new I({props:{sketch:T}});return{c:function(){c(r.$$.fragment)},l:function(t){u(r.$$.fragment,t)},m:function(t,e){m(r,t,e),n=!0},p:b,i:function(t){n||(g(r.$$.fragment,t),n=!0)},o:function(t){d(r.$$.fragment,t),n=!1},d:function(t){h(r,t)}}}function L(t){var n,r,e,a,o,s,i,l,b,k=new E({props:{href:"https://10print.org/",$$slots:{default:[F]},$$scope:{ctx:t}}}),S=new R({props:{$$slots:{default:[H]},$$scope:{ctx:t}}});return{c:function(){n=y("Simple\r\n    "),c(k.$$.fragment),r=y("\r\n    implementation in p5.\r\n    "),e=x("p"),a=y("Considering it only uses 2 characters ('\\' and '/') I find this\r\n      mesmerizing to watch."),o=f(),c(S.$$.fragment),s=f(),i=x("p"),l=y("This page only exists here so I can put it into full screen mode.")},l:function(t){n=P(t,"Simple\r\n    "),u(k.$$.fragment,t),r=P(t,"\r\n    implementation in p5.\r\n    "),e=j(t,"P",{});var c=w(e);a=P(c,"Considering it only uses 2 characters ('\\' and '/') I find this\r\n      mesmerizing to watch."),c.forEach(v),o=$(t),u(S.$$.fragment,t),s=$(t),i=j(t,"P",{});var f=w(i);l=P(f,"This page only exists here so I can put it into full screen mode."),f.forEach(v)},m:function(t,c){p(t,n,c),m(k,t,c),p(t,r,c),p(t,e,c),C(e,a),p(t,o,c),m(S,t,c),p(t,s,c),p(t,i,c),C(i,l),b=!0},p:function(t,n){var r={};4&n&&(r.$$scope={dirty:n,ctx:t}),k.$set(r);var e={};4&n&&(e.$$scope={dirty:n,ctx:t}),S.$set(e)},i:function(t){b||(g(k.$$.fragment,t),g(S.$$.fragment,t),b=!0)},o:function(t){d(k.$$.fragment,t),d(S.$$.fragment,t),b=!1},d:function(t){t&&v(n),h(k,t),t&&v(r),t&&v(e),t&&v(o),h(S,t),t&&v(s),t&&v(i)}}}function W(t){var n,r=new z({props:{$$slots:{default:[L]},$$scope:{ctx:t}}});return{c:function(){c(r.$$.fragment)},l:function(t){u(r.$$.fragment,t)},m:function(t,e){m(r,t,e),n=!0},p:function(t,n){var e={};4&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e)},i:function(t){n||(g(r.$$.fragment,t),n=!0)},o:function(t){d(r.$$.fragment,t),n=!1},d:function(t){h(r,t)}}}function B(t){var n,r,e=new k({props:{title:q,tags:t[0],projects:t[1]}}),a=new S({props:{$$slots:{default:[W]},$$scope:{ctx:t}}});return{c:function(){c(e.$$.fragment),n=f(),c(a.$$.fragment)},l:function(t){u(e.$$.fragment,t),n=$(t),u(a.$$.fragment,t)},m:function(t,o){m(e,t,o),p(t,n,o),m(a,t,o),r=!0},p:function(t,n){var r=l(n,1)[0],e={};4&r&&(e.$$scope={dirty:r,ctx:t}),a.$set(e)},i:function(t){r||(g(e.$$.fragment,t),g(a.$$.fragment,t),r=!0)},o:function(t){d(e.$$.fragment,t),d(a.$$.fragment,t),r=!1},d:function(t){h(e,t),t&&v(n),h(a,t)}}}var q="10Print";function A(t){return[["p5"],[]]}var G=function(n){t(c,i);var r=D(c);function c(t){var n;return e(this,c),n=r.call(this),a(s(n),t,A,B,o,{}),n}return c}();export default G;
