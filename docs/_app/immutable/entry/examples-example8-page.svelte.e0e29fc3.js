import{S as F,i as H,s as V,k as q,y as z,l as B,m as I,z as J,h as M,n as K,b as Q,A as U,g as W,d as X,B as Z,o as ee,w as ae}from"../chunks/index.5349f71a.js";import{d as O}from"../chunks/jobs.6e3cd3e4.js";import{P as te,g as j}from"../chunks/PowerTable.0ae0803f.js";function se(P){let m,i,u,S={ptData:P[1],ptInstructs:P[2],ptOptions:P[3]};return i=new te({props:S}),P[5](i),{c(){m=q("div"),z(i.$$.fragment),this.h()},l(l){m=B(l,"DIV",{class:!0});var c=I(m);J(i.$$.fragment,c),c.forEach(M),this.h()},h(){K(m,"class","ex8_style1")},m(l,c){Q(l,m,c),U(i,m,null),u=!0},p(l,[c]){const d={};c&2&&(d.ptData=l[1]),c&4&&(d.ptInstructs=l[2]),c&8&&(d.ptOptions=l[3]),i.$set(d)},i(l){u||(W(i.$$.fragment,l),u=!0)},o(l){X(i.$$.fragment,l),u=!1},d(l){l&&M(m),P[5](null),Z(i)}}}const D=1,L=2,w=3;function le(P,m,i){let u,S=[],l=[],c={};ee(()=>{i(1,S=O),i(3,c={userFunctions:{customParse:d},searchPhrase:"/a.*t/gimsu",searchIsRegex:!0,checkboxColumn:!0});let a=[];Object.keys(O[0]).forEach(p=>{a.push({key:p,title:p,parseAs:"unsafe-html"})}),a[4].filterPhrase="man",a[4].filterIsRegex=!1,a[5].filterPhrase="o",a[5].filterIsRegex=!1,i(2,l=a)});function d(a){return a=A(a,u,l),a}let x={[D]:{open:'<span class="search-match">',close:"</span>"},[L]:{open:'<span class="filter-match">',close:"</span>"},[w]:{open:'<span class="overlap-match">',close:"</span>"}};function A(a,p,C){if(p!=null&&p.getData){let _=G(a,p,C);a=N(a,_,C)}return a}function G(a,p,C){var T,r;let _,b,v={},s=[],$=p.getData();_=((T=$.search)==null?void 0:T.value)??"",b=((r=$.search)==null?void 0:r.isRegex)??!1,C.forEach(e=>{var y,h;v[e.key]={value:((y=$.filters[e.key])==null?void 0:y.value)??"",isRegex:((h=$.filters[e.key])==null?void 0:h.isRegex)??!1}});let f,t;if(_){let e=new RegExp("");if(b===!1){let y=_.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&").trim(),h=y.toLowerCase().match(/\S+/g);h!=null&&h.length&&(y=h.join("|")),e=new RegExp(y,"gi")}else{if(t=j(_),!t)throw new Error("RegEx is not valid!");f=(t==null?void 0:t.flags)??"",e=new RegExp(t.pattern,f)}a.forEach((y,h)=>{C.forEach((o,n)=>{let E=[];b===!1||(f==null?void 0:f.indexOf("g"))!==-1?E=[...y[o.key].matchAll(e)]:E=[y[o.key].match(e)],E!=null&&E.length&&(s[h]||(s[h]={}),s[h][o.key]||(s[h][o.key]=[]),E.forEach(k=>{if(k)for(let R=k.index;R<k.index+k[0].length;R++)s[h][o.key][R]=D}))})})}let g=new RegExp("");return C.forEach((e,y)=>{var h;if((h=v[e.key])!=null&&h.value){if(v[e.key].isRegex===!1){let o=v[e.key].value.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&").trim(),n=o.toLowerCase().match(/\S+/g);n!=null&&n.length&&(o=n.join("|")),g=new RegExp(o,"gi")}else{if(t=j(v[e.key].value),!t)throw new Error("RegEx is not valid!");f=(t==null?void 0:t.flags)??"",g=new RegExp(t.pattern,f)}a.forEach((o,n)=>{let E=[];v[e.key].isRegex===!1||(f==null?void 0:f.indexOf("g"))!==-1?E=[...o[e.key].matchAll(g)]:E=[o[e.key].match(g)],E.length&&(s[n]||(s[n]={}),s[n][e.key]||(s[n][e.key]=[]),E.forEach(k=>{if(k)for(let R=k.index;R<k.index+k[0].length;R++)s[n][e.key][R]??null?s[n][e.key][R]=w:s[n][e.key][R]=L}))})}}),s}function N(a,p,C){let _=[];return a.forEach((b,v)=>{C.forEach(s=>{var $;if(_=($=p[v])==null?void 0:$[s.key]){let f=-1,t={startChar:-1,endChar:-1,type:-1},g=[],T=0;_.forEach((r,e)=>{f===-1?t={startChar:e,endChar:e,type:r}:e-T>1?(g.push({...t,endChar:T}),t={startChar:e,endChar:e,type:r}):r!=f?(g.push({...t}),t={startChar:e,endChar:e,type:r}):t.endChar=e,f=r,T=e}),t.type>0&&g.push(t),g=g.sort((r,e)=>e.startChar-r.startChar),g.forEach(r=>{b[s.key]=[b[s.key].slice(0,r.startChar),x[r.type].open,b[s.key].slice(r.startChar,r.endChar+1),x[r.type].close,b[s.key].slice(r.endChar+1)].join("")})}})}),a}function Y(a){ae[a?"unshift":"push"](()=>{u=a,i(0,u)})}return[u,S,l,c,A,Y]}class fe extends F{constructor(m){super(),H(this,m,le,se,V,{highlighter:4})}get highlighter(){return this.$$.ctx[4]}}export{fe as default};