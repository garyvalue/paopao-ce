import{_ as Te,a as qe}from"./post-item.vue_vue_type_style_index_0_lang-f7f6062b.js";import{_ as xe}from"./post-skeleton-3fdfd3d1.js";import{d as Y,r as i,j as ee,o as c,c as v,Z as $,a as x,U as a,a0 as s,P as S,N as T,a1 as Q,e as L,L as X,F as K,a3 as Z,n as Ie,w as Ue}from"./@vue-b8d06722.js";import{u as te}from"./vuex-613b371d.js";import{l as W}from"./lodash-94eb5868.js";import{g as ze,a as Re,c as Ae,b as Ee,_ as Pe}from"./index-43cab287.js";import{p as Le}from"./content-bfe7958f.js";import{V as U,P as V}from"./IEnum-a180d93e.js";import{I as Se,V as Ne,A as Ve,d as Fe,E as Be}from"./@vicons-7ee3dafd.js";import{o as Me,v as Oe,j as je,e as De,w as He,x as Ge,y as Ke,z as Ze,A as Je,B as Qe,C as Xe,a as We,D as Ye,E as et,F as tt,G as at,H as ot,I as nt}from"./naive-ui-374a973f.js";import{_ as st}from"./main-nav.vue_vue_type_style_index_0_lang-6c037963.js";import{b as lt,u as it}from"./vue-router-8af5a3a6.js";import"./formatTime-000dbebb.js";import"./moment-b7869f98.js";import"./copy-to-clipboard-1dd3075d.js";import"./toggle-selection-93f4ad84.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-556279b6.js";import"./evtd-b614532e.js";import"./@css-render-4f82e6dd.js";import"./vooks-423a5f30.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./paopao-video-player-b4739fc7.js";const rt=F=>{const q=new FileReader,r=_=>["application/zip","application/x-zip","application/octet-stream","application/x-zip-compressed"].includes(_),I=()=>{const _=new Uint8Array(q.result).subarray(0,4);let d="";for(let p=0;p<_.length;p++)d+=_[p].toString(16);switch(d){case"504b0304":case"504b0506":case"504b0708":return r("application/zip");case"504b030414":return r("application/x-zip-compressed");case"504b0508":return r("application/x-zip");case"504b5370":return r("application/octet-stream");default:return!1}};return new Promise((_,d)=>{q.onloadend=()=>{const p=F.type;_(p===""||p==="application/octet-stream"?I():r(p))},q.readAsArrayBuffer(F.slice(0,4))})},ut={key:0,class:"compose-wrap"},ct={class:"compose-line"},pt={class:"compose-user"},_t={class:"compose-line compose-options"},dt={class:"attachment"},mt={class:"submit-wrap"},vt={class:"attachment-list-wrap"},gt={key:0,class:"attachment-price-wrap"},ft=x("span",null," 附件价格￥",-1),yt={key:0,class:"eye-wrap"},ht={key:1,class:"link-wrap"},wt={key:1,class:"compose-wrap"},bt=x("div",{class:"login-wrap"},[x("span",{class:"login-banner"}," 登录后，精彩更多")],-1),kt={key:0,class:"login-only-wrap"},Ct={key:1,class:"login-wrap"},$t=Y({__name:"compose",emits:["post-success"],setup(F,{emit:q}){const r=te(),I=i([]),_=i(!1),d=i(!1),p=i(!1),b=i(!1),w=i(""),z=i([]),E=i(),N=i(0),f=i("public/image"),u=i([]),h=i([]),k=i([]),y=i([]),C=i(U.FRIEND),R=i(U.FRIEND),M=[{value:U.PUBLIC,label:"公开"},{value:U.PRIVATE,label:"私密"},{value:U.FRIEND,label:"好友可见"}],P=+"300",B=i("true".toLowerCase()==="true"),O=i("true".toLowerCase()==="true"),j=i("true".toLowerCase()==="true"),A=i("false".toLowerCase()==="true"),ae=i("true".toLowerCase()==="true"),oe="/v1/attachment",J=i(),ne=()=>{p.value=!p.value,p.value&&b.value&&(b.value=!1)},se=()=>{b.value=!b.value,b.value&&p.value&&(p.value=!1)},le=W.debounce(t=>{ze({k:t}).then(e=>{let n=[];e.suggest.map(o=>{n.push({label:o,value:o})}),I.value=n,_.value=!1}).catch(e=>{_.value=!1})},200),ie=W.debounce(t=>{Re({k:t}).then(e=>{let n=[];e.suggest.map(o=>{n.push({label:o,value:o})}),I.value=n,_.value=!1}).catch(e=>{_.value=!1})},200),re=(t,e)=>{_.value||(_.value=!0,e==="@"?le(t):ie(t))},ue=t=>{t.length>P?w.value=t.substring(0,P):w.value=t},D=t=>{f.value=t},ce=t=>{for(let l=0;l<t.length;l++){var e=t[l].name,n=e.split(".").slice(0,-1).join("."),o=e.split(".").pop();n.length>30&&(t[l].name=n.substring(0,18)+"..."+n.substring(n.length-9)+"."+o)}u.value=t},pe=async t=>{var e,n,o,l,g;return f.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((e=t.file.file)==null?void 0:e.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):f.value==="image"&&((n=t.file.file)==null?void 0:n.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):f.value==="public/video"&&!["video/mp4","video/quicktime"].includes((o=t.file.file)==null?void 0:o.type)?(window.$message.warning("视频仅允许 mp4/mov 格式"),!1):f.value==="public/video"&&((l=t.file.file)==null?void 0:l.size)>104857600?(window.$message.warning("视频大小不能超过100MB"),!1):f.value==="attachment"&&!await rt(t.file.file)?(window.$message.warning("附件仅允许 zip 格式"),!1):f.value==="attachment"&&((g=t.file.file)==null?void 0:g.size)>104857600?(window.$message.warning("附件大小不能超过100MB"),!1):!0},_e=({file:t,event:e})=>{var n;try{let o=JSON.parse((n=e.target)==null?void 0:n.response);o.code===0&&(f.value==="public/image"&&h.value.push({id:t.id,content:o.data.content}),f.value==="public/video"&&k.value.push({id:t.id,content:o.data.content}),f.value==="attachment"&&y.value.push({id:t.id,content:o.data.content}))}catch{window.$message.error("上传失败")}},de=({file:t,event:e})=>{var n;try{let o=JSON.parse((n=e.target)==null?void 0:n.response);if(o.code!==0){let l=o.msg||"上传失败";o.details&&o.details.length>0&&o.details.map(g=>{l+=":"+g}),window.$message.error(l)}}catch{window.$message.error("上传失败")}},me=({file:t})=>{let e=h.value.findIndex(n=>n.id===t.id);e>-1&&h.value.splice(e,1),e=k.value.findIndex(n=>n.id===t.id),e>-1&&k.value.splice(e,1),e=y.value.findIndex(n=>n.id===t.id),e>-1&&y.value.splice(e,1)},ve=()=>{if(w.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{tags:t,users:e}=Le(w.value);const n=[];let o=100;n.push({content:w.value,type:V.TEXT,sort:o}),h.value.map(l=>{o++,n.push({content:l.content,type:V.IMAGEURL,sort:o})}),k.value.map(l=>{o++,n.push({content:l.content,type:V.VIDEOURL,sort:o})}),y.value.map(l=>{o++,n.push({content:l.content,type:V.ATTACHMENT,sort:o})}),z.value.length>0&&z.value.map(l=>{o++,n.push({content:l,type:V.LINKURL,sort:o})}),d.value=!0,Ae({contents:n,tags:Array.from(new Set(t)),users:Array.from(new Set(e)),attachment_price:+N.value*100,visibility:C.value}).then(l=>{var g;window.$message.success("发布成功"),d.value=!1,q("post-success",l),p.value=!1,b.value=!1,(g=E.value)==null||g.clear(),u.value=[],w.value="",z.value=[],h.value=[],k.value=[],y.value=[],C.value=R.value}).catch(l=>{d.value=!1})},H=t=>{r.commit("triggerAuth",!0),r.commit("triggerAuthKey",t)};return ee(()=>{"friend".toLowerCase()==="friend"?R.value=U.FRIEND:"friend".toLowerCase()==="public"?R.value=U.PUBLIC:R.value=U.PRIVATE,C.value=R.value,J.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(t,e)=>{const n=Me,o=Oe,l=je,g=De,G=He,ge=Ge,fe=Ke,ye=Ze,he=Je,we=Qe,be=Xe,ke=We,Ce=Ye,$e=et;return c(),v("div",null,[$(r).state.userInfo.id>0?(c(),v("div",ut,[x("div",ct,[x("div",pt,[a(n,{round:"",size:30,src:$(r).state.userInfo.avatar},null,8,["src"])]),a(o,{type:"textarea",size:"large",autosize:"",bordered:!1,loading:_.value,value:w.value,prefix:["@","#"],options:I.value,onSearch:re,"onUpdate:value":ue,placeholder:"说说您的新鲜事..."},null,8,["loading","value","options"])]),a(we,{ref_key:"uploadRef",ref:E,abstract:"","list-type":"image",multiple:!0,max:9,action:oe,headers:{Authorization:J.value},data:{type:f.value},"file-list":u.value,onBeforeUpload:pe,onFinish:_e,onError:de,onRemove:me,"onUpdate:fileList":ce},{default:s(()=>[x("div",_t,[x("div",dt,[a(G,{abstract:""},{default:s(({handleClick:m})=>[a(g,{disabled:u.value.length>0&&f.value==="public/video"||u.value.length===9,onClick:()=>{D("public/image"),m()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[a(l,{size:"20",color:"var(--primary-color)"},{default:s(()=>[a($(Se))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),O.value?(c(),S(G,{key:0,abstract:""},{default:s(({handleClick:m})=>[a(g,{disabled:u.value.length>0&&f.value!=="public/video"||u.value.length===9,onClick:()=>{D("public/video"),m()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[a(l,{size:"20",color:"var(--primary-color)"},{default:s(()=>[a($(Ne))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):T("",!0),j.value?(c(),S(G,{key:1,abstract:""},{default:s(({handleClick:m})=>[a(g,{disabled:u.value.length>0&&f.value==="public/video"||u.value.length===9,onClick:()=>{D("attachment"),m()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[a(l,{size:"20",color:"var(--primary-color)"},{default:s(()=>[a($(Ve))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):T("",!0),a(g,{quaternary:"",circle:"",type:"primary",onClick:Q(ne,["stop"])},{icon:s(()=>[a(l,{size:"20",color:"var(--primary-color)"},{default:s(()=>[a($(Fe))]),_:1})]),_:1},8,["onClick"]),ae.value?(c(),S(g,{key:2,quaternary:"",circle:"",type:"primary",onClick:Q(se,["stop"])},{icon:s(()=>[a(l,{size:"20",color:"var(--primary-color)"},{default:s(()=>[a($(Be))]),_:1})]),_:1},8,["onClick"])):T("",!0)]),x("div",mt,[a(fe,{trigger:"hover",placement:"bottom"},{trigger:s(()=>[a(ge,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:w.value.length/$(P)*100},null,8,["percentage"])]),default:s(()=>[L(" "+X(w.value.length)+" / "+X($(P)),1)]),_:1}),a(g,{loading:d.value,onClick:ve,type:"primary",secondary:"",round:""},{default:s(()=>[L(" 发布 ")]),_:1},8,["loading"])])]),x("div",vt,[a(ye),y.value.length>0?(c(),v("div",gt,[A.value?(c(),S(he,{key:0,value:N.value,"onUpdate:value":e[0]||(e[0]=m=>N.value=m),min:0,max:1e5,placeholder:"请输入附件价格，0为免费附件"},{prefix:s(()=>[ft]),_:1},8,["value"])):T("",!0)])):T("",!0)])]),_:1},8,["headers","data","file-list"]),b.value?(c(),v("div",yt,[a(Ce,{value:C.value,"onUpdate:value":e[1]||(e[1]=m=>C.value=m),name:"radiogroup"},{default:s(()=>[a(ke,null,{default:s(()=>[(c(),v(K,null,Z(M,m=>a(be,{key:m.value,value:m.value,label:m.label},null,8,["value","label"])),64))]),_:1})]),_:1},8,["value"])])):T("",!0),p.value?(c(),v("div",ht,[a($e,{value:z.value,"onUpdate:value":e[2]||(e[2]=m=>z.value=m),placeholder:"请输入以http(s)://开头的链接",min:0,max:3},{"create-button-default":s(()=>[L(" 创建链接 ")]),_:1},8,["value"])])):T("",!0)])):(c(),v("div",wt,[bt,B.value?T("",!0):(c(),v("div",kt,[a(g,{strong:"",secondary:"",round:"",type:"primary",onClick:e[3]||(e[3]=m=>H("signin"))},{default:s(()=>[L(" 登录 ")]),_:1})])),B.value?(c(),v("div",Ct,[a(g,{strong:"",secondary:"",round:"",type:"primary",onClick:e[4]||(e[4]=m=>H("signin"))},{default:s(()=>[L(" 登录 ")]),_:1}),a(g,{strong:"",secondary:"",round:"",type:"info",onClick:e[5]||(e[5]=m=>H("signup"))},{default:s(()=>[L(" 注册 ")]),_:1})])):T("",!0)]))])}}});const Tt={key:0,class:"skeleton-wrap"},qt={key:1},xt={key:0,class:"empty-wrap"},It={key:1},Ut={key:2},zt={key:0,class:"pagination-wrap"},Rt=Y({__name:"Home",setup(F){const q=te(),r=lt(),I=it(),_=i(!1),d=i([]),p=i(+r.query.p||1),b=i(20),w=i(0),z=Ie(()=>{let u="泡泡广场";return r.query&&r.query.q&&(r.query.t&&r.query.t==="tag"?u="#"+decodeURIComponent(r.query.q):u="搜索: "+decodeURIComponent(r.query.q)),u}),E=()=>{_.value=!0,Ee({query:r.query.q?decodeURIComponent(r.query.q):null,type:r.query.t,page:p.value,page_size:b.value}).then(u=>{_.value=!1,d.value=u.list,w.value=Math.ceil(u.pager.total_rows/b.value),window.scrollTo(0,0)}).catch(u=>{_.value=!1})},N=u=>{if(p.value!=1){I.push({name:"post",query:{id:u.id}});return}let h=[],k=d.value.length;k==b.value&&k--;for(var y=0;y<k;y++){let C=d.value[y];if(!C.is_top)break;h.push(C)}for(h.push(u);y<k;y++)h.push(d.value[y]);d.value=h},f=u=>{I.push({name:"home",query:{...r.query,p:u}})};return ee(()=>{E()}),Ue(()=>({path:r.path,query:r.query,refresh:q.state.refresh}),(u,h)=>{if(u.refresh!==h.refresh){p.value=+r.query.p||1,setTimeout(()=>{E()},0);return}h.path!=="/post"&&u.path==="/"&&(p.value=+r.query.p||1,setTimeout(()=>{E()},0))}),(u,h)=>{const k=st,y=$t,C=ot,R=xe,M=nt,P=Te,B=qe,O=tt,j=at;return c(),v("div",null,[a(k,{title:z.value},null,8,["title"]),a(O,{class:"main-content-wrap",bordered:""},{default:s(()=>[a(C,null,{default:s(()=>[a(y,{onPostSuccess:N})]),_:1}),_.value?(c(),v("div",Tt,[a(R,{num:b.value},null,8,["num"])])):(c(),v("div",qt,[d.value.length===0?(c(),v("div",xt,[a(M,{size:"large",description:"暂无数据"})])):T("",!0),$(q).state.desktopModelShow?(c(),v("div",It,[(c(!0),v(K,null,Z(d.value,A=>(c(),S(C,{key:A.id},{default:s(()=>[a(P,{post:A},null,8,["post"])]),_:2},1024))),128))])):(c(),v("div",Ut,[(c(!0),v(K,null,Z(d.value,A=>(c(),S(C,{key:A.id},{default:s(()=>[a(B,{post:A},null,8,["post"])]),_:2},1024))),128))]))]))]),_:1}),w.value>0?(c(),v("div",zt,[a(j,{page:p.value,"onUpdate:page":f,"page-slot":$(q).state.collapsedRight?5:8,"page-count":w.value},null,8,["page","page-slot","page-count"])])):T("",!0)])}}});const ca=Pe(Rt,[["__scopeId","data-v-f42b0645"]]);export{ca as default};
