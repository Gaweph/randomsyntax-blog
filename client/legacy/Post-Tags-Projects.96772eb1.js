import{a as t,b as n,c as r,d as e,i as c,s as o,e as f,S as a,I as u,y as i,f as s,k as l,z as h,A as v,B as p,g,o as m,C as $,n as d,D as j,p as y,m as R,E as D,u as E,F as w,t as x,h as b,j as A,G as B,x as I,v as P,w as S}from"./client.b05d1b7a.js";import{f as k,T}from"./Tag.5fcc05c1.js";function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(e){var f=n(this).constructor;c=Reflect.construct(o,arguments,f)}else c=o.apply(this,arguments);return r(this,c)}}function z(t){var n,r,e,c,o=new u({props:{icon:k}});return{c:function(){n=i("div"),s(o.$$.fragment),r=l(),e=h(t[0]),this.h()},l:function(c){n=v(c,"DIV",{class:!0});var f=p(n);g(o.$$.fragment,f),r=m(f),e=$(f,t[0]),f.forEach(d),this.h()},h:function(){j(n,"class","project svelte-1uk341")},m:function(t,f){y(t,n,f),R(o,n,null),D(n,r),D(n,e),c=!0},p:function(t,n){var r=E(n,1)[0];(!c||1&r)&&w(e,t[0])},i:function(t){c||(x(o.$$.fragment,t),c=!0)},o:function(t){b(o.$$.fragment,t),c=!1},d:function(t){t&&d(n),A(o)}}}function C(t,n,r){var e=n.project;return t.$set=function(t){"project"in t&&r(0,e=t.project)},[e]}var F=function(n){t(u,a);var r=V(u);function u(t){var n;return e(this,u),n=r.call(this),c(f(n),t,C,z,o,{project:0}),n}return u}();function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=n(t);if(e){var f=n(this).constructor;c=Reflect.construct(o,arguments,f)}else c=o.apply(this,arguments);return r(this,c)}}function q(t,n,r){var e=t.slice();return e[2]=n[r],e}function H(t,n,r){var e=t.slice();return e[5]=n[r],e}function J(t){var n,r,e,c=new F({props:{project:t[5]}});return{c:function(){n=i("a"),s(c.$$.fragment),this.h()},l:function(t){n=v(t,"A",{rel:!0,href:!0,class:!0});var r=p(n);g(c.$$.fragment,r),r.forEach(d),this.h()},h:function(){j(n,"rel","prefetch"),j(n,"href",r="/projects/"+t[5]+"/"),j(n,"class","svelte-opvnsp")},m:function(t,r){y(t,n,r),R(c,n,null),e=!0},p:function(t,o){var f={};2&o&&(f.project=t[5]),c.$set(f),(!e||2&o&&r!==(r="/projects/"+t[5]+"/"))&&j(n,"href",r)},i:function(t){e||(x(c.$$.fragment,t),e=!0)},o:function(t){b(c.$$.fragment,t),e=!1},d:function(t){t&&d(n),A(c)}}}function K(t){return{c:B,l:B,m:B,d:B}}function L(t){var n,r,e,c,o=new T({props:{tag:t[2]}});return{c:function(){n=i("a"),s(o.$$.fragment),r=l(),this.h()},l:function(t){n=v(t,"A",{rel:!0,href:!0,class:!0});var e=p(n);g(o.$$.fragment,e),r=m(e),e.forEach(d),this.h()},h:function(){j(n,"rel","prefetch"),j(n,"href",e="/tags/"+t[2]+"/"),j(n,"class","svelte-opvnsp")},m:function(t,e){y(t,n,e),R(o,n,null),D(n,r),c=!0},p:function(t,r){var f={};1&r&&(f.tag=t[2]),o.$set(f),(!c||1&r&&e!==(e="/tags/"+t[2]+"/"))&&j(n,"href",e)},i:function(t){c||(x(o.$$.fragment,t),c=!0)},o:function(t){b(o.$$.fragment,t),c=!1},d:function(t){t&&d(n),A(o)}}}function M(t){for(var n,r,e,c,o=t[1],f=[],a=0;a<o.length;a+=1)f[a]=J(H(t,o,a));for(var u=function(t){return b(f[t],1,1,(function(){f[t]=null}))},s=t[0].length>0&&t[1].length>0&&K(),h=t[0],g=[],$=0;$<h.length;$+=1)g[$]=L(q(t,h,$));var j=function(t){return b(g[t],1,1,(function(){g[t]=null}))};return{c:function(){n=i("div");for(var t=0;t<f.length;t+=1)f[t].c();r=l(),s&&s.c(),e=l();for(var c=0;c<g.length;c+=1)g[c].c()},l:function(t){n=v(t,"DIV",{});for(var c=p(n),o=0;o<f.length;o+=1)f[o].l(c);r=m(c),s&&s.l(c),e=m(c);for(var a=0;a<g.length;a+=1)g[a].l(c);c.forEach(d)},m:function(t,o){y(t,n,o);for(var a=0;a<f.length;a+=1)f[a].m(n,null);D(n,r),s&&s.m(n,null),D(n,e);for(var u=0;u<g.length;u+=1)g[u].m(n,null);c=!0},p:function(t,c){var a=E(c,1)[0];if(2&a){var i;for(o=t[1],i=0;i<o.length;i+=1){var l=H(t,o,i);f[i]?(f[i].p(l,a),x(f[i],1)):(f[i]=J(l),f[i].c(),x(f[i],1),f[i].m(n,r))}for(I(),i=o.length;i<f.length;i+=1)u(i);P()}if(t[0].length>0&&t[1].length>0?s||((s=K()).c(),s.m(n,e)):s&&(s.d(1),s=null),1&a){var v;for(h=t[0],v=0;v<h.length;v+=1){var p=q(t,h,v);g[v]?(g[v].p(p,a),x(g[v],1)):(g[v]=L(p),g[v].c(),x(g[v],1),g[v].m(n,null))}for(I(),v=h.length;v<g.length;v+=1)j(v);P()}},i:function(t){if(!c){for(var n=0;n<o.length;n+=1)x(f[n]);for(var r=0;r<h.length;r+=1)x(g[r]);c=!0}},o:function(t){f=f.filter(Boolean);for(var n=0;n<f.length;n+=1)b(f[n]);g=g.filter(Boolean);for(var r=0;r<g.length;r+=1)b(g[r]);c=!1},d:function(t){t&&d(n),S(f,t),s&&s.d(),S(g,t)}}}function N(t,n,r){var e=n.tags,c=void 0===e?[]:e,o=n.projects,f=void 0===o?[]:o;return t.$set=function(t){"tags"in t&&r(0,c=t.tags),"projects"in t&&r(1,f=t.projects)},[c,f]}var O=function(n){t(u,a);var r=G(u);function u(t){var n;return e(this,u),n=r.call(this),c(f(n),t,N,M,o,{tags:0,projects:1}),n}return u}();export{O as P};
