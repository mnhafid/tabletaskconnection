import{S as El,i as Bl,s as wl,k as o,a as H,e as ml,l as b,m as _,h as e,c as P,n as g,b as l,g as Ue,d as Ge,f as yl,L as kl,K as hl,q as t,r as i,M as pl,D as v,C as nl,F as xl,G as dl,H as Rl,v as Cl}from"../chunks/index.5349f71a.js";import{p as Tl}from"../chunks/stores.1afab13b.js";function vl(U,y,x){const d=U.slice();return d[4]=y[x][0],d[5]=y[x][1],d}function _l(U){let y,x=U[4]+"",d,E,D=U[5]+"",O,w;return{c(){y=o("a"),d=t(x),E=t(". "),O=t(D),w=H(),this.h()},l(n){y=b(n,"A",{href:!0,class:!0});var c=_(y);d=i(c,x),E=i(c,". "),O=i(c,D),w=P(c),c.forEach(e),this.h()},h(){g(y,"href","/powertable/examples/example"+U[4]),g(y,"class","svelte-1kc9njk"),pl(y,"selected",U[0].route.id===`/examples/example${U[4]}`)},m(n,c){l(n,y,c),v(y,d),v(y,E),v(y,O),v(y,w)},p(n,c){c&3&&pl(y,"selected",n[0].route.id===`/examples/example${n[4]}`)},d(n){n&&e(y)}}}function cl(U){let y,x,d,E,D,O,w,n,c;function T(k,m){if(k[0].data.routeIdMatches[1]==="1")return Nl;if(k[0].data.routeIdMatches[1]==="2")return Ml;if(k[0].data.routeIdMatches[1]==="3")return Sl;if(k[0].data.routeIdMatches[1]==="4")return Al;if(k[0].data.routeIdMatches[1]==="5")return Fl;if(k[0].data.routeIdMatches[1]==="6")return Dl;if(k[0].data.routeIdMatches[1]==="7")return Il;if(k[0].data.routeIdMatches[1]==="8")return jl;if(k[0].data.routeIdMatches[1]==="9")return zl;if(k[0].data.routeIdMatches[1]==="10")return Ol}let B=T(U),h=B&&B(U);const S=U[3].default,A=nl(S,U,U[2],null);return{c(){y=o("p"),h&&h.c(),x=H(),A&&A.c(),d=H(),E=o("p"),D=t(`See the source code 
        `),O=o("a"),w=t("here"),this.h()},l(k){y=b(k,"P",{class:!0});var m=_(y);h&&h.l(m),m.forEach(e),x=P(k),A&&A.l(k),d=P(k),E=b(k,"P",{class:!0});var z=_(E);D=i(z,`See the source code 
        `),O=b(z,"A",{href:!0});var $=_(O);w=i($,"here"),$.forEach(e),z.forEach(e),this.h()},h(){g(y,"class","setup-details svelte-1kc9njk"),g(O,"href",n="https://github.com/muonw/powertable/blob/main/src/routes/examples/example"+U[0].data.routeIdMatches[1]+"/+page.svelte"),g(E,"class","ref")},m(k,m){l(k,y,m),h&&h.m(y,null),l(k,x,m),A&&A.m(k,m),l(k,d,m),l(k,E,m),v(E,D),v(E,O),v(O,w),c=!0},p(k,m){B!==(B=T(k))&&(h&&h.d(1),h=B&&B(k),h&&(h.c(),h.m(y,null))),A&&A.p&&(!c||m&4)&&xl(A,S,k,k[2],c?Rl(S,k[2],m,null):dl(k[2]),null),(!c||m&1&&n!==(n="https://github.com/muonw/powertable/blob/main/src/routes/examples/example"+k[0].data.routeIdMatches[1]+"/+page.svelte"))&&g(O,"href",n)},i(k){c||(Ue(A,k),c=!0)},o(k){Ge(A,k),c=!1},d(k){k&&e(y),h&&h.d(),k&&e(x),A&&A.d(k),k&&e(d),k&&e(E)}}}function Ol(U){let y,x,d,E,D,O,w,n,c,T,B,h,S,A,k,m,z,$,M,q,me,W,J,ue,G,re,Y,N,ce,ee,L,te,K,V,p,F,Q,ie,X,fe,le,Z,se,oe,ae,pe,ve,Be,a,j,he,be,Ee,ne,_e,ye;return{c(){y=t("This table utilizes user-defined functions to alter the search/filter process."),x=o("br"),d=t(`
            ℹ️ Search and filtering process can be first delegated to user-defined functions. These functions must return the processed data along with a flag specifying whether the process is finalized. If not finalized, the default search/filter will be performed on the returned data.`),E=o("br"),D=t(`
            ℹ️ If filtering is finalized by a user-defined function, a distinctive styling (e.g. different text color) will be applied to the filter phrase.`),O=o("br"),w=t(`
            The customizations of this table are as follows:`),n=o("br"),c=H(),T=o("b"),B=t("1."),h=H(),S=o("b"),A=t("Search"),k=t(" can only be done on rows that have an "),m=o("b"),z=t("even score number"),$=t(". That is because a user-defined function removes all rows that have odd scores (e.g. "),M=o("code"),q=t("1"),me=t(","),W=o("code"),J=t("3"),ue=t(","),G=o("code"),re=t("5"),Y=t(","),N=o("code"),ce=t("7"),ee=t(") and then returns the remaining data along with a flag that allows the default search function to perform the actual search."),L=o("br"),te=H(),K=o("b"),V=t("2."),p=t(" The "),F=o("b"),Q=t("Score"),ie=t(" column can be filtered by a "),X=o("b"),fe=t("number range"),le=t(" (two integers separated by a hyphen). When the user-defined function detects a valid range, it filters out all non-matching rows and then returns the filtered data along with a flag that marks the filtering as finalized. If the process is not finalized, the default filter function will look for score numbers that have the exact characters as our range (including the hyphen) and will always fail."),Z=o("br"),se=H(),oe=o("b"),ae=t("3."),pe=t(" The "),ve=o("b"),Be=t("Birthday"),a=t(" column can be filtered by a "),j=o("b"),he=t("date range"),be=t(". The methodology is similar to that used for the "),Ee=o("b"),ne=t("Score"),_e=t(" column."),ye=o("br"),this.h()},l(r){y=i(r,"This table utilizes user-defined functions to alter the search/filter process."),x=b(r,"BR",{}),d=i(r,`
            ℹ️ Search and filtering process can be first delegated to user-defined functions. These functions must return the processed data along with a flag specifying whether the process is finalized. If not finalized, the default search/filter will be performed on the returned data.`),E=b(r,"BR",{}),D=i(r,`
            ℹ️ If filtering is finalized by a user-defined function, a distinctive styling (e.g. different text color) will be applied to the filter phrase.`),O=b(r,"BR",{}),w=i(r,`
            The customizations of this table are as follows:`),n=b(r,"BR",{}),c=P(r),T=b(r,"B",{});var R=_(T);B=i(R,"1."),R.forEach(e),h=P(r),S=b(r,"B",{});var ke=_(S);A=i(ke,"Search"),ke.forEach(e),k=i(r," can only be done on rows that have an "),m=b(r,"B",{});var xe=_(m);z=i(xe,"even score number"),xe.forEach(e),$=i(r,". That is because a user-defined function removes all rows that have odd scores (e.g. "),M=b(r,"CODE",{class:!0});var we=_(M);q=i(we,"1"),we.forEach(e),me=i(r,","),W=b(r,"CODE",{class:!0});var u=_(W);J=i(u,"3"),u.forEach(e),ue=i(r,","),G=b(r,"CODE",{class:!0});var f=_(G);re=i(f,"5"),f.forEach(e),Y=i(r,","),N=b(r,"CODE",{class:!0});var I=_(N);ce=i(I,"7"),I.forEach(e),ee=i(r,") and then returns the remaining data along with a flag that allows the default search function to perform the actual search."),L=b(r,"BR",{}),te=P(r),K=b(r,"B",{});var Re=_(K);V=i(Re,"2."),Re.forEach(e),p=i(r," The "),F=b(r,"B",{});var Ce=_(F);Q=i(Ce,"Score"),Ce.forEach(e),ie=i(r," column can be filtered by a "),X=b(r,"B",{});var Te=_(X);fe=i(Te,"number range"),Te.forEach(e),le=i(r," (two integers separated by a hyphen). When the user-defined function detects a valid range, it filters out all non-matching rows and then returns the filtered data along with a flag that marks the filtering as finalized. If the process is not finalized, the default filter function will look for score numbers that have the exact characters as our range (including the hyphen) and will always fail."),Z=b(r,"BR",{}),se=P(r),oe=b(r,"B",{});var Oe=_(oe);ae=i(Oe,"3."),Oe.forEach(e),pe=i(r," The "),ve=b(r,"B",{});var ze=_(ve);Be=i(ze,"Birthday"),ze.forEach(e),a=i(r," column can be filtered by a "),j=b(r,"B",{});var de=_(j);he=i(de,"date range"),de.forEach(e),be=i(r,". The methodology is similar to that used for the "),Ee=b(r,"B",{});var je=_(Ee);ne=i(je,"Score"),je.forEach(e),_e=i(r," column."),ye=b(r,"BR",{}),this.h()},h(){g(M,"class","svelte-1kc9njk"),g(W,"class","svelte-1kc9njk"),g(G,"class","svelte-1kc9njk"),g(N,"class","svelte-1kc9njk")},m(r,R){l(r,y,R),l(r,x,R),l(r,d,R),l(r,E,R),l(r,D,R),l(r,O,R),l(r,w,R),l(r,n,R),l(r,c,R),l(r,T,R),v(T,B),l(r,h,R),l(r,S,R),v(S,A),l(r,k,R),l(r,m,R),v(m,z),l(r,$,R),l(r,M,R),v(M,q),l(r,me,R),l(r,W,R),v(W,J),l(r,ue,R),l(r,G,R),v(G,re),l(r,Y,R),l(r,N,R),v(N,ce),l(r,ee,R),l(r,L,R),l(r,te,R),l(r,K,R),v(K,V),l(r,p,R),l(r,F,R),v(F,Q),l(r,ie,R),l(r,X,R),v(X,fe),l(r,le,R),l(r,Z,R),l(r,se,R),l(r,oe,R),v(oe,ae),l(r,pe,R),l(r,ve,R),v(ve,Be),l(r,a,R),l(r,j,R),v(j,he),l(r,be,R),l(r,Ee,R),v(Ee,ne),l(r,_e,R),l(r,ye,R)},d(r){r&&e(y),r&&e(x),r&&e(d),r&&e(E),r&&e(D),r&&e(O),r&&e(w),r&&e(n),r&&e(c),r&&e(T),r&&e(h),r&&e(S),r&&e(k),r&&e(m),r&&e($),r&&e(M),r&&e(me),r&&e(W),r&&e(ue),r&&e(G),r&&e(Y),r&&e(N),r&&e(ee),r&&e(L),r&&e(te),r&&e(K),r&&e(p),r&&e(F),r&&e(ie),r&&e(X),r&&e(le),r&&e(Z),r&&e(se),r&&e(oe),r&&e(pe),r&&e(ve),r&&e(a),r&&e(j),r&&e(be),r&&e(Ee),r&&e(_e),r&&e(ye)}}}function zl(U){let y,x,d,E,D,O,w,n,c,T,B,h,S,A,k,m,z,$,M,q,me,W,J,ue,G,re,Y,N,ce,ee,L,te,K,V,p,F,Q,ie,X,fe,le,Z,se,oe,ae,pe,ve,Be,a,j,he,be,Ee,ne,_e,ye,r,R,ke,xe,we;return{c(){y=t("This table utilizes user-defined functions to sort numbers, dates, and colors. Additionally, multi-column sorting has been enabled to fine-tune the sorting."),x=o("br"),d=t(`
            ℹ️ By default, columns can only be sorted alphabetically. This may not be desired for certain data types. For example, the numbers `),E=o("code"),D=t("1,100,11"),O=t(" are sorted alphabetically, while "),w=o("code"),n=t("1,11,100"),c=t(" is often the desired order. User-defined functions can override the default sorting behavior."),T=o("br"),B=H(),h=o("b"),S=t("1."),A=t(" Click on the header of the "),k=o("b"),m=t("Score"),z=t(" column twice, so that the highest score would be on top."),$=o("br"),M=H(),q=o("b"),me=t("2."),W=t(" Click on the header of the "),J=o("b"),ue=t("Full Name"),G=t(" column to sort the names of the people who have the same score. Note that since multi-column sorting is enabled and scores are already sorted, sorting any additional column cannot cause any change in the score column. This means that only rows that have identical scores are free to be rearranged."),re=o("br"),Y=H(),N=o("b"),ce=t("3."),ee=t(" Cancel the sorting of the "),L=o("b"),te=t("Full Name"),K=t(" column (click on its header until it's not sorted anymore) and try sorting the "),V=o("b"),p=t("Birthday"),F=t(" or "),Q=o("b"),ie=t("Favorite Color"),X=t(" columns instead. A user-defined function sets the expected order of the colors, which is the order rainbow colors: "),fe=o("code"),le=t("Red"),Z=t(", "),se=o("code"),oe=t("Orange"),ae=t(", "),pe=o("code"),ve=t("Yellow"),Be=t(", "),a=o("code"),j=t("Green"),he=t(", "),be=o("code"),Ee=t("Cyan"),ne=t(", "),_e=o("code"),ye=t("Blue"),r=t(", "),R=o("code"),ke=t("Violet"),xe=t("."),we=o("br"),this.h()},l(u){y=i(u,"This table utilizes user-defined functions to sort numbers, dates, and colors. Additionally, multi-column sorting has been enabled to fine-tune the sorting."),x=b(u,"BR",{}),d=i(u,`
            ℹ️ By default, columns can only be sorted alphabetically. This may not be desired for certain data types. For example, the numbers `),E=b(u,"CODE",{class:!0});var f=_(E);D=i(f,"1,100,11"),f.forEach(e),O=i(u," are sorted alphabetically, while "),w=b(u,"CODE",{class:!0});var I=_(w);n=i(I,"1,11,100"),I.forEach(e),c=i(u," is often the desired order. User-defined functions can override the default sorting behavior."),T=b(u,"BR",{}),B=P(u),h=b(u,"B",{});var Re=_(h);S=i(Re,"1."),Re.forEach(e),A=i(u," Click on the header of the "),k=b(u,"B",{});var Ce=_(k);m=i(Ce,"Score"),Ce.forEach(e),z=i(u," column twice, so that the highest score would be on top."),$=b(u,"BR",{}),M=P(u),q=b(u,"B",{});var Te=_(q);me=i(Te,"2."),Te.forEach(e),W=i(u," Click on the header of the "),J=b(u,"B",{});var Oe=_(J);ue=i(Oe,"Full Name"),Oe.forEach(e),G=i(u," column to sort the names of the people who have the same score. Note that since multi-column sorting is enabled and scores are already sorted, sorting any additional column cannot cause any change in the score column. This means that only rows that have identical scores are free to be rearranged."),re=b(u,"BR",{}),Y=P(u),N=b(u,"B",{});var ze=_(N);ce=i(ze,"3."),ze.forEach(e),ee=i(u," Cancel the sorting of the "),L=b(u,"B",{});var de=_(L);te=i(de,"Full Name"),de.forEach(e),K=i(u," column (click on its header until it's not sorted anymore) and try sorting the "),V=b(u,"B",{});var je=_(V);p=i(je,"Birthday"),je.forEach(e),F=i(u," or "),Q=b(u,"B",{});var Fe=_(Q);ie=i(Fe,"Favorite Color"),Fe.forEach(e),X=i(u," columns instead. A user-defined function sets the expected order of the colors, which is the order rainbow colors: "),fe=b(u,"CODE",{class:!0});var Ie=_(fe);le=i(Ie,"Red"),Ie.forEach(e),Z=i(u,", "),se=b(u,"CODE",{class:!0});var Ne=_(se);oe=i(Ne,"Orange"),Ne.forEach(e),ae=i(u,", "),pe=b(u,"CODE",{class:!0});var Ae=_(pe);ve=i(Ae,"Yellow"),Ae.forEach(e),Be=i(u,", "),a=b(u,"CODE",{class:!0});var Se=_(a);j=i(Se,"Green"),Se.forEach(e),he=i(u,", "),be=b(u,"CODE",{class:!0});var Me=_(be);Ee=i(Me,"Cyan"),Me.forEach(e),ne=i(u,", "),_e=b(u,"CODE",{class:!0});var De=_(_e);ye=i(De,"Blue"),De.forEach(e),r=i(u,", "),R=b(u,"CODE",{class:!0});var He=_(R);ke=i(He,"Violet"),He.forEach(e),xe=i(u,"."),we=b(u,"BR",{}),this.h()},h(){g(E,"class","svelte-1kc9njk"),g(w,"class","svelte-1kc9njk"),g(fe,"class","svelte-1kc9njk"),g(se,"class","svelte-1kc9njk"),g(pe,"class","svelte-1kc9njk"),g(a,"class","svelte-1kc9njk"),g(be,"class","svelte-1kc9njk"),g(_e,"class","svelte-1kc9njk"),g(R,"class","svelte-1kc9njk")},m(u,f){l(u,y,f),l(u,x,f),l(u,d,f),l(u,E,f),v(E,D),l(u,O,f),l(u,w,f),v(w,n),l(u,c,f),l(u,T,f),l(u,B,f),l(u,h,f),v(h,S),l(u,A,f),l(u,k,f),v(k,m),l(u,z,f),l(u,$,f),l(u,M,f),l(u,q,f),v(q,me),l(u,W,f),l(u,J,f),v(J,ue),l(u,G,f),l(u,re,f),l(u,Y,f),l(u,N,f),v(N,ce),l(u,ee,f),l(u,L,f),v(L,te),l(u,K,f),l(u,V,f),v(V,p),l(u,F,f),l(u,Q,f),v(Q,ie),l(u,X,f),l(u,fe,f),v(fe,le),l(u,Z,f),l(u,se,f),v(se,oe),l(u,ae,f),l(u,pe,f),v(pe,ve),l(u,Be,f),l(u,a,f),v(a,j),l(u,he,f),l(u,be,f),v(be,Ee),l(u,ne,f),l(u,_e,f),v(_e,ye),l(u,r,f),l(u,R,f),v(R,ke),l(u,xe,f),l(u,we,f)},d(u){u&&e(y),u&&e(x),u&&e(d),u&&e(E),u&&e(O),u&&e(w),u&&e(c),u&&e(T),u&&e(B),u&&e(h),u&&e(A),u&&e(k),u&&e(z),u&&e($),u&&e(M),u&&e(q),u&&e(W),u&&e(J),u&&e(G),u&&e(re),u&&e(Y),u&&e(N),u&&e(ee),u&&e(L),u&&e(K),u&&e(V),u&&e(F),u&&e(Q),u&&e(X),u&&e(fe),u&&e(Z),u&&e(se),u&&e(ae),u&&e(pe),u&&e(Be),u&&e(a),u&&e(he),u&&e(be),u&&e(ne),u&&e(_e),u&&e(r),u&&e(R),u&&e(xe),u&&e(we)}}}function jl(U){let y,x,d,E,D,O,w,n,c,T,B,h,S,A,k,m,z,$,M,q,me,W,J,ue,G,re,Y,N,ce,ee,L,te,K,V,p,F,Q,ie,X,fe,le,Z,se,oe,ae,pe,ve,Be,a,j,he,be,Ee,ne,_e,ye,r,R,ke,xe,we,u;return{c(){y=t("This table utilizes a user-defined function to highlight search/filter matches. Highlighting is an example of custom parsing — a feature that allows modifying the content of a page. Here, the "),x=o("b"),d=t("search matches"),E=t(" are depicted with a yellow highlight. "),D=o("b"),O=t("Filter matches"),w=t(" are blue, and the "),n=o("b"),c=t("overlaps"),T=t(" of search and filter matches are green."),B=o("br"),h=t(`
            ℹ️ Unlike `),S=o("b"),A=t("custom parsing"),k=t(" that relies on "),m=o("b"),z=t("user-defined"),$=t(" functions, "),M=o("b"),q=t("filtering and searching"),me=t(" are "),W=o("b"),J=t("built-in"),ue=t(" features."),G=o("br"),re=t(`
            ℹ️ While both filter and search are designed to `),Y=o("b"),N=t("filter"),ce=t(" the data, their scopes are different. Filter applies to a single column, while search applies to the entire dataset."),ee=o("br"),L=t(`
            ℹ️ By default, white-space characters and the order of the words in a search/filter phrase are ignored. For example the phrase `),te=o("code"),K=t("1 2"),V=t(" can match "),p=o("code"),F=t("12"),Q=t(", "),ie=o("code"),X=t("21"),fe=t(", "),le=o("code"),Z=t("102"),se=t(", "),oe=o("code"),ae=t("1 2"),pe=t(", etc."),ve=o("br"),Be=t(`
            ℹ️ To look for an exact phrase match, or a complex pattern, use RegEx. For example `),a=o("code"),j=t("/1 2/"),he=t(" only matches "),be=o("code"),Ee=t("1 2"),ne=t("."),_e=o("br"),ye=t(`
            ℹ️ Once a RegEx expression is detected, the default RegEx flags and a distinctive styling (e.g. different text color) will be added to the filter phrase. This styling helps to visually confirm if RegEx is being used.`),r=o("br"),R=t(`
            ℹ️ To search for a word or phrase that is a valid RegEx pattern (e.g. `),ke=o("code"),xe=t("/(^.^)*/"),we=t(") but should not be interpreted as RegEx, add a space character before or after it."),u=o("br"),this.h()},l(f){y=i(f,"This table utilizes a user-defined function to highlight search/filter matches. Highlighting is an example of custom parsing — a feature that allows modifying the content of a page. Here, the "),x=b(f,"B",{});var I=_(x);d=i(I,"search matches"),I.forEach(e),E=i(f," are depicted with a yellow highlight. "),D=b(f,"B",{});var Re=_(D);O=i(Re,"Filter matches"),Re.forEach(e),w=i(f," are blue, and the "),n=b(f,"B",{});var Ce=_(n);c=i(Ce,"overlaps"),Ce.forEach(e),T=i(f," of search and filter matches are green."),B=b(f,"BR",{}),h=i(f,`
            ℹ️ Unlike `),S=b(f,"B",{});var Te=_(S);A=i(Te,"custom parsing"),Te.forEach(e),k=i(f," that relies on "),m=b(f,"B",{});var Oe=_(m);z=i(Oe,"user-defined"),Oe.forEach(e),$=i(f," functions, "),M=b(f,"B",{});var ze=_(M);q=i(ze,"filtering and searching"),ze.forEach(e),me=i(f," are "),W=b(f,"B",{});var de=_(W);J=i(de,"built-in"),de.forEach(e),ue=i(f," features."),G=b(f,"BR",{}),re=i(f,`
            ℹ️ While both filter and search are designed to `),Y=b(f,"B",{});var je=_(Y);N=i(je,"filter"),je.forEach(e),ce=i(f," the data, their scopes are different. Filter applies to a single column, while search applies to the entire dataset."),ee=b(f,"BR",{}),L=i(f,`
            ℹ️ By default, white-space characters and the order of the words in a search/filter phrase are ignored. For example the phrase `),te=b(f,"CODE",{class:!0});var Fe=_(te);K=i(Fe,"1 2"),Fe.forEach(e),V=i(f," can match "),p=b(f,"CODE",{class:!0});var Ie=_(p);F=i(Ie,"12"),Ie.forEach(e),Q=i(f,", "),ie=b(f,"CODE",{class:!0});var Ne=_(ie);X=i(Ne,"21"),Ne.forEach(e),fe=i(f,", "),le=b(f,"CODE",{class:!0});var Ae=_(le);Z=i(Ae,"102"),Ae.forEach(e),se=i(f,", "),oe=b(f,"CODE",{class:!0});var Se=_(oe);ae=i(Se,"1 2"),Se.forEach(e),pe=i(f,", etc."),ve=b(f,"BR",{}),Be=i(f,`
            ℹ️ To look for an exact phrase match, or a complex pattern, use RegEx. For example `),a=b(f,"CODE",{class:!0});var Me=_(a);j=i(Me,"/1 2/"),Me.forEach(e),he=i(f," only matches "),be=b(f,"CODE",{class:!0});var De=_(be);Ee=i(De,"1 2"),De.forEach(e),ne=i(f,"."),_e=b(f,"BR",{}),ye=i(f,`
            ℹ️ Once a RegEx expression is detected, the default RegEx flags and a distinctive styling (e.g. different text color) will be added to the filter phrase. This styling helps to visually confirm if RegEx is being used.`),r=b(f,"BR",{}),R=i(f,`
            ℹ️ To search for a word or phrase that is a valid RegEx pattern (e.g. `),ke=b(f,"CODE",{class:!0});var He=_(ke);xe=i(He,"/(^.^)*/"),He.forEach(e),we=i(f,") but should not be interpreted as RegEx, add a space character before or after it."),u=b(f,"BR",{}),this.h()},h(){g(te,"class","svelte-1kc9njk"),g(p,"class","svelte-1kc9njk"),g(ie,"class","svelte-1kc9njk"),g(le,"class","svelte-1kc9njk"),g(oe,"class","svelte-1kc9njk"),g(a,"class","svelte-1kc9njk"),g(be,"class","svelte-1kc9njk"),g(ke,"class","svelte-1kc9njk")},m(f,I){l(f,y,I),l(f,x,I),v(x,d),l(f,E,I),l(f,D,I),v(D,O),l(f,w,I),l(f,n,I),v(n,c),l(f,T,I),l(f,B,I),l(f,h,I),l(f,S,I),v(S,A),l(f,k,I),l(f,m,I),v(m,z),l(f,$,I),l(f,M,I),v(M,q),l(f,me,I),l(f,W,I),v(W,J),l(f,ue,I),l(f,G,I),l(f,re,I),l(f,Y,I),v(Y,N),l(f,ce,I),l(f,ee,I),l(f,L,I),l(f,te,I),v(te,K),l(f,V,I),l(f,p,I),v(p,F),l(f,Q,I),l(f,ie,I),v(ie,X),l(f,fe,I),l(f,le,I),v(le,Z),l(f,se,I),l(f,oe,I),v(oe,ae),l(f,pe,I),l(f,ve,I),l(f,Be,I),l(f,a,I),v(a,j),l(f,he,I),l(f,be,I),v(be,Ee),l(f,ne,I),l(f,_e,I),l(f,ye,I),l(f,r,I),l(f,R,I),l(f,ke,I),v(ke,xe),l(f,we,I),l(f,u,I)},d(f){f&&e(y),f&&e(x),f&&e(E),f&&e(D),f&&e(w),f&&e(n),f&&e(T),f&&e(B),f&&e(h),f&&e(S),f&&e(k),f&&e(m),f&&e($),f&&e(M),f&&e(me),f&&e(W),f&&e(ue),f&&e(G),f&&e(re),f&&e(Y),f&&e(ce),f&&e(ee),f&&e(L),f&&e(te),f&&e(V),f&&e(p),f&&e(Q),f&&e(ie),f&&e(fe),f&&e(le),f&&e(se),f&&e(oe),f&&e(pe),f&&e(ve),f&&e(Be),f&&e(a),f&&e(he),f&&e(be),f&&e(ne),f&&e(_e),f&&e(ye),f&&e(r),f&&e(R),f&&e(ke),f&&e(we),f&&e(u)}}}function Il(U){let y,x,d,E,D,O,w,n,c,T,B,h,S,A,k,m,z,$,M,q,me,W,J,ue,G,re,Y,N,ce,ee,L,te,K,V,p,F,Q,ie,X,fe,le,Z,se,oe,ae,pe,ve,Be;return{c(){y=t("Controls can be used to access and manipulate the data with custom functions. To explore this feature, follow these steps:"),x=o("br"),d=H(),E=o("b"),D=t("1."),O=t(" Click on the "),w=o("b"),n=t("checkbox"),c=t(" at the beginning of a row to make the content of that row editable."),T=o("br"),B=H(),h=o("b"),S=t("2."),A=t(" Edit some of the fields. Once a textarea is in focus, a button with a check mark (✔️) will appear next to it. Clicking on that button will submit the changes to "),k=o("b"),m=t("all the fields in that row"),z=t("."),$=o("br"),M=H(),q=o("b"),me=t("3."),W=t(" Once you finish editing the content of the row, click on one of the check mark buttons to save the changes. It doesn't matter which check mark button."),J=o("br"),ue=H(),G=o("b"),re=t("4."),Y=t(" Click on the "),N=o("b"),ce=t("gear icon"),ee=t(" (⚙️) located on the header of the first column to explore the default options for "),L=o("b"),te=t("adding"),K=t(", "),V=o("b"),p=t("deleting"),F=t(", and "),Q=o("b"),ie=t("selecting"),X=t(" data. To delete a row, you first need to select it."),fe=o("br"),le=H(),Z=o("b"),se=t("5."),oe=t(' Click on the toolbox icon (🛠️) next to the search box and select "'),ae=o("b"),pe=t("Export current data"),ve=t('". The generated file reflects any changes you have made.'),Be=o("br")},l(a){y=i(a,"Controls can be used to access and manipulate the data with custom functions. To explore this feature, follow these steps:"),x=b(a,"BR",{}),d=P(a),E=b(a,"B",{});var j=_(E);D=i(j,"1."),j.forEach(e),O=i(a," Click on the "),w=b(a,"B",{});var he=_(w);n=i(he,"checkbox"),he.forEach(e),c=i(a," at the beginning of a row to make the content of that row editable."),T=b(a,"BR",{}),B=P(a),h=b(a,"B",{});var be=_(h);S=i(be,"2."),be.forEach(e),A=i(a," Edit some of the fields. Once a textarea is in focus, a button with a check mark (✔️) will appear next to it. Clicking on that button will submit the changes to "),k=b(a,"B",{});var Ee=_(k);m=i(Ee,"all the fields in that row"),Ee.forEach(e),z=i(a,"."),$=b(a,"BR",{}),M=P(a),q=b(a,"B",{});var ne=_(q);me=i(ne,"3."),ne.forEach(e),W=i(a," Once you finish editing the content of the row, click on one of the check mark buttons to save the changes. It doesn't matter which check mark button."),J=b(a,"BR",{}),ue=P(a),G=b(a,"B",{});var _e=_(G);re=i(_e,"4."),_e.forEach(e),Y=i(a," Click on the "),N=b(a,"B",{});var ye=_(N);ce=i(ye,"gear icon"),ye.forEach(e),ee=i(a," (⚙️) located on the header of the first column to explore the default options for "),L=b(a,"B",{});var r=_(L);te=i(r,"adding"),r.forEach(e),K=i(a,", "),V=b(a,"B",{});var R=_(V);p=i(R,"deleting"),R.forEach(e),F=i(a,", and "),Q=b(a,"B",{});var ke=_(Q);ie=i(ke,"selecting"),ke.forEach(e),X=i(a," data. To delete a row, you first need to select it."),fe=b(a,"BR",{}),le=P(a),Z=b(a,"B",{});var xe=_(Z);se=i(xe,"5."),xe.forEach(e),oe=i(a,' Click on the toolbox icon (🛠️) next to the search box and select "'),ae=b(a,"B",{});var we=_(ae);pe=i(we,"Export current data"),we.forEach(e),ve=i(a,'". The generated file reflects any changes you have made.'),Be=b(a,"BR",{})},m(a,j){l(a,y,j),l(a,x,j),l(a,d,j),l(a,E,j),v(E,D),l(a,O,j),l(a,w,j),v(w,n),l(a,c,j),l(a,T,j),l(a,B,j),l(a,h,j),v(h,S),l(a,A,j),l(a,k,j),v(k,m),l(a,z,j),l(a,$,j),l(a,M,j),l(a,q,j),v(q,me),l(a,W,j),l(a,J,j),l(a,ue,j),l(a,G,j),v(G,re),l(a,Y,j),l(a,N,j),v(N,ce),l(a,ee,j),l(a,L,j),v(L,te),l(a,K,j),l(a,V,j),v(V,p),l(a,F,j),l(a,Q,j),v(Q,ie),l(a,X,j),l(a,fe,j),l(a,le,j),l(a,Z,j),v(Z,se),l(a,oe,j),l(a,ae,j),v(ae,pe),l(a,ve,j),l(a,Be,j)},d(a){a&&e(y),a&&e(x),a&&e(d),a&&e(E),a&&e(O),a&&e(w),a&&e(c),a&&e(T),a&&e(B),a&&e(h),a&&e(A),a&&e(k),a&&e(z),a&&e($),a&&e(M),a&&e(q),a&&e(W),a&&e(J),a&&e(ue),a&&e(G),a&&e(Y),a&&e(N),a&&e(ee),a&&e(L),a&&e(K),a&&e(V),a&&e(F),a&&e(Q),a&&e(X),a&&e(fe),a&&e(le),a&&e(Z),a&&e(oe),a&&e(ae),a&&e(ve),a&&e(Be)}}}function Dl(U){let y,x,d;return{c(){y=t("Table data can retrieve from an external source (e.g. an API). In this example, data will be processed using client side JavaScript with 500 milliseconds intentional delay to simulate fetching from a server. However, in real life scenarios, data is processed on a server (e.g. with PHP, Node, etc.). To simplify the example, some features such as search, filters, and sorting have been disabled."),x=o("br"),d=t(`
            Navigating to a different page of the table as well as any change in search/filter terms would trigger fetching new data.`)},l(E){y=i(E,"Table data can retrieve from an external source (e.g. an API). In this example, data will be processed using client side JavaScript with 500 milliseconds intentional delay to simulate fetching from a server. However, in real life scenarios, data is processed on a server (e.g. with PHP, Node, etc.). To simplify the example, some features such as search, filters, and sorting have been disabled."),x=b(E,"BR",{}),d=i(E,`
            Navigating to a different page of the table as well as any change in search/filter terms would trigger fetching new data.`)},m(E,D){l(E,y,D),l(E,x,D),l(E,d,D)},d(E){E&&e(y),E&&e(x),E&&e(d)}}}function Fl(U){let y,x,d,E,D,O,w,n,c,T,B,h,S,A,k;return{c(){y=t("Customizations of styles:"),x=o("br"),d=H(),E=o("b"),D=t("1."),O=t(" A "),w=o("b"),n=t("maximum height"),c=t(" is set for the table, creating a vertical scroll bar."),T=o("br"),B=H(),h=o("b"),S=t("2."),A=t(" The height and color of the rows, and the direction of the id values have changed."),k=o("br")},l(m){y=i(m,"Customizations of styles:"),x=b(m,"BR",{}),d=P(m),E=b(m,"B",{});var z=_(E);D=i(z,"1."),z.forEach(e),O=i(m," A "),w=b(m,"B",{});var $=_(w);n=i($,"maximum height"),$.forEach(e),c=i(m," is set for the table, creating a vertical scroll bar."),T=b(m,"BR",{}),B=P(m),h=b(m,"B",{});var M=_(h);S=i(M,"2."),M.forEach(e),A=i(m," The height and color of the rows, and the direction of the id values have changed."),k=b(m,"BR",{})},m(m,z){l(m,y,z),l(m,x,z),l(m,d,z),l(m,E,z),v(E,D),l(m,O,z),l(m,w,z),v(w,n),l(m,c,z),l(m,T,z),l(m,B,z),l(m,h,z),v(h,S),l(m,A,z),l(m,k,z)},d(m){m&&e(y),m&&e(x),m&&e(d),m&&e(E),m&&e(O),m&&e(w),m&&e(c),m&&e(T),m&&e(B),m&&e(h),m&&e(A),m&&e(k)}}}function Al(U){let y,x,d,E,D,O,w,n,c,T;return{c(){y=t("Customizations with named slots:"),x=o("br"),d=H(),E=o("b"),D=t("1."),O=t(" A custom text is used for "),w=o("b"),n=t("noResults"),c=t(" slot."),T=o("br")},l(B){y=i(B,"Customizations with named slots:"),x=b(B,"BR",{}),d=P(B),E=b(B,"B",{});var h=_(E);D=i(h,"1."),h.forEach(e),O=i(B," A custom text is used for "),w=b(B,"B",{});var S=_(w);n=i(S,"noResults"),S.forEach(e),c=i(B," slot."),T=b(B,"BR",{})},m(B,h){l(B,y,h),l(B,x,h),l(B,d,h),l(B,E,h),v(E,D),l(B,O,h),l(B,w,h),v(w,n),l(B,c,h),l(B,T,h)},d(B){B&&e(y),B&&e(x),B&&e(d),B&&e(E),B&&e(O),B&&e(w),B&&e(c),B&&e(T)}}}function Sl(U){let y,x,d,E,D,O,w,n,c,T,B,h,S,A,k,m,z,$,M,q,me,W,J,ue,G,re,Y,N,ce,ee,L,te,K,V,p,F,Q,ie,X,fe,le,Z,se,oe,ae,pe,ve,Be,a,j,he,be,Ee,ne,_e,ye,r,R,ke,xe,we,u,f,I,Re,Ce,Te,Oe,ze,de,je,Fe,Ie,Ne,Ae,Se,Me,De,He,$e,Pe,We,qe,Le;return{c(){y=t("There are two tables on this page separated by a horizontal line. The first table has the following customizations of ptOptions:"),x=o("br"),d=H(),E=o("b"),D=t("1."),O=t(" A "),w=o("b"),n=t("unique prefix"),c=t(" has been assigned to the table."),T=o("br"),B=H(),h=o("b"),S=t("2."),A=H(),k=o("b"),m=t("Number of rows per page"),z=t(" can only be 3, 5, or 7."),$=o("br"),M=H(),q=o("b"),me=t("3."),W=H(),J=o("b"),ue=t("By default 3 rows"),G=t(" are displayed per page."),re=o("br"),Y=H(),N=o("b"),ce=t("4."),ee=H(),L=o("b"),te=t("Header filter"),K=t(" text boxes have been "),V=o("b"),p=t("removed"),F=t("."),Q=o("br"),ie=H(),X=o("b"),fe=t("5."),le=H(),Z=o("b"),se=t("Footer titles"),oe=t(" have been "),ae=o("b"),pe=t("removed"),ve=t("."),Be=o("br"),a=H(),j=o("b"),he=t("6."),be=H(),Ee=o("b"),ne=t("By default page #5"),_e=t(" is displayed."),ye=o("br"),r=H(),R=o("b"),ke=t("7."),xe=t(" There are three "),we=o("b"),u=t("segments above the table"),f=t(": dropdown, pagination, and stats."),I=o("br"),Re=H(),Ce=o("br"),Te=t(`
            The second table has the following customizations:`),Oe=o("br"),ze=H(),de=o("b"),je=t("1."),Fe=t(" A "),Ie=o("b"),Ne=t("unique prefix"),Ae=t(" has been assigned to the table."),Se=o("br"),Me=H(),De=o("b"),He=t("2."),$e=t(" A custom parsing function has added "),Pe=o("b"),We=t("emojis and HTML tags"),qe=t(" to some job titles."),Le=o("br")},l(s){y=i(s,"There are two tables on this page separated by a horizontal line. The first table has the following customizations of ptOptions:"),x=b(s,"BR",{}),d=P(s),E=b(s,"B",{});var C=_(E);D=i(C,"1."),C.forEach(e),O=i(s," A "),w=b(s,"B",{});var Ve=_(w);n=i(Ve,"unique prefix"),Ve.forEach(e),c=i(s," has been assigned to the table."),T=b(s,"BR",{}),B=P(s),h=b(s,"B",{});var Je=_(h);S=i(Je,"2."),Je.forEach(e),A=P(s),k=b(s,"B",{});var Ye=_(k);m=i(Ye,"Number of rows per page"),Ye.forEach(e),z=i(s," can only be 3, 5, or 7."),$=b(s,"BR",{}),M=P(s),q=b(s,"B",{});var Ke=_(q);me=i(Ke,"3."),Ke.forEach(e),W=P(s),J=b(s,"B",{});var Qe=_(J);ue=i(Qe,"By default 3 rows"),Qe.forEach(e),G=i(s," are displayed per page."),re=b(s,"BR",{}),Y=P(s),N=b(s,"B",{});var Xe=_(N);ce=i(Xe,"4."),Xe.forEach(e),ee=P(s),L=b(s,"B",{});var Ze=_(L);te=i(Ze,"Header filter"),Ze.forEach(e),K=i(s," text boxes have been "),V=b(s,"B",{});var ge=_(V);p=i(ge,"removed"),ge.forEach(e),F=i(s,"."),Q=b(s,"BR",{}),ie=P(s),X=b(s,"B",{});var el=_(X);fe=i(el,"5."),el.forEach(e),le=P(s),Z=b(s,"B",{});var ll=_(Z);se=i(ll,"Footer titles"),ll.forEach(e),oe=i(s," have been "),ae=b(s,"B",{});var tl=_(ae);pe=i(tl,"removed"),tl.forEach(e),ve=i(s,"."),Be=b(s,"BR",{}),a=P(s),j=b(s,"B",{});var il=_(j);he=i(il,"6."),il.forEach(e),be=P(s),Ee=b(s,"B",{});var fl=_(Ee);ne=i(fl,"By default page #5"),fl.forEach(e),_e=i(s," is displayed."),ye=b(s,"BR",{}),r=P(s),R=b(s,"B",{});var sl=_(R);ke=i(sl,"7."),sl.forEach(e),xe=i(s," There are three "),we=b(s,"B",{});var ol=_(we);u=i(ol,"segments above the table"),ol.forEach(e),f=i(s,": dropdown, pagination, and stats."),I=b(s,"BR",{}),Re=P(s),Ce=b(s,"BR",{}),Te=i(s,`
            The second table has the following customizations:`),Oe=b(s,"BR",{}),ze=P(s),de=b(s,"B",{});var bl=_(de);je=i(bl,"1."),bl.forEach(e),Fe=i(s," A "),Ie=b(s,"B",{});var rl=_(Ie);Ne=i(rl,"unique prefix"),rl.forEach(e),Ae=i(s," has been assigned to the table."),Se=b(s,"BR",{}),Me=P(s),De=b(s,"B",{});var ul=_(De);He=i(ul,"2."),ul.forEach(e),$e=i(s," A custom parsing function has added "),Pe=b(s,"B",{});var al=_(Pe);We=i(al,"emojis and HTML tags"),al.forEach(e),qe=i(s," to some job titles."),Le=b(s,"BR",{})},m(s,C){l(s,y,C),l(s,x,C),l(s,d,C),l(s,E,C),v(E,D),l(s,O,C),l(s,w,C),v(w,n),l(s,c,C),l(s,T,C),l(s,B,C),l(s,h,C),v(h,S),l(s,A,C),l(s,k,C),v(k,m),l(s,z,C),l(s,$,C),l(s,M,C),l(s,q,C),v(q,me),l(s,W,C),l(s,J,C),v(J,ue),l(s,G,C),l(s,re,C),l(s,Y,C),l(s,N,C),v(N,ce),l(s,ee,C),l(s,L,C),v(L,te),l(s,K,C),l(s,V,C),v(V,p),l(s,F,C),l(s,Q,C),l(s,ie,C),l(s,X,C),v(X,fe),l(s,le,C),l(s,Z,C),v(Z,se),l(s,oe,C),l(s,ae,C),v(ae,pe),l(s,ve,C),l(s,Be,C),l(s,a,C),l(s,j,C),v(j,he),l(s,be,C),l(s,Ee,C),v(Ee,ne),l(s,_e,C),l(s,ye,C),l(s,r,C),l(s,R,C),v(R,ke),l(s,xe,C),l(s,we,C),v(we,u),l(s,f,C),l(s,I,C),l(s,Re,C),l(s,Ce,C),l(s,Te,C),l(s,Oe,C),l(s,ze,C),l(s,de,C),v(de,je),l(s,Fe,C),l(s,Ie,C),v(Ie,Ne),l(s,Ae,C),l(s,Se,C),l(s,Me,C),l(s,De,C),v(De,He),l(s,$e,C),l(s,Pe,C),v(Pe,We),l(s,qe,C),l(s,Le,C)},d(s){s&&e(y),s&&e(x),s&&e(d),s&&e(E),s&&e(O),s&&e(w),s&&e(c),s&&e(T),s&&e(B),s&&e(h),s&&e(A),s&&e(k),s&&e(z),s&&e($),s&&e(M),s&&e(q),s&&e(W),s&&e(J),s&&e(G),s&&e(re),s&&e(Y),s&&e(N),s&&e(ee),s&&e(L),s&&e(K),s&&e(V),s&&e(F),s&&e(Q),s&&e(ie),s&&e(X),s&&e(le),s&&e(Z),s&&e(oe),s&&e(ae),s&&e(ve),s&&e(Be),s&&e(a),s&&e(j),s&&e(be),s&&e(Ee),s&&e(_e),s&&e(ye),s&&e(r),s&&e(R),s&&e(xe),s&&e(we),s&&e(f),s&&e(I),s&&e(Re),s&&e(Ce),s&&e(Te),s&&e(Oe),s&&e(ze),s&&e(de),s&&e(Fe),s&&e(Ie),s&&e(Ae),s&&e(Se),s&&e(Me),s&&e(De),s&&e($e),s&&e(Pe),s&&e(qe),s&&e(Le)}}}function Ml(U){let y,x,d,E,D,O,w,n,c,T,B,h,S,A,k,m,z,$,M,q,me,W,J,ue,G,re,Y,N,ce,ee,L,te,K,V;return{c(){y=t("Customizations of ptInstructs:"),x=o("br"),d=H(),E=o("b"),D=t("1."),O=H(),w=o("b"),n=t("Column titles"),c=t(" have been customized."),T=o("br"),B=H(),h=o("b"),S=t("2."),A=t(" First name is "),k=o("b"),m=t("not sortable"),z=t("."),$=o("br"),M=H(),q=o("b"),me=t("3."),W=t(" Company has a "),J=o("b"),ue=t("default filter phrase"),G=t("."),re=o("br"),Y=H(),N=o("b"),ce=t("4."),ee=t(" Department is "),L=o("b"),te=t("not filterable"),K=t("."),V=o("br")},l(p){y=i(p,"Customizations of ptInstructs:"),x=b(p,"BR",{}),d=P(p),E=b(p,"B",{});var F=_(E);D=i(F,"1."),F.forEach(e),O=P(p),w=b(p,"B",{});var Q=_(w);n=i(Q,"Column titles"),Q.forEach(e),c=i(p," have been customized."),T=b(p,"BR",{}),B=P(p),h=b(p,"B",{});var ie=_(h);S=i(ie,"2."),ie.forEach(e),A=i(p," First name is "),k=b(p,"B",{});var X=_(k);m=i(X,"not sortable"),X.forEach(e),z=i(p,"."),$=b(p,"BR",{}),M=P(p),q=b(p,"B",{});var fe=_(q);me=i(fe,"3."),fe.forEach(e),W=i(p," Company has a "),J=b(p,"B",{});var le=_(J);ue=i(le,"default filter phrase"),le.forEach(e),G=i(p,"."),re=b(p,"BR",{}),Y=P(p),N=b(p,"B",{});var Z=_(N);ce=i(Z,"4."),Z.forEach(e),ee=i(p," Department is "),L=b(p,"B",{});var se=_(L);te=i(se,"not filterable"),se.forEach(e),K=i(p,"."),V=b(p,"BR",{})},m(p,F){l(p,y,F),l(p,x,F),l(p,d,F),l(p,E,F),v(E,D),l(p,O,F),l(p,w,F),v(w,n),l(p,c,F),l(p,T,F),l(p,B,F),l(p,h,F),v(h,S),l(p,A,F),l(p,k,F),v(k,m),l(p,z,F),l(p,$,F),l(p,M,F),l(p,q,F),v(q,me),l(p,W,F),l(p,J,F),v(J,ue),l(p,G,F),l(p,re,F),l(p,Y,F),l(p,N,F),v(N,ce),l(p,ee,F),l(p,L,F),v(L,te),l(p,K,F),l(p,V,F)},d(p){p&&e(y),p&&e(x),p&&e(d),p&&e(E),p&&e(O),p&&e(w),p&&e(c),p&&e(T),p&&e(B),p&&e(h),p&&e(A),p&&e(k),p&&e(z),p&&e($),p&&e(M),p&&e(q),p&&e(W),p&&e(J),p&&e(G),p&&e(re),p&&e(Y),p&&e(N),p&&e(ee),p&&e(L),p&&e(K),p&&e(V)}}}function Nl(U){let y,x,d,E,D,O,w,n,c,T,B,h,S,A,k;return{c(){y=t("This is a basic setup with no customizations."),x=o("br"),d=t(`
            ℹ️ Notice that when you sort the `),E=o("b"),D=t("Id"),O=t(" column, the order of the numbers is unusual ("),w=o("code"),n=t("1,10,100,...,2,20,200"),c=t(" instead of "),T=o("code"),B=t("1,2,3,4,5,6,..."),h=t("). This is because by default columns are sorted alphabetically. To sort numbers, dates, and other data types, a "),S=o("b"),A=t("custom sorting"),k=t(" function can be used, as demonstrated in another example."),this.h()},l(m){y=i(m,"This is a basic setup with no customizations."),x=b(m,"BR",{}),d=i(m,`
            ℹ️ Notice that when you sort the `),E=b(m,"B",{});var z=_(E);D=i(z,"Id"),z.forEach(e),O=i(m," column, the order of the numbers is unusual ("),w=b(m,"CODE",{class:!0});var $=_(w);n=i($,"1,10,100,...,2,20,200"),$.forEach(e),c=i(m," instead of "),T=b(m,"CODE",{class:!0});var M=_(T);B=i(M,"1,2,3,4,5,6,..."),M.forEach(e),h=i(m,"). This is because by default columns are sorted alphabetically. To sort numbers, dates, and other data types, a "),S=b(m,"B",{});var q=_(S);A=i(q,"custom sorting"),q.forEach(e),k=i(m," function can be used, as demonstrated in another example."),this.h()},h(){g(w,"class","svelte-1kc9njk"),g(T,"class","svelte-1kc9njk")},m(m,z){l(m,y,z),l(m,x,z),l(m,d,z),l(m,E,z),v(E,D),l(m,O,z),l(m,w,z),v(w,n),l(m,c,z),l(m,T,z),v(T,B),l(m,h,z),l(m,S,z),v(S,A),l(m,k,z)},d(m){m&&e(y),m&&e(x),m&&e(d),m&&e(E),m&&e(O),m&&e(w),m&&e(c),m&&e(T),m&&e(h),m&&e(S),m&&e(k)}}}function Hl(U){let y,x,d=U[0].data.routeIdMatches=new RegExp("^/examples/example([0-9]+)$","g").exec(U[0].route.id??""),E,D,O=Object.entries(U[1]),w=[];for(let c=0;c<O.length;c+=1)w[c]=_l(vl(U,O,c));let n=d&&cl(U);return{c(){y=o("nav");for(let c=0;c<w.length;c+=1)w[c].c();x=H(),n&&n.c(),E=ml(),this.h()},l(c){y=b(c,"NAV",{class:!0});var T=_(y);for(let B=0;B<w.length;B+=1)w[B].l(T);T.forEach(e),x=P(c),n&&n.l(c),E=ml(),this.h()},h(){g(y,"class","svelte-1kc9njk")},m(c,T){l(c,y,T);for(let B=0;B<w.length;B+=1)w[B].m(y,null);l(c,x,T),n&&n.m(c,T),l(c,E,T),D=!0},p(c,[T]){if(T&3){O=Object.entries(c[1]);let B;for(B=0;B<O.length;B+=1){const h=vl(c,O,B);w[B]?w[B].p(h,T):(w[B]=_l(h),w[B].c(),w[B].m(y,null))}for(;B<w.length;B+=1)w[B].d(1);w.length=O.length}T&1&&(d=c[0].data.routeIdMatches=new RegExp("^/examples/example([0-9]+)$","g").exec(c[0].route.id??"")),d?n?(n.p(c,T),T&1&&Ue(n,1)):(n=cl(c),n.c(),Ue(n,1),n.m(E.parentNode,E)):n&&(Cl(),Ge(n,1,1,()=>{n=null}),yl())},i(c){D||(Ue(n),D=!0)},o(c){Ge(n),D=!1},d(c){c&&e(y),kl(w,c),c&&e(x),n&&n.d(c),c&&e(E)}}}function Pl(U,y,x){let d;hl(U,Tl,w=>x(0,d=w));let{$$slots:E={},$$scope:D}=y,O={1:"Basic",2:"Custom Instructs",3:"Custom Options",4:"Custom Slots",5:"Styling",6:"Remote Data",7:"Editing & Controls",8:"Filtering & Custom Parsing",9:"Custom Sorting",10:"Custom Filtering"};return U.$$set=w=>{"$$scope"in w&&x(2,D=w.$$scope)},[d,O,D,E]}class Ll extends El{constructor(y){super(),Bl(this,y,Pl,Hl,wl,{})}}export{Ll as default};
