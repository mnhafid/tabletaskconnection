import{S as c,i as u,s as m,k as f,y as p,l as d,m as _,z as h,h as i,n as y,b as $,A as v,J as b,g as I,d as D,B as F}from"../chunks/index.5349f71a.js";import{d as w}from"../chunks/scores.6665db25.js";import{P as k}from"../chunks/PowerTable.bf5bd0a7.js";function R(n){let r,t,o;return t=new k({props:{ptData:n[0],ptInstructs:n[1],ptOptions:n[2]}}),{c(){r=f("div"),p(t.$$.fragment),this.h()},l(e){r=d(e,"DIV",{class:!0});var s=_(r);h(t.$$.fragment,s),s.forEach(i),this.h()},h(){y(r,"class","ex10_style1")},m(e,s){$(e,r,s),v(t,r,null),o=!0},p:b,i(e){o||(I(t.$$.fragment,e),o=!0)},o(e){D(t.$$.fragment,e),o=!1},d(e){e&&i(r),F(t)}}}function S(n){return n.forEach(r=>{r.fav_color=`<span class="colorBall bg-${r.fav_color}"></span> ${r.fav_color}`}),n}function B(n,r){return r.trim()&&(n=n.filter(t=>parseInt(t.score)%2===0)),{data:n,continue:!0}}function C(n,r){var t,o;if(r.trim()){let e=r.match(/^([\d ]+)-([\d ]+)$/);if((t=e==null?void 0:e[1])!=null&&t.trim()||(o=e==null?void 0:e[2])!=null&&o.trim()){let s=parseInt(e==null?void 0:e[1]),a=parseInt(e==null?void 0:e[2]);return n=n.filter(l=>parseInt(l.score)>=s&&parseInt(l.score)<=a),{data:n,continue:!1}}}return{data:n,continue:!0}}function O(n,r){if(r.trim()){let t=r.match(/^(\d{2}\/\d{2}\/\d{4})-(\d{2}\/\d{2}\/\d{4})$/);if(t!=null&&t[1]&&(t!=null&&t[2])){let o=new Date(t==null?void 0:t[1]),e=new Date(t==null?void 0:t[2]);return n=n.filter(s=>new Date(s.birthday)>=o&&new Date(s.birthday)<=e),{data:n,continue:!1}}}return{data:n,continue:!0}}function g(n){return[w,[{key:"score",title:"Score",sortable:!1,filterPhrase:"6-85",userFunctions:{customFilter:C}},{key:"full_name",title:"Full Name"},{key:"birthday",title:"Birthday",sortable:!1,filterPhrase:"06/09/2000-01/30/2030",userFunctions:{customFilter:O}},{key:"fav_color",title:"Favorite Color",sortable:!1,parseAs:"html"}],{userFunctions:{customParse:S,customSearch:B},nestedSorting:!0,checkboxColumn:!0}]}class q extends c{constructor(r){super(),u(this,r,g,R,m,{})}}export{q as default};