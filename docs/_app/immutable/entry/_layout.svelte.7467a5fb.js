import{S as j,i as z,s as B,C as J,k as _,q as m,a as N,l as p,m as $,r as k,h as c,c as D,n as v,b as M,D as n,E as L,F as K,G as O,H as Q,g as T,d as U,I as W,o as X}from"../chunks/index.5349f71a.js";/* empty css                                    */function Y(l){let t,u,w,h,d,b,y,r,o,E,i,q,A,H,g,f,C,P;const G=l[1].default,a=J(G,l,l[0],null);return{c(){t=_("nav"),u=_("a"),w=m("Home"),h=m(` | 
    `),d=_("a"),b=m("GitHub"),y=m(` | 
    `),r=_("span"),o=m("☀️"),E=N(),i=_("span"),q=m("🌙"),A=N(),H=_("hr"),g=N(),a&&a.c(),this.h()},l(e){t=p(e,"NAV",{});var s=$(t);u=p(s,"A",{href:!0});var F=$(u);w=k(F,"Home"),F.forEach(c),h=k(s,` | 
    `),d=p(s,"A",{href:!0});var I=$(d);b=k(I,"GitHub"),I.forEach(c),y=k(s,` | 
    `),r=p(s,"SPAN",{id:!0,title:!0});var R=$(r);o=k(R,"☀️"),R.forEach(c),E=D(s),i=p(s,"SPAN",{id:!0,title:!0});var V=$(i);q=k(V,"🌙"),V.forEach(c),s.forEach(c),A=D(e),H=p(e,"HR",{}),g=D(e),a&&a.l(e),this.h()},h(){v(u,"href","/powertable/"),v(d,"href","https://github.com/muonw/powertable"),v(r,"id","switch-to-light-mode"),v(r,"title","Light Mode"),v(i,"id","switch-to-dark-mode"),v(i,"title","Dark Mode")},m(e,s){M(e,t,s),n(t,u),n(u,w),n(t,h),n(t,d),n(d,b),n(t,y),n(t,r),n(r,o),n(t,E),n(t,i),n(i,q),M(e,A,s),M(e,H,s),M(e,g,s),a&&a.m(e,s),f=!0,C||(P=[L(r,"click",l[2]),L(r,"keypress",l[3]),L(i,"click",l[4]),L(i,"keypress",l[5])],C=!0)},p(e,[s]){a&&a.p&&(!f||s&1)&&K(a,G,e,e[0],f?Q(G,e[0],s,null):O(e[0]),null)},i(e){f||(T(a,e),f=!0)},o(e){U(a,e),f=!1},d(e){e&&c(t),e&&c(A),e&&c(H),e&&c(g),a&&a.d(e),C=!1,W(P)}}}function S(l){let t=document.querySelector("html");t==null||t.setAttribute("data-color-scheme",l)}function Z(l,t,u){let{$$slots:w={},$$scope:h}=t;X(()=>{const o=E=>{S(E.matches?"dark":"light")};return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",o),()=>{window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",o)}});const d=()=>S("light"),b=()=>S("light"),y=()=>S("dark"),r=()=>S("dark");return l.$$set=o=>{"$$scope"in o&&u(0,h=o.$$scope)},[h,w,d,b,y,r]}class te extends j{constructor(t){super(),z(this,t,Z,Y,B,{})}}export{te as default};