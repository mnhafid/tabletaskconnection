import{S as g,i as y,s as _,e as w,x as h,c as P,a as $,y as k,d as c,b as R,g as v,z as C,n as D,r as S,p as T,C as I}from"../../chunks/index-5436dd91.js";import{P as O,p as x}from"../../chunks/PowerTable-cb0966b3.js";function F(n){let e,s,l;return s=new O({props:{ptOptions:n[1],ptInstructs:n[0]}}),{c(){e=w("div"),h(s.$$.fragment),this.h()},l(a){e=P(a,"DIV",{class:!0});var t=$(e);k(s.$$.fragment,t),t.forEach(c),this.h()},h(){R(e,"class","MuonW PowerTable")},m(a,t){v(a,e,t),C(s,e,null),l=!0},p:D,i(a){l||(S(s.$$.fragment,a),l=!0)},o(a){T(s.$$.fragment,a),l=!1},d(a){a&&c(e),I(s)}}}function J(n){let e=[{key:"id",title:"ID",sortable:!1,filterable:!1},{key:"first_name",title:"First Name",sortable:!1,filterable:!1},{key:"last_name",title:"Surname",sortable:!1,filterable:!1},{key:"company",title:"Company",sortable:!1,filterable:!1},{key:"department",title:"Department",sortable:!1,filterable:!1},{key:"job",title:"Job Title",sortable:!1,filterable:!1}],s={isDataRemote:!0,userFunctions:{dataFeed:l},segments:{topBar:["stats","pagination"],pTable:["table"]}};async function l({filters:a,options:t,search:u}){console.log(a,t,u);let o=JSON.parse(JSON.stringify(x)),r=o.length,p=t.currentPage,i=t.rowsPerPage,d=Math.ceil(r/i),m=(p-1)*i,f=m+i-1;return f>r&&(f=r),o=o.slice(m,f),t.totalRows=r,t.totalPages=d,t.filteredRows=r,await new Promise(b=>setTimeout(b,500)),{instructs:e,options:t,data:o}}return[e,s]}class M extends g{constructor(e){super(),y(this,e,J,F,_,{})}}export{M as default};