import{S as I,i as S,s as T,k as b,y as q,a as L,q as R,l as w,m as y,z as E,h as d,c as M,r as A,n as O,p as V,b as v,A as j,D as $,g as C,d as B,B as F,o as z,w as J}from"../chunks/index.5349f71a.js";import{d as G}from"../chunks/jobs.6e3cd3e4.js";import{P as H}from"../chunks/PowerTable.bf5bd0a7.js";function K(t){let n,a,o,i,m,u,f,p,P={ptData:t[1],ptOptions:t[2],ptInstructs:t[3]};return a=new H({props:P}),t[5](a),a.$on("rowClicked",t[4]),{c(){n=b("div"),q(a.$$.fragment),o=L(),i=b("div"),m=b("br"),u=b("small"),f=R("The empty space after this line is intentional."),this.h()},l(e){n=w(e,"DIV",{id:!0});var r=y(n);E(a.$$.fragment,r),r.forEach(d),o=M(e),i=w(e,"DIV",{style:!0});var s=y(i);m=w(s,"BR",{}),u=w(s,"SMALL",{});var c=y(u);f=A(c,"The empty space after this line is intentional."),c.forEach(d),s.forEach(d),this.h()},h(){O(n,"id","myPowerTable"),V(i,"height","90vh")},m(e,r){v(e,n,r),j(a,n,null),v(e,o,r),v(e,i,r),$(i,m),$(i,u),$(u,f),p=!0},p(e,[r]){const s={};r&2&&(s.ptData=e[1]),r&4&&(s.ptOptions=e[2]),a.$set(s)},i(e){p||(C(a.$$.fragment,e),p=!0)},o(e){B(a.$$.fragment,e),p=!1},d(e){e&&d(n),t[5](null),F(a),e&&d(o),e&&d(i)}}}function D(t){t.scrollIntoView({behavior:"smooth"}),t.classList.add("flash"),setTimeout(function(){t.classList.remove("flash")},1500)}function N(t){return new Promise(n=>{if(document.querySelector(t))return n(document.querySelector(t));const a=new MutationObserver(o=>{document.querySelector(t)&&(n(document.querySelector(t)),a.disconnect())});a.observe(document.body,{childList:!0,subtree:!0})})}function Q(t,n,a){let o,i=[],m=[{key:"id",parseAs:"unsafe-html"},{key:"first_name"},{key:"last_name"}],u={rowsPerPage:20,userFunctions:{customParse:f}};function f(e){if(!o)return e;let r=o.getData(!1,["options","sortedData"]),s=r.options,c=r.sortedData;return e.forEach((h,g)=>{let _=Math.floor(s.rowsPerPage/2),l=g+(s.currentPage-1)*s.rowsPerPage+_;l>=c.length&&(l-_>0?l=g+(s.currentPage-1)*s.rowsPerPage-_:l=0);let k=c[l]?c[l].id:0;h.id=`${h.id} <button class="btn lean" data-jump="${l}">Jump to index ${l} (value: ${k})</button>`}),e}function p(e){let r=e.detail.event.target,s;if(s=parseInt(r.getAttribute("data-jump"))){let c=`#myPowerTable tr[data-id="${s}"]`,h=document.querySelector(c);if(h)D(h);else{let g=o.getData(!0,["options","sortedData"]),_=Math.ceil((s+1)/g.options.rowsPerPage);a(2,u={...u,currentPage:_}),N(c).then(l=>{D(l)})}}}z(()=>{a(1,i=G)});function P(e){J[e?"unshift":"push"](()=>{o=e,a(0,o)})}return[o,i,u,m,p,P]}class Y extends I{constructor(n){super(),S(this,n,Q,K,T,{})}}export{Y as default};
