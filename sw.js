/* MEDIQ 2.1: cache only public, same-origin application assets. */
const CACHE="mediq-shell-2.1";
const ASSETS=["./","./index.html","./styles.css","./curriculum.js","./app.js","./pwa.js","./manifest.webmanifest","./assets/icon-192.svg","./assets/icon-512.svg"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith("mediq-shell-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{
 const req=event.request,u=new URL(req.url);
 if(req.method!=="GET"||u.origin!==self.location.origin||!u.href.startsWith(self.registration.scope))return;
 if(req.mode==="navigate"){
  event.respondWith(fetch(req).catch(()=>caches.match(new URL("./index.html",self.registration.scope).href)));return;
 }
 if(!ASSETS.some(p=>new URL(p,self.registration.scope).href===u.href))return;
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req)));
});
