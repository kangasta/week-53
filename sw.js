if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let l={};const c=e=>n(e,r),d={module:{uri:r},exports:l,require:c};i[r]=Promise.all(o.map((e=>d[e]||c(e)))).then((e=>(s(...e),l)))}}define(["./workbox-59d6897f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"build/bundle.css",revision:"2750eb9880357ba47630e550c4a6a0fa"},{url:"build/bundle.js",revision:"2deb5ee8abe810839853c85562f77716"},{url:"favicon.png",revision:"531e6f5c84a8025412cdcf89d908b427"},{url:"global.css",revision:"a524359c7a85ab4549ac30e78df8c498"},{url:"index.html",revision:"39163e1beb827a2c695503bd0069835a"},{url:"logo-128.png",revision:"8b82861e02a2de63d2cc4e5f2cf6e401"},{url:"logo-192.png",revision:"fb0935828c5e8e09df2389b1b58ae8ad"},{url:"logo-256.png",revision:"ee5cf03160e74d9d06e12fa2558d655c"},{url:"logo-512.png",revision:"472e6e35725a8060f0caaeba40c0045b"},{url:"manifest.json",revision:"5d37d6815440e95082805ce1b79d4096"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("https://kangasta.github.io/week-53/index.html")))}));
//# sourceMappingURL=sw.js.map
