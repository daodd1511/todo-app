import{i as N,B as W,g as F,u as S,a as K,o as j,b as C,r as D,c as f,d as O,y as q,C as M,_ as Y,S as G,e as Q,f as m,h as t,n as _,j as i,t as x,s as J,k as X,l as Z,m as v,w,v as b,p as ee,F as U,q as R,x as E,z as A,A as T,D as B,E as te,G as se,H as oe,I as ae}from"./vendor.c7240c11.js";const re=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}};re();const ne={apiKey:"AIzaSyD5G1tB0tO3pSHEDtY8yzROY9uQrsYFSs4",authDomain:"todo-e47c0.firebaseapp.com",databaseURL:"https://todo-e47c0-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"todo-e47c0",storageBucket:"todo-e47c0.appspot.com",messagingSenderId:"391559150737",appId:"1:391559150737:web:2231f001dd5f4ec3991330"},le=N(ne),I=W(),u=F(le),ie={setup(n){const o=S(),r=K();return j(()=>{C(u,s=>{s&&(r.path=="/login"||r.path=="/register")&&o.replace("/")})}),(s,e)=>{const a=D("router-view");return f(),O(a)}}};const V=()=>({addData:async(r,s)=>{try{await q(M(I,"users",s),{tasks:r})}catch(e){console.log("Error handling document: ",e)}},readData:async r=>{try{const s=L();s.$reset(),(await Y(G(I,"users"))).forEach(a=>{if(a.id==r&&s.tasks.length==0){for(let l of a.data().tasks)s.tasks.push(l);s.filteredTasks=s.tasks}})}catch(s){console.log("Error handling document: ",s)}}}),{addData:z}=V(),L=Q("main",{state:()=>({tasks:[],filteredTasks:[],counter:0,isDark:!1,activeEl:0,activeTask:[],completedTask:[]}),getters:{},actions:{addTask(n){n!=""&&(this.tasks=[{content:n,done:!1},...this.tasks],this.counter++,this.filteredTasks=this.tasks,this.activeEl=0)},removeTask(n,o){this.tasks=this.tasks.filter(r=>r!=n),this.filteredTasks=this.tasks,n.done||this.counter--,z(this.tasks,o)},filterTask(n){this.activeEl=n.id,this.filteredTasks=this.tasks.filter(o=>{if(n.name=="Active")return o.done==!1;if(n.name=="Completed")return o.done==!0;if(n.name=="All")return o})},toggleTask(n,o){n.done=!n.done,n.done==!0?this.counter--:this.counter++,z(this.tasks,o)},toggleTheme(){this.isDark=!this.isDark}}}),de={class:"w-full h-auto bg-very-light-gray dark:bg-dark-bg-secondary flex items-center gap-4 px-4 py-[10px] border-b border-light-grayish-blue dark:border-dark-border relative"},ce={props:{task:Object},setup(n){const o=n,r=L(),s={icon:["bg-icon-check w-[11px] h-[9px]"],text:["line-through text-light-grayish-blue dark:text-dark-text-secondary"]},e={icon:["w-5 h-5 border-2 rounded-full border-gray-200"],text:["dark:text-dark-text"]};return(a,l)=>(f(),m("div",de,[t("div",{class:_(["w-5 h-5 rounded-full flex items-center justify-center cursor-pointer",[o.task.done?"check":""]]),onClick:l[0]||(l[0]=y=>i(r).toggleTask(o.task,i(u).currentUser!=null?i(u).currentUser.uid:""))},[t("i",{class:_([o.task.done?s.icon:e.icon])},null,2)],2),t("p",{class:_([[o.task.done?s.text:e.text],"w-3/4 break-words"])},x(o.task.content),3),t("i",{class:"bg-icon-cross w-[18px] h-[18px] absolute right-5 transition-all hover:rotate-90 cursor-pointer",onClick:l[1]||(l[1]=y=>i(r).removeTask(o.task,i(u).currentUser!=null?i(u).currentUser.uid:""))})]))}},P=()=>({login:async(s,e)=>{await J(u,s,e)},register:async(s,e)=>{await X(u,s,e)},logout:async()=>{await Z(u)}}),ue={class:"h-screen dark:bg-dark-bg overflow-y-scroll"},he={class:"z-0 h-72 dark:bg-desktop-dark bg-desktop-light bg-cover bg-center"},pe={class:"container z-10 w-11/12 md:w-3/5 lg:w-2/5 h-auto mx-auto pt-16 pb-40 sm:py-16"},ge={class:"flex justify-between"},fe=t("h1",{class:"text-3xl font-bold tracking-widest text-very-light-gray"}," TODO ",-1),ke={class:"w-full h-12 bg-very-light-gray dark:bg-dark-bg-secondary rounded flex items-center gap-4 px-4 mt-12 mb-8"},me=t("div",{class:"w-5 h-5 border-2 rounded-full border-gray-200"},null,-1),ye=["onKeypress"],ve={class:"rounded-t overflow-hidden shadow-xl"},we={class:"w-full h-12 bg-very-light-gray dark:bg-dark-bg-secondary flex justify-between items-center px-4 rounded-b relative shadow-xl"},be={class:"text-xs text-dark-grayish-blue dark:text-dark-text-secondary"},_e={class:"flex text-sm absolute bottom-[-5rem] left-0 rounded w-full h-12 justify-center bg-very-light-gray dark:bg-dark-bg-secondary gap-4 shadow-xl sm:static sm:shadow-none sm:w-fit"},xe=["onClick"],Te={class:"absolute top-5 lg:top-10 right-5 lg:right-10"},$e={key:0},Ce=T("Login"),De={key:1},Ee=T("Logout"),Ae={setup(n){const{addData:o,readData:r}=V(),{logout:s}=P(),e=L(),a=v(""),l=v(!1),y=()=>{l.value?(e.addTask(a.value),o(e.tasks,u.currentUser.uid),a.value=""):(e.addTask(a.value),a.value="")},g=[{name:"All",id:0},{name:"Active",id:1},{name:"Completed",id:2}],h=()=>{for(let c of e.filteredTasks)c.done&&(e.removeTask(c,u.currentUser!=null?u.currentUser.uid:""),e.activeEl=0)};return j(()=>{C(u,async c=>{c?(await r(c.uid),e.counter=e.tasks.filter(d=>!d.done).length,l.value=!0):(l.value=!1,e.$reset())})}),(c,d)=>{const k=D("router-link");return f(),m(U,null,[t("div",{class:_([i(e).isDark?"dark":""])},[t("div",ue,[t("div",he,[t("div",pe,[t("div",ge,[fe,t("i",{class:"bg-icon-moon dark:bg-icon-sun w-[26px] h-[26px] cursor-pointer transition ease-in delay-1000",onClick:d[0]||(d[0]=(...p)=>i(e).toggleTheme&&i(e).toggleTheme(...p))})]),t("div",ke,[me,w(t("input",{type:"text",class:"w-full placeholder:text-dark-grayish-blue dark:bg-dark-bg-secondary dark:text-dark-text focus:outline-none caret-bright-blue",placeholder:"Add a new task","onUpdate:modelValue":d[1]||(d[1]=p=>a.value=p),onKeypress:ee(y,["enter"])},null,40,ye),[[b,a.value]])]),t("div",ve,[(f(!0),m(U,null,R(i(e).filteredTasks,(p,$)=>(f(),O(ce,{key:$,task:p},null,8,["task"]))),128))]),t("div",we,[t("p",be,x(i(e).counter)+" "+x(i(e).counter>=2?"tasks":"task")+" left ",1),t("div",_e,[(f(),m(U,null,R(g,(p,$)=>t("button",{key:$,onClick:Ke=>i(e).filterTask(p),class:_(["dark:text-dark-text-secondary",[i(e).activeEl===$?"active":""]])},x(p.name),11,xe)),64))]),t("button",{class:"text-sm dark:text-dark-text-secondary",onClick:d[2]||(d[2]=p=>h())}," Clear Completed ")])])])])],2),t("div",Te,[l.value?(f(),m("div",De,[T(" Hi "+x(i(u).currentUser.email.split("@")[0])+", ",1),t("button",{onClick:d[3]||(d[3]=(...p)=>i(s)&&i(s)(...p))},[E(k,{to:"/"},{default:A(()=>[Ee]),_:1})])])):(f(),m("button",$e,[E(k,{to:"/login"},{default:A(()=>[Ce]),_:1})]))])],64)}}},Se={class:"check h-screen flex justify-center items-center"},Ue={class:"container w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 h-72 bg-very-light-gray rounded-md p-4"},Le=t("h1",{class:"text-3xl text-center"},"Login",-1),Pe=["onSubmit"],je=t("input",{type:"submit",value:"Login",class:"w-full h-10 bg-dark-bg-secondary text-very-light-grayish-blue rounded-md cursor-pointer"},null,-1),Oe=T("Register"),Re={setup(n){const{login:o}=P(),r=v(""),s=v(""),e=S(),a=g=>{switch(g){case"auth/wrong-password":window.alert("Wrong password! Please try again");break;case"auth/user-not-found":window.alert("User not found! Please register or try again")}},l=async()=>{await o(r.value,s.value).then().catch(g=>{a(g.code)}),y()},y=()=>{C(u,g=>{g&&e.push("/")})};return(g,h)=>{const c=D("router-link");return f(),m("div",Se,[t("div",Ue,[Le,t("form",{onSubmit:B(l,["prevent"]),class:"flex flex-col gap-4"},[w(t("input",{type:"email",placeholder:"Email","onUpdate:modelValue":h[0]||(h[0]=d=>r.value=d),class:"w-full h-10"},null,512),[[b,r.value]]),w(t("input",{type:"password",placeholder:"Password","onUpdate:modelValue":h[1]||(h[1]=d=>s.value=d),class:"w-full h-10"},null,512),[[b,s.value]]),je,t("p",null,[E(c,{to:"/register"},{default:A(()=>[Oe]),_:1})])],40,Pe)])])}}},Be={class:"check h-screen flex justify-center items-center"},Ie={class:"container w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 h-80 bg-very-light-gray rounded-md p-4"},Ve=t("h1",{class:"text-3xl text-center"},"Register",-1),ze=["onSubmit"],He=t("input",{type:"submit",value:"Register",class:"w-full h-10 bg-dark-bg-secondary text-very-light-grayish-blue rounded-md cursor-pointer"},null,-1),Ne=T("Login"),We={setup(n){const{register:o}=P(),r=v(""),s=v(""),e=v(""),a=S(),l=h=>{switch(h){case"auth/email-already-in-use":r.value="",window.alert("Email already in use! Please try again");break;case"auth/invalid-email":r.value="",window.alert("Invalid email! Please try again");break;case"auth/weak-password":window.alert("Weak password! Please try again");break}s.value="",e.value=""},y=async()=>{s.value==e.value?(await o(r.value,s.value).then().catch(h=>{l(h.code)}),g()):(window.alert("Wrong password confirmation, please try again!"),s.value="",e.value="")},g=()=>{C(u,h=>{h&&a.replace("/")})};return(h,c)=>{const d=D("router-link");return f(),m("div",Be,[t("div",Ie,[Ve,t("form",{onSubmit:B(y,["prevent"]),class:"flex flex-col gap-4"},[w(t("input",{type:"email",placeholder:"Email","onUpdate:modelValue":c[0]||(c[0]=k=>r.value=k),class:"w-full h-10"},null,512),[[b,r.value]]),w(t("input",{type:"password",placeholder:"Password","onUpdate:modelValue":c[1]||(c[1]=k=>s.value=k),class:"w-full h-10"},null,512),[[b,s.value]]),w(t("input",{type:"password",placeholder:"Confirm Password","onUpdate:modelValue":c[2]||(c[2]=k=>e.value=k),class:"w-full h-10"},null,512),[[b,e.value]]),He,t("p",null,[E(d,{to:"/login"},{default:A(()=>[Ne]),_:1})])],40,ze)])])}}},Fe=te({history:se(),routes:[{path:"/",name:"Home",component:Ae},{path:"/login",name:"Login",component:Re},{path:"/register",name:"Register",component:We}]}),H=oe(ie);H.use(ae());H.use(Fe).mount("#app");
