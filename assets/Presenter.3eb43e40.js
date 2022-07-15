import{o as u,c as v,a as e,r as y,u as A,b as h,d as S,i as C,e as M,n as x,t as z,f as $,g as f,h as s,_ as P,j as R,k as L,l as H,m as I,p as D,q as j,s as E,v as F,w as U,x as m,y as T,z as V,A as B,B as W,C as q,D as k,E as O,F as Y,G as N,H as Z,I as G,J,K,L as Q,M as X,N as ee,O as te,P as se,S as oe,Q as ne,R as le,T as ae,U as ie,V as ce,W as re}from"./index.94857f3f.js";import ue from"./DrawingControls.2d4a93fc.js";const de={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[_e];function pe(t,n){return u(),v("svg",de,me)}var ve={name:"carbon-renew",render:pe};const fe={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},he=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),ge=[he,xe];function we(t,n){return u(),v("svg",fe,ge)}var ke={name:"carbon-time",render:we},ye="/vitify-slide/assets/logo-title-horizontal.96c3c915.png";function $e(){const t=y(Date.now()),n=A({interval:1e3}),d=h(()=>{const o=(n.value-t.value)/1e3,a=Math.floor(o%60).toString().padStart(2,"0");return`${Math.floor(o/60).toString().padStart(2,"0")}:${a}`});function i(){t.value=n.value}return{timer:d,resetTimer:i}}const Se=["innerHTML"],Ce=["textContent"],Me=S({__name:"NoteViewer",props:{class:null,noteHtml:null,note:null},emits:["click"],setup(t){const n=t;return C(M),(d,i)=>t.noteHtml?(u(),v("div",{key:0,class:x(["prose overflow-auto outline-none",n.class]),onClick:i[0]||(i[0]=o=>d.$emit("click")),innerHTML:t.noteHtml},null,10,Se)):(u(),v("div",{key:1,class:x(["prose overflow-auto outline-none",n.class]),onClick:i[1]||(i[1]=o=>d.$emit("click")),textContent:z(t.note)},null,10,Ce))}}),be=S({__name:"NoteStatic",props:{class:null},setup(t){const n=t;C(M);const d=h(()=>{var o,a,l;return(l=(a=(o=$.value)==null?void 0:o.meta)==null?void 0:a.slide)==null?void 0:l.note}),i=h(()=>{var o,a,l;return(l=(a=(o=$.value)==null?void 0:o.meta)==null?void 0:a.slide)==null?void 0:l.notesHTML});return(o,a)=>(u(),f(Me,{class:x(n.class),note:s(d),"note-html":s(i)},null,8,["class","note","note-html"]))}});const g=t=>(ce("data-v-68130f49"),t=t(),re(),t),He={class:"bg-main h-full slidev-presenter"},Te={class:"grid-container"},Ve={class:"grid-section top flex"},Be=g(()=>e("img",{src:ye,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Ne=g(()=>e("div",{class:"flex-auto"},null,-1)),ze={class:"text-2xl pl-2 pr-6 my-auto"},Ae=g(()=>e("div",{class:"context"}," current ",-1)),Pe={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Re=g(()=>e("div",{class:"context"}," next ",-1)),Le={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},De={class:"progress-bar"},je=S({__name:"Presenter",setup(t){C(M);const n=y();R(),L(n);const d=H.titleTemplate.replace("%s",H.title||"Slidev");I({title:`Presenter - ${d}`});const{timer:i,resetTimer:o}=$e(),a=y([]),l=h(()=>N.value<Z.value?{route:$.value,clicks:N.value+1}:G.value?{route:J.value,clicks:0}:null);return D(()=>{const b=n.value.querySelector("#slide-content"),r=j(E()),w=F();U(()=>{if(!w.value||Q.value||!X.value)return;const _=b.getBoundingClientRect(),c=(r.x-_.left)/_.width*100,p=(r.y-_.top)/_.height*100;if(!(c<0||c>100||p<0||p>100))return{x:c,y:p}},_=>{K.cursor=_})}),(b,r)=>{const w=ke,_=ve;return u(),v(Y,null,[e("div",He,[e("div",Te,[e("div",Ve,[Be,Ne,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...c)=>s(o)&&s(o)(...c))},[m(w,{class:"absolute"}),m(_,{class:"absolute opacity-0"})]),e("div",ze,z(s(i)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:T(s(ee))},[m(B,{key:"main",class:"h-full w-full"},{default:V(()=>[m(te,{context:"presenter"})]),_:1}),Ae],4),e("div",Pe,[s(l)?(u(),f(B,{key:"next",class:"h-full w-full"},{default:V(()=>{var c;return[m(s(oe),{is:(c=s(l).route)==null?void 0:c.component,"clicks-elements":a.value,"onUpdate:clicks-elements":r[1]||(r[1]=p=>a.value=p),clicks:s(l).clicks,"clicks-disabled":!1,class:x(s(se)(s(l).route)),route:s(l).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):W("v-if",!0),Re]),e("div",Le,[(u(),f(be,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[m(ne,{persist:!0})]),(u(),f(ue,{key:0}))]),e("div",De,[e("div",{class:"progress h-2px bg-primary transition-all",style:T({width:`${(s(le)-1)/(s(ae)-1)*100}%`})},null,4)])]),m(ie),m(O,{modelValue:s(k),"onUpdate:modelValue":r[2]||(r[2]=c=>q(k)?k.value=c:null)},null,8,["modelValue"])],64)}}});var Ue=P(je,[["__scopeId","data-v-68130f49"]]);export{Ue as default};
