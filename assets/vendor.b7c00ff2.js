function kr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const oc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ac=kr(oc);function si(t){return!!t||t===""}function Pr(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=me(r)?uc(r):Pr(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(me(t))return t;if(de(t))return t}}const cc=/;(?![^(]*\))/g,lc=/:(.+)/;function uc(t){const e={};return t.split(cc).forEach(n=>{if(n){const r=n.split(lc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Nr(t){let e="";if(me(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Nr(t[n]);r&&(e+=r+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xp=t=>t==null?"":B(t)||de(t)&&(t.toString===ci||!V(t.toString))?JSON.stringify(t,ii,2):String(t),ii=(t,e)=>e&&e.__v_isRef?ii(t,e.value):Lt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:oi(e)?{[`Set(${e.size})`]:[...e.values()]}:de(e)&&!B(e)&&!li(e)?String(e):e,te={},Mt=[],Ne=()=>{},fc=()=>!1,dc=/^on[^a-z]/,Dn=t=>dc.test(t),Mr=t=>t.startsWith("onUpdate:"),_e=Object.assign,Lr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hc=Object.prototype.hasOwnProperty,G=(t,e)=>hc.call(t,e),B=Array.isArray,Lt=t=>Un(t)==="[object Map]",oi=t=>Un(t)==="[object Set]",V=t=>typeof t=="function",me=t=>typeof t=="string",xr=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",ai=t=>de(t)&&V(t.then)&&V(t.catch),ci=Object.prototype.toString,Un=t=>ci.call(t),pc=t=>Un(t).slice(8,-1),li=t=>Un(t)==="[object Object]",Dr=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fn=kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$n=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gc=/-(\w)/g,Fe=$n(t=>t.replace(gc,(e,n)=>n?n.toUpperCase():"")),mc=/\B([A-Z])/g,dt=$n(t=>t.replace(mc,"-$1").toLowerCase()),Bn=$n(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ur=$n(t=>t?`on${Bn(t)}`:""),sn=(t,e)=>!Object.is(t,e),Hn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},jn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ui;const _c=()=>ui||(ui=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let ht;const Vn=[];class fi{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ht&&(this.parent=ht,this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Vn.push(this),ht=this)}off(){this.active&&(Vn.pop(),ht=Vn[Vn.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function di(t){return new fi(t)}function vc(t,e){e=e||ht,e&&e.active&&e.effects.push(t)}const $r=t=>{const e=new Set(t);return e.w=0,e.n=0,e},hi=t=>(t.w&Qe)>0,pi=t=>(t.n&Qe)>0,yc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qe},bc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];hi(s)&&!pi(s)?s.delete(t):e[n++]=s,s.w&=~Qe,s.n&=~Qe}e.length=n}},Br=new WeakMap;let on=0,Qe=1;const Hr=30,an=[];let pt;const gt=Symbol(""),jr=Symbol("");class Vr{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],vc(this,r)}run(){if(!this.active)return this.fn();if(!an.includes(this))try{return an.push(pt=this),Ic(),Qe=1<<++on,on<=Hr?yc(this):gi(this),this.fn()}finally{on<=Hr&&bc(this),Qe=1<<--on,mt(),an.pop();const e=an.length;pt=e>0?an[e-1]:void 0}}stop(){this.active&&(gi(this),this.onStop&&this.onStop(),this.active=!1)}}function gi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xt=!0;const Wr=[];function Dt(){Wr.push(xt),xt=!1}function Ic(){Wr.push(xt),xt=!0}function mt(){const t=Wr.pop();xt=t===void 0?!0:t}function we(t,e,n){if(!mi())return;let r=Br.get(t);r||Br.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=$r()),_i(s)}function mi(){return xt&&pt!==void 0}function _i(t,e){let n=!1;on<=Hr?pi(t)||(t.n|=Qe,n=!hi(t)):n=!t.has(pt),n&&(t.add(pt),pt.deps.push(t))}function ze(t,e,n,r,s,i){const o=Br.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Dr(n)&&a.push(o.get("length")):(a.push(o.get(gt)),Lt(t)&&a.push(o.get(jr)));break;case"delete":B(t)||(a.push(o.get(gt)),Lt(t)&&a.push(o.get(jr)));break;case"set":Lt(t)&&a.push(o.get(gt));break}if(a.length===1)a[0]&&zr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);zr($r(c))}}function zr(t,e){for(const n of B(t)?t:[...t])(n!==pt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ec=kr("__proto__,__v_isRef,__isVue"),vi=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(xr)),wc=Kr(),Tc=Kr(!1,!0),Rc=Kr(!0),yi=Ac();function Ac(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Dt();const r=J(this)[e].apply(this,n);return mt(),r}}),t}function Kr(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?jc:Ci:e?Si:Ai).get(r))return r;const o=B(r);if(!t&&o&&G(yi,s))return Reflect.get(yi,s,i);const a=Reflect.get(r,s,i);return(xr(s)?vi.has(s):Ec(s))||(t||we(r,"get",s),e)?a:le(a)?!o||!Dr(s)?a.value:a:de(a)?t?Oi(a):Ut(a):a}}const Sc=bi(),Cc=bi(!0);function bi(t=!1){return function(n,r,s,i){let o=n[r];if(!t&&!Yr(s)&&(s=J(s),o=J(o),!B(n)&&le(o)&&!le(s)))return o.value=s,!0;const a=B(n)&&Dr(r)?Number(r)<n.length:G(n,r),c=Reflect.set(n,r,s,i);return n===J(i)&&(a?sn(s,o)&&ze(n,"set",r,s):ze(n,"add",r,s)),c}}function Oc(t,e){const n=G(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ze(t,"delete",e,void 0),r}function kc(t,e){const n=Reflect.has(t,e);return(!xr(e)||!vi.has(e))&&we(t,"has",e),n}function Pc(t){return we(t,"iterate",B(t)?"length":gt),Reflect.ownKeys(t)}const Ii={get:wc,set:Sc,deleteProperty:Oc,has:kc,ownKeys:Pc},Nc={get:Rc,set(t,e){return!0},deleteProperty(t,e){return!0}},Mc=_e({},Ii,{get:Tc,set:Cc}),qr=t=>t,Wn=t=>Reflect.getPrototypeOf(t);function zn(t,e,n=!1,r=!1){t=t.__v_raw;const s=J(t),i=J(e);e!==i&&!n&&we(s,"get",e),!n&&we(s,"get",i);const{has:o}=Wn(s),a=r?qr:n?Xr:cn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Kn(t,e=!1){const n=this.__v_raw,r=J(n),s=J(t);return t!==s&&!e&&we(r,"has",t),!e&&we(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function qn(t,e=!1){return t=t.__v_raw,!e&&we(J(t),"iterate",gt),Reflect.get(t,"size",t)}function Ei(t){t=J(t);const e=J(this);return Wn(e).has.call(e,t)||(e.add(t),ze(e,"add",t,t)),this}function wi(t,e){e=J(e);const n=J(this),{has:r,get:s}=Wn(n);let i=r.call(n,t);i||(t=J(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?sn(e,o)&&ze(n,"set",t,e):ze(n,"add",t,e),this}function Ti(t){const e=J(this),{has:n,get:r}=Wn(e);let s=n.call(e,t);s||(t=J(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ze(e,"delete",t,void 0),i}function Ri(){const t=J(this),e=t.size!==0,n=t.clear();return e&&ze(t,"clear",void 0,void 0),n}function Gn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=e?qr:t?Xr:cn;return!t&&we(a,"iterate",gt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function Jn(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=Lt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?qr:e?Xr:cn;return!e&&we(i,"iterate",c?jr:gt),{next(){const{value:p,done:h}=l.next();return h?{value:p,done:h}:{value:a?[f(p[0]),f(p[1])]:f(p),done:h}},[Symbol.iterator](){return this}}}}function Ze(t){return function(...e){return t==="delete"?!1:this}}function Lc(){const t={get(i){return zn(this,i)},get size(){return qn(this)},has:Kn,add:Ei,set:wi,delete:Ti,clear:Ri,forEach:Gn(!1,!1)},e={get(i){return zn(this,i,!1,!0)},get size(){return qn(this)},has:Kn,add:Ei,set:wi,delete:Ti,clear:Ri,forEach:Gn(!1,!0)},n={get(i){return zn(this,i,!0)},get size(){return qn(this,!0)},has(i){return Kn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Gn(!0,!1)},r={get(i){return zn(this,i,!0,!0)},get size(){return qn(this,!0)},has(i){return Kn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Jn(i,!1,!1),n[i]=Jn(i,!0,!1),e[i]=Jn(i,!1,!0),r[i]=Jn(i,!0,!0)}),[t,n,e,r]}const[xc,Dc,Uc,Fc]=Lc();function Gr(t,e){const n=e?t?Fc:Uc:t?Dc:xc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const $c={get:Gr(!1,!1)},Bc={get:Gr(!1,!0)},Hc={get:Gr(!0,!1)},Ai=new WeakMap,Si=new WeakMap,Ci=new WeakMap,jc=new WeakMap;function Vc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wc(t){return t.__v_skip||!Object.isExtensible(t)?0:Vc(pc(t))}function Ut(t){return t&&t.__v_isReadonly?t:Jr(t,!1,Ii,$c,Ai)}function zc(t){return Jr(t,!1,Mc,Bc,Si)}function Oi(t){return Jr(t,!0,Nc,Hc,Ci)}function Jr(t,e,n,r,s){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Wc(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function et(t){return Yr(t)?et(t.__v_raw):!!(t&&t.__v_isReactive)}function Yr(t){return!!(t&&t.__v_isReadonly)}function ki(t){return et(t)||Yr(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function Ft(t){return jn(t,"__v_skip",!0),t}const cn=t=>de(t)?Ut(t):t,Xr=t=>de(t)?Oi(t):t;function Pi(t){mi()&&(t=J(t),t.dep||(t.dep=$r()),_i(t.dep))}function Ni(t,e){t=J(t),t.dep&&zr(t.dep)}function le(t){return Boolean(t&&t.__v_isRef===!0)}function Qr(t){return Mi(t,!1)}function Kc(t){return Mi(t,!0)}function Mi(t,e){return le(t)?t:new qc(t,e)}class qc{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:cn(e)}get value(){return Pi(this),this._value}set value(e){e=this._shallow?e:J(e),sn(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:cn(e),Ni(this))}}function ln(t){return le(t)?t.value:t}const Gc={get:(t,e,n)=>ln(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Li(t){return et(t)?t:new Proxy(t,Gc)}function Jc(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=Xc(t,n);return e}class Yc{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Xc(t,e,n){const r=t[e];return le(r)?r:new Yc(t,e,n)}class Qc{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Vr(e,()=>{this._dirty||(this._dirty=!0,Ni(this))}),this.__v_isReadonly=r}get value(){const e=J(this);return Pi(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Me(t,e){let n,r;const s=V(t);return s?(n=t,r=Ne):(n=t.get,r=t.set),new Qc(n,r,s||!r)}Promise.resolve();function Zc(t,e,...n){const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:h}=r[f]||te;h?s=n.map(m=>m.trim()):p&&(s=n.map(Fr))}let a,c=r[a=Ur(e)]||r[a=Ur(Fe(e))];!c&&i&&(c=r[a=Ur(dt(e))]),c&&ke(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ke(l,t,6,s)}}function xi(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!V(t)){const c=l=>{const f=xi(l,e,!0);f&&(a=!0,_e(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):_e(o,i),r.set(t,o),o)}function Zr(t,e){return!t||!Dn(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,dt(e))||G(t,e))}let Se=null,Di=null;function Yn(t){const e=Se;return Se=t,Di=t&&t.type.__scopeId||null,e}function el(t,e=Se,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&co(-1);const i=Yn(e),o=t(...s);return Yn(i),r._d&&co(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function es(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:p,data:h,setupState:m,ctx:w,inheritAttrs:N}=t;let S,C;const D=Yn(t);try{if(n.shapeFlag&4){const U=s||r;S=Be(f.call(U,U,p,i,m,h,w)),C=c}else{const U=e;S=Be(U.length>1?U(i,{attrs:c,slots:a,emit:l}):U(i,null)),C=e.props?c:tl(c)}}catch(U){un.length=0,or(U,t,1),S=Oe(tt)}let W=S;if(C&&N!==!1){const U=Object.keys(C),{shapeFlag:Y}=W;U.length&&Y&(1|6)&&(o&&U.some(Mr)&&(C=nl(C,o)),W=$t(W,C))}return n.dirs&&(W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),S=W,Yn(D),S}const tl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Dn(n))&&((e||(e={}))[n]=t[n]);return e},nl=(t,e)=>{const n={};for(const r in t)(!Mr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function rl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ui(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const h=f[p];if(o[h]!==r[h]&&!Zr(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ui(r,o,l):!0:!!o;return!1}function Ui(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Zr(n,i))return!0}return!1}function sl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const il=t=>t.__isSuspense;function ol(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):ru(t)}function Xn(t,e){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[t]=e}}function Le(t,e,n=!1){const r=pe||Se;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r.proxy):e}}function al(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vi(()=>{t.isMounted=!0}),Wi(()=>{t.isUnmounting=!0}),t}const Ce=[Function,Array],cl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ce,onEnter:Ce,onAfterEnter:Ce,onEnterCancelled:Ce,onBeforeLeave:Ce,onLeave:Ce,onAfterLeave:Ce,onLeaveCancelled:Ce,onBeforeAppear:Ce,onAppear:Ce,onAfterAppear:Ce,onAppearCancelled:Ce},setup(t,{slots:e}){const n=ms(),r=al();let s;return()=>{const i=e.default&&Bi(e.default(),!0);if(!i||!i.length)return;const o=J(t),{mode:a}=o,c=i[0];if(r.isLeaving)return ns(c);const l=$i(c);if(!l)return ns(c);const f=ts(l,o,r,n);rs(l,f);const p=n.subTree,h=p&&$i(p);let m=!1;const{getTransitionKey:w}=l.type;if(w){const N=w();s===void 0?s=N:N!==s&&(s=N,m=!0)}if(h&&h.type!==tt&&(!It(l,h)||m)){const N=ts(h,o,r,n);if(rs(h,N),a==="out-in")return r.isLeaving=!0,N.afterLeave=()=>{r.isLeaving=!1,n.update()},ns(c);a==="in-out"&&l.type!==tt&&(N.delayLeave=(S,C,D)=>{const W=Fi(r,h);W[String(h.key)]=h,S._leaveCb=()=>{C(),S._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=D})}return c}}},ll=cl;function Fi(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ts(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:p,onLeave:h,onAfterLeave:m,onLeaveCancelled:w,onBeforeAppear:N,onAppear:S,onAfterAppear:C,onAppearCancelled:D}=e,W=String(t.key),U=Fi(n,t),Y=(O,X)=>{O&&ke(O,r,9,X)},H={mode:i,persisted:o,beforeEnter(O){let X=a;if(!n.isMounted)if(s)X=N||a;else return;O._leaveCb&&O._leaveCb(!0);const q=U[W];q&&It(t,q)&&q.el._leaveCb&&q.el._leaveCb(),Y(X,[O])},enter(O){let X=c,q=l,ce=f;if(!n.isMounted)if(s)X=S||c,q=C||l,ce=D||f;else return;let he=!1;const ge=O._enterCb=be=>{he||(he=!0,be?Y(ce,[O]):Y(q,[O]),H.delayedLeave&&H.delayedLeave(),O._enterCb=void 0)};X?(X(O,ge),X.length<=1&&ge()):ge()},leave(O,X){const q=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return X();Y(p,[O]);let ce=!1;const he=O._leaveCb=ge=>{ce||(ce=!0,X(),ge?Y(w,[O]):Y(m,[O]),O._leaveCb=void 0,U[q]===t&&delete U[q])};U[q]=t,h?(h(O,he),h.length<=1&&he()):he()},clone(O){return ts(O,e,n,r)}};return H}function ns(t){if(Qn(t))return t=$t(t),t.children=null,t}function $i(t){return Qn(t)?t.children?t.children[0]:void 0:t}function rs(t,e){t.shapeFlag&6&&t.component?rs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bi(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===$e?(i.patchFlag&128&&r++,n=n.concat(Bi(i.children,e))):(e||i.type!==tt)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Hi(t){return V(t)?{setup:t,name:t.name}:t}const ss=t=>!!t.type.__asyncLoader,Qn=t=>t.type.__isKeepAlive;function ul(t,e){ji(t,"a",e)}function fl(t,e){ji(t,"da",e)}function ji(t,e,n=pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Zn(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Qn(s.parent.vnode)&&dl(r,e,n,s),s=s.parent}}function dl(t,e,n,r){const s=Zn(e,t,r,!0);is(()=>{Lr(r[e],s)},n)}function Zn(t,e,n=pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Dt(),Bt(n);const a=ke(e,n,t,o);return Et(),mt(),a});return r?s.unshift(i):s.push(i),i}}const Ke=t=>(e,n=pe)=>(!ir||t==="sp")&&Zn(t,e,n),hl=Ke("bm"),Vi=Ke("m"),pl=Ke("bu"),gl=Ke("u"),Wi=Ke("bum"),is=Ke("um"),ml=Ke("sp"),_l=Ke("rtg"),vl=Ke("rtc");function yl(t,e=pe){Zn("ec",t,e)}let os=!0;function bl(t){const e=qi(t),n=t.proxy,r=t.ctx;os=!1,e.beforeCreate&&zi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:p,mounted:h,beforeUpdate:m,updated:w,activated:N,deactivated:S,beforeDestroy:C,beforeUnmount:D,destroyed:W,unmounted:U,render:Y,renderTracked:H,renderTriggered:O,errorCaptured:X,serverPrefetch:q,expose:ce,inheritAttrs:he,components:ge,directives:be,filters:ue}=e;if(l&&Il(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const re in o){const Q=o[re];V(Q)&&(r[re]=Q.bind(n))}if(s){const re=s.call(n,n);de(re)&&(t.data=Ut(re))}if(os=!0,i)for(const re in i){const Q=i[re],Re=V(Q)?Q.bind(n,n):V(Q.get)?Q.get.bind(n,n):Ne,Pt=!V(Q)&&V(Q.set)?Q.set.bind(n):Ne,We=Me({get:Re,set:Pt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>We.value,set:De=>We.value=De})}if(a)for(const re in a)Ki(a[re],r,n,re);if(c){const re=V(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Q=>{Xn(Q,re[Q])})}f&&zi(f,t,"c");function fe(re,Q){B(Q)?Q.forEach(Re=>re(Re.bind(n))):Q&&re(Q.bind(n))}if(fe(hl,p),fe(Vi,h),fe(pl,m),fe(gl,w),fe(ul,N),fe(fl,S),fe(yl,X),fe(vl,H),fe(_l,O),fe(Wi,D),fe(is,U),fe(ml,q),B(ce))if(ce.length){const re=t.exposed||(t.exposed={});ce.forEach(Q=>{Object.defineProperty(re,Q,{get:()=>n[Q],set:Re=>n[Q]=Re})})}else t.exposed||(t.exposed={});Y&&t.render===Ne&&(t.render=Y),he!=null&&(t.inheritAttrs=he),ge&&(t.components=ge),be&&(t.directives=be)}function Il(t,e,n=Ne,r=!1){B(t)&&(t=as(t));for(const s in t){const i=t[s];let o;de(i)?"default"in i?o=Le(i.from||s,i.default,!0):o=Le(i.from||s):o=Le(i),le(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function zi(t,e,n){ke(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ki(t,e,n,r){const s=r.includes(".")?Ro(n,r):()=>n[r];if(me(t)){const i=e[t];V(i)&&gn(s,i)}else if(V(t))gn(s,t.bind(n));else if(de(t))if(B(t))t.forEach(i=>Ki(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&gn(s,i,t)}}function qi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>er(c,l,o,!0)),er(c,e,o)),i.set(e,c),c}function er(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&er(t,i,n,!0),s&&s.forEach(o=>er(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=El[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const El={data:Gi,props:_t,emits:_t,methods:_t,computed:_t,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:_t,directives:_t,watch:Tl,provide:Gi,inject:wl};function Gi(t,e){return e?t?function(){return _e(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function wl(t,e){return _t(as(t),as(e))}function as(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function _t(t,e){return t?_e(_e(Object.create(null),t),e):e}function Tl(t,e){if(!t)return e;if(!e)return t;const n=_e(Object.create(null),t);for(const r in e)n[r]=ye(t[r],e[r]);return n}function Rl(t,e,n,r=!1){const s={},i={};jn(i,nr,1),t.propsDefaults=Object.create(null),Ji(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:zc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Al(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=J(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let h=f[p];const m=e[h];if(c)if(G(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const w=Fe(h);s[w]=cs(c,a,w,m,t,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{Ji(t,e,s,i)&&(l=!0);let f;for(const p in a)(!e||!G(e,p)&&((f=dt(p))===p||!G(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=cs(c,a,p,void 0,t,!0)):delete s[p]);if(i!==a)for(const p in i)(!e||!G(e,p))&&(delete i[p],l=!0)}l&&ze(t,"set","$attrs")}function Ji(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Fn(c))continue;const l=e[c];let f;s&&G(s,f=Fe(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Zr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||te;for(let f=0;f<i.length;f++){const p=i[f];n[p]=cs(s,c,p,l[p],t,!G(l,p))}}return o}function cs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&V(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Bt(s),r=l[n]=c.call(null,e),Et())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===dt(n))&&(r=!0))}return r}function Yi(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const f=p=>{c=!0;const[h,m]=Yi(p,e,!0);_e(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,Mt),Mt;if(B(i))for(let f=0;f<i.length;f++){const p=Fe(i[f]);Xi(p)&&(o[p]=te)}else if(i)for(const f in i){const p=Fe(f);if(Xi(p)){const h=i[f],m=o[p]=B(h)||V(h)?{type:h}:h;if(m){const w=eo(Boolean,m.type),N=eo(String,m.type);m[0]=w>-1,m[1]=N<0||w<N,(w>-1||G(m,"default"))&&a.push(p)}}}const l=[o,a];return r.set(t,l),l}function Xi(t){return t[0]!=="$"}function Qi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Zi(t,e){return Qi(t)===Qi(e)}function eo(t,e){return B(e)?e.findIndex(n=>Zi(n,t)):V(e)&&Zi(e,t)?0:-1}const to=t=>t[0]==="_"||t==="$stable",ls=t=>B(t)?t.map(Be):[Be(t)],Sl=(t,e,n)=>{const r=el((...s)=>ls(e(...s)),n);return r._c=!1,r},no=(t,e,n)=>{const r=t._ctx;for(const s in t){if(to(s))continue;const i=t[s];if(V(i))e[s]=Sl(s,i,r);else if(i!=null){const o=ls(i);e[s]=()=>o}}},ro=(t,e)=>{const n=ls(e);t.slots.default=()=>n},Cl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),jn(e,"_",n)):no(e,t.slots={})}else t.slots={},e&&ro(t,e);jn(t.slots,nr,1)},Ol=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(_e(s,e),!n&&a===1&&delete s._):(i=!e.$stable,no(e,s)),o=e}else e&&(ro(t,e),o={default:1});if(i)for(const a in s)!to(a)&&!(a in o)&&delete s[a]};function Dp(t,e){const n=Se;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=te]=e[i];V(o)&&(o={mounted:o,updated:o}),o.deep&&wt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function vt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Dt(),ke(c,n,8,[t.el,a,t,e]),mt())}}function so(){return{app:null,config:{isNativeTag:fc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kl=0;function Pl(t,e){return function(r,s=null){s!=null&&!de(s)&&(s=null);const i=so(),o=new Set;let a=!1;const c=i.app={_uid:kl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:iu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...f)):V(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,p){if(!a){const h=Oe(r,s);return h.appContext=i,f&&e?e(h,l):t(h,l,p),a=!0,c._container=l,l.__vue_app__=c,_s(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function us(t,e,n,r,s=!1){if(B(t)){t.forEach((h,m)=>us(h,e&&(B(e)?e[m]:e),n,r,s));return}if(ss(r)&&!s)return;const i=r.shapeFlag&4?_s(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===te?a.refs={}:a.refs,p=a.setupState;if(l!=null&&l!==c&&(me(l)?(f[l]=null,G(p,l)&&(p[l]=null)):le(l)&&(l.value=null)),V(c))rt(c,a,12,[o,f]);else{const h=me(c),m=le(c);if(h||m){const w=()=>{if(t.f){const N=h?f[c]:c.value;s?B(N)&&Lr(N,i):B(N)?N.includes(i)||N.push(i):h?f[c]=[i]:(c.value=[i],t.k&&(f[t.k]=c.value))}else h?(f[c]=o,G(p,c)&&(p[c]=o)):le(c)&&(c.value=o,t.k&&(f[t.k]=o))};o?(w.id=-1,Ie(w,n)):w()}}}const Ie=ol;function Nl(t){return Ml(t)}function Ml(t,e){const n=_c();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:p,nextSibling:h,setScopeId:m=Ne,cloneNode:w,insertStaticContent:N}=t,S=(u,d,g,y=null,v=null,E=null,A=!1,I=null,T=!!d.dynamicChildren)=>{if(u===d)return;u&&!It(u,d)&&(y=M(u),Ae(u,v,E,!0),u=null),d.patchFlag===-2&&(T=!1,d.dynamicChildren=null);const{type:b,ref:L,shapeFlag:k}=d;switch(b){case fs:C(u,d,g,y);break;case tt:D(u,d,g,y);break;case ds:u==null&&W(d,g,y,A);break;case $e:be(u,d,g,y,v,E,A,I,T);break;default:k&1?H(u,d,g,y,v,E,A,I,T):k&6?ue(u,d,g,y,v,E,A,I,T):(k&64||k&128)&&b.process(u,d,g,y,v,E,A,I,T,se)}L!=null&&v&&us(L,u&&u.ref,E,d||u,!d)},C=(u,d,g,y)=>{if(u==null)r(d.el=a(d.children),g,y);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},D=(u,d,g,y)=>{u==null?r(d.el=c(d.children||""),g,y):d.el=u.el},W=(u,d,g,y)=>{[u.el,u.anchor]=N(u.children,d,g,y)},U=({el:u,anchor:d},g,y)=>{let v;for(;u&&u!==d;)v=h(u),r(u,g,y),u=v;r(d,g,y)},Y=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=h(u),s(u),u=g;s(d)},H=(u,d,g,y,v,E,A,I,T)=>{A=A||d.type==="svg",u==null?O(d,g,y,v,E,A,I,T):ce(u,d,v,E,A,I,T)},O=(u,d,g,y,v,E,A,I)=>{let T,b;const{type:L,props:k,shapeFlag:x,transition:$,patchFlag:K,dirs:ae}=u;if(u.el&&w!==void 0&&K===-1)T=u.el=w(u.el);else{if(T=u.el=o(u.type,E,k&&k.is,k),x&8?f(T,u.children):x&16&&q(u.children,T,null,y,v,E&&L!=="foreignObject",A,I),ae&&vt(u,null,y,"created"),k){for(const oe in k)oe!=="value"&&!Fn(oe)&&i(T,oe,null,k[oe],E,u.children,y,v,R);"value"in k&&i(T,"value",null,k.value),(b=k.onVnodeBeforeMount)&&He(b,y,u)}X(T,u,u.scopeId,A,y)}ae&&vt(u,null,y,"beforeMount");const ee=(!v||v&&!v.pendingBranch)&&$&&!$.persisted;ee&&$.beforeEnter(T),r(T,d,g),((b=k&&k.onVnodeMounted)||ee||ae)&&Ie(()=>{b&&He(b,y,u),ee&&$.enter(T),ae&&vt(u,null,y,"mounted")},v)},X=(u,d,g,y,v)=>{if(g&&m(u,g),y)for(let E=0;E<y.length;E++)m(u,y[E]);if(v){let E=v.subTree;if(d===E){const A=v.vnode;X(u,A,A.scopeId,A.slotScopeIds,v.parent)}}},q=(u,d,g,y,v,E,A,I,T=0)=>{for(let b=T;b<u.length;b++){const L=u[b]=I?nt(u[b]):Be(u[b]);S(null,L,d,g,y,v,E,A,I)}},ce=(u,d,g,y,v,E,A)=>{const I=d.el=u.el;let{patchFlag:T,dynamicChildren:b,dirs:L}=d;T|=u.patchFlag&16;const k=u.props||te,x=d.props||te;let $;g&&yt(g,!1),($=x.onVnodeBeforeUpdate)&&He($,g,d,u),L&&vt(d,u,g,"beforeUpdate"),g&&yt(g,!0);const K=v&&d.type!=="foreignObject";if(b?he(u.dynamicChildren,b,I,g,y,K,E):A||Re(u,d,I,null,g,y,K,E,!1),T>0){if(T&16)ge(I,d,k,x,g,y,v);else if(T&2&&k.class!==x.class&&i(I,"class",null,x.class,v),T&4&&i(I,"style",k.style,x.style,v),T&8){const ae=d.dynamicProps;for(let ee=0;ee<ae.length;ee++){const oe=ae[ee],Pe=k[oe],Nt=x[oe];(Nt!==Pe||oe==="value")&&i(I,oe,Pe,Nt,v,u.children,g,y,R)}}T&1&&u.children!==d.children&&f(I,d.children)}else!A&&b==null&&ge(I,d,k,x,g,y,v);(($=x.onVnodeUpdated)||L)&&Ie(()=>{$&&He($,g,d,u),L&&vt(d,u,g,"updated")},y)},he=(u,d,g,y,v,E,A)=>{for(let I=0;I<d.length;I++){const T=u[I],b=d[I],L=T.el&&(T.type===$e||!It(T,b)||T.shapeFlag&(6|64))?p(T.el):g;S(T,b,L,null,y,v,E,A,!0)}},ge=(u,d,g,y,v,E,A)=>{if(g!==y){for(const I in y){if(Fn(I))continue;const T=y[I],b=g[I];T!==b&&I!=="value"&&i(u,I,b,T,A,d.children,v,E,R)}if(g!==te)for(const I in g)!Fn(I)&&!(I in y)&&i(u,I,g[I],null,A,d.children,v,E,R);"value"in y&&i(u,"value",g.value,y.value)}},be=(u,d,g,y,v,E,A,I,T)=>{const b=d.el=u?u.el:a(""),L=d.anchor=u?u.anchor:a("");let{patchFlag:k,dynamicChildren:x,slotScopeIds:$}=d;$&&(I=I?I.concat($):$),u==null?(r(b,g,y),r(L,g,y),q(d.children,g,L,v,E,A,I,T)):k>0&&k&64&&x&&u.dynamicChildren?(he(u.dynamicChildren,x,g,v,E,A,I),(d.key!=null||v&&d===v.subTree)&&io(u,d,!0)):Re(u,d,g,L,v,E,A,I,T)},ue=(u,d,g,y,v,E,A,I,T)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,g,y,A,T):kt(d,g,y,v,E,A,T):fe(u,d,T)},kt=(u,d,g,y,v,E,A)=>{const I=u.component=Kl(u,y,v);if(Qn(u)&&(I.ctx.renderer=se),ql(I),I.asyncDep){if(v&&v.registerDep(I,re),!u.el){const T=I.subTree=Oe(tt);D(null,T,d,g)}return}re(I,u,d,g,v,E,A)},fe=(u,d,g)=>{const y=d.component=u.component;if(rl(u,d,g))if(y.asyncDep&&!y.asyncResolved){Q(y,d,g);return}else y.next=d,tu(y.update),y.update();else d.component=u.component,d.el=u.el,y.vnode=d},re=(u,d,g,y,v,E,A)=>{const I=()=>{if(u.isMounted){let{next:L,bu:k,u:x,parent:$,vnode:K}=u,ae=L,ee;yt(u,!1),L?(L.el=K.el,Q(u,L,A)):L=K,k&&Hn(k),(ee=L.props&&L.props.onVnodeBeforeUpdate)&&He(ee,$,L,K),yt(u,!0);const oe=es(u),Pe=u.subTree;u.subTree=oe,S(Pe,oe,p(Pe.el),M(Pe),u,v,E),L.el=oe.el,ae===null&&sl(u,oe.el),x&&Ie(x,v),(ee=L.props&&L.props.onVnodeUpdated)&&Ie(()=>He(ee,$,L,K),v)}else{let L;const{el:k,props:x}=d,{bm:$,m:K,parent:ae}=u,ee=ss(d);if(yt(u,!1),$&&Hn($),!ee&&(L=x&&x.onVnodeBeforeMount)&&He(L,ae,d),yt(u,!0),k&&j){const oe=()=>{u.subTree=es(u),j(k,u.subTree,u,v,null)};ee?d.type.__asyncLoader().then(()=>!u.isUnmounted&&oe()):oe()}else{const oe=u.subTree=es(u);S(null,oe,g,y,u,v,E),d.el=oe.el}if(K&&Ie(K,v),!ee&&(L=x&&x.onVnodeMounted)){const oe=d;Ie(()=>He(L,ae,oe),v)}d.shapeFlag&256&&u.a&&Ie(u.a,v),u.isMounted=!0,d=g=y=null}},T=u.effect=new Vr(I,()=>vo(u.update),u.scope),b=u.update=T.run.bind(T);b.id=u.uid,yt(u,!0),b()},Q=(u,d,g)=>{d.component=u;const y=u.vnode.props;u.vnode=d,u.next=null,Al(u,d.props,y,g),Ol(u,d.children,g),Dt(),Es(void 0,u.update),mt()},Re=(u,d,g,y,v,E,A,I,T=!1)=>{const b=u&&u.children,L=u?u.shapeFlag:0,k=d.children,{patchFlag:x,shapeFlag:$}=d;if(x>0){if(x&128){We(b,k,g,y,v,E,A,I,T);return}else if(x&256){Pt(b,k,g,y,v,E,A,I,T);return}}$&8?(L&16&&R(b,v,E),k!==b&&f(g,k)):L&16?$&16?We(b,k,g,y,v,E,A,I,T):R(b,v,E,!0):(L&8&&f(g,""),$&16&&q(k,g,y,v,E,A,I,T))},Pt=(u,d,g,y,v,E,A,I,T)=>{u=u||Mt,d=d||Mt;const b=u.length,L=d.length,k=Math.min(b,L);let x;for(x=0;x<k;x++){const $=d[x]=T?nt(d[x]):Be(d[x]);S(u[x],$,g,null,v,E,A,I,T)}b>L?R(u,v,E,!0,!1,k):q(d,g,y,v,E,A,I,T,k)},We=(u,d,g,y,v,E,A,I,T)=>{let b=0;const L=d.length;let k=u.length-1,x=L-1;for(;b<=k&&b<=x;){const $=u[b],K=d[b]=T?nt(d[b]):Be(d[b]);if(It($,K))S($,K,g,null,v,E,A,I,T);else break;b++}for(;b<=k&&b<=x;){const $=u[k],K=d[x]=T?nt(d[x]):Be(d[x]);if(It($,K))S($,K,g,null,v,E,A,I,T);else break;k--,x--}if(b>k){if(b<=x){const $=x+1,K=$<L?d[$].el:y;for(;b<=x;)S(null,d[b]=T?nt(d[b]):Be(d[b]),g,K,v,E,A,I,T),b++}}else if(b>x)for(;b<=k;)Ae(u[b],v,E,!0),b++;else{const $=b,K=b,ae=new Map;for(b=K;b<=x;b++){const Ee=d[b]=T?nt(d[b]):Be(d[b]);Ee.key!=null&&ae.set(Ee.key,b)}let ee,oe=0;const Pe=x-K+1;let Nt=!1,ti=0;const rn=new Array(Pe);for(b=0;b<Pe;b++)rn[b]=0;for(b=$;b<=k;b++){const Ee=u[b];if(oe>=Pe){Ae(Ee,v,E,!0);continue}let Ue;if(Ee.key!=null)Ue=ae.get(Ee.key);else for(ee=K;ee<=x;ee++)if(rn[ee-K]===0&&It(Ee,d[ee])){Ue=ee;break}Ue===void 0?Ae(Ee,v,E,!0):(rn[Ue-K]=b+1,Ue>=ti?ti=Ue:Nt=!0,S(Ee,d[Ue],g,null,v,E,A,I,T),oe++)}const ni=Nt?Ll(rn):Mt;for(ee=ni.length-1,b=Pe-1;b>=0;b--){const Ee=K+b,Ue=d[Ee],ri=Ee+1<L?d[Ee+1].el:y;rn[b]===0?S(null,Ue,g,ri,v,E,A,I,T):Nt&&(ee<0||b!==ni[ee]?De(Ue,g,ri,2):ee--)}}},De=(u,d,g,y,v=null)=>{const{el:E,type:A,transition:I,children:T,shapeFlag:b}=u;if(b&6){De(u.component.subTree,d,g,y);return}if(b&128){u.suspense.move(d,g,y);return}if(b&64){A.move(u,d,g,se);return}if(A===$e){r(E,d,g);for(let k=0;k<T.length;k++)De(T[k],d,g,y);r(u.anchor,d,g);return}if(A===ds){U(u,d,g);return}if(y!==2&&b&1&&I)if(y===0)I.beforeEnter(E),r(E,d,g),Ie(()=>I.enter(E),v);else{const{leave:k,delayLeave:x,afterLeave:$}=I,K=()=>r(E,d,g),ae=()=>{k(E,()=>{K(),$&&$()})};x?x(E,K,ae):ae()}else r(E,d,g)},Ae=(u,d,g,y=!1,v=!1)=>{const{type:E,props:A,ref:I,children:T,dynamicChildren:b,shapeFlag:L,patchFlag:k,dirs:x}=u;if(I!=null&&us(I,null,g,u,!0),L&256){d.ctx.deactivate(u);return}const $=L&1&&x,K=!ss(u);let ae;if(K&&(ae=A&&A.onVnodeBeforeUnmount)&&He(ae,d,u),L&6)P(u.component,g,y);else{if(L&128){u.suspense.unmount(g,y);return}$&&vt(u,null,d,"beforeUnmount"),L&64?u.type.remove(u,d,g,v,se,y):b&&(E!==$e||k>0&&k&64)?R(b,d,g,!1,!0):(E===$e&&k&(128|256)||!v&&L&16)&&R(T,d,g),y&&Or(u)}(K&&(ae=A&&A.onVnodeUnmounted)||$)&&Ie(()=>{ae&&He(ae,d,u),$&&vt(u,null,d,"unmounted")},g)},Or=u=>{const{type:d,el:g,anchor:y,transition:v}=u;if(d===$e){_(g,y);return}if(d===ds){Y(u);return}const E=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:I}=v,T=()=>A(g,E);I?I(u.el,E,T):T()}else E()},_=(u,d)=>{let g;for(;u!==d;)g=h(u),s(u),u=g;s(d)},P=(u,d,g)=>{const{bum:y,scope:v,update:E,subTree:A,um:I}=u;y&&Hn(y),v.stop(),E&&(E.active=!1,Ae(A,u,d,g)),I&&Ie(I,d),Ie(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},R=(u,d,g,y=!1,v=!1,E=0)=>{for(let A=E;A<u.length;A++)Ae(u[A],d,g,y,v)},M=u=>u.shapeFlag&6?M(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),Z=(u,d,g)=>{u==null?d._vnode&&Ae(d._vnode,null,null,!0):S(d._vnode||null,u,d,null,null,null,g),Io(),d._vnode=u},se={p:S,um:Ae,m:De,r:Or,mt:kt,mc:q,pc:Re,pbc:he,n:M,o:t};let z,j;return e&&([z,j]=e(se)),{render:Z,hydrate:z,createApp:Pl(Z,z)}}function yt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function io(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=nt(s[i]),a.el=o.el),n||io(o,a))}}function Ll(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const xl=t=>t.__isTeleport,oo="components";function Up(t,e){return Ul(oo,t,!0,e)||t}const Dl=Symbol();function Ul(t,e,n=!0,r=!1){const s=Se||pe;if(s){const i=s.type;if(t===oo){const a=Xl(i);if(a&&(a===e||a===Fe(e)||a===Bn(Fe(e))))return i}const o=ao(s[t]||i[t],e)||ao(s.appContext[t],e);return!o&&r?i:o}}function ao(t,e){return t&&(t[e]||t[Fe(e)]||t[Bn(Fe(e))])}const $e=Symbol(void 0),fs=Symbol(void 0),tt=Symbol(void 0),ds=Symbol(void 0),un=[];let bt=null;function Fp(t=!1){un.push(bt=t?null:[])}function Fl(){un.pop(),bt=un[un.length-1]||null}let tr=1;function co(t){tr+=t}function lo(t){return t.dynamicChildren=tr>0?bt||Mt:null,Fl(),tr>0&&bt&&bt.push(t),t}function $p(t,e,n,r,s,i){return lo(fo(t,e,n,r,s,i,!0))}function Bp(t,e,n,r,s){return lo(Oe(t,e,n,r,s,!0))}function hs(t){return t?t.__v_isVNode===!0:!1}function It(t,e){return t.type===e.type&&t.key===e.key}const nr="__vInternal",uo=({key:t})=>t!=null?t:null,rr=({ref:t,ref_key:e,ref_for:n})=>t!=null?me(t)||le(t)||V(t)?{i:Se,r:t,k:e,f:!!n}:t:null;function fo(t,e=null,n=null,r=0,s=null,i=t===$e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uo(e),ref:e&&rr(e),scopeId:Di,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(ps(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),tr>0&&!o&&bt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&bt.push(c),c}const Oe=$l;function $l(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Dl)&&(t=tt),hs(t)){const a=$t(t,e,!0);return n&&ps(a,n),a}if(Ql(t)&&(t=t.__vccOpts),e){e=Bl(e);let{class:a,style:c}=e;a&&!me(a)&&(e.class=Nr(a)),de(c)&&(ki(c)&&!B(c)&&(c=_e({},c)),e.style=Pr(c))}const o=me(t)?1:il(t)?128:xl(t)?64:de(t)?4:V(t)?2:0;return fo(t,e,n,r,s,o,i,!0)}function Bl(t){return t?ki(t)||nr in t?_e({},t):t:null}function $t(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?jl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&uo(a),ref:e&&e.ref?n&&s?B(s)?s.concat(rr(e)):[s,rr(e)]:rr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$t(t.ssContent),ssFallback:t.ssFallback&&$t(t.ssFallback),el:t.el,anchor:t.anchor}}function Hl(t=" ",e=0){return Oe(fs,null,t,e)}function Be(t){return t==null||typeof t=="boolean"?Oe(tt):B(t)?Oe($e,null,t.slice()):typeof t=="object"?nt(t):Oe(fs,null,String(t))}function nt(t){return t.el===null||t.memo?t:$t(t)}function ps(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),ps(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(nr in e)?e._ctx=Se:s===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Se},n=32):(e=String(e),r&64?(n=16,e=[Hl(e)]):n=8);t.children=e,t.shapeFlag|=n}function jl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Nr([e.class,r.class]));else if(s==="style")e.style=Pr([e.style,r.style]);else if(Dn(s)){const i=e[s],o=r[s];i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function He(t,e,n,r=null){ke(t,e,7,[n,r])}function Hp(t,e,n,r){let s;const i=n&&n[r];if(B(t)||me(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(de(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const gs=t=>t?ho(t)?_s(t)||t.proxy:gs(t.parent):null,sr=_e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gs(t.parent),$root:t=>gs(t.root),$emit:t=>t.emit,$options:t=>qi(t),$forceUpdate:t=>()=>vo(t.update),$nextTick:t=>Is.bind(t.proxy),$watch:t=>su.bind(t)}),Vl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==te&&G(r,e))return o[e]=1,r[e];if(s!==te&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==te&&G(n,e))return o[e]=4,n[e];os&&(o[e]=0)}}const f=sr[e];let p,h;if(f)return e==="$attrs"&&we(t,"get",e),f(t);if((p=a.__cssModules)&&(p=p[e]))return p;if(n!==te&&G(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,G(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==te&&G(s,e))s[e]=n;else if(r!==te&&G(r,e))r[e]=n;else if(G(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==te&&G(t,o)||e!==te&&G(e,o)||(a=i[0])&&G(a,o)||G(r,o)||G(sr,o)||G(s.config.globalProperties,o)}},Wl=so();let zl=0;function Kl(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Wl,i={uid:zl++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new fi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yi(r,s),emitsOptions:xi(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Zc.bind(null,i),t.ce&&t.ce(i),i}let pe=null;const ms=()=>pe||Se,Bt=t=>{pe=t,t.scope.on()},Et=()=>{pe&&pe.scope.off(),pe=null};function ho(t){return t.vnode.shapeFlag&4}let ir=!1;function ql(t,e=!1){ir=e;const{props:n,children:r}=t.vnode,s=ho(t);Rl(t,n,s,e),Cl(t,r);const i=s?Gl(t,e):void 0;return ir=!1,i}function Gl(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ft(new Proxy(t.ctx,Vl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Yl(t):null;Bt(t),Dt();const i=rt(r,t,0,[t.props,s]);if(mt(),Et(),ai(i)){if(i.then(Et,Et),e)return i.then(o=>{po(t,o,e)}).catch(o=>{or(o,t,0)});t.asyncDep=i}else po(t,i,e)}else mo(t,e)}function po(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=Li(e)),mo(t,n)}let go;function mo(t,e,n){const r=t.type;if(!t.render){if(!e&&go&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=_e(_e({isCustomElement:i,delimiters:a},o),c);r.render=go(s,l)}}t.render=r.render||Ne}Bt(t),Dt(),bl(t),mt(),Et()}function Jl(t){return new Proxy(t.attrs,{get(e,n){return we(t,"get","$attrs"),e[n]}})}function Yl(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Jl(t))},slots:t.slots,emit:t.emit,expose:e}}function _s(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Li(Ft(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sr)return sr[n](t)}}))}function Xl(t){return V(t)&&t.displayName||t.name}function Ql(t){return V(t)&&"__vccOpts"in t}function rt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){or(i,e,n)}return s}function ke(t,e,n,r){if(V(t)){const i=rt(t,e,n,r);return i&&ai(i)&&i.catch(o=>{or(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ke(t[i],e,n,r));return s}function or(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){rt(c,null,10,[t,o,a]);return}}Zl(t,n,s,r)}function Zl(t,e,n,r=!0){console.error(t)}let ar=!1,vs=!1;const Te=[];let qe=0;const fn=[];let dn=null,Ht=0;const hn=[];let st=null,jt=0;const _o=Promise.resolve();let ys=null,bs=null;function Is(t){const e=ys||_o;return t?e.then(this?t.bind(this):t):e}function eu(t){let e=qe+1,n=Te.length;for(;e<n;){const r=e+n>>>1;pn(Te[r])<t?e=r+1:n=r}return e}function vo(t){(!Te.length||!Te.includes(t,ar&&t.allowRecurse?qe+1:qe))&&t!==bs&&(t.id==null?Te.push(t):Te.splice(eu(t.id),0,t),yo())}function yo(){!ar&&!vs&&(vs=!0,ys=_o.then(Eo))}function tu(t){const e=Te.indexOf(t);e>qe&&Te.splice(e,1)}function bo(t,e,n,r){B(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),yo()}function nu(t){bo(t,dn,fn,Ht)}function ru(t){bo(t,st,hn,jt)}function Es(t,e=null){if(fn.length){for(bs=e,dn=[...new Set(fn)],fn.length=0,Ht=0;Ht<dn.length;Ht++)dn[Ht]();dn=null,Ht=0,bs=null,Es(t,e)}}function Io(t){if(hn.length){const e=[...new Set(hn)];if(hn.length=0,st){st.push(...e);return}for(st=e,st.sort((n,r)=>pn(n)-pn(r)),jt=0;jt<st.length;jt++)st[jt]();st=null,jt=0}}const pn=t=>t.id==null?1/0:t.id;function Eo(t){vs=!1,ar=!0,Es(t),Te.sort((n,r)=>pn(n)-pn(r));const e=Ne;try{for(qe=0;qe<Te.length;qe++){const n=Te[qe];n&&n.active!==!1&&rt(n,null,14)}}finally{qe=0,Te.length=0,Io(),ar=!1,ys=null,(Te.length||fn.length||hn.length)&&Eo(t)}}const wo={};function gn(t,e,n){return To(t,e,n)}function To(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=te){const a=pe;let c,l=!1,f=!1;if(le(t)?(c=()=>t.value,l=!!t._shallow):et(t)?(c=()=>t,r=!0):B(t)?(f=!0,l=t.some(et),c=()=>t.map(C=>{if(le(C))return C.value;if(et(C))return wt(C);if(V(C))return rt(C,a,2)})):V(t)?e?c=()=>rt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return p&&p(),ke(t,a,3,[h])}:c=Ne,e&&r){const C=c;c=()=>wt(C())}let p,h=C=>{p=S.onStop=()=>{rt(C,a,4)}};if(ir)return h=Ne,e?n&&ke(e,a,3,[c(),f?[]:void 0,h]):c(),Ne;let m=f?[]:wo;const w=()=>{if(!!S.active)if(e){const C=S.run();(r||l||(f?C.some((D,W)=>sn(D,m[W])):sn(C,m)))&&(p&&p(),ke(e,a,3,[C,m===wo?void 0:m,h]),m=C)}else S.run()};w.allowRecurse=!!e;let N;s==="sync"?N=w:s==="post"?N=()=>Ie(w,a&&a.suspense):N=()=>{!a||a.isMounted?nu(w):w()};const S=new Vr(c,N);return e?n?w():m=S.run():s==="post"?Ie(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&Lr(a.scope.effects,S)}}function su(t,e,n){const r=this.proxy,s=me(t)?t.includes(".")?Ro(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=pe;Bt(this);const a=To(s,i.bind(r),n);return o?Bt(o):Et(),a}function Ro(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function wt(t,e){if(!de(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),le(t))wt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)wt(t[n],e);else if(oi(t)||Lt(t))t.forEach(n=>{wt(n,e)});else if(li(t))for(const n in t)wt(t[n],e);return t}function Ao(t,e,n){const r=arguments.length;return r===2?de(e)&&!B(e)?hs(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hs(n)&&(n=[n]),Oe(t,e,n))}const iu="3.2.26",ou="http://www.w3.org/2000/svg",Vt=typeof document!="undefined"?document:null,So=new Map,au={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Vt.createElementNS(ou,t):Vt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const s=n?n.previousSibling:e.lastChild;let i=So.get(t);if(!i){const o=Vt.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}So.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function cu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function lu(t,e,n){const r=t.style,s=me(n);if(n&&!s){for(const i in n)ws(r,i,n[i]);if(e&&!me(e))for(const i in e)n[i]==null&&ws(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Co=/\s*!important$/;function ws(t,e,n){if(B(n))n.forEach(r=>ws(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=uu(t,e);Co.test(n)?t.setProperty(dt(r),n.replace(Co,""),"important"):t[r]=n}}const Oo=["Webkit","Moz","ms"],Ts={};function uu(t,e){const n=Ts[e];if(n)return n;let r=Fe(e);if(r!=="filter"&&r in t)return Ts[e]=r;r=Bn(r);for(let s=0;s<Oo.length;s++){const i=Oo[s]+r;if(i in t)return Ts[e]=i}return e}const ko="http://www.w3.org/1999/xlink";function fu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ko,e.slice(6,e.length)):t.setAttributeNS(ko,e,n);else{const i=ac(e);n==null||i&&!si(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function du(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=si(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let cr=Date.now,Po=!1;if(typeof window!="undefined"){cr()>document.createEvent("Event").timeStamp&&(cr=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Po=!!(t&&Number(t[1])<=53)}let Rs=0;const hu=Promise.resolve(),pu=()=>{Rs=0},gu=()=>Rs||(hu.then(pu),Rs=cr());function Wt(t,e,n,r){t.addEventListener(e,n,r)}function mu(t,e,n,r){t.removeEventListener(e,n,r)}function _u(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=vu(e);if(r){const l=i[e]=yu(r,s);Wt(t,a,l,c)}else o&&(mu(t,a,o,c),i[e]=void 0)}}const No=/(?:Once|Passive|Capture)$/;function vu(t){let e;if(No.test(t)){e={};let n;for(;n=t.match(No);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[dt(t.slice(2)),e]}function yu(t,e){const n=r=>{const s=r.timeStamp||cr();(Po||s>=n.attached-1)&&ke(bu(r,n.value),e,5,[r])};return n.value=t,n.attached=gu(),n}function bu(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r(s))}else return e}const Mo=/^on[a-z]/,Iu=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?cu(t,r,s):e==="style"?lu(t,n,r):Dn(e)?Mr(e)||_u(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Eu(t,e,r,s))?du(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fu(t,e,r,s))};function Eu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Mo.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mo.test(e)&&me(n)?!1:e in t}const wu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ll.props;const Lo=t=>{const e=t.props["onUpdate:modelValue"];return B(e)?n=>Hn(e,n):e};function Tu(t){t.target.composing=!0}function xo(t){const e=t.target;e.composing&&(e.composing=!1,Ru(e,"input"))}function Ru(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const jp={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Lo(s);const i=r||s.props&&s.props.type==="number";Wt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Fr(a)),t._assign(a)}),n&&Wt(t,"change",()=>{t.value=t.value.trim()}),e||(Wt(t,"compositionstart",Tu),Wt(t,"compositionend",xo),Wt(t,"change",xo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Lo(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Fr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Au=["ctrl","shift","alt","meta"],Su={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Au.some(n=>t[`${n}Key`]&&!e.includes(n))},Vp=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Su[e[s]];if(i&&i(n,e))return}return t(n,...r)},Cu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Wp=(t,e)=>n=>{if(!("key"in n))return;const r=dt(n.key);if(e.some(s=>s===r||Cu[s]===r))return t(n)},Ou=_e({patchProp:Iu},au);let Do;function ku(){return Do||(Do=Nl(Ou))}const zp=(...t)=>{const e=ku().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pu(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Pu(t){return me(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Uo=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",zt=t=>Uo?Symbol(t):"_vr_"+t,Nu=zt("rvlm"),Fo=zt("rvd"),lr=zt("r"),As=zt("rl"),Ss=zt("rvl"),Kt=typeof window!="undefined";function Mu(t){return t.__esModule||Uo&&t[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Cs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const mn=()=>{},Lu=/\/$/,xu=t=>t.replace(Lu,"");function Os(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=$u(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Du(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $o(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Uu(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&qt(e.matched[r],n.matched[s])&&Bo(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bo(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fu(t[n],e[n]))return!1;return!0}function Fu(t,e){return Array.isArray(t)?Ho(t,e):Array.isArray(e)?Ho(e,t):t===e}function Ho(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $u(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var _n;(function(t){t.pop="pop",t.push="push"})(_n||(_n={}));var vn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vn||(vn={}));function Bu(t){if(!t)if(Kt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xu(t)}const Hu=/^[^#]+#/;function ju(t,e){return t.replace(Hu,"#")+e}function Vu(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ur=()=>({left:window.pageXOffset,top:window.pageYOffset});function Wu(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Vu(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jo(t,e){return(history.state?history.state.position-e:-1)+t}const ks=new Map;function zu(t,e){ks.set(t,e)}function Ku(t){const e=ks.get(t);return ks.delete(t),e}let qu=()=>location.protocol+"//"+location.host;function Vo(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),$o(c,"")}return $o(n,t)+r+s}function Gu(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=Vo(t,location),w=n.value,N=e.value;let S=0;if(h){if(n.value=m,e.value=h,o&&o===w){o=null;return}S=N?h.position-N.position:0}else r(m);s.forEach(C=>{C(n.value,w,{delta:S,type:_n.pop,direction:S?S>0?vn.forward:vn.back:vn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const w=s.indexOf(h);w>-1&&s.splice(w,1)};return i.push(m),m}function f(){const{history:h}=window;!h.state||h.replaceState(ne({},h.state,{scroll:ur()}),"")}function p(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:p}}function Wo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ur():null}}function Ju(t){const{history:e,location:n}=window,r={value:Vo(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const p=t.indexOf("#"),h=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:qu()+t+c;try{e[f?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[f?"replace":"assign"](h)}}function o(c,l){const f=ne({},e.state,Wo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=ne({},s.value,e.state,{forward:c,scroll:ur()});i(f.current,f,!0);const p=ne({},Wo(r.value,c,null),{position:f.position+1},l);i(c,p,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Kp(t){t=Bu(t);const e=Ju(t),n=Gu(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ne({location:"",base:t,go:r,createHref:ju.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Yu(t){return typeof t=="string"||t&&typeof t=="object"}function zo(t){return typeof t=="string"||typeof t=="symbol"}const it={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ko=zt("nf");var qo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(qo||(qo={}));function Gt(t,e){return ne(new Error,{type:t,[Ko]:!0},e)}function Tt(t,e){return t instanceof Error&&Ko in t&&(e==null||!!(t.type&e))}const Go="[^/]+?",Xu={sensitive:!1,strict:!1,start:!0,end:!0},Qu=/[.+*?^${}()[\]/\\]/g;function Zu(t,e){const n=ne({},Xu,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let p=0;p<l.length;p++){const h=l[p];let m=40+(n.sensitive?.25:0);if(h.type===0)p||(s+="/"),s+=h.value.replace(Qu,"\\$&"),m+=40;else if(h.type===1){const{value:w,repeatable:N,optional:S,regexp:C}=h;i.push({name:w,repeatable:N,optional:S});const D=C||Go;if(D!==Go){m+=10;try{new RegExp(`(${D})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${w}" (${D}): `+U.message)}}let W=N?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;p||(W=S&&l.length<2?`(?:/${W})`:"/"+W),S&&(W+="?"),s+=W,m+=20,S&&(m+=-8),N&&(m+=-20),D===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),p={};if(!f)return null;for(let h=1;h<f.length;h++){const m=f[h]||"",w=i[h-1];p[w.name]=m&&w.repeatable?m.split("/"):m}return p}function c(l){let f="",p=!1;for(const h of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const m of h)if(m.type===0)f+=m.value;else if(m.type===1){const{value:w,repeatable:N,optional:S}=m,C=w in l?l[w]:"";if(Array.isArray(C)&&!N)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(C)?C.join("/"):C;if(!D)if(S)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${w}"`);f+=D}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function ef(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function tf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ef(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const nf={type:0,value:""},rf=/[a-zA-Z0-9_]/;function sf(t){if(!t)return[[]];if(t==="/")return[[nf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function p(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&p(),o()):c===":"?(p(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:rf.test(c)?h():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),p(),o(),s}function of(t,e,n){const r=Zu(sf(t.path),n),s=ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function af(t,e){const n=[],r=new Map;e=Yo({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,h){const m=!h,w=lf(f);w.aliasOf=h&&h.record;const N=Yo(e,f),S=[w];if("alias"in f){const W=typeof f.alias=="string"?[f.alias]:f.alias;for(const U of W)S.push(ne({},w,{components:h?h.record.components:w.components,path:U,aliasOf:h?h.record:w}))}let C,D;for(const W of S){const{path:U}=W;if(p&&U[0]!=="/"){const Y=p.record.path,H=Y[Y.length-1]==="/"?"":"/";W.path=p.record.path+(U&&H+U)}if(C=of(W,p,N),h?h.alias.push(C):(D=D||C,D!==C&&D.alias.push(C),m&&f.name&&!Jo(C)&&o(f.name)),"children"in w){const Y=w.children;for(let H=0;H<Y.length;H++)i(Y[H],C,h&&h.children[H])}h=h||C,c(C)}return D?()=>{o(D)}:mn}function o(f){if(zo(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let p=0;for(;p<n.length&&tf(f,n[p])>=0;)p++;n.splice(p,0,f),f.record.name&&!Jo(f)&&r.set(f.record.name,f)}function l(f,p){let h,m={},w,N;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw Gt(1,{location:f});N=h.record.name,m=ne(cf(p.params,h.keys.filter(D=>!D.optional).map(D=>D.name)),f.params),w=h.stringify(m)}else if("path"in f)w=f.path,h=n.find(D=>D.re.test(w)),h&&(m=h.parse(w),N=h.record.name);else{if(h=p.name?r.get(p.name):n.find(D=>D.re.test(p.path)),!h)throw Gt(1,{location:f,currentLocation:p});N=h.record.name,m=ne({},p.params,f.params),w=h.stringify(m)}const S=[];let C=h;for(;C;)S.unshift(C.record),C=C.parent;return{name:N,path:w,params:m,matched:S,meta:ff(S)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function cf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function uf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Jo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ff(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function Yo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Xo=/#/g,df=/&/g,hf=/\//g,pf=/=/g,gf=/\?/g,Qo=/\+/g,mf=/%5B/g,_f=/%5D/g,Zo=/%5E/g,vf=/%60/g,ea=/%7B/g,yf=/%7C/g,ta=/%7D/g,bf=/%20/g;function Ps(t){return encodeURI(""+t).replace(yf,"|").replace(mf,"[").replace(_f,"]")}function If(t){return Ps(t).replace(ea,"{").replace(ta,"}").replace(Zo,"^")}function Ns(t){return Ps(t).replace(Qo,"%2B").replace(bf,"+").replace(Xo,"%23").replace(df,"%26").replace(vf,"`").replace(ea,"{").replace(ta,"}").replace(Zo,"^")}function Ef(t){return Ns(t).replace(pf,"%3D")}function wf(t){return Ps(t).replace(Xo,"%23").replace(gf,"%3F")}function Tf(t){return t==null?"":wf(t).replace(hf,"%2F")}function fr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Rf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Qo," "),o=i.indexOf("="),a=fr(o<0?i:i.slice(0,o)),c=o<0?null:fr(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function na(t){let e="";for(let n in t){const r=t[n];if(n=Ef(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ns(i)):[r&&Ns(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Af(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function yn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ot(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=p=>{p===!1?a(Gt(4,{from:n,to:e})):p instanceof Error?a(p):Yu(p)?a(Gt(2,{from:e,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(p=>a(p))})}function Ms(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Sf(a)){const l=(a.__vccOpts||a)[e];l&&s.push(ot(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Mu(l)?l.default:l;i.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&ot(h,n,r,i,o)()}))}}return s}function Sf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ra(t){const e=Le(lr),n=Le(As),r=Me(()=>e.resolve(ln(t.to))),s=Me(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],p=n.matched;if(!f||!p.length)return-1;const h=p.findIndex(qt.bind(null,f));if(h>-1)return h;const m=sa(c[l-2]);return l>1&&sa(f)===m&&p[p.length-1].path!==m?p.findIndex(qt.bind(null,c[l-2])):h}),i=Me(()=>s.value>-1&&Pf(n.params,r.value.params)),o=Me(()=>s.value>-1&&s.value===n.matched.length-1&&Bo(n.params,r.value.params));function a(c={}){return kf(c)?e[ln(t.replace)?"replace":"push"](ln(t.to)).catch(mn):Promise.resolve()}return{route:r,href:Me(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Cf=Hi({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ra,setup(t,{slots:e}){const n=Ut(ra(t)),{options:r}=Le(lr),s=Me(()=>({[ia(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ia(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ao("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Of=Cf;function kf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Pf(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function sa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ia=(t,e,n)=>t!=null?t:e!=null?e:n,Nf=Hi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Le(Ss),s=Me(()=>t.route||r.value),i=Le(Fo,0),o=Me(()=>s.value.matched[i]);Xn(Fo,i+1),Xn(Nu,o),Xn(Ss,s);const a=Qr();return gn(()=>[a.value,o.value,t.name],([c,l,f],[p,h,m])=>{l&&(l.instances[f]=c,h&&h!==l&&c&&c===p&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!qt(l,h)||!p)&&(l.enterCallbacks[f]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,f=l&&l.components[t.name],p=t.name;if(!f)return oa(n.default,{Component:f,route:c});const h=l.props[t.name],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,N=Ao(f,ne({},m,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(l.instances[p]=null)},ref:a}));return oa(n.default,{Component:N,route:c})||N}}});function oa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Mf=Nf;function qp(t){const e=af(t.routes,t),n=t.parseQuery||Rf,r=t.stringifyQuery||na,s=t.history,i=yn(),o=yn(),a=yn(),c=Kc(it);let l=it;Kt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Cs.bind(null,_=>""+_),p=Cs.bind(null,Tf),h=Cs.bind(null,fr);function m(_,P){let R,M;return zo(_)?(R=e.getRecordMatcher(_),M=P):M=_,e.addRoute(M,R)}function w(_){const P=e.getRecordMatcher(_);P&&e.removeRoute(P)}function N(){return e.getRoutes().map(_=>_.record)}function S(_){return!!e.getRecordMatcher(_)}function C(_,P){if(P=ne({},P||c.value),typeof _=="string"){const j=Os(n,_,P.path),u=e.resolve({path:j.path},P),d=s.createHref(j.fullPath);return ne(j,u,{params:h(u.params),hash:fr(j.hash),redirectedFrom:void 0,href:d})}let R;if("path"in _)R=ne({},_,{path:Os(n,_.path,P.path).path});else{const j=ne({},_.params);for(const u in j)j[u]==null&&delete j[u];R=ne({},_,{params:p(_.params)}),P.params=p(P.params)}const M=e.resolve(R,P),Z=_.hash||"";M.params=f(h(M.params));const se=Du(r,ne({},_,{hash:If(Z),path:M.path})),z=s.createHref(se);return ne({fullPath:se,hash:Z,query:r===na?Af(_.query):_.query||{}},M,{redirectedFrom:void 0,href:z})}function D(_){return typeof _=="string"?Os(n,_,c.value.path):ne({},_)}function W(_,P){if(l!==_)return Gt(8,{from:P,to:_})}function U(_){return O(_)}function Y(_){return U(ne(D(_),{replace:!0}))}function H(_){const P=_.matched[_.matched.length-1];if(P&&P.redirect){const{redirect:R}=P;let M=typeof R=="function"?R(_):R;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=D(M):{path:M},M.params={}),ne({query:_.query,hash:_.hash,params:_.params},M)}}function O(_,P){const R=l=C(_),M=c.value,Z=_.state,se=_.force,z=_.replace===!0,j=H(R);if(j)return O(ne(D(j),{state:Z,force:se,replace:z}),P||R);const u=R;u.redirectedFrom=P;let d;return!se&&Uu(r,M,R)&&(d=Gt(16,{to:u,from:M}),Pt(M,M,!0,!1)),(d?Promise.resolve(d):q(u,M)).catch(g=>Tt(g)?g:re(g,u,M)).then(g=>{if(g){if(Tt(g,2))return O(ne(D(g.to),{state:Z,force:se,replace:z}),P||u)}else g=he(u,M,!0,z,Z);return ce(u,M,g),g})}function X(_,P){const R=W(_,P);return R?Promise.reject(R):Promise.resolve()}function q(_,P){let R;const[M,Z,se]=Lf(_,P);R=Ms(M.reverse(),"beforeRouteLeave",_,P);for(const j of M)j.leaveGuards.forEach(u=>{R.push(ot(u,_,P))});const z=X.bind(null,_,P);return R.push(z),Jt(R).then(()=>{R=[];for(const j of i.list())R.push(ot(j,_,P));return R.push(z),Jt(R)}).then(()=>{R=Ms(Z,"beforeRouteUpdate",_,P);for(const j of Z)j.updateGuards.forEach(u=>{R.push(ot(u,_,P))});return R.push(z),Jt(R)}).then(()=>{R=[];for(const j of _.matched)if(j.beforeEnter&&!P.matched.includes(j))if(Array.isArray(j.beforeEnter))for(const u of j.beforeEnter)R.push(ot(u,_,P));else R.push(ot(j.beforeEnter,_,P));return R.push(z),Jt(R)}).then(()=>(_.matched.forEach(j=>j.enterCallbacks={}),R=Ms(se,"beforeRouteEnter",_,P),R.push(z),Jt(R))).then(()=>{R=[];for(const j of o.list())R.push(ot(j,_,P));return R.push(z),Jt(R)}).catch(j=>Tt(j,8)?j:Promise.reject(j))}function ce(_,P,R){for(const M of a.list())M(_,P,R)}function he(_,P,R,M,Z){const se=W(_,P);if(se)return se;const z=P===it,j=Kt?history.state:{};R&&(M||z?s.replace(_.fullPath,ne({scroll:z&&j&&j.scroll},Z)):s.push(_.fullPath,Z)),c.value=_,Pt(_,P,R,z),Re()}let ge;function be(){ge=s.listen((_,P,R)=>{const M=C(_),Z=H(M);if(Z){O(ne(Z,{replace:!0}),M).catch(mn);return}l=M;const se=c.value;Kt&&zu(jo(se.fullPath,R.delta),ur()),q(M,se).catch(z=>Tt(z,4|8)?z:Tt(z,2)?(O(z.to,M).then(j=>{Tt(j,4|16)&&!R.delta&&R.type===_n.pop&&s.go(-1,!1)}).catch(mn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),re(z,M,se))).then(z=>{z=z||he(M,se,!1),z&&(R.delta?s.go(-R.delta,!1):R.type===_n.pop&&Tt(z,4|16)&&s.go(-1,!1)),ce(M,se,z)}).catch(mn)})}let ue=yn(),kt=yn(),fe;function re(_,P,R){Re(_);const M=kt.list();return M.length?M.forEach(Z=>Z(_,P,R)):console.error(_),Promise.reject(_)}function Q(){return fe&&c.value!==it?Promise.resolve():new Promise((_,P)=>{ue.add([_,P])})}function Re(_){fe||(fe=!0,be(),ue.list().forEach(([P,R])=>_?R(_):P()),ue.reset())}function Pt(_,P,R,M){const{scrollBehavior:Z}=t;if(!Kt||!Z)return Promise.resolve();const se=!R&&Ku(jo(_.fullPath,0))||(M||!R)&&history.state&&history.state.scroll||null;return Is().then(()=>Z(_,P,se)).then(z=>z&&Wu(z)).catch(z=>re(z,_,P))}const We=_=>s.go(_);let De;const Ae=new Set;return{currentRoute:c,addRoute:m,removeRoute:w,hasRoute:S,getRoutes:N,resolve:C,options:t,push:U,replace:Y,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:kt.add,isReady:Q,install(_){const P=this;_.component("RouterLink",Of),_.component("RouterView",Mf),_.config.globalProperties.$router=P,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>ln(c)}),Kt&&!De&&c.value===it&&(De=!0,U(s.location).catch(Z=>{}));const R={};for(const Z in it)R[Z]=Me(()=>c.value[Z]);_.provide(lr,P),_.provide(As,Ut(R)),_.provide(Ss,c);const M=_.unmount;Ae.add(_),_.unmount=function(){Ae.delete(_),Ae.size<1&&(l=it,ge&&ge(),c.value=it,De=!1,fe=!1),M()}}}}function Jt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Lf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>qt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>qt(l,c))||s.push(c))}return[n,r,s]}function Gp(){return Le(lr)}function Jp(){return Le(As)}/**
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
 */const xf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Df=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[f],n[p],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Df(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||p==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),p!==64){const w=l<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ff=function(t){try{return Uf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class $f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ve(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function Hf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vf(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
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
 */const Wf="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Wf,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zf(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Yt(s,a,r)}}function zf(t,e){return t.replace(Kf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Kf=/\{\$([^}]+)}/g;function qf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(aa(i)&&aa(o)){if(!dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function aa(t){return t!==null&&typeof t=="object"}/**
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
 */function In(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function En(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function wn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Gf(t,e){const n=new Jf(t,e);return n.subscribe.bind(n)}class Jf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ls),s.error===void 0&&(s.error=Ls),s.complete===void 0&&(s.complete=Ls);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ls(){}/**
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
 */function Rt(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class Xf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $f;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zf(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qf(t){return t===At?void 0:t}function Zf(t){return t.instantiationMode==="EAGER"}/**
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
 */class ed{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const td={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},nd=ie.INFO,rd={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},sd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ca{constructor(e){this.name=e,this._logLevel=nd,this._logHandler=sd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?td[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}/**
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
 */class id{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(od(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function od(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xs="@firebase/app",la="0.7.13";/**
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
 */const Ds=new ca("@firebase/app"),ad="@firebase/app-compat",cd="@firebase/analytics-compat",ld="@firebase/analytics",ud="@firebase/app-check-compat",fd="@firebase/app-check",dd="@firebase/auth",hd="@firebase/auth-compat",pd="@firebase/database",gd="@firebase/database-compat",md="@firebase/functions",_d="@firebase/functions-compat",vd="@firebase/installations",yd="@firebase/installations-compat",bd="@firebase/messaging",Id="@firebase/messaging-compat",Ed="@firebase/performance",wd="@firebase/performance-compat",Td="@firebase/remote-config",Rd="@firebase/remote-config-compat",Ad="@firebase/storage",Sd="@firebase/storage-compat",Cd="@firebase/firestore",Od="@firebase/firestore-compat",kd="firebase",Pd="9.6.3";/**
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
 */const ua="[DEFAULT]",Nd={[xs]:"fire-core",[ad]:"fire-core-compat",[ld]:"fire-analytics",[cd]:"fire-analytics-compat",[fd]:"fire-app-check",[ud]:"fire-app-check-compat",[dd]:"fire-auth",[hd]:"fire-auth-compat",[pd]:"fire-rtdb",[gd]:"fire-rtdb-compat",[md]:"fire-fn",[_d]:"fire-fn-compat",[vd]:"fire-iid",[yd]:"fire-iid-compat",[bd]:"fire-fcm",[Id]:"fire-fcm-compat",[Ed]:"fire-perf",[wd]:"fire-perf-compat",[Td]:"fire-rc",[Rd]:"fire-rc-compat",[Ad]:"fire-gcs",[Sd]:"fire-gcs-compat",[Cd]:"fire-fst",[Od]:"fire-fst-compat","fire-js":"fire-js",[kd]:"fire-js-all"};/**
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
 */const hr=new Map,Us=new Map;function Md(t,e){try{t.container.addComponent(e)}catch(n){Ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pr(t){const e=t.name;if(Us.has(e))return Ds.debug(`There were multiple attempts to register component ${e}.`),!1;Us.set(e,t);for(const n of hr.values())Md(n,t);return!0}function fa(t,e){return t.container.getProvider(e)}/**
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
 */const Ld={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},gr=new bn("app","Firebase",Ld);/**
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
 */class xd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const mr=Pd;function Yp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ua,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw gr.create("bad-app-name",{appName:String(r)});const s=hr.get(r);if(s){if(dr(t,s.options)&&dr(n,s.config))return s;throw gr.create("duplicate-app",{appName:r})}const i=new ed(r);for(const a of Us.values())i.addComponent(a);const o=new xd(t,n,i);return hr.set(r,o),o}function Dd(t=ua){const e=hr.get(t);if(!e)throw gr.create("no-app",{appName:t});return e}function Xt(t,e,n){var r;let s=(r=Nd[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ds.warn(a.join(" "));return}pr(new Tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function Ud(t){pr(new Tn("platform-logger",e=>new id(e),"PRIVATE")),Xt(xs,la,t),Xt(xs,la,"esm2017"),Xt("fire-js","")}Ud("");/*! *****************************************************************************
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
***************************************************************************** */function Fs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function da(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fd=da,ha=new bn("auth","Firebase",da());/**
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
 */const pa=new ca("@firebase/auth");function _r(t,...e){pa.logLevel<=ie.ERROR&&pa.error(`Auth (${mr}): ${t}`,...e)}/**
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
 */function xe(t,...e){throw $s(t,...e)}function je(t,...e){return $s(t,...e)}function $d(t,e,n){const r=Object.assign(Object.assign({},Fd()),{[e]:n});return new bn("auth","Firebase",r).create(e,{appName:t.name})}function $s(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ha.create(t,...e)}function F(t,e,...n){if(!t)throw $s(e,...n)}function Ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _r(e),new Error(e)}function Je(t,e){t||Ge(e)}/**
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
 */const ga=new Map;function Ye(t){Je(t instanceof Function,"Expected a class definition");let e=ga.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ga.set(t,e),e)}/**
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
 */function Bd(t,e){const n=fa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(dr(i,e!=null?e:{}))return s;xe(s,"already-initialized")}return n.initialize({options:e})}function Hd(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ye);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Bs(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jd(){return ma()==="http:"||ma()==="https:"}function ma(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Vd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jd()||Hf()||"connection"in navigator)?navigator.onLine:!0}function Wd(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Rn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=Bf()||jf()}get(){return Vd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hs(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _a{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Kd=new Rn(3e4,6e4);function An(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,r,s={}){return va(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=In(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),_a.fetch()(ya(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function va(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zd),e);try{const s=new qd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw js(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw js(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw js(t,"email-already-in-use",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw $d(t,f,l);xe(t,f)}}catch(s){if(s instanceof Yt)throw s;xe(t,"network-request-failed")}}async function Cn(t,e,n,r,s={}){const i=await Sn(t,e,n,r,s);return"mfaPendingCredential"in i&&xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ya(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Hs(t.config,s):`${t.config.apiScheme}://${s}`}class qd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"timeout")),Kd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function js(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=je(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Gd(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function Jd(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function On(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yd(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),s=Ws(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(Vs(s.auth_time)),issuedAtTime:On(Vs(s.iat)),expirationTime:On(Vs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vs(t){return Number(t)*1e3}function Ws(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _r("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ff(n);return s?JSON.parse(s):(_r("Failed to decode base64 JWT payload"),null)}catch(s){return _r("Caught error parsing JWT payload as JSON",s),null}}function Xd(t){const e=Ws(t);return F(e,"internal-error"),F(typeof e.exp!="undefined","internal-error"),F(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function kn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&Qd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Zd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ba{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await kn(t,Jd(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?nh(i.providerUserInfo):[],a=th(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),f=c?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ba(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function eh(t){const e=Rt(t);await vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function th(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function nh(t){return t.map(e=>{var{providerId:n}=e,r=Fs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function rh(t,e){const n=await va(t,{},async()=>{const r=In({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ya(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_a.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken!="undefined","internal-error"),F(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Xd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await rh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Pn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pn,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
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
 */function at(t,e){F(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class St{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Fs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Zd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new ba(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await kn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Yd(this,e)}reload(){return eh(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kn(this,Gd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:W,emailVerified:U,isAnonymous:Y,providerData:H,stsTokenManager:O}=n;F(W&&O,e,"internal-error");const X=Pn.fromJSON(this.name,O);F(typeof W=="string",e,"internal-error"),at(p,e.name),at(h,e.name),F(typeof U=="boolean",e,"internal-error"),F(typeof Y=="boolean",e,"internal-error"),at(m,e.name),at(w,e.name),at(N,e.name),at(S,e.name),at(C,e.name),at(D,e.name);const q=new St({uid:W,auth:e,email:h,emailVerified:U,displayName:p,isAnonymous:Y,photoURL:w,phoneNumber:m,tenantId:N,stsTokenManager:X,createdAt:C,lastLoginAt:D});return H&&Array.isArray(H)&&(q.providerData=H.map(ce=>Object.assign({},ce))),S&&(q._redirectEventId=S),q}static async _fromIdTokenResponse(e,n,r=!1){const s=new Pn;s.updateFromServerResponse(n);const i=new St({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await vr(i),i}}/**
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
 */class Ia{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ia.type="NONE";const Ea=Ia;/**
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
 */function yr(t,e,n){return`firebase:${t}:${e}:${n}`}class Qt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yr(this.userKey,s.apiKey,i),this.fullPersistenceKey=yr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?St._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qt(Ye(Ea),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ye(Ea);const o=yr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const p=St._fromJSON(e,f);l!==i&&(a=p),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Qt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Qt(i,e,r))}}/**
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
 */function wa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Aa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ta(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ca(e))return"Blackberry";if(Oa(e))return"Webos";if(zs(e))return"Safari";if((e.includes("chrome/")||Ra(e))&&!e.includes("edge/"))return"Chrome";if(Sa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ta(t=ve()){return/firefox\//i.test(t)}function zs(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ra(t=ve()){return/crios\//i.test(t)}function Aa(t=ve()){return/iemobile/i.test(t)}function Sa(t=ve()){return/android/i.test(t)}function Ca(t=ve()){return/blackberry/i.test(t)}function Oa(t=ve()){return/webos/i.test(t)}function br(t=ve()){return/iphone|ipad|ipod/i.test(t)}function sh(t=ve()){var e;return br(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function ih(){return Vf()&&document.documentMode===10}function ka(t=ve()){return br(t)||Sa(t)||Oa(t)||Ca(t)||/windows phone/i.test(t)||Aa(t)}function oh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Pa(t,e=[]){let n;switch(t){case"Browser":n=wa(ve());break;case"Worker":n=`${wa(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mr}/${r}`}/**
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
 */class ah{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Na(this),this.idTokenSubscription=new Na(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ha,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ye(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Qt.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Rt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ye(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Qt.create(this,[Ye(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ir(t){return Rt(t)}class Na{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gf(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Ks{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ge("not implemented")}_getIdTokenResponse(e){return Ge("not implemented")}_linkToIdToken(e,n){return Ge("not implemented")}_getReauthenticationResolver(e){return Ge("not implemented")}}async function ch(t,e){return Sn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function lh(t,e){return Cn(t,"POST","/v1/accounts:signInWithPassword",An(t,e))}/**
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
 */async function uh(t,e){return Cn(t,"POST","/v1/accounts:signInWithEmailLink",An(t,e))}async function fh(t,e){return Cn(t,"POST","/v1/accounts:signInWithEmailLink",An(t,e))}/**
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
 */class Nn extends Ks{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Nn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Nn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return lh(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uh(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ch(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fh(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zt(t,e){return Cn(t,"POST","/v1/accounts:signInWithIdp",An(t,e))}/**
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
 */const dh="http://localhost";class Ct extends Ks{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Fs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ct(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zt(e,n)}buildRequest(){const e={requestUri:dh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=In(n)}return e}}/**
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
 */function hh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ph(t){const e=En(wn(t)).link,n=e?En(wn(e)).deep_link_id:null,r=En(wn(t)).deep_link_id;return(r?En(wn(r)).link:null)||r||n||e||t}class qs{constructor(e){var n,r,s,i,o,a;const c=En(wn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=hh((s=c.mode)!==null&&s!==void 0?s:null);F(l&&f&&p,"argument-error"),this.apiKey=l,this.operation=p,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ph(e);try{return new qs(n)}catch{return null}}}/**
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
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,n){return Nn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qs.parseLink(n);return F(r,"argument-error"),Nn._fromEmailAndCode(e,r.code,r.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ma{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mn extends Ma{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ct extends Mn{constructor(){super("facebook.com")}static credential(e){return Ct._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
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
 */class lt extends Mn{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Ct._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
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
 */class ut extends Mn{constructor(){super("github.com")}static credential(e){return Ct._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
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
 */class ft extends Mn{constructor(){super("twitter.com")}static credential(e,n){return Ct._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
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
 */async function gh(t,e){return Cn(t,"POST","/v1/accounts:signUp",An(t,e))}/**
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
 */class Ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await St._fromIdTokenResponse(e,r,s),o=La(r);return new Ot({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=La(r);return new Ot({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function La(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Er extends Yt{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,Er.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Er(e,n,r,s)}}function xa(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Er._fromErrorAndOperation(t,i,e,r):i})}async function mh(t,e,n=!1){const r=await kn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ot._forOperation(t,"link",r)}/**
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
 */async function _h(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await kn(t,xa(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Ws(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),Ot._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),i}}/**
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
 */async function Da(t,e,n=!1){const r="signIn",s=await xa(t,r,e),i=await Ot._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function vh(t,e){return Da(Ir(t),e)}async function Xp(t,e,n){const r=Ir(t),s=await gh(r,{returnSecureToken:!0,email:e,password:n}),i=await Ot._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Qp(t,e,n){return vh(Rt(t),en.credential(e,n))}function Zp(t,e,n,r){return Rt(t).onAuthStateChanged(e,n,r)}function eg(t){return Rt(t).signOut()}const wr="__sak";/**
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
 */class Ua{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wr,"1"),this.storage.removeItem(wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function yh(){const t=ve();return zs(t)||br(t)}const bh=1e3,Ih=10;class Fa extends Ua{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yh()&&oh(),this.fallbackToPolling=ka(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ih()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ih):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fa.type="LOCAL";const Eh=Fa;/**
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
 */class $a extends Ua{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$a.type="SESSION";const Ba=$a;/**
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
 */function wh(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Tr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await wh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tr.receivers=[];/**
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
 */function Gs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Th{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Gs("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const h=p;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ve(){return window}function Rh(t){Ve().location.href=t}/**
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
 */function Ha(){return typeof Ve().WorkerGlobalScope!="undefined"&&typeof Ve().importScripts=="function"}async function Ah(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ch(){return Ha()?self:null}/**
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
 */const ja="firebaseLocalStorageDb",Oh=1,Rr="firebaseLocalStorage",Va="fbase_key";class Ln{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ar(t,e){return t.transaction([Rr],e?"readwrite":"readonly").objectStore(Rr)}function kh(){const t=indexedDB.deleteDatabase(ja);return new Ln(t).toPromise()}function Js(){const t=indexedDB.open(ja,Oh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rr,{keyPath:Va})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rr)?e(r):(r.close(),await kh(),e(await Js()))})})}async function Wa(t,e,n){const r=Ar(t,!0).put({[Va]:e,value:n});return new Ln(r).toPromise()}async function Ph(t,e){const n=Ar(t,!1).get(e),r=await new Ln(n).toPromise();return r===void 0?null:r.value}function za(t,e){const n=Ar(t,!0).delete(e);return new Ln(n).toPromise()}const Nh=800,Mh=3;class Ka{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Js(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ha()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tr._getInstance(Ch()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ah(),!this.activeServiceWorker)return;this.sender=new Th(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Js();return await Wa(e,wr,"1"),await za(e,wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wa(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ph(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>za(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ar(s,!1).getAll();return new Ln(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ka.type="LOCAL";const Lh=Ka;/**
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
 */function xh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Dh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",xh().appendChild(r)})}function Uh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Rn(3e4,6e4);/**
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
 */function Fh(t,e){return e?Ye(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ys extends Ks{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Zt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $h(t){return Da(t.auth,new Ys(t),t.bypassAuthState)}function Bh(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),_h(n,new Ys(t),t.bypassAuthState)}async function Hh(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),mh(n,new Ys(t),t.bypassAuthState)}/**
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
 */class qa{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $h;case"linkViaPopup":case"linkViaRedirect":return Hh;case"reauthViaPopup":case"reauthViaRedirect":return Bh;default:xe(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jh=new Rn(2e3,1e4);class tn extends qa{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=Gs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,jh.get())};e()}}tn.currentPopupAction=null;/**
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
 */const Vh="pendingRedirect",Xs=new Map;class Wh extends qa{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Xs.get(this.auth._key());if(!e){try{const r=await zh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xs.set(this.auth._key(),e)}return this.bypassAuthState||Xs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zh(t,e){const n=qh(e),r=Kh(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Kh(t){return Ye(t._redirectPersistence)}function qh(t){return yr(Vh,t.config.apiKey,t.name)}async function Gh(t,e,n=!1){const r=Ir(t),s=Fh(r,e),o=await new Wh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Jh=10*60*1e3;class Yh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ja(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ga(e))}saveEventToCache(e){this.cachedEventUids.add(Ga(e)),this.lastProcessedEventTime=Date.now()}}function Ga(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ja({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ja(t);default:return!1}}/**
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
 */async function Qh(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
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
 */const Zh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ep=/^https?/;async function tp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qh(t);for(const n of e)try{if(np(n))return}catch{}xe(t,"unauthorized-domain")}function np(t){const e=Bs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ep.test(n))return!1;if(Zh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rp=new Rn(3e4,6e4);function Ya(){const t=Ve().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sp(t){return new Promise((e,n)=>{var r,s,i;function o(){Ya(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ya(),n(je(t,"network-request-failed"))},timeout:rp.get()})}if((s=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=Ve().gapi)===null||i===void 0?void 0:i.load)o();else{const a=Uh("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(je(t,"network-request-failed"))},Dh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Sr=null,e})}let Sr=null;function ip(t){return Sr=Sr||sp(t),Sr}/**
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
 */const op=new Rn(5e3,15e3),ap="__/auth/iframe",cp="emulator/auth/iframe",lp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},up=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fp(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hs(e,cp):`https://${t.config.authDomain}/${ap}`,r={apiKey:e.apiKey,appName:t.name,v:mr},s=up.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${In(r).slice(1)}`}async function dp(t){const e=await ip(t),n=Ve().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:fp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),a=Ve().setTimeout(()=>{i(o)},op.get());function c(){Ve().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const hp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pp=500,gp=600,mp="_blank",_p="http://localhost";class Xa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vp(t,e,n,r=pp,s=gp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},hp),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ve().toLowerCase();n&&(a=Ra(l)?mp:n),Ta(l)&&(e=e||_p,c.scrollbars="yes");const f=Object.entries(c).reduce((h,[m,w])=>`${h}${m}=${w},`,"");if(sh(l)&&a!=="_self")return yp(e||"",a),new Xa(null);const p=window.open(e||"",a,f);F(p,t,"popup-blocked");try{p.focus()}catch{}return new Xa(p)}function yp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bp="__/auth/handler",Ip="emulator/auth/handler";function Qa(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mr,eventId:s};if(e instanceof Ma){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Mn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Ep(t)}?${In(a).slice(1)}`}function Ep({config:t}){return t.emulator?Hs(t,Ip):`https://${t.authDomain}/${bp}`}/**
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
 */const Qs="webStorageSupport";class wp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ba,this._completeRedirectFn=Gh}async _openPopup(e,n,r,s){var i;Je((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Qa(e,n,r,Bs(),s);return vp(e,o,Gs())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Rh(Qa(e,n,r,Bs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Je(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dp(e),r=new Yh(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qs,{type:Qs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qs];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ka()||zs()||br()}}const Tp=wp;var Za="@firebase/auth",ec="0.19.5";/**
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
 */class Rp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ap(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sp(t){pr(new Tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{F(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),F(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pa(t)},c=new ah(o,a);return Hd(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pr(new Tn("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(r=>new Rp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Za,ec,Ap(t)),Xt(Za,ec,"esm2017")}/**
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
 */function tg(t=Dd()){const e=fa(t,"auth");return e.isInitialized()?e.getImmediate():Bd(t,{popupRedirectResolver:Tp,persistence:[Lh,Eh,Ba]})}Sp("Browser");var Cp="firebase",Op="9.6.3";/**
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
 */Xt(Cp,Op,"app");var kp=!1;/*!
  * pinia v2.0.9
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */let tc;const Cr=t=>tc=t,nc=Symbol();function Zs(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xn||(xn={}));function ng(){const t=di(!0),e=t.run(()=>Qr({}));let n=[],r=[];const s=Ft({install(i){Cr(s),s._a=i,i.provide(nc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!kp?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const rc=()=>{};function sc(t,e,n,r=rc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ms()&&is(s),s}function nn(t,...e){t.forEach(n=>{n(...e)})}function ei(t,e){for(const n in e){const r=e[n],s=t[n];Zs(s)&&Zs(r)&&!le(r)&&!et(r)?t[n]=ei(s,r):t[n]=r}return t}const Pp=Symbol();function Np(t){return!Zs(t)||!t.hasOwnProperty(Pp)}const{assign:Xe}=Object;function Mp(t){return!!(le(t)&&t.effect)}function Lp(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const f=Jc(n.state.value[t]);return Xe(f,i,Object.keys(o||{}).reduce((p,h)=>(p[h]=Ft(Me(()=>{Cr(n);const m=n._s.get(t);return o[h].call(m,m)})),p),{}))}return c=ic(t,l,e,n),c.$reset=function(){const p=s?s():{};this.$patch(h=>{Xe(h,p)})},c}function ic(t,e,n={},r,s){let i;const o=n.state,a=Xe({actions:{}},n),c={deep:!0};let l,f,p=Ft([]),h=Ft([]),m;const w=r.state.value[t];!o&&!w&&(r.state.value[t]={}),Qr({});function N(H){let O;l=f=!1,typeof H=="function"?(H(r.state.value[t]),O={type:xn.patchFunction,storeId:t,events:m}):(ei(r.state.value[t],H),O={type:xn.patchObject,payload:H,storeId:t,events:m}),Is().then(()=>{l=!0}),f=!0,nn(p,O,r.state.value[t])}const S=rc;function C(){i.stop(),p=[],h=[],r._s.delete(t)}function D(H,O){return function(){Cr(r);const X=Array.from(arguments),q=[],ce=[];function he(ue){q.push(ue)}function ge(ue){ce.push(ue)}nn(h,{args:X,name:H,store:U,after:he,onError:ge});let be;try{be=O.apply(this&&this.$id===t?this:U,X)}catch(ue){throw nn(ce,ue),ue}return be instanceof Promise?be.then(ue=>(nn(q,ue),ue)).catch(ue=>(nn(ce,ue),Promise.reject(ue))):(nn(q,be),be)}}const W={_p:r,$id:t,$onAction:sc.bind(null,h),$patch:N,$reset:S,$subscribe(H,O={}){const X=sc(p,H,O.detached,()=>q()),q=i.run(()=>gn(()=>r.state.value[t],ce=>{(O.flush==="sync"?f:l)&&H({storeId:t,type:xn.direct,events:m},ce)},Xe({},c,O)));return X},$dispose:C},U=Ut(Xe({},W));r._s.set(t,U);const Y=r._e.run(()=>(i=di(),i.run(()=>e())));for(const H in Y){const O=Y[H];if(le(O)&&!Mp(O)||et(O))o||(w&&Np(O)&&(le(O)?O.value=w[H]:ei(O,w[H])),r.state.value[t][H]=O);else if(typeof O=="function"){const X=D(H,O);Y[H]=X,a.actions[H]=O}}return Xe(U,Y),Xe(J(U),Y),Object.defineProperty(U,"$state",{get:()=>r.state.value[t],set:H=>{N(O=>{Xe(O,H)})}}),r._p.forEach(H=>{Xe(U,i.run(()=>H({store:U,app:r._a,pinia:r,options:a})))}),w&&o&&n.hydrate&&n.hydrate(U.$state,w),l=!0,f=!0,U}function rg(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=ms();return a=a||l&&Le(nc),a&&Cr(a),a=tc,a._s.has(r)||(i?ic(r,e,s,a):Lp(r,s,a)),a._s.get(r)}return o.$id=r,o}export{Hl as A,zp as B,qp as C,Kp as D,ng as E,$e as F,Jp as a,Zp as b,Fp as c,Bp as d,rg as e,$p as f,tg as g,fo as h,Yp as i,ln as j,Qr as k,Xp as l,eg as m,Nr as n,hl as o,Wp as p,Hp as q,Up as r,Qp as s,xp as t,Gp as u,jp as v,Dp as w,Oe as x,el as y,Vp as z};
