import{S as g,i as I,s as w,k as p,y as j,a as B,l as f,m as D,z as F,h as u,c as P,n as v,b as r,A as h,J as S,g as A,d as k,B as O}from"../chunks/index.5349f71a.js";import{d as x}from"../chunks/jobs.6e3cd3e4.js";import{P as C}from"../chunks/PowerTable.18386c0e.js";function T(n){let t,s,o,c,_,m,b,$,y,i,l,d;return s=new C({props:{ptData:x,ptOptions:n[0]}}),l=new C({props:{ptData:x,ptInstructs:n[1],ptOptions:n[2]}}),{c(){t=p("div"),j(s.$$.fragment),o=B(),c=p("br"),_=B(),m=p("hr"),b=B(),$=p("br"),y=B(),i=p("div"),j(l.$$.fragment),this.h()},l(e){t=f(e,"DIV",{class:!0});var a=D(t);F(s.$$.fragment,a),a.forEach(u),o=P(e),c=f(e,"BR",{}),_=P(e),m=f(e,"HR",{color:!0}),b=P(e),$=f(e,"BR",{}),y=P(e),i=f(e,"DIV",{class:!0});var E=D(i);F(l.$$.fragment,E),E.forEach(u),this.h()},h(){v(t,"class","ex3_style1"),v(m,"color","#ccc"),v(i,"class","ex3_style1")},m(e,a){r(e,t,a),h(s,t,null),r(e,o,a),r(e,c,a),r(e,_,a),r(e,m,a),r(e,b,a),r(e,$,a),r(e,y,a),r(e,i,a),h(l,i,null),d=!0},p:S,i(e){d||(A(s.$$.fragment,e),A(l.$$.fragment,e),d=!0)},o(e){k(s.$$.fragment,e),k(l.$$.fragment,e),d=!1},d(e){e&&u(t),O(s),e&&u(o),e&&u(c),e&&u(_),e&&u(m),e&&u(b),e&&u($),e&&u(y),e&&u(i),O(l)}}}function q(n){return n.forEach(t=>{let s="";t.job.match(/(Engineer|Manage|Admin)/i)?s="💼":t.job.match(/(Health|Pharmacist|Nurse)/i)?s="‍💊":t.job.match(/(Data|Programmer)/i)&&(s="💻"),t.job=s?`<b>${s} ${t.job}</b>`:t.job}),n}function R(n){return[{uniquePrefix:"pt1",rowsPerPageOptions:[3,5,7],rowsPerPage:3,headerFilters:!1,footerText:!1,currentPage:5,segments:{myTopSegment:["dropdown","pagination","stats"],myTable:["table"]}},[{key:"id"},{key:"first_name"},{key:"last_name"},{key:"company"},{key:"department"},{key:"job",parseAs:"unsafe-html"}],{uniquePrefix:"pt2",translations:{numberFormat:"ja-JP-u-nu-hanidec-ca-japanese",search:"検索",next:"次",previous:"前",rows:"行",filterBy:"フィルタ条件",selectAll:"すべて選択",selectNone:"なしを選択",invertSelection:"選択範囲を反転",add:"追加",delete:"消去",of:"の",from:"から"},userFunctions:{customParse:q}}]}class V extends g{constructor(t){super(),I(this,t,R,T,w,{})}}export{V as default};
