import{_ as t,r as n,a as r,b as e,c as s,d as a,i as c,s as o,e as f,S as u,T as i,k as p,f as $,q as m,n as l,o as h,g as j,p as g,m as d,u as v,t as x,h as y,j as P,I as w,x as R,y as b,z as T}from"./client.1d4c87e8.js";import{a as k}from"./Tag.4c396b70.js";import{P as D}from"./Post-Tags-Projects.97a5f693.js";function S(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=e(t);if(n){var c=e(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return s(this,r)}}function q(t){var n,r,e=new w({props:{icon:k}});return{c:function(){$(e.$$.fragment),n=R("\r\n  Projects")},l:function(t){j(e.$$.fragment,t),n=b(t,"\r\n  Projects")},m:function(t,s){d(e,t,s),g(t,n,s),r=!0},p:T,i:function(t){r||(x(e.$$.fragment,t),r=!0)},o:function(t){y(e.$$.fragment,t),r=!1},d:function(t){P(e,t),t&&l(n)}}}function z(t){var n,r,e,s=new i({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),a=new D({props:{projects:t[0]}});return{c:function(){n=p(),$(s.$$.fragment),r=p(),$(a.$$.fragment),this.h()},l:function(t){m('[data-svelte="svelte-rfgxwv"]',document.head).forEach(l),n=h(t),j(s.$$.fragment,t),r=h(t),j(a.$$.fragment,t),this.h()},h:function(){document.title="Projects"},m:function(t,c){g(t,n,c),d(s,t,c),g(t,r,c),d(a,t,c),e=!0},p:function(t,n){var r=v(n,1)[0],e={};2&r&&(e.$$scope={dirty:r,ctx:t}),s.$set(e);var c={};1&r&&(c.projects=t[0]),a.$set(c)},i:function(t){e||(x(s.$$.fragment,t),x(a.$$.fragment,t),e=!0)},o:function(t){y(s.$$.fragment,t),y(a.$$.fragment,t),e=!1},d:function(t){t&&l(n),P(s,t),t&&l(r),P(a,t)}}}function E(t,n){return I.apply(this,arguments)}function I(){return(I=t(n.mark((function t(r,e){var s,a,c;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("index.json");case 2:return s=t.sent,t.next=5,s.json();case 5:return a=t.sent,c=a.flatMap((function(t){return t.projects})).filter((function(t,n,r){return r.indexOf(t)===n})),t.abrupt("return",{projects:c});case 8:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function M(t,n,r){var e=n.projects;return t.$set=function(t){"projects"in t&&r(0,e=t.projects)},[e]}var O=function(t){r(e,u);var n=S(e);function e(t){var r;return a(this,e),r=n.call(this),c(f(r),t,M,z,o,{projects:0}),r}return e}();export default O;export{E as preload};
