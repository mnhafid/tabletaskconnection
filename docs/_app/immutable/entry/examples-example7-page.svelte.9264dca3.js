import{S as j,i as k,s as O,k as f,y as x,l as _,m as b,z as A,h as u,n as g,b as D,A as B,g as P,d as C,B as J,q as w,a as N,r as $,c as R,D as d,E as I,J as T,I as S,w as U}from"../chunks/index.5349f71a.js";import{d as E}from"../chunks/jobs.6e3cd3e4.js";import{P as V}from"../chunks/PowerTable.ad70ba59.js";function q(r){let t,e,s,o,a,n,i,v;return{c(){t=f("div"),e=f("button"),s=w("Import sample data"),o=N(),a=f("button"),n=w("Export current data"),this.h()},l(m){t=_(m,"DIV",{slot:!0});var p=b(t);e=_(p,"BUTTON",{"data-name":!0});var l=b(e);s=$(l,"Import sample data"),l.forEach(u),o=R(p),a=_(p,"BUTTON",{"data-name":!0});var c=b(a);n=$(c,"Export current data"),c.forEach(u),p.forEach(u),this.h()},h(){g(e,"data-name","item"),g(a,"data-name","item"),g(t,"slot","settings")},m(m,p){D(m,t,p),d(t,e),d(e,s),d(t,o),d(t,a),d(a,n),i||(v=[I(e,"click",r[4]),I(a,"click",r[5])],i=!0)},p:T,d(m){m&&u(t),i=!1,S(v)}}}function F(r){let t,e;return{c(){t=f("div"),e=w("ⓘ Follow the instructions to populate this example table."),this.h()},l(s){t=_(s,"DIV",{slot:!0});var o=b(t);e=$(o,"ⓘ Follow the instructions to populate this example table."),o.forEach(u),this.h()},h(){g(t,"slot","noResults")},m(s,o){D(s,t,o),d(t,e)},p:T,d(s){s&&u(t)}}}function M(r){let t,e,s,o={ptInstructs:r[1],ptData:r[2],ptOptions:r[3],$$slots:{noResults:[F],settings:[q]},$$scope:{ctx:r}};return e=new V({props:o}),r[6](e),{c(){t=f("div"),x(e.$$.fragment),this.h()},l(a){t=_(a,"DIV",{class:!0});var n=b(t);A(e.$$.fragment,n),n.forEach(u),this.h()},h(){g(t,"class","ex7_style1")},m(a,n){D(a,t,n),B(e,t,null),s=!0},p(a,[n]){const i={};n&2&&(i.ptInstructs=a[1]),n&4&&(i.ptData=a[2]),n&256&&(i.$$scope={dirty:n,ctx:a}),e.$set(i)},i(a){s||(P(e.$$.fragment,a),s=!0)},o(a){C(e.$$.fragment,a),s=!1},d(a){a&&u(t),r[6](null),J(e)}}}function z(r,t,e){let s,o=[],a=[];Object.keys(E[0]).forEach(l=>{a.push({key:l,title:l,parseAs:"html"})}),o=a;let n=E,i={checkboxColumn:!0,segments:{topBar:["settings","search","pagination"],pTable:["table"],bottomBar:["dropdown","stats","pagination"]}};function v(l){s.closeMenu(l),fetch("https://raw.githubusercontent.com/muonw/muonw-powertable/main/app/src/data/jobs.json").then(c=>c.json()).then(c=>e(2,n=c))}function m(l){s.closeMenu(l);let c=s.getData().data;var y="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(c)),h=document.createElement("a");h.setAttribute("href",y),h.setAttribute("download","PowerTable_current_data.json"),document.body.appendChild(h),h.click(),h.remove()}function p(l){U[l?"unshift":"push"](()=>{s=l,e(0,s)})}return[s,o,n,i,v,m,p]}class L extends j{constructor(t){super(),k(this,t,z,M,O,{})}}export{L as default};