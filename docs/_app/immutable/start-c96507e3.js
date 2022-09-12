import{S as He,i as Me,s as Xe,a as Ye,e as V,c as Qe,b as q,g as Q,t as N,d as Z,f as x,h as C,j as Ze,o as ve,k as et,l as tt,m as rt,n as we,p as F,q as nt,r as at,u as st,v as B,w as ae,x as J,y as z,z as xe}from"./chunks/index-f24a2b30.js";import{g as Ce,f as qe,s as Y,a as Ee,b as ot,i as it}from"./chunks/singletons-956eaa67.js";const lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ct=function(n,e){return new URL(n,e).href},Be={},D=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(a=>{if(a=ct(a,o),a in Be)return;Be[a]=!0;const u=a.endsWith(".css"),r=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":lt,u||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),u)return new Promise((p,m)=>{i.addEventListener("load",p),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())};class ye{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Je{constructor(e,t){this.status=e,this.location=t}}function ft(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function ut(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const pt=["href","pathname","search","searchParams","toString","toJSON"];function dt(n,e){const t=new URL(n);for(const o of pt){let a=t[o];Object.defineProperty(t,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,a,u)=>u(n,a),mt(t),t}function mt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function _t(n){let e=5381,t=n.length;if(typeof n=="string")for(;t;)e=e*33^n.charCodeAt(--t);else for(;t;)e=e*33^n[--t];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;ce.delete(o)}return Re(n,e)};const ce=new Map;function ht(n,e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof n=="string"?n:n.url)}]`;t&&typeof t.body=="string"&&(a+=`[data-hash="${_t(t.body)}"]`);const u=document.querySelector(a);if(u!=null&&u.textContent){const{body:r,...i}=JSON.parse(u.textContent),p=u.getAttribute("data-ttl");return p&&ce.set(e,{body:r,init:i,ttl:1e3*Number(p)}),Promise.resolve(new Response(r,i))}return Re(n,t)}function gt(n,e){const t=ce.get(n);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ce.delete(n)}return Re(n,e)}const wt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function yt(n){const e=[],t=[];let o=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter(bt).map((u,r,i)=>{const p=decodeURIComponent(u),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(p);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const y=r===i.length-1;return p&&"/"+p.split(/\[(.+?)\]/).map((L,U)=>{if(U%2){const $=wt.exec(L);if(!$)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,K,G]=$;return e.push(K),t.push(G),I?"(.*?)":"([^/]+?)"}return y&&L.includes(".")&&(o=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function bt(n){return!/^\([^)]+\)$/.test(n)}function vt(n,e,t,o){const a={};for(let u=0;u<e.length;u+=1){const r=e[u],i=t[u],p=n[u+1]||"";if(i){const m=o[i];if(!m)throw new Error(`Missing "${i}" param matcher`);if(!m(p))return}a[r]=p}return a}function Et(n,e,t,o){const a=new Set(e);return Object.entries(t).map(([i,[p,m,y]])=>{const{pattern:L,names:U,types:$}=yt(i),I={id:i,exec:K=>{const G=L.exec(K);if(G)return vt(G,U,$,o)},errors:[1,...y||[]].map(K=>n[K]),layouts:[0,...m||[]].map(r),leaf:u(p)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function u(i){const p=i<0;return p&&(i=~i),[p,n[i]]}function r(i){return i===void 0?i:[a.has(i),n[i]]}}function kt(n){let e,t,o;var a=n[0][0];function u(r){return{props:{data:r[2],form:r[1]}}}return a&&(e=new a(u(n))),{c(){e&&B(e.$$.fragment),t=V()},l(r){e&&ae(e.$$.fragment,r),t=V()},m(r,i){e&&J(e,r,i),q(r,t,i),o=!0},p(r,i){const p={};if(i&4&&(p.data=r[2]),i&2&&(p.form=r[1]),a!==(a=r[0][0])){if(e){Q();const m=e;N(m.$$.fragment,1,0,()=>{z(m,1)}),Z()}a?(e=new a(u(r)),B(e.$$.fragment),x(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else a&&e.$set(p)},i(r){o||(e&&x(e.$$.fragment,r),o=!0)},o(r){e&&N(e.$$.fragment,r),o=!1},d(r){r&&C(t),e&&z(e,r)}}}function $t(n){let e,t,o;var a=n[0][0];function u(r){return{props:{data:r[2],$$slots:{default:[Pt]},$$scope:{ctx:r}}}}return a&&(e=new a(u(n))),{c(){e&&B(e.$$.fragment),t=V()},l(r){e&&ae(e.$$.fragment,r),t=V()},m(r,i){e&&J(e,r,i),q(r,t,i),o=!0},p(r,i){const p={};if(i&4&&(p.data=r[2]),i&1051&&(p.$$scope={dirty:i,ctx:r}),a!==(a=r[0][0])){if(e){Q();const m=e;N(m.$$.fragment,1,0,()=>{z(m,1)}),Z()}a?(e=new a(u(r)),B(e.$$.fragment),x(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else a&&e.$set(p)},i(r){o||(e&&x(e.$$.fragment,r),o=!0)},o(r){e&&N(e.$$.fragment,r),o=!1},d(r){r&&C(t),e&&z(e,r)}}}function Rt(n){let e,t,o;var a=n[0][1];function u(r){return{props:{data:r[3],form:r[1]}}}return a&&(e=new a(u(n))),{c(){e&&B(e.$$.fragment),t=V()},l(r){e&&ae(e.$$.fragment,r),t=V()},m(r,i){e&&J(e,r,i),q(r,t,i),o=!0},p(r,i){const p={};if(i&8&&(p.data=r[3]),i&2&&(p.form=r[1]),a!==(a=r[0][1])){if(e){Q();const m=e;N(m.$$.fragment,1,0,()=>{z(m,1)}),Z()}a?(e=new a(u(r)),B(e.$$.fragment),x(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else a&&e.$set(p)},i(r){o||(e&&x(e.$$.fragment,r),o=!0)},o(r){e&&N(e.$$.fragment,r),o=!1},d(r){r&&C(t),e&&z(e,r)}}}function Lt(n){let e,t,o;var a=n[0][1];function u(r){return{props:{data:r[3],$$slots:{default:[St]},$$scope:{ctx:r}}}}return a&&(e=new a(u(n))),{c(){e&&B(e.$$.fragment),t=V()},l(r){e&&ae(e.$$.fragment,r),t=V()},m(r,i){e&&J(e,r,i),q(r,t,i),o=!0},p(r,i){const p={};if(i&8&&(p.data=r[3]),i&1043&&(p.$$scope={dirty:i,ctx:r}),a!==(a=r[0][1])){if(e){Q();const m=e;N(m.$$.fragment,1,0,()=>{z(m,1)}),Z()}a?(e=new a(u(r)),B(e.$$.fragment),x(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else a&&e.$set(p)},i(r){o||(e&&x(e.$$.fragment,r),o=!0)},o(r){e&&N(e.$$.fragment,r),o=!1},d(r){r&&C(t),e&&z(e,r)}}}function St(n){let e,t,o;var a=n[0][2];function u(r){return{props:{data:r[4],form:r[1]}}}return a&&(e=new a(u(n))),{c(){e&&B(e.$$.fragment),t=V()},l(r){e&&ae(e.$$.fragment,r),t=V()},m(r,i){e&&J(e,r,i),q(r,t,i),o=!0},p(r,i){const p={};if(i&16&&(p.data=r[4]),i&2&&(p.form=r[1]),a!==(a=r[0][2])){if(e){Q();const m=e;N(m.$$.fragment,1,0,()=>{z(m,1)}),Z()}a?(e=new a(u(r)),B(e.$$.fragment),x(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else a&&e.$set(p)},i(r){o||(e&&x(e.$$.fragment,r),o=!0)},o(r){e&&N(e.$$.fragment,r),o=!1},d(r){r&&C(t),e&&z(e,r)}}}function Pt(n){let e,t,o,a;const u=[Lt,Rt],r=[];function i(p,m){return p[0][2]?0:1}return e=i(n),t=r[e]=u[e](n),{c(){t.c(),o=V()},l(p){t.l(p),o=V()},m(p,m){r[e].m(p,m),q(p,o,m),a=!0},p(p,m){let y=e;e=i(p),e===y?r[e].p(p,m):(Q(),N(r[y],1,1,()=>{r[y]=null}),Z(),t=r[e],t?t.p(p,m):(t=r[e]=u[e](p),t.c()),x(t,1),t.m(o.parentNode,o))},i(p){a||(x(t),a=!0)},o(p){N(t),a=!1},d(p){r[e].d(p),p&&C(o)}}}function ze(n){let e,t=n[6]&&Ke(n);return{c(){e=et("div"),t&&t.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=rt(e);t&&t.l(a),a.forEach(C),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),F(e,"position","absolute"),F(e,"left","0"),F(e,"top","0"),F(e,"clip","rect(0 0 0 0)"),F(e,"clip-path","inset(50%)"),F(e,"overflow","hidden"),F(e,"white-space","nowrap"),F(e,"width","1px"),F(e,"height","1px")},m(o,a){q(o,e,a),t&&t.m(e,null)},p(o,a){o[6]?t?t.p(o,a):(t=Ke(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&C(e),t&&t.d()}}}function Ke(n){let e;return{c(){e=nt(n[7])},l(t){e=at(t,n[7])},m(t,o){q(t,e,o)},p(t,o){o&128&&st(e,t[7])},d(t){t&&C(e)}}}function Ot(n){let e,t,o,a,u;const r=[$t,kt],i=[];function p(y,L){return y[0][1]?0:1}e=p(n),t=i[e]=r[e](n);let m=n[5]&&ze(n);return{c(){t.c(),o=Ye(),m&&m.c(),a=V()},l(y){t.l(y),o=Qe(y),m&&m.l(y),a=V()},m(y,L){i[e].m(y,L),q(y,o,L),m&&m.m(y,L),q(y,a,L),u=!0},p(y,[L]){let U=e;e=p(y),e===U?i[e].p(y,L):(Q(),N(i[U],1,1,()=>{i[U]=null}),Z(),t=i[e],t?t.p(y,L):(t=i[e]=r[e](y),t.c()),x(t,1),t.m(o.parentNode,o)),y[5]?m?m.p(y,L):(m=ze(y),m.c(),m.m(a.parentNode,a)):m&&(m.d(1),m=null)},i(y){u||(x(t),u=!0)},o(y){N(t),u=!1},d(y){i[e].d(y),y&&C(o),m&&m.d(y),y&&C(a)}}}function It(n,e,t){let{stores:o}=e,{page:a}=e,{components:u}=e,{form:r}=e,{data_0:i=null}=e,{data_1:p=null}=e,{data_2:m=null}=e;Ze(o.page.notify);let y=!1,L=!1,U=null;return ve(()=>{const $=o.page.subscribe(()=>{y&&(t(6,L=!0),t(7,U=document.title||"untitled page"))});return t(5,y=!0),$}),n.$$set=$=>{"stores"in $&&t(8,o=$.stores),"page"in $&&t(9,a=$.page),"components"in $&&t(0,u=$.components),"form"in $&&t(1,r=$.form),"data_0"in $&&t(2,i=$.data_0),"data_1"in $&&t(3,p=$.data_1),"data_2"in $&&t(4,m=$.data_2)},n.$$.update=()=>{n.$$.dirty&768&&o.page.set(a)},[u,r,i,p,m,y,L,U,o,a]}class At extends He{constructor(e){super(),Me(this,e,It,Ot,Xe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Tt={},fe=[()=>D(()=>import("./chunks/0-29108ef7.js"),["chunks/0-29108ef7.js","chunks/_layout-244212a4.js","components/pages/_layout.svelte-5d0f50d2.js","assets/_layout-6772769a.css","chunks/index-f24a2b30.js"],import.meta.url),()=>D(()=>import("./chunks/1-9a4ccd0d.js"),["chunks/1-9a4ccd0d.js","components/error.svelte-0b40ed24.js","chunks/index-f24a2b30.js","chunks/stores-1f3ecc45.js","chunks/singletons-956eaa67.js"],import.meta.url),()=>D(()=>import("./chunks/2-36cf852d.js"),["chunks/2-36cf852d.js","components/pages/examples/_layout.svelte-c4e7e8c9.js","assets/_layout-5c9c2797.css","chunks/index-f24a2b30.js","chunks/stores-1f3ecc45.js","chunks/singletons-956eaa67.js"],import.meta.url),()=>D(()=>import("./chunks/3-a0d3d44c.js"),["chunks/3-a0d3d44c.js","components/pages/_page.svelte-55c3df86.js","chunks/index-f24a2b30.js","chunks/jobs-f0c41956.js","chunks/PowerTable-4e54ed77.js"],import.meta.url),()=>D(()=>import("./chunks/4-615e46d2.js"),["chunks/4-615e46d2.js","components/pages/examples/_page.svelte-c5ee470c.js","chunks/index-f24a2b30.js"],import.meta.url),()=>D(()=>import("./chunks/5-61084b16.js"),["chunks/5-61084b16.js","components/pages/examples/example1/_page.svelte-f28de478.js","chunks/index-f24a2b30.js","chunks/jobs-f0c41956.js","chunks/PowerTable-4e54ed77.js"],import.meta.url),()=>D(()=>import("./chunks/6-a63d41d8.js"),["chunks/6-a63d41d8.js","components/pages/examples/example10/_page.svelte-e5df0599.js","assets/_page-ffb3cd8c.css","chunks/index-f24a2b30.js","chunks/scores-42853dba.js","chunks/PowerTable-4e54ed77.js"],import.meta.url),()=>D(()=>import("./chunks/7-29dd6f4e.js"),["chunks/7-29dd6f4e.js","components/pages/examples/example2/_page.svelte-bccabaee.js","chunks/index-f24a2b30.js","chunks/jobs-f0c41956.js","chunks/PowerTable-4e54ed77.js"],import.meta.url),()=>D(()=>import("./chunks/8-5135e5fb.js"),["chunks/8-5135e5fb.js","components/pages/examples/example3/_page.svelte-13a69a9e.js","assets/_page-e322aab6.css","chunks/index-f24a2b30.js","chunks/jobs-f0c41956.js","chunks/PowerTable-4e54ed77.js"],import.meta.url),()=>D(()=>import("./chunks/9-f2f45e1e.js"),["chunks/9-f2f45e1e.js","components/pages/examples/example4/_page.svelte-78c4201c.js","chunks/index-f24a2b30.js","chunks/jobs-f0c41956.js","chunks/PowerTable-4e54ed77.js"],import.meta.url),()=>D(()=>import("./chunks/10-b1bf21c2.js"),["chunks/10-b1bf21c2.js","components/pages/examples/example5/_page.svelte-8493fbfc.js","assets/_page-c2da0502.css","chunks/index-f24a2b30.js","chunks/jobs-f0c41956.js","chunks/PowerTable-4e54ed77.js"],import.meta.url),()=>D(()=>import("./chunks/11-3cb8d238.js"),["chunks/11-3cb8d238.js","components/pages/examples/example6/_page.svelte-169941c6.js","chunks/index-f24a2b30.js","chunks/jobs-f0c41956.js","chunks/PowerTable-4e54ed77.js"],import.meta.url),()=>D(()=>import("./chunks/12-d5b6d99a.js"),["chunks/12-d5b6d99a.js","components/pages/examples/example7/_page.svelte-e29be836.js","chunks/index-f24a2b30.js","chunks/jobs-f0c41956.js","chunks/PowerTable-4e54ed77.js"],import.meta.url),()=>D(()=>import("./chunks/13-bb5244af.js"),["chunks/13-bb5244af.js","components/pages/examples/example8/_page.svelte-9312a0ea.js","assets/_page-65ee655d.css","chunks/index-f24a2b30.js","chunks/jobs-f0c41956.js","chunks/PowerTable-4e54ed77.js"],import.meta.url),()=>D(()=>import("./chunks/14-1bf8d1af.js"),["chunks/14-1bf8d1af.js","components/pages/examples/example9/_page.svelte-7431a3c8.js","assets/_page-ffb3cd8c.css","chunks/index-f24a2b30.js","chunks/scores-42853dba.js","chunks/PowerTable-4e54ed77.js"],import.meta.url)],jt=[],Dt={"":[3],examples:[4,[2]],"examples/example1":[5,[2]],"examples/example10":[6,[2]],"examples/example2":[7,[2]],"examples/example3":[8,[2]],"examples/example4":[9,[2]],"examples/example5":[10,[2]],"examples/example6":[11,[2]],"examples/example7":[12,[2]],"examples/example8":[13,[2]],"examples/example9":[14,[2]]},Ut={handleError:({error:n})=>(console.error(n),{message:"Internal Error"})},Vt="/__data.js",We="sveltekit:scroll",M="sveltekit:index",oe=Et(fe,jt,Dt,Tt),ke=fe[0],$e=fe[1];ke();$e();let ne={};try{ne=JSON.parse(sessionStorage[We])}catch{}function be(n){ne[n]=Ee()}function Nt({target:n,base:e,trailing_slash:t}){var De;const o=[],a={id:null,promise:null},u={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,session_id:0,url:null},i=!1,p=!0,m=!1,y=1,L=null,U=!1,$,I=(De=history.state)==null?void 0:De[M];I||(I=Date.now(),history.replaceState({...history.state,[M]:I},"",location.href));const K=ne[I];K&&(history.scrollRestoration="manual",scrollTo(K.x,K.y));let G=!1,W,Le;function Se(){if(!L){const s=new URL(location.href);L=Promise.resolve().then(async()=>{const c=me(s,!0);await Oe(c,s,[]),L=null,U=!1})}return L}async function ue(s,{noscroll:c=!1,replaceState:_=!1,keepfocus:l=!1,state:f={}},h){return typeof s=="string"&&(s=new URL(s,Ce(document))),_e({url:s,scroll:c?Ee():null,keepfocus:l,redirect_chain:h,details:{state:f,replaceState:_},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(s){const c=me(s,!1);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return a.promise=Te(c),a.id=c.id,a.promise}async function Oe(s,c,_,l,f){var v,E;const h=Le={};let g=s&&await Te(s);if(!g&&c.origin===location.origin&&c.pathname===location.pathname&&(g=await se({status:404,error:new Error(`Not found: ${c.pathname}`),url:c,routeId:null})),!g)return await te(c),!1;if(c=(s==null?void 0:s.url)||c,Le!==h)return!1;if(o.length=0,g.type==="redirect")if(_.length>10||_.includes(c.pathname))g=await se({status:500,error:new Error("Redirect loop"),url:c,routeId:null});else return ue(new URL(g.location,c).href,{},[..._,c.pathname]),!1;else((E=(v=g.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await Y.updated.check()&&await te(c);if(m=!0,l&&l.details){const{details:b}=l,w=b.replaceState?0:1;b.state[M]=I+=w,history[b.replaceState?"replaceState":"pushState"](b.state,"",c)}if(i){r=g.state,g.props.page&&(g.props.page.url=c);const b=le();$.$set(g.props),b()}else Ie(g);if(l){const{scroll:b,keepfocus:w}=l;if(!w){const k=document.body,A=k.getAttribute("tabindex");k.tabIndex=-1,k.focus({preventScroll:!0}),setTimeout(()=>{var S;(S=getSelection())==null||S.removeAllRanges()}),A!==null?k.setAttribute("tabindex",A):k.removeAttribute("tabindex")}if(await xe(),p){const k=c.hash&&document.getElementById(c.hash.slice(1));b?scrollTo(b.x,b.y):k?k.scrollIntoView():scrollTo(0,0)}}else await xe();a.promise=null,a.id=null,p=!0,g.props.page&&(W=g.props.page),f&&f(),m=!1}function Ie(s){var f,h;r=s.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),W=s.props.page;const _=le();$=new At({target:n,props:{...s.props,stores:Y},hydrate:!0}),_();const l={from:null,to:ie("to",{params:r.params,routeId:(h=(f=r.route)==null?void 0:f.id)!=null?h:null,url:new URL(location.href)}),type:"load"};u.after_navigate.forEach(g=>g(l)),i=!0}async function ee({url:s,params:c,branch:_,status:l,error:f,route:h,form:g}){var A;const v=_.filter(Boolean),E={type:"loaded",state:{url:s,params:c,branch:_,error:f,route:h,session_id:y},props:{components:v.map(S=>S.node.component)}};g!==void 0&&(E.props.form=g);let b={},w=!W;for(let S=0;S<v.length;S+=1){const T=v[S];b={...b,...T.data},(w||!r.branch.some(j=>j===T))&&(E.props[`data_${S}`]=b,w=w||Object.keys((A=T.data)!=null?A:{}).length>0)}if(w||(w=Object.keys(W.data).length!==Object.keys(b).length),!r.url||s.href!==r.url.href||r.error!==f||w){E.props.page={error:f,params:c,routeId:h&&h.id,status:l,url:s,data:w?b:W.data};const S=(T,j)=>{Object.defineProperty(E.props.page,T,{get:()=>{throw new Error(`$page.${T} has been replaced by $page.url.${j}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return E}async function pe({loader:s,parent:c,url:_,params:l,routeId:f,server_data_node:h}){var b,w,k,A,S;let g=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await s();if((b=E.shared)!=null&&b.load){let T=function(...d){for(const R of d){const{href:P}=new URL(R,_);v.dependencies.add(P)}};const j={};for(const d in l)Object.defineProperty(j,d,{get(){return v.params.add(d),l[d]},enumerable:!0});const H={routeId:f,params:j,data:(w=h==null?void 0:h.data)!=null?w:null,url:dt(_,()=>{v.url=!0}),async fetch(d,R){let P;typeof d=="string"?P=d:(P=d.url,R={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:d.headers,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...R});const O=new URL(P,_).href;return T(O),i?gt(O,R):ht(P,O,R)},setHeaders:()=>{},depends:T,parent(){return v.parent=!0,c()}};Object.defineProperties(H,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(k=await E.shared.load.call(null,H))!=null?k:null}return{node:E,loader:s,server:h,shared:(A=E.shared)!=null&&A.load?{type:"data",data:g,uses:v}:null,data:(S=g!=null?g:h==null?void 0:h.data)!=null?S:null}}function Ae(s,c,_){if(U)return!0;if(!_)return!1;if(_.parent&&c||s.url&&_.url)return!0;for(const l of s.params)if(_.params.has(l))return!0;for(const l of _.dependencies)if(o.some(f=>f(new URL(l))))return!0;return!1}function de(s,c){var _,l;return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set((_=s.uses.dependencies)!=null?_:[]),params:new Set((l=s.uses.params)!=null?l:[]),parent:!!s.uses.parent,url:!!s.uses.url}}:(s==null?void 0:s.type)==="skip"&&c!=null?c:null}async function Te({id:s,invalidating:c,url:_,params:l,route:f}){var H;if(a.id===s&&a.promise)return a.promise;const{errors:h,layouts:g,leaf:v}=f,E=r.url&&{url:s!==r.url.pathname+r.url.search,params:Object.keys(l).filter(d=>r.params[d]!==l[d])},b=[...g,v];h.forEach(d=>d==null?void 0:d().catch(()=>{})),b.forEach(d=>d==null?void 0:d[1]().catch(()=>{}));let w=null;const k=b.reduce((d,R,P)=>{var X;const O=r.branch[P],re=!!(R!=null&&R[0])&&((O==null?void 0:O.loader)!==R[1]||Ae(E,d.some(Boolean),(X=O.server)==null?void 0:X.uses));return d.push(re),d},[]);if(k.some(Boolean)){try{w=await Fe(_,k)}catch(d){return se({status:500,error:d,url:_,routeId:f.id})}if(w.type==="redirect")return w}const A=w==null?void 0:w.nodes;let S=!1;const T=b.map(async(d,R)=>{var he,Ue;if(!d)return;const P=r.branch[R],O=(he=A==null?void 0:A[R])!=null?he:null;if((!O||O.type==="skip")&&d[1]===(P==null?void 0:P.loader)&&!Ae(E,S,(Ue=P.shared)==null?void 0:Ue.uses))return P;if(S=!0,(O==null?void 0:O.type)==="error")throw O;return pe({loader:d[1],url:_,params:l,routeId:f.id,parent:async()=>{var Ne;const Ve={};for(let ge=0;ge<R;ge+=1)Object.assign(Ve,(Ne=await T[ge])==null?void 0:Ne.data);return Ve},server_data_node:de(O,P==null?void 0:P.server)})});for(const d of T)d.catch(()=>{});const j=[];for(let d=0;d<b.length;d+=1)if(b[d])try{j.push(await T[d])}catch(R){if(R instanceof Je)return{type:"redirect",location:R.location};let P=500,O;for(A!=null&&A.includes(R)?(P=(H=R.status)!=null?H:P,O=R.error):R instanceof ye?(P=R.status,O=R.body):O=Ge(R,{params:l,url:_,routeId:f.id});d--;)if(h[d]){let re,X=d;for(;!j[X];)X-=1;try{return re={node:await h[d](),loader:h[d],data:{},server:null,shared:null},await ee({url:_,params:l,branch:j.slice(0,X+1).concat(re),status:P,error:O,route:f})}catch{continue}}await te(_);return}else j.push(void 0);return await ee({url:_,params:l,branch:j,status:200,error:null,route:f,form:c?void 0:null})}async function se({status:s,error:c,url:_,routeId:l}){var b;const f={},h=await ke();let g=null;if(h.server)try{const w=await Fe(_,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;g=(b=w.nodes[0])!=null?b:null}catch{await te(_);return}const v=await pe({loader:ke,url:_,params:f,routeId:l,parent:()=>Promise.resolve({}),server_data_node:de(g)}),E={node:await $e(),loader:$e,shared:null,server:null,data:null};return await ee({url:_,params:f,branch:[v,E],status:s,error:c instanceof ye?c.body:Ge(c,{url:_,params:f,routeId:null}),route:null})}function me(s,c){if(je(s))return;const _=decodeURI(s.pathname.slice(e.length)||"/");for(const l of oe){const f=l.exec(_);if(f){const h=new URL(s.origin+ft(s.pathname,t)+s.search+s.hash);return{id:h.pathname+h.search,invalidating:c,route:l,params:ut(f),url:h}}}}function je(s){return s.origin!==location.origin||!s.pathname.startsWith(e)}async function _e({url:s,scroll:c,keepfocus:_,redirect_chain:l,details:f,type:h,delta:g,accepted:v,blocked:E}){var S,T,j,H;let b=!1;const w=me(s,!1),k={from:ie("from",{params:r.params,routeId:(T=(S=r.route)==null?void 0:S.id)!=null?T:null,url:r.url}),to:ie("to",{params:(j=w==null?void 0:w.params)!=null?j:null,routeId:(H=w==null?void 0:w.route.id)!=null?H:null,url:s}),type:h};g!==void 0&&(k.delta=g);const A={...k,cancel:()=>{b=!0}};if(u.before_navigate.forEach(d=>d(A)),b){E();return}be(I),v(),i&&Y.navigating.set(k),await Oe(w,s,l,{scroll:c,keepfocus:_,details:f},()=>{u.after_navigate.forEach(d=>d(k)),Y.navigating.set(null)})}function te(s){return location.href=s.href,new Promise(()=>{})}return{after_navigate:s=>{ve(()=>(u.after_navigate.push(s),()=>{const c=u.after_navigate.indexOf(s);u.after_navigate.splice(c,1)}))},before_navigate:s=>{ve(()=>(u.before_navigate.push(s),()=>{const c=u.before_navigate.indexOf(s);u.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(m||!i)&&(p=!1)},goto:(s,c={})=>ue(s,c,[]),invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")o.push(s);else{const{href:c}=new URL(s,location.href);o.push(_=>_.href===c)}return Se()},invalidateAll:()=>(U=!0,Se()),prefetch:async s=>{const c=new URL(s,Ce(document));await Pe(c)},prefetch_routes:async s=>{const _=(s?oe.filter(l=>s.some(f=>l.exec(f))):oe).map(l=>Promise.all([...l.layouts,l.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(_)},apply_action:async s=>{if(s.type==="error"){const c=new URL(location.href),{branch:_,route:l}=r;if(!l)return;let f=r.branch.length;for(;f--;)if(l.errors[f]){let h,g=f;for(;!_[g];)g-=1;try{h={node:await l.errors[f](),loader:l.errors[f],data:{},server:null,shared:null};const v=await ee({url:c,params:r.params,branch:_.slice(0,g+1).concat(h),status:500,error:s.error,route:l});r=v.state;const E=le();$.$set(v.props),E();return}catch{continue}}}else if(s.type==="redirect")ue(s.location,{},[]);else{const c={form:s.data};s.status!==W.status&&(c.page={...W,status:s.status});const _=le();$.$set(c),_()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var g,v;let f=!1;const h={from:ie("from",{params:r.params,routeId:(v=(g=r.route)==null?void 0:g.id)!=null?v:null,url:r.url}),to:null,type:"unload",cancel:()=>f=!0};u.before_navigate.forEach(E=>E(h)),f?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(I);try{sessionStorage[We]=JSON.stringify(ne)}catch{}}});const s=l=>{const{url:f,options:h}=qe(l);if(f&&h.prefetch){if(je(f))return;Pe(f)}};let c;const _=l=>{clearTimeout(c),c=setTimeout(()=>{var f;(f=l.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",s),addEventListener("mousemove",_),addEventListener("sveltekit:trigger_prefetch",s),addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const{a:f,url:h,options:g}=qe(l);if(!f||!h)return;const v=f instanceof SVGAElement;if(!v&&!(h.protocol==="https:"||h.protocol==="http:"))return;const E=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||E.includes("external")||g.reload||(v?f.target.baseVal:f.target))return;const[b,w]=h.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){G=!0,be(I),Y.page.set({...W,url:h}),Y.page.notify();return}_e({url:h,scroll:g.noscroll?Ee():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),addEventListener("popstate",l=>{if(l.state){if(l.state[M]===I)return;const f=l.state[M]-I;_e({url:new URL(location.href),scroll:ne[l.state[M]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=l.state[M]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[M]:++I},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&Y.navigating.set(null)})},_hydrate:async({status:s,error:c,node_ids:_,params:l,routeId:f,data:h,form:g})=>{var b;const v=new URL(location.href);let E;try{const w=_.map(async(k,A)=>{const S=h[A];return pe({loader:fe[k],url:v,params:l,routeId:f,parent:async()=>{const T={};for(let j=0;j<A;j+=1)Object.assign(T,(await w[j]).data);return T},server_data_node:de(S)})});E=await ee({url:v,params:l,branch:await Promise.all(w),status:s,error:c,form:g,route:(b=oe.find(k=>k.id===f))!=null?b:null})}catch(w){const k=w;if(k instanceof Je){await te(new URL(w.location,location.href));return}E=await se({status:k instanceof ye?k.status:500,error:k,url:v,routeId:f})}Ie(E)}}}let xt=1;async function Fe(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+Vt,t.searchParams.set("__invalid",e.map(a=>a?"y":"n").join("")),t.searchParams.set("__id",String(xt++)),await D(()=>import(t.href),[],import.meta.url);const o=window.__sveltekit_data;return delete window.__sveltekit_data,o}function Ge(n,e){var t;return(t=Ut.handleError({error:n,event:e}))!=null?t:{message:"Internal Error"}}const Ct=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ie(n,e){for(const t of Ct)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)}});return e}function le(){return()=>{}}async function Jt({env:n,hydrate:e,paths:t,target:o,trailing_slash:a}){ot(t);const u=Nt({target:o,base:t.base,trailing_slash:a});it({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{Jt as start};