function Fo(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Wg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zg=Fo(Wg);function ql(t){return!!t||t===""}function Vo(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Fe(s)?Yg(s):Vo(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Fe(t))return t;if(Oe(t))return t}}const Gg=/;(?![^(]*\))/g,Jg=/:(.+)/;function Yg(t){const e={};return t.split(Gg).forEach(n=>{if(n){const s=n.split(Jg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function $o(t){let e="";if(Fe(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=$o(t[n]);s&&(e+=s+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bA=t=>t==null?"":J(t)||Oe(t)&&(t.toString===zl||!Z(t.toString))?JSON.stringify(t,Hl,2):String(t),Hl=(t,e)=>e&&e.__v_isRef?Hl(t,e.value):Kn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Kl(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!J(e)&&!Gl(e)?String(e):e,pe={},Hn=[],wt=()=>{},Qg=()=>!1,Xg=/^on[^a-z]/,Kr=t=>Xg.test(t),Bo=t=>t.startsWith("onUpdate:"),Ke=Object.assign,jo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zg=Object.prototype.hasOwnProperty,ie=(t,e)=>Zg.call(t,e),J=Array.isArray,Kn=t=>Wr(t)==="[object Map]",Kl=t=>Wr(t)==="[object Set]",Z=t=>typeof t=="function",Fe=t=>typeof t=="string",qo=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",Wl=t=>Oe(t)&&Z(t.then)&&Z(t.catch),zl=Object.prototype.toString,Wr=t=>zl.call(t),em=t=>Wr(t).slice(8,-1),Gl=t=>Wr(t)==="[object Object]",Ho=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zr=Fo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tm=/-(\w)/g,Ct=Gr(t=>t.replace(tm,(e,n)=>n?n.toUpperCase():"")),nm=/\B([A-Z])/g,fn=Gr(t=>t.replace(nm,"-$1").toLowerCase()),Jr=Gr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ko=Gr(t=>t?`on${Jr(t)}`:""),xs=(t,e)=>!Object.is(t,e),Yr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Wo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jl;const sm=()=>Jl||(Jl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let dn;const Xr=[];class Yl{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&dn&&(this.parent=dn,this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Xr.push(this),dn=this)}off(){this.active&&(Xr.pop(),dn=Xr[Xr.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Ql(t){return new Yl(t)}function rm(t,e){e=e||dn,e&&e.active&&e.effects.push(t)}const zo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xl=t=>(t.w&Ht)>0,Zl=t=>(t.n&Ht)>0,im=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ht},om=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Xl(r)&&!Zl(r)?r.delete(t):e[n++]=r,r.w&=~Ht,r.n&=~Ht}e.length=n}},Go=new WeakMap;let Us=0,Ht=1;const Jo=30,Fs=[];let pn;const gn=Symbol(""),Yo=Symbol("");class Qo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],rm(this,s)}run(){if(!this.active)return this.fn();if(!Fs.includes(this))try{return Fs.push(pn=this),am(),Ht=1<<++Us,Us<=Jo?im(this):eu(this),this.fn()}finally{Us<=Jo&&om(this),Ht=1<<--Us,mn(),Fs.pop();const e=Fs.length;pn=e>0?Fs[e-1]:void 0}}stop(){this.active&&(eu(this),this.onStop&&this.onStop(),this.active=!1)}}function eu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Wn=!0;const Xo=[];function zn(){Xo.push(Wn),Wn=!1}function am(){Xo.push(Wn),Wn=!0}function mn(){const t=Xo.pop();Wn=t===void 0?!0:t}function ot(t,e,n){if(!tu())return;let s=Go.get(t);s||Go.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=zo()),nu(r)}function tu(){return Wn&&pn!==void 0}function nu(t,e){let n=!1;Us<=Jo?Zl(t)||(t.n|=Ht,n=!Xl(t)):n=!t.has(pn),n&&(t.add(pn),pn.deps.push(t))}function Lt(t,e,n,s,r,i){const o=Go.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?Ho(n)&&a.push(o.get("length")):(a.push(o.get(gn)),Kn(t)&&a.push(o.get(Yo)));break;case"delete":J(t)||(a.push(o.get(gn)),Kn(t)&&a.push(o.get(Yo)));break;case"set":Kn(t)&&a.push(o.get(gn));break}if(a.length===1)a[0]&&Zo(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Zo(zo(c))}}function Zo(t,e){for(const n of J(t)?t:[...t])(n!==pn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const cm=Fo("__proto__,__v_isRef,__isVue"),su=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(qo)),lm=ea(),um=ea(!1,!0),hm=ea(!0),ru=fm();function fm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=oe(this);for(let i=0,o=this.length;i<o;i++)ot(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){zn();const s=oe(this)[e].apply(this,n);return mn(),s}}),t}function ea(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_raw"&&i===(t?e?Rm:du:e?fu:hu).get(s))return s;const o=J(s);if(!t&&o&&ie(ru,r))return Reflect.get(ru,r,i);const a=Reflect.get(s,r,i);return(qo(r)?su.has(r):cm(r))||(t||ot(s,"get",r),e)?a:Ae(a)?!o||!Ho(r)?a.value:a:Oe(a)?t?pu(a):Gn(a):a}}const dm=iu(),pm=iu(!0);function iu(t=!1){return function(n,s,r,i){let o=n[s];if(!t&&!ra(r)&&(r=oe(r),o=oe(o),!J(n)&&Ae(o)&&!Ae(r)))return o.value=r,!0;const a=J(n)&&Ho(s)?Number(s)<n.length:ie(n,s),c=Reflect.set(n,s,r,i);return n===oe(i)&&(a?xs(r,o)&&Lt(n,"set",s,r):Lt(n,"add",s,r)),c}}function gm(t,e){const n=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Lt(t,"delete",e,void 0),s}function mm(t,e){const n=Reflect.has(t,e);return(!qo(e)||!su.has(e))&&ot(t,"has",e),n}function ym(t){return ot(t,"iterate",J(t)?"length":gn),Reflect.ownKeys(t)}const ou={get:lm,set:dm,deleteProperty:gm,has:mm,ownKeys:ym},vm={get:hm,set(t,e){return!0},deleteProperty(t,e){return!0}},wm=Ke({},ou,{get:um,set:pm}),ta=t=>t,Zr=t=>Reflect.getPrototypeOf(t);function ei(t,e,n=!1,s=!1){t=t.__v_raw;const r=oe(t),i=oe(e);e!==i&&!n&&ot(r,"get",e),!n&&ot(r,"get",i);const{has:o}=Zr(r),a=s?ta:n?ia:Vs;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ti(t,e=!1){const n=this.__v_raw,s=oe(n),r=oe(t);return t!==r&&!e&&ot(s,"has",t),!e&&ot(s,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function ni(t,e=!1){return t=t.__v_raw,!e&&ot(oe(t),"iterate",gn),Reflect.get(t,"size",t)}function au(t){t=oe(t);const e=oe(this);return Zr(e).has.call(e,t)||(e.add(t),Lt(e,"add",t,t)),this}function cu(t,e){e=oe(e);const n=oe(this),{has:s,get:r}=Zr(n);let i=s.call(n,t);i||(t=oe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?xs(e,o)&&Lt(n,"set",t,e):Lt(n,"add",t,e),this}function lu(t){const e=oe(this),{has:n,get:s}=Zr(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Lt(e,"delete",t,void 0),i}function uu(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&Lt(t,"clear",void 0,void 0),n}function si(t,e){return function(s,r){const i=this,o=i.__v_raw,a=oe(o),c=e?ta:t?ia:Vs;return!t&&ot(a,"iterate",gn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ri(t,e,n){return function(...s){const r=this.__v_raw,i=oe(r),o=Kn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ta:e?ia:Vs;return!e&&ot(i,"iterate",c?Yo:gn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Kt(t){return function(...e){return t==="delete"?!1:this}}function Em(){const t={get(i){return ei(this,i)},get size(){return ni(this)},has:ti,add:au,set:cu,delete:lu,clear:uu,forEach:si(!1,!1)},e={get(i){return ei(this,i,!1,!0)},get size(){return ni(this)},has:ti,add:au,set:cu,delete:lu,clear:uu,forEach:si(!1,!0)},n={get(i){return ei(this,i,!0)},get size(){return ni(this,!0)},has(i){return ti.call(this,i,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:si(!0,!1)},s={get(i){return ei(this,i,!0,!0)},get size(){return ni(this,!0)},has(i){return ti.call(this,i,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:si(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ri(i,!1,!1),n[i]=ri(i,!0,!1),e[i]=ri(i,!1,!0),s[i]=ri(i,!0,!0)}),[t,n,e,s]}const[_m,Tm,Im,bm]=Em();function na(t,e){const n=e?t?bm:Im:t?Tm:_m;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const Am={get:na(!1,!1)},Sm={get:na(!1,!0)},Cm={get:na(!0,!1)},hu=new WeakMap,fu=new WeakMap,du=new WeakMap,Rm=new WeakMap;function km(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nm(t){return t.__v_skip||!Object.isExtensible(t)?0:km(em(t))}function Gn(t){return t&&t.__v_isReadonly?t:sa(t,!1,ou,Am,hu)}function Om(t){return sa(t,!1,wm,Sm,fu)}function pu(t){return sa(t,!0,vm,Cm,du)}function sa(t,e,n,s,r){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Nm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Wt(t){return ra(t)?Wt(t.__v_raw):!!(t&&t.__v_isReactive)}function ra(t){return!!(t&&t.__v_isReadonly)}function gu(t){return Wt(t)||ra(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function Jn(t){return Qr(t,"__v_skip",!0),t}const Vs=t=>Oe(t)?Gn(t):t,ia=t=>Oe(t)?pu(t):t;function mu(t){tu()&&(t=oe(t),t.dep||(t.dep=zo()),nu(t.dep))}function yu(t,e){t=oe(t),t.dep&&Zo(t.dep)}function Ae(t){return Boolean(t&&t.__v_isRef===!0)}function oa(t){return vu(t,!1)}function Pm(t){return vu(t,!0)}function vu(t,e){return Ae(t)?t:new Dm(t,e)}class Dm{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:Vs(e)}get value(){return mu(this),this._value}set value(e){e=this._shallow?e:oe(e),xs(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Vs(e),yu(this))}}function $s(t){return Ae(t)?t.value:t}const Lm={get:(t,e,n)=>$s(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function wu(t){return Wt(t)?t:new Proxy(t,Lm)}function Mm(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=Um(t,n);return e}class xm{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Um(t,e,n){const s=t[e];return Ae(s)?s:new xm(t,e,n)}class Fm{constructor(e,n,s){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Qo(e,()=>{this._dirty||(this._dirty=!0,yu(this))}),this.__v_isReadonly=s}get value(){const e=oe(this);return mu(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Et(t,e){let n,s;const r=Z(t);return r?(n=t,s=wt):(n=t.get,s=t.set),new Fm(n,s,r||!s)}Promise.resolve();function Vm(t,e,...n){const s=t.vnode.props||pe;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||pe;f?r=n.map(g=>g.trim()):h&&(r=n.map(Wo))}let a,c=s[a=Ko(e)]||s[a=Ko(Ct(e))];!c&&i&&(c=s[a=Ko(fn(e))]),c&&mt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mt(l,t,6,r)}}function Eu(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=Eu(l,e,!0);u&&(a=!0,Ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(J(i)?i.forEach(c=>o[c]=null):Ke(o,i),s.set(t,o),o)}function aa(t,e){return!t||!Kr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,fn(e))||ie(t,e))}let at=null,_u=null;function ii(t){const e=at;return at=t,_u=t&&t.type.__scopeId||null,e}function $m(t,e=at,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Gu(-1);const i=ii(e),o=t(...r);return ii(i),s._d&&Gu(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function ca(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:b}=t;let A,k;const x=ii(t);try{if(n.shapeFlag&4){const B=r||s;A=Rt(u.call(B,B,h,i,g,f,y)),k=c}else{const B=e;A=Rt(B.length>1?B(i,{attrs:c,slots:a,emit:l}):B(i,null)),k=e.props?c:Bm(c)}}catch(B){Bs.length=0,mi(B,t,1),A=tt(Tt)}let z=A;if(k&&b!==!1){const B=Object.keys(k),{shapeFlag:ne}=z;B.length&&ne&(1|6)&&(o&&B.some(Bo)&&(k=jm(k,o)),z=Yn(z,k))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),A=z,ii(x),A}const Bm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kr(n))&&((e||(e={}))[n]=t[n]);return e},jm=(t,e)=>{const n={};for(const s in t)(!Bo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function qm(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Tu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!aa(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Tu(s,o,l):!0:!!o;return!1}function Tu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!aa(n,i))return!0}return!1}function Hm({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Km=t=>t.__isSuspense;function Wm(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):qy(t)}function oi(t,e){if(De){let n=De.provides;const s=De.parent&&De.parent.provides;s===n&&(n=De.provides=Object.create(s)),n[t]=e}}function _t(t,e,n=!1){const s=De||at;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s.proxy):e}}function zm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ru(()=>{t.isMounted=!0}),ku(()=>{t.isUnmounting=!0}),t}const pt=[Function,Array],Gm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pt,onEnter:pt,onAfterEnter:pt,onEnterCancelled:pt,onBeforeLeave:pt,onLeave:pt,onAfterLeave:pt,onLeaveCancelled:pt,onBeforeAppear:pt,onAppear:pt,onAfterAppear:pt,onAppearCancelled:pt},setup(t,{slots:e}){const n=Ia(),s=zm();let r;return()=>{const i=e.default&&Au(e.default(),!0);if(!i||!i.length)return;const o=oe(t),{mode:a}=o,c=i[0];if(s.isLeaving)return ua(c);const l=bu(c);if(!l)return ua(c);const u=la(l,o,s,n);ha(l,u);const h=n.subTree,f=h&&bu(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const b=y();r===void 0?r=b:b!==r&&(r=b,g=!0)}if(f&&f.type!==Tt&&(!_n(l,f)||g)){const b=la(f,o,s,n);if(ha(f,b),a==="out-in")return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.update()},ua(c);a==="in-out"&&l.type!==Tt&&(b.delayLeave=(A,k,x)=>{const z=Iu(s,f);z[String(f.key)]=f,A._leaveCb=()=>{k(),A._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=x})}return c}}},Jm=Gm;function Iu(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function la(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:b,onAppear:A,onAfterAppear:k,onAppearCancelled:x}=e,z=String(t.key),B=Iu(n,t),ne=(D,ue)=>{D&&mt(D,s,9,ue)},H={mode:i,persisted:o,beforeEnter(D){let ue=a;if(!n.isMounted)if(r)ue=b||a;else return;D._leaveCb&&D._leaveCb(!0);const re=B[z];re&&_n(t,re)&&re.el._leaveCb&&re.el._leaveCb(),ne(ue,[D])},enter(D){let ue=c,re=l,be=u;if(!n.isMounted)if(r)ue=A||c,re=k||l,be=x||u;else return;let Pe=!1;const Ue=D._enterCb=Ze=>{Pe||(Pe=!0,Ze?ne(be,[D]):ne(re,[D]),H.delayedLeave&&H.delayedLeave(),D._enterCb=void 0)};ue?(ue(D,Ue),ue.length<=1&&Ue()):Ue()},leave(D,ue){const re=String(t.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return ue();ne(h,[D]);let be=!1;const Pe=D._leaveCb=Ue=>{be||(be=!0,ue(),Ue?ne(y,[D]):ne(g,[D]),D._leaveCb=void 0,B[re]===t&&delete B[re])};B[re]=t,f?(f(D,Pe),f.length<=1&&Pe()):Pe()},clone(D){return la(D,e,n,s)}};return H}function ua(t){if(ai(t))return t=Yn(t),t.children=null,t}function bu(t){return ai(t)?t.children?t.children[0]:void 0:t}function ha(t,e){t.shapeFlag&6&&t.component?ha(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Au(t,e=!1){let n=[],s=0;for(let r=0;r<t.length;r++){const i=t[r];i.type===gt?(i.patchFlag&128&&s++,n=n.concat(Au(i.children,e))):(e||i.type!==Tt)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Su(t){return Z(t)?{setup:t,name:t.name}:t}const fa=t=>!!t.type.__asyncLoader,ai=t=>t.type.__isKeepAlive;function Ym(t,e){Cu(t,"a",e)}function Qm(t,e){Cu(t,"da",e)}function Cu(t,e,n=De){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ci(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ai(r.parent.vnode)&&Xm(s,e,n,r),r=r.parent}}function Xm(t,e,n,s){const r=ci(e,t,s,!0);da(()=>{jo(s[e],r)},n)}function ci(t,e,n=De,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;zn(),Qn(n);const a=mt(e,n,t,o);return Tn(),mn(),a});return s?r.unshift(i):r.push(i),i}}const Mt=t=>(e,n=De)=>(!gi||t==="sp")&&ci(t,e,n),Zm=Mt("bm"),Ru=Mt("m"),ey=Mt("bu"),ty=Mt("u"),ku=Mt("bum"),da=Mt("um"),ny=Mt("sp"),sy=Mt("rtg"),ry=Mt("rtc");function iy(t,e=De){ci("ec",t,e)}let pa=!0;function oy(t){const e=Pu(t),n=t.proxy,s=t.ctx;pa=!1,e.beforeCreate&&Nu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:b,deactivated:A,beforeDestroy:k,beforeUnmount:x,destroyed:z,unmounted:B,render:ne,renderTracked:H,renderTriggered:D,errorCaptured:ue,serverPrefetch:re,expose:be,inheritAttrs:Pe,components:Ue,directives:Ze,filters:ke}=e;if(l&&ay(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const he=o[me];Z(he)&&(s[me]=he.bind(n))}if(r){const me=r.call(n,n);Oe(me)&&(t.data=Gn(me))}if(pa=!0,i)for(const me in i){const he=i[me],ft=Z(he)?he.bind(n,n):Z(he.get)?he.get.bind(n,n):wt,jn=!Z(he)&&Z(he.set)?he.set.bind(n):wt,Dt=Et({get:ft,set:jn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:At=>Dt.value=At})}if(a)for(const me in a)Ou(a[me],s,n,me);if(c){const me=Z(c)?c.call(n):c;Reflect.ownKeys(me).forEach(he=>{oi(he,me[he])})}u&&Nu(u,t,"c");function Ne(me,he){J(he)?he.forEach(ft=>me(ft.bind(n))):he&&me(he.bind(n))}if(Ne(Zm,h),Ne(Ru,f),Ne(ey,g),Ne(ty,y),Ne(Ym,b),Ne(Qm,A),Ne(iy,ue),Ne(ry,H),Ne(sy,D),Ne(ku,x),Ne(da,B),Ne(ny,re),J(be))if(be.length){const me=t.exposed||(t.exposed={});be.forEach(he=>{Object.defineProperty(me,he,{get:()=>n[he],set:ft=>n[he]=ft})})}else t.exposed||(t.exposed={});ne&&t.render===wt&&(t.render=ne),Pe!=null&&(t.inheritAttrs=Pe),Ue&&(t.components=Ue),Ze&&(t.directives=Ze)}function ay(t,e,n=wt,s=!1){J(t)&&(t=ga(t));for(const r in t){const i=t[r];let o;Oe(i)?"default"in i?o=_t(i.from||r,i.default,!0):o=_t(i.from||r):o=_t(i),Ae(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Nu(t,e,n){mt(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ou(t,e,n,s){const r=s.includes(".")?fh(n,s):()=>n[s];if(Fe(t)){const i=e[t];Z(i)&&Ws(r,i)}else if(Z(t))Ws(r,t.bind(n));else if(Oe(t))if(J(t))t.forEach(i=>Ou(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Ws(r,i,t)}}function Pu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>li(c,l,o,!0)),li(c,e,o)),i.set(e,c),c}function li(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&li(t,i,n,!0),r&&r.forEach(o=>li(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=cy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const cy={data:Du,props:yn,emits:yn,methods:yn,computed:yn,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:yn,directives:yn,watch:uy,provide:Du,inject:ly};function Du(t,e){return e?t?function(){return Ke(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function ly(t,e){return yn(ga(t),ga(e))}function ga(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Je(t,e){return t?[...new Set([].concat(t,e))]:e}function yn(t,e){return t?Ke(Ke(Object.create(null),t),e):e}function uy(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const s in e)n[s]=Je(t[s],e[s]);return n}function hy(t,e,n,s=!1){const r={},i={};Qr(i,fi,1),t.propsDefaults=Object.create(null),Lu(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Om(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function fy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=oe(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const g=e[f];if(c)if(ie(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=Ct(f);r[y]=ma(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Lu(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=fn(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=ma(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&Lt(t,"set","$attrs")}function Lu(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(zr(c))continue;const l=e[c];let u;r&&ie(r,u=Ct(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:aa(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=oe(n),l=a||pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ma(r,c,h,l[h],t,!ie(l,h))}}return o}function ma(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Qn(r),s=l[n]=c.call(null,e),Tn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===fn(n))&&(s=!0))}return s}function Mu(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[f,g]=Mu(h,e,!0);Ke(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,Hn),Hn;if(J(i))for(let u=0;u<i.length;u++){const h=Ct(i[u]);xu(h)&&(o[h]=pe)}else if(i)for(const u in i){const h=Ct(u);if(xu(h)){const f=i[u],g=o[h]=J(f)||Z(f)?{type:f}:f;if(g){const y=Vu(Boolean,g.type),b=Vu(String,g.type);g[0]=y>-1,g[1]=b<0||y<b,(y>-1||ie(g,"default"))&&a.push(h)}}}const l=[o,a];return s.set(t,l),l}function xu(t){return t[0]!=="$"}function Uu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Fu(t,e){return Uu(t)===Uu(e)}function Vu(t,e){return J(e)?e.findIndex(n=>Fu(n,t)):Z(e)&&Fu(e,t)?0:-1}const $u=t=>t[0]==="_"||t==="$stable",ya=t=>J(t)?t.map(Rt):[Rt(t)],dy=(t,e,n)=>{const s=$m((...r)=>ya(e(...r)),n);return s._c=!1,s},Bu=(t,e,n)=>{const s=t._ctx;for(const r in t){if($u(r))continue;const i=t[r];if(Z(i))e[r]=dy(r,i,s);else if(i!=null){const o=ya(i);e[r]=()=>o}}},ju=(t,e)=>{const n=ya(e);t.slots.default=()=>n},py=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Qr(e,"_",n)):Bu(e,t.slots={})}else t.slots={},e&&ju(t,e);Qr(t.slots,fi,1)},gy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ke(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Bu(e,r)),o=e}else e&&(ju(t,e),o={default:1});if(i)for(const a in r)!$u(a)&&!(a in o)&&delete r[a]};function AA(t,e){const n=at;if(n===null)return t;const s=n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=pe]=e[i];Z(o)&&(o={mounted:o,updated:o}),o.deep&&In(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function vn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(zn(),mt(c,n,8,[t.el,a,t,e]),mn())}}function qu(){return{app:null,config:{isNativeTag:Qg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let my=0;function yy(t,e){return function(s,r=null){r!=null&&!Oe(r)&&(r=null);const i=qu(),o=new Set;let a=!1;const c=i.app={_uid:my++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ky,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=tt(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,ba(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function va(t,e,n,s,r=!1){if(J(t)){t.forEach((f,g)=>va(f,e&&(J(e)?e[g]:e),n,s,r));return}if(fa(s)&&!r)return;const i=s.shapeFlag&4?ba(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Fe(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):Ae(l)&&(l.value=null)),Z(c))Gt(c,a,12,[o,u]);else{const f=Fe(c),g=Ae(c);if(f||g){const y=()=>{if(t.f){const b=f?u[c]:c.value;r?J(b)&&jo(b,i):J(b)?b.includes(i)||b.push(i):f?u[c]=[i]:(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ie(h,c)&&(h[c]=o)):Ae(c)&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,et(y,n)):y()}}}const et=Wm;function vy(t){return wy(t)}function wy(t,e){const n=sm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=wt,cloneNode:y,insertStaticContent:b}=t,A=(d,p,m,E=null,w=null,S=null,N=!1,I=null,C=!!p.dynamicChildren)=>{if(d===p)return;d&&!_n(d,p)&&(E=U(d),dt(d,w,S,!0),d=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:_,ref:V,shapeFlag:L}=p;switch(_){case wa:k(d,p,m,E);break;case Tt:x(d,p,m,E);break;case Ea:d==null&&z(p,m,E,N);break;case gt:Ze(d,p,m,E,w,S,N,I,C);break;default:L&1?H(d,p,m,E,w,S,N,I,C):L&6?ke(d,p,m,E,w,S,N,I,C):(L&64||L&128)&&_.process(d,p,m,E,w,S,N,I,C,ye)}V!=null&&w&&va(V,d&&d.ref,S,p||d,!p)},k=(d,p,m,E)=>{if(d==null)s(p.el=a(p.children),m,E);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},x=(d,p,m,E)=>{d==null?s(p.el=c(p.children||""),m,E):p.el=d.el},z=(d,p,m,E)=>{[d.el,d.anchor]=b(d.children,p,m,E)},B=({el:d,anchor:p},m,E)=>{let w;for(;d&&d!==p;)w=f(d),s(d,m,E),d=w;s(p,m,E)},ne=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},H=(d,p,m,E,w,S,N,I,C)=>{N=N||p.type==="svg",d==null?D(p,m,E,w,S,N,I,C):be(d,p,w,S,N,I,C)},D=(d,p,m,E,w,S,N,I)=>{let C,_;const{type:V,props:L,shapeFlag:$,transition:G,patchFlag:se,dirs:_e}=d;if(d.el&&y!==void 0&&se===-1)C=d.el=y(d.el);else{if(C=d.el=o(d.type,S,L&&L.is,L),$&8?u(C,d.children):$&16&&re(d.children,C,null,E,w,S&&V!=="foreignObject",N,I),_e&&vn(d,null,E,"created"),L){for(const we in L)we!=="value"&&!zr(we)&&i(C,we,null,L[we],S,d.children,E,w,R);"value"in L&&i(C,"value",null,L.value),(_=L.onVnodeBeforeMount)&&kt(_,E,d)}ue(C,d,d.scopeId,N,E)}_e&&vn(d,null,E,"beforeMount");const de=(!w||w&&!w.pendingBranch)&&G&&!G.persisted;de&&G.beforeEnter(C),s(C,p,m),((_=L&&L.onVnodeMounted)||de||_e)&&et(()=>{_&&kt(_,E,d),de&&G.enter(C),_e&&vn(d,null,E,"mounted")},w)},ue=(d,p,m,E,w)=>{if(m&&g(d,m),E)for(let S=0;S<E.length;S++)g(d,E[S]);if(w){let S=w.subTree;if(p===S){const N=w.vnode;ue(d,N,N.scopeId,N.slotScopeIds,w.parent)}}},re=(d,p,m,E,w,S,N,I,C=0)=>{for(let _=C;_<d.length;_++){const V=d[_]=I?zt(d[_]):Rt(d[_]);A(null,V,p,m,E,w,S,N,I)}},be=(d,p,m,E,w,S,N)=>{const I=p.el=d.el;let{patchFlag:C,dynamicChildren:_,dirs:V}=p;C|=d.patchFlag&16;const L=d.props||pe,$=p.props||pe;let G;m&&wn(m,!1),(G=$.onVnodeBeforeUpdate)&&kt(G,m,p,d),V&&vn(p,d,m,"beforeUpdate"),m&&wn(m,!0);const se=w&&p.type!=="foreignObject";if(_?Pe(d.dynamicChildren,_,I,m,E,se,S):N||ft(d,p,I,null,m,E,se,S,!1),C>0){if(C&16)Ue(I,p,L,$,m,E,w);else if(C&2&&L.class!==$.class&&i(I,"class",null,$.class,w),C&4&&i(I,"style",L.style,$.style,w),C&8){const _e=p.dynamicProps;for(let de=0;de<_e.length;de++){const we=_e[de],vt=L[we],qn=$[we];(qn!==vt||we==="value")&&i(I,we,vt,qn,w,d.children,m,E,R)}}C&1&&d.children!==p.children&&u(I,p.children)}else!N&&_==null&&Ue(I,p,L,$,m,E,w);((G=$.onVnodeUpdated)||V)&&et(()=>{G&&kt(G,m,p,d),V&&vn(p,d,m,"updated")},E)},Pe=(d,p,m,E,w,S,N)=>{for(let I=0;I<p.length;I++){const C=d[I],_=p[I],V=C.el&&(C.type===gt||!_n(C,_)||C.shapeFlag&(6|64))?h(C.el):m;A(C,_,V,null,E,w,S,N,!0)}},Ue=(d,p,m,E,w,S,N)=>{if(m!==E){for(const I in E){if(zr(I))continue;const C=E[I],_=m[I];C!==_&&I!=="value"&&i(d,I,_,C,N,p.children,w,S,R)}if(m!==pe)for(const I in m)!zr(I)&&!(I in E)&&i(d,I,m[I],null,N,p.children,w,S,R);"value"in E&&i(d,"value",m.value,E.value)}},Ze=(d,p,m,E,w,S,N,I,C)=>{const _=p.el=d?d.el:a(""),V=p.anchor=d?d.anchor:a("");let{patchFlag:L,dynamicChildren:$,slotScopeIds:G}=p;G&&(I=I?I.concat(G):G),d==null?(s(_,m,E),s(V,m,E),re(p.children,m,V,w,S,N,I,C)):L>0&&L&64&&$&&d.dynamicChildren?(Pe(d.dynamicChildren,$,m,w,S,N,I),(p.key!=null||w&&p===w.subTree)&&Hu(d,p,!0)):ft(d,p,m,V,w,S,N,I,C)},ke=(d,p,m,E,w,S,N,I,C)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?w.ctx.activate(p,m,E,N,C):Bn(p,m,E,w,S,N,C):Ne(d,p,C)},Bn=(d,p,m,E,w,S,N)=>{const I=d.component=Py(d,E,w);if(ai(d)&&(I.ctx.renderer=ye),Dy(I),I.asyncDep){if(w&&w.registerDep(I,me),!d.el){const C=I.subTree=tt(Tt);x(null,C,p,m)}return}me(I,d,p,m,w,S,N)},Ne=(d,p,m)=>{const E=p.component=d.component;if(qm(d,p,m))if(E.asyncDep&&!E.asyncResolved){he(E,p,m);return}else E.next=p,By(E.update),E.update();else p.component=d.component,p.el=d.el,E.vnode=p},me=(d,p,m,E,w,S,N)=>{const I=()=>{if(d.isMounted){let{next:V,bu:L,u:$,parent:G,vnode:se}=d,_e=V,de;wn(d,!1),V?(V.el=se.el,he(d,V,N)):V=se,L&&Yr(L),(de=V.props&&V.props.onVnodeBeforeUpdate)&&kt(de,G,V,se),wn(d,!0);const we=ca(d),vt=d.subTree;d.subTree=we,A(vt,we,h(vt.el),U(vt),d,w,S),V.el=we.el,_e===null&&Hm(d,we.el),$&&et($,w),(de=V.props&&V.props.onVnodeUpdated)&&et(()=>kt(de,G,V,se),w)}else{let V;const{el:L,props:$}=p,{bm:G,m:se,parent:_e}=d,de=fa(p);if(wn(d,!1),G&&Yr(G),!de&&(V=$&&$.onVnodeBeforeMount)&&kt(V,_e,p),wn(d,!0),L&&X){const we=()=>{d.subTree=ca(d),X(L,d.subTree,d,w,null)};de?p.type.__asyncLoader().then(()=>!d.isUnmounted&&we()):we()}else{const we=d.subTree=ca(d);A(null,we,m,E,d,w,S),p.el=we.el}if(se&&et(se,w),!de&&(V=$&&$.onVnodeMounted)){const we=p;et(()=>kt(V,_e,we),w)}p.shapeFlag&256&&d.a&&et(d.a,w),d.isMounted=!0,p=m=E=null}},C=d.effect=new Qo(I,()=>ih(d.update),d.scope),_=d.update=C.run.bind(C);_.id=d.uid,wn(d,!0),_()},he=(d,p,m)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,fy(d,p.props,E,m),gy(d,p.children,m),zn(),ka(void 0,d.update),mn()},ft=(d,p,m,E,w,S,N,I,C=!1)=>{const _=d&&d.children,V=d?d.shapeFlag:0,L=p.children,{patchFlag:$,shapeFlag:G}=p;if($>0){if($&128){Dt(_,L,m,E,w,S,N,I,C);return}else if($&256){jn(_,L,m,E,w,S,N,I,C);return}}G&8?(V&16&&R(_,w,S),L!==_&&u(m,L)):V&16?G&16?Dt(_,L,m,E,w,S,N,I,C):R(_,w,S,!0):(V&8&&u(m,""),G&16&&re(L,m,E,w,S,N,I,C))},jn=(d,p,m,E,w,S,N,I,C)=>{d=d||Hn,p=p||Hn;const _=d.length,V=p.length,L=Math.min(_,V);let $;for($=0;$<L;$++){const G=p[$]=C?zt(p[$]):Rt(p[$]);A(d[$],G,m,null,w,S,N,I,C)}_>V?R(d,w,S,!0,!1,L):re(p,m,E,w,S,N,I,C,L)},Dt=(d,p,m,E,w,S,N,I,C)=>{let _=0;const V=p.length;let L=d.length-1,$=V-1;for(;_<=L&&_<=$;){const G=d[_],se=p[_]=C?zt(p[_]):Rt(p[_]);if(_n(G,se))A(G,se,m,null,w,S,N,I,C);else break;_++}for(;_<=L&&_<=$;){const G=d[L],se=p[$]=C?zt(p[$]):Rt(p[$]);if(_n(G,se))A(G,se,m,null,w,S,N,I,C);else break;L--,$--}if(_>L){if(_<=$){const G=$+1,se=G<V?p[G].el:E;for(;_<=$;)A(null,p[_]=C?zt(p[_]):Rt(p[_]),m,se,w,S,N,I,C),_++}}else if(_>$)for(;_<=L;)dt(d[_],w,S,!0),_++;else{const G=_,se=_,_e=new Map;for(_=se;_<=$;_++){const it=p[_]=C?zt(p[_]):Rt(p[_]);it.key!=null&&_e.set(it.key,_)}let de,we=0;const vt=$-se+1;let qn=!1,$l=0;const Ms=new Array(vt);for(_=0;_<vt;_++)Ms[_]=0;for(_=G;_<=L;_++){const it=d[_];if(we>=vt){dt(it,w,S,!0);continue}let St;if(it.key!=null)St=_e.get(it.key);else for(de=se;de<=$;de++)if(Ms[de-se]===0&&_n(it,p[de])){St=de;break}St===void 0?dt(it,w,S,!0):(Ms[St-se]=_+1,St>=$l?$l=St:qn=!0,A(it,p[St],m,null,w,S,N,I,C),we++)}const Bl=qn?Ey(Ms):Hn;for(de=Bl.length-1,_=vt-1;_>=0;_--){const it=se+_,St=p[it],jl=it+1<V?p[it+1].el:E;Ms[_]===0?A(null,St,m,jl,w,S,N,I,C):qn&&(de<0||_!==Bl[de]?At(St,m,jl,2):de--)}}},At=(d,p,m,E,w=null)=>{const{el:S,type:N,transition:I,children:C,shapeFlag:_}=d;if(_&6){At(d.component.subTree,p,m,E);return}if(_&128){d.suspense.move(p,m,E);return}if(_&64){N.move(d,p,m,ye);return}if(N===gt){s(S,p,m);for(let L=0;L<C.length;L++)At(C[L],p,m,E);s(d.anchor,p,m);return}if(N===Ea){B(d,p,m);return}if(E!==2&&_&1&&I)if(E===0)I.beforeEnter(S),s(S,p,m),et(()=>I.enter(S),w);else{const{leave:L,delayLeave:$,afterLeave:G}=I,se=()=>s(S,p,m),_e=()=>{L(S,()=>{se(),G&&G()})};$?$(S,se,_e):_e()}else s(S,p,m)},dt=(d,p,m,E=!1,w=!1)=>{const{type:S,props:N,ref:I,children:C,dynamicChildren:_,shapeFlag:V,patchFlag:L,dirs:$}=d;if(I!=null&&va(I,null,m,d,!0),V&256){p.ctx.deactivate(d);return}const G=V&1&&$,se=!fa(d);let _e;if(se&&(_e=N&&N.onVnodeBeforeUnmount)&&kt(_e,p,d),V&6)M(d.component,m,E);else{if(V&128){d.suspense.unmount(m,E);return}G&&vn(d,null,p,"beforeUnmount"),V&64?d.type.remove(d,p,m,w,ye,E):_&&(S!==gt||L>0&&L&64)?R(_,p,m,!1,!0):(S===gt&&L&(128|256)||!w&&V&16)&&R(C,p,m),E&&Uo(d)}(se&&(_e=N&&N.onVnodeUnmounted)||G)&&et(()=>{_e&&kt(_e,p,d),G&&vn(d,null,p,"unmounted")},m)},Uo=d=>{const{type:p,el:m,anchor:E,transition:w}=d;if(p===gt){v(m,E);return}if(p===Ea){ne(d);return}const S=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:N,delayLeave:I}=w,C=()=>N(m,S);I?I(d.el,S,C):C()}else S()},v=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},M=(d,p,m)=>{const{bum:E,scope:w,update:S,subTree:N,um:I}=d;E&&Yr(E),w.stop(),S&&(S.active=!1,dt(N,d,p,m)),I&&et(I,p),et(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(d,p,m,E=!1,w=!1,S=0)=>{for(let N=S;N<d.length;N++)dt(d[N],p,m,E,w)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),fe=(d,p,m)=>{d==null?p._vnode&&dt(p._vnode,null,null,!0):A(p._vnode||null,d,p,null,null,null,m),ch(),p._vnode=d},ye={p:A,um:dt,m:At,r:Uo,mt:Bn,mc:re,pc:ft,pbc:Pe,n:U,o:t};let ee,X;return e&&([ee,X]=e(ye)),{render:fe,hydrate:ee,createApp:yy(fe,ee)}}function wn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hu(t,e,n=!1){const s=t.children,r=e.children;if(J(s)&&J(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=zt(r[i]),a.el=o.el),n||Hu(o,a))}}function Ey(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const _y=t=>t.__isTeleport,Ku="components";function SA(t,e){return Iy(Ku,t,!0,e)||t}const Ty=Symbol();function Iy(t,e,n=!0,s=!1){const r=at||De;if(r){const i=r.type;if(t===Ku){const a=Uy(i);if(a&&(a===e||a===Ct(e)||a===Jr(Ct(e))))return i}const o=Wu(r[t]||i[t],e)||Wu(r.appContext[t],e);return!o&&s?i:o}}function Wu(t,e){return t&&(t[e]||t[Ct(e)]||t[Jr(Ct(e))])}const gt=Symbol(void 0),wa=Symbol(void 0),Tt=Symbol(void 0),Ea=Symbol(void 0),Bs=[];let En=null;function zu(t=!1){Bs.push(En=t?null:[])}function by(){Bs.pop(),En=Bs[Bs.length-1]||null}let ui=1;function Gu(t){ui+=t}function Ju(t){return t.dynamicChildren=ui>0?En||Hn:null,by(),ui>0&&En&&En.push(t),t}function CA(t,e,n,s,r,i){return Ju(Xu(t,e,n,s,r,i,!0))}function Yu(t,e,n,s,r){return Ju(tt(t,e,n,s,r,!0))}function hi(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const fi="__vInternal",Qu=({key:t})=>t!=null?t:null,di=({ref:t,ref_key:e,ref_for:n})=>t!=null?Fe(t)||Ae(t)||Z(t)?{i:at,r:t,k:e,f:!!n}:t:null;function Xu(t,e=null,n=null,s=0,r=null,i=t===gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qu(e),ref:e&&di(e),scopeId:_u,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(_a(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),ui>0&&!o&&En&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&En.push(c),c}const tt=Ay;function Ay(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ty)&&(t=Tt),hi(t)){const a=Yn(t,e,!0);return n&&_a(a,n),a}if(Fy(t)&&(t=t.__vccOpts),e){e=Sy(e);let{class:a,style:c}=e;a&&!Fe(a)&&(e.class=$o(a)),Oe(c)&&(gu(c)&&!J(c)&&(c=Ke({},c)),e.style=Vo(c))}const o=Fe(t)?1:Km(t)?128:_y(t)?64:Oe(t)?4:Z(t)?2:0;return Xu(t,e,n,s,r,o,i,!0)}function Sy(t){return t?gu(t)||fi in t?Ke({},t):t:null}function Yn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Ry(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qu(a),ref:e&&e.ref?n&&r?J(r)?r.concat(di(e)):[r,di(e)]:di(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yn(t.ssContent),ssFallback:t.ssFallback&&Yn(t.ssFallback),el:t.el,anchor:t.anchor}}function Cy(t=" ",e=0){return tt(wa,null,t,e)}function RA(t="",e=!1){return e?(zu(),Yu(Tt,null,t)):tt(Tt,null,t)}function Rt(t){return t==null||typeof t=="boolean"?tt(Tt):J(t)?tt(gt,null,t.slice()):typeof t=="object"?zt(t):tt(wa,null,String(t))}function zt(t){return t.el===null||t.memo?t:Yn(t)}function _a(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&(1|64)){const r=e.default;r&&(r._c&&(r._d=!1),_a(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(fi in e)?e._ctx=at:r===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[Cy(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ry(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=$o([e.class,s.class]));else if(r==="style")e.style=Vo([e.style,s.style]);else if(Kr(r)){const i=e[r],o=s[r];i!==o&&!(J(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function kt(t,e,n,s=null){mt(t,e,7,[n,s])}function kA(t,e,n,s){let r;const i=n&&n[s];if(J(t)||Fe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Oe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function NA(t,e,n={},s,r){if(at.isCE)return tt("slot",e==="default"?null:{name:e},s&&s());let i=t[e];i&&i._c&&(i._d=!1),zu();const o=i&&Zu(i(n)),a=Yu(gt,{key:n.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Zu(t){return t.some(e=>hi(e)?!(e.type===Tt||e.type===gt&&!Zu(e.children)):!0)?t:null}const Ta=t=>t?eh(t)?ba(t)||t.proxy:Ta(t.parent):null,pi=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ta(t.parent),$root:t=>Ta(t.root),$emit:t=>t.emit,$options:t=>Pu(t),$forceUpdate:t=>()=>ih(t.update),$nextTick:t=>Ra.bind(t.proxy),$watch:t=>Hy.bind(t)}),ky={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==pe&&ie(s,e))return o[e]=1,s[e];if(r!==pe&&ie(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==pe&&ie(n,e))return o[e]=4,n[e];pa&&(o[e]=0)}}const u=pi[e];let h,f;if(u)return e==="$attrs"&&ot(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==pe&&ie(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;if(r!==pe&&ie(r,e))r[e]=n;else if(s!==pe&&ie(s,e))s[e]=n;else if(ie(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==pe&&ie(t,o)||e!==pe&&ie(e,o)||(a=i[0])&&ie(a,o)||ie(s,o)||ie(pi,o)||ie(r.config.globalProperties,o)}},Ny=qu();let Oy=0;function Py(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Ny,i={uid:Oy++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mu(s,r),emitsOptions:Eu(s,r),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:s.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vm.bind(null,i),t.ce&&t.ce(i),i}let De=null;const Ia=()=>De||at,Qn=t=>{De=t,t.scope.on()},Tn=()=>{De&&De.scope.off(),De=null};function eh(t){return t.vnode.shapeFlag&4}let gi=!1;function Dy(t,e=!1){gi=e;const{props:n,children:s}=t.vnode,r=eh(t);hy(t,n,r,e),py(t,s);const i=r?Ly(t,e):void 0;return gi=!1,i}function Ly(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Jn(new Proxy(t.ctx,ky));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?xy(t):null;Qn(t),zn();const i=Gt(s,t,0,[t.props,r]);if(mn(),Tn(),Wl(i)){if(i.then(Tn,Tn),e)return i.then(o=>{th(t,o,e)}).catch(o=>{mi(o,t,0)});t.asyncDep=i}else th(t,i,e)}else sh(t,e)}function th(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=wu(e)),sh(t,n)}let nh;function sh(t,e,n){const s=t.type;if(!t.render){if(!e&&nh&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ke(Ke({isCustomElement:i,delimiters:a},o),c);s.render=nh(r,l)}}t.render=s.render||wt}Qn(t),zn(),oy(t),mn(),Tn()}function My(t){return new Proxy(t.attrs,{get(e,n){return ot(t,"get","$attrs"),e[n]}})}function xy(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=My(t))},slots:t.slots,emit:t.emit,expose:e}}function ba(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(wu(Jn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pi)return pi[n](t)}}))}function Uy(t){return Z(t)&&t.displayName||t.name}function Fy(t){return Z(t)&&"__vccOpts"in t}function Gt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){mi(i,e,n)}return r}function mt(t,e,n,s){if(Z(t)){const i=Gt(t,e,n,s);return i&&Wl(i)&&i.catch(o=>{mi(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(mt(t[i],e,n,s));return r}function mi(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Gt(c,null,10,[t,o,a]);return}}Vy(t,n,r,s)}function Vy(t,e,n,s=!0){console.error(t)}let yi=!1,Aa=!1;const ct=[];let xt=0;const js=[];let qs=null,Xn=0;const Hs=[];let Jt=null,Zn=0;const rh=Promise.resolve();let Sa=null,Ca=null;function Ra(t){const e=Sa||rh;return t?e.then(this?t.bind(this):t):e}function $y(t){let e=xt+1,n=ct.length;for(;e<n;){const s=e+n>>>1;Ks(ct[s])<t?e=s+1:n=s}return e}function ih(t){(!ct.length||!ct.includes(t,yi&&t.allowRecurse?xt+1:xt))&&t!==Ca&&(t.id==null?ct.push(t):ct.splice($y(t.id),0,t),oh())}function oh(){!yi&&!Aa&&(Aa=!0,Sa=rh.then(lh))}function By(t){const e=ct.indexOf(t);e>xt&&ct.splice(e,1)}function ah(t,e,n,s){J(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),oh()}function jy(t){ah(t,qs,js,Xn)}function qy(t){ah(t,Jt,Hs,Zn)}function ka(t,e=null){if(js.length){for(Ca=e,qs=[...new Set(js)],js.length=0,Xn=0;Xn<qs.length;Xn++)qs[Xn]();qs=null,Xn=0,Ca=null,ka(t,e)}}function ch(t){if(Hs.length){const e=[...new Set(Hs)];if(Hs.length=0,Jt){Jt.push(...e);return}for(Jt=e,Jt.sort((n,s)=>Ks(n)-Ks(s)),Zn=0;Zn<Jt.length;Zn++)Jt[Zn]();Jt=null,Zn=0}}const Ks=t=>t.id==null?1/0:t.id;function lh(t){Aa=!1,yi=!0,ka(t),ct.sort((n,s)=>Ks(n)-Ks(s));const e=wt;try{for(xt=0;xt<ct.length;xt++){const n=ct[xt];n&&n.active!==!1&&Gt(n,null,14)}}finally{xt=0,ct.length=0,ch(),yi=!1,Sa=null,(ct.length||js.length||Hs.length)&&lh(t)}}const uh={};function Ws(t,e,n){return hh(t,e,n)}function hh(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=pe){const a=De;let c,l=!1,u=!1;if(Ae(t)?(c=()=>t.value,l=!!t._shallow):Wt(t)?(c=()=>t,s=!0):J(t)?(u=!0,l=t.some(Wt),c=()=>t.map(k=>{if(Ae(k))return k.value;if(Wt(k))return In(k);if(Z(k))return Gt(k,a,2)})):Z(t)?e?c=()=>Gt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),mt(t,a,3,[f])}:c=wt,e&&s){const k=c;c=()=>In(k())}let h,f=k=>{h=A.onStop=()=>{Gt(k,a,4)}};if(gi)return f=wt,e?n&&mt(e,a,3,[c(),u?[]:void 0,f]):c(),wt;let g=u?[]:uh;const y=()=>{if(!!A.active)if(e){const k=A.run();(s||l||(u?k.some((x,z)=>xs(x,g[z])):xs(k,g)))&&(h&&h(),mt(e,a,3,[k,g===uh?void 0:g,f]),g=k)}else A.run()};y.allowRecurse=!!e;let b;r==="sync"?b=y:r==="post"?b=()=>et(y,a&&a.suspense):b=()=>{!a||a.isMounted?jy(y):y()};const A=new Qo(c,b);return e?n?y():g=A.run():r==="post"?et(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&jo(a.scope.effects,A)}}function Hy(t,e,n){const s=this.proxy,r=Fe(t)?t.includes(".")?fh(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=De;Qn(this);const a=hh(r,i.bind(s),n);return o?Qn(o):Tn(),a}function fh(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function In(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))In(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)In(t[n],e);else if(Kl(t)||Kn(t))t.forEach(n=>{In(n,e)});else if(Gl(t))for(const n in t)In(t[n],e);return t}function dh(t,e,n){const s=arguments.length;return s===2?Oe(e)&&!J(e)?hi(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&hi(n)&&(n=[n]),tt(t,e,n))}const Ky="3.2.26",Wy="http://www.w3.org/2000/svg",es=typeof document!="undefined"?document:null,ph=new Map,zy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?es.createElementNS(Wy,t):es.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>es.createTextNode(t),createComment:t=>es.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>es.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s){const r=n?n.previousSibling:e.lastChild;let i=ph.get(t);if(!i){const o=es.createElement("template");if(o.innerHTML=s?`<svg>${t}</svg>`:t,i=o.content,s){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}ph.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Gy(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Jy(t,e,n){const s=t.style,r=Fe(n);if(n&&!r){for(const i in n)Na(s,i,n[i]);if(e&&!Fe(e))for(const i in e)n[i]==null&&Na(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const gh=/\s*!important$/;function Na(t,e,n){if(J(n))n.forEach(s=>Na(t,e,s));else if(e.startsWith("--"))t.setProperty(e,n);else{const s=Yy(t,e);gh.test(n)?t.setProperty(fn(s),n.replace(gh,""),"important"):t[s]=n}}const mh=["Webkit","Moz","ms"],Oa={};function Yy(t,e){const n=Oa[e];if(n)return n;let s=Ct(e);if(s!=="filter"&&s in t)return Oa[e]=s;s=Jr(s);for(let r=0;r<mh.length;r++){const i=mh[r]+s;if(i in t)return Oa[e]=i}return e}const yh="http://www.w3.org/1999/xlink";function Qy(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yh,e.slice(6,e.length)):t.setAttributeNS(yh,e,n);else{const i=zg(e);n==null||i&&!ql(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Xy(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=ql(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let vi=Date.now,vh=!1;if(typeof window!="undefined"){vi()>document.createEvent("Event").timeStamp&&(vi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);vh=!!(t&&Number(t[1])<=53)}let Pa=0;const Zy=Promise.resolve(),ev=()=>{Pa=0},tv=()=>Pa||(Zy.then(ev),Pa=vi());function ts(t,e,n,s){t.addEventListener(e,n,s)}function nv(t,e,n,s){t.removeEventListener(e,n,s)}function sv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=rv(e);if(s){const l=i[e]=iv(s,r);ts(t,a,l,c)}else o&&(nv(t,a,o,c),i[e]=void 0)}}const wh=/(?:Once|Passive|Capture)$/;function rv(t){let e;if(wh.test(t)){e={};let n;for(;n=t.match(wh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[fn(t.slice(2)),e]}function iv(t,e){const n=s=>{const r=s.timeStamp||vi();(vh||r>=n.attached-1)&&mt(ov(s,n.value),e,5,[s])};return n.value=t,n.attached=tv(),n}function ov(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s(r))}else return e}const Eh=/^on[a-z]/,av=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Gy(t,s,r):e==="style"?Jy(t,n,s):Kr(e)?Bo(e)||sv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cv(t,e,s,r))?Xy(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Qy(t,e,s,r))};function cv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Eh.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Eh.test(e)&&Fe(n)?!1:e in t}const lv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Jm.props;const _h=t=>{const e=t.props["onUpdate:modelValue"];return J(e)?n=>Yr(e,n):e};function uv(t){t.target.composing=!0}function Th(t){const e=t.target;e.composing&&(e.composing=!1,hv(e,"input"))}function hv(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const OA={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=_h(r);const i=s||r.props&&r.props.type==="number";ts(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Wo(a)),t._assign(a)}),n&&ts(t,"change",()=>{t.value=t.value.trim()}),e||(ts(t,"compositionstart",uv),ts(t,"compositionend",Th),ts(t,"change",Th))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=_h(i),t.composing||document.activeElement===t&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Wo(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},fv=["ctrl","shift","alt","meta"],dv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fv.some(n=>t[`${n}Key`]&&!e.includes(n))},PA=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=dv[e[r]];if(i&&i(n,e))return}return t(n,...s)},pv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},DA=(t,e)=>n=>{if(!("key"in n))return;const s=fn(n.key);if(e.some(r=>r===s||pv[r]===s))return t(n)},gv=Ke({patchProp:av},zy);let Ih;function mv(){return Ih||(Ih=vy(gv))}const LA=(...t)=>{const e=mv().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=yv(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function yv(t){return Fe(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const bh=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ns=t=>bh?Symbol(t):"_vr_"+t,vv=ns("rvlm"),Ah=ns("rvd"),wi=ns("r"),Da=ns("rl"),La=ns("rvl"),ss=typeof window!="undefined";function wv(t){return t.__esModule||bh&&t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function Ma(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const zs=()=>{},Ev=/\/$/,_v=t=>t.replace(Ev,"");function xa(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=Av(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Tv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Iv(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&rs(e.matched[s],n.matched[r])&&Ch(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ch(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!bv(t[n],e[n]))return!1;return!0}function bv(t,e){return Array.isArray(t)?Rh(t,e):Array.isArray(e)?Rh(e,t):t===e}function Rh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Av(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Gs;(function(t){t.pop="pop",t.push="push"})(Gs||(Gs={}));var Js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Js||(Js={}));function Sv(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_v(t)}const Cv=/^[^#]+#/;function Rv(t,e){return t.replace(Cv,"#")+e}function kv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ei=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=kv(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function kh(t,e){return(history.state?history.state.position-e:-1)+t}const Ua=new Map;function Ov(t,e){Ua.set(t,e)}function Pv(t){const e=Ua.get(t);return Ua.delete(t),e}let Dv=()=>location.protocol+"//"+location.host;function Nh(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Sh(c,"")}return Sh(n,t)+s+r}function Lv(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=Nh(t,location),y=n.value,b=e.value;let A=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}A=b?f.position-b.position:0}else s(g);r.forEach(k=>{k(n.value,y,{delta:A,type:Gs.pop,direction:A?A>0?Js.forward:Js.back:Js.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(ge({},f.state,{scroll:Ei()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Oh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ei():null}}function Mv(t){const{history:e,location:n}=window,s={value:Nh(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Dv()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ge({},e.state,Oh(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ge({},r.value,e.state,{forward:c,scroll:Ei()});i(u.current,u,!0);const h=ge({},Oh(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function MA(t){t=Sv(t);const e=Mv(t),n=Lv(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:Rv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function xv(t){return typeof t=="string"||t&&typeof t=="object"}function Ph(t){return typeof t=="string"||typeof t=="symbol"}const Yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Dh=ns("nf");var Lh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lh||(Lh={}));function is(t,e){return ge(new Error,{type:t,[Dh]:!0},e)}function bn(t,e){return t instanceof Error&&Dh in t&&(e==null||!!(t.type&e))}const Mh="[^/]+?",Uv={sensitive:!1,strict:!1,start:!0,end:!0},Fv=/[.+*?^${}()[\]/\\]/g;function Vv(t,e){const n=ge({},Uv,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Fv,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:b,optional:A,regexp:k}=f;i.push({name:y,repeatable:b,optional:A});const x=k||Mh;if(x!==Mh){g+=10;try{new RegExp(`(${x})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+B.message)}}let z=b?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(z=A&&l.length<2?`(?:/${z})`:"/"+z),A&&(z+="?"),r+=z,g+=20,A&&(g+=-8),b&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:b,optional:A}=g,k=y in l?l[y]:"";if(Array.isArray(k)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray(k)?k.join("/"):k;if(!x)if(A)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=x}}return u}return{re:o,score:s,keys:i,parse:a,stringify:c}}function $v(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Bv(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=$v(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const jv={type:0,value:""},qv=/[a-zA-Z0-9_]/;function Hv(t){if(!t)return[[]];if(t==="/")return[[jv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:qv.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Kv(t,e,n){const s=Vv(Hv(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Wv(t,e){const n=[],s=new Map;e=Uh({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,y=Gv(u);y.aliasOf=f&&f.record;const b=Uh(e,u),A=[y];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of z)A.push(ge({},y,{components:f?f.record.components:y.components,path:B,aliasOf:f?f.record:y}))}let k,x;for(const z of A){const{path:B}=z;if(h&&B[0]!=="/"){const ne=h.record.path,H=ne[ne.length-1]==="/"?"":"/";z.path=h.record.path+(B&&H+B)}if(k=Kv(z,h,b),f?f.alias.push(k):(x=x||k,x!==k&&x.alias.push(k),g&&u.name&&!xh(k)&&o(u.name)),"children"in y){const ne=y.children;for(let H=0;H<ne.length;H++)i(ne[H],k,f&&f.children[H])}f=f||k,c(k)}return x?()=>{o(x)}:zs}function o(u){if(Ph(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Bv(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!xh(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},y,b;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw is(1,{location:u});b=f.record.name,g=ge(zv(h.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),u.params),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(x=>x.re.test(y)),f&&(g=f.parse(y),b=f.record.name);else{if(f=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!f)throw is(1,{location:u,currentLocation:h});b=f.record.name,g=ge({},h.params,u.params),y=f.stringify(g)}const A=[];let k=f;for(;k;)A.unshift(k.record),k=k.parent;return{name:b,path:y,params:g,matched:A,meta:Yv(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function zv(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Gv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Jv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Jv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function xh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yv(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Uh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const Fh=/#/g,Qv=/&/g,Xv=/\//g,Zv=/=/g,ew=/\?/g,Vh=/\+/g,tw=/%5B/g,nw=/%5D/g,$h=/%5E/g,sw=/%60/g,Bh=/%7B/g,rw=/%7C/g,jh=/%7D/g,iw=/%20/g;function Fa(t){return encodeURI(""+t).replace(rw,"|").replace(tw,"[").replace(nw,"]")}function ow(t){return Fa(t).replace(Bh,"{").replace(jh,"}").replace($h,"^")}function Va(t){return Fa(t).replace(Vh,"%2B").replace(iw,"+").replace(Fh,"%23").replace(Qv,"%26").replace(sw,"`").replace(Bh,"{").replace(jh,"}").replace($h,"^")}function aw(t){return Va(t).replace(Zv,"%3D")}function cw(t){return Fa(t).replace(Fh,"%23").replace(ew,"%3F")}function lw(t){return t==null?"":cw(t).replace(Xv,"%2F")}function _i(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function uw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Vh," "),o=i.indexOf("="),a=_i(o<0?i:i.slice(0,o)),c=o<0?null:_i(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function qh(t){let e="";for(let n in t){const s=t[n];if(n=aw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&Va(i)):[s&&Va(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function Ys(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Qt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(is(4,{from:n,to:e})):h instanceof Error?a(h):xv(h)?a(is(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function $a(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(fw(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Qt(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=wv(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Qt(f,n,s,i,o)()}))}}return r}function fw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hh(t){const e=_t(wi),n=_t(Da),s=Et(()=>e.resolve($s(t.to))),r=Et(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(rs.bind(null,u));if(f>-1)return f;const g=Kh(c[l-2]);return l>1&&Kh(u)===g&&h[h.length-1].path!==g?h.findIndex(rs.bind(null,c[l-2])):f}),i=Et(()=>r.value>-1&&mw(n.params,s.value.params)),o=Et(()=>r.value>-1&&r.value===n.matched.length-1&&Ch(n.params,s.value.params));function a(c={}){return gw(c)?e[$s(t.replace)?"replace":"push"]($s(t.to)).catch(zs):Promise.resolve()}return{route:s,href:Et(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const dw=Su({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hh,setup(t,{slots:e}){const n=Gn(Hh(t)),{options:s}=_t(wi),r=Et(()=>({[Wh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Wh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:dh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),pw=dw;function gw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function mw(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Kh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wh=(t,e,n)=>t!=null?t:e!=null?e:n,yw=Su({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const s=_t(La),r=Et(()=>t.route||s.value),i=_t(Ah,0),o=Et(()=>r.value.matched[i]);oi(Ah,i+1),oi(vv,o),oi(La,r);const a=oa();return Ws(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!rs(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return zh(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,b=dh(u,ge({},g,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return zh(n.default,{Component:b,route:c})||b}}});function zh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const vw=yw;function xA(t){const e=Wv(t.routes,t),n=t.parseQuery||uw,s=t.stringifyQuery||qh,r=t.history,i=Ys(),o=Ys(),a=Ys(),c=Pm(Yt);let l=Yt;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ma.bind(null,v=>""+v),h=Ma.bind(null,lw),f=Ma.bind(null,_i);function g(v,M){let R,U;return Ph(v)?(R=e.getRecordMatcher(v),U=M):U=v,e.addRoute(U,R)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function b(){return e.getRoutes().map(v=>v.record)}function A(v){return!!e.getRecordMatcher(v)}function k(v,M){if(M=ge({},M||c.value),typeof v=="string"){const X=xa(n,v,M.path),d=e.resolve({path:X.path},M),p=r.createHref(X.fullPath);return ge(X,d,{params:f(d.params),hash:_i(X.hash),redirectedFrom:void 0,href:p})}let R;if("path"in v)R=ge({},v,{path:xa(n,v.path,M.path).path});else{const X=ge({},v.params);for(const d in X)X[d]==null&&delete X[d];R=ge({},v,{params:h(v.params)}),M.params=h(M.params)}const U=e.resolve(R,M),fe=v.hash||"";U.params=u(f(U.params));const ye=Tv(s,ge({},v,{hash:ow(fe),path:U.path})),ee=r.createHref(ye);return ge({fullPath:ye,hash:fe,query:s===qh?hw(v.query):v.query||{}},U,{redirectedFrom:void 0,href:ee})}function x(v){return typeof v=="string"?xa(n,v,c.value.path):ge({},v)}function z(v,M){if(l!==v)return is(8,{from:M,to:v})}function B(v){return D(v)}function ne(v){return B(ge(x(v),{replace:!0}))}function H(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:R}=M;let U=typeof R=="function"?R(v):R;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=x(U):{path:U},U.params={}),ge({query:v.query,hash:v.hash,params:v.params},U)}}function D(v,M){const R=l=k(v),U=c.value,fe=v.state,ye=v.force,ee=v.replace===!0,X=H(R);if(X)return D(ge(x(X),{state:fe,force:ye,replace:ee}),M||R);const d=R;d.redirectedFrom=M;let p;return!ye&&Iv(s,U,R)&&(p=is(16,{to:d,from:U}),jn(U,U,!0,!1)),(p?Promise.resolve(p):re(d,U)).catch(m=>bn(m)?m:me(m,d,U)).then(m=>{if(m){if(bn(m,2))return D(ge(x(m.to),{state:fe,force:ye,replace:ee}),M||d)}else m=Pe(d,U,!0,ee,fe);return be(d,U,m),m})}function ue(v,M){const R=z(v,M);return R?Promise.reject(R):Promise.resolve()}function re(v,M){let R;const[U,fe,ye]=ww(v,M);R=$a(U.reverse(),"beforeRouteLeave",v,M);for(const X of U)X.leaveGuards.forEach(d=>{R.push(Qt(d,v,M))});const ee=ue.bind(null,v,M);return R.push(ee),os(R).then(()=>{R=[];for(const X of i.list())R.push(Qt(X,v,M));return R.push(ee),os(R)}).then(()=>{R=$a(fe,"beforeRouteUpdate",v,M);for(const X of fe)X.updateGuards.forEach(d=>{R.push(Qt(d,v,M))});return R.push(ee),os(R)}).then(()=>{R=[];for(const X of v.matched)if(X.beforeEnter&&!M.matched.includes(X))if(Array.isArray(X.beforeEnter))for(const d of X.beforeEnter)R.push(Qt(d,v,M));else R.push(Qt(X.beforeEnter,v,M));return R.push(ee),os(R)}).then(()=>(v.matched.forEach(X=>X.enterCallbacks={}),R=$a(ye,"beforeRouteEnter",v,M),R.push(ee),os(R))).then(()=>{R=[];for(const X of o.list())R.push(Qt(X,v,M));return R.push(ee),os(R)}).catch(X=>bn(X,8)?X:Promise.reject(X))}function be(v,M,R){for(const U of a.list())U(v,M,R)}function Pe(v,M,R,U,fe){const ye=z(v,M);if(ye)return ye;const ee=M===Yt,X=ss?history.state:{};R&&(U||ee?r.replace(v.fullPath,ge({scroll:ee&&X&&X.scroll},fe)):r.push(v.fullPath,fe)),c.value=v,jn(v,M,R,ee),ft()}let Ue;function Ze(){Ue=r.listen((v,M,R)=>{const U=k(v),fe=H(U);if(fe){D(ge(fe,{replace:!0}),U).catch(zs);return}l=U;const ye=c.value;ss&&Ov(kh(ye.fullPath,R.delta),Ei()),re(U,ye).catch(ee=>bn(ee,4|8)?ee:bn(ee,2)?(D(ee.to,U).then(X=>{bn(X,4|16)&&!R.delta&&R.type===Gs.pop&&r.go(-1,!1)}).catch(zs),Promise.reject()):(R.delta&&r.go(-R.delta,!1),me(ee,U,ye))).then(ee=>{ee=ee||Pe(U,ye,!1),ee&&(R.delta?r.go(-R.delta,!1):R.type===Gs.pop&&bn(ee,4|16)&&r.go(-1,!1)),be(U,ye,ee)}).catch(zs)})}let ke=Ys(),Bn=Ys(),Ne;function me(v,M,R){ft(v);const U=Bn.list();return U.length?U.forEach(fe=>fe(v,M,R)):console.error(v),Promise.reject(v)}function he(){return Ne&&c.value!==Yt?Promise.resolve():new Promise((v,M)=>{ke.add([v,M])})}function ft(v){Ne||(Ne=!0,Ze(),ke.list().forEach(([M,R])=>v?R(v):M()),ke.reset())}function jn(v,M,R,U){const{scrollBehavior:fe}=t;if(!ss||!fe)return Promise.resolve();const ye=!R&&Pv(kh(v.fullPath,0))||(U||!R)&&history.state&&history.state.scroll||null;return Ra().then(()=>fe(v,M,ye)).then(ee=>ee&&Nv(ee)).catch(ee=>me(ee,v,M))}const Dt=v=>r.go(v);let At;const dt=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:A,getRoutes:b,resolve:k,options:t,push:B,replace:ne,go:Dt,back:()=>Dt(-1),forward:()=>Dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Bn.add,isReady:he,install(v){const M=this;v.component("RouterLink",pw),v.component("RouterView",vw),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>$s(c)}),ss&&!At&&c.value===Yt&&(At=!0,B(r.location).catch(fe=>{}));const R={};for(const fe in Yt)R[fe]=Et(()=>c.value[fe]);v.provide(wi,M),v.provide(Da,Gn(R)),v.provide(La,c);const U=v.unmount;dt.add(v),v.unmount=function(){dt.delete(v),dt.size<1&&(l=Yt,Ue&&Ue(),c.value=Yt,At=!1,Ne=!1),U()}}}}function os(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ww(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>rs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>rs(l,c))||r.push(c))}return[n,s,r]}function UA(){return _t(wi)}function FA(){return _t(Da)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)==55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)==56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},_w=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ew(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_w(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Iw=function(t){try{return Tw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gh(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Jh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aw(){return Le().indexOf("Electron/")>=0}function Qh(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sw(){return Le().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="FirebaseError";class An extends Error{constructor(e,n,s){super(n);this.code=e,this.customData=s,this.name=Cw,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Rw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new An(r,a,s)}}function Rw(t,e){return t.replace(kw,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const kw=/\{\$([^}]+)}/g;function Nw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ti(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Xh(i)&&Xh(o)){if(!Ti(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Xh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function er(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ow(t,e){const n=new Pw(t,e);return n.subscribe.bind(n)}class Pw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Dw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ba),r.error===void 0&&(r.error=Ba),r.complete===void 0&&(r.complete=Ba);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ba(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return t&&t._delegate?t._delegate:t}class as{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xw(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Mw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mw(t){return t===Sn?void 0:t}function xw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Fw={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Vw=ce.INFO,$w={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Bw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=$w[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ja{constructor(e){this.name=e,this._logLevel=Vw,this._logHandler=Bw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function qw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qa="@firebase/app",Zh="0.7.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new ja("@firebase/app"),Hw="@firebase/app-compat",Kw="@firebase/analytics-compat",Ww="@firebase/analytics",zw="@firebase/app-check-compat",Gw="@firebase/app-check",Jw="@firebase/auth",Yw="@firebase/auth-compat",Qw="@firebase/database",Xw="@firebase/database-compat",Zw="@firebase/functions",eE="@firebase/functions-compat",tE="@firebase/installations",nE="@firebase/installations-compat",sE="@firebase/messaging",rE="@firebase/messaging-compat",iE="@firebase/performance",oE="@firebase/performance-compat",aE="@firebase/remote-config",cE="@firebase/remote-config-compat",lE="@firebase/storage",uE="@firebase/storage-compat",hE="@firebase/firestore",fE="@firebase/firestore-compat",dE="firebase",pE="9.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="[DEFAULT]",gE={[qa]:"fire-core",[Hw]:"fire-core-compat",[Ww]:"fire-analytics",[Kw]:"fire-analytics-compat",[Gw]:"fire-app-check",[zw]:"fire-app-check-compat",[Jw]:"fire-auth",[Yw]:"fire-auth-compat",[Qw]:"fire-rtdb",[Xw]:"fire-rtdb-compat",[Zw]:"fire-fn",[eE]:"fire-fn-compat",[tE]:"fire-iid",[nE]:"fire-iid-compat",[sE]:"fire-fcm",[rE]:"fire-fcm-compat",[iE]:"fire-perf",[oE]:"fire-perf-compat",[aE]:"fire-rc",[cE]:"fire-rc-compat",[lE]:"fire-gcs",[uE]:"fire-gcs-compat",[hE]:"fire-fst",[fE]:"fire-fst-compat","fire-js":"fire-js",[dE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Map,Ka=new Map;function mE(t,e){try{t.container.addComponent(e)}catch(n){Ha.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function tr(t){const e=t.name;if(Ka.has(e))return Ha.debug(`There were multiple attempts to register component ${e}.`),!1;Ka.set(e,t);for(const n of Ii.values())mE(n,t);return!0}function Wa(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},bi=new Qs("app","Firebase",yE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=pE;function VA(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ef,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw bi.create("bad-app-name",{appName:String(s)});const r=Ii.get(s);if(r){if(Ti(t,r.options)&&Ti(n,r.config))return r;throw bi.create("duplicate-app",{appName:s})}const i=new Uw(s);for(const a of Ka.values())i.addComponent(a);const o=new vE(t,n,i);return Ii.set(s,o),o}function tf(t=ef){const e=Ii.get(t);if(!e)throw bi.create("no-app",{appName:t});return e}function Xt(t,e,n){var s;let r=(s=gE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ha.warn(a.join(" "));return}tr(new as(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t){tr(new as("platform-logger",e=>new jw(e),"PRIVATE")),Xt(qa,Zh,t),Xt(qa,Zh,"esm2017"),Xt("fire-js","")}wE("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function za(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function nf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EE=nf,sf=new Qs("auth","Firebase",nf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=new ja("@firebase/auth");function Ai(t,...e){rf.logLevel<=ce.ERROR&&rf.error(`Auth (${nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,...e){throw Ga(t,...e)}function Nt(t,...e){return Ga(t,...e)}function _E(t,e,n){const s=Object.assign(Object.assign({},EE()),{[e]:n});return new Qs("auth","Firebase",s).create(e,{appName:t.name})}function Ga(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return sf.create(t,...e)}function j(t,e,...n){if(!t)throw Ga(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ai(e),new Error(e)}function Ft(t,e){t||Ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new Map;function Vt(t){Ft(t instanceof Function,"Expected a class definition");let e=of.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,of.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t,e){const n=Wa(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ti(i,e!=null?e:{}))return r;It(r,"already-initialized")}return n.initialize({options:e})}function IE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Vt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bE(){return af()==="http:"||af()==="https:"}function af(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bE()||Jh()||"connection"in navigator)?navigator.onLine:!0}function SE(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Gh()||Yh()}get(){return AE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=new sr(3e4,6e4);function cs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ls(t,e,n,s,r={}){return lf(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Xs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),cf.fetch()(uf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function lf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},CE),e);try{const r=new kE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qa(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qa(t,"email-already-in-use",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw _E(t,u,l);It(t,u)}}catch(r){if(r instanceof An)throw r;It(t,"network-request-failed")}}async function rr(t,e,n,s,r={}){const i=await ls(t,e,n,s,r);return"mfaPendingCredential"in i&&It(t,"multi-factor-auth-required",{_serverResponse:i}),i}function uf(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ya(t.config,r):`${t.config.apiScheme}://${r}`}class kE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"timeout")),RE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Nt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(t,e){return ls(t,"POST","/v1/accounts:delete",e)}async function OE(t,e){return ls(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PE(t,e=!1){const n=lt(t),s=await n.getIdToken(e),r=Za(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ir(Xa(r.auth_time)),issuedAtTime:ir(Xa(r.iat)),expirationTime:ir(Xa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xa(t){return Number(t)*1e3}function Za(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ai("JWT malformed, contained fewer than 3 sections"),null;try{const r=Iw(n);return r?JSON.parse(r):(Ai("Failed to decode base64 JWT payload"),null)}catch(r){return Ai("Caught error parsing JWT payload as JSON",r),null}}function DE(t){const e=Za(t);return j(e,"internal-error"),j(typeof e.exp!="undefined","internal-error"),j(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof An&&LE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function LE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ir(this.lastLoginAt),this.creationTime=ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t){var e;const n=t.auth,s=await t.getIdToken(),r=await or(t,OE(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?FE(i.providerUserInfo):[],a=UE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new hf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function xE(t){const e=lt(t);await Si(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function FE(t){return t.map(e=>{var{providerId:n}=e,s=za(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(t,e){const n=await lf(t,{},async()=>{const s=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=uf(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken!="undefined","internal-error"),j(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):DE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await VE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ar;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ar,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){j(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=za(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new ME(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new hf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await or(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PE(this,e)}reload(){return xE(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Si(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await or(this,NE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:B,isAnonymous:ne,providerData:H,stsTokenManager:D}=n;j(z&&D,e,"internal-error");const ue=ar.fromJSON(this.name,D);j(typeof z=="string",e,"internal-error"),Zt(h,e.name),Zt(f,e.name),j(typeof B=="boolean",e,"internal-error"),j(typeof ne=="boolean",e,"internal-error"),Zt(g,e.name),Zt(y,e.name),Zt(b,e.name),Zt(A,e.name),Zt(k,e.name),Zt(x,e.name);const re=new Cn({uid:z,auth:e,email:f,emailVerified:B,displayName:h,isAnonymous:ne,photoURL:y,phoneNumber:g,tenantId:b,stsTokenManager:ue,createdAt:k,lastLoginAt:x});return H&&Array.isArray(H)&&(re.providerData=H.map(be=>Object.assign({},be))),A&&(re._redirectEventId=A),re}static async _fromIdTokenResponse(e,n,s=!1){const r=new ar;r.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Si(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ff.type="NONE";const df=ff;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ci(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ci("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new us(Vt(df),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Vt(df);const o=Ci(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Cn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new us(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new us(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wf(e))return"Blackberry";if(Ef(e))return"Webos";if(ec(e))return"Safari";if((e.includes("chrome/")||mf(e))&&!e.includes("edge/"))return"Chrome";if(vf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function gf(t=Le()){return/firefox\//i.test(t)}function ec(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mf(t=Le()){return/crios\//i.test(t)}function yf(t=Le()){return/iemobile/i.test(t)}function vf(t=Le()){return/android/i.test(t)}function wf(t=Le()){return/blackberry/i.test(t)}function Ef(t=Le()){return/webos/i.test(t)}function Ri(t=Le()){return/iphone|ipad|ipod/i.test(t)}function $E(t=Le()){var e;return Ri(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function BE(){return Qh()&&document.documentMode===10}function _f(t=Le()){return Ri(t)||vf(t)||Ef(t)||wf(t)||/windows phone/i.test(t)||yf(t)}function jE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t,e=[]){let n;switch(t){case"Browser":n=pf(Le());break;case"Worker":n=`${pf(Le())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${s}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new If(this),this.idTokenSubscription=new If(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if((s=this._popupRedirectResolver)===null||s===void 0?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let s=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=s==null?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===i)&&(o==null?void 0:o.user)&&(s=o.user)}return s?s._redirectEventId?(j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)):this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Si(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?lt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function ki(t){return lt(t)}class If{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ow(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}async function HE(t,e){return ls(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KE(t,e){return rr(t,"POST","/v1/accounts:signInWithPassword",cs(t,e))}async function WE(t,e){return ls(t,"POST","/v1/accounts:sendOobCode",cs(t,e))}async function zE(t,e){return WE(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(t,e){return rr(t,"POST","/v1/accounts:signInWithEmailLink",cs(t,e))}async function JE(t,e){return rr(t,"POST","/v1/accounts:signInWithEmailLink",cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends tc{constructor(e,n,s,r=null){super("password",s);this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new cr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new cr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return KE(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return GE(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return HE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JE(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e){return rr(t,"POST","/v1/accounts:signInWithIdp",cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="http://localhost";class Rn extends tc{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=za(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Rn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hs(e,n)}buildRequest(){const e={requestUri:YE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XE(t){const e=Zs(er(t)).link,n=e?Zs(er(e)).deep_link_id:null,s=Zs(er(t)).deep_link_id;return(s?Zs(er(s)).link:null)||s||n||e||t}class nc{constructor(e){var n,s,r,i,o,a;const c=Zs(er(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=QE((r=c.mode)!==null&&r!==void 0?r:null);j(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=XE(e);try{return new nc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return cr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=nc.parseLink(n);return j(s,"argument-error"),cr._fromEmailAndCode(e,s.code,s.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends bf{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends lr{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends lr{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Rn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return tn.credential(n,s)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends lr{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends lr{constructor(){super("twitter.com")}static credential(e,n){return Rn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return sn.credential(n,s)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t,e){return rr(t,"POST","/v1/accounts:signUp",cs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Cn._fromIdTokenResponse(e,s,r),o=Af(s);return new kn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Af(s);return new kn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends An{constructor(e,n,s,r){var i;super(n.code,n.message);this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ni.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ni(e,n,s,r)}}function Sf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ni._fromErrorAndOperation(t,i,e,s):i})}async function e_(t,e,n=!1){const s=await or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await or(t,Sf(s,r,e,t),n);j(i.idToken,s,"internal-error");const o=Za(i.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),kn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&It(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cf(t,e,n=!1){const s="signIn",r=await Sf(t,s,e),i=await kn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function n_(t,e){return Cf(ki(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t,e,n){var s;j(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),j(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(j(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(j(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $A(t,e,n){const s=lt(t),r={requestType:"PASSWORD_RESET",email:e};n&&s_(s,r,n),await zE(s,r)}async function BA(t,e,n){const s=ki(t),r=await ZE(s,{returnSecureToken:!0,email:e,password:n}),i=await kn._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function jA(t,e,n){return n_(lt(t),fs.credential(e,n))}function qA(t,e,n,s){return lt(t).onAuthStateChanged(e,n,s)}function HA(t){return lt(t).signOut()}const Oi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oi,"1"),this.storage.removeItem(Oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){const t=Le();return ec(t)||Ri(t)}const i_=1e3,o_=10;class kf extends Rf{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=r_()&&jE(),this.fallbackToPolling=_f(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);BE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,o_):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},i_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kf.type="LOCAL";const a_=kf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends Rf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nf.type="SESSION";const Of=Nf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Pi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await c_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=sc("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function u_(t){Ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(){return typeof Ot().WorkerGlobalScope!="undefined"&&typeof Ot().importScripts=="function"}async function h_(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function d_(){return Pf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="firebaseLocalStorageDb",p_=1,Di="firebaseLocalStorage",Lf="fbase_key";class ur{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Li(t,e){return t.transaction([Di],e?"readwrite":"readonly").objectStore(Di)}function g_(){const t=indexedDB.deleteDatabase(Df);return new ur(t).toPromise()}function rc(){const t=indexedDB.open(Df,p_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Di,{keyPath:Lf})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Di)?e(s):(s.close(),await g_(),e(await rc()))})})}async function Mf(t,e,n){const s=Li(t,!0).put({[Lf]:e,value:n});return new ur(s).toPromise()}async function m_(t,e){const n=Li(t,!1).get(e),s=await new ur(n).toPromise();return s===void 0?null:s.value}function xf(t,e){const n=Li(t,!0).delete(e);return new ur(n).toPromise()}const y_=800,v_=3;class Uf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>v_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pi._getInstance(d_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await h_(),!this.activeServiceWorker)return;this.sender=new l_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rc();return await Mf(e,Oi,"1"),await xf(e,Oi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>m_(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Li(r,!1).getAll();return new ur(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uf.type="LOCAL";const w_=Uf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function __(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",E_().appendChild(s)})}function T_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new sr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e){return e?Vt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends tc{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function b_(t){return Cf(t.auth,new ic(t),t.bypassAuthState)}function A_(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),t_(n,new ic(t),t.bypassAuthState)}async function S_(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),e_(n,new ic(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return b_;case"linkViaPopup":case"linkViaRedirect":return S_;case"reauthViaPopup":case"reauthViaRedirect":return A_;default:It(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new sr(2e3,1e4);class ds extends Ff{constructor(e,n,s,r,i){super(e,n,r,i);this.provider=s,this.authWindow=null,this.pollId=null,ds.currentPopupAction&&ds.currentPopupAction.cancel(),ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0?void 0:s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,C_.get())};e()}}ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="pendingRedirect",oc=new Map;class k_ extends Ff{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s);this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const s=await N_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function N_(t,e){const n=P_(e),s=O_(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function O_(t){return Vt(t._redirectPersistence)}function P_(t){return Ci(R_,t.config.apiKey,t.name)}async function D_(t,e,n=!1){const s=ki(t),r=I_(s,e),o=await new k_(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=10*60*1e3;class M_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!x_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!$f(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=L_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vf(e))}saveEventToCache(e){this.cachedEventUids.add(Vf(e)),this.lastProcessedEventTime=Date.now()}}function Vf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $f({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function x_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $f(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(t,e={}){return ls(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,V_=/^https?/;async function $_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await U_(t);for(const n of e)try{if(B_(n))return}catch{}It(t,"unauthorized-domain")}function B_(t){const e=Ja(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!V_.test(n))return!1;if(F_.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new sr(3e4,6e4);function Bf(){const t=Ot().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function q_(t){return new Promise((e,n)=>{var s,r,i;function o(){Bf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bf(),n(Nt(t,"network-request-failed"))},timeout:j_.get()})}if((r=(s=Ot().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((i=Ot().gapi)===null||i===void 0?void 0:i.load)o();else{const a=T_("iframefcb");return Ot()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},__(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Mi=null,e})}let Mi=null;function H_(t){return Mi=Mi||q_(t),Mi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=new sr(5e3,15e3),W_="__/auth/iframe",z_="emulator/auth/iframe",G_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y_(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ya(e,z_):`https://${t.config.authDomain}/${W_}`,s={apiKey:e.apiKey,appName:t.name,v:nr},r=J_.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Xs(s).slice(1)}`}async function Q_(t){const e=await H_(t),n=Ot().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Y_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:G_,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=Ot().setTimeout(()=>{i(o)},K_.get());function c(){Ot().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z_=500,e0=600,t0="_blank",n0="http://localhost";class jf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s0(t,e,n,s=Z_,r=e0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},X_),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Le().toLowerCase();n&&(a=mf(l)?t0:n),gf(l)&&(e=e||n0,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if($E(l)&&a!=="_self")return r0(e||"",a),new jf(null);const h=window.open(e||"",a,u);j(h,t,"popup-blocked");try{h.focus()}catch{}return new jf(h)}function r0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="__/auth/handler",o0="emulator/auth/handler";function qf(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:nr,eventId:r};if(e instanceof bf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof lr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${a0(t)}?${Xs(a).slice(1)}`}function a0({config:t}){return t.emulator?Ya(t,o0):`https://${t.authDomain}/${i0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="webStorageSupport";class c0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Of,this._completeRedirectFn=D_}async _openPopup(e,n,s,r){var i;Ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=qf(e,n,s,Ja(),r);return s0(e,o,sc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),u_(qf(e,n,s,Ja(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Ft(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Q_(e),s=new M_(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ac,{type:ac},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ac];o!==void 0&&n(!!o),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _f()||ec()||Ri()}}const l0=c0;var Hf="@firebase/auth",Kf="0.19.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var r;e(((r=s)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function f0(t){tr(new as("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=s.options;return(o=>{j(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),j(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tf(t)},c=new qE(o,a);return IE(c,n),c})(s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),tr(new as("auth-internal",e=>{const n=ki(e.getProvider("auth").getImmediate());return(s=>new u0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Hf,Kf,h0(t)),Xt(Hf,Kf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t=tf()){const e=Wa(t,"auth");return e.isInitialized()?e.getImmediate():TE(t,{popupRedirectResolver:l0,persistence:[w_,a_,Of]})}f0("Browser");var d0="firebase",p0="9.6.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(d0,p0,"app");var g0=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},P,cc=cc||{},K=g0||self;function xi(){}function lc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function hr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function m0(t){return Object.prototype.hasOwnProperty.call(t,uc)&&t[uc]||(t[uc]=++y0)}var uc="closure_uid_"+(1e9*Math.random()>>>0),y0=0;function v0(t,e,n){return t.call.apply(t.bind,arguments)}function w0(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=v0:Ve=w0,Ve.apply(null,arguments)}function Ui(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function rn(){this.s=this.s,this.o=this.o}var E0=0,_0={};rn.prototype.s=!1;rn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),E0!=0)){var t=m0(this);delete _0[t]}};rn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wf=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},zf=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function T0(t){e:{var e=dT;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Gf(t){return Array.prototype.concat.apply([],arguments)}function hc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Fi(t){return/^[\s\xa0]*$/.test(t)}var Jf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ye(t,e){return t.indexOf(e)!=-1}function fc(t,e){return t<e?-1:t>e?1:0}var Qe;e:{var Yf=K.navigator;if(Yf){var Qf=Yf.userAgent;if(Qf){Qe=Qf;break e}}Qe=""}function dc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Xf(t){const e={};for(const n in t)e[n]=t[n];return e}var Zf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ed(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Zf.length;i++)n=Zf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function pc(t){return pc[" "](t),t}pc[" "]=xi;function I0(t){var e=S0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var b0=Ye(Qe,"Opera"),ps=Ye(Qe,"Trident")||Ye(Qe,"MSIE"),td=Ye(Qe,"Edge"),gc=td||ps,nd=Ye(Qe,"Gecko")&&!(Ye(Qe.toLowerCase(),"webkit")&&!Ye(Qe,"Edge"))&&!(Ye(Qe,"Trident")||Ye(Qe,"MSIE"))&&!Ye(Qe,"Edge"),A0=Ye(Qe.toLowerCase(),"webkit")&&!Ye(Qe,"Edge");function sd(){var t=K.document;return t?t.documentMode:void 0}var Vi;e:{var mc="",yc=function(){var t=Qe;if(nd)return/rv:([^\);]+)(\)|;)/.exec(t);if(td)return/Edge\/([\d\.]+)/.exec(t);if(ps)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(A0)return/WebKit\/(\S+)/.exec(t);if(b0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yc&&(mc=yc?yc[1]:""),ps){var vc=sd();if(vc!=null&&vc>parseFloat(mc)){Vi=String(vc);break e}}Vi=mc}var S0={};function C0(){return I0(function(){let t=0;const e=Jf(String(Vi)).split("."),n=Jf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=fc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||fc(r[2].length==0,i[2].length==0)||fc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var wc;if(K.document&&ps){var rd=sd();wc=rd||parseInt(Vi,10)||void 0}else wc=void 0;var R0=wc,k0=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",xi,e),K.removeEventListener("test",xi,e)}catch{}return t}();function We(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};function fr(t,e){if(We.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nd){e:{try{pc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:N0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fr.Z.h.call(this)}}$e(fr,We);var N0={2:"touch",3:"pen",4:"mouse"};fr.prototype.h=function(){fr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var dr="closure_listenable_"+(1e6*Math.random()|0),O0=0;function P0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++O0,this.ca=this.fa=!1}function $i(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Bi(t){this.src=t,this.g={},this.h=0}Bi.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=_c(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new P0(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Ec(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Wf(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&($i(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _c(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var Tc="closure_lm_"+(1e6*Math.random()|0),Ic={};function id(t,e,n,s,r){if(s&&s.once)return ad(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)id(t,e[i],n,s,r);return null}return n=Cc(n),t&&t[dr]?t.N(e,n,hr(s)?!!s.capture:!!s,r):od(t,e,n,!1,s,r)}function od(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=hr(r)?!!r.capture:!!r,a=Ac(t);if(a||(t[Tc]=a=new Bi(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=D0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)k0||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ld(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function D0(){function t(n){return e.call(t.src,t.listener,n)}var e=L0;return t}function ad(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ad(t,e[i],n,s,r);return null}return n=Cc(n),t&&t[dr]?t.O(e,n,hr(s)?!!s.capture:!!s,r):od(t,e,n,!0,s,r)}function cd(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)cd(t,e[i],n,s,r);else s=hr(s)?!!s.capture:!!s,n=Cc(n),t&&t[dr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=_c(i,n,s,r),-1<n&&($i(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ac(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_c(e,n,s,r)),(n=-1<t?e[t]:null)&&bc(n))}function bc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[dr])Ec(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ld(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ac(e))?(Ec(n,t),n.h==0&&(n.src=null,e[Tc]=null)):$i(t)}}}function ld(t){return t in Ic?Ic[t]:Ic[t]="on"+t}function L0(t,e){if(t.ca)t=!0;else{e=new fr(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&bc(t),t=n.call(s,e)}return t}function Ac(t){return t=t[Tc],t instanceof Bi?t:null}var Sc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cc(t){return typeof t=="function"?t:(t[Sc]||(t[Sc]=function(e){return t.handleEvent(e)}),t[Sc])}function Me(){rn.call(this),this.i=new Bi(this),this.P=this,this.I=null}$e(Me,rn);Me.prototype[dr]=!0;Me.prototype.removeEventListener=function(t,e,n,s){cd(this,t,e,n,s)};function Be(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new We(e,t);else if(e instanceof We)e.target=e.target||t;else{var r=e;e=new We(s,t),ed(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ji(o,s,!0,e)&&r}if(o=e.g=t,r=ji(o,s,!0,e)&&r,r=ji(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ji(o,s,!1,e)&&r}Me.prototype.M=function(){if(Me.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)$i(n[s]);delete t.g[e],t.h--}}this.I=null};Me.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Me.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ji(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ec(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Rc=K.JSON.stringify;function M0(){var t=hd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class x0{constructor(){this.h=this.g=null}add(e,n){const s=ud.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ud=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new U0,t=>t.reset());class U0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function F0(t){K.setTimeout(()=>{throw t},0)}function kc(t,e){Nc||V0(),Oc||(Nc(),Oc=!0),hd.add(t,e)}var Nc;function V0(){var t=K.Promise.resolve(void 0);Nc=function(){t.then($0)}}var Oc=!1,hd=new x0;function $0(){for(var t;t=M0();){try{t.h.call(t.g)}catch(n){F0(n)}var e=ud;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Oc=!1}function qi(t,e){Me.call(this),this.h=t||1,this.g=e||K,this.j=Ve(this.kb,this),this.l=Date.now()}$e(qi,Me);P=qi.prototype;P.da=!1;P.S=null;P.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Be(this,"tick"),this.da&&(Pc(this),this.start()))}};P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Pc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}P.M=function(){qi.Z.M.call(this),Pc(this),delete this.g};function Dc(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function fd(t){t.g=Dc(()=>{t.g=null,t.i&&(t.i=!1,fd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class B0 extends rn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fd(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pr(t){rn.call(this),this.h=t,this.g={}}$e(pr,rn);var dd=[];function pd(t,e,n,s){Array.isArray(n)||(n&&(dd[0]=n.toString()),n=dd);for(var r=0;r<n.length;r++){var i=id(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function gd(t){dc(t.g,function(e,n){this.g.hasOwnProperty(n)&&bc(e)},t),t.g={}}pr.prototype.M=function(){pr.Z.M.call(this),gd(this)};pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hi(){this.g=!0}Hi.prototype.Aa=function(){this.g=!1};function j0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function q0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function gs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+K0(t,n)+(s?" "+s:"")})}function H0(t,e){t.info(function(){return"TIMEOUT: "+e})}Hi.prototype.info=function(){};function K0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Rc(n)}catch{return e}}var Nn={},md=null;function Ki(){return md=md||new Me}Nn.Ma="serverreachability";function yd(t){We.call(this,Nn.Ma,t)}$e(yd,We);function gr(t){const e=Ki();Be(e,new yd(e,t))}Nn.STAT_EVENT="statevent";function vd(t,e){We.call(this,Nn.STAT_EVENT,t),this.stat=e}$e(vd,We);function Xe(t){const e=Ki();Be(e,new vd(e,t))}Nn.Na="timingevent";function wd(t,e){We.call(this,Nn.Na,t),this.size=e}$e(wd,We);function mr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Wi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ed={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Lc(){}Lc.prototype.h=null;function _d(t){return t.h||(t.h=t.i())}function Td(){}var yr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Mc(){We.call(this,"d")}$e(Mc,We);function xc(){We.call(this,"c")}$e(xc,We);var Uc;function zi(){}$e(zi,Lc);zi.prototype.g=function(){return new XMLHttpRequest};zi.prototype.i=function(){return{}};Uc=new zi;function vr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new pr(this),this.P=W0,t=gc?125:void 0,this.W=new qi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Id}function Id(){this.i=null,this.g="",this.h=!1}var W0=45e3,Fc={},Gi={};P=vr.prototype;P.setTimeout=function(t){this.P=t};function Vc(t,e,n){t.K=1,t.v=Zi($t(e)),t.s=n,t.U=!0,bd(t,null)}function bd(t,e){t.F=Date.now(),wr(t),t.A=$t(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Dd(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Id,t.g=np(t.l,n?e:null,!t.s),0<t.O&&(t.L=new B0(Ve(t.Ia,t,t.g),t.O)),pd(t.V,t.g,"readystatechange",t.gb),e=t.H?Xf(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),gr(1),j0(t.j,t.u,t.A,t.m,t.X,t.s)}P.gb=function(t){t=t.target;const e=this.L;e&&Bt(t)==3?e.l():this.Ia(t)};P.Ia=function(t){try{if(t==this.g)e:{const u=Bt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||gc||this.g&&(this.h.h||this.g.ga()||Kd(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?gr(3):gr(2)),Ji(this);var n=this.g.ba();this.N=n;t:if(Ad(this)){var s=Kd(this.g);t="";var r=s.length,i=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){On(this),Er(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,q0(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fi(a)){var l=a;break t}}l=null}if(n=l)gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$c(this,n);else{this.i=!1,this.o=3,Xe(12),On(this),Er(this);break e}}this.U?(Sd(this,u,o),gc&&this.i&&u==3&&(pd(this.V,this.W,"tick",this.fb),this.W.start())):(gs(this.j,this.m,o,null),$c(this,o)),u==4&&On(this),this.i&&!this.I&&(u==4?Xd(this.l,this):(this.i=!1,wr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Xe(12)):(this.o=0,Xe(13)),On(this),Er(this)}}}catch{}finally{}};function Ad(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Sd(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=z0(t,n),r==Gi){e==4&&(t.o=4,Xe(14),s=!1),gs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Fc){t.o=4,Xe(15),gs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else gs(t.j,t.m,r,null),$c(t,r);Ad(t)&&r!=Gi&&r!=Fc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Xe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qc(e),e.L=!0,Xe(11))):(gs(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),Er(t))}P.fb=function(){if(this.g){var t=Bt(this.g),e=this.g.ga();this.C<e.length&&(Ji(this),Sd(this,t,e),this.i&&t!=4&&wr(this))}};function z0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Gi:(n=Number(e.substring(n,s)),isNaN(n)?Fc:(s+=1,s+n>e.length?Gi:(e=e.substr(s,n),t.C=s+n,e)))}P.cancel=function(){this.I=!0,On(this)};function wr(t){t.Y=Date.now()+t.P,Cd(t,t.P)}function Cd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=mr(Ve(t.eb,t),e)}function Ji(t){t.B&&(K.clearTimeout(t.B),t.B=null)}P.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(H0(this.j,this.A),this.K!=2&&(gr(3),Xe(17)),On(this),this.o=2,Er(this)):Cd(this,this.Y-t)};function Er(t){t.l.G==0||t.I||Xd(t.l,t)}function On(t){Ji(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Pc(t.W),gd(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function $c(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||qc(n.i,t))){if(n.I=t.N,!t.J&&qc(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)io(n),so(n);else break e;Yc(n),Xe(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=mr(Ve(n.ab,n),6e3));if(1>=xd(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ln(n,11)}else if((t.J||n.g==t)&&io(n),!Fi(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;!i.g&&(Ye(y,"spdy")||Ye(y,"quic")||Ye(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Hc(i,i.h),i.h=null))}if(s.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.sa=b,Te(s.F,s.D,b))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=tp(s,s.H?s.la:null,s.W),o.J){Ud(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Ji(a),wr(a)),s.g=o}else Yd(s);0<n.l.length&&ro(n)}else l[0]!="stop"&&l[0]!="close"||Ln(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ln(n,7):Gc(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}gr(4)}catch{}}function G0(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(lc(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Bc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(lc(t)||typeof t=="string")zf(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(lc(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=G0(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function ms(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof ms)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}P=ms.prototype;P.R=function(){jc(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};P.T=function(){return jc(this),this.g.concat()};function jc(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Pn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],Pn(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}P.get=function(t,e){return Pn(this.h,t)?this.h[t]:e};P.set=function(t,e){Pn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};P.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function Pn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Rd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Dn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Dn){this.g=e!==void 0?e:t.g,Yi(this,t.j),this.s=t.s,Qi(this,t.i),Xi(this,t.m),this.l=t.l,e=t.h;var n=new Ir;n.i=e.i,e.g&&(n.g=new ms(e.g),n.h=e.h),kd(this,n),this.o=t.o}else t&&(n=String(t).match(Rd))?(this.g=!!e,Yi(this,n[1]||"",!0),this.s=_r(n[2]||""),Qi(this,n[3]||"",!0),Xi(this,n[4]),this.l=_r(n[5]||"",!0),kd(this,n[6]||"",!0),this.o=_r(n[7]||"")):(this.g=!!e,this.h=new Ir(null,this.g))}Dn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Tr(e,Nd,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Tr(e,Nd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Tr(n,n.charAt(0)=="/"?eT:Z0,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Tr(n,nT)),t.join("")};function $t(t){return new Dn(t)}function Yi(t,e,n){t.j=n?_r(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qi(t,e,n){t.i=n?_r(e,!0):e}function Xi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function kd(t,e,n){e instanceof Ir?(t.h=e,sT(t.h,t.g)):(n||(e=Tr(e,tT)),t.h=new Ir(e,t.g))}function Te(t,e,n){t.h.set(e,n)}function Zi(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Y0(t){return t instanceof Dn?$t(t):new Dn(t,void 0)}function Q0(t,e,n,s){var r=new Dn(null,void 0);return t&&Yi(r,t),e&&Qi(r,e),n&&Xi(r,n),s&&(r.l=s),r}function _r(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Tr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,X0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function X0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Nd=/[#\/\?@]/g,Z0=/[#\?:]/g,eT=/[#\?]/g,tT=/[#\?@]/g,nT=/#/g;function Ir(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function on(t){t.g||(t.g=new ms,t.h=0,t.i&&J0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Ir.prototype;P.add=function(t,e){on(this),this.i=null,t=ys(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Od(t,e){on(t),e=ys(t,e),Pn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Pn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&jc(t)))}function Pd(t,e){return on(t),e=ys(t,e),Pn(t.g.h,e)}P.forEach=function(t,e){on(this),this.g.forEach(function(n,s){zf(n,function(r){t.call(e,r,s,this)},this)},this)};P.T=function(){on(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};P.R=function(t){on(this);var e=[];if(typeof t=="string")Pd(this,t)&&(e=Gf(e,this.g.get(ys(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Gf(e,t[n])}return e};P.set=function(t,e){return on(this),this.i=null,t=ys(this,t),Pd(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Dd(t,e,n){Od(t,e),0<n.length&&(t.i=null,t.g.set(ys(t,e),hc(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function ys(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sT(t,e){e&&!t.j&&(on(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Od(this,s),Dd(this,r,n))},t)),t.j=e}var rT=class{constructor(t,e){this.h=t,this.g=e}};function Ld(t){this.l=t||iT,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var iT=10;function Md(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xd(t){return t.h?1:t.g?t.g.size:0}function qc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Hc(t,e){t.g?t.g.add(e):t.h=e}function Ud(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ld.prototype.cancel=function(){if(this.i=Fd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Fd(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hc(t.i)}function Kc(){}Kc.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};Kc.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function oT(){this.g=new Kc}function aT(t,e,n){const s=n||"";try{Bc(t,function(r,i){let o=r;hr(r)&&(o=Rc(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function cT(t,e){const n=new Hi;if(K.Image){const s=new Image;s.onload=Ui(eo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ui(eo,n,s,"TestLoadImage: error",!1,e),s.onabort=Ui(eo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ui(eo,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function eo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function br(t){this.l=t.$b||null,this.j=t.ib||!1}$e(br,Lc);br.prototype.g=function(){return new to(this.l,this.j)};br.prototype.i=function(t){return function(){return t}}({});function to(t,e){Me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Wc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(to,Me);var Wc=0;P=to.prototype;P.open=function(t,e){if(this.readyState!=Wc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Sr(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ar(this)),this.readyState=Wc};P.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Sr(this)),this.g&&(this.readyState=3,Sr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vd(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Vd(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}P.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ar(this):Sr(this),this.readyState==3&&Vd(this)}};P.Ua=function(t){this.g&&(this.response=this.responseText=t,Ar(this))};P.Ta=function(t){this.g&&(this.response=t,Ar(this))};P.ha=function(){this.g&&Ar(this)};function Ar(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Sr(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Sr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(to.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lT=K.JSON.parse;function Se(t){Me.call(this),this.headers=new ms,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$d,this.K=this.L=!1}$e(Se,Me);var $d="",uT=/^https?$/i,hT=["POST","PUT"];P=Se.prototype;P.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Uc.g(),this.C=this.u?_d(this.u):_d(Uc),this.g.onreadystatechange=Ve(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Bd(this,i);return}t=n||"";const r=new ms(this.headers);s&&Bc(s,function(i,o){r.set(o,i)}),s=T0(r.T()),n=K.FormData&&t instanceof K.FormData,!(0<=Wf(hT,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hd(this),0<this.B&&((this.K=fT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.pa,this)):this.A=Dc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Bd(this,i)}};function fT(t){return ps&&C0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function dT(t){return t.toLowerCase()=="content-type"}P.pa=function(){typeof cc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function Bd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,jd(t),no(t)}function jd(t){t.D||(t.D=!0,Be(t,"complete"),Be(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),no(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),no(this,!0)),Se.Z.M.call(this)};P.Fa=function(){this.s||(this.F||this.v||this.l?qd(this):this.cb())};P.cb=function(){qd(this)};function qd(t){if(t.h&&typeof cc!="undefined"&&(!t.C[1]||Bt(t)!=4||t.ba()!=2)){if(t.v&&Bt(t)==4)Dc(t.Fa,0,t);else if(Be(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Rd)[1]||null;if(!r&&K.self&&K.self.location){var i=K.self.location.protocol;r=i.substr(0,i.length-1)}s=!uT.test(r?r.toLowerCase():"")}n=s}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var o=2<Bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",jd(t)}}finally{no(t)}}}}function no(t,e){if(t.g){Hd(t);const n=t.g,s=t.C[0]?xi:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=s}catch{}}}function Hd(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function Bt(t){return t.g?t.g.readyState:0}P.ba=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};P.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lT(e)}};function Kd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $d:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Da=function(){return this.m};P.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function pT(t){let e="";return dc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function zc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=pT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Cr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wd(t){this.za=0,this.l=[],this.h=new Hi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Cr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Cr("baseRetryDelayMs",5e3,t),this.$a=Cr("retryDelaySeedMs",1e4,t),this.Ya=Cr("forwardChannelMaxRetries",2,t),this.ra=Cr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ld(t&&t.concurrentRequestLimit),this.Ca=new oT,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}P=Wd.prototype;P.ma=8;P.G=1;function Gc(t){if(zd(t),t.G==3){var e=t.V++,n=$t(t.F);Te(n,"SID",t.J),Te(n,"RID",e),Te(n,"TYPE","terminate"),Rr(t,n),e=new vr(t,t.h,e,void 0),e.K=2,e.v=Zi($t(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=np(e.l,null),e.g.ea(e.v)),e.F=Date.now(),wr(e)}ep(t)}P.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function so(t){t.g&&(Qc(t),t.g.cancel(),t.g=null)}function zd(t){so(t),t.u&&(K.clearTimeout(t.u),t.u=null),io(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Jc(t,e){t.l.push(new rT(t.Za++,e)),t.G==3&&ro(t)}function ro(t){Md(t.i)||t.m||(t.m=!0,kc(t.Ha,t),t.C=0)}function gT(t,e){return xd(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=mr(Ve(t.Ha,t,e),Zd(t,t.C)),t.C++,!0)}P.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new vr(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Xf(i),ed(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Jd(this,r,e),n=$t(this.F),Te(n,"RID",t),Te(n,"CVER",22),this.D&&Te(n,"X-HTTP-Session-Id",this.D),Rr(this,n),this.o&&i&&zc(n,this.o,i),Hc(this.i,r),this.Ra&&Te(n,"TYPE","init"),this.ja?(Te(n,"$req",e),Te(n,"SID","null"),r.$=!0,Vc(r,n,null)):Vc(r,n,e),this.G=2}}else this.G==3&&(t?Gd(this,t):this.l.length==0||Md(this.i)||Gd(this))};function Gd(t,e){var n;e?n=e.m:n=t.V++;const s=$t(t.F);Te(s,"SID",t.J),Te(s,"RID",n),Te(s,"AID",t.U),Rr(t,s),t.o&&t.s&&zc(s,t.o,t.s),n=new vr(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Jd(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Hc(t.i,n),Vc(n,s,e)}function Rr(t,e){t.j&&Bc({},function(n,s){Te(e,s,n)})}function Jd(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Ve(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{aT(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Yd(t){t.g||t.u||(t.Y=1,kc(t.Ga,t),t.A=0)}function Yc(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=mr(Ve(t.Ga,t),Zd(t,t.A)),t.A++,!0)}P.Ga=function(){if(this.u=null,Qd(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=mr(Ve(this.bb,this),t)}};P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Xe(10),so(this),Qd(this))};function Qc(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Qd(t){t.g=new vr(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=$t(t.oa);Te(e,"RID","rpc"),Te(e,"SID",t.J),Te(e,"CI",t.N?"0":"1"),Te(e,"AID",t.U),Rr(t,e),Te(e,"TYPE","xmlhttp"),t.o&&t.s&&zc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Zi($t(e)),n.s=null,n.U=!0,bd(n,t)}P.ab=function(){this.v!=null&&(this.v=null,so(this),Yc(this),Xe(19))};function io(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Xd(t,e){var n=null;if(t.g==e){io(t),Qc(t),t.g=null;var s=2}else if(qc(t.i,e))n=e.D,Ud(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Ki(),Be(s,new wd(s,n,e,r)),ro(t)}else Yd(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&gT(t,e)||s==2&&Yc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Ln(t,5);break;case 4:Ln(t,10);break;case 3:Ln(t,6);break;default:Ln(t,2)}}}function Zd(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ln(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Ve(t.jb,t);n||(n=new Dn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Yi(n,"https"),Zi(n)),cT(n.toString(),s)}else Xe(2);t.G=0,t.j&&t.j.va(e),ep(t),zd(t)}P.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Xe(2)):(this.h.info("Failed to ping google.com"),Xe(1))};function ep(t){t.G=0,t.I=-1,t.j&&((Fd(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,hc(t.l),t.l.length=0),t.j.ua())}function tp(t,e,n){let s=Y0(n);if(s.i!="")e&&Qi(s,e+"."+s.i),Xi(s,s.m);else{const r=K.location;s=Q0(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&dc(t.aa,function(r,i){Te(s,i,r)}),e=t.D,n=t.sa,e&&n&&Te(s,e,n),Te(s,"VER",t.ma),Rr(t,s),s}function np(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Se(new br({ib:!0})):new Se(t.qa),e.L=t.H,e}function sp(){}P=sp.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Oa=function(){};function oo(){if(ps&&!(10<=Number(R0)))throw Error("Environmental error: no available transport.")}oo.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Me.call(this),this.g=new Wd(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Fi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vs(this)}$e(ut,Me);ut.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),kc(Ve(t.hb,t,e))),Xe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=tp(t,null,t.W),ro(t)};ut.prototype.close=function(){Gc(this.g)};ut.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Jc(this.g,e)}else this.v?(e={},e.__data__=Rc(t),Jc(this.g,e)):Jc(this.g,t)};ut.prototype.M=function(){this.g.j=null,delete this.j,Gc(this.g),delete this.g,ut.Z.M.call(this)};function rp(t){Mc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(rp,Mc);function ip(){xc.call(this),this.status=1}$e(ip,xc);function vs(t){this.g=t}$e(vs,sp);vs.prototype.xa=function(){Be(this.g,"a")};vs.prototype.wa=function(t){Be(this.g,new rp(t))};vs.prototype.va=function(t){Be(this.g,new ip(t))};vs.prototype.ua=function(){Be(this.g,"b")};oo.prototype.createWebChannel=oo.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Wi.NO_ERROR=0;Wi.TIMEOUT=8;Wi.HTTP_ERROR=6;Ed.COMPLETE="complete";Td.EventType=yr;yr.OPEN="a";yr.CLOSE="b";yr.ERROR="c";yr.MESSAGE="d";Me.prototype.listen=Me.prototype.N;Se.prototype.listenOnce=Se.prototype.O;Se.prototype.getLastError=Se.prototype.La;Se.prototype.getLastErrorCode=Se.prototype.Da;Se.prototype.getStatus=Se.prototype.ba;Se.prototype.getResponseJson=Se.prototype.Qa;Se.prototype.getResponseText=Se.prototype.ga;Se.prototype.send=Se.prototype.ea;var mT=function(){return new oo},yT=function(){return Ki()},Xc=Wi,vT=Ed,wT=Nn,op={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ET=br,ao=Td,_T=Se;const ap="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws="9.6.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new ja("@firebase/firestore");function cp(){return Mn.logLevel}function F(t,...e){if(Mn.logLevel<=ce.DEBUG){const n=e.map(Zc);Mn.debug(`Firestore (${ws}): ${t}`,...n)}}function an(t,...e){if(Mn.logLevel<=ce.ERROR){const n=e.map(Zc);Mn.error(`Firestore (${ws}): ${t}`,...n)}}function lp(t,...e){if(Mn.logLevel<=ce.WARN){const n=e.map(Zc);Mn.warn(`Firestore (${ws}): ${t}`,...n)}}function Zc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function ve(t,e){t||Y()}function Q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class bT{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new TT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new nt(e)}}class AT{constructor(e,n,s){this.type="FirstParty",this.user=nt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class ST{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new AT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RT{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=r=>{e.enqueueRetryable(()=>(i=>(i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`),n(i.token)))(r))};const s=r=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?s(r):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),new CT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.p(s),this.T=s=>n.writeSequenceNumber(s))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */el.I=-1;class up{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=kT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function le(t,e){return t<e?-1:t>e?1:0}function Es(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ht(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new ht(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Y(),s===void 0?s=e.length-n:s>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends kr{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const NT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends kr{construct(e,n,s){return new st(e,n,s)}static isValidIdentifier(e){return NT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new q(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.fields=e,e.sort(st.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new je(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const OT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ln(t){if(ve(!!t),typeof t=="string"){let e=0;const n=OT.exec(t);if(ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ts(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pp(t){const e=t.mapValue.fields.__previous_value__;return dp(e)?pp(e):e}function Nr(t){const e=ln(t.mapValue.fields.__local_write_time__.timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){return t==null}function co(t){return t===0&&1/t==-1/0}function PT(t){return typeof t=="number"&&Number.isInteger(t)&&!co(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Ie.fromString(e))}static fromName(e){return new W(Ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dp(t)?4:10:Y()}function Pt(t,e){if(t===e)return!0;const n=xn(t);if(n!==xn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Nr(t).isEqual(Nr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=ln(s.timestampValue),o=ln(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ts(s.bytesValue).isEqual(Ts(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ce(s.geoPointValue.latitude)===Ce(r.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ce(s.integerValue)===Ce(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ce(s.doubleValue),o=Ce(r.doubleValue);return i===o?co(i)===co(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Es(t.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(hp(i)!==hp(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Pt(i[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function Or(t,e){return(t.values||[]).find(n=>Pt(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=xn(t),s=xn(e);if(n!==s)return le(n,s);switch(n){case 0:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ce(r.integerValue||r.doubleValue),a=Ce(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return gp(t.timestampValue,e.timestampValue);case 4:return gp(Nr(t),Nr(e));case 5:return le(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ts(r),a=Ts(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=le(o[c],a[c]);if(l!==0)return l}return le(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=le(Ce(r.latitude),Ce(i.latitude));return o!==0?o:le(Ce(r.longitude),Ce(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=bs(o[c],a[c]);if(l)return l}return le(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=le(a[u],l[u]);if(h!==0)return h;const f=bs(o[a[u]],c[l[u]]);if(f!==0)return f}return le(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Y()}}function gp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=ln(t),s=ln(e),r=le(n.seconds,s.seconds);return r!==0?r:le(n.nanos,s.nanos)}function nl(t){return sl(t)}function sl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=ln(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ts(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=sl(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${sl(s.fields[a])}`;return i+"}"}(t.mapValue):Y();var e,n}function rl(t){return!!t&&"integerValue"in t}function il(t){return!!t&&"arrayValue"in t}function mp(t){return!!t&&"nullValue"in t}function yp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lo(t){return!!t&&"mapValue"in t}function Pr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _s(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Pr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pr(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!lo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pr(n)}setAll(e){let n=st.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Pr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());lo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];lo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){_s(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new bt(Pr(this.value))}}function vp(t){const e=[];return _s(t.fields,(n,s)=>{const r=new st([n]);if(lo(s)){const i=vp(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new tl(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,s,r,i){this.key=e,this.documentType=n,this.version=s,this.data=r,this.documentState=i}static newInvalidDocument(e){return new ze(e,0,ae.min(),bt.empty(),0)}static newFoundDocument(e,n,s){return new ze(e,1,n,s,0)}static newNoDocument(e,n){return new ze(e,2,n,bt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,bt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function wp(t,e=null,n=[],s=[],r=null,i=null,o=null){return new DT(t,e,n,s,r,i,o)}function ol(t){const e=Q(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>MT(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Is(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=uo(e.startAt)),e.endAt&&(n+="|ub:",n+=uo(e.endAt)),e.R=n}return e.R}function LT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${nl(s.value)}`;var s}).join(", ")}]`),Is(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+uo(t.startAt)),t.endAt&&(e+=", endAt: "+uo(t.endAt)),`Target(${e})`}function al(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!qT(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Pt(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tp(t.startAt,e.startAt)&&Tp(t.endAt,e.endAt)}function cl(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class rt extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,s):new xT(e,n,s):n==="array-contains"?new VT(e,s):n==="in"?new $T(e,s):n==="not-in"?new BT(e,s):n==="array-contains-any"?new jT(e,s):new rt(e,n,s)}static P(e,n,s){return n==="in"?new UT(e,s):new FT(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(bs(n,this.value)):n!==null&&xn(this.value)===xn(n)&&this.v(bs(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function MT(t){return t.field.canonicalString()+t.op.toString()+nl(t.value)}class xT extends rt{constructor(e,n,s){super(e,n,s),this.key=W.fromName(s.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.v(n)}}class UT extends rt{constructor(e,n){super(e,"in",n),this.keys=Ep("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FT extends rt{constructor(e,n){super(e,"not-in",n),this.keys=Ep("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ep(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>W.fromName(s.referenceValue))}class VT extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return il(n)&&Or(n.arrayValue,this.value)}}class $T extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Or(this.value.arrayValue,n)}}class BT extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Or(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Or(this.value.arrayValue,n)}}class jT extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!il(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Or(this.value.arrayValue,s))}}class ll{constructor(e,n){this.position=e,this.before=n}}function uo(t){return`${t.before?"b":"a"}:${t.position.map(e=>nl(e)).join(",")}`}class Dr{constructor(e,n="asc"){this.field=e,this.dir=n}}function qT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _p(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),n.key):s=bs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return t.before?s<=0:s<0}function Tp(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.S=null,this.D=null,this.startAt,this.endAt}}function HT(t,e,n,s,r,i,o,a){return new ho(t,e,n,s,r,i,o,a)}function Ip(t){return new ho(t)}function fo(t){return!Is(t.limit)&&t.limitType==="F"}function po(t){return!Is(t.limit)&&t.limitType==="L"}function KT(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function WT(t){for(const e of t.filters)if(e.V())return e.field;return null}function zT(t){return t.collectionGroup!==null}function Lr(t){const e=Q(t);if(e.S===null){e.S=[];const n=WT(e),s=KT(e);if(n!==null&&s===null)n.isKeyField()||e.S.push(new Dr(n)),e.S.push(new Dr(st.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.S.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Dr(st.keyField(),i))}}}return e.S}function Un(t){const e=Q(t);if(!e.D)if(e.limitType==="F")e.D=wp(e.path,e.collectionGroup,Lr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Lr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Dr(i.field,o))}const s=e.endAt?new ll(e.endAt.position,!e.endAt.before):null,r=e.startAt?new ll(e.startAt.position,!e.startAt.before):null;e.D=wp(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.D}function GT(t,e,n){return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function go(t,e){return al(Un(t),Un(e))&&t.limitType===e.limitType}function bp(t){return`${ol(Un(t))}|lt:${t.limitType}`}function ul(t){return`Query(target=${LT(Un(t))}; limitType=${t.limitType})`}function mo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):W.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!_p(n.startAt,Lr(n),s)||n.endAt&&_p(n.endAt,Lr(n),s))}(t,e)}function Ap(t){return(e,n)=>{let s=!1;for(const r of Lr(t)){const i=JT(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function JT(t,e,n){const s=t.field.isKeyField()?W.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?bs(a,c):Y()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:co(e)?"-0":e}}function Cp(t){return{integerValue:""+t}}function YT(t,e){return PT(e)?Cp(e):Sp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this._=void 0}}function QT(t,e,n){return t instanceof vo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Mr?kp(t,e):t instanceof xr?Np(t,e):function(s,r){const i=Rp(s,r),o=Op(i)+Op(s.N);return rl(i)&&rl(s.N)?Cp(o):Sp(s.k,o)}(t,e)}function XT(t,e,n){return t instanceof Mr?kp(t,e):t instanceof xr?Np(t,e):n}function Rp(t,e){return t instanceof wo?rl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class vo extends yo{}class Mr extends yo{constructor(e){super(),this.elements=e}}function kp(t,e){const n=Pp(e);for(const s of t.elements)n.some(r=>Pt(r,s))||n.push(s);return{arrayValue:{values:n}}}class xr extends yo{constructor(e){super(),this.elements=e}}function Np(t,e){let n=Pp(e);for(const s of t.elements)n=n.filter(r=>!Pt(r,s));return{arrayValue:{values:n}}}class wo extends yo{constructor(e,n){super(),this.k=e,this.N=n}}function Op(t){return Ce(t.integerValue||t.doubleValue)}function Pp(t){return il(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ZT(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Mr&&s instanceof Mr||n instanceof xr&&s instanceof xr?Es(n.elements,s.elements,Pt):n instanceof wo&&s instanceof wo?Pt(n.N,s.N):n instanceof vo&&s instanceof vo}(t.transform,e.transform)}class eI{constructor(e,n){this.version=e,this.transformResults=n}}class As{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new As}static exists(e){return new As(void 0,e)}static updateTime(e){return new As(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _o{}function tI(t,e,n){t instanceof To?function(s,r,i){const o=s.value.clone(),a=xp(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ss?function(s,r,i){if(!Eo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=xp(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Mp(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function hl(t,e,n){t instanceof To?function(s,r,i){if(!Eo(s.precondition,r))return;const o=s.value.clone(),a=Up(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Lp(r),o).setHasLocalMutations()}(t,e,n):t instanceof Ss?function(s,r,i){if(!Eo(s.precondition,r))return;const o=Up(s.fieldTransforms,i,r),a=r.data;a.setAll(Mp(s)),a.setAll(o),r.convertToFoundDocument(Lp(r),a).setHasLocalMutations()}(t,e,n):function(s,r){Eo(s.precondition,r)&&r.convertToNoDocument(ae.min())}(t,e)}function nI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Rp(s.transform,r||null);i!=null&&(n==null&&(n=bt.empty()),n.set(s.field,i))}return n||null}function Dp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Es(n,s,(r,i)=>ZT(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Lp(t){return t.isFoundDocument()?t.version:ae.min()}class To extends _o{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Ss extends _o{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Mp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function xp(t,e,n){const s=new Map;ve(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,XT(o,a,n[r]))}return s}function Up(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,QT(i,o,e))}return s}class sI extends _o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class rI extends _o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,te;function oI(t){switch(t){default:return Y();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Fp(t){if(t===void 0)return an("GRPC error has no .code"),T.UNKNOWN;switch(t){case Re.OK:return T.OK;case Re.CANCELLED:return T.CANCELLED;case Re.UNKNOWN:return T.UNKNOWN;case Re.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Re.INTERNAL:return T.INTERNAL;case Re.UNAVAILABLE:return T.UNAVAILABLE;case Re.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Re.NOT_FOUND:return T.NOT_FOUND;case Re.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Re.ABORTED:return T.ABORTED;case Re.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Re.DATA_LOSS:return T.DATA_LOSS;default:return Y()}}(te=Re||(Re={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:qe.RED,this.left=r!=null?r:qe.EMPTY,this.right=i!=null?i:qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new qe(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,s,r){return this}insert(t,e,n){return new qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vp(this.data.getIterator())}getIteratorFrom(e){return new Vp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Vp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new Ge(W.comparator);function Fn(){return aI}const cI=new Ge(W.comparator);function fl(){return cI}const lI=new Ge(W.comparator);function uI(){return lI}const hI=new He(W.comparator);function Ee(...t){let e=hI;for(const n of t)e=e.add(n);return e}const fI=new He(le);function $p(){return fI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Ur.createSynthesizedTargetChangeForCurrentChange(e,n)),new bo(ae.min(),s,$p(),Fn(),Ee())}}class Ur{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ur(je.EMPTY_BYTE_STRING,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,s,r){this.$=e,this.removedTargetIds=n,this.key=s,this.O=r}}class Bp{constructor(e,n){this.targetId=e,this.M=n}}class jp{constructor(e,n,s=je.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class qp{constructor(){this.F=0,this.L=Kp(),this.B=je.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=Ee(),n=Ee(),s=Ee();return this.L.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Y()}}),new Ur(this.B,this.U,e,n,s)}H(){this.q=!1,this.L=Kp()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class dI{constructor(e){this.et=e,this.nt=new Map,this.st=Fn(),this.it=Hp(),this.rt=new He(le)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const s=this.ht(n);switch(e.state){case 0:this.lt(n)&&s.W(e.resumeToken);break;case 1:s.Z(),s.K||s.H(),s.W(e.resumeToken);break;case 2:s.Z(),s.K||this.removeTarget(n);break;case 3:this.lt(n)&&(s.tt(),s.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),s.W(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((s,r)=>{this.lt(r)&&n(r)})}dt(e){const n=e.targetId,s=e.M.count,r=this.wt(n);if(r){const i=r.target;if(cl(i))if(s===0){const o=new W(i.path);this.at(n,o,ze.newNoDocument(o,ae.min()))}else ve(s===1);else this._t(n)!==s&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&cl(a.target)){const c=new W(a.target.path);this.st.get(c)!==null||this.yt(o,c)||this.at(o,c,ze.newNoDocument(c,e))}i.j&&(n.set(o,i.G()),i.H())}});let s=Ee();this.it.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.wt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))});const r=new bo(e,n,this.rt,this.st,s);return this.st=Fn(),this.it=Hp(),this.rt=new He(le),r}ct(e,n){if(!this.lt(e))return;const s=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,s),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,s){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,n)?r.J(n,1):r.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),s&&(this.st=this.st.insert(n,s))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new qp,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new He(le),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new qp),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function Hp(){return new Ge(W.comparator)}function Kp(){return new Ge(W.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class mI{constructor(e,n){this.databaseId=e,this.C=n}}function So(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wp(t,e){return t.C?e.toBase64():e.toUint8Array()}function yI(t,e){return So(t,e.toTimestamp())}function jt(t){return ve(!!t),ae.fromTimestamp(function(e){const n=ln(e);return new ht(n.seconds,n.nanos)}(t))}function dl(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zp(t){const e=Ie.fromString(t);return ve(Zp(e)),e}function pl(t,e){return dl(t.databaseId,e.path)}function gl(t,e){const n=zp(e);if(n.get(1)!==t.databaseId.projectId)throw new q(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Gp(n))}function ml(t,e){return dl(t.databaseId,e)}function vI(t){const e=zp(t);return e.length===4?Ie.emptyPath():Gp(e)}function yl(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gp(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jp(t,e,n){return{name:pl(t,e),fields:n.value.mapValue.fields}}function wI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.C?(ve(l===void 0||typeof l=="string"),je.fromBase64String(l||"")):(ve(l===void 0||l instanceof Uint8Array),je.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:Fp(c.code);return new q(l,c.message||"")}(o);n=new jp(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=gl(t,s.document.name),i=jt(s.document.updateTime),o=new bt({mapValue:{fields:s.document.fields}}),a=ze.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new Ao(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=gl(t,s.document),i=s.readTime?jt(s.readTime):ae.min(),o=ze.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ao([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=gl(t,s.document),i=s.removedTargetIds||[];n=new Ao([],i,r,null)}else{if(!("filter"in e))return Y();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new iI(r),o=s.targetId;n=new Bp(o,i)}}return n}function EI(t,e){let n;if(e instanceof To)n={update:Jp(t,e.key,e.value)};else if(e instanceof sI)n={delete:pl(t,e.key)};else if(e instanceof Ss)n={update:Jp(t,e.key,e.data),updateMask:NI(e.fieldMask)};else{if(!(e instanceof rI))return Y();n={verify:pl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof vo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Mr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof wo)return{fieldPath:i.field.canonicalString(),increment:o.N};throw Y()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:yI(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Y()}(t,e.precondition)),n}function _I(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?jt(s.updateTime):jt(r);return i.isEqual(ae.min())&&(i=jt(r)),new eI(i,s.transformResults||[])}(n,e))):[]}function TI(t,e){return{documents:[ml(t,e.path)]}}function II(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ml(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ml(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(yp(u.value))return{unaryFilter:{field:Cs(u.field),op:"IS_NAN"}};if(mp(u.value))return{unaryFilter:{field:Cs(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(yp(u.value))return{unaryFilter:{field:Cs(u.field),op:"IS_NOT_NAN"}};if(mp(u.value))return{unaryFilter:{field:Cs(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cs(u.field),op:CI(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:Cs(l.field),direction:SI(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.C||Is(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Qp(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Qp(e.endAt)),n}function bI(t){let e=vI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ve(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Yp(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Dr(Rs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Is(h)?null:h}(n.limit));let c=null;n.startAt&&(c=Xp(n.startAt));let l=null;return n.endAt&&(l=Xp(n.endAt)),HT(e,r,o,i,a,"F",c,l)}function AI(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yp(t){return t?t.unaryFilter!==void 0?[kI(t)]:t.fieldFilter!==void 0?[RI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Yp(e)).reduce((e,n)=>e.concat(n)):Y():[]}function Qp(t){return{before:t.before,values:t.position}}function Xp(t){const e=!!t.before,n=t.values||[];return new ll(n,e)}function SI(t){return pI[t]}function CI(t){return gI[t]}function Cs(t){return{fieldPath:t.canonicalString()}}function Rs(t){return st.fromServerFormat(t.fieldPath)}function RI(t){return rt.create(Rs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(t.fieldFilter.op),t.fieldFilter.value)}function kI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Rs(t.unaryFilter.field);return rt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Rs(t.unaryFilter.field);return rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rs(t.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Rs(t.unaryFilter.field);return rt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}function NI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const OI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,s)=>{n(e)})}static reject(e){return new O((n,s)=>{s(e)})}static waitFor(e){return new O((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=O.resolve(!1);for(const s of e)n=n.next(r=>r?O.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function Fr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&tI(i,e,s[r])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&hl(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&hl(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const s=e.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(ae.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(n,s)=>Dp(n,s))&&Es(this.baseMutations,e.baseMutations,(n,s)=>Dp(n,s))}}class vl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ve(e.mutations.length===s.length);let r=uI();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new vl(e,n,s,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,s,r,i=ae.min(),o=ae.min(),a=je.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.Gt=e}}function MI(t){const e=bI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?GT(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.zt=new UI}addToCollectionParentIndex(e,n){return this.zt.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.zt.getEntries(n))}}class UI{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new He(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new He(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new ks(0)}static re(){return new ks(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==OI)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n])}else this.inner[s]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),!0;return!1}forEach(e){_s(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return fp(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.changes=new $r(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:ae.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:ze.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?O.resolve(s.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,s){this.Je=e,this.An=n,this.Jt=s}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(s=>this.bn(e,n,s))}bn(e,n,s){return this.Je.getEntry(e,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}Pn(e,n){e.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}vn(e,n){return this.Je.getEntries(e,n).next(s=>this.Vn(e,s).next(()=>s))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>this.Pn(n,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return W.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Sn(e,n.path):zT(n)?this.Dn(e,n,s):this.Cn(e,n,s)}Sn(e,n){return this.Rn(e,new W(n)).next(s=>{let r=fl();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Dn(e,n,s){const r=n.collectionGroup;let i=fl();return this.Jt.getCollectionParents(e,r).next(o=>O.forEach(o,a=>{const c=function(l,u){return new ho(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.Cn(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Cn(e,n,s){let r,i;return this.Je.getDocumentsMatchingQuery(e,n,s).next(o=>(r=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Nn(e,i,r).next(a=>{r=a;for(const c of i)for(const l of c.mutations){const u=l.key;let h=r.get(u);h==null&&(h=ze.newInvalidDocument(u),r=r.insert(u,h)),hl(l,h,c.localWriteTime),h.isFoundDocument()||(r=r.remove(u))}}))).next(()=>(r.forEach((o,a)=>{mo(n,a)||(r=r.remove(o))}),r))}Nn(e,n,s){let r=Ee();for(const o of n)for(const a of o.mutations)a instanceof Ss&&s.get(a.key)===null&&(r=r.add(a.key));let i=s;return this.Je.getEntries(e,r).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.kn=s,this.xn=r}static $n(e,n){let s=Ee(),r=Ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wl(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(ae.min())?this.Fn(e,n):this.Mn.vn(e,r).next(i=>{const o=this.Ln(n,i);return(fo(n)||po(n))&&this.Bn(n.limitType,o,r,s)?this.Fn(e,n):(cp()<=ce.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ul(n)),this.Mn.getDocumentsMatchingQuery(e,n,s).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Ln(e,n){let s=new He(Ap(e));return n.forEach((r,i)=>{mo(e,i)&&(s=s.add(i))}),s}Bn(e,n,s,r){if(s.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,n){return cp()<=ce.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",ul(n)),this.Mn.getDocumentsMatchingQuery(e,n,ae.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n,s,r){this.persistence=e,this.Un=n,this.k=r,this.qn=new Ge(le),this.Kn=new $r(i=>ol(i),al),this.jn=ae.min(),this.An=e.getMutationQueue(s),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new eg(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function BI(t,e,n,s){return new $I(t,e,n,s)}async function tg(t,e){const n=Q(t);let s=n.An,r=n.Wn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(c=>(a=c,s=n.persistence.getMutationQueue(e),r=new eg(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=Ee();for(const f of a){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of c){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return r.vn(o,h).next(f=>({Gn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.An=s,n.Wn=r,n.Un.On(n.Wn),i}function jI(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=O.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(y=>{const b=c.docVersions.get(g);ve(b!==null),y.version.compareTo(b)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&l.addEntry(y,c.commitVersion))})}),f.next(()=>o.An.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.An.performConsistencyCheck(s)).next(()=>n.Wn.vn(s,r))})}function ng(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function qI(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});r=n.qn;const a=[];e.targetChanges.forEach((l,u)=>{const h=r.get(u);if(!h)return;a.push(n.He.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.He.addMatchingKeys(i,l.addedDocuments,u)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(u)?f=f.withResumeToken(je.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(u,f),function(g,y,b){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(h,f,l)&&a.push(n.He.updateTargetData(i,f))});let c=Fn();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(HI(i,o,e.documentUpdates,s,void 0).next(l=>{c=l})),!s.isEqual(ae.min())){const l=n.He.getLastRemoteSnapshotVersion(i).next(u=>n.He.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.Wn.Vn(i,c)).next(()=>c)}).then(i=>(n.qn=r,i))}function HI(t,e,n,s,r){let i=Ee();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=Fn();return n.forEach((c,l)=>{const u=o.get(c),h=(r==null?void 0:r.get(c))||s;l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):F("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function KI(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(s,e)))}function WI(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.He.getTargetData(s,e).next(i=>i?(r=i,O.resolve(r)):n.He.allocateTargetId(s).next(o=>(r=new Vn(e,o,0,s.currentSequenceNumber),n.He.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qn.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(s.targetId,s),n.Kn.set(e,s.targetId)),s})}async function El(t,e,n){const s=Q(t),r=s.qn.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Fr(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qn=s.qn.remove(e),s.Kn.delete(r.target)}function sg(t,e,n){const s=Q(t);let r=ae.min(),i=Ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Q(a),h=u.Kn.get(l);return h!==void 0?O.resolve(u.qn.get(h)):u.He.getTargetData(c,l)}(s,o,Un(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Un.getDocumentsMatchingQuery(o,e,n?r:ae.min(),n?i:Ee())).next(a=>({documents:a,zn:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return O.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var s;return this.Xn.set(n.id,{id:(s=n).id,version:s.version,createTime:jt(s.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(s){return{name:s.name,query:MI(s.bundledQuery),readTime:jt(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.ts=new He(xe.es),this.ns=new He(xe.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const s=new xe(e,n);this.ts=this.ts.add(s),this.ns=this.ns.add(s)}rs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.os(new xe(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new W(new Ie([])),s=new xe(n,e),r=new xe(n,e+1),i=[];return this.ns.forEachInRange([s,r],o=>{this.os(o),i.push(o.key)}),i}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new W(new Ie([])),s=new xe(n,e),r=new xe(n,e+1);let i=Ee();return this.ns.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new xe(e,0),s=this.ts.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class xe{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return W.comparator(e.key,n.key)||le(e.fs,n.fs)}static ss(e,n){return le(e.fs,n.fs)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new He(xe.es)}checkEmpty(e){return O.resolve(this.An.length===0)}addMutationBatch(e,n,s,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new DI(i,n,s,r);this.An.push(o);for(const a of r)this.ws=this.ws.add(new xe(a.key,i)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.gs(s),i=r<0?0:r;return O.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return O.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new xe(n,0),r=new xe(n,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([s,r],o=>{const a=this._s(o.fs);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new He(le);return n.forEach(r=>{const i=new xe(r,0),o=new xe(r,Number.POSITIVE_INFINITY);this.ws.forEachInRange([i,o],a=>{s=s.add(a.fs)})}),O.resolve(this.ys(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;W.isDocumentKey(i)||(i=i.child(""));const o=new xe(new W(i),0);let a=new He(le);return this.ws.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.fs)),!0)},o),O.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ve(this.ps(n.batchId,"removed")===0),this.An.shift();let s=this.ws;return O.forEach(n.mutations,r=>{const i=new xe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ws=s})}ee(e){}containsKey(e,n){const s=new xe(n,0),r=this.ws.firstAfterOrEqual(s);return O.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,O.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new Ge(W.comparator),this.size=0}addEntry(e,n,s){const r=n.key,i=this.docs.get(r),o=i?i.size:0,a=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a,readTime:s}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return O.resolve(s?s.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let s=Fn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ze.newInvalidDocument(r))}),O.resolve(s)}getDocumentsMatchingQuery(e,n,s){let r=Fn();const i=new W(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(s)<=0||mo(n,c)&&(r=r.insert(c.key,c.mutableCopy()))}return O.resolve(r)}Es(e,n){return O.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new YI(this)}getSize(e){return O.resolve(this.size)}}class YI extends FI{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.document.isValidDocument()?n.push(this.De.addEntry(e,r.document,this.getReadTime(s))):this.De.removeEntry(s)}),O.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.persistence=e,this.Is=new $r(n=>ol(n),al),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.As=0,this.Rs=new _l,this.targetCount=0,this.bs=ks.ie()}forEachTarget(e,n){return this.Is.forEach((s,r)=>n(r)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.As&&(this.As=n),O.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ks(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.ae(n),O.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Is.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),O.waitFor(i).next(()=>r)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const s=this.Is.get(n)||null;return O.resolve(s)}addMatchingKeys(e,n,s){return this.Rs.rs(n,s),O.resolve()}removeMatchingKeys(e,n,s){this.Rs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),O.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Rs.ls(n);return O.resolve(s)}containsKey(e,n){return O.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n){this.Ps={},this.Be=new el(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new QI(this),this.Jt=new xI,this.Je=function(s,r){return new JI(s,r)}(this.Jt,s=>this.referenceDelegate.vs(s)),this.k=new LI(n),this.Ye=new zI(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new GI(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,s){F("MemoryPersistence","Starting transaction:",e);const r=new ZI(this.Be.next());return this.referenceDelegate.Vs(),s(r).next(i=>this.referenceDelegate.Ss(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ds(e,n){return O.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class ZI extends PI{constructor(e){super(),this.currentSequenceNumber=e}}class Tl{constructor(e){this.persistence=e,this.Cs=new _l,this.Ns=null}static ks(e){return new Tl(e)}get xs(){if(this.Ns)return this.Ns;throw Y()}addReference(e,n,s){return this.Cs.addReference(s,n),this.xs.delete(s.toString()),O.resolve()}removeReference(e,n,s){return this.Cs.removeReference(s,n),this.xs.add(s.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),O.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(r=>this.xs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.xs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.xs,s=>{const r=W.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return O.or([()=>O.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}class rg{constructor(){this.activeTargetIds=$p()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eb{constructor(){this.pi=new rg,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,s){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new rg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,s,r,i){const o=this.Ui(e,n);F("RestConnection","Sending: ",o,s);const a={};return this.qi(a,r,i),this.Ki(e,o,a,s).then(c=>(F("RestConnection","Received: ",c),c),c=>{throw lp("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ji(e,n,s,r,i){return this.Bi(e,n,s,r,i)}qi(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+ws,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Ui(e,n){const s=nb[e];return`${this.Fi}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,s,r){return new Promise((i,o)=>{const a=new _T;a.listenOnce(vT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xc.NO_ERROR:const l=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Xc.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new q(T.DEADLINE_EXCEEDED,"Request time out"));break;case Xc.HTTP_ERROR:const u=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(y)>=0?y:T.UNKNOWN}(h.status);o(new q(f,h.message))}else o(new q(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new q(T.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}Qi(e,n,s){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=mT(),o=yT(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new ET({})),this.qi(a.initMessageHeaders,n,s),Gh()||Yh()||Aw()||Qh()||Sw()||Jh()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");F("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new sb({Vi:y=>{h?F("Connection","Not sending because WebChannel is closed:",y):(u||(F("Connection","Opening WebChannel transport."),l.open(),u=!0),F("Connection","WebChannel sending:",y),l.send(y))},Si:()=>l.close()}),g=(y,b,A)=>{y.listen(b,k=>{try{A(k)}catch(x){setTimeout(()=>{throw x},0)}})};return g(l,ao.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),g(l,ao.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),f.Oi())}),g(l,ao.EventType.ERROR,y=>{h||(h=!0,lp("Connection","WebChannel transport errored:",y),f.Oi(new q(T.UNAVAILABLE,"The operation could not be completed")))}),g(l,ao.EventType.MESSAGE,y=>{var b;if(!h){const A=y.data[0];ve(!!A);const k=A,x=k.error||((b=k[0])===null||b===void 0?void 0:b.error);if(x){F("Connection","WebChannel received error:",x);const z=x.status;let B=function(H){const D=Re[H];if(D!==void 0)return Fp(D)}(z),ne=x.message;B===void 0&&(B=T.INTERNAL,ne="Unknown error status: "+z+" with message "+x.message),h=!0,f.Oi(new q(B,ne)),l.close()}else F("Connection","WebChannel received:",A),f.Mi(A)}}),g(o,wT.STAT_EVENT,y=>{y.stat===op.PROXY?F("Connection","Detected buffering proxy"):y.stat===op.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function Il(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){return new mI(t,!0)}class og{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Me=e,this.timerId=n,this.Wi=s,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),s=Math.max(0,Date.now()-this.Yi),r=Math.max(0,n-s);r>0&&F("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,s,r,i,o,a,c){this.Me=e,this.nr=s,this.sr=r,this.ir=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new og(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.rr===n&&this.Ir(s,r)},s=>{e(()=>{const r=new q(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ar(r)})})}Ir(e,n){const s=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{s(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(r=>{s(()=>this.Ar(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ib extends ag{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.k=i}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=wI(this.k,e),s=function(r){if(!("targetChange"in r))return ae.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?ae.min():i.readTime?jt(i.readTime):ae.min()}(e);return this.listener.br(n,s)}Pr(e){const n={};n.database=yl(this.k),n.addTarget=function(r,i){let o;const a=i.target;return o=cl(a)?{documents:TI(r,a)}:{query:II(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Wp(r,i.resumeToken):i.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=So(r,i.snapshotVersion.toTimestamp())),o}(this.k,e);const s=AI(this.k,e);s&&(n.labels=s),this.gr(n)}vr(e){const n={};n.database=yl(this.k),n.removeTarget=e,this.gr(n)}}class ob extends ag{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=_I(e.writeResults,e.commitTime),s=jt(e.commitTime);return this.listener.Cr(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=yl(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>EI(this.k,s))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=s,this.k=r,this.$r=!1}Or(){if(this.$r)throw new q(T.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(T.UNKNOWN,r.toString())})}ji(e,n,s){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(T.UNKNOWN,r.toString())})}terminate(){this.$r=!0}}class cb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(an(n),this.Lr=!1):F("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(o=>{s.enqueueAndForget(async()=>{$n(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.Gr.add(4),await Br(c),c.Jr.set("Unknown"),c.Gr.delete(4),await Ro(c)}(this))})}),this.Jr=new cb(s,r)}}async function Ro(t){if($n(t))for(const e of t.zr)await e(!0)}async function Br(t){for(const e of t.zr)await e(!1)}function cg(t,e){const n=Q(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Sl(n)?Al(n):Ns(n).lr()&&bl(n,e))}function lg(t,e){const n=Q(t),s=Ns(n);n.Wr.delete(e),s.lr()&&ug(n,e),n.Wr.size===0&&(s.lr()?s._r():$n(n)&&n.Jr.set("Unknown"))}function bl(t,e){t.Yr.X(e.targetId),Ns(t).Pr(e)}function ug(t,e){t.Yr.X(e),Ns(t).vr(e)}function Al(t){t.Yr=new dI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Ns(t).start(),t.Jr.Br()}function Sl(t){return $n(t)&&!Ns(t).hr()&&t.Wr.size>0}function $n(t){return Q(t).Gr.size===0}function hg(t){t.Yr=void 0}async function ub(t){t.Wr.forEach((e,n)=>{bl(t,e)})}async function hb(t,e){hg(t),Sl(t)?(t.Jr.Kr(e),Al(t)):t.Jr.set("Unknown")}async function fb(t,e,n){if(t.Jr.set("Online"),e instanceof jp&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Wr.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Wr.delete(o),s.Yr.removeTarget(o))}(t,e)}catch(s){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ko(t,s)}else if(e instanceof Ao?t.Yr.ot(e):e instanceof Bp?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(ae.min()))try{const s=await ng(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Yr.gt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Wr.get(c);l&&r.Wr.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.Wr.get(a);if(!c)return;r.Wr.set(a,c.withResumeToken(je.EMPTY_BYTE_STRING,c.snapshotVersion)),ug(r,a);const l=new Vn(c.target,a,1,c.sequenceNumber);bl(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){F("RemoteStore","Failed to raise snapshot:",s),await ko(t,s)}}async function ko(t,e,n){if(!Fr(e))throw e;t.Gr.add(1),await Br(t),t.Jr.set("Offline"),n||(n=()=>ng(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Ro(t)})}function fg(t,e){return e().catch(n=>ko(t,n,e))}async function No(t){const e=Q(t),n=un(e);let s=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;db(e);)try{const r=await KI(e.localStore,s);if(r===null){e.Qr.length===0&&n._r();break}s=r.batchId,pb(e,r)}catch(r){await ko(e,r)}dg(e)&&pg(e)}function db(t){return $n(t)&&t.Qr.length<10}function pb(t,e){t.Qr.push(e);const n=un(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function dg(t){return $n(t)&&!un(t).hr()&&t.Qr.length>0}function pg(t){un(t).start()}async function gb(t){un(t).kr()}async function mb(t){const e=un(t);for(const n of t.Qr)e.Dr(n.mutations)}async function yb(t,e,n){const s=t.Qr.shift(),r=vl.from(s,e,n);await fg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await No(t)}async function vb(t,e){e&&un(t).Sr&&await async function(n,s){if(r=s.code,oI(r)&&r!==T.ABORTED){const i=n.Qr.shift();un(n).wr(),await fg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await No(n)}var r}(t,e),dg(t)&&pg(t)}async function wb(t,e){const n=Q(t);e?(n.Gr.delete(2),await Ro(n)):e||(n.Gr.add(2),await Br(n),n.Jr.set("Unknown"))}function Ns(t){return t.Xr||(t.Xr=function(e,n,s){const r=Q(e);return r.Or(),new ib(n,r.ir,r.authCredentials,r.appCheckCredentials,r.k,s)}(t.datastore,t.asyncQueue,{Di:ub.bind(null,t),Ni:hb.bind(null,t),br:fb.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Sl(t)?Al(t):t.Jr.set("Unknown")):(await t.Xr.stop(),hg(t))})),t.Xr}function un(t){return t.Zr||(t.Zr=function(e,n,s){const r=Q(e);return r.Or(),new ob(n,r.ir,r.authCredentials,r.appCheckCredentials,r.k,s)}(t.datastore,t.asyncQueue,{Di:gb.bind(null,t),Ni:vb.bind(null,t),Nr:mb.bind(null,t),Cr:yb.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await No(t)):(await t.Zr.stop(),t.Qr.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Cl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rl(t,e){if(an("AsyncQueue",`${e}: ${t}`),Fr(t))return new q(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.comparator=e?(n,s)=>e(n,s)||W.comparator(n.key,s.key):(n,s)=>W.comparator(n.key,s.key),this.keyedMap=fl(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new Os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Os;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.eo=new Ge(W.comparator)}track(e){const n=e.doc.key,s=this.eo.get(n);s?e.type!==0&&s.type===3?this.eo=this.eo.insert(n,e):e.type===3&&s.type!==1?this.eo=this.eo.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.eo=this.eo.remove(n):e.type===1&&s.type===2?this.eo=this.eo.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):Y():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ps{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ps(e,n,Os.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.so=void 0,this.listeners=[]}}class _b{constructor(){this.queries=new $r(e=>bp(e),go),this.onlineState="Unknown",this.io=new Set}}async function Tb(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new Eb),r)try{i.so=await n.onListen(s)}catch(o){const a=Rl(o,`Initialization of query '${ul(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.ro(n.onlineState),i.so&&e.oo(i.so)&&kl(n)}async function Ib(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function bb(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.oo(r)&&(s=!0);o.so=r}}s&&kl(n)}function Ab(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function kl(t){t.io.forEach(e=>{e.next()})}class Sb{constructor(e,n,s){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=s||{}}oo(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ps(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.wo||!s)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.key=e}}class yg{constructor(e){this.key=e}}class Cb{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=Ee(),this.mutatedKeys=Ee(),this.Ao=Ap(e),this.Ro=new Os(this.Ao)}get bo(){return this.To}Po(e,n){const s=n?n.vo:new gg,r=n?n.Ro:this.Ro;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=fo(this.query)&&r.size===this.query.limit?r.last():null,l=po(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=mo(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;f&&g?f.data.isEqual(g.data)?y!==b&&(s.track({type:3,doc:g}),A=!0):this.Vo(f,g)||(s.track({type:2,doc:g}),A=!0,(c&&this.Ao(g,c)>0||l&&this.Ao(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),A=!0):f&&!g&&(s.track({type:1,doc:f}),A=!0,(c||l)&&(a=!0)),A&&(g?(o=o.add(g),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),fo(this.query)||po(this.query))for(;o.size>this.query.limit;){const u=fo(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Ro:o,vo:s,Bn:a,mutatedKeys:i}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return g(h)-g(f)}(l.type,u.type)||this.Ao(l.doc,u.doc)),this.So(s);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,c=a!==this.Eo;return this.Eo=a,i.length!==0||c?{snapshot:new Ps(this.query,e.Ro,r,i,e.mutatedKeys,a===0,c,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new gg,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=Ee(),this.Ro.forEach(s=>{this.No(s.key)&&(this.Io=this.Io.add(s.key))});const n=[];return e.forEach(s=>{this.Io.has(s)||n.push(new yg(s))}),this.Io.forEach(s=>{e.has(s)||n.push(new mg(s))}),n}ko(e){this.To=e.zn,this.Io=Ee();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return Ps.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class Rb{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class kb{constructor(e){this.key=e,this.$o=!1}}class Nb{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new $r(a=>bp(a),go),this.Fo=new Map,this.Lo=new Set,this.Bo=new Ge(W.comparator),this.Uo=new Map,this.qo=new _l,this.Ko={},this.jo=new Map,this.Qo=ks.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function Ob(t,e){const n=Bb(t);let s,r;const i=n.Mo.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.xo();else{const o=await WI(n.localStore,Un(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Pb(n,e,s,a==="current"),n.isPrimaryClient&&cg(n.remoteStore,o)}return r}async function Pb(t,e,n,s){t.Go=(u,h,f)=>async function(g,y,b,A){let k=y.view.Po(b);k.Bn&&(k=await sg(g.localStore,y.query,!1).then(({documents:B})=>y.view.Po(B,k)));const x=A&&A.targetChanges.get(y.targetId),z=y.view.applyChanges(k,g.isPrimaryClient,x);return Ig(g,y.targetId,z.Co),z.snapshot}(t,u,h,f);const r=await sg(t.localStore,e,!0),i=new Cb(e,r.zn),o=i.Po(r.documents),a=Ur.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Ig(t,n,c.Co);const l=new Rb(e,n,i);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function Db(t,e){const n=Q(t),s=n.Mo.get(e),r=n.Fo.get(s.targetId);if(r.length>1)return n.Fo.set(s.targetId,r.filter(i=>!go(i,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await El(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),lg(n.remoteStore,s.targetId),Nl(n,s.targetId)}).catch(Vr)):(Nl(n,s.targetId),await El(n.localStore,s.targetId,!0))}async function Lb(t,e,n){const s=jb(t);try{const r=await function(i,o){const a=Q(i),c=ht.now(),l=o.reduce((h,f)=>h.add(f.key),Ee());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,l).next(f=>{u=f;const g=[];for(const y of o){const b=nI(y,u.get(y.key));b!=null&&g.push(new Ss(y.key,b,vp(b.value.mapValue),As.exists(!0)))}return a.An.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Ko[i.currentUser.toKey()];c||(c=new Ge(le)),c=c.insert(o,a),i.Ko[i.currentUser.toKey()]=c}(s,r.batchId,n),await jr(s,r.changes),await No(s.remoteStore)}catch(r){const i=Rl(r,"Failed to persist write");n.reject(i)}}async function vg(t,e){const n=Q(t);try{const s=await qI(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Uo.get(i);o&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.$o=!0:r.modifiedDocuments.size>0?ve(o.$o):r.removedDocuments.size>0&&(ve(o.$o),o.$o=!1))}),await jr(n,s,e)}catch(s){await Vr(s)}}function wg(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Mo.forEach((i,o)=>{const a=o.view.ro(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.ro(o)&&(c=!0)}),c&&kl(a)}(s.eventManager,e),r.length&&s.Oo.br(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Mb(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Uo.get(e),i=r&&r.key;if(i){let o=new Ge(W.comparator);o=o.insert(i,ze.newNoDocument(i,ae.min()));const a=Ee().add(i),c=new bo(ae.min(),new Map,new He(le),o,a);await vg(s,c),s.Bo=s.Bo.remove(i),s.Uo.delete(e),Ol(s)}else await El(s.localStore,e,!1).then(()=>Nl(s,e,n)).catch(Vr)}async function xb(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await jI(n.localStore,e);_g(n,s,null),Eg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await jr(n,r)}catch(r){await Vr(r)}}async function Ub(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.An.lookupMutationBatch(c,o).next(u=>(ve(u!==null),l=u.keys(),a.An.removeMutationBatch(c,u))).next(()=>a.An.performConsistencyCheck(c)).next(()=>a.Wn.vn(c,l))})}(s.localStore,e);_g(s,e,n),Eg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await jr(s,r)}catch(r){await Vr(r)}}function Eg(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function _g(t,e,n){const s=Q(t);let r=s.Ko[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ko[s.currentUser.toKey()]=r}}function Nl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Fo.get(e))t.Mo.delete(s),n&&t.Oo.zo(s,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(s=>{t.qo.containsKey(s)||Tg(t,s)})}function Tg(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(lg(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Ol(t))}function Ig(t,e,n){for(const s of n)s instanceof mg?(t.qo.addReference(s.key,e),Fb(t,s)):s instanceof yg?(F("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||Tg(t,s.key)):Y()}function Fb(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||(F("SyncEngine","New document in limbo: "+n),t.Lo.add(s),Ol(t))}function Ol(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new W(Ie.fromString(e)),s=t.Qo.next();t.Uo.set(s,new kb(n)),t.Bo=t.Bo.insert(n,s),cg(t.remoteStore,new Vn(Un(Ip(n.path)),s,2,el.I))}}async function jr(t,e,n){const s=Q(t),r=[],i=[],o=[];s.Mo.isEmpty()||(s.Mo.forEach((a,c)=>{o.push(s.Go(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=wl.$n(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Oo.br(r),await async function(a,c){const l=Q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.kn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Fr(u))throw u;F("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.qn.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.qn=l.qn.insert(h,y)}}}(s.localStore,i))}async function Vb(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const s=await tg(n.localStore,e);n.currentUser=e,function(r,i){r.jo.forEach(o=>{o.forEach(a=>{a.reject(new q(T.CANCELLED,i))})}),r.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await jr(n,s.Gn)}}function $b(t,e){const n=Q(t),s=n.Uo.get(e);if(s&&s.$o)return Ee().add(s.key);{let r=Ee();const i=n.Fo.get(e);if(!i)return r;for(const o of i){const a=n.Mo.get(o);r=r.unionWith(a.view.bo)}return r}}function Bb(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$b.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Mb.bind(null,e),e.Oo.br=bb.bind(null,e.eventManager),e.Oo.zo=Ab.bind(null,e.eventManager),e}function jb(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ub.bind(null,e),e}class qb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Co(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return BI(this.persistence,new VI,e.initialUser,this.k)}Yo(e){return new XI(Tl.ks,this.k)}Jo(e){return new eb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>wg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vb.bind(null,this.syncEngine),await wb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _b}createDatastore(e){const n=Co(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new rb(r));var r;return function(i,o,a,c){return new ab(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>wg(this.syncEngine,a,0),o=ig.Pt()?new ig:new tb,new lb(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Nb(s,r,i,o,a,c);return l&&(u.Wo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);F("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await Br(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=nt.UNAUTHENTICATED,this.clientId=up.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{F("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Rl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function zb(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await tg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Gb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Jb(t);F("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>async function(i,o){const a=Q(i);a.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const c=$n(a);a.Gr.add(3),await Br(a),c&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Ro(a)}(e.remoteStore,r)),t.onlineComponents=e}async function Jb(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await zb(t,new qb)),t.offlineComponents}async function bg(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await Gb(t,new Hb)),t.onlineComponents}function Yb(t){return bg(t).then(e=>e.syncEngine)}async function Qb(t){const e=await bg(t),n=e.eventManager;return n.onListen=Ob.bind(null,e.syncEngine),n.onUnlisten=Db.bind(null,e.syncEngine),n}function Xb(t,e,n={}){const s=new cn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Kb({next:h=>{i.enqueueAndForget(()=>Ib(r,u)),h.fromCache&&a.source==="server"?c.reject(new q(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Sb(o,l,{includeMetadataChanges:!0,wo:!0});return Tb(r,u)}(await Qb(t),t.asyncQueue,e,n,s)),s.promise}class Zb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t,e,n){if(!n)throw new q(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eA(t,e,n,s){if(e===!0&&s===!0)throw new q(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cg(t){if(!W.isDocumentKey(t))throw new q(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rg(t){if(W.isDocumentKey(t))throw new q(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function Oo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pl(t);throw new q(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,eA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kg({}),this._settingsFrozen=!1,e instanceof qr?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new q(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(r.options.projectId)}(e))}get app(){if(!this._app)throw new q(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IT;switch(n.type){case"gapi":const s=n.client;return ve(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new ST(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new q(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ag.get(e);n&&(F("ComponentProvider","Removing Datastore"),Ag.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Po{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Po(this.firestore,e,this._query)}}class hn extends Po{constructor(e,n,s){super(e,n,Ip(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new W(e))}withConverter(e){return new hn(this.firestore,e,this._path)}}function WA(t,e,...n){if(t=lt(t),Sg("collection","path",e),t instanceof Dl){const s=Ie.fromString(e,...n);return Rg(s),new hn(t,null,s)}{if(!(t instanceof yt||t instanceof hn))throw new q(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Rg(s),new hn(t.firestore,null,s)}}function zA(t,e,...n){if(t=lt(t),arguments.length===1&&(e=up.A()),Sg("doc","path",e),t instanceof Dl){const s=Ie.fromString(e,...n);return Cg(s),new yt(t,null,new W(s))}{if(!(t instanceof yt||t instanceof hn))throw new q(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return Cg(s),new yt(t.firestore,t instanceof hn?t.converter:null,new W(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new og(this,"async_queue_retry"),this.bc=()=>{const n=Il();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Il();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=Il();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new cn;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!Fr(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(s=>{this.Ec=s,this.Ic=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw an("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ic=!1,s))));return this.mc=n,n}enqueueAfterDelay(e,n,s){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const r=Cl.createAndSchedule(this,e,n,s,i=>this.Sc(i));return this.Tc.push(r),r}Pc(){this.Ec&&Y()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}class Ll extends Dl{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new tA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Og(this),this._firestoreClient.terminate()}}function GA(t=tf()){return Wa(t,"firestore").getImmediate()}function Ng(t){return t._firestoreClient||Og(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Og(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Zb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Wb(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ds(je.fromBase64String(e))}catch(n){throw new q(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ds(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=/^__.*__$/;class sA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new To(e,this.data,n,this.fieldTransforms)}}function Dg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Ul{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.k=s,this.ignoreUndefinedProperties=r,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new Ul(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Oc({path:s,Fc:!1});return r.Lc(e),r}Bc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Oc({path:s,Fc:!1});return r.xc(),r}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return Do(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(Dg(this.$c)&&nA.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class rA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=s||Co(e)}Qc(e,n,s,r=!1){return new Ul({$c:e,methodName:n,jc:s,path:st.emptyPath(),Fc:!1,Kc:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function iA(t){const e=t._freezeSettings(),n=Co(t._databaseId);return new rA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oA(t,e,n,s,r,i={}){const o=t.Qc(i.merge||i.mergeFields?2:0,e,n,r);Ug("Data must be an object, but it was:",o,s);const a=Mg(s,o);let c,l;if(i.merge)c=new tl(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=aA(e,h,n);if(!o.contains(f))throw new q(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);lA(u,f)||u.push(f)}c=new tl(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new sA(new bt(a),c,l)}function Lg(t,e){if(xg(t=lt(t)))return Ug("Unsupported field value:",e,t),Mg(t,e);if(t instanceof Pg)return function(n,s){if(!Dg(s.$c))throw s.qc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qc(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Lg(o,s.Uc(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=lt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return YT(s.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ht.fromDate(n);return{timestampValue:So(s.k,r)}}if(n instanceof ht){const r=new ht(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:So(s.k,r)}}if(n instanceof xl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ds)return{bytesValue:Wp(s.k,n._byteString)};if(n instanceof yt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.qc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:dl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.qc(`Unsupported field value: ${Pl(n)}`)}(t,e)}function Mg(t,e){const n={};return fp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(t,(s,r)=>{const i=Lg(r,e.Mc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function xg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ht||t instanceof xl||t instanceof Ds||t instanceof yt||t instanceof Pg)}function Ug(t,e,n){if(!xg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Pl(n);throw s==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+s)}}function aA(t,e,n){if((e=lt(e))instanceof Ml)return e._internalPath;if(typeof e=="string")return Fg(t,e);throw Do("Field path arguments must be of type string or ",t,!1,void 0,n)}const cA=new RegExp("[~\\*/\\[\\]]");function Fg(t,e,n){if(e.search(cA)>=0)throw Do(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ml(...e.split("."))._internalPath}catch{throw Do(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Do(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new q(T.INVALID_ARGUMENT,a+t+c)}function lA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($g("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uA extends Vg{data(){return super.data()}}function $g(t,e){return typeof e=="string"?Fg(t,e):e instanceof Ml?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hA extends Vg{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field($g("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Mo extends hA{data(e={}){return super.data(e)}}class fA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Lo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Mo(this._firestore,this._userDataWriter,s.key,s,new Lo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Mo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Lo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Mo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Lo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:dA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){if(po(t)&&t.explicitOrderBy.length===0)throw new q(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{convertValue(e,n="none"){switch(xn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const s={};return _s(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new xl(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=pp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Nr(e));default:return null}}convertTimestamp(e){const n=ln(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);ve(Zp(s));const r=new qr(s.get(1),s.get(3)),i=new W(s.popFirst(5));return r.isEqual(n)||an(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class yA extends gA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function JA(t){t=Oo(t,Po);const e=Oo(t.firestore,Ll),n=Ng(e),s=new yA(e);return pA(t._query),Xb(n,t._query).then(r=>new fA(e,s,t,r))}function YA(t,e,n){t=Oo(t,yt);const s=Oo(t.firestore,Ll),r=mA(t.converter,e,n);return vA(s,[oA(iA(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,As.none())])}function vA(t,e){return function(n,s){const r=new cn;return n.asyncQueue.enqueueAndForget(async()=>Lb(await Yb(n),s,r)),r.promise}(Ng(t),e)}(function(t,e=!0){(function(n){ws=n})(nr),tr(new as("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new Ll(r,new bT(n.getProvider("auth-internal")),new RT(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),Xt(ap,"3.4.3",t),Xt(ap,"3.4.3","esm2017")})();var wA=!1;/*!
  * pinia v2.0.9
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */let Bg;const xo=t=>Bg=t,jg=Symbol();function Fl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hr||(Hr={}));function QA(){const t=Ql(!0),e=t.run(()=>oa({}));let n=[],s=[];const r=Jn({install(i){xo(r),r._a=i,i.provide(jg,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!wA?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const qg=()=>{};function Hg(t,e,n,s=qg){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Ia()&&da(r),r}function Ls(t,...e){t.forEach(n=>{n(...e)})}function Vl(t,e){for(const n in e){const s=e[n],r=t[n];Fl(r)&&Fl(s)&&!Ae(s)&&!Wt(s)?t[n]=Vl(r,s):t[n]=s}return t}const EA=Symbol();function _A(t){return!Fl(t)||!t.hasOwnProperty(EA)}const{assign:qt}=Object;function TA(t){return!!(Ae(t)&&t.effect)}function IA(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=Mm(n.state.value[t]);return qt(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Jn(Et(()=>{xo(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return c=Kg(t,l,e,n),c.$reset=function(){const h=r?r():{};this.$patch(f=>{qt(f,h)})},c}function Kg(t,e,n={},s,r){let i;const o=n.state,a=qt({actions:{}},n),c={deep:!0};let l,u,h=Jn([]),f=Jn([]),g;const y=s.state.value[t];!o&&!y&&(s.state.value[t]={}),oa({});function b(H){let D;l=u=!1,typeof H=="function"?(H(s.state.value[t]),D={type:Hr.patchFunction,storeId:t,events:g}):(Vl(s.state.value[t],H),D={type:Hr.patchObject,payload:H,storeId:t,events:g}),Ra().then(()=>{l=!0}),u=!0,Ls(h,D,s.state.value[t])}const A=qg;function k(){i.stop(),h=[],f=[],s._s.delete(t)}function x(H,D){return function(){xo(s);const ue=Array.from(arguments),re=[],be=[];function Pe(ke){re.push(ke)}function Ue(ke){be.push(ke)}Ls(f,{args:ue,name:H,store:B,after:Pe,onError:Ue});let Ze;try{Ze=D.apply(this&&this.$id===t?this:B,ue)}catch(ke){throw Ls(be,ke),ke}return Ze instanceof Promise?Ze.then(ke=>(Ls(re,ke),ke)).catch(ke=>(Ls(be,ke),Promise.reject(ke))):(Ls(re,Ze),Ze)}}const z={_p:s,$id:t,$onAction:Hg.bind(null,f),$patch:b,$reset:A,$subscribe(H,D={}){const ue=Hg(h,H,D.detached,()=>re()),re=i.run(()=>Ws(()=>s.state.value[t],be=>{(D.flush==="sync"?u:l)&&H({storeId:t,type:Hr.direct,events:g},be)},qt({},c,D)));return ue},$dispose:k},B=Gn(qt({},z));s._s.set(t,B);const ne=s._e.run(()=>(i=Ql(),i.run(()=>e())));for(const H in ne){const D=ne[H];if(Ae(D)&&!TA(D)||Wt(D))o||(y&&_A(D)&&(Ae(D)?D.value=y[H]:Vl(D,y[H])),s.state.value[t][H]=D);else if(typeof D=="function"){const ue=x(H,D);ne[H]=ue,a.actions[H]=D}}return qt(B,ne),qt(oe(B),ne),Object.defineProperty(B,"$state",{get:()=>s.state.value[t],set:H=>{b(D=>{qt(D,H)})}}),s._p.forEach(H=>{qt(B,i.run(()=>H({store:B,app:s._a,pinia:s,options:a})))}),y&&o&&n.hydrate&&n.hydrate(B.$state,y),l=!0,u=!0,B}function XA(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Ia();return a=a||l&&_t(jg),a&&xo(a),a=Bg,a._s.has(s)||(i?Kg(s,e,r,a):IA(s,r,a)),a._s.get(s)}return o.$id=s,o}export{tt as A,GA as B,zA as C,$m as D,Cy as E,gt as F,RA as G,PA as H,xA as I,MA as J,LA as K,QA as L,WA as S,JA as _,FA as a,qA as b,zu as c,Yu as d,CA as e,Xu as f,KA as g,NA as h,VA as i,XA as j,oa as k,$s as l,DA as m,$o as n,Zm as o,BA as p,HA as q,SA as r,jA as s,bA as t,UA as u,OA as v,AA as w,$A as x,YA as y,kA as z};
