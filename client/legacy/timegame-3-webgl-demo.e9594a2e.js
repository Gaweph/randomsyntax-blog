import{a as t,b as e,c as n,d as o,i as r,s as a,e as i,S as c,f,k as s,g as u,o as m,m as $,p as l,u as p,t as h,h as d,j as g,n as y,z as v,y as w,C as b,A as x,B as j,L as I,D as T}from"./client.40f4a19a.js";import"./Tag.1f786807.js";import"./Post-Tags-Projects.a84b6bb0.js";import{P as G,a as k}from"./Post-Contents.dadd24ff.js";import{L}from"./Link.05db6168.js";import{C as R}from"./Callout.af3e42c1.js";function D(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=e(t);if(o){var i=e(this).constructor;r=Reflect.construct(a,arguments,i)}else r=a.apply(this,arguments);return n(this,r)}}function E(t){var e,n,o;return{c:function(){e=v("Im sorry for the lack of levels and content.\r\n    "),n=w("br"),o=v("\r\n    This project was mainly for me to try and see what would be needed to\r\n    implement the time travel piece of functionality")},l:function(t){e=b(t,"Im sorry for the lack of levels and content.\r\n    "),n=x(t,"BR",{}),o=b(t,"\r\n    This project was mainly for me to try and see what would be needed to\r\n    implement the time travel piece of functionality")},m:function(t,r){l(t,e,r),l(t,n,r),l(t,o,r)},d:function(t){t&&y(e),t&&y(n),t&&y(o)}}}function B(t){var e;return{c:function(){e=v("TimeGame project posts")},l:function(t){e=b(t,"TimeGame project posts")},m:function(t,n){l(t,e,n)},d:function(t){t&&y(e)}}}function P(t){var e,n,o=new L({props:{href:"/projects/Timegame",$$slots:{default:[B]},$$scope:{ctx:t}}});return{c:function(){e=v("I have tried to explain how some of the game mechanics work in other\r\n    "),f(o.$$.fragment)},l:function(t){e=b(t,"I have tried to explain how some of the game mechanics work in other\r\n    "),u(o.$$.fragment,t)},m:function(t,r){l(t,e,r),$(o,t,r),n=!0},p:function(t,e){var n={};4&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i:function(t){n||(h(o.$$.fragment,t),n=!0)},o:function(t){d(o.$$.fragment,t),n=!1},d:function(t){t&&y(e),g(o,t)}}}function W(t){var e;return{c:function(){e=v("If you need any further explanation or help then feel free to ask :) Ill try\r\n    my best to answer.")},l:function(t){e=b(t,"If you need any further explanation or help then feel free to ask :) Ill try\r\n    my best to answer.")},m:function(t,n){l(t,e,n)},d:function(t){t&&y(e)}}}function C(t){var e,n,o,r,a,i,c=new R({props:{title:"Too boring?",$$slots:{default:[E]},$$scope:{ctx:t}}}),p=new R({props:{title:"Explanation",$$slots:{default:[P]},$$scope:{ctx:t}}}),G=new R({props:{title:"Just ask :)",$$slots:{default:[W]},$$scope:{ctx:t}}});return{c:function(){e=v("I have created a WEBGL build of the time machine proof of concept game. You\r\n  should be able to play directly below.\r\n  "),f(c.$$.fragment),n=s(),o=w("iframe"),r=s(),f(p.$$.fragment),a=s(),f(G.$$.fragment),this.h()},l:function(t){e=b(t,"I have created a WEBGL build of the time machine proof of concept game. You\r\n  should be able to play directly below.\r\n  "),u(c.$$.fragment,t),n=m(t),o=x(t,"IFRAME",{style:!0,src:!0,title:!0}),j(o).forEach(y),r=m(t),u(p.$$.fragment,t),a=m(t),u(G.$$.fragment,t),this.h()},h:function(){I(o,"width","1024px"),I(o,"height","700px"),o.src!=="https://gaweph.github.io/TimeGame-WebGL-Demo/V0.01//"&&T(o,"src","https://gaweph.github.io/TimeGame-WebGL-Demo/V0.01//"),T(o,"title","Marching Squares Linear Interpolation")},m:function(t,f){l(t,e,f),$(c,t,f),l(t,n,f),l(t,o,f),l(t,r,f),$(p,t,f),l(t,a,f),$(G,t,f),i=!0},p:function(t,e){var n={};4&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n);var o={};4&e&&(o.$$scope={dirty:e,ctx:t}),p.$set(o);var r={};4&e&&(r.$$scope={dirty:e,ctx:t}),G.$set(r)},i:function(t){i||(h(c.$$.fragment,t),h(p.$$.fragment,t),h(G.$$.fragment,t),i=!0)},o:function(t){d(c.$$.fragment,t),d(p.$$.fragment,t),d(G.$$.fragment,t),i=!1},d:function(t){t&&y(e),g(c,t),t&&y(n),t&&y(o),t&&y(r),g(p,t),t&&y(a),g(G,t)}}}function S(t){var e,n,o=new G({props:{title:V,tags:t[0],projects:t[1]}}),r=new k({props:{$$slots:{default:[C]},$$scope:{ctx:t}}});return{c:function(){f(o.$$.fragment),e=s(),f(r.$$.fragment)},l:function(t){u(o.$$.fragment,t),e=m(t),u(r.$$.fragment,t)},m:function(t,a){$(o,t,a),l(t,e,a),$(r,t,a),n=!0},p:function(t,e){var n=p(e,1)[0],o={};4&n&&(o.$$scope={dirty:n,ctx:t}),r.$set(o)},i:function(t){n||(h(o.$$.fragment,t),h(r.$$.fragment,t),n=!0)},o:function(t){d(o.$$.fragment,t),d(r.$$.fragment,t),n=!1},d:function(t){g(o,t),t&&y(e),g(r,t)}}}var V="Time Game 3 - WEBGL Demo [V0.01]";function A(t){return[["software","unity3d"],["Timegame"]]}var M=function(e){t(f,c);var n=D(f);function f(t){var e;return o(this,f),e=n.call(this),r(i(e),t,A,S,a,{}),e}return f}();export default M;
