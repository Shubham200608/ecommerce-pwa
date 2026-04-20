const CACHE_NAME = "ecommerce-cache-v1";

const urlsToCache = [
  "/ecommerce-pwa/",
  "/ecommerce-pwa/index.html",
  "/ecommerce-pwa/style.css",
  "/ecommerce-pwa/app.js",
  "/ecommerce-pwa/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("Caching files...");
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});