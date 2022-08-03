import{M as Xe,S as Ye,i as Ze,s as de,e as a,t as s,k as O,c as m,a as T,h as b,m as H,d as e,b as ye,N as Ve,g as l,I as c,J as ge,K as el,L as ll,r as Ie,p as ne,l as Ge,q as tl,O as il,P as fl,F as sl,o as bl}from"../../chunks/index-5436dd91.js";const ol=()=>{const z=Xe("__svelte__");return{page:{subscribe:z.page.subscribe},navigating:{subscribe:z.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:z.navigating.subscribe}},session:z.session,updated:z.updated}},ul={subscribe(z){return ol().page.subscribe(z)}};function Qe(z,u,w){const R=z.slice();return R[5]=u[w][0],R[6]=u[w][1],R}function Ue(z){let u,w=z[5]+"",R,E,n=z[6]+"",h,_,y;return{c(){u=a("a"),R=s(w),E=s(". "),h=s(n),_=O(),this.h()},l(r){u=m(r,"A",{href:!0,class:!0});var k=T(u);R=b(k,w),E=b(k,". "),h=b(k,n),_=H(k),k.forEach(e),this.h()},h(){ye(u,"href",y=z[1]+"/examples/example"+z[5]),ye(u,"class","svelte-u1y30i"),Ve(u,"selected",z[0].routeId===`examples/example${z[5]}`)},m(r,k){l(r,u,k),c(u,R),c(u,E),c(u,h),c(u,_)},p(r,k){k&5&&Ve(u,"selected",r[0].routeId===`examples/example${r[5]}`)},d(r){r&&e(u)}}}function We(z){let u,w,R,E,n,h,_,y,r;function k(v,B){if(v[0].routeIdMatches[1]==="1")return wl;if(v[0].routeIdMatches[1]==="2")return Bl;if(v[0].routeIdMatches[1]==="3")return vl;if(v[0].routeIdMatches[1]==="4")return _l;if(v[0].routeIdMatches[1]==="5")return pl;if(v[0].routeIdMatches[1]==="6")return ml;if(v[0].routeIdMatches[1]==="7")return al;if(v[0].routeIdMatches[1]==="8")return rl}let o=k(z),p=o&&o(z);const P=z[4].default,M=sl(P,z,z[3],null);return{c(){u=a("p"),p&&p.c(),w=O(),M&&M.c(),R=O(),E=a("p"),n=s(`See the source code 
        `),h=a("a"),_=s("here"),this.h()},l(v){u=m(v,"P",{class:!0});var B=T(u);p&&p.l(B),B.forEach(e),w=H(v),M&&M.l(v),R=H(v),E=m(v,"P",{class:!0});var A=T(E);n=b(A,`See the source code 
        `),h=m(A,"A",{href:!0});var S=T(h);_=b(S,"here"),S.forEach(e),A.forEach(e),this.h()},h(){ye(u,"class","setup-details svelte-u1y30i"),ye(h,"href",y="https://github.com/muonw/powertable/blob/main/src/routes/examples/example"+z[0].routeIdMatches[1]+".svelte"),ye(E,"class","ref")},m(v,B){l(v,u,B),p&&p.m(u,null),l(v,w,B),M&&M.m(v,B),l(v,R,B),l(v,E,B),c(E,n),c(E,h),c(h,_),r=!0},p(v,B){o!==(o=k(v))&&(p&&p.d(1),p=o&&o(v),p&&(p.c(),p.m(u,null))),M&&M.p&&(!r||B&8)&&ge(M,P,v,v[3],r?ll(P,v[3],B,null):el(v[3]),null),(!r||B&1&&y!==(y="https://github.com/muonw/powertable/blob/main/src/routes/examples/example"+v[0].routeIdMatches[1]+".svelte"))&&ye(h,"href",y)},i(v){r||(Ie(M,v),r=!0)},o(v){ne(M,v),r=!1},d(v){v&&e(u),p&&p.d(),v&&e(w),M&&M.d(v),v&&e(R),v&&e(E)}}}function rl(z){let u,w,R,E,n,h,_,y,r,k;return{c(){u=s("This table utilizes a user-defined function to highlight search/filter matches. The "),w=a("b"),R=s("search matches"),E=s(" are depicted with a yellow highlight. "),n=a("b"),h=s("Filter matches"),_=s(" are blue, and the "),y=a("b"),r=s("overlaps"),k=s(" of search and filter matches are green.")},l(o){u=b(o,"This table utilizes a user-defined function to highlight search/filter matches. The "),w=m(o,"B",{});var p=T(w);R=b(p,"search matches"),p.forEach(e),E=b(o," are depicted with a yellow highlight. "),n=m(o,"B",{});var P=T(n);h=b(P,"Filter matches"),P.forEach(e),_=b(o," are blue, and the "),y=m(o,"B",{});var M=T(y);r=b(M,"overlaps"),M.forEach(e),k=b(o," of search and filter matches are green.")},m(o,p){l(o,u,p),l(o,w,p),c(w,R),l(o,E,p),l(o,n,p),c(n,h),l(o,_,p),l(o,y,p),c(y,r),l(o,k,p)},d(o){o&&e(u),o&&e(w),o&&e(E),o&&e(n),o&&e(_),o&&e(y),o&&e(k)}}}function al(z){let u,w,R,E,n,h,_,y,r,k,o,p,P,M,v,B,A,S,L,$,be,U,j,ee,K,d,W,F,oe,X,N,ue,Y,q,le,V,Q,g,D,te,Z,J,f,I,G,re,ie,fe;return{c(){u=s("Controls can be used to access and manipulate the data with custom functions. To explore this feature, follow these steps:"),w=a("br"),R=O(),E=a("b"),n=s("1."),h=s(" Click on the "),_=a("b"),y=s("checkbox"),r=s(" at the beginning of a row to make the content of that row editable."),k=a("br"),o=O(),p=a("b"),P=s("2."),M=s(" Edit some of the fields. Once a textarea is in focus, a button with a check mark (\u2714\uFE0F) will appear next to it. Clicking on that button will submit the changes to "),v=a("b"),B=s("all the fields in that row"),A=s("."),S=a("br"),L=O(),$=a("b"),be=s("3."),U=s(" Once you finish editing the content of the row, click on one of the check mark buttons to save the changes. It doesn't matter which check mark button."),j=a("br"),ee=O(),K=a("b"),d=s("4."),W=s(" Click on the "),F=a("b"),oe=s("gear icon"),X=s(" (\u2699\uFE0F) located on the header of the first column to explore the default options for "),N=a("b"),ue=s("adding"),Y=s(", "),q=a("b"),le=s("deleting"),V=s(", and "),Q=a("b"),g=s("selecting"),D=s(" data. To delete a row, you first need to select it."),te=a("br"),Z=O(),J=a("b"),f=s("5."),I=s(' Click on the toolbox icon (\u{1F6E0}\uFE0F) next to the search box and select "'),G=a("b"),re=s("Export current data"),ie=s('". The generated file reflects any changes you have made.'),fe=a("br")},l(i){u=b(i,"Controls can be used to access and manipulate the data with custom functions. To explore this feature, follow these steps:"),w=m(i,"BR",{}),R=H(i),E=m(i,"B",{});var C=T(E);n=b(C,"1."),C.forEach(e),h=b(i," Click on the "),_=m(i,"B",{});var me=T(_);y=b(me,"checkbox"),me.forEach(e),r=b(i," at the beginning of a row to make the content of that row editable."),k=m(i,"BR",{}),o=H(i),p=m(i,"B",{});var ae=T(p);P=b(ae,"2."),ae.forEach(e),M=b(i," Edit some of the fields. Once a textarea is in focus, a button with a check mark (\u2714\uFE0F) will appear next to it. Clicking on that button will submit the changes to "),v=m(i,"B",{});var se=T(v);B=b(se,"all the fields in that row"),se.forEach(e),A=b(i,"."),S=m(i,"BR",{}),L=H(i),$=m(i,"B",{});var ke=T($);be=b(ke,"3."),ke.forEach(e),U=b(i," Once you finish editing the content of the row, click on one of the check mark buttons to save the changes. It doesn't matter which check mark button."),j=m(i,"BR",{}),ee=H(i),K=m(i,"B",{});var ve=T(K);d=b(ve,"4."),ve.forEach(e),W=b(i," Click on the "),F=m(i,"B",{});var Be=T(F);oe=b(Be,"gear icon"),Be.forEach(e),X=b(i," (\u2699\uFE0F) located on the header of the first column to explore the default options for "),N=m(i,"B",{});var we=T(N);ue=b(we,"adding"),we.forEach(e),Y=b(i,", "),q=m(i,"B",{});var pe=T(q);le=b(pe,"deleting"),pe.forEach(e),V=b(i,", and "),Q=m(i,"B",{});var xe=T(Q);g=b(xe,"selecting"),xe.forEach(e),D=b(i," data. To delete a row, you first need to select it."),te=m(i,"BR",{}),Z=H(i),J=m(i,"B",{});var Ee=T(J);f=b(Ee,"5."),Ee.forEach(e),I=b(i,' Click on the toolbox icon (\u{1F6E0}\uFE0F) next to the search box and select "'),G=m(i,"B",{});var _e=T(G);re=b(_e,"Export current data"),_e.forEach(e),ie=b(i,'". The generated file reflects any changes you have made.'),fe=m(i,"BR",{})},m(i,C){l(i,u,C),l(i,w,C),l(i,R,C),l(i,E,C),c(E,n),l(i,h,C),l(i,_,C),c(_,y),l(i,r,C),l(i,k,C),l(i,o,C),l(i,p,C),c(p,P),l(i,M,C),l(i,v,C),c(v,B),l(i,A,C),l(i,S,C),l(i,L,C),l(i,$,C),c($,be),l(i,U,C),l(i,j,C),l(i,ee,C),l(i,K,C),c(K,d),l(i,W,C),l(i,F,C),c(F,oe),l(i,X,C),l(i,N,C),c(N,ue),l(i,Y,C),l(i,q,C),c(q,le),l(i,V,C),l(i,Q,C),c(Q,g),l(i,D,C),l(i,te,C),l(i,Z,C),l(i,J,C),c(J,f),l(i,I,C),l(i,G,C),c(G,re),l(i,ie,C),l(i,fe,C)},d(i){i&&e(u),i&&e(w),i&&e(R),i&&e(E),i&&e(h),i&&e(_),i&&e(r),i&&e(k),i&&e(o),i&&e(p),i&&e(M),i&&e(v),i&&e(A),i&&e(S),i&&e(L),i&&e($),i&&e(U),i&&e(j),i&&e(ee),i&&e(K),i&&e(W),i&&e(F),i&&e(X),i&&e(N),i&&e(Y),i&&e(q),i&&e(V),i&&e(Q),i&&e(D),i&&e(te),i&&e(Z),i&&e(J),i&&e(I),i&&e(G),i&&e(ie),i&&e(fe)}}}function ml(z){let u;return{c(){u=s("This table demonstrates loading of data from an external source (e.g. an API). Data will be processed using client side JavaScript with 500 milliseconds intentional delay to simulate fetching from a server. However, in real life scenarios, data is processed on a server (e.g. with PHP, Node, etc.). To simplify the example, some features such as search, filters, and sorting have been disabled.")},l(w){u=b(w,"This table demonstrates loading of data from an external source (e.g. an API). Data will be processed using client side JavaScript with 500 milliseconds intentional delay to simulate fetching from a server. However, in real life scenarios, data is processed on a server (e.g. with PHP, Node, etc.). To simplify the example, some features such as search, filters, and sorting have been disabled.")},m(w,R){l(w,u,R)},d(w){w&&e(u)}}}function pl(z){let u,w,R,E,n,h,_,y,r,k,o,p,P,M,v;return{c(){u=s("Customizations of styles:"),w=a("br"),R=O(),E=a("b"),n=s("1."),h=s(" A "),_=a("b"),y=s("maximum height"),r=s(" is set for the table, creating a vertical scroll bar."),k=a("br"),o=O(),p=a("b"),P=s("2."),M=s(" The height and color of the rows, and the direction of the id values have changed."),v=a("br")},l(B){u=b(B,"Customizations of styles:"),w=m(B,"BR",{}),R=H(B),E=m(B,"B",{});var A=T(E);n=b(A,"1."),A.forEach(e),h=b(B," A "),_=m(B,"B",{});var S=T(_);y=b(S,"maximum height"),S.forEach(e),r=b(B," is set for the table, creating a vertical scroll bar."),k=m(B,"BR",{}),o=H(B),p=m(B,"B",{});var L=T(p);P=b(L,"2."),L.forEach(e),M=b(B," The height and color of the rows, and the direction of the id values have changed."),v=m(B,"BR",{})},m(B,A){l(B,u,A),l(B,w,A),l(B,R,A),l(B,E,A),c(E,n),l(B,h,A),l(B,_,A),c(_,y),l(B,r,A),l(B,k,A),l(B,o,A),l(B,p,A),c(p,P),l(B,M,A),l(B,v,A)},d(B){B&&e(u),B&&e(w),B&&e(R),B&&e(E),B&&e(h),B&&e(_),B&&e(r),B&&e(k),B&&e(o),B&&e(p),B&&e(M),B&&e(v)}}}function _l(z){let u,w,R,E,n,h,_,y,r,k;return{c(){u=s("Customizations with named slots:"),w=a("br"),R=O(),E=a("b"),n=s("1."),h=s(" A custom text is used for "),_=a("b"),y=s("noResults"),r=s(" slot."),k=a("br")},l(o){u=b(o,"Customizations with named slots:"),w=m(o,"BR",{}),R=H(o),E=m(o,"B",{});var p=T(E);n=b(p,"1."),p.forEach(e),h=b(o," A custom text is used for "),_=m(o,"B",{});var P=T(_);y=b(P,"noResults"),P.forEach(e),r=b(o," slot."),k=m(o,"BR",{})},m(o,p){l(o,u,p),l(o,w,p),l(o,R,p),l(o,E,p),c(E,n),l(o,h,p),l(o,_,p),c(_,y),l(o,r,p),l(o,k,p)},d(o){o&&e(u),o&&e(w),o&&e(R),o&&e(E),o&&e(h),o&&e(_),o&&e(r),o&&e(k)}}}function vl(z){let u,w,R,E,n,h,_,y,r,k,o,p,P,M,v,B,A,S,L,$,be,U,j,ee,K,d,W,F,oe,X,N,ue,Y,q,le,V,Q,g,D,te,Z,J,f,I,G,re,ie,fe,i,C,me,ae,se,ke,ve,Be,we,pe,xe,Ee,_e,ze,ce,Re,Te,he,Ce;return{c(){u=s("There are two tables on this page separated by a horizontal line. The first table has the following customizations of ptOptions:"),w=a("br"),R=O(),E=a("b"),n=s("1."),h=s(" A "),_=a("b"),y=s("unique prefix"),r=s(" has been assigned to the table."),k=a("br"),o=O(),p=a("b"),P=s("2."),M=O(),v=a("b"),B=s("Number of rows per page"),A=s(" can only be 3, 5, or 7."),S=a("br"),L=O(),$=a("b"),be=s("3."),U=O(),j=a("b"),ee=s("By default 3 rows"),K=s(" are displayed per page."),d=a("br"),W=O(),F=a("b"),oe=s("4."),X=O(),N=a("b"),ue=s("Header filter"),Y=s(" text boxes have been "),q=a("b"),le=s("removed"),V=s("."),Q=a("br"),g=O(),D=a("b"),te=s("5."),Z=O(),J=a("b"),f=s("Footer titles"),I=s(" have been "),G=a("b"),re=s("removed"),ie=s("."),fe=a("br"),i=O(),C=a("b"),me=s("6."),ae=O(),se=a("b"),ke=s("By default page #5"),ve=s(" is displayed."),Be=a("br"),we=O(),pe=a("b"),xe=s("7."),Ee=s(" There are three "),_e=a("b"),ze=s("segments above the table"),ce=s(": dropdown, pagination, and stats."),Re=a("br"),Te=O(),he=a("br"),Ce=s(`
            The second table does not have any customizations other than a unique prefix.`)},l(t){u=b(t,"There are two tables on this page separated by a horizontal line. The first table has the following customizations of ptOptions:"),w=m(t,"BR",{}),R=H(t),E=m(t,"B",{});var x=T(E);n=b(x,"1."),x.forEach(e),h=b(t," A "),_=m(t,"B",{});var Me=T(_);y=b(Me,"unique prefix"),Me.forEach(e),r=b(t," has been assigned to the table."),k=m(t,"BR",{}),o=H(t),p=m(t,"B",{});var Ae=T(p);P=b(Ae,"2."),Ae.forEach(e),M=H(t),v=m(t,"B",{});var Oe=T(v);B=b(Oe,"Number of rows per page"),Oe.forEach(e),A=b(t," can only be 3, 5, or 7."),S=m(t,"BR",{}),L=H(t),$=m(t,"B",{});var He=T($);be=b(He,"3."),He.forEach(e),U=H(t),j=m(t,"B",{});var Pe=T(j);ee=b(Pe,"By default 3 rows"),Pe.forEach(e),K=b(t," are displayed per page."),d=m(t,"BR",{}),W=H(t),F=m(t,"B",{});var Se=T(F);oe=b(Se,"4."),Se.forEach(e),X=H(t),N=m(t,"B",{});var $e=T(N);ue=b($e,"Header filter"),$e.forEach(e),Y=b(t," text boxes have been "),q=m(t,"B",{});var Fe=T(q);le=b(Fe,"removed"),Fe.forEach(e),V=b(t,"."),Q=m(t,"BR",{}),g=H(t),D=m(t,"B",{});var Ne=T(D);te=b(Ne,"5."),Ne.forEach(e),Z=H(t),J=m(t,"B",{});var je=T(J);f=b(je,"Footer titles"),je.forEach(e),I=b(t," have been "),G=m(t,"B",{});var qe=T(G);re=b(qe,"removed"),qe.forEach(e),ie=b(t,"."),fe=m(t,"BR",{}),i=H(t),C=m(t,"B",{});var De=T(C);me=b(De,"6."),De.forEach(e),ae=H(t),se=m(t,"B",{});var Je=T(se);ke=b(Je,"By default page #5"),Je.forEach(e),ve=b(t," is displayed."),Be=m(t,"BR",{}),we=H(t),pe=m(t,"B",{});var Le=T(pe);xe=b(Le,"7."),Le.forEach(e),Ee=b(t," There are three "),_e=m(t,"B",{});var Ke=T(_e);ze=b(Ke,"segments above the table"),Ke.forEach(e),ce=b(t,": dropdown, pagination, and stats."),Re=m(t,"BR",{}),Te=H(t),he=m(t,"BR",{}),Ce=b(t,`
            The second table does not have any customizations other than a unique prefix.`)},m(t,x){l(t,u,x),l(t,w,x),l(t,R,x),l(t,E,x),c(E,n),l(t,h,x),l(t,_,x),c(_,y),l(t,r,x),l(t,k,x),l(t,o,x),l(t,p,x),c(p,P),l(t,M,x),l(t,v,x),c(v,B),l(t,A,x),l(t,S,x),l(t,L,x),l(t,$,x),c($,be),l(t,U,x),l(t,j,x),c(j,ee),l(t,K,x),l(t,d,x),l(t,W,x),l(t,F,x),c(F,oe),l(t,X,x),l(t,N,x),c(N,ue),l(t,Y,x),l(t,q,x),c(q,le),l(t,V,x),l(t,Q,x),l(t,g,x),l(t,D,x),c(D,te),l(t,Z,x),l(t,J,x),c(J,f),l(t,I,x),l(t,G,x),c(G,re),l(t,ie,x),l(t,fe,x),l(t,i,x),l(t,C,x),c(C,me),l(t,ae,x),l(t,se,x),c(se,ke),l(t,ve,x),l(t,Be,x),l(t,we,x),l(t,pe,x),c(pe,xe),l(t,Ee,x),l(t,_e,x),c(_e,ze),l(t,ce,x),l(t,Re,x),l(t,Te,x),l(t,he,x),l(t,Ce,x)},d(t){t&&e(u),t&&e(w),t&&e(R),t&&e(E),t&&e(h),t&&e(_),t&&e(r),t&&e(k),t&&e(o),t&&e(p),t&&e(M),t&&e(v),t&&e(A),t&&e(S),t&&e(L),t&&e($),t&&e(U),t&&e(j),t&&e(K),t&&e(d),t&&e(W),t&&e(F),t&&e(X),t&&e(N),t&&e(Y),t&&e(q),t&&e(V),t&&e(Q),t&&e(g),t&&e(D),t&&e(Z),t&&e(J),t&&e(I),t&&e(G),t&&e(ie),t&&e(fe),t&&e(i),t&&e(C),t&&e(ae),t&&e(se),t&&e(ve),t&&e(Be),t&&e(we),t&&e(pe),t&&e(Ee),t&&e(_e),t&&e(ce),t&&e(Re),t&&e(Te),t&&e(he),t&&e(Ce)}}}function Bl(z){let u,w,R,E,n,h,_,y,r,k,o,p,P,M,v,B,A,S,L,$,be,U,j,ee,K,d,W,F,oe,X,N,ue,Y,q,le,V,Q,g,D,te,Z,J;return{c(){u=s("Customizations of ptInstructs:"),w=a("br"),R=O(),E=a("b"),n=s("1."),h=O(),_=a("b"),y=s("Column titles"),r=s(" have been customized."),k=a("br"),o=O(),p=a("b"),P=s("2."),M=s(" First name is "),v=a("b"),B=s("not sortable"),A=s("."),S=a("br"),L=O(),$=a("b"),be=s("3."),U=s(" Company has a "),j=a("b"),ee=s("default filter phrase"),K=s("."),d=a("br"),W=O(),F=a("b"),oe=s("4."),X=s(" Department is "),N=a("b"),ue=s("not filterable"),Y=s("."),q=a("br"),le=O(),V=a("b"),Q=s("5."),g=s(" A custom function has adds "),D=a("b"),te=s("emojis and HTML tags"),Z=s(" to some job titles."),J=a("br")},l(f){u=b(f,"Customizations of ptInstructs:"),w=m(f,"BR",{}),R=H(f),E=m(f,"B",{});var I=T(E);n=b(I,"1."),I.forEach(e),h=H(f),_=m(f,"B",{});var G=T(_);y=b(G,"Column titles"),G.forEach(e),r=b(f," have been customized."),k=m(f,"BR",{}),o=H(f),p=m(f,"B",{});var re=T(p);P=b(re,"2."),re.forEach(e),M=b(f," First name is "),v=m(f,"B",{});var ie=T(v);B=b(ie,"not sortable"),ie.forEach(e),A=b(f,"."),S=m(f,"BR",{}),L=H(f),$=m(f,"B",{});var fe=T($);be=b(fe,"3."),fe.forEach(e),U=b(f," Company has a "),j=m(f,"B",{});var i=T(j);ee=b(i,"default filter phrase"),i.forEach(e),K=b(f,"."),d=m(f,"BR",{}),W=H(f),F=m(f,"B",{});var C=T(F);oe=b(C,"4."),C.forEach(e),X=b(f," Department is "),N=m(f,"B",{});var me=T(N);ue=b(me,"not filterable"),me.forEach(e),Y=b(f,"."),q=m(f,"BR",{}),le=H(f),V=m(f,"B",{});var ae=T(V);Q=b(ae,"5."),ae.forEach(e),g=b(f," A custom function has adds "),D=m(f,"B",{});var se=T(D);te=b(se,"emojis and HTML tags"),se.forEach(e),Z=b(f," to some job titles."),J=m(f,"BR",{})},m(f,I){l(f,u,I),l(f,w,I),l(f,R,I),l(f,E,I),c(E,n),l(f,h,I),l(f,_,I),c(_,y),l(f,r,I),l(f,k,I),l(f,o,I),l(f,p,I),c(p,P),l(f,M,I),l(f,v,I),c(v,B),l(f,A,I),l(f,S,I),l(f,L,I),l(f,$,I),c($,be),l(f,U,I),l(f,j,I),c(j,ee),l(f,K,I),l(f,d,I),l(f,W,I),l(f,F,I),c(F,oe),l(f,X,I),l(f,N,I),c(N,ue),l(f,Y,I),l(f,q,I),l(f,le,I),l(f,V,I),c(V,Q),l(f,g,I),l(f,D,I),c(D,te),l(f,Z,I),l(f,J,I)},d(f){f&&e(u),f&&e(w),f&&e(R),f&&e(E),f&&e(h),f&&e(_),f&&e(r),f&&e(k),f&&e(o),f&&e(p),f&&e(M),f&&e(v),f&&e(A),f&&e(S),f&&e(L),f&&e($),f&&e(U),f&&e(j),f&&e(K),f&&e(d),f&&e(W),f&&e(F),f&&e(X),f&&e(N),f&&e(Y),f&&e(q),f&&e(le),f&&e(V),f&&e(g),f&&e(D),f&&e(Z),f&&e(J)}}}function wl(z){let u;return{c(){u=s("This is a basic setup with no customizations.")},l(w){u=b(w,"This is a basic setup with no customizations.")},m(w,R){l(w,u,R)},d(w){w&&e(u)}}}function El(z){let u,w,R=z[0].routeIdMatches=new RegExp("^examples/example([0-9])+$","g").exec(z[0].routeId),E,n,h=Object.entries(z[2]),_=[];for(let r=0;r<h.length;r+=1)_[r]=Ue(Qe(z,h,r));let y=R&&We(z);return{c(){u=a("nav");for(let r=0;r<_.length;r+=1)_[r].c();w=O(),y&&y.c(),E=Ge(),this.h()},l(r){u=m(r,"NAV",{class:!0});var k=T(u);for(let o=0;o<_.length;o+=1)_[o].l(k);k.forEach(e),w=H(r),y&&y.l(r),E=Ge(),this.h()},h(){ye(u,"class","svelte-u1y30i")},m(r,k){l(r,u,k);for(let o=0;o<_.length;o+=1)_[o].m(u,null);l(r,w,k),y&&y.m(r,k),l(r,E,k),n=!0},p(r,[k]){if(k&7){h=Object.entries(r[2]);let o;for(o=0;o<h.length;o+=1){const p=Qe(r,h,o);_[o]?_[o].p(p,k):(_[o]=Ue(p),_[o].c(),_[o].m(u,null))}for(;o<_.length;o+=1)_[o].d(1);_.length=h.length}k&1&&(R=r[0].routeIdMatches=new RegExp("^examples/example([0-9])+$","g").exec(r[0].routeId)),R?y?(y.p(r,k),k&1&&Ie(y,1)):(y=We(r),y.c(),Ie(y,1),y.m(E.parentNode,E)):y&&(bl(),ne(y,1,1,()=>{y=null}),tl())},i(r){n||(Ie(y),n=!0)},o(r){ne(y),n=!1},d(r){r&&e(u),il(_,r),r&&e(w),y&&y.d(r),r&&e(E)}}}function yl(z,u,w){let R;fl(z,ul,y=>w(0,R=y));let{$$slots:E={},$$scope:n}=u,h="/powertable",_={1:"Basic",2:"Custom Instructs",3:"Custom Options",4:"Custom Slots",5:"Styling",6:"Remote Data",7:"Editing & Controls",8:"Highlighting"};return z.$$set=y=>{"$$scope"in y&&w(3,n=y.$$scope)},[R,h,_,n,E]}class xl extends Ye{constructor(u){super(),Ze(this,u,yl,El,de,{})}}export{xl as default};