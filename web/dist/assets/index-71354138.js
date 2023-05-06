import{d as z,r as R,D as Y,j,o as v,K as N,$ as a,a as k,L as o,c as T,e as S,P as q,a0 as D,O as M,Y as m,n as Q,w as H,a1 as ae,F as J,a2 as X,M as I,s as P,a3 as he,Q as Z,a4 as ge,a5 as fe}from"./@vue-ca177dbe.js";import{c as ve,a as we,u as le,b as ye}from"./vue-router-88cc84d1.js";import{c as ke,u as B}from"./vuex-d28e9067.js";import{a as be}from"./axios-4a70c6fc.js";import{_ as Pe,N as Le,a as ue,b as ce,c as Oe,d as Ae,e as ie,f as Te,g as Re,h as de,i as Ce,j as F,k as Ee,u as $e,l as Ie,m as Se,n as Me,o as Ue,p as Ke,q as qe,r as De,s as Ne,t as xe}from"./naive-ui-2035804c.js";import{S as Fe,M as Ve,L as ze,C as Be,B as We,P as He,W as je,a as Qe,H as ee,b as te,c as oe}from"./@vicons-6d35273b.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-973e5707.js";import"./evtd-b614532e.js";import"./@css-render-480a363d.js";import"./vooks-2c48c2b5.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&i(_)}).observe(document,{childList:!0,subtree:!0});function l(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(c){if(c.ep)return;c.ep=!0;const n=l(c);fetch(c.href,n)}})();const Ge="modulepreload",Ye=function(e){return"/"+e},se={},A=function(t,l,i){if(!l||l.length===0)return t();const c=document.getElementsByTagName("link");return Promise.all(l.map(n=>{if(n=Ye(n),n in se)return;se[n]=!0;const _=n.endsWith(".css"),d=_?'[rel="stylesheet"]':"";if(!!i)for(let b=c.length-1;b>=0;b--){const h=c[b];if(h.href===n&&(!_||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const g=document.createElement("link");if(g.rel=_?"stylesheet":Ge,_||(g.as="script",g.crossOrigin=""),g.href=n,document.head.appendChild(g),_)return new Promise((b,h)=>{g.addEventListener("load",b),g.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},Je=[{path:"/",name:"home",meta:{title:"广场",keepAlive:!0},component:()=>A(()=>import("./Home-37cbe774.js"),["assets/Home-37cbe774.js","assets/post-item.vue_vue_type_style_index_0_lang-09a3d19d.js","assets/content-3f1d28f2.js","assets/@vue-ca177dbe.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/nonesir-video-db921567.js","assets/content-cc55174b.css","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/copy-to-clipboard-1dd3075d.js","assets/toggle-selection-93f4ad84.js","assets/post-item-37a52e00.css","assets/post-skeleton-fdd699ea.js","assets/post-skeleton-f1900002.css","assets/lodash-94eb5868.js","assets/IEnum-a180d93e.js","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Home-47eb20e2.css","assets/vfonts-7afd136d.css"])},{path:"/post",name:"post",meta:{title:"话题详情"},component:()=>A(()=>import("./Post-e74fef3c.js"),["assets/Post-e74fef3c.js","assets/@vue-ca177dbe.js","assets/vuex-d28e9067.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/IEnum-a180d93e.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/content-3f1d28f2.js","assets/nonesir-video-db921567.js","assets/content-cc55174b.css","assets/vue-router-88cc84d1.js","assets/post-skeleton-fdd699ea.js","assets/post-skeleton-f1900002.css","assets/lodash-94eb5868.js","assets/copy-to-clipboard-1dd3075d.js","assets/toggle-selection-93f4ad84.js","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/main-nav-3ef9bae6.css","assets/v3-infinite-loading-fcb59c38.js","assets/v3-infinite-loading-7d241236.css","assets/axios-4a70c6fc.js","assets/Post-d4d1dd23.css","assets/vfonts-7afd136d.css"])},{path:"/topic",name:"topic",meta:{title:"话题"},component:()=>A(()=>import("./Topic-ea29dcd9.js"),["assets/Topic-ea29dcd9.js","assets/@vicons-6d35273b.js","assets/@vue-ca177dbe.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Topic-8dbcebb5.css","assets/vfonts-7afd136d.css"])},{path:"/anouncement",name:"anouncement",meta:{title:"公告"},component:()=>A(()=>import("./Anouncement-89915a48.js"),["assets/Anouncement-89915a48.js","assets/post-skeleton-fdd699ea.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/@vue-ca177dbe.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/@vicons-6d35273b.js","assets/main-nav-3ef9bae6.css","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/axios-4a70c6fc.js","assets/Anouncement-662e2d95.css","assets/vfonts-7afd136d.css"])},{path:"/profile",name:"profile",meta:{title:"主页"},component:()=>A(()=>import("./Profile-ada56cf6.js"),["assets/Profile-ada56cf6.js","assets/post-item.vue_vue_type_style_index_0_lang-09a3d19d.js","assets/content-3f1d28f2.js","assets/@vue-ca177dbe.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/nonesir-video-db921567.js","assets/content-cc55174b.css","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/copy-to-clipboard-1dd3075d.js","assets/toggle-selection-93f4ad84.js","assets/post-item-37a52e00.css","assets/post-skeleton-fdd699ea.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Profile-5d71a5c2.css","assets/vfonts-7afd136d.css"])},{path:"/user",name:"user",meta:{title:"用户详情"},component:()=>A(()=>import("./User-645b4d7e.js"),["assets/User-645b4d7e.js","assets/post-item.vue_vue_type_style_index_0_lang-09a3d19d.js","assets/content-3f1d28f2.js","assets/@vue-ca177dbe.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/nonesir-video-db921567.js","assets/content-cc55174b.css","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/copy-to-clipboard-1dd3075d.js","assets/toggle-selection-93f4ad84.js","assets/post-item-37a52e00.css","assets/post-skeleton-fdd699ea.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/User-4f525d0f.css","assets/vfonts-7afd136d.css"])},{path:"/messages",name:"messages",meta:{title:"消息"},component:()=>A(()=>import("./Messages-268fd9db.js"),["assets/Messages-268fd9db.js","assets/@vue-ca177dbe.js","assets/vue-router-88cc84d1.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/vuex-d28e9067.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Messages-7ed31ecd.css","assets/vfonts-7afd136d.css"])},{path:"/collection",name:"collection",meta:{title:"收藏"},component:()=>A(()=>import("./Collection-2dd501b0.js"),["assets/Collection-2dd501b0.js","assets/post-item.vue_vue_type_style_index_0_lang-09a3d19d.js","assets/content-3f1d28f2.js","assets/@vue-ca177dbe.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/nonesir-video-db921567.js","assets/content-cc55174b.css","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/copy-to-clipboard-1dd3075d.js","assets/toggle-selection-93f4ad84.js","assets/post-item-37a52e00.css","assets/post-skeleton-fdd699ea.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Collection-e1365ea0.css","assets/vfonts-7afd136d.css"])},{path:"/contacts",name:"contacts",meta:{title:"好友"},component:()=>A(()=>import("./Contacts-212adf88.js"),["assets/Contacts-212adf88.js","assets/vue-router-88cc84d1.js","assets/@vue-ca177dbe.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-fdd699ea.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/vuex-d28e9067.js","assets/@vicons-6d35273b.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Contacts-b60e5e0d.css","assets/vfonts-7afd136d.css"])},{path:"/wallet",name:"wallet",meta:{title:"钱包"},component:()=>A(()=>import("./Wallet-595cd027.js"),["assets/Wallet-595cd027.js","assets/post-skeleton-fdd699ea.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/@vue-ca177dbe.js","assets/vueuc-973e5707.js","assets/evtd-b614532e.js","assets/@css-render-480a363d.js","assets/vooks-2c48c2b5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/vuex-d28e9067.js","assets/vue-router-88cc84d1.js","assets/@vicons-6d35273b.js","assets/main-nav-3ef9bae6.css","assets/qrcode-bd5089a5.js","assets/encode-utf8-f813de00.js","assets/dijkstrajs-f906a09e.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/axios-4a70c6fc.js","assets/Wallet-77044929.css","assets/vfonts-7afd136d.css"])},{path:"/setting",name:"setting",meta:{title:"设置"},component:()=>A(()=>import("./Setting-e97b467a.js"),["assets/Setting-e97b467a.js","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/vuex-d28e9067.js","assets/@vue-ca177dbe.js","assets/vue-router-88cc84d1.js","assets/vooks-2c48c2b5.js","assets/evtd-b614532e.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/@css-render-480a363d.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Setting-bfd24152.css","assets/vfonts-7afd136d.css"])},{path:"/404",name:"404",meta:{title:"404"},component:()=>A(()=>import("./404-00d7402f.js"),["assets/404-00d7402f.js","assets/main-nav.vue_vue_type_style_index_0_lang-5097b22a.js","assets/vuex-d28e9067.js","assets/@vue-ca177dbe.js","assets/vue-router-88cc84d1.js","assets/vooks-2c48c2b5.js","assets/evtd-b614532e.js","assets/@vicons-6d35273b.js","assets/naive-ui-2035804c.js","assets/seemly-76b7b838.js","assets/vueuc-973e5707.js","assets/@css-render-480a363d.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/404-020b2afd.css","assets/vfonts-7afd136d.css"])},{path:"/:pathMatch(.*)",redirect:"/404"}],pe=ve({history:we(),routes:Je});pe.beforeEach((e,t,l)=>{document.title=`${e.meta.title} | 泡泡 - 一个清新文艺的微社区`,l()});const Xe=ke({state:{refresh:Date.now(),refreshTopicFollow:Date.now(),theme:localStorage.getItem("PAOPAO_THEME"),collapsedLeft:document.body.clientWidth<=821,collapsedRight:document.body.clientWidth<=821,drawerModelShow:document.body.clientWidth<=821,desktopModelShow:document.body.clientWidth>821,authModalShow:!1,authModelTab:"signin",userLogined:!1,userInfo:{id:0,username:"",nickname:""}},mutations:{refresh(e,t){e.refresh=t||Date.now()},refreshTopicFollow(e){e.refreshTopicFollow=Date.now()},triggerTheme(e,t){e.theme=t},triggerAuth(e,t){e.authModalShow=t},triggerAuthKey(e,t){e.authModelTab=t},triggerCollapsedLeft(e,t){e.collapsedLeft=t,e.drawerModelShow=t,e.desktopModelShow=!t},triggerCollapsedRight(e,t){e.collapsedRight=t},updateUserinfo(e,t){e.userInfo=t,e.userInfo.id>0&&(e.userLogined=!0)},userLogout(e){localStorage.removeItem("PAOPAO_TOKEN"),e.userInfo={id:0,nickname:"",username:""},e.userLogined=!1}},actions:{},modules:{}}),G=be.create({baseURL:"",timeout:3e4});G.interceptors.request.use(e=>(localStorage.getItem("PAOPAO_TOKEN")&&(e.headers.Authorization="Bearer "+localStorage.getItem("PAOPAO_TOKEN")),e),e=>Promise.reject(e));G.interceptors.response.use(e=>{const{data:t={},code:l=0}=(e==null?void 0:e.data)||{};if(+l==0)return t||{};Promise.reject((e==null?void 0:e.data)||{})},(e={})=>{var l;const{response:t={}}=e||{};return+(t==null?void 0:t.status)==401?(localStorage.removeItem("PAOPAO_TOKEN"),(t==null?void 0:t.data.code)!==10005?window.$message.warning((t==null?void 0:t.data.msg)||"鉴权失败"):window.$store.commit("triggerAuth",!0)):window.$message.error(((l=t==null?void 0:t.data)==null?void 0:l.msg)||"请求失败"),Promise.reject((t==null?void 0:t.data)||{})});function s(e){return G(e)}const ne=e=>s({method:"post",url:"/v1/auth/login",data:e}),Ze=e=>s({method:"post",url:"/v1/auth/register",data:e}),W=(e="")=>s({method:"get",url:"/v1/user/info",headers:{Authorization:`Bearer ${e}`}}),et={class:"auth-wrap"},tt={key:0},ot=z({__name:"auth",setup(e){const t=R("true".toLowerCase()==="true"),l=B(),i=R(!1),c=R(),n=Y({username:"",password:""}),_=R(),d=Y({username:"",password:"",repassword:""}),U={username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"},repassword:[{required:!0,message:"请输入密码"},{validator:(h,u)=>!!d.password&&d.password.startsWith(u)&&d.password.length>=u.length,message:"两次密码输入不一致",trigger:"input"}]},g=h=>{var u;h.preventDefault(),h.stopPropagation(),(u=c.value)==null||u.validate(L=>{L||(i.value=!0,ne({username:n.username,password:n.password}).then(p=>{const O=(p==null?void 0:p.token)||"";return localStorage.setItem("PAOPAO_TOKEN",O),W(O)}).then(p=>{window.$message.success("登录成功"),i.value=!1,l.commit("updateUserinfo",p),l.commit("triggerAuth",!1),l.commit("refresh"),n.username="",n.password=""}).catch(p=>{i.value=!1}))})},b=h=>{var u;h.preventDefault(),h.stopPropagation(),(u=_.value)==null||u.validate(L=>{L||(i.value=!0,Ze({username:d.username,password:d.password}).then(p=>ne({username:d.username,password:d.password})).then(p=>{const O=(p==null?void 0:p.token)||"";return localStorage.setItem("PAOPAO_TOKEN",O),W(O)}).then(p=>{window.$message.success("注册成功"),i.value=!1,l.commit("updateUserinfo",p),l.commit("triggerAuth",!1),d.username="",d.password="",d.repassword=""}).catch(p=>{i.value=!1}))})};return j(()=>{const h=localStorage.getItem("PAOPAO_TOKEN")||"";h?W(h).then(u=>{l.commit("updateUserinfo",u),l.commit("triggerAuth",!1)}).catch(u=>{l.commit("userLogout")}):l.commit("userLogout")}),(h,u)=>{const L=Pe,p=Le,O=ue,r=ce,w=Oe,y=Ae,E=ie,x=Te,$=Re,K=de,V=Ce;return v(),N(V,{show:m(l).state.authModalShow,"onUpdate:show":u[7]||(u[7]=f=>m(l).state.authModalShow=f),class:"auth-card",preset:"card",size:"small","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:a(()=>[k("div",et,[o(K,{bordered:!1},{default:a(()=>[t.value?M("",!0):(v(),T("div",tt,[o(O,{justify:"center"},{default:a(()=>[o(p,null,{default:a(()=>[o(L,{type:"success"},{default:a(()=>[S("账号登录")]),_:1})]),_:1})]),_:1}),o(y,{ref_key:"loginRef",ref:c,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:a(()=>[o(w,{label:"账户",path:"username"},{default:a(()=>[o(r,{value:n.username,"onUpdate:value":u[0]||(u[0]=f=>n.username=f),placeholder:"请输入用户名",onKeyup:q(D(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),o(w,{label:"密码",path:"password"},{default:a(()=>[o(r,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":u[1]||(u[1]=f=>n.password=f),placeholder:"请输入账户密码",onKeyup:q(D(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),o(E,{type:"primary",block:"",secondary:"",strong:"",loading:i.value,onClick:g},{default:a(()=>[S(" 登录 ")]),_:1},8,["loading"])])),t.value?(v(),N($,{key:1,"default-value":m(l).state.authModelTab,size:"large","justify-content":"space-evenly"},{default:a(()=>[o(x,{name:"signin",tab:"登录"},{default:a(()=>[o(y,{ref_key:"loginRef",ref:c,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:a(()=>[o(w,{label:"账户",path:"username"},{default:a(()=>[o(r,{value:n.username,"onUpdate:value":u[2]||(u[2]=f=>n.username=f),placeholder:"请输入用户名",onKeyup:q(D(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),o(w,{label:"密码",path:"password"},{default:a(()=>[o(r,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":u[3]||(u[3]=f=>n.password=f),placeholder:"请输入账户密码",onKeyup:q(D(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),o(E,{type:"primary",block:"",secondary:"",strong:"",loading:i.value,onClick:g},{default:a(()=>[S(" 登录 ")]),_:1},8,["loading"])]),_:1}),o(x,{name:"signup",tab:"注册"},{default:a(()=>[o(y,{ref_key:"registerRef",ref:_,model:d,rules:U},{default:a(()=>[o(w,{label:"用户名",path:"username"},{default:a(()=>[o(r,{value:d.username,"onUpdate:value":u[4]||(u[4]=f=>d.username=f),placeholder:"用户名注册后无法修改"},null,8,["value"])]),_:1}),o(w,{label:"密码",path:"password"},{default:a(()=>[o(r,{type:"password","show-password-on":"mousedown",placeholder:"密码不少于6位",value:d.password,"onUpdate:value":u[5]||(u[5]=f=>d.password=f),onKeyup:q(D(b,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),o(w,{label:"重复密码",path:"repassword"},{default:a(()=>[o(r,{type:"password","show-password-on":"mousedown",placeholder:"请再次输入密码",value:d.repassword,"onUpdate:value":u[6]||(u[6]=f=>d.repassword=f),onKeyup:q(D(b,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),o(E,{type:"primary",block:"",secondary:"",strong:"",loading:i.value,onClick:b},{default:a(()=>[S(" 注册 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["default-value"])):M("",!0)]),_:1})])]),_:1},8,["show"])}}});const me=(e,t)=>{const l=e.__vccOpts||e;for(const[i,c]of t)l[i]=c;return l},st=me(ot,[["__scopeId","data-v-053dfa44"]]),Jt=e=>s({method:"get",url:"/v1/posts",params:e}),nt=e=>s({method:"get",url:"/v1/tags",params:e}),Xt=e=>s({method:"get",url:"/v1/post",params:e}),Zt=e=>s({method:"get",url:"/v1/post/star",params:e}),eo=e=>s({method:"post",url:"/v1/post/star",data:e}),to=e=>s({method:"get",url:"/v1/post/collection",params:e}),oo=e=>s({method:"post",url:"/v1/post/collection",data:e}),so=e=>s({method:"get",url:"/v1/post/comments",params:e}),no=e=>s({method:"get",url:"/v1/user/contacts",params:e}),ro=e=>s({method:"post",url:"/v1/post",data:e}),ao=e=>s({method:"delete",url:"/v1/post",data:e}),lo=e=>s({method:"post",url:"/v1/post/lock",data:e}),uo=e=>s({method:"post",url:"/v1/post/stick",data:e}),co=e=>s({method:"post",url:"/v1/post/visibility",data:e}),io=e=>s({method:"post",url:"/v1/tweet/comment/thumbsup",data:e}),po=e=>s({method:"post",url:"/v1/tweet/comment/thumbsdown",data:e}),mo=e=>s({method:"post",url:"/v1/tweet/reply/thumbsup",data:e}),_o=e=>s({method:"post",url:"/v1/tweet/reply/thumbsdown",data:e}),ho=e=>s({method:"post",url:"/v1/post/comment",data:e}),go=e=>s({method:"delete",url:"/v1/post/comment",data:e}),fo=e=>s({method:"post",url:"/v1/post/comment/reply",data:e}),vo=e=>s({method:"delete",url:"/v1/post/comment/reply",data:e}),wo=e=>s({method:"post",url:"/v1/topic/stick",data:e}),yo=e=>s({method:"post",url:"/v1/topic/follow",data:e}),ko=e=>s({method:"post",url:"/v1/topic/unfollow",data:e}),rt={key:0,class:"rightbar-wrap"},at={class:"search-wrap"},lt={class:"post-num"},ut={class:"post-num"},ct={class:"copyright"},it=["href"],dt=["href"],pt=z({__name:"rightbar",setup(e){const t=R([]),l=R([]),i=R(!1),c=R(""),n=B(),_=le(),d="2023 paopao.info",U="Roc's Me",g="",b="泡泡(PaoPao)开源社区",h="https://www.paopao.info",u=+"6",L=+"12",p=()=>{i.value=!0,nt({type:"hot_extral",num:L,extral_num:u}).then(y=>{t.value=y.topics,l.value=y.extral_topics??[],w.value=!0,i.value=!1}).catch(y=>{i.value=!1})},O=y=>y>=1e3?(y/1e3).toFixed(1)+"k":y,r=()=>{_.push({name:"home",query:{q:c.value}})},w=Q({get:()=>n.state.userLogined&&l.value.length!==0,set:y=>{}});return H(()=>({refreshTopicFollow:n.state.refreshTopicFollow,userLogined:n.state.userLogined}),(y,E)=>{(y.refreshTopicFollow!==E.refreshTopicFollow||y.userLogined)&&p()}),j(()=>{p()}),(y,E)=>{const x=F,$=ce,K=ae("router-link"),V=Ee,f=de,_e=ue;return m(n).state.collapsedRight?M("",!0):(v(),T("div",rt,[k("div",at,[o($,{round:"",clearable:"",placeholder:"搜一搜...",value:c.value,"onUpdate:value":E[0]||(E[0]=C=>c.value=C),onKeyup:q(D(r,["prevent"]),["enter"])},{prefix:a(()=>[o(x,{component:m(Fe)},null,8,["component"])]),_:1},8,["value","onKeyup"])]),m(w)?(v(),N(f,{key:0,class:"hottopic-wrap",title:"关注话题",embedded:"",bordered:!1,size:"small"},{default:a(()=>[o(V,{show:i.value},{default:a(()=>[(v(!0),T(J,null,X(l.value,C=>(v(),T("div",{class:"hot-tag-item",key:C.id},[o(K,{class:"hash-link",to:{name:"home",query:{q:C.tag,t:"tag"}}},{default:a(()=>[S(" #"+I(C.tag),1)]),_:2},1032,["to"]),k("div",lt,I(O(C.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1})):M("",!0),o(f,{class:"hottopic-wrap",title:"热门话题",embedded:"",bordered:!1,size:"small"},{default:a(()=>[o(V,{show:i.value},{default:a(()=>[(v(!0),T(J,null,X(t.value,C=>(v(),T("div",{class:"hot-tag-item",key:C.id},[o(K,{class:"hash-link",to:{name:"home",query:{q:C.tag,t:"tag"}}},{default:a(()=>[S(" #"+I(C.tag),1)]),_:2},1032,["to"]),k("div",ut,I(O(C.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1}),o(f,{class:"copyright-wrap",embedded:"",bordered:!1,size:"small"},{default:a(()=>[k("div",ct,"© "+I(m(d)),1),k("div",null,[o(_e,null,{default:a(()=>[k("a",{href:m(g),target:"_blank",class:"hash-link"},I(m(U)),9,it),k("a",{href:m(h),target:"_blank",class:"hash-link"},I(m(b)),9,dt)]),_:1})])]),_:1})]))}}});const mt=me(pt,[["__scopeId","data-v-f4a84024"]]),bo=(e={})=>s({method:"get",url:"/v1/captcha",params:e}),Po=e=>s({method:"post",url:"/v1/captcha",data:e}),Lo=e=>s({method:"post",url:"/v1/user/whisper",data:e}),Oo=e=>s({method:"post",url:"/v1/friend/requesting",data:e}),Ao=e=>s({method:"post",url:"/v1/friend/add",data:e}),To=e=>s({method:"post",url:"/v1/friend/reject",data:e}),Ro=e=>s({method:"post",url:"/v1/friend/delete",data:e}),Co=e=>s({method:"post",url:"/v1/user/phone",data:e}),Eo=e=>s({method:"post",url:"/v1/user/activate",data:e}),$o=e=>s({method:"post",url:"/v1/user/password",data:e}),Io=e=>s({method:"post",url:"/v1/user/nickname",data:e}),So=e=>s({method:"post",url:"/v1/user/avatar",data:e}),re=(e={})=>s({method:"get",url:"/v1/user/msgcount/unread",params:e}),Mo=e=>s({method:"get",url:"/v1/user/messages",params:e}),Uo=e=>s({method:"post",url:"/v1/user/message/read",data:e}),Ko=e=>s({method:"get",url:"/v1/user/collections",params:e}),qo=e=>s({method:"get",url:"/v1/user/profile",params:e}),Do=e=>s({method:"get",url:"/v1/user/posts",params:e}),No=e=>s({method:"get",url:"/v1/user/wallet/bills",params:e}),xo=e=>s({method:"post",url:"/v1/user/recharge",data:e}),Fo=e=>s({method:"get",url:"/v1/user/recharge",params:e}),Vo=e=>s({method:"get",url:"/v1/suggest/users",params:e}),zo=e=>s({method:"get",url:"/v1/suggest/tags",params:e}),Bo=e=>s({method:"get",url:"/v1/attachment/precheck",params:e}),Wo=e=>s({method:"get",url:"/v1/attachment",params:e}),Ho=e=>s({method:"post",url:"/v1/admin/user/status",data:e}),_t="/assets/logo-52afee68.png",ht={class:"sidebar-wrap"},gt={class:"logo-wrap"},ft={key:0,class:"user-wrap"},vt={class:"user-info"},wt={class:"nickname"},yt={class:"nickname-txt"},kt={class:"username"},bt={class:"user-mini-wrap"},Pt={key:1,class:"user-wrap"},Lt={key:0,class:"login-only-wrap"},Ot={key:1,class:"login-wrap"},At=z({__name:"sidebar",setup(e){const t=B(),l=ye(),i=le(),c=R(!1),n=R(l.name||""),_=R(),d=R("true".toLowerCase()==="true"),U=+"5000";H(l,()=>{n.value=l.name}),H(t.state,()=>{t.state.userInfo.id>0?_.value||(re().then(r=>{c.value=r.count>0}).catch(r=>{console.log(r)}),_.value=setInterval(()=>{re().then(r=>{c.value=r.count>0}).catch(r=>{console.log(r)})},U)):_.value&&clearInterval(_.value)}),j(()=>{window.onresize=()=>{t.commit("triggerCollapsedLeft",document.body.clientWidth<=821),t.commit("triggerCollapsedRight",document.body.clientWidth<=821)}});const g=Q(()=>{const r=[{label:"广场",key:"home",icon:()=>P(ee),href:"/"},{label:"话题",key:"topic",icon:()=>P(te),href:"/topic"}];return"false".toLowerCase()==="true"&&r.push({label:"公告",key:"anouncement",icon:()=>P(Ve),href:"/anouncement"}),r.push({label:"主页",key:"profile",icon:()=>P(ze),href:"/profile"}),r.push({label:"消息",key:"messages",icon:()=>P(Be),href:"/messages"}),r.push({label:"收藏",key:"collection",icon:()=>P(We),href:"/collection"}),r.push({label:"好友",key:"contacts",icon:()=>P(He),href:"/contacts"}),"false".toLocaleLowerCase()==="true"&&r.push({label:"钱包",key:"wallet",icon:()=>P(je),href:"/wallet"}),r.push({label:"设置",key:"setting",icon:()=>P(Qe),href:"/setting"}),t.state.userInfo.id>0?r:[{label:"广场",key:"home",icon:()=>P(ee),href:"/"},{label:"话题",key:"topic",icon:()=>P(te),href:"/topic"}]}),b=r=>"href"in r?P("div",{},r.label):r.label,h=r=>r.key==="messages"?P(Ie,{dot:!0,show:c.value,processing:!0},{default:()=>P(F,{color:r.key===n.value?"var(--n-item-icon-color-active)":"var(--n-item-icon-color)"},{default:r.icon})}):P(F,null,{default:r.icon}),u=(r,w={})=>{n.value=r,i.push({name:r})},L=()=>{l.path==="/"&&t.commit("refresh"),u("home")},p=r=>{t.commit("triggerAuth",!0),t.commit("triggerAuthKey",r)},O=()=>{t.commit("userLogout"),t.commit("refresh"),L()};return window.$store=t,window.$message=$e(),(r,w)=>{const y=Se,E=Me,x=Ue,$=ie;return v(),T("div",ht,[k("div",gt,[o(y,{class:"logo-img",width:"36",src:m(_t),"preview-disabled":!0,onClick:L},null,8,["src"])]),o(E,{accordion:!0,"icon-size":24,options:m(g),"render-label":b,"render-icon":h,value:n.value,"onUpdate:value":u},null,8,["options","value"]),m(t).state.userInfo.id>0?(v(),T("div",ft,[o(x,{class:"user-avatar",round:"",size:34,src:m(t).state.userInfo.avatar},null,8,["src"]),k("div",vt,[k("div",wt,[k("span",yt,I(m(t).state.userInfo.nickname),1),o($,{class:"logout",quaternary:"",circle:"",size:"tiny",onClick:O},{icon:a(()=>[o(m(F),null,{default:a(()=>[o(m(oe))]),_:1})]),_:1})]),k("div",kt,"@"+I(m(t).state.userInfo.username),1)]),k("div",bt,[o($,{class:"logout",quaternary:"",circle:"",onClick:O},{icon:a(()=>[o(m(F),{size:24},{default:a(()=>[o(m(oe))]),_:1})]),_:1})])])):(v(),T("div",Pt,[d.value?M("",!0):(v(),T("div",Lt,[o($,{strong:"",secondary:"",round:"",type:"primary",onClick:w[0]||(w[0]=K=>p("signin"))},{default:a(()=>[S(" 登录 ")]),_:1})])),d.value?(v(),T("div",Ot,[o($,{strong:"",secondary:"",round:"",type:"primary",onClick:w[1]||(w[1]=K=>p("signin"))},{default:a(()=>[S(" 登录 ")]),_:1}),o($,{strong:"",secondary:"",round:"",type:"info",onClick:w[2]||(w[2]=K=>p("signup"))},{default:a(()=>[S(" 注册 ")]),_:1})])):M("",!0)]))])}}});const Tt={"has-sider":"",class:"main-wrap",position:"static"},Rt={key:0},Ct={class:"content-wrap"},Et=z({__name:"App",setup(e){const t=B(),l=Q(()=>t.state.theme==="dark"?qe:null);return(i,c)=>{const n=At,_=ae("router-view"),d=mt,U=st,g=De,b=Ne,h=xe,u=Ke;return v(),N(u,{theme:m(l)},{default:a(()=>[o(b,null,{default:a(()=>[o(g,null,{default:a(()=>{var L;return[k("div",{class:ge(["app-container",{dark:((L=m(l))==null?void 0:L.name)==="dark",mobile:!m(t).state.desktopModelShow}])},[k("div",Tt,[m(t).state.desktopModelShow?(v(),T("div",Rt,[o(n)])):M("",!0),k("div",Ct,[o(_,{class:"app-wrap"},{default:a(({Component:p})=>[(v(),N(he,null,[i.$route.meta.keepAlive?(v(),N(Z(p),{key:0})):M("",!0)],1024)),i.$route.meta.keepAlive?M("",!0):(v(),N(Z(p),{key:0}))]),_:1})]),o(d)]),o(U)],2)]}),_:1})]),_:1}),o(h)]),_:1},8,["theme"])}}});fe(Et).use(pe).use(Xe).mount("#app");export{Do as A,Lo as B,Oo as C,qo as D,Ro as E,Ho as F,Ao as G,To as H,Uo as I,Mo as J,Ko as K,Bo as L,Wo as M,no as N,W as O,No as P,xo as Q,Fo as R,bo as S,So as T,$o as U,Co as V,Eo as W,Io as X,Po as Y,At as Z,me as _,zo as a,Jt as b,ro as c,_o as d,vo as e,io as f,Vo as g,po as h,fo as i,go as j,ho as k,Zt as l,to as m,ao as n,lo as o,eo as p,oo as q,Xt as r,uo as s,mo as t,so as u,co as v,wo as w,ko as x,yo as y,nt as z};
