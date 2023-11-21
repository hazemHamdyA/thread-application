(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Vp(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ze={},Co=[],Yn=()=>{},o1=()=>!1,a1=/^on[^a-z]/,Fh=t=>a1.test(t),Mp=t=>t.startsWith("onUpdate:"),Rt=Object.assign,Lp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},c1=Object.prototype.hasOwnProperty,Fe=(t,e)=>c1.call(t,e),fe=Array.isArray,ko=t=>Bh(t)==="[object Map]",Ob=t=>Bh(t)==="[object Set]",Ie=t=>typeof t=="function",bt=t=>typeof t=="string",Uh=t=>typeof t=="symbol",Xe=t=>t!==null&&typeof t=="object",Nb=t=>(Xe(t)||Ie(t))&&Ie(t.then)&&Ie(t.catch),Db=Object.prototype.toString,Bh=t=>Db.call(t),u1=t=>Bh(t).slice(8,-1),Vb=t=>Bh(t)==="[object Object]",Fp=t=>bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pl=Vp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$h=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},l1=/-(\w)/g,Ir=$h(t=>t.replace(l1,(e,n)=>n?n.toUpperCase():"")),h1=/\B([A-Z])/g,la=$h(t=>t.replace(h1,"-$1").toLowerCase()),jh=$h(t=>t.charAt(0).toUpperCase()+t.slice(1)),df=$h(t=>t?`on${jh(t)}`:""),ks=(t,e)=>!Object.is(t,e),Cl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Wl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},rm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},d1=t=>{const e=bt(t)?Number(t):NaN;return isNaN(e)?t:e};let Ty;const im=()=>Ty||(Ty=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Up(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=bt(r)?g1(r):Up(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(bt(t)||Xe(t))return t}const f1=/;(?![^(]*\))/g,m1=/:([^]+)/,p1=/\/\*[^]*?\*\//g;function g1(t){const e={};return t.replace(p1,"").split(f1).forEach(n=>{if(n){const r=n.split(m1);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pc(t){let e="";if(bt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=Pc(t[n]);r&&(e+=r+" ")}else if(Xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",y1=Vp(_1);function Mb(t){return!!t||t===""}const Bp=t=>bt(t)?t:t==null?"":fe(t)||Xe(t)&&(t.toString===Db||!Ie(t.toString))?JSON.stringify(t,Lb,2):String(t),Lb=(t,e)=>e&&e.__v_isRef?Lb(t,e.value):ko(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Ob(e)?{[`Set(${e.size})`]:[...e.values()]}:Xe(e)&&!fe(e)&&!Vb(e)?String(e):e;let Pn;class Fb{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pn,!e&&Pn&&(this.index=(Pn.scopes||(Pn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pn;try{return Pn=this,e()}finally{Pn=n}}}on(){Pn=this}off(){Pn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ub(t){return new Fb(t)}function v1(t,e=Pn){e&&e.active&&e.effects.push(t)}function Bb(){return Pn}function w1(t){Pn&&Pn.cleanups.push(t)}const $p=t=>{const e=new Set(t);return e.w=0,e.n=0,e},$b=t=>(t.w&Ri)>0,jb=t=>(t.n&Ri)>0,I1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ri},b1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];$b(i)&&!jb(i)?i.delete(t):e[n++]=i,i.w&=~Ri,i.n&=~Ri}e.length=n}},Hl=new WeakMap;let Qa=0,Ri=1;const sm=30;let Hn;const Es=Symbol(""),om=Symbol("");class jp{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,v1(this,r)}run(){if(!this.active)return this.fn();let e=Hn,n=Ii;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Hn,Hn=this,Ii=!0,Ri=1<<++Qa,Qa<=sm?I1(this):Ay(this),this.fn()}finally{Qa<=sm&&b1(this),Ri=1<<--Qa,Hn=this.parent,Ii=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Hn===this?this.deferStop=!0:this.active&&(Ay(this),this.onStop&&this.onStop(),this.active=!1)}}function Ay(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ii=!0;const qb=[];function ha(){qb.push(Ii),Ii=!1}function da(){const t=qb.pop();Ii=t===void 0?!0:t}function Rn(t,e,n){if(Ii&&Hn){let r=Hl.get(t);r||Hl.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=$p()),zb(i)}}function zb(t,e){let n=!1;Qa<=sm?jb(t)||(t.n|=Ri,n=!$b(t)):n=!t.has(Hn),n&&(t.add(Hn),Hn.deps.push(t))}function Mr(t,e,n,r,i,s){const o=Hl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&fe(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||!Uh(l)&&l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":fe(t)?Fp(n)&&a.push(o.get("length")):(a.push(o.get(Es)),ko(t)&&a.push(o.get(om)));break;case"delete":fe(t)||(a.push(o.get(Es)),ko(t)&&a.push(o.get(om)));break;case"set":ko(t)&&a.push(o.get(Es));break}if(a.length===1)a[0]&&am(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);am($p(c))}}function am(t,e){const n=fe(t)?t:[...t];for(const r of n)r.computed&&Ry(r);for(const r of n)r.computed||Ry(r)}function Ry(t,e){(t!==Hn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function E1(t,e){var n;return(n=Hl.get(t))==null?void 0:n.get(e)}const T1=Vp("__proto__,__v_isRef,__isVue"),Wb=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Uh)),Sy=A1();function A1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Le(this);for(let s=0,o=this.length;s<o;s++)Rn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Le)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ha();const r=Le(this)[e].apply(this,n);return da(),r}}),t}function R1(t){const e=Le(this);return Rn(e,"has",t),e.hasOwnProperty(t)}class Hb{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const i=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw"&&r===(i?s?U1:Yb:s?Qb:Kb).get(e))return e;const o=fe(e);if(!i){if(o&&Fe(Sy,n))return Reflect.get(Sy,n,r);if(n==="hasOwnProperty")return R1}const a=Reflect.get(e,n,r);return(Uh(n)?Wb.has(n):T1(n))||(i||Rn(e,"get",n),s)?a:Qe(a)?o&&Fp(n)?a:a.value:Xe(a)?i?Wp(a):br(a):a}}class Gb extends Hb{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(qo(s)&&Qe(s)&&!Qe(r))return!1;if(!this._shallow&&(!Gl(r)&&!qo(r)&&(s=Le(s),r=Le(r)),!fe(e)&&Qe(s)&&!Qe(r)))return s.value=r,!0;const o=fe(e)&&Fp(n)?Number(n)<e.length:Fe(e,n),a=Reflect.set(e,n,r,i);return e===Le(i)&&(o?ks(r,s)&&Mr(e,"set",n,r):Mr(e,"add",n,r)),a}deleteProperty(e,n){const r=Fe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Mr(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Uh(n)||!Wb.has(n))&&Rn(e,"has",n),r}ownKeys(e){return Rn(e,"iterate",fe(e)?"length":Es),Reflect.ownKeys(e)}}class S1 extends Hb{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const P1=new Gb,C1=new S1,k1=new Gb(!0),qp=t=>t,qh=t=>Reflect.getPrototypeOf(t);function Xu(t,e,n=!1,r=!1){t=t.__v_raw;const i=Le(t),s=Le(e);n||(ks(e,s)&&Rn(i,"get",e),Rn(i,"get",s));const{has:o}=qh(i),a=r?qp:n?Gp:Cc;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Ju(t,e=!1){const n=this.__v_raw,r=Le(n),i=Le(t);return e||(ks(t,i)&&Rn(r,"has",t),Rn(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Zu(t,e=!1){return t=t.__v_raw,!e&&Rn(Le(t),"iterate",Es),Reflect.get(t,"size",t)}function Py(t){t=Le(t);const e=Le(this);return qh(e).has.call(e,t)||(e.add(t),Mr(e,"add",t,t)),this}function Cy(t,e){e=Le(e);const n=Le(this),{has:r,get:i}=qh(n);let s=r.call(n,t);s||(t=Le(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?ks(e,o)&&Mr(n,"set",t,e):Mr(n,"add",t,e),this}function ky(t){const e=Le(this),{has:n,get:r}=qh(e);let i=n.call(e,t);i||(t=Le(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Mr(e,"delete",t,void 0),s}function xy(){const t=Le(this),e=t.size!==0,n=t.clear();return e&&Mr(t,"clear",void 0,void 0),n}function el(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Le(o),c=e?qp:t?Gp:Cc;return!t&&Rn(a,"iterate",Es),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function tl(t,e,n){return function(...r){const i=this.__v_raw,s=Le(i),o=ko(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),l=n?qp:e?Gp:Cc;return!e&&Rn(s,"iterate",c?om:Es),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function ri(t){return function(...e){return t==="delete"?!1:this}}function x1(){const t={get(s){return Xu(this,s)},get size(){return Zu(this)},has:Ju,add:Py,set:Cy,delete:ky,clear:xy,forEach:el(!1,!1)},e={get(s){return Xu(this,s,!1,!0)},get size(){return Zu(this)},has:Ju,add:Py,set:Cy,delete:ky,clear:xy,forEach:el(!1,!0)},n={get(s){return Xu(this,s,!0)},get size(){return Zu(this,!0)},has(s){return Ju.call(this,s,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:el(!0,!1)},r={get(s){return Xu(this,s,!0,!0)},get size(){return Zu(this,!0)},has(s){return Ju.call(this,s,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:el(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=tl(s,!1,!1),n[s]=tl(s,!0,!1),e[s]=tl(s,!1,!0),r[s]=tl(s,!0,!0)}),[t,n,e,r]}const[O1,N1,D1,V1]=x1();function zp(t,e){const n=e?t?V1:D1:t?N1:O1;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Fe(n,i)&&i in r?n:r,i,s)}const M1={get:zp(!1,!1)},L1={get:zp(!1,!0)},F1={get:zp(!0,!1)},Kb=new WeakMap,Qb=new WeakMap,Yb=new WeakMap,U1=new WeakMap;function B1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $1(t){return t.__v_skip||!Object.isExtensible(t)?0:B1(u1(t))}function br(t){return qo(t)?t:Hp(t,!1,P1,M1,Kb)}function Xb(t){return Hp(t,!1,k1,L1,Qb)}function Wp(t){return Hp(t,!0,C1,F1,Yb)}function Hp(t,e,n,r,i){if(!Xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=$1(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function bi(t){return qo(t)?bi(t.__v_raw):!!(t&&t.__v_isReactive)}function qo(t){return!!(t&&t.__v_isReadonly)}function Gl(t){return!!(t&&t.__v_isShallow)}function Jb(t){return bi(t)||qo(t)}function Le(t){const e=t&&t.__v_raw;return e?Le(e):t}function zh(t){return Wl(t,"__v_skip",!0),t}const Cc=t=>Xe(t)?br(t):t,Gp=t=>Xe(t)?Wp(t):t;function Zb(t){Ii&&Hn&&(t=Le(t),zb(t.dep||(t.dep=$p())))}function eE(t,e){t=Le(t);const n=t.dep;n&&am(n)}function Qe(t){return!!(t&&t.__v_isRef===!0)}function Pt(t){return nE(t,!1)}function tE(t){return nE(t,!0)}function nE(t,e){return Qe(t)?t:new j1(t,e)}class j1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Le(e),this._value=n?e:Cc(e)}get value(){return Zb(this),this._value}set value(e){const n=this.__v_isShallow||Gl(e)||qo(e);e=n?e:Le(e),ks(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Cc(e),eE(this))}}function Te(t){return Qe(t)?t.value:t}function ut(t){return Ie(t)?t():Te(t)}const q1={get:(t,e,n)=>Te(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Qe(i)&&!Qe(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function rE(t){return bi(t)?t:new Proxy(t,q1)}function z1(t){const e=fe(t)?new Array(t.length):{};for(const n in t)e[n]=iE(t,n);return e}class W1{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return E1(Le(this._object),this._key)}}class H1{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function pi(t,e,n){return Qe(t)?t:Ie(t)?new H1(t):Xe(t)&&arguments.length>1?iE(t,e,n):Pt(t)}function iE(t,e,n){const r=t[e];return Qe(r)?r:new W1(t,e,n)}class G1{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new jp(e,()=>{this._dirty||(this._dirty=!0,eE(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Le(this);return Zb(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function K1(t,e,n=!1){let r,i;const s=Ie(t);return s?(r=t,i=Yn):(r=t.get,i=t.set),new G1(r,i,s||!i,n)}function Ei(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Wh(s,e,n)}return i}function Bn(t,e,n,r){if(Ie(t)){const s=Ei(t,e,n,r);return s&&Nb(s)&&s.catch(o=>{Wh(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Bn(t[s],e,n,r));return i}function Wh(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Ei(c,null,10,[t,o,a]);return}}Q1(t,n,i,r)}function Q1(t,e,n,r=!0){console.error(t)}let kc=!1,cm=!1;const Jt=[];let sr=0;const xo=[];let Pr=null,as=0;const sE=Promise.resolve();let Kp=null;function rr(t){const e=Kp||sE;return t?e.then(this?t.bind(this):t):e}function Y1(t){let e=sr+1,n=Jt.length;for(;e<n;){const r=e+n>>>1,i=Jt[r],s=xc(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function Qp(t){(!Jt.length||!Jt.includes(t,kc&&t.allowRecurse?sr+1:sr))&&(t.id==null?Jt.push(t):Jt.splice(Y1(t.id),0,t),oE())}function oE(){!kc&&!cm&&(cm=!0,Kp=sE.then(cE))}function X1(t){const e=Jt.indexOf(t);e>sr&&Jt.splice(e,1)}function J1(t){fe(t)?xo.push(...t):(!Pr||!Pr.includes(t,t.allowRecurse?as+1:as))&&xo.push(t),oE()}function Oy(t,e=kc?sr+1:0){for(;e<Jt.length;e++){const n=Jt[e];n&&n.pre&&(Jt.splice(e,1),e--,n())}}function aE(t){if(xo.length){const e=[...new Set(xo)];if(xo.length=0,Pr){Pr.push(...e);return}for(Pr=e,Pr.sort((n,r)=>xc(n)-xc(r)),as=0;as<Pr.length;as++)Pr[as]();Pr=null,as=0}}const xc=t=>t.id==null?1/0:t.id,Z1=(t,e)=>{const n=xc(t)-xc(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function cE(t){cm=!1,kc=!0,Jt.sort(Z1);const e=Yn;try{for(sr=0;sr<Jt.length;sr++){const n=Jt[sr];n&&n.active!==!1&&Ei(n,null,14)}}finally{sr=0,Jt.length=0,aE(),kc=!1,Kp=null,(Jt.length||xo.length)&&cE()}}function eC(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ze;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Ze;d&&(i=n.map(f=>bt(f)?f.trim():f)),h&&(i=n.map(rm))}let a,c=r[a=df(e)]||r[a=df(Ir(e))];!c&&s&&(c=r[a=df(la(e))]),c&&Bn(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Bn(u,t,6,i)}}function uE(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Ie(t)){const c=u=>{const l=uE(u,e,!0);l&&(a=!0,Rt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Xe(t)&&r.set(t,null),null):(fe(s)?s.forEach(c=>o[c]=null):Rt(o,s),Xe(t)&&r.set(t,o),o)}function Hh(t,e){return!t||!Fh(e)?!1:(e=e.slice(2).replace(/Once$/,""),Fe(t,e[0].toLowerCase()+e.slice(1))||Fe(t,la(e))||Fe(t,e))}let Vt=null,Gh=null;function Kl(t){const e=Vt;return Vt=t,Gh=t&&t.type.__scopeId||null,e}function lE(t){Gh=t}function hE(){Gh=null}const dE=t=>Cr;function Cr(t,e=Vt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&zy(-1);const s=Kl(e);let o;try{o=t(...i)}finally{Kl(s),r._d&&zy(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ff(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:f,ctx:m,inheritAttrs:_}=t;let p,v;const w=Kl(t);try{if(n.shapeFlag&4){const T=i||r;p=ir(l.call(T,T,h,s,f,d,m)),v=c}else{const T=e;p=ir(T.length>1?T(s,{attrs:c,slots:a,emit:u}):T(s,null)),v=e.props?c:tC(c)}}catch(T){hc.length=0,Wh(T,t,1),p=Oe(Br)}let R=p;if(v&&_!==!1){const T=Object.keys(v),{shapeFlag:k}=R;T.length&&k&7&&(o&&T.some(Mp)&&(v=nC(v,o)),R=xs(R,v))}return n.dirs&&(R=xs(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),p=R,Kl(w),p}const tC=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fh(n))&&((e||(e={}))[n]=t[n]);return e},nC=(t,e)=>{const n={};for(const r in t)(!Mp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function rC(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ny(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!Hh(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ny(r,o,u):!0:!!o;return!1}function Ny(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Hh(n,s))return!0}return!1}function iC({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sC=t=>t.__isSuspense;function oC(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):J1(t)}function aC(t,e){return Kh(t,null,e)}function cC(t,e){return Kh(t,null,{flush:"post"})}const nl={};function An(t,e,n){return Kh(t,e,n)}function Kh(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ze){var a;const c=Bb()===((a=Ct)==null?void 0:a.scope)?Ct:null;let u,l=!1,h=!1;if(Qe(t)?(u=()=>t.value,l=Gl(t)):bi(t)?(u=()=>t,r=!0):fe(t)?(h=!0,l=t.some(T=>bi(T)||Gl(T)),u=()=>t.map(T=>{if(Qe(T))return T.value;if(bi(T))return ps(T);if(Ie(T))return Ei(T,c,2)})):Ie(t)?e?u=()=>Ei(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return d&&d(),Bn(t,c,3,[f])}:u=Yn,e&&r){const T=u;u=()=>ps(T())}let d,f=T=>{d=w.onStop=()=>{Ei(T,c,4)}},m;if(Dc)if(f=Yn,e?n&&Bn(e,c,3,[u(),h?[]:void 0,f]):u(),i==="sync"){const T=tk();m=T.__watcherHandles||(T.__watcherHandles=[])}else return Yn;let _=h?new Array(t.length).fill(nl):nl;const p=()=>{if(w.active)if(e){const T=w.run();(r||l||(h?T.some((k,x)=>ks(k,_[x])):ks(T,_)))&&(d&&d(),Bn(e,c,3,[T,_===nl?void 0:h&&_[0]===nl?[]:_,f]),_=T)}else w.run()};p.allowRecurse=!!e;let v;i==="sync"?v=p:i==="post"?v=()=>yn(p,c&&c.suspense):(p.pre=!0,c&&(p.id=c.uid),v=()=>Qp(p));const w=new jp(u,v);e?n?p():_=w.run():i==="post"?yn(w.run.bind(w),c&&c.suspense):w.run();const R=()=>{w.stop(),c&&c.scope&&Lp(c.scope.effects,w)};return m&&m.push(R),R}function uC(t,e,n){const r=this.proxy,i=bt(t)?t.includes(".")?fE(r,t):()=>r[t]:t.bind(r,r);let s;Ie(e)?s=e:(s=e.handler,n=e);const o=Ct;zo(this);const a=Kh(i,s.bind(r),n);return o?zo(o):Ts(),a}function fE(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function ps(t,e){if(!Xe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Qe(t))ps(t.value,e);else if(fe(t))for(let n=0;n<t.length;n++)ps(t[n],e);else if(Ob(t)||ko(t))t.forEach(n=>{ps(n,e)});else if(Vb(t))for(const n in t)ps(t[n],e);return t}function ac(t,e){const n=Vt;if(n===null)return t;const r=Zh(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Ze]=e[s];o&&(Ie(o)&&(o={mounted:o,updated:o}),o.deep&&ps(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Zi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(ha(),Bn(c,n,8,[t.el,a,t,e]),da())}}const so=Symbol("_leaveCb"),rl=Symbol("_enterCb");function lC(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vu(()=>{t.isMounted=!0}),Yp(()=>{t.isUnmounting=!0}),t}const Dn=[Function,Array],hC={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dn,onEnter:Dn,onAfterEnter:Dn,onEnterCancelled:Dn,onBeforeLeave:Dn,onLeave:Dn,onAfterLeave:Dn,onLeaveCancelled:Dn,onBeforeAppear:Dn,onAppear:Dn,onAfterAppear:Dn,onAppearCancelled:Dn};function dC(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function um(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:_,onAppear:p,onAfterAppear:v,onAppearCancelled:w}=e,R=String(t.key),T=dC(n,t),k=(O,U)=>{O&&Bn(O,r,9,U)},x=(O,U)=>{const te=U[1];k(O,U),fe(O)?O.every(Pe=>Pe.length<=1)&&te():O.length<=1&&te()},W={mode:s,persisted:o,beforeEnter(O){let U=a;if(!n.isMounted)if(i)U=_||a;else return;O[so]&&O[so](!0);const te=T[R];te&&_o(t,te)&&te.el[so]&&te.el[so](),k(U,[O])},enter(O){let U=c,te=u,Pe=l;if(!n.isMounted)if(i)U=p||c,te=v||u,Pe=w||l;else return;let Y=!1;const ge=O[rl]=Be=>{Y||(Y=!0,Be?k(Pe,[O]):k(te,[O]),W.delayedLeave&&W.delayedLeave(),O[rl]=void 0)};U?x(U,[O,ge]):ge()},leave(O,U){const te=String(t.key);if(O[rl]&&O[rl](!0),n.isUnmounting)return U();k(h,[O]);let Pe=!1;const Y=O[so]=ge=>{Pe||(Pe=!0,U(),ge?k(m,[O]):k(f,[O]),O[so]=void 0,T[te]===t&&delete T[te])};T[te]=t,d?x(d,[O,Y]):Y()},clone(O){return um(O,e,n,r)}};return W}function lm(t,e){t.shapeFlag&6&&t.component?lm(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function mE(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===zt?(o.patchFlag&128&&i++,r=r.concat(mE(o.children,e,a))):(e||o.type!==Br)&&r.push(a!=null?xs(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function qi(t,e){return Ie(t)?(()=>Rt({name:t.name},e,{setup:t}))():t}const cc=t=>!!t.type.__asyncLoader,pE=t=>t.type.__isKeepAlive;function gE(t,e){yE(t,"a",e)}function _E(t,e){yE(t,"da",e)}function yE(t,e,n=Ct){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Qh(e,r,n),n){let i=n.parent;for(;i&&i.parent;)pE(i.parent.vnode)&&fC(r,e,n,i),i=i.parent}}function fC(t,e,n,r){const i=Qh(e,t,r,!0);Yh(()=>{Lp(r[e],i)},n)}function Qh(t,e,n=Ct,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ha(),zo(n);const a=Bn(e,n,t,o);return Ts(),da(),a});return r?i.unshift(s):i.push(s),s}}const Kr=t=>(e,n=Ct)=>(!Dc||t==="sp")&&Qh(t,(...r)=>e(...r),n),mC=Kr("bm"),vu=Kr("m"),pC=Kr("bu"),vE=Kr("u"),Yp=Kr("bum"),Yh=Kr("um"),gC=Kr("sp"),_C=Kr("rtg"),yC=Kr("rtc");function vC(t,e=Ct){Qh("ec",t,e)}const Xp="components",wC="directives";function or(t,e){return Zp(Xp,t,!0,e)||t}const wE=Symbol.for("v-ndc");function Jp(t){return bt(t)?Zp(Xp,t,!1)||t:t||wE}function Dy(t){return Zp(wC,t)}function Zp(t,e,n=!0,r=!1){const i=Vt||Ct;if(i){const s=i.type;if(t===Xp){const a=JC(s,!1);if(a&&(a===e||a===Ir(e)||a===jh(Ir(e))))return s}const o=Vy(i[t]||s[t],e)||Vy(i.appContext[t],e);return!o&&r?s:o}}function Vy(t,e){return t&&(t[e]||t[Ir(e)]||t[jh(Ir(e))])}function IE(t,e,n,r){let i;const s=n&&n[r];if(fe(t)||bt(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Xe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function M3(t,e,n={},r,i){if(Vt.isCE||Vt.parent&&cc(Vt.parent)&&Vt.parent.isCE)return e!=="default"&&(n.name=e),Oe("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),qe();const o=s&&bE(s(n)),a=Dt(zt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function bE(t){return t.some(e=>Yl(e)?!(e.type===Br||e.type===zt&&!bE(e.children)):!0)?t:null}const hm=t=>t?NE(t)?Zh(t)||t.proxy:hm(t.parent):null,uc=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hm(t.parent),$root:t=>hm(t.root),$emit:t=>t.emit,$options:t=>eg(t),$forceUpdate:t=>t.f||(t.f=()=>Qp(t.update)),$nextTick:t=>t.n||(t.n=rr.bind(t.proxy)),$watch:t=>uC.bind(t)}),mf=(t,e)=>t!==Ze&&!t.__isScriptSetup&&Fe(t,e),IC={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(mf(r,e))return o[e]=1,r[e];if(i!==Ze&&Fe(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&Fe(u,e))return o[e]=3,s[e];if(n!==Ze&&Fe(n,e))return o[e]=4,n[e];dm&&(o[e]=0)}}const l=uc[e];let h,d;if(l)return e==="$attrs"&&Rn(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ze&&Fe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Fe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return mf(i,e)?(i[e]=n,!0):r!==Ze&&Fe(r,e)?(r[e]=n,!0):Fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Ze&&Fe(t,o)||mf(e,o)||(a=s[0])&&Fe(a,o)||Fe(r,o)||Fe(uc,o)||Fe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function My(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dm=!0;function bC(t){const e=eg(t),n=t.proxy,r=t.ctx;dm=!1,e.beforeCreate&&Ly(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:f,updated:m,activated:_,deactivated:p,beforeDestroy:v,beforeUnmount:w,destroyed:R,unmounted:T,render:k,renderTracked:x,renderTriggered:W,errorCaptured:O,serverPrefetch:U,expose:te,inheritAttrs:Pe,components:Y,directives:ge,filters:Be}=e;if(u&&EC(u,r,null),o)for(const Ae in o){const me=o[Ae];Ie(me)&&(r[Ae]=me.bind(n))}if(i){const Ae=i.call(n,n);Xe(Ae)&&(t.data=br(Ae))}if(dm=!0,s)for(const Ae in s){const me=s[Ae],vt=Ie(me)?me.bind(n,n):Ie(me.get)?me.get.bind(n,n):Yn,rn=!Ie(me)&&Ie(me.set)?me.set.bind(n):Yn,sn=de({get:vt,set:rn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>sn.value,set:jt=>sn.value=jt})}if(a)for(const Ae in a)EE(a[Ae],r,n,Ae);if(c){const Ae=Ie(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(me=>{Oo(me,Ae[me])})}l&&Ly(l,t,"c");function ne(Ae,me){fe(me)?me.forEach(vt=>Ae(vt.bind(n))):me&&Ae(me.bind(n))}if(ne(mC,h),ne(vu,d),ne(pC,f),ne(vE,m),ne(gE,_),ne(_E,p),ne(vC,O),ne(yC,x),ne(_C,W),ne(Yp,w),ne(Yh,T),ne(gC,U),fe(te))if(te.length){const Ae=t.exposed||(t.exposed={});te.forEach(me=>{Object.defineProperty(Ae,me,{get:()=>n[me],set:vt=>n[me]=vt})})}else t.exposed||(t.exposed={});k&&t.render===Yn&&(t.render=k),Pe!=null&&(t.inheritAttrs=Pe),Y&&(t.components=Y),ge&&(t.directives=ge)}function EC(t,e,n=Yn){fe(t)&&(t=fm(t));for(const r in t){const i=t[r];let s;Xe(i)?"default"in i?s=dn(i.from||r,i.default,!0):s=dn(i.from||r):s=dn(i),Qe(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Ly(t,e,n){Bn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function EE(t,e,n,r){const i=r.includes(".")?fE(n,r):()=>n[r];if(bt(t)){const s=e[t];Ie(s)&&An(i,s)}else if(Ie(t))An(i,t.bind(n));else if(Xe(t))if(fe(t))t.forEach(s=>EE(s,e,n,r));else{const s=Ie(t.handler)?t.handler.bind(n):e[t.handler];Ie(s)&&An(i,s,t)}}function eg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Ql(c,u,o,!0)),Ql(c,e,o)),Xe(e)&&s.set(e,c),c}function Ql(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ql(t,s,n,!0),i&&i.forEach(o=>Ql(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=TC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const TC={data:Fy,props:Uy,emits:Uy,methods:Ya,computed:Ya,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Ya,directives:Ya,watch:RC,provide:Fy,inject:AC};function Fy(t,e){return e?t?function(){return Rt(Ie(t)?t.call(this,this):t,Ie(e)?e.call(this,this):e)}:e:t}function AC(t,e){return Ya(fm(t),fm(e))}function fm(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function an(t,e){return t?[...new Set([].concat(t,e))]:e}function Ya(t,e){return t?Rt(Object.create(null),t,e):e}function Uy(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:Rt(Object.create(null),My(t),My(e??{})):e}function RC(t,e){if(!t)return e;if(!e)return t;const n=Rt(Object.create(null),t);for(const r in e)n[r]=an(t[r],e[r]);return n}function TE(){return{app:null,config:{isNativeTag:o1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let SC=0;function PC(t,e){return function(r,i=null){Ie(r)||(r=Rt({},r)),i!=null&&!Xe(i)&&(i=null);const s=TE(),o=new WeakSet;let a=!1;const c=s.app={_uid:SC++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:nk,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&Ie(u.install)?(o.add(u),u.install(c,...l)):Ie(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=Oe(r,i);return d.appContext=s,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Zh(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c},runWithContext(u){Oc=c;try{return u()}finally{Oc=null}}};return c}}let Oc=null;function Oo(t,e){if(Ct){let n=Ct.provides;const r=Ct.parent&&Ct.parent.provides;r===n&&(n=Ct.provides=Object.create(r)),n[t]=e}}function dn(t,e,n=!1){const r=Ct||Vt;if(r||Oc){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Oc._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Ie(e)?e.call(r&&r.proxy):e}}function CC(){return!!(Ct||Vt||Oc)}function kC(t,e,n,r=!1){const i={},s={};Wl(s,Jh,1),t.propsDefaults=Object.create(null),AE(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Xb(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function xC(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Le(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Hh(t.emitsOptions,d))continue;const f=e[d];if(c)if(Fe(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const m=Ir(d);i[m]=mm(c,a,m,f,t,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{AE(t,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!Fe(e,h)&&((l=la(h))===h||!Fe(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(i[h]=mm(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Fe(e,h))&&(delete s[h],u=!0)}u&&Mr(t,"set","$attrs")}function AE(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Pl(c))continue;const u=e[c];let l;i&&Fe(i,l=Ir(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:Hh(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=Le(n),u=a||Ze;for(let l=0;l<s.length;l++){const h=s[l];n[h]=mm(i,c,h,u[h],t,!Fe(u,h))}}return o}function mm(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Fe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ie(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(zo(i),r=u[n]=c.call(null,e),Ts())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===la(n))&&(r=!0))}return r}function RE(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!Ie(t)){const l=h=>{c=!0;const[d,f]=RE(h,e,!0);Rt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return Xe(t)&&r.set(t,Co),Co;if(fe(s))for(let l=0;l<s.length;l++){const h=Ir(s[l]);By(h)&&(o[h]=Ze)}else if(s)for(const l in s){const h=Ir(l);if(By(h)){const d=s[l],f=o[h]=fe(d)||Ie(d)?{type:d}:Rt({},d);if(f){const m=qy(Boolean,f.type),_=qy(String,f.type);f[0]=m>-1,f[1]=_<0||m<_,(m>-1||Fe(f,"default"))&&a.push(h)}}}const u=[o,a];return Xe(t)&&r.set(t,u),u}function By(t){return t[0]!=="$"}function $y(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function jy(t,e){return $y(t)===$y(e)}function qy(t,e){return fe(e)?e.findIndex(n=>jy(n,t)):Ie(e)&&jy(e,t)?0:-1}const SE=t=>t[0]==="_"||t==="$stable",tg=t=>fe(t)?t.map(ir):[ir(t)],OC=(t,e,n)=>{if(e._n)return e;const r=Cr((...i)=>tg(e(...i)),n);return r._c=!1,r},PE=(t,e,n)=>{const r=t._ctx;for(const i in t){if(SE(i))continue;const s=t[i];if(Ie(s))e[i]=OC(i,s,r);else if(s!=null){const o=tg(s);e[i]=()=>o}}},CE=(t,e)=>{const n=tg(e);t.slots.default=()=>n},NC=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Le(e),Wl(e,"_",n)):PE(e,t.slots={})}else t.slots={},e&&CE(t,e);Wl(t.slots,Jh,1)},DC=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ze;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Rt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,PE(e,i)),o=e}else e&&(CE(t,e),o={default:1});if(s)for(const a in i)!SE(a)&&o[a]==null&&delete i[a]};function pm(t,e,n,r,i=!1){if(fe(t)){t.forEach((d,f)=>pm(d,e&&(fe(e)?e[f]:e),n,r,i));return}if(cc(r)&&!i)return;const s=r.shapeFlag&4?Zh(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Ze?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(bt(u)?(l[u]=null,Fe(h,u)&&(h[u]=null)):Qe(u)&&(u.value=null)),Ie(c))Ei(c,a,12,[o,l]);else{const d=bt(c),f=Qe(c);if(d||f){const m=()=>{if(t.f){const _=d?Fe(h,c)?h[c]:l[c]:c.value;i?fe(_)&&Lp(_,s):fe(_)?_.includes(s)||_.push(s):d?(l[c]=[s],Fe(h,c)&&(h[c]=l[c])):(c.value=[s],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,Fe(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(l[t.k]=o))};o?(m.id=-1,yn(m,n)):m()}}}const yn=oC;function VC(t){return MC(t)}function MC(t,e){const n=im();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:f=Yn,insertStaticContent:m}=t,_=(g,y,E,C=null,N=null,L=null,Q=!1,$=null,z=!!y.dynamicChildren)=>{if(g===y)return;g&&!_o(g,y)&&(C=S(g),jt(g,N,L,!0),g=null),y.patchFlag===-2&&(z=!1,y.dynamicChildren=null);const{type:F,ref:he,shapeFlag:re}=y;switch(F){case Xh:p(g,y,E,C);break;case Br:v(g,y,E,C);break;case lc:g==null&&w(y,E,C,Q);break;case zt:Y(g,y,E,C,N,L,Q,$,z);break;default:re&1?k(g,y,E,C,N,L,Q,$,z):re&6?ge(g,y,E,C,N,L,Q,$,z):(re&64||re&128)&&F.process(g,y,E,C,N,L,Q,$,z,q)}he!=null&&N&&pm(he,g&&g.ref,L,y||g,!y)},p=(g,y,E,C)=>{if(g==null)r(y.el=a(y.children),E,C);else{const N=y.el=g.el;y.children!==g.children&&u(N,y.children)}},v=(g,y,E,C)=>{g==null?r(y.el=c(y.children||""),E,C):y.el=g.el},w=(g,y,E,C)=>{[g.el,g.anchor]=m(g.children,y,E,C,g.el,g.anchor)},R=({el:g,anchor:y},E,C)=>{let N;for(;g&&g!==y;)N=d(g),r(g,E,C),g=N;r(y,E,C)},T=({el:g,anchor:y})=>{let E;for(;g&&g!==y;)E=d(g),i(g),g=E;i(y)},k=(g,y,E,C,N,L,Q,$,z)=>{Q=Q||y.type==="svg",g==null?x(y,E,C,N,L,Q,$,z):U(g,y,N,L,Q,$,z)},x=(g,y,E,C,N,L,Q,$)=>{let z,F;const{type:he,props:re,shapeFlag:le,transition:_e,dirs:Ce}=g;if(z=g.el=o(g.type,L,re&&re.is,re),le&8?l(z,g.children):le&16&&O(g.children,z,null,C,N,L&&he!=="foreignObject",Q,$),Ce&&Zi(g,null,C,"created"),W(z,g,g.scopeId,Q,C),re){for(const b in re)b!=="value"&&!Pl(b)&&s(z,b,null,re[b],L,g.children,C,N,ue);"value"in re&&s(z,"value",null,re.value),(F=re.onVnodeBeforeMount)&&nr(F,C,g)}Ce&&Zi(g,null,C,"beforeMount");const Ge=LC(N,_e);Ge&&_e.beforeEnter(z),r(z,y,E),((F=re&&re.onVnodeMounted)||Ge||Ce)&&yn(()=>{F&&nr(F,C,g),Ge&&_e.enter(z),Ce&&Zi(g,null,C,"mounted")},N)},W=(g,y,E,C,N)=>{if(E&&f(g,E),C)for(let L=0;L<C.length;L++)f(g,C[L]);if(N){let L=N.subTree;if(y===L){const Q=N.vnode;W(g,Q,Q.scopeId,Q.slotScopeIds,N.parent)}}},O=(g,y,E,C,N,L,Q,$,z=0)=>{for(let F=z;F<g.length;F++){const he=g[F]=$?fi(g[F]):ir(g[F]);_(null,he,y,E,C,N,L,Q,$)}},U=(g,y,E,C,N,L,Q)=>{const $=y.el=g.el;let{patchFlag:z,dynamicChildren:F,dirs:he}=y;z|=g.patchFlag&16;const re=g.props||Ze,le=y.props||Ze;let _e;E&&es(E,!1),(_e=le.onVnodeBeforeUpdate)&&nr(_e,E,y,g),he&&Zi(y,g,E,"beforeUpdate"),E&&es(E,!0);const Ce=N&&y.type!=="foreignObject";if(F?te(g.dynamicChildren,F,$,E,C,Ce,L):Q||me(g,y,$,null,E,C,Ce,L,!1),z>0){if(z&16)Pe($,y,re,le,E,C,N);else if(z&2&&re.class!==le.class&&s($,"class",null,le.class,N),z&4&&s($,"style",re.style,le.style,N),z&8){const Ge=y.dynamicProps;for(let b=0;b<Ge.length;b++){const I=Ge[b],D=re[I],X=le[I];(X!==D||I==="value")&&s($,I,D,X,N,g.children,E,C,ue)}}z&1&&g.children!==y.children&&l($,y.children)}else!Q&&F==null&&Pe($,y,re,le,E,C,N);((_e=le.onVnodeUpdated)||he)&&yn(()=>{_e&&nr(_e,E,y,g),he&&Zi(y,g,E,"updated")},C)},te=(g,y,E,C,N,L,Q)=>{for(let $=0;$<y.length;$++){const z=g[$],F=y[$],he=z.el&&(z.type===zt||!_o(z,F)||z.shapeFlag&70)?h(z.el):E;_(z,F,he,null,C,N,L,Q,!0)}},Pe=(g,y,E,C,N,L,Q)=>{if(E!==C){if(E!==Ze)for(const $ in E)!Pl($)&&!($ in C)&&s(g,$,E[$],null,Q,y.children,N,L,ue);for(const $ in C){if(Pl($))continue;const z=C[$],F=E[$];z!==F&&$!=="value"&&s(g,$,F,z,Q,y.children,N,L,ue)}"value"in C&&s(g,"value",E.value,C.value)}},Y=(g,y,E,C,N,L,Q,$,z)=>{const F=y.el=g?g.el:a(""),he=y.anchor=g?g.anchor:a("");let{patchFlag:re,dynamicChildren:le,slotScopeIds:_e}=y;_e&&($=$?$.concat(_e):_e),g==null?(r(F,E,C),r(he,E,C),O(y.children,E,he,N,L,Q,$,z)):re>0&&re&64&&le&&g.dynamicChildren?(te(g.dynamicChildren,le,E,N,L,Q,$),(y.key!=null||N&&y===N.subTree)&&kE(g,y,!0)):me(g,y,E,he,N,L,Q,$,z)},ge=(g,y,E,C,N,L,Q,$,z)=>{y.slotScopeIds=$,g==null?y.shapeFlag&512?N.ctx.activate(y,E,C,Q,z):Be(y,E,C,N,L,Q,z):$e(g,y,z)},Be=(g,y,E,C,N,L,Q)=>{const $=g.component=GC(g,C,N);if(pE(g)&&($.ctx.renderer=q),KC($),$.asyncDep){if(N&&N.registerDep($,ne),!g.el){const z=$.subTree=Oe(Br);v(null,z,y,E)}return}ne($,g,y,E,N,L,Q)},$e=(g,y,E)=>{const C=y.component=g.component;if(rC(g,y,E))if(C.asyncDep&&!C.asyncResolved){Ae(C,y,E);return}else C.next=y,X1(C.update),C.update();else y.el=g.el,C.vnode=y},ne=(g,y,E,C,N,L,Q)=>{const $=()=>{if(g.isMounted){let{next:he,bu:re,u:le,parent:_e,vnode:Ce}=g,Ge=he,b;es(g,!1),he?(he.el=Ce.el,Ae(g,he,Q)):he=Ce,re&&Cl(re),(b=he.props&&he.props.onVnodeBeforeUpdate)&&nr(b,_e,he,Ce),es(g,!0);const I=ff(g),D=g.subTree;g.subTree=I,_(D,I,h(D.el),S(D),g,N,L),he.el=I.el,Ge===null&&iC(g,I.el),le&&yn(le,N),(b=he.props&&he.props.onVnodeUpdated)&&yn(()=>nr(b,_e,he,Ce),N)}else{let he;const{el:re,props:le}=y,{bm:_e,m:Ce,parent:Ge}=g,b=cc(y);if(es(g,!1),_e&&Cl(_e),!b&&(he=le&&le.onVnodeBeforeMount)&&nr(he,Ge,y),es(g,!0),re&&Re){const I=()=>{g.subTree=ff(g),Re(re,g.subTree,g,N,null)};b?y.type.__asyncLoader().then(()=>!g.isUnmounted&&I()):I()}else{const I=g.subTree=ff(g);_(null,I,E,C,g,N,L),y.el=I.el}if(Ce&&yn(Ce,N),!b&&(he=le&&le.onVnodeMounted)){const I=y;yn(()=>nr(he,Ge,I),N)}(y.shapeFlag&256||Ge&&cc(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&g.a&&yn(g.a,N),g.isMounted=!0,y=E=C=null}},z=g.effect=new jp($,()=>Qp(F),g.scope),F=g.update=()=>z.run();F.id=g.uid,es(g,!0),F()},Ae=(g,y,E)=>{y.component=g;const C=g.vnode.props;g.vnode=y,g.next=null,xC(g,y.props,C,E),DC(g,y.children,E),ha(),Oy(),da()},me=(g,y,E,C,N,L,Q,$,z=!1)=>{const F=g&&g.children,he=g?g.shapeFlag:0,re=y.children,{patchFlag:le,shapeFlag:_e}=y;if(le>0){if(le&128){rn(F,re,E,C,N,L,Q,$,z);return}else if(le&256){vt(F,re,E,C,N,L,Q,$,z);return}}_e&8?(he&16&&ue(F,N,L),re!==F&&l(E,re)):he&16?_e&16?rn(F,re,E,C,N,L,Q,$,z):ue(F,N,L,!0):(he&8&&l(E,""),_e&16&&O(re,E,C,N,L,Q,$,z))},vt=(g,y,E,C,N,L,Q,$,z)=>{g=g||Co,y=y||Co;const F=g.length,he=y.length,re=Math.min(F,he);let le;for(le=0;le<re;le++){const _e=y[le]=z?fi(y[le]):ir(y[le]);_(g[le],_e,E,null,N,L,Q,$,z)}F>he?ue(g,N,L,!0,!1,re):O(y,E,C,N,L,Q,$,z,re)},rn=(g,y,E,C,N,L,Q,$,z)=>{let F=0;const he=y.length;let re=g.length-1,le=he-1;for(;F<=re&&F<=le;){const _e=g[F],Ce=y[F]=z?fi(y[F]):ir(y[F]);if(_o(_e,Ce))_(_e,Ce,E,null,N,L,Q,$,z);else break;F++}for(;F<=re&&F<=le;){const _e=g[re],Ce=y[le]=z?fi(y[le]):ir(y[le]);if(_o(_e,Ce))_(_e,Ce,E,null,N,L,Q,$,z);else break;re--,le--}if(F>re){if(F<=le){const _e=le+1,Ce=_e<he?y[_e].el:C;for(;F<=le;)_(null,y[F]=z?fi(y[F]):ir(y[F]),E,Ce,N,L,Q,$,z),F++}}else if(F>le)for(;F<=re;)jt(g[F],N,L,!0),F++;else{const _e=F,Ce=F,Ge=new Map;for(F=Ce;F<=le;F++){const ke=y[F]=z?fi(y[F]):ir(y[F]);ke.key!=null&&Ge.set(ke.key,F)}let b,I=0;const D=le-Ce+1;let X=!1,we=0;const ye=new Array(D);for(F=0;F<D;F++)ye[F]=0;for(F=_e;F<=re;F++){const ke=g[F];if(I>=D){jt(ke,N,L,!0);continue}let Se;if(ke.key!=null)Se=Ge.get(ke.key);else for(b=Ce;b<=le;b++)if(ye[b-Ce]===0&&_o(ke,y[b])){Se=b;break}Se===void 0?jt(ke,N,L,!0):(ye[Se-Ce]=F+1,Se>=we?we=Se:X=!0,_(ke,y[Se],E,null,N,L,Q,$,z),I++)}const De=X?FC(ye):Co;for(b=De.length-1,F=D-1;F>=0;F--){const ke=Ce+F,Se=y[ke],je=ke+1<he?y[ke+1].el:C;ye[F]===0?_(null,Se,E,je,N,L,Q,$,z):X&&(b<0||F!==De[b]?sn(Se,E,je,2):b--)}}},sn=(g,y,E,C,N=null)=>{const{el:L,type:Q,transition:$,children:z,shapeFlag:F}=g;if(F&6){sn(g.component.subTree,y,E,C);return}if(F&128){g.suspense.move(y,E,C);return}if(F&64){Q.move(g,y,E,q);return}if(Q===zt){r(L,y,E);for(let re=0;re<z.length;re++)sn(z[re],y,E,C);r(g.anchor,y,E);return}if(Q===lc){R(g,y,E);return}if(C!==2&&F&1&&$)if(C===0)$.beforeEnter(L),r(L,y,E),yn(()=>$.enter(L),N);else{const{leave:re,delayLeave:le,afterLeave:_e}=$,Ce=()=>r(L,y,E),Ge=()=>{re(L,()=>{Ce(),_e&&_e()})};le?le(L,Ce,Ge):Ge()}else r(L,y,E)},jt=(g,y,E,C=!1,N=!1)=>{const{type:L,props:Q,ref:$,children:z,dynamicChildren:F,shapeFlag:he,patchFlag:re,dirs:le}=g;if($!=null&&pm($,null,E,g,!0),he&256){y.ctx.deactivate(g);return}const _e=he&1&&le,Ce=!cc(g);let Ge;if(Ce&&(Ge=Q&&Q.onVnodeBeforeUnmount)&&nr(Ge,y,g),he&6)ie(g.component,E,C);else{if(he&128){g.suspense.unmount(E,C);return}_e&&Zi(g,null,y,"beforeUnmount"),he&64?g.type.remove(g,y,E,N,q,C):F&&(L!==zt||re>0&&re&64)?ue(F,y,E,!1,!0):(L===zt&&re&384||!N&&he&16)&&ue(z,y,E),C&&ft(g)}(Ce&&(Ge=Q&&Q.onVnodeUnmounted)||_e)&&yn(()=>{Ge&&nr(Ge,y,g),_e&&Zi(g,null,y,"unmounted")},E)},ft=g=>{const{type:y,el:E,anchor:C,transition:N}=g;if(y===zt){tr(E,C);return}if(y===lc){T(g);return}const L=()=>{i(E),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:Q,delayLeave:$}=N,z=()=>Q(E,L);$?$(g.el,L,z):z()}else L()},tr=(g,y)=>{let E;for(;g!==y;)E=d(g),i(g),g=E;i(y)},ie=(g,y,E)=>{const{bum:C,scope:N,update:L,subTree:Q,um:$}=g;C&&Cl(C),N.stop(),L&&(L.active=!1,jt(Q,g,y,E)),$&&yn($,y),yn(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},ue=(g,y,E,C=!1,N=!1,L=0)=>{for(let Q=L;Q<g.length;Q++)jt(g[Q],y,E,C,N)},S=g=>g.shapeFlag&6?S(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),B=(g,y,E)=>{g==null?y._vnode&&jt(y._vnode,null,null,!0):_(y._vnode||null,g,y,null,null,null,E),Oy(),aE(),y._vnode=g},q={p:_,um:jt,m:sn,r:ft,mt:Be,mc:O,pc:me,pbc:te,n:S,o:t};let ee,Re;return e&&([ee,Re]=e(q)),{render:B,hydrate:ee,createApp:PC(B,ee)}}function es({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function LC(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kE(t,e,n=!1){const r=t.children,i=e.children;if(fe(r)&&fe(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=fi(i[s]),a.el=o.el),n||kE(o,a)),a.type===Xh&&(a.el=o.el)}}function FC(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const UC=t=>t.__isTeleport,zt=Symbol.for("v-fgt"),Xh=Symbol.for("v-txt"),Br=Symbol.for("v-cmt"),lc=Symbol.for("v-stc"),hc=[];let Gn=null;function qe(t=!1){hc.push(Gn=t?null:[])}function BC(){hc.pop(),Gn=hc[hc.length-1]||null}let Nc=1;function zy(t){Nc+=t}function xE(t){return t.dynamicChildren=Nc>0?Gn||Co:null,BC(),Nc>0&&Gn&&Gn.push(t),t}function Mn(t,e,n,r,i,s){return xE(st(t,e,n,r,i,s,!0))}function Dt(t,e,n,r,i){return xE(Oe(t,e,n,r,i,!0))}function Yl(t){return t?t.__v_isVNode===!0:!1}function _o(t,e){return t.type===e.type&&t.key===e.key}const Jh="__vInternal",OE=({key:t})=>t??null,kl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?bt(t)||Qe(t)||Ie(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function st(t,e=null,n=null,r=0,i=null,s=t===zt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&OE(e),ref:e&&kl(e),scopeId:Gh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Vt};return a?(ng(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=bt(n)?8:16),Nc>0&&!o&&Gn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Gn.push(c),c}const Oe=$C;function $C(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===wE)&&(t=Br),Yl(t)){const a=xs(t,e,!0);return n&&ng(a,n),Nc>0&&!s&&Gn&&(a.shapeFlag&6?Gn[Gn.indexOf(t)]=a:Gn.push(a)),a.patchFlag|=-2,a}if(ZC(t)&&(t=t.__vccOpts),e){e=jC(e);let{class:a,style:c}=e;a&&!bt(a)&&(e.class=Pc(a)),Xe(c)&&(Jb(c)&&!fe(c)&&(c=Rt({},c)),e.style=Up(c))}const o=bt(t)?1:sC(t)?128:UC(t)?64:Xe(t)?4:Ie(t)?2:0;return st(t,e,n,r,i,o,s,!0)}function jC(t){return t?Jb(t)||Jh in t?Rt({},t):t:null}function xs(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?zC(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&OE(a),ref:e&&e.ref?n&&i?fe(i)?i.concat(kl(e)):[i,kl(e)]:kl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xs(t.ssContent),ssFallback:t.ssFallback&&xs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function rs(t=" ",e=0){return Oe(Xh,null,t,e)}function qC(t,e){const n=Oe(lc,null,t);return n.staticCount=e,n}function cs(t="",e=!1){return e?(qe(),Dt(Br,null,t)):Oe(Br,null,t)}function ir(t){return t==null||typeof t=="boolean"?Oe(Br):fe(t)?Oe(zt,null,t.slice()):typeof t=="object"?fi(t):Oe(Xh,null,String(t))}function fi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xs(t)}function ng(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),ng(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Jh in e)?e._ctx=Vt:i===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),r&64?(n=16,e=[rs(e)]):n=8);t.children=e,t.shapeFlag|=n}function zC(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Pc([e.class,r.class]));else if(i==="style")e.style=Up([e.style,r.style]);else if(Fh(i)){const s=e[i],o=r[i];o&&s!==o&&!(fe(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function nr(t,e,n,r=null){Bn(t,e,7,[n,r])}const WC=TE();let HC=0;function GC(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||WC,s={uid:HC++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:RE(r,i),emitsOptions:uE(r,i),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:r.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=eC.bind(null,s),t.ce&&t.ce(s),s}let Ct=null;const fa=()=>Ct||Vt;let rg,oo,Wy="__VUE_INSTANCE_SETTERS__";(oo=im()[Wy])||(oo=im()[Wy]=[]),oo.push(t=>Ct=t),rg=t=>{oo.length>1?oo.forEach(e=>e(t)):oo[0](t)};const zo=t=>{rg(t),t.scope.on()},Ts=()=>{Ct&&Ct.scope.off(),rg(null)};function NE(t){return t.vnode.shapeFlag&4}let Dc=!1;function KC(t,e=!1){Dc=e;const{props:n,children:r}=t.vnode,i=NE(t);kC(t,n,i,e),NC(t,r);const s=i?QC(t,e):void 0;return Dc=!1,s}function QC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zh(new Proxy(t.ctx,IC));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?XC(t):null;zo(t),ha();const s=Ei(r,t,0,[t.props,i]);if(da(),Ts(),Nb(s)){if(s.then(Ts,Ts),e)return s.then(o=>{Hy(t,o,e)}).catch(o=>{Wh(o,t,0)});t.asyncDep=s}else Hy(t,s,e)}else DE(t,e)}function Hy(t,e,n){Ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Xe(e)&&(t.setupState=rE(e)),DE(t,n)}let Gy;function DE(t,e,n){const r=t.type;if(!t.render){if(!e&&Gy&&!r.render){const i=r.template||eg(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Rt(Rt({isCustomElement:s,delimiters:a},o),c);r.render=Gy(i,u)}}t.render=r.render||Yn}{zo(t),ha();try{bC(t)}finally{da(),Ts()}}}function YC(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Rn(t,"get","$attrs"),e[n]}}))}function XC(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return YC(t)},slots:t.slots,emit:t.emit,expose:e}}function Zh(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rE(zh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in uc)return uc[n](t)},has(e,n){return n in e||n in uc}}))}function JC(t,e=!0){return Ie(t)?t.displayName||t.name:t.name||e&&t.__name}function ZC(t){return Ie(t)&&"__vccOpts"in t}const de=(t,e)=>K1(t,e,Dc);function Os(t,e,n){const r=arguments.length;return r===2?Xe(e)&&!fe(e)?Yl(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yl(n)&&(n=[n]),Oe(t,e,n))}const ek=Symbol.for("v-scx"),tk=()=>dn(ek),nk="3.3.7",rk="http://www.w3.org/2000/svg",us=typeof document<"u"?document:null,Ky=us&&us.createElement("template"),ik={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?us.createElementNS(rk,t):us.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>us.createTextNode(t),createComment:t=>us.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>us.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Ky.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ky.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ii="transition",Oa="animation",Wo=Symbol("_vtc"),VE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sk=Rt({},hC,VE),ts=(t,e=[])=>{fe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Qy=t=>t?fe(t)?t.some(e=>e.length>1):t.length>1:!1;function ok(t){const e={};for(const Y in t)Y in VE||(e[Y]=t[Y]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=ak(i),_=m&&m[0],p=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:R,onLeave:T,onLeaveCancelled:k,onBeforeAppear:x=v,onAppear:W=w,onAppearCancelled:O=R}=e,U=(Y,ge,Be)=>{hi(Y,ge?l:a),hi(Y,ge?u:o),Be&&Be()},te=(Y,ge)=>{Y._isLeaving=!1,hi(Y,h),hi(Y,f),hi(Y,d),ge&&ge()},Pe=Y=>(ge,Be)=>{const $e=Y?W:w,ne=()=>U(ge,Y,Be);ts($e,[ge,ne]),Yy(()=>{hi(ge,Y?c:s),Sr(ge,Y?l:a),Qy($e)||Xy(ge,r,_,ne)})};return Rt(e,{onBeforeEnter(Y){ts(v,[Y]),Sr(Y,s),Sr(Y,o)},onBeforeAppear(Y){ts(x,[Y]),Sr(Y,c),Sr(Y,u)},onEnter:Pe(!1),onAppear:Pe(!0),onLeave(Y,ge){Y._isLeaving=!0;const Be=()=>te(Y,ge);Sr(Y,h),LE(),Sr(Y,d),Yy(()=>{Y._isLeaving&&(hi(Y,h),Sr(Y,f),Qy(T)||Xy(Y,r,p,Be))}),ts(T,[Y,Be])},onEnterCancelled(Y){U(Y,!1),ts(R,[Y])},onAppearCancelled(Y){U(Y,!0),ts(O,[Y])},onLeaveCancelled(Y){te(Y),ts(k,[Y])}})}function ak(t){if(t==null)return null;if(Xe(t))return[pf(t.enter),pf(t.leave)];{const e=pf(t);return[e,e]}}function pf(t){return d1(t)}function Sr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Wo]||(t[Wo]=new Set)).add(e)}function hi(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Wo];n&&(n.delete(e),n.size||(t[Wo]=void 0))}function Yy(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ck=0;function Xy(t,e,n,r){const i=t._endId=++ck,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=ME(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=f=>{f.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function ME(t,e){const n=window.getComputedStyle(t),r=m=>(n[m]||"").split(", "),i=r(`${ii}Delay`),s=r(`${ii}Duration`),o=Jy(i,s),a=r(`${Oa}Delay`),c=r(`${Oa}Duration`),u=Jy(a,c);let l=null,h=0,d=0;e===ii?o>0&&(l=ii,h=o,d=s.length):e===Oa?u>0&&(l=Oa,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?ii:Oa:null,d=l?l===ii?s.length:c.length:0);const f=l===ii&&/\b(transform|all)(,|$)/.test(r(`${ii}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:f}}function Jy(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Zy(n)+Zy(t[r])))}function Zy(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function LE(){return document.body.offsetHeight}function uk(t,e,n){const r=t[Wo];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ig=Symbol("_vod"),ev={beforeMount(t,{value:e},{transition:n}){t[ig]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Na(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Na(t,!0),r.enter(t)):r.leave(t,()=>{Na(t,!1)}):Na(t,e))},beforeUnmount(t,{value:e}){Na(t,e)}};function Na(t,e){t.style.display=e?t[ig]:"none"}function lk(t,e,n){const r=t.style,i=bt(n);if(n&&!i){if(e&&!bt(e))for(const s in e)n[s]==null&&gm(r,s,"");for(const s in n)gm(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),ig in t&&(r.display=s)}}const tv=/\s*!important$/;function gm(t,e,n){if(fe(n))n.forEach(r=>gm(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=hk(t,e);tv.test(n)?t.setProperty(la(r),n.replace(tv,""),"important"):t[r]=n}}const nv=["Webkit","Moz","ms"],gf={};function hk(t,e){const n=gf[e];if(n)return n;let r=Ir(e);if(r!=="filter"&&r in t)return gf[e]=r;r=jh(r);for(let i=0;i<nv.length;i++){const s=nv[i]+r;if(s in t)return gf[e]=s}return e}const rv="http://www.w3.org/1999/xlink";function dk(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(rv,e.slice(6,e.length)):t.setAttributeNS(rv,e,n);else{const s=y1(e);n==null||s&&!Mb(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function fk(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,l=n??"";u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Mb(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function yo(t,e,n,r){t.addEventListener(e,n,r)}function mk(t,e,n,r){t.removeEventListener(e,n,r)}const iv=Symbol("_vei");function pk(t,e,n,r,i=null){const s=t[iv]||(t[iv]={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=gk(e);if(r){const u=s[e]=vk(r,i);yo(t,a,u,c)}else o&&(mk(t,a,o,c),s[e]=void 0)}}const sv=/(?:Once|Passive|Capture)$/;function gk(t){let e;if(sv.test(t)){e={};let r;for(;r=t.match(sv);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):la(t.slice(2)),e]}let _f=0;const _k=Promise.resolve(),yk=()=>_f||(_k.then(()=>_f=0),_f=Date.now());function vk(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bn(wk(r,n.value),e,5,[r])};return n.value=t,n.attached=yk(),n}function wk(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const ov=/^on[a-z]/,Ik=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?uk(t,r,i):e==="style"?lk(t,n,r):Fh(e)?Mp(e)||pk(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bk(t,e,r,i))?fk(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),dk(t,e,r,i))};function bk(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ov.test(e)&&Ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ov.test(e)&&bt(n)?!1:e in t}function Ek(t){const e=fa();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>ym(s,i))},r=()=>{const i=t(e.proxy);_m(e.subTree,i),n(i)};cC(r),vu(()=>{const i=new MutationObserver(r);i.observe(e.subTree.el.parentNode,{childList:!0}),Yh(()=>i.disconnect())})}function _m(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{_m(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ym(t.el,e);else if(t.type===zt)t.children.forEach(n=>_m(n,e));else if(t.type===lc){let{el:n,anchor:r}=t;for(;n&&(ym(n,e),n!==r);)n=n.nextSibling}}function ym(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const FE=new WeakMap,UE=new WeakMap,Xl=Symbol("_moveCb"),av=Symbol("_enterCb"),BE={name:"TransitionGroup",props:Rt({},sk,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=fa(),r=lC();let i,s;return vE(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Ck(i[0].el,n.vnode.el,o))return;i.forEach(Rk),i.forEach(Sk);const a=i.filter(Pk);LE(),a.forEach(c=>{const u=c.el,l=u.style;Sr(u,o),l.transform=l.webkitTransform=l.transitionDuration="";const h=u[Xl]=d=>{d&&d.target!==u||(!d||/transform$/.test(d.propertyName))&&(u.removeEventListener("transitionend",h),u[Xl]=null,hi(u,o))};u.addEventListener("transitionend",h)})}),()=>{const o=Le(t),a=ok(o);let c=o.tag||zt;i=s,s=e.default?mE(e.default()):[];for(let u=0;u<s.length;u++){const l=s[u];l.key!=null&&lm(l,um(l,a,r,n))}if(i)for(let u=0;u<i.length;u++){const l=i[u];lm(l,um(l,a,r,n)),FE.set(l,l.el.getBoundingClientRect())}return Oe(c,null,s)}}},Tk=t=>delete t.mode;BE.props;const Ak=BE;function Rk(t){const e=t.el;e[Xl]&&e[Xl](),e[av]&&e[av]()}function Sk(t){UE.set(t,t.el.getBoundingClientRect())}function Pk(t){const e=FE.get(t),n=UE.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function Ck(t,e,n){const r=t.cloneNode(),i=t[Wo];i&&i.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=ME(r);return s.removeChild(r),o}const cv=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>Cl(e,n):e};function kk(t){t.target.composing=!0}function uv(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yf=Symbol("_assign"),L3={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[yf]=cv(i);const s=r||i.props&&i.props.type==="number";yo(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=rm(a)),t[yf](a)}),n&&yo(t,"change",()=>{t.value=t.value.trim()}),e||(yo(t,"compositionstart",kk),yo(t,"compositionend",uv),yo(t,"change",uv))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t[yf]=cv(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&rm(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},xk=["ctrl","shift","alt","meta"],Ok={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>xk.some(n=>t[`${n}Key`]&&!e.includes(n))},lv=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=Ok[e[i]];if(s&&s(n,e))return}return t(n,...r)},Nk=Rt({patchProp:Ik},ik);let hv;function Dk(){return hv||(hv=VC(Nk))}const Vk=(...t)=>{const e=Dk().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Mk(r);if(!i)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Mk(t){return bt(t)?document.querySelector(t):t}var Lk=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let $E;const ed=t=>$E=t,jE=Symbol();function vm(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var dc;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(dc||(dc={}));function Fk(){const t=Ub(!0),e=t.run(()=>Pt({}));let n=[],r=[];const i=zh({install(s){ed(i),i._a=s,s.provide(jE,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!Lk?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const qE=()=>{};function dv(t,e,n,r=qE){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&Bb()&&w1(i),i}function ao(t,...e){t.slice().forEach(n=>{n(...e)})}const Uk=t=>t();function wm(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];vm(i)&&vm(r)&&t.hasOwnProperty(n)&&!Qe(r)&&!bi(r)?t[n]=wm(i,r):t[n]=r}return t}const Bk=Symbol();function $k(t){return!vm(t)||!t.hasOwnProperty(Bk)}const{assign:di}=Object;function jk(t){return!!(Qe(t)&&t.effect)}function qk(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=i?i():{});const l=z1(n.state.value[t]);return di(l,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=zh(de(()=>{ed(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=zE(t,u,e,n,r,!0),c}function zE(t,e,n={},r,i,s){let o;const a=di({actions:{}},n),c={deep:!0};let u,l,h=[],d=[],f;const m=r.state.value[t];!s&&!m&&(r.state.value[t]={}),Pt({});let _;function p(O){let U;u=l=!1,typeof O=="function"?(O(r.state.value[t]),U={type:dc.patchFunction,storeId:t,events:f}):(wm(r.state.value[t],O),U={type:dc.patchObject,payload:O,storeId:t,events:f});const te=_=Symbol();rr().then(()=>{_===te&&(u=!0)}),l=!0,ao(h,U,r.state.value[t])}const v=s?function(){const{state:U}=n,te=U?U():{};this.$patch(Pe=>{di(Pe,te)})}:qE;function w(){o.stop(),h=[],d=[],r._s.delete(t)}function R(O,U){return function(){ed(r);const te=Array.from(arguments),Pe=[],Y=[];function ge(ne){Pe.push(ne)}function Be(ne){Y.push(ne)}ao(d,{args:te,name:O,store:k,after:ge,onError:Be});let $e;try{$e=U.apply(this&&this.$id===t?this:k,te)}catch(ne){throw ao(Y,ne),ne}return $e instanceof Promise?$e.then(ne=>(ao(Pe,ne),ne)).catch(ne=>(ao(Y,ne),Promise.reject(ne))):(ao(Pe,$e),$e)}}const T={_p:r,$id:t,$onAction:dv.bind(null,d),$patch:p,$reset:v,$subscribe(O,U={}){const te=dv(h,O,U.detached,()=>Pe()),Pe=o.run(()=>An(()=>r.state.value[t],Y=>{(U.flush==="sync"?l:u)&&O({storeId:t,type:dc.direct,events:f},Y)},di({},c,U)));return te},$dispose:w},k=br(T);r._s.set(t,k);const W=(r._a&&r._a.runWithContext||Uk)(()=>r._e.run(()=>(o=Ub()).run(e)));for(const O in W){const U=W[O];if(Qe(U)&&!jk(U)||bi(U))s||(m&&$k(U)&&(Qe(U)?U.value=m[O]:wm(U,m[O])),r.state.value[t][O]=U);else if(typeof U=="function"){const te=R(O,U);W[O]=te,a.actions[O]=U}}return di(k,W),di(Le(k),W),Object.defineProperty(k,"$state",{get:()=>r.state.value[t],set:O=>{p(U=>{di(U,O)})}}),r._p.forEach(O=>{di(k,o.run(()=>O({store:k,app:r._a,pinia:r,options:a})))}),m&&s&&n.hydrate&&n.hydrate(k.$state,m),u=!0,l=!0,k}function Ys(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,c){const u=CC();return a=a||(u?dn(jE,null):null),a&&ed(a),a=$E,a._s.has(r)||(s?zE(r,e,i,a):qk(r,i,a)),a._s.get(r)}return o.$id=r,o}let zk="Store";function F3(...t){return t.reduce((e,n)=>(e[n.$id+zk]=function(){return n(this.$pinia)},e),{})}const Wk="modulepreload",Hk=function(t){return"/"+t},fv={},zn=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Hk(s),s in fv)return;fv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const h=i[l];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Wk,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((l,h)=>{u.addEventListener("load",l),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vo=typeof window<"u";function Gk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ze=Object.assign;function vf(t,e){const n={};for(const r in e){const i=e[r];n[r]=Xn(i)?i.map(t):t(i)}return n}const fc=()=>{},Xn=Array.isArray,Kk=/\/$/,Qk=t=>t.replace(Kk,"");function wf(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Zk(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Yk(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mv(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Xk(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Ho(e.matched[r],n.matched[i])&&WE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ho(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function WE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Jk(t[n],e[n]))return!1;return!0}function Jk(t,e){return Xn(t)?pv(t,e):Xn(e)?pv(e,t):t===e}function pv(t,e){return Xn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Zk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Vc;(function(t){t.pop="pop",t.push="push"})(Vc||(Vc={}));var mc;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mc||(mc={}));function ex(t){if(!t)if(vo){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Qk(t)}const tx=/^[^#]+#/;function nx(t,e){return t.replace(tx,"#")+e}function rx(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const td=()=>({left:window.pageXOffset,top:window.pageYOffset});function ix(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=rx(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gv(t,e){return(history.state?history.state.position-e:-1)+t}const Im=new Map;function sx(t,e){Im.set(t,e)}function ox(t){const e=Im.get(t);return Im.delete(t),e}let ax=()=>location.protocol+"//"+location.host;function HE(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),mv(c,"")}return mv(n,t)+r+i}function cx(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=HE(t,location),m=n.value,_=e.value;let p=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}p=_?d.position-_.position:0}else r(f);i.forEach(v=>{v(n.value,m,{delta:p,type:Vc.pop,direction:p?p>0?mc.forward:mc.back:mc.unknown})})};function c(){o=n.value}function u(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return s.push(f),f}function l(){const{history:d}=window;d.state&&d.replaceState(ze({},d.state,{scroll:td()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:h}}function _v(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?td():null}}function ux(t){const{history:e,location:n}=window,r={value:HE(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:ax()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),n[l?"replace":"assign"](d)}}function o(c,u){const l=ze({},e.state,_v(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=ze({},i.value,e.state,{forward:c,scroll:td()});s(l.current,l,!0);const h=ze({},_v(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function lx(t){t=ex(t);const e=ux(t),n=cx(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ze({location:"",base:t,go:r,createHref:nx.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function hx(t){return typeof t=="string"||t&&typeof t=="object"}function GE(t){return typeof t=="string"||typeof t=="symbol"}const si={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},KE=Symbol("");var yv;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yv||(yv={}));function Go(t,e){return ze(new Error,{type:t,[KE]:!0},e)}function Rr(t,e){return t instanceof Error&&KE in t&&(e==null||!!(t.type&e))}const vv="[^/]+?",dx={sensitive:!1,strict:!1,start:!0,end:!0},fx=/[.+*?^${}()[\]/\\]/g;function mx(t,e){const n=ze({},dx,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(fx,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:_,optional:p,regexp:v}=d;s.push({name:m,repeatable:_,optional:p});const w=v||vv;if(w!==vv){f+=10;try{new RegExp(`(${w})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${m}" (${w}): `+T.message)}}let R=_?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(R=p&&u.length<2?`(?:/${R})`:"/"+R),p&&(R+="?"),i+=R,f+=20,p&&(f+=-8),_&&(f+=-20),w===".*"&&(f+=-50)}l.push(f)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const f=l[d]||"",m=s[d-1];h[m.name]=f&&m.repeatable?f.split("/"):f}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const f of d)if(f.type===0)l+=f.value;else if(f.type===1){const{value:m,repeatable:_,optional:p}=f,v=m in u?u[m]:"";if(Xn(v)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const w=Xn(v)?v.join("/"):v;if(!w)if(p)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);l+=w}}return l||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function px(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gx(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=px(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(wv(r))return 1;if(wv(i))return-1}return i.length-r.length}function wv(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _x={type:0,value:""},yx=/[a-zA-Z0-9_]/;function vx(t){if(!t)return[[]];if(t==="/")return[[_x]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:yx.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function wx(t,e,n){const r=mx(vx(t.path),n),i=ze(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Ix(t,e){const n=[],r=new Map;e=Ev({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const f=!d,m=bx(l);m.aliasOf=d&&d.record;const _=Ev(e,l),p=[m];if("alias"in l){const R=typeof l.alias=="string"?[l.alias]:l.alias;for(const T of R)p.push(ze({},m,{components:d?d.record.components:m.components,path:T,aliasOf:d?d.record:m}))}let v,w;for(const R of p){const{path:T}=R;if(h&&T[0]!=="/"){const k=h.record.path,x=k[k.length-1]==="/"?"":"/";R.path=h.record.path+(T&&x+T)}if(v=wx(R,h,_),d?d.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),f&&l.name&&!bv(v)&&o(l.name)),m.children){const k=m.children;for(let x=0;x<k.length;x++)s(k[x],v,d&&d.children[x])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return w?()=>{o(w)}:fc}function o(l){if(GE(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&gx(l,n[h])>=0&&(l.record.path!==n[h].record.path||!QE(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!bv(l)&&r.set(l.record.name,l)}function u(l,h){let d,f={},m,_;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw Go(1,{location:l});_=d.record.name,f=ze(Iv(h.params,d.keys.filter(w=>!w.optional).map(w=>w.name)),l.params&&Iv(l.params,d.keys.map(w=>w.name))),m=d.stringify(f)}else if("path"in l)m=l.path,d=n.find(w=>w.re.test(m)),d&&(f=d.parse(m),_=d.record.name);else{if(d=h.name?r.get(h.name):n.find(w=>w.re.test(h.path)),!d)throw Go(1,{location:l,currentLocation:h});_=d.record.name,f=ze({},h.params,l.params),m=d.stringify(f)}const p=[];let v=d;for(;v;)p.unshift(v.record),v=v.parent;return{name:_,path:m,params:f,matched:p,meta:Tx(p)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Iv(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function bx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ex(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ex(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function bv(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Tx(t){return t.reduce((e,n)=>ze(e,n.meta),{})}function Ev(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function QE(t,e){return e.children.some(n=>n===t||QE(t,n))}const YE=/#/g,Ax=/&/g,Rx=/\//g,Sx=/=/g,Px=/\?/g,XE=/\+/g,Cx=/%5B/g,kx=/%5D/g,JE=/%5E/g,xx=/%60/g,ZE=/%7B/g,Ox=/%7C/g,eT=/%7D/g,Nx=/%20/g;function sg(t){return encodeURI(""+t).replace(Ox,"|").replace(Cx,"[").replace(kx,"]")}function Dx(t){return sg(t).replace(ZE,"{").replace(eT,"}").replace(JE,"^")}function bm(t){return sg(t).replace(XE,"%2B").replace(Nx,"+").replace(YE,"%23").replace(Ax,"%26").replace(xx,"`").replace(ZE,"{").replace(eT,"}").replace(JE,"^")}function Vx(t){return bm(t).replace(Sx,"%3D")}function Mx(t){return sg(t).replace(YE,"%23").replace(Px,"%3F")}function Lx(t){return t==null?"":Mx(t).replace(Rx,"%2F")}function Jl(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Fx(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(XE," "),o=s.indexOf("="),a=Jl(o<0?s:s.slice(0,o)),c=o<0?null:Jl(s.slice(o+1));if(a in e){let u=e[a];Xn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Tv(t){let e="";for(let n in t){const r=t[n];if(n=Vx(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xn(r)?r.map(s=>s&&bm(s)):[r&&bm(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Ux(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xn(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const tT=Symbol(""),Av=Symbol(""),nd=Symbol(""),og=Symbol(""),Em=Symbol("");function Da(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Bx(t,e,n){const r=()=>{t[e].delete(n)};Yh(r),_E(r),gE(()=>{t[e].add(n)}),t[e].add(n)}function U3(t){const e=dn(tT,{}).value;e&&Bx(e,"leaveGuards",t)}function mi(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Go(4,{from:n,to:e})):h instanceof Error?a(h):hx(h)?a(Go(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function If(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if($x(a)){const u=(a.__vccOpts||a)[e];u&&i.push(mi(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=Gk(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&mi(d,n,r,s,o)()}))}}return i}function $x(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rv(t){const e=dn(nd),n=dn(og),r=de(()=>e.resolve(Te(t.to))),i=de(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Ho.bind(null,l));if(d>-1)return d;const f=Sv(c[u-2]);return u>1&&Sv(l)===f&&h[h.length-1].path!==f?h.findIndex(Ho.bind(null,c[u-2])):d}),s=de(()=>i.value>-1&&Wx(n.params,r.value.params)),o=de(()=>i.value>-1&&i.value===n.matched.length-1&&WE(n.params,r.value.params));function a(c={}){return zx(c)?e[Te(t.replace)?"replace":"push"](Te(t.to)).catch(fc):Promise.resolve()}return{route:r,href:de(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const jx=qi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rv,setup(t,{slots:e}){const n=br(Rv(t)),{options:r}=dn(nd),i=de(()=>({[Pv(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Pv(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Os("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),qx=jx;function zx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Wx(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Xn(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Sv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pv=(t,e,n)=>t??e??n,Hx=qi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=dn(Em),i=de(()=>t.route||r.value),s=dn(Av,0),o=de(()=>{let u=Te(s);const{matched:l}=i.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=de(()=>i.value.matched[o.value]);Oo(Av,de(()=>o.value+1)),Oo(tT,a),Oo(Em,i);const c=Pt();return An(()=>[c.value,a.value,t.name],([u,l,h],[d,f,m])=>{l&&(l.instances[h]=u,f&&f!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),u&&l&&(!f||!Ho(l,f)||!d)&&(l.enterCallbacks[h]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=i.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Cv(n.default,{Component:d,route:u});const f=h.props[l],m=f?f===!0?u.params:typeof f=="function"?f(u):f:null,p=Os(d,ze({},m,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Cv(n.default,{Component:p,route:u})||p}}});function Cv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gx=Hx;function Kx(t){const e=Ix(t.routes,t),n=t.parseQuery||Fx,r=t.stringifyQuery||Tv,i=t.history,s=Da(),o=Da(),a=Da(),c=tE(si);let u=si;vo&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=vf.bind(null,S=>""+S),h=vf.bind(null,Lx),d=vf.bind(null,Jl);function f(S,B){let q,ee;return GE(S)?(q=e.getRecordMatcher(S),ee=B):ee=S,e.addRoute(ee,q)}function m(S){const B=e.getRecordMatcher(S);B&&e.removeRoute(B)}function _(){return e.getRoutes().map(S=>S.record)}function p(S){return!!e.getRecordMatcher(S)}function v(S,B){if(B=ze({},B||c.value),typeof S=="string"){const E=wf(n,S,B.path),C=e.resolve({path:E.path},B),N=i.createHref(E.fullPath);return ze(E,C,{params:d(C.params),hash:Jl(E.hash),redirectedFrom:void 0,href:N})}let q;if("path"in S)q=ze({},S,{path:wf(n,S.path,B.path).path});else{const E=ze({},S.params);for(const C in E)E[C]==null&&delete E[C];q=ze({},S,{params:h(E)}),B.params=h(B.params)}const ee=e.resolve(q,B),Re=S.hash||"";ee.params=l(d(ee.params));const g=Yk(r,ze({},S,{hash:Dx(Re),path:ee.path})),y=i.createHref(g);return ze({fullPath:g,hash:Re,query:r===Tv?Ux(S.query):S.query||{}},ee,{redirectedFrom:void 0,href:y})}function w(S){return typeof S=="string"?wf(n,S,c.value.path):ze({},S)}function R(S,B){if(u!==S)return Go(8,{from:B,to:S})}function T(S){return W(S)}function k(S){return T(ze(w(S),{replace:!0}))}function x(S){const B=S.matched[S.matched.length-1];if(B&&B.redirect){const{redirect:q}=B;let ee=typeof q=="function"?q(S):q;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=w(ee):{path:ee},ee.params={}),ze({query:S.query,hash:S.hash,params:"path"in ee?{}:S.params},ee)}}function W(S,B){const q=u=v(S),ee=c.value,Re=S.state,g=S.force,y=S.replace===!0,E=x(q);if(E)return W(ze(w(E),{state:typeof E=="object"?ze({},Re,E.state):Re,force:g,replace:y}),B||q);const C=q;C.redirectedFrom=B;let N;return!g&&Xk(r,ee,q)&&(N=Go(16,{to:C,from:ee}),sn(ee,ee,!0,!1)),(N?Promise.resolve(N):te(C,ee)).catch(L=>Rr(L)?Rr(L,2)?L:rn(L):me(L,C,ee)).then(L=>{if(L){if(Rr(L,2))return W(ze({replace:y},w(L.to),{state:typeof L.to=="object"?ze({},Re,L.to.state):Re,force:g}),B||C)}else L=Y(C,ee,!0,y,Re);return Pe(C,ee,L),L})}function O(S,B){const q=R(S,B);return q?Promise.reject(q):Promise.resolve()}function U(S){const B=tr.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(S):S()}function te(S,B){let q;const[ee,Re,g]=Qx(S,B);q=If(ee.reverse(),"beforeRouteLeave",S,B);for(const E of ee)E.leaveGuards.forEach(C=>{q.push(mi(C,S,B))});const y=O.bind(null,S,B);return q.push(y),ue(q).then(()=>{q=[];for(const E of s.list())q.push(mi(E,S,B));return q.push(y),ue(q)}).then(()=>{q=If(Re,"beforeRouteUpdate",S,B);for(const E of Re)E.updateGuards.forEach(C=>{q.push(mi(C,S,B))});return q.push(y),ue(q)}).then(()=>{q=[];for(const E of g)if(E.beforeEnter)if(Xn(E.beforeEnter))for(const C of E.beforeEnter)q.push(mi(C,S,B));else q.push(mi(E.beforeEnter,S,B));return q.push(y),ue(q)}).then(()=>(S.matched.forEach(E=>E.enterCallbacks={}),q=If(g,"beforeRouteEnter",S,B),q.push(y),ue(q))).then(()=>{q=[];for(const E of o.list())q.push(mi(E,S,B));return q.push(y),ue(q)}).catch(E=>Rr(E,8)?E:Promise.reject(E))}function Pe(S,B,q){a.list().forEach(ee=>U(()=>ee(S,B,q)))}function Y(S,B,q,ee,Re){const g=R(S,B);if(g)return g;const y=B===si,E=vo?history.state:{};q&&(ee||y?i.replace(S.fullPath,ze({scroll:y&&E&&E.scroll},Re)):i.push(S.fullPath,Re)),c.value=S,sn(S,B,q,y),rn()}let ge;function Be(){ge||(ge=i.listen((S,B,q)=>{if(!ie.listening)return;const ee=v(S),Re=x(ee);if(Re){W(ze(Re,{replace:!0}),ee).catch(fc);return}u=ee;const g=c.value;vo&&sx(gv(g.fullPath,q.delta),td()),te(ee,g).catch(y=>Rr(y,12)?y:Rr(y,2)?(W(y.to,ee).then(E=>{Rr(E,20)&&!q.delta&&q.type===Vc.pop&&i.go(-1,!1)}).catch(fc),Promise.reject()):(q.delta&&i.go(-q.delta,!1),me(y,ee,g))).then(y=>{y=y||Y(ee,g,!1),y&&(q.delta&&!Rr(y,8)?i.go(-q.delta,!1):q.type===Vc.pop&&Rr(y,20)&&i.go(-1,!1)),Pe(ee,g,y)}).catch(fc)}))}let $e=Da(),ne=Da(),Ae;function me(S,B,q){rn(S);const ee=ne.list();return ee.length?ee.forEach(Re=>Re(S,B,q)):console.error(S),Promise.reject(S)}function vt(){return Ae&&c.value!==si?Promise.resolve():new Promise((S,B)=>{$e.add([S,B])})}function rn(S){return Ae||(Ae=!S,Be(),$e.list().forEach(([B,q])=>S?q(S):B()),$e.reset()),S}function sn(S,B,q,ee){const{scrollBehavior:Re}=t;if(!vo||!Re)return Promise.resolve();const g=!q&&ox(gv(S.fullPath,0))||(ee||!q)&&history.state&&history.state.scroll||null;return rr().then(()=>Re(S,B,g)).then(y=>y&&ix(y)).catch(y=>me(y,S,B))}const jt=S=>i.go(S);let ft;const tr=new Set,ie={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:p,getRoutes:_,resolve:v,options:t,push:T,replace:k,go:jt,back:()=>jt(-1),forward:()=>jt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:vt,install(S){const B=this;S.component("RouterLink",qx),S.component("RouterView",Gx),S.config.globalProperties.$router=B,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>Te(c)}),vo&&!ft&&c.value===si&&(ft=!0,T(i.location).catch(Re=>{}));const q={};for(const Re in si)Object.defineProperty(q,Re,{get:()=>c.value[Re],enumerable:!0});S.provide(nd,B),S.provide(og,Xb(q)),S.provide(Em,c);const ee=S.unmount;tr.add(S),S.unmount=function(){tr.delete(S),tr.size<1&&(u=si,ge&&ge(),ge=null,c.value=si,ft=!1,Ae=!1),ee()}}};function ue(S){return S.reduce((B,q)=>B.then(()=>U(q)),Promise.resolve())}return ie}function Qx(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ho(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ho(u,c))||i.push(c))}return[n,r,i]}function Yx(){return dn(nd)}function B3(){return dn(og)}/**
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
 */const nT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Jx;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zx=function(t){const e=nT(t);return rT.encodeByteArray(e,!0)},Zl=function(t){return Zx(t).replace(/\./g,"")},iT=function(t){try{return rT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function eh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eO(n)||(t[n]=eh(t[n],e[n]));return t}function eO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=()=>tO().__FIREBASE_DEFAULTS__,rO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&iT(t[1]);return e&&JSON.parse(e)},ag=()=>{try{return nO()||rO()||iO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sT=()=>{var t;return(t=ag())===null||t===void 0?void 0:t.config},sO=t=>{var e;return(e=ag())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class oO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function oT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Zl(JSON.stringify(n)),Zl(JSON.stringify(o)),a].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function rd(){var t;const e=(t=ag())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cO(){return typeof self=="object"&&self.self===self}function aT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cT(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uO(){return!rd()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mc(){try{return typeof indexedDB=="object"}catch{return!1}}function lO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const hO="FirebaseError";class en extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hO,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new en(i,a,r)}}function dO(t,e){return t.replace(fO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fO=/\{\$([^}]+)}/g;/**
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
 */function kv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function mO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tm(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xv(s)&&xv(o)){if(!Tm(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xv(t){return t!==null&&typeof t=="object"}/**
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
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ao(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function uT(t,e){const n=new pO(t,e);return n.subscribe.bind(n)}class pO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bf),i.error===void 0&&(i.error=bf),i.complete===void 0&&(i.complete=bf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bf(){}/**
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
 */function oe(t){return t&&t._delegate?t._delegate:t}class jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class _O{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vO(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yO(t){return t===is?void 0:t}function vO(t){return t.instantiationMode==="EAGER"}/**
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
 */class wO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _O(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const ug=[];var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const lT={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},IO=xe.INFO,bO={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},EO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class id{constructor(e){this.name=e,this._logLevel=IO,this._logHandler=EO,this._userLogHandler=null,ug.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}function TO(t){ug.forEach(e=>{e.setLogLevel(t)})}function AO(t,e){for(const n of ug){let r=null;e&&e.level&&(r=lT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(r??i.logLevel)&&t({level:xe[s].toLowerCase(),message:a,args:o,type:i.name})}}}const RO=(t,e)=>e.some(n=>t instanceof n);let Ov,Nv;function SO(){return Ov||(Ov=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PO(){return Nv||(Nv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hT=new WeakMap,Am=new WeakMap,dT=new WeakMap,Ef=new WeakMap,lg=new WeakMap;function CO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ti(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hT.set(n,t)}).catch(()=>{}),lg.set(e,t),e}function kO(t){if(Am.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Am.set(t,e)}let Rm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Am.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xO(t){Rm=t(Rm)}function OO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tf(this),e,...n);return dT.set(r,e.sort?e.sort():[e]),Ti(r)}:PO().includes(t)?function(...e){return t.apply(Tf(this),e),Ti(hT.get(this))}:function(...e){return Ti(t.apply(Tf(this),e))}}function NO(t){return typeof t=="function"?OO(t):(t instanceof IDBTransaction&&kO(t),RO(t,SO())?new Proxy(t,Rm):t)}function Ti(t){if(t instanceof IDBRequest)return CO(t);if(Ef.has(t))return Ef.get(t);const e=NO(t);return e!==t&&(Ef.set(t,e),lg.set(e,t)),e}const Tf=t=>lg.get(t);function DO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ti(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ti(o.result),c.oldVersion,c.newVersion,Ti(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const VO=["get","getKey","getAll","getAllKeys","count"],MO=["put","add","delete","clear"],Af=new Map;function Dv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Af.get(e))return Af.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||VO.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Af.set(e,s),s}xO(t=>({...t,get:(e,n,r)=>Dv(e,n)||t.get(e,n,r),has:(e,n)=>!!Dv(e,n)||t.has(e,n)}));/**
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
 */class LO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sm="@firebase/app",Vv="0.9.22";/**
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
 */const Ns=new id("@firebase/app"),UO="@firebase/app-compat",BO="@firebase/analytics-compat",$O="@firebase/analytics",jO="@firebase/app-check-compat",qO="@firebase/app-check",zO="@firebase/auth",WO="@firebase/auth-compat",HO="@firebase/database",GO="@firebase/database-compat",KO="@firebase/functions",QO="@firebase/functions-compat",YO="@firebase/installations",XO="@firebase/installations-compat",JO="@firebase/messaging",ZO="@firebase/messaging-compat",eN="@firebase/performance",tN="@firebase/performance-compat",nN="@firebase/remote-config",rN="@firebase/remote-config-compat",iN="@firebase/storage",sN="@firebase/storage-compat",oN="@firebase/firestore",aN="@firebase/firestore-compat",cN="firebase",uN="10.5.2";/**
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
 */const Si="[DEFAULT]",lN={[Sm]:"fire-core",[UO]:"fire-core-compat",[$O]:"fire-analytics",[BO]:"fire-analytics-compat",[qO]:"fire-app-check",[jO]:"fire-app-check-compat",[zO]:"fire-auth",[WO]:"fire-auth-compat",[HO]:"fire-rtdb",[GO]:"fire-rtdb-compat",[KO]:"fire-fn",[QO]:"fire-fn-compat",[YO]:"fire-iid",[XO]:"fire-iid-compat",[JO]:"fire-fcm",[ZO]:"fire-fcm-compat",[eN]:"fire-perf",[tN]:"fire-perf-compat",[nN]:"fire-rc",[rN]:"fire-rc-compat",[iN]:"fire-gcs",[sN]:"fire-gcs-compat",[oN]:"fire-fst",[aN]:"fire-fst-compat","fire-js":"fire-js",[cN]:"fire-js-all"};/**
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
 */const Pi=new Map,Lc=new Map;function th(t,e){try{t.container.addComponent(e)}catch(n){Ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fT(t,e){t.container.addOrOverwriteComponent(e)}function $r(t){const e=t.name;if(Lc.has(e))return Ns.debug(`There were multiple attempts to register component ${e}.`),!1;Lc.set(e,t);for(const n of Pi.values())th(n,t);return!0}function mT(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hN(t,e,n=Si){mT(t,e).clearInstance(n)}function dN(){Lc.clear()}/**
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
 */const fN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lr=new Xs("app","Firebase",fN);/**
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
 */let mN=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}};/**
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
 */const Qr=uN;function hg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Si,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Lr.create("bad-app-name",{appName:String(i)});if(n||(n=sT()),!n)throw Lr.create("no-options");const s=Pi.get(i);if(s){if(Tm(n,s.options)&&Tm(r,s.config))return s;throw Lr.create("duplicate-app",{appName:i})}const o=new wO(i);for(const c of Lc.values())o.addComponent(c);const a=new mN(n,r,o);return Pi.set(i,a),a}function pN(t=Si){const e=Pi.get(t);if(!e&&t===Si&&sT())return hg();if(!e)throw Lr.create("no-app",{appName:t});return e}function gN(){return Array.from(Pi.values())}async function pT(t){const e=t.name;Pi.has(e)&&(Pi.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function $n(t,e,n){var r;let i=(r=lN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ns.warn(a.join(" "));return}$r(new jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function gT(t,e){if(t!==null&&typeof t!="function")throw Lr.create("invalid-log-argument");AO(t,e)}function _T(t){TO(t)}/**
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
 */const _N="firebase-heartbeat-database",yN=1,Fc="firebase-heartbeat-store";let Rf=null;function yT(){return Rf||(Rf=DO(_N,yN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fc)}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),Rf}async function vN(t){try{return await(await yT()).transaction(Fc).objectStore(Fc).get(vT(t))}catch(e){if(e instanceof en)Ns.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ns.warn(n.message)}}}async function Mv(t,e){try{const r=(await yT()).transaction(Fc,"readwrite");await r.objectStore(Fc).put(e,vT(t)),await r.done}catch(n){if(n instanceof en)Ns.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ns.warn(r.message)}}}function vT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wN=1024,IN=30*24*60*60*1e3;class bN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=IN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lv(),{heartbeatsToSend:n,unsentEntries:r}=EN(this._heartbeatsCache.heartbeats),i=Zl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lv(){return new Date().toISOString().substring(0,10)}function EN(t,e=wN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mc()?lO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fv(t){return Zl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function AN(t){$r(new jn("platform-logger",e=>new LO(e),"PRIVATE")),$r(new jn("heartbeat",e=>new bN(e),"PRIVATE")),$n(Sm,Vv,t),$n(Sm,Vv,"esm2017"),$n("fire-js","")}AN("");const RN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:en,SDK_VERSION:Qr,_DEFAULT_ENTRY_NAME:Si,_addComponent:th,_addOrOverwriteComponent:fT,_apps:Pi,_clearComponents:dN,_components:Lc,_getProvider:mT,_registerComponent:$r,_removeServiceInstance:hN,deleteApp:pT,getApp:pN,getApps:gN,initializeApp:hg,onLog:gT,registerVersion:$n,setLogLevel:_T},Symbol.toStringTag,{value:"Module"}));/**
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
 */class SN{constructor(e,n){this._delegate=e,this.firebase=n,th(e,new jn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),pT(this._delegate)))}_getService(e,n=Si){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Si){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){th(this._delegate,e)}_addOrOverwriteComponent(e){fT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const PN={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Uv=new Xs("app-compat","Firebase",PN);/**
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
 */function CN(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:$n,setLogLevel:_T,onLog:gT,apps:null,SDK_VERSION:Qr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:RN}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Si,!kv(e,u))throw Uv.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const h=hg(u,l);if(kv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if($r(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Uv.create("invalid-app-argument",{appName:l});return f[h]()};u.serviceProps!==void 0&&eh(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,l).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
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
 */function wT(){const t=CN(SN);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:wT,extendNamespace:e,createSubscribe:uT,ErrorFactory:Xs,deepExtend:eh});function e(n){eh(t,n)}return t}const kN=wT();/**
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
 */const Bv=new id("@firebase/app-compat"),xN="@firebase/app-compat",ON="0.2.22";/**
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
 */function NN(t){$n(xN,ON,t)}/**
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
 */if(cO()&&self.firebase!==void 0){Bv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Bv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const pe=kN;NN();var DN="firebase",VN="10.5.2";/**
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
 */pe.registerVersion(DN,VN,"app-compat");var MN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,dg=dg||{},ve=MN||self;function sd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function wu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LN(t){return Object.prototype.hasOwnProperty.call(t,Sf)&&t[Sf]||(t[Sf]=++FN)}var Sf="closure_uid_"+(1e9*Math.random()>>>0),FN=0;function UN(t,e,n){return t.call.apply(t.bind,arguments)}function BN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function tn(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tn=UN:tn=BN,tn.apply(null,arguments)}function il(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ut(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function zi(){this.s=this.s,this.o=this.o}var $N=0;zi.prototype.s=!1;zi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),$N!=0)&&LN(this)};zi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const IT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function $v(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(sd(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function nn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nn.prototype.h=function(){this.defaultPrevented=!0};var jN=function(){if(!ve.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ve.addEventListener("test",()=>{},e),ve.removeEventListener("test",()=>{},e)}catch{}return t}();function Uc(t){return/^[\s\xa0]*$/.test(t)}function od(){var t=ve.navigator;return t&&(t=t.userAgent)?t:""}function ar(t){return od().indexOf(t)!=-1}function mg(t){return mg[" "](t),t}mg[" "]=function(){};function qN(t,e){var n=VD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var zN=ar("Opera"),Ko=ar("Trident")||ar("MSIE"),bT=ar("Edge"),Pm=bT||Ko,ET=ar("Gecko")&&!(od().toLowerCase().indexOf("webkit")!=-1&&!ar("Edge"))&&!(ar("Trident")||ar("MSIE"))&&!ar("Edge"),WN=od().toLowerCase().indexOf("webkit")!=-1&&!ar("Edge");function TT(){var t=ve.document;return t?t.documentMode:void 0}var Cm;e:{var Pf="",Cf=function(){var t=od();if(ET)return/rv:([^\);]+)(\)|;)/.exec(t);if(bT)return/Edge\/([\d\.]+)/.exec(t);if(Ko)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(WN)return/WebKit\/(\S+)/.exec(t);if(zN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cf&&(Pf=Cf?Cf[1]:""),Ko){var kf=TT();if(kf!=null&&kf>parseFloat(Pf)){Cm=String(kf);break e}}Cm=Pf}var km;if(ve.document&&Ko){var jv=TT();km=jv||parseInt(Cm,10)||void 0}else km=void 0;var HN=km;function Bc(t,e){if(nn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ET){e:{try{mg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:GN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Bc.$.h.call(this)}}Ut(Bc,nn);var GN={2:"touch",3:"pen",4:"mouse"};Bc.prototype.h=function(){Bc.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Iu="closure_listenable_"+(1e6*Math.random()|0),KN=0;function QN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++KN,this.fa=this.ia=!1}function ad(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function pg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function YN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function AT(t){const e={};for(const n in t)e[n]=t[n];return e}const qv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function RT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<qv.length;s++)n=qv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function cd(t){this.src=t,this.g={},this.h=0}cd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Om(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new QN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function xm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=IT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ad(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Om(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var gg="closure_lm_"+(1e6*Math.random()|0),xf={};function ST(t,e,n,r,i){if(r&&r.once)return CT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ST(t,e[s],n,r,i);return null}return n=vg(n),t&&t[Iu]?t.O(e,n,wu(r)?!!r.capture:!!r,i):PT(t,e,n,!1,r,i)}function PT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=wu(i)?!!i.capture:!!i,a=yg(t);if(a||(t[gg]=a=new cd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=XN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)jN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(xT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function XN(){function t(n){return e.call(t.src,t.listener,n)}const e=JN;return t}function CT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)CT(t,e[s],n,r,i);return null}return n=vg(n),t&&t[Iu]?t.P(e,n,wu(r)?!!r.capture:!!r,i):PT(t,e,n,!0,r,i)}function kT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)kT(t,e[s],n,r,i);else r=wu(r)?!!r.capture:!!r,n=vg(n),t&&t[Iu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Om(s,n,r,i),-1<n&&(ad(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=yg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Om(e,n,r,i)),(n=-1<t?e[t]:null)&&_g(n))}function _g(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Iu])xm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(xT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yg(e))?(xm(n,t),n.h==0&&(n.src=null,e[gg]=null)):ad(t)}}}function xT(t){return t in xf?xf[t]:xf[t]="on"+t}function JN(t,e){if(t.fa)t=!0;else{e=new Bc(e,this);var n=t.listener,r=t.la||t.src;t.ia&&_g(t),t=n.call(r,e)}return t}function yg(t){return t=t[gg],t instanceof cd?t:null}var Of="__closure_events_fn_"+(1e9*Math.random()>>>0);function vg(t){return typeof t=="function"?t:(t[Of]||(t[Of]=function(e){return t.handleEvent(e)}),t[Of])}function Ft(){zi.call(this),this.i=new cd(this),this.S=this,this.J=null}Ut(Ft,zi);Ft.prototype[Iu]=!0;Ft.prototype.removeEventListener=function(t,e,n,r){kT(this,t,e,n,r)};function Kt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new nn(e,t);else if(e instanceof nn)e.target=e.target||t;else{var i=e;e=new nn(r,t),RT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=sl(o,r,!0,e)&&i}if(o=e.g=t,i=sl(o,r,!0,e)&&i,i=sl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=sl(o,r,!1,e)&&i}Ft.prototype.N=function(){if(Ft.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ad(n[r]);delete t.g[e],t.h--}}this.J=null};Ft.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ft.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function sl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&xm(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var wg=ve.JSON.stringify;class ZN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function eD(){var t=Ig;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tD{constructor(){this.h=this.g=null}add(e,n){const r=OT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var OT=new ZN(()=>new nD,t=>t.reset());class nD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function iD(t){ve.setTimeout(()=>{throw t},0)}let $c,jc=!1,Ig=new tD,NT=()=>{const t=ve.Promise.resolve(void 0);$c=()=>{t.then(sD)}};var sD=()=>{for(var t;t=eD();){try{t.h.call(t.g)}catch(n){iD(n)}var e=OT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jc=!1};function ud(t,e){Ft.call(this),this.h=t||1,this.g=e||ve,this.j=tn(this.qb,this),this.l=Date.now()}Ut(ud,Ft);K=ud.prototype;K.ga=!1;K.T=null;K.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Kt(this,"tick"),this.ga&&(bg(this),this.start()))}};K.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}K.N=function(){ud.$.N.call(this),bg(this),delete this.g};function Eg(t,e,n){if(typeof t=="function")n&&(t=tn(t,n));else if(t&&typeof t.handleEvent=="function")t=tn(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ve.setTimeout(t,e||0)}function DT(t){t.g=Eg(()=>{t.g=null,t.i&&(t.i=!1,DT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class oD extends zi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:DT(this)}N(){super.N(),this.g&&(ve.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qc(t){zi.call(this),this.h=t,this.g={}}Ut(qc,zi);var zv=[];function VT(t,e,n,r){Array.isArray(n)||(n&&(zv[0]=n.toString()),n=zv);for(var i=0;i<n.length;i++){var s=ST(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function MT(t){pg(t.g,function(e,n){this.g.hasOwnProperty(n)&&_g(e)},t),t.g={}}qc.prototype.N=function(){qc.$.N.call(this),MT(this)};qc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ld(){this.g=!0}ld.prototype.Ea=function(){this.g=!1};function aD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function cD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ro(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+lD(t,n)+(r?" "+r:"")})}function uD(t,e){t.info(function(){return"TIMEOUT: "+e})}ld.prototype.info=function(){};function lD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wg(n)}catch{return e}}var Js={},Wv=null;function hd(){return Wv=Wv||new Ft}Js.Ta="serverreachability";function LT(t){nn.call(this,Js.Ta,t)}Ut(LT,nn);function zc(t){const e=hd();Kt(e,new LT(e))}Js.STAT_EVENT="statevent";function FT(t,e){nn.call(this,Js.STAT_EVENT,t),this.stat=e}Ut(FT,nn);function hn(t){const e=hd();Kt(e,new FT(e,t))}Js.Ua="timingevent";function UT(t,e){nn.call(this,Js.Ua,t),this.size=e}Ut(UT,nn);function bu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ve.setTimeout(function(){t()},e)}var dd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},BT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Tg(){}Tg.prototype.h=null;function Hv(t){return t.h||(t.h=t.i())}function $T(){}var Eu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ag(){nn.call(this,"d")}Ut(Ag,nn);function Rg(){nn.call(this,"c")}Ut(Rg,nn);var Nm;function fd(){}Ut(fd,Tg);fd.prototype.g=function(){return new XMLHttpRequest};fd.prototype.i=function(){return{}};Nm=new fd;function Tu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new qc(this),this.P=hD,t=Pm?125:void 0,this.V=new ud(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new jT}function jT(){this.i=null,this.g="",this.h=!1}var hD=45e3,Dm={},nh={};K=Tu.prototype;K.setTimeout=function(t){this.P=t};function Vm(t,e,n){t.L=1,t.v=pd(jr(e)),t.s=n,t.S=!0,qT(t,null)}function qT(t,e){t.G=Date.now(),Au(t),t.A=jr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),XT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new jT,t.g=y0(t.l,n?e:null,!t.s),0<t.O&&(t.M=new oD(tn(t.Pa,t,t.g),t.O)),VT(t.U,t.g,"readystatechange",t.nb),e=t.I?AT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),zc(),aD(t.j,t.u,t.A,t.m,t.W,t.s)}K.nb=function(t){t=t.target;const e=this.M;e&&fr(t)==3?e.l():this.Pa(t)};K.Pa=function(t){try{if(t==this.g)e:{const l=fr(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Pm||this.g&&(this.h.h||this.g.ja()||Yv(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?zc(3):zc(2)),md(this);var n=this.g.da();this.ca=n;t:if(zT(this)){var r=Yv(this.g);t="";var i=r.length,s=fr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gs(this),pc(this);var o="";break t}this.h.i=new ve.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,cD(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Uc(a)){var u=a;break t}}u=null}if(n=u)Ro(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mm(this,n);else{this.i=!1,this.o=3,hn(12),gs(this),pc(this);break e}}this.S?(WT(this,l,o),Pm&&this.i&&l==3&&(VT(this.U,this.V,"tick",this.mb),this.V.start())):(Ro(this.j,this.m,o,null),Mm(this,o)),l==4&&gs(this),this.i&&!this.J&&(l==4?m0(this.l,this):(this.i=!1,Au(this)))}else OD(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,hn(12)):(this.o=0,hn(13)),gs(this),pc(this)}}}catch{}finally{}};function zT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function WT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=dD(t,n),i==nh){e==4&&(t.o=4,hn(14),r=!1),Ro(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Dm){t.o=4,hn(15),Ro(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ro(t.j,t.m,i,null),Mm(t,i);zT(t)&&i!=nh&&i!=Dm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,hn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Og(e),e.M=!0,hn(11))):(Ro(t.j,t.m,n,"[Invalid Chunked Response]"),gs(t),pc(t))}K.mb=function(){if(this.g){var t=fr(this.g),e=this.g.ja();this.C<e.length&&(md(this),WT(this,t,e),this.i&&t!=4&&Au(this))}};function dD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?nh:(n=Number(e.substring(n,r)),isNaN(n)?Dm:(r+=1,r+n>e.length?nh:(e=e.slice(r,r+n),t.C=r+n,e)))}K.cancel=function(){this.J=!0,gs(this)};function Au(t){t.Y=Date.now()+t.P,HT(t,t.P)}function HT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bu(tn(t.lb,t),e)}function md(t){t.B&&(ve.clearTimeout(t.B),t.B=null)}K.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(uD(this.j,this.A),this.L!=2&&(zc(),hn(17)),gs(this),this.o=2,pc(this)):HT(this,this.Y-t)};function pc(t){t.l.H==0||t.J||m0(t.l,t)}function gs(t){md(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,bg(t.V),MT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Mm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Lm(n.i,t))){if(!t.K&&Lm(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)sh(n),yd(n);else break e;xg(n),hn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=bu(tn(n.ib,n),6e3));if(1>=e0(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else _s(n,11)}else if((t.K||n.g==t)&&sh(n),!Uc(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Sg(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,tt(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=_0(r,r.J?r.pa:null,r.Y),o.K){t0(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(md(a),Au(a)),r.g=o}else d0(r);0<n.j.length&&vd(n)}else u[0]!="stop"&&u[0]!="close"||_s(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?_s(n,7):kg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}zc(4)}catch{}}function fD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(sd(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function mD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(sd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function GT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(sd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=mD(t),r=fD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var KT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function As(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof As){this.h=t.h,rh(this,t.j),this.s=t.s,this.g=t.g,ih(this,t.m),this.l=t.l;var e=t.i,n=new Wc;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Gv(this,n),this.o=t.o}else t&&(e=String(t).match(KT))?(this.h=!1,rh(this,e[1]||"",!0),this.s=Ja(e[2]||""),this.g=Ja(e[3]||"",!0),ih(this,e[4]),this.l=Ja(e[5]||"",!0),Gv(this,e[6]||"",!0),this.o=Ja(e[7]||"")):(this.h=!1,this.i=new Wc(null,this.h))}As.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Za(e,Kv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Za(e,Kv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Za(n,n.charAt(0)=="/"?yD:_D,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Za(n,wD)),t.join("")};function jr(t){return new As(t)}function rh(t,e,n){t.j=n?Ja(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ih(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Gv(t,e,n){e instanceof Wc?(t.i=e,ID(t.i,t.h)):(n||(e=Za(e,vD)),t.i=new Wc(e,t.h))}function tt(t,e,n){t.i.set(e,n)}function pd(t){return tt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ja(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Za(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Kv=/[#\/\?@]/g,_D=/[#\?:]/g,yD=/[#\?]/g,vD=/[#\?@]/g,wD=/#/g;function Wc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Wi(t){t.g||(t.g=new Map,t.h=0,t.i&&pD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=Wc.prototype;K.add=function(t,e){Wi(this),this.i=null,t=pa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function QT(t,e){Wi(t),e=pa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function YT(t,e){return Wi(t),e=pa(t,e),t.g.has(e)}K.forEach=function(t,e){Wi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};K.ta=function(){Wi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};K.Z=function(t){Wi(this);let e=[];if(typeof t=="string")YT(this,t)&&(e=e.concat(this.g.get(pa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return Wi(this),this.i=null,t=pa(this,t),YT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function XT(t,e,n){QT(t,e),0<n.length&&(t.i=null,t.g.set(pa(t,e),fg(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function pa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ID(t,e){e&&!t.j&&(Wi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(QT(this,r),XT(this,i,n))},t)),t.j=e}var bD=class{constructor(t,e){this.g=t,this.map=e}};function JT(t){this.l=t||ED,ve.PerformanceNavigationTiming?(t=ve.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ve.g&&ve.g.Ka&&ve.g.Ka()&&ve.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ED=10;function ZT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function e0(t){return t.h?1:t.g?t.g.size:0}function Lm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sg(t,e){t.g?t.g.add(e):t.h=e}function t0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}JT.prototype.cancel=function(){if(this.i=n0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function n0(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return fg(t.i)}var TD=class{stringify(t){return ve.JSON.stringify(t,void 0)}parse(t){return ve.JSON.parse(t,void 0)}};function AD(){this.g=new TD}function RD(t,e,n){const r=n||"";try{GT(t,function(i,s){let o=i;wu(i)&&(o=wg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function SD(t,e){const n=new ld;if(ve.Image){const r=new Image;r.onload=il(ol,n,r,"TestLoadImage: loaded",!0,e),r.onerror=il(ol,n,r,"TestLoadImage: error",!1,e),r.onabort=il(ol,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=il(ol,n,r,"TestLoadImage: timeout",!1,e),ve.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ol(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ru(t){this.l=t.ec||null,this.j=t.ob||!1}Ut(Ru,Tg);Ru.prototype.g=function(){return new gd(this.l,this.j)};Ru.prototype.i=function(t){return function(){return t}}({});function gd(t,e){Ft.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Pg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ut(gd,Ft);var Pg=0;K=gd.prototype;K.open=function(t,e){if(this.readyState!=Pg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Hc(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ve).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Su(this)),this.readyState=Pg};K.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Hc(this)),this.g&&(this.readyState=3,Hc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ve.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;r0(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function r0(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}K.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Su(this):Hc(this),this.readyState==3&&r0(this)}};K.Za=function(t){this.g&&(this.response=this.responseText=t,Su(this))};K.Ya=function(t){this.g&&(this.response=t,Su(this))};K.ka=function(){this.g&&Su(this)};function Su(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Hc(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Hc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var PD=ve.JSON.parse;function gt(t){Ft.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=i0,this.L=this.M=!1}Ut(gt,Ft);var i0="",CD=/^https?$/i,kD=["POST","PUT"];K=gt.prototype;K.Oa=function(t){this.M=t};K.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nm.g(),this.C=this.u?Hv(this.u):Hv(Nm),this.g.onreadystatechange=tn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Qv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ve.FormData&&t instanceof ve.FormData,!(0<=IT(kD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{a0(this),0<this.B&&((this.L=xD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tn(this.ua,this)):this.A=Eg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Qv(this,s)}};function xD(t){return Ko&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.ua=function(){typeof dg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Kt(this,"timeout"),this.abort(8))};function Qv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,s0(t),_d(t)}function s0(t){t.F||(t.F=!0,Kt(t,"complete"),Kt(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Kt(this,"complete"),Kt(this,"abort"),_d(this))};K.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_d(this,!0)),gt.$.N.call(this)};K.La=function(){this.s||(this.G||this.v||this.l?o0(this):this.kb())};K.kb=function(){o0(this)};function o0(t){if(t.h&&typeof dg<"u"&&(!t.C[1]||fr(t)!=4||t.da()!=2)){if(t.v&&fr(t)==4)Eg(t.La,0,t);else if(Kt(t,"readystatechange"),fr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(KT)[1]||null;!i&&ve.self&&ve.self.location&&(i=ve.self.location.protocol.slice(0,-1)),r=!CD.test(i?i.toLowerCase():"")}n=r}if(n)Kt(t,"complete"),Kt(t,"success");else{t.m=6;try{var s=2<fr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",s0(t)}}finally{_d(t)}}}}function _d(t,e){if(t.g){a0(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Kt(t,"ready");try{n.onreadystatechange=r}catch{}}}function a0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ve.clearTimeout(t.A),t.A=null)}K.isActive=function(){return!!this.g};function fr(t){return t.g?t.g.readyState:0}K.da=function(){try{return 2<fr(this)?this.g.status:-1}catch{return-1}};K.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),PD(e)}};function Yv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case i0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function OD(t){const e={};t=(t.g&&2<=fr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Uc(t[r]))continue;var n=rD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}YN(e,function(r){return r.join(", ")})}K.Ia=function(){return this.m};K.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function c0(t){let e="";return pg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Cg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=c0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):tt(t,e,n))}function Va(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function u0(t){this.Ga=0,this.j=[],this.l=new ld,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Va("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Va("baseRetryDelayMs",5e3,t),this.hb=Va("retryDelaySeedMs",1e4,t),this.eb=Va("forwardChannelMaxRetries",2,t),this.xa=Va("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new JT(t&&t.concurrentRequestLimit),this.Ja=new AD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}K=u0.prototype;K.ra=8;K.H=1;function kg(t){if(l0(t),t.H==3){var e=t.W++,n=jr(t.I);if(tt(n,"SID",t.K),tt(n,"RID",e),tt(n,"TYPE","terminate"),Pu(t,n),e=new Tu(t,t.l,e),e.L=2,e.v=pd(jr(n)),n=!1,ve.navigator&&ve.navigator.sendBeacon)try{n=ve.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ve.Image&&(new Image().src=e.v,n=!0),n||(e.g=y0(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Au(e)}g0(t)}function yd(t){t.g&&(Og(t),t.g.cancel(),t.g=null)}function l0(t){yd(t),t.u&&(ve.clearTimeout(t.u),t.u=null),sh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ve.clearTimeout(t.m),t.m=null)}function vd(t){if(!ZT(t.i)&&!t.m){t.m=!0;var e=t.Na;$c||NT(),jc||($c(),jc=!0),Ig.add(e,t),t.C=0}}function ND(t,e){return e0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=bu(tn(t.Na,t,e),p0(t,t.C)),t.C++,!0)}K.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Tu(this,this.l,t);let s=this.s;if(this.U&&(s?(s=AT(s),RT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=h0(this,i,e),n=jr(this.I),tt(n,"RID",t),tt(n,"CVER",22),this.F&&tt(n,"X-HTTP-Session-Id",this.F),Pu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(c0(s)))+"&"+e:this.o&&Cg(n,this.o,s)),Sg(this.i,i),this.bb&&tt(n,"TYPE","init"),this.P?(tt(n,"$req",e),tt(n,"SID","null"),i.aa=!0,Vm(i,n,null)):Vm(i,n,e),this.H=2}}else this.H==3&&(t?Xv(this,t):this.j.length==0||ZT(this.i)||Xv(this))};function Xv(t,e){var n;e?n=e.m:n=t.W++;const r=jr(t.I);tt(r,"SID",t.K),tt(r,"RID",n),tt(r,"AID",t.V),Pu(t,r),t.o&&t.s&&Cg(r,t.o,t.s),n=new Tu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=h0(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sg(t.i,n),Vm(n,r,e)}function Pu(t,e){t.na&&pg(t.na,function(n,r){tt(e,r,n)}),t.h&&GT({},function(n,r){tt(e,r,n)})}function h0(t,e,n){n=Math.min(t.j.length,n);var r=t.h?tn(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{RD(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function d0(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;$c||NT(),jc||($c(),jc=!0),Ig.add(e,t),t.A=0}}function xg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=bu(tn(t.Ma,t),p0(t,t.A)),t.A++,!0)}K.Ma=function(){if(this.u=null,f0(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=bu(tn(this.jb,this),t)}};K.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,hn(10),yd(this),f0(this))};function Og(t){t.B!=null&&(ve.clearTimeout(t.B),t.B=null)}function f0(t){t.g=new Tu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=jr(t.wa);tt(e,"RID","rpc"),tt(e,"SID",t.K),tt(e,"AID",t.V),tt(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&tt(e,"TO",t.qa),tt(e,"TYPE","xmlhttp"),Pu(t,e),t.o&&t.s&&Cg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=pd(jr(e)),n.s=null,n.S=!0,qT(n,t)}K.ib=function(){this.v!=null&&(this.v=null,yd(this),xg(this),hn(19))};function sh(t){t.v!=null&&(ve.clearTimeout(t.v),t.v=null)}function m0(t,e){var n=null;if(t.g==e){sh(t),Og(t),t.g=null;var r=2}else if(Lm(t.i,e))n=e.F,t0(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=hd(),Kt(r,new UT(r,n)),vd(t)}else d0(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&ND(t,e)||r==2&&xg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:_s(t,5);break;case 4:_s(t,10);break;case 3:_s(t,6);break;default:_s(t,2)}}}function p0(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function _s(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=tn(t.pb,t);n||(n=new As("//www.google.com/images/cleardot.gif"),ve.location&&ve.location.protocol=="http"||rh(n,"https"),pd(n)),SD(n.toString(),r)}else hn(2);t.H=0,t.h&&t.h.za(e),g0(t),l0(t)}K.pb=function(t){t?(this.l.info("Successfully pinged google.com"),hn(2)):(this.l.info("Failed to ping google.com"),hn(1))};function g0(t){if(t.H=0,t.ma=[],t.h){const e=n0(t.i);(e.length!=0||t.j.length!=0)&&($v(t.ma,e),$v(t.ma,t.j),t.i.i.length=0,fg(t.j),t.j.length=0),t.h.ya()}}function _0(t,e,n){var r=n instanceof As?jr(n):new As(n);if(r.g!="")e&&(r.g=e+"."+r.g),ih(r,r.m);else{var i=ve.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new As(null);r&&rh(s,r),e&&(s.g=e),i&&ih(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&tt(r,n,e),tt(r,"VER",t.ra),Pu(t,r),r}function y0(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new gt(new Ru({ob:!0})):new gt(t.va),e.Oa(t.J),e}K.isActive=function(){return!!this.h&&this.h.isActive(this)};function v0(){}K=v0.prototype;K.Ba=function(){};K.Aa=function(){};K.za=function(){};K.ya=function(){};K.isActive=function(){return!0};K.Va=function(){};function oh(){if(Ko&&!(10<=Number(HN)))throw Error("Environmental error: no available transport.")}oh.prototype.g=function(t,e){return new xn(t,e)};function xn(t,e){Ft.call(this),this.g=new u0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Uc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Uc(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ga(this)}Ut(xn,Ft);xn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;hn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=_0(t,null,t.Y),vd(t)};xn.prototype.close=function(){kg(this.g)};xn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wg(t),t=n);e.j.push(new bD(e.fb++,t)),e.H==3&&vd(e)};xn.prototype.N=function(){this.g.h=null,delete this.j,kg(this.g),delete this.g,xn.$.N.call(this)};function w0(t){Ag.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ut(w0,Ag);function I0(){Rg.call(this),this.status=1}Ut(I0,Rg);function ga(t){this.g=t}Ut(ga,v0);ga.prototype.Ba=function(){Kt(this.g,"a")};ga.prototype.Aa=function(t){Kt(this.g,new w0(t))};ga.prototype.za=function(t){Kt(this.g,new I0)};ga.prototype.ya=function(){Kt(this.g,"b")};function DD(){this.blockSize=-1}function Jn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ut(Jn,DD);Jn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Nf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Jn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Nf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Nf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Nf(this,r),i=0;break}}this.h=i,this.i+=e};Jn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function He(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var VD={};function Ng(t){return-128<=t&&128>t?qN(t,function(e){return new He([e|0],0>e?-1:0)}):new He([t|0],0>t?-1:0)}function mr(t){if(isNaN(t)||!isFinite(t))return No;if(0>t)return Wt(mr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Fm;return new He(e,0)}function b0(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Wt(b0(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mr(Math.pow(e,8)),r=No,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=mr(Math.pow(e,s)),r=r.R(s).add(mr(o))):(r=r.R(n),r=r.add(mr(o)))}return r}var Fm=4294967296,No=Ng(0),Um=Ng(1),Jv=Ng(16777216);K=He.prototype;K.ea=function(){if(Ln(this))return-Wt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Fm+r)*e,e*=Fm}return t};K.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Or(this))return"0";if(Ln(this))return"-"+Wt(this).toString(t);for(var e=mr(Math.pow(t,6)),n=this,r="";;){var i=ch(n,e).g;n=ah(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Or(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};K.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Or(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ln(t){return t.h==-1}K.X=function(t){return t=ah(this,t),Ln(t)?-1:Or(t)?0:1};function Wt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new He(n,~t.h).add(Um)}K.abs=function(){return Ln(this)?Wt(this):this};K.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new He(n,n[n.length-1]&-2147483648?-1:0)};function ah(t,e){return t.add(Wt(e))}K.R=function(t){if(Or(this)||Or(t))return No;if(Ln(this))return Ln(t)?Wt(this).R(Wt(t)):Wt(Wt(this).R(t));if(Ln(t))return Wt(this.R(Wt(t)));if(0>this.X(Jv)&&0>t.X(Jv))return mr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,c=t.D(i)&65535;n[2*r+2*i]+=o*c,al(n,2*r+2*i),n[2*r+2*i+1]+=s*c,al(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,al(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,al(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new He(n,0)};function al(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ma(t,e){this.g=t,this.h=e}function ch(t,e){if(Or(e))throw Error("division by zero");if(Or(t))return new Ma(No,No);if(Ln(t))return e=ch(Wt(t),e),new Ma(Wt(e.g),Wt(e.h));if(Ln(e))return e=ch(t,Wt(e)),new Ma(Wt(e.g),e.h);if(30<t.g.length){if(Ln(t)||Ln(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Um,r=e;0>=r.X(t);)n=Zv(n),r=Zv(r);var i=co(n,1),s=co(r,1);for(r=co(r,2),n=co(n,2);!Or(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=co(r,1),n=co(n,1)}return e=ah(t,i.R(e)),new Ma(i,e)}for(i=No;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=mr(n),o=s.R(e);Ln(o)||0<o.X(t);)n-=r,s=mr(n),o=s.R(e);Or(s)&&(s=Um),i=i.add(s),t=ah(t,o)}return new Ma(i,t)}K.gb=function(t){return ch(this,t).h};K.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new He(n,this.h&t.h)};K.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new He(n,this.h|t.h)};K.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new He(n,this.h^t.h)};function Zv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new He(n,t.h)}function co(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new He(i,t.h)}oh.prototype.createWebChannel=oh.prototype.g;xn.prototype.send=xn.prototype.u;xn.prototype.open=xn.prototype.m;xn.prototype.close=xn.prototype.close;dd.NO_ERROR=0;dd.TIMEOUT=8;dd.HTTP_ERROR=6;BT.COMPLETE="complete";$T.EventType=Eu;Eu.OPEN="a";Eu.CLOSE="b";Eu.ERROR="c";Eu.MESSAGE="d";Ft.prototype.listen=Ft.prototype.O;gt.prototype.listenOnce=gt.prototype.P;gt.prototype.getLastError=gt.prototype.Sa;gt.prototype.getLastErrorCode=gt.prototype.Ia;gt.prototype.getStatus=gt.prototype.da;gt.prototype.getResponseJson=gt.prototype.Wa;gt.prototype.getResponseText=gt.prototype.ja;gt.prototype.send=gt.prototype.ha;gt.prototype.setWithCredentials=gt.prototype.Oa;Jn.prototype.digest=Jn.prototype.l;Jn.prototype.reset=Jn.prototype.reset;Jn.prototype.update=Jn.prototype.j;He.prototype.add=He.prototype.add;He.prototype.multiply=He.prototype.R;He.prototype.modulo=He.prototype.gb;He.prototype.compare=He.prototype.X;He.prototype.toNumber=He.prototype.ea;He.prototype.toString=He.prototype.toString;He.prototype.getBits=He.prototype.D;He.fromNumber=mr;He.fromString=b0;var MD=function(){return new oh},LD=function(){return hd()},Df=dd,FD=BT,UD=Js,ew={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},BD=Ru,cl=$T,$D=gt,jD=Jn,Do=He;const tw="@firebase/firestore";/**
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
 */let Nt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
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
 */let _a="10.5.2";/**
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
 */const Ci=new id("@firebase/firestore");function wo(){return Ci.logLevel}function qD(t){Ci.setLogLevel(t)}function M(t,...e){if(Ci.logLevel<=xe.DEBUG){const n=e.map(Dg);Ci.debug(`Firestore (${_a}): ${t}`,...n)}}function wt(t,...e){if(Ci.logLevel<=xe.ERROR){const n=e.map(Dg);Ci.error(`Firestore (${_a}): ${t}`,...n)}}function Zn(t,...e){if(Ci.logLevel<=xe.WARN){const n=e.map(Dg);Ci.warn(`Firestore (${_a}): ${t}`,...n)}}function Dg(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${_a}) INTERNAL ASSERTION FAILED: `+t;throw wt(e),new Error(e)}function ce(t,e){t||J()}function zD(t,e){t||J()}function G(t,e){return t}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class E0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nt.UNAUTHENTICATED))}shutdown(){}}class HD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GD{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Lt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Lt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new E0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Nt(e)}}class KD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new KD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new YD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function JD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class T0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=JD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Qo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function A0(t){return t+"\0"}/**
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
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new ct(0,0))}static max(){return new ae(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Gc{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Me extends Gc{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const ZD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Gc{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return ZD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Me.fromString(e))}static fromName(e){return new H(Me.fromString(e).popFirst(5))}static empty(){return new H(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Me(e.slice()))}}/**
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
 */class uh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Bm(t){return t.fields.find(e=>e.kind===2)}function ss(t){return t.fields.filter(e=>e.kind!==2)}uh.UNKNOWN_ID=-1;class xl{constructor(e,n){this.fieldPath=e,this.kind=n}}class Kc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Kc(0,On.min())}}function R0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new On(i,H.empty(),e)}function S0(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new On(ae.min(),H.empty(),-1)}static max(){return new On(ae.max(),H.empty(),-1)}}function Vg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const P0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class C0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Hi(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==P0)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class wd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Lt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new gc(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Mg(r.target.error);this.V.reject(new gc(e,i))}}static open(e,n,r,i){try{return new wd(n,e.transaction(i,r))}catch(s){throw new gc(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(M("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new tV(n)}}class Kn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Kn.S(ht())===12.2&&wt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return M("SimpleDb","Removing database:",e),ls(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Mc())return!1;if(Kn.C())return!0;const e=ht(),n=Kn.S(e),r=0<n&&n<10,i=Kn.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(M("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new gc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new V(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new V(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new gc(e,o))},i.onupgradeneeded=s=>{M("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{M("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=wd.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),A.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(M("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class eV{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return ls(this.k.delete())}}class gc extends V{constructor(e,n){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Gi(t){return t.name==="IndexedDbTransactionError"}class tV{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(M("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(M("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ls(r)}add(e){return M("SimpleDb","ADD",this.store.name,e,e),ls(this.store.add(e))}get(e){return ls(this.store.get(e)).next(n=>(n===void 0&&(n=null),M("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return M("SimpleDb","DELETE",this.store.name,e),ls(this.store.delete(e))}count(){return M("SimpleDb","COUNT",this.store.name),ls(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new A((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new A((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){M("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new A((r,i)=>{n.onerror=s=>{const o=Mg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new eV(a),u=n(a.primaryKey,a.value,c);if(u instanceof A){const l=u.catch(h=>(c.done(),A.reject(h)));r.push(l)}c.isDone?i():c.$===null?a.continue():a.continue(c.$)}}).next(()=>A.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ls(t){return new A((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Mg(r.target.error);n(i)}})}let nw=!1;function Mg(t){const e=Kn.S(ht());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return nw||(nw=!0,setTimeout(()=>{throw r},0)),r}}return t}class nV{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){M("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{M("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(n){Gi(n)?M("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Hi(n)}await this.ee(6e4)})}}class rV{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return A.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return M("IndexBackiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(M("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=S0(s);Vg(o,r)>0&&(r=o)}),new On(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class bn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}bn._e=-1;function Cu(t){return t==null}function Qc(t){return t===0&&1/t==-1/0}function k0(t){return typeof t=="number"&&Number.isInteger(t)&&!Qc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function fn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=rw(e)),e=iV(t.get(n),e);return rw(e)}function iV(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function rw(t){return t+""}function pr(t){const e=t.length;if(ce(e>=2),e===2)return ce(t.charAt(0)===""&&t.charAt(1)===""),Me.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&J(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:J()}s=o+2}return new Me(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e){return[t,fn(e)]}function x0(t,e,n){return[t,fn(e),n]}const sV={},oV=["prefixPath","collectionGroup","readTime","documentId"],aV=["prefixPath","collectionGroup","documentId"],cV=["collectionGroup","readTime","prefixPath","documentId"],uV=["canonicalId","targetId"],lV=["targetId","path"],hV=["path","targetId"],dV=["collectionId","parent"],fV=["indexId","uid"],mV=["uid","sequenceNumber"],pV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],gV=["indexId","uid","orderedDocumentKey"],_V=["userId","collectionPath","documentId"],yV=["userId","collectionPath","largestBatchId"],vV=["userId","collectionGroup","largestBatchId"],O0=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],wV=[...O0,"documentOverlays"],N0=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],D0=N0,IV=[...D0,"indexConfiguration","indexState","indexEntries"];/**
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
 */class $m extends C0{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function Bt(t,e){const n=G(t);return Kn.M(n.ae,e)}/**
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
 */function sw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Je{constructor(e,n){this.comparator=e,this.root=n||qt.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qt.RED,this.left=i??qt.EMPTY,this.right=s??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new qt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ow(this.data.getIterator())}getIteratorFrom(e){return new ow(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class ow{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function uo(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class En{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new En([])}unionWith(e){let n=new Ke(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function bV(){return typeof atob<"u"}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new M0("Invalid base64 string: "+s):s}}(e);return new kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const EV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ki(t){if(ce(!!t),typeof t=="string"){let e=0;const n=EV.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:mt(t.seconds),nanos:mt(t.nanos)}}function mt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xi(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
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
 */function Id(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lg(t){const e=t.mapValue.fields.__previous_value__;return Id(e)?Lg(e):e}function Yc(t){const e=ki(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class TV{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Nl={nullValue:"NULL_VALUE"};function Ds(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Id(t)?4:L0(t)?9007199254740991:10:J()}function Er(t,e){if(t===e)return!0;const n=Ds(t);if(n!==Ds(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yc(t).isEqual(Yc(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ki(i.timestampValue),a=ki(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return xi(i.bytesValue).isEqual(xi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return mt(i.geoPointValue.latitude)===mt(s.geoPointValue.latitude)&&mt(i.geoPointValue.longitude)===mt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return mt(i.integerValue)===mt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=mt(i.doubleValue),a=mt(s.doubleValue);return o===a?Qc(o)===Qc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Qo(t.arrayValue.values||[],e.arrayValue.values||[],Er);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(sw(o)!==sw(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Er(o[c],a[c])))return!1;return!0}(t,e);default:return J()}}function Xc(t,e){return(t.values||[]).find(n=>Er(n,e))!==void 0}function Ni(t,e){if(t===e)return 0;const n=Ds(t),r=Ds(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=mt(s.integerValue||s.doubleValue),c=mt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return aw(t.timestampValue,e.timestampValue);case 4:return aw(Yc(t),Yc(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(s,o){const a=xi(s),c=xi(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=be(a[u],c[u]);if(l!==0)return l}return be(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=be(mt(s.latitude),mt(o.latitude));return a!==0?a:be(mt(s.longitude),mt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Ni(a[u],c[u]);if(l)return l}return be(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===vi.mapValue&&o===vi.mapValue)return 0;if(s===vi.mapValue)return 1;if(o===vi.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=be(c[h],l[h]);if(d!==0)return d;const f=Ni(a[c[h]],u[l[h]]);if(f!==0)return f}return be(c.length,l.length)}(t.mapValue,e.mapValue);default:throw J()}}function aw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=ki(t),r=ki(e),i=be(n.seconds,r.seconds);return i!==0?i:be(n.nanos,r.nanos)}function Yo(t){return jm(t)}function jm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ki(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=jm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${jm(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function Vs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qm(t){return!!t&&"integerValue"in t}function Jc(t){return!!t&&"arrayValue"in t}function cw(t){return!!t&&"nullValue"in t}function uw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Dl(t){return!!t&&"mapValue"in t}function _c(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_c(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_c(t.arrayValue.values[n]);return e}return Object.assign({},t)}function L0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function AV(t){return"nullValue"in t?Nl:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Vs(Oi.empty(),H.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:J()}function RV(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Vs(Oi.empty(),H.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?vi:J()}function lw(t,e){const n=Ni(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function hw(t,e){const n=Ni(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_c(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=_c(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Er(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Dl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ht(_c(this.value))}}function F0(t){const e=[];return Zs(t.fields,(n,r)=>{const i=new ot([n]);if(Dl(r)){const s=F0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new En(e)}/**
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
 */class nt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nt(e,0,ae.min(),ae.min(),ae.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,ae.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,ae.min(),ae.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,ae.min(),ae.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.position=e,this.inclusive=n}}function dw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Ni(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Er(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n="asc"){this.field=e,this.dir=n}}function SV(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{}class Ne extends U0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PV(e,n,r):n==="array-contains"?new xV(e,r):n==="in"?new W0(e,r):n==="not-in"?new OV(e,r):n==="array-contains-any"?new NV(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CV(e,r):new kV(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ni(n,this.value)):n!==null&&Ds(this.value)===Ds(n)&&this.matchesComparison(Ni(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class We extends U0{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new We(e,n)}matches(e){return Xo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Xo(t){return t.op==="and"}function zm(t){return t.op==="or"}function Fg(t){return B0(t)&&Xo(t)}function B0(t){for(const e of t.filters)if(e instanceof We)return!1;return!0}function Wm(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Yo(t.value);if(Fg(t))return t.filters.map(e=>Wm(e)).join(",");{const e=t.filters.map(n=>Wm(n)).join(",");return`${t.op}(${e})`}}function $0(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&Er(r.value,i.value)}(t,e):t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&$0(o,i.filters[a]),!0):!1}(t,e):void J()}function j0(t,e){const n=t.filters.concat(e);return We.create(n,t.op)}function q0(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Yo(n.value)}`}(t):t instanceof We?function(n){return n.op.toString()+" {"+n.getFilters().map(q0).join(" ,")+"}"}(t):"Filter"}class PV extends Ne{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class CV extends Ne{constructor(e,n){super(e,"in",n),this.keys=z0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kV extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=z0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class xV extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jc(n)&&Xc(n.arrayValue,this.value)}}class W0 extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xc(this.value.arrayValue,n)}}class OV extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xc(this.value.arrayValue,n)}}class NV extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xc(this.value.arrayValue,r))}}/**
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
 */class DV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Hm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DV(t,e,n,r,i,s,o)}function Ms(t){const e=G(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Cu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Yo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Yo(r)).join(",")),e.ce=n}return e.ce}function ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SV(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fw(t.startAt,e.startAt)&&fw(t.endAt,e.endAt)}function lh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function hh(t,e){return t.filters.filter(n=>n instanceof Ne&&n.field.isEqual(e))}function mw(t,e,n){let r=Nl,i=!0;for(const s of hh(t,e)){let o=Nl,a=!0;switch(s.op){case"<":case"<=":o=AV(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Nl}lw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];lw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function pw(t,e,n){let r=vi,i=!0;for(const s of hh(t,e)){let o=vi,a=!0;switch(s.op){case">=":case">":o=RV(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=vi}hw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];hw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Yr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function H0(t,e,n,r,i,s,o,a){return new Yr(t,e,n,r,i,s,o,a)}function ya(t){return new Yr(t)}function gw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ug(t){return t.collectionGroup!==null}function Vo(t){const e=G(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ke(ot.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Zc(s,r))}),n.has(ot.keyField().canonicalString())||e.le.push(new Zc(ot.keyField(),r))}return e.le}function mn(t){const e=G(t);return e.he||(e.he=VV(e,Vo(t))),e.he}function VV(t,e){if(t.limitType==="F")return Hm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Zc(i.field,s)});const n=t.endAt?new Di(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Di(t.startAt.position,t.startAt.inclusive):null;return Hm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gm(t,e){const n=t.filters.concat([e]);return new Yr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function dh(t,e,n){return new Yr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xu(t,e){return ku(mn(t),mn(e))&&t.limitType===e.limitType}function G0(t){return`${Ms(mn(t))}|lt:${t.limitType}`}function Io(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>q0(i)).join(", ")}]`),Cu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Yo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Yo(i)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Ou(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Vo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=dw(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Vo(r),i)||r.endAt&&!function(o,a,c){const u=dw(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Vo(r),i))}(t,e)}function K0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Q0(t){return(e,n)=>{let r=!1;for(const i of Vo(t)){const s=MV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function MV(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?Ni(c,u):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return V0(this.inner)}size(){return this.innerSize}}/**
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
 */const LV=new Je(H.comparator);function Tn(){return LV}const Y0=new Je(H.comparator);function ec(...t){let e=Y0;for(const n of t)e=e.insert(n.key,n);return e}function X0(t){let e=Y0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gr(){return yc()}function J0(){return yc()}function yc(){return new Ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const FV=new Je(H.comparator),UV=new Ke(H.comparator);function Ee(...t){let e=UV;for(const n of t)e=e.add(n);return e}const BV=new Ke(be);function Bg(){return BV}/**
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
 */function Z0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qc(e)?"-0":e}}function eA(t){return{integerValue:""+t}}function tA(t,e){return k0(e)?eA(e):Z0(t,e)}/**
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
 */class bd{constructor(){this._=void 0}}function $V(t,e,n){return t instanceof Jo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Id(s)&&(s=Lg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ls?rA(t,e):t instanceof Fs?iA(t,e):function(i,s){const o=nA(i,s),a=_w(o)+_w(i.Ie);return qm(o)&&qm(i.Ie)?eA(a):Z0(i.serializer,a)}(t,e)}function jV(t,e,n){return t instanceof Ls?rA(t,e):t instanceof Fs?iA(t,e):n}function nA(t,e){return t instanceof Zo?function(r){return qm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Jo extends bd{}class Ls extends bd{constructor(e){super(),this.elements=e}}function rA(t,e){const n=sA(e);for(const r of t.elements)n.some(i=>Er(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fs extends bd{constructor(e){super(),this.elements=e}}function iA(t,e){let n=sA(e);for(const r of t.elements)n=n.filter(i=>!Er(i,r));return{arrayValue:{values:n}}}class Zo extends bd{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function _w(t){return mt(t.integerValue||t.doubleValue)}function sA(t){return Jc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Nu{constructor(e,n){this.field=e,this.transform=n}}function qV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ls&&i instanceof Ls||r instanceof Fs&&i instanceof Fs?Qo(r.elements,i.elements,Er):r instanceof Zo&&i instanceof Zo?Er(r.Ie,i.Ie):r instanceof Jo&&i instanceof Jo}(t.transform,e.transform)}class zV{constructor(e,n){this.version=e,this.transformResults=n}}class at{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ed{}function oA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wa(t.key,at.none()):new va(t.key,t.data,at.none());{const n=t.data,r=Ht.empty();let i=new Ke(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xr(t.key,r,new En(i.toArray()),at.none())}}function WV(t,e,n){t instanceof va?function(i,s,o){const a=i.value.clone(),c=vw(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(i,s,o){if(!Vl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=vw(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(aA(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vc(t,e,n,r){return t instanceof va?function(s,o,a,c){if(!Vl(s.precondition,o))return a;const u=s.value.clone(),l=ww(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(s,o,a,c){if(!Vl(s.precondition,o))return a;const u=ww(s.fieldTransforms,c,o),l=o.data;return l.setAll(aA(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Vl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function HV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nA(r.transform,i||null);s!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,s))}return n||null}function yw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qo(r,i,(s,o)=>qV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class va extends Ed{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xr extends Ed{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vw(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,jV(o,a,n[i]))}return r}function ww(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$V(s,o,e))}return r}class wa extends Ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $g extends Ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vc(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vc(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=J0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=oA(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Qo(this.mutations,e.mutations,(n,r)=>yw(n,r))&&Qo(this.baseMutations,e.baseMutations,(n,r)=>yw(n,r))}}class qg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return FV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class GV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Tt,Ve;function cA(t){switch(t){default:return J();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function uA(t){if(t===void 0)return wt("GRPC error has no .code"),P.UNKNOWN;switch(t){case Tt.OK:return P.OK;case Tt.CANCELLED:return P.CANCELLED;case Tt.UNKNOWN:return P.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return P.INTERNAL;case Tt.UNAVAILABLE:return P.UNAVAILABLE;case Tt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Tt.NOT_FOUND:return P.NOT_FOUND;case Tt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Tt.ABORTED:return P.ABORTED;case Tt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Tt.DATA_LOSS:return P.DATA_LOSS;default:return J()}}(Ve=Tt||(Tt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV=new Do([4294967295,4294967295],0);function Iw(t){const e=lA().encode(t),n=new jD;return n.update(e),new Uint8Array(n.digest())}function bw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Do([n,r],0),new Do([i,s],0)]}class Wg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new tc(`Invalid padding: ${n}`);if(r<0)throw new tc(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new tc(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new tc(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Do.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Do.fromNumber(r)));return i.compare(KV)===1&&(i=new Do([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Iw(e),[r,i]=bw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Iw(e),[r,i]=bw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class tc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Du{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Vu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Du(ae.min(),i,new Je(be),Tn(),Ee())}}class Vu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vu(r,n,Ee(),Ee(),Ee())}}/**
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
 */class Ml{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class hA{constructor(e,n){this.targetId=e,this.fe=n}}class dA{constructor(e,n,r=kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ew{constructor(){this.ge=0,this.pe=Aw(),this.ye=kt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new Vu(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Aw()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class QV{constructor(e){this.Le=e,this.ke=new Map,this.qe=Tn(),this.Qe=Tw(),this.Ke=new Je(be)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(lh(s))if(r===0){const o=new H(s.path);this.We(n,o,nt.newNoDocument(o,ae.min()))}else ce(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=xi(r).toUint8Array()}catch(c){if(c instanceof M0)return Zn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Wg(o,i,s)}catch(c){return Zn(c instanceof tc?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&lh(a.target)){const c=new H(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,nt.newNoDocument(c,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=Ee();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Du(e,n,this.Ke,this.qe,r);return this.qe=Tn(),this.Qe=Tw(),this.Ke=new Je(be),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Ew,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ke(be),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Ew),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Tw(){return new Je(H.comparator)}function Aw(){return new Je(H.comparator)}const YV=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),XV=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),JV=(()=>({and:"AND",or:"OR"}))();class ZV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Km(t,e){return t.useProto3Json||Cu(e)?e:{value:e}}function ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eM(t,e){return ea(t,e.toTimestamp())}function It(t){return ce(!!t),ae.fromTimestamp(function(n){const r=ki(n);return new ct(r.seconds,r.nanos)}(t))}function Hg(t,e){return function(r){return new Me(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function mA(t){const e=Me.fromString(t);return ce(EA(e)),e}function eu(t,e){return Hg(t.databaseId,e.path)}function vr(t,e){const n=mA(e);if(n.get(1)!==t.databaseId.projectId)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(gA(n))}function Qm(t,e){return Hg(t.databaseId,e)}function pA(t){const e=mA(t);return e.length===4?Me.emptyPath():gA(e)}function tu(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gA(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rw(t,e,n){return{name:eu(t,e),fields:n.value.mapValue.fields}}function _A(t,e,n){const r=vr(t,e.name),i=It(e.updateTime),s=e.createTime?It(e.createTime):ae.min(),o=new Ht({mapValue:{fields:e.fields}}),a=nt.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function tM(t,e){return"found"in e?function(r,i){ce(!!i.found),i.found.name,i.found.updateTime;const s=vr(r,i.found.name),o=It(i.found.updateTime),a=i.found.createTime?It(i.found.createTime):ae.min(),c=new Ht({mapValue:{fields:i.found.fields}});return nt.newFoundDocument(s,o,a,c)}(t,e):"missing"in e?function(r,i){ce(!!i.missing),ce(!!i.readTime);const s=vr(r,i.missing),o=It(i.readTime);return nt.newNoDocument(s,o)}(t,e):J()}function nM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(ce(l===void 0||typeof l=="string"),kt.fromBase64String(l||"")):(ce(l===void 0||l instanceof Uint8Array),kt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?P.UNKNOWN:uA(u.code);return new V(l,u.message||"")}(o);n=new dA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=vr(t,r.document.name),s=It(r.document.updateTime),o=r.document.createTime?It(r.document.createTime):ae.min(),a=new Ht({mapValue:{fields:r.document.fields}}),c=nt.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Ml(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=vr(t,r.document),s=r.readTime?It(r.readTime):ae.min(),o=nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ml([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=vr(t,r.document),s=r.removedTargetIds||[];n=new Ml([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new GV(i,s),a=r.targetId;n=new hA(a,o)}}return n}function nu(t,e){let n;if(e instanceof va)n={update:Rw(t,e.key,e.value)};else if(e instanceof wa)n={delete:eu(t,e.key)};else if(e instanceof Xr)n={update:Rw(t,e.key,e.data),updateMask:cM(e.fieldMask)};else{if(!(e instanceof $g))return J();n={verify:eu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ls)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:eM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function Ym(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?at.updateTime(It(s.updateTime)):s.exists!==void 0?at.exists(s.exists):at.none()}(e.currentDocument):at.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let c=null;if("setToServerValue"in a)ce(a.setToServerValue==="REQUEST_TIME"),c=new Jo;else if("appendMissingElements"in a){const l=a.appendMissingElements.values||[];c=new Ls(l)}else if("removeAllFromArray"in a){const l=a.removeAllFromArray.values||[];c=new Fs(l)}else"increment"in a?c=new Zo(o,a.increment):J();const u=ot.fromServerFormat(a.fieldPath);return new Nu(u,c)}(t,i)):[];if(e.update){e.update.name;const i=vr(t,e.update.name),s=new Ht({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(c){const u=c.fieldPaths||[];return new En(u.map(l=>ot.fromServerFormat(l)))}(e.updateMask);return new Xr(i,s,o,n,r)}return new va(i,s,n,r)}if(e.delete){const i=vr(t,e.delete);return new wa(i,n)}if(e.verify){const i=vr(t,e.verify);return new $g(i,n)}return J()}function rM(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?It(i.updateTime):It(s);return o.isEqual(ae.min())&&(o=It(s)),new zV(o,i.transformResults||[])}(n,e))):[]}function yA(t,e){return{documents:[Qm(t,e.path)]}}function vA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Qm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return bA(We.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:bo(h.field),direction:sM(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Km(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function wA(t){let e=pA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(h){const d=IA(h);return d instanceof We&&Fg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new Zc(Eo(m.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Cu(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Di(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Di(f,d)}(n.endAt)),H0(e,i,o,s,a,"F",c,u)}function iM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function IA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Eo(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Eo(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Eo(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Eo(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(Eo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return We.create(n.compositeFilter.filters.map(r=>IA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function sM(t){return YV[t]}function oM(t){return XV[t]}function aM(t){return JV[t]}function bo(t){return{fieldPath:t.canonicalString()}}function Eo(t){return ot.fromServerFormat(t.fieldPath)}function bA(t){return t instanceof Ne?function(n){if(n.op==="=="){if(uw(n.value))return{unaryFilter:{field:bo(n.field),op:"IS_NAN"}};if(cw(n.value))return{unaryFilter:{field:bo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uw(n.value))return{unaryFilter:{field:bo(n.field),op:"IS_NOT_NAN"}};if(cw(n.value))return{unaryFilter:{field:bo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bo(n.field),op:oM(n.op),value:n.value}}}(t):t instanceof We?function(n){const r=n.getFilters().map(i=>bA(i));return r.length===1?r[0]:{compositeFilter:{op:aM(n.op),filters:r}}}(t):J()}function cM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function EA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Nr{constructor(e,n,r,i,s=ae.min(),o=ae.min(),a=kt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class TA{constructor(e){this.ut=e}}function uM(t,e){let n;if(e.document)n=_A(t.ut,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=H.fromSegments(e.noDocument.path),i=Bs(e.noDocument.readTime);n=nt.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return J();{const r=H.fromSegments(e.unknownDocument.path),i=Bs(e.unknownDocument.version);n=nt.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ct(i[0],i[1]);return ae.fromTimestamp(s)}(e.readTime)),n}function Sw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:fh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:eu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ea(s,o.version.toTimestamp()),createTime:ea(s,o.createTime.toTimestamp())}}(t.ut,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Us(e.version)};else{if(!e.isUnknownDocument())return J();r.unknownDocument={path:n.path.toArray(),version:Us(e.version)}}return r}function fh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Us(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Bs(t){const e=new ct(t.seconds,t.nanoseconds);return ae.fromTimestamp(e)}function hs(t,e){const n=(e.baseMutations||[]).map(s=>Ym(t.ut,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Ym(t.ut,s)),i=ct.fromMillis(e.localWriteTimeMs);return new jg(e.batchId,i,n,r)}function nc(t){const e=Bs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Bs(t.lastLimboFreeSnapshotVersion):ae.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return ce(s.documents.length===1),mn(ya(pA(s.documents[0])))}(t.query):function(s){return mn(wA(s))}(t.query),new Nr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,kt.fromBase64String(t.resumeToken))}function AA(t,e){const n=Us(e.snapshotVersion),r=Us(e.lastLimboFreeSnapshotVersion);let i;i=lh(e.target)?yA(t.ut,e.target):vA(t.ut,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ms(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Gg(t){const e=wA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dh(e,e.limit,"L"):e}function Vf(t,e){return new zg(e.largestBatchId,Ym(t.ut,e.overlayMutation))}function Pw(t,e){const n=e.path.lastSegment();return[t,fn(e.path.popLast()),n]}function Cw(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Us(r.readTime),documentKey:fn(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class lM{getBundleMetadata(e,n){return kw(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Bs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return kw(e).put(function(i){return{bundleId:i.id,createTime:Us(It(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return xw(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Gg(s.bundledQuery),readTime:Bs(s.readTime)}}(r)})}saveNamedQuery(e,n){return xw(e).put(function(i){return{name:i.name,readTime:Us(It(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function kw(t){return Bt(t,"bundles")}function xw(t){return Bt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.serializer=e,this.userId=n}static ct(e,n){const r=n.uid||"";return new Td(e,r)}getOverlay(e,n){return La(e).get(Pw(this.userId,n)).next(r=>r?Vf(this.serializer,r):null)}getOverlays(e,n){const r=gr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new zg(n,o);i.push(this.lt(e,a))}),A.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(fn(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(La(e).H("collectionPathOverlayIndex",a))}),A.waitFor(s)}getOverlaysForCollection(e,n,r){const i=gr(),s=fn(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return La(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Vf(this.serializer,c);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=gr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return La(e).Y({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Vf(this.serializer,u);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}lt(e,n){return La(e).put(function(i,s,o){const[a,c,u]=Pw(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:nu(i.ut,o.mutation)}}(this.serializer,this.userId,n))}}function La(t){return Bt(t,"documentOverlays")}/**
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
 */class ds{constructor(){}ht(e,n){this.Pt(e,n),n.It()}Pt(e,n){if("nullValue"in e)this.Tt(n,5);else if("booleanValue"in e)this.Tt(n,10),n.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(n,15),n.Et(mt(e.integerValue));else if("doubleValue"in e){const r=mt(e.doubleValue);isNaN(r)?this.Tt(n,13):(this.Tt(n,15),Qc(r)?n.Et(0):n.Et(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Tt(n,20),typeof r=="string"?n.dt(r):(n.dt(`${r.seconds||""}`),n.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,n),this.Rt(n);else if("bytesValue"in e)this.Tt(n,30),n.Vt(xi(e.bytesValue)),this.Rt(n);else if("referenceValue"in e)this.ft(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Tt(n,45),n.Et(r.latitude||0),n.Et(r.longitude||0)}else"mapValue"in e?L0(e)?this.Tt(n,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,n),this.Rt(n)):"arrayValue"in e?(this.yt(e.arrayValue,n),this.Rt(n)):J()}At(e,n){this.Tt(n,25),this.wt(e,n)}wt(e,n){n.dt(e)}gt(e,n){const r=e.fields||{};this.Tt(n,55);for(const i of Object.keys(r))this.At(i,n),this.Pt(r[i],n)}yt(e,n){const r=e.values||[];this.Tt(n,50);for(const i of r)this.Pt(i,n)}ft(e,n){this.Tt(n,37),H.fromName(e).path.forEach(r=>{this.Tt(n,60),this.wt(r,n)})}Tt(e,n){e.Et(n)}Rt(e){e.Et(2)}}ds.St=new ds;function hM(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Ow(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=hM(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class dM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Dt(r.value),r=n.next();this.Ct()}vt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=n.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(e){const n=this.Bt(e),r=Ow(n);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}kt(e){const n=this.Bt(e),r=Ow(n);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Dt(e){const n=255&e;n===0?(this.Qt(0),this.Qt(255)):n===255?(this.Qt(255),this.Qt(0)):this.Qt(n)}Ft(e){const n=255&e;n===0?(this.$t(0),this.$t(255)):n===255?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class fM{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class mM{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class Fa{constructor(){this.Wt=new dM,this.Gt=new fM(this.Wt),this.zt=new mM(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return e===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ht(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new fs(this.indexId,this.documentKey,this.arrayValue,r)}}function oi(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Nw(t.arrayValue,e.arrayValue),n!==0?n:(n=Nw(t.directionalValue,e.directionalValue),n!==0?n:H.comparator(t.documentKey,e.documentKey)))}function Nw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.Jt=new Ke((n,r)=>ot.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(e){if(ce(e.collectionGroup===this.collectionId),this.Xt)return!1;const n=Bm(e);if(n!==void 0&&!this.tn(n))return!1;const r=ss(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const c=r[s];if(!this.nn(a,c)||!this.rn(this.Yt[o++],c))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let e=new Ke(ot.comparator);const n=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new xl(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new xl(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new xl(r.field,r.dir==="asc"?0:1)));return new uh(uh.UNKNOWN_ID,this.collectionId,n,Kc.empty())}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t){var e,n;if(ce(t instanceof Ne||t instanceof We),t instanceof Ne){if(t instanceof W0){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Ne.create(t.field,"==",s)))||[];return We.create(i,"or")}return t}const r=t.filters.map(i=>RA(i));return We.create(r,t.op)}function pM(t){if(t.getFilters().length===0)return[];const e=Zm(RA(t));return ce(SA(e)),Xm(e)||Jm(e)?[e]:e.getFilters()}function Xm(t){return t instanceof Ne}function Jm(t){return t instanceof We&&Fg(t)}function SA(t){return Xm(t)||Jm(t)||function(n){if(n instanceof We&&zm(n)){for(const r of n.getFilters())if(!Xm(r)&&!Jm(r))return!1;return!0}return!1}(t)}function Zm(t){if(ce(t instanceof Ne||t instanceof We),t instanceof Ne)return t;if(t.filters.length===1)return Zm(t.filters[0]);const e=t.filters.map(r=>Zm(r));let n=We.create(e,t.op);return n=mh(n),SA(n)?n:(ce(n instanceof We),ce(Xo(n)),ce(n.filters.length>1),n.filters.reduce((r,i)=>Kg(r,i)))}function Kg(t,e){let n;return ce(t instanceof Ne||t instanceof We),ce(e instanceof Ne||e instanceof We),n=t instanceof Ne?e instanceof Ne?function(i,s){return We.create([i,s],"and")}(t,e):Vw(t,e):e instanceof Ne?Vw(e,t):function(i,s){if(ce(i.filters.length>0&&s.filters.length>0),Xo(i)&&Xo(s))return j0(i,s.getFilters());const o=zm(i)?i:s,a=zm(i)?s:i,c=o.filters.map(u=>Kg(u,a));return We.create(c,"or")}(t,e),mh(n)}function Vw(t,e){if(Xo(e))return j0(e,t.getFilters());{const n=e.filters.map(r=>Kg(t,r));return We.create(n,"or")}}function mh(t){if(ce(t instanceof Ne||t instanceof We),t instanceof Ne)return t;const e=t.getFilters();if(e.length===1)return mh(e[0]);if(B0(t))return t;const n=e.map(i=>mh(i)),r=[];return n.forEach(i=>{i instanceof Ne?r.push(i):i instanceof We&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:We.create(r,t.op)}/**
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
 */class gM{constructor(){this.on=new Qg}addToCollectionParentIndex(e,n){return this.on.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(On.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class Qg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(Me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(Me.comparator)).toArray()}}/**
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
 */const ll=new Uint8Array(0);class _M{constructor(e,n){this.user=e,this.databaseId=n,this._n=new Qg,this.an=new Ki(r=>Ms(r),(r,i)=>ku(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this._n.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this._n.add(n)});const s={collectionId:r,parent:fn(i)};return Mw(e).put(s)}return A.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[A0(n),""],!1,!0);return Mw(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(pr(o.parent))}return r})}addFieldIndex(e,n){const r=Ua(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ho(e);return s.next(a=>{o.put(Cw(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ua(e),i=ho(e),s=lo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Ua(e),r=lo(e),i=ho(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return A.forEach(this.un(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Dw(r).sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=lo(e);let i=!0;const s=new Map;return A.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=Ee();const a=[];return A.forEach(s,(c,u)=>{M("IndexedDbIndexManager",`Using index ${function(R){return`id=${R.indexId}|cg=${R.collectionGroup}|f=${R.fields.map(T=>`${T.fieldPath}:${T.kind}`).join(",")}`}(c)} to execute ${Ms(n)}`);const l=function(R,T){const k=Bm(T);if(k===void 0)return null;for(const x of hh(R,k.fieldPath))switch(x.op){case"array-contains-any":return x.value.arrayValue.values||[];case"array-contains":return[x.value]}return null}(u,c),h=function(R,T){const k=new Map;for(const x of ss(T))for(const W of hh(R,x.fieldPath))switch(W.op){case"==":case"in":k.set(x.fieldPath.canonicalString(),W.value);break;case"not-in":case"!=":return k.set(x.fieldPath.canonicalString(),W.value),Array.from(k.values())}return null}(u,c),d=function(R,T){const k=[];let x=!0;for(const W of ss(T)){const O=W.kind===0?mw(R,W.fieldPath,R.startAt):pw(R,W.fieldPath,R.startAt);k.push(O.value),x&&(x=O.inclusive)}return new Di(k,x)}(u,c),f=function(R,T){const k=[];let x=!0;for(const W of ss(T)){const O=W.kind===0?pw(R,W.fieldPath,R.endAt):mw(R,W.fieldPath,R.endAt);k.push(O.value),x&&(x=O.inclusive)}return new Di(k,x)}(u,c),m=this.ln(c,u,d),_=this.ln(c,u,f),p=this.hn(c,u,h),v=this.Pn(c.indexId,l,m,d.inclusive,_,f.inclusive,p);return A.forEach(v,w=>r.j(w,n.limit).next(R=>{R.forEach(T=>{const k=H.fromSegments(T.documentKey);o.has(k)||(o=o.add(k),a.push(k))})}))}).next(()=>a)}return A.resolve(null)})}un(e){let n=this.an.get(e);return n||(e.filters.length===0?n=[e]:n=pM(We.create(e.filters,"and")).map(r=>Hm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,n),n)}Pn(e,n,r,i,s,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,s.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.In(n[h/u]):ll,f=this.Tn(e,d,r[h%u],i),m=this.En(e,d,s[h%u],o),_=a.map(p=>this.Tn(e,d,p,!0));l.push(...this.createRange(f,m,_))}return l}Tn(e,n,r,i){const s=new fs(e,H.empty(),n,r);return i?s:s.Ht()}En(e,n,r,i){const s=new fs(e,H.empty(),n,r);return i?s.Ht():s}cn(e,n){const r=new Dw(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return A.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(c){let u=new Ke(ot.comparator),l=!1;for(const h of c.filters)for(const d of h.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?l=!0:u=u.add(d.field));for(const h of c.orderBy)h.field.isKeyField()||(u=u.add(h.field));return u.size+(l?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}dn(e,n){const r=new Fa;for(const i of ss(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);ds.St.ht(s,o)}return r.Ut()}In(e){const n=new Fa;return ds.St.ht(e,n.jt(0)),n.Ut()}An(e,n){const r=new Fa;return ds.St.ht(Vs(this.databaseId,n),r.jt(function(s){const o=ss(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Ut()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new Fa);let s=0;for(const o of ss(e)){const a=r[s++];for(const c of i)if(this.Rn(n,o.fieldPath)&&Jc(a))i=this.Vn(i,o,a);else{const u=c.jt(o.kind);ds.St.ht(a,u)}}return this.mn(i)}ln(e,n,r){return this.hn(e,n,r.position)}mn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ut();return n}Vn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const c=new Fa;c.seed(a.Ut()),ds.St.ht(o,c.jt(n.kind)),s.push(c)}return s}Rn(e,n){return!!e.filters.find(r=>r instanceof Ne&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ua(e),i=ho(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return A.forEach(s,a=>i.get([a.indexId,this.uid]).next(c=>{o.push(function(l,h){const d=h?new Kc(h.sequenceNumber,new On(Bs(h.readTime),new H(pr(h.documentKey)),h.largestBatchId)):Kc.empty(),f=l.fields.map(([m,_])=>new xl(ot.fromServerFormat(m),_));return new uh(l.indexId,l.collectionGroup,f,d)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:be(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ua(e),s=ho(e);return this.fn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>A.forEach(a,c=>s.put(Cw(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return A.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),A.forEach(a,c=>this.gn(e,i,c).next(u=>{const l=this.pn(s,c);return u.isEqual(l)?A.resolve():this.yn(e,s,c,u,l)}))))})}wn(e,n,r,i){return lo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,n.key),documentKey:n.key.path.toArray()})}Sn(e,n,r,i){return lo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,n.key),n.key.path.toArray()])}gn(e,n,r){const i=lo(e);let s=new Ke(oi);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,n)])},(o,a)=>{s=s.add(new fs(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(e,n){let r=new Ke(oi);const i=this.dn(n,e);if(i==null)return r;const s=Bm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Jc(o))for(const a of o.arrayValue.values||[])r=r.add(new fs(n.indexId,e.key,this.In(a),i))}else r=r.add(new fs(n.indexId,e.key,ll,i));return r}yn(e,n,r,i,s){M("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(c,u,l,h,d){const f=c.getIterator(),m=u.getIterator();let _=uo(f),p=uo(m);for(;_||p;){let v=!1,w=!1;if(_&&p){const R=l(_,p);R<0?w=!0:R>0&&(v=!0)}else _!=null?w=!0:v=!0;v?(h(p),p=uo(m)):w?(d(_),_=uo(f)):(_=uo(f),p=uo(m))}}(i,s,oi,a=>{o.push(this.wn(e,n,r,a))},a=>{o.push(this.Sn(e,n,r,a))}),A.waitFor(o)}fn(e){let n=1;return ho(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>oi(o,a)).filter((o,a,c)=>!a||oi(o,c[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=oi(o,e),c=oi(o,n);if(a===0)i[0]=e.Ht();else if(a>0&&c<0)i.push(o),i.push(o.Ht());else if(c>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ll,[]],c=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ll,[]];s.push(IDBKeyRange.bound(a,c))}return s}bn(e,n){return oi(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Lw)}getMinOffset(e,n){return A.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||J())).next(Lw)}}function Mw(t){return Bt(t,"collectionParents")}function lo(t){return Bt(t,"indexEntries")}function Ua(t){return Bt(t,"indexConfiguration")}function ho(t){return Bt(t,"indexState")}function Lw(t){ce(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Vg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new On(e.readTime,e.documentKey,n)}/**
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
 */const Fw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new vn(e,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function PA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Y({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{ce(a===1)}));const u=[];for(const l of n.mutations){const h=x0(e,l.key.path,n.batchId);s.push(i.delete(h)),u.push(l.key)}return A.waitFor(s).next(()=>u)}function ph(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw J();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */vn.DEFAULT_COLLECTION_PERCENTILE=10,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vn.DEFAULT=new vn(41943040,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vn.DISABLED=new vn(-1,0,0);class Ad{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(e,n,r,i){ce(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ad(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ai(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=To(e),o=ai(e);return o.add({}).next(a=>{ce(typeof a=="number");const c=new jg(a,n,r,i),u=function(f,m,_){const p=_.baseMutations.map(w=>nu(f.ut,w)),v=_.mutations.map(w=>nu(f.ut,w));return{userId:m,batchId:_.batchId,localWriteTimeMs:_.localWriteTime.toMillis(),baseMutations:p,mutations:v}}(this.serializer,this.userId,c),l=[];let h=new Ke((d,f)=>be(d.canonicalString(),f.canonicalString()));for(const d of i){const f=x0(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(f,sV))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Dn[a]=c.keys()}),A.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return ai(e).get(n).next(r=>r?(ce(r.userId===this.userId),hs(this.serializer,r)):null)}Cn(e,n){return this.Dn[n]?A.resolve(this.Dn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Dn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ai(e).Y({index:"userMutationsIndex",range:i},(o,a,c)=>{a.userId===this.userId&&(ce(a.batchId>=r),s=hs(this.serializer,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ai(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ai(e).W("userMutationsIndex",n).next(r=>r.map(i=>hs(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Ol(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return To(e).Y({range:i},(o,a,c)=>{const[u,l,h]=o,d=pr(l);if(u===this.userId&&n.path.isEqual(d))return ai(e).get(h).next(f=>{if(!f)throw J();ce(f.userId===this.userId),s.push(hs(this.serializer,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(be);const i=[];return n.forEach(s=>{const o=Ol(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=To(e).Y({range:a},(u,l,h)=>{const[d,f,m]=u,_=pr(f);d===this.userId&&s.path.isEqual(_)?r=r.add(m):h.done()});i.push(c)}),A.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Ol(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ke(be);return To(e).Y({range:o},(c,u,l)=>{const[h,d,f]=c,m=pr(d);h===this.userId&&r.isPrefixOf(m)?m.length===i&&(a=a.add(f)):l.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ai(e).get(s).next(o=>{if(o===null)throw J();ce(o.userId===this.userId),r.push(hs(this.serializer,o))}))}),A.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return PA(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Fn(n.batchId)}),A.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return A.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return To(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=pr(s[1]);i.push(c)}else a.done()}).next(()=>{ce(i.length===0)})})}containsKey(e,n){return CA(e,this.userId,n)}Mn(e){return kA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function CA(t,e,n){const r=Ol(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return To(t).Y({range:s,J:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function ai(t){return Bt(t,"mutations")}function To(t){return Bt(t,"documentMutations")}function kA(t){return Bt(t,"mutationQueues")}/**
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
 */class $s{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new $s(0)}static Nn(){return new $s(-1)}}/**
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
 */class yM{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new $s(n.highestTargetId);return n.highestTargetId=r.next(),this.Ln(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>ae.fromTimestamp(new ct(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Ln(e,i)))}addTargetData(e,n){return this.kn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(n,r),this.Ln(e,r))))}updateTargetData(e,n){return this.kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>fo(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(ce(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return fo(e).Y((o,a)=>{const c=nc(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,n){return fo(e).Y((r,i)=>{const s=nc(i);n(s)})}Bn(e){return Uw(e).get("targetGlobalKey").next(n=>(ce(n!==null),n))}Ln(e,n){return Uw(e).put("targetGlobalKey",n)}kn(e,n){return fo(e).put(AA(this.serializer,n))}qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ms(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return fo(e).Y({range:i,index:"queryTargetsIndex"},(o,a,c)=>{const u=nc(a);ku(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=gi(e);return n.forEach(o=>{const a=fn(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),A.waitFor(i)}removeMatchingKeys(e,n,r){const i=gi(e);return A.forEach(n,s=>{const o=fn(s.path);return A.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=gi(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=gi(e);let s=Ee();return i.Y({range:r,J:!0},(o,a,c)=>{const u=pr(o[1]),l=new H(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=fn(n.path),i=IDBKeyRange.bound([r],[A0(r)],!1,!0);let s=0;return gi(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return fo(e).get(n).next(r=>r?nc(r):null)}}function fo(t){return Bt(t,"targets")}function Uw(t){return Bt(t,"targetGlobal")}function gi(t){return Bt(t,"targetDocuments")}/**
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
 */function Bw([t,e],[n,r]){const i=be(t,n);return i===0?be(e,r):i}class vM{constructor(e){this.Qn=e,this.buffer=new Ke(Bw),this.Kn=0}$n(){return++this.Kn}Un(e){const n=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Bw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){M("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Gi(n)?M("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Hi(n)}await this.Gn(3e5)})}}class IM{constructor(e,n){this.zn=e,this.params=n}calculateTargetCount(e,n){return this.zn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return A.resolve(bn._e);const r=new vM(n);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Fw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fw):this.Jn(e,n))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,n){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),wo()<=xe.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function bM(t,e){return new IM(t,e)}/**
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
 */class EM{constructor(e,n){this.db=e,this.garbageCollector=bM(this,n)}jn(e){const n=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Yn(e){let n=0;return this.Hn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Hn(e,n){return this.Zn(e,(r,i)=>n(i))}addReference(e,n,r){return hl(e,r)}removeReference(e,n,r){return hl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return hl(e,n)}Xn(e,n){return function(i,s){let o=!1;return kA(i).Z(a=>CA(i,a,s).next(c=>(c&&(o=!0),A.resolve(!c)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(o,a)=>{if(a<=n){const c=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ae.min()),gi(e).delete(function(h){return[0,fn(h.path)]}(o))))});i.push(c)}}).next(()=>A.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return hl(e,n)}Zn(e,n){const r=gi(e);let i,s=bn._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==bn._e&&n(new H(pr(i)),s),s=u,i=c):s=bn._e}).next(()=>{s!==bn._e&&n(new H(pr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function hl(t,e){return gi(t).put(function(r,i){return{targetId:0,path:fn(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class xA{constructor(){this.changes=new Ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class TM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ns(e).put(r)}removeEntry(e,n,r){return ns(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],fh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.er(e,r)))}getEntry(e,n){let r=nt.newInvalidDocument(n);return ns(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Ba(n))},(i,s)=>{r=this.tr(n,s)}).next(()=>r)}nr(e,n){let r={size:0,document:nt.newInvalidDocument(n)};return ns(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Ba(n))},(i,s)=>{r={document:this.tr(n,s),size:ph(s)}}).next(()=>r)}getEntries(e,n){let r=Tn();return this.rr(e,n,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(e,n){let r=Tn(),i=new Je(H.comparator);return this.rr(e,n,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,ph(o))}).next(()=>({documents:r,sr:i}))}rr(e,n,r){if(n.isEmpty())return A.resolve();let i=new Ke(qw);n.forEach(c=>i=i.add(c));const s=IDBKeyRange.bound(Ba(i.first()),Ba(i.last())),o=i.getIterator();let a=o.getNext();return ns(e).Y({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=H.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&qw(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.U(Ba(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),fh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ns(e).W(IDBKeyRange.bound(a,c,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let l=Tn();for(const h of u){const d=this.tr(H.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);d.isFoundDocument()&&(Ou(n,d)||i.has(d.key))&&(l=l.insert(d.key,d))}return l})}getAllFromCollectionGroup(e,n,r,i){let s=Tn();const o=jw(n,r),a=jw(n,On.max());return ns(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.tr(H.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===i&&l.done()}).next(()=>s)}newChangeBuffer(e){return new AM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return $w(e).get("remoteDocumentGlobalKey").next(n=>(ce(!!n),n))}er(e,n){return $w(e).put("remoteDocumentGlobalKey",n)}tr(e,n){if(n){const r=uM(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(ae.min())))return r}return nt.newInvalidDocument(e)}}function OA(t){return new TM(t)}class AM extends xA{constructor(e,n){super(),this._r=e,this.trackRemovals=n,this.ar=new Ki(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ke((s,o)=>be(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(n.push(this._r.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=Sw(this._r.serializer,o);i=i.add(s.path.popLast());const u=ph(c);r+=u-a.size,n.push(this._r.addEntry(e,s,c))}else if(r-=a.size,this.trackRemovals){const c=Sw(this._r.serializer,o.convertToNoDocument(ae.min()));n.push(this._r.addEntry(e,s,c))}}),i.forEach(s=>{n.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),n.push(this._r.updateMetadata(e,r)),A.waitFor(n)}getFromCache(e,n){return this._r.nr(e,n).next(r=>(this.ar.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this._r.ir(e,n).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function $w(t){return Bt(t,"remoteDocumentGlobal")}function ns(t){return Bt(t,"remoteDocumentsV14")}function Ba(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function jw(t,e){const n=e.documentKey.path.toArray();return[t,fh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function qw(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=be(n[s],r[s]),i)return i;return i=be(n.length,r.length),i||(i=be(n[n.length-2],r[r.length-2]),i||be(n[n.length-1],r[r.length-1]))}/**
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
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class NA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vc(r.mutation,i,En.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const i=gr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ec();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Tn();const o=yc(),a=function(){return yc()}();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof Xr)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),vc(l.mutation,u,l.mutation.getFieldMask(),ct.now())):o.set(u.key,En.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new RM(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=yc();let i=new Je((o,a)=>o-a),s=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||En.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||Ee()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=J0();l.forEach(d=>{if(!s.has(d)){const f=oA(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ug(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(gr());let a=-1,c=s;return o.next(u=>A.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?A.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,Ee())).next(l=>({batchId:a,changes:X0(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=ec();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ec();return this.indexManager.getCollectionParents(e,s).next(a=>A.forEach(a,c=>{const u=function(h,d){return new Yr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,nt.newInvalidDocument(l)))});let a=ec();return o.forEach((c,u)=>{const l=s.get(c);l!==void 0&&vc(l.mutation,u,En.empty(),ct.now()),Ou(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class SM{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return A.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:It(i.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Gg(i.bundledQuery),readTime:It(i.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(){this.overlays=new Je(H.comparator),this.lr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=gr(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=gr(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=gr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return A.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zg(n,r));let s=this.lr.get(n);s===void 0&&(s=Ee(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class Yg{constructor(){this.hr=new Ke(Ot.Pr),this.Ir=new Ke(Ot.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Ot(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Ot(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new H(new Me([])),r=new Ot(n,e),i=new Ot(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new H(new Me([])),r=new Ot(n,e),i=new Ot(n,e+1);let s=Ee();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ot(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ot{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return H.comparator(e.key,n.key)||be(e.gr,n.gr)}static Tr(e,n){return be(e.gr,n.gr)||H.comparator(e.key,n.key)}}/**
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
 */class CM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ke(Ot.Pr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Ot(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ot(n,0),i=new Ot(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(be);return n.forEach(i=>{const s=new Ot(i,0),o=new Ot(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),A.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ot(new H(s),0);let a=new Ke(be);return this.yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.gr)),!0)},o),A.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return A.forEach(n.mutations,i=>{const s=new Ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Ot(n,0),i=this.yr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class kM{constructor(e){this.Cr=e,this.docs=function(){return new Je(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Vg(S0(l),r)<=0||(i.has(l.key)||Ou(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xM(this)}getSize(e){return A.resolve(this.size)}}class xM extends xA{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class OM{constructor(e){this.persistence=e,this.Fr=new Ki(n=>Ms(n),ku),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Yg,this.targetCount=0,this.Nr=$s.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),A.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new $s(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.kn(n),A.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Or.containsKey(n))}}/**
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
 */class DA{constructor(e,n){this.Br={},this.overlays={},this.Lr=new bn(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new OM(this),this.indexManager=new gM,this.remoteDocumentCache=function(i){return new kM(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new TA(n),this.Kr=new SM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new CM(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new NM(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return A.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class NM extends C0{constructor(e){super(),this.currentSequenceNumber=e}}class Rd{constructor(e){this.persistence=e,this.Gr=new Yg,this.zr=null}static jr(e){return new Rd(e)}get Hr(){if(this.zr)return this.zr;throw J()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hr,r=>{const i=H.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,ae.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return A.or([()=>A.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class DM{constructor(e){this.serializer=e}N(e,n,r,i){const s=new wd("createOrUpgrade",n);r<1&&i>=1&&(function(c){c.createObjectStore("owner")}(e),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",iw,{unique:!0}),c.createObjectStore("documentMutations")}(e),zw(e),function(c){c.createObjectStore("remoteDocuments")}(e));let o=A.resolve();return r<3&&i>=3&&(r!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(e),zw(e)),o=o.next(()=>function(c){const u=c.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ae.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(c,u){return u.store("mutations").W().next(l=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",iw,{unique:!0});const h=u.store("mutations"),d=l.map(f=>h.put(f));return A.waitFor(d)})}(e,s))),o=o.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(c){const u=c.createObjectStore("documentOverlays",{keyPath:_V});u.createIndex("collectionPathOverlayIndex",yV,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",vV,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(c){const u=c.createObjectStore("remoteDocumentsV14",{keyPath:oV});u.createIndex("documentKeyIndex",aV),u.createIndex("collectionGroupIndex",cV)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(e,s))),r<15&&i>=15&&(o=o.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:fV}).createIndex("sequenceNumberIndex",mV,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:pV}).createIndex("documentKeyIndex",gV,{unique:!1})}(e))),o}Xr(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=ph(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>A.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>A.forEach(a,c=>{ce(c.userId===s.userId);const u=hs(this.serializer,c);return PA(e,s.userId,u).next(()=>{})}))}))}ei(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const c=new Me(o),u=function(h){return[0,fn(h)]}(c);s.push(n.get(u).next(l=>l?A.resolve():(h=>n.put({targetId:0,path:fn(h),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>A.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:dV});const r=n.store("collectionParents"),i=new Qg,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:fn(c)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const c=new Me(o);return s(c.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,c],u)=>{const l=pr(a);return s(l.popLast())}))}ni(e){const n=e.store("targets");return n.Y((r,i)=>{const s=nc(i),o=AA(this.serializer,s);return n.put(o)})}ri(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),c=function(h){return h.document?new H(Me.fromString(h.document.name).popFirst(5)):h.noDocument?H.fromSegments(h.noDocument.path):h.unknownDocument?H.fromSegments(h.unknownDocument.path):J()}(o).path.toArray(),u={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>A.waitFor(i))}ii(e,n){const r=n.store("mutations"),i=OA(this.serializer),s=new DA(Rd.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:Ee();hs(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),A.forEach(a,(c,u)=>{const l=new Nt(u),h=Td.ct(this.serializer,l),d=s.getIndexManager(l),f=Ad.ct(l,this.serializer,d,s.referenceDelegate);return new NA(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new $m(n,bn._e),c).next()})})}}function zw(t){t.createObjectStore("targetDocuments",{keyPath:lV}).createIndex("documentTargetsIndex",hV,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",uV,{unique:!0}),t.createObjectStore("targetGlobal")}const Mf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Xg{constructor(e,n,r,i,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=u,this._i=l,this.ai=h,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=d=>Promise.resolve(),!Xg.D())throw new V(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new EM(this,i),this.Ii=n+"main",this.serializer=new TA(c),this.Ti=new Kn(this.Ii,this.ai,new DM(this.serializer)),this.qr=new yM(this.referenceDelegate,this.serializer),this.remoteDocumentCache=OA(this.serializer),this.Kr=new lM,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,l===!1&&wt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(P.FAILED_PRECONDITION,Mf);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new bn(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>dl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(n=>this.isPrimary&&!n?this.pi(e).next(()=>!1):!!n&&this.yi(e).next(()=>!0))).catch(e=>{if(Gi(e))return M("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return M("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return $a(e).get("owner").next(n=>A.resolve(this.wi(n)))}Si(e){return dl(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Bt(n,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return A.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const n of e)this.Ei.removeItem(this.vi(n.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?A.resolve(!0):$a(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)){if(this.wi(n)&&this.networkEnabled)return!0;if(!this.wi(n)){if(!n.allowTabSynchronization)throw new V(P.FAILED_PRECONDITION,Mf);return!1}}return!(!this.networkEnabled||!this.inForeground)||dl(e).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&M("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new $m(e,bn._e);return this.pi(n).next(()=>this.Si(n))}),this.Ti.close(),this.Ni()}Ci(e,n){return e.filter(r=>this.Di(r.updateTimeMs,n)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>dl(e).W().next(n=>this.Ci(n,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,n){return Ad.ct(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new _M(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return Td.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,n,r){M("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(c){return c===15?IV:c===14?D0:c===13?N0:c===12?wV:c===11?O0:void J()}(this.ai);let o;return this.Ti.runTransaction(e,i,s,a=>(o=new $m(a,this.Lr?this.Lr.next():bn._e),n==="readwrite-primary"?this.fi(o).next(c=>!!c||this.gi(o)).next(c=>{if(!c)throw wt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new V(P.FAILED_PRECONDITION,P0);return r(o)}).next(c=>this.yi(o).next(()=>c)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(e){return $a(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)&&!this.wi(n)&&!(this._i||this.allowTabSynchronization&&n.allowTabSynchronization))throw new V(P.FAILED_PRECONDITION,Mf)})}yi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return $a(e).put("owner",n)}static D(){return Kn.D()}pi(e){const n=$a(e);return n.get("owner").next(r=>this.wi(r)?(M("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):A.resolve())}Di(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(wt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const n=/(?:Version|Mobile)\/1[456]/;uO()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var n;try{const r=((n=this.Ei)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return M("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return wt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){wt("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function $a(t){return Bt(t,"owner")}function dl(t){return Bt(t,"clientMetadata")}function Jg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Zg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=Ee(),i=Ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VA{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new VM;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(wo()<=xe.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Io(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),A.resolve()):(wo()<=xe.DEBUG&&M("QueryEngine","Query:",Io(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(wo()<=xe.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Io(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):A.resolve())}zi(e,n){if(gw(n))return A.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dh(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ee(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Yi(n,a);return this.Zi(n,u,o,c.readTime)?this.zi(e,dh(n,null,"F")):this.Xi(e,u,n,c)}))})))}ji(e,n,r,i){return gw(n)||i.isEqual(ae.min())?A.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?A.resolve(null):(wo()<=xe.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Io(n)),this.Xi(e,o,n,R0(i,-1)).next(a=>a))})}Yi(e,n){let r=new Ke(Q0(e));return n.forEach((i,s)=>{Ou(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return wo()<=xe.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Io(n)),this.Gi.getDocumentsMatchingQuery(e,n,On.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class MM{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Je(be),this.ns=new Ki(s=>Ms(s),ku),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NA(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function MA(t,e,n,r){return new MM(t,e,n,r)}async function LA(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Ee();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function LM(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=A.resolve();return d.forEach(m=>{f=f.next(()=>l.getEntry(c,m)).next(_=>{const p=u.docVersions.get(m);ce(p!==null),_.version.compareTo(p)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),l.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ee();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function FA(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function FM(t,e){const n=G(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(kt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(_,p,v){return _.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,f,l)&&a.push(n.qr.updateTargetData(s,f))});let c=Tn(),u=Ee();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(UA(s,o,e.documentUpdates).next(l=>{c=l.us,u=l.cs})),!r.isEqual(ae.min())){const l=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.ts=i,s))}function UA(t,e,n){let r=Ee(),i=Ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tn();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{us:o,cs:i}})}function UM(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ta(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function na(t,e,n){const r=G(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Gi(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function gh(t,e,n){const r=G(t);let i=ae.min(),s=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=G(c),d=h.ns.get(l);return d!==void 0?A.resolve(h.ts.get(d)):h.qr.getTargetData(u,l)}(r,o,mn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:ae.min(),n?s:Ee())).next(a=>(jA(r,K0(e),a),{documents:a,ls:s})))}function BA(t,e){const n=G(t),r=G(n.qr),i=n.ts.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function $A(t,e){const n=G(t),r=n.rs.get(e)||ae.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.ss.getAllFromCollectionGroup(i,e,R0(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(jA(n,e,i),i))}function jA(t,e,n){let r=t.rs.get(e)||ae.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}async function BM(t,e,n,r){const i=G(t);let s=Ee(),o=Tn();for(const u of n){const l=e.hs(u.metadata.name);u.document&&(s=s.add(l));const h=e.Ps(u);h.setReadTime(e.Is(u.metadata.readTime)),o=o.insert(l,h)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),c=await ta(i,function(l){return mn(ya(Me.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>UA(u,a,o).next(l=>(a.apply(u),l)).next(l=>i.qr.removeMatchingKeysForTargetId(u,c.targetId).next(()=>i.qr.addMatchingKeys(u,s,c.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,l.us,l.cs)).next(()=>l.us)))}async function $M(t,e,n=Ee()){const r=await ta(t,mn(Gg(e.bundledQuery))),i=G(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=It(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,e);const a=r.withResumeToken(kt.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,e))})}function Ww(t,e){return`firestore_clients_${t}_${e}`}function Hw(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Lf(t,e){return`firestore_targets_${t}_${e}`}class _h{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Ts(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new V(i.error.code,i.error.message))),o?new _h(e,n,i.state,s):(wt("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class wc{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Ts(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new V(r.error.code,r.error.message))),s?new wc(e,r.state,i):(wt("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class yh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Ts(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Bg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=k0(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new yh(e,s):(wt("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class e_{constructor(e,n){this.clientId=e,this.onlineState=n}static Ts(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new e_(n.clientId,n.onlineState):(wt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ep{constructor(){this.activeTargetIds=Bg()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ff{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new Je(be),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=Ww(this.persistenceKey,this.Rs),this.ws=function(c){return`firestore_sequence_number_${c}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new ep),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(c){return`firestore_online_state_${c}`}(this.persistenceKey),this.vs=function(c){return`firestore_bundle_loaded_v2_${c}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Rs)continue;const i=this.getItem(Ww(this.persistenceKey,r));if(i){const s=yh.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const n=this.storage.getItem(this.Cs);if(n){const r=this.Ms(n);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let n=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,n,r){this.Ns(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Lf(this.persistenceKey,e));if(r){const i=wc.Ts(e,r);i&&(n=i.state)}}return this.Ls.ds(e),this.Fs(),n}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Lf(this.persistenceKey,e))}updateQueryState(e,n,r){this.ks(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return M("SharedClientState","READ",e,n),n}setItem(e,n){M("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){M("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const n=e;if(n.storageArea===this.storage){if(M("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ys)return void wt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ss.test(n.key)){if(n.newValue==null){const r=this.Ks(n.key);return this.$s(r,null)}{const r=this.Us(n.key,n.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(n.key)){if(n.newValue!==null){const r=this.Ws(n.key,n.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.zs(n.key,n.newValue);if(r)return this.js(r)}}else if(n.key===this.Cs){if(n.newValue!==null){const r=this.Ms(n.newValue);if(r)return this.xs(r)}}else if(n.key===this.ws){const r=function(s){let o=bn._e;if(s!=null)try{const a=JSON.parse(s);ce(typeof a=="number"),o=a}catch(a){wt("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==bn._e&&this.sequenceNumberHandler(r)}else if(n.key===this.vs){const r=this.Hs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(n)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,n,r){const i=new _h(this.currentUser,e,n,r),s=Hw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Es())}Bs(e){const n=Hw(this.persistenceKey,this.currentUser,e);this.removeItem(n)}qs(e){const n={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(n))}ks(e,n,r){const i=Lf(this.persistenceKey,e),s=new wc(e,n,r);this.setItem(i,s.Es())}Qs(e){const n=JSON.stringify(Array.from(e));this.setItem(this.vs,n)}Ks(e){const n=this.Ss.exec(e);return n?n[1]:null}Us(e,n){const r=this.Ks(e);return yh.Ts(r,n)}Ws(e,n){const r=this.bs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return _h.Ts(new Nt(s),i,n)}zs(e,n){const r=this.Ds.exec(e),i=Number(r[1]);return wc.Ts(i,n)}Ms(e){return e_.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);M("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,n){const r=n?this.gs.insert(e,n):this.gs.remove(e),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let n=Bg();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class qA{constructor(){this.eo=new ep,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new ep,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jM{ro(e){}shutdown(){}}/**
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
 */class Gw{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl=null;function Uf(){return fl===null?fl=function(){return 268435456+Math.round(2147483648*Math.random())}():fl++,"0x"+fl.toString(16)}/**
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
 */const qM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class zM{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const Xt="WebChannelConnection";class WM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Uf(),c=this.So(n,r);M("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,c,u,i).then(l=>(M("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw Zn("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_a}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=qM[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Uf();return new Promise((o,a)=>{const c=new $D;c.setWithCredentials(!0),c.listenOnce(FD.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Df.NO_ERROR:const l=c.getResponseJson();M(Xt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Df.TIMEOUT:M(Xt,`RPC '${e}' ${s} timed out`),a(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case Df.HTTP_ERROR:const h=c.getStatus();if(M(Xt,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(p){const v=p.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(v)>=0?v:P.UNKNOWN}(f.status);a(new V(m,f.message))}else a(new V(P.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new V(P.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{M(Xt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);M(Xt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Uf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=MD(),a=LD(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new BD({})),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=s.join("");M(Xt,`Creating RPC '${e}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const m=new zM({co:p=>{f?M(Xt,`Not sending because RPC '${e}' stream ${i} is closed:`,p):(d||(M(Xt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),M(Xt,`RPC '${e}' stream ${i} sending:`,p),h.send(p))},lo:()=>h.close()}),_=(p,v,w)=>{p.listen(v,R=>{try{w(R)}catch(T){setTimeout(()=>{throw T},0)}})};return _(h,cl.EventType.OPEN,()=>{f||M(Xt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,cl.EventType.CLOSE,()=>{f||(f=!0,M(Xt,`RPC '${e}' stream ${i} transport closed`),m.Ro())}),_(h,cl.EventType.ERROR,p=>{f||(f=!0,Zn(Xt,`RPC '${e}' stream ${i} transport errored:`,p),m.Ro(new V(P.UNAVAILABLE,"The operation could not be completed")))}),_(h,cl.EventType.MESSAGE,p=>{var v;if(!f){const w=p.data[0];ce(!!w);const R=w,T=R.error||((v=R[0])===null||v===void 0?void 0:v.error);if(T){M(Xt,`RPC '${e}' stream ${i} received error:`,T);const k=T.status;let x=function(U){const te=Tt[U];if(te!==void 0)return uA(te)}(k),W=T.message;x===void 0&&(x=P.INTERNAL,W="Unknown error status: "+k+" with message "+T.message),f=!0,m.Ro(new V(x,W)),h.close()}else M(Xt,`RPC '${e}' stream ${i} received:`,w),m.Vo(w)}}),_(a,UD.STAT_EVENT,p=>{p.stat===ew.PROXY?M(Xt,`RPC '${e}' stream ${i} detected buffering proxy`):p.stat===ew.NOPROXY&&M(Xt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}/**
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
 */function zA(){return typeof window<"u"?window:null}function Ll(){return typeof document<"u"?document:null}/**
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
 */function Mu(t){return new ZV(t,!0)}/**
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
 */class t_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class WA{constructor(e,n,r,i,s,o,a,c){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new t_(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(wt(n.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new V(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HM extends WA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=nM(this.serializer,e),r=function(s){if(!("targetChange"in s))return ae.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?It(o.readTime):ae.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=tu(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=lh(c)?{documents:yA(s,c)}:{query:vA(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=fA(s,o.resumeToken);const u=Km(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ae.min())>0){a.readTime=ea(s,o.snapshotVersion.toTimestamp());const u=Km(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=iM(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=tu(this.serializer),n.removeTarget=e,this.e_(n)}}class GM extends WA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=rM(e.writeResults,e.commitTime),r=It(e.commitTime);return this.listener.I_(r,n)}return ce(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=tu(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nu(this.serializer,r))};this.e_(n)}}/**
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
 */class KM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(P.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(P.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class QM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(wt(n),this.f_=!1):M("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class YM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Qi(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=G(c);u.C_.add(4),await Ia(u),u.M_.set("Unknown"),u.C_.delete(4),await Lu(u)}(this))})}),this.M_=new QM(r,i)}}async function Lu(t){if(Qi(t))for(const e of t.v_)await e(!0)}async function Ia(t){for(const e of t.v_)await e(!1)}function Sd(t,e){const n=G(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),i_(n)?r_(n):Ea(n).Ho()&&n_(n,e))}function ru(t,e){const n=G(t),r=Ea(n);n.D_.delete(e),r.Ho()&&HA(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Qi(n)&&n.M_.set("Unknown"))}function n_(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ea(t).u_(e)}function HA(t,e){t.x_.Oe(e),Ea(t).c_(e)}function r_(t){t.x_=new QV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ea(t).start(),t.M_.g_()}function i_(t){return Qi(t)&&!Ea(t).jo()&&t.D_.size>0}function Qi(t){return G(t).C_.size===0}function GA(t){t.x_=void 0}async function XM(t){t.D_.forEach((e,n)=>{n_(t,e)})}async function JM(t,e){GA(t),i_(t)?(t.M_.w_(e),r_(t)):t.M_.set("Unknown")}async function ZM(t,e,n){if(t.M_.set("Online"),e instanceof dA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vh(t,r)}else if(e instanceof Ml?t.x_.$e(e):e instanceof hA?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ae.min()))try{const r=await FA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.D_.get(u);l&&s.D_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.D_.get(c);if(!l)return;s.D_.set(c,l.withResumeToken(kt.EMPTY_BYTE_STRING,l.snapshotVersion)),HA(s,c);const h=new Nr(l.target,c,u,l.sequenceNumber);n_(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await vh(t,r)}}async function vh(t,e,n){if(!Gi(e))throw e;t.C_.add(1),await Ia(t),t.M_.set("Offline"),n||(n=()=>FA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Lu(t)})}function KA(t,e){return e().catch(n=>vh(t,n,e))}async function ba(t){const e=G(t),n=Vi(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;eL(e);)try{const i=await UM(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,tL(e,i)}catch(i){await vh(e,i)}QA(e)&&YA(e)}function eL(t){return Qi(t)&&t.b_.length<10}function tL(t,e){t.b_.push(e);const n=Vi(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function QA(t){return Qi(t)&&!Vi(t).jo()&&t.b_.length>0}function YA(t){Vi(t).start()}async function nL(t){Vi(t).E_()}async function rL(t){const e=Vi(t);for(const n of t.b_)e.P_(n.mutations)}async function iL(t,e,n){const r=t.b_.shift(),i=qg.from(r,e,n);await KA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ba(t)}async function sL(t,e){e&&Vi(t).h_&&await async function(r,i){if(function(o){return cA(o)&&o!==P.ABORTED}(i.code)){const s=r.b_.shift();Vi(r).Yo(),await KA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ba(r)}}(t,e),QA(t)&&YA(t)}async function Kw(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Qi(n);n.C_.add(3),await Ia(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Lu(n)}async function tp(t,e){const n=G(t);e?(n.C_.delete(2),await Lu(n)):e||(n.C_.add(2),await Ia(n),n.M_.set("Unknown"))}function Ea(t){return t.O_||(t.O_=function(n,r,i){const s=G(n);return s.A_(),new HM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:XM.bind(null,t),Io:JM.bind(null,t),a_:ZM.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),i_(t)?r_(t):t.M_.set("Unknown")):(await t.O_.stop(),GA(t))})),t.O_}function Vi(t){return t.N_||(t.N_=function(n,r,i){const s=G(n);return s.A_(),new GM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:nL.bind(null,t),Io:sL.bind(null,t),T_:rL.bind(null,t),I_:iL.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await ba(t)):(await t.N_.stop(),t.b_.length>0&&(M("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class s_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new s_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(t,e){if(wt("AsyncQueue",`${e}: ${t}`),Gi(t))return new V(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Mo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=ec(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Mo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Qw{constructor(){this.B_=new Je(H.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):J():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ra{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ra(e,n,Mo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class oL{constructor(){this.k_=void 0,this.listeners=[]}}class aL{constructor(){this.queries=new Ki(e=>G0(e),xu),this.onlineState="Unknown",this.q_=new Set}}async function o_(t,e){const n=G(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new oL),i)try{s.k_=await n.onListen(r)}catch(o){const a=Ta(o,`Initialization of query '${Io(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&c_(n)}async function a_(t,e){const n=G(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function cL(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&c_(n)}function uL(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function c_(t){t.q_.forEach(e=>{e.next()})}class u_{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ra(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ra.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class lL{constructor(e,n){this.Y_=e,this.byteLength=n}Z_(){return"metadata"in this.Y_}}/**
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
 */class Yw{constructor(e){this.serializer=e}hs(e){return vr(this.serializer,e)}Ps(e){return e.metadata.exists?_A(this.serializer,e.document,!1):nt.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return It(e)}}class hL{constructor(e,n,r){this.X_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=XA(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++n;const r=Me.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ta(e){const n=new Map,r=new Yw(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||Ee()).add(s);n.set(o,a)}}return n}async complete(){const e=await BM(this.localStore,new Yw(this.serializer),this.documents,this.X_.id),n=this.ta(this.documents);for(const r of this.queries)await $M(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function XA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class JA{constructor(e){this.key=e}}class ZA{constructor(e){this.key=e}}class eR{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Ee(),this.mutatedKeys=Ee(),this._a=Q0(e),this.aa=new Mo(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Qw,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),f=Ou(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let p=!1;d&&f?d.data.isEqual(f.data)?m!==_&&(r.track({type:3,doc:f}),p=!0):this.ha(d,f)||(r.track({type:2,doc:f}),p=!0,(c&&this._a(f,c)>0||u&&this._a(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),p=!0):d&&!f&&(r.track({type:1,doc:d}),p=!0,(c||u)&&(a=!0)),p&&(f?(o=o.add(f),s=_?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((u,l)=>function(d,f){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return m(d)-m(f)}(u.type,l.type)||this._a(u.doc,l.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,c=a!==this.sa;return this.sa=a,s.length!==0||c?{snapshot:new ra(this.query,e.aa,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Qw,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Ee(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new ZA(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new JA(r))}),n}da(e){this.ia=e.ls,this.oa=Ee();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ra.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class dL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fL{constructor(e){this.key=e,this.Ra=!1}}class mL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ki(a=>G0(a),xu),this.fa=new Map,this.ga=new Set,this.pa=new Je(H.comparator),this.ya=new Map,this.wa=new Yg,this.Sa={},this.ba=new Map,this.Da=$s.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function pL(t,e){const n=m_(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await ta(n.localStore,mn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await l_(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Sd(n.remoteStore,o)}return i}async function l_(t,e,n,r,i){t.va=(h,d,f)=>async function(_,p,v,w){let R=p.view.ca(v);R.Zi&&(R=await gh(_.localStore,p.query,!1).then(({documents:x})=>p.view.ca(x,R)));const T=w&&w.targetChanges.get(p.targetId),k=p.view.applyChanges(R,_.isPrimaryClient,T);return np(_,p.targetId,k.Ta),k.snapshot}(t,h,d,f);const s=await gh(t.localStore,e,!0),o=new eR(e,s.ls),a=o.ca(s.documents),c=Vu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);np(t,n,u.Ta);const l=new dL(e,n,o);return t.ma.set(e,l),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function gL(t,e){const n=G(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!xu(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await na(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ru(n.remoteStore,r.targetId),ia(n,r.targetId)}).catch(Hi)):(ia(n,r.targetId),await na(n.localStore,r.targetId,!0))}async function _L(t,e,n){const r=p_(t);try{const i=await function(o,a){const c=G(o),u=ct.now(),l=a.reduce((f,m)=>f.add(m.key),Ee());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Tn(),_=Ee();return c.ss.getEntries(f,l).next(p=>{m=p,m.forEach((v,w)=>{w.isValidDocument()||(_=_.add(v))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,m)).next(p=>{h=p;const v=[];for(const w of a){const R=HV(w,h.get(w.key).overlayedDocument);R!=null&&v.push(new Xr(w.key,R,F0(R.value.mapValue),at.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,v,a)}).next(p=>{d=p;const v=p.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(f,p.batchId,v)})}).then(()=>({batchId:d.batchId,changes:X0(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Sa[o.currentUser.toKey()];u||(u=new Je(be)),u=u.insert(a,c),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Jr(r,i.changes),await ba(r.remoteStore)}catch(i){const s=Ta(i,"Failed to persist write");n.reject(s)}}async function tR(t,e){const n=G(t);try{const r=await FM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?ce(o.Ra):i.removedDocuments.size>0&&(ce(o.Ra),o.Ra=!1))}),await Jr(n,r,e)}catch(r){await Hi(r)}}function Xw(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=G(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.Q_(a)&&(u=!0)}),u&&c_(c)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yL(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new Je(H.comparator);o=o.insert(s,nt.newNoDocument(s,ae.min()));const a=Ee().add(s),c=new Du(ae.min(),new Map,new Je(be),o,a);await tR(r,c),r.pa=r.pa.remove(s),r.ya.delete(e),f_(r)}else await na(r.localStore,e,!1).then(()=>ia(r,e,n)).catch(Hi)}async function vL(t,e){const n=G(t),r=e.batch.batchId;try{const i=await LM(n.localStore,e);d_(n,r,null),h_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jr(n,i)}catch(i){await Hi(i)}}async function wL(t,e,n){const r=G(t);try{const i=await function(o,a){const c=G(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(ce(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,e);d_(r,e,n),h_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Jr(r,i)}catch(i){await Hi(i)}}async function IL(t,e){const n=G(t);Qi(n.remoteStore)||M("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=G(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",c=>a.mutationQueue.getHighestUnacknowledgedBatchId(c))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ba.get(r)||[];i.push(e),n.ba.set(r,i)}catch(r){const i=Ta(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function h_(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function d_(t,e,n){const r=G(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function ia(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||nR(t,r)})}function nR(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(ru(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),f_(t))}function np(t,e,n){for(const r of n)r instanceof JA?(t.wa.addReference(r.key,e),bL(t,r)):r instanceof ZA?(M("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||nR(t,r.key)):J()}function bL(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(M("SyncEngine","New document in limbo: "+n),t.ga.add(r),f_(t))}function f_(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new H(Me.fromString(e)),r=t.Da.next();t.ya.set(r,new fL(n)),t.pa=t.pa.insert(n,r),Sd(t.remoteStore,new Nr(mn(ya(n.path)),r,"TargetPurposeLimboResolution",bn._e))}}async function Jr(t,e,n){const r=G(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=Zg.Qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Va.a_(i),await async function(c,u){const l=G(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(u,d=>A.forEach(d.ki,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>A.forEach(d.qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Gi(h))throw h;M("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.ts.get(d),m=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(m);l.ts=l.ts.insert(d,_)}}}(r.localStore,s))}async function EL(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await LA(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(c=>{c.reject(new V(P.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jr(n,r._s)}}function TL(t,e){const n=G(t),r=n.ya.get(e);if(r&&r.Ra)return Ee().add(r.key);{let i=Ee();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function AL(t,e){const n=G(t),r=await gh(n.localStore,e.query,!0),i=e.view.da(r);return n.isPrimaryClient&&np(n,e.targetId,i.Ta),i}async function RL(t,e){const n=G(t);return $A(n.localStore,e).then(r=>Jr(n,r))}async function SL(t,e,n,r){const i=G(t),s=await function(a,c){const u=G(a),l=G(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",h=>l.Cn(h,c).next(d=>d?u.localDocuments.getDocuments(h,d):A.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await ba(i.remoteStore):n==="acknowledged"||n==="rejected"?(d_(i,e,r||null),h_(i,e),function(a,c){G(G(a).mutationQueue).Fn(c)}(i.localStore,e)):J(),await Jr(i,s)):M("SyncEngine","Cannot apply mutation batch with id: "+e)}async function PL(t,e){const n=G(t);if(m_(n),p_(n),e===!0&&n.Ca!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await Jw(n,r.toArray());n.Ca=!0,await tp(n.remoteStore,!0);for(const s of i)Sd(n.remoteStore,s)}else if(e===!1&&n.Ca!==!1){const r=[];let i=Promise.resolve();n.fa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ia(n,o),na(n.localStore,o,!0))),ru(n.remoteStore,o)}),await i,await Jw(n,r),function(o){const a=G(o);a.ya.forEach((c,u)=>{ru(a.remoteStore,u)}),a.wa.Vr(),a.ya=new Map,a.pa=new Je(H.comparator)}(n),n.Ca=!1,await tp(n.remoteStore,!1)}}async function Jw(t,e,n){const r=G(t),i=[],s=[];for(const o of e){let a;const c=r.fa.get(o);if(c&&c.length!==0){a=await ta(r.localStore,mn(c[0]));for(const u of c){const l=r.ma.get(u),h=await AL(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await BA(r.localStore,o);a=await ta(r.localStore,u),await l_(r,rR(u),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function rR(t){return H0(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function CL(t){return function(n){return G(G(n).persistence).Bi()}(G(t).localStore)}async function kL(t,e,n,r){const i=G(t);if(i.Ca)return void M("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await $A(i.localStore,K0(s[0])),a=Du.createSynthesizedRemoteEventForCurrentChange(e,n==="current",kt.EMPTY_BYTE_STRING);await Jr(i,o,a);break}case"rejected":await na(i.localStore,e,!0),ia(i,e,r);break;default:J()}}async function xL(t,e,n){const r=m_(t);if(r.Ca){for(const i of e){if(r.fa.has(i)){M("SyncEngine","Adding an already active target "+i);continue}const s=await BA(r.localStore,i),o=await ta(r.localStore,s);await l_(r,rR(s),o.targetId,!1,o.resumeToken),Sd(r.remoteStore,o)}for(const i of n)r.fa.has(i)&&await na(r.localStore,i,!1).then(()=>{ru(r.remoteStore,i),ia(r,i)}).catch(Hi)}}function m_(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yL.bind(null,e),e.Va.a_=cL.bind(null,e.eventManager),e.Va.Fa=uL.bind(null,e.eventManager),e}function p_(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wL.bind(null,e),e}function OL(t,e,n){const r=G(t);(async function(s,o,a){try{const c=await o.getMetadata();if(await function(f,m){const _=G(f),p=It(m.createTime);return _.persistence.runTransaction("hasNewerBundle","readonly",v=>_.Kr.getBundleMetadata(v,m.id)).then(v=>!!v&&v.createTime.compareTo(p)>=0)}(s.localStore,c))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(c)),Promise.resolve(new Set);a._updateProgress(XA(c));const u=new hL(c,s.localStore,o.serializer);let l=await o.Ma();for(;l;){const d=await u.ea(l);d&&a._updateProgress(d),l=await o.Ma()}const h=await u.complete();return await Jr(s,h.ra,void 0),await function(f,m){const _=G(f);return _.persistence.runTransaction("Save bundle","readwrite",p=>_.Kr.saveBundleMetadata(p,m))}(s.localStore,c),a._completeWith(h.progress),Promise.resolve(h.na)}catch(c){return Zn("SyncEngine",`Loading bundle failed with ${c}`),a._failWith(c),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class rp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Mu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return MA(this.persistence,new VA,e.initialUser,this.serializer)}createPersistence(e){return new DA(Rd.jr,this.serializer)}createSharedClientState(e){return new qA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iR extends rp{constructor(e,n,r){super(),this.xa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await p_(this.xa.syncEngine),await ba(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return MA(this.persistence,new VA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new wM(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new rV(n,this.persistence);return new nV(e.asyncQueue,r)}createPersistence(e){const n=Jg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?vn.withCacheSize(this.cacheSizeBytes):vn.DEFAULT;return new Xg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,zA(),Ll(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new qA}}class NL extends iR{constructor(e,n){super(e,n,!1),this.xa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.xa.syncEngine;this.sharedClientState instanceof Ff&&(this.sharedClientState.syncEngine={Ys:SL.bind(null,n),Zs:kL.bind(null,n),Xs:xL.bind(null,n),Bi:CL.bind(null,n),Js:RL.bind(null,n)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await PL(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=zA();if(!Ff.D(n))throw new V(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Jg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ff(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class g_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=EL.bind(null,this.syncEngine),await tp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aL}()}createDatastore(e){const n=Mu(e.databaseInfo.databaseId),r=function(s){return new WM(s)}(e.databaseInfo);return function(s,o,a,c){return new KM(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new YM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Xw(this.syncEngine,n,0),function(){return Gw.D()?new Gw:new jM}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,l){const h=new mL(i,s,o,a,c,u);return l&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=G(n);M("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ia(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */function Zw(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Pd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class DL{constructor(e,n){this.Ba=e,this.serializer=n,this.metadata=new Lt,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(e===null)return null;const n=this.La.decode(e),r=Number(n);isNaN(r)&&this.Qa(`length string (${n}) is not valid number`);const i=await this.Ka(r);return new lL(JSON.parse(i),e.length+r)}$a(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const n=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class VL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new V(P.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=G(i),a=tu(o.serializer)+"/documents",c={documents:s.map(d=>eu(o.serializer,d))},u=await o.Co("BatchGetDocuments",a,c,s.length),l=new Map;u.forEach(d=>{const f=tM(o.serializer,d);l.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=l.get(d.toString());ce(!!f),h.push(f)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new wa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=H.fromPath(r);this.mutations.push(new $g(i,this.precondition(i)))}),await async function(r,i){const s=G(r),o=tu(s.serializer)+"/documents",a={writes:i.map(c=>nu(s.serializer,c))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw J();n=ae.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new V(P.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ae.min())?at.exists(!1):at.updateTime(n):at.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ae.min()))throw new V(P.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return at.updateTime(n)}return at.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class ML{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new t_(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new VL(this.datastore),n=this.za(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(e){try{const n=this.updateFunction(e);return!Cu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!cA(n)}return!1}}/**
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
 */class LL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Nt.UNAUTHENTICATED,this.clientId=T0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ta(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fl(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await LA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ip(t,e){t.asyncQueue.verifyOperationInProgress();const n=await __(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Kw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Kw(e.remoteStore,s)),t._onlineComponents=e}function sR(t){return t.name==="FirebaseError"?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function __(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!sR(n))throw n;Zn("Error using user provided cache. Falling back to memory cache: "+n),await Fl(t,new rp)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Fl(t,new rp);return t._offlineComponents}async function Cd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await ip(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await ip(t,new g_))),t._onlineComponents}function oR(t){return __(t).then(e=>e.persistence)}function y_(t){return __(t).then(e=>e.localStore)}function aR(t){return Cd(t).then(e=>e.remoteStore)}function v_(t){return Cd(t).then(e=>e.syncEngine)}function FL(t){return Cd(t).then(e=>e.datastore)}async function sa(t){const e=await Cd(t),n=e.eventManager;return n.onListen=pL.bind(null,e.syncEngine),n.onUnlisten=gL.bind(null,e.syncEngine),n}function UL(t){return t.asyncQueue.enqueue(async()=>{const e=await oR(t),n=await aR(t);return e.setNetworkEnabled(!0),function(i){const s=G(i);return s.C_.delete(0),Lu(s)}(n)})}function BL(t){return t.asyncQueue.enqueue(async()=>{const e=await oR(t),n=await aR(t);return e.setNetworkEnabled(!1),async function(i){const s=G(i);s.C_.add(0),await Ia(s),s.M_.set("Offline")}(n)})}function $L(t,e){const n=new Lt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,l){const h=G(u);return h.persistence.runTransaction("read document","readonly",d=>h.localDocuments.getDocument(d,l))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new V(P.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const c=Ta(a,`Failed to get document '${s} from cache`);o.reject(c)}}(await y_(t),e,n)),n.promise}function cR(t,e,n={}){const r=new Lt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Pd({next:d=>{o.enqueueAndForget(()=>a_(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new V(P.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new V(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new u_(ya(a.path),l,{includeMetadataChanges:!0,J_:!0});return o_(s,h)}(await sa(t),t.asyncQueue,e,n,r)),r.promise}function jL(t,e){const n=new Lt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await gh(i,s,!0),c=new eR(s,a.ls),u=c.ca(a.documents),l=c.applyChanges(u,!1);o.resolve(l.snapshot)}catch(a){const c=Ta(a,`Failed to execute query '${s} against cache`);o.reject(c)}}(await y_(t),e,n)),n.promise}function uR(t,e,n={}){const r=new Lt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Pd({next:d=>{o.enqueueAndForget(()=>a_(s,h)),d.fromCache&&c.source==="server"?u.reject(new V(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new u_(a,l,{includeMetadataChanges:!0,J_:!0});return o_(s,h)}(await sa(t),t.asyncQueue,e,n,r)),r.promise}function qL(t,e){const n=new Pd(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).q_.add(s),s.next()}(await sa(t),n)),()=>{n.Na(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).q_.delete(s)}(await sa(t),n))}}function zL(t,e,n,r){const i=function(o,a){let c;return c=typeof o=="string"?lA().encode(o):o,function(l,h){return new DL(l,h)}(function(l,h){if(l instanceof Uint8Array)return Zw(l,h);if(l instanceof ArrayBuffer)return Zw(new Uint8Array(l),h);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(c),a)}(n,Mu(e));t.asyncQueue.enqueueAndForget(async()=>{OL(await v_(t),i,r)})}function WL(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=G(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await y_(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const eI=new Map;/**
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
 */function w_(t,e,n){if(!n)throw new V(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hR(t,e,n,r){if(e===!0&&r===!0)throw new V(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tI(t){if(!H.isDocumentKey(t))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nI(t){if(H.isDocumentKey(t))throw new V(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Ue(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kd(t);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function dR(t,e){if(e<=0)throw new V(P.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class rI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WD;switch(r.type){case"firstParty":return new QD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=eI.get(n);r&&(M("ComponentProvider","Removing Datastore"),eI.delete(n),r.terminate())}(this),Promise.resolve()}}function HL(t,e,n,r={}){var i;const s=(t=Ue(t,Fu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Nt.MOCK_USER;else{a=oT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new V(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Nt(u)}t._authCredentials=new HD(new E0(a,c))}}/**
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
 */let gn=class fR{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fR(this.firestore,e,this._query)}},lt=class mR{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mR(this.firestore,e,this._key)}},Ai=class pR extends gn{constructor(e,n,r){super(e,n,ya(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new H(e))}withConverter(e){return new pR(this.firestore,e,this._path)}};function gR(t,e,...n){if(t=oe(t),w_("collection","path",e),t instanceof Fu){const r=Me.fromString(e,...n);return nI(r),new Ai(t,null,r)}{if(!(t instanceof lt||t instanceof Ai))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return nI(r),new Ai(t.firestore,null,r)}}function GL(t,e){if(t=Ue(t,Fu),w_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new gn(t,null,function(r){return new Yr(Me.emptyPath(),r)}(e))}function wh(t,e,...n){if(t=oe(t),arguments.length===1&&(e=T0.newId()),w_("doc","path",e),t instanceof Fu){const r=Me.fromString(e,...n);return tI(r),new lt(t,null,new H(r))}{if(!(t instanceof lt||t instanceof Ai))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return tI(r),new lt(t.firestore,t instanceof Ai?t.converter:null,new H(r))}}function _R(t,e){return t=oe(t),e=oe(e),(t instanceof lt||t instanceof Ai)&&(e instanceof lt||e instanceof Ai)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function yR(t,e){return t=oe(t),e=oe(e),t instanceof gn&&e instanceof gn&&t.firestore===e.firestore&&xu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class KL{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new t_(this,"async_queue_retry"),this.iu=()=>{const n=Ll();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Ll();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Ll();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Lt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Gi(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw wt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=s_.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&J()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function sp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class QL{constructor(){this._progressObserver={},this._taskCompletionResolver=new Lt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const YL=-1;let _t=class extends Fu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new KL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vR(this),this._firestoreClient.terminate()}};function $t(t){return t._firestoreClient||vR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,l){return new TV(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,lR(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new LL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function XL(t,e){IR(t=Ue(t,_t));const n=$t(t);if(n._uninitializedComponentsProvider)throw new V(P.FAILED_PRECONDITION,"SDK cache is already specified.");Zn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new g_;return wR(n,i,new iR(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function JL(t){IR(t=Ue(t,_t));const e=$t(t);if(e._uninitializedComponentsProvider)throw new V(P.FAILED_PRECONDITION,"SDK cache is already specified.");Zn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new g_;return wR(e,r,new NL(r,n.cacheSizeBytes))}function wR(t,e,n){const r=new Lt;return t.asyncQueue.enqueue(async()=>{try{await Fl(t,n),await ip(t,e),r.resolve()}catch(i){const s=i;if(!sR(s))throw s;Zn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function ZL(t){if(t._initialized&&!t._terminated)throw new V(P.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Lt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Kn.D())return Promise.resolve();const i=r+"main";await Kn.delete(i)}(Jg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function eF(t){return function(n){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>IL(await v_(n),r)),r.promise}($t(t=Ue(t,_t)))}function tF(t){return UL($t(t=Ue(t,_t)))}function nF(t){return BL($t(t=Ue(t,_t)))}function rF(t,e){const n=$t(t=Ue(t,_t)),r=new QL;return zL(n,t._databaseId,e,r),r}function iF(t,e){return WL($t(t=Ue(t,_t)),e).then(n=>n?new gn(t,null,n.query):null)}function IR(t){if(t._initialized||t._terminated)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Tr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tr(kt.fromBase64String(e))}catch(n){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Tr(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Mi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let eo=class{constructor(e){this._methodName=e}};/**
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
 */class xd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */const sF=/^__.*__$/;class oF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new va(e,this.data,n,this.fieldTransforms)}}class bR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ER(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Od{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Od(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Ih(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(ER(this.Iu)&&sF.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class aF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mu(e)}pu(e,n,r,i=!1){return new Od({Iu:e,methodName:n,gu:r,path:ot.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function to(t){const e=t._freezeSettings(),n=Mu(t._databaseId);return new aF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Nd(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);T_("Data must be an object, but it was:",o,r);const a=RR(r,o);let c,u;if(s.merge)c=new En(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=op(e,h,n);if(!o.contains(d))throw new V(P.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);PR(l,d)||l.push(d)}c=new En(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new oF(new Ht(a),c,u)}class Uu extends eo{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uu}}function TR(t,e,n){return new Od({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class I_ extends eo{_toFieldTransform(e){return new Nu(e.path,new Jo)}isEqual(e){return e instanceof I_}}class cF extends eo{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=TR(this,e,!0),r=this.yu.map(s=>no(s,n)),i=new Ls(r);return new Nu(e.path,i)}isEqual(e){return this===e}}class uF extends eo{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=TR(this,e,!0),r=this.yu.map(s=>no(s,n)),i=new Fs(r);return new Nu(e.path,i)}isEqual(e){return this===e}}class lF extends eo{constructor(e,n){super(e),this.wu=n}_toFieldTransform(e){const n=new Zo(e.serializer,tA(e.serializer,this.wu));return new Nu(e.path,n)}isEqual(e){return this===e}}function b_(t,e,n,r){const i=t.pu(1,e,n);T_("Data must be an object, but it was:",i,r);const s=[],o=Ht.empty();Zs(r,(c,u)=>{const l=A_(e,c,n);u=oe(u);const h=i.Ru(l);if(u instanceof Uu)s.push(l);else{const d=no(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new En(s);return new bR(o,a,i.fieldTransforms)}function E_(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[op(e,r,n)],c=[i];if(s.length%2!=0)throw new V(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(op(e,s[d])),c.push(s[d+1]);const u=[],l=Ht.empty();for(let d=a.length-1;d>=0;--d)if(!PR(u,a[d])){const f=a[d];let m=c[d];m=oe(m);const _=o.Ru(f);if(m instanceof Uu)u.push(f);else{const p=no(m,_);p!=null&&(u.push(f),l.set(f,p))}}const h=new En(u);return new bR(l,h,o.fieldTransforms)}function AR(t,e,n,r=!1){return no(n,t.pu(r?4:3,e))}function no(t,e){if(SR(t=oe(t)))return T_("Unsupported field value:",e,t),RR(t,e);if(t instanceof eo)return function(r,i){if(!ER(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=no(a,i.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ct.fromDate(r);return{timestampValue:ea(i.serializer,s)}}if(r instanceof ct){const s=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ea(i.serializer,s)}}if(r instanceof xd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tr)return{bytesValue:fA(i.serializer,r._byteString)};if(r instanceof lt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${kd(r)}`)}(t,e)}function RR(t,e){const n={};return V0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zs(t,(r,i)=>{const s=no(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function SR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof xd||t instanceof Tr||t instanceof lt||t instanceof eo)}function T_(t,e,n){if(!SR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=kd(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function op(t,e,n){if((e=oe(e))instanceof Mi)return e._internalPath;if(typeof e=="string")return A_(t,e);throw Ih("Field path arguments must be of type string or ",t,!1,void 0,n)}const hF=new RegExp("[~\\*/\\[\\]]");function A_(t,e,n){if(e.search(hF)>=0)throw Ih(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mi(...e.split("."))._internalPath}catch{throw Ih(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ih(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new V(P.INVALID_ARGUMENT,a+t+c)}function PR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class iu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dF extends iu{data(){return super.data()}}function Dd(t,e){return typeof e=="string"?A_(t,e):e instanceof Mi?e._internalPath:e._delegate._internalPath}/**
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
 */function CR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class R_{}class Bu extends R_{}function ci(t,e,...n){let r=[];e instanceof R_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof S_).length,a=s.filter(c=>c instanceof Vd).length;if(o>1||o>0&&a>0)throw new V(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Vd extends Bu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Vd(e,n,r)}_apply(e){const n=this._parse(e);return xR(e._query,n),new gn(e.firestore,e.converter,Gm(e._query,n))}_parse(e){const n=to(e.firestore);return function(s,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new V(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){sI(h,l);const f=[];for(const m of h)f.push(iI(c,s,m));d={arrayValue:{values:f}}}else d=iI(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||sI(h,l),d=AR(a,o,h,l==="in"||l==="not-in");return Ne.create(u,l,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fF(t,e,n){const r=e,i=Dd("where",t);return Vd._create(i,r,n)}class S_ extends R_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new S_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:We.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)xR(o,c),o=Gm(o,c)}(e._query,n),new gn(e.firestore,e.converter,Gm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class P_ extends Bu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new P_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new V(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Zc(s,o)}(e._query,this._field,this._direction);return new gn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Yr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function mF(t,e="asc"){const n=e,r=Dd("orderBy",t);return P_._create(r,n)}class Md extends Bu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Md(e,n,r)}_apply(e){return new gn(e.firestore,e.converter,dh(e._query,this._limit,this._limitType))}}function pF(t){return dR("limit",t),Md._create("limit",t,"F")}function gF(t){return dR("limitToLast",t),Md._create("limitToLast",t,"L")}class Ld extends Bu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ld(e,n,r)}_apply(e){const n=kR(e,this.type,this._docOrFields,this._inclusive);return new gn(e.firestore,e.converter,function(i,s){return new Yr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function _F(...t){return Ld._create("startAt",t,!0)}function yF(...t){return Ld._create("startAfter",t,!1)}class Fd extends Bu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Fd(e,n,r)}_apply(e){const n=kR(e,this.type,this._docOrFields,this._inclusive);return new gn(e.firestore,e.converter,function(i,s){return new Yr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function vF(...t){return Fd._create("endBefore",t,!1)}function wF(...t){return Fd._create("endAt",t,!0)}function kR(t,e,n,r){if(n[0]=oe(n[0]),n[0]instanceof iu)return function(s,o,a,c,u){if(!c)throw new V(P.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const l=[];for(const h of Vo(s))if(h.field.isKeyField())l.push(Vs(o,c.key));else{const d=c.data.field(h.field);if(Id(d))throw new V(P.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=h.field.canonicalString();throw new V(P.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(d)}return new Di(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=to(t.firestore);return function(o,a,c,u,l,h){const d=o.explicitOrderBy;if(l.length>d.length)throw new V(P.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let m=0;m<l.length;m++){const _=l[m];if(d[m].field.isKeyField()){if(typeof _!="string")throw new V(P.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof _}`);if(!Ug(o)&&_.indexOf("/")!==-1)throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${_}' contains a slash.`);const p=o.path.child(Me.fromString(_));if(!H.isDocumentKey(p))throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${p}' is not because it contains an odd number of segments.`);const v=new H(p);f.push(Vs(a,v))}else{const p=AR(c,u,_);f.push(p)}}return new Di(f,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function iI(t,e,n){if(typeof(n=oe(n))=="string"){if(n==="")throw new V(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ug(e)&&n.indexOf("/")!==-1)throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Me.fromString(n));if(!H.isDocumentKey(r))throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vs(t,new H(r))}if(n instanceof lt)return Vs(t,n._key);throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kd(n)}.`)}function sI(t,e){if(!Array.isArray(t)||t.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xR(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class C_{convertValue(e,n="none"){switch(Ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new xd(mt(e.latitude),mt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yc(e));default:return null}}convertTimestamp(e){const n=ki(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);ce(EA(r));const i=new Oi(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||wt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Ud(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class IF extends C_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}/**
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
 */class ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let qr=class extends iu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ic(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Dd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Ic=class extends qr{data(e={}){return super.data(e)}},Li=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ys(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ic(this._firestore,this._userDataWriter,r.key,r,new ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Ic(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ys(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Ic(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ys(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:bF(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function bF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}function OR(t,e){return t instanceof qr&&e instanceof qr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Li&&e instanceof Li&&t._firestore===e._firestore&&yR(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function EF(t){t=Ue(t,lt);const e=Ue(t.firestore,_t);return cR($t(e),t._key).then(n=>k_(e,t,n))}class ro extends C_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function TF(t){t=Ue(t,lt);const e=Ue(t.firestore,_t),n=$t(e),r=new ro(e);return $L(n,t._key).then(i=>new qr(e,r,t._key,i,new ys(i!==null&&i.hasLocalMutations,!0),t.converter))}function AF(t){t=Ue(t,lt);const e=Ue(t.firestore,_t);return cR($t(e),t._key,{source:"server"}).then(n=>k_(e,t,n))}function RF(t){t=Ue(t,gn);const e=Ue(t.firestore,_t),n=$t(e),r=new ro(e);return CR(t._query),uR(n,t._query).then(i=>new Li(e,r,t,i))}function SF(t){t=Ue(t,gn);const e=Ue(t.firestore,_t),n=$t(e),r=new ro(e);return jL(n,t._query).then(i=>new Li(e,r,t,i))}function PF(t){t=Ue(t,gn);const e=Ue(t.firestore,_t),n=$t(e),r=new ro(e);return uR(n,t._query,{source:"server"}).then(i=>new Li(e,r,t,i))}function oI(t,e,n){t=Ue(t,lt);const r=Ue(t.firestore,_t),i=Ud(t.converter,e,n);return $u(r,[Nd(to(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,at.none())])}function aI(t,e,n,...r){t=Ue(t,lt);const i=Ue(t.firestore,_t),s=to(i);let o;return o=typeof(e=oe(e))=="string"||e instanceof Mi?E_(s,"updateDoc",t._key,e,n,r):b_(s,"updateDoc",t._key,e),$u(i,[o.toMutation(t._key,at.exists(!0))])}function CF(t){return $u(Ue(t.firestore,_t),[new wa(t._key,at.none())])}function kF(t,e){const n=Ue(t.firestore,_t),r=wh(t),i=Ud(t.converter,e);return $u(n,[Nd(to(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,at.exists(!1))]).then(()=>r)}function NR(t,...e){var n,r,i;t=oe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||sp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(sp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof lt)u=Ue(t.firestore,_t),l=ya(t._key.path),c={next:h=>{e[o]&&e[o](k_(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ue(t,gn);u=Ue(h.firestore,_t),l=h._query;const d=new ro(u);c={next:f=>{e[o]&&e[o](new Li(u,d,h,f))},error:e[o+1],complete:e[o+2]},CR(t._query)}return function(d,f,m,_){const p=new Pd(_),v=new u_(f,p,m);return d.asyncQueue.enqueueAndForget(async()=>o_(await sa(d),v)),()=>{p.Na(),d.asyncQueue.enqueueAndForget(async()=>a_(await sa(d),v))}}($t(u),l,a,c)}function xF(t,e){return qL($t(t=Ue(t,_t)),sp(e)?e:{next:e})}function $u(t,e){return function(r,i){const s=new Lt;return r.asyncQueue.enqueueAndForget(async()=>_L(await v_(r),i,s)),s.promise}($t(t),e)}function k_(t,e,n){const r=n.docs.get(e._key),i=new ro(t);return new qr(t,i,e._key,r,new ys(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OF={maxAttempts:5};/**
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
 */let NF=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=to(e)}set(e,n,r){this._verifyNotCommitted();const i=_i(e,this._firestore),s=Ud(i.converter,n,r),o=Nd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,at.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=_i(e,this._firestore);let o;return o=typeof(n=oe(n))=="string"||n instanceof Mi?E_(this._dataReader,"WriteBatch.update",s._key,n,r,i):b_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,at.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=_i(e,this._firestore);return this._mutations=this._mutations.concat(new wa(n._key,at.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function _i(t,e){if((t=oe(t)).firestore!==e)throw new V(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let DF=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=to(n)}get(n){const r=_i(n,this._firestore),i=new IF(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return J();const o=s[0];if(o.isFoundDocument())return new iu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new iu(this._firestore,i,r._key,null,r.converter);throw J()})}set(n,r,i){const s=_i(n,this._firestore),o=Ud(s.converter,r,i),a=Nd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=_i(n,this._firestore);let a;return a=typeof(r=oe(r))=="string"||r instanceof Mi?E_(this._dataReader,"Transaction.update",o._key,r,i,s):b_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=_i(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=_i(e,this._firestore),r=new ro(this._firestore);return super.get(e).then(i=>new qr(this._firestore,r,n._key,i._document,new ys(!1,!1),n.converter))}};function VF(t,e,n){t=Ue(t,_t);const r=Object.assign(Object.assign({},OF),n);return function(s){if(s.maxAttempts<1)throw new V(P.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new Lt;return s.asyncQueue.enqueueAndForget(async()=>{const u=await FL(s);new ML(s.asyncQueue,u,a,o,c).run()}),c.promise}($t(t),i=>e(new DF(t,i)),r)}/**
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
 */function MF(){return new Uu("deleteField")}function LF(){return new I_("serverTimestamp")}function FF(...t){return new cF("arrayUnion",t)}function UF(...t){return new uF("arrayRemove",t)}function BF(t){return new lF("increment",t)}(function(e,n=!0){(function(i){_a=i})(Qr),$r(new jn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new _t(new GD(r.getProvider("auth-internal")),new XD(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),$n(tw,"4.3.2",e),$n(tw,"4.3.2","esm2017")})();const $F="@firebase/firestore-compat",jF="0.3.21";/**
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
 */function x_(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new V("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function cI(){if(typeof Uint8Array>"u")throw new V("unimplemented","Uint8Arrays are not available in this environment.")}function uI(){if(!bV())throw new V("unimplemented","Blobs are unavailable in Firestore in this environment.")}let DR=class ap{constructor(e){this._delegate=e}static fromBase64String(e){return uI(),new ap(Tr.fromBase64String(e))}static fromUint8Array(e){return cI(),new ap(Tr.fromUint8Array(e))}toBase64(){return uI(),this._delegate.toBase64()}toUint8Array(){return cI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function cp(t){return qF(t,["next","error","complete"])}function qF(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class zF{enableIndexedDbPersistence(e,n){return XL(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return JL(e._delegate)}clearIndexedDbPersistence(e){return ZL(e._delegate)}}class VR{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Oi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Zn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){HL(this._delegate,e,n,r)}enableNetwork(){return tF(this._delegate)}disableNetwork(){return nF(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,hR("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return eF(this._delegate)}onSnapshotsInSync(e){return xF(this._delegate,e)}get app(){if(!this._appCompat)throw new V("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new oa(this,gR(this._delegate,e))}catch(n){throw un(n,"collection()","Firestore.collection()")}}doc(e){try{return new Fn(this,wh(this._delegate,e))}catch(n){throw un(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new cn(this,GL(this._delegate,e))}catch(n){throw un(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return VF(this._delegate,n=>e(new MR(this,n)))}batch(){return $t(this._delegate),new LR(new NF(this._delegate,e=>$u(this._delegate,e)))}loadBundle(e){return rF(this._delegate,e)}namedQuery(e){return iF(this._delegate,e).then(n=>n?new cn(this,n):null)}}class Bd extends C_{constructor(e){super(),this.firestore=e}convertBytes(e){return new DR(new Tr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Fn.forKey(n,this.firestore,null)}}function WF(t){qD(t)}class MR{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Bd(e)}get(e){const n=vs(e);return this._delegate.get(n).then(r=>new su(this._firestore,new qr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=vs(e);return r?(x_("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=vs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=vs(e);return this._delegate.delete(n),this}}class LR{constructor(e){this._delegate=e}set(e,n,r){const i=vs(e);return r?(x_("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=vs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=vs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class js{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ic(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ou(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=js.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new js(e,new Bd(e),n),i.set(n,s)),s}}js.INSTANCES=new WeakMap;class Fn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Bd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new V("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Fn(n,new lt(n._delegate,r,new H(e)))}static forKey(e,n,r){return new Fn(n,new lt(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new oa(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new oa(this.firestore,gR(this._delegate,e))}catch(n){throw un(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=oe(e),e instanceof lt?_R(this._delegate,e):!1}set(e,n){n=x_("DocumentReference.set",n);try{return n?oI(this._delegate,e,n):oI(this._delegate,e)}catch(r){throw un(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?aI(this._delegate,e):aI(this._delegate,e,n,...r)}catch(i){throw un(i,"updateDoc()","DocumentReference.update()")}}delete(){return CF(this._delegate)}onSnapshot(...e){const n=FR(e),r=UR(e,i=>new su(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return NR(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=TF(this._delegate):(e==null?void 0:e.source)==="server"?n=AF(this._delegate):n=EF(this._delegate),n.then(r=>new su(this.firestore,new qr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Fn(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function un(t,e,n){return t.message=t.message.replace(e,n),t}function FR(t){for(const e of t)if(typeof e=="object"&&!cp(e))return e;return{}}function UR(t,e){var n,r;let i;return cp(t[0])?i=t[0]:cp(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class su{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Fn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return OR(this._delegate,e._delegate)}}class ou extends su{data(e){const n=this._delegate.data(e);return zD(n!==void 0),n}}class cn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Bd(e)}where(e,n,r){try{return new cn(this.firestore,ci(this._delegate,fF(e,n,r)))}catch(i){throw un(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new cn(this.firestore,ci(this._delegate,mF(e,n)))}catch(r){throw un(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new cn(this.firestore,ci(this._delegate,pF(e)))}catch(n){throw un(n,"limit()","Query.limit()")}}limitToLast(e){try{return new cn(this.firestore,ci(this._delegate,gF(e)))}catch(n){throw un(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new cn(this.firestore,ci(this._delegate,_F(...e)))}catch(n){throw un(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new cn(this.firestore,ci(this._delegate,yF(...e)))}catch(n){throw un(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new cn(this.firestore,ci(this._delegate,vF(...e)))}catch(n){throw un(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new cn(this.firestore,ci(this._delegate,wF(...e)))}catch(n){throw un(n,"endAt()","Query.endAt()")}}isEqual(e){return yR(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=SF(this._delegate):(e==null?void 0:e.source)==="server"?n=PF(this._delegate):n=RF(this._delegate),n.then(r=>new up(this.firestore,new Li(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=FR(e),r=UR(e,i=>new up(this.firestore,new Li(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return NR(this._delegate,n,r)}withConverter(e){return new cn(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class HF{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new ou(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class up{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new cn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ou(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new HF(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new ou(this._firestore,r))})}isEqual(e){return OR(this._delegate,e._delegate)}}class oa extends cn{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Fn(this.firestore,e):null}doc(e){try{return e===void 0?new Fn(this.firestore,wh(this._delegate)):new Fn(this.firestore,wh(this._delegate,e))}catch(n){throw un(n,"doc()","CollectionReference.doc()")}}add(e){return kF(this._delegate,e).then(n=>new Fn(this.firestore,n))}isEqual(e){return _R(this._delegate,e._delegate)}withConverter(e){return new oa(this.firestore,e?this._delegate.withConverter(js.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function vs(t){return Ue(t,lt)}/**
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
 */class O_{constructor(...e){this._delegate=new Mi(...e)}static documentId(){return new O_(ot.keyField().canonicalString())}isEqual(e){return e=oe(e),e instanceof Mi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ms{constructor(e){this._delegate=e}static serverTimestamp(){const e=LF();return e._methodName="FieldValue.serverTimestamp",new ms(e)}static delete(){const e=MF();return e._methodName="FieldValue.delete",new ms(e)}static arrayUnion(...e){const n=FF(...e);return n._methodName="FieldValue.arrayUnion",new ms(n)}static arrayRemove(...e){const n=UF(...e);return n._methodName="FieldValue.arrayRemove",new ms(n)}static increment(e){const n=BF(e);return n._methodName="FieldValue.increment",new ms(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const GF={Firestore:VR,GeoPoint:xd,Timestamp:ct,Blob:DR,Transaction:MR,WriteBatch:LR,DocumentReference:Fn,DocumentSnapshot:su,Query:cn,QueryDocumentSnapshot:ou,QuerySnapshot:up,CollectionReference:oa,FieldPath:O_,FieldValue:ms,setLogLevel:WF,CACHE_SIZE_UNLIMITED:YL};function KF(t,e){t.INTERNAL.registerComponent(new jn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},GF)))}/**
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
 */function QF(t){KF(t,(e,n)=>new VR(e,n,new zF)),t.registerVersion($F,jF)}QF(pe);function N_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const ja={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},mo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function YF(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function BR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XF=YF,JF=BR,$R=new Xs("auth","Firebase",BR());/**
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
 */const bh=new id("@firebase/auth");function ZF(t,...e){bh.logLevel<=xe.WARN&&bh.warn(`Auth (${Qr}): ${t}`,...e)}function Ul(t,...e){bh.logLevel<=xe.ERROR&&bh.error(`Auth (${Qr}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw D_(t,...e)}function Qt(t,...e){return D_(t,...e)}function jR(t,e,n){const r=Object.assign(Object.assign({},JF()),{[e]:n});return new Xs("auth","Firebase",r).create(e,{appName:t.name})}function Aa(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),jR(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function D_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $R.create(t,...e)}function j(t,e,...n){if(!t)throw D_(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ul(e),new Error(e)}function er(t,e){t||_r(e)}/**
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
 */function au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function V_(){return lI()==="http:"||lI()==="https:"}function lI(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function e2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(V_()||aT()||"connection"in navigator)?navigator.onLine:!0}function t2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ju{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=aO()||cg()}get(){return e2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function M_(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qR{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const n2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const r2=new ju(3e4,6e4);function Et(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function St(t,e,n,r,i={}){return zR(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ma(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),qR.fetch()(WR(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function zR(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},n2),e);try{const i=new s2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw rc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw rc(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw rc(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jR(t,l,u);Yt(t,l)}}catch(i){if(i instanceof en)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function Zr(t,e,n,r,i={}){const s=await St(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function WR(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?M_(t.config,i):`${t.config.apiScheme}://${i}`}function i2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class s2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),r2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function hI(t){return t!==void 0&&t.getResponse!==void 0}function dI(t){return t!==void 0&&t.enterprise!==void 0}class o2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return i2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function a2(t){return(await St(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function c2(t,e){return St(t,"GET","/v2/recaptchaConfig",Et(t,e))}/**
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
 */async function u2(t,e){return St(t,"POST","/v1/accounts:delete",e)}async function l2(t,e){return St(t,"POST","/v1/accounts:update",e)}async function h2(t,e){return St(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bc(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d2(t,e=!1){const n=oe(t),r=await n.getIdToken(e),i=$d(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bc(Bf(i.auth_time)),issuedAtTime:bc(Bf(i.iat)),expirationTime:bc(Bf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bf(t){return Number(t)*1e3}function $d(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=iT(n);return i?JSON.parse(i):(Ul("Failed to decode base64 JWT payload"),null)}catch(i){return Ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function f2(t){const e=$d(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof en&&m2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function m2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class p2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class HR{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bc(this.lastLoginAt),this.creationTime=bc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zr(t,h2(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?y2(s.providerUserInfo):[],a=_2(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new HR(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function g2(t){const e=oe(t);await cu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function y2(t){return t.map(e=>{var{providerId:n}=e,r=N_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function v2(t,e){const n=await zR(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=WR(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qR.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class uu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):f2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await v2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new uu;return r&&(j(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uu,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
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
 */function ui(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=N_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new p2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new HR(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zr(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return d2(this,e)}reload(){return g2(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zr(this,u2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,w=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:R,emailVerified:T,isAnonymous:k,providerData:x,stsTokenManager:W}=n;j(R&&W,e,"internal-error");const O=uu.fromJSON(this.name,W);j(typeof R=="string",e,"internal-error"),ui(h,e.name),ui(d,e.name),j(typeof T=="boolean",e,"internal-error"),j(typeof k=="boolean",e,"internal-error"),ui(f,e.name),ui(m,e.name),ui(_,e.name),ui(p,e.name),ui(v,e.name),ui(w,e.name);const U=new Rs({uid:R,auth:e,email:d,emailVerified:T,displayName:h,isAnonymous:k,photoURL:m,phoneNumber:f,tenantId:_,stsTokenManager:O,createdAt:v,lastLoginAt:w});return x&&Array.isArray(x)&&(U.providerData=x.map(te=>Object.assign({},te))),p&&(U._redirectEventId=p),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new uu;i.updateFromServerResponse(n);const s=new Rs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cu(s),s}}/**
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
 */const fI=new Map;function kn(t){er(t instanceof Function,"Expected a class definition");let e=fI.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fI.set(t,e),e)}/**
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
 */class GR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GR.type="NONE";const aa=GR;/**
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
 */function Ss(t,e,n){return`firebase:${t}:${e}:${n}`}class Lo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ss(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ss("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lo(kn(aa),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||kn(aa);const o=Ss(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Rs._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Lo(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Lo(s,e,r))}}/**
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
 */function mI(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(XR(e))return"Blackberry";if(JR(e))return"Webos";if(L_(e))return"Safari";if((e.includes("chrome/")||QR(e))&&!e.includes("edge/"))return"Chrome";if(qu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function KR(t=ht()){return/firefox\//i.test(t)}function L_(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QR(t=ht()){return/crios\//i.test(t)}function YR(t=ht()){return/iemobile/i.test(t)}function qu(t=ht()){return/android/i.test(t)}function XR(t=ht()){return/blackberry/i.test(t)}function JR(t=ht()){return/webos/i.test(t)}function Ra(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function w2(t=ht()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function I2(t=ht()){var e;return Ra(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function b2(){return cT()&&document.documentMode===10}function ZR(t=ht()){return Ra(t)||qu(t)||JR(t)||XR(t)||/windows phone/i.test(t)||YR(t)}function E2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function eS(t,e=[]){let n;switch(t){case"Browser":n=mI(ht());break;case"Worker":n=`${mI(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(t,e={}){return St(t,"GET","/v2/passwordPolicy",Et(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=6;class S2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:R2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class P2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pI(this),this.idTokenSubscription=new pI(this),this.beforeStateQueue=new T2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$R,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Lo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?oe(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await A2(this),n=new S2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Lo.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yt(t){return oe(t)}class pI{constructor(e){this.auth=e,this.observer=null,this.addObserver=uT(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function C2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function F_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",C2().appendChild(r)})}function tS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const k2="https://www.google.com/recaptcha/enterprise.js?render=",x2="recaptcha-enterprise",O2="NO_RECAPTCHA";class N2{constructor(e){this.type=x2,this.auth=yt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{c2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new o2(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;dI(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(O2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&dI(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}F_(k2+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function gI(t,e,n,r=!1){const i=new N2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function jd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await gI(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gI(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function D2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function V2(t,e,n){const r=yt(t);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=nS(e),{host:o,port:a}=M2(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||L2()}function nS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function M2(t){const e=nS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_I(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_I(o)}}}function _I(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function L2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}/**
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
 */async function rS(t,e){return St(t,"POST","/v1/accounts:resetPassword",Et(t,e))}async function iS(t,e){return St(t,"POST","/v1/accounts:update",e)}async function F2(t,e){return St(t,"POST","/v1/accounts:update",Et(t,e))}/**
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
 */async function U2(t,e){return Zr(t,"POST","/v1/accounts:signInWithPassword",Et(t,e))}async function qd(t,e){return St(t,"POST","/v1/accounts:sendOobCode",Et(t,e))}async function B2(t,e){return qd(t,e)}async function $2(t,e){return qd(t,e)}async function j2(t,e){return qd(t,e)}async function q2(t,e){return qd(t,e)}/**
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
 */async function z2(t,e){return Zr(t,"POST","/v1/accounts:signInWithEmailLink",Et(t,e))}async function W2(t,e){return Zr(t,"POST","/v1/accounts:signInWithEmailLink",Et(t,e))}/**
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
 */class lu extends Sa{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new lu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new lu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jd(e,n,"signInWithPassword",U2);case"emailLink":return z2(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return iS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return W2(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fr(t,e){return Zr(t,"POST","/v1/accounts:signInWithIdp",Et(t,e))}/**
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
 */const H2="http://localhost";class Ar extends Sa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=N_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ar(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:H2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
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
 */async function G2(t,e){return St(t,"POST","/v1/accounts:sendVerificationCode",Et(t,e))}async function K2(t,e){return Zr(t,"POST","/v1/accounts:signInWithPhoneNumber",Et(t,e))}async function Q2(t,e){const n=await Zr(t,"POST","/v1/accounts:signInWithPhoneNumber",Et(t,e));if(n.temporaryProof)throw rc(t,"account-exists-with-different-credential",n);return n}const Y2={USER_NOT_FOUND:"user-not-found"};async function X2(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Zr(t,"POST","/v1/accounts:signInWithPhoneNumber",Et(t,n),Y2)}/**
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
 */class Ps extends Sa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ps({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ps({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return K2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Q2(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return X2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ps({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function J2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Z2(t){const e=Ao(Xa(t)).link,n=e?Ao(Xa(e)).deep_link_id:null,r=Ao(Xa(t)).deep_link_id;return(r?Ao(Xa(r)).link:null)||r||n||e||t}class zd{constructor(e){var n,r,i,s,o,a;const c=Ao(Xa(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=J2((i=c.mode)!==null&&i!==void 0?i:null);j(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Z2(e);try{return new zd(n)}catch{return null}}}/**
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
 */class Yi{constructor(){this.providerId=Yi.PROVIDER_ID}static credential(e,n){return lu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zd.parseLink(n);return j(r,"argument-error"),lu._fromEmailAndCode(e,r.code,r.tenantId)}}Yi.PROVIDER_ID="password";Yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ei{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pa extends ei{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Fo extends Pa{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return j("providerId"in n&&"signInMethod"in n,"argument-error"),Ar._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return j(e.idToken||e.accessToken,"argument-error"),Ar._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Fo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Fo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Fo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class cr extends Pa{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
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
 */class ur extends Pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
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
 */class lr extends Pa{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
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
 */const eU="http://localhost";class ca extends Sa{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new ca(r,s)}static _create(e,n){return new ca(e,n)}buildRequest(){return{requestUri:eU,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const tU="saml.";class Eh extends ei{constructor(e){j(e.startsWith(tU),"argument-error"),super(e)}static credentialFromResult(e){return Eh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Eh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ca.fromJSON(e);return j(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return ca._create(r,n)}catch{return null}}}/**
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
 */class hr extends Pa{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
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
 */async function sS(t,e){return Zr(t,"POST","/v1/accounts:signUp",Et(t,e))}/**
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
 */class qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rs._fromIdTokenResponse(e,r,i),o=yI(r);return new qn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yI(r);return new qn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function nU(t){var e;const n=yt(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new qn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await sS(n,{returnSecureToken:!0}),i=await qn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Th extends en{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Th.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Th(e,n,r,i)}}function oS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Th._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function aS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function rU(t,e){const n=oe(t);await Wd(!0,n,e);const{providerUserInfo:r}=await l2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=aS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function U_(t,e,n=!1){const r=await zr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qn._forOperation(t,"link",r)}async function Wd(t,e,n){await cu(e);const r=aS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";j(r.has(n)===t,e.auth,i)}/**
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
 */async function cS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await zr(t,oS(r,i,e,t),n);j(s.idToken,r,"internal-error");const o=$d(s.idToken);j(o,r,"internal-error");const{sub:a}=o;return j(t.uid===a,r,"user-mismatch"),qn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
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
 */async function uS(t,e,n=!1){const r="signIn",i=await oS(t,r,e),s=await qn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Hd(t,e){return uS(yt(t),e)}async function lS(t,e){const n=oe(t);return await Wd(!1,n,e.providerId),U_(n,e)}async function hS(t,e){return cS(oe(t),e)}/**
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
 */async function iU(t,e){return Zr(t,"POST","/v1/accounts:signInWithCustomToken",Et(t,e))}/**
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
 */async function sU(t,e){const n=yt(t),r=await iU(n,{token:e,returnSecureToken:!0}),i=await qn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class zu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?B_._fromServerResponse(e,n):"totpInfo"in n?$_._fromServerResponse(e,n):Yt(e,"internal-error")}}class B_ extends zu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new B_(n)}}class $_ extends zu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new $_(n)}}/**
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
 */function Gd(t,e,n){var r;j(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),j(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(j(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(j(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function j_(t){const e=yt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oU(t,e,n){const r=yt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Gd(r,i,n),await jd(r,i,"getOobCode",$2)}async function aU(t,e,n){await rS(oe(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&j_(t),r})}async function cU(t,e){await F2(oe(t),{oobCode:e})}async function dS(t,e){const n=oe(t),r=await rS(n,{oobCode:e}),i=r.requestType;switch(j(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":j(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":j(r.mfaInfo,n,"internal-error");default:j(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=zu._fromServerResponse(yt(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function uU(t,e){const{data:n}=await dS(oe(t),e);return n.email}async function lU(t,e,n){const r=yt(t),o=await jd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&j_(t),c}),a=await qn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function hU(t,e,n){return Hd(oe(t),Yi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&j_(t),r})}/**
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
 */async function dU(t,e,n){const r=yt(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){j(a.handleCodeInApp,r,"argument-error"),a&&Gd(r,o,a)}s(i,n),await jd(r,i,"getOobCode",j2)}function fU(t,e){const n=zd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function mU(t,e,n){const r=oe(t),i=Yi.credentialWithLink(e,n||au());return j(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Hd(r,i)}/**
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
 */async function pU(t,e){return St(t,"POST","/v1/accounts:createAuthUri",Et(t,e))}/**
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
 */async function gU(t,e){const n=V_()?au():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await pU(oe(t),r);return i||[]}async function _U(t,e){const n=oe(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Gd(n.auth,i,e);const{email:s}=await B2(n.auth,i);s!==t.email&&await t.reload()}async function yU(t,e,n){const r=oe(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Gd(r.auth,s,n);const{email:o}=await q2(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function vU(t,e){return St(t,"POST","/v1/accounts:update",e)}/**
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
 */async function wU(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=oe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await zr(r,vU(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function IU(t,e){return fS(oe(t),e,null)}function bU(t,e){return fS(oe(t),null,e)}async function fS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await zr(t,iS(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function EU(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=$d(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Uo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new TU(s,i);case"github.com":return new AU(s,i);case"google.com":return new RU(s,i);case"twitter.com":return new SU(s,i,t.screenName||null);case"custom":case"anonymous":return new Uo(s,null);default:return new Uo(s,r,i)}}class Uo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class mS extends Uo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class TU extends Uo{constructor(e,n){super(e,"facebook.com",n)}}class AU extends mS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class RU extends Uo{constructor(e,n){super(e,"google.com",n)}}class SU extends mS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function PU(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:EU(n)}/**
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
 */class ws{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new ws("enroll",e,n)}static _fromMfaPendingCredential(e){return new ws("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ws._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ws._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class q_{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=yt(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>zu._fromServerResponse(r,a));j(i.mfaPendingCredential,r,"internal-error");const o=ws._fromMfaPendingCredential(i.mfaPendingCredential);return new q_(o,s,async a=>{const c=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await qn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return j(n.user,r,"internal-error"),qn._forOperation(n.user,n.operationType,u);default:Yt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function CU(t,e){var n;const r=oe(t),i=e;return j(e.customData.operationType,r,"argument-error"),j((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),q_._fromError(r,i)}/**
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
 */function kU(t,e){return St(t,"POST","/v2/accounts/mfaEnrollment:start",Et(t,e))}function xU(t,e){return St(t,"POST","/v2/accounts/mfaEnrollment:finalize",Et(t,e))}function OU(t,e){return St(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Et(t,e))}class z_{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>zu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new z_(e)}async getSession(){return ws._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await zr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await zr(this.user,OU(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const $f=new WeakMap;function NU(t){const e=oe(t);return $f.has(e)||$f.set(e,z_._fromUser(e)),$f.get(e)}const Ah="__sak";/**
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
 */class pS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ah,"1"),this.storage.removeItem(Ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function DU(){const t=ht();return L_(t)||Ra(t)}const VU=1e3,MU=10;class gS extends pS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DU()&&E2(),this.fallbackToPolling=ZR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);b2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gS.type="LOCAL";const W_=gS;/**
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
 */class _S extends pS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_S.type="SESSION";const qs=_S;/**
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
 */function LU(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Kd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await LU(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kd.receivers=[];/**
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
 */function Wu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class FU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Wu("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function At(){return window}function UU(t){At().location.href=t}/**
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
 */function H_(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function BU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $U(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jU(){return H_()?self:null}/**
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
 */const yS="firebaseLocalStorageDb",qU=1,Rh="firebaseLocalStorage",vS="fbase_key";class Hu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qd(t,e){return t.transaction([Rh],e?"readwrite":"readonly").objectStore(Rh)}function zU(){const t=indexedDB.deleteDatabase(yS);return new Hu(t).toPromise()}function lp(){const t=indexedDB.open(yS,qU);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rh,{keyPath:vS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rh)?e(r):(r.close(),await zU(),e(await lp()))})})}async function vI(t,e,n){const r=Qd(t,!0).put({[vS]:e,value:n});return new Hu(r).toPromise()}async function WU(t,e){const n=Qd(t,!1).get(e),r=await new Hu(n).toPromise();return r===void 0?null:r.value}function wI(t,e){const n=Qd(t,!0).delete(e);return new Hu(n).toPromise()}const HU=800,GU=3;class wS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GU)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return H_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kd._getInstance(jU()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BU(),!this.activeServiceWorker)return;this.sender=new FU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$U()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lp();return await vI(e,Ah,"1"),await wI(e,Ah),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WU(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qd(i,!1).getAll();return new Hu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wS.type="LOCAL";const hu=wS;/**
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
 */function KU(t,e){return St(t,"POST","/v2/accounts/mfaSignIn:start",Et(t,e))}function QU(t,e){return St(t,"POST","/v2/accounts/mfaSignIn:finalize",Et(t,e))}/**
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
 */const YU=500,XU=6e4,ml=1e12;class JU{constructor(e){this.auth=e,this.counter=ml,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new ZU(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||ml;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||ml;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||ml;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class ZU{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;j(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=eB(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},XU)},YU))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function eB(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const jf=tS("rcb"),tB=new ju(3e4,6e4),nB="https://www.google.com/recaptcha/api.js?";class rB{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=At().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return j(iB(n),e,"argument-error"),this.shouldResolveImmediately(n)&&hI(At().grecaptcha)?Promise.resolve(At().grecaptcha):new Promise((r,i)=>{const s=At().setTimeout(()=>{i(Qt(e,"network-request-failed"))},tB.get());At()[jf]=()=>{At().clearTimeout(s),delete At()[jf];const a=At().grecaptcha;if(!a||!hI(a)){i(Qt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${nB}?${ma({onload:jf,render:"explicit",hl:n})}`;F_(o).catch(()=>{clearTimeout(s),i(Qt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=At().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function iB(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class sB{async load(e){return new JU(e)}clearedOneInstance(){}}/**
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
 */const IS="recaptcha",oB={theme:"light",type:"image"};let aB=class{constructor(e,n,r=Object.assign({},oB)){this.parameters=r,this.type=IS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=yt(e),this.isInvisible=this.parameters.size==="invisible",j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;j(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sB:new rB,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){j(!this.parameters.sitekey,this.auth,"argument-error"),j(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=At()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){j(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){j(V_()&&!H_(),this.auth,"internal-error"),await cB(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await a2(this.auth);j(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return j(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function cB(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class G_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ps._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function uB(t,e,n){const r=yt(t),i=await Yd(r,e,oe(n));return new G_(i,s=>Hd(r,s))}async function lB(t,e,n){const r=oe(t);await Wd(!1,r,"phone");const i=await Yd(r.auth,e,oe(n));return new G_(i,s=>lS(r,s))}async function hB(t,e,n){const r=oe(t),i=await Yd(r.auth,e,oe(n));return new G_(i,s=>hS(r,s))}async function Yd(t,e,n){var r;const i=await n.verify();try{j(typeof i=="string",t,"argument-error"),j(n.type===IS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return j(o.type==="enroll",t,"internal-error"),(await kU(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{j(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return j(a,t,"missing-multi-factor-info"),(await KU(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await G2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function dB(t,e){await U_(oe(t),e)}/**
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
 */let zs=class Bl{constructor(e){this.providerId=Bl.PROVIDER_ID,this.auth=yt(e)}verifyPhoneNumber(e,n){return Yd(this.auth,e,oe(n))}static credential(e,n){return Ps._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Bl.credentialFromTaggedObject(n)}static credentialFromError(e){return Bl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ps._fromTokenResponse(n,r):null}};zs.PROVIDER_ID="phone";zs.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function io(t,e){return e?kn(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class K_ extends Sa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fB(t){return uS(t.auth,new K_(t),t.bypassAuthState)}function mB(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),cS(n,new K_(t),t.bypassAuthState)}async function pB(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),U_(n,new K_(t),t.bypassAuthState)}/**
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
 */class bS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fB;case"linkViaPopup":case"linkViaRedirect":return pB;case"reauthViaPopup":case"reauthViaRedirect":return mB;default:Yt(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gB=new ju(2e3,1e4);async function _B(t,e,n){const r=yt(t);Aa(t,e,ei);const i=io(r,n);return new Dr(r,"signInViaPopup",e,i).executeNotNull()}async function yB(t,e,n){const r=oe(t);Aa(r.auth,e,ei);const i=io(r.auth,n);return new Dr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function vB(t,e,n){const r=oe(t);Aa(r.auth,e,ei);const i=io(r.auth,n);return new Dr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Dr extends bS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=Wu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gB.get())};e()}}Dr.currentPopupAction=null;/**
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
 */const wB="pendingRedirect",Ec=new Map;class IB extends bS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ec.get(this.auth._key());if(!e){try{const r=await bB(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ec.set(this.auth._key(),e)}return this.bypassAuthState||Ec.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bB(t,e){const n=TS(e),r=ES(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Q_(t,e){return ES(t)._set(TS(e),"true")}function EB(){Ec.clear()}function Y_(t,e){Ec.set(t._key(),e)}function ES(t){return kn(t._redirectPersistence)}function TS(t){return Ss(wB,t.config.apiKey,t.name)}/**
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
 */function TB(t,e,n){return AB(t,e,n)}async function AB(t,e,n){const r=yt(t);Aa(t,e,ei),await r._initializationPromise;const i=io(r,n);return await Q_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function RB(t,e,n){return SB(t,e,n)}async function SB(t,e,n){const r=oe(t);Aa(r.auth,e,ei),await r.auth._initializationPromise;const i=io(r.auth,n);await Q_(i,r.auth);const s=await AS(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function PB(t,e,n){return CB(t,e,n)}async function CB(t,e,n){const r=oe(t);Aa(r.auth,e,ei),await r.auth._initializationPromise;const i=io(r.auth,n);await Wd(!1,r,e.providerId),await Q_(i,r.auth);const s=await AS(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function kB(t,e){return await yt(t)._initializationPromise,Xd(t,e,!1)}async function Xd(t,e,n=!1){const r=yt(t),i=io(r,e),o=await new IB(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function AS(t){const e=Wu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const xB=10*60*1e3;class RS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OB(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!SS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xB&&this.cachedEventUids.clear(),this.cachedEventUids.has(II(e))}saveEventToCache(e){this.cachedEventUids.add(II(e)),this.lastProcessedEventTime=Date.now()}}function II(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function SS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OB(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SS(t);default:return!1}}/**
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
 */async function PS(t,e={}){return St(t,"GET","/v1/projects",e)}/**
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
 */const NB=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DB=/^https?/;async function VB(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PS(t);for(const n of e)try{if(MB(n))return}catch{}Yt(t,"unauthorized-domain")}function MB(t){const e=au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DB.test(n))return!1;if(NB.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const LB=new ju(3e4,6e4);function bI(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FB(t){return new Promise((e,n)=>{var r,i,s;function o(){bI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bI(),n(Qt(t,"network-request-failed"))},timeout:LB.get()})}if(!((i=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=At().gapi)===null||s===void 0)&&s.load)o();else{const a=tS("iframefcb");return At()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},F_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw $l=null,e})}let $l=null;function UB(t){return $l=$l||FB(t),$l}/**
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
 */const BB=new ju(5e3,15e3),$B="__/auth/iframe",jB="emulator/auth/iframe",qB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WB(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?M_(e,jB):`https://${t.config.authDomain}/${$B}`,r={apiKey:e.apiKey,appName:t.name,v:Qr},i=zB.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ma(r).slice(1)}`}async function HB(t){const e=await UB(t),n=At().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:WB(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qB,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=At().setTimeout(()=>{s(o)},BB.get());function c(){At().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const GB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KB=500,QB=600,YB="_blank",XB="http://localhost";class EI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JB(t,e,n,r=KB,i=QB){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},GB),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ht().toLowerCase();n&&(a=QR(u)?YB:n),KR(u)&&(e=e||XB,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(I2(u)&&a!=="_self")return ZB(e||"",a),new EI(null);const h=window.open(e||"",a,l);j(h,t,"popup-blocked");try{h.focus()}catch{}return new EI(h)}function ZB(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const e4="__/auth/handler",t4="emulator/auth/handler",n4=encodeURIComponent("fac");async function hp(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qr,eventId:i};if(e instanceof ei){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Pa){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${n4}=${encodeURIComponent(c)}`:"";return`${r4(t)}?${ma(a).slice(1)}${u}`}function r4({config:t}){return t.emulator?M_(t,t4):`https://${t.authDomain}/${e4}`}/**
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
 */const qf="webStorageSupport";class i4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qs,this._completeRedirectFn=Xd,this._overrideRedirectResult=Y_}async _openPopup(e,n,r,i){var s;er((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hp(e,n,r,au(),i);return JB(e,o,Wu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hp(e,n,r,au(),i);return UU(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(er(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HB(e),r=new RS(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qf,{type:qf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qf];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VB(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZR()||L_()||Ra()}}const s4=i4;class o4{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return _r("unexpected MultiFactorSessionType")}}}class X_ extends o4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new X_(e)}_finalizeEnroll(e,n,r){return xU(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return QU(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class CS{constructor(){}static assertion(e){return X_._fromCredential(e)}}CS.FACTOR_ID="phone";var TI="@firebase/auth",AI="1.3.2";/**
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
 */class a4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function c4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function u4(t){$r(new jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eS(t)},u=new P2(r,i,s,c);return D2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$r(new jn("auth-internal",e=>{const n=yt(e.getProvider("auth").getImmediate());return(r=>new a4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(TI,AI,c4(t)),$n(TI,AI,"esm2017")}/**
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
 */const l4=5*60;sO("authIdTokenMaxAge");u4("Browser");/**
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
 */function Ws(){return window}/**
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
 */const h4=2e3;async function d4(t,e,n){var r;const{BuildInfo:i}=Ws();er(e.sessionId,"AuthEvent did not contain a session ID");const s=await _4(e.sessionId),o={};return Ra()?o.ibi=i.packageName:qu()?o.apn=i.packageName:Yt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,hp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function f4(t){const{BuildInfo:e}=Ws(),n={};Ra()?n.iosBundleId=e.packageName:qu()?n.androidPackageName=e.packageName:Yt(t,"operation-not-supported-in-this-environment"),await PS(t,n)}function m4(t){const{cordova:e}=Ws();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,w2()?"_blank":"_system","location=yes"),n(i)})})}async function p4(t,e,n){const{cordova:r}=Ws();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Qt(t,"redirect-cancelled-by-user"))},h4))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),qu()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function g4(t){var e,n,r,i,s,o,a,c,u,l;const h=Ws();j(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),j(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),j(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),j(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),j(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function _4(t){const e=y4(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function y4(t){if(er(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const v4=20;class w4 extends RS{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function I4(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:T4(),postBody:null,tenantId:t.tenantId,error:Qt(t,"no-auth-event")}}function b4(t,e){return dp()._set(fp(t),e)}async function RI(t){const e=await dp()._get(fp(t));return e&&await dp()._remove(fp(t)),e}function E4(t,e){var n,r;const i=R4(e);if(i.includes("/__/auth/callback")){const s=jl(i),o=s.firebaseError?A4(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?Qt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function T4(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<v4;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function dp(){return kn(W_)}function fp(t){return Ss("authEvent",t.config.apiKey,t.name)}function A4(t){try{return JSON.parse(t)}catch{return null}}function R4(t){const e=jl(t),n=e.link?decodeURIComponent(e.link):void 0,r=jl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return jl(i).link||i||r||n||t}function jl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ao(n.join("?"))}/**
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
 */const S4=500;class P4{constructor(){this._redirectPersistence=qs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Xd,this._overrideRedirectResult=Y_}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new w4(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Yt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){g4(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),EB(),await this._originValidation(e);const o=I4(e,r,i);await b4(e,o);const a=await d4(e,o,n),c=await m4(a);return p4(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=f4(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ws(),o=setTimeout(async()=>{await RI(e),n.onEvent(SI())},S4),a=async l=>{clearTimeout(o);const h=await RI(e);let d=null;h&&(l!=null&&l.url)&&(d=E4(h,l.url)),n.onEvent(d||SI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Ws().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const C4=P4;function SI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Qt("no-auth-event")}}/**
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
 */function k4(t,e){yt(t)._logFramework(e)}var x4="@firebase/auth-compat",O4="0.4.8";/**
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
 */const N4=1e3;function Tc(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function D4(){return Tc()==="http:"||Tc()==="https:"}function kS(t=ht()){return!!((Tc()==="file:"||Tc()==="ionic:"||Tc()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function V4(){return cg()||rd()}function M4(){return cT()&&(document==null?void 0:document.documentMode)===11}function L4(t=ht()){return/Edge\/\d+/.test(t)}function F4(t=ht()){return M4()||L4(t)}function xS(){try{const t=self.localStorage,e=Wu();if(t)return t.setItem(e,"1"),t.removeItem(e),F4()?Mc():!0}catch{return J_()&&Mc()}return!1}function J_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function zf(){return(D4()||aT()||kS())&&!V4()&&xS()&&!J_()}function OS(){return kS()&&typeof document<"u"}async function U4(){return OS()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},N4);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function B4(){return typeof window<"u"?window:null}/**
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
 */const Cn={LOCAL:"local",NONE:"none",SESSION:"session"},qa=j,NS="persistence";function $4(t,e){if(qa(Object.values(Cn).includes(e),t,"invalid-persistence-type"),cg()){qa(e!==Cn.SESSION,t,"unsupported-persistence-type");return}if(rd()){qa(e===Cn.NONE,t,"unsupported-persistence-type");return}if(J_()){qa(e===Cn.NONE||e===Cn.LOCAL&&Mc(),t,"unsupported-persistence-type");return}qa(e===Cn.NONE||xS(),t,"unsupported-persistence-type")}async function mp(t){await t._initializationPromise;const e=DS(),n=Ss(NS,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function j4(t,e){const n=DS();if(!n)return[];const r=Ss(NS,t,e);switch(n.getItem(r)){case Cn.NONE:return[aa];case Cn.LOCAL:return[hu,qs];case Cn.SESSION:return[qs];default:return[]}}function DS(){var t;try{return((t=B4())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const q4=j;class wi{constructor(){this.browserResolver=kn(s4),this.cordovaResolver=kn(C4),this.underlyingResolver=null,this._redirectPersistence=qs,this._completeRedirectFn=Xd,this._overrideRedirectResult=Y_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return OS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return q4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await U4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function VS(t){return t.unwrap()}function z4(t){return t.wrapped()}/**
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
 */function W4(t){return MS(t)}function H4(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new G4(t,CU(t,e))}else if(r){const i=MS(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function MS(t){const{_tokenResponse:e}=t instanceof en?t.customData:t;if(!e)return null;if(!(t instanceof en)&&"temporaryProof"in e&&"phoneNumber"in e)return zs.credentialFromResult(t);const n=e.providerId;if(!n||n===ja.PASSWORD)return null;let r;switch(n){case ja.GOOGLE:r=ur;break;case ja.FACEBOOK:r=cr;break;case ja.GITHUB:r=lr;break;case ja.TWITTER:r=hr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?ca._create(n,a):Ar._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Fo(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof en?r.credentialFromError(t):r.credentialFromResult(t)}function wn(t,e){return e.catch(n=>{throw n instanceof en&&H4(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:W4(n),additionalUserInfo:PU(n),user:Vr.getOrCreate(i)}})}async function pp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>wn(t,n.confirm(r))}}class G4{constructor(e,n){this.resolver=n,this.auth=z4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return wn(VS(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Vr{constructor(e){this._delegate=e,this.multiFactor=NU(e)}static getOrCreate(e){return Vr.USER_MAP.has(e)||Vr.USER_MAP.set(e,new Vr(e)),Vr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return wn(this.auth,lS(this._delegate,e))}async linkWithPhoneNumber(e,n){return pp(this.auth,lB(this._delegate,e,n))}async linkWithPopup(e){return wn(this.auth,vB(this._delegate,e,wi))}async linkWithRedirect(e){return await mp(yt(this.auth)),PB(this._delegate,e,wi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return wn(this.auth,hS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return pp(this.auth,hB(this._delegate,e,n))}reauthenticateWithPopup(e){return wn(this.auth,yB(this._delegate,e,wi))}async reauthenticateWithRedirect(e){return await mp(yt(this.auth)),RB(this._delegate,e,wi)}sendEmailVerification(e){return _U(this._delegate,e)}async unlink(e){return await rU(this._delegate,e),this}updateEmail(e){return IU(this._delegate,e)}updatePassword(e){return bU(this._delegate,e)}updatePhoneNumber(e){return dB(this._delegate,e)}updateProfile(e){return wU(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return yU(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Vr.USER_MAP=new WeakMap;/**
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
 */const za=j;class gp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;za(r,"invalid-api-key",{appName:e.name}),za(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?wi:void 0;this._delegate=n.initialize({options:{persistence:K4(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(XF),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Vr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){V2(this._delegate,e,n)}applyActionCode(e){return cU(this._delegate,e)}checkActionCode(e){return dS(this._delegate,e)}confirmPasswordReset(e,n){return aU(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return wn(this._delegate,lU(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return gU(this._delegate,e)}isSignInWithEmailLink(e){return fU(this._delegate,e)}async getRedirectResult(){za(zf(),this._delegate,"operation-not-supported-in-this-environment");const e=await kB(this._delegate,wi);return e?wn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){k4(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=PI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=PI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return dU(this._delegate,e,n)}sendPasswordResetEmail(e,n){return oU(this._delegate,e,n||void 0)}async setPersistence(e){$4(this._delegate,e);let n;switch(e){case Cn.SESSION:n=qs;break;case Cn.LOCAL:n=await kn(hu)._isAvailable()?hu:W_;break;case Cn.NONE:n=aa;break;default:return Yt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return wn(this._delegate,nU(this._delegate))}signInWithCredential(e){return wn(this._delegate,Hd(this._delegate,e))}signInWithCustomToken(e){return wn(this._delegate,sU(this._delegate,e))}signInWithEmailAndPassword(e,n){return wn(this._delegate,hU(this._delegate,e,n))}signInWithEmailLink(e,n){return wn(this._delegate,mU(this._delegate,e,n))}signInWithPhoneNumber(e,n){return pp(this._delegate,uB(this._delegate,e,n))}async signInWithPopup(e){return za(zf(),this._delegate,"operation-not-supported-in-this-environment"),wn(this._delegate,_B(this._delegate,e,wi))}async signInWithRedirect(e){return za(zf(),this._delegate,"operation-not-supported-in-this-environment"),await mp(this._delegate),TB(this._delegate,e,wi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return uU(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}gp.Persistence=Cn;function PI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Vr.getOrCreate(o)),error:e,complete:n}}function K4(t,e){const n=j4(t,e);if(typeof self<"u"&&!n.includes(hu)&&n.push(hu),typeof window<"u")for(const r of[W_,qs])n.includes(r)||n.push(r);return n.includes(aa)||n.push(aa),n}/**
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
 */class Z_{constructor(){this.providerId="phone",this._delegate=new zs(VS(pe.auth()))}static credential(e,n){return zs.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Z_.PHONE_SIGN_IN_METHOD=zs.PHONE_SIGN_IN_METHOD;Z_.PROVIDER_ID=zs.PROVIDER_ID;/**
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
 */const Q4=j;class Y4{constructor(e,n,r=pe.app()){var i;Q4((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new aB(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const X4="auth-compat";function J4(t){t.INTERNAL.registerComponent(new jn(X4,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new gp(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:mo.EMAIL_SIGNIN,PASSWORD_RESET:mo.PASSWORD_RESET,RECOVER_EMAIL:mo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:mo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:mo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:mo.VERIFY_EMAIL}},EmailAuthProvider:Yi,FacebookAuthProvider:cr,GithubAuthProvider:lr,GoogleAuthProvider:ur,OAuthProvider:Fo,SAMLAuthProvider:Eh,PhoneAuthProvider:Z_,PhoneMultiFactorGenerator:CS,RecaptchaVerifier:Y4,TwitterAuthProvider:hr,Auth:gp,AuthCredential:Sa,Error:en}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(x4,O4)}J4(pe);/**
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
 */const LS="firebasestorage.googleapis.com",FS="storageBucket",Z4=2*60*1e3,e$=10*60*1e3,t$=1e3;/**
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
 */class dt extends en{constructor(e,n,r=0){super(Wf(e),`Firebase Storage: ${n} (${Wf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,dt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var it;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(it||(it={}));function Wf(t){return"storage/"+t}function ey(){const t="An unknown error occurred, please check the error payload for server response.";return new dt(it.UNKNOWN,t)}function n$(t){return new dt(it.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function r$(t){return new dt(it.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function i$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new dt(it.UNAUTHENTICATED,t)}function s$(){return new dt(it.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function o$(t){return new dt(it.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function US(){return new dt(it.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BS(){return new dt(it.CANCELED,"User canceled the upload/download.")}function a$(t){return new dt(it.INVALID_URL,"Invalid URL '"+t+"'.")}function c$(t){return new dt(it.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function u$(){return new dt(it.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+FS+"' property when initializing the app?")}function $S(){return new dt(it.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function l$(){return new dt(it.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function h$(){return new dt(it.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function d$(t){return new dt(it.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Bo(t){return new dt(it.INVALID_ARGUMENT,t)}function jS(){return new dt(it.APP_DELETED,"The Firebase app was deleted.")}function qS(t){return new dt(it.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ac(t,e){return new dt(it.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Wa(t){throw new dt(it.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Zt.makeFromUrl(e,n)}catch{return new Zt(e,"")}if(r.path==="")return r;throw c$(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(T){T.path_=decodeURIComponent(T.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},_=n===LS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",v=new RegExp(`^https?://${_}/${i}/${p}`,"i"),R=[{regex:a,indices:c,postModify:s},{regex:f,indices:m,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let T=0;T<R.length;T++){const k=R[T],x=k.regex.exec(e);if(x){const W=x[k.indices.bucket];let O=x[k.indices.path];O||(O=""),r=new Zt(W,O),k.postModify(r);break}}if(r==null)throw a$(e);return r}}class f${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function m$(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...p){u||(u=!0,e.apply(null,p))}function h(p){i=setTimeout(()=>{i=null,t(f,c())},p)}function d(){s&&clearTimeout(s)}function f(p,...v){if(u){d();return}if(p){d(),l.call(null,p,...v);return}if(c()||o){d(),l.call(null,p,...v);return}r<64&&(r*=2);let R;a===1?(a=2,R=0):R=(r+Math.random())*1e3,h(R)}let m=!1;function _(p){m||(m=!0,d(),!u&&(i!==null?(p||(a=2),clearTimeout(i),h(0)):p||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function p$(t){t(!1)}/**
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
 */function g$(t){return t!==void 0}function _$(t){return typeof t=="function"}function y$(t){return typeof t=="object"&&!Array.isArray(t)}function Jd(t){return typeof t=="string"||t instanceof String}function CI(t){return ty()&&t instanceof Blob}function ty(){return typeof Blob<"u"&&!rd()}function _p(t,e,n,r){if(r<e)throw Bo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Bo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Xi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function zS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Cs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Cs||(Cs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class v${constructor(e,n,r,i,s,o,a,c,u,l,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new pl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Cs.NO_ERROR,c=s.getStatus();if(!a||WS(c,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===Cs.ABORT;r(!1,new pl(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new pl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());g$(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=ey();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?jS():BS();o(c)}else{const c=US();o(c)}};this.canceled_?n(!1,new pl(!1,null,!0)):this.backoffId_=m$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&p$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function w$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function I$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function b$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function E$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function T$(t,e,n,r,i,s,o=!0){const a=zS(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return b$(u,e),w$(u,n),I$(u,s),E$(u,r),new v$(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function A$(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function R$(...t){const e=A$();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ty())return new Blob(t);throw new dt(it.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function S$(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function P$(t){if(typeof atob>"u")throw d$("base-64");return atob(t)}/**
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
 */const Un={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hf{constructor(e,n){this.data=e,this.contentType=n||null}}function HS(t,e){switch(t){case Un.RAW:return new Hf(GS(e));case Un.BASE64:case Un.BASE64URL:return new Hf(KS(t,e));case Un.DATA_URL:return new Hf(k$(e),x$(e))}throw ey()}function GS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function C$(t){let e;try{e=decodeURIComponent(t)}catch{throw Ac(Un.DATA_URL,"Malformed data URL.")}return GS(e)}function KS(t,e){switch(t){case Un.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ac(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Un.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ac(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=P$(e)}catch(i){throw i.message.includes("polyfill")?i:Ac(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class QS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ac(Un.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=O$(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function k$(t){const e=new QS(t);return e.base64?KS(Un.BASE64,e.rest):C$(e.rest)}function x$(t){return new QS(t).contentType}function O$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class kr{constructor(e,n){let r=0,i="";CI(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(CI(this.data_)){const r=this.data_,i=S$(r,e,n);return i===null?null:new kr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new kr(r,!0)}}static getBlob(...e){if(ty()){const n=e.map(r=>r instanceof kr?r.data_:r);return new kr(R$.apply(null,n))}else{const n=e.map(o=>Jd(o)?HS(Un.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new kr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function ny(t){let e;try{e=JSON.parse(t)}catch{return null}return y$(e)?e:null}/**
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
 */function N$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function D$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function YS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function V$(t,e){return e}class on{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||V$}}let gl=null;function M$(t){return!Jd(t)||t.length<2?t:YS(t)}function Zd(){if(gl)return gl;const t=[];t.push(new on("bucket")),t.push(new on("generation")),t.push(new on("metageneration")),t.push(new on("name","fullPath",!0));function e(s,o){return M$(o)}const n=new on("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new on("size");return i.xform=r,t.push(i),t.push(new on("timeCreated")),t.push(new on("updated")),t.push(new on("md5Hash",null,!0)),t.push(new on("cacheControl",null,!0)),t.push(new on("contentDisposition",null,!0)),t.push(new on("contentEncoding",null,!0)),t.push(new on("contentLanguage",null,!0)),t.push(new on("contentType",null,!0)),t.push(new on("metadata","customMetadata",!0)),gl=t,gl}function L$(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Zt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function F$(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return L$(r,t),r}function XS(t,e,n){const r=ny(e);return r===null?null:F$(t,r,n)}function U$(t,e,n,r){const i=ny(e);if(i===null||!Jd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const l=t.bucket,h=t.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=Xi(d,n,r),m=zS({alt:"media",token:u});return f+m})[0]}function ry(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const kI="prefixes",xI="items";function B$(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[kI])for(const i of n[kI]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Zt(e,s));r.prefixes.push(o)}if(n[xI])for(const i of n[xI]){const s=t._makeStorageReference(new Zt(e,i.name));r.items.push(s)}return r}function $$(t,e,n){const r=ny(n);return r===null?null:B$(t,e,r)}class ti{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function wr(t){if(!t)throw ey()}function ef(t,e){function n(r,i){const s=XS(t,i,e);return wr(s!==null),s}return n}function j$(t,e){function n(r,i){const s=$$(t,e,i);return wr(s!==null),s}return n}function q$(t,e){function n(r,i){const s=XS(t,i,e);return wr(s!==null),U$(s,i,t.host,t._protocol)}return n}function Ca(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=s$():i=i$():n.getStatus()===402?i=r$(t.bucket):n.getStatus()===403?i=o$(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function tf(t){const e=Ca(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=n$(t.path)),s.serverResponse=i.serverResponse,s}return n}function JS(t,e,n){const r=e.fullServerUrl(),i=Xi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ti(i,s,ef(t,n),o);return a.errorHandler=tf(e),a}function z$(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Xi(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new ti(a,c,j$(t,e.bucket),u);return l.urlParams=s,l.errorHandler=Ca(e),l}function W$(t,e,n){const r=e.fullServerUrl(),i=Xi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ti(i,s,q$(t,n),o);return a.errorHandler=tf(e),a}function H$(t,e,n,r){const i=e.fullServerUrl(),s=Xi(i,t.host,t._protocol),o="PATCH",a=ry(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new ti(s,o,ef(t,r),u);return l.headers=c,l.body=a,l.errorHandler=tf(e),l}function G$(t,e){const n=e.fullServerUrl(),r=Xi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(c,u){}const a=new ti(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=tf(e),a}function K$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function ZS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=K$(null,e)),r}function Q$(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let R="";for(let T=0;T<2;T++)R=R+Math.random().toString().slice(2);return R}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=ZS(e,r,i),l=ry(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=kr.getBlob(h,r,d);if(f===null)throw $S();const m={name:u.fullPath},_=Xi(s,t.host,t._protocol),p="POST",v=t.maxUploadRetryTime,w=new ti(_,p,ef(t,n),v);return w.urlParams=m,w.headers=o,w.body=f.uploadData(),w.errorHandler=Ca(e),w}class Sh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function iy(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{wr(!1)}return wr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Y$(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=ZS(e,r,i),a={name:o.fullPath},c=Xi(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=ry(o,n),d=t.maxUploadRetryTime;function f(_){iy(_);let p;try{p=_.getResponseHeader("X-Goog-Upload-URL")}catch{wr(!1)}return wr(Jd(p)),p}const m=new ti(c,u,f,d);return m.urlParams=a,m.headers=l,m.body=h,m.errorHandler=Ca(e),m}function X$(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const l=iy(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{wr(!1)}h||wr(!1);const d=Number(h);return wr(!isNaN(d)),new Sh(d,r.size(),l==="final")}const o="POST",a=t.maxUploadRetryTime,c=new ti(n,o,s,a);return c.headers=i,c.errorHandler=Ca(e),c}const OI=256*1024;function J$(t,e,n,r,i,s,o,a){const c=new Sh(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw l$();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l;let f="";l===0?f="finalize":u===l?f="upload, finalize":f="upload";const m={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},_=r.slice(h,d);if(_===null)throw $S();function p(T,k){const x=iy(T,["active","final"]),W=c.current+l,O=r.size();let U;return x==="final"?U=ef(e,s)(T,k):U=null,new Sh(W,O,x==="final",U)}const v="POST",w=e.maxUploadRetryTime,R=new ti(n,v,p,w);return R.headers=m,R.body=_.uploadData(),R.progressCallback=a||null,R.errorHandler=Ca(t),R}/**
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
 */const Z$={STATE_CHANGED:"state_changed"},ln={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Gf(t){switch(t){case"running":case"pausing":case"canceling":return ln.RUNNING;case"paused":return ln.PAUSED;case"success":return ln.SUCCESS;case"canceled":return ln.CANCELED;case"error":return ln.ERROR;default:return ln.ERROR}}/**
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
 */class ej{constructor(e,n,r){if(_$(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function po(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class tj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Cs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Cs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Cs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Wa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class nj extends tj{initXhr(){this.xhr_.responseType="text"}}function dr(){return new nj}/**
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
 */class eP{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Zd(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(it.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(WS(i.status,[]))if(s)i=US();else{this.sleepTime=Math.max(this.sleepTime*2,t$),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(it.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Y$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,dr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=X$(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,dr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=OI*this._chunkMultiplier,n=new Sh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=J$(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,dr,i,s,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){OI*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=JS(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,dr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=Q$(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,dr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=BS(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Gf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new ej(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Gf(this._state)){case ln.SUCCESS:po(this._resolve.bind(null,this.snapshot))();break;case ln.CANCELED:case ln.ERROR:const n=this._reject;po(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Gf(this._state)){case ln.RUNNING:case ln.PAUSED:e.next&&po(e.next.bind(e,this.snapshot))();break;case ln.SUCCESS:e.complete&&po(e.complete.bind(e))();break;case ln.CANCELED:case ln.ERROR:e.error&&po(e.error.bind(e,this._error))();break;default:e.error&&po(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Hs{constructor(e,n){this._service=e,n instanceof Zt?this._location=n:this._location=Zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hs(e,n)}get root(){const e=new Zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YS(this._location.path)}get storage(){return this._service}get parent(){const e=N$(this._location.path);if(e===null)return null;const n=new Zt(this._location.bucket,e);return new Hs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qS(e)}}function rj(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new eP(t,new kr(e),n)}function ij(t){const e={prefixes:[],items:[]};return tP(t,e).then(()=>e)}async function tP(t,e,n){const i=await nP(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await tP(t,e,i.nextPageToken)}function nP(t,e){e!=null&&typeof e.maxResults=="number"&&_p("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=z$(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,dr)}function sj(t){t._throwIfRoot("getMetadata");const e=JS(t.storage,t._location,Zd());return t.storage.makeRequestWithTokens(e,dr)}function oj(t,e){t._throwIfRoot("updateMetadata");const n=H$(t.storage,t._location,e,Zd());return t.storage.makeRequestWithTokens(n,dr)}function aj(t){t._throwIfRoot("getDownloadURL");const e=W$(t.storage,t._location,Zd());return t.storage.makeRequestWithTokens(e,dr).then(n=>{if(n===null)throw h$();return n})}function cj(t){t._throwIfRoot("deleteObject");const e=G$(t.storage,t._location);return t.storage.makeRequestWithTokens(e,dr)}function rP(t,e){const n=D$(t._location.path,e),r=new Zt(t._location.bucket,n);return new Hs(t.storage,r)}/**
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
 */function uj(t){return/^[A-Za-z]+:\/\//.test(t)}function lj(t,e){return new Hs(t,e)}function iP(t,e){if(t instanceof sy){const n=t;if(n._bucket==null)throw u$();const r=new Hs(n,n._bucket);return e!=null?iP(r,e):r}else return e!==void 0?rP(t,e):t}function hj(t,e){if(e&&uj(e)){if(t instanceof sy)return lj(t,e);throw Bo("To use ref(service, url), the first argument must be a Storage instance.")}else return iP(t,e)}function NI(t,e){const n=e==null?void 0:e[FS];return n==null?null:Zt.makeFromBucketSpec(n,t)}function dj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:oT(i,t.app.options.projectId))}class sy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=LS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Z4,this._maxUploadRetryTime=e$,this._requests=new Set,i!=null?this._bucket=Zt.makeFromBucketSpec(i,this._host):this._bucket=NI(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Zt.makeFromBucketSpec(this._url,e):this._bucket=NI(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_p("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_p("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new f$(jS());{const o=T$(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const DI="@firebase/storage",VI="0.11.2";/**
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
 */const fj="storage";function mj(t,e,n){return t=oe(t),rj(t,e,n)}function pj(t){return t=oe(t),sj(t)}function gj(t,e){return t=oe(t),oj(t,e)}function _j(t,e){return t=oe(t),nP(t,e)}function yj(t){return t=oe(t),ij(t)}function vj(t){return t=oe(t),aj(t)}function wj(t){return t=oe(t),cj(t)}function MI(t,e){return t=oe(t),hj(t,e)}function Ij(t,e){return rP(t,e)}function bj(t,e,n,r={}){dj(t,e,n,r)}function Ej(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new sy(n,r,i,e,Qr)}function Tj(){$r(new jn(fj,Ej,"PUBLIC").setMultipleInstances(!0)),$n(DI,VI,""),$n(DI,VI,"esm2017")}Tj();/**
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
 */class _l{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class LI{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new _l(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new _l(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new _l(o,this,this._ref)):s={next:n.next?o=>n.next(new _l(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class FI{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Ur(e,this._service))}get items(){return this._delegate.items.map(e=>new Ur(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=Ij(this._delegate,e);return new Ur(n,this.storage)}get root(){return new Ur(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Ur(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new LI(mj(this._delegate,e,n),this)}putString(e,n=Un.RAW,r){this._throwIfRoot("putString");const i=HS(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new LI(new eP(this._delegate,new kr(i.data,!0),s),this)}listAll(){return yj(this._delegate).then(e=>new FI(e,this.storage))}list(e){return _j(this._delegate,e||void 0).then(n=>new FI(n,this.storage))}getMetadata(){return pj(this._delegate)}updateMetadata(e){return gj(this._delegate,e)}getDownloadURL(){return vj(this._delegate)}delete(){return this._throwIfRoot("delete"),wj(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw qS(e)}}/**
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
 */class sP{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(UI(e))throw Bo("ref() expected a child path but got a URL, use refFromURL instead.");return new Ur(MI(this._delegate,e),this)}refFromURL(e){if(!UI(e))throw Bo("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Zt.makeFromUrl(e,this._delegate.host)}catch{throw Bo("refFromUrl() expected a valid full URL but got an invalid one.")}return new Ur(MI(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){bj(this._delegate,e,n,r)}}function UI(t){return/^[A-Za-z]+:\/\//.test(t)}const Aj="@firebase/storage-compat",Rj="0.3.2";/**
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
 */const Sj="storage-compat";function Pj(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new sP(n,r)}function Cj(t){const e={TaskState:ln,TaskEvent:Z$,StringFormat:Un,Storage:sP,Reference:Ur};t.INTERNAL.registerComponent(new jn(Sj,Pj,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Aj,Rj)}Cj(pe);const Wn=(t,e)=>t?t.find(n=>n.id===e):null,kj=(t,e)=>{if(t){const n=t.findIndex(r=>r.id===e.id);e.id&&n>-1?t[n]=e:t.push(e)}else return null},du=t=>typeof(t==null?void 0:t.data)!="function"?t:{...t.data(),id:t.id},nW=function(t){const e=Math.floor(Math.random()*t.length);return t[e]},oP=Ys("fourms",{state:()=>({items:[]}),actions:{appendThreadToFourm(t){const e=Wn(this.items,t.forumId);if(!e){console.warn("can't find fourm at appendThreadToFourm");return}e.threads=e.threads||[],e.threads.push(t.threadId)},featchFourm(t){return Mt().featchItem("forums",t)},featchFourms(t){return Mt().featchItems(t,"forums")}}});var ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function xj(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}var Oj=xj;function Nj(t,e){return t===e||t!==t&&e!==e}var Dj=Nj,Vj=typeof ic=="object"&&ic&&ic.Object===Object&&ic,Mj=Vj,Lj=Mj,Fj=typeof self=="object"&&self&&self.Object===Object&&self,Uj=Lj||Fj||Function("return this")(),aP=Uj,Bj=aP,$j=Bj.Symbol,cP=$j,BI=cP,uP=Object.prototype,jj=uP.hasOwnProperty,qj=uP.toString,Ha=BI?BI.toStringTag:void 0;function zj(t){var e=jj.call(t,Ha),n=t[Ha];try{t[Ha]=void 0;var r=!0}catch{}var i=qj.call(t);return r&&(e?t[Ha]=n:delete t[Ha]),i}var Wj=zj,Hj=Object.prototype,Gj=Hj.toString;function Kj(t){return Gj.call(t)}var Qj=Kj,$I=cP,Yj=Wj,Xj=Qj,Jj="[object Null]",Zj="[object Undefined]",jI=$I?$I.toStringTag:void 0;function eq(t){return t==null?t===void 0?Zj:Jj:jI&&jI in Object(t)?Yj(t):Xj(t)}var lP=eq;function tq(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var nf=tq,nq=lP,rq=nf,iq="[object AsyncFunction]",sq="[object Function]",oq="[object GeneratorFunction]",aq="[object Proxy]";function cq(t){if(!rq(t))return!1;var e=nq(t);return e==sq||e==oq||e==iq||e==aq}var uq=cq,lq=9007199254740991;function hq(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=lq}var dq=hq,fq=uq,mq=dq;function pq(t){return t!=null&&mq(t.length)&&!fq(t)}var gq=pq,_q=9007199254740991,yq=/^(?:0|[1-9]\d*)$/;function vq(t,e){var n=typeof t;return e=e??_q,!!e&&(n=="number"||n!="symbol"&&yq.test(t))&&t>-1&&t%1==0&&t<e}var wq=vq,Iq=Dj,bq=gq,Eq=wq,Tq=nf;function Aq(t,e,n){if(!Tq(n))return!1;var r=typeof e;return(r=="number"?bq(n)&&Eq(e,n.length):r=="string"&&e in n)?Iq(n[e],t):!1}var Rq=Aq,Sq=/\s/;function Pq(t){for(var e=t.length;e--&&Sq.test(t.charAt(e)););return e}var Cq=Pq,kq=Cq,xq=/^\s+/;function Oq(t){return t&&t.slice(0,kq(t)+1).replace(xq,"")}var Nq=Oq;function Dq(t){return t!=null&&typeof t=="object"}var Vq=Dq,Mq=lP,Lq=Vq,Fq="[object Symbol]";function Uq(t){return typeof t=="symbol"||Lq(t)&&Mq(t)==Fq}var Bq=Uq,$q=Nq,qI=nf,jq=Bq,zI=0/0,qq=/^[-+]0x[0-9a-f]+$/i,zq=/^0b[01]+$/i,Wq=/^0o[0-7]+$/i,Hq=parseInt;function Gq(t){if(typeof t=="number")return t;if(jq(t))return zI;if(qI(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=qI(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=$q(t);var n=zq.test(t);return n||Wq.test(t)?Hq(t.slice(2),n?2:8):qq.test(t)?zI:+t}var hP=Gq,Kq=hP,WI=1/0,Qq=17976931348623157e292;function Yq(t){if(!t)return t===0?t:0;if(t=Kq(t),t===WI||t===-WI){var e=t<0?-1:1;return e*Qq}return t===t?t:0}var Xq=Yq,Jq=Xq;function Zq(t){var e=Jq(t),n=e%1;return e===e?n?e-n:e:0}var e9=Zq,t9=Oj,n9=Rq,r9=e9,i9=Math.ceil,s9=Math.max;function o9(t,e,n){(n?n9(t,e,n):e===void 0)?e=1:e=s9(r9(e),0);var r=t==null?0:t.length;if(!r||e<1)return[];for(var i=0,s=0,o=Array(i9(r/e));i<r;)o[s++]=t9(t,i,i+=e);return o}var a9=o9;const c9=oy(a9),fu=Ys("threads",{state:()=>({items:[]}),getters:{thread(){const t=$o();return e=>{const n=Wn(this.items,e);return n?{...n,get author(){return Wn(t==null?void 0:t.items,n==null?void 0:n.userId)},get replaiesCount(){var r;return((r=n==null?void 0:n.posts)==null?void 0:r.length)-1},get contributorsCount(){var r;return n.contributors?((r=n==null?void 0:n.contributors)==null?void 0:r.length)??0:0}}:{}}}},actions:{async createThread({forumId:t,title:e,text:n}){const r=Fi(),i=Mt(),s=oP(),o=Ph(),a=r.id,c=pe.firestore.FieldValue.serverTimestamp(),u=pe.firestore().collection("threads").doc(),l={forumId:t,title:e,publishedAt:c,userId:a,id:u.id},h=pe.firestore().collection("users").doc(a),d=pe.firestore().collection("forums").doc(t),f=pe.firestore().batch();f.set(u,l),f.update(h,{threads:pe.firestore.FieldValue.arrayUnion(u.id)}),f.update(d,{threads:pe.firestore.FieldValue.arrayUnion(u.id)}),await f.commit();const m=await u.get();return i.setItem("threads",{...m.data(),id:m.id}),s.appendThreadToFourm({forumId:t,threadId:u.id}),this.appendThreadToUser({userId:a,threadId:u.id}),await o.addPost({text:n,threadId:u.id,firstInThread:!0}),Wn(this.items,u.id)},async updateThread(t){const e=Ph(),n=Mt(),r=Wn(this.items,t.id),i=Wn(e.items,r.posts[0]);let s={...r,title:t.title},o={...i,text:t.text};const a=pe.firestore().collection("threads").doc(t.id),c=pe.firestore().collection("posts").doc(i.id),u=pe.firestore().batch();return u.update(a,s),u.update(c,o),await u.commit(),s=await a.get(),o=await c.get(),n.setItem("posts",o),n.setItem("threads",s),du(s)},featchThread(t,e=!1,n=null){return Mt().featchItem("threads",t,null,e,n)},featchThreads(t){return Mt().featchItems(t,"threads")},appendThreadToUser(t){const e=$o(),n=Wn(e.items,t.userId);if(!n){console.warn("can't find user at appendThreadToUser");return}n.threads=n.threads||[],n.threads.push(t.threadId)},appendThreadToContributors(t){const e=Wn(this.items,t.userId);if(!e){console.warn("can't find contribut at appendThreadToContributors");return}e.contributors=e.contributors||[],e.contributors.includes(t.threadId)||e.contributors.push(t.threadId)},async feathThreadsByPage(t,e,n=10){this.items=[];const i=c9(t,n)[e-1];return this.featchThreads(i)}}}),u9=Ys("categories",{state:()=>({items:[]}),actions:{featchCategoury(t){return Mt().featchItem("categories",t)},featchAllCategories(){const t=Mt();return new Promise(e=>{pe.firestore().collection("categories").onSnapshot(n=>{const r=n.docs.map(i=>{const s={id:i.id,...i.data()};return t.setItem("categories",s),s});e(r)})})}}}),Mt=Ys("max",{state:()=>({allResources:{users:$o(),threads:fu(),posts:Ph(),forums:oP(),categories:u9()}}),actions:{featchItem(t,e,n=null,r=!1,i=null){const s=Fi();return new Promise(o=>{const a=pe.firestore().collection(t).doc(e).onSnapshot(c=>{if(r&&a(),c.exists){const u={...c.data(),id:c.id};let l=Wn(this.allResources[t].items,e);if(l=l?{...l}:null,this.setItem(t,du(u)),typeof i=="function"){const h=c.metadata.hasPendingWrites;i({item:{...u},previousItem:l,isLocal:h})}o(u)}else o(null)});n?n(a):s.appenUnsubscripe(a)})},setItem(t,e){kj(this.allResources[t].items,du(e))},featchItems(t=[],e,n=null){const r=t==null?void 0:t.map(i=>this.featchItem(e,i,n));return Promise.all(r)}}}),Ph=Ys("posts",{state:()=>({items:[]}),getters:{},actions:{async addPost(t){const e=Fi(),n=fu(),r=Mt();t.userId=e.id,t.publishedAt=pe.firestore.FieldValue.serverTimestamp(),t.firstInThread=t.firstInThread||!1;const i=pe.firestore().batch(),s=pe.firestore().collection("posts").doc(),o=pe.firestore().collection("threads").doc(t.threadId),a=pe.firestore().collection("users").doc(t.userId);i.set(s,t);const c={posts:pe.firestore.FieldValue.arrayUnion(s.id),contributors:pe.firestore.FieldValue.arrayUnion(t.userId)};t.firstInThread||(c.contributors=pe.firestore.FieldValue.arrayUnion(t.userId)),i.update(o,c),i.update(a,{postsCount:pe.firestore.FieldValue.increment(1)}),await i.commit();const u=await s.get();r.setItem("posts",{...u.data(),id:u.id}),this.appendPostToThread({postId:u.id,threadId:t.threadId}),t.firstInThread||n.appendThreadToContributors({userId:t.threadId,threadId:t.userId})},featchPost(t,e=!1,n=null){return Mt().featchItem("posts",t,null,e,n)},featchPosts(t,e=!1,n=null){return Mt().featchItems(t,"posts",n)},appendPostToThread(t){const e=fu(),n=Wn(e.items,t.threadId);if(!n){console.warn("can't find thread at appendPostToThread");return}n.posts=n.posts||[],n.posts.push(t.postId)},async updatePost(t){const e=Fi(),n=Mt(),r={text:t.text,edited:{at:pe.firestore.FieldValue.serverTimestamp(),by:e.id,moderated:!1}},i=pe.firestore().collection("posts").doc(t.id);await i.update(r);const s=await i.get();n.setItem("posts",s)}}}),$o=Ys("users",{state:()=>({items:[]}),getters:{user(t){const e=Ph(),n=fu();return r=>{const i=Wn(t.items,r);return i?{...i,get posts(){return e.items.filter(s=>s.userId===i.id)},get postsCount(){return i.postsCount??0},get threads(){return n.items.filter(s=>s.userId===i.id)},get threadIds(){return i.threads},get threadsCount(){var s;return((s=i.threads)==null?void 0:s.length)??0}}:null}}},actions:{featchUsers(t){return Mt().featchItems(t,"users")},async setUser(t){const e=Mt(),n={avatar:t.avatar??null,username:t.userName??null,name:t.name??null,bio:t.bio??null,email:t.email??null,website:t.website??null,location:t.location??null};await pe.firestore().collection("users").doc(t.id).update(n),e.setItem("users",n)},featchUser(t){return Mt().featchItem("users",t)},async createUser({name:t,userName:e,email:n,avatar:r,id:i}){const s=Mt(),o=pe.firestore.FieldValue.serverTimestamp(),a=e.toLowerCase();n=n.toLowerCase();const c={name:t,email:n,registeredAt:o,usernameLower:a,avatar:r},u=pe.firestore().collection("users").doc(i);u.set(c);const l=await u.get();return s.setItem("users",l),du(l)}}}),Fi=Ys("auth",{state:()=>({id:null,unsubscripers:[],authUnsubscripers:null,authObserverUnsubscripers:null}),getters:{authUser(t){return $o().user(t.id)}},actions:{async initAuthenication(){if(this.authObserverUnsubscripers)return;const t=new Promise(e=>{pe.auth().onAuthStateChanged(async n=>{this.unsubscripeAuthUserSnapshot(),n&&(await this.featchAuthUser(),e(n)),e(null)})});this.setAuthObserverUnsubscripers(t)},async updateUser(t){return await pe.auth().currentUser.updateEmail(t)},async reAuthuntecated({email:t,password:e}){const n=pe.auth.EmailAuthProvider.credential(t,e);await pe.auth().currentUser.reauthenticateWithCredential(n)},appenUnsubscripe(t){this.unsubscripers.push(t)},clearAllUnsubscripe(){this.unsubscripers=[]},async featchAuthUser(){var i;const t=(i=pe.auth().currentUser)==null?void 0:i.uid,e=Mt();if(!t)return;const n=this;function r(s){n.setAuthUnsubscripers(s)}await e.featchItem("users",t,r),this.id=t},setAuthUnsubscripers(t){this.authUnsubscripers=t},async setAuthObserverUnsubscripers(t){this.authObserverUnsubscripers=t},async unsubscripeAllSnapShots(){this.unsubscripers.forEach(t=>t()),this.clearAllUnsubscripe()},async unsubscripeAuthUserSnapshot(){this.authUnsubscripers?this.authUnsubscripers():this.setAuthUnsubscripers(null)},async registerUserWithEmailAndPassword({name:t,password:e,userName:n,email:r,avatar:i}){const s=$o(),o=await pe.auth().createUserWithEmailAndPassword(r,e);i=await this.uploadUserAvatar(o.user.uid,i),await s.createUser({id:o.user.uid,name:t,userName:n,email:r,avatar:i})},async uploadUserAvatar(t,e){return e?(t=t??this.id,await(await pe.storage().ref().child(`uploads/${t}/images/${Date.now()}-${e.name}`).put(e)).ref.getDownloadURL()):null},async loginWithGoogle(){const t=$o(),e=new pe.auth.GoogleAuthProvider,n=await pe.auth().signInWithPopup(e),{user:r}=n;pe.firestore().collection("users").doc(r.uid).get().exists||await t.createUser({id:r.uid,email:r.email,name:r.displayName,userName:r.email,avatar:r.photoURL})},async logIn({email:t,password:e}){return await pe.auth().signInWithEmailAndPassword(t,e)},async logOut(){await pe.auth().signOut(),this.id=null},async featchAuthUsersPosts(t){const e=Mt();let n=pe.firestore().collection("posts").where("userId","==",this.id).orderBy("publishedAt","desc").limit(10);if(t){const i=await pe.firestore().collection("posts").doc(t.id).get();n=n.startAfter(i)}(await du(n.get())).forEach(i=>{e.setItem("posts",i)})}}}),l9=[{path:"/",name:"home",component:()=>zn(()=>import("./PageHome-0e01f666.js"),["assets/PageHome-0e01f666.js","assets/FourmList-04d453ee.js","assets/asyncDataStatues-4f9050e3.js"])},{path:"/category/:id",name:"category",component:()=>zn(()=>import("./CategoryItem-586634c3.js"),["assets/CategoryItem-586634c3.js","assets/FourmList-04d453ee.js"]),props:!0},{path:"/fourm/:id",name:"fourm",component:()=>zn(()=>import("./FourmShow-3b3d0dea.js"),["assets/FourmShow-3b3d0dea.js","assets/AppDate-cb14dc0d.js"]),props:!0},{path:"/me",name:"profile",component:()=>zn(()=>import("./UserProfile-1eef7954.js"),["assets/UserProfile-1eef7954.js","assets/PostList-6935457d.js","assets/AppDate-cb14dc0d.js","assets/AppFormField-d88df94d.js","assets/UserProfile-7c608173.css"]),meta:{toTop:0,smoothScroll:!0,requireAuth:!0}},{path:"/me/edit",name:"edit",component:()=>zn(()=>import("./UserProfile-1eef7954.js"),["assets/UserProfile-1eef7954.js","assets/PostList-6935457d.js","assets/AppDate-cb14dc0d.js","assets/AppFormField-d88df94d.js","assets/UserProfile-7c608173.css"]),props:{edit:!0},meta:{toTop:0,smoothScroll:!0,requireAuth:!0}},{path:"/register",name:"register",component:()=>zn(()=>import("./RegisterForm-6c295565.js"),["assets/RegisterForm-6c295565.js","assets/AppFormField-d88df94d.js"]),meta:{requireGust:!0}},{path:"/login",name:"login",component:()=>zn(()=>import("./LogIn-0abb78f6.js"),["assets/LogIn-0abb78f6.js","assets/AppFormField-d88df94d.js"]),meta:{requireGust:!0}},{path:"/logout",name:"logout",async beforeEnter(t,e,n){await Fi().logOut(),n("/")}},{path:"/fourm/:forumId/thread/create",name:"createThread",component:()=>zn(()=>import("./NewThread-0e23fafb.js"),["assets/NewThread-0e23fafb.js","assets/ThreadEditor-e30da06b.js","assets/AppFormField-d88df94d.js"]),props:!0,meta:{requireAuth:!0}},{path:"/thread/:id/edit",name:"threadEdit",component:()=>zn(()=>import("./ThreadEdit-0141d2fe.js"),["assets/ThreadEdit-0141d2fe.js","assets/ThreadEditor-e30da06b.js","assets/AppFormField-d88df94d.js","assets/asyncDataStatues-4f9050e3.js"]),props:!0,meta:{requireAuth:!0}},{path:"/thread/:id",name:"thread",component:()=>zn(()=>import("./ThreadShow-aef487fd.js"),["assets/ThreadShow-aef487fd.js","assets/PostList-6935457d.js","assets/AppDate-cb14dc0d.js","assets/AppFormField-d88df94d.js","assets/asyncDataStatues-4f9050e3.js"]),props:!0,async beforeEnter(t){var r;const e=fu();return await e.featchThread(t.params.id,!0),((r=e==null?void 0:e.items)==null?void 0:r.find(i=>i.id===t.params.id))?!0:{name:"NotFound",params:{pathMatch:t.path.substring(1).split("/")},query:t.query,hash:t.hash}}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>zn(()=>import("./NotFound-ade1bc31.js"),[])}],dP=Kx({history:lx(),routes:l9,scrollBehavior(t,e,n){return n||{x:10,y:0}}});dP.beforeEach(async t=>{const e=Fi();if(e.initAuthenication(),await e.clearAllUnsubscripe(),t.meta.requireAuth&&!e.id)return{name:"login",query:{redirectTo:t.path}};if(t.meta.requireGust&&e.id)return{name:"home"}});const Ch=br([]),h9=function({message:t,timeout:e=null}){const n=Math.random()+Date.now();Ch.push({id:n,message:t}),e&&setTimeout(fP(n),e)},fP=function(t){const e=Ch.findIndex(n=>n.id===t);Ch.splice(e,1)};function HI(){return{notifications:Ch,addNotification:h9,removeNotification:fP}}const d9={class:"notifications"},f9={__name:"AppNotifications",setup(t){const{notifications:e}=HI(),{removeNotification:n}=HI();return(r,i)=>(qe(),Mn("div",d9,[Oe(Ak,{name:"notification"},{default:Cr(()=>[(qe(!0),Mn(zt,null,IE(Te(e),s=>(qe(),Mn("div",{class:"notification",key:s.id},[st("span",null,Bp(s.message),1),st("button",{onClick:i[0]||(i[0]=(...o)=>Te(n)&&Te(n)(...o))},"X")]))),128))]),_:1})]))}};const m9=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},p9={class:"spinner"},g9=qC('<div class="rect1" data-v-930b096d></div><div class="rect2" data-v-930b096d></div><div class="rect3" data-v-930b096d></div><div class="rect4" data-v-930b096d></div><div class="rect5" data-v-930b096d></div>',5),_9=[g9],y9={__name:"AppSpinner",props:{spinnerColor:{type:String,default:"#263959"}},setup(t){Ek(r=>({c110bc50:n.value}));const n=Pt(t.spinnerColor);return(r,i)=>(qe(),Mn("div",p9,_9))}},v9=m9(y9,[["__scopeId","data-v-930b096d"]]),w9=["src"],I9={__name:"AppAvatar",props:["src"],setup(t){return(e,n)=>(qe(),Mn("img",{src:t.src||"/user-placeholder.png"},null,8,w9))}},b9="/assets/vueschool-logo-62cf838e.svg",E9="/assets/arrow-profile-1274649f.svg",T9={class:"header",id:"header"},A9=st("img",{src:b9},null,-1),R9=st("div",{class:"top bar"},null,-1),S9=st("div",{class:"middle bar"},null,-1),P9=st("div",{class:"bottom bar"},null,-1),C9=[R9,S9,P9],k9={key:0,class:"navbar-user"},x9=st("img",{class:"icon-profile",src:E9,alt:""},null,-1),O9=st("div",{class:"triangle-drop"},null,-1),N9={class:"dropdown-menu"},D9={class:"dropdown-menu-item"},V9={class:"dropdown-menu-item"},M9={class:"navbar-item"},L9={class:"navbar-item"},F9={class:"navbar-item"},U9={class:"navbar-item mobile-only"},B9={key:0,class:"navbar-item mobile-only"},$9={__name:"TheNavbar",setup(t){const e=Fi(),n=Pt(!1),r=Pt(!1),i=de(()=>e.authUser);return(s,o)=>{const a=or("routerLink"),c=I9,u=or("RouterLink"),l=or("router-link"),h=Dy("page-scroll"),d=Dy("click-outside");return ac((qe(),Mn("header",T9,[Oe(a,{to:"/",class:"logo"},{default:Cr(()=>[A9]),_:1}),ac((qe(),Mn("div",{onClick:o[0]||(o[0]=f=>r.value=!r.value),class:"btn-hamburger"},C9)),[[h,()=>r.value=!1]]),st("nav",{class:Pc(["navbar",{"navbar-open":r.value}])},[st("ul",null,[i.value?(qe(),Mn("li",k9,[ac((qe(),Mn("a",{onClick:o[1]||(o[1]=f=>n.value=!n.value)},[Oe(c,{class:"avatar-small",src:i.value.avatar||"/user-placeholder.png",alt:"image for the person"},null,8,["src"]),st("span",null,[rs(Bp(i.value.name)+" ",1),x9])])),[[d,()=>n.value=!1]]),st("div",{id:"user-dropdown",class:Pc({"active-drop":n.value})},[O9,st("ul",N9,[st("li",D9,[Oe(u,{to:{name:"profile"}},{default:Cr(()=>[rs("View profile")]),_:1})]),st("li",V9,[i.value?(qe(),Mn("a",{key:0,onClick:o[2]||(o[2]=lv(f=>Te(e).logOut(),["prevent"]))},"LogOut")):cs("",!0)])])],2)])):cs("",!0),st("li",M9,[i.value?cs("",!0):(qe(),Dt(l,{key:0,to:{name:"login"}},{default:Cr(()=>[rs("Login")]),_:1}))]),st("li",L9,[i.value?cs("",!0):(qe(),Dt(l,{key:0,to:{name:"register"}},{default:Cr(()=>[rs("Register Now")]),_:1}))])]),st("ul",null,[st("li",F9,[Oe(a,{to:"/"},{default:Cr(()=>[rs("Home")]),_:1})]),st("li",U9,[Oe(l,{to:{name:"profile"}},{default:Cr(()=>[rs("My Profile")]),_:1})]),i.value?(qe(),Mn("li",B9,[st("a",{onClick:o[3]||(o[3]=lv(f=>(Te(e).logOut(),s.$router.push("/")),["prevent"]))},"Logout")])):cs("",!0)])],2)])),[[d,()=>r.value=!1],[h,()=>n.value=!1]])}}};var mP={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(t,e){(function(n,r){t.exports=r()})(ic,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(m){var _,p;for(_ in m)p=m[_],p!==void 0&&m.hasOwnProperty(_)&&(r[_]=p);return this},n.status=null,n.set=function(m){var _=n.isStarted();m=i(m,r.minimum,1),n.status=m===1?null:m;var p=n.render(!_),v=p.querySelector(r.barSelector),w=r.speed,R=r.easing;return p.offsetWidth,a(function(T){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),c(v,o(m,w,R)),m===1?(c(p,{transition:"none",opacity:1}),p.offsetWidth,setTimeout(function(){c(p,{transition:"all "+w+"ms linear",opacity:0}),setTimeout(function(){n.remove(),T()},w)},w)):setTimeout(T,w)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var m=function(){setTimeout(function(){n.status&&(n.trickle(),m())},r.trickleSpeed)};return r.trickle&&m(),this},n.done=function(m){return!m&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(m){var _=n.status;return _?(typeof m!="number"&&(m=(1-_)*i(Math.random()*_,.1,.95)),_=i(_+m,0,.994),n.set(_)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var m=0,_=0;n.promise=function(p){return!p||p.state()==="resolved"?this:(_===0&&n.start(),m++,_++,p.always(function(){_--,_===0?(m=0,n.done()):n.set((m-_)/m)}),this)}}(),n.render=function(m){if(n.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var _=document.createElement("div");_.id="nprogress",_.innerHTML=r.template;var p=_.querySelector(r.barSelector),v=m?"-100":s(n.status||0),w=document.querySelector(r.parent),R;return c(p,{transition:"all 0 linear",transform:"translate3d("+v+"%,0,0)"}),r.showSpinner||(R=_.querySelector(r.spinnerSelector),R&&f(R)),w!=document.body&&l(w,"nprogress-custom-parent"),w.appendChild(_),_},n.remove=function(){h(document.documentElement,"nprogress-busy"),h(document.querySelector(r.parent),"nprogress-custom-parent");var m=document.getElementById("nprogress");m&&f(m)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var m=document.body.style,_="WebkitTransform"in m?"Webkit":"MozTransform"in m?"Moz":"msTransform"in m?"ms":"OTransform"in m?"O":"";return _+"Perspective"in m?"translate3d":_+"Transform"in m?"translate":"margin"};function i(m,_,p){return m<_?_:m>p?p:m}function s(m){return(-1+m)*100}function o(m,_,p){var v;return r.positionUsing==="translate3d"?v={transform:"translate3d("+s(m)+"%,0,0)"}:r.positionUsing==="translate"?v={transform:"translate("+s(m)+"%,0)"}:v={"margin-left":s(m)+"%"},v.transition="all "+_+"ms "+p,v}var a=function(){var m=[];function _(){var p=m.shift();p&&p(_)}return function(p){m.push(p),m.length==1&&_()}}(),c=function(){var m=["Webkit","O","Moz","ms"],_={};function p(T){return T.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(k,x){return x.toUpperCase()})}function v(T){var k=document.body.style;if(T in k)return T;for(var x=m.length,W=T.charAt(0).toUpperCase()+T.slice(1),O;x--;)if(O=m[x]+W,O in k)return O;return T}function w(T){return T=p(T),_[T]||(_[T]=v(T))}function R(T,k,x){k=w(k),T.style[k]=x}return function(T,k){var x=arguments,W,O;if(x.length==2)for(W in k)O=k[W],O!==void 0&&k.hasOwnProperty(W)&&R(T,W,O);else R(T,x[1],x[2])}}();function u(m,_){var p=typeof m=="string"?m:d(m);return p.indexOf(" "+_+" ")>=0}function l(m,_){var p=d(m),v=p+_;u(p,_)||(m.className=v.substring(1))}function h(m,_){var p=d(m),v;u(m,_)&&(v=p.replace(" "+_+" "," "),m.className=v.substring(1,v.length-1))}function d(m){return(" "+(m.className||"")+" ").replace(/\s+/gi," ")}function f(m){m&&m.parentNode&&m.parentNode.removeChild(m)}return n})})(mP);var j9=mP.exports;const Kf=oy(j9);const q9={class:"container"},z9={__name:"App",setup(t){const e=Fi(),n=Yx(),r=Pt(!0),i=function(){r.value=!1,Kf.done()};return function(){Kf.configure({speed:200,showSpinner:!1}),e.featchAuthUser(),n.beforeEach(()=>{r.value=!0,Kf.start()})}(),(o,a)=>{const c=$9,u=or("RouterView"),l=v9,h=f9;return qe(),Mn(zt,null,[Oe(c),st("div",q9,[ac((qe(),Dt(u,{onReady:i,key:o.$route.path+JSON.stringify(o.$route.query)})),[[ev,!r.value]]),ac(Oe(l,null,null,512),[[ev,r.value]])]),Oe(h)],64)}}};function GI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?GI(Object(n),!0).forEach(function(r){xt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):GI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kh(t){"@babel/helpers - typeof";return kh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kh(t)}function W9(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function KI(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function H9(t,e,n){return e&&KI(t.prototype,e),n&&KI(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function xt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ay(t,e){return K9(t)||Y9(t,e)||pP(t,e)||J9()}function Gu(t){return G9(t)||Q9(t)||pP(t)||X9()}function G9(t){if(Array.isArray(t))return yp(t)}function K9(t){if(Array.isArray(t))return t}function Q9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Y9(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function pP(t,e){if(t){if(typeof t=="string")return yp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yp(t,e)}}function yp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function X9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var QI=function(){},cy={},gP={},_P=null,yP={mark:QI,measure:QI};try{typeof window<"u"&&(cy=window),typeof document<"u"&&(gP=document),typeof MutationObserver<"u"&&(_P=MutationObserver),typeof performance<"u"&&(yP=performance)}catch{}var Z9=cy.navigator||{},YI=Z9.userAgent,XI=YI===void 0?"":YI,Ui=cy,rt=gP,JI=_P,yl=yP;Ui.document;var ni=!!rt.documentElement&&!!rt.head&&typeof rt.addEventListener=="function"&&typeof rt.createElement=="function",vP=~XI.indexOf("MSIE")||~XI.indexOf("Trident/"),vl,wl,Il,bl,El,Wr="___FONT_AWESOME___",vp=16,wP="fa",IP="svg-inline--fa",Gs="data-fa-i2svg",wp="data-fa-pseudo-element",e6="data-fa-pseudo-element-pending",uy="data-prefix",ly="data-icon",ZI="fontawesome-i2svg",t6="async",n6=["HTML","HEAD","STYLE","SCRIPT"],bP=function(){try{return!0}catch{return!1}}(),et="classic",pt="sharp",hy=[et,pt];function Ku(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[et]}})}var mu=Ku((vl={},xt(vl,et,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),xt(vl,pt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),vl)),pu=Ku((wl={},xt(wl,et,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),xt(wl,pt,{solid:"fass",regular:"fasr",light:"fasl"}),wl)),gu=Ku((Il={},xt(Il,et,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),xt(Il,pt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Il)),r6=Ku((bl={},xt(bl,et,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),xt(bl,pt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),bl)),i6=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,EP="fa-layers-text",s6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,o6=Ku((El={},xt(El,et,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),xt(El,pt,{900:"fass",400:"fasr",300:"fasl"}),El)),TP=[1,2,3,4,5,6,7,8,9,10],a6=TP.concat([11,12,13,14,15,16,17,18,19,20]),c6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Is={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_u=new Set;Object.keys(pu[et]).map(_u.add.bind(_u));Object.keys(pu[pt]).map(_u.add.bind(_u));var u6=[].concat(hy,Gu(_u),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Is.GROUP,Is.SWAP_OPACITY,Is.PRIMARY,Is.SECONDARY]).concat(TP.map(function(t){return"".concat(t,"x")})).concat(a6.map(function(t){return"w-".concat(t)})),Rc=Ui.FontAwesomeConfig||{};function l6(t){var e=rt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function h6(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(rt&&typeof rt.querySelector=="function"){var d6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];d6.forEach(function(t){var e=ay(t,2),n=e[0],r=e[1],i=h6(l6(n));i!=null&&(Rc[r]=i)})}var AP={styleDefault:"solid",familyDefault:"classic",cssPrefix:wP,replacementClass:IP,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rc.familyPrefix&&(Rc.cssPrefix=Rc.familyPrefix);var ua=Z(Z({},AP),Rc);ua.autoReplaceSvg||(ua.observeMutations=!1);var se={};Object.keys(AP).forEach(function(t){Object.defineProperty(se,t,{enumerable:!0,set:function(n){ua[t]=n,Sc.forEach(function(r){return r(se)})},get:function(){return ua[t]}})});Object.defineProperty(se,"familyPrefix",{enumerable:!0,set:function(e){ua.cssPrefix=e,Sc.forEach(function(n){return n(se)})},get:function(){return ua.cssPrefix}});Ui.FontAwesomeConfig=se;var Sc=[];function f6(t){return Sc.push(t),function(){Sc.splice(Sc.indexOf(t),1)}}var li=vp,yr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function m6(t){if(!(!t||!ni)){var e=rt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=rt.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return rt.head.insertBefore(e,r),t}}var p6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function yu(){for(var t=12,e="";t-- >0;)e+=p6[Math.random()*62|0];return e}function ka(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function dy(t){return t.classList?ka(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function RP(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g6(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(RP(t[n]),'" ')},"").trim()}function rf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function fy(t){return t.size!==yr.size||t.x!==yr.x||t.y!==yr.y||t.rotate!==yr.rotate||t.flipX||t.flipY}function _6(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function y6(t){var e=t.transform,n=t.width,r=n===void 0?vp:n,i=t.height,s=i===void 0?vp:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&vP?c+="translate(".concat(e.x/li-r/2,"em, ").concat(e.y/li-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/li,"em), calc(-50% + ").concat(e.y/li,"em)) "):c+="translate(".concat(e.x/li,"em, ").concat(e.y/li,"em) "),c+="scale(".concat(e.size/li*(e.flipX?-1:1),", ").concat(e.size/li*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var v6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function SP(){var t=wP,e=IP,n=se.cssPrefix,r=se.replacementClass,i=v6;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var eb=!1;function Qf(){se.autoAddCss&&!eb&&(m6(SP()),eb=!0)}var w6={mixout:function(){return{dom:{css:SP,insertCss:Qf}}},hooks:function(){return{beforeDOMElementCreation:function(){Qf()},beforeI2svg:function(){Qf()}}}},Hr=Ui||{};Hr[Wr]||(Hr[Wr]={});Hr[Wr].styles||(Hr[Wr].styles={});Hr[Wr].hooks||(Hr[Wr].hooks={});Hr[Wr].shims||(Hr[Wr].shims=[]);var Qn=Hr[Wr],PP=[],I6=function t(){rt.removeEventListener("DOMContentLoaded",t),xh=1,PP.map(function(e){return e()})},xh=!1;ni&&(xh=(rt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(rt.readyState),xh||rt.addEventListener("DOMContentLoaded",I6));function b6(t){ni&&(xh?setTimeout(t,0):PP.push(t))}function Qu(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?RP(t):"<".concat(e," ").concat(g6(r),">").concat(s.map(Qu).join(""),"</").concat(e,">")}function tb(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var E6=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Yf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?E6(n,i):n,c,u,l;for(r===void 0?(c=1,l=e[s[0]]):(c=0,l=r);c<o;c++)u=s[c],l=a(l,e[u],u,e);return l};function T6(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ip(t){var e=T6(t);return e.length===1?e[0].toString(16):null}function A6(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function nb(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function bp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=nb(e);typeof Qn.hooks.addPack=="function"&&!i?Qn.hooks.addPack(t,nb(e)):Qn.styles[t]=Z(Z({},Qn.styles[t]||{}),s),t==="fas"&&bp("fa",e)}var Tl,Al,Rl,So=Qn.styles,R6=Qn.shims,S6=(Tl={},xt(Tl,et,Object.values(gu[et])),xt(Tl,pt,Object.values(gu[pt])),Tl),my=null,CP={},kP={},xP={},OP={},NP={},P6=(Al={},xt(Al,et,Object.keys(mu[et])),xt(Al,pt,Object.keys(mu[pt])),Al);function C6(t){return~u6.indexOf(t)}function k6(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!C6(i)?i:null}var DP=function(){var e=function(s){return Yf(So,function(o,a,c){return o[c]=Yf(a,s,{}),o},{})};CP=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),kP=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),NP=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in So||se.autoFetchSvg,r=Yf(R6,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});xP=r.names,OP=r.unicodes,my=sf(se.styleDefault,{family:se.familyDefault})};f6(function(t){my=sf(t.styleDefault,{family:se.familyDefault})});DP();function py(t,e){return(CP[t]||{})[e]}function x6(t,e){return(kP[t]||{})[e]}function bs(t,e){return(NP[t]||{})[e]}function VP(t){return xP[t]||{prefix:null,iconName:null}}function O6(t){var e=OP[t],n=py("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Bi(){return my}var gy=function(){return{prefix:null,iconName:null,rest:[]}};function sf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?et:n,i=mu[r][t],s=pu[r][t]||pu[r][i],o=t in Qn.styles?t:null;return s||o||null}var rb=(Rl={},xt(Rl,et,Object.keys(gu[et])),xt(Rl,pt,Object.keys(gu[pt])),Rl);function of(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},xt(e,et,"".concat(se.cssPrefix,"-").concat(et)),xt(e,pt,"".concat(se.cssPrefix,"-").concat(pt)),e),o=null,a=et;(t.includes(s[et])||t.some(function(u){return rb[et].includes(u)}))&&(a=et),(t.includes(s[pt])||t.some(function(u){return rb[pt].includes(u)}))&&(a=pt);var c=t.reduce(function(u,l){var h=k6(se.cssPrefix,l);if(So[l]?(l=S6[a].includes(l)?r6[a][l]:l,o=l,u.prefix=l):P6[a].indexOf(l)>-1?(o=l,u.prefix=sf(l,{family:a})):h?u.iconName=h:l!==se.replacementClass&&l!==s[et]&&l!==s[pt]&&u.rest.push(l),!i&&u.prefix&&u.iconName){var d=o==="fa"?VP(u.iconName):{},f=bs(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||f||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!So.far&&So.fas&&!se.autoFetchSvg&&(u.prefix="fas")}return u},gy());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===pt&&(So.fass||se.autoFetchSvg)&&(c.prefix="fass",c.iconName=bs(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=Bi()||"fas"),c}var N6=function(){function t(){W9(this,t),this.definitions={}}return H9(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=Z(Z({},n.definitions[a]||{}),o[a]),bp(a,o[a]);var c=gu[et][a];c&&bp(c,o[a]),DP()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,u=o.icon,l=u[2];n[a]||(n[a]={}),l.length>0&&l.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][c]=u}),n}}]),t}(),ib=[],Po={},jo={},D6=Object.keys(jo);function V6(t,e){var n=e.mixoutsTo;return ib=t,Po={},Object.keys(jo).forEach(function(r){D6.indexOf(r)===-1&&delete jo[r]}),ib.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),kh(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Po[o]||(Po[o]=[]),Po[o].push(s[o])})}r.provides&&r.provides(jo)}),n}function Ep(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Po[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ks(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Po[t]||[];i.forEach(function(s){s.apply(null,n)})}function Gr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return jo[t]?jo[t].apply(null,e):void 0}function Tp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Bi();if(e)return e=bs(n,e)||e,tb(MP.definitions,n,e)||tb(Qn.styles,n,e)}var MP=new N6,M6=function(){se.autoReplaceSvg=!1,se.observeMutations=!1,Ks("noAuto")},L6={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ni?(Ks("beforeI2svg",e),Gr("pseudoElements2svg",e),Gr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;se.autoReplaceSvg===!1&&(se.autoReplaceSvg=!0),se.observeMutations=!0,b6(function(){U6({autoReplaceSvgRoot:n}),Ks("watch",e)})}},F6={icon:function(e){if(e===null)return null;if(kh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:bs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=sf(e[0]);return{prefix:r,iconName:bs(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(se.cssPrefix,"-"))>-1||e.match(i6))){var i=of(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Bi(),iconName:bs(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Bi();return{prefix:s,iconName:bs(s,e)||e}}}},Nn={noAuto:M6,config:se,dom:L6,parse:F6,library:MP,findIconDefinition:Tp,toHtml:Qu},U6=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?rt:n;(Object.keys(Qn.styles).length>0||se.autoFetchSvg)&&ni&&se.autoReplaceSvg&&Nn.dom.i2svg({node:r})};function af(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Qu(r)})}}),Object.defineProperty(t,"node",{get:function(){if(ni){var r=rt.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function B6(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(fy(o)&&n.found&&!r.found){var a=n.width,c=n.height,u={x:a/c/2,y:.5};i.style=rf(Z(Z({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function $6(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(se.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Z(Z({},i),{},{id:o}),children:r}]}]}function _y(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,u=t.maskId,l=t.titleId,h=t.extra,d=t.watchable,f=d===void 0?!1:d,m=r.found?r:n,_=m.width,p=m.height,v=i==="fak",w=[se.replacementClass,s?"".concat(se.cssPrefix,"-").concat(s):""].filter(function(U){return h.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(h.classes).join(" "),R={children:[],attributes:Z(Z({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:w,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(p)})},T=v&&!~h.classes.indexOf("fa-fw")?{width:"".concat(_/p*16*.0625,"em")}:{};f&&(R.attributes[Gs]=""),c&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(l||yu())},children:[c]}),delete R.attributes.title);var k=Z(Z({},R),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:Z(Z({},T),h.styles)}),x=r.found&&n.found?Gr("generateAbstractMask",k)||{children:[],attributes:{}}:Gr("generateAbstractIcon",k)||{children:[],attributes:{}},W=x.children,O=x.attributes;return k.children=W,k.attributes=O,a?$6(k):B6(k)}function sb(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,u=Z(Z(Z({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(u[Gs]="");var l=Z({},o.styles);fy(i)&&(l.transform=y6({transform:i,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);var h=rf(l);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function j6(t){var e=t.content,n=t.title,r=t.extra,i=Z(Z(Z({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=rf(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Xf=Qn.styles;function Ap(t){var e=t[0],n=t[1],r=t.slice(4),i=ay(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(se.cssPrefix,"-").concat(Is.GROUP)},children:[{tag:"path",attributes:{class:"".concat(se.cssPrefix,"-").concat(Is.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(se.cssPrefix,"-").concat(Is.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var q6={found:!1,width:512,height:512};function z6(t,e){!bP&&!se.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rp(t,e){var n=e;return e==="fa"&&se.styleDefault!==null&&(e=Bi()),new Promise(function(r,i){if(Gr("missingIconAbstract"),n==="fa"){var s=VP(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Xf[e]&&Xf[e][t]){var o=Xf[e][t];return r(Ap(o))}z6(t,e),r(Z(Z({},q6),{},{icon:se.showMissingIcons&&t?Gr("missingIconAbstract")||{}:{}}))})}var ob=function(){},Sp=se.measurePerformance&&yl&&yl.mark&&yl.measure?yl:{mark:ob,measure:ob},sc='FA "6.4.2"',W6=function(e){return Sp.mark("".concat(sc," ").concat(e," begins")),function(){return LP(e)}},LP=function(e){Sp.mark("".concat(sc," ").concat(e," ends")),Sp.measure("".concat(sc," ").concat(e),"".concat(sc," ").concat(e," begins"),"".concat(sc," ").concat(e," ends"))},yy={begin:W6,end:LP},ql=function(){};function ab(t){var e=t.getAttribute?t.getAttribute(Gs):null;return typeof e=="string"}function H6(t){var e=t.getAttribute?t.getAttribute(uy):null,n=t.getAttribute?t.getAttribute(ly):null;return e&&n}function G6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(se.replacementClass)}function K6(){if(se.autoReplaceSvg===!0)return zl.replace;var t=zl[se.autoReplaceSvg];return t||zl.replace}function Q6(t){return rt.createElementNS("http://www.w3.org/2000/svg",t)}function Y6(t){return rt.createElement(t)}function FP(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Q6:Y6:n;if(typeof t=="string")return rt.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(FP(o,{ceFn:r}))}),i}function X6(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var zl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(FP(i),n)}),n.getAttribute(Gs)===null&&se.keepOriginalSource){var r=rt.createComment(X6(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~dy(n).indexOf(se.replacementClass))return zl.replace(e);var i=new RegExp("".concat(se.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===se.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Qu(a)}).join(`
`);n.setAttribute(Gs,""),n.innerHTML=o}};function cb(t){t()}function UP(t,e){var n=typeof e=="function"?e:ql;if(t.length===0)n();else{var r=cb;se.mutateApproach===t6&&(r=Ui.requestAnimationFrame||cb),r(function(){var i=K6(),s=yy.begin("mutate");t.map(i),s(),n()})}}var vy=!1;function BP(){vy=!0}function Pp(){vy=!1}var Oh=null;function ub(t){if(JI&&se.observeMutations){var e=t.treeCallback,n=e===void 0?ql:e,r=t.nodeCallback,i=r===void 0?ql:r,s=t.pseudoElementsCallback,o=s===void 0?ql:s,a=t.observeMutationsRoot,c=a===void 0?rt:a;Oh=new JI(function(u){if(!vy){var l=Bi();ka(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!ab(h.addedNodes[0])&&(se.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&se.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&ab(h.target)&&~c6.indexOf(h.attributeName))if(h.attributeName==="class"&&H6(h.target)){var d=of(dy(h.target)),f=d.prefix,m=d.iconName;h.target.setAttribute(uy,f||l),m&&h.target.setAttribute(ly,m)}else G6(h.target)&&i(h.target)})}}),ni&&Oh.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function J6(){Oh&&Oh.disconnect()}function Z6(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function e5(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=of(dy(t));return i.prefix||(i.prefix=Bi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=x6(i.prefix,t.innerText)||py(i.prefix,Ip(t.innerText))),!i.iconName&&se.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function t5(t){var e=ka(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return se.autoA11y&&(n?e["aria-labelledby"]="".concat(se.replacementClass,"-title-").concat(r||yu()):(e["aria-hidden"]="true",e.focusable="false")),e}function n5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function lb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=e5(t),r=n.iconName,i=n.prefix,s=n.rest,o=t5(t),a=Ep("parseNodeAttributes",{},t),c=e.styleParser?Z6(t):[];return Z({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:yr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var r5=Qn.styles;function $P(t){var e=se.autoReplaceSvg==="nest"?lb(t,{styleParser:!1}):lb(t);return~e.extra.classes.indexOf(EP)?Gr("generateLayersText",t,e):Gr("generateSvgReplacementMutation",t,e)}var $i=new Set;hy.map(function(t){$i.add("fa-".concat(t))});Object.keys(mu[et]).map($i.add.bind($i));Object.keys(mu[pt]).map($i.add.bind($i));$i=Gu($i);function hb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ni)return Promise.resolve();var n=rt.documentElement.classList,r=function(h){return n.add("".concat(ZI,"-").concat(h))},i=function(h){return n.remove("".concat(ZI,"-").concat(h))},s=se.autoFetchSvg?$i:hy.map(function(l){return"fa-".concat(l)}).concat(Object.keys(r5));s.includes("fa")||s.push("fa");var o=[".".concat(EP,":not([").concat(Gs,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(Gs,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ka(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=yy.begin("onTree"),u=a.reduce(function(l,h){try{var d=$P(h);d&&l.push(d)}catch(f){bP||f.name==="MissingIcon"&&console.error(f)}return l},[]);return new Promise(function(l,h){Promise.all(u).then(function(d){UP(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),l()})}).catch(function(d){c(),h(d)})})}function i5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$P(t).then(function(n){n&&UP([n],e)})}function s5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Tp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Tp(i||{})),t(r,Z(Z({},n),{},{mask:i}))}}var o5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?yr:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,u=n.maskId,l=u===void 0?null:u,h=n.title,d=h===void 0?null:h,f=n.titleId,m=f===void 0?null:f,_=n.classes,p=_===void 0?[]:_,v=n.attributes,w=v===void 0?{}:v,R=n.styles,T=R===void 0?{}:R;if(e){var k=e.prefix,x=e.iconName,W=e.icon;return af(Z({type:"icon"},e),function(){return Ks("beforeDOMElementCreation",{iconDefinition:e,params:n}),se.autoA11y&&(d?w["aria-labelledby"]="".concat(se.replacementClass,"-title-").concat(m||yu()):(w["aria-hidden"]="true",w.focusable="false")),_y({icons:{main:Ap(W),mask:c?Ap(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:x,transform:Z(Z({},yr),i),symbol:o,title:d,maskId:l,titleId:m,extra:{attributes:w,styles:T,classes:p}})})}},a5={mixout:function(){return{icon:s5(o5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=hb,n.nodeCallback=i5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?rt:r,s=n.callback,o=s===void 0?function(){}:s;return hb(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,u=r.symbol,l=r.mask,h=r.maskId,d=r.extra;return new Promise(function(f,m){Promise.all([Rp(i,a),l.iconName?Rp(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var p=ay(_,2),v=p[0],w=p[1];f([n,_y({icons:{main:v,mask:w},prefix:a,iconName:i,transform:c,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=rf(a);c.length>0&&(i.style=c);var u;return fy(o)&&(u=Gr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},c5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return af({type:"layer"},function(){Ks("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(se.cssPrefix,"-layers")].concat(Gu(s)).join(" ")},children:o}]})}}}},u5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,l=r.styles,h=l===void 0?{}:l;return af({type:"counter",content:n},function(){return Ks("beforeDOMElementCreation",{content:n,params:r}),j6({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(se.cssPrefix,"-layers-counter")].concat(Gu(a))}})})}}}},l5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?yr:i,o=r.title,a=o===void 0?null:o,c=r.classes,u=c===void 0?[]:c,l=r.attributes,h=l===void 0?{}:l,d=r.styles,f=d===void 0?{}:d;return af({type:"text",content:n},function(){return Ks("beforeDOMElementCreation",{content:n,params:r}),sb({content:n,transform:Z(Z({},yr),s),title:a,extra:{attributes:h,styles:f,classes:["".concat(se.cssPrefix,"-layers-text")].concat(Gu(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(vP){var u=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();a=l.width/u,c=l.height/u}return se.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,sb({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},h5=new RegExp('"',"ug"),db=[1105920,1112319];function d5(t){var e=t.replace(h5,""),n=A6(e,0),r=n>=db[0]&&n<=db[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ip(i?e[0]:e),isSecondary:r||i}}function fb(t,e){var n="".concat(e6).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ka(t.children),o=s.filter(function(W){return W.getAttribute(wp)===e})[0],a=Ui.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(s6),u=a.getPropertyValue("font-weight"),l=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&l!=="none"&&l!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?pt:et,f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?pu[d][c[2].toLowerCase()]:o6[d][u],m=d5(h),_=m.value,p=m.isSecondary,v=c[0].startsWith("FontAwesome"),w=py(f,_),R=w;if(v){var T=O6(_);T.iconName&&T.prefix&&(w=T.iconName,f=T.prefix)}if(w&&!p&&(!o||o.getAttribute(uy)!==f||o.getAttribute(ly)!==R)){t.setAttribute(n,R),o&&t.removeChild(o);var k=n5(),x=k.extra;x.attributes[wp]=e,Rp(w,f).then(function(W){var O=_y(Z(Z({},k),{},{icons:{main:W,mask:gy()},prefix:f,iconName:R,extra:x,watchable:!0})),U=rt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(U,t.firstChild):t.appendChild(U),U.outerHTML=O.map(function(te){return Qu(te)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function f5(t){return Promise.all([fb(t,"::before"),fb(t,"::after")])}function m5(t){return t.parentNode!==document.head&&!~n6.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function mb(t){if(ni)return new Promise(function(e,n){var r=ka(t.querySelectorAll("*")).filter(m5).map(f5),i=yy.begin("searchPseudoElements");BP(),Promise.all(r).then(function(){i(),Pp(),e()}).catch(function(){i(),Pp(),n()})})}var p5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=mb,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?rt:r;se.searchPseudoElements&&mb(i)}}},pb=!1,g5={mixout:function(){return{dom:{unwatch:function(){BP(),pb=!0}}}},hooks:function(){return{bootstrap:function(){ub(Ep("mutationObserverCallbacks",{}))},noAuto:function(){J6()},watch:function(n){var r=n.observeMutationsRoot;pb?Pp():ub(Ep("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},gb=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},_5={mixout:function(){return{parse:{transform:function(n){return gb(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=gb(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(c," ").concat(u," ").concat(l)},d={transform:"translate(".concat(o/2*-1," -256)")},f={outer:a,inner:h,path:d};return{tag:"g",attributes:Z({},f.outer),children:[{tag:"g",attributes:Z({},f.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Z(Z({},r.icon.attributes),f.path)}]}]}}}},Jf={x:0,y:0,width:"100%",height:"100%"};function _b(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function y5(t){return t.tag==="g"?t.children:[t]}var v5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?of(i.split(" ").map(function(o){return o.trim()})):gy();return s.prefix||(s.prefix=Bi()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,u=s.width,l=s.icon,h=o.width,d=o.icon,f=_6({transform:c,containerWidth:h,iconWidth:u}),m={tag:"rect",attributes:Z(Z({},Jf),{},{fill:"white"})},_=l.children?{children:l.children.map(_b)}:{},p={tag:"g",attributes:Z({},f.inner),children:[_b(Z({tag:l.tag,attributes:Z(Z({},l.attributes),f.path)},_))]},v={tag:"g",attributes:Z({},f.outer),children:[p]},w="mask-".concat(a||yu()),R="clip-".concat(a||yu()),T={tag:"mask",attributes:Z(Z({},Jf),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,v]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:y5(d)},T]};return r.push(k,{tag:"rect",attributes:Z({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(w,")")},Jf)}),{children:r,attributes:i}}}},w5={provides:function(e){var n=!1;Ui.matchMedia&&(n=Ui.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Z(Z({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Z(Z({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:Z(Z({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:Z(Z({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Z(Z({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:Z(Z({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Z(Z({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:Z(Z({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Z(Z({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},I5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},b5=[w6,a5,c5,u5,l5,p5,g5,_5,v5,w5,I5];V6(b5,{mixoutsTo:Nn});Nn.noAuto;Nn.config;var E5=Nn.library;Nn.dom;var Cp=Nn.parse;Nn.findIconDefinition;Nn.toHtml;var T5=Nn.icon;Nn.layer;Nn.text;Nn.counter;function yb(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function xr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yb(Object(n),!0).forEach(function(r){_n(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yb(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Nh(t){"@babel/helpers - typeof";return Nh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nh(t)}function _n(t,e,n){return e=P5(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function R5(t,e){if(t==null)return{};var n=A5(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function S5(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function P5(t){var e=S5(t,"string");return typeof e=="symbol"?e:String(e)}var C5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},jP={exports:{}};(function(t){(function(e){var n=function(v,w,R){if(!u(w)||h(w)||d(w)||f(w)||c(w))return w;var T,k=0,x=0;if(l(w))for(T=[],x=w.length;k<x;k++)T.push(n(v,w[k],R));else{T={};for(var W in w)Object.prototype.hasOwnProperty.call(w,W)&&(T[v(W,R)]=n(v,w[W],R))}return T},r=function(v,w){w=w||{};var R=w.separator||"_",T=w.split||/(?=[A-Z])/;return v.split(T).join(R)},i=function(v){return m(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(w,R){return R?R.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var w=i(v);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(v,w){return r(v,w).toLowerCase()},a=Object.prototype.toString,c=function(v){return typeof v=="function"},u=function(v){return v===Object(v)},l=function(v){return a.call(v)=="[object Array]"},h=function(v){return a.call(v)=="[object Date]"},d=function(v){return a.call(v)=="[object RegExp]"},f=function(v){return a.call(v)=="[object Boolean]"},m=function(v){return v=v-0,v===v},_=function(v,w){var R=w&&"process"in w?w.process:w;return typeof R!="function"?v:function(T,k){return R(T,v,k)}},p={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,w){return n(_(i,w),v)},decamelizeKeys:function(v,w){return n(_(o,w),v,w)},pascalizeKeys:function(v,w){return n(_(s,w),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=p:e.humps=p})(C5)})(jP);var k5=jP.exports,x5=["class","style"];function O5(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=k5.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function N5(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function qP(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return qP(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,u){var l=t.attributes[u];switch(u){case"class":c.class=N5(l);break;case"style":c.style=O5(l);break;default:c.attrs[u]=l}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=R5(n,x5);return Os(t.tag,xr(xr(xr({},e),{},{class:i.class,style:xr(xr({},i.style),o)},i.attrs),a),r)}var zP=!1;try{zP=!0}catch{}function D5(){if(!zP&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Zf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?_n({},t,e):{}}function V5(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},_n(e,"fa-".concat(t.size),t.size!==null),_n(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),_n(e,"fa-pull-".concat(t.pull),t.pull!==null),_n(e,"fa-swap-opacity",t.swapOpacity),_n(e,"fa-bounce",t.bounce),_n(e,"fa-shake",t.shake),_n(e,"fa-beat",t.beat),_n(e,"fa-fade",t.fade),_n(e,"fa-beat-fade",t.beatFade),_n(e,"fa-flash",t.flash),_n(e,"fa-spin-pulse",t.spinPulse),_n(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function vb(t){if(t&&Nh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Cp.icon)return Cp.icon(t);if(t===null)return null;if(Nh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var M5=qi({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=de(function(){return vb(e.icon)}),s=de(function(){return Zf("classes",V5(e))}),o=de(function(){return Zf("transform",typeof e.transform=="string"?Cp.transform(e.transform):e.transform)}),a=de(function(){return Zf("mask",vb(e.mask))}),c=de(function(){return T5(i.value,xr(xr(xr(xr({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});An(c,function(l){if(!l)return D5("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var u=de(function(){return c.value?qP(c.value.abstract[0],{},r):null});return function(){return u.value}}}),L5={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},F5=L5,U5={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]};E5.add(F5,U5);const B5=t=>{t.component("fa",M5)},$5={mounted(t,e){t.__clickOutsideHandler__=n=>{t===n.target||t.contains(n.target)||e.value(n)},document.body.addEventListener("click",t.__clickOutsideHandler__)},unmounted(t){document.body.removeEventListener("click",t.__clickOutsideHandler__)}},j5=t=>{t.directive("click-outside",$5)};var q5=aP,z5=function(){return q5.Date.now()},W5=z5,H5=nf,em=W5,wb=hP,G5="Expected a function",K5=Math.max,Q5=Math.min;function Y5(t,e,n){var r,i,s,o,a,c,u=0,l=!1,h=!1,d=!0;if(typeof t!="function")throw new TypeError(G5);e=wb(e)||0,H5(n)&&(l=!!n.leading,h="maxWait"in n,s=h?K5(wb(n.maxWait)||0,e):s,d="trailing"in n?!!n.trailing:d);function f(x){var W=r,O=i;return r=i=void 0,u=x,o=t.apply(O,W),o}function m(x){return u=x,a=setTimeout(v,e),l?f(x):o}function _(x){var W=x-c,O=x-u,U=e-W;return h?Q5(U,s-O):U}function p(x){var W=x-c,O=x-u;return c===void 0||W>=e||W<0||h&&O>=s}function v(){var x=em();if(p(x))return w(x);a=setTimeout(v,_(x))}function w(x){return a=void 0,d&&r?f(x):(r=i=void 0,o)}function R(){a!==void 0&&clearTimeout(a),u=0,r=c=i=a=void 0}function T(){return a===void 0?o:w(em())}function k(){var x=em(),W=p(x);if(r=arguments,i=this,c=x,W){if(a===void 0)return m(c);if(h)return clearTimeout(a),a=setTimeout(v,e),f(c)}return a===void 0&&(a=setTimeout(v,e)),o}return k.cancel=R,k.flush=T,k}var X5=Y5;const J5=oy(X5),Z5={mounted(t,e){t.__pageScroll__=J5(()=>{e.value()},400,{leading:!0}),document.addEventListener("scroll",t.__pageScroll__)},unmounted(t){document.removeEventListener("scroll",t.__pageScroll__)}},ez=t=>{t.directive("page-scroll",Z5)},tz={viewBox:"0 0 8 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},nz=Oe("path",{d:"M2.24 1c0 .556-.445 1-1 1-.556 0-1-.444-1-1s.444-1 1-1c.555 0 1 .444 1 1zm5.333 0c0 .556-.444 1-1 1-.555 0-1-.444-1-1s.445-1 1-1c.556 0 1 .444 1 1z",fill:"#BBB"},null,-1);function rz(t,e){return qe(),Dt("svg",tz,[nz])}var cf=qi({name:"VPage",components:{IconPaginationDots:rz},props:{page:{type:Number,default:null},current:{type:Number,default:0},activeColor:{type:String,default:"#DCEDFF"}},emits:["update"],setup(t,{emit:e}){const n=de(()=>t.page===t.current);function r(){e("update",t.page)}return{isActive:n,clickHandler:r}}});const iz=dE();lE("data-v-060ca318");const sz={key:0,class:"DotsHolder"};hE();const oz=iz((t,e,n,r,i,s)=>{const o=or("icon-pagination-dots");return qe(),Dt("li",null,[t.page===null?(qe(),Dt("span",sz,[Oe(o,{class:"Dots"})])):(qe(),Dt("button",{key:1,class:["Page",{"Page-active":t.isActive}],type:"button","aria-label":`Go to page ${t.page}`,style:`background-color: ${t.isActive?t.activeColor:"transparent"};`,onClick:e[1]||(e[1]=(...a)=>t.clickHandler&&t.clickHandler(...a))},Bp(t.page),15,["aria-label"]))])});cf.render=oz;cf.__scopeId="data-v-060ca318";cf.__file="src/components/atoms/VPage.vue";const az={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},cz=Oe("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41M6 6h2v12H6V6z"},null,-1);function uz(t,e){return qe(),Dt("svg",az,[cz])}const lz={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},hz=Oe("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41M16 6h2v12h-2V6z"},null,-1);function dz(t,e){return qe(),Dt("svg",lz,[hz])}const fz={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},mz=Oe("path",{d:"M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.42z"},null,-1);function pz(t,e){return qe(),Dt("svg",fz,[mz])}const gz={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},_z=Oe("path",{d:"M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"},null,-1);function yz(t,e){return qe(),Dt("svg",gz,[_z])}var uf=qi({name:"VPagination",components:{IconPageFirst:uz,IconChevronLeft:pz,IconChevronRight:yz,IconPageLast:dz,VPage:cf},props:{pages:{type:Number,default:0},rangeSize:{type:Number,default:1},modelValue:{type:Number,default:0},activeColor:{type:String,default:"#DCEDFF"},hideFirstButton:{type:Boolean,default:!1},hideLastButton:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=de(()=>{const l=[],h=5+t.rangeSize*2;let d=t.pages<=h?1:t.modelValue-t.rangeSize,f=t.pages<=h?t.pages:t.modelValue+t.rangeSize;if(f=f>t.pages?t.pages:f,d=d<1?1:d,t.pages>h){const m=d-1<3,_=t.pages-f<3;if(m){f=h-2;for(let p=1;p<d;p++)l.push(p)}else l.push(1),l.push(null);if(_){d=t.pages-(h-3);for(let p=d;p<=t.pages;p++)l.push(p)}else{for(let p=d;p<=f;p++)l.push(p);l.push(null),l.push(t.pages)}}else for(let m=d;m<=f;m++)l.push(m);return l});function r(l){e("update:modelValue",l)}const i=de(()=>t.modelValue>1),s=de(()=>t.modelValue<t.pages);function o(){i.value&&e("update:modelValue",1)}function a(){i.value&&e("update:modelValue",t.modelValue-1)}function c(){s.value&&e("update:modelValue",t.pages)}function u(){s.value&&e("update:modelValue",t.modelValue+1)}return{pagination:n,updatePageHandler:r,isPrevControlsActive:i,isNextControlsActive:s,goToFirst:o,goToLast:c,goToPrev:a,goToNext:u}}});const vz=dE();lE("data-v-2a30deb0");const wz={class:"Pagination"},Iz={key:0,class:"PaginationControl"},bz={class:"PaginationControl"},Ez={class:"PaginationControl"},Tz={key:1,class:"PaginationControl"};hE();const Az=vz((t,e,n,r,i,s)=>{const o=or("icon-page-first"),a=or("icon-chevron-left"),c=or("v-page"),u=or("icon-chevron-right"),l=or("icon-page-last");return qe(),Dt("ul",wz,[t.hideFirstButton?cs("v-if",!0):(qe(),Dt("li",Iz,[Oe(o,{class:["Control",{"Control-active":t.isPrevControlsActive}],onClick:t.goToFirst},null,8,["class","onClick"])])),Oe("li",bz,[Oe(a,{class:["Control",{"Control-active":t.isPrevControlsActive}],onClick:t.goToPrev},null,8,["class","onClick"])]),(qe(!0),Dt(zt,null,IE(t.pagination,h=>(qe(),Dt(c,{key:`pagination-page-${h}`,page:h,current:t.modelValue,"active-color":t.activeColor,onUpdate:t.updatePageHandler},null,8,["page","current","active-color","onUpdate"]))),128)),Oe("li",Ez,[Oe(u,{class:["Control",{"Control-active":t.isNextControlsActive}],onClick:t.goToNext},null,8,["class","onClick"])]),t.hideLastButton?cs("v-if",!0):(qe(),Dt("li",Tz,[Oe(l,{class:["Control",{"Control-active":t.isNextControlsActive}],onClick:t.goToLast},null,8,["class","onClick"])]))])});uf.render=Az;uf.__scopeId="data-v-2a30deb0";uf.__file="src/components/VPagination.vue";const Rz=t=>{t.component("VPagination",uf)};/**
  * vee-validate v4.11.8
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function Gt(t){return typeof t=="function"}function WP(t){return t==null}const Qs=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function wy(t){return Number(t)>=0}function Sz(t){const e=parseFloat(t);return isNaN(e)?t:e}function Pz(t){return typeof t=="object"&&t!==null}function Cz(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function kz(t){if(!Pz(t)||Cz(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Dh(t,e){return Object.keys(e).forEach(n=>{if(kz(e[n])){t[n]||(t[n]={}),Dh(t[n],e[n]);return}t[n]=e[n]}),t}function oc(t){const e=t.split(".");if(!e.length)return"";let n=String(e[0]);for(let r=1;r<e.length;r++){if(wy(e[r])){n+=`[${e[r]}]`;continue}n+=`.${e[r]}`}return n}const HP={};function Sl(t,e){Oz(t,e),HP[t]=e}function xz(t){return HP[t]}function Oz(t,e){if(!Gt(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}function Ib(t,e,n){typeof n.value=="object"&&(n.value=Ye(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function Ye(t){if(typeof t!="object")return t;var e=0,n,r,i,s=Object.prototype.toString.call(t);if(s==="[object Object]"?i=Object.create(t.__proto__||null):s==="[object Array]"?i=Array(t.length):s==="[object Set]"?(i=new Set,t.forEach(function(o){i.add(Ye(o))})):s==="[object Map]"?(i=new Map,t.forEach(function(o,a){i.set(Ye(a),Ye(o))})):s==="[object Date]"?i=new Date(+t):s==="[object RegExp]"?i=new RegExp(t.source,t.flags):s==="[object DataView]"?i=new t.constructor(Ye(t.buffer)):s==="[object ArrayBuffer]"?i=t.slice(0):s.slice(-6)==="Array]"&&(i=new t.constructor(t)),i){for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)Ib(i,r[e],Object.getOwnPropertyDescriptor(t,r[e]));for(e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++)Object.hasOwnProperty.call(i,n=r[e])&&i[n]===t[n]||Ib(i,n,Object.getOwnPropertyDescriptor(t,n))}return i||t}const lf=Symbol("vee-validate-form"),Nz=Symbol("vee-validate-field-instance"),Vh=Symbol("Default empty value"),Dz=typeof window<"u";function kp(t){return Gt(t)&&!!t.__locatorRef}function ji(t){return!!t&&Gt(t.parse)&&t.__type==="VVTypedSchema"}function Mh(t){return!!t&&Gt(t.validate)}function Yu(t){return t==="checkbox"||t==="radio"}function Vz(t){return Qs(t)||Array.isArray(t)}function Mz(t){return Array.isArray(t)?t.length===0:Qs(t)&&Object.keys(t).length===0}function hf(t){return/^\[.+\]$/i.test(t)}function Lz(t){return GP(t)&&t.multiple}function GP(t){return t.tagName==="SELECT"}function Fz(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function Uz(t,e){return!Fz(t,e)&&e.type!=="file"&&!Yu(e.type)}function KP(t){return Iy(t)&&t.target&&"submit"in t.target}function Iy(t){return t?!!(typeof Event<"u"&&Gt(Event)&&t instanceof Event||t&&t.srcElement):!1}function bb(t,e){return e in t&&t[e]!==Vh}function pn(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!pn(t[r],e[r]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;for(r of t.entries())if(!pn(r[1],e.get(r[0])))return!1;return!0}if(Eb(t)&&Eb(e))return!(t.size!==e.size||t.name!==e.name||t.lastModified!==e.lastModified||t.type!==e.type);if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();for(i=Object.keys(t),n=i.length,r=n;r--!==0;){var s=i[r];if(!pn(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Eb(t){return Dz?t instanceof File:!1}function by(t){return hf(t)?t.replace(/\[|\]/gi,""):t}function In(t,e,n){return t?hf(e)?t[by(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i,s)=>Vz(i)&&s in i?i[s]:n,t):n}function os(t,e,n){if(hf(e)){t[by(e)]=n;return}const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let s=0;s<r.length;s++){if(s===r.length-1){i[r[s]]=n;return}(!(r[s]in i)||WP(i[r[s]]))&&(i[r[s]]=wy(r[s+1])?[]:{}),i=i[r[s]]}}function tm(t,e){if(Array.isArray(t)&&wy(e)){t.splice(Number(e),1);return}Qs(t)&&delete t[e]}function Tb(t,e){if(hf(e)){delete t[by(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let s=0;s<n.length;s++){if(s===n.length-1){tm(r,n[s]);break}if(!(n[s]in r)||WP(r[n[s]]))break;r=r[n[s]]}const i=n.map((s,o)=>In(t,n.slice(0,o).join(".")));for(let s=i.length-1;s>=0;s--)if(Mz(i[s])){if(s===0){tm(t,n[0]);continue}tm(i[s-1],n[s-1])}}function Vn(t){return Object.keys(t)}function QP(t,e=void 0){const n=fa();return(n==null?void 0:n.provides[t])||dn(t,e)}function Ab(t,e,n){if(Array.isArray(t)){const r=[...t],i=r.findIndex(s=>pn(s,e));return i>=0?r.splice(i,1):r.push(e),r}return pn(t,e)?n:e}function Rb(t,e=0){let n=null,r=[];return function(...i){return n&&clearTimeout(n),n=setTimeout(()=>{const s=t(...i);r.forEach(o=>o(s)),r=[]},e),new Promise(s=>r.push(s))}}function Bz(t,e){return Qs(e)&&e.number?Sz(t):t}function xp(t,e){let n;return async function(...i){const s=t(...i);n=s;const o=await s;return s!==n||(n=void 0,e(o,i)),o}}function Op(t){return Array.isArray(t)?t:t?[t]:[]}function Ga(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function $z(t){let e=null,n=[];return function(...r){const i=rr(()=>{if(e!==i)return;const s=t(...r);n.forEach(o=>o(s)),n=[],e=null});return e=i,new Promise(s=>n.push(s))}}function Ey(t,e,n){return e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var r,i;return(i=(r=e.slots).default)===null||i===void 0?void 0:i.call(r,n())}}:e.slots.default}function nm(t){if(YP(t))return t._value}function YP(t){return"_value"in t}function jz(t){return t.type==="number"||t.type==="range"?Number.isNaN(t.valueAsNumber)?t.value:t.valueAsNumber:t.value}function Lh(t){if(!Iy(t))return t;const e=t.target;if(Yu(e.type)&&YP(e))return nm(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(Lz(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(nm);if(GP(e)){const n=Array.from(e.options).find(r=>r.selected);return n?nm(n):e.value}return jz(e)}function XP(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?Qs(t)&&t._$$isNormalized?t:Qs(t)?Object.keys(t).reduce((n,r)=>{const i=qz(t[r]);return t[r]!==!1&&(n[r]=Sb(i)),n},e):typeof t!="string"?e:t.split("|").reduce((n,r)=>{const i=zz(r);return i.name&&(n[i.name]=Sb(i.params)),n},e):e}function qz(t){return t===!0?[]:Array.isArray(t)||Qs(t)?t:[t]}function Sb(t){const e=n=>typeof n=="string"&&n[0]==="@"?Wz(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const zz=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function Wz(t){const e=n=>In(n,t)||n[t];return e.__locatorRef=t,e}function Hz(t){return Array.isArray(t)?t.filter(kp):Vn(t).filter(e=>kp(t[e])).map(e=>t[e])}const Gz={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Np=Object.assign({},Gz);const yi=()=>Np,Kz=t=>{Np=Object.assign(Object.assign({},Np),t)},Qz=Kz;async function JP(t,e,n={}){const r=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:e,label:n==null?void 0:n.label,bails:r??!0,formData:(n==null?void 0:n.values)||{}},o=(await Yz(i,t)).errors;return{errors:o,valid:!o.length}}async function Yz(t,e){if(ji(t.rules)||Mh(t.rules))return Jz(e,t.rules);if(Gt(t.rules)||Array.isArray(t.rules)){const o={field:t.label||t.name,name:t.name,label:t.label,form:t.formData,value:e},a=Array.isArray(t.rules)?t.rules:[t.rules],c=a.length,u=[];for(let l=0;l<c;l++){const h=a[l],d=await h(e,o);if(!(typeof d!="string"&&!Array.isArray(d)&&d)){if(Array.isArray(d))u.push(...d);else{const m=typeof d=="string"?d:e1(o);u.push(m)}if(t.bails)return{errors:u}}}return{errors:u}}const n=Object.assign(Object.assign({},t),{rules:XP(t.rules)}),r=[],i=Object.keys(n.rules),s=i.length;for(let o=0;o<s;o++){const a=i[o],c=await Zz(n,e,{name:a,params:n.rules[a]});if(c.error&&(r.push(c.error),t.bails))return{errors:r}}return{errors:r}}function Xz(t){return!!t&&t.name==="ValidationError"}function ZP(t){return{__type:"VVTypedSchema",async parse(n){var r;try{return{output:await t.validate(n,{abortEarly:!1}),errors:[]}}catch(i){if(!Xz(i))throw i;if(!(!((r=i.inner)===null||r===void 0)&&r.length)&&i.errors.length)return{errors:[{path:i.path,errors:i.errors}]};const s=i.inner.reduce((o,a)=>{const c=a.path||"";return o[c]||(o[c]={errors:[],path:c}),o[c].errors.push(...a.errors),o},{});return{errors:Object.values(s)}}}}}async function Jz(t,e){const r=await(ji(e)?e:ZP(e)).parse(t),i=[];for(const s of r.errors)s.errors.length&&i.push(...s.errors);return{errors:i}}async function Zz(t,e,n){const r=xz(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=e3(n.params,t.formData),s={field:t.label||t.name,name:t.name,label:t.label,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},o=await r(e,i,s);return typeof o=="string"?{error:o}:{error:o?void 0:e1(s)}}function e1(t){const e=yi().generateMessage;return e?e(t):"Field is invalid"}function e3(t,e){const n=r=>kp(r)?r(e):r;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((r,i)=>(r[i]=n(t[i]),r),{})}async function t3(t,e){const r=await(ji(t)?t:ZP(t)).parse(Ye(e)),i={},s={};for(const o of r.errors){const a=o.errors,c=(o.path||"").replace(/\["(\d+)"\]/g,(u,l)=>`[${l}]`);i[c]={valid:!a.length,errors:a},a.length&&(s[c]=a[0])}return{valid:!r.errors.length,results:i,errors:s,values:r.value}}async function n3(t,e,n){const i=Vn(t).map(async u=>{var l,h,d;const f=(l=n==null?void 0:n.names)===null||l===void 0?void 0:l[u],m=await JP(In(e,u),t[u],{name:(f==null?void 0:f.name)||u,label:f==null?void 0:f.label,values:e,bails:(d=(h=n==null?void 0:n.bailsMap)===null||h===void 0?void 0:h[u])!==null&&d!==void 0?d:!0});return Object.assign(Object.assign({},m),{path:u})});let s=!0;const o=await Promise.all(i),a={},c={};for(const u of o)a[u.path]={valid:u.valid,errors:u.errors},u.valid||(s=!1,c[u.path]=u.errors[0]);return{valid:s,results:a,errors:c}}let Pb=0;function r3(t,e){const{value:n,initialValue:r,setInitialValue:i}=i3(t,e.modelValue,e.form);if(!e.form){let d=function(f){var m;"value"in f&&(n.value=f.value),"errors"in f&&u(f.errors),"touched"in f&&(h.touched=(m=f.touched)!==null&&m!==void 0?m:h.touched),"initialValue"in f&&i(f.initialValue)};const{errors:c,setErrors:u}=a3(),l=Pb>=Number.MAX_SAFE_INTEGER?0:++Pb,h=o3(n,r,c);return{id:l,path:t,value:n,initialValue:r,meta:h,flags:{pendingUnmount:{[l]:!1},pendingReset:!1},errors:c,setState:d}}const s=e.form.createPathState(t,{bails:e.bails,label:e.label,type:e.type,validate:e.validate}),o=de(()=>s.errors);function a(c){var u,l,h;"value"in c&&(n.value=c.value),"errors"in c&&((u=e.form)===null||u===void 0||u.setFieldError(Te(t),c.errors)),"touched"in c&&((l=e.form)===null||l===void 0||l.setFieldTouched(Te(t),(h=c.touched)!==null&&h!==void 0?h:!1)),"initialValue"in c&&i(c.initialValue)}return{id:Array.isArray(s.id)?s.id[s.id.length-1]:s.id,path:t,value:n,errors:o,meta:s,initialValue:r,flags:s.__flags,setState:a}}function i3(t,e,n){const r=Pt(Te(e));function i(){return n?In(n.initialValues.value,Te(t),Te(r)):Te(r)}function s(u){if(!n){r.value=u;return}n.stageInitialValue(Te(t),u,!0)}const o=de(i);if(!n)return{value:Pt(i()),initialValue:o,setInitialValue:s};const a=s3(e,n,o,t);return n.stageInitialValue(Te(t),a,!0),{value:de({get(){return In(n.values,Te(t))},set(u){n.setFieldValue(Te(t),u,!1)}}),initialValue:o,setInitialValue:s}}function s3(t,e,n,r){return Qe(t)?Te(t):t!==void 0?t:In(e.values,Te(r),Te(n))}function o3(t,e,n){const r=br({touched:!1,pending:!1,valid:!0,validated:!!Te(n).length,initialValue:de(()=>Te(e)),dirty:de(()=>!pn(Te(t),Te(e)))});return An(n,i=>{r.valid=!i.length},{immediate:!0,flush:"sync"}),r}function a3(){const t=Pt([]);return{errors:t,setErrors:e=>{t.value=Op(e)}}}function c3(t,e,n){return Yu(n==null?void 0:n.type)?l3(t,e,n):t1(t,e,n)}function t1(t,e,n){const{initialValue:r,validateOnMount:i,bails:s,type:o,checkedValue:a,label:c,validateOnValueUpdate:u,uncheckedValue:l,controlled:h,keepValueOnUnmount:d,syncVModel:f,form:m}=u3(n),_=h?QP(lf):void 0,p=m||_,v=de(()=>oc(ut(t))),w=de(()=>{if(ut(p==null?void 0:p.schema))return;const ue=Te(e);return Mh(ue)||ji(ue)||Gt(ue)||Array.isArray(ue)?ue:XP(ue)}),{id:R,value:T,initialValue:k,meta:x,setState:W,errors:O,flags:U}=r3(v,{modelValue:r,form:p,bails:s,label:c,type:o,validate:w.value?$e:void 0}),te=de(()=>O.value[0]);f&&h3({value:T,prop:f,handleChange:ne,shouldValidate:()=>u&&!U.pendingReset});const Pe=(ie,ue=!1)=>{x.touched=!0,ue&&ge()};async function Y(ie){var ue,S;return p!=null&&p.validateSchema?(ue=(await p.validateSchema(ie)).results[ut(v)])!==null&&ue!==void 0?ue:{valid:!0,errors:[]}:w.value?JP(T.value,w.value,{name:ut(v),label:ut(c),values:(S=p==null?void 0:p.values)!==null&&S!==void 0?S:{},bails:s}):{valid:!0,errors:[]}}const ge=xp(async()=>(x.pending=!0,x.validated=!0,Y("validated-only")),ie=>{if(!U.pendingUnmount[ft.id])return W({errors:ie.errors}),x.pending=!1,x.valid=ie.valid,ie}),Be=xp(async()=>Y("silent"),ie=>(x.valid=ie.valid,ie));function $e(ie){return(ie==null?void 0:ie.mode)==="silent"?Be():ge()}function ne(ie,ue=!0){const S=Lh(ie);rn(S,ue)}vu(()=>{if(i)return ge();(!p||!p.validateSchema)&&Be()});function Ae(ie){x.touched=ie}function me(ie){var ue;const S=ie&&"value"in ie?ie.value:k.value;W({value:Ye(S),initialValue:Ye(S),touched:(ue=ie==null?void 0:ie.touched)!==null&&ue!==void 0?ue:!1,errors:(ie==null?void 0:ie.errors)||[]}),x.pending=!1,x.validated=!1,Be()}const vt=fa();function rn(ie,ue=!0){T.value=vt&&f?Bz(ie,vt.props.modelModifiers):ie,(ue?ge:Be)()}function sn(ie){W({errors:Array.isArray(ie)?ie:[ie]})}const jt=de({get(){return T.value},set(ie){rn(ie,u)}}),ft={id:R,name:v,label:c,value:jt,meta:x,errors:O,errorMessage:te,type:o,checkedValue:a,uncheckedValue:l,bails:s,keepValueOnUnmount:d,resetField:me,handleReset:()=>me(),validate:$e,handleChange:ne,handleBlur:Pe,setState:W,setTouched:Ae,setErrors:sn,setValue:rn};if(Oo(Nz,ft),Qe(e)&&typeof Te(e)!="function"&&An(e,(ie,ue)=>{pn(ie,ue)||(x.validated?ge():Be())},{deep:!0}),!p)return ft;const tr=de(()=>{const ie=w.value;return!ie||Gt(ie)||Mh(ie)||ji(ie)||Array.isArray(ie)?{}:Object.keys(ie).reduce((ue,S)=>{const B=Hz(ie[S]).map(q=>q.__locatorRef).reduce((q,ee)=>{const Re=In(p.values,ee)||p.values[ee];return Re!==void 0&&(q[ee]=Re),q},{});return Object.assign(ue,B),ue},{})});return An(tr,(ie,ue)=>{if(!Object.keys(ie).length)return;!pn(ie,ue)&&(x.validated?ge():Be())}),Yp(()=>{var ie;const ue=(ie=ut(ft.keepValueOnUnmount))!==null&&ie!==void 0?ie:ut(p.keepValuesOnUnmount),S=ut(v);if(ue||!p||U.pendingUnmount[ft.id]){p==null||p.removePathState(S,R);return}U.pendingUnmount[ft.id]=!0;const B=p.getPathState(S);if(Array.isArray(B==null?void 0:B.id)&&(B!=null&&B.multiple)?B!=null&&B.id.includes(ft.id):(B==null?void 0:B.id)===ft.id){if(B!=null&&B.multiple&&Array.isArray(B.value)){const ee=B.value.findIndex(Re=>pn(Re,ut(ft.checkedValue)));if(ee>-1){const Re=[...B.value];Re.splice(ee,1),p.setFieldValue(S,Re)}Array.isArray(B.id)&&B.id.splice(B.id.indexOf(ft.id),1)}else p.unsetPathValue(ut(v));p.removePathState(S,R)}}),ft}function u3(t){const e=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),n=!!(t!=null&&t.syncVModel),r=typeof(t==null?void 0:t.syncVModel)=="string"?t.syncVModel:(t==null?void 0:t.modelPropName)||"modelValue",i=n&&!("initialValue"in(t||{}))?Dp(fa(),r):t==null?void 0:t.initialValue;if(!t)return Object.assign(Object.assign({},e()),{initialValue:i});const s="valueProp"in t?t.valueProp:t.checkedValue,o="standalone"in t?!t.standalone:t.controlled,a=(t==null?void 0:t.modelPropName)||(t==null?void 0:t.syncVModel)||!1;return Object.assign(Object.assign(Object.assign({},e()),t||{}),{initialValue:i,controlled:o??!0,checkedValue:s,syncVModel:a})}function l3(t,e,n){const r=n!=null&&n.standalone?void 0:QP(lf),i=n==null?void 0:n.checkedValue,s=n==null?void 0:n.uncheckedValue;function o(a){const c=a.handleChange,u=de(()=>{const h=ut(a.value),d=ut(i);return Array.isArray(h)?h.findIndex(f=>pn(f,d))>=0:pn(d,h)});function l(h,d=!0){var f,m;if(u.value===((f=h==null?void 0:h.target)===null||f===void 0?void 0:f.checked)){d&&a.validate();return}const _=ut(t),p=r==null?void 0:r.getPathState(_),v=Lh(h);let w=(m=ut(i))!==null&&m!==void 0?m:v;r&&(p!=null&&p.multiple)&&p.type==="checkbox"?w=Ab(In(r.values,_)||[],w,void 0):(n==null?void 0:n.type)==="checkbox"&&(w=Ab(ut(a.value),w,ut(s))),c(w,d)}return Object.assign(Object.assign({},a),{checked:u,checkedValue:i,uncheckedValue:s,handleChange:l})}return o(t1(t,e,n))}function h3({prop:t,value:e,handleChange:n,shouldValidate:r}){const i=fa();if(!i||!t)return;const s=typeof t=="string"?t:"modelValue",o=`update:${s}`;s in i.props&&(An(e,a=>{pn(a,Dp(i,s))||i.emit(o,a)}),An(()=>Dp(i,s),a=>{if(a===Vh&&e.value===void 0)return;const c=a===Vh?void 0:a;pn(c,e.value)||n(c,r())}))}function Dp(t,e){if(t)return t.props[e]}const d3=qi({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>yi().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:Vh},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(t,e){const n=pi(t,"rules"),r=pi(t,"name"),i=pi(t,"label"),s=pi(t,"uncheckedValue"),o=pi(t,"keepValue"),{errors:a,value:c,errorMessage:u,validate:l,handleChange:h,handleBlur:d,setTouched:f,resetField:m,handleReset:_,meta:p,checked:v,setErrors:w}=c3(r,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:m3(t,e),checkedValue:e.attrs.value,uncheckedValue:s,label:i,validateOnValueUpdate:t.validateOnModelUpdate,keepValueOnUnmount:o,syncVModel:!0}),R=function(U,te=!0){h(U,te)},T=de(()=>{const{validateOnInput:O,validateOnChange:U,validateOnBlur:te,validateOnModelUpdate:Pe}=f3(t);function Y(ne){d(ne,te),Gt(e.attrs.onBlur)&&e.attrs.onBlur(ne)}function ge(ne){R(ne,O),Gt(e.attrs.onInput)&&e.attrs.onInput(ne)}function Be(ne){R(ne,U),Gt(e.attrs.onChange)&&e.attrs.onChange(ne)}const $e={name:t.name,onBlur:Y,onInput:ge,onChange:Be};return $e["onUpdate:modelValue"]=ne=>R(ne,Pe),$e}),k=de(()=>{const O=Object.assign({},T.value);Yu(e.attrs.type)&&v&&(O.checked=v.value);const U=Cb(t,e);return Uz(U,e.attrs)&&(O.value=c.value),O}),x=de(()=>Object.assign(Object.assign({},T.value),{modelValue:c.value}));function W(){return{field:k.value,componentField:x.value,value:c.value,meta:p,errors:a.value,errorMessage:u.value,validate:l,resetField:m,handleChange:R,handleInput:O=>R(O,!1),handleReset:_,handleBlur:T.value.onBlur,setTouched:f,setErrors:w}}return e.expose({setErrors:w,setTouched:f,reset:m,validate:l,handleChange:h}),()=>{const O=Jp(Cb(t,e)),U=Ey(O,e,W);return O?Os(O,Object.assign(Object.assign({},e.attrs),k.value),U):U}}});function Cb(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function f3(t){var e,n,r,i;const{validateOnInput:s,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:c}=yi();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:s,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(r=t.validateOnBlur)!==null&&r!==void 0?r:a,validateOnModelUpdate:(i=t.validateOnModelUpdate)!==null&&i!==void 0?i:c}}function m3(t,e){return Yu(e.attrs.type)?bb(t,"modelValue")?t.modelValue:void 0:bb(t,"modelValue")?t.modelValue:e.attrs.value}const p3=d3;let g3=0;const Ka=["bails","fieldsCount","id","multiple","type","validate"];function n1(t){const e=Te(t==null?void 0:t.initialValues)||{},n=Te(t==null?void 0:t.validationSchema);return n&&ji(n)&&Gt(n.cast)?Ye(n.cast(e)||{}):Ye(e)}function _3(t){var e;const n=g3++;let r=0;const i=Pt(!1),s=Pt(!1),o=Pt(0),a=[],c=br(n1(t)),u=Pt([]),l=Pt({}),h=Pt({}),d=$z(()=>{h.value=u.value.reduce((b,I)=>(b[oc(ut(I.path))]=I,b),{})});function f(b,I){const D=ne(b);if(!D){typeof b=="string"&&(l.value[oc(b)]=Op(I));return}if(typeof b=="string"){const X=oc(b);l.value[X]&&delete l.value[X]}D.errors=Op(I),D.valid=!D.errors.length}function m(b){Vn(b).forEach(I=>{f(I,b[I])})}t!=null&&t.initialErrors&&m(t.initialErrors);const _=de(()=>{const b=u.value.reduce((I,D)=>(D.errors.length&&(I[D.path]=D.errors),I),{});return Object.assign(Object.assign({},l.value),b)}),p=de(()=>Vn(_.value).reduce((b,I)=>{const D=_.value[I];return D!=null&&D.length&&(b[I]=D[0]),b},{})),v=de(()=>u.value.reduce((b,I)=>(b[I.path]={name:I.path||"",label:I.label||""},b),{})),w=de(()=>u.value.reduce((b,I)=>{var D;return b[I.path]=(D=I.bails)!==null&&D!==void 0?D:!0,b},{})),R=Object.assign({},(t==null?void 0:t.initialErrors)||{}),T=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:k,originalInitialValues:x,setInitialValues:W}=v3(u,c,t),O=y3(u,c,x,p),U=de(()=>u.value.reduce((b,I)=>{const D=In(c,I.path);return os(b,I.path,D),b},{})),te=t==null?void 0:t.validationSchema;function Pe(b,I){var D,X;const we=de(()=>In(k.value,ut(b))),ye=h.value[ut(b)];if(ye){((I==null?void 0:I.type)==="checkbox"||(I==null?void 0:I.type)==="radio")&&(ye.multiple=!0);const Sn=r++;return Array.isArray(ye.id)?ye.id.push(Sn):ye.id=[ye.id,Sn],ye.fieldsCount++,ye.__flags.pendingUnmount[Sn]=!1,ye}const De=de(()=>In(c,ut(b))),ke=ut(b),Se=r++,je=br({id:Se,path:b,touched:!1,pending:!1,valid:!0,validated:!!(!((D=R[ke])===null||D===void 0)&&D.length),initialValue:we,errors:tE([]),bails:(X=I==null?void 0:I.bails)!==null&&X!==void 0?X:!1,label:I==null?void 0:I.label,type:(I==null?void 0:I.type)||"default",value:De,multiple:!1,__flags:{pendingUnmount:{[Se]:!1},pendingReset:!1},fieldsCount:1,validate:I==null?void 0:I.validate,dirty:de(()=>!pn(Te(De),Te(we)))});return u.value.push(je),h.value[ke]=je,d(),p.value[ke]&&!R[ke]&&rr(()=>{z(ke,{mode:"silent"})}),Qe(b)&&An(b,Sn=>{d();const xa=Ye(De.value);h.value[Sn]=je,rr(()=>{os(c,Sn,xa)})}),je}const Y=Rb(le,5),ge=Rb(le,5),Be=xp(async b=>await b==="silent"?Y():ge(),(b,[I])=>{const D=Vn(ue.errorBag.value);return[...new Set([...Vn(b.results),...u.value.map(we=>we.path),...D])].sort().reduce((we,ye)=>{const De=ye,ke=ne(De)||Ae(De),Se=(b.results[De]||{errors:[]}).errors,je={errors:Se,valid:!Se.length};return we.results[De]=je,je.valid||(we.errors[De]=je.errors[0]),ke&&l.value[De]&&delete l.value[De],ke?(ke.valid=je.valid,I==="silent"||I==="validated-only"&&!ke.validated||f(ke,je.errors),we):(f(De,Se),we)},{valid:b.valid,results:{},errors:{}})});function $e(b){u.value.forEach(b)}function ne(b){const I=typeof b=="string"?oc(b):b;return typeof I=="string"?h.value[I]:I}function Ae(b){return u.value.filter(D=>b.startsWith(D.path)).reduce((D,X)=>D?X.path.length>D.path.length?X:D:X,void 0)}let me=[],vt;function rn(b){return me.push(b),vt||(vt=rr(()=>{[...me].sort().reverse().forEach(D=>{Tb(c,D)}),me=[],vt=null})),vt}function sn(b){return function(D,X){return function(ye){return ye instanceof Event&&(ye.preventDefault(),ye.stopPropagation()),$e(De=>De.touched=!0),i.value=!0,o.value++,$().then(De=>{const ke=Ye(c);if(De.valid&&typeof D=="function"){const Se=Ye(U.value);let je=b?Se:ke;return De.values&&(je=De.values),D(je,{evt:ye,controlledValues:Se,setErrors:m,setFieldError:f,setTouched:N,setFieldTouched:g,setValues:q,setFieldValue:S,resetForm:Q,resetField:L})}!De.valid&&typeof X=="function"&&X({values:ke,evt:ye,errors:De.errors,results:De.results})}).then(De=>(i.value=!1,De),De=>{throw i.value=!1,De})}}}const ft=sn(!1);ft.withControlled=sn(!0);function tr(b,I){const D=u.value.findIndex(we=>we.path===b),X=u.value[D];if(!(D===-1||!X)){if(rr(()=>{z(b,{mode:"silent",warn:!1})}),X.multiple&&X.fieldsCount&&X.fieldsCount--,Array.isArray(X.id)){const we=X.id.indexOf(I);we>=0&&X.id.splice(we,1),delete X.__flags.pendingUnmount[I]}(!X.multiple||X.fieldsCount<=0)&&(u.value.splice(D,1),F(b),d(),delete h.value[b])}}function ie(b){return $e(I=>{I.path.startsWith(b)&&Vn(I.__flags.pendingUnmount).forEach(D=>{I.__flags.pendingUnmount[D]=!0})})}const ue={formId:n,values:c,controlledValues:U,errorBag:_,errors:p,schema:te,submitCount:o,meta:O,isSubmitting:i,isValidating:s,fieldArrays:a,keepValuesOnUnmount:T,validateSchema:Te(te)?Be:void 0,validate:$,setFieldError:f,validateField:z,setFieldValue:S,setValues:q,setErrors:m,setFieldTouched:g,setTouched:N,resetForm:Q,resetField:L,handleSubmit:ft,stageInitialValue:he,unsetInitialValue:F,setFieldInitialValue:re,useFieldModel:Re,createPathState:Pe,getPathState:ne,unsetPathValue:rn,removePathState:tr,initialValues:k,getAllPathStates:()=>u.value,markForUnmount:ie,isFieldTouched:y,isFieldDirty:E,isFieldValid:C};function S(b,I,D=!0){const X=Ye(I),we=typeof b=="string"?b:b.path;ne(we)||Pe(we),os(c,we,X),D&&z(we)}function B(b,I=!0){Vn(c).forEach(D=>{delete c[D]}),Vn(b).forEach(D=>{S(D,b[D],!1)}),I&&$()}function q(b,I=!0){Dh(c,b),a.forEach(D=>D&&D.reset()),I&&$()}function ee(b){const I=ne(Te(b))||Pe(b);return de({get(){return I.value},set(D){const X=Te(b);S(X,D,!1),I.validated=!0,I.pending=!0,z(X).then(()=>{I.pending=!1})}})}function Re(b){return Array.isArray(b)?b.map(ee):ee(b)}function g(b,I){const D=ne(b);D&&(D.touched=I)}function y(b){var I;return!!(!((I=ne(b))===null||I===void 0)&&I.touched)}function E(b){var I;return!!(!((I=ne(b))===null||I===void 0)&&I.dirty)}function C(b){var I;return!!(!((I=ne(b))===null||I===void 0)&&I.valid)}function N(b){if(typeof b=="boolean"){$e(I=>{I.touched=b});return}Vn(b).forEach(I=>{g(I,!!b[I])})}function L(b,I){var D;const X=I&&"value"in I?I.value:In(k.value,b),we=ne(b);we&&(we.__flags.pendingReset=!0),re(b,Ye(X)),S(b,X,!1),g(b,(D=I==null?void 0:I.touched)!==null&&D!==void 0?D:!1),f(b,(I==null?void 0:I.errors)||[]),rr(()=>{we&&(we.__flags.pendingReset=!1)})}function Q(b,I){let D=b!=null&&b.values?b.values:x.value;D=ji(te)&&Gt(te.cast)?te.cast(D):D,W(D),$e(X=>{var we;X.__flags.pendingReset=!0,X.validated=!1,X.touched=((we=b==null?void 0:b.touched)===null||we===void 0?void 0:we[X.path])||!1,S(X.path,In(D,X.path),!1),f(X.path,void 0)}),I!=null&&I.force?B(D,!1):q(D,!1),m((b==null?void 0:b.errors)||{}),o.value=(b==null?void 0:b.submitCount)||0,rr(()=>{$({mode:"silent"}),$e(X=>{X.__flags.pendingReset=!1})})}async function $(b){const I=(b==null?void 0:b.mode)||"force";if(I==="force"&&$e(ye=>ye.validated=!0),ue.validateSchema)return ue.validateSchema(I);s.value=!0;const D=await Promise.all(u.value.map(ye=>ye.validate?ye.validate(b).then(De=>({key:ye.path,valid:De.valid,errors:De.errors})):Promise.resolve({key:ye.path,valid:!0,errors:[]})));s.value=!1;const X={},we={};for(const ye of D)X[ye.key]={valid:ye.valid,errors:ye.errors},ye.errors.length&&(we[ye.key]=ye.errors[0]);return{valid:D.every(ye=>ye.valid),results:X,errors:we}}async function z(b,I){var D;const X=ne(b);if(X&&(I==null?void 0:I.mode)!=="silent"&&(X.validated=!0),te){const{results:we}=await Be((I==null?void 0:I.mode)||"validated-only");return we[b]||{errors:[],valid:!0}}return X!=null&&X.validate?X.validate(I):(!X&&(D=I==null?void 0:I.warn),Promise.resolve({errors:[],valid:!0}))}function F(b){Tb(k.value,b)}function he(b,I,D=!1){re(b,I),os(c,b,I),D&&!(t!=null&&t.initialValues)&&os(x.value,b,Ye(I))}function re(b,I){os(k.value,b,Ye(I))}async function le(){const b=Te(te);if(!b)return{valid:!0,results:{},errors:{}};s.value=!0;const I=Mh(b)||ji(b)?await t3(b,c):await n3(b,c,{names:v.value,bailsMap:w.value});return s.value=!1,I}const _e=ft((b,{evt:I})=>{KP(I)&&I.target.submit()});vu(()=>{if(t!=null&&t.initialErrors&&m(t.initialErrors),t!=null&&t.initialTouched&&N(t.initialTouched),t!=null&&t.validateOnMount){$();return}ue.validateSchema&&ue.validateSchema("silent")}),Qe(te)&&An(te,()=>{var b;(b=ue.validateSchema)===null||b===void 0||b.call(ue,"validated-only")}),Oo(lf,ue);function Ce(b,I){const D=ne(ut(b))||Pe(b),X=()=>Gt(I)?I(Ga(D,Ka)):I||{};function we(){var ke;D.touched=!0,((ke=X().validateOnBlur)!==null&&ke!==void 0?ke:yi().validateOnBlur)&&z(D.path)}function ye(ke){var Se;const je=(Se=X().validateOnModelUpdate)!==null&&Se!==void 0?Se:yi().validateOnModelUpdate;S(D.path,ke,je)}return de(()=>{if(Gt(I)){const je=I(D),Sn=je.model||"modelValue";return Object.assign({onBlur:we,[Sn]:D.value,[`onUpdate:${Sn}`]:ye},je.props||{})}const ke=(I==null?void 0:I.model)||"modelValue",Se={onBlur:we,[ke]:D.value,[`onUpdate:${ke}`]:ye};return I!=null&&I.mapProps?Object.assign(Object.assign({},Se),I.mapProps(Ga(D,Ka))):Se})}function Ge(b,I){const D=ne(ut(b))||Pe(b),X=()=>Gt(I)?I(Ga(D,Ka)):I||{};function we(){var Se;D.touched=!0,((Se=X().validateOnBlur)!==null&&Se!==void 0?Se:yi().validateOnBlur)&&z(D.path)}function ye(Se){var je;const Sn=Lh(Se),xa=(je=X().validateOnInput)!==null&&je!==void 0?je:yi().validateOnInput;S(D.path,Sn,xa)}function De(Se){var je;const Sn=Lh(Se),xa=(je=X().validateOnChange)!==null&&je!==void 0?je:yi().validateOnChange;S(D.path,Sn,xa)}return de(()=>{const Se={value:D.value,onChange:De,onInput:ye,onBlur:we};return Gt(I)?Object.assign(Object.assign({},Se),I(Ga(D,Ka)).attrs||{}):I!=null&&I.mapAttrs?Object.assign(Object.assign({},Se),I.mapAttrs(Ga(D,Ka))):Se})}return Object.assign(Object.assign({},ue),{values:Wp(c),handleReset:()=>Q(),submitForm:_e,defineComponentBinds:Ce,defineInputBinds:Ge})}function y3(t,e,n,r){const i={touched:"some",pending:"some",valid:"every"},s=de(()=>!pn(e,Te(n)));function o(){const c=t.value;return Vn(i).reduce((u,l)=>{const h=i[l];return u[l]=c[h](d=>d[l]),u},{})}const a=br(o());return aC(()=>{const c=o();a.touched=c.touched,a.valid=c.valid,a.pending=c.pending}),de(()=>Object.assign(Object.assign({initialValues:Te(n)},a),{valid:a.valid&&!Vn(r.value).length,dirty:s.value}))}function v3(t,e,n){const r=n1(n),i=n==null?void 0:n.initialValues,s=Pt(r),o=Pt(Ye(r));function a(c,u=!1){s.value=Dh(Ye(s.value)||{},Ye(c)),o.value=Dh(Ye(o.value)||{},Ye(c)),u&&t.value.forEach(l=>{if(l.touched)return;const d=In(s.value,l.path);os(e,l.path,Ye(d))})}return Qe(i)&&An(i,c=>{c&&a(c,!0)},{deep:!0}),{initialValues:s,originalInitialValues:o,setInitialValues:a}}const w3=qi({name:"Form",inheritAttrs:!1,props:{as:{type:null,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(t,e){const n=pi(t,"initialValues"),r=pi(t,"validationSchema"),i=pi(t,"keepValues"),{errors:s,errorBag:o,values:a,meta:c,isSubmitting:u,isValidating:l,submitCount:h,controlledValues:d,validate:f,validateField:m,handleReset:_,resetForm:p,handleSubmit:v,setErrors:w,setFieldError:R,setFieldValue:T,setValues:k,setFieldTouched:x,setTouched:W,resetField:O}=_3({validationSchema:r.value?r:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount,keepValuesOnUnmount:i}),U=v((Ae,{evt:me})=>{KP(me)&&me.target.submit()},t.onInvalidSubmit),te=t.onSubmit?v(t.onSubmit,t.onInvalidSubmit):U;function Pe(Ae){Iy(Ae)&&Ae.preventDefault(),_(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function Y(Ae,me){return v(typeof Ae=="function"&&!me?Ae:me,t.onInvalidSubmit)(Ae)}function ge(){return Ye(a)}function Be(){return Ye(c.value)}function $e(){return Ye(s.value)}function ne(){return{meta:c.value,errors:s.value,errorBag:o.value,values:a,isSubmitting:u.value,isValidating:l.value,submitCount:h.value,controlledValues:d.value,validate:f,validateField:m,handleSubmit:Y,handleReset:_,submitForm:U,setErrors:w,setFieldError:R,setFieldValue:T,setValues:k,setFieldTouched:x,setTouched:W,resetForm:p,resetField:O,getValues:ge,getMeta:Be,getErrors:$e}}return e.expose({setFieldError:R,setErrors:w,setFieldValue:T,setValues:k,setFieldTouched:x,setTouched:W,resetForm:p,validate:f,validateField:m,resetField:O,getValues:ge,getMeta:Be,getErrors:$e}),function(){const me=t.as==="form"?t.as:t.as?Jp(t.as):null,vt=Ey(me,e,ne);return me?Os(me,Object.assign(Object.assign(Object.assign({},me==="form"?{novalidate:!0}:{}),e.attrs),{onSubmit:te,onReset:Pe}),vt):vt}}}),I3=w3,b3=qi({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=dn(lf,void 0),r=de(()=>n==null?void 0:n.errors.value[t.name]);function i(){return{message:r.value}}return()=>{if(!r.value)return;const s=t.as?Jp(t.as):t.as,o=Ey(s,e,i),a=Object.assign({role:"alert"},e.attrs);return!s&&(Array.isArray(o)||!o)&&(o!=null&&o.length)?o:(Array.isArray(o)||!o)&&!(o!=null&&o.length)?Os(s||"span",a,r.value):Os(s,a,o)}}}),E3=b3;/**
  * vee-validate v4.11.8
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function T3(t,e){return Array.isArray(t)?t[0]:t[e]}function r1(t){return!!(t==null||t===""||Array.isArray(t)&&t.length===0)}const A3=t=>{if(r1(t))return!0;const e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(t)?t.every(n=>e.test(String(n))):e.test(String(t))};function R3(t){return t==null}function S3(t){return Array.isArray(t)&&t.length===0}const i1=(t,e)=>{if(r1(t))return!0;const n=T3(e,"length");return Array.isArray(t)?t.every(r=>i1(r,{length:n})):[...String(t)].length>=Number(n)},P3=t=>R3(t)||S3(t)||t===!1?!1:!!String(t).trim().length;/**
  * vee-validate v4.11.8
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function kb(t){return typeof t=="function"}function C3(t){return typeof t=="object"&&t!==null}function k3(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function x3(t){if(!C3(t)||k3(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function s1(t,e){return Object.keys(e).forEach(n=>{if(x3(e[n])){t[n]||(t[n]={}),s1(t[n],e[n]);return}t[n]=e[n]}),t}function xb(t,e){return t.replace(/(\d:)?{([^}]+)}/g,function(n,r,i){if(!r||!e.params)return i in e?e[i]:e.params&&i in e.params?e.params[i]:`{${i}}`;if(!Array.isArray(e.params))return i in e.params?e.params[i]:`{${i}}`;const s=Number(r.replace(":",""));return s in e.params?e.params[s]:`${r}{${i}}`})}class O3{constructor(e,n){this.container={},this.locale=e,this.merge(n)}resolve(e){return this.format(this.locale,e)}getLocaleDefault(e,n){var r,i,s,o,a;return((s=(i=(r=this.container[e])===null||r===void 0?void 0:r.fields)===null||i===void 0?void 0:i[n])===null||s===void 0?void 0:s._default)||((a=(o=this.container[e])===null||o===void 0?void 0:o.messages)===null||a===void 0?void 0:a._default)}resolveLabel(e,n,r){var i,s,o,a;return r?((s=(i=this.container[e])===null||i===void 0?void 0:i.names)===null||s===void 0?void 0:s[r])||r:((a=(o=this.container[e])===null||o===void 0?void 0:o.names)===null||a===void 0?void 0:a[n])||n}format(e,n){var r,i,s,o,a;let c;const{rule:u,form:l,label:h,name:d}=n,f=this.resolveLabel(e,d,h);return u?(c=((s=(i=(r=this.container[e])===null||r===void 0?void 0:r.fields)===null||i===void 0?void 0:i[d])===null||s===void 0?void 0:s[u.name])||((a=(o=this.container[e])===null||o===void 0?void 0:o.messages)===null||a===void 0?void 0:a[u.name]),c||(c=this.getLocaleDefault(e,d)||`${f} is not valid`),kb(c)?c(n):xb(c,Object.assign(Object.assign({},l),{field:f,params:u.params}))):(c=this.getLocaleDefault(e,d)||`${f} is not valid`,kb(c)?c(n):xb(c,Object.assign(Object.assign({},l),{field:f})))}merge(e){s1(this.container,e)}}let go;function N3(t,e){go||(go=new O3("en",{}));const n=r=>go.resolve(r);return typeof t=="string"?(go.locale=t,e&&go.merge({[t]:e}),n):(go.merge(t),n)}const D3=t=>{Sl("required",P3),Sl("email",A3),Sl("min",i1),Sl("unique",async(e,n)=>{const[r,i]=n;return(await pe.firestore().collection(r).where(i,"==",e.toLowerCase()).get()).empty}),Qz({generateMessage:N3("en",{messages:{required:"{field} is required",email:"{field} must be a valid email",min:"{field} must be 0:{min} characters long",unique:"{field} is already taken"}})}),t.component("VForm",I3),t.component("ErrorMessage",E3),t.component("VField",p3)},V3={apiKey:"AIzaSyAr_cyVfZVQ3T-WQTKtir9RgyTc5mbcVCk",authDomain:"thread-forum.firebaseapp.com",projectId:"thread-forum",storageBucket:"thread-forum.appspot.com",messagingSenderId:"1032469506718",appId:"1:1032469506718:web:d9baafd80a09af1de1a98f"};pe.initializeApp(V3);const Ji=Vk(z9);Ji.use(Fk());Ji.use(B5);Ji.use(j5);Ji.use(ez);Ji.use(Rz);Ji.use(D3);Ji.use(dP);Ji.mount("#app");export{lv as A,ac as B,Te as C,ev as D,L3 as E,zt as F,lE as G,hE as H,v9 as I,U3 as J,Ph as K,aP as L,uq as M,nf as N,Dj as O,lP as P,Vq as Q,nW as R,cP as S,gq as T,oy as U,HI as V,ic as W,zC as X,M3 as Y,m9 as _,Dt as a,u9 as b,Mn as c,Oe as d,cs as e,oP as f,Mt as g,st as h,Pt as i,br as j,de as k,or as l,F3 as m,rs as n,qe as o,I9 as p,fu as q,IE as r,B3 as s,Bp as t,$o as u,Yx as v,Cr as w,vu as x,An as y,Fi as z};
