// CHANGE THIS STRING whenever you update your app to force clients to clear old caches!
const CACHE_NAME = 'mc-playmat-v9'; 

// 1. INSTALL: Cache the bare minimum needed to boot offline
self.addEventListener('install', (e) => {
    self.skipWaiting(); // Forces the browser to immediately activate the new service worker
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(['./', './manifest.json']);
        })
    );
});

// 2. ACTIVATE: Clean up any old, outdated caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Clearing Old Cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Take control of the page immediately
    );
});

// 3. FETCH: "Network First, Fallback to Cache" Strategy
self.addEventListener('fetch', (e) => {
    // We only want to handle GET requests
    if (e.request.method !== 'GET') return;

    e.respondWith(
        fetch(e.request)
            .then((networkResponse) => {
                // If the network fetch succeeds, clone the response and put it in the cache for later
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(e.request, networkResponse.clone());
                    return networkResponse;
                });
            })
            .catch(() => {
                // If the network fails (offline), pull from the cache
                console.log('Service Worker: Serving from Cache', e.request.url);
                return caches.match(e.request);
            })
    );
});
