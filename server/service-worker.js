const CACHE_NAME = "simple-test-cache-v1";
const urlsToCache = ["/"];

self.addEventListener("install", event => {
    // console.log('Yeah....')
    const preLoaded = caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    event.waitUntil(preLoaded);
});

self.addEventListener("fetch", event => {
    const response = caches.match(event.request)
        .then(match => match || fetch(event.request));
    event.respondWith(response);
});