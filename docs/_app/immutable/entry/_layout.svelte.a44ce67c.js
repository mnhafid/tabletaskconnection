import{S as K,i as O,s as Q,C as T,k as h,q as b,a as L,l as f,m,r as $,h as i,c as q,n as p,b as C,D as r,E as G,F as U,G as W,H as X,g as Y,d as Z,I as x,o as ee}from"../chunks/index.5349f71a.js";/* empty css                                    */function te(o){let t,c,u,v,w,_,y,E,s,n,I,N,d,V,g,A,H,k,P,F;const z=o[1].default,a=T(z,o,o[0],null);return{c(){t=h("nav"),c=h("div"),u=h("a"),v=b("Home"),w=b(` | 
        `),_=h("a"),y=b("GitHub"),E=L(),s=h("div"),n=h("span"),I=b("☀️"),N=L(),d=h("span"),V=b("🌙"),g=L(),A=h("hr"),H=L(),a&&a.c(),this.h()},l(e){t=f(e,"NAV",{class:!0});var l=m(t);c=f(l,"DIV",{});var M=m(c);u=f(M,"A",{href:!0});var R=m(u);v=$(R,"Home"),R.forEach(i),w=$(M,` | 
        `),_=f(M,"A",{href:!0});var j=m(_);y=$(j,"GitHub"),j.forEach(i),M.forEach(i),E=q(l),s=f(l,"DIV",{});var D=m(s);n=f(D,"SPAN",{id:!0,title:!0});var B=m(n);I=$(B,"☀️"),B.forEach(i),N=q(D),d=f(D,"SPAN",{id:!0,title:!0});var J=m(d);V=$(J,"🌙"),J.forEach(i),D.forEach(i),l.forEach(i),g=q(e),A=f(e,"HR",{}),H=q(e),a&&a.l(e),this.h()},h(){p(u,"href","/muonw-powertable/"),p(_,"href","https://github.com/muonw/muonw-powertable"),p(n,"id","switch-to-light-mode"),p(n,"title","Light Mode"),p(d,"id","switch-to-dark-mode"),p(d,"title","Dark Mode"),p(t,"class","svelte-1td3z5c")},m(e,l){C(e,t,l),r(t,c),r(c,u),r(u,v),r(c,w),r(c,_),r(_,y),r(t,E),r(t,s),r(s,n),r(n,I),r(s,N),r(s,d),r(d,V),C(e,g,l),C(e,A,l),C(e,H,l),a&&a.m(e,l),k=!0,P||(F=[G(n,"click",o[2]),G(n,"keypress",o[3]),G(d,"click",o[4]),G(d,"keypress",o[5])],P=!0)},p(e,[l]){a&&a.p&&(!k||l&1)&&U(a,z,e,e[0],k?X(z,e[0],l,null):W(e[0]),null)},i(e){k||(Y(a,e),k=!0)},o(e){Z(a,e),k=!1},d(e){e&&i(t),e&&i(g),e&&i(A),e&&i(H),a&&a.d(e),P=!1,x(F)}}}function S(o){let t=document.querySelector("html");t==null||t.setAttribute("data-color-scheme",o)}function se(o,t,c){let{$$slots:u={},$$scope:v}=t;ee(()=>{const s=n=>{S(n.matches?"dark":"light")};return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",s),()=>{window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",s)}});const w=()=>S("light"),_=()=>S("light"),y=()=>S("dark"),E=()=>S("dark");return o.$$set=s=>{"$$scope"in s&&c(0,v=s.$$scope)},[v,u,w,_,y,E]}class re extends K{constructor(t){super(),O(this,t,se,te,Q,{})}}export{re as default};
