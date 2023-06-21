import{p as N,a as P,_ as B,b as D,c as S}from"./content-bfe7958f.js";import{d as V,n as H,a2 as F,o as l,c as k,U as i,a6 as I,a0 as s,a as r,F as A,a3 as E,a1 as f,Z as d,e as _,L as m,P as c,N as p}from"./@vue-b8d06722.js";import{u as R}from"./vuex-613b371d.js";import{u as U}from"./vue-router-8af5a3a6.js";import{b as Z}from"./formatTime-000dbebb.js";import{a as ne}from"./copy-to-clipboard-1dd3075d.js";import{i as oe,j as G,l as J,m as K}from"./@vicons-7ee3dafd.js";import{o as Q,M as W,j as X,e as ie,O as le,a as Y,L as ee}from"./naive-ui-374a973f.js";const ue={class:"post-item"},re={class:"nickname-wrap"},ce={class:"username-wrap"},pe={class:"timestamp-mobile"},_e={class:"item-header-extra"},me=["innerHTML"],de={class:"opt-item"},ve={class:"opt-item"},Oe=V({__name:"mobile-post-item",props:{post:{}},setup(q){const T=q,h=U(),L=R(),e=H(()=>[{label:"复制链接",key:"copyTweetLink"}]),x=async o=>{switch(o){case"copyTweetLink":ne(`${window.location.origin}/#/post?id=${t.value.id}`),window.$message.success("链接已复制到剪贴板");break}},t=H(()=>{let o=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},T.post);return o.contents.map(n=>{(+n.type==1||+n.type==2)&&o.texts.push(n),+n.type==3&&o.imgs.push(n),+n.type==4&&o.videos.push(n),+n.type==6&&o.links.push(n),+n.type==7&&o.attachments.push(n),+n.type==8&&o.charge_attachments.push(n)}),o}),u=o=>{h.push({name:"post",query:{id:o}})},a=(o,n)=>{if(o.target.dataset.detail){const v=o.target.dataset.detail.split(":");if(v.length===2){L.commit("refresh"),v[0]==="tag"?h.push({name:"home",query:{q:v[1],t:"tag"}}):h.push({name:"user",query:{username:v[1]}});return}}u(n)};return(o,n)=>{const v=Q,b=F("router-link"),w=W,g=X,M=ie,$=le,z=P,O=B,y=D,j=S,te=Y,se=ee;return l(),k("div",ue,[i(se,{"content-indented":""},I({avatar:s(()=>[i(v,{round:"",size:30,src:t.value.user.avatar},null,8,["src"])]),header:s(()=>[r("span",re,[i(b,{onClick:n[0]||(n[0]=f(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:t.value.user.username}}},{default:s(()=>[_(m(t.value.user.nickname),1)]),_:1},8,["to"])]),r("span",ce," @"+m(t.value.user.username),1),t.value.is_top?(l(),c(w,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:s(()=>[_(" 置顶 ")]),_:1})):p("",!0),t.value.visibility==1?(l(),c(w,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:s(()=>[_(" 私密 ")]),_:1})):p("",!0),t.value.visibility==2?(l(),c(w,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:s(()=>[_(" 好友可见 ")]),_:1})):p("",!0),r("div",null,[r("span",pe,m(d(Z)(t.value.created_on))+" "+m(t.value.ip_loc),1)])]),"header-extra":s(()=>[r("div",_e,[i($,{placement:"bottom-end",trigger:"click",size:"small",options:e.value,onSelect:x},{default:s(()=>[i(M,{quaternary:"",circle:""},{icon:s(()=>[i(g,null,{default:s(()=>[i(d(oe))]),_:1})]),_:1})]),_:1},8,["options"])])]),footer:s(()=>[t.value.attachments.length>0?(l(),c(z,{key:0,attachments:t.value.attachments},null,8,["attachments"])):p("",!0),t.value.charge_attachments.length>0?(l(),c(z,{key:1,attachments:t.value.charge_attachments,price:t.value.attachment_price},null,8,["attachments","price"])):p("",!0),t.value.imgs.length>0?(l(),c(O,{key:2,imgs:t.value.imgs},null,8,["imgs"])):p("",!0),t.value.videos.length>0?(l(),c(y,{key:3,videos:t.value.videos},null,8,["videos"])):p("",!0),t.value.links.length>0?(l(),c(j,{key:4,links:t.value.links},null,8,["links"])):p("",!0)]),action:s(()=>[i(te,{justify:"space-between"},{default:s(()=>[r("div",de,[i(g,{size:"18",class:"opt-item-icon"},{default:s(()=>[i(d(G))]),_:1}),_(" "+m(t.value.upvote_count),1)]),r("div",{class:"opt-item",onClick:n[3]||(n[3]=f(C=>u(t.value.id),["stop"]))},[i(g,{size:"18",class:"opt-item-icon"},{default:s(()=>[i(d(J))]),_:1}),_(" "+m(t.value.comment_count),1)]),r("div",ve,[i(g,{size:"18",class:"opt-item-icon"},{default:s(()=>[i(d(K))]),_:1}),_(" "+m(t.value.collection_count),1)])]),_:1})]),_:2},[t.value.texts.length>0?{name:"description",fn:s(()=>[r("div",{onClick:n[2]||(n[2]=C=>u(t.value.id))},[(l(!0),k(A,null,E(t.value.texts,C=>(l(),k("span",{key:C.id,class:"post-text",onClick:n[1]||(n[1]=f(ae=>a(ae,t.value.id),["stop"])),innerHTML:d(N)(C.content).content},null,8,me))),128))])]),key:"0"}:void 0]),1024)])}}});const he={class:"nickname-wrap"},ge={class:"username-wrap"},ye={class:"item-header-extra"},ke={class:"timestamp"},fe=["innerHTML"],xe={class:"opt-item"},we={class:"opt-item"},je=V({__name:"post-item",props:{post:{}},setup(q){const T=q,h=U(),L=R(),e=H(()=>{let u=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},T.post);return u.contents.map(a=>{(+a.type==1||+a.type==2)&&u.texts.push(a),+a.type==3&&u.imgs.push(a),+a.type==4&&u.videos.push(a),+a.type==6&&u.links.push(a),+a.type==7&&u.attachments.push(a),+a.type==8&&u.charge_attachments.push(a)}),u}),x=u=>{h.push({name:"post",query:{id:u}})},t=(u,a)=>{if(u.target.dataset.detail){const o=u.target.dataset.detail.split(":");if(o.length===2){L.commit("refresh"),o[0]==="tag"?h.push({name:"home",query:{q:o[1],t:"tag"}}):h.push({name:"user",query:{username:o[1]}});return}}x(a)};return(u,a)=>{const o=Q,n=F("router-link"),v=W,b=P,w=B,g=D,M=S,$=X,z=Y,O=ee;return l(),k("div",{class:"post-item",onClick:a[3]||(a[3]=y=>x(e.value.id))},[i(O,{"content-indented":""},I({avatar:s(()=>[i(o,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:s(()=>[r("span",he,[i(n,{onClick:a[0]||(a[0]=f(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:e.value.user.username}}},{default:s(()=>[_(m(e.value.user.nickname),1)]),_:1},8,["to"])]),r("span",ge," @"+m(e.value.user.username),1),e.value.is_top?(l(),c(v,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:s(()=>[_(" 置顶 ")]),_:1})):p("",!0),e.value.visibility==1?(l(),c(v,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:s(()=>[_(" 私密 ")]),_:1})):p("",!0),e.value.visibility==2?(l(),c(v,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:s(()=>[_(" 好友可见 ")]),_:1})):p("",!0)]),"header-extra":s(()=>[r("div",ye,[r("span",ke,m(e.value.ip_loc?e.value.ip_loc+" · ":e.value.ip_loc)+" "+m(d(Z)(e.value.created_on)),1)])]),footer:s(()=>[e.value.attachments.length>0?(l(),c(b,{key:0,attachments:e.value.attachments},null,8,["attachments"])):p("",!0),e.value.charge_attachments.length>0?(l(),c(b,{key:1,attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"])):p("",!0),e.value.imgs.length>0?(l(),c(w,{key:2,imgs:e.value.imgs},null,8,["imgs"])):p("",!0),e.value.videos.length>0?(l(),c(g,{key:3,videos:e.value.videos},null,8,["videos"])):p("",!0),e.value.links.length>0?(l(),c(M,{key:4,links:e.value.links},null,8,["links"])):p("",!0)]),action:s(()=>[i(z,{justify:"space-between"},{default:s(()=>[r("div",xe,[i($,{size:"18",class:"opt-item-icon"},{default:s(()=>[i(d(G))]),_:1}),_(" "+m(e.value.upvote_count),1)]),r("div",{class:"opt-item",onClick:a[2]||(a[2]=f(y=>x(e.value.id),["stop"]))},[i($,{size:"18",class:"opt-item-icon"},{default:s(()=>[i(d(J))]),_:1}),_(" "+m(e.value.comment_count),1)]),r("div",we,[i($,{size:"18",class:"opt-item-icon"},{default:s(()=>[i(d(K))]),_:1}),_(" "+m(e.value.collection_count),1)])]),_:1})]),_:2},[e.value.texts.length>0?{name:"description",fn:s(()=>[(l(!0),k(A,null,E(e.value.texts,y=>(l(),k("span",{key:y.id,class:"post-text",onClick:a[1]||(a[1]=f(j=>t(j,e.value.id),["stop"])),innerHTML:d(N)(y.content).content},null,8,fe))),128))]),key:"0"}:void 0]),1024)])}}});export{je as _,Oe as a};
