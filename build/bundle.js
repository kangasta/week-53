var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function a(t,e,n){t.$$.on_destroy.push(u(e,n))}function i(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r,o,c,s){const u=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,c);if(u){const o=l(e,n,r,s);t.p(o,u)}}function d(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function w(){return y("")}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,n){t.classList[n?"add":"remove"](e)}let N;function _(t){N=t}function D(){if(!N)throw new Error("Function called outside component initialization");return N}function M(t){D().$$.on_mount.push(t)}function E(t,e){D().$$.context.set(t,e)}function T(t){return D().$$.context.get(t)}const S=[],C=[],I=[],O=[],A=Promise.resolve();let B=!1;function W(t){I.push(t)}let L=!1;const R=new Set;function Y(){if(!L){L=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];_(e),P(e.$$)}for(_(null),S.length=0;C.length;)C.pop()();for(let t=0;t<I.length;t+=1){const e=I[t];R.has(e)||(R.add(e),e())}I.length=0}while(S.length);for(;O.length;)O.pop()();B=!1,L=!1,R.clear()}}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}const j=new Set;let F;function U(){F={r:0,c:[],p:F}}function z(){F.r||o(F.c),F=F.p}function K(t,e){t&&t.i&&(j.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),F.c.push((()=>{j.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function H(t,e){J(t,1,1,(()=>{e.delete(t.key)}))}function q(t,e,n,r,o,c,s,u,a,i,l,f){let d=t.length,p=c.length,$=d;const m={};for(;$--;)m[t[$].key]=$;const h=[],g=new Map,y=new Map;for($=p;$--;){const t=f(o,c,$),u=n(t);let a=s.get(u);a?r&&a.p(t,e):(a=i(u,t),a.c()),g.set(u,h[$]=a),u in m&&y.set(u,Math.abs($-m[u]))}const b=new Set,w=new Set;function k(t){K(t,1),t.m(u,l),s.set(t.key,t),l=t.first,p--}for(;d&&p;){const e=h[p-1],n=t[d-1],r=e.key,o=n.key;e===n?(l=e.first,d--,p--):g.has(o)?!s.has(r)||b.has(r)?k(e):w.has(o)?d--:y.get(r)>y.get(o)?(w.add(r),k(e)):(b.add(o),d--):(a(n,s),d--)}for(;d--;){const e=t[d];g.has(e.key)||a(e,s)}for(;p;)k(h[p-1]);return h}function G(t,e){const n={},r={},o={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=e[c];if(u){for(const t in s)t in u||(r[t]=1);for(const t in u)o[t]||(n[t]=u[t],o[t]=1);t[c]=u}else for(const t in s)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function V(t){return"object"==typeof t&&null!==t?t:{}}function Q(t){t&&t.c()}function X(t,e,r){const{fragment:s,on_mount:u,on_destroy:a,after_update:i}=t.$$;s&&s.m(e,r),W((()=>{const e=u.map(n).filter(c);a?a.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(W)}function Z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(S.push(t),B||(B=!0,A.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,c,s,u,a,i=[-1]){const l=N;_(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:i,skip_bound:!1};let p=!1;if(d.ctx=c?c(e,f,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&u(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&tt(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&K(e.$$.fragment),X(e,n.target,n.anchor),Y()}_(l)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt=[];function ot(e,n=t){let r;const o=[];function c(t){if(s(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,u=t){const a=[s,u];return o.push(a),1===o.length&&(r=n(c)||t),s(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function ct(e,n,r){const s=!Array.isArray(e),a=s?[e]:e,i=n.length<2;return{subscribe:ot(r,(e=>{let r=!1;const l=[];let f=0,d=t;const p=()=>{if(f)return;d();const r=n(s?l[0]:l,e);i?e(r):d=c(r)?r:t},$=a.map(((t,e)=>u(t,(t=>{l[e]=t,f&=~(1<<e),r&&p()}),(()=>{f|=1<<e}))));return r=!0,p(),function(){o($),d()}})).subscribe}}const st={},ut={};function at(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const it=function(t,e){const n=[];let r=at(t);return{get location(){return r},listen(e){n.push(e);const o=()=>{r=at(t),e({location:r,action:"POP"})};return t.addEventListener("popstate",o),()=>{t.removeEventListener("popstate",o);const r=n.indexOf(e);n.splice(r,1)}},navigate(e,{state:o,replace:c=!1}={}){o={...o,key:Date.now()+""};try{c?t.history.replaceState(o,null,e):t.history.pushState(o,null,e)}catch(n){t.location[c?"replace":"assign"](e)}r=at(t),n.forEach((t=>t({location:r,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState(t,o,c){const[s,u=""]=c.split("?");e++,n.push({pathname:s,search:u}),r.push(t)},replaceState(t,o,c){const[s,u=""]=c.split("?");n[e]={pathname:s,search:u},r[e]=t}}}}()),{navigate:lt}=it,ft=/^:(.+)/;function dt(t){return"*"===t[0]}function pt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function $t(t){return t.replace(/(^\/+|\/+$)/g,"")}function mt(t,e){return{route:t,score:t.default?0:pt(t.path).reduce(((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return ft.test(t)}(e)?dt(e)?t-=5:t+=3:t+=2:t+=1,t)),0),index:e}}function ht(t,e){let n,r;const[o]=e.split("?"),c=pt(o),s=""===c[0],u=function(t){return t.map(mt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,o=u.length;t<o;t++){const o=u[t].route;let a=!1;if(o.default){r={route:o,params:{},uri:e};continue}const i=pt(o.path),l={},f=Math.max(c.length,i.length);let d=0;for(;d<f;d++){const t=i[d],e=c[d];if(void 0!==t&&dt(t)){l["*"===t?"*":t.slice(1)]=c.slice(d).map(decodeURIComponent).join("/");break}if(void 0===e){a=!0;break}let n=ft.exec(t);if(n&&!s){const t=decodeURIComponent(e);l[n[1]]=t}else if(t!==e){a=!0;break}}if(!a){n={route:o,params:l,uri:"/"+c.slice(0,d).join("/")};break}}return n||r||null}function gt(t,e){return $t("/"===e?t:`${$t(t)}/${$t(e)}`)+"/"}function yt(t){let e;const n=t[6].default,r=i(n,t,t[5],null);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&32&e&&f(r,n,t,t[5],e,null,null)},i(t){e||(K(r,t),e=!0)},o(t){J(r,t),e=!1},d(t){r&&r.d(t)}}}function bt(t,e,n){let r,o,c,{$$slots:s={},$$scope:u}=e,{basepath:i="/"}=e,{url:l=null}=e;const f=T(st),d=T(ut),p=ot([]);a(t,p,(t=>n(10,c=t)));const $=ot(null);let m=!1;const h=f||ot(l?{pathname:l}:it.location);a(t,h,(t=>n(9,o=t)));const g=d?d.routerBase:ot({path:i,uri:i});a(t,g,(t=>n(8,r=t)));const y=ct([g,$],(([t,e])=>{if(null===e)return t;const{path:n}=t,{route:r,uri:o}=e;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:o}}));return f||(M((()=>it.listen((t=>{h.set(t.location)})))),E(st,h)),E(ut,{activeRoute:$,base:g,routerBase:y,registerRoute:function(t){const{path:e}=r;let{path:n}=t;if(t._path=n,t.path=gt(e,n),"undefined"==typeof window){if(m)return;const e=function(t,e){return ht([t],e)}(t,o.pathname);e&&($.set(e),m=!0)}else p.update((e=>(e.push(t),e)))},unregisterRoute:function(t){p.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e}))}}),t.$$set=t=>{"basepath"in t&&n(3,i=t.basepath),"url"in t&&n(4,l=t.url),"$$scope"in t&&n(5,u=t.$$scope)},t.$$.update=()=>{if(256&t.$$.dirty){const{path:t}=r;p.update((e=>(e.forEach((e=>e.path=gt(t,e._path))),e)))}if(1536&t.$$.dirty){const t=ht(c,o.pathname);$.set(t)}},[p,h,g,i,l,u,s]}class wt extends nt{constructor(t){super(),et(this,t,bt,yt,s,{basepath:3,url:4})}}const kt=t=>({params:2&t,location:16&t}),vt=t=>({params:t[1],location:t[4]});function xt(t){let e,n,r,o;const c=[_t,Nt],s=[];function u(t,e){return null!==t[0]?0:1}return e=u(t),n=s[e]=c[e](t),{c(){n.c(),r=w()},m(t,n){s[e].m(t,n),$(t,r,n),o=!0},p(t,o){let a=e;e=u(t),e===a?s[e].p(t,o):(U(),J(s[a],1,1,(()=>{s[a]=null})),z(),n=s[e],n||(n=s[e]=c[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){o||(K(n),o=!0)},o(t){J(n),o=!1},d(t){s[e].d(t),t&&m(r)}}}function Nt(t){let e;const n=t[10].default,r=i(n,t,t[9],vt);return{c(){r&&r.c()},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&530&e&&f(r,n,t,t[9],e,kt,vt)},i(t){e||(K(r,t),e=!0)},o(t){J(r,t),e=!1},d(t){r&&r.d(t)}}}function _t(t){let n,r,o;const c=[{location:t[4]},t[1],t[2]];var s=t[0];function u(t){let n={};for(let t=0;t<c.length;t+=1)n=e(n,c[t]);return{props:n}}return s&&(n=new s(u())),{c(){n&&Q(n.$$.fragment),r=w()},m(t,e){n&&X(n,t,e),$(t,r,e),o=!0},p(t,e){const o=22&e?G(c,[16&e&&{location:t[4]},2&e&&V(t[1]),4&e&&V(t[2])]):{};if(s!==(s=t[0])){if(n){U();const t=n;J(t.$$.fragment,1,0,(()=>{Z(t,1)})),z()}s?(n=new s(u()),Q(n.$$.fragment),K(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else s&&n.$set(o)},i(t){o||(n&&K(n.$$.fragment,t),o=!0)},o(t){n&&J(n.$$.fragment,t),o=!1},d(t){t&&m(r),n&&Z(n,t)}}}function Dt(t){let e,n,r=null!==t[3]&&t[3].route===t[7]&&xt(t);return{c(){r&&r.c(),e=w()},m(t,o){r&&r.m(t,o),$(t,e,o),n=!0},p(t,[n]){null!==t[3]&&t[3].route===t[7]?r?(r.p(t,n),8&n&&K(r,1)):(r=xt(t),r.c(),K(r,1),r.m(e.parentNode,e)):r&&(U(),J(r,1,1,(()=>{r=null})),z())},i(t){n||(K(r),n=!0)},o(t){J(r),n=!1},d(t){r&&r.d(t),t&&m(e)}}}function Mt(t,n,r){let o,c,{$$slots:s={},$$scope:u}=n,{path:i=""}=n,{component:l=null}=n;const{registerRoute:f,unregisterRoute:p,activeRoute:$}=T(ut);a(t,$,(t=>r(3,o=t)));const m=T(st);a(t,m,(t=>r(4,c=t)));const h={path:i,default:""===i};let g={},y={};var b;return f(h),"undefined"!=typeof window&&(b=()=>{p(h)},D().$$.on_destroy.push(b)),t.$$set=t=>{r(13,n=e(e({},n),d(t))),"path"in t&&r(8,i=t.path),"component"in t&&r(0,l=t.component),"$$scope"in t&&r(9,u=t.$$scope)},t.$$.update=()=>{8&t.$$.dirty&&o&&o.route===h&&r(1,g=o.params);{const{path:t,component:e,...o}=n;r(2,y=o)}},n=d(n),[l,g,y,o,c,$,m,h,i,u,s]}class Et extends nt{constructor(t){super(),et(this,t,Mt,Dt,s,{path:8,component:0})}}function Tt(t){function e(t){const e=t.currentTarget;""===e.target&&function(t){const e=location.host;return t.host==e||0===t.href.indexOf("https://"+e)||0===t.href.indexOf("http://"+e)}(e)&&function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)&&(t.preventDefault(),lt(e.pathname+e.search,{replace:e.hasAttribute("replace")}))}return t.addEventListener("click",e),{destroy(){t.removeEventListener("click",e)}}}const St=864e5,Ct=6048e5,It=t=>t.getDate()+3-(t.getDay()+6)%7,Ot=t=>{const e=new Date(t,0,4);return e.setDate(It(e)),e},At=(t,e)=>{const n=new Date(Ot(t).getTime()+(e-1)*Ct),r=(o=n,new Date(o.getFullYear(),o.getMonth(),o.getDate()-(o.getDay()+6)%7));var o;return[...Array(7)].map(((t,e)=>new Date(r.getTime()+e*St)))},Bt=t=>Wt(new Date(t,11,28)),Wt=t=>{const e=t?new Date(t):new Date;e.setHours(0,0,0,0),e.setDate(It(e));const n=Ot(e.getFullYear());return 1+Math.round((e.getTime()-n.getTime())/Ct)},Lt=t=>{const e=t?new Date(t):new Date;return e.setDate(It(e)),e.getFullYear()},Rt=t=>{const e=new Date;return["getDate","getMonth","getFullYear"].every((n=>e[n]()===t[n]()))},Yt=t=>{var e;try{const n=null!==(e={isProd:!0,PUBLIC_URL:"https://kangasta.github.io/week-53",COMMIT:"ff1ad9f24a73b6b83cf5037a4081bf680788d256"}[t])&&void 0!==e?e:"";return String(n)}catch(t){return""}},Pt=t=>t.endsWith("/")?t.slice(0,-1):t,jt=()=>{const t=Yt("PUBLIC_URL"),e=t.match(/\:\/\/[^/]+(.*)/);return Pt(e?e[1]:t)},Ft=t=>`${t.startsWith("/")?jt():""}${t}`,Ut=(t,e,n)=>{const r=At(t,e)[3],o=new Date(r.getTime()+n*Ct);return`/${Lt(o)}/${Wt(o)}`},zt=(t,e=0)=>"/"+(t+e);function Kt(e){let n,r,o,c=(e[1]||e[0])&&function(e){let n;return{c(){n=g("span"),n.textContent=`Version: ${e[0]}  ${e[1]}`,k(n,"class","svelte-zh3wm0")},m(t,e){$(t,n,e)},p:t,d(t){t&&m(n)}}}(e);return{c(){n=g("footer"),r=g("a"),r.textContent="Source code",o=b(),c&&c.c(),k(r,"href","https://github.com/kangasta/week-53.git"),k(r,"target","_blank"),k(r,"class","svelte-zh3wm0"),k(n,"class","svelte-zh3wm0")},m(t,e){$(t,n,e),p(n,r),p(n,o),c&&c.m(n,null)},p(t,[e]){(t[1]||t[0])&&c.p(t,e)},i:t,o:t,d(t){t&&m(n),c&&c.d()}}}function Jt(t){return[Yt("TAG"),Yt("COMMIT").slice(0,8)]}class Ht extends nt{constructor(t){super(),et(this,t,Jt,Kt,s,{})}}function qt(e){let n;return{c(){n=g("p"),n.textContent="Redirecting to current week..."},m(t,e){$(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}function Gt(t){const e=Wt(),n=Lt();return M((()=>{var t,r;t=`/${n}/${e}`,r={replace:!0},lt(Ft(t),r)})),[]}class Vt extends nt{constructor(t){super(),et(this,t,Gt,qt,s,{})}}const Qt=["January","February","March","April","May","June","July","August","September","October","November","December"],Xt=t=>Qt[t%12],Zt=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function te(t){let e;return{c(){e=g("span"),e.textContent="Today",k(e,"class","today svelte-1us0n68")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function ee(e){let n,r,o,c,s,u,a=Rt(e[0]),i=a&&te();return{c(){n=g("li"),r=g("b"),o=y(e[1]),c=b(),s=y(e[2]),u=b(),i&&i.c(),k(r,"class","svelte-1us0n68"),x(r,"sunday",e[3]),k(n,"class","svelte-1us0n68")},m(t,e){$(t,n,e),p(n,r),p(r,o),p(n,c),p(n,s),p(n,u),i&&i.m(n,null)},p(t,[e]){2&e&&v(o,t[1]),8&e&&x(r,"sunday",t[3]),4&e&&v(s,t[2]),1&e&&(a=Rt(t[0])),a?i||(i=te(),i.c(),i.m(n,null)):i&&(i.d(1),i=null)},i:t,o:t,d(t){t&&m(n),i&&i.d()}}}function ne(t,e,n){let r,o,c,{day:s}=e;return t.$$set=t=>{"day"in t&&n(0,s=t.day)},t.$$.update=()=>{var e;1&t.$$.dirty&&n(1,r=s.getDate()),1&t.$$.dirty&&n(2,(e=s.getDay()+6,o=Zt[e%7])),1&t.$$.dirty&&n(3,c=0===s.getDay())},[s,r,o,c]}class re extends nt{constructor(t){super(),et(this,t,ne,ee,s,{day:0})}}function oe(t,e,n){const r=t.slice();return r[2]=e[n],r}function ce(t,e){let n,r,o;return r=new re({props:{day:e[2]}}),{key:t,first:null,c(){n=w(),Q(r.$$.fragment),this.first=n},m(t,e){$(t,n,e),X(r,t,e),o=!0},p(t,e){const n={};2&e&&(n.day=t[2]),r.$set(n)},i(t){o||(K(r.$$.fragment,t),o=!0)},o(t){J(r.$$.fragment,t),o=!1},d(t){t&&m(n),Z(r,t)}}}function se(t){let e,n,r,o,c,s=Xt(t[0])+"",u=[],a=new Map,i=t[1];const l=t=>t[2].getTime();for(let e=0;e<i.length;e+=1){let n=oe(t,i,e),r=l(n);a.set(r,u[e]=ce(r,n))}return{c(){e=g("h3"),n=y(s),r=b(),o=g("ul");for(let t=0;t<u.length;t+=1)u[t].c();k(e,"class","svelte-ncb7ih"),k(o,"class","day-list svelte-ncb7ih")},m(t,s){$(t,e,s),p(e,n),$(t,r,s),$(t,o,s);for(let t=0;t<u.length;t+=1)u[t].m(o,null);c=!0},p(t,[e]){if((!c||1&e)&&s!==(s=Xt(t[0])+"")&&v(n,s),2&e){const n=t[1];U(),u=q(u,e,l,1,t,n,a,o,H,ce,null,oe),z()}},i(t){if(!c){for(let t=0;t<i.length;t+=1)K(u[t]);c=!0}},o(t){for(let t=0;t<u.length;t+=1)J(u[t]);c=!1},d(t){t&&m(e),t&&m(r),t&&m(o);for(let t=0;t<u.length;t+=1)u[t].d()}}}function ue(t,e,n){let{monthIndex:r}=e,{days:o}=e;return t.$$set=t=>{"monthIndex"in t&&n(0,r=t.monthIndex),"days"in t&&n(1,o=t.days)},[r,o]}class ae extends nt{constructor(t){super(),et(this,t,ue,se,s,{monthIndex:0,days:1})}}function ie(t,e,n){const r=t.slice();return r[9]=e[n],r}function le(t){let e,n,r=t[3].year+"";return{c(){e=g("h1"),n=y(r)},m(t,r){$(t,e,r),p(e,n)},p(t,e){8&e&&r!==(r=t[3].year+"")&&v(n,r)},d(t){t&&m(e)}}}function fe(t){let n,r;const o=[t[9]];let c={};for(let t=0;t<o.length;t+=1)c=e(c,o[t]);return n=new ae({props:c}),{c(){Q(n.$$.fragment)},m(t,e){X(n,t,e),r=!0},p(t,e){const r=4&e?G(o,[V(t[9])]):{};n.$set(r)},i(t){r||(K(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){Z(n,t)}}}function de(t){let e;return{c(){e=g("div"),k(e,"class","whitespace svelte-1f04da4")},m(t,n){$(t,e,n)},d(t){t&&m(e)}}}function pe(t){let e,n,r,o,c,s,u,a,i,l=t[3].weekNumber+"",f=!t[0]&&le(t),d=t[2],w=[];for(let e=0;e<d.length;e+=1)w[e]=fe(ie(t,d,e));const x=t=>J(w[t],1,1,(()=>{w[t]=null}));let N=(1===t[2].length||t[1])&&de();return{c(){e=g("div"),f&&f.c(),n=b(),r=g("h2"),o=y("Week "),c=y(l),s=b();for(let t=0;t<w.length;t+=1)w[t].c();u=b(),N&&N.c(),k(e,"id",a=`week-${t[3].weekNumber}-of-${t[3].year}`)},m(t,a){$(t,e,a),f&&f.m(e,null),p(e,n),p(e,r),p(r,o),p(r,c),p(e,s);for(let t=0;t<w.length;t+=1)w[t].m(e,null);p(e,u),N&&N.m(e,null),i=!0},p(t,[r]){if(t[0]?f&&(f.d(1),f=null):f?f.p(t,r):(f=le(t),f.c(),f.m(e,n)),(!i||8&r)&&l!==(l=t[3].weekNumber+"")&&v(c,l),4&r){let n;for(d=t[2],n=0;n<d.length;n+=1){const o=ie(t,d,n);w[n]?(w[n].p(o,r),K(w[n],1)):(w[n]=fe(o),w[n].c(),K(w[n],1),w[n].m(e,u))}for(U(),n=d.length;n<w.length;n+=1)x(n);z()}1===t[2].length||t[1]?N||(N=de(),N.c(),N.m(e,null)):N&&(N.d(1),N=null),(!i||8&r&&a!==(a=`week-${t[3].weekNumber}-of-${t[3].year}`))&&k(e,"id",a)},i(t){if(!i){for(let t=0;t<d.length;t+=1)K(w[t]);i=!0}},o(t){w=w.filter(Boolean);for(let t=0;t<w.length;t+=1)J(w[t]);i=!1},d(t){t&&m(e),f&&f.d(),h(w,t),N&&N.d()}}}function $e(t,e,n){var r,o;let c,s,u,{year:a}=e,{weekNumber:i}=e,{hideYear:l=!1}=e,{forceBottomWhitespace:f=!1}=e;return t.$$set=t=>{"year"in t&&n(4,a=t.year),"weekNumber"in t&&n(5,i=t.weekNumber),"hideYear"in t&&n(0,l=t.hideYear),"forceBottomWhitespace"in t&&n(1,f=t.forceBottomWhitespace)},t.$$.update=()=>{48&t.$$.dirty&&n(8,c=((t,e)=>{const n=At(t,e),r={};return n.forEach((t=>{const e=t.getMonth();r[e]||(r[e]=[]),r[e].push(t)})),r})(a,i)),256&t.$$.dirty&&n(2,s=Object.entries(c).map((([t,e])=>({monthIndex:Number(t),days:e})))),48&t.$$.dirty&&n(3,u=((t,e)=>{const n=At(t,e);return{year:Lt(n[0]),weekNumber:Wt(n[0])}})(a,i)),196&t.$$.dirty&&0===(null===n(6,r=s[0])||void 0===r?void 0:r.monthIndex)&&11===(null===n(7,o=s[1])||void 0===o?void 0:o.monthIndex)&&s.reverse()},[l,f,s,u,a,i]}class me extends nt{constructor(t){super(),et(this,t,$e,pe,s,{year:4,weekNumber:5,hideYear:0,forceBottomWhitespace:1})}}function he(t,e,n){const r=t.slice();return r[4]=e[n],r}function ge(e){let n,r,o,s,u,a,i=e[4].name+"";return{c(){n=g("a"),r=y(i),k(n,"class","nav svelte-1h8wtw8"),k(n,"href",o=e[4].target)},m(e,o){var i;$(e,n,o),p(n,r),u||(i=s=Tt.call(null,n),a=i&&c(i.destroy)?i.destroy:t,u=!0)},p(t,e){1&e&&i!==(i=t[4].name+"")&&v(r,i),1&e&&o!==(o=t[4].target)&&k(n,"href",o)},d(t){t&&m(n),u=!1,a()}}}function ye(e){let n,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=ge(he(e,r,t));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=w()},m(t,e){for(let n=0;n<o.length;n+=1)o[n].m(t,e);$(t,n,e)},p(t,[e]){if(1&e){let c;for(r=t[0],c=0;c<r.length;c+=1){const s=he(t,r,c);o[c]?o[c].p(s,e):(o[c]=ge(s),o[c].c(),o[c].m(n.parentNode,n))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}},i:t,o:t,d(t){h(o,t),t&&m(n)}}}function be(t,e,n){let{year:r}=e,{weekNumber:o=null}=e;const c=null!==o?Ut:(t,e,n)=>zt(t,n);let s;return t.$$set=t=>{"year"in t&&n(1,r=t.year),"weekNumber"in t&&n(2,o=t.weekNumber)},t.$$.update=()=>{6&t.$$.dirty&&n(0,s=[{name:"Previous",target:Ft(c(r,o,-1))},{name:"Next",target:Ft(c(r,o,1))},{name:"Current week",target:Ft("/")},...null!==o?[{name:"Year",target:Ft(zt(r))}]:[]])},[s,r,o]}class we extends nt{constructor(t){super(),et(this,t,be,ye,s,{year:1,weekNumber:2})}}function ke(t){let e,n,r,o;return e=new me({props:{year:Number(t[0]),weekNumber:Number(t[1])}}),r=new we({props:{year:Number(t[0]),weekNumber:Number(t[1])}}),{c(){Q(e.$$.fragment),n=b(),Q(r.$$.fragment)},m(t,c){X(e,t,c),$(t,n,c),X(r,t,c),o=!0},p(t,[n]){const o={};1&n&&(o.year=Number(t[0])),2&n&&(o.weekNumber=Number(t[1])),e.$set(o);const c={};1&n&&(c.year=Number(t[0])),2&n&&(c.weekNumber=Number(t[1])),r.$set(c)},i(t){o||(K(e.$$.fragment,t),K(r.$$.fragment,t),o=!0)},o(t){J(e.$$.fragment,t),J(r.$$.fragment,t),o=!1},d(t){Z(e,t),t&&m(n),Z(r,t)}}}function ve(t,e,n){let{year:r}=e,{weekNumber:o}=e;return t.$$set=t=>{"year"in t&&n(0,r=t.year),"weekNumber"in t&&n(1,o=t.weekNumber)},t.$$.update=()=>{3&t.$$.dirty&&(document.title=`Week ${o} of ${r}`)},[r,o]}class xe extends nt{constructor(t){super(),et(this,t,ve,ke,s,{year:0,weekNumber:1})}}function Ne(t,e,n){const r=t.slice();return r[2]=e[n],r}function _e(t,e){let n,r,o;return r=new me({props:{year:Number(e[0]),weekNumber:e[2],hideYear:!0,forceBottomWhitespace:!0}}),{key:t,first:null,c(){n=w(),Q(r.$$.fragment),this.first=n},m(t,e){$(t,n,e),X(r,t,e),o=!0},p(t,e){const n={};1&e&&(n.year=Number(t[0])),2&e&&(n.weekNumber=t[2]),r.$set(n)},i(t){o||(K(r.$$.fragment,t),o=!0)},o(t){J(r.$$.fragment,t),o=!1},d(t){t&&m(n),Z(r,t)}}}function De(t){let e,n,r,o,c,s,u=[],a=new Map,i=t[1];const l=t=>`${t[0]}-W${t[2]}`;for(let e=0;e<i.length;e+=1){let n=Ne(t,i,e),r=l(n);a.set(r,u[e]=_e(r,n))}return c=new we({props:{year:Number(t[0])}}),{c(){e=g("h1"),n=y(t[0]),r=b();for(let t=0;t<u.length;t+=1)u[t].c();o=b(),Q(c.$$.fragment)},m(t,a){$(t,e,a),p(e,n),$(t,r,a);for(let e=0;e<u.length;e+=1)u[e].m(t,a);$(t,o,a),X(c,t,a),s=!0},p(t,[e]){if((!s||1&e)&&v(n,t[0]),3&e){const n=t[1];U(),u=q(u,e,l,1,t,n,a,o.parentNode,H,_e,o,Ne),z()}const r={};1&e&&(r.year=Number(t[0])),c.$set(r)},i(t){if(!s){for(let t=0;t<i.length;t+=1)K(u[t]);K(c.$$.fragment,t),s=!0}},o(t){for(let t=0;t<u.length;t+=1)J(u[t]);J(c.$$.fragment,t),s=!1},d(t){t&&m(e),t&&m(r);for(let e=0;e<u.length;e+=1)u[e].d(t);t&&m(o),Z(c,t)}}}function Me(t,e,n){let r,{year:o}=e;return t.$$set=t=>{"year"in t&&n(0,o=t.year)},t.$$.update=()=>{1&t.$$.dirty&&n(1,r=[...Array(Bt(Number(o)))].map(((t,e)=>e+1))),1&t.$$.dirty&&(document.title="Weeks of "+o)},[o,r]}class Ee extends nt{constructor(t){super(),et(this,t,Me,De,s,{year:0})}}function Te(e){let n,r,o,c,s,u;return n=new Et({props:{path:":year/:weekNumber",component:xe}}),o=new Et({props:{path:":year",component:Ee}}),s=new Et({props:{component:Vt}}),{c(){Q(n.$$.fragment),r=b(),Q(o.$$.fragment),c=b(),Q(s.$$.fragment)},m(t,e){X(n,t,e),$(t,r,e),X(o,t,e),$(t,c,e),X(s,t,e),u=!0},p:t,i(t){u||(K(n.$$.fragment,t),K(o.$$.fragment,t),K(s.$$.fragment,t),u=!0)},o(t){J(n.$$.fragment,t),J(o.$$.fragment,t),J(s.$$.fragment,t),u=!1},d(t){Z(n,t),t&&m(r),Z(o,t),t&&m(c),Z(s,t)}}}function Se(t){let e,n,r,o,c;return n=new wt({props:{basepath:t[0],$$slots:{default:[Te]},$$scope:{ctx:t}}}),o=new Ht({}),{c(){e=g("main"),Q(n.$$.fragment),r=b(),Q(o.$$.fragment),k(e,"class","svelte-z63iab")},m(t,s){$(t,e,s),X(n,e,null),$(t,r,s),X(o,t,s),c=!0},p(t,[e]){const r={};1&e&&(r.basepath=t[0]),2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){c||(K(n.$$.fragment,t),K(o.$$.fragment,t),c=!0)},o(t){J(n.$$.fragment,t),J(o.$$.fragment,t),c=!1},d(t){t&&m(e),Z(n),t&&m(r),Z(o,t)}}}function Ce(t,e,n){let{basepath:r=jt()}=e;return t.$$set=t=>{"basepath"in t&&n(0,r=t.basepath)},[r]}return new class extends nt{constructor(t){super(),et(this,t,Ce,Se,s,{basepath:0})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
