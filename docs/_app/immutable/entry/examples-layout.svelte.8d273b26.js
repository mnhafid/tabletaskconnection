import{S as Rl,i as Cl,s as Tl,k as o,a as N,e as kl,l as r,m as v,h as e,c as H,n as U,b as l,g as Ke,d as Ze,f as Ol,L as jl,K as zl,q as t,r as i,M as yl,D as p,C as Dl,F as Il,G as Fl,H as Al,v as Ml}from"../chunks/index.5349f71a.js";import{p as Sl}from"../chunks/stores.d9c41367.js";function nl(W,h,d){const R=W.slice();return R[4]=h[d][0],R[5]=h[d][1],R}function dl(W){let h,d=W[4]+"",R,E,F=W[5]+"",O,B;return{c(){h=o("a"),R=t(d),E=t(". "),O=t(F),B=N(),this.h()},l(x){h=r(x,"A",{href:!0,class:!0});var _=v(h);R=i(_,d),E=i(_,". "),O=i(_,F),B=H(_),_.forEach(e),this.h()},h(){U(h,"href","/muonw-powertable/examples/example"+W[4]),U(h,"class","svelte-1kc9njk"),yl(h,"selected",W[0].route.id===`/examples/example${W[4]}`)},m(x,_){l(x,h,_),p(h,R),p(h,E),p(h,O),p(h,B)},p(x,_){_&3&&yl(h,"selected",x[0].route.id===`/examples/example${x[4]}`)},d(x){x&&e(h)}}}function xl(W){let h,d,R,E,F,O,B,x,_;function C(k,m){if(k[0].data.routeIdMatches[1]==="1")return Yl;if(k[0].data.routeIdMatches[1]==="2")return Wl;if(k[0].data.routeIdMatches[1]==="3")return Ul;if(k[0].data.routeIdMatches[1]==="4")return Jl;if(k[0].data.routeIdMatches[1]==="5")return Ll;if(k[0].data.routeIdMatches[1]==="6")return ql;if(k[0].data.routeIdMatches[1]==="7")return Pl;if(k[0].data.routeIdMatches[1]==="8")return $l;if(k[0].data.routeIdMatches[1]==="9")return Hl;if(k[0].data.routeIdMatches[1]==="10")return Nl}let w=C(W),y=w&&w(W);const S=W[3].default,M=Dl(S,W,W[2],null);return{c(){h=o("p"),y&&y.c(),d=N(),M&&M.c(),R=N(),E=o("p"),F=t(`See the source code 
        `),O=o("a"),B=t("here"),this.h()},l(k){h=r(k,"P",{class:!0});var m=v(h);y&&y.l(m),m.forEach(e),d=H(k),M&&M.l(k),R=H(k),E=r(k,"P",{class:!0});var z=v(E);F=i(z,`See the source code 
        `),O=r(z,"A",{href:!0});var q=v(O);B=i(q,"here"),q.forEach(e),z.forEach(e),this.h()},h(){U(h,"class","setup-details svelte-1kc9njk"),U(O,"href",x="https://github.com/muonw/muonw-powertable/blob/main/app/src/routes/examples/example"+W[0].data.routeIdMatches[1]+"/+page.svelte"),U(E,"class","ref")},m(k,m){l(k,h,m),y&&y.m(h,null),l(k,d,m),M&&M.m(k,m),l(k,R,m),l(k,E,m),p(E,F),p(E,O),p(O,B),_=!0},p(k,m){w!==(w=C(k))&&(y&&y.d(1),y=w&&w(k),y&&(y.c(),y.m(h,null))),M&&M.p&&(!_||m&4)&&Il(M,S,k,k[2],_?Al(S,k[2],m,null):Fl(k[2]),null),(!_||m&1&&x!==(x="https://github.com/muonw/muonw-powertable/blob/main/app/src/routes/examples/example"+k[0].data.routeIdMatches[1]+"/+page.svelte"))&&U(O,"href",x)},i(k){_||(Ke(M,k),_=!0)},o(k){Ze(M,k),_=!1},d(k){k&&e(h),y&&y.d(),k&&e(d),M&&M.d(k),k&&e(R),k&&e(E)}}}function Nl(W){let h,d,R,E,F,O,B,x,_,C,w,y,S,M,k,m,z,q,L,$,se,X,Y,ie,V,re,Q,P,ve,fe,J,be,te,G,c,A,K,ce,Z,g,ae,ee,le,_e,ue,oe,Ee,we,a,D,ne,me,pe,he,Be,ye;return{c(){h=t("This table utilizes user-defined functions to alter the search/filter process."),d=o("br"),R=t(`
            ℹ️ Search and filtering process can be first delegated to user-defined functions. These functions must return the processed data along with a flag specifying whether the process is finalized. If not finalized, the default search/filter will be performed on the returned data.`),E=o("br"),F=t(`
            ℹ️ If filtering is finalized by a user-defined function, a distinctive styling (e.g. different text color) will be applied to the filter phrase.`),O=o("br"),B=t(`
            The customizations of this table are as follows:`),x=o("br"),_=N(),C=o("b"),w=t("1."),y=N(),S=o("b"),M=t("Search"),k=t(" can only be done on rows that have an "),m=o("b"),z=t("even score number"),q=t(". That is because a user-defined function removes all rows that have odd scores (e.g. "),L=o("code"),$=t("1"),se=t(","),X=o("code"),Y=t("3"),ie=t(","),V=o("code"),re=t("5"),Q=t(","),P=o("code"),ve=t("7"),fe=t(") and then returns the remaining data along with a flag that allows the default search function to perform the actual search."),J=o("br"),be=N(),te=o("b"),G=t("2."),c=t(" The "),A=o("b"),K=t("Score"),ce=t(" column can be filtered by a "),Z=o("b"),g=t("number range"),ae=t(" (two integers separated by a hyphen). When the user-defined function detects a valid range, it filters out all non-matching rows and then returns the filtered data along with a flag that marks the filtering as finalized. If the process is not finalized, the default filter function will look for score numbers that have the exact characters as our range (including the hyphen) and will always fail."),ee=o("br"),le=N(),_e=o("b"),ue=t("3."),oe=t(" The "),Ee=o("b"),we=t("Birthday"),a=t(" column can be filtered by a "),D=o("b"),ne=t("date range"),me=t(". The methodology is similar to that used for the "),pe=o("b"),he=t("Score"),Be=t(" column."),ye=o("br"),this.h()},l(b){h=i(b,"This table utilizes user-defined functions to alter the search/filter process."),d=r(b,"BR",{}),R=i(b,`
            ℹ️ Search and filtering process can be first delegated to user-defined functions. These functions must return the processed data along with a flag specifying whether the process is finalized. If not finalized, the default search/filter will be performed on the returned data.`),E=r(b,"BR",{}),F=i(b,`
            ℹ️ If filtering is finalized by a user-defined function, a distinctive styling (e.g. different text color) will be applied to the filter phrase.`),O=r(b,"BR",{}),B=i(b,`
            The customizations of this table are as follows:`),x=r(b,"BR",{}),_=H(b),C=r(b,"B",{});var T=v(C);w=i(T,"1."),T.forEach(e),y=H(b),S=r(b,"B",{});var xe=v(S);M=i(xe,"Search"),xe.forEach(e),k=i(b," can only be done on rows that have an "),m=r(b,"B",{});var de=v(m);z=i(de,"even score number"),de.forEach(e),q=i(b,". That is because a user-defined function removes all rows that have odd scores (e.g. "),L=r(b,"CODE",{class:!0});var ke=v(L);$=i(ke,"1"),ke.forEach(e),se=i(b,","),X=r(b,"CODE",{class:!0});var u=v(X);Y=i(u,"3"),u.forEach(e),ie=i(b,","),V=r(b,"CODE",{class:!0});var I=v(V);re=i(I,"5"),I.forEach(e),Q=i(b,","),P=r(b,"CODE",{class:!0});var Re=v(P);ve=i(Re,"7"),Re.forEach(e),fe=i(b,") and then returns the remaining data along with a flag that allows the default search function to perform the actual search."),J=r(b,"BR",{}),be=H(b),te=r(b,"B",{});var je=v(te);G=i(je,"2."),je.forEach(e),c=i(b," The "),A=r(b,"B",{});var Ce=v(A);K=i(Ce,"Score"),Ce.forEach(e),ce=i(b," column can be filtered by a "),Z=r(b,"B",{});var Te=v(Z);g=i(Te,"number range"),Te.forEach(e),ae=i(b," (two integers separated by a hyphen). When the user-defined function detects a valid range, it filters out all non-matching rows and then returns the filtered data along with a flag that marks the filtering as finalized. If the process is not finalized, the default filter function will look for score numbers that have the exact characters as our range (including the hyphen) and will always fail."),ee=r(b,"BR",{}),le=H(b),_e=r(b,"B",{});var s=v(_e);ue=i(s,"3."),s.forEach(e),oe=i(b," The "),Ee=r(b,"B",{});var j=v(Ee);we=i(j,"Birthday"),j.forEach(e),a=i(b," column can be filtered by a "),D=r(b,"B",{});var Oe=v(D);ne=i(Oe,"date range"),Oe.forEach(e),me=i(b,". The methodology is similar to that used for the "),pe=r(b,"B",{});var ze=v(pe);he=i(ze,"Score"),ze.forEach(e),Be=i(b," column."),ye=r(b,"BR",{}),this.h()},h(){U(L,"class","svelte-1kc9njk"),U(X,"class","svelte-1kc9njk"),U(V,"class","svelte-1kc9njk"),U(P,"class","svelte-1kc9njk")},m(b,T){l(b,h,T),l(b,d,T),l(b,R,T),l(b,E,T),l(b,F,T),l(b,O,T),l(b,B,T),l(b,x,T),l(b,_,T),l(b,C,T),p(C,w),l(b,y,T),l(b,S,T),p(S,M),l(b,k,T),l(b,m,T),p(m,z),l(b,q,T),l(b,L,T),p(L,$),l(b,se,T),l(b,X,T),p(X,Y),l(b,ie,T),l(b,V,T),p(V,re),l(b,Q,T),l(b,P,T),p(P,ve),l(b,fe,T),l(b,J,T),l(b,be,T),l(b,te,T),p(te,G),l(b,c,T),l(b,A,T),p(A,K),l(b,ce,T),l(b,Z,T),p(Z,g),l(b,ae,T),l(b,ee,T),l(b,le,T),l(b,_e,T),p(_e,ue),l(b,oe,T),l(b,Ee,T),p(Ee,we),l(b,a,T),l(b,D,T),p(D,ne),l(b,me,T),l(b,pe,T),p(pe,he),l(b,Be,T),l(b,ye,T)},d(b){b&&e(h),b&&e(d),b&&e(R),b&&e(E),b&&e(F),b&&e(O),b&&e(B),b&&e(x),b&&e(_),b&&e(C),b&&e(y),b&&e(S),b&&e(k),b&&e(m),b&&e(q),b&&e(L),b&&e(se),b&&e(X),b&&e(ie),b&&e(V),b&&e(Q),b&&e(P),b&&e(fe),b&&e(J),b&&e(be),b&&e(te),b&&e(c),b&&e(A),b&&e(ce),b&&e(Z),b&&e(ae),b&&e(ee),b&&e(le),b&&e(_e),b&&e(oe),b&&e(Ee),b&&e(a),b&&e(D),b&&e(me),b&&e(pe),b&&e(Be),b&&e(ye)}}}function Hl(W){let h,d,R,E,F,O,B,x,_,C,w,y,S,M,k,m,z,q,L,$,se,X,Y,ie,V,re,Q,P,ve,fe,J,be,te,G,c,A,K,ce,Z,g,ae,ee,le,_e,ue,oe,Ee,we,a,D,ne,me,pe,he,Be,ye,b,T,xe,de,ke;return{c(){h=t("This table utilizes user-defined functions to sort numbers, dates, and colors. Additionally, multi-column sorting has been enabled to fine-tune the sorting."),d=o("br"),R=t(`
            ℹ️ By default, columns can only be sorted alphabetically. This may not be desired for certain data types. For example, the numbers `),E=o("code"),F=t("1,100,11"),O=t(" are sorted alphabetically, while "),B=o("code"),x=t("1,11,100"),_=t(" is often the desired order. User-defined functions can override the default sorting behavior."),C=o("br"),w=N(),y=o("b"),S=t("1."),M=t(" Click on the header of the "),k=o("b"),m=t("Score"),z=t(" column twice, so that the highest score would be on top."),q=o("br"),L=N(),$=o("b"),se=t("2."),X=t(" Click on the header of the "),Y=o("b"),ie=t("Full Name"),V=t(" column to sort the names of the people who have the same score. Note that since multi-column sorting is enabled and scores are already sorted, sorting any additional column cannot cause any change in the score column. This means that only rows that have identical scores are free to be rearranged."),re=o("br"),Q=N(),P=o("b"),ve=t("3."),fe=t(" Cancel the sorting of the "),J=o("b"),be=t("Full Name"),te=t(" column (click on its header until it's not sorted anymore) and try sorting the "),G=o("b"),c=t("Birthday"),A=t(" or "),K=o("b"),ce=t("Favorite Color"),Z=t(" columns instead. A user-defined function sets the expected order of the colors, which is the order rainbow colors: "),g=o("code"),ae=t("Red"),ee=t(", "),le=o("code"),_e=t("Orange"),ue=t(", "),oe=o("code"),Ee=t("Yellow"),we=t(", "),a=o("code"),D=t("Green"),ne=t(", "),me=o("code"),pe=t("Cyan"),he=t(", "),Be=o("code"),ye=t("Blue"),b=t(", "),T=o("code"),xe=t("Violet"),de=t("."),ke=o("br"),this.h()},l(u){h=i(u,"This table utilizes user-defined functions to sort numbers, dates, and colors. Additionally, multi-column sorting has been enabled to fine-tune the sorting."),d=r(u,"BR",{}),R=i(u,`
            ℹ️ By default, columns can only be sorted alphabetically. This may not be desired for certain data types. For example, the numbers `),E=r(u,"CODE",{class:!0});var I=v(E);F=i(I,"1,100,11"),I.forEach(e),O=i(u," are sorted alphabetically, while "),B=r(u,"CODE",{class:!0});var Re=v(B);x=i(Re,"1,11,100"),Re.forEach(e),_=i(u," is often the desired order. User-defined functions can override the default sorting behavior."),C=r(u,"BR",{}),w=H(u),y=r(u,"B",{});var je=v(y);S=i(je,"1."),je.forEach(e),M=i(u," Click on the header of the "),k=r(u,"B",{});var Ce=v(k);m=i(Ce,"Score"),Ce.forEach(e),z=i(u," column twice, so that the highest score would be on top."),q=r(u,"BR",{}),L=H(u),$=r(u,"B",{});var Te=v($);se=i(Te,"2."),Te.forEach(e),X=i(u," Click on the header of the "),Y=r(u,"B",{});var s=v(Y);ie=i(s,"Full Name"),s.forEach(e),V=i(u," column to sort the names of the people who have the same score. Note that since multi-column sorting is enabled and scores are already sorted, sorting any additional column cannot cause any change in the score column. This means that only rows that have identical scores are free to be rearranged."),re=r(u,"BR",{}),Q=H(u),P=r(u,"B",{});var j=v(P);ve=i(j,"3."),j.forEach(e),fe=i(u," Cancel the sorting of the "),J=r(u,"B",{});var Oe=v(J);be=i(Oe,"Full Name"),Oe.forEach(e),te=i(u," column (click on its header until it's not sorted anymore) and try sorting the "),G=r(u,"B",{});var ze=v(G);c=i(ze,"Birthday"),ze.forEach(e),A=i(u," or "),K=r(u,"B",{});var Fe=v(K);ce=i(Fe,"Favorite Color"),Fe.forEach(e),Z=i(u," columns instead. A user-defined function sets the expected order of the colors, which is the order rainbow colors: "),g=r(u,"CODE",{class:!0});var De=v(g);ae=i(De,"Red"),De.forEach(e),ee=i(u,", "),le=r(u,"CODE",{class:!0});var Ne=v(le);_e=i(Ne,"Orange"),Ne.forEach(e),ue=i(u,", "),oe=r(u,"CODE",{class:!0});var Ae=v(oe);Ee=i(Ae,"Yellow"),Ae.forEach(e),we=i(u,", "),a=r(u,"CODE",{class:!0});var Me=v(a);D=i(Me,"Green"),Me.forEach(e),ne=i(u,", "),me=r(u,"CODE",{class:!0});var Se=v(me);pe=i(Se,"Cyan"),Se.forEach(e),he=i(u,", "),Be=r(u,"CODE",{class:!0});var Ie=v(Be);ye=i(Ie,"Blue"),Ie.forEach(e),b=i(u,", "),T=r(u,"CODE",{class:!0});var He=v(T);xe=i(He,"Violet"),He.forEach(e),de=i(u,"."),ke=r(u,"BR",{}),this.h()},h(){U(E,"class","svelte-1kc9njk"),U(B,"class","svelte-1kc9njk"),U(g,"class","svelte-1kc9njk"),U(le,"class","svelte-1kc9njk"),U(oe,"class","svelte-1kc9njk"),U(a,"class","svelte-1kc9njk"),U(me,"class","svelte-1kc9njk"),U(Be,"class","svelte-1kc9njk"),U(T,"class","svelte-1kc9njk")},m(u,I){l(u,h,I),l(u,d,I),l(u,R,I),l(u,E,I),p(E,F),l(u,O,I),l(u,B,I),p(B,x),l(u,_,I),l(u,C,I),l(u,w,I),l(u,y,I),p(y,S),l(u,M,I),l(u,k,I),p(k,m),l(u,z,I),l(u,q,I),l(u,L,I),l(u,$,I),p($,se),l(u,X,I),l(u,Y,I),p(Y,ie),l(u,V,I),l(u,re,I),l(u,Q,I),l(u,P,I),p(P,ve),l(u,fe,I),l(u,J,I),p(J,be),l(u,te,I),l(u,G,I),p(G,c),l(u,A,I),l(u,K,I),p(K,ce),l(u,Z,I),l(u,g,I),p(g,ae),l(u,ee,I),l(u,le,I),p(le,_e),l(u,ue,I),l(u,oe,I),p(oe,Ee),l(u,we,I),l(u,a,I),p(a,D),l(u,ne,I),l(u,me,I),p(me,pe),l(u,he,I),l(u,Be,I),p(Be,ye),l(u,b,I),l(u,T,I),p(T,xe),l(u,de,I),l(u,ke,I)},d(u){u&&e(h),u&&e(d),u&&e(R),u&&e(E),u&&e(O),u&&e(B),u&&e(_),u&&e(C),u&&e(w),u&&e(y),u&&e(M),u&&e(k),u&&e(z),u&&e(q),u&&e(L),u&&e($),u&&e(X),u&&e(Y),u&&e(V),u&&e(re),u&&e(Q),u&&e(P),u&&e(fe),u&&e(J),u&&e(te),u&&e(G),u&&e(A),u&&e(K),u&&e(Z),u&&e(g),u&&e(ee),u&&e(le),u&&e(ue),u&&e(oe),u&&e(we),u&&e(a),u&&e(ne),u&&e(me),u&&e(he),u&&e(Be),u&&e(b),u&&e(T),u&&e(de),u&&e(ke)}}}function $l(W){let h,d,R,E,F,O,B,x,_,C,w,y,S,M,k,m,z,q,L,$,se,X,Y,ie,V,re,Q,P,ve,fe,J,be,te,G,c,A,K,ce,Z,g,ae,ee,le,_e,ue,oe,Ee,we,a,D,ne,me,pe,he,Be,ye,b,T,xe,de,ke,u,I,Re,je,Ce,Te;return{c(){h=t("This table utilizes an included function named "),d=o("code"),R=t("highlighter"),E=t(" in order to highlight search/filter matches. Highlighting is an example of custom parsing — a feature that let you control how the content of the table is displayed. You can use your own user-defined function for custom parsing."),F=o("br"),O=t(`
            ℹ️ Using `),B=o("code"),x=t("highlighter"),_=t(", the "),C=o("b"),w=t("search matches"),y=t(" are highlighted yellow, the "),S=o("b"),M=t("filter matches"),k=t(" are blue, and the "),m=o("b"),z=t("overlaps"),q=t(" of search and filter matches are green."),L=o("br"),$=t(`
            ℹ️ HTML tags will be visible to `),se=o("code"),X=t("highlighter"),Y=t(" but all the matches from "),ie=o("code"),V=t("<"),re=t(" to "),Q=o("code"),P=t(">"),ve=t(" will be ignored."),fe=o("br"),J=t(`
            ℹ️ While both filter and search are designed to `),be=o("b"),te=t("filter"),G=t(" the data, their scopes are different. Filter applies to a single column, while search applies to the entire dataset."),c=o("br"),A=t(`
            ℹ️ By default, white-space characters and the order of the words in a search/filter phrase are ignored. For example the phrase `),K=o("code"),ce=t("1 2"),Z=t(" can match "),g=o("code"),ae=t("12"),ee=t(", "),le=o("code"),_e=t("21"),ue=t(", "),oe=o("code"),Ee=t("102"),we=t(", "),a=o("code"),D=t("1 2"),ne=t(", etc."),me=o("br"),pe=t(`
            ℹ️ To look for an exact phrase match, or a complex pattern, use RegEx. For example `),he=o("code"),Be=t("/1 2/"),ye=t(" only matches "),b=o("code"),T=t("1 2"),xe=t("."),de=o("br"),ke=t(`
            ℹ️ Once a RegEx expression is detected, the default RegEx flags and a distinctive styling (e.g. different text color) will be added to the filter phrase. This styling helps to visually confirm if RegEx is being used.`),u=o("br"),I=t(`
            ℹ️ To search for a word or phrase that is a valid RegEx pattern (e.g. `),Re=o("code"),je=t("/(^.^)*/"),Ce=t(") but should not be interpreted as RegEx, add a space character before or after it."),Te=o("br"),this.h()},l(s){h=i(s,"This table utilizes an included function named "),d=r(s,"CODE",{class:!0});var j=v(d);R=i(j,"highlighter"),j.forEach(e),E=i(s," in order to highlight search/filter matches. Highlighting is an example of custom parsing — a feature that let you control how the content of the table is displayed. You can use your own user-defined function for custom parsing."),F=r(s,"BR",{}),O=i(s,`
            ℹ️ Using `),B=r(s,"CODE",{class:!0});var Oe=v(B);x=i(Oe,"highlighter"),Oe.forEach(e),_=i(s,", the "),C=r(s,"B",{});var ze=v(C);w=i(ze,"search matches"),ze.forEach(e),y=i(s," are highlighted yellow, the "),S=r(s,"B",{});var Fe=v(S);M=i(Fe,"filter matches"),Fe.forEach(e),k=i(s," are blue, and the "),m=r(s,"B",{});var De=v(m);z=i(De,"overlaps"),De.forEach(e),q=i(s," of search and filter matches are green."),L=r(s,"BR",{}),$=i(s,`
            ℹ️ HTML tags will be visible to `),se=r(s,"CODE",{class:!0});var Ne=v(se);X=i(Ne,"highlighter"),Ne.forEach(e),Y=i(s," but all the matches from "),ie=r(s,"CODE",{class:!0});var Ae=v(ie);V=i(Ae,"<"),Ae.forEach(e),re=i(s," to "),Q=r(s,"CODE",{class:!0});var Me=v(Q);P=i(Me,">"),Me.forEach(e),ve=i(s," will be ignored."),fe=r(s,"BR",{}),J=i(s,`
            ℹ️ While both filter and search are designed to `),be=r(s,"B",{});var Se=v(be);te=i(Se,"filter"),Se.forEach(e),G=i(s," the data, their scopes are different. Filter applies to a single column, while search applies to the entire dataset."),c=r(s,"BR",{}),A=i(s,`
            ℹ️ By default, white-space characters and the order of the words in a search/filter phrase are ignored. For example the phrase `),K=r(s,"CODE",{class:!0});var Ie=v(K);ce=i(Ie,"1 2"),Ie.forEach(e),Z=i(s," can match "),g=r(s,"CODE",{class:!0});var He=v(g);ae=i(He,"12"),He.forEach(e),ee=i(s,", "),le=r(s,"CODE",{class:!0});var Pe=v(le);_e=i(Pe,"21"),Pe.forEach(e),ue=i(s,", "),oe=r(s,"CODE",{class:!0});var $e=v(oe);Ee=i($e,"102"),$e.forEach(e),we=i(s,", "),a=r(s,"CODE",{class:!0});var Ue=v(a);D=i(Ue,"1 2"),Ue.forEach(e),ne=i(s,", etc."),me=r(s,"BR",{}),pe=i(s,`
            ℹ️ To look for an exact phrase match, or a complex pattern, use RegEx. For example `),he=r(s,"CODE",{class:!0});var qe=v(he);Be=i(qe,"/1 2/"),qe.forEach(e),ye=i(s," only matches "),b=r(s,"CODE",{class:!0});var Le=v(b);T=i(Le,"1 2"),Le.forEach(e),xe=i(s,"."),de=r(s,"BR",{}),ke=i(s,`
            ℹ️ Once a RegEx expression is detected, the default RegEx flags and a distinctive styling (e.g. different text color) will be added to the filter phrase. This styling helps to visually confirm if RegEx is being used.`),u=r(s,"BR",{}),I=i(s,`
            ℹ️ To search for a word or phrase that is a valid RegEx pattern (e.g. `),Re=r(s,"CODE",{class:!0});var Je=v(Re);je=i(Je,"/(^.^)*/"),Je.forEach(e),Ce=i(s,") but should not be interpreted as RegEx, add a space character before or after it."),Te=r(s,"BR",{}),this.h()},h(){U(d,"class","svelte-1kc9njk"),U(B,"class","svelte-1kc9njk"),U(se,"class","svelte-1kc9njk"),U(ie,"class","svelte-1kc9njk"),U(Q,"class","svelte-1kc9njk"),U(K,"class","svelte-1kc9njk"),U(g,"class","svelte-1kc9njk"),U(le,"class","svelte-1kc9njk"),U(oe,"class","svelte-1kc9njk"),U(a,"class","svelte-1kc9njk"),U(he,"class","svelte-1kc9njk"),U(b,"class","svelte-1kc9njk"),U(Re,"class","svelte-1kc9njk")},m(s,j){l(s,h,j),l(s,d,j),p(d,R),l(s,E,j),l(s,F,j),l(s,O,j),l(s,B,j),p(B,x),l(s,_,j),l(s,C,j),p(C,w),l(s,y,j),l(s,S,j),p(S,M),l(s,k,j),l(s,m,j),p(m,z),l(s,q,j),l(s,L,j),l(s,$,j),l(s,se,j),p(se,X),l(s,Y,j),l(s,ie,j),p(ie,V),l(s,re,j),l(s,Q,j),p(Q,P),l(s,ve,j),l(s,fe,j),l(s,J,j),l(s,be,j),p(be,te),l(s,G,j),l(s,c,j),l(s,A,j),l(s,K,j),p(K,ce),l(s,Z,j),l(s,g,j),p(g,ae),l(s,ee,j),l(s,le,j),p(le,_e),l(s,ue,j),l(s,oe,j),p(oe,Ee),l(s,we,j),l(s,a,j),p(a,D),l(s,ne,j),l(s,me,j),l(s,pe,j),l(s,he,j),p(he,Be),l(s,ye,j),l(s,b,j),p(b,T),l(s,xe,j),l(s,de,j),l(s,ke,j),l(s,u,j),l(s,I,j),l(s,Re,j),p(Re,je),l(s,Ce,j),l(s,Te,j)},d(s){s&&e(h),s&&e(d),s&&e(E),s&&e(F),s&&e(O),s&&e(B),s&&e(_),s&&e(C),s&&e(y),s&&e(S),s&&e(k),s&&e(m),s&&e(q),s&&e(L),s&&e($),s&&e(se),s&&e(Y),s&&e(ie),s&&e(re),s&&e(Q),s&&e(ve),s&&e(fe),s&&e(J),s&&e(be),s&&e(G),s&&e(c),s&&e(A),s&&e(K),s&&e(Z),s&&e(g),s&&e(ee),s&&e(le),s&&e(ue),s&&e(oe),s&&e(we),s&&e(a),s&&e(ne),s&&e(me),s&&e(pe),s&&e(he),s&&e(ye),s&&e(b),s&&e(xe),s&&e(de),s&&e(ke),s&&e(u),s&&e(I),s&&e(Re),s&&e(Ce),s&&e(Te)}}}function Pl(W){let h,d,R,E,F,O,B,x,_,C,w,y,S,M,k,m,z,q,L,$,se,X,Y,ie,V,re,Q,P,ve,fe,J,be,te,G,c,A,K,ce,Z,g,ae,ee,le,_e,ue,oe,Ee,we;return{c(){h=t("Controls can be used to access and manipulate the data with custom functions. To explore this feature, follow these steps:"),d=o("br"),R=N(),E=o("b"),F=t("1."),O=t(" Click on the "),B=o("b"),x=t("checkbox"),_=t(" at the beginning of a row to make the content of that row editable."),C=o("br"),w=N(),y=o("b"),S=t("2."),M=t(" Edit some of the fields. Once a textarea is in focus, a button with a check mark (✔️) will appear next to it. Clicking on that button will submit the changes to "),k=o("b"),m=t("all the fields in that row"),z=t("."),q=o("br"),L=N(),$=o("b"),se=t("3."),X=t(" Once you finish editing the content of the row, click on one of the check mark buttons to save the changes. It doesn't matter which check mark button."),Y=o("br"),ie=N(),V=o("b"),re=t("4."),Q=t(" Click on the "),P=o("b"),ve=t("gear icon"),fe=t(" (⚙️) located on the header of the first column to explore the default options for "),J=o("b"),be=t("adding"),te=t(", "),G=o("b"),c=t("deleting"),A=t(", and "),K=o("b"),ce=t("selecting"),Z=t(" data. To delete a row, you first need to select it."),g=o("br"),ae=N(),ee=o("b"),le=t("5."),_e=t(' Click on the toolbox icon (🛠️) next to the search box and select "'),ue=o("b"),oe=t("Export current data"),Ee=t('". The generated file reflects any changes you have made.'),we=o("br")},l(a){h=i(a,"Controls can be used to access and manipulate the data with custom functions. To explore this feature, follow these steps:"),d=r(a,"BR",{}),R=H(a),E=r(a,"B",{});var D=v(E);F=i(D,"1."),D.forEach(e),O=i(a," Click on the "),B=r(a,"B",{});var ne=v(B);x=i(ne,"checkbox"),ne.forEach(e),_=i(a," at the beginning of a row to make the content of that row editable."),C=r(a,"BR",{}),w=H(a),y=r(a,"B",{});var me=v(y);S=i(me,"2."),me.forEach(e),M=i(a," Edit some of the fields. Once a textarea is in focus, a button with a check mark (✔️) will appear next to it. Clicking on that button will submit the changes to "),k=r(a,"B",{});var pe=v(k);m=i(pe,"all the fields in that row"),pe.forEach(e),z=i(a,"."),q=r(a,"BR",{}),L=H(a),$=r(a,"B",{});var he=v($);se=i(he,"3."),he.forEach(e),X=i(a," Once you finish editing the content of the row, click on one of the check mark buttons to save the changes. It doesn't matter which check mark button."),Y=r(a,"BR",{}),ie=H(a),V=r(a,"B",{});var Be=v(V);re=i(Be,"4."),Be.forEach(e),Q=i(a," Click on the "),P=r(a,"B",{});var ye=v(P);ve=i(ye,"gear icon"),ye.forEach(e),fe=i(a," (⚙️) located on the header of the first column to explore the default options for "),J=r(a,"B",{});var b=v(J);be=i(b,"adding"),b.forEach(e),te=i(a,", "),G=r(a,"B",{});var T=v(G);c=i(T,"deleting"),T.forEach(e),A=i(a,", and "),K=r(a,"B",{});var xe=v(K);ce=i(xe,"selecting"),xe.forEach(e),Z=i(a," data. To delete a row, you first need to select it."),g=r(a,"BR",{}),ae=H(a),ee=r(a,"B",{});var de=v(ee);le=i(de,"5."),de.forEach(e),_e=i(a,' Click on the toolbox icon (🛠️) next to the search box and select "'),ue=r(a,"B",{});var ke=v(ue);oe=i(ke,"Export current data"),ke.forEach(e),Ee=i(a,'". The generated file reflects any changes you have made.'),we=r(a,"BR",{})},m(a,D){l(a,h,D),l(a,d,D),l(a,R,D),l(a,E,D),p(E,F),l(a,O,D),l(a,B,D),p(B,x),l(a,_,D),l(a,C,D),l(a,w,D),l(a,y,D),p(y,S),l(a,M,D),l(a,k,D),p(k,m),l(a,z,D),l(a,q,D),l(a,L,D),l(a,$,D),p($,se),l(a,X,D),l(a,Y,D),l(a,ie,D),l(a,V,D),p(V,re),l(a,Q,D),l(a,P,D),p(P,ve),l(a,fe,D),l(a,J,D),p(J,be),l(a,te,D),l(a,G,D),p(G,c),l(a,A,D),l(a,K,D),p(K,ce),l(a,Z,D),l(a,g,D),l(a,ae,D),l(a,ee,D),p(ee,le),l(a,_e,D),l(a,ue,D),p(ue,oe),l(a,Ee,D),l(a,we,D)},d(a){a&&e(h),a&&e(d),a&&e(R),a&&e(E),a&&e(O),a&&e(B),a&&e(_),a&&e(C),a&&e(w),a&&e(y),a&&e(M),a&&e(k),a&&e(z),a&&e(q),a&&e(L),a&&e($),a&&e(X),a&&e(Y),a&&e(ie),a&&e(V),a&&e(Q),a&&e(P),a&&e(fe),a&&e(J),a&&e(te),a&&e(G),a&&e(A),a&&e(K),a&&e(Z),a&&e(g),a&&e(ae),a&&e(ee),a&&e(_e),a&&e(ue),a&&e(Ee),a&&e(we)}}}function ql(W){let h,d,R;return{c(){h=t("Table data can retrieve from an external source (e.g. an API). In this example, data will be processed using client side JavaScript with 500 milliseconds intentional delay to simulate fetching from a server. However, in real life scenarios, data is processed on a server (e.g. with PHP, Node, etc.). To simplify the example, some features such as search, filters, and sorting have been disabled."),d=o("br"),R=t(`
            Navigating to a different page of the table as well as any change in search/filter terms would trigger fetching new data.`)},l(E){h=i(E,"Table data can retrieve from an external source (e.g. an API). In this example, data will be processed using client side JavaScript with 500 milliseconds intentional delay to simulate fetching from a server. However, in real life scenarios, data is processed on a server (e.g. with PHP, Node, etc.). To simplify the example, some features such as search, filters, and sorting have been disabled."),d=r(E,"BR",{}),R=i(E,`
            Navigating to a different page of the table as well as any change in search/filter terms would trigger fetching new data.`)},m(E,F){l(E,h,F),l(E,d,F),l(E,R,F)},d(E){E&&e(h),E&&e(d),E&&e(R)}}}function Ll(W){let h,d,R,E,F,O,B,x,_,C,w,y,S,M,k;return{c(){h=t("Customizations of styles:"),d=o("br"),R=N(),E=o("b"),F=t("1."),O=t(" A "),B=o("b"),x=t("maximum height"),_=t(" is set for the table, creating a vertical scroll bar."),C=o("br"),w=N(),y=o("b"),S=t("2."),M=t(" The height and color of the rows, and the direction of the id values have changed."),k=o("br")},l(m){h=i(m,"Customizations of styles:"),d=r(m,"BR",{}),R=H(m),E=r(m,"B",{});var z=v(E);F=i(z,"1."),z.forEach(e),O=i(m," A "),B=r(m,"B",{});var q=v(B);x=i(q,"maximum height"),q.forEach(e),_=i(m," is set for the table, creating a vertical scroll bar."),C=r(m,"BR",{}),w=H(m),y=r(m,"B",{});var L=v(y);S=i(L,"2."),L.forEach(e),M=i(m," The height and color of the rows, and the direction of the id values have changed."),k=r(m,"BR",{})},m(m,z){l(m,h,z),l(m,d,z),l(m,R,z),l(m,E,z),p(E,F),l(m,O,z),l(m,B,z),p(B,x),l(m,_,z),l(m,C,z),l(m,w,z),l(m,y,z),p(y,S),l(m,M,z),l(m,k,z)},d(m){m&&e(h),m&&e(d),m&&e(R),m&&e(E),m&&e(O),m&&e(B),m&&e(_),m&&e(C),m&&e(w),m&&e(y),m&&e(M),m&&e(k)}}}function Jl(W){let h,d,R,E,F,O,B,x,_,C;return{c(){h=t("Customizations with named slots:"),d=o("br"),R=N(),E=o("b"),F=t("1."),O=t(" A custom text is used for "),B=o("b"),x=t("noResults"),_=t(" slot."),C=o("br")},l(w){h=i(w,"Customizations with named slots:"),d=r(w,"BR",{}),R=H(w),E=r(w,"B",{});var y=v(E);F=i(y,"1."),y.forEach(e),O=i(w," A custom text is used for "),B=r(w,"B",{});var S=v(B);x=i(S,"noResults"),S.forEach(e),_=i(w," slot."),C=r(w,"BR",{})},m(w,y){l(w,h,y),l(w,d,y),l(w,R,y),l(w,E,y),p(E,F),l(w,O,y),l(w,B,y),p(B,x),l(w,_,y),l(w,C,y)},d(w){w&&e(h),w&&e(d),w&&e(R),w&&e(E),w&&e(O),w&&e(B),w&&e(_),w&&e(C)}}}function Ul(W){let h,d,R,E,F,O,B,x,_,C,w,y,S,M,k,m,z,q,L,$,se,X,Y,ie,V,re,Q,P,ve,fe,J,be,te,G,c,A,K,ce,Z,g,ae,ee,le,_e,ue,oe,Ee,we,a,D,ne,me,pe,he,Be,ye,b,T,xe,de,ke,u,I,Re,je,Ce,Te,s,j,Oe,ze,Fe,De,Ne,Ae,Me,Se,Ie,He,Pe,$e,Ue,qe,Le,Je,We,Qe,Ge,Ye,Xe,Ve;return{c(){h=t("There are two tables on this page separated by a horizontal line. The first table has the following customizations of ptOptions:"),d=o("br"),R=N(),E=o("b"),F=t("1."),O=t(" A "),B=o("b"),x=t("unique prefix"),_=t(" has been assigned to the table."),C=o("br"),w=N(),y=o("b"),S=t("2."),M=N(),k=o("b"),m=t("Number of rows per page"),z=t(" can only be 3, 5, or 7."),q=o("br"),L=N(),$=o("b"),se=t("3."),X=N(),Y=o("b"),ie=t("By default 3 rows"),V=t(" are displayed per page."),re=o("br"),Q=N(),P=o("b"),ve=t("4."),fe=N(),J=o("b"),be=t("Header filter"),te=t(" text boxes have been "),G=o("b"),c=t("removed"),A=t("."),K=o("br"),ce=N(),Z=o("b"),g=t("5."),ae=N(),ee=o("b"),le=t("Footer titles"),_e=t(" have been "),ue=o("b"),oe=t("removed"),Ee=t("."),we=o("br"),a=N(),D=o("b"),ne=t("6."),me=N(),pe=o("b"),he=t("By default page #5"),Be=t(" is displayed."),ye=o("br"),b=N(),T=o("b"),xe=t("7."),de=t(" There are three "),ke=o("b"),u=t("segments above the table"),I=t(": dropdown, pagination, and stats."),Re=o("br"),je=N(),Ce=o("br"),Te=t(`
            The second table has the following customizations:`),s=o("br"),j=N(),Oe=o("b"),ze=t("1."),Fe=t(" A "),De=o("b"),Ne=t("unique prefix"),Ae=t(" has been assigned to the table."),Me=o("br"),Se=N(),Ie=o("b"),He=t("2."),Pe=t(" A custom parsing function has added "),$e=o("b"),Ue=t("emojis and HTML tags"),qe=t(" to some job titles."),Le=o("br"),Je=N(),We=o("b"),Qe=t("3."),Ge=t(" The page numbers as well as search and filter placeholders are "),Ye=o("b"),Xe=t("translated"),Ve=t(" to Japanese.")},l(f){h=i(f,"There are two tables on this page separated by a horizontal line. The first table has the following customizations of ptOptions:"),d=r(f,"BR",{}),R=H(f),E=r(f,"B",{});var n=v(E);F=i(n,"1."),n.forEach(e),O=i(f," A "),B=r(f,"B",{});var ge=v(B);x=i(ge,"unique prefix"),ge.forEach(e),_=i(f," has been assigned to the table."),C=r(f,"BR",{}),w=H(f),y=r(f,"B",{});var el=v(y);S=i(el,"2."),el.forEach(e),M=H(f),k=r(f,"B",{});var ll=v(k);m=i(ll,"Number of rows per page"),ll.forEach(e),z=i(f," can only be 3, 5, or 7."),q=r(f,"BR",{}),L=H(f),$=r(f,"B",{});var tl=v($);se=i(tl,"3."),tl.forEach(e),X=H(f),Y=r(f,"B",{});var il=v(Y);ie=i(il,"By default 3 rows"),il.forEach(e),V=i(f," are displayed per page."),re=r(f,"BR",{}),Q=H(f),P=r(f,"B",{});var fl=v(P);ve=i(fl,"4."),fl.forEach(e),fe=H(f),J=r(f,"B",{});var sl=v(J);be=i(sl,"Header filter"),sl.forEach(e),te=i(f," text boxes have been "),G=r(f,"B",{});var ol=v(G);c=i(ol,"removed"),ol.forEach(e),A=i(f,"."),K=r(f,"BR",{}),ce=H(f),Z=r(f,"B",{});var rl=v(Z);g=i(rl,"5."),rl.forEach(e),ae=H(f),ee=r(f,"B",{});var bl=v(ee);le=i(bl,"Footer titles"),bl.forEach(e),_e=i(f," have been "),ue=r(f,"B",{});var ul=v(ue);oe=i(ul,"removed"),ul.forEach(e),Ee=i(f,"."),we=r(f,"BR",{}),a=H(f),D=r(f,"B",{});var al=v(D);ne=i(al,"6."),al.forEach(e),me=H(f),pe=r(f,"B",{});var ml=v(pe);he=i(ml,"By default page #5"),ml.forEach(e),Be=i(f," is displayed."),ye=r(f,"BR",{}),b=H(f),T=r(f,"B",{});var pl=v(T);xe=i(pl,"7."),pl.forEach(e),de=i(f," There are three "),ke=r(f,"B",{});var vl=v(ke);u=i(vl,"segments above the table"),vl.forEach(e),I=i(f,": dropdown, pagination, and stats."),Re=r(f,"BR",{}),je=H(f),Ce=r(f,"BR",{}),Te=i(f,`
            The second table has the following customizations:`),s=r(f,"BR",{}),j=H(f),Oe=r(f,"B",{});var cl=v(Oe);ze=i(cl,"1."),cl.forEach(e),Fe=i(f," A "),De=r(f,"B",{});var _l=v(De);Ne=i(_l,"unique prefix"),_l.forEach(e),Ae=i(f," has been assigned to the table."),Me=r(f,"BR",{}),Se=H(f),Ie=r(f,"B",{});var El=v(Ie);He=i(El,"2."),El.forEach(e),Pe=i(f," A custom parsing function has added "),$e=r(f,"B",{});var Bl=v($e);Ue=i(Bl,"emojis and HTML tags"),Bl.forEach(e),qe=i(f," to some job titles."),Le=r(f,"BR",{}),Je=H(f),We=r(f,"B",{});var wl=v(We);Qe=i(wl,"3."),wl.forEach(e),Ge=i(f," The page numbers as well as search and filter placeholders are "),Ye=r(f,"B",{});var hl=v(Ye);Xe=i(hl,"translated"),hl.forEach(e),Ve=i(f," to Japanese.")},m(f,n){l(f,h,n),l(f,d,n),l(f,R,n),l(f,E,n),p(E,F),l(f,O,n),l(f,B,n),p(B,x),l(f,_,n),l(f,C,n),l(f,w,n),l(f,y,n),p(y,S),l(f,M,n),l(f,k,n),p(k,m),l(f,z,n),l(f,q,n),l(f,L,n),l(f,$,n),p($,se),l(f,X,n),l(f,Y,n),p(Y,ie),l(f,V,n),l(f,re,n),l(f,Q,n),l(f,P,n),p(P,ve),l(f,fe,n),l(f,J,n),p(J,be),l(f,te,n),l(f,G,n),p(G,c),l(f,A,n),l(f,K,n),l(f,ce,n),l(f,Z,n),p(Z,g),l(f,ae,n),l(f,ee,n),p(ee,le),l(f,_e,n),l(f,ue,n),p(ue,oe),l(f,Ee,n),l(f,we,n),l(f,a,n),l(f,D,n),p(D,ne),l(f,me,n),l(f,pe,n),p(pe,he),l(f,Be,n),l(f,ye,n),l(f,b,n),l(f,T,n),p(T,xe),l(f,de,n),l(f,ke,n),p(ke,u),l(f,I,n),l(f,Re,n),l(f,je,n),l(f,Ce,n),l(f,Te,n),l(f,s,n),l(f,j,n),l(f,Oe,n),p(Oe,ze),l(f,Fe,n),l(f,De,n),p(De,Ne),l(f,Ae,n),l(f,Me,n),l(f,Se,n),l(f,Ie,n),p(Ie,He),l(f,Pe,n),l(f,$e,n),p($e,Ue),l(f,qe,n),l(f,Le,n),l(f,Je,n),l(f,We,n),p(We,Qe),l(f,Ge,n),l(f,Ye,n),p(Ye,Xe),l(f,Ve,n)},d(f){f&&e(h),f&&e(d),f&&e(R),f&&e(E),f&&e(O),f&&e(B),f&&e(_),f&&e(C),f&&e(w),f&&e(y),f&&e(M),f&&e(k),f&&e(z),f&&e(q),f&&e(L),f&&e($),f&&e(X),f&&e(Y),f&&e(V),f&&e(re),f&&e(Q),f&&e(P),f&&e(fe),f&&e(J),f&&e(te),f&&e(G),f&&e(A),f&&e(K),f&&e(ce),f&&e(Z),f&&e(ae),f&&e(ee),f&&e(_e),f&&e(ue),f&&e(Ee),f&&e(we),f&&e(a),f&&e(D),f&&e(me),f&&e(pe),f&&e(Be),f&&e(ye),f&&e(b),f&&e(T),f&&e(de),f&&e(ke),f&&e(I),f&&e(Re),f&&e(je),f&&e(Ce),f&&e(Te),f&&e(s),f&&e(j),f&&e(Oe),f&&e(Fe),f&&e(De),f&&e(Ae),f&&e(Me),f&&e(Se),f&&e(Ie),f&&e(Pe),f&&e($e),f&&e(qe),f&&e(Le),f&&e(Je),f&&e(We),f&&e(Ge),f&&e(Ye),f&&e(Ve)}}}function Wl(W){let h,d,R,E,F,O,B,x,_,C,w,y,S,M,k,m,z,q,L,$,se,X,Y,ie,V,re,Q,P,ve,fe,J,be,te,G;return{c(){h=t("Customizations of ptInstructs:"),d=o("br"),R=N(),E=o("b"),F=t("1."),O=N(),B=o("b"),x=t("Column titles"),_=t(" have been customized."),C=o("br"),w=N(),y=o("b"),S=t("2."),M=t(" First name is "),k=o("b"),m=t("not sortable"),z=t("."),q=o("br"),L=N(),$=o("b"),se=t("3."),X=t(" Company has a "),Y=o("b"),ie=t("default filter phrase"),V=t("."),re=o("br"),Q=N(),P=o("b"),ve=t("4."),fe=t(" Department is "),J=o("b"),be=t("not filterable"),te=t("."),G=o("br")},l(c){h=i(c,"Customizations of ptInstructs:"),d=r(c,"BR",{}),R=H(c),E=r(c,"B",{});var A=v(E);F=i(A,"1."),A.forEach(e),O=H(c),B=r(c,"B",{});var K=v(B);x=i(K,"Column titles"),K.forEach(e),_=i(c," have been customized."),C=r(c,"BR",{}),w=H(c),y=r(c,"B",{});var ce=v(y);S=i(ce,"2."),ce.forEach(e),M=i(c," First name is "),k=r(c,"B",{});var Z=v(k);m=i(Z,"not sortable"),Z.forEach(e),z=i(c,"."),q=r(c,"BR",{}),L=H(c),$=r(c,"B",{});var g=v($);se=i(g,"3."),g.forEach(e),X=i(c," Company has a "),Y=r(c,"B",{});var ae=v(Y);ie=i(ae,"default filter phrase"),ae.forEach(e),V=i(c,"."),re=r(c,"BR",{}),Q=H(c),P=r(c,"B",{});var ee=v(P);ve=i(ee,"4."),ee.forEach(e),fe=i(c," Department is "),J=r(c,"B",{});var le=v(J);be=i(le,"not filterable"),le.forEach(e),te=i(c,"."),G=r(c,"BR",{})},m(c,A){l(c,h,A),l(c,d,A),l(c,R,A),l(c,E,A),p(E,F),l(c,O,A),l(c,B,A),p(B,x),l(c,_,A),l(c,C,A),l(c,w,A),l(c,y,A),p(y,S),l(c,M,A),l(c,k,A),p(k,m),l(c,z,A),l(c,q,A),l(c,L,A),l(c,$,A),p($,se),l(c,X,A),l(c,Y,A),p(Y,ie),l(c,V,A),l(c,re,A),l(c,Q,A),l(c,P,A),p(P,ve),l(c,fe,A),l(c,J,A),p(J,be),l(c,te,A),l(c,G,A)},d(c){c&&e(h),c&&e(d),c&&e(R),c&&e(E),c&&e(O),c&&e(B),c&&e(_),c&&e(C),c&&e(w),c&&e(y),c&&e(M),c&&e(k),c&&e(z),c&&e(q),c&&e(L),c&&e($),c&&e(X),c&&e(Y),c&&e(V),c&&e(re),c&&e(Q),c&&e(P),c&&e(fe),c&&e(J),c&&e(te),c&&e(G)}}}function Yl(W){let h,d,R,E,F,O,B,x,_,C,w,y,S,M,k;return{c(){h=t("This is a basic setup with no customizations."),d=o("br"),R=t(`
            ℹ️ Notice that when you sort the `),E=o("b"),F=t("Id"),O=t(" column, the order of the numbers is unusual ("),B=o("code"),x=t("1,10,100,...,2,20,200"),_=t(" instead of "),C=o("code"),w=t("1,2,3,4,5,6,..."),y=t("). This is because by default columns are sorted alphabetically. To sort numbers, dates, and other data types, a "),S=o("b"),M=t("custom sorting"),k=t(" function can be used, as demonstrated in another example."),this.h()},l(m){h=i(m,"This is a basic setup with no customizations."),d=r(m,"BR",{}),R=i(m,`
            ℹ️ Notice that when you sort the `),E=r(m,"B",{});var z=v(E);F=i(z,"Id"),z.forEach(e),O=i(m," column, the order of the numbers is unusual ("),B=r(m,"CODE",{class:!0});var q=v(B);x=i(q,"1,10,100,...,2,20,200"),q.forEach(e),_=i(m," instead of "),C=r(m,"CODE",{class:!0});var L=v(C);w=i(L,"1,2,3,4,5,6,..."),L.forEach(e),y=i(m,"). This is because by default columns are sorted alphabetically. To sort numbers, dates, and other data types, a "),S=r(m,"B",{});var $=v(S);M=i($,"custom sorting"),$.forEach(e),k=i(m," function can be used, as demonstrated in another example."),this.h()},h(){U(B,"class","svelte-1kc9njk"),U(C,"class","svelte-1kc9njk")},m(m,z){l(m,h,z),l(m,d,z),l(m,R,z),l(m,E,z),p(E,F),l(m,O,z),l(m,B,z),p(B,x),l(m,_,z),l(m,C,z),p(C,w),l(m,y,z),l(m,S,z),p(S,M),l(m,k,z)},d(m){m&&e(h),m&&e(d),m&&e(R),m&&e(E),m&&e(O),m&&e(B),m&&e(_),m&&e(C),m&&e(y),m&&e(S),m&&e(k)}}}function Gl(W){let h,d,R=W[0].data.routeIdMatches=new RegExp("^/examples/example([0-9]+)$","g").exec(W[0].route.id??""),E,F,O=Object.entries(W[1]),B=[];for(let _=0;_<O.length;_+=1)B[_]=dl(nl(W,O,_));let x=R&&xl(W);return{c(){h=o("nav");for(let _=0;_<B.length;_+=1)B[_].c();d=N(),x&&x.c(),E=kl(),this.h()},l(_){h=r(_,"NAV",{class:!0});var C=v(h);for(let w=0;w<B.length;w+=1)B[w].l(C);C.forEach(e),d=H(_),x&&x.l(_),E=kl(),this.h()},h(){U(h,"class","svelte-1kc9njk")},m(_,C){l(_,h,C);for(let w=0;w<B.length;w+=1)B[w].m(h,null);l(_,d,C),x&&x.m(_,C),l(_,E,C),F=!0},p(_,[C]){if(C&3){O=Object.entries(_[1]);let w;for(w=0;w<O.length;w+=1){const y=nl(_,O,w);B[w]?B[w].p(y,C):(B[w]=dl(y),B[w].c(),B[w].m(h,null))}for(;w<B.length;w+=1)B[w].d(1);B.length=O.length}C&1&&(R=_[0].data.routeIdMatches=new RegExp("^/examples/example([0-9]+)$","g").exec(_[0].route.id??"")),R?x?(x.p(_,C),C&1&&Ke(x,1)):(x=xl(_),x.c(),Ke(x,1),x.m(E.parentNode,E)):x&&(Ml(),Ze(x,1,1,()=>{x=null}),Ol())},i(_){F||(Ke(x),F=!0)},o(_){Ze(x),F=!1},d(_){_&&e(h),jl(B,_),_&&e(d),x&&x.d(_),_&&e(E)}}}function Vl(W,h,d){let R;zl(W,Sl,B=>d(0,R=B));let{$$slots:E={},$$scope:F}=h,O={1:"Basic",2:"Custom Instructs",3:"Custom Options",4:"Custom Slots",5:"Styling",6:"Remote Data",7:"Editing & Controls",8:"Filtering & Highlighting",9:"Custom Sorting",10:"Custom Filtering"};return W.$$set=B=>{"$$scope"in B&&d(2,F=B.$$scope)},[R,O,F,E]}class Xl extends Rl{constructor(h){super(),Cl(this,h,Vl,Gl,Tl,{})}}export{Xl as default};