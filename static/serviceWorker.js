const CACHE_INMUTABLE_NOMBRE = "cache-inmutable-v3";
const CACHE_ESTATICA_NOMBRE = "cache-estatica-v5";
const CACHE_DINAMICA_NOMBRE = "cache-dinamica-v3";
const CACHE_INMUTABLE_ARCHIVOS = [
  "/lib/css/icons.css",
  "/lib/css/material.indigo-pink.min.css",
  "/lib/js/handlebars.min.js",
  "/lib/css/icons.woff2",
  "/lib/js/material.min.js",
];
const CACHE_ESTATICA_ARCHIVOS = [
  "/",
  "/index.html",
  "/serviceWorker.js",
  "/resources/css/estilos.css",
  "/resources/js/main.js",
  "/manifest.json",
  "/resources/images/icons/icon-144x144.png",
];

self.addEventListener("install", (e) => {
  console.log("SW Instalado");

  // Creación de la caché inmutable
  const pCacheInm = caches
    .open(CACHE_INMUTABLE_NOMBRE)
    .then((cache) => cache.addAll(CACHE_INMUTABLE_ARCHIVOS));

  // Creación de la caché estática
  const pCacheEst = caches
    .open(CACHE_ESTATICA_NOMBRE)
    .then((cache) => cache.addAll(CACHE_ESTATICA_ARCHIVOS));

  console.log("NUEVO SW");

  // waitUntil() para resolver ambas promesas
  e.waitUntil(Promise.all([pCacheInm, pCacheEst]));
});

self.addEventListener("activate", (e) => {
  console.log("SW Actualización");

  let whiteList = [
    CACHE_INMUTABLE_NOMBRE,
    CACHE_ESTATICA_NOMBRE,
    CACHE_DINAMICA_NOMBRE,
  ];

  caches.keys().then((nombresCache) => {
    return Promise.all(
      nombresCache.map((nombre) => {
        if (whiteList.indexOf(nombre) === -1) {
          return caches.delete(nombre);
        }
      })
    );
  });
});

self.addEventListener("fetch", (e) => {
  const respuesta = caches.match(e.request).then((res) => {
    if (res) {
      console.log("ENCONTRADO: ", e.request.url);
      return res;
    } else {
      console.log("NO ENCONTRADO:", e.request.url);
      return fetch(e.request).then((online_res) => {
        caches.open(CACHE_DINAMICA_NOMBRE).then((cache) => {
          cache.put(e.request, online_res);
        });
        return online_res.clone();
      });
    }
  });

  e.respondWith(respuesta);
});

self.addEventListener("push", (event) => {
  const data = event.data.json();
  console.log(data);
  self.registration.showNotification(data.title, data.options);
});
