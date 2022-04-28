import{i as J,B as Q,g as X,u as Z,a as ee,o as z,b as F,r as L,c as p,d as T,e as w,f as e,h as te,n as E,y as K,C as M,_ as N,S as q,j as se,k as h,l as f,t as D,w as _,v as $,m as B,s as oe,p as ae,q as re,x as ne,F as U,z as H,A,D as x,E as P,G as S,H as W,I as le,J as ie,K as de,L as ue}from"./vendor.e3e68a59.js";const ce=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function u(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=u(s);fetch(s.href,t)}};ce();const fe={apiKey:"AIzaSyD5G1tB0tO3pSHEDtY8yzROY9uQrsYFSs4",authDomain:"todo-e47c0.firebaseapp.com",databaseURL:"https://todo-e47c0-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"todo-e47c0",storageBucket:"todo-e47c0.appspot.com",messagingSenderId:"391559150737",appId:"1:391559150737:web:2231f001dd5f4ec3991330"},ge=J(fe),R=Q(),k=X(ge),pe={setup(i){const o=Z(),u=ee();return z(()=>{F(k,a=>{a&&(u.path=="/login"||u.path=="/register")&&o.replace("/")})}),(a,s)=>{const t=L("router-view");return p(),T(t)}}};const ke={class:"modal-overlay flex h-full w-full items-center justify-center bg-black/40"},he={class:"modal-body flex h-1/3 w-10/12 flex-col items-center justify-around rounded-xl bg-white p-5 dark:bg-dark-bg dark:shadow dark:shadow-sky-200 sm:w-3/5 md:w-2/5"},j={props:{isDark:Boolean},setup(i){const o=i;return(u,a)=>(p(),w("div",{class:E(["modal fixed bottom-0 top-0 right-0 left-0",[o.isDark?"dark":""]])},[e("div",ke,[e("div",he,[te(u.$slots,"default")])])],2))}},O=()=>({addData:async(a,s)=>{try{await K(M(R,"users",s),{tasks:a})}catch(t){console.log("Error handling document: ",t)}},readData:async a=>{try{const s=V();s.$reset(),(await N(q(R,"users"))).forEach(c=>{if(c.id==a&&s.tasks.length==0){for(let g of c.data().tasks)s.tasks.push(g);s.filteredTasks=s.tasks}}),(await N(q(R,"theme"))).forEach(c=>{c.id==a&&(s.isDark=c.data().theme)})}catch(s){console.log("Error handling document: ",s)}},updateTheme:async a=>{const t=V().isDark;await K(M(R,"theme",a),{theme:t})}}),{addData:Y}=O(),V=se("main",{state:()=>({tasks:[],filteredTasks:[],counter:0,isDark:!1,activeEl:0}),getters:{},actions:{addTask(i){i!=""&&(this.tasks=[{content:i,done:!1},...this.tasks],this.counter++,this.filteredTasks=this.tasks,this.activeEl=0)},removeTask(i,o){this.tasks=this.tasks.filter(u=>u!=i),this.filteredTasks=this.tasks,i.done||this.counter--,o&&Y(this.tasks,o)},filterTask(i){this.filteredTasks=this.tasks.filter(o=>{if(i=="Active")return o.done==!1;if(i=="Completed")return o.done==!0;if(i=="All")return o})},toggleTask(i,o){i.done=!i.done,i.done==!0?this.counter--:this.counter++,o&&Y(this.tasks,o)},toggleTheme(){this.isDark=!this.isDark}}}),me={class:"relative flex h-auto w-full items-center gap-2 border-b border-light-grayish-blue bg-very-light-gray px-4 py-[10px] dark:border-dark-border dark:bg-dark-bg-secondary"},be={props:{task:Object},setup(i){const o=i,{addData:u}=O(),a=V(),s=()=>{a.activeEl==1&&a.filterTask("Active"),a.activeEl==2&&a.filterTask("Completed")},t={icon:["bg-icon-check w-[11px] h-[9px]"],text:["line-through text-light-grayish-blue dark:text-dark-text-secondary"]},d={icon:["w-5 h-5 border-2 rounded-full border-gray-200"],text:["dark:text-dark-text"]};let c="";const g=h(),v=l=>{c=l.content,g.value=l},m=l=>{g.value&&(g.value=null,l.content=l.content.trim(),u(a.tasks,k.currentUser.uid),l.content||a.removeTask(l,k.currentUser.uid))},C=l=>{g.value=null,l.content=c};return(l,r)=>(p(),w("div",me,[e("div",{class:E(["flex h-5 w-5 cursor-pointer items-center justify-center rounded-full",[o.task.done?"check":""]]),onClick:r[0]||(r[0]=n=>(f(a).toggleTask(o.task,f(k).currentUser!=null?f(k).currentUser.uid:""),s()))},[e("i",{class:E([o.task.done?t.icon:d.icon])},null,2)],2),o.task!=g.value?(p(),w("label",{key:0,class:E([[o.task.done?t.text:d.text],"w-3/4 break-words px-3"]),onDblclick:r[1]||(r[1]=n=>v(o.task))},D(o.task.content),35)):_((p(),w("input",{key:1,type:"text","onUpdate:modelValue":r[2]||(r[2]=n=>o.task.content=n),class:"w-3/4 px-3",onVnodeMounted:r[3]||(r[3]=({el:n})=>n.focus()),onBlur:r[4]||(r[4]=n=>m(o.task)),onKeyup:[r[5]||(r[5]=B(n=>m(o.task),["enter"])),r[6]||(r[6]=B(n=>C(o.task),["escape"]))]},null,544)),[[$,o.task.content]]),e("i",{class:"absolute right-5 h-[18px] w-[18px] cursor-pointer bg-icon-cross transition-all hover:rotate-90",onClick:r[7]||(r[7]=n=>f(a).removeTask(o.task,f(k).currentUser!=null?f(k).currentUser.uid:""))})]))}},I=()=>({login:async(s,t)=>{await oe(k,s,t)},register:async(s,t)=>{await ae(k,s,t)},logout:async()=>{await re(k)},resetPassword:async s=>{await ne(k,s)}}),ye={class:"h-full min-h-screen dark:bg-dark-bg"},ve=e("div",{class:"z-0 h-72 bg-desktop-light bg-cover bg-center dark:bg-desktop-dark"},null,-1),we={class:"container z-10 mx-auto -mt-52 h-auto w-11/12 pb-40 md:w-3/5 lg:w-2/5"},xe={class:"flex justify-between"},_e=e("h1",{class:"text-3xl font-bold tracking-widest text-very-light-gray"}," TODO ",-1),$e={class:"mt-12 mb-8 flex h-12 w-full items-center gap-4 rounded bg-white px-4 dark:bg-dark-bg-secondary"},Ce=e("div",{class:"h-5 w-5 rounded-full border-2 border-gray-200"},null,-1),Te=["onKeypress"],De={class:"overflow-hidden rounded-t shadow-xl"},Ee={class:"relative flex h-12 w-full items-center justify-between rounded-b bg-white px-4 shadow-xl dark:bg-dark-bg-secondary"},Pe={class:"text-xs text-dark-grayish-blue dark:text-dark-text-secondary"},Ue={class:"absolute bottom-[-5rem] left-0 flex h-12 w-full justify-center gap-4 rounded bg-white text-sm shadow-xl dark:bg-dark-bg-secondary sm:static sm:w-fit sm:shadow-none"},Ae=["onClick"],Se={class:"absolute top-5 right-5 dark:text-white lg:top-10 lg:right-10"},je={key:0},Le=P("Login"),Re={key:1},Ve=P("Logout"),Be=e("h1",{class:"title dark:text-dark-text"},"Do you want to log out?",-1),Oe={class:"flex w-full justify-around"},Ie=P("Yes"),ze={setup(i){const{addData:o,readData:u,updateTheme:a}=O(),{logout:s}=I(),t=V(),d=h(""),c=h(!1),g=h(!1),v=()=>{c.value?(t.addTask(d.value),o(t.tasks,k.currentUser.uid),d.value=""):(t.addTask(d.value),d.value="")},m=[{name:"All",id:0},{name:"Active",id:1},{name:"Completed",id:2}],C=()=>{for(let l of t.filteredTasks)l.done&&(t.removeTask(l,k.currentUser!=null?k.currentUser.uid:""),t.activeEl=0)};return z(()=>{F(k,async l=>{l?(await u(l.uid),t.counter=t.tasks.filter(r=>!r.done).length,c.value=!0):(c.value=!1,t.$reset())})}),(l,r)=>{const n=L("router-link");return p(),w(U,null,[e("div",{class:E([f(t).isDark?"dark":""])},[e("div",ye,[ve,e("div",we,[e("div",xe,[_e,e("i",{class:"h-[26px] w-[26px] cursor-pointer bg-icon-moon transition delay-1000 ease-in dark:bg-icon-sun",onClick:r[0]||(r[0]=y=>(f(t).toggleTheme(),f(k).currentUser?f(a)(f(k).currentUser.uid):null))})]),e("div",$e,[Ce,_(e("input",{type:"text",class:"w-full caret-bright-blue placeholder:text-dark-grayish-blue focus:outline-none dark:bg-dark-bg-secondary dark:text-dark-text",placeholder:"Add a new task","onUpdate:modelValue":r[1]||(r[1]=y=>d.value=y),onKeypress:B(v,["enter"])},null,40,Te),[[$,d.value]])]),e("div",De,[(p(!0),w(U,null,H(f(t).filteredTasks,(y,b)=>(p(),T(be,{key:b,task:y},null,8,["task"]))),128))]),e("div",Ee,[e("p",Pe,D(f(t).counter)+" "+D(f(t).counter>=2?"tasks":"task")+" left ",1),e("div",Ue,[(p(),w(U,null,H(m,(y,b)=>e("button",{key:b,onClick:yt=>(f(t).filterTask(y.name),f(t).activeEl=y.id),class:E(["dark:text-dark-text-secondary",[f(t).activeEl===b?"active":""]])},D(y.name),11,Ae)),64))]),e("button",{class:"text-sm dark:text-dark-text-secondary",onClick:r[2]||(r[2]=y=>C())}," Clear Completed ")])]),e("div",Se,[c.value?(p(),w("div",Re,[P(" Hi "+D(f(k).currentUser.email.split("@")[0])+", ",1),e("button",{onClick:r[3]||(r[3]=y=>g.value=!0)},[A(n,{to:"/"},{default:x(()=>[Ve]),_:1})])])):(p(),w("button",je,[A(n,{to:"/login"},{default:x(()=>[Le]),_:1})]))])])],2),g.value?(p(),T(j,{key:0,isDark:f(t).isDark},{default:x(()=>[Be,e("div",Oe,[e("button",{onClick:r[4]||(r[4]=y=>g.value=!1),class:"btn shadow-red-400/50"}," No "),e("button",{onClick:r[5]||(r[5]=y=>(f(s)(),g.value=!1)),class:"btn bg-sky-400 shadow-sky-400/50"},[A(n,{to:"/"},{default:x(()=>[Ie]),_:1})])])]),_:1},8,["isDark"])):S("",!0)],64)}}},Fe={class:"check flex h-screen items-center justify-center"},Ke={class:"mx-auto w-11/12 max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800 sm:w-full"},Me={class:"px-6 py-4"},Ne=e("h2",{class:"text-center text-3xl font-medium text-gray-600"},"Login",-1),qe=["onSubmit"],He={class:"mt-4 w-full"},We={class:"mt-4 w-full"},Ye={class:"mt-4 flex items-center justify-between"},Ge=e("input",{type:"submit",value:"Login",class:"transform cursor-pointer rounded bg-gray-700 px-4 py-2 leading-5 text-white transition-colors duration-200 hover:bg-gray-600 focus:outline-none"},null,-1),Je={class:"flex items-center justify-center bg-gray-50 py-4 text-center dark:bg-gray-700"},Qe=e("span",{class:"text-sm text-gray-600 dark:text-gray-200"},"Don't have an account? ",-1),Xe={class:"mx-2 text-sm font-bold text-sky-500 hover:underline dark:text-sky-400"},Ze=P("Register"),et={class:"title"},tt=e("h1",{class:"title"},"Please check your email!",-1),st={setup(i){const{login:o,resetPassword:u}=I(),a=h(""),s=h(""),t=h(""),d=h(!1),c=h(!1),g=h(!1),v=h(""),m=r=>{switch(r){case"auth/wrong-password":t.value="Wrong password! Please try again";break;case"auth/user-not-found":t.value="User not found! Please register or try again";break}s.value="",d.value=!0},C=async()=>{(a.value||s.value)!=""?await o(a.value,s.value).then().catch(r=>{m(r.code)}):(t.value="Please type in your email address or password",d.value=!0)},l=async()=>{v.value!=""&&(await u(v.value),c.value=!1,g.value=!0)};return(r,n)=>{const y=L("router-link");return p(),w(U,null,[e("div",Fe,[e("div",Ke,[e("div",Me,[Ne,e("form",{onSubmit:W(C,["prevent"])},[e("div",He,[_(e("input",{class:"mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300",type:"email",placeholder:"Email","aria-label":"Email","onUpdate:modelValue":n[0]||(n[0]=b=>a.value=b)},null,512),[[$,a.value]])]),e("div",We,[_(e("input",{class:"mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300",type:"password",placeholder:"Password","aria-label":"Password","onUpdate:modelValue":n[1]||(n[1]=b=>s.value=b)},null,512),[[$,s.value]])]),e("div",Ye,[e("a",{href:"#",class:"text-sm text-gray-600 hover:text-gray-500 dark:text-gray-200",onClick:n[2]||(n[2]=b=>c.value=!0)},"Forget Password?"),Ge])],40,qe)]),e("div",Je,[Qe,e("div",Xe,[A(y,{to:"/register"},{default:x(()=>[Ze]),_:1})])])])]),d.value?(p(),T(j,{key:0},{default:x(()=>[e("h1",et,D(t.value),1),e("button",{onClick:n[3]||(n[3]=b=>d.value=!1),class:"btn shadow-red-400/50"}," Close ")]),_:1})):S("",!0),c.value?(p(),T(j,{key:1},{default:x(()=>[_(e("input",{type:"email","onUpdate:modelValue":n[4]||(n[4]=b=>v.value=b),placeholder:"Your email",class:"mt-2 block w-full rounded-md border border-gray-700 bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"},null,512),[[$,v.value]]),e("button",{onClick:n[5]||(n[5]=b=>l()),class:"btn h-10 w-3/4 bg-sky-400 shadow-sky-400/50 lg:w-1/2"}," Send reset link! "),e("button",{onClick:n[6]||(n[6]=b=>c.value=!1),class:"btn h-10 w-3/4 shadow-red-400/50 lg:w-1/2"}," Close ")]),_:1})):S("",!0),g.value?(p(),T(j,{key:2},{default:x(()=>[tt,e("button",{onClick:n[7]||(n[7]=b=>g.value=!1),class:"btn shadow-red-400/50"}," Close ")]),_:1})):S("",!0)],64)}}},ot={class:"check flex h-screen items-center justify-center"},at={class:"mx-auto w-11/12 max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800 sm:w-full"},rt={class:"px-6 py-4"},nt=e("h2",{class:"text-center text-3xl font-medium text-gray-600"}," Create account ",-1),lt=["onSubmit"],it={class:"mt-4 w-full"},dt={class:"mt-4 w-full"},ut={class:"mt-4 w-full"},ct=e("div",{class:"mt-4 flex items-center justify-end"},[e("input",{type:"submit",value:"Register",class:"transform cursor-pointer rounded bg-gray-700 px-4 py-2 leading-5 text-white transition-colors duration-200 hover:bg-gray-600 focus:outline-none"})],-1),ft={class:"flex items-center justify-center bg-gray-50 py-4 text-center dark:bg-gray-700"},gt=e("span",{class:"text-sm text-gray-600 dark:text-gray-200"},"Have an account? ",-1),pt={class:"mx-2 text-sm font-bold text-sky-500 hover:underline dark:text-sky-400"},kt=P("Login"),ht={class:"title"},mt={setup(i){const{register:o}=I(),u=h(""),a=h(""),s=h(""),t=h(""),d=h(!1),c=v=>{switch(v){case"auth/email-already-in-use":u.value="",t.value="Email already in use. Please try again!";break;case"auth/invalid-email":u.value="",t.value="Invalid email. Please try again!";break;case"auth/weak-password":t.value="Weak password. Please try again!";break}a.value="",s.value="",d.value=!0},g=async()=>{a.value==s.value?await o(u.value,a.value).then().catch(v=>{c(v.code)}):(t.value="Wrong password confirmation, please try again!",a.value="",s.value="",d.value=!0)};return(v,m)=>{const C=L("router-link");return p(),w(U,null,[e("div",ot,[e("div",at,[e("div",rt,[nt,e("form",{onSubmit:W(g,["prevent"])},[e("div",it,[_(e("input",{class:"mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300",type:"email",placeholder:"Email","aria-label":"Email","onUpdate:modelValue":m[0]||(m[0]=l=>u.value=l)},null,512),[[$,u.value]])]),e("div",dt,[_(e("input",{class:"mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300",type:"password",placeholder:"Password","aria-label":"Password","onUpdate:modelValue":m[1]||(m[1]=l=>a.value=l)},null,512),[[$,a.value]])]),e("div",ut,[_(e("input",{class:"mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300",type:"password",placeholder:"Confirm Password","aria-label":"Confirm Password","onUpdate:modelValue":m[2]||(m[2]=l=>s.value=l)},null,512),[[$,s.value]])]),ct],40,lt)]),e("div",ft,[gt,e("div",pt,[A(C,{to:"/login"},{default:x(()=>[kt]),_:1})])])])]),d.value?(p(),T(j,{key:0},{default:x(()=>[e("h1",ht,D(t.value),1),e("button",{onClick:m[3]||(m[3]=l=>d.value=!1),class:"btn shadow-red-400/50"}," Close ")]),_:1})):S("",!0)],64)}}},bt=le({history:ie(),routes:[{path:"/",name:"Home",component:ze},{path:"/login",name:"Login",component:st},{path:"/register",name:"Register",component:mt}]}),G=de(pe);G.use(ue());G.use(bt).mount("#app");
