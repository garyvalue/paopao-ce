import{d as h,o as e,c as r,F as a,a2 as m,L as s,$ as o,Y as c,a as j,M as $,a0 as k,K as _,O as g,r as C,e as B,s as b}from"./@vue-ca177dbe.js";import{u as D,v as L}from"./@vicons-6d35273b.js";import{j as I,V as N,W as V,m as M,X as z,e as F,i as O}from"./naive-ui-2035804c.js";import{_ as A,L as T,M as U}from"./index-71354138.js";import{N as P}from"./nonesir-video-db921567.js";const R={class:"link-wrap"},K=["href"],S={class:"link-txt"},W=h({__name:"post-link",props:{links:{default:()=>[]}},setup(y){const l=y;return(p,u)=>{const x=I;return e(),r("div",R,[(e(!0),r(a,null,m(l.links,n=>(e(),r("div",{class:"link-item",key:n.id},[s(x,{class:"hash-link"},{default:o(()=>[s(c(D))]),_:1}),j("a",{href:n.content,class:"hash-link",target:"_blank",onClick:u[0]||(u[0]=k(()=>{},["stop"]))},[j("span",S,$(n.content),1)],8,K)]))),128))])}}});const nt=A(W,[["__scopeId","data-v-6c4d1eb6"]]),X={key:0},ot=h({__name:"post-video",props:{videos:{default:()=>[]},full:{type:Boolean,default:!1}},setup(y){const l=y;return(p,u)=>{const x=N,n=V;return l.videos.length>0?(e(),r("div",X,[s(n,{"x-gap":4,"y-gap":4,cols:y.full?1:5},{default:o(()=>[s(x,{span:y.full?1:3},{default:o(()=>[(e(!0),r(a,null,m(l.videos,v=>(e(),_(c(P),{onClick:u[0]||(u[0]=k(()=>{},["stop"])),key:v.id,src:v.content,colors:["#18a058","#2aca75"],hoverable:!0,theme:"gradient"},null,8,["src"]))),128))]),_:1},8,["span"])]),_:1},8,["cols"])])):g("",!0)}}}),Y={class:"images-wrap"},st=h({__name:"post-image",props:{imgs:{default:()=>[]}},setup(y){const l=y,p="https://paopao-assets.oss-cn-shanghai.aliyuncs.com/public/404.png",u="?x-oss-process=image/resize,m_fill,w_300,h_300,limit_0/auto-orient,1/format,png";return(x,n)=>{const v=M,d=N,f=V,w=z;return e(),r("div",Y,[[1].includes(l.imgs.length)?(e(),_(w,{key:0},{default:o(()=>[s(f,{"x-gap":4,"y-gap":4,cols:2},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,t=>(e(),_(d,{key:t.id},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[0]||(n[0]=k(()=>{},["stop"])),class:"post-img x1","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024))),128))]),_:1})]),_:1})):g("",!0),[2,3].includes(l.imgs.length)?(e(),_(w,{key:1},{default:o(()=>[s(f,{"x-gap":4,"y-gap":4,cols:3},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,t=>(e(),_(d,{key:t.id},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[1]||(n[1]=k(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024))),128))]),_:1})]),_:1})):g("",!0),[4].includes(l.imgs.length)?(e(),_(w,{key:2},{default:o(()=>[s(f,{"x-gap":4,"y-gap":4,cols:4},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,t=>(e(),_(d,{key:t.id},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[2]||(n[2]=k(()=>{},["stop"])),class:"post-img x3","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024))),128))]),_:1})]),_:1})):g("",!0),[5].includes(l.imgs.length)?(e(),_(w,{key:3},{default:o(()=>[s(f,{"x-gap":4,"y-gap":4,cols:3},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,(t,i)=>(e(),r(a,{key:t.id},[i<3?(e(),_(d,{key:0},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[3]||(n[3]=k(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):g("",!0)],64))),128))]),_:1}),s(f,{"x-gap":4,"y-gap":4,cols:2,style:{"margin-top":"4px"}},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,(t,i)=>(e(),r(a,{key:t.id},[i>=3?(e(),_(d,{key:0},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[4]||(n[4]=k(()=>{},["stop"])),class:"post-img x1","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):g("",!0)],64))),128))]),_:1})]),_:1})):g("",!0),[6].includes(l.imgs.length)?(e(),_(w,{key:4},{default:o(()=>[s(f,{"x-gap":4,"y-gap":4,cols:3},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,(t,i)=>(e(),r(a,{key:t.id},[i<3?(e(),_(d,{key:0},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[5]||(n[5]=k(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):g("",!0)],64))),128))]),_:1}),s(f,{"x-gap":4,"y-gap":4,cols:3,style:{"margin-top":"4px"}},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,(t,i)=>(e(),r(a,{key:t.id},[i>=3?(e(),_(d,{key:0},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[6]||(n[6]=k(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):g("",!0)],64))),128))]),_:1})]),_:1})):g("",!0),l.imgs.length===7?(e(),_(w,{key:5},{default:o(()=>[s(f,{"x-gap":4,"y-gap":4,cols:4},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,(t,i)=>(e(),r(a,null,[i<4?(e(),_(d,{key:t.id},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[7]||(n[7]=k(()=>{},["stop"])),class:"post-img x3","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):g("",!0)],64))),256))]),_:1}),s(f,{"x-gap":4,"y-gap":4,cols:3,style:{"margin-top":"4px"}},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,(t,i)=>(e(),r(a,null,[i>=4?(e(),_(d,{key:t.id},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[8]||(n[8]=k(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):g("",!0)],64))),256))]),_:1})]),_:1})):g("",!0),l.imgs.length===8?(e(),_(w,{key:6},{default:o(()=>[s(f,{"x-gap":4,"y-gap":4,cols:4},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,(t,i)=>(e(),r(a,null,[i<4?(e(),_(d,{key:t.id},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[9]||(n[9]=k(()=>{},["stop"])),class:"post-img x3","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):g("",!0)],64))),256))]),_:1}),s(f,{"x-gap":4,"y-gap":4,cols:4,style:{"margin-top":"4px"}},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,(t,i)=>(e(),r(a,null,[i>=4?(e(),_(d,{key:t.id},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[10]||(n[10]=k(()=>{},["stop"])),class:"post-img x3","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):g("",!0)],64))),256))]),_:1})]),_:1})):g("",!0),l.imgs.length===9?(e(),_(w,{key:7},{default:o(()=>[s(f,{"x-gap":4,"y-gap":4,cols:3},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,(t,i)=>(e(),r(a,null,[i<3?(e(),_(d,{key:t.id},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[11]||(n[11]=k(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):g("",!0)],64))),256))]),_:1}),s(f,{"x-gap":4,"y-gap":4,cols:3,style:{"margin-top":"4px"}},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,(t,i)=>(e(),r(a,null,[i>=3&&i<6?(e(),_(d,{key:t.id},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[12]||(n[12]=k(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):g("",!0)],64))),256))]),_:1}),s(f,{"x-gap":4,"y-gap":4,cols:3,style:{"margin-top":"4px"}},{default:o(()=>[(e(!0),r(a,null,m(l.imgs,(t,i)=>(e(),r(a,null,[i>=6?(e(),_(d,{key:t.id},{default:o(()=>[s(v,{onError:()=>t.content=c(p),onClick:n[13]||(n[13]=k(()=>{},["stop"])),class:"post-img x2","object-fit":"cover",src:t.content+c(u),"preview-src":t.content},null,8,["onError","src","preview-src"])]),_:2},1024)):g("",!0)],64))),256))]),_:1})]),_:1})):g("",!0)])}}});const Z={class:"attachment-wrap"},q=h({__name:"post-attachment",props:{attachments:{default:()=>[]},price:{default:0}},setup(y){const l=y,p=C(!1),u=C(""),x=C(0),n=d=>{p.value=!0,x.value=d.id,u.value="这是一个免费附件，您可以直接下载？",d.type===8&&(u.value=()=>b("div",{},[b("p",{},"这是一个收费附件，下载将收取"+(l.price/100).toFixed(2)+"元")]),T({id:x.value}).then(f=>{f.paid&&(u.value=()=>b("div",{},[b("p",{},"此次下载您已支付或无需付费，请确认下载")]))}).catch(f=>{p.value=!1}))},v=()=>{U({id:x.value}).then(d=>{window.open(d.signed_url.replace("http://","https://"),"_blank")}).catch(d=>{console.log(d)})};return(d,f)=>{const w=I,t=F,i=O;return e(),r("div",Z,[(e(!0),r(a,null,m(y.attachments,E=>(e(),r("div",{class:"attach-item",key:E.id},[s(t,{onClick:k(G=>n(E),["stop"]),type:"primary",size:"tiny",dashed:""},{icon:o(()=>[s(w,null,{default:o(()=>[s(c(L))]),_:1})]),default:o(()=>[B(" "+$(E.type===8?"收费":"免费")+"附件 ",1)]),_:2},1032,["onClick"])]))),128)),s(i,{show:p.value,"onUpdate:show":f[0]||(f[0]=E=>p.value=E),"mask-closable":!1,preset:"dialog",title:"下载提示",content:u.value,"positive-text":"确认下载","negative-text":"取消","icon-placement":"top",onPositiveClick:v},null,8,["show","content"])])}}});const rt=A(q,[["__scopeId","data-v-22563084"]]),lt=y=>{const l=[],p=[];var u=/(#|＃)([^#@\s])+?\s+?/g,x=/@([a-zA-Z0-9])+?\s+?/g;return y=y.replace(/<[^>]*?>/gi,"").replace(/(.*?)<\/[^>]*?>/gi,"").replace(u,n=>(l.push(n.substr(1).trim()),'<a class="hash-link" data-detail="tag:'+encodeURIComponent(n.substr(1).trim())+'">'+n.trim()+"</a> ")).replace(x,n=>(p.push(n.substr(1).trim()),'<a class="hash-link" data-detail="user:'+encodeURIComponent(n.substr(1).trim())+'">'+n.trim()+"</a> ")),{content:y,tags:l,users:p}};export{st as _,rt as a,ot as b,nt as c,lt as p};
