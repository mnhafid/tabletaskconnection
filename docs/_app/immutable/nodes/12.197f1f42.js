import{s as T,f as d,g as h,h as x,d as _,j as f,i as w,a as j,u as v,c as y,v as g,w as $,B as D,A as k,p as O}from"../chunks/scheduler.76be16dd.js";import{S as A,i as B,b as E,d as P,m as N,a as R,t as S,e as J}from"../chunks/index.bd204057.js";import{d as C}from"../chunks/jobs.6e3cd3e4.js";import{P as U}from"../chunks/PowerTable.fa4f1cbf.js";function V(o){let t,a,n="Import sample data",r,e,s="Export current data",l,b;return{c(){t=d("div"),a=d("button"),a.textContent=n,r=j(),e=d("button"),e.textContent=s,this.h()},l(c){t=h(c,"DIV",{slot:!0});var p=x(t);a=h(p,"BUTTON",{"data-name":!0,["data-svelte-h"]:!0}),v(a)!=="svelte-t3krna"&&(a.textContent=n),r=y(p),e=h(p,"BUTTON",{"data-name":!0,["data-svelte-h"]:!0}),v(e)!=="svelte-nxal9v"&&(e.textContent=s),p.forEach(_),this.h()},h(){f(a,"data-name","item"),f(e,"data-name","item"),f(t,"slot","settings")},m(c,p){w(c,t,p),g(t,a),g(t,r),g(t,e),l||(b=[$(a,"click",o[4]),$(e,"click",o[5])],l=!0)},p:D,d(c){c&&_(t),l=!1,k(b)}}}function M(o){let t,a="ⓘ Follow the instructions to populate this example table.";return{c(){t=d("div"),t.textContent=a,this.h()},l(n){t=h(n,"DIV",{slot:!0,["data-svelte-h"]:!0}),v(t)!=="svelte-13csery"&&(t.textContent=a),this.h()},h(){f(t,"slot","noResults")},m(n,r){w(n,t,r)},p:D,d(n){n&&_(t)}}}function q(o){let t,a,n,r={ptInstructs:o[1],ptData:o[2],ptOptions:o[3],$$slots:{noResults:[M],settings:[V]},$$scope:{ctx:o}};return a=new U({props:r}),o[6](a),{c(){t=d("div"),E(a.$$.fragment),this.h()},l(e){t=h(e,"DIV",{class:!0});var s=x(t);P(a.$$.fragment,s),s.forEach(_),this.h()},h(){f(t,"class","ex7_style1")},m(e,s){w(e,t,s),N(a,t,null),n=!0},p(e,[s]){const l={};s&2&&(l.ptInstructs=e[1]),s&4&&(l.ptData=e[2]),s&256&&(l.$$scope={dirty:s,ctx:e}),a.$set(l)},i(e){n||(R(a.$$.fragment,e),n=!0)},o(e){S(a.$$.fragment,e),n=!1},d(e){e&&_(t),o[6](null),J(a)}}}function F(o,t,a){let n,r=[],e=[];Object.keys(C[0]).forEach(i=>{e.push({key:i,title:i,parseAs:"html"})}),r=e;let s=C,l={checkboxColumn:!0,segments:{topBar:["settings","search","pagination"],pTable:["table"],bottomBar:["dropdown","stats","pagination"]}};function b(i){n.closeMenu(i),fetch("https://raw.githubusercontent.com/muonw/muonw-powertable/main/app/src/data/jobs.json").then(u=>u.json()).then(u=>a(2,s=u))}function c(i){n.closeMenu(i);let u=n.getData().data;var I="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(u)),m=document.createElement("a");m.setAttribute("href",I),m.setAttribute("download","PowerTable_current_data.json"),document.body.appendChild(m),m.click(),m.remove()}function p(i){O[i?"unshift":"push"](()=>{n=i,a(0,n)})}return[n,r,s,l,b,c,p]}class L extends A{constructor(t){super(),B(this,t,F,q,T,{})}}export{L as component};
