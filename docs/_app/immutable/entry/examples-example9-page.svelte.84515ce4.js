import{S as l,i,s as c,k as u,y as p,l as m,m as f,z as d,h as o,n as _,b as h,A as y,J as $,g,d as F,B as D}from"../chunks/index.5349f71a.js";import{d as O}from"../chunks/scores.6665db25.js";import{P as S}from"../chunks/PowerTable.ad70ba59.js";function b(e){let t,s,n;return s=new S({props:{ptData:e[0],ptInstructs:e[1],ptOptions:e[2]}}),{c(){t=u("div"),p(s.$$.fragment),this.h()},l(r){t=m(r,"DIV",{class:!0});var a=f(t);d(s.$$.fragment,a),a.forEach(o),this.h()},h(){_(t,"class","ex9_style1")},m(r,a){h(r,t,a),y(s,t,null),n=!0},p:$,i(r){n||(g(s.$$.fragment,r),n=!0)},o(r){F(s.$$.fragment,r),n=!1},d(r){r&&o(t),D(s)}}}function v(e){return e.forEach(t=>{t.fav_color=`<span class="colorBall bg-${t.fav_color}"></span> ${t.fav_color}`}),e}function k(e,t){return parseFloat(e)<parseFloat(t)?-1:parseFloat(e)>parseFloat(t)?1:0}function w(e,t){return new Date(e)<new Date(t)?-1:new Date(e)>new Date(t)?1:0}function x(e,t){let s=["Red","Orange","Yellow","Green","Cyan","Blue","Violet"];return s.indexOf(e)<s.indexOf(t)?-1:s.indexOf(e)>s.indexOf(t)?1:0}function C(e){return[O,[{key:"score",title:"Score",userFunctions:{customSort:k}},{key:"full_name",title:"Full Name"},{key:"birthday",title:"Birthday",userFunctions:{customSort:w}},{key:"fav_color",title:"Favorite Color",sortCaseSensitive:!0,parseAs:"html",userFunctions:{customSort:x}}],{userFunctions:{customParse:v},nestedSorting:!0,checkboxColumn:!0}]}class A extends l{constructor(t){super(),i(this,t,C,b,c,{})}}export{A as default};
