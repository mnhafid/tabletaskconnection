import{S as d,i as y,s as w,y as P,z as _,A as $,J as k,g as R,d as S,B as h}from"../chunks/index.5349f71a.js";import{d as C}from"../chunks/jobs.6e3cd3e4.js";import{P as J}from"../chunks/PowerTable.ca11da49.js";function O(r){let e,l;return e=new J({props:{ptOptions:r[1],ptInstructs:r[0]}}),{c(){P(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,n){$(e,t,n),l=!0},p:k,i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){h(e,t)}}}function T(r){let e=[{key:"id",title:"ID",sortable:!1,filterable:!1},{key:"first_name",title:"First Name",sortable:!1,filterable:!1},{key:"last_name",title:"Surname",sortable:!1,filterable:!1},{key:"company",title:"Company",sortable:!1,filterable:!1},{key:"department",title:"Department",sortable:!1,filterable:!1},{key:"job",title:"Job Title",sortable:!1,filterable:!1}],l={isDataRemote:!0,userFunctions:{dataFeed:t},segments:{topBar:["stats","pagination"],pTable:["table"]}};async function t({filters:n,options:a,search:c,sorting:p}){console.log("filters",n),console.log("options",a),console.log("search",c),console.log("sorting",p),console.log("----------------");let o=JSON.parse(JSON.stringify(C)),s=o.length,u=a.currentPage,i=a.rowsPerPage,g=Math.ceil(s/i),m=(u-1)*i,f=m+i-1;return f>s&&(f=s),o=o.slice(m,f),a.totalRows=s,a.totalPages=g,a.filteredRows=s,await new Promise(b=>setTimeout(b,500)),{instructs:e,options:a,data:o}}return[e,l]}class N extends d{constructor(e){super(),y(this,e,T,O,w,{})}}export{N as default};
