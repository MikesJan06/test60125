const CACHE_NAME = "pribehy-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./manifest.json",
  "./style.css", // Pokud máte externí CSS
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png"
];

// Instalace Service Workeru a uložení assetů do cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache se ukládá");
      return cache.addAll(ASSETS);
    })
  );
});

// Aktivace a odstranění starých cache
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Staré cache se odstraňují");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Interceptování požadavků a obsluha cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});