import{i as J,B as Q,g as X,u as Z,a as ee,o as I,b as z,r as L,c as g,d as T,e as w,f as e,h as te,n as D,y as F,C as K,_ as M,S as N,j as se,k as p,l as c,t as E,w as _,v as $,m as B,s as ae,p as oe,q as re,x as ne,F as U,z as q,A,D as x,E as P,G as S,H as W,I as le,J as ie,K as de,L as ue}from"./vendor.e3e68a59.js";const ce=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function f(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(s){if(s.ep)return;s.ep=!0;const t=f(s);fetch(s.href,t)}};ce();const fe={apiKey:"AIzaSyD5G1tB0tO3pSHEDtY8yzROY9uQrsYFSs4",authDomain:"todo-e47c0.firebaseapp.com",databaseURL:"https://todo-e47c0-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"todo-e47c0",storageBucket:"todo-e47c0.appspot.com",messagingSenderId:"391559150737",appId:"1:391559150737:web:2231f001dd5f4ec3991330"},ge=J(fe),R=Q(),k=X(ge),ke={setup(i){const a=Z(),f=ee();return I(()=>{z(k,o=>{o&&(f.path=="/login"||f.path=="/register")&&a.replace("/")})}),(o,s)=>{const t=L("router-view");return g(),T(t)}}};const pe={class:"modal-overlay flex h-full w-full items-center justify-center bg-black/40"},he={class:"modal-body flex h-1/3 w-10/12 flex-col items-center justify-around rounded-xl bg-white p-5 dark:bg-dark-bg dark:shadow dark:shadow-sky-200 sm:w-3/5 md:w-2/5"},j={props:{isDark:Boolean},setup(i){const a=i;return(f,o)=>(g(),w("div",{class:D(["modal fixed bottom-0 top-0 right-0 left-0",[a.isDark?"dark":""]])},[e("div",pe,[e("div",he,[te(f.$slots,"default")])])],2))}},H=()=>({addData:async(o,s)=>{try{await F(K(R,"users",s),{tasks:o})}catch(t){console.log("Error handling document: ",t)}},readData:async o=>{try{const s=V();s.$reset(),(await M(N(R,"users"))).forEach(u=>{if(u.id==o&&s.tasks.length==0){for(let m of u.data().tasks)s.tasks.push(m);s.filteredTasks=s.tasks}}),(await M(N(R,"theme"))).forEach(u=>{u.id==o&&(s.isDark=u.data().theme)})}catch(s){console.log("Error handling document: ",s)}},updateTheme:async o=>{const t=V().isDark;await F(K(R,"theme",o),{theme:t})}}),{addData:Y}=H(),V=se("main",{state:()=>({tasks:[],filteredTasks:[],counter:0,isDark:!1,activeEl:0,haveCompletedTasks:!1}),getters:{},actions:{addTask(i){i!=""&&(this.tasks=[{content:i,done:!1},...this.tasks],this.counter++,this.filteredTasks=this.tasks,this.activeEl=0)},removeTask(i,a){this.tasks=this.tasks.filter(f=>f!=i),this.filteredTasks=this.tasks,i.done||this.counter--,a&&Y(this.tasks,a)},filterTask(i){this.filteredTasks=this.tasks.filter(a=>{if(i=="Active")return a.done==!1;if(i=="Completed")return a.done==!0;if(i=="All")return a})},toggleTask(i,a){i.done=!i.done,i.done==!0?this.counter--:this.counter++,a&&Y(this.tasks,a)},toggleTheme(){this.isDark=!this.isDark},checkHaveCompletedTasks(){for(let i of this.filteredTasks){if(i.done){this.haveCompletedTasks=!0;break}this.haveCompletedTasks=!1}}}}),me={class:"relative flex h-auto w-full items-center gap-2 border-b border-light-grayish-blue bg-very-light-gray px-4 py-[10px] dark:border-dark-border dark:bg-dark-bg-secondary"},be={props:{task:Object},setup(i){const a=i,{addData:f}=H(),o=V(),s={icon:["bg-icon-check w-[11px] h-[9px]"],text:["line-through text-light-grayish-blue dark:text-dark-text-secondary"]},t={icon:["w-5 h-5 border-2 rounded-full border-gray-200"],text:["dark:text-dark-text"]};let d="";const u=p(),m=l=>{d=l.content,u.value=l},b=l=>{u.value&&(u.value=null,l.content=l.content.trim(),f(o.tasks,k.currentUser.uid),l.content||o.removeTask(l,k.currentUser.uid))},v=l=>{u.value=null,l.content=d},C=()=>{o.activeEl==1&&o.filterTask("Active"),o.activeEl==2&&o.filterTask("Completed")};return(l,r)=>(g(),w("div",me,[e("div",{class:D(["flex h-5 w-5 cursor-pointer items-center justify-center rounded-full",[a.task.done?"check":""]]),onClick:r[0]||(r[0]=n=>(c(o).toggleTask(a.task,c(k).currentUser!=null?c(k).currentUser.uid:""),C(),c(o).checkHaveCompletedTasks()))},[e("i",{class:D([a.task.done?s.icon:t.icon])},null,2)],2),a.task!=u.value?(g(),w("label",{key:0,class:D([[a.task.done?s.text:t.text],"w-3/4 break-words px-3"]),onDblclick:r[1]||(r[1]=n=>m(a.task))},E(a.task.content),35)):_((g(),w("input",{key:1,type:"text","onUpdate:modelValue":r[2]||(r[2]=n=>a.task.content=n),class:"w-3/4 px-3",onVnodeMounted:r[3]||(r[3]=({el:n})=>n.focus()),onBlur:r[4]||(r[4]=n=>b(a.task)),onKeyup:[r[5]||(r[5]=B(n=>b(a.task),["enter"])),r[6]||(r[6]=B(n=>v(a.task),["escape"]))]},null,544)),[[$,a.task.content]]),e("i",{class:"absolute right-5 h-[18px] w-[18px] cursor-pointer bg-icon-cross transition-all hover:rotate-90",onClick:r[7]||(r[7]=n=>(c(o).removeTask(a.task,c(k).currentUser!=null?c(k).currentUser.uid:""),l.CheckHaveComletedTasks()))})]))}},O=()=>({login:async(s,t)=>{await ae(k,s,t)},register:async(s,t)=>{await oe(k,s,t)},logout:async()=>{await re(k)},resetPassword:async s=>{await ne(k,s)}}),ve={class:"h-full min-h-screen dark:bg-dark-bg"},ye=e("div",{class:"z-0 h-72 bg-desktop-light bg-cover bg-center dark:bg-desktop-dark"},null,-1),we={class:"container z-10 mx-auto -mt-52 h-auto w-11/12 pb-40 md:w-3/5 lg:w-2/5"},xe={class:"flex justify-between"},_e=e("h1",{class:"text-3xl font-bold tracking-widest text-very-light-gray"}," TODO ",-1),$e={class:"mt-12 mb-8 flex h-12 w-full items-center gap-4 rounded bg-white px-4 dark:bg-dark-bg-secondary"},Ce=e("div",{class:"h-5 w-5 rounded-full border-2 border-gray-200"},null,-1),Te=["onKeypress"],De={class:"overflow-hidden rounded-t shadow-xl"},Ee={class:"relative flex h-12 w-full items-center justify-between rounded-b bg-white px-4 shadow-xl dark:bg-dark-bg-secondary"},Pe={class:"text-xs text-dark-grayish-blue dark:text-dark-text-secondary"},Ue={class:"absolute bottom-[-5rem] left-0 flex h-12 w-full justify-center gap-4 rounded bg-white text-sm shadow-xl dark:bg-dark-bg-secondary sm:static sm:w-fit sm:shadow-none"},Ae=["onClick"],Se=["disabled"],je={class:"absolute top-5 right-5 dark:text-white lg:top-10 lg:right-10"},Le={key:0},Re=P("Login"),Ve={key:1},Be=P("Logout"),He=e("h1",{class:"title dark:text-dark-text"},"Do you want to log out?",-1),Oe={class:"flex w-full justify-around"},Ie=P("Yes"),ze={setup(i){const{addData:a,readData:f,updateTheme:o}=H(),{logout:s}=O(),t=V(),d=p(""),u=p(!1),m=p(!1),b=()=>{u.value?(t.addTask(d.value),a(t.tasks,k.currentUser.uid),d.value=""):(t.addTask(d.value),d.value="")},v=[{name:"All",id:0},{name:"Active",id:1},{name:"Completed",id:2}],C=()=>{for(let l of t.filteredTasks)l.done&&(t.removeTask(l,k.currentUser!=null?k.currentUser.uid:""),t.activeEl=0,t.haveCompletedTasks=!1)};return I(()=>{z(k,async l=>{l?(await f(l.uid),t.counter=t.tasks.filter(r=>!r.done).length,u.value=!0,t.checkHaveCompletedTasks()):(u.value=!1,t.$reset())})}),(l,r)=>{const n=L("router-link");return g(),w(U,null,[e("div",{class:D([c(t).isDark?"dark":""])},[e("div",ve,[ye,e("div",we,[e("div",xe,[_e,e("i",{class:"h-[26px] w-[26px] cursor-pointer bg-icon-moon transition delay-1000 ease-in dark:bg-icon-sun",onClick:r[0]||(r[0]=y=>(c(t).toggleTheme(),c(k).currentUser?c(o)(c(k).currentUser.uid):null))})]),e("div",$e,[Ce,_(e("input",{type:"text",class:"w-full caret-bright-blue placeholder:text-dark-grayish-blue focus:outline-none dark:bg-dark-bg-secondary dark:text-dark-text",placeholder:"Add a new task","onUpdate:modelValue":r[1]||(r[1]=y=>d.value=y),onKeypress:B(b,["enter"])},null,40,Te),[[$,d.value]])]),e("div",De,[(g(!0),w(U,null,q(c(t).filteredTasks,(y,h)=>(g(),T(be,{key:h,task:y},null,8,["task"]))),128))]),e("div",Ee,[e("p",Pe,E(c(t).counter)+" "+E(c(t).counter>=2?"tasks":"task")+" left ",1),e("div",Ue,[(g(),w(U,null,q(v,(y,h)=>e("button",{key:h,onClick:yt=>(c(t).filterTask(y.name),c(t).activeEl=y.id),class:D(["dark:text-dark-text-secondary",[c(t).activeEl===h?"active":""]])},E(y.name),11,Ae)),64))]),e("button",{type:"button",class:D(["text-sm dark:text-dark-text-secondary",c(t).haveCompletedTasks?"":"cursor-not-allowed text-very-light-grayish-blue dark:text-[#404251]"]),onClick:r[2]||(r[2]=y=>C()),disabled:!c(t).haveCompletedTasks}," Clear Completed ",10,Se)])]),e("div",je,[u.value?(g(),w("div",Ve,[P(" Hi "+E(c(k).currentUser.email.split("@")[0])+", ",1),e("button",{onClick:r[3]||(r[3]=y=>m.value=!0)},[A(n,{to:"/"},{default:x(()=>[Be]),_:1})])])):(g(),w("button",Le,[A(n,{to:"/login"},{default:x(()=>[Re]),_:1})]))])])],2),m.value?(g(),T(j,{key:0,isDark:c(t).isDark},{default:x(()=>[He,e("div",Oe,[e("button",{onClick:r[4]||(r[4]=y=>m.value=!1),class:"btn shadow-red-400/50"}," No "),e("button",{onClick:r[5]||(r[5]=y=>(c(s)(),m.value=!1)),class:"btn bg-sky-400 shadow-sky-400/50"},[A(n,{to:"/"},{default:x(()=>[Ie]),_:1})])])]),_:1},8,["isDark"])):S("",!0)],64)}}},Fe={class:"check flex h-screen items-center justify-center"},Ke={class:"mx-auto w-11/12 max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800 sm:w-full"},Me={class:"px-6 py-4"},Ne=e("h2",{class:"text-center text-3xl font-medium text-gray-600"},"Login",-1),qe=["onSubmit"],We={class:"mt-4 w-full"},Ye={class:"mt-4 w-full"},Ge={class:"mt-4 flex items-center justify-between"},Je=e("input",{type:"submit",value:"Login",class:"transform cursor-pointer rounded bg-gray-700 px-4 py-2 leading-5 text-white transition-colors duration-200 hover:bg-gray-600 focus:outline-none"},null,-1),Qe={class:"flex items-center justify-center bg-gray-50 py-4 text-center dark:bg-gray-700"},Xe=e("span",{class:"text-sm text-gray-600 dark:text-gray-200"},"Don't have an account? ",-1),Ze={class:"mx-2 text-sm font-bold text-sky-500 hover:underline dark:text-sky-400"},et=P("Register"),tt={class:"title"},st=e("h1",{class:"title"},"Please check your email!",-1),at={setup(i){const{login:a,resetPassword:f}=O(),o=p(""),s=p(""),t=p(""),d=p(!1),u=p(!1),m=p(!1),b=p(""),v=r=>{switch(r){case"auth/wrong-password":t.value="Wrong password! Please try again";break;case"auth/user-not-found":t.value="User not found! Please register or try again";break}s.value="",d.value=!0},C=async()=>{(o.value||s.value)!=""?await a(o.value,s.value).then().catch(r=>{v(r.code)}):(t.value="Please type in your email address or password",d.value=!0)},l=async()=>{b.value!=""&&(await f(b.value),u.value=!1,m.value=!0)};return(r,n)=>{const y=L("router-link");return g(),w(U,null,[e("div",Fe,[e("div",Ke,[e("div",Me,[Ne,e("form",{onSubmit:W(C,["prevent"])},[e("div",We,[_(e("input",{class:"mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300",type:"email",placeholder:"Email","aria-label":"Email","onUpdate:modelValue":n[0]||(n[0]=h=>o.value=h)},null,512),[[$,o.value]])]),e("div",Ye,[_(e("input",{class:"mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300",type:"password",placeholder:"Password","aria-label":"Password","onUpdate:modelValue":n[1]||(n[1]=h=>s.value=h)},null,512),[[$,s.value]])]),e("div",Ge,[e("a",{href:"#",class:"text-sm text-gray-600 hover:text-gray-500 dark:text-gray-200",onClick:n[2]||(n[2]=h=>u.value=!0)},"Forget Password?"),Je])],40,qe)]),e("div",Qe,[Xe,e("div",Ze,[A(y,{to:"/register"},{default:x(()=>[et]),_:1})])])])]),d.value?(g(),T(j,{key:0},{default:x(()=>[e("h1",tt,E(t.value),1),e("button",{onClick:n[3]||(n[3]=h=>d.value=!1),class:"btn shadow-red-400/50"}," Close ")]),_:1})):S("",!0),u.value?(g(),T(j,{key:1},{default:x(()=>[_(e("input",{type:"email","onUpdate:modelValue":n[4]||(n[4]=h=>b.value=h),placeholder:"Your email",class:"mt-2 block w-full rounded-md border border-gray-700 bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[$,b.value]]),e("button",{onClick:n[5]||(n[5]=h=>l()),class:"btn h-10 w-3/4 bg-sky-400 shadow-sky-400/50 lg:w-1/2"}," Send reset link! "),e("button",{onClick:n[6]||(n[6]=h=>u.value=!1),class:"btn h-10 w-3/4 shadow-red-400/50 lg:w-1/2"}," Close ")]),_:1})):S("",!0),m.value?(g(),T(j,{key:2},{default:x(()=>[st,e("button",{onClick:n[7]||(n[7]=h=>m.value=!1),class:"btn shadow-red-400/50"}," Close ")]),_:1})):S("",!0)],64)}}},ot={class:"check flex h-screen items-center justify-center"},rt={class:"mx-auto w-11/12 max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800 sm:w-full"},nt={class:"px-6 py-4"},lt=e("h2",{class:"text-center text-3xl font-medium text-gray-600"}," Create account ",-1),it=["onSubmit"],dt={class:"mt-4 w-full"},ut={class:"mt-4 w-full"},ct={class:"mt-4 w-full"},ft=e("div",{class:"mt-4 flex items-center justify-end"},[e("input",{type:"submit",value:"Register",class:"transform cursor-pointer rounded bg-gray-700 px-4 py-2 leading-5 text-white transition-colors duration-200 hover:bg-gray-600 focus:outline-none"})],-1),gt={class:"flex items-center justify-center bg-gray-50 py-4 text-center dark:bg-gray-700"},kt=e("span",{class:"text-sm text-gray-600 dark:text-gray-200"},"Have an account? ",-1),pt={class:"mx-2 text-sm font-bold text-sky-500 hover:underline dark:text-sky-400"},ht=P("Login"),mt={class:"title"},bt={setup(i){const{register:a}=O(),f=p(""),o=p(""),s=p(""),t=p(""),d=p(!1),u=b=>{switch(b){case"auth/email-already-in-use":f.value="",t.value="Email already in use. Please try again!";break;case"auth/invalid-email":f.value="",t.value="Invalid email. Please try again!";break;case"auth/weak-password":t.value="Weak password. Please try again!";break}o.value="",s.value="",d.value=!0},m=async()=>{o.value==s.value?await a(f.value,o.value).then().catch(b=>{u(b.code)}):(t.value="Wrong password confirmation, please try again!",o.value="",s.value="",d.value=!0)};return(b,v)=>{const C=L("router-link");return g(),w(U,null,[e("div",ot,[e("div",rt,[e("div",nt,[lt,e("form",{onSubmit:W(m,["prevent"])},[e("div",dt,[_(e("input",{class:"mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300",type:"email",placeholder:"Email","aria-label":"Email","onUpdate:modelValue":v[0]||(v[0]=l=>f.value=l)},null,512),[[$,f.value]])]),e("div",ut,[_(e("input",{class:"mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300",type:"password",placeholder:"Password","aria-label":"Password","onUpdate:modelValue":v[1]||(v[1]=l=>o.value=l)},null,512),[[$,o.value]])]),e("div",ct,[_(e("input",{class:"mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300",type:"password",placeholder:"Confirm Password","aria-label":"Confirm Password","onUpdate:modelValue":v[2]||(v[2]=l=>s.value=l)},null,512),[[$,s.value]])]),ft],40,it)]),e("div",gt,[kt,e("div",pt,[A(C,{to:"/login"},{default:x(()=>[ht]),_:1})])])])]),d.value?(g(),T(j,{key:0},{default:x(()=>[e("h1",mt,E(t.value),1),e("button",{onClick:v[3]||(v[3]=l=>d.value=!1),class:"btn shadow-red-400/50"}," Close ")]),_:1})):S("",!0)],64)}}},vt=le({history:ie(),routes:[{path:"/",name:"Home",component:ze},{path:"/login",name:"Login",component:at},{path:"/register",name:"Register",component:bt}]}),G=de(ke);G.use(ue());G.use(vt).mount("#app");
