var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function u(t,e,n){t.$$.on_destroy.push(a(e,n))}function i(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r,o,c,s){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,c);if(a){const o=l(e,n,r,s);t.p(o,a)}}function d(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function w(){return y("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e,n){t.classList[n?"add":"remove"](e)}let N;function _(t){N=t}function D(){if(!N)throw new Error("Function called outside component initialization");return N}function M(t){D().$$.on_mount.push(t)}function E(t,e){D().$$.context.set(t,e)}function S(t){return D().$$.context.get(t)}const T=[],A=[],C=[],I=[],O=Promise.resolve();let j=!1;function L(t){C.push(t)}let R=!1;const P=new Set;function B(){if(!R){R=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];_(e),F(e.$$)}for(_(null),T.length=0;A.length;)A.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];P.has(e)||(P.add(e),e())}C.length=0}while(T.length);for(;I.length;)I.pop()();j=!1,R=!1,P.clear()}}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const U=new Set;let W;function Y(){W={r:0,c:[],p:W}}function K(){W.r||o(W.c),W=W.p}function J(t,e){t&&t.i&&(U.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),W.c.push((()=>{U.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function G(t,e){z(t,1,1,(()=>{e.delete(t.key)}))}function H(t,e,n,r,o,c,s,a,u,i,l,f){let d=t.length,p=c.length,$=d;const h={};for(;$--;)h[t[$].key]=$;const m=[],g=new Map,y=new Map;for($=p;$--;){const t=f(o,c,$),a=n(t);let u=s.get(a);u?r&&u.p(t,e):(u=i(a,t),u.c()),g.set(a,m[$]=u),a in h&&y.set(a,Math.abs($-h[a]))}const b=new Set,w=new Set;function v(t){J(t,1),t.m(a,l),s.set(t.key,t),l=t.first,p--}for(;d&&p;){const e=m[p-1],n=t[d-1],r=e.key,o=n.key;e===n?(l=e.first,d--,p--):g.has(o)?!s.has(r)||b.has(r)?v(e):w.has(o)?d--:y.get(r)>y.get(o)?(w.add(r),v(e)):(b.add(o),d--):(u(n,s),d--)}for(;d--;){const e=t[d];g.has(e.key)||u(e,s)}for(;p;)v(m[p-1]);return m}function q(t,e){const n={},r={},o={$$scope:1};let c=t.length;for(;c--;){const s=t[c],a=e[c];if(a){for(const t in s)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[c]=a}else for(const t in s)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function Q(t){t&&t.c()}function X(t,e,r){const{fragment:s,on_mount:a,on_destroy:u,after_update:i}=t.$$;s&&s.m(e,r),L((()=>{const e=a.map(n).filter(c);u?u.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(L)}function Z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(T.push(t),j||(j=!0,O.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,c,s,a,u,i=[-1]){const l=N;_(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:i,skip_bound:!1};let p=!1;if(d.ctx=c?c(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&tt(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&J(e.$$.fragment),X(e,n.target,n.anchor),B()}_(l)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt=[];function ot(e,n=t){let r;const o=[];function c(t){if(s(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,a=t){const u=[s,a];return o.push(u),1===o.length&&(r=n(c)||t),s(e),()=>{const t=o.indexOf(u);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function ct(e,n,r){const s=!Array.isArray(e),u=s?[e]:e,i=n.length<2;return{subscribe:ot(r,(e=>{let r=!1;const l=[];let f=0,d=t;const p=()=>{if(f)return;d();const r=n(s?l[0]:l,e);i?e(r):d=c(r)?r:t},$=u.map(((t,e)=>a(t,(t=>{l[e]=t,f&=~(1<<e),r&&p()}),(()=>{f|=1<<e}))));return r=!0,p(),function(){o($),d()}})).subscribe}}const st={},at={};function ut(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const it=function(t,e){const n=[];let r=ut(t);return{get location(){return r},listen(e){n.push(e);const o=()=>{r=ut(t),e({location:r,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const r=n.indexOf(e);n.splice(r,1)}},navigate(e,{state:o,replace:c=!1}={}){o={...o,key:Date.now()+""};try{c?t.history.replaceState(o,null,e):t.history.pushState(o,null,e)}catch(n){t.location[c?"replace":"assign"](e)}r=ut(t),n.forEach((t=>t({location:r,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(t,o,c){const[s,a=""]=c.split("?");e++,n.push({pathname:s,search:a}),r.push(t)},replaceState(t,o,c){const[s,a=""]=c.split("?");n[e]={pathname:s,search:a},r[e]=t}}}}()),{navigate:lt}=it,ft=/^:(.+)/;function dt(t){return"*"===t[0]}function pt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function $t(t){return t.replace(/(^\/+|\/+$)/g,"")}function ht(t,e){return{route:t,score:t.default?0:pt(t.path).reduce(((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return ft.test(t)}(e)?dt(e)?t-=5:t+=3:t+=2:t+=1,t)),0),index:e}}function mt(t,e){let n,r;const[o]=e.split("?"),c=pt(o),s=""===c[0],a=function(t){return t.map(ht).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,o=a.length;t<o;t++){const o=a[t].route;let u=!1;if(o.default){r={route:o,params:{},uri:e};continue}const i=pt(o.path),l={},f=Math.max(c.length,i.length);let d=0;for(;d<f;d++){const t=i[d],e=c[d];if(void 0!==t&&dt(t)){l["*"===t?"*":t.slice(1)]=c.slice(d).map(decodeURIComponent).join("/");break}if(void 0===e){u=!0;break}let n=ft.exec(t);if(n&&!s){const t=decodeURIComponent(e);l[n[1]]=t}else if(t!==e){u=!0;break}}if(!u){n={route:o,params:l,uri:"/"+c.slice(0,d).join("/")};break}}return n||r||null}function gt(t,e){return $t("/"===e?t:`${$t(t)}/${$t(e)}`)+"/"}function yt(t){let e;const n=t[6].default,r=i(n,t,t[5],null);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&32&e&&f(r,n,t,t[5],e,null,null)},i(t){e||(J(r,t),e=!0)},o(t){z(r,t),e=!1},d(t){r&&r.d(t)}}}function bt(t,e,n){let r,o,c,{$$slots:s={},$$scope:a}=e,{basepath:i="/"}=e,{url:l=null}=e;const f=S(st),d=S(at),p=ot([]);u(t,p,(t=>n(10,c=t)));const $=ot(null);let h=!1;const m=f||ot(l?{pathname:l}:it.location);u(t,m,(t=>n(9,o=t)));const g=d?d.routerBase:ot({path:i,uri:i});u(t,g,(t=>n(8,r=t)));const y=ct([g,$],(([t,e])=>{if(null===e)return t;const{path:n}=t,{route:r,uri:o}=e;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:o}}));return f||(M((()=>it.listen((t=>{m.set(t.location)})))),E(st,m)),E(at,{activeRoute:$,base:g,routerBase:y,registerRoute:function(t){const{path:e}=r;let{path:n}=t;if(t._path=n,t.path=gt(e,n),"undefined"==typeof window){if(h)return;const e=function(t,e){return mt([t],e)}(t,o.pathname);e&&($.set(e),h=!0)}else p.update((e=>(e.push(t),e)))},unregisterRoute:function(t){p.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e}))}}),t.$$set=t=>{"basepath"in t&&n(3,i=t.basepath),"url"in t&&n(4,l=t.url),"$$scope"in t&&n(5,a=t.$$scope)},t.$$.update=()=>{if(256&t.$$.dirty){const{path:t}=r;p.update((e=>(e.forEach((e=>e.path=gt(t,e._path))),e)))}if(1536&t.$$.dirty){const t=mt(c,o.pathname);$.set(t)}},[p,m,g,i,l,a,s]}class wt extends nt{constructor(t){super(),et(this,t,bt,yt,s,{basepath:3,url:4})}}const vt=t=>({params:2&t,location:16&t}),xt=t=>({params:t[1],location:t[4]});function kt(t){let e,n,r,o;const c=[_t,Nt],s=[];function a(t,e){return null!==t[0]?0:1}return e=a(t),n=s[e]=c[e](t),{c(){n.c(),r=w()},m(t,n){s[e].m(t,n),$(t,r,n),o=!0},p(t,o){let u=e;e=a(t),e===u?s[e].p(t,o):(Y(),z(s[u],1,1,(()=>{s[u]=null})),K(),n=s[e],n||(n=s[e]=c[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){o||(J(n),o=!0)},o(t){z(n),o=!1},d(t){s[e].d(t),t&&h(r)}}}function Nt(t){let e;const n=t[10].default,r=i(n,t,t[9],xt);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&530&e&&f(r,n,t,t[9],e,vt,xt)},i(t){e||(J(r,t),e=!0)},o(t){z(r,t),e=!1},d(t){r&&r.d(t)}}}function _t(t){let n,r,o;const c=[{location:t[4]},t[1],t[2]];var s=t[0];function a(t){let n={};for(let t=0;t<c.length;t+=1)n=e(n,c[t]);return{props:n}}return s&&(n=new s(a())),{c(){n&&Q(n.$$.fragment),r=w()},m(t,e){n&&X(n,t,e),$(t,r,e),o=!0},p(t,e){const o=22&e?q(c,[16&e&&{location:t[4]},2&e&&V(t[1]),4&e&&V(t[2])]):{};if(s!==(s=t[0])){if(n){Y();const t=n;z(t.$$.fragment,1,0,(()=>{Z(t,1)})),K()}s?(n=new s(a()),Q(n.$$.fragment),J(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else s&&n.$set(o)},i(t){o||(n&&J(n.$$.fragment,t),o=!0)},o(t){n&&z(n.$$.fragment,t),o=!1},d(t){t&&h(r),n&&Z(n,t)}}}function Dt(t){let e,n,r=null!==t[3]&&t[3].route===t[7]&&kt(t);return{c(){r&&r.c(),e=w()},m(t,o){r&&r.m(t,o),$(t,e,o),n=!0},p(t,[n]){null!==t[3]&&t[3].route===t[7]?r?(r.p(t,n),8&n&&J(r,1)):(r=kt(t),r.c(),J(r,1),r.m(e.parentNode,e)):r&&(Y(),z(r,1,1,(()=>{r=null})),K())},i(t){n||(J(r),n=!0)},o(t){z(r),n=!1},d(t){r&&r.d(t),t&&h(e)}}}function Mt(t,n,r){let o,c,{$$slots:s={},$$scope:a}=n,{path:i=""}=n,{component:l=null}=n;const{registerRoute:f,unregisterRoute:p,activeRoute:$}=S(at);u(t,$,(t=>r(3,o=t)));const h=S(st);u(t,h,(t=>r(4,c=t)));const m={path:i,default:""===i};let g={},y={};var b;return f(m),"undefined"!=typeof window&&(b=()=>{p(m)},D().$$.on_destroy.push(b)),t.$$set=t=>{r(13,n=e(e({},n),d(t))),"path"in t&&r(8,i=t.path),"component"in t&&r(0,l=t.component),"$$scope"in t&&r(9,a=t.$$scope)},t.$$.update=()=>{8&t.$$.dirty&&o&&o.route===m&&r(1,g=o.params);{const{path:t,component:e,...o}=n;r(2,y=o)}},n=d(n),[l,g,y,o,c,$,h,m,i,a,s]}class Et extends nt{constructor(t){super(),et(this,t,Mt,Dt,s,{path:8,component:0})}}function St(t){function e(t){const e=t.currentTarget;""===e.target&&function(t){const e=location.host;return t.host==e||0===t.href.indexOf("https://"+e)||0===t.href.indexOf("http://"+e)}(e)&&function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)&&(t.preventDefault(),lt(e.pathname+e.search,{replace:e.hasAttribute("replace")}))}return t.addEventListener("click",e),{destroy(){t.removeEventListener("click",e)}}}const Tt=864e5,At=6048e5,Ct=t=>t.getDate()+3-(t.getDay()+6)%7,It=t=>{const e=new Date(t,0,4);return e.setDate(Ct(e)),e},Ot=(t,e)=>{const n=new Date(It(t).getTime()+(e-1)*At),r=(o=n,new Date(o.getFullYear(),o.getMonth(),o.getDate()-(o.getDay()+6)%7));var o;return[...Array(7)].map(((t,e)=>new Date(r.getTime()+e*Tt)))},jt=t=>Lt(new Date(t,11,28)),Lt=t=>{const e=t?new Date(t):new Date;e.setHours(0,0,0,0),e.setDate(Ct(e));const n=It(e.getFullYear());return 1+Math.round((e.getTime()-n.getTime())/At)},Rt=t=>{const e=t?new Date(t):new Date;return e.setDate(Ct(e)),e.getFullYear()},Pt=t=>{const e=new Date;return["getDate","getMonth","getFullYear"].every((n=>e[n]()===t[n]()))},Bt=t=>{var e;try{const n=null!==(e={isProd:!0,PUBLIC_URL:"https://kangasta.github.io/week-53",COMMIT:"a1593a25e5f49413e53865073a5333f8ea565619",TAG:""}[t])&&void 0!==e?e:"";return String(n)}catch(t){return""}},Ft=t=>t.endsWith("/")?t.slice(0,-1):t,Ut=()=>{const t=Bt("PUBLIC_URL"),e=t.match(/\:\/\/[^/]+(.*)/);return Ft(e?e[1]:t)},Wt=t=>`${t.startsWith("/")?Ut():""}${t}`,Yt=(t,e,n)=>{const r=Ot(t,e)[3],o=new Date(r.getTime()+n*At);return`/${Rt(o)}/${Lt(o)}`},Kt=(t,e=0)=>"/"+(t+e);function Jt(e){let n,r,o,c=(e[1]||e[0])&&function(e){let n;return{c(){n=g("span"),n.textContent=`Version: ${e[0]}  ${e[1]}`,v(n,"class","svelte-jarg65")},m(t,e){$(t,n,e)},p:t,d(t){t&&h(n)}}}(e);return{c(){n=g("footer"),r=g("a"),r.textContent="Source code",o=b(),c&&c.c(),v(r,"href","https://github.com/kangasta/week-53.git"),v(r,"target","_blank"),v(r,"class","svelte-jarg65"),v(n,"class","svelte-jarg65")},m(t,e){$(t,n,e),p(n,r),p(n,o),c&&c.m(n,null)},p(t,[e]){(t[1]||t[0])&&c.p(t,e)},i:t,o:t,d(t){t&&h(n),c&&c.d()}}}function zt(t){return[Bt("TAG"),Bt("COMMIT").slice(0,8)]}class Gt extends nt{constructor(t){super(),et(this,t,zt,Jt,s,{})}}function Ht(e){let n;return{c(){n=g("p"),n.textContent="Redirecting to current week..."},m(t,e){$(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function qt(t){const e=Lt(),n=Rt();return M((()=>{var t,r;t=`/${n}/${e}`,r={replace:!0},lt(Wt(t),r)})),[]}class Vt extends nt{constructor(t){super(),et(this,t,qt,Ht,s,{})}}const Qt=["January","February","March","April","May","June","July","August","September","October","November","December"],Xt=t=>Qt[t%12],Zt=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function te(t){let e;return{c(){e=g("span"),e.textContent="Today",v(e,"class","today svelte-1us0n68")},m(t,n){$(t,e,n)},d(t){t&&h(e)}}}function ee(e){let n,r,o,c,s,a,u=Pt(e[0]),i=u&&te();return{c(){n=g("li"),r=g("b"),o=y(e[1]),c=b(),s=y(e[2]),a=b(),i&&i.c(),v(r,"class","svelte-1us0n68"),k(r,"sunday",e[3]),v(n,"class","svelte-1us0n68")},m(t,e){$(t,n,e),p(n,r),p(r,o),p(n,c),p(n,s),p(n,a),i&&i.m(n,null)},p(t,[e]){2&e&&x(o,t[1]),8&e&&k(r,"sunday",t[3]),4&e&&x(s,t[2]),1&e&&(u=Pt(t[0])),u?i||(i=te(),i.c(),i.m(n,null)):i&&(i.d(1),i=null)},i:t,o:t,d(t){t&&h(n),i&&i.d()}}}function ne(t,e,n){let r,o,c,{day:s}=e;return t.$$set=t=>{"day"in t&&n(0,s=t.day)},t.$$.update=()=>{var e;1&t.$$.dirty&&n(1,r=s.getDate()),1&t.$$.dirty&&n(2,(e=s.getDay()+6,o=Zt[e%7])),1&t.$$.dirty&&n(3,c=0===s.getDay())},[s,r,o,c]}class re extends nt{constructor(t){super(),et(this,t,ne,ee,s,{day:0})}}function oe(t,e,n){const r=t.slice();return r[2]=e[n],r}function ce(t,e){let n,r,o;return r=new re({props:{day:e[2]}}),{key:t,first:null,c(){n=w(),Q(r.$$.fragment),this.first=n},m(t,e){$(t,n,e),X(r,t,e),o=!0},p(t,e){const n={};2&e&&(n.day=t[2]),r.$set(n)},i(t){o||(J(r.$$.fragment,t),o=!0)},o(t){z(r.$$.fragment,t),o=!1},d(t){t&&h(n),Z(r,t)}}}function se(t){let e,n,r,o,c,s=Xt(t[0])+"",a=[],u=new Map,i=t[1];const l=t=>t[2].getTime();for(let e=0;e<i.length;e+=1){let n=oe(t,i,e),r=l(n);u.set(r,a[e]=ce(r,n))}return{c(){e=g("h3"),n=y(s),r=b(),o=g("ul");for(let t=0;t<a.length;t+=1)a[t].c();v(e,"class","svelte-ncb7ih"),v(o,"class","day-list svelte-ncb7ih")},m(t,s){$(t,e,s),p(e,n),$(t,r,s),$(t,o,s);for(let t=0;t<a.length;t+=1)a[t].m(o,null);c=!0},p(t,[e]){if((!c||1&e)&&s!==(s=Xt(t[0])+"")&&x(n,s),2&e){const n=t[1];Y(),a=H(a,e,l,1,t,n,u,o,G,ce,null,oe),K()}},i(t){if(!c){for(let t=0;t<i.length;t+=1)J(a[t]);c=!0}},o(t){for(let t=0;t<a.length;t+=1)z(a[t]);c=!1},d(t){t&&h(e),t&&h(r),t&&h(o);for(let t=0;t<a.length;t+=1)a[t].d()}}}function ae(t,e,n){let{monthIndex:r}=e,{days:o}=e;return t.$$set=t=>{"monthIndex"in t&&n(0,r=t.monthIndex),"days"in t&&n(1,o=t.days)},[r,o]}class ue extends nt{constructor(t){super(),et(this,t,ae,se,s,{monthIndex:0,days:1})}}function ie(t,e,n){const r=t.slice();return r[4]=e[n],r}function le(e){let n,r,o,s,a,u,i=e[4].name+"";return{c(){n=g("a"),r=y(i),v(n,"class","nav svelte-1h8wtw8"),v(n,"href",o=e[4].target)},m(e,o){var i;$(e,n,o),p(n,r),a||(i=s=St.call(null,n),u=i&&c(i.destroy)?i.destroy:t,a=!0)},p(t,e){1&e&&i!==(i=t[4].name+"")&&x(r,i),1&e&&o!==(o=t[4].target)&&v(n,"href",o)},d(t){t&&h(n),a=!1,u()}}}function fe(e){let n,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=le(ie(e,r,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=w()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);$(t,n,e)},p(t,[e]){if(1&e){let c;for(r=t[0],c=0;c<r.length;c+=1){const s=ie(t,r,c);o[c]?o[c].p(s,e):(o[c]=le(s),o[c].c(),o[c].m(n.parentNode,n))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}},i:t,o:t,d(t){m(o,t),t&&h(n)}}}function de(t,e,n){let{year:r}=e,{weekNumber:o=null}=e;const c=null!==o?Yt:(t,e,n)=>Kt(t,n);let s;return t.$$set=t=>{"year"in t&&n(1,r=t.year),"weekNumber"in t&&n(2,o=t.weekNumber)},t.$$.update=()=>{6&t.$$.dirty&&n(0,s=[{name:"Previous",target:Wt(c(r,o,-1))},{name:"Next",target:Wt(c(r,o,1))},{name:"Current week",target:Wt("/")},...null!==o?[{name:"Year",target:Wt(Kt(r))}]:[]])},[s,r,o]}class pe extends nt{constructor(t){super(),et(this,t,de,fe,s,{year:1,weekNumber:2})}}function $e(t,e,n){const r=t.slice();return r[7]=e[n],r}function he(t){let e,n;return{c(){e=g("h1"),n=y(t[0])},m(t,r){$(t,e,r),p(e,n)},p(t,e){1&e&&x(n,t[0])},d(t){t&&h(e)}}}function me(t){let n,r;const o=[t[7]];let c={};for(let t=0;t<o.length;t+=1)c=e(c,o[t]);return n=new ue({props:c}),{c(){Q(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p(t,e){const r=8&e?q(o,[V(t[7])]):{};n.$set(r)},i(t){r||(J(n.$$.fragment,t),r=!0)},o(t){z(n.$$.fragment,t),r=!1},d(t){Z(n,t)}}}function ge(t){let e;return{c(){e=g("div"),v(e,"class","whitespace svelte-1f04da4")},m(t,n){$(t,e,n)},d(t){t&&h(e)}}}function ye(t){let e,n;return e=new pe({props:{year:Number(t[0]),weekNumber:Number(t[1])}}),{c(){Q(e.$$.fragment)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.year=Number(t[0])),2&n&&(r.weekNumber=Number(t[1])),e.$set(r)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function be(t){let e,n,r,o,c,s,a,u,i,l=!t[2]&&he(t),f=t[3],d=[];for(let e=0;e<f.length;e+=1)d[e]=me($e(t,f,e));const v=t=>z(d[t],1,1,(()=>{d[t]=null}));let k=(1===t[3].length||t[2])&&ge(),N=!t[2]&&ye(t);return{c(){l&&l.c(),e=b(),n=g("h2"),r=y("Week "),o=y(t[1]),c=b();for(let t=0;t<d.length;t+=1)d[t].c();s=b(),k&&k.c(),a=b(),N&&N.c(),u=w()},m(t,f){l&&l.m(t,f),$(t,e,f),$(t,n,f),p(n,r),p(n,o),$(t,c,f);for(let e=0;e<d.length;e+=1)d[e].m(t,f);$(t,s,f),k&&k.m(t,f),$(t,a,f),N&&N.m(t,f),$(t,u,f),i=!0},p(t,[n]){if(t[2]?l&&(l.d(1),l=null):l?l.p(t,n):(l=he(t),l.c(),l.m(e.parentNode,e)),(!i||2&n)&&x(o,t[1]),8&n){let e;for(f=t[3],e=0;e<f.length;e+=1){const r=$e(t,f,e);d[e]?(d[e].p(r,n),J(d[e],1)):(d[e]=me(r),d[e].c(),J(d[e],1),d[e].m(s.parentNode,s))}for(Y(),e=f.length;e<d.length;e+=1)v(e);K()}1===t[3].length||t[2]?k||(k=ge(),k.c(),k.m(a.parentNode,a)):k&&(k.d(1),k=null),t[2]?N&&(Y(),z(N,1,1,(()=>{N=null})),K()):N?(N.p(t,n),4&n&&J(N,1)):(N=ye(t),N.c(),J(N,1),N.m(u.parentNode,u))},i(t){if(!i){for(let t=0;t<f.length;t+=1)J(d[t]);J(N),i=!0}},o(t){d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)z(d[t]);z(N),i=!1},d(t){l&&l.d(t),t&&h(e),t&&h(n),t&&h(c),m(d,t),t&&h(s),k&&k.d(t),t&&h(a),N&&N.d(t),t&&h(u)}}}function we(t,e,n){var r,o;let c,s,{year:a}=e,{weekNumber:u}=e,{disableNavigation:i=!1}=e;return t.$$set=t=>{"year"in t&&n(0,a=t.year),"weekNumber"in t&&n(1,u=t.weekNumber),"disableNavigation"in t&&n(2,i=t.disableNavigation)},t.$$.update=()=>{3&t.$$.dirty&&n(6,c=((t,e)=>{const n=Ot(t,e),r={};return n.forEach((t=>{const e=t.getMonth();r[e]||(r[e]=[]),r[e].push(t)})),r})(Number(a),Number(u))),64&t.$$.dirty&&n(3,s=Object.entries(c).map((([t,e])=>({monthIndex:Number(t),days:e})))),63&t.$$.dirty&&(i||(document.title=`Week ${u} of ${a}`),0===(null===n(4,r=s[0])||void 0===r?void 0:r.monthIndex)&&11===(null===n(5,o=s[1])||void 0===o?void 0:o.monthIndex)&&s.reverse())},[a,u,i,s]}class ve extends nt{constructor(t){super(),et(this,t,we,be,s,{year:0,weekNumber:1,disableNavigation:2})}}function xe(t,e,n){const r=t.slice();return r[2]=e[n],r}function ke(t,e){let n,r,o;return r=new ve({props:{year:e[0],weekNumber:String(e[2]),disableNavigation:!0}}),{key:t,first:null,c(){n=w(),Q(r.$$.fragment),this.first=n},m(t,e){$(t,n,e),X(r,t,e),o=!0},p(t,e){const n={};1&e&&(n.year=t[0]),2&e&&(n.weekNumber=String(t[2])),r.$set(n)},i(t){o||(J(r.$$.fragment,t),o=!0)},o(t){z(r.$$.fragment,t),o=!1},d(t){t&&h(n),Z(r,t)}}}function Ne(t){let e,n,r,o,c,s,a=[],u=new Map,i=t[1];const l=t=>`${t[0]}-W${t[2]}`;for(let e=0;e<i.length;e+=1){let n=xe(t,i,e),r=l(n);u.set(r,a[e]=ke(r,n))}return c=new pe({props:{year:Number(t[0])}}),{c(){e=g("h1"),n=y(t[0]),r=b();for(let t=0;t<a.length;t+=1)a[t].c();o=b(),Q(c.$$.fragment)},m(t,u){$(t,e,u),p(e,n),$(t,r,u);for(let e=0;e<a.length;e+=1)a[e].m(t,u);$(t,o,u),X(c,t,u),s=!0},p(t,[e]){if((!s||1&e)&&x(n,t[0]),3&e){const n=t[1];Y(),a=H(a,e,l,1,t,n,u,o.parentNode,G,ke,o,xe),K()}const r={};1&e&&(r.year=Number(t[0])),c.$set(r)},i(t){if(!s){for(let t=0;t<i.length;t+=1)J(a[t]);J(c.$$.fragment,t),s=!0}},o(t){for(let t=0;t<a.length;t+=1)z(a[t]);z(c.$$.fragment,t),s=!1},d(t){t&&h(e),t&&h(r);for(let e=0;e<a.length;e+=1)a[e].d(t);t&&h(o),Z(c,t)}}}function _e(t,e,n){let r,{year:o}=e;return t.$$set=t=>{"year"in t&&n(0,o=t.year)},t.$$.update=()=>{1&t.$$.dirty&&n(1,r=[...Array(jt(Number(o)))].map(((t,e)=>e+1))),1&t.$$.dirty&&(document.title="Weeks of "+o)},[o,r]}class De extends nt{constructor(t){super(),et(this,t,_e,Ne,s,{year:0})}}function Me(e){let n,r,o,c,s,a;return n=new Et({props:{path:":year/:weekNumber",component:ve}}),o=new Et({props:{path:":year",component:De}}),s=new Et({props:{component:Vt}}),{c(){Q(n.$$.fragment),r=b(),Q(o.$$.fragment),c=b(),Q(s.$$.fragment)},m(t,e){X(n,t,e),$(t,r,e),X(o,t,e),$(t,c,e),X(s,t,e),a=!0},p:t,i(t){a||(J(n.$$.fragment,t),J(o.$$.fragment,t),J(s.$$.fragment,t),a=!0)},o(t){z(n.$$.fragment,t),z(o.$$.fragment,t),z(s.$$.fragment,t),a=!1},d(t){Z(n,t),t&&h(r),Z(o,t),t&&h(c),Z(s,t)}}}function Ee(t){let e,n,r,o,c;return n=new wt({props:{basepath:t[0],$$slots:{default:[Me]},$$scope:{ctx:t}}}),o=new Gt({}),{c(){e=g("main"),Q(n.$$.fragment),r=b(),Q(o.$$.fragment),v(e,"class","svelte-z63iab")},m(t,s){$(t,e,s),X(n,e,null),$(t,r,s),X(o,t,s),c=!0},p(t,[e]){const r={};1&e&&(r.basepath=t[0]),2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){c||(J(n.$$.fragment,t),J(o.$$.fragment,t),c=!0)},o(t){z(n.$$.fragment,t),z(o.$$.fragment,t),c=!1},d(t){t&&h(e),Z(n),t&&h(r),Z(o,t)}}}function Se(t,e,n){let{basepath:r=Ut()}=e;return t.$$set=t=>{"basepath"in t&&n(0,r=t.basepath)},[r]}return new class extends nt{constructor(t){super(),et(this,t,Se,Ee,s,{basepath:0})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map