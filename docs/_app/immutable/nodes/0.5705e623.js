import{s as U,r as V,f as m,l as N,a as $,g as f,h as E,m as B,d as h,u as T,c as x,j as c,i as S,v as u,w as D,x as G,y as I,z as P,A as R,o as F}from"../chunks/scheduler.76be16dd.js";import{S as J,i as K,a as Q,t as W}from"../chunks/index.bd204057.js";import{b as X}from"../chunks/paths.e4d244df.js";/* empty css                                    */const Y=!0,Z=!1,nt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Y,ssr:Z},Symbol.toStringTag,{value:"Module"}));function tt(l){let e,r,d,p,b,i,_="GitHub",w,o,L="☀️",M,n,O="🌙",g,y,C,v,j,q;const A=l[1].default,a=V(A,l,l[0],null);return{c(){e=m("nav"),r=m("div"),d=m("a"),p=N("Home"),b=N(` | 
        `),i=m("a"),i.textContent=_,w=$(),o=m("button"),o.textContent=L,M=$(),n=m("button"),n.textContent=O,g=$(),y=m("hr"),C=$(),a&&a.c(),this.h()},l(t){e=f(t,"NAV",{class:!0});var s=E(e);r=f(s,"DIV",{});var k=E(r);d=f(k,"A",{href:!0});var z=E(d);p=B(z,"Home"),z.forEach(h),b=B(k,` | 
        `),i=f(k,"A",{href:!0,["data-svelte-h"]:!0}),T(i)!=="svelte-1dqmj90"&&(i.textContent=_),k.forEach(h),w=x(s),o=f(s,"BUTTON",{class:!0,id:!0,title:!0,["data-svelte-h"]:!0}),T(o)!=="svelte-oaejo4"&&(o.textContent=L),M=x(s),n=f(s,"BUTTON",{class:!0,id:!0,title:!0,["data-svelte-h"]:!0}),T(n)!=="svelte-wv436u"&&(n.textContent=O),s.forEach(h),g=x(t),y=f(t,"HR",{}),C=x(t),a&&a.l(t),this.h()},h(){c(d,"href",X+"/"),c(i,"href","https://github.com/muonw/muonw-powertable"),c(o,"class","a compact"),c(o,"id","switch-to-light-mode"),c(o,"title","Light Mode"),c(n,"class","a compact"),c(n,"id","switch-to-dark-mode"),c(n,"title","Dark Mode"),c(e,"class","svelte-1td3z5c")},m(t,s){S(t,e,s),u(e,r),u(r,d),u(d,p),u(r,b),u(r,i),u(e,w),u(e,o),u(e,M),u(e,n),S(t,g,s),S(t,y,s),S(t,C,s),a&&a.m(t,s),v=!0,j||(q=[D(o,"click",l[2]),D(n,"click",l[3])],j=!0)},p(t,[s]){a&&a.p&&(!v||s&1)&&G(a,A,t,t[0],v?P(A,t[0],s,null):I(t[0]),null)},i(t){v||(Q(a,t),v=!0)},o(t){W(a,t),v=!1},d(t){t&&(h(e),h(g),h(y),h(C)),a&&a.d(t),j=!1,R(q)}}}function H(l){let e=document.querySelector("html");e==null||e.setAttribute("data-color-scheme",l)}function et(l,e,r){let{$$slots:d={},$$scope:p}=e;F(()=>{const _=w=>{H(w.matches?"dark":"light")};return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",_),()=>{window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",_)}});const b=()=>H("light"),i=()=>H("dark");return l.$$set=_=>{"$$scope"in _&&r(0,p=_.$$scope)},[p,d,b,i]}class rt extends J{constructor(e){super(),K(this,e,et,tt,U,{})}}export{rt as component,nt as universal};
