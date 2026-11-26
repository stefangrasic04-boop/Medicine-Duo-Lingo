/* Service workers require HTTPS or localhost. Direct file opening still works without offline installation. */
if("serviceWorker" in navigator && (location.protocol==="https:"||location.hostname==="localhost"||location.hostname==="127.0.0.1")){
 window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(error=>console.warn("MEDIQ: offline cache unavailable",error)));
}
